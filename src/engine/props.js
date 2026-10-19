import { BoxGeometry, CapsuleGeometry, Color, CylinderGeometry, Group, Mesh, MeshStandardMaterial } from 'three';

/**
 * Accesorios opcionales de escena. Un ejercicio pide uno con `prop: 'mat' | 'chair' | ...` y el
 * modo de pose puede devolver `{ propAt: [x, z], propYaw }` para colocarlo.
 */
export function createProps(scene, theme) {
  const acc = new Color(theme.acc);
  const dark = acc.clone().multiplyScalar(0.35);
  const wood = new MeshStandardMaterial({ color: 0x8a6a4a, roughness: 0.7 });
  const metal = new MeshStandardMaterial({ color: 0x2b2f38, roughness: 0.45, metalness: 0.5 });
  const padMat = new MeshStandardMaterial({ color: dark, roughness: 0.85 });
  const padEdge = new MeshStandardMaterial({ color: acc, roughness: 0.8 });

  const shadow = (m) => {
    m.castShadow = true;
    m.receiveShadow = true;
    return m;
  };

  // esterilla (yoga, suelo, abdominales)
  const mat = new Group();
  {
    const pad = shadow(new Mesh(new BoxGeometry(0.72, 0.016, 1.9), padMat));
    pad.position.y = 0.008;
    const edge = shadow(new Mesh(new BoxGeometry(0.74, 0.012, 1.92), padEdge));
    edge.position.y = 0.006;
    mat.add(edge, pad);
  }

  // silla estable (fondos, apoyos)
  const chair = new Group();
  {
    const seat = shadow(new Mesh(new BoxGeometry(0.44, 0.04, 0.42), wood));
    seat.position.y = 0.44;
    chair.add(seat);
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      const leg = shadow(new Mesh(new CylinderGeometry(0.018, 0.018, 0.44, 10), metal));
      leg.position.set(sx * 0.19, 0.22, sz * 0.18);
      chair.add(leg);
    }
    const back = shadow(new Mesh(new BoxGeometry(0.44, 0.34, 0.03), wood));
    back.position.set(0, 0.68, -0.2);
    chair.add(back);
  }

  // barra de dominadas / suspendida (poste y travesaño)
  const bar = new Group();
  {
    const rod = shadow(new Mesh(new CapsuleGeometry(0.018, 1.0, 4, 12), metal));
    rod.rotation.z = Math.PI / 2;
    rod.position.set(0, 2.05, 0);
    bar.add(rod);
    for (const sx of [-1, 1]) {
      const post = shadow(new Mesh(new CylinderGeometry(0.03, 0.03, 2.05, 12), metal));
      post.position.set(sx * 0.5, 1.025, 0);
      bar.add(post);
    }
  }

  const all = { mat, chair, bar };
  Object.values(all).forEach((g) => {
    g.visible = false;
    scene.add(g);
  });

  return {
    update(name, avatar, out) {
      for (const [k, g] of Object.entries(all)) g.visible = k === name;
      if (name && all[name]) {
        const at = (out && out.propAt) || [0, 0];
        all[name].position.set(avatar.base.x + at[0], 0, avatar.base.z + at[1]);
        all[name].rotation.y = (out && out.propYaw) || 0;
      }
    },
  };
}
