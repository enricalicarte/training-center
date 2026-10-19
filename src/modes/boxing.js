// Boxeo de sombra: guardia, juego de pies, esquivas y combinaciones.
import { registerMode, newStance, applyStance, guardPole, V3, curve, smooth, clamp } from '../engine/pose.js';

const STRAIGHT = [[0, 0], [0.16, -0.1], [0.34, 1], [0.5, 1], [0.74, 0.05], [1, 0]];
const TWIST = [[0, 0, 0], [0.2, 0.8, 0], [0.4, 1, 0], [0.52, 1, 0], [0.78, 0.1, 0], [1, 0, 0]];
const HOOK_L = [[0, 0.12, 0.4, 0.26], [0.2, 0.4, 0.39, 0.06], [0.4, 0.05, 0.4, 0.33], [0.52, 0.05, 0.4, 0.33], [0.78, 0.12, 0.4, 0.26], [1, 0.12, 0.4, 0.26]];
const HOOK_R = [[0, -0.12, 0.38, 0.21], [0.2, -0.4, 0.39, 0.02], [0.4, -0.05, 0.4, 0.31], [0.52, -0.05, 0.4, 0.31], [0.78, -0.12, 0.38, 0.21], [1, -0.12, 0.38, 0.21]];
const UPP_L = [[0, 0.12, 0.4, 0.26], [0.22, 0.12, 0.1, 0.2], [0.44, 0.06, 0.5, 0.33], [0.58, 0.06, 0.5, 0.33], [0.82, 0.12, 0.4, 0.26], [1, 0.12, 0.4, 0.26]];
const UPP_R = [[0, -0.12, 0.38, 0.21], [0.22, -0.12, 0.08, 0.16], [0.44, -0.06, 0.5, 0.31], [0.58, -0.06, 0.5, 0.31], [0.82, -0.12, 0.38, 0.21], [1, -0.12, 0.38, 0.21]];
const UPP_BODY = [[0, 0], [0.22, 1], [0.44, -0.3], [0.6, -0.3], [0.85, 0], [1, 0]];
const SLIP = [[0, 0], [0.3, 1], [0.62, 1], [1, 0]];
const SIGN = { J: 1, C: -1, LH: 1, RH: -1, UL: 1, UR: -1 };

function slip(s, kind, u) {
  const k = curve(SLIP, u)[0];
  if (kind === 'slipL' || kind === 'slipR') {
    const r = kind === 'slipL' ? 1 : -1;
    s.hx += r * 0.13 * k; s.roll += r * 14 * k; s.py -= 0.03 * k; s.yaw += r * -8 * k; s.lean += 4 * k;
  } else if (kind === 'duck') {
    s.py -= 0.17 * k; s.lean += 28 * k; s.hd += 6 * k; s.lf[2] += 0.04 * k; s.rf[2] -= 0.02 * k;
  } else if (kind === 'cover') {
    s.py -= 0.05 * k; s.lean += 14 * k; s.hz -= 0.03 * k;
    for (const r of [1, -1]) {
      s.hand[r] = { l: [r * 0.085 * (1 - 0.3 * k) + r * 0.035 * (1 - k), 0.4 + 0.14 * k, 0.24], pole: V3(r * 0.15, -1, -0.35) };
    }
    s.hd += 8 * k;
  }
}

function punch(s, code, u) {
  const n = curve(STRAIGHT, u)[0];
  const tw = curve(TWIST, u)[0];
  const arc = Math.sin(Math.PI * clamp(u, 0, 1));
  if (code === 'J') {
    s.hand[1] = { str: n }; s.yaw += 9 * n; s.lean += 4 * n; s.hz += 0.03 * n; s.py -= 0.015 * n; s.lf[2] += 0.02 * n;
  } else if (code === 'C') {
    s.hand[-1] = { str: n }; s.yaw += 52 * n; s.syaw += 8 * n; s.lean += 5 * n; s.hz += 0.06 * n; s.py -= 0.02 * n;
    s.rf[3] += 28 * n; s.rf[1] += 0.03 * n;
  } else if (code === 'LH' || code === 'RH') {
    const o = SIGN[code];
    const c = curve(o === 1 ? HOOK_L : HOOK_R, u);
    s.hand[o] = { l: c, pole: guardPole(o).lerp(V3(o, 0.5, -0.25), arc) };
    if (o === 1) { s.yaw += -38 * tw; s.syaw += -6 * tw; s.lf[3] += 18 * tw; s.hz += 0.03 * tw; }
    else { s.yaw += 70 * tw; s.syaw += 8 * tw; s.rf[3] += 26 * tw; s.rf[1] += 0.03 * tw; s.hz += 0.04 * tw; }
    s.lean += 3 * tw; s.py -= 0.015 * tw;
  } else if (code === 'UL' || code === 'UR') {
    const o = SIGN[code];
    s.hand[o] = { l: curve(o === 1 ? UPP_L : UPP_R, u), pole: V3(o * 0.3, -1, 0.1) };
    const k = curve(UPP_BODY, u)[0];
    s.py -= 0.05 * k; s.lean += 8 * k;
    s.yaw += (o === 1 ? -14 : 24) * (1 - Math.abs(k)) * Math.max(0, tw || arc);
    s.hz += 0.02 * arc;
  } else if (code === 'SL') slip(s, 'slipL', u);
  else if (code === 'SR') slip(s, 'slipR', u);
  else if (code === 'D') slip(s, 'duck', u);
  else if (code === 'K') slip(s, 'cover', u);
}

const FOOT = {
  fb: [[0, 0, 0, 0, 0], [0.18, 0, 0.2, 0, 0], [0.34, 0, 0.2, 0, 0.2], [0.5, 0, 0.2, 0, 0.2], [0.64, 0, 0.2, 0, 0], [0.8, 0, 0, 0, 0], [1, 0, 0, 0, 0]],
  side: [[0, 0, 0, 0, 0], [0.16, 0.22, 0, 0, 0], [0.3, 0.22, 0, 0.22, 0], [0.5, 0.22, 0, 0.22, 0], [0.66, 0, 0, 0.22, 0], [0.8, 0, 0, 0, 0], [1, 0, 0, 0, 0]],
  box: [[0, 0, 0, 0, 0], [0.1, 0, 0.18, 0, 0], [0.2, 0, 0.18, 0, 0.18], [0.3, 0.2, 0.18, 0, 0.18], [0.4, 0.2, 0.18, 0.2, 0.18], [0.5, 0.2, 0, 0.2, 0.18], [0.6, 0.2, 0, 0.2, 0], [0.7, 0, 0, 0.2, 0], [0.8, 0, 0, 0, 0], [1, 0, 0, 0, 0]],
  shuffle: [[0, 0, 0, 0, 0], [0.12, 0, 0.12, 0, 0], [0.24, 0, 0.12, 0, 0.12], [0.36, 0, 0, 0, 0.12], [0.48, 0, 0, 0, 0], [0.6, 0, -0.1, 0, 0], [0.72, 0, -0.1, 0, -0.1], [0.84, 0, 0, 0, -0.1], [1, 0, 0, 0, 0]],
};

registerMode('guard', (t, ctx, lv) => {
  const s = newStance();
  const v = lv.v;
  const f = lv.f || 1;
  const o = Math.sin((t * 2 * Math.PI) / 3.2);
  s.lean += 0.8 * o; s.py += 0.004 * o;
  if (v === 'bounce') {
    const a = Math.sin(t * 2 * Math.PI * f);
    const b = Math.sin(t * 2 * Math.PI * f + Math.PI);
    s.py += 0.018 * Math.abs(a) - 0.01;
    s.lf[1] += 0.03 * Math.max(0, a); s.rf[1] += 0.03 * Math.max(0, b); s.hz += 0.008 * a;
    s.hand[1] = { l: [0.115 + 0.01 * a, 0.4 + 0.012 * Math.abs(a), 0.27], pole: guardPole(1) };
    s.hand[-1] = { l: [-0.12 - 0.01 * a, 0.38 + 0.012 * Math.abs(b), 0.21], pole: guardPole(-1) };
  } else if (v === 'shift') {
    const a = Math.sin((t * 2 * Math.PI) / (lv.repT || 3));
    s.hx += 0.045 * a; s.hz += 0.05 * a; s.py -= 0.015 * Math.abs(a); s.roll += 3 * a;
    s.lf[1] += 0.02 * Math.max(0, a); s.rf[1] += 0.02 * Math.max(0, -a); s.yaw += 6 * a;
  }
  applyStance(s);
  return { ground: 'none' };
});

registerMode('foot', (t, ctx, lv) => {
  const s = newStance();
  const T = lv.repT;
  const u = (t % T) / T;
  const o = curve(FOOT[lv.v], u);
  const o2 = curve(FOOT[lv.v], Math.min(1, u + 0.012));
  const spd = (a, b) => Math.hypot(o2[a] - o[a], o2[b] - o[b]);
  const lift1 = 0.09 * smooth(clamp(spd(0, 1) / 0.004, 0, 1));
  const lift2 = 0.09 * smooth(clamp(spd(2, 3) / 0.004, 0, 1));
  const c = Math.sin(t * 2 * Math.PI * (lv.f || 1.6));
  s.lf[0] += o[0]; s.lf[2] += o[1]; s.rf[0] += o[2]; s.rf[2] += o[3];
  s.lf[1] += lift1; s.rf[1] += lift2;
  s.hx += (o[0] + o[2]) / 2; s.hz += (o[1] + o[3]) / 2;
  s.py += 0.008 * c - 0.004;
  s.lean += 2 * (o[1] + o[3]) * 5;
  s.roll += -10 * (o[0] + o[2]);
  applyStance(s);
  return { ground: 'none' };
});

/**
 * Combinaciones: `seq` es una lista de golpes (J C LH RH UL UR SL SR D K) o `null` (pausa),
 * `pt` los segundos por golpe. La secuencia se repite en bucle mientras dure el ejercicio.
 */
registerMode('combo', (t, ctx, lv) => {
  const s = newStance();
  const seq = lv.seq;
  const pt = lv.pt;
  const idx = Math.floor(t / pt);
  const a = idx % seq.length;
  const o = Math.sin((t * 2 * Math.PI) / 3.2);
  s.lean += 0.6 * o;
  s.py += 0.008 * Math.sin(t * 2 * Math.PI * 1.4);
  if (lv.bounce) {
    const b = Math.sin(t * 2 * Math.PI * 1.6);
    s.lf[1] += 0.02 * Math.max(0, b); s.rf[1] += 0.02 * Math.max(0, -b);
  }
  const code = seq[a];
  if (code) punch(s, code, (t - idx * pt) / pt);
  applyStance(s);
  return { ground: 'none' };
});

registerMode('dodge', (t, ctx, lv) => {
  const s = newStance();
  const T = lv.repT;
  const u = (t % T) / T;
  const o = Math.sin((t * 2 * Math.PI) / 3.2);
  s.lean += 0.6 * o;
  if (lv.v === 'weave') {
    const l = curve([[0, 0], [0.14, 1], [0.3, 1], [0.5, 0], [0.7, -1], [0.86, -1], [1, 0]], u)[0];
    const c = curve([[0, 0], [0.14, 0.5], [0.3, 1], [0.5, 1], [0.7, 1], [0.86, 0.5], [1, 0]], u)[0];
    s.hx += l * 0.12; s.roll += l * 14; s.py -= 0.13 * c; s.lean += 22 * c; s.yaw += l * -8;
  } else slip(s, lv.v, u);
  applyStance(s);
  return { ground: 'none' };
});
