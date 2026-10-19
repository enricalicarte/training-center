import {
  AdditiveBlending,
  BufferAttribute,
  CapsuleGeometry,
  Color,
  Group,
  Mesh,
  MeshStandardMaterial,
  Object3D,
  ShaderMaterial,
  SphereGeometry,
  BoxGeometry,
} from 'three';

/**
 * Avatar adulto articulado.
 *
 * El esqueleto (longitudes de hueso, posición de articulaciones) es compartido por todas las
 * poses, así que las variantes ("m"/"f") y la ropa solo cambian volúmenes y colores.
 *
 *   root ─ pelvis ─ spine ─ neck ─ head
 *                 │       └ shoulders (sh) ─ elbows (el)
 *                 └ hips (thigh) ─ knees (shin) ─ ankles (foot)
 */

const PI = Math.PI;

export const VARIANTS = {
  m: {
    shoulder: 0.162,
    hip: 0.078,
    chest: [0.152, 0.215, 0.108],
    waist: [0.118, 0.12, 0.092],
    pelvis: [0.13, 0.098, 0.1],
    limb: 1.1,
    head: [0.084, 0.099, 0.092],
    pony: false,
  },
  f: {
    shoulder: 0.146,
    hip: 0.082,
    chest: [0.132, 0.205, 0.1],
    waist: [0.1, 0.12, 0.086],
    pelvis: [0.138, 0.1, 0.102],
    limb: 0.98,
    head: [0.079, 0.095, 0.088],
    pony: true,
  },
};

export const DEFAULT_LOOK = {
  skin: 0xc89a7c,
  hair: 0x2b1f18,
  top: 0xff7a1a,
  topStyle: 'tank', // 'tank' | 'tee' | 'bra'
  bottom: 0x15110e,
  bottomStyle: 'shorts', // 'shorts' | 'tights'
  socks: 0xf3f3f3,
  shoes: 0x1c1a1a,
  sole: 0xf2efe9,
  barefoot: false,
  gloves: 0, // color de guantes (0 = sin guantes)
  band: 0, // cinta/vendas (0 = sin)
};

const muscleMats = new Map();
function muscleMaterial(key) {
  if (!muscleMats.has(key)) {
    muscleMats.set(
      key,
      new ShaderMaterial({
        transparent: true,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -2,
        uniforms: { color: { value: new Color(0xff5a30) }, opacity: { value: 0 } },
        vertexShader:
          'attribute float aa; varying float va; void main(){ va = aa; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
        fragmentShader:
          'uniform vec3 color; uniform float opacity; varying float va; void main(){ gl_FragColor = vec4(color, va * opacity); }',
      }),
    );
  }
  return muscleMats.get(key);
}

export function createAvatar(parent, base = { x: 0, z: 0 }, yaw = 0, variant = 'm', look = {}) {
  const V = VARIANTS[variant] || VARIANTS.m;
  const L = { ...DEFAULT_LOOK, ...look };
  const mat = (color, roughness) => new MeshStandardMaterial({ color, roughness });
  const mats = {
    skin: mat(L.skin, 0.7),
    top: mat(L.top, 0.62),
    bottom: mat(L.bottom, 0.65),
    socks: mat(L.socks, 0.7),
    shoes: mat(L.shoes, 0.5),
    sole: mat(L.sole, 0.6),
    hair: mat(L.hair, 0.85),
    glove: mat(L.gloves || 0xd7263d, 0.42),
    band: mat(L.band || 0xf2f2f2, 0.6),
  };

  const cap = (r, len, m, y = 0) => {
    const mesh = new Mesh(new CapsuleGeometry(r, Math.max(len, 0.001), 8, 18), m);
    mesh.position.y = y;
    mesh.castShadow = true;
    return mesh;
  };
  const ell = (sx, sy, sz, m, y = 0) => {
    const mesh = new Mesh(new SphereGeometry(1, 28, 20), m);
    mesh.scale.set(sx, sy, sz);
    mesh.position.y = y;
    mesh.castShadow = true;
    return mesh;
  };

  const muscles = {};
  const marks = [];
  const JT = { thigh: {}, shin: {}, foot: {}, sh: {}, el: {} };

  const muscle = (name, bone, sx, sy, sz, px, py, pz, phiStart, phiLen) => {
    const geo = new SphereGeometry(1, 22, 16, phiStart, phiLen);
    const uv = geo.attributes.uv;
    const alpha = new Float32Array(uv.count);
    for (let i = 0; i < uv.count; i++) {
      alpha[i] =
        Math.pow(Math.max(0, Math.sin(PI * uv.getY(i))), 0.55) *
        (phiLen < PI * 1.5 ? Math.pow(Math.max(0, Math.sin(PI * uv.getX(i))), 0.6) : 1);
    }
    geo.setAttribute('aa', new BufferAttribute(alpha, 1));
    const mesh = new Mesh(geo, muscleMaterial(name));
    mesh.scale.set(sx, sy, sz);
    mesh.position.set(px, py, pz);
    mesh.renderOrder = 6;
    mesh.visible = false;
    bone.add(mesh);
    (muscles[name] ||= []).push(mesh);
    return mesh;
  };
  const front = [0, PI];
  const back = [PI, PI];
  const outer = (side) => (side > 0 ? [PI / 2, PI] : [-PI / 2, PI]);
  const inner = (side) => (side > 0 ? [-PI / 2, PI] : [PI / 2, PI]);
  const whole = [0, PI * 2];

  const mark = (bone, x, y, z, r, kind) => {
    const o = new Object3D();
    o.position.set(x, y, z);
    bone.add(o);
    marks.push({ o, r, kind });
    return o;
  };

  const root = new Group();
  const pelvis = new Group();
  root.add(pelvis);
  parent.add(root);
  pelvis.add(ell(...V.pelvis, mats.bottom, 0));

  // tronco
  const spine = new Group();
  spine.position.y = 0.03;
  pelvis.add(spine);
  const midriff = L.topStyle === 'bra' ? mats.skin : mats.top;
  spine.add(ell(...V.chest, mats.top, 0.2 + 0.07));
  spine.add(ell(V.waist[0], V.waist[1], V.waist[2], midriff, 0.08));
  spine.add(cap(0.1, 0.1, midriff, 0.07));

  // cuello y cabeza
  const neck = new Group();
  neck.position.y = 0.43;
  spine.add(neck);
  neck.add(cap(0.04, 0.07, mats.skin, 0.045));
  const head = new Group();
  head.position.y = 0.07;
  neck.add(head);
  head.add(ell(...V.head, mats.skin, 0.105));
  const hairCap = new Mesh(new SphereGeometry(1, 28, 14, 0, PI * 2, 0, PI * 0.45), mats.hair);
  hairCap.scale.set(V.head[0] * 1.06, V.head[1] * 1.08, V.head[2] * 1.1);
  hairCap.position.set(0, 0.112, -0.006);
  hairCap.rotation.x = -0.2;
  hairCap.castShadow = true;
  head.add(hairCap);
  if (V.pony) {
    const tail = cap(0.022, 0.1, mats.hair, 0);
    tail.position.set(0, 0.095, -0.112);
    tail.rotation.x = 0.5;
    head.add(tail);
    const knot = ell(0.03, 0.03, 0.03, mats.hair, 0);
    knot.position.set(0, 0.138, -0.09);
    head.add(knot);
  }
  // ojos, cejas y orejas: dan expresión y dejan de parecer un maniquí con visera
  const eyeMat = new MeshStandardMaterial({ color: 0x15110f, roughness: 0.35 });
  for (const sx of [-1, 1]) {
    const eye = ell(0.0105, 0.0125, 0.008, eyeMat, 0.108);
    eye.position.set(sx * 0.032, 0.108, V.head[2] * 0.915);
    eye.castShadow = false;
    head.add(eye);
    const brow = ell(0.019, 0.0045, 0.007, mats.hair, 0.13);
    brow.position.set(sx * 0.033, 0.13, V.head[2] * 0.9);
    brow.rotation.z = sx * -0.12;
    brow.castShadow = false;
    head.add(brow);
    const ear = ell(0.011, 0.02, 0.014, mats.skin, 0.1);
    ear.position.set(sx * (V.head[0] - 0.002), 0.1, 0);
    head.add(ear);
  }
  const nose = ell(0.014, 0.016, 0.018, mats.skin, 0.098);
  nose.position.z = V.head[2] + 0.006;
  head.add(nose);
  if (L.band) {
    const band = new Mesh(new CapsuleGeometry(0.014, V.head[0] * 2.2, 4, 10), mats.band);
    band.rotation.z = PI / 2;
    band.position.set(0, 0.14, 0.012);
    band.scale.set(1, 1, 1.4);
    head.add(band);
  }

  // brazos
  const sleeve = L.topStyle === 'tee' ? mats.top : mats.skin;
  const makeArm = (side) => {
    const sh = new Group();
    sh.position.set(side * V.shoulder, 0.385, 0);
    spine.add(sh);
    sh.add(cap(0.037 * V.limb, 0.15, mats.skin, -0.11));
    sh.add(cap(0.047 * V.limb, 0.05, sleeve, -0.045));
    const el = new Group();
    el.position.y = -0.22;
    sh.add(el);
    el.add(cap(0.031 * V.limb, 0.14, mats.skin, -0.1));
    const wrist = new Group();
    wrist.position.y = -0.2;
    el.add(wrist);
    if (L.gloves) {
      wrist.add(ell(0.066, 0.075, 0.06, mats.glove, -0.06));
      wrist.add(cap(0.039, 0.035, mats.band, -0.005));
    } else {
      wrist.add(ell(0.032, 0.05, 0.03, mats.skin, -0.04));
      if (L.band) wrist.add(cap(0.034, 0.02, mats.band, -0.008));
    }
    mark(wrist, 0, -0.03, 0, 0.04, 'hand');
    mark(sh, 0, 0, 0, 0.05, 'body');
    JT.sh[side] = sh;
    JT.el[side] = el;
    muscle('delt', sh, 0.066, 0.074, 0.066, 0, -0.03, 0, ...whole);
    muscle('bic', sh, 0.05, 0.1, 0.05, 0, -0.12, 0, ...front);
    muscle('tri', sh, 0.05, 0.1, 0.05, 0, -0.12, 0, ...back);
  };

  // piernas
  const tights = L.bottomStyle === 'tights';
  const makeLeg = (side) => {
    const hip = new Group();
    hip.position.set(side * V.hip, -0.01, 0);
    pelvis.add(hip);
    hip.add(cap(0.066 * V.limb, 0.186, tights ? mats.bottom : mats.skin, -0.155));
    hip.add(cap(0.08 * V.limb, tights ? 0.18 : 0.08, mats.bottom, tights ? -0.12 : -0.075));
    const knee = new Group();
    knee.position.y = -0.31;
    hip.add(knee);
    knee.add(cap(0.05 * V.limb, 0.214, tights ? mats.bottom : mats.skin, -0.155));
    if (!tights && !L.barefoot) knee.add(cap(0.054, 0.1, mats.socks, -0.215));
    const ankle = new Group();
    ankle.position.y = -0.31;
    knee.add(ankle);
    if (L.barefoot) {
      const foot = new Mesh(new BoxGeometry(0.082, 0.05, 0.2), tights ? mats.bottom : mats.skin);
      foot.position.set(0, -0.045, 0.05);
      foot.castShadow = true;
      ankle.add(foot);
      const toes = ell(0.044, 0.026, 0.03, tights ? mats.bottom : mats.skin, -0.05);
      toes.position.z = 0.15;
      ankle.add(toes);
    } else {
      const shoe = new Mesh(new BoxGeometry(0.088, 0.052, 0.225), mats.shoes);
      shoe.position.set(0, -0.03, 0.055);
      shoe.castShadow = true;
      ankle.add(shoe);
      const sole = new Mesh(new BoxGeometry(0.092, 0.02, 0.232), mats.sole);
      sole.position.set(0, -0.064, 0.056);
      ankle.add(sole);
    }
    mark(ankle, 0, -0.073, 0.16, 0, 'foot');
    mark(ankle, 0, -0.073, -0.05, 0, 'foot');
    mark(hip, 0, -0.31, 0.03, 0.062, 'body');
    mark(knee, 0, 0, 0.03, 0.055, 'knee');
    JT.thigh[side] = hip;
    JT.shin[side] = knee;
    JT.foot[side] = ankle;
    muscle('quad', hip, 0.09, 0.15, 0.09, 0, -0.13, 0, ...front);
    muscle('ham', hip, 0.09, 0.15, 0.09, 0, -0.13, 0, ...back);
    muscle('abd', hip, 0.094, 0.1, 0.088, 0, -0.08, 0, ...outer(side));
    muscle('add', hip, 0.084, 0.13, 0.078, 0, -0.14, 0, ...inner(side));
    muscle('calf', knee, 0.062, 0.12, 0.064, 0, -0.12, -0.004, ...back);
    muscle('ankle', ankle, 0.066, 0.06, 0.066, 0, -0.03, 0.02, ...whole);
  };

  makeArm(1);
  makeArm(-1);
  makeLeg(1);
  makeLeg(-1);

  mark(head, 0, 0.1, 0, 0.11, 'body');
  mark(pelvis, 0, 0, 0, 0.1, 'body');
  mark(spine, 0, 0.2, 0, 0.1, 'body');

  muscle('glute', pelvis, V.pelvis[0] * 1.07, 0.108, V.pelvis[2] * 1.08, 0, -0.01, 0, ...back);
  muscle('core', spine, V.chest[0] * 0.97, 0.12, V.chest[2] * 0.98, 0, 0.13, 0, ...front);
  muscle('obl', spine, V.chest[0] * 0.97, 0.12, V.chest[2] * 0.98, 0, 0.13, 0, ...outer(1));
  muscle('obl', spine, V.chest[0] * 0.97, 0.12, V.chest[2] * 0.98, 0, 0.13, 0, ...inner(1));
  muscle('lumbar', spine, V.chest[0] * 0.97, 0.12, V.chest[2] * 0.98, 0, 0.1, 0, ...back);
  muscle('back', spine, V.chest[0] * 1.0, 0.13, V.chest[2] * 0.98, 0, 0.32, 0, ...back);
  muscle('chest', spine, V.chest[0] * 1.0, 0.11, V.chest[2] * 1.0, 0, 0.33, 0, ...front);

  const ALL = [
    pelvis,
    spine,
    neck,
    head,
    ...[1, -1].flatMap((s) => [JT.thigh[s], JT.shin[s], JT.foot[s], JT.sh[s], JT.el[s]]),
  ];

  return {
    root,
    pelvis,
    spine,
    neck,
    head,
    JT,
    marks,
    ALL,
    muscles,
    mats,
    base,
    yaw,
    variant,
    mode: null,
    blend: null,
    last: null,
  };
}

export function disposeAvatar(avatar, parent) {
  parent.remove(avatar.root);
  avatar.root.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
  });
  Object.values(avatar.mats).forEach((m) => m.dispose());
}

/** Recolorea un avatar existente sin reconstruirlo. */
export function recolor(avatar, look) {
  const L = { ...DEFAULT_LOOK, ...look };
  const m = avatar.mats;
  m.skin.color.set(L.skin);
  m.hair.color.set(L.hair);
  m.top.color.set(L.top);
  m.bottom.color.set(L.bottom);
  m.socks.color.set(L.socks);
  m.shoes.color.set(L.shoes);
  m.sole.color.set(L.sole);
  if (L.gloves) m.glove.color.set(L.gloves);
  if (L.band) m.band.color.set(L.band);
}

export const MUSCLE_NAMES = {
  quad: 'Cuádriceps',
  ham: 'Isquiotibiales',
  glute: 'Glúteos',
  calf: 'Gemelos',
  add: 'Aductores',
  abd: 'Glúteo medio',
  core: 'Abdomen',
  obl: 'Oblicuos',
  lumbar: 'Lumbares',
  back: 'Espalda',
  chest: 'Pecho',
  delt: 'Hombros',
  tri: 'Tríceps',
  bic: 'Bíceps',
  ankle: 'Tobillos',
};

/** Suaviza la opacidad de los músculos iluminados hacia `names`. */
export function highlightMuscles(avatar, names, intensity, color) {
  for (const key in avatar.muscles) {
    const meshes = avatar.muscles[key];
    const uniforms = meshes[0].material.uniforms;
    const target = names && names.includes(key) ? intensity : 0;
    uniforms.opacity.value += (target - uniforms.opacity.value) * 0.16;
    if (color) uniforms.color.value.set(color);
    const visible = uniforms.opacity.value > 0.012;
    meshes.forEach((m) => (m.visible = visible));
  }
}
