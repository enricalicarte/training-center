// Home de Forja: escenario 3D en vivo que enseña las sesiones, y secciones de apoyo.
import { Stage } from '../engine/stage.js';
import fuerza from '../sessions/fuerza.js';
import hiit from '../sessions/hiit.js';
import boxeo from '../sessions/boxeo.js';
import calistenia from '../sessions/calistenia.js';
import movilidad from '../sessions/movilidad.js';
import yoga from '../sessions/yoga.js';
import { MUSCLE_NAMES } from '../engine/rig.js';

const DEFS = [fuerza, hiit, boxeo, calistenia, movilidad, yoga];
const LEVEL_NAMES = ['Principiante', 'Intermedio', 'Avanzado'];
// Qué ejercicios se enseñan en el escenario: [índice, nivel]
const SHOW = {
  fuerza: [[0, 3], [3, 2], [7, 2]],
  hiit: [[0, 2], [5, 2], [4, 2]],
  boxeo: [[2, 3], [3, 3], [5, 3]],
  calistenia: [[0, 2], [3, 2], [4, 2]],
  movilidad: [[4, 2], [5, 2], [3, 2]],
  yoga: [[2, 3], [1, 3], [3, 3]],
};
const PER = 6.5; // segundos por ejercicio en el escenario
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

const minutes = (d) =>
  Math.round(
    d.exercises.reduce((sum, ex) => {
      const l = ex.levels[1];
      const dur = l.unit === 'rep' ? l.n * (l.repT || 3) : l.n;
      const rest = l.rest !== undefined ? l.rest : d.rest;
      return sum + l.sets * dur + l.sets * rest;
    }, 0) / 60,
  );
DEFS.forEach((d) => (d.minutes = minutes(d)));

let log = [];
try {
  log = JSON.parse(localStorage.getItem('forja:log') || '[]');
} catch {
  /* sin almacenamiento */
}
const prefs = {
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
let variant = prefs.get().variant === 'f' ? 'f' : 'm';

// ---------- escenario ----------
const stageEl = $('#stage');
const canvas = $('#cv');
let stage = null;
let cur = 0; // sesión activa
let exI = 0; // ejercicio dentro de la sesión
let clock = 0; // segundos en el ejercicio actual
let hold = 0; // pausa del auto-avance cuando el usuario elige
let visible = true;
let last = performance.now();
let snap = true;

const look = (d) => ({ ...d.theme.look, ...(variant === 'f' && d.theme.lookF ? d.theme.lookF : {}) });
function mountStage() {
  try {
    stage = new Stage(canvas, DEFS[cur].theme);
    stage.setAvatar(variant, look(DEFS[cur]));
    stage.resize();
  } catch {
    stageEl.classList.add('nogl');
    stage = null;
  }
}

function paintSession(i, userPick) {
  cur = i;
  exI = 0;
  clock = 0;
  snap = true;
  const d = DEFS[i];
  document.documentElement.style.setProperty('--acc', d.theme.acc);
  document.documentElement.style.setProperty('--hi', d.theme.hi);
  document.documentElement.style.setProperty('--on', d.theme.accText || '#fff');
  $$('.glow').forEach((g, k) => g.classList.toggle('on', k === i));
  $$('.tab').forEach((t, k) => {
    t.classList.toggle('on', k === i);
    t.setAttribute('aria-selected', k === i);
  });
  const info = $('#info');
  info.classList.remove('swap');
  void info.offsetWidth;
  info.classList.add('swap');
  $('#iKind').textContent = d.kind;
  $('#iTitle').textContent = d.title;
  $('#iSum').textContent = d.summary;
  $('#iMin').textContent = d.minutes;
  $('#iEx').textContent = d.exercises.length;
  $('#iMat').innerHTML = d.material.map((m) => `<span>${esc(m)}</span>`).join('');
  $('#go').href = `${d.id}.html`;
  $('#go').dataset.t = d.title;
  if (stage) {
    stage.setTheme(d.theme);
    stage.recolor(look(d));
  }
  if (userPick) hold = 40;
}

function tickHud() {
  const d = DEFS[cur];
  const [ei, lv] = SHOW[d.id][exI];
  const ex = d.exercises[ei];
  const l = ex.levels[lv - 1];
  $('#hExN').textContent = `${String(ei + 1).padStart(2, '0')}/${String(d.exercises.length).padStart(2, '0')}`;
  $('#hEx').textContent = ex.name;
  $('#hArea').textContent = ex.area;
  $('#hLv').textContent = LEVEL_NAMES[lv - 1];
  $('#hLvTxt').textContent = l.t;
  $('#hMus').innerHTML = ex.mus.map((m) => `<i>${esc(MUSCLE_NAMES[m] || m)}</i>`).join('');
  let big;
  let small;
  const per = l.repT || 3;
  if (l.unit === 'rep') {
    big = (Math.floor(clock / per) % l.n) + 1;
    small = `de ${l.n} rep`;
  } else {
    big = Math.max(0, Math.ceil(l.n - (clock % l.n)));
    small = 'segundos';
  }
  $('#hBig').textContent = big;
  $('#hSmall').textContent = small;
  $('#hDots').innerHTML = SHOW[d.id].map((_, k) => `<b class="${k === exI ? 'on' : ''}"></b>`).join('');
}

function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.1, (now - last) / 1000);
  last = now;
  if (!stage || !visible || document.hidden) return;
  const d = DEFS[cur];
  const [ei, lv] = SHOW[d.id][exI];
  const ex = d.exercises[ei];
  const level = Object.assign({}, ex.levels[lv - 1], { L: lv, ex: ei });
  const dur = level.unit === 'rep' ? level.n * (level.repT || 3) : level.n;
  clock += dt;
  if (hold > 0) hold -= dt;
  if (clock > PER) {
    clock = 0;
    snap = true;
    exI++;
    if (exI >= SHOW[d.id].length) {
      if (hold > 0) exI = 0;
      else {
        paintSession((cur + 1) % DEFS.length, false);
        return;
      }
    }
  }
  // lado alterna por ciclo para ejercicios con lados
  const ctx = { side: Math.floor(clock / Math.max(1, Math.min(dur, PER / 2))) % 2 ? 1 : -1, dur: Math.max(dur, PER), ex: ei };
  const cam = Object.assign({}, ex.cam, { dist: ex.cam.dist * (innerWidth > 1020 ? 1.55 : 1.6), ty: (ex.cam.ty || 0.9) + (innerWidth > 1020 ? 0.05 : 0.32) });
  stage.frame({
    dt,
    time: now,
    mode: ex.mode,
    t: clock,
    ctx,
    level,
    snap,
    ex,
    active: true,
    muscles: ex.mus,
    musclesOn: true,
    view: null,
    drag: { az: 0, el: 0 },
    cam,
  });
  snap = false;
  if (((now / 250) | 0) !== frame.h) {
    frame.h = (now / 250) | 0;
    tickHud();
  }
}

// ---------- construcción de la interfaz ----------
function build() {
  $('#glows').innerHTML = DEFS.map((d) => `<div class="glow" style="--a:${d.theme.acc};--b:${d.theme.bgB}"></div>`).join('');
  $('#tabs').innerHTML = DEFS.map(
    (d, i) => `<button class="tab" role="tab" data-i="${i}"><span class="n">${String(i + 1).padStart(2, '0')}</span><span class="t">${esc(d.kind)}</span><span class="s">${esc(d.tagline)}</span><span class="pg"></span></button>`,
  ).join('');
  $('#tabs').onclick = (e) => {
    const b = e.target.closest('.tab');
    if (b) paintSession(+b.dataset.i, true);
  };

  // marquee con todos los ejercicios
  const names = DEFS.flatMap((d) => d.exercises.map((e) => e.name));
  const row = names.map((n) => `<span>${esc(n)}</span><i></i>`).join('');
  $('#marq').innerHTML = `<div class="track">${row}${row}</div>`;

  // tarjetas de sesiones
  const count = (id) => log.filter((l) => l.id === id).length;
  $('#cards').innerHTML = DEFS.map((d, i) => {
    const n = count(d.id);
    return `<a class="card c${i}" href="${d.id}.html" style="--a:${d.theme.acc};--h:${d.theme.hi};--o:${d.theme.accText || '#fff'}" data-reveal>
      <img src="img/${d.id}.jpg" alt="" loading="lazy">
      <div class="shade"></div>
      <div class="top"><span class="k">${esc(d.kind)}</span>${n ? `<span class="done">✓ ${n}</span>` : ''}</div>
      <div class="bot">
        <h3>${esc(d.title)}</h3>
        <p>${esc(d.summary)}</p>
        <div class="meta"><b>${d.minutes}</b> min · <b>${d.exercises.length}</b> ejercicios · ${esc(d.material[0])}</div>
        <span class="arr">Empezar <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </div></a>`;
  }).join('');
  $$('.card').forEach((c) =>
    c.addEventListener('pointermove', (e) => {
      const r = c.getBoundingClientRect();
      c.style.setProperty('--mx', e.clientX - r.left + 'px');
      c.style.setProperty('--my', e.clientY - r.top + 'px');
    }),
  );

  // semana
  const PLAN = [['Lun', 'fuerza'], ['Mar', 'hiit'], ['Mié', 'movilidad'], ['Jue', 'calistenia'], ['Vie', 'boxeo'], ['Sáb', 'yoga'], ['Dom', null]];
  const today = (new Date().getDay() + 6) % 7;
  $('#week').innerHTML = PLAN.map(([day, id], i) => {
    const d = id && DEFS.find((x) => x.id === id);
    return `<div class="day${d ? '' : ' rest'}${i === today ? ' today' : ''}" ${d ? `style="--a:${d.theme.acc}"` : ''} data-reveal><small>${day}</small>${d ? `<a href="${d.id}.html">${esc(d.kind)}<em>${d.minutes} min</em></a>` : '<a>Descanso<em>Recupera</em></a>'}</div>`;
  }).join('');
  const t = PLAN[today][1] ? DEFS.find((x) => x.id === PLAN[today][1]) : null;
  const hoy = $('#hoy');
  if (t) {
    hoy.href = `${t.id}.html`;
    hoy.innerHTML = `Hoy toca ${esc(t.kind)} · ${t.minutes} min <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
  } else {
    hoy.href = 'yoga.html';
    hoy.innerHTML = 'Hoy descansa… o haz yoga suave';
  }

  // números
  $('#nSes').textContent = DEFS.length;
  $('#nEx').textContent = DEFS.reduce((a, d) => a + d.exercises.length, 0);
  $('#nDone').textContent = log.length;
  const secs = log.reduce((a, l) => a + (l.secs || 0), 0);
  $('#nMin').textContent = Math.round(secs / 60);

  // avatar él / ella
  const sw = $('#sw');
  const syncSw = () => $$('button', sw).forEach((b) => b.classList.toggle('on', b.dataset.v === variant));
  syncSw();
  sw.onclick = (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    variant = b.dataset.v;
    const p = prefs.get();
    p.variant = variant;
    prefs.set(p);
    syncSw();
    if (stage) {
      stage.setAvatar(variant, look(DEFS[cur]));
      snap = true;
    }
  };

  // reveal on scroll
  const io = new IntersectionObserver(
    (en) =>
      en.forEach((x) => {
        if (x.isIntersecting) {
          x.target.classList.add('in');
          io.unobserve(x.target);
        }
      }),
    { threshold: 0.12 },
  );
  $$('[data-reveal]').forEach((el, i) => {
    el.style.setProperty('--d', (i % 6) * 70 + 'ms');
    io.observe(el);
  });
  // nav translúcida al hacer scroll
  const nav = $('nav');
  addEventListener('scroll', () => nav.classList.toggle('solid', scrollY > 30), { passive: true });
}

build();
mountStage();
paintSession(0, false);
tickHud();
if (stage) {
  new ResizeObserver(() => stage.resize()).observe(stageEl);
  new IntersectionObserver((en) => (visible = en[0].isIntersecting), { threshold: 0 }).observe(stageEl);
  if (reduced) visible = true;
  requestAnimationFrame(frame);
}
document.documentElement.classList.add('ready');
