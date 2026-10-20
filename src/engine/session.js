import { Stage } from './stage.js';
import { MUSCLE_NAMES } from './rig.js';
import { clamp } from './math.js';
import { stepAvatar } from './pose.js';
import { createCoach } from './coach.js';
import { beep, chime, keepAwake, requestFullscreen, speak, stopSpeech, toggleFullscreen } from './audio.js';

/**
 * Motor de sesión guiada.
 *
 * Una sesión es DATOS (ver src/sessions/*.js):
 *   {
 *     id, title, tagline, kind, icon (svg path), material:[], notice, setName:'Serie'|'Ronda',
 *     rest: 30,                       // descanso por defecto entre series (s)
 *     theme: { acc, hi, accText, bgA, bgB, rim, floor:[c,c], musc, look:{...} },
 *     exercises: [{ name, area, mus:[], mode, cam, key:[], errors:[], sides?, prop?,
 *       levels:[{ t, d:[], sets, n, unit:'rep'|'s', rest?, ...parámetros del modo }] }]
 *   }
 * Los modos de pose se registran por separado (src/modes/*.js).
 */

export const LEVEL_NAMES = ['Principiante', 'Intermedio', 'Avanzado'];
const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

const UNIT_LABEL = { rep: 'repeticiones', s: 's' };

export function bootSession(def) {
  const EXS = def.exercises;
  const NL = LEVEL_NAMES.length;
  const KEY = 'forja:' + def.id;
  const store = {
    get() {
      try {
        return JSON.parse(localStorage.getItem(KEY) || '{}');
      } catch {
        return {};
      }
    },
    set(v) {
      try {
        localStorage.setItem(KEY, JSON.stringify(v));
      } catch {
        /* sin almacenamiento */
      }
    },
  };
  const globalPrefs = {
    get() {
      try {
        return JSON.parse(localStorage.getItem('forja:prefs') || '{}');
      } catch {
        return {};
      }
    },
    set(v) {
      try {
        localStorage.setItem('forja:prefs', JSON.stringify(v));
      } catch {
        /* nada */
      }
    },
  };

  const CFG = Object.assign({ lv: [], voice: true, sound: true, level: 1 }, store.get());
  const GP = Object.assign({ variant: 'm' }, globalPrefs.get());
  if (!Array.isArray(CFG.lv) || CFG.lv.length !== EXS.length) CFG.lv = EXS.map(() => CFG.level || 1);

  // ---------- marcado ----------
  document.documentElement.style.setProperty('--acc', def.theme.acc);
  document.documentElement.style.setProperty('--hi', def.theme.hi);
  document.documentElement.style.setProperty('--acc-t', def.theme.accText || '#fff');
  document.documentElement.style.setProperty('--bgA', def.theme.bgA);
  document.documentElement.style.setProperty('--bgB', def.theme.bgB);
  document.documentElement.style.setProperty('--musc', def.theme.musc);
  const tc = document.querySelector('meta[name=theme-color]');
  if (tc) tc.content = def.theme.bgA;

  document.body.innerHTML = `
<header id="top">
  <a class="back" href="index.html" aria-label="Volver al inicio"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg></a>
  <div id="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${def.icon}</svg></div>
  <div class="ttl"><b id="club">${esc(def.title)}</b><small>${esc(def.tagline)}</small></div>
  <div class="tools">
    <button class="pill" id="bW">Vista</button>
    <button class="pill on" id="bV">Voz</button>
    <button class="pill on" id="bS">Sonido</button>
    <button class="pill" id="bCam">Cámara</button>
    <button class="pill" id="bC">Ajustes</button>
    <button class="pill" id="bF"><span class="lg">Pantalla completa</span><span class="sm">⛶</span></button>
  </div>
</header>
<div id="bar"><i></i></div>
<div id="main">
  <div id="stage">
    <canvas id="cv"></canvas>
    <div id="alert"></div>
    <div id="cd"></div>
    <div id="toast"></div>
    <div class="hint">Arrastra para girar la cámara</div>
  </div>
  <aside id="panel"><div id="pInfo">
    <div class="eyebrow" id="pStep"></div>
    <h2 id="pTitle">—</h2>
    <div class="chip" id="pArea"></div>
    <button class="chip" id="pMus" title="Pulsa para mostrar u ocultar los músculos iluminados"></button>
    <div id="pLevels"></div>
    <div id="pLvT"></div>
    <ul class="cues" id="pCues"></ul>
    <div id="pSpec"></div>
    <div id="pKey"></div>
    <details id="pErrBox"><summary>Errores a corregir</summary><ul id="pErr"></ul></details>
    </div><div id="pCtl">
    <div class="timer">
      <div class="ringw"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" stroke="#1b2639"/><circle id="ring" cx="50" cy="50" r="46"/></svg><div id="tNum">20</div></div>
      <div class="tinfo"><div id="tLab"></div><div id="dots"></div><button class="pill" id="skipBtn">Saltar</button></div>
    </div>
    <div class="ctrls">
      <button class="btn ghost sq" id="prevBtn" aria-label="Ejercicio anterior">‹</button>
      <button class="btn" id="mainBtn">Iniciar ejercicio</button>
      <button class="btn ghost sq" id="nextBtn" aria-label="Ejercicio siguiente">›</button>
    </div>
    <div id="steps"></div>
    </div>
  </aside>
</div>
<section class="ov on" id="setup">
  <div class="card">
    <div class="lc">
      <a class="crumb" href="index.html">← Forja</a>
      <h1>${esc(def.title)}</h1>
      <div class="sub">${esc(def.tagline)}</div>
      <div class="fld"><label>Nivel de toda la sesión</label><div class="seg" id="allLv"></div></div>
      <div class="fld"><label>Avatar</label><div class="seg" id="avSeg"><button data-v="m">Él</button><button data-v="f">Ella</button></div></div>
      <button class="btn" id="go">Comenzar sesión</button>
      <div class="mats">${def.material.map((m) => `<span>${esc(m)}</span>`).join('')}</div>
      <div class="note">${esc(def.notice)}</div>
    </div>
    <div class="rt">
      <h3>Contenido de la sesión</h3>
      <ol id="exList"></ol>
      <div id="totalT"></div>
    </div>
  </div>
</section>
<section class="ov" id="end">
  <div class="card">
    <div>
      <h1>Sesión completada</h1>
      <div class="sub">${esc(def.title)} · bien hecho</div>
      <ul id="endList"></ul>
      <div id="endTime"></div>
      <div class="ctrls" style="margin-top:16px"><button class="btn" id="again" style="flex:1">Repetir sesión</button><button class="btn ghost" id="backSetup" style="flex:1">Ajustes</button></div>
      <a class="btn ghost home" href="index.html">Volver al inicio</a>
    </div>
  </div>
</section>
<canvas id="conf"></canvas>`;

  // ---------- estado ----------
  const D = {
    screen: 'setup',
    ex: 0,
    phase: 'ready',
    set: 0,
    el: 0,
    dur: 20,
    paused: false,
    animT: 0,
    sessionTime: 0,
    view: 0,
    dragAz: 0,
    dragEl: 0,
    done: [],
    cdn: 4,
    side: -1,
    lastRep: -1,
    wrapN: 0,
    snap: 1,
    setIdx: 0,
  };
  const VIEWS = [
    { n: 'Auto', az: null },
    { n: 'Lateral', az: -90 },
    { n: '3/4', az: -40 },
    { n: 'Frontal', az: 0 },
  ];
  let musclesOn = true;

  const look = () => ({ ...def.theme.look, ...(GP.variant === 'f' && def.theme.lookF ? def.theme.lookF : {}) });
  const stage = new Stage($('#cv'), def.theme);
  stage.setAvatar(GP.variant, look());

  // ---------- helpers de datos ----------
  const lvl = (i) => clamp(CFG.lv[i], 1, NL);
  const LV = (i) => EXS[i].levels[lvl(i) - 1];
  const repT = (l) => l.repT || 3;
  const sidesOf = (ex, l) => l.sides || ex.sides;
  const durOf = (l) => (l.unit === 'rep' ? l.n * repT(l) : l.n);
  const restOf = (l) => (l.rest !== undefined ? l.rest : def.rest);
  const labOf = (l) => `${l.sets} ${l.sets === 1 ? def.setName.toLowerCase() : def.setName.toLowerCase() + 's'} · ${l.n} ${l.unit === 's' ? 's' : UNIT_LABEL[l.unit]}`;
  const exTime = (l) => l.sets * durOf(l) + (l.sets - 1) * restOf(l) + restOf(l);
  const totalTime = () => EXS.reduce((s, _, i) => s + exTime(LV(i)), 0);
  const mins = (s) => Math.round(s / 60) + ' min';
  const setLabel = (ex, l) => {
    if (sidesOf(ex, l)) return `${sidesOf(ex, l)} ${D.set % 2 === 0 ? 'derecha' : 'izquierda'} · ${D.set + 1} de ${l.sets}`;
    return `${def.setName} ${D.set + 1} de ${l.sets}`;
  };
  const repIndex = (l, t) => clamp(Math.floor(t / repT(l)), 0, l.n - 1);

  // ---------- ajustes / chrome ----------
  function applyChrome() {
    $('#bV').classList.toggle('on', CFG.voice);
    $('#bS').classList.toggle('on', CFG.sound);
    $('#bW').innerHTML = 'Vista<span class="lg"> · ' + VIEWS[D.view].n + '</span>';
    document.querySelectorAll('#avSeg button').forEach((b) => b.classList.toggle('on', b.dataset.v === GP.variant));
  }
  const save = () => store.set(CFG);

  function renderSetup() {
    $('#allLv').innerHTML = LEVEL_NAMES.map(
      (n, i) => `<button data-l="${i + 1}" class="${CFG.lv.every((v) => v === i + 1) ? 'on' : ''}">${n}</button>`,
    ).join('');
    $('#exList').innerHTML = EXS.map((ex, i) => {
      const l = LV(i);
      const chips = LEVEL_NAMES.map(
        (n, k) => `<button data-e="${i}" data-l="${k + 1}" title="${n}" class="${lvl(i) === k + 1 ? 'on' : ''}">${k + 1}</button>`,
      ).join('');
      return `<li><b>${i + 1}</b><div><span>${esc(ex.name)}</span><small>${LEVEL_NAMES[lvl(i) - 1]} · ${esc(l.t)}</small><small class="lab">${labOf(l)}</small></div><div class="lvc">${chips}</div></li>`;
    }).join('');
    $('#totalT').textContent = 'Duración estimada de la sesión: ' + mins(totalTime());
  }

  function setScreen(name) {
    D.screen = name;
    $('#setup').classList.toggle('on', name === 'setup');
    $('#end').classList.toggle('on', name === 'end');
    if (name === 'setup') renderSetup();
    document.body.dataset.screen = name;
    stage.resize();
  }

  function renderPanel() {
    const ex = EXS[D.ex];
    const l = LV(D.ex);
    const ph = D.phase;
    $('#pStep').textContent = `Ejercicio ${D.ex + 1} de ${EXS.length}`;
    $('#pTitle').textContent = ex.name;
    $('#pArea').textContent = ex.area;
    $('#pMus').textContent = 'Músculos: ' + ex.mus.map((m) => MUSCLE_NAMES[m]).join(' · ');
    $('#pMus').classList.toggle('off', !musclesOn);
    $('#pLevels').innerHTML = LEVEL_NAMES.map(
      (n, k) =>
        `<button data-l="${k + 1}" class="${lvl(D.ex) === k + 1 ? 'on' : ''} ${D.done[D.ex] || k + 1 < lvl(D.ex) ? 'ok' : ''}" ${ph !== 'ready' ? 'disabled' : ''}>${n}</button>`,
    ).join('');
    $('#pLvT').innerHTML = `<b>${LEVEL_NAMES[lvl(D.ex) - 1]}</b> · ${esc(l.t)}`;
    $('#pCues').innerHTML = l.d.map((s) => `<li>${esc(s)}</li>`).join('');
    $('#pSpec').textContent = labOf(l);
    $('#pKey').innerHTML = ex.key.length ? '<h4>Importante</h4><ul>' + ex.key.map((s) => `<li>${esc(s)}</li>`).join('') + '</ul>' : '';
    $('#pErrBox').style.display = ex.errors.length ? '' : 'none';
    $('#pErr').innerHTML = ex.errors.map((s) => `<li>${esc(s)}</li>`).join('');
    $('#steps').innerHTML = EXS.map(
      (e, i) => `<button class="${i === D.ex ? 'cur' : ''} ${D.done[i] ? 'ok' : ''}" data-i="${i}" title="${esc(e.name)}">${i + 1}</button>`,
    ).join('');
    $('#bar i').style.width = (D.done.filter(Boolean).length / EXS.length) * 100 + '%';
    $('#mainBtn').textContent = ph === 'ready' ? 'Iniciar ejercicio' : D.paused ? 'Reanudar' : 'Pausar';
    $('#skipBtn').style.display = ph === 'ready' ? 'none' : '';
    $('#skipBtn').textContent = ph === 'rest' ? 'Saltar descanso' : `Saltar ${def.setName.toLowerCase()}`;
    $('#prevBtn').disabled = D.ex === 0;
    $('#nextBtn').disabled = D.ex === EXS.length - 1;
    let dots = '';
    for (let s = 0; s < l.sets; s++) {
      const on = ph !== 'ready' && (s < D.set || (s === D.set && ph === 'work'));
      dots += `<i class="${on ? 'on' : ''} ${ph === 'work' && s === D.set ? 'cur' : ''}"></i>`;
    }
    $('#dots').innerHTML = dots;
  }

  function renderTimer() {
    const ph = D.phase;
    const l = LV(D.ex);
    const ex = EXS[D.ex];
    let num = '';
    let lab = '';
    let frac = 1;
    let small = false;
    if (ph === 'ready') {
      num = String(l.n);
      lab = labOf(l);
    } else if (ph === 'count') {
      num = String(Math.max(1, 3 - Math.floor(D.el)));
      lab = 'Preparados';
      frac = 1 - (D.el % 1);
    } else if (ph === 'work') {
      frac = 1 - D.el / D.dur;
      if (l.unit === 's') {
        num = String(Math.ceil(D.dur - D.el));
        lab = setLabel(ex, l) + ' · segundos';
      } else {
        num = repIndex(l, D.el) + 1 + '/' + l.n;
        small = true;
        lab = setLabel(ex, l) + ' · repeticiones';
      }
      if (D.paused) lab += ' · pausa';
    } else if (ph === 'rest') {
      const r = restOf(l);
      num = String(Math.ceil(r - D.el));
      lab = 'Descanso · respira';
      frac = 1 - D.el / r;
    }
    $('#tNum').textContent = num;
    $('#tNum').classList.toggle('sm2', small);
    $('#tLab').textContent = lab;
    $('#ring').style.strokeDashoffset = 289 * (1 - clamp(frac, 0, 1));
    document.body.dataset.phase = ph;
  }

  function toast(text, ms = 2400) {
    const t = $('#toast');
    t.textContent = text;
    t.classList.add('on');
    clearTimeout(toast.h);
    toast.h = setTimeout(() => t.classList.remove('on'), ms);
  }
  function flash(text) {
    const e = $('#cd');
    e.textContent = text;
    e.classList.remove('go');
    void e.offsetWidth;
    e.classList.add('go');
  }

  // ---------- coach de cámara ----------
  const coach = createCoach({
    stageEl: $('#stage'),
    say: (t) => speak(CFG, t),
    getExercise: () => EXS[D.ex],
  });

  // ---------- flujo ----------
  function loadExercise() {
    const ex = EXS[D.ex];
    const l = LV(D.ex);
    Object.assign(D, { phase: 'ready', el: 0, set: 0, animT: 0, paused: false, lastRep: -1, wrapN: 0, snap: 1, dragAz: 0, dragEl: 0 });
    D.dur = durOf(l);
    $('#cd').classList.remove('go');
    $('#cd').textContent = '';
    speak(CFG, `${D.ex + 1}. ${ex.name}. ${LEVEL_NAMES[lvl(D.ex) - 1]}`);
    renderPanel();
    renderTimer();
    if (coach) coach.setExercise(ex);
  }

  function startSession() {
    requestFullscreen();
    keepAwake();
    D.ex = 0;
    D.done = [];
    D.sessionTime = 0;
    setScreen('session');
    loadExercise();
    save();
  }

  function startCount() {
    Object.assign(D, { phase: 'count', el: 0, cdn: 4, animT: 0, paused: false });
    renderPanel();
  }

  function startWork() {
    const l = LV(D.ex);
    Object.assign(D, { phase: 'work', el: 0, animT: 0, cdn: 99, lastRep: -1, snap: 1, wrapN: 0 });
    D.dur = durOf(l);
    D.side = D.set % 2 === 0 ? -1 : 1;
    flash('YA');
    beep(CFG, 900, 0.3, 'square', 0.18);
    speak(CFG, sidesOf(EXS[D.ex], l) ? (D.side < 0 ? 'Lado derecho. Ya' : 'Lado izquierdo. Ya') : 'Ya');
    renderPanel();
  }

  function endSet() {
    const l = LV(D.ex);
    if (D.set + 1 < l.sets) {
      Object.assign(D, { phase: 'rest', el: 0, animT: 0 });
      speak(CFG, 'Descanso');
      toast('Descanso', 3000);
      beep(CFG, 500, 0.25, 'triangle');
      renderPanel();
    } else {
      D.done[D.ex] = true;
      chime(CFG, [[523, 0], [659, 140], [784, 280]]);
      if (D.ex < EXS.length - 1) {
        toast('Ejercicio completado');
        D.ex++;
        loadExercise();
      } else finishSession();
    }
  }

  function confetti() {
    const c = $('#conf');
    if (!c || (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches)) return;
    const g = c.getContext('2d');
    c.width = innerWidth;
    c.height = innerHeight;
    const cols = [def.theme.acc, def.theme.hi, '#ffffff'];
    const parts = Array.from({ length: 160 }, () => ({
      x: innerWidth / 2 + (Math.random() - 0.5) * 240,
      y: innerHeight * 0.4,
      vx: (Math.random() - 0.5) * 15,
      vy: -Math.random() * 15 - 4,
      r: Math.random() * 5 + 3,
      a: Math.random() * 6,
      va: (Math.random() - 0.5) * 0.4,
      c: cols[(Math.random() * 3) | 0],
    }));
    const t0 = performance.now();
    (function tick(now) {
      const s = (now - t0) / 1000;
      g.clearRect(0, 0, c.width, c.height);
      if (s > 3.4) return;
      for (const p of parts) {
        p.vy += 0.36;
        p.x += p.vx;
        p.y += p.vy;
        p.a += p.va;
        p.vx *= 0.99;
        g.save();
        g.translate(p.x, p.y);
        g.rotate(p.a);
        g.globalAlpha = Math.max(0, 1 - s / 3.4);
        g.fillStyle = p.c;
        g.fillRect(-p.r, -p.r / 2, p.r * 2, p.r);
        g.restore();
      }
      requestAnimationFrame(tick);
    })(t0);
  }

  function finishSession() {
    D.phase = 'done';
    renderPanel();
    setScreen('end');
    confetti();
    chime(CFG, [[523, 0], [659, 150], [784, 300], [1047, 450, 0.5]]);
    speak(CFG, 'Sesión completada');
    const m = Math.floor(D.sessionTime / 60);
    const s = Math.round(D.sessionTime % 60);
    $('#endTime').textContent = `Tiempo total: ${m} min ${s} s`;
    $('#endList').innerHTML = EXS.map((ex, i) => `<li><b>✓</b>${i + 1}. ${esc(ex.name)}<small>${LEVEL_NAMES[lvl(i) - 1]} · ${labOf(LV(i))}</small></li>`).join('');
    try {
      const log = JSON.parse(localStorage.getItem('forja:log') || '[]');
      log.push({ id: def.id, ts: Date.now(), secs: Math.round(D.sessionTime), level: Math.round(CFG.lv.reduce((a, b) => a + b, 0) / CFG.lv.length) });
      localStorage.setItem('forja:log', JSON.stringify(log.slice(-400)));
    } catch {
      /* sin almacenamiento */
    }
  }

  const goEx = (i) => {
    D.ex = clamp(i, 0, EXS.length - 1);
    D.paused = false;
    loadExercise();
  };

  // ---------- eventos ----------
  $('#go').onclick = startSession;
  $('#mainBtn').onclick = () => {
    if (D.phase === 'ready') {
      requestFullscreen();
      startCount();
    } else {
      D.paused = !D.paused;
      if (D.paused) stopSpeech();
      renderPanel();
    }
  };
  $('#skipBtn').onclick = () => {
    if (D.phase === 'rest') {
      D.set++;
      startWork();
    } else if (D.phase === 'work') D.el = D.dur;
    else if (D.phase === 'count') startWork();
  };
  $('#prevBtn').onclick = () => goEx(D.ex - 1);
  $('#nextBtn').onclick = () => goEx(D.ex + 1);
  $('#steps').onclick = (e) => {
    const b = e.target.closest('button');
    if (b) goEx(+b.dataset.i);
  };
  $('#pLevels').onclick = (e) => {
    const b = e.target.closest('button');
    if (!b || D.phase !== 'ready') return;
    CFG.lv[D.ex] = +b.dataset.l;
    save();
    loadExercise();
  };
  $('#allLv').onclick = (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    CFG.lv = EXS.map(() => +b.dataset.l);
    CFG.level = +b.dataset.l;
    save();
    renderSetup();
  };
  document.addEventListener('click', (e) => {
    const b = e.target.closest('#exList .lvc button');
    if (!b) return;
    CFG.lv[+b.dataset.e] = +b.dataset.l;
    save();
    renderSetup();
  });
  $('#avSeg').onclick = (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    GP.variant = b.dataset.v;
    globalPrefs.set(GP);
    stage.setAvatar(GP.variant, look());
    D.snap = 1;
    applyChrome();
  };
  $('#bV').onclick = () => {
    CFG.voice = !CFG.voice;
    if (!CFG.voice) stopSpeech();
    applyChrome();
    save();
  };
  $('#bS').onclick = () => {
    CFG.sound = !CFG.sound;
    applyChrome();
    save();
  };
  $('#bF').onclick = toggleFullscreen;
  $('#bCam').onclick = () => {
    coach.toggle();
    $('#bCam').classList.toggle('on', coach.isOpen());
  };
  $('#bW').onclick = () => {
    D.view = (D.view + 1) % VIEWS.length;
    D.dragAz = 0;
    D.dragEl = 0;
    applyChrome();
  };
  $('#bC').onclick = () => {
    D.paused = false;
    setScreen('setup');
  };
  $('#again').onclick = startSession;
  $('#backSetup').onclick = () => setScreen('setup');
  $('#pMus').addEventListener('click', () => {
    musclesOn = !musclesOn;
    $('#pMus').classList.toggle('off', !musclesOn);
  });
  document.addEventListener('keydown', (e) => {
    if (D.screen !== 'session' || e.target.closest('input,textarea')) return;
    if (e.code === 'Space') {
      e.preventDefault();
      $('#mainBtn').click();
    } else if (e.code === 'ArrowRight') $('#nextBtn').click();
    else if (e.code === 'ArrowLeft') $('#prevBtn').click();
    else if (e.key === 'f' || e.key === 'F') toggleFullscreen();
  });

  let drag = null;
  const cv = $('#cv');
  cv.addEventListener('pointerdown', (e) => {
    drag = { x: e.clientX, y: e.clientY, az: D.dragAz, el: D.dragEl };
    cv.setPointerCapture(e.pointerId);
  });
  cv.addEventListener('pointermove', (e) => {
    if (!drag) return;
    D.dragAz = drag.az - (e.clientX - drag.x) * 0.35;
    D.dragEl = clamp(drag.el + (e.clientY - drag.y) * 0.15, -4, 40);
  });
  cv.addEventListener('pointerup', () => (drag = null));
  new ResizeObserver(() => stage.resize()).observe($('#stage'));
  addEventListener('resize', () => stage.resize());

  // ---------- bucle ----------
  const poseTime = () => (D.phase === 'work' ? D.el : D.phase === 'ready' ? D.animT % D.dur : 0);

  function tick(dt) {
    const l = LV(D.ex);
    const ex = EXS[D.ex];
    if (D.screen === 'session' && D.phase !== 'ready' && !D.paused) D.sessionTime += dt;
    if (D.screen === 'session' && !D.paused) {
      if (D.phase === 'count') {
        D.el += dt;
        const r = 3 - Math.floor(D.el);
        if (r !== D.cdn && r > 0) {
          D.cdn = r;
          flash(r);
          beep(CFG, 520, 0.12, 'square');
          speak(CFG, String(r));
        }
        if (D.el >= 3) startWork();
      } else if (D.phase === 'work') {
        const prev = D.el;
        D.el += dt;
        D.animT = D.el;
        const a = Math.ceil(D.dur - prev);
        const b = Math.ceil(D.dur - D.el);
        if (b !== a && b <= 3 && b > 0 && l.unit === 's') beep(CFG, 700, 0.09, 'square', 0.12);
        if (D.el >= D.dur) endSet();
      } else if (D.phase === 'rest') {
        D.el += dt;
        if (D.el >= restOf(l)) {
          D.set++;
          startWork();
        }
      } else if (D.phase === 'ready') {
        D.animT += Math.min(dt, 0.05);
        const r = Math.floor(D.animT / D.dur);
        if (r !== D.wrapN) {
          D.wrapN = r;
          D.snap = 1;
        }
      }
    }
    const animating = D.screen === 'session' && (D.phase === 'ready' || D.phase === 'work');
    const t = animating ? poseTime() : 0;
    D.setIdx = D.phase === 'work' ? D.set : D.wrapN;
    if (sidesOf(ex, l)) D.side = D.setIdx % 2 === 0 ? -1 : 1;
    if (animating && D.phase === 'work' && !D.paused && l.unit === 'rep') {
      const r = repIndex(l, t);
      if (r !== D.lastRep) {
        D.lastRep = r;
        speak(CFG, String(r + 1));
      }
    }
    if (D.screen === 'session') renderTimer();
  }

  let last = performance.now();
  function loop(now) {
    const dt = Math.min(0.25, (now - last) / 1000 || 0);
    last = now;
    tick(dt);
    const ex = EXS[D.ex];
    const inSession = D.screen === 'session';
    const animating = inSession && (D.phase === 'ready' || D.phase === 'work');
    const level = Object.assign({}, LV(D.ex), { L: lvl(D.ex), ex: D.ex });
    const snap = !!D.snap;
    D.snap = 0;
    stage.frame({
      dt,
      time: now,
      mode: animating ? ex.mode : 'idle',
      t: animating ? poseTime() : 0,
      ctx: D,
      level,
      snap,
      ex,
      active: inSession,
      muscles: ex.mus,
      musclesOn: musclesOn && inSession && ['ready', 'count', 'work'].includes(D.phase),
      view: VIEWS[D.view],
      drag: { az: D.dragAz, el: D.dragEl },
      cam: inSession ? ex.cam : { az: -38, el: 7, dist: 3.5, ty: 0.8 },
    });
    requestAnimationFrame(loop);
  }

  applyChrome();
  renderSetup();
  setScreen('setup');
  renderPanel();
  renderTimer();
  stage.resize();
  requestAnimationFrame(loop);

  // gancho para pruebas / capturas
  window.__k = {
    D,
    EXS,
    CFG,
    stage,
    /** Análisis de movimiento: recorre un ejercicio a 60 fps y devuelve métricas de fluidez. */
    step: (av, mode, t, ctx, lv, dt, snap) => stepAvatar(av, mode, t, ctx, lv, dt, snap),
    probe(i, level, side, seconds) {
      const ex = EXS[i];
      const lv = Object.assign({}, ex.levels[level - 1], { L: level, ex: i });
      const dur = lv.unit === 'rep' ? lv.n * (lv.repT || lv.J + lv.H) : lv.n;
      const av = stage.avatar;
      const ctx = { side, dur, ex: i };
      const dt = 1 / 60;
      const T = Math.min(seconds || 12, dur);
      let prevQ = null, prevP = null, worst = { rot: 0, pos: 0, bone: -1, t: 0 }, ground = 0, floatMax = 0;
      const rows = [];
      for (let t = 0, k = 0; t < T; t += dt, k++) {
        stepAvatar(av, ex.mode, t, ctx, lv, dt, k === 0);
        const q = av.ALL.map((b) => b.getWorldQuaternion(new av.root.quaternion.constructor()));
        const p = av.root.position.clone();
        if (prevQ && k > 20) {
          let m = 0, mb = -1;
          q.forEach((qq, j) => { const a = 2 * Math.acos(Math.min(1, Math.abs(qq.dot(prevQ[j])))) * 57.2958; if (a > m) { m = a; mb = j; } });
          const dp = p.distanceTo(prevP);
          if (m > worst.rot) { worst.rot = m; worst.bone = mb; worst.t = t; }
          if (dp > worst.pos) worst.pos = dp;
        }
        // contacto con el suelo
        let low = 1e9;
        for (const m of av.marks) { const v = m.o.getWorldPosition(new av.root.position.constructor()); low = Math.min(low, v.y - m.r); }
        if (low < -0.02) ground = Math.max(ground, -low);
        prevQ = q; prevP = p;
      }
      // salto en el bucle: pose en t=dur-dt vs t=0
      const snapAt = (t) => { stepAvatar(av, ex.mode, t, ctx, lv, dt, true); return av.ALL.map((b) => b.getWorldQuaternion(new av.root.quaternion.constructor())); };
      const a = snapAt(Math.max(0, dur - dt)); const b = snapAt(0);
      let seam = 0; a.forEach((qq, j) => { seam = Math.max(seam, 2 * Math.acos(Math.min(1, Math.abs(qq.dot(b[j])))) * 57.2958); });
      return { name: ex.name, level, side, dur, maxRotDegPerFrame: +worst.rot.toFixed(1), atT: +worst.t.toFixed(2), bone: av.ALL[worst.bone] ? (av.ALL[worst.bone].name || worst.bone) : -1, maxPosPerFrame: +worst.pos.toFixed(3), underGround: +ground.toFixed(3), seamDeg: +seam.toFixed(1) };
    },
    show(i, level, t, side) {
      CFG.lv[i] = level;
      D.screen = 'session';
      setScreen('session');
      D.ex = i;
      loadExercise();
      D.paused = true;
      D.animT = t;
      if (side !== undefined) D.side = side;
      D.snap = 1;
      renderPanel();
    },
  };
}
