// Calistenia con silla: fondos, flexiones inclinadas, pica, búlgara, subidas, elevaciones.
import {
  A, V3, armIK, legIK, footFlat, thigh, shin, shoulder, elbow, rad, smooth, clamp, lerp, plateau, registerMode,
  applyKeyPose, makePose, lerpAny, cycle,
} from '../engine/pose.js';
import { POSES } from './keyframe.js';

const SEAT = 0.46; // altura del asiento de la silla (ver props.js)

/** Fracción 0..1 "abajo" de una repetición con ida, pausa y vuelta. */
function repLow(u, pause = 0) {
  // pause = fracción de la repetición que se pasa abajo; subida y bajada se reparten el resto
  const hold = pause + 0.06;
  const rest = Math.max(0.2, 1 - hold);
  return plateau(u, rest * 0.52, hold, rest * 0.48);
}

// Fondos en silla: manos atrás en el asiento, cuerpo sube y baja
registerMode('chairDip', (t, ctx, lv) => {
  const per = lv.repT;
  const { u } = cycle(t, per);
  const low = repLow(u, (lv.pause || 0) / per);
  const p = makePose((n) => {
    n.py = lerp(0.47, 0.2, low);
    n.hz = 0.1 - 0.01 * low;
    n.lean = lerp(-4, 4, low);
    n.hd = -4;
    n.pp = lerp(-6, -12, low);
    const fz = lv.v === 'bent' ? 0.4 : 0.55;
    n.F[1] = [0.1, 0.075, fz, 0, 0, 1, 0, 0];
    n.F[-1] = [-0.1, 0.075, fz, 0, 0, 1, 0, 0];
    if (lv.v === 'legup') {
      const lift = plateau(u, 0.3, 0.3, 0.3);
      n.F[1] = [0.1, lerp(0.075, 0.28, lift), 0.5, 0, 0, 1, 0, 0];
    }
    const hy = SEAT + 0.015;
    n.H[1] = [0.2, hy, -0.15, 0.6, 0.2, -1];
    n.H[-1] = [-0.2, hy, -0.15, -0.6, 0.2, -1];
  });
  applyKeyPose(p);
  return { ground: 'none', propAt: [0, -0.3], propYaw: 0 };
});

// Flexión inclinada con las manos en la silla
registerMode('incline', (t, ctx, lv) => {
  const per = lv.repT;
  const { u } = cycle(t, per);
  const low = repLow(u, (lv.pause || 0) / per);
  const tilt = lerp(34, 48, low);
  A.root.rotation.x = rad(90 - tilt);
  A.root.position.z += -0.4;
  A.head.rotation.x = -rad(46);
  for (const s of [1, -1]) {
    thigh(s, 0, 3);
    A.JT.foot[s].rotation.x = rad(2);
  }
  const out = {
    ground: 'feet',
    propYaw: Math.PI,
    propAt: [0, 0.4],
    post() {
      for (const s of [1, -1]) {
        A.JT.sh[s].updateWorldMatrix(true, false);
        const sp = A.JT.sh[s].getWorldPosition(V3());
        armIK(s, V3(s * 0.2, SEAT + 0.03, sp.z), V3(s * 0.5, 0, -1));
        out.propAt = [0, sp.z - A.base.z];
      }
    },
  };
  return out;
});

// Flexión en pica: cadera arriba, la cabeza baja entre las manos
registerMode('pike', (t, ctx, lv) => {
  const per = lv.repT;
  const { u } = cycle(t, per);
  const low = repLow(u, (lv.pause || 0) / per);
  const k = lv.feet ? 0 : 0;
  applyKeyPose(lerpAny(POSES.dog, POSES.pikeLow, low));
  return { ground: 'all' };
});

// Sentadilla búlgara: pie trasero en la silla
registerMode('bulgarian', (t, ctx, lv) => {
  const per = lv.repT;
  const { u } = cycle(t, per);
  const low = repLow(u, (lv.pause || 0) / per);
  const front = ctx.side > 0 ? 1 : -1;
  const hipY = lerp(0.665, 0.42, low);
  A.root.position.set(A.base.x, hipY, A.base.z + lerp(-0.05, 0.03, low));
  A.spine.rotation.x = rad(lerp(4, 22, low));
  A.head.rotation.x = rad(-8);
  for (const s of [1, -1]) {
    if (lv.arms === 'chest') {
      shoulder(s, 70, 6); elbow(s, 120);
    } else {
      shoulder(s, 4 + 20 * low, 10); elbow(s, 18);
    }
  }
  A.root.updateMatrixWorld(true);
  legIK(front, V3(A.base.x + front * 0.1, 0.075, A.base.z + 0.36), V3(0, 0.3, 1));
  footFlat(front, 0);
  legIK(-front, V3(A.base.x - front * 0.1, SEAT + 0.085, A.base.z - 0.6), V3(0, 0.3, 1));
  A.JT.foot[-front].rotation.x = rad(40);
  return { ground: 'none', propAt: [0, -0.62], propYaw: 0 };
});

// Subida a la silla alternando piernas
registerMode('stepUp', (t, ctx, lv) => {
  const per = lv.repT;
  const { r, u } = cycle(t, per);
  const lead = r % 2 ? -1 : 1;
  const rise = smooth(clamp(u / 0.35, 0, 1)) * (1 - smooth(clamp((u - 0.6) / 0.32, 0, 1)));
  const knee = lv.knee ? smooth(clamp((u - 0.35) / 0.15, 0, 1)) * (1 - smooth(clamp((u - 0.5) / 0.15, 0, 1))) : 0;
  const hipY = 0.7 - 0.04 + 0.44 * rise;
  A.root.position.set(A.base.x, hipY, A.base.z + 0.3 * rise);
  A.spine.rotation.x = rad(8 + 6 * (1 - rise));
  A.head.rotation.x = rad(-6);
  A.root.updateMatrixWorld(true);
  const zChair = A.base.z + 0.42;
  const stepOn = smooth(clamp(u / 0.18, 0, 1)) * (1 - smooth(clamp((u - 0.78) / 0.18, 0, 1)));
  legIK(lead, V3(A.base.x + lead * 0.1, lerp(0.075 + 0.1 * Math.sin(Math.PI * clamp(u / 0.2, 0, 1)), SEAT + 0.085, stepOn), lerp(A.base.z + 0.05, zChair, stepOn)), V3(0, 0.3, 1));
  footFlat(lead, 0);
  const trailLift = smooth(clamp((u - 0.3) / 0.25, 0, 1)) * (1 - smooth(clamp((u - 0.55) / 0.3, 0, 1)));
  const tz = A.base.z + 0.3 * rise;
  legIK(-lead, V3(A.base.x - lead * 0.1, 0.075 + (lv.knee ? 0.55 : 0.18) * trailLift, tz + 0.1 * trailLift - 0.05 * (1 - rise)), V3(0, 0.3, 1));
  footFlat(-lead, 0);
  for (const s of [1, -1]) {
    shoulder(s, lv.knee ? 40 * (s === -lead ? 1 : -0.5) * trailLift : 10 + 20 * rise, 10);
    elbow(s, lv.knee ? 80 : 20);
  }
  return { ground: 'none', propAt: [0, 0.42], propYaw: Math.PI };
});

// Elevación de piernas tumbado
registerMode('legRaise', (t, ctx, lv) => {
  const per = lv.repT;
  const { u } = cycle(t, per);
  const k = plateau(u, 0.4, (lv.pause || 0) / per + 0.05, 0.4);
  A.root.rotation.x = -Math.PI / 2;
  A.root.position.z += 0.14;
  A.head.rotation.x = rad(-6 + (lv.crunch ? 10 : 0));
  if (lv.crunch) A.spine.rotation.x = rad(24 * k);
  const bend = lv.bent ? 70 : 0;
  for (const s of [1, -1]) {
    thigh(s, lerp(lv.low ? 12 : 22, 92, k), 3);
    shin(s, bend * (1 - k * 0.4));
    A.JT.foot[s].rotation.x = rad(40);
    shoulder(s, 0, 14);
    elbow(s, 0);
  }
  return { ground: 'all' };
});
