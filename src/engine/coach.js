// Coach de cámara: abre la cámara, detecta tu cuerpo (MediaPipe Pose, ejecutado en el propio dispositivo)
// y analiza la técnica con coach-logic.js. El vídeo no se envía ni se guarda en ningún sitio.
import { CoachSession, SKELETON, LM } from './coach-logic.js';
import { ANALYZERS } from './coach-analyzers.js';

export const BASE = 'mp/';
let libPromise = null;

export function loadLib() {
  if (window.Pose) return Promise.resolve();
  if (!libPromise) {
    libPromise = new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = BASE + 'pose.js';
      s.onload = res;
      s.onerror = () => {
        libPromise = null;
        rej(new Error('lib'));
      };
      document.head.appendChild(s);
    });
  }
  return libPromise;
}

export function createCoach({ stageEl, say, getExercise }) {
  const el = document.createElement('div');
  el.id = 'cam';
  el.hidden = true;
  el.innerHTML = `
    <div class="cam-h"><b>Coach de cámara</b><button class="cam-x" aria-label="Cerrar cámara">×</button></div>
    <div class="cam-ask">
      <p>Usa la cámara para contar tus repeticiones y avisarte de la técnica.</p>
      <p class="sm">El vídeo se procesa solo en tu dispositivo: no se envía ni se guarda.</p>
      <button class="cam-go">Activar cámara</button>
    </div>
    <div class="cam-v"><video playsinline muted></video><canvas></canvas></div>
    <div class="cam-s"></div>
    <div class="cam-stats"><div><b class="cr">0</b><small class="cl">reps</small></div><div><b class="cs">–</b><small>técnica</small></div></div>`;
  stageEl.appendChild(el);
  const $ = (q) => el.querySelector(q);
  const video = $('video');
  const canvas = $('canvas');
  const ctx = canvas.getContext('2d');
  const status = $('.cam-s');

  let ex = null;
  let session = null;
  let pose = null;
  let stream = null;
  let running = false;
  let busy = false;
  let raf = 0;
  let lastSent = 0;
  let lastSay = 0;
  let noBody = 0;
  let wrongView = 0;
  let complexity = 1; // 1 = modelo completo; baja a 0 (ligero) si el dispositivo no llega
  let infer = { n: 0, ms: 0, t0: 0 };
  let mode = 'closed'; // closed | ask | loading | run | error

  const setMode = (m) => {
    mode = m;
    el.dataset.mode = m;
    el.hidden = m === 'closed';
  };
  const msg = (t, kind = '') => {
    status.textContent = t;
    status.className = 'cam-s ' + kind;
  };
  const stats = () => {
    if (!session) return;
    const iso = ANALYZERS[session.kind].isometric;
    $('.cr').textContent = iso ? session.an.seconds : session.reps.count;
    $('.cl').textContent = iso ? 'seg. bien' : ANALYZERS[session.kind].label || 'reps';
    $('.cs').textContent = !iso && session.reps.count ? Math.round((session.reps.good / session.reps.count) * 100) + '%' : '–';
  };

  function setExercise(e) {
    ex = e;
    session = e && e.coach && ANALYZERS[e.coach] ? new CoachSession(e.coach) : null;
    noBody = 0;
    stats();
    if (mode === 'run') {
      if (session) msg(ANALYZERS[session.kind].hint);
      else msg('Este ejercicio no tiene análisis por cámara.', 'warn');
    }
  }

  function draw(L) {
    const w = video.videoWidth || 640;
    const h = video.videoHeight || 480;
    if (canvas.width !== w) {
      canvas.width = w;
      canvas.height = h;
    }
    ctx.clearRect(0, 0, w, h);
    if (!L) return;
    ctx.lineWidth = Math.max(3, w / 140);
    ctx.lineCap = 'round';
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--hi') || '#fff';
    for (const [a, b] of SKELETON) {
      if (L[a].visibility < 0.4 || L[b].visibility < 0.4) continue;
      ctx.beginPath();
      ctx.moveTo(L[a].x, L[a].y);
      ctx.lineTo(L[b].x, L[b].y);
      ctx.stroke();
    }
    ctx.fillStyle = '#fff';
    for (const i of [LM.shL, LM.shR, LM.hipL, LM.hipR, LM.knL, LM.knR, LM.anL, LM.anR, LM.elL, LM.elR, LM.wrL, LM.wrR]) {
      if (L[i].visibility < 0.4) continue;
      ctx.beginPath();
      ctx.arc(L[i].x, L[i].y, Math.max(3, w / 120), 0, 7);
      ctx.fill();
    }
  }

  function onResults(res) {
    busy = false;
    if (!running) return;
    const w = video.videoWidth;
    const h = video.videoHeight;
    const raw = res.poseLandmarks;
    if (!raw || !session) {
      draw(null);
      if (session && ++noBody > 25) msg('No te veo. Colócate a 2-3 m con el cuerpo entero a la vista.', 'warn');
      return;
    }
    noBody = 0;
    const L = raw.map((p) => ({ x: p.x * w, y: p.y * h, z: (p.z || 0) * w, visibility: p.visibility ?? 1 }));
    const now = performance.now();
    if (infer.t0) {
      infer.ms += now - infer.t0;
      infer.n++;
      // tras ~40 inferencias, si el modelo completo va a menos de ~9 fps, pasa al ligero
      if (complexity === 1 && infer.n === 40 && infer.ms / infer.n > 110) {
        complexity = 0;
        pose.setOptions({ modelComplexity: 0 });
      }
    }
    const r = session.push(L, now);
    draw(session.sm.p || L);
    if (!r.ok) {
      msg(ANALYZERS[session.kind].hint, 'warn');
      return;
    }
    const def = ANALYZERS[session.kind];
    if (def.wants && r.view && r.view !== def.wants && r.view !== 'oblique') {
      if (++wrongView > 20) {
        msg(def.wants === 'side' ? 'Gírate: colócate de lado respecto a la cámara.' : 'Gírate: colócate de frente a la cámara.', 'warn');
        return;
      }
    } else wrongView = 0;
    if (!r.calibrated) {
      msg('Calibrando… quédate quieto un segundo en la posición inicial.', '');
      stats();
      return;
    }
    for (const e of r.ev) {
      if (e.type === 'rep') {
        msg(e.good ? `${e.n} · ¡Buena técnica!` : `${e.n} · ${e.msg}`, e.good ? 'ok' : 'warn');
        if (!e.good && performance.now() - lastSay > 5000) {
          lastSay = performance.now();
          say(e.msg);
        }
      } else if (e.type === 'tip') {
        msg(e.msg, 'warn');
        if (performance.now() - lastSay > 5000) {
          lastSay = performance.now();
          say(e.msg);
        }
      }
    }
    if (r.holding === true) msg('Muy bien, mantén la posición', 'ok');
    stats();
  }

  function loop() {
    if (!running) return;
    const tick = () => {
      if (!running) return;
      const now = performance.now();
      if (!busy && video.readyState >= 2 && now - lastSent > 55) {
        busy = true;
        lastSent = now;
        infer.t0 = now;
        pose.send({ image: video }).catch(() => {
          busy = false;
        });
      }
      if (video.requestVideoFrameCallback) video.requestVideoFrameCallback(tick);
      else raf = requestAnimationFrame(tick);
    };
    tick();
  }

  async function start() {
    setMode('loading');
    msg('Cargando el modelo de detección (unos 15 MB, solo la primera vez)…');
    try {
      await loadLib();
      if (!pose) {
        pose = new window.Pose({ locateFile: (f) => BASE + f });
        pose.setOptions({ modelComplexity: complexity, smoothLandmarks: false, minDetectionConfidence: 0.5, minTrackingConfidence: 0.5 });
        pose.onResults(onResults);
      }
      stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } }, audio: false });
      video.srcObject = stream;
      await video.play();
      try {
        localStorage.setItem('forja:cam', '1');
      } catch {
        /* sin almacenamiento */
      }
      running = true;
      setMode('run');
      setExercise(ex);
      if (!session) {
        /* el mensaje lo pone setExercise */
      } else msg(ANALYZERS[session.kind].hint);
      loop();
    } catch (err) {
      stop(true);
      setMode('error');
      const n = err && err.name;
      if (n === 'NotAllowedError' || n === 'SecurityError') msg('No hay permiso para usar la cámara. Actívalo en los ajustes del navegador y vuelve a intentarlo.', 'warn');
      else if (n === 'NotFoundError' || n === 'OverconstrainedError') msg('No se ha encontrado ninguna cámara en este dispositivo.', 'warn');
      else if (err && err.message === 'lib') msg('El análisis por cámara no está disponible en esta versión de la página.', 'warn');
      else msg('No se pudo iniciar la cámara o el modelo. Vuelve a intentarlo.', 'warn');
    }
  }

  function stop(keepMode) {
    running = false;
    busy = false;
    cancelAnimationFrame(raf);
    if (stream) stream.getTracks().forEach((t) => t.stop());
    stream = null;
    video.srcObject = null;
    draw(null);
    if (!keepMode) setMode('closed');
  }

  function open() {
    if (mode !== 'closed') return;
    let ok = false;
    try {
      ok = localStorage.getItem('forja:cam') === '1';
    } catch {
      /* nada */
    }
    ex = getExercise();
    session = ex && ex.coach && ANALYZERS[ex.coach] ? new CoachSession(ex.coach) : null;
    stats();
    if (ok) start();
    else setMode('ask');
  }

  $('.cam-go').onclick = start;
  $('.cam-x').onclick = () => stop();
  window.addEventListener('pagehide', () => stop());

  return {
    toggle() {
      if (mode === 'closed') open();
      else stop();
    },
    setExercise,
    isOpen: () => mode !== 'closed',
  };
}
