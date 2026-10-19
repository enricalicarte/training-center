import { Euler, Quaternion, Vector3 } from 'three';
import { clamp, rad, smooth, curve, plateau, pingpong, cycle } from './math.js';
import { BONE, solveTwoBone } from './ik.js';

/**
 * Sistema de poses.
 *
 * Cada "modo" es una función `(t, ctx, level) => result` que coloca al avatar para el instante
 * `t` (segundos). Los modos se registran con `registerMode`. `stepAvatar` se encarga de resetear
 * el esqueleto, ejecutar el modo, mezclar con la pose anterior (transiciones suaves), suavizar
 * los huesos superiores y pegar el avatar al suelo.
 *
 * Hay dos estilos de modo:
 *   1. Procedurales: usan los helpers de abajo (thigh/shin/shoulder/elbow, ik de pies y manos).
 *   2. Por fotogramas ("pose"): una pose es un objeto de datos {py, hx, hz, pp, pyw, pr, lean,
 *      syw, sr, hd, hyw, F:{1,-1}, H:{1,-1}} que se resuelve con `applyKeyPose`.
 */

export const modes = {};
export const registerMode = (name, fn) => {
  modes[name] = fn;
};

// ----- contexto de avatar actual (se fija en stepAvatar) ---------------------------------------
export let A = null; // avatar activo
const Y_UP = new Vector3(0, 1, 0);
const tmpQ = new Quaternion();
const tmpQ2 = new Quaternion();
const tmpE = new Euler();
const tmpV = new Vector3();

export const V3 = (x = 0, y = 0, z = 0) => new Vector3(x, y, z);

// ----- helpers de huesos (grados) --------------------------------------------------------------
/** Muslo: flexión hacia delante `deg`, abducción `abd` (se invierte según el lado). */
export const thigh = (side, deg, abd = 0) => A.JT.thigh[side].rotation.set(-rad(deg), 0, rad(abd * side));
export const shin = (side, deg) => (A.JT.shin[side].rotation.x = rad(deg));
export const shoulder = (side, deg, abd = 8) => A.JT.sh[side].rotation.set(-rad(deg), 0, rad(abd * side));
export const elbow = (side, deg) => (A.JT.el[side].rotation.x = -rad(deg));

/** Inclinación (X) de un hueso respecto a la raíz, en el sistema local de la raíz. */
function boneAngleX(bone) {
  bone.updateWorldMatrix(true, false);
  bone.getWorldQuaternion(tmpQ);
  tmpQ.premultiply(tmpQ2.copy(A.root.quaternion).invert());
  return tmpE.setFromQuaternion(tmpQ, 'XYZ').x;
}

/** Mantiene el pie con el ángulo `extra` (grados) respecto al suelo, sea cual sea la pierna. */
export const footFlat = (side, extra = 0) => {
  A.JT.foot[side].rotation.x = -boneAngleX(A.JT.shin[side]) + rad(extra);
};

/** Altura mínima del tobillo para que la planta del pie no atraviese el suelo (pie girado `deg`). */
export const ankleLift = (deg) => {
  const t = rad(deg);
  return deg >= 0
    ? 0.072 * Math.cos(t) + 0.1675 * Math.sin(t) + 0.004
    : 0.072 * Math.cos(t) + 0.0575 * Math.sin(-t) + 0.004;
};

const hipTarget = new Vector3();
const hipPole = new Vector3();
/**
 * Coloca un pie en una posición (x, y, z) del mundo (relativa a la base del avatar) con IK.
 * `yaw` gira el sistema de coordenadas de la pose (radianes).
 */
export function placeFoot(side, x, y, z, pitchDeg = 0, yaw = 0, spread = 0.12) {
  hipTarget.set(x, y, z);
  hipPole.set(side * spread * Math.cos(yaw) + Math.sin(yaw), 0, -side * spread * Math.sin(yaw) + Math.cos(yaw));
  solveTwoBone(A.JT.thigh[side], A.JT.shin[side], hipTarget, BONE.thigh, BONE.shin, hipPole, 'leg');
  footFlat(side, pitchDeg);
}

const handTarget = new Vector3();
const handPole = new Vector3();
/** IK de brazo hacia un punto del mundo; `pole` indica hacia dónde apunta el codo. */
export function placeHand(side, target, pole) {
  handTarget.copy(target);
  handPole.copy(pole);
  solveTwoBone(A.JT.sh[side], A.JT.el[side], handTarget, BONE.upperArm, BONE.foreArm, handPole, 'arm');
}


/** IK directo de pierna/brazo con un objetivo de mundo y un polo (sin yaw ni separación). */
export const legIK = (side, target, pole) =>
  solveTwoBone(A.JT.thigh[side], A.JT.shin[side], target, BONE.thigh, BONE.shin, pole, 'leg');
export const armIK = (side, target, pole) =>
  solveTwoBone(A.JT.sh[side], A.JT.el[side], target, BONE.upperArm, BONE.foreArm, pole, 'arm');
export const lerp = (a, b, t) => a + (b - a) * t;

/** Punto en coordenadas locales de la columna → mundo. */
export const spinePoint = (x, y, z) => A.spine.localToWorld(V3(x, y, z));

// ----- pose en pie "base" para modos con manos y pies colocados por IK -----------------------
export const newStance = () => ({
  py: 0.6,
  hx: 0,
  hz: 0,
  yaw: -32,
  syaw: 0,
  lean: 8,
  roll: 0,
  hd: 4,
  lf: [0.14, 0.075, 0.2, 0],
  rf: [-0.14, 0.075, -0.26, 6],
  hand: {},
  ryaw: 0,
});

const GUARD_HAND = { 1: [0.115, 0.4, 0.27], '-1': [-0.12, 0.38, 0.21] };
export const guardPole = (side) => V3(side * 0.7, -0.8, -0.25);

/** Aplica una `stance` (estilo guardia de boxeo: pies por IK, manos en guardia o libres). */
export function applyStance(s) {
  const { root, pelvis, spine, head } = A;
  root.quaternion.setFromAxisAngle(Y_UP, A.yaw + rad(s.ryaw));
  root.position.set(A.base.x + s.hx, s.py, A.base.z + s.hz);
  pelvis.rotation.y = rad(s.yaw);
  spine.rotation.y = rad(s.syaw);
  spine.rotation.x = rad(s.lean);
  spine.rotation.z = rad(s.roll);
  head.rotation.y = -(pelvis.rotation.y + spine.rotation.y) * 0.8;
  head.rotation.x = rad(s.hd);
  root.updateMatrixWorld(true);
  placeFoot(1, s.lf[0], Math.max(s.lf[1], ankleLift(s.lf[3])), s.lf[2], s.lf[3], rad(s.ryaw));
  placeFoot(-1, s.rf[0], Math.max(s.rf[1], ankleLift(s.rf[3])), s.rf[2], s.rf[3], rad(s.ryaw));
  root.updateMatrixWorld(true);
  for (const side of [1, -1]) {
    const h = s.hand[side] || {};
    const g = GUARD_HAND[side];
    let target;
    let pole = guardPole(side);
    const guard = spinePoint(g[0], g[1], g[2]);
    if (h.str !== undefined) {
      // golpe recto: del guardia hacia delante del hombro
      const shoulderPos = A.JT.sh[side].getWorldPosition(V3());
      const reach = V3(shoulderPos.x * 0.55, shoulderPos.y - 0.01, shoulderPos.z + 0.42);
      target = guard.clone().lerp(reach, clamp(h.str, -0.25, 1));
      pole = guardPole(side).lerp(V3(side * 0.5, -0.3, -0.2), clamp(h.str, 0, 1));
    } else if (h.l) {
      target = spinePoint(h.l[0], h.l[1], h.l[2]);
      if (h.pole) pole = h.pole;
    } else {
      target = guard;
    }
    placeHand(side, target, pole);
  }
}

// ----- poses por fotogramas (yoga, movilidad, calistenia…) -----------------------------------
/**
 * Una pose por fotogramas: números en metros (y grados para ángulos).
 *   F[side] = [x, y, z, pitchPie, poleX, poleY, poleZ, rollPie]   (tobillo, relativo a la base)
 *   H[side] = [x, y, z, poleX, poleY, poleZ]                      (muñeca)
 *   py/hx/hz: posición de la pelvis; pp/pyw/pr: rotación de pelvis (pitch/yaw/roll)
 *   lean/syw/sr: rotación de la columna; hd/hyw: cabeza
 */
export const basePose = () => ({
  py: 0.69,
  hx: 0,
  hz: 0,
  pp: 0,
  pyw: 0,
  pr: 0,
  lean: 2,
  syw: 0,
  sr: 0,
  hd: -2,
  hyw: 0,
  F: {
    1: [0.085, 0.075, 0, 0, 0.12, 0, 1, 0],
    '-1': [-0.085, 0.075, 0, 0, -0.12, 0, 1, 0],
  },
  H: {
    1: [0.19, 0.62, 0.03, 0.8, -0.7, 0],
    '-1': [-0.19, 0.62, 0.03, -0.8, -0.7, 0],
  },
});

/** Crea una pose editando la base (o la pose `from`). */
export const makePose = (edit, from) => {
  const p = from ? JSON.parse(JSON.stringify(from)) : basePose();
  edit(p);
  for (const s of [1, -1]) while (p.F[s].length < 8) p.F[s].push(0);
  return p;
};

export const lerpAny = (a, b, t) => {
  if (typeof a === 'number') return a + (b - a) * t;
  if (Array.isArray(a)) return a.map((v, i) => lerpAny(v, b[i] ?? v, t));
  return Object.fromEntries(Object.keys(a).map((k) => [k, lerpAny(a[k], b[k], t)]));
};

/** Espeja una pose izquierda/derecha. */
export function mirrorPose(p) {
  const o = JSON.parse(JSON.stringify(p));
  o.hx *= -1;
  o.pr *= -1;
  o.pyw *= -1;
  o.syw *= -1;
  o.sr *= -1;
  o.hyw *= -1;
  const mf = (f) => [-f[0], f[1], f[2], f[3], -f[4], f[5], f[6], -(f[7] || 0)];
  const mh = (h) => [-h[0], h[1], h[2], -h[3], h[4], h[5]];
  o.F = { 1: mf(p.F[-1]), '-1': mf(p.F[1]) };
  o.H = { 1: mh(p.H[-1]), '-1': mh(p.H[1]) };
  return o;
}

/** Como ankleLift, pero continuo para empeines apoyados (|pitch| > 100°): baja suavemente a 0. */
const ankleLiftSmooth = (deg) => {
  const a = Math.abs(deg);
  if (a <= 100) return ankleLift(deg);
  const base = ankleLift(deg > 0 ? 100 : -100);
  return base * Math.max(0, 1 - (a - 100) / 70);
};

const pFoot = new Vector3();
const pFootPole = new Vector3();
const pHand = new Vector3();
const pHandPole = new Vector3();
export function applyKeyPose(p) {
  const { root, pelvis, spine, head } = A;
  root.position.set(A.base.x + p.hx, p.py, A.base.z + p.hz);
  pelvis.rotation.set(rad(p.pp), rad(p.pyw), rad(p.pr));
  spine.rotation.set(rad(p.lean), rad(p.syw), rad(p.sr));
  head.rotation.set(rad(p.hd), rad(p.hyw), 0);
  root.updateMatrixWorld(true);
  for (const s of [1, -1]) {
    const f = p.F[s];
    pFoot.set(f[0], Math.max(f[1], ankleLiftSmooth(f[3])), f[2]);
    pFootPole.set(f[4], f[5], f[6]);
    solveTwoBone(A.JT.thigh[s], A.JT.shin[s], pFoot, BONE.thigh, BONE.shin, pFootPole, 'leg');
    footFlat(s, f[3]);
    if (f[7]) A.JT.foot[s].rotation.z = rad(f[7]);
  }
  root.updateMatrixWorld(true);
  for (const s of [1, -1]) {
    const h = p.H[s];
    pHand.set(h[0], h[1], h[2]);
    pHandPole.set(h[3], h[4], h[5]);
    solveTwoBone(A.JT.sh[s], A.JT.el[s], pHand, BONE.upperArm, BONE.foreArm, pHandPole, 'arm');
  }
}

// ----- paso del avatar -------------------------------------------------------------------------
const scratch = new Vector3();

function snapshot(av) {
  return {
    q: av.ALL.map((b) => b.quaternion.clone()),
    rq: av.root.quaternion.clone(),
    rp: av.root.position.clone(),
  };
}
function blendSnap(a, b, t) {
  return {
    q: a.q.map((q, i) => q.clone().slerp(b.q[i], t)),
    rq: a.rq.clone().slerp(b.rq, t),
    rp: a.rp.clone().lerp(b.rp, t),
  };
}
function restoreSnap(av, s) {
  av.ALL.forEach((b, i) => b.quaternion.copy(s.q[i]));
  av.root.quaternion.copy(s.rq);
  av.root.position.copy(s.rp);
}

function smoothUpper(av, dt, reset, active) {
  const bones = [av.spine, av.neck, av.head, av.JT.sh[1], av.JT.sh[-1], av.JT.el[1], av.JT.el[-1]];
  if (!av.sm || reset) av.sm = new Map();
  const k = 1 - Math.exp(-Math.max(dt, 0) / 0.055);
  bones.forEach((b, i) => {
    let q = av.sm.get(b);
    if (!q) {
      q = b.quaternion.clone();
      av.sm.set(b, q);
      return;
    }
    if (i < 3 || active) {
      q.slerp(b.quaternion, k);
      b.quaternion.copy(q);
    } else q.copy(b.quaternion);
  });
}

function resetRig(av) {
  av.ALL.forEach((b) => b.rotation.set(0, 0, 0));
  av.root.position.set(av.base.x, 0, av.base.z);
  av.root.quaternion.setFromAxisAngle(Y_UP, av.yaw);
  av.root.userData.air = 0;
}

modes.idle = (t) => {
  thigh(1, 3);
  thigh(-1, 3);
  shin(1, 6);
  shin(-1, 6);
  shoulder(1, 4, 9);
  shoulder(-1, 4, 9);
  elbow(1, 14);
  elbow(-1, 14);
  A.spine.rotation.x = rad(3) + 0.01 * Math.sin(t * 1.6);
  A.head.rotation.x = rad(-2);
  return { ground: 'all' };
};

/**
 * Coloca al avatar en el instante `t` del modo `mode`.
 * @param av    avatar
 * @param mode  nombre del modo registrado
 * @param t     tiempo (s) dentro del ejercicio
 * @param ctx   estado de la sesión (lado, etc.)
 * @param level definición del nivel actual (parámetros del modo)
 * @param dt    delta de tiempo (para suavizados)
 * @param snap  true para saltar sin transición
 */
export function stepAvatar(av, mode, t, ctx, level, dt, snap) {
  A = av;
  if (av.mode !== mode || snap) {
    av.blend = av.last ? { k: 0, from: av.last } : null;
    av.mode = mode;
  }
  resetRig(av);
  const fn = modes[mode] || modes.idle;
  const out = fn(t, ctx, level) || {};
  if (av.blend) {
    av.blend.k += dt / 0.28;
    if (av.blend.k >= 1) av.blend = null;
    else restoreSnap(av, blendSnap(av.blend.from, snapshot(av), smooth(av.blend.k)));
  }
  av.spine.rotation.x += 0.009 * Math.sin(t * 1.9 + (av.role === 'B' ? 1.3 : 0));
  av.neck.rotation.x += 0.006 * Math.sin(t * 1.9 - 0.6);
  smoothUpper(av, dt, snap || !dt, !out.hold);
  av.root.updateMatrixWorld(true);
  if (out.ground !== 'none') {
    let lowest = 1e9;
    for (const m of av.marks) {
      if (out.ground === 'feet' && m.kind !== 'foot') continue;
      if (out.ground === 'knees' && m.kind !== 'knee') continue;
      m.o.getWorldPosition(scratch);
      lowest = Math.min(lowest, scratch.y - m.r);
    }
    av.root.position.y += -lowest;
  }
  av.root.position.y += (av.root.userData.air || 0) + (out.lift || 0);
  av.root.updateMatrixWorld(true);
  if (out.post) {
    out.post();
    av.root.updateMatrixWorld(true);
  }
  av.last = snapshot(av);
  return out;
}

export { smooth, curve, clamp, rad, plateau, pingpong, cycle };
