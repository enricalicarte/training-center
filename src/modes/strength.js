import { Vector3 } from 'three';
import {
  A,
  V3,
  armIK,
  clamp,
  elbow,
  footFlat,
  legIK,
  lerp,
  plateau,
  rad,
  registerMode,
  shin,
  shoulder,
  smooth,
  spinePoint,
  thigh,
} from '../engine/pose.js';
import { cycle } from '../engine/math.js';

/**
 * Modos de fuerza de suelo y de pie. Cada modo recibe (t, ctx, lv):
 *   t   segundos desde el inicio del ejercicio
 *   lv  parámetros del nivel: v (variante), repT (s por repetición), pause (s), …
 * Los ángulos están en grados, las posiciones en metros respecto a la base del avatar.
 */

const tmp = new Vector3();
const tmp2 = new Vector3();

/** Manos al pecho (sentadilla goblet, etc.) */
function handsToChest(spread = 0.045, y = 0.27, z = 0.2) {
  for (const s of [1, -1]) armIK(s, spinePoint(s * spread, y, z), V3(s * 0.9, -0.7, 0));
}

// ------------------------------------------------------------------------------------------------
registerMode('squat', (t, ctx, lv) => {
  const per = lv.repT;
  const s = (t % per) / per;
  const pause = (lv.pause || 0) / per;
  const v = lv.v;
  let depth = 0;
  let air = 0;
  let armSwing = 0;
  if (v === 'jump') {
    if (s < 0.38) depth = smooth(s / 0.38) * 0.75;
    else if (s < 0.5) depth = 0.75 * (1 - smooth((s - 0.38) / 0.12));
    else if (s < 0.78) {
      depth = 0;
      air = Math.sin((Math.PI * (s - 0.5)) / 0.28);
    } else if (s < 0.92) depth = smooth((s - 0.78) / 0.14) * 0.55;
    else depth = 0.55 * (1 - smooth((s - 0.92) / 0.08));
    armSwing =
      s < 0.38 ? lerp(10, -35, smooth(s / 0.38)) : s < 0.58 ? lerp(-35, 150, smooth((s - 0.38) / 0.2)) : lerp(150, 15, smooth((s - 0.6) / 0.3));
  } else {
    const up = pause ? 0.3 : 0.38;
    const down = pause ? 0.25 : 0.32;
    depth = plateau(s, up, pause + 0.05, down);
    armSwing = 10 + 80 * depth;
  }
  const hip = 8 + 90 * depth;
  const knee = 10 + 104 * depth;
  for (const side of [1, -1]) {
    thigh(side, hip, v === 'sumo' ? 16 : 5);
    shin(side, knee);
    A.JT.foot[side].rotation.x = rad(hip - knee) + rad(40 * air);
    if (v === 'arms' || v === 'jump') {
      shoulder(side, armSwing, 6);
      elbow(side, 6);
    } else if (v === 'goblet') {
      /* manos en post */
    } else {
      shoulder(side, 20, 8);
      elbow(side, 40);
    }
  }
  const lean = 8 + 30 * depth;
  A.spine.rotation.x = rad(lean);
  A.head.rotation.x = -rad(lean * 0.8);
  A.root.userData.air = 0.22 * air;
  return {
    ground: 'all',
    post() {
      if (v === 'goblet') handsToChest(0.045, 0.27, 0.2);
    },
  };
});

// ------------------------------------------------------------------------------------------------
registerMode('lunge', (t, ctx, lv) => {
  const per = lv.repT;
  const { r: rep, u } = cycle(t, per);
  const v = lv.v;
  const lead = rep % 2 ? -1 : 1;
  const walk = v === 'walk';
  const back = v === 'back';
  const step = smooth(u / 0.2) - smooth((u - 0.8) / 0.2);
  const down = smooth((u - 0.2) / 0.3) - smooth((u - 0.6) / 0.2);
  const travelled = walk ? rep * 0.52 : 0;
  const reach = 0.5;
  let frontZ;
  let restZ;
  if (walk) {
    frontZ = travelled + 0.52 * smooth(u / 0.2);
    restZ = travelled + 0.52 * smooth((u - 0.8) / 0.2);
  } else if (back) {
    frontZ = -reach * step;
    restZ = 0;
  } else {
    frontZ = reach * step;
    restZ = 0;
  }
  const lift =
    (u < 0.2 ? Math.sin((Math.PI * u) / 0.2) : u > 0.8 ? Math.sin((Math.PI * (u - 0.8)) / 0.2) : 0) * 0.12;
  const mid = (frontZ + restZ) / 2;
  const hipY = 0.7 - 0.29 * down;
  A.root.position.set(A.base.x, hipY, A.base.z + mid);
  A.spine.rotation.x = rad(6);
  A.head.rotation.x = rad(-4);
  if (lv.twist && !back) A.spine.rotation.y = lead * rad(34) * down;
  for (const s of [1, -1]) {
    shoulder(s, lv.twist ? 18 : 6, 8);
    elbow(s, lv.twist ? 70 : 10);
  }
  A.root.updateMatrixWorld(true);
  const front = lead;
  const rear = -lead;
  legIK(front, V3(front * 0.09, 0.075 + lift, A.base.z + frontZ), V3(0, 0, 1));
  legIK(rear, V3(rear * 0.09, 0.075, A.base.z + restZ), V3(0, 0, 1));
  footFlat(front, back ? 55 * down : 0);
  footFlat(rear, back ? 0 : walk ? (u < 0.8 ? 50 * down : 0) : 55 * down);
  return { ground: 'none', track: walk };
});

// ------------------------------------------------------------------------------------------------
registerMode('bridge', (t, ctx, lv) => {
  const per = lv.repT;
  const { r: rep, u } = cycle(t, per);
  const v = lv.v;
  const pause = (lv.pause || 0) / per;
  let lift;
  if (v === 'march') lift = smooth(Math.min(1, (t % (per * lv.n)) / 1));
  else lift = plateau(u, pause ? 0.2 : 0.3, pause + 0.05, pause ? 0.2 : 0.26);
  lift = clamp(lift, 0, 1);
  const hipY = 0.11 + 0.2 * lift;
  const ang = Math.asin(clamp((hipY - 0.1) / 0.415, 0, 0.95));
  A.root.rotation.x = -Math.PI / 2 - ang;
  A.root.position.set(A.base.x, hipY, A.base.z + 0.14);
  A.head.rotation.x = rad(18) * lift - ang * 0.4;
  for (const s of [1, -1]) shoulder(s, 0, 16);
  A.root.updateMatrixWorld(true);
  const hz = A.base.z + 0.14;
  const footZ = hz + 0.38;
  const swing = rep % 2 ? -1 : 1;
  for (const s of [1, -1]) {
    const tgt = V3(s * 0.12, 0.075, footZ);
    if (v === 'march') {
      if (s === swing && lift > 0.95) {
        tgt.y += 0.22 * Math.sin(Math.PI * u);
        tgt.z -= 0.06 * Math.sin(Math.PI * u);
      }
    }
    if (v === 'single' && s === swing) {
      const raised = V3(s * 0.09, hipY + 0.62 * Math.sin(ang) * lift, hz + 0.62 * Math.cos(ang) * 0.98);
      tgt.lerp(raised, smooth(lift));
    }
    legIK(s, tgt, V3(0, 1, 0.25));
    footFlat(s, v === 'single' && s === swing ? 20 * smooth(lift) : 0);
  }
  return { ground: 'none' };
});

// ------------------------------------------------------------------------------------------------
registerMode('pushup', (t, ctx, lv) => {
  const per = lv.repT;
  const s = (t % per) / per;
  const v = lv.v;
  const pause = (lv.pause || 0) / per;
  let low;
  if (lv.slow) low = s < 0.45 ? 1 - smooth(s / 0.45) : s < 0.55 ? 0 : s < 0.75 ? smooth((s - 0.55) / 0.2) : 1;
  else if (pause)
    low = s < 0.2 ? 1 - smooth(s / 0.2) : s < 0.2 + pause + 0.02 ? 0 : s < 0.45 + pause ? smooth((s - 0.22 - pause) / 0.23) : 1;
  else low = s < 0.35 ? 1 - smooth(s / 0.35) : s < 0.4 ? 0 : s < 0.75 ? smooth((s - 0.4) / 0.35) : 1;
  const knees = v === 'knees';
  const incline = lerp(knees ? 8 : 5, knees ? 22 : 19, low);
  A.root.rotation.x = rad(90 - incline);
  A.root.position.z += -0.42;
  A.head.rotation.x = -rad(46);
  for (const side of [1, -1]) {
    if (knees) {
      thigh(side, 0, 3);
      shin(side, 88);
      A.JT.foot[side].rotation.x = rad(10);
    } else {
      thigh(side, 0, 3);
      A.JT.foot[side].rotation.x = rad(2);
    }
  }
  const wide = lv.wide || 0.17;
  return {
    ground: knees ? 'knees' : 'feet',
    post() {
      for (const side of [1, -1]) {
        A.JT.sh[side].updateWorldMatrix(true, false);
        A.JT.sh[side].getWorldPosition(tmp);
        armIK(side, V3(side * wide, 0.04, tmp.z), V3(side * 0.5, 0, -1));
      }
    },
  };
});

// ------------------------------------------------------------------------------------------------
registerMode('plank', (t, ctx, lv) => {
  const v = lv.v;
  const breathe = Math.sin(t * 2.2);
  const incline = v === 'knees' ? 22 : v === 'forearm' ? 4 : 18;
  A.root.rotation.x = rad(90 - incline + breathe * 0.5);
  A.root.position.z += -0.42;
  A.head.rotation.x = -rad(48);
  const legSide = v === 'legup' ? (Math.floor(t / 3) % 2 ? -1 : 1) : 0;
  const legLift = v === 'legup' ? Math.sin(Math.PI * clamp((t % 3) / 3, 0, 1)) : 0;
  for (const s of [1, -1]) {
    if (v === 'knees') {
      thigh(s, 0, 3);
      shin(s, 88);
      A.JT.foot[s].rotation.x = rad(10);
    } else {
      thigh(s, s === legSide ? -24 * legLift : 0, 3);
      A.JT.foot[s].rotation.x = rad(2);
    }
  }
  return {
    ground: v === 'knees' ? 'knees' : 'feet',
    lift: 0,
    post() {
      const tapSide = v === 'tap' ? (Math.floor(t / 2.2) % 2 ? -1 : 1) : 0;
      const tap = v === 'tap' ? Math.sin(Math.PI * clamp((t % 2.2) / 2.2, 0, 1)) : 0;
      for (const s of [1, -1]) {
        A.JT.sh[s].updateWorldMatrix(true, false);
        A.JT.sh[s].getWorldPosition(tmp);
        if (s === tapSide && tap > 0.02) {
          A.JT.sh[-s].getWorldPosition(tmp2);
          const target = tmp2.clone().lerp(V3(s * 0.17, 0.04, tmp.z), 1 - tap);
          target.y = lerp(0.04, tmp2.y + 0.02, tap);
          target.z = lerp(tmp.z, tmp2.z + 0.04, tap);
          armIK(s, target, V3(s * 0.6, 0.3, -1));
        } else armIK(s, V3(s * 0.17, 0.04, tmp.z + (v === 'forearm' ? 0.2 : 0)), V3(s * 0.5, 0, -1));
      }
    },
  };
});

// ------------------------------------------------------------------------------------------------
registerMode('crunch', (t, ctx, lv) => {
  const per = lv.repT || 3;
  const { u } = cycle(t, per);
  const v = lv.v;
  const pause = (lv.pause || 0) / per;
  A.root.rotation.x = -Math.PI / 2;
  A.root.position.z += 0.14;
  A.head.rotation.x = rad(-6);
  const hz = A.base.z + 0.14;
  if (v === 'vsit') {
    A.root.quaternion.setFromAxisAngle(V3(0, 1, 0), A.yaw);
    A.root.position.z = A.base.z;
    const wob = Math.sin(t * 2.2) * 1.2;
    A.spine.rotation.x = rad(-36 + wob);
    A.head.rotation.x = rad(32);
    for (const s of [1, -1]) {
      thigh(s, 118 + wob, 4);
      shin(s, 6);
      A.JT.foot[s].rotation.x = rad(25);
      shoulder(s, 82, 4);
      elbow(s, 4);
    }
    return { ground: 'all' };
  }
  if (v === 'bike') {
    const c = Math.cos((Math.PI * t) / per);
    A.spine.rotation.x = rad(34);
    A.spine.rotation.y = -rad(22) * c;
    A.head.rotation.x = rad(8);
    for (const s of [1, -1]) {
      const k = s > 0 ? (c + 1) / 2 : (1 - c) / 2;
      thigh(s, lerp(40, 100, k), 4);
      shin(s, lerp(6, 100, k));
      A.JT.foot[s].rotation.x = rad(15);
    }
    return {
      ground: 'all',
      post() {
        for (const s of [1, -1]) armIK(s, A.head.localToWorld(V3(s * 0.14, 0, -0.09)), V3(s * 0.9, 0.2, 0));
      },
    };
  }
  const c = plateau(u, 0.35, pause + 0.04, 0.3);
  A.spine.rotation.x = rad(38 * c);
  A.head.rotation.x = rad(-4 + 6 * c);
  return {
    ground: 'all',
    post() {
      for (const s of [1, -1]) {
        legIK(s, V3(s * 0.12, 0.075, hz + 0.36), V3(0, 1, 0.25));
        footFlat(s, 0);
      }
      const hands = spinePoint(0, 0.2, 0.16);
      for (const s of [1, -1]) armIK(s, hands.clone().add(V3(s * 0.07, 0, 0)), V3(s * 0.9, 0.3, 0));
    },
  };
});

// ------------------------------------------------------------------------------------------------
registerMode('superman', (t, ctx, lv) => {
  const per = lv.repT || 3;
  const v = lv.v;
  const pause = (lv.pause || 0) / per;
  A.root.rotation.x = Math.PI / 2;
  A.root.position.z += -0.12;
  A.head.rotation.x = rad(-4);
  let amt;
  let alt = 0;
  if (v === 'swim') {
    amt = 1;
    alt = Math.sin(t * 6);
  } else {
    const { r, u } = cycle(t, per);
    amt = plateau(u, 0.3, pause + 0.06, 0.3);
    alt = v === 'alt' ? (r % 2 ? -1 : 1) : 0;
  }
  const k = v === 'swim' ? 0.6 : 1;
  for (const s of [1, -1]) {
    let arm = amt;
    let leg = amt;
    if (v === 'alt') {
      arm = s === alt ? amt : 0;
      leg = -s === alt ? amt : 0;
    }
    if (v === 'swim') {
      arm = (s * alt + 1) / 2;
      leg = (-s * alt + 1) / 2;
    }
    shoulder(s, 165 + 32 * arm * k, 6);
    elbow(s, 0);
    thigh(s, -22 * leg * k, 3);
    shin(s, 0);
    A.JT.foot[s].rotation.x = rad(20);
  }
  A.spine.rotation.x = rad(v === 'alt' ? -10 * amt : -(v === 'swim' ? 12 : 20) * amt);
  return { ground: 'all' };
});

// ------------------------------------------------------------------------------------------------
registerMode('jump', (t, ctx, lv) => {
  const v = lv.v;
  if (v === 'rope') {
    const ph = (t * 2 * Math.PI) / 0.42;
    const hop = Math.max(0, Math.sin(ph));
    for (const s of [1, -1]) {
      thigh(s, 6 + 14 * hop, 2);
      shin(s, 14 + 26 * hop);
      A.JT.foot[s].rotation.x = rad(30 * hop);
      shoulder(s, 18, 22);
      elbow(s, 72);
    }
    A.JT.el[1].rotation.x = -rad(70 + 12 * Math.sin(ph));
    A.JT.el[-1].rotation.x = -rad(70 + 12 * Math.sin(ph + 1));
    A.spine.rotation.x = rad(5);
    A.head.rotation.x = rad(-3);
    A.root.userData.air = 0.07 * hop;
    return { ground: 'all' };
  }
  if (v === 'side') {
    const ph = (t * 2 * Math.PI) / 0.8;
    A.root.position.x += 0.26 * Math.sin(ph);
    const g = Math.pow(Math.abs(Math.cos(ph)), 0.8);
    for (const s of [1, -1]) {
      thigh(s, 10 + 18 * (1 - g), 2);
      shin(s, 18 + 30 * (1 - g));
      A.JT.foot[s].rotation.x = rad(25 * g);
      shoulder(s, 15 + 12 * g, 22);
      elbow(s, 66);
    }
    A.spine.rotation.x = rad(10);
    A.spine.rotation.z = rad(-6) * Math.sin(ph);
    A.head.rotation.x = rad(-5);
    A.root.userData.air = 0.09 * g;
    return { ground: 'all' };
  }
  const per = lv.repT;
  const { r, u } = cycle(t, per);
  const broad = v === 'broad';
  const hold = (lv.hold || 0) / per;
  let crouch = 0;
  let airT = 0;
  let arm = 10;
  const t0 = 0.32;
  const t1 = 0.42;
  const t2 = 0.66;
  const t3 = 0.78;
  if (u < t0) {
    crouch = smooth(u / t0) * 0.8;
    arm = lerp(10, -35, smooth(u / t0));
  } else if (u < t1) {
    crouch = 0.8 * (1 - smooth((u - t0) / (t1 - t0)));
    arm = lerp(-35, broad ? 85 : 160, smooth((u - t0) / (t1 - t0)));
  } else if (u < t2) {
    airT = Math.sin((Math.PI * (u - t1)) / (t2 - t1));
    arm = broad ? lerp(85, 70, (u - t1) / (t2 - t1)) : 165;
  } else if (u < t3) {
    crouch = smooth((u - t2) / (t3 - t2)) * 0.62;
    arm = lerp(broad ? 70 : 165, 40, smooth((u - t2) / (t3 - t2)));
  } else if (hold && u < t3 + hold) {
    crouch = 0.45;
    arm = 40;
  } else {
    const y = hold ? t3 + hold : t3;
    crouch = (hold ? 0.45 : 0.62) * (1 - smooth((u - y) / (1 - y + 1e-6)));
    arm = lerp(40, 10, smooth((u - y) / (1 - y + 1e-6)));
  }
  const hip = 6 + 82 * crouch;
  const knee = 8 + 96 * crouch;
  for (const s of [1, -1]) {
    thigh(s, hip, 4);
    shin(s, knee);
    A.JT.foot[s].rotation.x = rad(hip - knee) + rad(38 * airT);
    shoulder(s, arm, 6);
    elbow(s, 8);
  }
  const lean = 6 + 28 * crouch + (broad ? 10 * airT : 0);
  A.spine.rotation.x = rad(lean);
  A.head.rotation.x = -rad(lean * 0.7);
  A.root.userData.air = (broad ? 0.3 : 0.26) * airT;
  if (broad) {
    const base = r * 0.72;
    const s2 = u < t1 ? 0 : u < t2 ? smooth((u - t1) / (t2 - t1)) : 1;
    A.root.position.z += base + 0.72 * s2;
  }
  return { ground: 'all', track: broad };
});
