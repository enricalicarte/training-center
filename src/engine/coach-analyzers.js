// Catálogo ampliado de analizadores del coach de cámara (se registra en ANALYZERS al importar).
// Tipos: repeticiones (Reps con histéresis), alternos (una pierna y otra), oscilaciones (ida y vuelta),
// golpes (velocidad del puño), saltos (despegue respecto a una base), círculos (ángulo acumulado)
// y posturas mantenidas (segundos en los que la postura es correcta).
import {
  ANALYZERS, TIPS, LM, angle, angle3, dist, fromVertical, fuse, sideChain, hipDeviation, viewOf,
  Reps, Vote, makeSideAnalyzer, BODY_HINT,
} from './coach-logic.js';

Object.assign(TIPS, {
  guard: 'Sube la guardia: puños a la altura de la barbilla',
  short: 'Da un paso más largo',
  hips: 'Cadera nivelada, no la desplaces',
  kneeFoot: 'No apoyes el pie en la rodilla: en el tobillo o la pantorrilla',
  legHigh: 'No subas tanto la pierna, cadera estable',
  hipsTurn: 'Gira desde el pecho, con la cadera quieta',
  trunk: 'Tronco erguido',
  kneesTogether: 'Rodillas juntas',
  pikeHips: 'Mantén la cadera bien arriba',
  deeper: 'Baja un poco más',
  lower: 'Baja más la cadera',
  rise: 'Sube del todo',
  tall: 'Crece hacia arriba, espalda larga',
  kneeLow: 'Rodilla de atrás más cerca del suelo',
  fold: 'Pliega más desde la cadera',
  pose: 'Entra en la postura y mantenla',
  hands: 'Manos bajo los hombros y rodillas bajo la cadera',
  heel: 'Lleva el talón más cerca del glúteo',
  knee: 'Rodilla más alta',
  bigger: 'Círculos más grandes',
  hipsStill: 'Hombros quietos, mueve solo la cadera',
  neck: 'No tires del cuello, mira al techo',
  plankLine: 'Cuerpo en línea recta en la plancha',
  floor: 'Baja hasta el suelo',
  stand: 'Ponte de pie del todo',
  wide: 'Salta más lejos hacia el lado',
});

// ---------- cadena frontal ----------
export function frontChain(L) {
  const c = {
    nose: L[LM.nose], shL: L[LM.shL], shR: L[LM.shR], elL: L[LM.elL], elR: L[LM.elR], wrL: L[LM.wrL], wrR: L[LM.wrR],
    hipL: L[LM.hipL], hipR: L[LM.hipR], knL: L[LM.knL], knR: L[LM.knR], anL: L[LM.anL], anR: L[LM.anR],
  };
  c.sh = fuse(L, LM.shL, LM.shR);
  c.hip = fuse(L, LM.hipL, LM.hipR);
  c.an = fuse(L, LM.anL, LM.anR);
  c.shW = Math.max(dist(c.shL, c.shR), 1e-3);
  c.torso = Math.max(dist(c.sh, c.hip), 1e-3);
  c.vis = (c.shL.visibility + c.shR.visibility + c.hipL.visibility + c.hipR.visibility) / 4;
  return c;
}
/** Cadena lateral con la medida del tronco añadida. */
function side(L) {
  const c = sideChain(L);
  c.torso = Math.max(dist(c.sh, c.hip), 1e-3);
  c.nose = L[LM.nose];
  c.L = { kn: L[LM.knL], an: L[LM.anL], wr: L[LM.wrL], hip: L[LM.hipL], sh: L[LM.shL] };
  c.R = { kn: L[LM.knR], an: L[LM.anR], wr: L[LM.wrR], hip: L[LM.hipR], sh: L[LM.shR] };
  return c;
}
const bothVis = (...p) => p.reduce((s, q) => s + (q.visibility ?? 1), 0) / p.length;

// ---------- posturas mantenidas ----------
/**
 * cfg: { chain, checks: [ (c, L) => { ok, tip } ], minVis }
 * Suma segundos mientras alguna comprobación pasa. Si ninguna pasa durante >1,5 s, avisa con el
 * consejo de la comprobación "más cercana" (la primera que lo devuelva).
 */
function makeHold(cfg) {
  return () => {
    let okMs = 0;
    let last = null;
    let bad = 0;
    const chain = cfg.chain || side;
    return {
      reps: { count: 0, good: 0 },
      get seconds() {
        return Math.floor(okMs / 1000);
      },
      push(L, t) {
        const c = chain(L);
        const out = { ev: [], ok: c.vis >= (cfg.minVis ?? 0.5), view: viewOf(L), calibrated: true };
        if (!out.ok) {
          last = null;
          return out;
        }
        const dt = last === null ? 0 : Math.min(t - last, 200);
        last = t;
        let tip = null;
        let good = false;
        for (const chk of cfg.checks) {
          const r = chk(c, L, t);
          if (r && r.ok) {
            good = true;
            break;
          }
          if (r && r.tip && !tip) tip = r.tip;
        }
        if (good) {
          okMs += dt;
          bad = 0;
        } else {
          bad += dt;
          if (bad > 1500) out.ev.push({ type: 'tip', key: tip || 'pose' });
        }
        out.holding = good;
        return out;
      },
    };
  };
}

// ---------- alternos (una pierna, luego la otra) ----------
function makeAlt(cfg) {
  return () => {
    const rl = new Reps(cfg.lo, cfg.hi, cfg.minMs || 150);
    const rr = new Reps(cfg.lo, cfg.hi, cfg.minMs || 150);
    const reps = { count: 0, good: 0 };
    const vote = new Vote();
    const chain = cfg.chain || side;
    return {
      reps,
      push(L, t) {
        const c = chain(L);
        const out = { ev: [], ok: c.vis >= (cfg.minVis ?? 0.5), view: viewOf(L), calibrated: true };
        if (!out.ok) return out;
        const [sl, sr] = cfg.measure(c, L);
        out.metric = Math.round(Math.min(sl, sr));
        const flags = vote.push(cfg.flags ? cfg.flags(c, L) : [], t);
        for (const f of flags) out.ev.push({ type: 'tip', key: f });
        for (const [r, s] of [[rl, sl], [rr, sr]]) {
          for (const f of flags) r.flag(f);
          const done = r.push(s, t);
          if (done) {
            reps.count++;
            const issues = [...done.flags];
            if (cfg.good !== undefined && done.min > cfg.good) issues.push(cfg.shallowKey || 'shallow');
            const good = issues.length === 0;
            if (good) reps.good++;
            out.ev.push({ type: 'rep', good, issues, n: reps.count });
          }
        }
        return out;
      },
    };
  };
}

// ---------- oscilación (ida y vuelta alrededor de una base lenta) ----------
function makeOsc(cfg) {
  return () => {
    let base = null;
    let state = 0; // -1, 0, 1
    let lastT = 0;
    const reps = { count: 0, good: 0 };
    const vote = new Vote();
    const chain = cfg.chain || frontChain;
    return {
      reps,
      push(L, t) {
        const c = chain(L);
        const out = { ev: [], ok: c.vis >= (cfg.minVis ?? 0.5), view: viewOf(L), calibrated: true };
        if (!out.ok) return out;
        const v = cfg.measure(c, L);
        if (base === null) base = cfg.base === undefined ? v : cfg.base;
        else if (cfg.base === undefined) base += (v - base) * 0.02;
        const s = v - base;
        out.metric = Math.round(s * 100) / 100;
        const flags = vote.push(cfg.flags ? cfg.flags(c, L) : [], t);
        for (const f of flags) out.ev.push({ type: 'tip', key: f });
        const th = cfg.th;
        const ns = s > th ? 1 : s < -th ? -1 : 0;
        if (ns !== 0 && ns !== state) {
          if (state !== 0 && t - lastT > (cfg.minMs || 200)) {
            reps.count++;
            const good = flags.length === 0;
            if (good) reps.good++;
            out.ev.push({ type: 'rep', good, issues: flags, n: reps.count });
          }
          state = ns;
          lastT = t;
        }
        return out;
      },
    };
  };
}

// ---------- saltos ----------
function makeJumps(cfg = {}) {
  return () => {
    let ground = null; // y máxima del tobillo (suelo), se adapta lentamente
    let air = false;
    let t0 = 0;
    const reps = { count: 0, good: 0 };
    return {
      reps,
      push(L, t) {
        const c = frontChain(L);
        const out = { ev: [], ok: bothVis(c.anL, c.anR, c.hipL, c.hipR) >= 0.5, view: viewOf(L), calibrated: true };
        if (!out.ok) return out;
        const y = Math.max(c.anL.y, c.anR.y);
        if (ground === null) ground = y;
        else if (y > ground) ground = y;
        else ground += (y - ground) * 0.005;
        const lift = (ground - y) / c.torso;
        out.metric = Math.round(lift * 100);
        const th = cfg.th || 0.1;
        if (!air && lift > th) {
          air = true;
          t0 = t;
        } else if (air && lift < th * 0.4) {
          air = false;
          if (t - t0 > 80 && t - t0 < 1200) {
            reps.count++;
            reps.good++;
            out.ev.push({ type: 'rep', good: true, issues: [], n: reps.count });
          }
        }
        return out;
      },
    };
  };
}

// ---------- golpes (boxeo) ----------
function makePunches() {
  return () => {
    const reps = { count: 0, good: 0 };
    const vote = new Vote(800, 0.7);
    const arm = { L: { ext: 0, t: 0, armed: true }, R: { ext: 0, t: 0, armed: true } };
    return {
      reps,
      push(L, t) {
        const c = frontChain(L);
        const out = { ev: [], ok: bothVis(c.shL, c.shR, c.wrL, c.wrR) >= 0.5, view: viewOf(L), calibrated: true };
        if (!out.ok) return out;
        const ext = (wr, sh) => Math.hypot(wr.x - sh.x, wr.y - sh.y, ((wr.z || 0) - (sh.z || 0)) * 0.8) / c.torso;
        const eL = ext(c.wrL, c.shL);
        const eR = ext(c.wrR, c.shR);
        out.metric = Math.round(Math.max(eL, eR) * 100);
        // guardia: puños entre la barbilla y el pecho cuando no se golpea
        const low = (wr) => wr.y > c.sh.y + 0.35 * c.torso;
        const raw = [];
        if (arm.L.armed && arm.R.armed && (low(c.wrL) || low(c.wrR))) raw.push('guard');
        const flags = vote.push(raw, t);
        for (const f of flags) out.ev.push({ type: 'tip', key: f });
        for (const [k, e, wr, sh] of [['L', eL, c.wrL, c.shL], ['R', eR, c.wrR, c.shR]]) {
          const a = arm[k];
          if (a.t === 0) {
            a.ext = e;
            a.t = t;
            continue;
          }
          const dt = Math.max(t - a.t, 1) / 1000;
          const v = (e - a.ext) / dt; // torsos por segundo
          const inBand = Math.abs(wr.y - sh.y) < 0.5 * c.torso; // un golpe sale a la altura del hombro
          if (a.armed && v > 2.2 && e > 0.62 && inBand) {
            a.armed = false;
            reps.count++;
            reps.good++;
            out.ev.push({ type: 'rep', good: true, issues: [], n: reps.count });
          } else if (!a.armed && (e < 0.5 || !inBand)) a.armed = true;
          a.ext = e;
          a.t = t;
        }
        return out;
      },
    };
  };
}

// ---------- círculos (ángulo acumulado de un punto alrededor de otro) ----------
function makeCircles(cfg) {
  return () => {
    const reps = { count: 0, good: 0 };
    const acc = { L: { a: null, sum: 0 }, R: { a: null, sum: 0 } };
    const vote = new Vote(1000, 0.7);
    return {
      reps,
      push(L, t) {
        const c = frontChain(L);
        const out = { ev: [], ok: c.vis >= 0.5, view: viewOf(L), calibrated: true };
        if (!out.ok) return out;
        const raw = [];
        for (const k of ['L', 'R']) {
          const { p, o, r } = cfg.pair(c, k);
          if (bothVis(p, o) < 0.5) continue;
          const a = Math.atan2(p.y - o.y, p.x - o.x);
          const s = acc[k];
          if (s.a !== null) {
            let d = a - s.a;
            if (d > Math.PI) d -= 2 * Math.PI;
            if (d < -Math.PI) d += 2 * Math.PI;
            s.sum += d;
            if (Math.abs(s.sum) >= 2 * Math.PI) {
              s.sum -= Math.sign(s.sum) * 2 * Math.PI;
              reps.count++;
              reps.good++;
              out.ev.push({ type: 'rep', good: true, issues: [], n: reps.count });
            }
          }
          s.a = a;
          if (cfg.minR && r < cfg.minR) raw.push('bigger');
        }
        out.metric = reps.count;
        for (const f of vote.push(raw, t)) out.ev.push({ type: 'tip', key: f });
        return out;
      },
    };
  };
}

// ---------- comprobaciones de postura reutilizables ----------
const kneeMin = (c) => Math.min(angle3(c.L.hip, c.L.kn, c.L.an), angle3(c.R.hip, c.R.kn, c.R.an));
const kneeMax = (c) => Math.max(angle3(c.L.hip, c.L.kn, c.L.an), angle3(c.R.hip, c.R.kn, c.R.an));
const lying = (c) => Math.abs(c.sh.y - c.hip.y) < 0.45 * c.torso && Math.abs(c.hip.y - c.an.y) < 0.6 * c.torso;
const lungeHold = (c) => {
  const k = kneeMin(c);
  const kBack = kneeMax(c);
  if (k > 135) return { ok: false, tip: 'lower' };
  if (kBack < 125 && c.L.kn.y < c.hip.y + 0.3 * c.torso && c.R.kn.y < c.hip.y + 0.3 * c.torso) return { ok: false, tip: 'short' };
  return { ok: k >= 70 };
};
const lowLunge = (c) => {
  const k = kneeMin(c);
  const backKneeY = Math.max(c.L.kn.y, c.R.kn.y);
  if (k > 130) return { ok: false, tip: 'lower' };
  if (backKneeY < c.hip.y + 0.45 * c.torso) return { ok: false, tip: 'kneeLow' };
  return { ok: true };
};
const quadruped = (c) =>
  c.sh.y < c.hip.y + 0.25 * c.torso && c.sh.y > c.hip.y - 0.35 * c.torso && c.wr.y > c.sh.y + 0.6 * c.torso && Math.abs(c.wr.x - c.sh.x) < 0.45 * c.torso;
const deepSquat = (c) => {
  const k = angle3(c.hip, c.kn, c.an);
  if (k > 105) return { ok: false, tip: 'deeper' };
  const heelsUp = c.he && c.ft && c.ft.y - c.he.y > 0.07 * dist(c.hip, c.an);
  if (heelsUp) return { ok: false, tip: 'heels' };
  return { ok: true };
};

// ---------- catálogo ----------
const FRONT_HINT = 'Colócate de frente a la cámara, a 2-3 m, con el cuerpo entero a la vista.';
const SIDE_FLOOR = 'Colócate de lado, con el móvil cerca del suelo y el cuerpo entero a la vista.';

Object.assign(ANALYZERS, {
  // ===== Fuerza =====
  crunch: {
    name: 'Abdominales', view: 'de lado', wants: 'side', hint: SIDE_FLOOR,
    create: makeSideAnalyzer({
      lo: 150, hi: 162, good: 142, hiDrop: 6, minMs: 400,
      measure: (c) => ({ signal: angle3(c.sh, c.hip, c.kn) }),
      flags: (c) => (c.nose.visibility > 0.5 && dist(c.nose, c.sh) < 0.32 * c.torso ? ['neck'] : []),
      chain: side,
    }),
  },
  superman: {
    name: 'Superman', view: 'de lado', wants: 'side', hint: SIDE_FLOOR,
    create: makeSideAnalyzer({
      // señal = 100 - elevación (hombros + tobillos por encima de la cadera) en % del tronco
      lo: 90, hi: 97, good: 84, hiDrop: 4, minMs: 400, chain: side,
      measure: (c) => ({ signal: 100 - (Math.max(0, c.hip.y - c.sh.y) + Math.max(0, c.hip.y - c.an.y)) / c.torso * 100 }),
    }),
  },
  jump: { name: 'Saltos', view: 'de frente o de lado', wants: null, hint: 'Colócate a 2-3 m con el cuerpo entero a la vista, pies incluidos.', label: 'saltos', create: makeJumps() },

  // ===== Boxeo =====
  guard: {
    name: 'Guardia', view: 'de frente', wants: 'front', hint: FRONT_HINT, isometric: true,
    create: makeHold({
      chain: frontChain,
      checks: [
        (c) => {
          const up = (wr) => wr.y < c.sh.y + 0.25 * c.torso && wr.y > c.nose.y - 0.2 * c.torso;
          return up(c.wrL) && up(c.wrR) ? { ok: true } : { ok: false, tip: 'guard' };
        },
      ],
    }),
  },
  footwork: {
    name: 'Juego de pies', view: 'de frente', wants: 'front', hint: FRONT_HINT, label: 'pasos',
    create: makeOsc({ th: 0.08, measure: (c) => c.shW / c.torso, flags: (c) => ((c.wrL.y > c.sh.y + 0.4 * c.torso && c.wrR.y > c.sh.y + 0.4 * c.torso) ? ['guard'] : []) }),
  },
  punches: { name: 'Golpes', view: 'de frente', wants: 'front', hint: FRONT_HINT + ' Golpea hacia la cámara.', label: 'golpes', create: makePunches() },
  dodge: {
    name: 'Esquivas', view: 'de frente', wants: 'front', hint: FRONT_HINT, label: 'esquivas',
    create: makeSideAnalyzer({
      chain: frontChain, calib: false, lo: 0.5, hi: 0.78, minMs: 150,
      // señal = 1 - esquiva normalizada (lateral de la cabeza o agacharse)
      measure: (c, L, t, st) => {
        if (st.baseY === undefined) st.baseY = c.nose.y;
        else if (c.nose.y < st.baseY) st.baseY += (c.nose.y - st.baseY) * 0.05;
        const lat = Math.abs(c.nose.x - c.hip.x) / c.shW / 0.55;
        const duck = (c.nose.y - st.baseY) / c.torso / 0.22;
        return { signal: 1 - Math.max(lat, duck) };
      },
    }),
  },

  // ===== Yoga =====
  mountain: {
    name: 'Montaña', view: 'de frente', wants: 'front', hint: FRONT_HINT, isometric: true,
    create: makeHold({ chain: frontChain, checks: [(c) => (Math.abs(c.sh.x - c.hip.x) < 0.2 * c.torso && c.hip.y < c.an.y - 0.9 * c.torso ? { ok: true } : { ok: false, tip: 'tall' })] }),
  },
  tree: {
    name: 'Árbol', view: 'de frente', wants: 'front', hint: FRONT_HINT, isometric: true,
    create: makeHold({
      chain: frontChain,
      checks: [
        (c) => {
          const dy = c.anL.y - c.anR.y;
          const lifted = Math.abs(dy) > 0.12 * c.torso;
          if (!lifted) return { ok: false, tip: 'pose' };
          const up = dy > 0 ? c.anR : c.anL;
          const standKnee = dy > 0 ? c.knL : c.knR;
          if (Math.abs(up.y - standKnee.y) < 0.1 * c.torso) return { ok: false, tip: 'kneeFoot' };
          if (Math.abs(c.hipL.y - c.hipR.y) > 0.1 * c.torso) return { ok: false, tip: 'hips' };
          return { ok: true };
        },
      ],
    }),
  },
  warrior: { name: 'Guerrero', view: 'de lado', wants: null, hint: 'Colócate de lado o en diagonal a la cámara, a 2-3 m, con el cuerpo entero a la vista.', isometric: true, create: makeHold({ checks: [lungeHold] }) },
  dogPlankCobra: {
    name: 'Perro, plancha y cobra', view: 'de lado', wants: 'side', hint: SIDE_FLOOR, isometric: true,
    create: makeHold({
      checks: [
        (c) => { // perro boca abajo: cadera arriba, cuerpo en V
          const h = angle3(c.sh, c.hip, c.an);
          return c.hip.y < c.sh.y - 0.15 * c.torso && h > 50 && h < 115 ? { ok: true } : null;
        },
        (c) => { // plancha
          const line = angle3(c.sh, c.hip, c.an);
          if (Math.abs(c.sh.y - c.hip.y) < 0.4 * c.torso && line < 160) return { ok: false, tip: hipDeviation(c) > 0 ? 'sag' : 'pike' };
          return line >= 160 && Math.abs(hipDeviation(c)) < 0.09 ? { ok: true } : null;
        },
        (c) => (c.sh.y < c.hip.y - 0.3 * c.torso && c.hip.y > c.an.y - 0.35 * c.torso ? { ok: true } : { ok: false, tip: 'pose' }), // cobra
      ],
    }),
  },
  catCow: { name: 'Gato y vaca', view: 'de lado', wants: 'side', hint: SIDE_FLOOR, isometric: true, create: makeHold({ checks: [(c) => (quadruped(c) ? { ok: true } : { ok: false, tip: 'hands' })] }) },
  birdDog: {
    name: 'Pájaro-perro', view: 'de lado', wants: 'side', hint: SIDE_FLOOR, isometric: true,
    create: makeHold({
      checks: [
        (c) => {
          if (!quadruped(c)) return { ok: false, tip: 'hands' };
          const back = c.L.an.y < c.R.an.y ? c.L : c.R;
          if (back.an.y < c.hip.y - 0.2 * c.torso) return { ok: false, tip: 'legHigh' };
          return back.an.y < c.hip.y + 0.45 * c.torso && Math.abs(back.an.x - c.hip.x) > 0.7 * c.torso ? { ok: true } : { ok: false, tip: 'pose' };
        },
      ],
    }),
  },
  seatedFold: {
    name: 'Pinza sentada', view: 'de lado', wants: 'side', hint: SIDE_FLOOR, isometric: true,
    create: makeHold({
      checks: [
        (c) => {
          const seated = c.hip.y > c.kn.y - 0.3 * c.torso && Math.abs(c.hip.y - c.an.y) < 0.5 * c.torso;
          if (!seated) return { ok: false, tip: 'pose' };
          const f = angle3(c.sh, c.hip, c.kn);
          return f < 125 || f > 150 ? { ok: true } : { ok: false, tip: 'fold' };
        },
      ],
    }),
  },
  childRelax: { name: 'Niño y relajación', view: 'de lado', wants: 'side', hint: SIDE_FLOOR, isometric: true, create: makeHold({ checks: [(c) => (c.sh.y > c.an.y - 0.8 * c.torso && c.hip.y > c.an.y - 0.8 * c.torso ? { ok: true } : { ok: false, tip: 'floor' })] }) },

  // ===== Movilidad =====
  armCircles: {
    name: 'Círculos de brazos', view: 'de frente', wants: 'front', hint: FRONT_HINT, label: 'círculos',
    create: makeCircles({ pair: (c, k) => ({ p: c['wr' + k], o: c['sh' + k], r: dist(c['wr' + k], c['sh' + k]) / c.torso }), minR: 0.55 }),
  },
  torsoRot: {
    name: 'Rotación de tronco', view: 'de frente', wants: 'front', hint: FRONT_HINT, label: 'giros',
    create: makeOsc({
      th: 0.12, base: 0,
      measure: (c) => ((c.shL.z || 0) - (c.shR.z || 0)) / c.torso,
      flags: (c) => (dist(c.hipL, c.hipR) < 0.55 * c.shW ? ['hipsTurn'] : []),
    }),
  },
  hipCircles: {
    name: 'Círculos de cadera', view: 'de frente', wants: 'front', hint: FRONT_HINT, label: 'círculos',
    create: makeOsc({ th: 0.06, measure: (c) => (c.hip.x - c.an.x) / c.torso, flags: (c) => (Math.abs(c.sh.x - c.hip.x) > 0.22 * c.torso ? ['hipsStill'] : []) }),
  },
  legSwing: {
    name: 'Balanceo de piernas', view: 'de lado', wants: null, hint: 'Colócate de lado a la cámara, a 2-3 m, con el cuerpo entero a la vista.', label: 'balanceos',
    create: makeOsc({
      chain: side, th: 0.25, base: 0,
      measure: (c) => {
        const sw = Math.abs(c.L.an.y - c.L.hip.y) < Math.abs(c.R.an.y - c.R.hip.y) ? c.L : c.R; // la pierna que se mueve es la que está más alta
        return (sw.an.x - sw.hip.x) / c.torso;
      },
      flags: (c) => (fromVertical(c.hip, c.sh) > 22 ? ['trunk'] : []),
    }),
  },
  wgs: { name: 'Estocada con rotación', view: 'de lado', wants: null, hint: BODY_HINT, isometric: true, create: makeHold({ checks: [lowLunge] }) },
  deepSquat: { name: 'Sentadilla profunda', view: 'de lado', wants: 'side', hint: BODY_HINT, isometric: true, create: makeHold({ checks: [deepSquat] }) },
  quadStand: {
    name: 'Cuádriceps de pie', view: 'de lado', wants: 'side', hint: BODY_HINT, isometric: true,
    create: makeHold({
      checks: [
        (c) => {
          const up = c.L.an.y < c.R.an.y ? c.L : c.R;
          if (up.an.y > c.hip.y + 0.5 * c.torso) return { ok: false, tip: 'heel' };
          if (Math.abs(c.L.kn.x - c.R.kn.x) > 0.3 * c.torso) return { ok: false, tip: 'kneesTogether' };
          return { ok: true };
        },
      ],
    }),
  },
  fwdFold: { name: 'Flexión adelante', view: 'de lado', wants: 'side', hint: BODY_HINT, isometric: true, create: makeHold({ checks: [(c) => (angle3(c.sh, c.hip, c.kn) < 95 ? { ok: true } : { ok: false, tip: 'fold' })] }) },
  chestOpen: {
    name: 'Apertura de pecho', view: 'de frente', wants: 'front', hint: FRONT_HINT, isometric: true,
    create: makeHold({ chain: frontChain, checks: [(c) => (c.wrL.y > c.hip.y - 0.1 * c.torso && c.wrR.y > c.hip.y - 0.1 * c.torso && dist(c.wrL, c.wrR) < 0.6 * c.shW ? { ok: true } : { ok: false, tip: 'pose' })] }),
  },
  figure4: { name: 'Figura 4', view: 'de lado', wants: 'side', hint: SIDE_FLOOR, isometric: true, create: makeHold({ checks: [(c) => (lying(c) && Math.min(c.L.kn.y, c.R.kn.y) < c.hip.y - 0.25 * c.torso ? { ok: true } : { ok: false, tip: 'pose' })] }) },
  hipFlexor: { name: 'Flexor de cadera', view: 'de lado', wants: 'side', hint: BODY_HINT, isometric: true, create: makeHold({ checks: [(c) => { const r = lowLunge(c); if (r.ok && fromVertical(c.hip, c.sh) > 30) return { ok: false, tip: 'trunk' }; return r; }] }) },

  // ===== Calistenia =====
  chairDip: {
    name: 'Fondos en silla', view: 'de lado', wants: 'side', hint: BODY_HINT,
    create: makeSideAnalyzer({ lo: 125, hi: 158, good: 105, minMs: 500, measure: (c) => ({ signal: angle3(c.sh, c.el, c.wr) }) }),
  },
  pikePush: {
    name: 'Flexión en pica', view: 'de lado', wants: 'side', hint: SIDE_FLOOR,
    create: makeSideAnalyzer({
      lo: 125, hi: 158, good: 100, minMs: 500,
      measure: (c) => ({ signal: angle3(c.sh, c.el, c.wr), hip: angle3(c.sh, c.hip, c.an) }),
      flags: (c, m) => (m.hip > 135 ? ['pikeHips'] : []),
    }),
  },
  stepUp: {
    name: 'Subidas a la silla', view: 'de lado', wants: null, hint: BODY_HINT, label: 'subidas',
    create: makeSideAnalyzer({
      calib: false, lo: 55, hi: 85, good: 40, minMs: 300, shallowKey: 'rise', chain: side,
      // señal = 100 - subida de la cadera (en % del tronco) respecto a la base (de pie en el suelo)
      measure: (c, L, t, st) => {
        if (st.base === undefined || c.hip.y > st.base) st.base = c.hip.y;
        else st.base += (c.hip.y - st.base) * 0.003;
        return { signal: 100 - ((st.base - c.hip.y) / c.torso) * 100 };
      },
    }),
  },
  legRaise: {
    name: 'Elevación de piernas', view: 'de lado', wants: 'side', hint: SIDE_FLOOR,
    create: makeSideAnalyzer({ lo: 140, hi: 163, good: 115, hiDrop: 8, minMs: 500, measure: (c) => ({ signal: angle3(c.sh, c.hip, c.kn) }) }),
  },

  // ===== HIIT =====
  highKnees: {
    name: 'Rodillas altas', view: 'de frente o de lado', wants: null, hint: 'Colócate a 2-3 m con el cuerpo entero a la vista.', label: 'rodillas',
    create: makeAlt({
      lo: 50, hi: 70, good: 30, shallowKey: 'knee', minMs: 100,
      // señal = rodilla por debajo de la cadera en % del tronco (de pie ≈ 90, rodilla a la altura de la cadera ≈ 0)
      measure: (c) => [((c.L.kn.y - c.L.hip.y) / c.torso) * 100, ((c.R.kn.y - c.R.hip.y) / c.torso) * 100],
    }),
  },
  mountainClimber: {
    name: 'Mountain climbers', view: 'de lado', wants: 'side', hint: SIDE_FLOOR, label: 'rodillas',
    create: makeAlt({
      lo: 135, hi: 165, good: 115, shallowKey: 'knee', minMs: 100,
      // distancia rodilla-hombro en % del tronco (plancha ≈ 190, rodilla al pecho ≈ 110)
      measure: (c) => [(dist(c.L.kn, c.L.sh) / c.torso) * 100, (dist(c.R.kn, c.R.sh) / c.torso) * 100],
      flags: (c) => (Math.abs(hipDeviation(c)) > 0.14 ? ['plankLine'] : []),
    }),
  },
  skater: {
    name: 'Patinador', view: 'de frente', wants: 'front', hint: FRONT_HINT, label: 'saltos',
    create: makeOsc({ th: 0.6, measure: (c) => c.hip.x / c.shW, minMs: 250 }),
  },
  burpee: {
    name: 'Burpees', view: 'de lado', wants: 'side', hint: SIDE_FLOOR, label: 'burpees',
    create: makeSideAnalyzer({
      calib: false, lo: 120, hi: 220, good: 90, shallowKey: 'floor', minMs: 700, chain: side,
      // señal = altura de los hombros sobre los tobillos en % del tronco (de pie ≈ 280, en plancha ≈ 60)
      measure: (c) => ({ signal: ((c.an.y - c.sh.y) / c.torso) * 100 }),
    }),
  },
  buttKicks: {
    name: 'Talones al glúteo', view: 'de frente o de lado', wants: null, hint: 'Colócate a 2-3 m con el cuerpo entero a la vista.', label: 'talones',
    create: makeAlt({
      lo: 130, hi: 160, good: 105, shallowKey: 'heel', minMs: 100,
      // distancia tobillo-cadera en % del tronco (de pie ≈ 180, talón al glúteo ≈ 90)
      measure: (c) => [(dist(c.L.an, c.L.hip) / c.torso) * 100, (dist(c.R.an, c.R.hip) / c.torso) * 100],
    }),
  },
});

export { ANALYZERS, makeHold, makeAlt, makeOsc, makeJumps, makePunches, makeCircles };
