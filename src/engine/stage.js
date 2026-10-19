import {
  ACESFilmicToneMapping,
  AdditiveBlending,
  CanvasTexture,
  Color,
  DirectionalLight,
  DoubleSide,
  Group,
  HemisphereLight,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PCFShadowMap,
  PerspectiveCamera,
  PlaneGeometry,
  RepeatWrapping,
  RingGeometry,
  Scene,
  SRGBColorSpace,
  WebGLRenderer,
} from 'three';
import { clamp, rad } from './math.js';
import { createAvatar, disposeAvatar, highlightMuscles, recolor } from './rig.js';
import { stepAvatar } from './pose.js';
import { createProps } from './props.js';

function paint(draw, w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  return t;
}

/**
 * Escenario 3D: renderer, luces, suelo, avatar y cámara orbital.
 * `theme` = { acc, hi, rim, floor:[c1,c2], musc }.
 */
export class Stage {
  constructor(canvas, theme) {
    this.canvas = canvas;
    this.theme = theme;
    try {
      this.renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true });
    } catch (err) {
      document.body.insertAdjacentHTML(
        'beforeend',
        '<div style="position:fixed;inset:0;display:grid;place-items:center;background:#0a0f18;color:#fff;z-index:99;text-align:center;padding:20px">Este dispositivo no soporta WebGL. Abre la página en un navegador actualizado.</div>',
      );
      throw err;
    }
    const r = this.renderer;
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    r.shadowMap.enabled = true;
    r.shadowMap.type = PCFShadowMap;
    r.toneMapping = ACESFilmicToneMapping;
    r.toneMappingExposure = 1.12;
    r.setClearColor(0, 0);

    this.scene = new Scene();
    this.camera = new PerspectiveCamera(32, 1, 0.1, 80);
    this.scene.add(new HemisphereLight(0xbfd2ff, 0x1b2a22, 0.85));

    this.key = new DirectionalLight(0xffffff, 2.6);
    this.key.castShadow = true;
    this.key.shadow.mapSize.set(2048, 2048);
    Object.assign(this.key.shadow.camera, { left: -4, right: 4, top: 4, bottom: -4, near: 0.5, far: 18 });
    this.key.shadow.bias = -4e-4;
    this.key.shadow.normalBias = 0.02;
    this.scene.add(this.key, this.key.target);

    this.rim = new DirectionalLight(new Color(theme.rim), 1.3);
    this.scene.add(this.rim, this.rim.target);

    this.buildFloor();

    this.props = createProps(this.scene, theme);
    this.cam = { az: -40, el: 8, dist: 3.5, ty: 0.8, tz: 0 };
    this.focus = { x: 0, z: 0 };
    this.scrollZ = 0;
    this.avatar = null;
    this.look = {};
    this.setAvatar('m', {});
  }

  buildFloor() {
    const t = this.theme;
    const floorTex = paint((c, w, h) => {
      for (let i = 0; i < 8; i++) {
        c.fillStyle = i % 2 ? t.floor[0] : t.floor[1];
        c.fillRect(0, (i * h) / 8, w, h / 8 + 1);
      }
      const img = c.getImageData(0, 0, w, h);
      for (let i = 0; i < img.data.length; i += 4) {
        const n = (Math.random() - 0.5) * 14;
        img.data[i] += n;
        img.data[i + 1] += n;
        img.data[i + 2] += n;
      }
      c.putImageData(img, 0, 0);
      c.fillStyle = 'rgba(255,255,255,.5)';
      c.fillRect(0, h / 2 - 3, w, 6);
    }, 512, 512);
    floorTex.wrapS = floorTex.wrapT = RepeatWrapping;
    floorTex.repeat.set(1, 2);
    floorTex.anisotropy = 8;
    this.floorTex = floorTex;

    const fade = paint((c, w, h) => {
      const g = c.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
      g.addColorStop(0, '#fff');
      g.addColorStop(0.45, '#fff');
      g.addColorStop(1, '#000');
      c.fillStyle = g;
      c.fillRect(0, 0, w, h);
    }, 256, 256);
    fade.colorSpace = '';

    this.floor = new Mesh(
      new PlaneGeometry(16, 16),
      new MeshStandardMaterial({ map: floorTex, alphaMap: fade, transparent: true, roughness: 0.95, metalness: 0 }),
    );
    this.floor.rotation.x = -Math.PI / 2;
    this.floor.receiveShadow = true;
    this.scene.add(this.floor);

    const glowTex = paint((c, w, h) => {
      const g = c.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
      g.addColorStop(0, t.acc + 'cc');
      g.addColorStop(0.5, t.acc + '48');
      g.addColorStop(1, t.acc + '00');
      c.fillStyle = g;
      c.fillRect(0, 0, w, h);
    }, 256, 256);
    this.glow = new Mesh(
      new PlaneGeometry(3.6, 3.6),
      new MeshBasicMaterial({ map: glowTex, transparent: true, depthWrite: false, blending: AdditiveBlending, opacity: 0.6 }),
    );
    this.glow.rotation.x = -Math.PI / 2;
    this.glow.position.y = 0.004;
    this.scene.add(this.glow);

    this.ring = new Mesh(
      new RingGeometry(0.8, 0.84, 72),
      new MeshBasicMaterial({ color: new Color(t.hi), transparent: true, opacity: 0.5, depthWrite: false }),
    );
    this.ring.rotation.x = -Math.PI / 2;
    this.ring.position.y = 0.006;
    this.scene.add(this.ring);
  }

  /** Cambia la paleta del escenario (suelo, brillo, aro y luz de contorno) sin recrear el renderer. */
  setTheme(theme) {
    for (const m of [this.floor, this.glow, this.ring]) {
      this.scene.remove(m);
      m.geometry.dispose();
      if (m.material.map) m.material.map.dispose();
      m.material.dispose();
    }
    this.theme = theme;
    this.rim.color.set(theme.rim);
    this.buildFloor();
  }

  setAvatar(variant, look) {
    this.look = look;
    if (this.avatar) disposeAvatar(this.avatar, this.scene);
    this.avatar = createAvatar(this.scene, { x: 0, z: 0 }, 0, variant, look);
    this.avatar.root.traverse((o) => {
      if (o.isMesh && !o.material.isShaderMaterial) o.castShadow = true;
    });
  }

  recolor(look) {
    this.look = look;
    recolor(this.avatar, look);
  }

  resize() {
    const p = this.canvas.parentElement;
    const w = p.clientWidth;
    const h = p.clientHeight;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  /**
   * Avanza un fotograma.
   * @param o { dt, time, mode, t, ctx, level, snap, ex, muscles, musclesOn, view:{az|null}, drag:{az,el}, active }
   */
  frame(o) {
    const { dt } = o;
    const av = this.avatar;
    av.base.x = 0;
    av.base.z = 0;
    const out = stepAvatar(av, o.mode, o.t, o.ctx, o.level, Math.min(dt, 0.05), !!o.snap);
    highlightMuscles(av, o.musclesOn ? o.muscles : null, 0.82 + 0.18 * Math.sin(o.time / 240), this.theme.musc);

    // props (silla, esterilla…) según el ejercicio
    this.props.update(o.ex && o.active ? o.ex.prop : null, av, out);

    // seguimiento del avatar cuando se desplaza (ej. zancadas caminando)
    let fx = 0;
    let fz = 0;
    if (out.track) {
      fx = av.root.position.x;
      fz = av.root.position.z;
    }
    if (o.snap) {
      this.focus.x = fx;
      this.focus.z = fz;
    }
    const k = Math.min(1, Math.min(dt, 0.05) * 3.2);
    this.focus.x += (fx - this.focus.x) * k;
    this.focus.z += (fz - this.focus.z) * k;
    const { x, z } = this.focus;
    this.floor.position.set(x, 0, z);
    this.glow.position.set(x, 0.004, z);
    this.ring.position.set(x, 0.006, z);
    this.floorTex.offset.x = (x * this.floorTex.repeat.x) / 16;
    this.floorTex.offset.y = (-this.floorTex.repeat.y * z) / 16;
    this.key.position.set(x - 3.2, 5.2, z + 3.6);
    this.key.target.position.set(x, 0, z);
    this.rim.position.set(x + 3.5, 2.8, z - 3.5);
    this.rim.target.position.set(x, 0, z);

    // cámara orbital con transición suave
    const spec = o.cam || { az: -38, el: 7, dist: 3.5, ty: 0.8 };
    const viewAz = o.view && o.view.az !== null ? o.view.az : null;
    const sway = Math.sin(o.time / 4200) * 6;
    const az = (viewAz !== null && o.active ? viewAz : spec.az) + o.drag.az + sway;
    const aspect = this.camera.aspect;
    const dist = spec.dist * (aspect < 1.1 ? Math.pow(1.1 / aspect, 0.62) : 1);
    const c = this.cam;
    const kc = Math.min(1, Math.min(dt, 0.05) * 3.2);
    c.az += (az - c.az) * kc;
    c.el += (spec.el + o.drag.el - c.el) * kc;
    c.dist += (dist - c.dist) * kc;
    c.ty += (spec.ty - c.ty) * kc;
    c.tz += ((spec.tz || 0) - c.tz) * kc;
    const a = rad(c.az);
    const e = rad(c.el);
    this.camera.position.set(
      x + Math.sin(a) * Math.cos(e) * c.dist,
      c.ty + Math.sin(e) * c.dist,
      z + c.tz + Math.cos(a) * Math.cos(e) * c.dist,
    );
    this.camera.lookAt(x, c.ty, z + c.tz);
    this.renderer.render(this.scene, this.camera);
    return out;
  }
}

export { clamp, DoubleSide, Group };
