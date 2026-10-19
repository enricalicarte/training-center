// Movilidad dinámica y cardio sin material: círculos, balanceos, saltos, burpees…
import {
  A, V3, armIK, legIK, footFlat, thigh, shin, shoulder, elbow, rad, smooth, clamp, lerp, registerMode,
  applyKeyPose, makePose, lerpAny, spinePoint, mirrorPose, pingpong,
} from '../engine/pose.js';
import { curve } from '../engine/math.js';
import { POSES, blendPose } from './keyframe.js';

const TAU = Math.PI * 2;
const stand = () => makePose((n) => {
  n.py = 0.695;
  n.F[1][0] = 0.1; n.F[-1][0] = -0.1;
});

// Círculos de brazos: hacia delante/atrás, ambos a la vez o alternos
registerMode('armCircles', (t, ctx, lv) => {
  const ph = (t / lv.cyc) * TAU * (lv.dir || 1);
  const p = stand();
  const r = lv.r || 0.42;
  for (const s of [1, -1]) {
    const q = ph + (lv.alt && s < 0 ? Math.PI : 0);
    p.H[s] = [s * 0.2, 1.08 + r * Math.cos(q), 0.02 + r * Math.sin(q), s * 0.9, -0.1, 0];
  }
  p.lean = 2 + 2 * Math.sin(ph); p.hd = -2;
  applyKeyPose(p);
  return { ground: 'feet' };
});

// Círculos de cadera con las manos en la cintura
registerMode('hipCircles', (t, ctx, lv) => {
  const ph = (t / lv.cyc) * TAU * (lv.dir || 1);
  const p = stand();
  const r = lv.r || 0.05;
  p.F[1][0] = 0.15; p.F[-1][0] = -0.15;
  p.py = 0.68;
  p.hx = r * Math.cos(ph); p.hz = r * Math.sin(ph);
  p.pp = 7 * Math.sin(ph); p.pr = 6 * Math.cos(ph);
  p.lean = 3 - 5 * Math.sin(ph); p.sr = -5 * Math.cos(ph);
  for (const s of [1, -1]) p.H[s] = [s * 0.2, 0.84, 0.0, s * 1, -0.1, -0.8];
  applyKeyPose(p);
  return { ground: 'feet' };
});

// Rotación de tronco con brazos en cruz
registerMode('torsoRot', (t, ctx, lv) => {
  const ph = Math.sin((t / lv.cyc) * TAU);
  const p = stand();
  p.F[1][0] = 0.14; p.F[-1][0] = -0.14;
  p.syw = (lv.amp || 55) * ph; p.hyw = 0.6 * (lv.amp || 55) * ph; p.pyw = 8 * ph;
  p.lean = 3;
  applyKeyPose(p);
  A.root.updateMatrixWorld(true);
  for (const s of [1, -1]) armIK(s, spinePoint(s * 0.52, 0.27, 0.05), V3(s * 0.5, -0.5, -0.4));
  return { ground: 'feet' };
});

// Balanceo de pierna (adelante-atrás o lateral). Un lado por serie.
registerMode('legSwing', (t, ctx, lv) => {
  const side = ctx.side > 0 ? 1 : -1;
  const ph = Math.sin((t / lv.cyc) * TAU);
  const lat = lv.v === 'lateral';
  thigh(-side, 3, 0); shin(-side, 4);
  if (lat) {
    thigh(side, 2, 32 * (ph * 0.5 + 0.3) * 1.1);
    shin(side, 6);
  } else {
    thigh(side, 8 + 48 * ph + 6, 0);
    shin(side, ph < 0 ? 10 + 14 * -ph : 6);
  }
  footFlat(side, ph * 12);
  footFlat(-side, 0);
  A.root.position.x += -side * 0.015;
  A.spine.rotation.x = rad(2 - 4 * ph * (lat ? 0 : 1));
  shoulder(1, 0, 52); shoulder(-1, 0, 52);
  elbow(1, 8); elbow(-1, 8);
  return { ground: 'feet' };
});

// Estocada con rotación (el mejor estiramiento del mundo)
registerMode('wgs', (t, ctx, lv) => {
  const cyc = lv.cyc || 8;
  const u = (t % cyc) / cyc;
  const stepsK = [[0, 0, 0], [0.2, 1, 0], [0.45, 1, 1], [0.7, 1, 0], [0.88, 1, 0], [1, 0, 0]];
  const [a, b] = curve(stepsK, u);
  const base = lerpAny(POSES.lungeLow, POSES.wgs1, clamp(a, 0, 1));
  let p = lerpAny(base, POSES.wgs2, clamp(b, 0, 1));
  if (!(ctx.side > 0)) p = mirrorPose(p);
  applyKeyPose(p);
  return { ground: 'all' };
});

// ------------------------------------------------------------------------------------------------
// CARDIO
registerMode('jacks', (t, ctx, lv) => {
  const per = lv.repT || 0.9;
  const ph = (t % per) / per;
  const open = pingpong(ph);
  const air = Math.abs(Math.sin(ph * TAU)) * (lv.hop ?? 0.05);
  for (const s of [1, -1]) {
    thigh(s, 4, 3 + 24 * open);
    shin(s, 6 + 8 * (1 - open));
    footFlat(s, 0);
    shoulder(s, 0, lerp(8, lv.half ? 100 : 165, open));
    elbow(s, 6);
  }
  A.spine.rotation.x = rad(3);
  A.root.userData.air = air;
  return { ground: 'all' };
});

registerMode('highKnees', (t, ctx, lv) => {
  const per = lv.repT || 0.5;
  const ph = (t / per) * TAU;
  for (const s of [1, -1]) {
    const m = Math.max(0, Math.sin(ph + (s > 0 ? 0 : Math.PI)));
    const arm = Math.sin(ph + (s > 0 ? Math.PI : 0));
    thigh(s, 6 + (lv.h || 92) * m, 3);
    shin(s, 8 + 84 * m);
    footFlat(s, 14 * m);
    shoulder(s, 38 * arm, 8);
    elbow(s, 95);
  }
  A.spine.rotation.x = rad(5);
  A.head.rotation.x = rad(-4);
  A.root.userData.air = 0.035 * Math.abs(Math.sin(ph));
  return { ground: 'all' };
});

registerMode('kicks', (t, ctx, lv) => {
  const per = lv.repT || 0.6;
  const ph = (t / per) * TAU;
  for (const s of [1, -1]) {
    const m = Math.max(0, Math.sin(ph + (s > 0 ? 0 : Math.PI)));
    const arm = Math.sin(ph + (s > 0 ? Math.PI : 0));
    thigh(s, -6 * m + 4, 3);
    shin(s, 8 + 125 * m);
    footFlat(s, -20 * m);
    shoulder(s, 28 * arm, 8);
    elbow(s, 85);
  }
  A.spine.rotation.x = rad(8);
  A.root.userData.air = 0.035 * Math.abs(Math.sin(ph));
  return { ground: 'all' };
});

registerMode('skater', (t, ctx, lv) => {
  const per = lv.repT || 1.6;
  const ph = (t / per) * TAU;
  const sn = Math.sin(ph);
  const X = 0.34;
  const bx = X * sn;
  A.root.position.x += bx;
  const dir = Math.cos(ph) > 0 ? 1 : -1;
  const hop = Math.abs(Math.cos(ph));
  A.root.userData.air = 0.07 * (1 - Math.abs(sn)) * 0.9;
  A.spine.rotation.x = rad(18);
  A.spine.rotation.z = rad(-10 * sn);
  A.head.rotation.x = rad(-8);
  A.root.position.y = 0;
  return {
    ground: 'none',
    post() {
      const hipY = 0.58 + 0.04 * (1 - Math.abs(sn)) - 0.05 * (1 - hop);
      A.root.position.y = hipY + (A.root.userData.air || 0);
      A.root.updateMatrixWorld(true);
      for (const s of [1, -1]) {
        const w = (s * sn + 1) / 2;
        const k = smooth(clamp((w - 0.5) / 0.4, 0, 1));
        const planted = [A.base.x + s * X, 0.075, A.base.z];
        const free = [A.base.x + bx - s * 0.14, 0.17 + 0.05 * (1 - k), A.base.z - 0.3];
        const tgt = V3(lerp(free[0], planted[0], k), lerp(free[1], planted[1], k), lerp(free[2], planted[2], k));
        legIK(s, tgt, V3(0, 0.3, 1));
        footFlat(s, 0);
        armIK(s, spinePoint(-s * sn * 0.3 + s * 0.05, 0.12, 0.26 + 0.1 * -s * sn), V3(s * 0.8, -0.6, 0));
      }
    },
  };
});

registerMode('mountain', (t, ctx, lv) => {
  const per = lv.repT || 0.8;
  const ph = (t / per) * TAU;
  A.root.rotation.x = rad(90 - 18);
  A.root.position.z += -0.42;
  A.root.position.y = 0.378; // altura fija: la pierna que avanza no debe "levantar" el cuerpo
  A.head.rotation.x = -rad(46);
  for (const s of [1, -1]) {
    const m = Math.max(0, Math.sin(ph + (s > 0 ? 0 : Math.PI)));
    thigh(s, 4 + (lv.h || 78) * m, 3);
    shin(s, 6 + 88 * m);
    A.JT.foot[s].rotation.x = rad(2 + 10 * m);
  }
  const post = () => {
    for (const s of [1, -1]) {
      A.JT.sh[s].updateWorldMatrix(true, false);
      const sp = A.JT.sh[s].getWorldPosition(V3());
      armIK(s, V3(s * 0.17, 0.04, sp.z), V3(s * 0.5, 0, -1));
    }
  };
  return { ground: 'none', post };
});

const BURPEE = {
  times: [0, 0.12, 0.28, 0.4, 0.5, 0.64, 0.78, 0.92, 1],
  poses: ['montana', 'burpSquat', 'plank', 'plank', 'burpSquat', 'montanaUp', 'montana', 'montana', 'montana'],
};
registerMode('burpee', (t, ctx, lv) => {
  const per = lv.repT || 3.6;
  const u = (t % per) / per;
  const T = BURPEE.times;
  let i = 0;
  while (i < T.length - 2 && u > T[i + 1]) i++;
  const k = smooth(clamp((u - T[i]) / (T[i + 1] - T[i]), 0, 1));
  let names = BURPEE.poses;
  if (lv.noPush) names = names;
  applyKeyPose(blendPose(POSES[names[i]], POSES[names[i + 1]], k));
  const jumpU = clamp((u - 0.58) / 0.2, 0, 1);
  A.root.userData.air = u > 0.58 && u < 0.78 ? 0.26 * Math.sin(Math.PI * jumpU) : 0;
  return { ground: 'all' };
});
