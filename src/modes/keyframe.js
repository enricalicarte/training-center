// Poses por fotogramas (yoga, movilidad, suelo) y el modo genérico `pose`.
import { registerMode, makePose, lerpAny, mirrorPose, applyKeyPose, smooth, clamp } from '../engine/pose.js';

const WS = 0.695;
const QE = -0.2;
const Di = (n) => [n * 0.09, 0.05, QE - 0.3, 180, 0, -1, 1, 0];
const Mi = (n, t = 0.06, e = 1.52, i = 0.02) => [n * t, e, i, n * 0.6, 0, -0.3]; // manos arriba
const To = (n) => [n * 0.03, 1.03, 0.22, n * 0.9, -0.5, -0.2]; // manos al pecho
const Ku = (n, t = 0.88, e = 0, i = 0.56) => [n * i, t, e, n * 0.3, -0.4, -0.6]; // brazos en cruz
const T = (n) => [n * 0.17, 0.045, 0.27, n * 0.7, 0.2, -0.6];
const treeBase = (n) => {
  n.py = WS; n.hx = 0.026;
  n.F[-1] = [-0.05, 0.075, 0, 0, -0.12, 0, 1, 0];
};
const quadHands = (n) => {
  n.H[1] = [0.16, 0.045, QE + 0.44, 0.6, 0.3, -0.6];
  n.H[-1] = [-0.16, 0.045, QE + 0.44, -0.6, 0.3, -0.6];
};
const seatedFeet = (n) => {
  n.F[1] = [0.09, 0.09, 0.41, -62, 0, 1, 0, 0];
  n.F[-1] = [-0.09, 0.09, 0.41, -62, 0, 1, 0, 0];
};
const kneeFeet = (n) => {
  n.F[1] = [0.09, 0.045, -0.28, 180, 0, -0.4, 1, 0];
  n.F[-1] = [-0.09, 0.045, -0.28, 180, 0, -0.4, 1, 0];
};
const proneFeet = (n) => {
  n.F[1] = [0.09, 0.045, -0.76, 180, 0, -1, 0, 0];
  n.F[-1] = [-0.09, 0.045, -0.76, 180, 0, -1, 0, 0];
};

export const POSES = {
  montana: makePose((n) => {
    n.py = WS;
    n.H[1] = [0.17, 0.61, 0.03, 0.8, -0.7, 0];
    n.H[-1] = [-0.17, 0.61, 0.03, -0.8, -0.7, 0];
    n.F[1][0] = 0.075; n.F[-1][0] = -0.075;
  }),
  montanaUp: makePose((n) => {
    n.py = WS; n.H[1] = Mi(1); n.H[-1] = Mi(-1); n.hd = -10; n.lean = -1;
    n.F[1][0] = 0.075; n.F[-1][0] = -0.075;
  }),
  tree1: makePose((n) => {
    treeBase(n); n.F[1] = [-0.005, 0.1, 0.03, 28, 1, 0.1, 0.35, 0]; n.H[1] = To(1); n.H[-1] = To(-1); n.lean = 1;
  }),
  tree2: makePose((n) => {
    treeBase(n); n.F[1] = [0, 0.26, 0.02, 30, 1, 0.1, 0.3, 0]; n.H[1] = To(1); n.H[-1] = To(-1); n.lean = 1;
  }),
  tree3: makePose((n) => {
    treeBase(n); n.hx = 0.03; n.F[1] = [0, 0.47, 0.02, 30, 1, 0.2, 0.15, 0];
    n.H[1] = Mi(1, 0.07, 1.5); n.H[-1] = Mi(-1, 0.07, 1.5); n.lean = 0; n.hd = -6;
  }),
  tree4: makePose((n) => {
    treeBase(n); n.hx = 0.03; n.F[1] = [0, 0.47, 0.02, 30, 1, 0.2, 0.15, 0];
    n.H[1] = Mi(1, 0.34, 1.44); n.H[-1] = Mi(-1, 0.34, 1.44); n.lean = 0; n.hd = -8;
  }),
  w1: makePose((n) => {
    n.py = 0.5; n.hz = 0.07;
    n.F[1] = [0.11, 0.075, 0.35, 0, 0, 0, 1, 0]; n.F[-1] = [-0.11, 0.075, -0.31, 0, 0, 0, 1, 0];
    n.H[1] = Mi(1, 0.07, 1.36, 0.08); n.H[-1] = Mi(-1, 0.07, 1.36, 0.08); n.lean = -3; n.hd = -12;
  }),
  w1p: makePose((n) => {
    n.py = 0.5; n.hz = 0.07;
    n.F[1] = [0.11, 0.075, 0.35, 0, 0, 0, 1, 0]; n.F[-1] = [-0.11, 0.075, -0.31, 0, 0, 0, 1, 0];
    n.H[1] = [0.03, 0.86, 0.22, 0.9, -0.5, -0.2]; n.H[-1] = [-0.03, 0.86, 0.22, -0.9, -0.5, -0.2]; n.lean = 0; n.hd = -2;
  }),
  w2: makePose((n) => {
    n.py = 0.44; n.hx = 0.06;
    n.F[1] = [0.36, 0.075, 0.02, 0, 1, 0, 0.2, 0]; n.F[-1] = [-0.41, 0.075, 0, 0, -0.1, 0, 1, 0];
    n.H[1] = Ku(1, 0.86); n.H[-1] = Ku(-1, 0.86); n.lean = 0; n.hyw = 70; n.hd = -2;
  }),
  w2b: makePose((n) => {
    n.py = 0.44;
    n.F[1] = [0.36, 0.075, 0.02, 0, 1, 0, 0.2, 0]; n.F[-1] = [-0.41, 0.075, 0, 0, -0.1, 0, 1, 0];
    n.H[1] = [0.42, 0.52, 0.02, 0.3, -0.4, -0.6]; n.H[-1] = [-0.06, 1.26, 0, -0.6, 0.3, -0.3];
    n.sr = -22; n.hx = 0.1; n.hyw = 30; n.hd = -8;
  }),
  w3: makePose((n) => {
    n.py = 0.66; n.hx = 0.026; n.pp = 84; n.lean = 4; n.hd = -60;
    n.F[-1] = [-0.05, 0.075, 0, 0, -0.12, 0, 1, 0]; n.F[1] = [0.06, 0.7, -0.6, 0, 0, -1, 0, 0];
    n.H[1] = [0.08, 0.7, 0.86, 0.5, -0.2, 0]; n.H[-1] = [-0.08, 0.7, 0.86, -0.5, -0.2, 0];
  }),
  quad: makePose((n) => {
    n.py = 0.37; n.hz = QE; n.lean = 80; n.hd = -8; n.F[1] = Di(1); n.F[-1] = Di(-1); quadHands(n);
  }),
  cat: makePose((n) => {
    n.py = 0.39; n.hz = QE; n.pp = -10; n.lean = 88; n.hd = 42; n.F[1] = Di(1); n.F[-1] = Di(-1); quadHands(n);
  }),
  cow: makePose((n) => {
    n.py = 0.35; n.hz = QE; n.pp = 10; n.lean = 68; n.hd = -36; n.F[1] = Di(1); n.F[-1] = Di(-1); quadHands(n);
  }),
  bird: makePose((n) => {
    n.py = 0.37; n.hz = QE; n.lean = 82; n.hd = -12; n.hx = -0.025; n.pr = 2;
    n.F[-1] = Di(-1); n.F[1] = [0.09, 0.4, QE - 0.64, 0, 0, -1, 0, 0];
    n.H[1] = [0.16, 0.045, QE + 0.44, 0.6, 0.3, -0.6]; n.H[-1] = [-0.11, 0.47, QE + 0.86, -0.3, 1, 0];
  }),
  dog: makePose((n) => {
    n.py = 0.62; n.hz = -0.08; n.lean = 140; n.hd = -2;
    n.F[1] = [0.1, 0.075, -0.4, 0, 0, -0.3, 1, 0]; n.F[-1] = [-0.1, 0.075, -0.4, 0, 0, -0.3, 1, 0];
    n.H[1] = [0.15, 0.045, 0.55, 0.6, 0.5, -0.3]; n.H[-1] = [-0.15, 0.045, 0.55, -0.6, 0.5, -0.3];
  }),
  plank: makePose((n) => {
    n.py = 0.36; n.hz = -0.03; n.pp = 72; n.lean = 0; n.hd = -24;
    n.F[1] = [0.09, 0.18, -0.6, 70, 0, -1, 0, 0]; n.F[-1] = [-0.09, 0.18, -0.6, 70, 0, -1, 0, 0];
    n.H[1] = [0.16, 0.045, 0.4, 0.6, 0.3, -0.6]; n.H[-1] = [-0.16, 0.045, 0.4, -0.6, 0.3, -0.6];
  }),
  prone: makePose((n) => {
    n.py = 0.105; n.hz = -0.15; n.pp = 90; n.lean = 0; n.hd = -8; proneFeet(n);
    n.H[1] = [0.22, 0.045, 0.27, 0.8, 0.4, -0.2]; n.H[-1] = [-0.22, 0.045, 0.27, -0.8, 0.4, -0.2];
  }),
  cobra: makePose((n) => {
    n.py = 0.105; n.hz = -0.15; n.pp = 90; n.lean = -34; n.hd = -24; proneFeet(n); n.H[1] = T(1); n.H[-1] = T(-1);
  }),
  cobra2: makePose((n) => {
    n.py = 0.105; n.hz = -0.15; n.pp = 90; n.lean = -52; n.hd = -30; proneFeet(n);
    n.H[1] = [0.17, 0.045, 0.21, 0.7, 0.2, -0.6]; n.H[-1] = [-0.17, 0.045, 0.21, -0.7, 0.2, -0.6];
  }),
  sitL: makePose((n) => {
    n.py = 0.1; n.hz = -0.2; n.lean = -4; n.hd = 4; seatedFeet(n);
    n.H[1] = [0.21, 0.045, -0.2, 0.6, 0.2, -0.4]; n.H[-1] = [-0.21, 0.045, -0.2, -0.6, 0.2, -0.4];
  }),
  fly: makePose((n) => {
    n.py = 0.1; n.hz = -0.12; n.lean = -2; n.hd = 4;
    n.F[1] = [0.035, 0.06, 0.14, 0, 1, 0.5, 0, 70]; n.F[-1] = [-0.035, 0.06, 0.14, 0, -1, 0.5, 0, -70];
    n.H[1] = [0.05, 0.09, 0.16, 0.6, 0.3, -0.5]; n.H[-1] = [-0.05, 0.09, 0.16, -0.6, 0.3, -0.5];
  }),
  fly2: makePose((n) => {
    n.py = 0.1; n.hz = -0.12; n.lean = 32; n.hd = 14;
    n.F[1] = [0.035, 0.06, 0.14, 0, 1, 0.5, 0, 70]; n.F[-1] = [-0.035, 0.06, 0.14, 0, -1, 0.5, 0, -70];
    n.H[1] = [0.05, 0.08, 0.17, 0.6, 0.3, -0.5]; n.H[-1] = [-0.05, 0.08, 0.17, -0.6, 0.3, -0.5];
  }),
  fold1: makePose((n) => {
    n.py = 0.1; n.hz = -0.2; n.lean = 34; n.hd = 8; seatedFeet(n);
    n.H[1] = [0.1, 0.14, 0.22, 0.5, 0.6, -0.4]; n.H[-1] = [-0.1, 0.14, 0.22, -0.5, 0.6, -0.4];
  }),
  fold2: makePose((n) => {
    n.py = 0.1; n.hz = -0.2; n.lean = 64; n.hd = 18; seatedFeet(n);
    n.H[1] = [0.1, 0.11, 0.37, 0.5, 0.6, -0.4]; n.H[-1] = [-0.1, 0.11, 0.37, -0.5, 0.6, -0.4];
  }),
  twist: makePose((n) => {
    n.py = 0.1; n.hz = -0.2; n.lean = 2; n.syw = -40; n.hyw = -24; n.hd = 2; seatedFeet(n);
    n.H[1] = [0.24, 0.045, -0.36, 0.6, 0.3, -0.5]; n.H[-1] = [0.12, 0.18, 0.08, -0.4, -0.4, 0.6];
  }),
  kneel: makePose((n) => {
    n.py = 0.21; n.hz = -0.25; n.lean = 2; n.hd = 2; kneeFeet(n);
    n.H[1] = [0.11, 0.3, -0.02, 0.7, -0.3, -0.4]; n.H[-1] = [-0.11, 0.3, -0.02, -0.7, -0.3, -0.4];
  }),
  child: makePose((n) => {
    n.py = 0.2; n.hz = -0.25; n.lean = 104; n.hd = 16; kneeFeet(n);
    n.H[1] = [0.13, 0.045, 0.53, 0.6, 0.5, -0.4]; n.H[-1] = [-0.13, 0.045, 0.53, -0.6, 0.5, -0.4];
  }),
  child2: makePose((n) => {
    n.py = 0.2; n.hz = -0.25; n.lean = 108; n.hd = 16; kneeFeet(n);
    n.H[1] = [0.17, 0.05, -0.26, 0.6, 0.6, 0.2]; n.H[-1] = [-0.17, 0.05, -0.26, -0.6, 0.6, 0.2];
  }),
  sava: makePose((n) => {
    n.py = 0.1; n.pp = -90; n.lean = 0; n.hd = 0;
    n.F[1] = [0.15, 0.06, 0.61, -24, 0, 1, 0, 0]; n.F[-1] = [-0.15, 0.06, 0.61, -24, 0, 1, 0, 0];
    n.H[1] = [0.3, 0.05, -0.06, 0.6, 0.3, 0]; n.H[-1] = [-0.3, 0.05, -0.06, -0.6, 0.3, 0];
  }),
  hugknees: makePose((n) => {
    n.py = 0.1; n.pp = -90; n.lean = 22; n.hd = 12;
    n.F[1] = [0.09, 0.2, 0.15, 0, 0, 1, -1, 0]; n.F[-1] = [-0.09, 0.2, 0.15, 0, 0, 1, -1, 0];
    n.H[1] = [0.11, 0.33, -0.06, 0.7, 0.2, -0.3]; n.H[-1] = [-0.11, 0.33, -0.06, -0.7, 0.2, -0.3];
  }),

  // ---- nuevas para adultos (movilidad / calistenia) ----
  squatDeep: makePose((n) => {
    n.py = 0.36; n.hz = -0.1; n.lean = 22; n.hd = -6;
    n.F[1] = [0.2, 0.075, 0.02, 0, 0.5, 0, 1, 0]; n.F[-1] = [-0.2, 0.075, 0.02, 0, -0.5, 0, 1, 0];
    n.H[1] = [0.07, 0.42, 0.3, 0.2, -0.3, -0.3]; n.H[-1] = [-0.07, 0.42, 0.3, -0.2, -0.3, -0.3];
    n.pp = 8;
  }),
  squatPray: makePose((n) => {
    n.py = 0.36; n.hz = -0.1; n.lean = 8; n.hd = -4; n.pp = 8;
    n.F[1] = [0.2, 0.075, 0.02, 0, 0.5, 0, 1, 0]; n.F[-1] = [-0.2, 0.075, 0.02, 0, -0.5, 0, 1, 0];
    n.H[1] = [0.05, 0.55, 0.3, 0.6, -0.2, 0]; n.H[-1] = [-0.05, 0.55, 0.3, -0.6, -0.2, 0];
  }),
  fwdFold: makePose((n) => {
    n.py = 0.68; n.hz = -0.18; n.pp = 80; n.lean = 8; n.hd = 30;
    n.F[1][0] = 0.09; n.F[-1][0] = -0.09;
    n.H[1] = [0.12, 0.2, 0.18, 0.6, 0.4, -0.2]; n.H[-1] = [-0.12, 0.2, 0.18, -0.6, 0.4, -0.2];
  }),
  hamL: makePose((n) => {
    // pierna derecha (lado +1) estirada al frente sobre el talón, manos a la pierna
    n.py = 0.66; n.hz = -0.16; n.pp = 62; n.lean = 8; n.hd = 12;
    n.F[1] = [0.09, 0.075, 0.38, -30, 0, 1, 0, 0]; n.F[-1] = [-0.09, 0.075, -0.28, 0, 0, 0, 1, 0];
    n.H[1] = [0.1, 0.42, 0.34, 0.6, 0.2, -0.2]; n.H[-1] = [-0.1, 0.42, 0.34, -0.6, 0.2, -0.2];
  }),
  lungeLow: makePose((n) => {
    n.py = 0.5; n.hz = 0.1; n.lean = -2; n.hd = -6;
    n.F[1] = [0.11, 0.075, 0.5, 0, 0, 0, 1, 0]; n.F[-1] = [-0.11, 0.075, -0.42, 0, 0, 0, 1, 0];
    n.H[1] = Mi(1, 0.08, 1.4, 0.04); n.H[-1] = Mi(-1, 0.08, 1.4, 0.04);
  }),
  figure4: makePose((n) => {
    n.py = 0.1; n.pp = -90; n.lean = 22; n.hd = 10;
    n.F[-1] = [-0.09, 0.2, 0.15, 0, 0, 1, -1, 0];
    n.F[1] = [0.02, 0.28, 0.2, 0, 1, 1, 0, 0];
    n.H[1] = [0.1, 0.3, -0.04, 0.7, 0.2, -0.3]; n.H[-1] = [-0.1, 0.32, 0.12, -0.7, 0.2, -0.3];
  }),
  kneetoChest: makePose((n) => {
    n.py = 0.1; n.pp = -90; n.lean = 20; n.hd = 10;
    n.F[1] = [0.09, 0.2, 0.15, 0, 0, 1, -1, 0]; n.F[-1] = [-0.09, 0.075, 0.6, -24, 0, 1, 0, 0];
    n.H[1] = [0.11, 0.33, -0.06, 0.7, 0.2, -0.3]; n.H[-1] = [-0.15, 0.05, -0.06, -0.6, 0.3, 0];
  }),
};

const FEET_POSES = new Set(['montana', 'montanaUp', 'tree1', 'tree2', 'tree3', 'tree4', 'w1', 'w1p', 'w2', 'w2b', 'w3', 'squatDeep', 'squatPray', 'fwdFold', 'hamL', 'lungeLow']);

/** Mezcla dos poses; si una mano cambia mucho de altura, la trayectoria hace un arco hacia fuera (evita que el codo "salte"). */
export const blendPose = (a, b, t) => {
  const o = lerpAny(a, b, t);
  const bump = Math.sin(Math.PI * clamp(t, 0, 1));
  for (const s of [1, -1]) {
    const dy = Math.abs(b.H[s][1] - a.H[s][1]);
    if (dy > 0.35) {
      o.H[s][0] += s * 0.2 * bump * Math.min(1, dy / 0.7);
      o.H[s][3] += s * 0.4 * bump;
    }
  }
  return o;
};

const seq = (names, f) => {
  if (names.length === 1) return POSES[names[0]];
  const e = f * (names.length - 1);
  const i = Math.min(names.length - 2, Math.floor(e));
  return blendPose(POSES[names[i]], POSES[names[i + 1]], smooth(e - i));
};
const tri = (x) => {
  const t = x - Math.floor(x);
  return t < 0.5 ? smooth(t * 2) : 1 - smooth((t - 0.5) * 2);
};

/**
 * Modo `pose`: level = { v: 'nombre' | ['a','b',…], cyc: segundos por ciclo (ida y vuelta),
 *   k: intensidad (0–1+), bi: sin espejo por lado, base: pose de partida, ramp: tiempo de entrada }
 * Pasa por las poses de `v` en bucle suave. Con `ctx.side` > 0 se espeja.
 */
registerMode('pose', (t, ctx, lv) => {
  const dur = ctx.dur || 20;
  const s = Math.min(lv.ramp || 2.4, dur / 3.2);
  const ramp = smooth(t / s) * (1 - smooth((t - (dur - s)) / s)) * (lv.k || 1);
  const names = Array.isArray(lv.v) ? lv.v : [lv.v];
  let target = seq(names, names.length > 1 ? tri(t / (lv.cyc || 6)) : 0);
  let base = lv.base ? POSES[lv.base] : makePose(() => {});
  if (!lv.bi && !(ctx.side > 0)) {
    target = mirrorPose(target);
    base = mirrorPose(base);
  }
  applyKeyPose(blendPose(base, target, clamp(ramp, 0, 1.2)));
  return { ground: FEET_POSES.has(names[0]) ? 'feet' : 'all' };
});

// ---- poses extra: movilidad, calistenia, burpee ----
Object.assign(POSES, {
  quadStand: makePose((n) => {
    n.py = WS; n.hx = 0.026; n.lean = 2; n.hd = -2;
    n.F[-1] = [-0.05, 0.075, 0, 0, -0.12, 0, 1, 0];
    n.F[1] = [0.03, 0.34, -0.28, 65, 0, -0.3, 1, 0];
    n.H[1] = [0.1, 0.36, -0.3, 0.6, 0.6, -1]; n.H[-1] = [-0.3, 0.95, 0.1, -0.7, 0.2, 0.4];
  }),
  chestOpen: makePose((n) => {
    n.py = WS; n.lean = -6; n.hd = -12;
    n.F[1] = [0.1, 0.075, 0, 0, 0.12, 0, 1, 0]; n.F[-1] = [-0.1, 0.075, 0, 0, -0.12, 0, 1, 0];
    n.H[1] = [0.12, 0.66, -0.26, 0.8, -0.3, -0.7]; n.H[-1] = [-0.12, 0.66, -0.26, -0.8, -0.3, -0.7];
  }),
  wgs1: makePose((n) => {
    n.py = 0.46; n.hz = 0.1; n.lean = 52; n.hd = -14;
    n.F[1] = [0.13, 0.075, 0.5, 0, 0, 0, 1, 0]; n.F[-1] = [-0.08, 0.1, -0.5, 55, 0, 0.4, 1, 0];
    n.H[1] = [0.22, 0.045, 0.34, 0.8, 0.3, -0.5]; n.H[-1] = [-0.22, 0.045, 0.34, -0.8, 0.3, -0.5];
  }),
  wgs2: makePose((n) => {
    n.py = 0.46; n.hz = 0.1; n.lean = 40; n.hd = -14; n.syw = 28; n.hyw = 20; n.sr = 0;
    n.F[1] = [0.13, 0.075, 0.5, 0, 0, 0, 1, 0]; n.F[-1] = [-0.08, 0.1, -0.5, 55, 0, 0.4, 1, 0];
    n.H[1] = [0.22, 0.045, 0.34, 0.8, 0.3, -0.5]; n.H[-1] = [-0.3, 1.2, 0.0, -0.8, 0.2, 0.2];
  }),
  burpSquat: makePose((n) => {
    n.py = 0.38; n.hz = 0.02; n.lean = 48; n.hd = -10;
    n.F[1] = [0.12, 0.075, 0, 0, 0.3, 0, 1, 0]; n.F[-1] = [-0.12, 0.075, 0, 0, -0.3, 0, 1, 0];
    n.H[1] = [0.18, 0.045, 0.32, 0.6, 0.3, -0.5]; n.H[-1] = [-0.18, 0.045, 0.32, -0.6, 0.3, -0.5];
  }),
  pikeLow: makePose((n) => {
    n.py = 0.5; n.hz = 0.14; n.lean = 118; n.hd = -34;
    n.F[1] = [0.1, 0.075, -0.4, 0, 0, -0.3, 1, 0]; n.F[-1] = [-0.1, 0.075, -0.4, 0, 0, -0.3, 1, 0];
    n.H[1] = [0.15, 0.045, 0.55, 0.6, 0.5, -0.3]; n.H[-1] = [-0.15, 0.045, 0.55, -0.6, 0.5, -0.3];
  }),
});
POSES.quadStandR = POSES.quadStand;
export const lerpPose = (a, b, t) => lerpAny(POSES[a], POSES[b], t);
export { FEET_POSES };
