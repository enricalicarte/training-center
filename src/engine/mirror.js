// Modo espejo: cámara a pantalla completa con esqueleto, ángulos en directo, contador grande
// y resumen de la serie (repetición en vídeo, profundidad, fatiga, gráfica y velocidad por repetición).
// Todo se procesa y se guarda solo en el dispositivo: el vídeo de la repetición vive en memoria y se
// descarta al cerrar.
import { CoachSession, LM, TIPS, angle3 } from './coach-logic.js';
import { ANALYZERS } from './coach-analyzers.js';
import { loadLib, BASE } from './coach.js';
import { requestFullscreen } from './audio.js';

// Configuración visual y de métricas por tipo de ejercicio
const CFG = {
  squat: {
    joints: [
      ['hipL', 'knL', 'anL', 'L'],
      ['hipR', 'knR', 'anR', 'R'],
    ],
    metric: 'Flexión de rodilla',
    peak: 'Profundidad',
    peakHint: 'menos grados = más profundo',
    speed: 'Velocidad de subida',
  },
};
export const hasMirror = (kind) => !!CFG[kind];

const BONES = [
  [LM.shL, LM.elL], [LM.elL, LM.wrL], [LM.shR, LM.elR], [LM.elR, LM.wrR],
  [LM.hipL, LM.knL], [LM.knL, LM.anL], [LM.hipR, LM.knR], [LM.knR, LM.anR],
  [LM.anL, LM.ftL], [LM.anR, LM.ftR],
];
const DOTS = [LM.shL, LM.shR, LM.elL, LM.elR, LM.wrL, LM.wrR, LM.hipL, LM.hipR, LM.knL, LM.knR, LM.anL, LM.anR];
const RIGHT = '#ff8a5b';
const fmt = (ms) => {
  const s = Math.max(0, Math.round(ms / 1000));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
};
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

export function createMirror({ say, getExercise, getTarget, onClose }) {
  const el = document.createElement('div');
  el.id = 'mir';
  el.hidden = true;
  el.innerHTML = `
    <video class="mv" playsinline muted></video><canvas class="mc"></canvas>
    <div class="m-top">
      <div class="m-l"><button class="m-fin"><i></i>Terminar serie</button><span class="m-chip"></span></div>
      <button class="m-x" aria-label="Cerrar modo espejo">×</button>
    </div>
    <div class="m-ask">
      <div class="m-card">
        <b>Modo espejo</b>
        <p>Te verás en pantalla con tus ángulos en directo. Forja cuenta las repeticiones y al final te enseña el resumen de la serie.</p>
        <p class="sm">El vídeo se procesa solo en tu dispositivo: no se envía ni se guarda.</p>
        <button class="m-go">Activar cámara</button>
      </div>
    </div>
    <div class="m-bot">
      <div class="m-msg"></div>
      <div class="m-cnt"><i></i><span>Preparando</span></div>
      <b class="m-n">0</b>
      <small class="m-u">REPS</small>
    </div>
    <section class="m-sum" hidden></section>`;
  document.body.appendChild(el);
  const $ = (q) => el.querySelector(q);
  const video = $('.mv');
  const cv = $('.mc');
  const g = cv.getContext('2d');

  let mode = 'closed'; // closed | ask | loading | run | sum | error
  let ex = null;
  let kind = null;
  let session = null;
  let pose = null;
  let stream = null;
  let running = false;
  let busy = false;
  let lastSent = 0;
  let setNo = 1;
  let target = 10;
  let sim = false; // pruebas: los puntos llegan por feed() en vez de por el modelo
  let lastSay = 0;
  let noBody = 0;
  let msgT = 0;
  // datos de la serie
  let t0 = 0; // inicio del conteo (performance.now)
  let counting = false;
  let frames = []; // { t, L } para la repetición
  let series = []; // { t, l, r }
  let reps = []; // { n, good, issues, minL, minR, speed, t }
  let cur = null; // repetición en curso
  let rec = null;
  let chunks = [];
  let recUrl = null;
  let tick = 0;
  let accent = '#7cc4ff';
  let lastT = 0;
  const clock = () => (sim ? lastT : performance.now());

  const setMode = (m) => {
    mode = m;
    el.dataset.mode = m;
    el.hidden = m === 'closed';
  };
  const msg = (text, cls = '') => {
    const m = $('.m-msg');
    m.textContent = text;
    m.className = 'm-msg ' + cls + (text ? ' on' : '');
    msgT = performance.now();
  };
  const cnt = (text, live) => {
    $('.m-cnt span').textContent = text;
    $('.m-cnt').classList.toggle('live', !!live);
  };

  function resize() {
    const d = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = Math.round(innerWidth * d);
    cv.height = Math.round(innerHeight * d);
  }
  window.addEventListener('resize', resize);

  // vídeo (px del vídeo) → pantalla (px del canvas), con object-fit: cover y efecto espejo
  function mapper(W, H, vw, vh, mirror = true) {
    const s = Math.max(W / vw, H / vh);
    const ox = (W - vw * s) / 2;
    const oy = (H - vh * s) / 2;
    return (p) => ({ x: mirror ? W - (ox + p.x * s) : ox + p.x * s, y: oy + p.y * s, v: p.visibility ?? 1 });
  }

  function pill(ctx, x, y, text, color, d) {
    ctx.font = `700 ${15 * d}px IN, system-ui, sans-serif`;
    const w = ctx.measureText(text).width + 22 * d;
    const h = 30 * d;
    const r = h / 2;
    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,.45)';
    ctx.shadowBlur = 10 * d;
    ctx.beginPath();
    ctx.roundRect(x - w / 2, y - h / 2, w, h, r);
    ctx.fillStyle = 'rgba(8,14,28,.82)';
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.lineWidth = 1.6 * d;
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x, y + 0.5 * d);
    ctx.restore();
  }

  /** Dibuja esqueleto, ángulos y etiquetas. L = puntos en px del vídeo. */
  function drawSkeleton(ctx, W, H, vw, vh, L, d, opts = {}) {
    ctx.clearRect(0, 0, W, H);
    if (!L) return;
    const P = L.map(mapper(W, H, vw, vh));
    const ok = (i) => P[i].v > 0.45;
    const lw = (opts.small ? 2.2 : 3.6) * d;
    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = accent;
    ctx.shadowColor = accent;
    ctx.shadowBlur = (opts.small ? 6 : 16) * d;
    ctx.lineWidth = lw;
    // tronco como cuadrilátero
    const torso = [LM.shL, LM.shR, LM.hipR, LM.hipL];
    if (torso.every(ok)) {
      ctx.beginPath();
      torso.forEach((i, k) => (k ? ctx.lineTo(P[i].x, P[i].y) : ctx.moveTo(P[i].x, P[i].y)));
      ctx.closePath();
      ctx.fillStyle = 'rgba(120,180,255,.06)';
      ctx.fill();
      ctx.stroke();
    }
    ctx.beginPath();
    for (const [a, b] of BONES) {
      if (!ok(a) || !ok(b)) continue;
      ctx.moveTo(P[a].x, P[a].y);
      ctx.lineTo(P[b].x, P[b].y);
    }
    ctx.stroke();
    // segunda pasada fina y clara para el efecto neón
    ctx.shadowBlur = 0;
    ctx.lineWidth = lw * 0.38;
    ctx.strokeStyle = 'rgba(255,255,255,.75)';
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.shadowColor = accent;
    ctx.shadowBlur = 10 * d;
    for (const i of DOTS) {
      if (!ok(i)) continue;
      ctx.beginPath();
      ctx.arc(P[i].x, P[i].y, (opts.small ? 2.4 : 4.2) * d, 0, 7);
      ctx.fill();
    }
    ctx.restore();
    const cfg = CFG[kind];
    if (!cfg) return;
    const labels = [];
    for (const [a, b, c, side] of cfg.joints) {
      const A = P[LM[a]], B = P[LM[b]], C = P[LM[c]];
      if (A.v < 0.5 || B.v < 0.5 || C.v < 0.5) continue;
      const ang = angle3(L[LM[a]], L[LM[b]], L[LM[c]]);
      const col = side === 'L' ? accent : RIGHT;
      const a1 = Math.atan2(A.y - B.y, A.x - B.x);
      let diff = Math.atan2(C.y - B.y, C.x - B.x) - a1;
      while (diff > Math.PI) diff -= 2 * Math.PI;
      while (diff < -Math.PI) diff += 2 * Math.PI;
      const r = (opts.small ? 18 : 46) * d;
      ctx.save();
      const grd = ctx.createRadialGradient(B.x, B.y, r * 0.2, B.x, B.y, r);
      grd.addColorStop(0, 'rgba(255,255,255,0)');
      grd.addColorStop(1, col + '66');
      ctx.beginPath();
      ctx.moveTo(B.x, B.y);
      ctx.arc(B.x, B.y, r, a1, a1 + diff, diff < 0);
      ctx.closePath();
      ctx.fillStyle = grd;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(B.x, B.y, r, a1, a1 + diff, diff < 0);
      ctx.strokeStyle = col;
      ctx.lineWidth = (opts.small ? 1.6 : 3) * d;
      ctx.shadowColor = col;
      ctx.shadowBlur = 10 * d;
      ctx.stroke();
      ctx.restore();
      if (!opts.small) {
        const bis = a1 + diff / 2;
        // etiqueta al lado contrario de la abertura, para no tapar la pierna
        labels.push({ x: B.x - Math.cos(bis) * (r + 36 * d), y: B.y - Math.sin(bis) * (r + 36 * d), text: `${Math.round(ang)}°`, col });
      }
    }
    // si las dos rodillas se solapan (vista de lado) apila las etiquetas en vez de montarlas
    if (labels.length === 2 && Math.hypot(labels[0].x - labels[1].x, labels[0].y - labels[1].y) < 70 * d) {
      labels[1].x = labels[0].x;
      labels[1].y = labels[0].y + 36 * d;
    }
    for (const l of labels) pill(ctx, Math.min(W - 46 * d, Math.max(46 * d, l.x)), Math.min(H - 20 * d, Math.max(20 * d, l.y)), l.text, l.col, d);
  }

  // ---------- datos ----------
  function sideAngles(L) {
    const cfg = CFG[kind];
    const out = { L: null, R: null };
    for (const [a, b, c, s] of cfg.joints) {
      const v = Math.min(L[LM[a]].visibility, L[LM[b]].visibility, L[LM[c]].visibility);
      if (v >= 0.5) out[s] = angle3(L[LM[a]], L[LM[b]], L[LM[c]]);
    }
    return out;
  }

  function startCounting(now) {
    counting = true;
    t0 = now;
    cur = { minL: Infinity, minR: Infinity, min: Infinity, tMin: now };
    cnt('CONTANDO 0:00', true);
    if (stream && window.MediaRecorder && !rec) {
      try {
        chunks = [];
        const types = ['video/webm;codecs=vp9', 'video/webm', 'video/mp4'];
        const mt = types.find((t) => MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(t));
        rec = new MediaRecorder(stream, mt ? { mimeType: mt, videoBitsPerSecond: 900000 } : undefined);
        rec.ondataavailable = (e) => e.data && e.data.size && chunks.push(e.data);
        rec.start(500);
      } catch {
        rec = null;
      }
    }
  }

  function stopRec() {
    return new Promise((res) => {
      if (!rec || rec.state === 'inactive') return res(null);
      rec.onstop = () => {
        const blob = chunks.length ? new Blob(chunks, { type: rec.mimeType || 'video/webm' }) : null;
        rec = null;
        res(blob);
      };
      rec.stop();
    });
  }

  function process(L, now) {
    lastT = now;
    const r = session.push(L, now);
    const S = session.sm.p || L;
    drawSkeleton(g, cv.width, cv.height, video.videoWidth || 640, video.videoHeight || 480, S, cv.width / innerWidth);
    if (!r.ok) {
      if (performance.now() - msgT > 2500) msg(ANALYZERS[kind].hint, 'warn');
      return;
    }
    const def = ANALYZERS[kind];
    if (def.wants && r.view && r.view !== def.wants && r.view !== 'oblique' && !counting) {
      msg(def.wants === 'side' ? 'Gírate: ponte de lado a la cámara' : 'Gírate: ponte de frente a la cámara', 'warn');
      return;
    }
    if (!r.calibrated) {
      cnt('CALIBRANDO · QUIETO 1 S', false);
      return;
    }
    if (!counting) {
      startCounting(now);
      msg('¡Listo! Empieza cuando quieras', 'ok');
    }
    const t = now - t0;
    const a = sideAngles(S);
    const fused = r.metric;
    series.push({ t, l: a.L, r: a.R, f: fused });
    if (frames.length < 2400) frames.push({ t, L: S.map((p) => ({ x: p.x, y: p.y, z: p.z, visibility: p.visibility })) });
    if (a.L !== null) cur.minL = Math.min(cur.minL, a.L);
    if (a.R !== null) cur.minR = Math.min(cur.minR, a.R);
    if (fused < cur.min) {
      cur.min = fused;
      cur.tMin = now;
    }
    for (const e of r.ev) {
      if (e.type === 'rep') {
        const rise = Math.max((now - cur.tMin) / 1000, 0.15);
        const speed = Math.max(0, (fused - cur.min) / rise);
        reps.push({ n: e.n, good: e.good, issues: e.issues, minL: isFinite(cur.minL) ? cur.minL : null, minR: isFinite(cur.minR) ? cur.minR : null, min: cur.min, speed, t });
        cur = { minL: Infinity, minR: Infinity, min: Infinity, tMin: now };
        const n = $('.m-n');
        n.textContent = e.n;
        n.classList.remove('pop', 'bad');
        void n.offsetWidth;
        n.classList.add('pop');
        if (!e.good) n.classList.add('bad');
        if (e.good) msg('¡Buena técnica!', 'ok');
        else msg(e.msg, 'warn');
        say(e.good ? String(e.n) : `${e.n}. ${e.msg}`);
        lastSay = now;
        if (e.n >= target) {
          msg('¡Serie completada!', 'ok');
          setTimeout(() => mode === 'run' && finish(), 1200);
        }
      } else if (e.type === 'tip') {
        msg(e.msg, 'warn');
        if (now - lastSay > 4000) {
          lastSay = now;
          say(e.msg);
        }
      }
    }
  }

  function onResults(res) {
    busy = false;
    if (!running || sim) return;
    const raw = res.poseLandmarks;
    const w = video.videoWidth;
    const h = video.videoHeight;
    if (!raw) {
      g.clearRect(0, 0, cv.width, cv.height);
      if (++noBody > 25) msg('No te veo. Colócate a 2-3 m con el cuerpo entero a la vista', 'warn');
      return;
    }
    noBody = 0;
    process(raw.map((p) => ({ x: p.x * w, y: p.y * h, z: (p.z || 0) * w, visibility: p.visibility ?? 1 })), performance.now());
  }

  function loop() {
    const step = () => {
      if (!running) return;
      const now = performance.now();
      if (counting && now - tick > 250) {
        tick = now;
        cnt('CONTANDO ' + fmt(clock() - t0), true);
      }
      if (!sim && pose && !busy && video.readyState >= 2 && now - lastSent > 50) {
        busy = true;
        lastSent = now;
        pose.send({ image: video }).catch(() => {
          busy = false;
        });
      }
      if (msgT && now - msgT > 3500) {
        $('.m-msg').classList.remove('on');
        msgT = 0;
      }
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  function resetSet() {
    session = new CoachSession(kind);
    counting = false;
    frames = [];
    series = [];
    reps = [];
    cur = null;
    rec = null;
    if (recUrl) URL.revokeObjectURL(recUrl);
    recUrl = null;
    $('.m-n').textContent = '0';
    $('.m-n').classList.remove('bad');
    $('.m-u').textContent = `REPS · OBJETIVO ${target}`;
    $('.m-chip').textContent = `SERIE ${setNo} · ${ex.name.toUpperCase()}`;
    cnt('PREPARANDO', false);
    msg(ANALYZERS[kind].hint);
  }

  async function start() {
    setMode('loading');
    resize();
    accent = (getComputedStyle(document.documentElement).getPropertyValue('--hi') || '#7cc4ff').trim();
    resetSet();
    msg('Cargando el modelo de detección…');
    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } }, audio: false });
      video.srcObject = stream;
      await video.play();
      try {
        localStorage.setItem('forja:cam', '1');
      } catch {
        /* sin almacenamiento */
      }
      if (!sim) {
        await loadLib();
        if (!pose) {
          pose = new window.Pose({ locateFile: (f) => BASE + f });
          pose.setOptions({ modelComplexity: 1, smoothLandmarks: false, minDetectionConfidence: 0.5, minTrackingConfidence: 0.5 });
          pose.onResults(onResults);
        }
      }
      running = true;
      setMode('run');
      msg(ANALYZERS[kind].hint);
      loop();
    } catch (err) {
      stopAll();
      setMode('error');
      const n = err && err.name;
      $('.m-ask .m-card').innerHTML = `<b>No se pudo abrir la cámara</b><p>${
        n === 'NotAllowedError' || n === 'SecurityError'
          ? 'No hay permiso para usar la cámara. Actívalo en los ajustes del navegador y vuelve a intentarlo.'
          : n === 'NotFoundError'
            ? 'No se ha encontrado ninguna cámara en este dispositivo.'
            : err && err.message === 'lib'
              ? 'El análisis por cámara no está disponible en esta versión de la página.'
              : 'No se pudo iniciar la cámara o el modelo. Vuelve a intentarlo.'
      }</p><button class="m-go">Reintentar</button>`;
      $('.m-go').onclick = start;
    }
  }

  function stopAll() {
    running = false;
    busy = false;
    if (rec && rec.state !== 'inactive') rec.stop();
    rec = null;
    if (stream) stream.getTracks().forEach((t) => t.stop());
    stream = null;
    video.srcObject = null;
    g.clearRect(0, 0, cv.width, cv.height);
  }

  function close() {
    stopAll();
    if (recUrl) URL.revokeObjectURL(recUrl);
    recUrl = null;
    $('.m-sum').hidden = true;
    setMode('closed');
    if (onClose) onClose();
  }

  // ---------- resumen ----------
  async function finish() {
    if (mode !== 'run') return;
    running = false;
    const total = counting ? clock() - t0 : 0;
    const blob = await stopRec();
    if (blob) recUrl = URL.createObjectURL(blob);
    if (stream) stream.getTracks().forEach((t) => t.stop());
    stream = null;
    video.srcObject = null;
    g.clearRect(0, 0, cv.width, cv.height);
    renderSummary(total);
    setMode('sum');
    try {
      const k = 'forja:mirror';
      const h = JSON.parse(localStorage.getItem(k) || '[]');
      h.push({ d: Date.now(), ex: ex.name, set: setNo, reps: reps.length, good: reps.filter((r) => r.good).length, ms: Math.round(total) });
      localStorage.setItem(k, JSON.stringify(h.slice(-200)));
    } catch {
      /* sin almacenamiento */
    }
  }

  function chartSVG(total) {
    const W = 640, H = 220, pl = 38, pr = 12, pt = 12, pb = 26;
    const T = Math.max(total, 1000);
    const x = (t) => pl + (t / T) * (W - pl - pr);
    const y = (v) => pt + (1 - v / 180) * (H - pt - pb);
    const step = Math.max(1, Math.ceil(series.length / 320));
    const path = (key) => {
      let d = '';
      let pen = false;
      for (let i = 0; i < series.length; i += step) {
        const v = series[i][key];
        if (v === null || v === undefined) {
          pen = false;
          continue;
        }
        d += `${pen ? 'L' : 'M'}${x(series[i].t).toFixed(1)},${y(v).toFixed(1)}`;
        pen = true;
      }
      return d;
    };
    const grid = [0, 45, 90, 135, 180].map((v) => `<line x1="${pl}" x2="${W - pr}" y1="${y(v)}" y2="${y(v)}"/><text x="${pl - 6}" y="${y(v) + 4}" text-anchor="end">${v}°</text>`).join('');
    const secs = Math.round(T / 1000);
    const xt = [0, secs].map((s, i) => `<text x="${x(s * 1000)}" y="${H - 6}" text-anchor="${i ? 'end' : 'start'}">${s}s</text>`).join('');
    // marca de la repetición más profunda
    let deep = null;
    for (const r of reps) if (!deep || r.min < deep.min) deep = r;
    let mark = '';
    if (deep) {
      let best = null;
      for (const s of series) if (s.t <= deep.t && s.t >= deep.t - 4000 && (best === null || s.f < best.f)) best = s;
      if (best) mark = `<circle cx="${x(best.t)}" cy="${y(best.f)}" r="6" class="pk"/>`;
    }
    const hasL = series.some((s) => s.l !== null);
    const hasR = series.some((s) => s.r !== null);
    return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" class="chart" role="img" aria-label="Ángulo de rodilla durante la serie">
      <g class="gr">${grid}${xt}</g>
      ${hasL ? `<path d="${path('l')}" class="ln l"/>` : ''}${hasR ? `<path d="${path('r')}" class="ln r"/>` : ''}
      ${!hasL && !hasR ? `<path d="${path('f')}" class="ln l"/>` : ''}${mark}</svg>`;
  }

  function renderSummary(total) {
    const cfg = CFG[kind];
    const n = reps.length;
    const good = reps.filter((r) => r.good).length;
    const avg = (arr) => (arr.length ? arr.reduce((s, v) => s + v, 0) / arr.length : null);
    const Ls = reps.map((r) => r.minL).filter((v) => v !== null);
    const Rs = reps.map((r) => r.minR).filter((v) => v !== null);
    const bestL = Ls.length ? Math.min(...Ls) : null;
    const bestR = Rs.length ? Math.min(...Rs) : null;
    const apart = bestL !== null && bestR !== null ? Math.round(Math.abs(bestL - bestR)) : null;
    const sp = reps.map((r) => r.speed);
    // fatiga: caída de velocidad entre las dos primeras y las dos últimas repeticiones
    let fat = null;
    if (n >= 4) {
      const a = avg(sp.slice(0, 2));
      const b = avg(sp.slice(-2));
      fat = a > 0 ? Math.max(0, Math.round(((a - b) / a) * 100)) : 0;
    }
    const fatLbl = fat === null ? 'Haz al menos 4 repeticiones para medirla' : fat < 8 ? 'Sin fatiga: ritmo constante' : fat < 20 ? 'Algo de fatiga' : 'Fatiga notable: descansa bien';
    const issues = {};
    for (const r of reps) for (const i of r.issues) issues[i] = (issues[i] || 0) + 1;
    const top = Object.entries(issues).sort((a, b) => b[1] - a[1])[0];
    const maxSp = Math.max(1, ...sp);
    const fastest = n ? sp.indexOf(Math.max(...sp)) : -1;
    const bars = reps
      .map((r, i) => `<div class="b${r.good ? '' : ' bad'}${i === fastest ? ' top' : ''}"><i style="height:${Math.max(6, (r.speed / maxSp) * 100).toFixed(0)}%"></i><small>${i + 1}</small></div>`)
      .join('');
    const sideCell = (lbl, best, arr, cls) =>
      `<div class="sd ${cls}"><small><i></i>${lbl}</small><b>${best === null ? '–' : Math.round(best) + '°'}</b><em>${arr.length ? 'Media ' + Math.round(avg(arr)) + '°' : 'No visible'}</em></div>`;
    const sum = $('.m-sum');
    sum.innerHTML = `
      <div class="s-wrap">
        <header class="s-h"><small>SERIE ${setNo} · ${esc(ex.name.toUpperCase())}</small><h2>Resumen de la serie</h2></header>
        <div class="s-grid">
          <div class="mk rp"><span class="tag">REPETICIÓN</span><video playsinline muted loop></video><canvas></canvas><div class="rp-none" hidden>Sin vídeo en este navegador: se muestra solo el esqueleto</div></div>
          <div class="mk big"><small>REPS</small><b>${n}</b><em>${fmt(total)} <span>tiempo</span></em></div>
          <div class="mk pk"><small>${cfg.peak.toUpperCase()}</small>
            <div class="sides">${sideCell('Izquierda', bestL, Ls, 'l')}${sideCell('Derecha', bestR, Rs, 'r')}</div>
            <p class="mh">${apart !== null ? `<strong>${apart}° de diferencia</strong> entre piernas · ` : ''}${cfg.peakHint}</p></div>
          <div class="mk ft"><div class="row"><small>FATIGA</small><b>${fat === null ? '–' : fat + '%'}</b></div>
            <div class="meter"><i style="width:${fat === null ? 0 : Math.min(100, fat * 2.5)}%"></i></div>
            <p><strong>${fatLbl}</strong><br>Pérdida de ${cfg.speed.toLowerCase()} entre las primeras y las últimas reps</p></div>
          <div class="mk tq"><div class="row"><small>TÉCNICA</small><b>${n ? good + '/' + n : '–'}</b></div>
            <p>${n ? (top ? `A mejorar: <strong>${esc(TIPS[top[0]] || top[0])}</strong> (${top[1]} ${top[1] === 1 ? 'vez' : 'veces'})` : '<strong>Todas las repeticiones con buena técnica</strong>') : 'No se ha contado ninguna repetición'}</p></div>
          <div class="mk ch"><div class="row"><small>${cfg.metric.toUpperCase()}</small><span class="mlg"><i class="l"></i>Izquierda <i class="r"></i>Derecha</span></div>${chartSVG(total)}</div>
          <div class="mk sp"><div class="row"><small>${cfg.speed.toUpperCase()}</small></div>
            <p>${n ? `Cada repetición; la más rápida, la ${fastest + 1}.ª a ${Math.round(sp[fastest])}°/s` : 'Sin repeticiones'}</p>
            <div class="bars">${bars}</div></div>
        </div>
        <div class="s-act"><button class="s-done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11 12 4l9 7v9H3z"/></svg>Terminar</button>
          <button class="s-next"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 0 1 14-5.3M20 4v5h-5M20 12a8 8 0 0 1-14 5.3M4 20v-5h5"/></svg>Siguiente serie</button></div>
      </div>`;
    sum.hidden = false;
    sum.scrollTop = 0;
    sum.querySelector('.s-done').onclick = close;
    sum.querySelector('.s-next').onclick = () => {
      setNo++;
      sum.hidden = true;
      start();
    };
    setupReplay(sum.querySelector('.rp'));
  }

  function setupReplay(box) {
    const v = box.querySelector('video');
    const c = box.querySelector('canvas');
    const ctx = c.getContext('2d');
    const vw = frames.length ? video.videoWidth || 640 : 640;
    const vh = frames.length ? video.videoHeight || 480 : 480;
    const dims = { vw: vw || 640, vh: vh || 480 };
    const fit = () => {
      const r = box.getBoundingClientRect();
      const d = Math.min(window.devicePixelRatio || 1, 2);
      c.width = Math.round(r.width * d);
      c.height = Math.round(r.height * d);
    };
    fit();
    let start = performance.now();
    const T = frames.length ? frames[frames.length - 1].t : 0;
    const frameAt = (t) => {
      let lo = 0, hi = frames.length - 1;
      while (lo < hi) {
        const m = (lo + hi + 1) >> 1;
        if (frames[m].t <= t) lo = m;
        else hi = m - 1;
      }
      return frames[lo];
    };
    if (recUrl) {
      v.src = recUrl;
      v.onloadedmetadata = () => {
        if (v.videoWidth) {
          dims.vw = v.videoWidth;
          dims.vh = v.videoHeight;
        }
      };
      v.play().catch(() => {});
    } else {
      v.hidden = true;
      box.querySelector('.rp-none').hidden = !frames.length;
    }
    const step = () => {
      if (mode !== 'sum' || !box.isConnected) return;
      if (frames.length) {
        const t = recUrl && isFinite(v.currentTime) && v.currentTime > 0 ? v.currentTime * 1000 : (performance.now() - start) % Math.max(T, 1);
        drawSkeleton(ctx, c.width, c.height, dims.vw, dims.vh, frameAt(t).L, c.width / Math.max(box.clientWidth, 1), { small: true });
      }
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  // ---------- API ----------
  function open() {
    ex = getExercise();
    kind = ex && ex.coach;
    if (!hasMirror(kind)) return false;
    target = (getTarget && getTarget()) || 10;
    setNo = 1;
    requestFullscreen();
    let ok = false;
    try {
      ok = localStorage.getItem('forja:cam') === '1';
    } catch {
      /* nada */
    }
    $('.m-sum').hidden = true;
    resetSet();
    if (ok || sim) start();
    else {
      setMode('ask');
      $('.m-ask .m-card').innerHTML = `<b>Modo espejo</b><p>Te verás en pantalla con tus ángulos en directo. Forja cuenta las repeticiones y al final te enseña el resumen de la serie.</p><p class="sm">El vídeo se procesa solo en tu dispositivo: no se envía ni se guarda.</p><button class="m-go">Activar cámara</button>`;
      $('.m-go').onclick = start;
    }
    return true;
  }

  $('.m-x').onclick = close;
  $('.m-fin').onclick = finish;
  window.addEventListener('pagehide', stopAll);
  document.addEventListener('keydown', (e) => {
    if (mode !== 'closed' && e.key === 'Escape') close();
  });

  return {
    open,
    close,
    isOpen: () => mode !== 'closed',
    // pruebas automáticas: puntos normalizados 0..1 como los da MediaPipe
    __sim(on = true) {
      sim = on;
    },
    __feed(norm, t) {
      if (!running) return;
      const w = video.videoWidth || 640;
      const h = video.videoHeight || 480;
      process(norm.map((p) => ({ x: p.x * w, y: p.y * h, z: (p.z || 0) * w, visibility: p.visibility ?? 1 })), t ?? performance.now());
    },
    __finish: finish,
  };
}

