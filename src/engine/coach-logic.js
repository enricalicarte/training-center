// Lógica pura del coach de cámara: recibe puntos del cuerpo (MediaPipe Pose, 33 landmarks en píxeles)
// y devuelve repeticiones, calidad de técnica y avisos. Sin DOM, así se puede probar en Node.

export const LM = {
  nose: 0, shL: 11, shR: 12, elL: 13, elR: 14, wrL: 15, wrR: 16, hipL: 23, hipR: 24,
  knL: 25, knR: 26, anL: 27, anR: 28, heL: 29, heR: 30, ftL: 31, ftR: 32,
};

const deg = (r) => (r * 180) / Math.PI;
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

/** Ángulo en b formado por a-b-c, en grados (0..180). */
export function angle(a, b, c) {
  const v1 = { x: a.x - b.x, y: a.y - b.y };
  const v2 = { x: c.x - b.x, y: c.y - b.y };
  const d = Math.hypot(v1.x, v1.y) * Math.hypot(v2.x, v2.y);
  if (d < 1e-6) return 180;
  return deg(Math.acos(Math.max(-1, Math.min(1, (v1.x * v2.x + v1.y * v2.y) / d))));
}

/** Inclinación de un segmento respecto a la vertical (0 = vertical, 90 = horizontal). */
function fromVertical(a, b) {
  return Math.abs(deg(Math.atan2(Math.abs(b.x - a.x), Math.abs(b.y - a.y))));
}

/** Suavizado exponencial de los puntos. */
export class Smoother {
  constructor(alpha = 0.55) {
    this.a = alpha;
    this.p = null;
  }
  push(L) {
    if (!this.p) this.p = L.map((q) => ({ ...q }));
    else
      for (let i = 0; i < L.length; i++) {
        const p = this.p[i];
        const q = L[i];
        p.x += (q.x - p.x) * this.a;
        p.y += (q.y - p.y) * this.a;
        p.visibility = q.visibility;
      }
    return this.p;
  }
  reset() {
    this.p = null;
  }
}

/** Lado (izq./der.) con más visibilidad para una cadena de puntos. */
function bestSide(L, idsL, idsR) {
  const v = (ids) => ids.reduce((s, i) => s + (L[i].visibility ?? 1), 0) / ids.length;
  const l = v(idsL);
  const r = v(idsR);
  return l >= r ? { s: 'L', vis: l } : { s: 'R', vis: r };
}

/**
 * Contador de repeticiones con histéresis. La señal `s` es "esfuerzo": baja al hacer el esfuerzo
 * (cuando s < lo se considera que has llegado abajo) y vuelve a subir (s > hi) para cerrar la repetición.
 */
class Reps {
  constructor(lo, hi, minMs = 500) {
    this.lo = lo;
    this.hi = hi;
    this.minMs = minMs;
    this.reset();
  }
  reset() {
    this.phase = 'rest';
    this.min = Infinity;
    this.t0 = 0;
    this.flags = new Set();
    this.reached = false;
    this.count = 0;
    this.good = 0;
  }
  /** Marca un fallo de técnica detectado durante la repetición en curso. */
  flag(f) {
    if (this.phase === 'down') this.flags.add(f);
  }
  push(s, t) {
    if (this.phase === 'rest') {
      if (s < this.lo) {
        this.phase = 'down';
        this.min = s;
        this.t0 = t;
        this.flags = new Set();
      }
      return null;
    }
    if (s < this.min) this.min = s;
    if (s > this.hi) {
      this.phase = 'rest';
      const ok = t - this.t0 >= this.minMs;
      const out = ok ? { min: this.min, flags: this.flags } : null;
      if (ok) this.count++;
      return out;
    }
    return null;
  }
}

// ---------- analizadores ----------
// Cada uno: { id, name, view, hint, tips: {...}, create() → { push(L, t) → { status?, ev: [], metric? } } }

function sideChain(L) {
  const { s, vis } = bestSide(L, [LM.shL, LM.hipL, LM.knL, LM.anL], [LM.shR, LM.hipR, LM.knR, LM.anR]);
  const o = s === 'L' ? LM : { shL: LM.shR, elL: LM.elR, wrL: LM.wrR, hipL: LM.hipR, knL: LM.knR, anL: LM.anR, heL: LM.heR, ftL: LM.ftR };
  return { vis, sh: L[o.shL], el: L[o.elL], wr: L[o.wrL], hip: L[o.hipL], kn: L[o.knL], an: L[o.anL], he: L[o.heL], ft: L[o.ftL] };
}

const BODY_HINT = 'Colócate de lado, a 2-3 m, con el cuerpo entero a la vista.';

function makeSideAnalyzer(cfg) {
  return () => {
    const reps = new Reps(cfg.lo, cfg.hi, cfg.minMs || 600);
    return {
      reps,
      push(L, t) {
        const c = sideChain(L);
        const out = { ev: [], ok: c.vis >= 0.5 };
        if (!out.ok) return out;
        const m = cfg.measure(c, L);
        out.metric = Math.round(m.signal);
        const flags = cfg.flags(c, m, L);
        for (const f of flags) reps.flag(f);
        const done = reps.push(m.signal, t);
        if (reps.phase === 'down') out.phase = 'down';
        for (const f of flags) out.ev.push({ type: 'tip', key: f });
        if (done) {
          const issues = [...done.flags];
          if (done.min > cfg.good) issues.push('shallow');
          const good = issues.length === 0;
          if (good) reps.good++;
          out.ev.push({ type: 'rep', good, issues, n: reps.count });
        }
        return out;
      },
    };
  };
}

export const ANALYZERS = {
  squat: {
    name: 'Sentadilla',
    view: 'de lado',
    hint: BODY_HINT,
    create: makeSideAnalyzer({
      lo: 125, hi: 160, good: 105,
      measure: (c) => ({ signal: angle(c.hip, c.kn, c.an), lean: fromVertical(c.hip, c.sh) }),
      flags: (c, m) => {
        const f = [];
        if (m.signal < 125 && m.lean > 58) f.push('chest');
        if (c.he && c.ft && c.ft.y - c.he.y > 0.07 * dist(c.hip, c.an) && m.signal < 140) f.push('heels');
        return f;
      },
    }),
  },
  lunge: {
    name: 'Zancada',
    view: 'de lado',
    hint: BODY_HINT,
    create: () => {
      const reps = new Reps(125, 158, 700);
      return {
        reps,
        push(L, t) {
          const vis = Math.min(
            (L[LM.hipL].visibility + L[LM.knL].visibility + L[LM.anL].visibility) / 3,
            (L[LM.hipR].visibility + L[LM.knR].visibility + L[LM.anR].visibility) / 3,
          );
          const out = { ev: [], ok: vis >= 0.4 };
          if (!out.ok) return out;
          const kL = angle(L[LM.hipL], L[LM.knL], L[LM.anL]);
          const kR = angle(L[LM.hipR], L[LM.knR], L[LM.anR]);
          const front = Math.min(kL, kR);
          out.metric = Math.round(front);
          const sh = { x: (L[LM.shL].x + L[LM.shR].x) / 2, y: (L[LM.shL].y + L[LM.shR].y) / 2 };
          const hp = { x: (L[LM.hipL].x + L[LM.hipR].x) / 2, y: (L[LM.hipL].y + L[LM.hipR].y) / 2 };
          const lean = fromVertical(hp, sh);
          const flags = [];
          if (front < 140 && lean > 35) flags.push('upright');
          for (const f of flags) reps.flag(f);
          const done = reps.push(front, t);
          for (const f of flags) out.ev.push({ type: 'tip', key: f });
          if (done) {
            const issues = [...done.flags];
            if (done.min > 108) issues.push('shallow');
            const good = issues.length === 0;
            if (good) reps.good++;
            out.ev.push({ type: 'rep', good, issues, n: reps.count });
          }
          return out;
        },
      };
    },
  },
  pushup: {
    name: 'Flexión',
    view: 'de lado',
    hint: 'Colócate de lado y a unos 2 m, con el cuerpo entero a la vista y el móvil a la altura del suelo.',
    create: makeSideAnalyzer({
      lo: 110, hi: 155, good: 95, minMs: 600,
      measure: (c) => ({ signal: angle(c.sh, c.el, c.wr) }),
      flags: (c) => {
        const f = [];
        const dev = hipDeviation(c);
        if (dev > 0.09) f.push('sag');
        else if (dev < -0.09) f.push('pike');
        return f;
      },
    }),
  },
  bridge: {
    name: 'Puente de glúteos',
    view: 'de lado',
    hint: 'Túmbate de lado respecto a la cámara, con hombros, cadera y rodillas a la vista.',
    create: makeSideAnalyzer({
      // señal = 180 - extensión de cadera: cuanto más sube la cadera, más baja la señal
      lo: 22, hi: 45, good: 15, minMs: 700,
      measure: (c) => ({ signal: 180 - angle(c.sh, c.hip, c.kn) }),
      flags: () => [],
    }),
  },
  plank: {
    name: 'Plancha',
    view: 'de lado',
    hint: 'Colócate de lado y a unos 2 m, con el cuerpo entero a la vista.',
    isometric: true,
    create: () => {
      let okMs = 0;
      let last = null;
      let bad = 0;
      return {
        reps: { count: 0, good: 0 },
        get seconds() {
          return Math.floor(okMs / 1000);
        },
        push(L, t) {
          const c = sideChain(L);
          const out = { ev: [], ok: c.vis >= 0.5 };
          if (!out.ok) {
            last = null;
            return out;
          }
          const dt = last === null ? 0 : Math.min(t - last, 200);
          last = t;
          const line = angle(c.sh, c.hip, c.an);
          const dev = hipDeviation(c);
          out.metric = Math.round(line);
          const good = line >= 163 && Math.abs(dev) < 0.09;
          if (good) {
            okMs += dt;
            bad = 0;
          } else {
            bad += dt;
            if (bad > 1200) out.ev.push({ type: 'tip', key: dev > 0 ? 'sag' : 'pike' });
          }
          out.holding = good;
          return out;
        },
      };
    },
  },
  jacks: {
    name: 'Jumping jacks',
    view: 'de frente',
    hint: 'Colócate de frente a la cámara, a 2-3 m, con el cuerpo entero a la vista y espacio para abrir brazos y piernas.',
    create: () => {
      let state = 'closed';
      let t0 = 0;
      let armsUp = false;
      let legsOpen = false;
      let sawArms = false;
      let sawLegs = false;
      const reps = { count: 0, good: 0 };
      return {
        reps,
        push(L, t) {
          const vis = (L[LM.shL].visibility + L[LM.shR].visibility + L[LM.anL].visibility + L[LM.anR].visibility) / 4;
          const out = { ev: [], ok: vis >= 0.5 };
          if (!out.ok) return out;
          const shW = Math.max(dist(L[LM.shL], L[LM.shR]), 1e-3);
          const anW = dist(L[LM.anL], L[LM.anR]);
          const wrUp = (L[LM.wrL].y + L[LM.wrR].y) / 2 < L[LM.nose].y;
          const wrDown = (L[LM.wrL].y + L[LM.wrR].y) / 2 > (L[LM.shL].y + L[LM.shR].y) / 2;
          legsOpen = anW > shW * 1.7;
          const legsClosed = anW < shW * 1.15;
          armsUp = wrUp;
          out.metric = Math.round((anW / shW) * 10) / 10;
          if (state === 'closed' && (armsUp || legsOpen)) {
            state = 'open';
            t0 = t;
            sawArms = false;
            sawLegs = false;
          }
          if (state === 'open') {
            if (armsUp) sawArms = true;
            if (legsOpen) sawLegs = true;
            if (wrDown && legsClosed) {
              state = 'closed';
              if (t - t0 > 250) {
                reps.count++;
                const good = sawArms && sawLegs;
                const issues = [];
                if (!sawLegs) issues.push('legs');
                else if (!sawArms) issues.push('arms');
                if (good) reps.good++;
                out.ev.push({ type: 'rep', good, issues, n: reps.count });
              }
            }
          }
          return out;
        },
      };
    },
  },
};

/** Desviación vertical de la cadera respecto a la línea hombro-tobillo, relativa a su longitud (+ = cadera caída). */
function hipDeviation(c) {
  const dx = c.an.x - c.sh.x;
  const dy = c.an.y - c.sh.y;
  const len = Math.hypot(dx, dy);
  if (len < 1e-6) return 0;
  const ty = c.sh.y + ((c.hip.x - c.sh.x) / (dx || 1e-6)) * dy;
  return (c.hip.y - ty) / len;
}

export const TIPS = {
  chest: 'Pecho arriba, no te inclines tanto',
  heels: 'Mantén los talones en el suelo',
  upright: 'Tronco recto en la zancada',
  sag: 'Cadera demasiado baja, aprieta el abdomen',
  pike: 'Baja la cadera, cuerpo en línea recta',
  shallow: 'Baja un poco más',
  legs: 'Abre más las piernas',
  arms: 'Sube más los brazos',
};

export const SKELETON = [
  [11, 12], [11, 13], [13, 15], [12, 14], [14, 16], [11, 23], [12, 24], [23, 24],
  [23, 25], [25, 27], [24, 26], [26, 28], [27, 31], [28, 32],
];

/** Sesión de análisis: reúne suavizado, analizador, recuento y avisos con enfriamiento. */
export class CoachSession {
  constructor(kind) {
    this.kind = kind;
    this.def = ANALYZERS[kind];
    this.sm = new Smoother();
    this.an = this.def.create();
    this.lastTip = {};
    this.log = [];
  }
  get reps() {
    return this.an.reps;
  }
  /** Devuelve { ok, ev: [{type, ...,msg}] , metric } */
  push(raw, t) {
    const L = this.sm.push(raw);
    const r = this.an.push(L, t);
    r.ev = r.ev.filter((e) => {
      if (e.type === 'tip') {
        if (t - (this.lastTip[e.key] || -1e9) < 6000) return false;
        this.lastTip[e.key] = t;
        e.msg = TIPS[e.key];
      } else if (e.type === 'rep') {
        e.msg = e.issues.length ? TIPS[e.issues[0]] : '¡Buena técnica!';
      }
      return true;
    });
    return r;
  }
}
