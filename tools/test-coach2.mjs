// Pruebas de los analizadores ampliados con esqueletos sintéticos. node tools/test-coach2.mjs
import { CoachSession, LM } from '../src/engine/coach-logic.js';
import '../src/engine/coach-analyzers.js';

const T = 0.25; // longitud del tronco (hombro-cadera) en coordenadas 0..1
const blank = () => Array.from({ length: 33 }, () => ({ x: 0.5, y: 0.5, z: 0, visibility: 0.99 }));
const put = (L, key, p) => { L[LM[key]] = { z: 0, visibility: 0.99, ...p }; };
const jit = (L, a = 0.003) => L.map((p) => ({ ...p, x: p.x + (Math.random() - 0.5) * a, y: p.y + (Math.random() - 0.5) * a }));
// persona de pie vista de frente: hombros, cadera, rodillas y tobillos
function standingFront({ shW = 0.16, kneeL = 0, kneeR = 0, wrL, wrR, anL, anR, hipDx = 0, liftAll = 0 } = {}) {
  const L = blank(); const cx = 0.5; const shY = 0.25 - liftAll, hipY = shY + T, knY = hipY + 0.9 * T, anY = knY + 0.9 * T;
  put(L, 'nose', { x: cx, y: shY - 0.3 * T });
  put(L, 'shL', { x: cx - shW / 2, y: shY }); put(L, 'shR', { x: cx + shW / 2, y: shY });
  put(L, 'hipL', { x: cx - 0.05 + hipDx, y: hipY }); put(L, 'hipR', { x: cx + 0.05 + hipDx, y: hipY });
  put(L, 'knL', { x: cx - 0.05, y: knY - kneeL * 0.9 * T }); put(L, 'knR', { x: cx + 0.05, y: knY - kneeR * 0.9 * T });
  put(L, 'anL', anL || { x: cx - 0.05, y: anY - liftAll * 0 }); put(L, 'anR', anR || { x: cx + 0.05, y: anY });
  put(L, 'wrL', wrL || { x: cx - 0.1, y: hipY }); put(L, 'wrR', wrR || { x: cx + 0.1, y: hipY });
  put(L, 'elL', { x: cx - 0.1, y: shY + 0.5 * T }); put(L, 'elR', { x: cx + 0.1, y: shY + 0.5 * T });
  return L;
}
// persona vista de lado (mirando a +x): hombro, cadera, rodilla, tobillo con ángulos dados
function sideBody({ hip = { x: 0.5, y: 0.5 }, trunkDeg = 0, thighDeg = 180, shinDeg = 180, arm = null } = {}) {
  const L = blank(); const r = (d) => (d * Math.PI) / 180;
  const sh = { x: hip.x + T * Math.sin(r(trunkDeg)), y: hip.y - T * Math.cos(r(trunkDeg)) };
  const kn = { x: hip.x + 0.9 * T * Math.sin(r(thighDeg)), y: hip.y - 0.9 * T * Math.cos(r(thighDeg)) };
  const an = { x: kn.x + 0.9 * T * Math.sin(r(shinDeg)), y: kn.y - 0.9 * T * Math.cos(r(shinDeg)) };
  for (const s of ['L', 'R']) { put(L, 'sh' + s, sh); put(L, 'hip' + s, hip); put(L, 'kn' + s, kn); put(L, 'an' + s, an); put(L, 'he' + s, { x: an.x - 0.03, y: an.y }); put(L, 'ft' + s, { x: an.x + 0.06, y: an.y }); }
  put(L, 'nose', { x: sh.x + 0.1 * T, y: sh.y - 0.35 * T });
  const el = arm ? arm.el : { x: sh.x, y: sh.y + 0.5 * T }; const wr = arm ? arm.wr : { x: sh.x, y: sh.y + T };
  for (const s of ['L', 'R']) { put(L, 'el' + s, el); put(L, 'wr' + s, wr); }
  return L;
}
let fail = 0;
const ok = (name, cond, info = '') => { console.log((cond ? '✓' : '✗'), name, info); if (!cond) fail++; };
function cycle(kind, frameAt, reps, per, opts = {}) {
  const cs = new CoachSession(kind); const ev = []; let t = 0;
  for (let i = 0; i < (opts.lead || 0); i++, t += 33) cs.push(jit(frameAt(0)), t);
  for (let r = 0; r < reps; r++) for (let f = 0; f <= 30; f++, t += per / 30) { const k = 0.5 - 0.5 * Math.cos(2 * Math.PI * f / 30); ev.push(...cs.push(jit(frameAt(k, r)), t).ev); }
  return { cs, reps: ev.filter((e) => e.type === 'rep'), tips: ev.filter((e) => e.type === 'tip') };
}
function hold(kind, frame, ms = 5000) {
  const cs = new CoachSession(kind); const tips = []; for (let t = 0; t < ms; t += 33) tips.push(...cs.push(jit(frame()), t).ev);
  return { cs, tips: tips.filter((e) => e.type === 'tip') };
}

// --- HIIT ---
let r = cycle('highKnees', (k, rr) => standingFront(rr % 2 ? { kneeR: k } : { kneeL: k }), 10, 500);
ok('rodillas altas: 10 reps buenas', r.cs.reps.count === 10 && r.reps.every((e) => e.good), `(${r.cs.reps.count}, ${r.reps.filter((e) => !e.good).length} malas)`);
r = cycle('highKnees', (k, rr) => standingFront(rr % 2 ? { kneeR: k * 0.55 } : { kneeL: k * 0.55 }), 6, 500);
ok('rodillas bajas: cuentan pero avisan "rodilla más alta"', r.cs.reps.count === 6 && r.reps.every((e) => e.issues.includes('knee')), `(${r.cs.reps.count})`);
r = cycle('buttKicks', (k, rr) => { const L = standingFront(); const s = rr % 2 ? 'R' : 'L'; const hip = L[LM['hip' + s]]; const an = L[LM['an' + s]]; put(L, 'an' + s, { x: an.x, y: an.y - k * 0.9 * T }); put(L, 'kn' + s, { x: hip.x, y: hip.y + 0.9 * T }); return L; }, 8, 500);
ok('talones al glúteo: 8 reps', r.cs.reps.count === 8 && r.reps.every((e) => e.good), `(${r.cs.reps.count})`);
const PLANK = { hip: { x: 0.5, y: 0.75 }, trunkDeg: 80, thighDeg: 265, shinDeg: 270 };
r = cycle('burpee', (k) => (k < 0.4 ? sideBody({ hip: { x: 0.5, y: 0.5 + k * 0.6 }, trunkDeg: k * 180, thighDeg: 180 + k * 200, shinDeg: 180 + k * 220 }) : sideBody(PLANK)), 5, 2000);
ok('burpees: 5 reps', r.cs.reps.count === 5, `(${r.cs.reps.count}) ${JSON.stringify(r.reps.map((e) => e.issues))}`);
r = cycle('mountainClimber', (k, rr) => { const L = sideBody(PLANK); const s = rr % 2 ? 'R' : 'L'; const hip = L[LM.hipL], sh = L[LM.shL]; put(L, 'kn' + s, { x: hip.x - 0.9 * T * (1 - k) + (sh.x - hip.x) * 0.5 * k, y: hip.y + 0.05 * T + 0.15 * T * k }); return L; }, 10, 500);
ok('mountain climbers: 10 reps', r.cs.reps.count === 10, `(${r.cs.reps.count})`);
r = cycle('jump', (k) => standingFront({ liftAll: 0 }).map((p, i) => (i >= 23 ? { ...p, y: p.y - (k > 0.5 ? 0.2 * T : 0) } : { ...p, y: p.y - (k > 0.5 ? 0.2 * T : 0) })), 8, 600);
ok('saltos: 8 contados', r.cs.reps.count === 8, `(${r.cs.reps.count})`);
r = cycle('skater', (k, rr) => standingFront().map((p) => ({ ...p, x: p.x + (rr % 2 ? 1 : -1) * 0.15 * k })), 8, 700);
ok('patinador: ≥6 saltos laterales', r.cs.reps.count >= 6, `(${r.cs.reps.count})`);

// --- Boxeo ---
{
  const cs = new CoachSession('punches'); let n = 0; let t = 0; const g = { x: 0.45, y: 0.22 };
  const frame = (ext, side) => standingFront({ wrL: side === 'L' ? { x: 0.42 - 0.02 * ext, y: 0.2, z: -ext * T * 1.2 } : g, wrR: side === 'R' ? { x: 0.58 + 0.02 * ext, y: 0.2, z: -ext * T * 1.2 } : { x: 0.55, y: 0.22 } });
  for (let p = 0; p < 10; p++) { const s = p % 2 ? 'R' : 'L'; for (let f = 0; f < 12; f++, t += 33) { const e = f < 4 ? f / 3 : f < 6 ? 1 : 1 - (f - 6) / 6; n += cs.push(frame(e, s), t).ev.filter((x) => x.type === 'rep').length; } }
  ok('golpes: 10 golpes contados', n === 10, `(${n})`);
  const h = hold('punches', () => standingFront({ wrL: { x: 0.4, y: 0.5 }, wrR: { x: 0.6, y: 0.5 } }), 3000);
  ok('guardia baja avisa', h.tips.some((e) => e.key === 'guard'), JSON.stringify(h.tips.map((e) => e.key)));
}
{
  const h = hold('guard', () => standingFront({ wrL: { x: 0.44, y: 0.24 }, wrR: { x: 0.56, y: 0.24 } }), 4000);
  ok('guardia correcta suma segundos', h.cs.an.seconds >= 3, `(${h.cs.an.seconds}s)`);
  const h2 = hold('guard', () => standingFront(), 4000);
  ok('sin guardia no suma y avisa', h2.cs.an.seconds === 0 && h2.tips.some((e) => e.key === 'guard'), `(${h2.cs.an.seconds}s)`);
}
r = cycle('dodge', (k, rr) => standingFront().map((p, i) => (i === 0 ? { ...p, x: p.x + (rr % 2 ? 1 : -1) * 0.1 * k } : p)), 8, 600);
ok('esquivas laterales: 8', r.cs.reps.count === 8, `(${r.cs.reps.count})`);

// --- Yoga / movilidad: posturas ---
{
  const h = hold('tree', () => standingFront({ anR: { x: 0.55, y: 0.25 + T + 0.9 * T + 0.5 * T } }), 4000);
  ok('árbol: pie en la pantorrilla suma segundos', h.cs.an.seconds >= 3, `(${h.cs.an.seconds}s) ${JSON.stringify(h.tips.map((e) => e.key))}`);
  const h2 = hold('tree', () => standingFront({ anR: { x: 0.55, y: 0.25 + T + 0.9 * T } }), 4000);
  ok('árbol: pie en la rodilla avisa', h2.tips.some((e) => e.key === 'kneeFoot') && h2.cs.an.seconds === 0, JSON.stringify(h2.tips.map((e) => e.key)));
}
{
  const warrior = () => { const L = sideBody({ hip: { x: 0.5, y: 0.55 }, trunkDeg: 0, thighDeg: 180, shinDeg: 180 }); const hip = L[LM.hipL];
    put(L, 'knL', { x: hip.x + 0.75 * T, y: hip.y + 0.5 * T }); put(L, 'anL', { x: hip.x + 0.8 * T, y: hip.y + 1.35 * T }); // pierna delantera flexionada ~100°
    put(L, 'knR', { x: hip.x - 0.6 * T, y: hip.y + 0.65 * T }); put(L, 'anR', { x: hip.x - 1.2 * T, y: hip.y + 1.35 * T }); return L; };
  const h = hold('warrior', warrior, 4000);
  ok('guerrero: suma segundos', h.cs.an.seconds >= 3, `(${h.cs.an.seconds}s) ${JSON.stringify(h.tips.map((e) => e.key))}`);
  const h2 = hold('warrior', () => sideBody({ hip: { x: 0.5, y: 0.5 } }), 3000);
  ok('de pie no es guerrero: avisa "baja más"', h2.cs.an.seconds === 0 && h2.tips.some((e) => e.key === 'lower'), JSON.stringify(h2.tips.map((e) => e.key)));
}
{
  const h = hold('deepSquat', () => sideBody({ hip: { x: 0.5, y: 0.62 }, trunkDeg: 25, thighDeg: 95, shinDeg: 190 }), 4000);
  ok('sentadilla profunda: suma segundos', h.cs.an.seconds >= 3, `(${h.cs.an.seconds}s) ${JSON.stringify(h.tips.map((e) => e.key))}`);
  const h2 = hold('deepSquat', () => sideBody({ hip: { x: 0.5, y: 0.55 }, trunkDeg: 15, thighDeg: 140, shinDeg: 190 }), 3000);
  ok('media sentadilla: avisa "baja más"', h2.tips.some((e) => e.key === 'deeper'), JSON.stringify(h2.tips.map((e) => e.key)));
}
{
  const h = hold('fwdFold', () => sideBody({ hip: { x: 0.5, y: 0.55 }, trunkDeg: 150, thighDeg: 180, shinDeg: 180 }), 4000);
  ok('flexión adelante: suma segundos', h.cs.an.seconds >= 3, `(${h.cs.an.seconds}s)`);
}
{
  const h = hold('dogPlankCobra', () => sideBody({ hip: { x: 0.5, y: 0.45 }, trunkDeg: 135, thighDeg: 215, shinDeg: 215, arm: { el: { x: 0.68, y: 0.6 }, wr: { x: 0.72, y: 0.8 } } }), 3000);
  ok('perro boca abajo: suma segundos', h.cs.an.seconds >= 2, `(${h.cs.an.seconds}s) ${JSON.stringify(h.tips.map((e) => e.key))}`);
  const h2 = hold('dogPlankCobra', () => sideBody(PLANK), 3000);
  ok('plancha: suma segundos', h2.cs.an.seconds >= 2, `(${h2.cs.an.seconds}s) ${JSON.stringify(h2.tips.map((e) => e.key))}`);
}
{ const cs = new CoachSession('armCircles'); let n = 0; for (let i = 0; i < 150; i++) { const a = 2 * Math.PI * i / 30; n += cs.push(jit(standingFront({ wrL: { x: 0.42 + 0.7 * T * Math.cos(a), y: 0.25 + 0.7 * T * Math.sin(a) }, wrR: { x: 0.58 - 0.7 * T * Math.cos(a), y: 0.25 + 0.7 * T * Math.sin(a) } })), i * 50).ev.filter((e) => e.type === 'rep').length; }
  ok('círculos de brazos: ≥8 de 10 (el primero se pierde al arrancar)', n >= 8, `(${n})`);
  const cs2 = new CoachSession('armCircles'); const tips = []; for (let i = 0; i < 150; i++) { const a = 2 * Math.PI * i / 30; tips.push(...cs2.push(standingFront({ wrL: { x: 0.42 + 0.3 * T * Math.cos(a), y: 0.25 + 0.3 * T * Math.sin(a) }, wrR: { x: 0.58 - 0.3 * T * Math.cos(a), y: 0.25 + 0.3 * T * Math.sin(a) } }), i * 50).ev.filter((e) => e.type === 'tip')); }
  ok('círculos pequeños avisan', tips.some((e) => e.key === 'bigger'), JSON.stringify(tips.map((e) => e.key))); }
r = cycle('torsoRot', (k, rr) => standingFront().map((p, i) => (i === 11 || i === 12 ? { ...p, z: (i === 11 ? 1 : -1) * (rr % 2 ? 1 : -1) * 0.5 * T * k } : p)), 8, 800);
ok('rotación de tronco: ≥6 giros', r.cs.reps.count >= 6, `(${r.cs.reps.count})`);

// --- Calistenia ---
r = cycle('stepUp', (k) => sideBody({ hip: { x: 0.5, y: 0.6 - 0.9 * T * (0.5 - 0.5 * Math.cos(Math.PI * k)) * 1 }, thighDeg: 180, shinDeg: 180 }), 6, 1500);
ok('subidas a la silla: 6', r.cs.reps.count === 6 && r.reps.every((e) => e.good), `(${r.cs.reps.count}) ${JSON.stringify(r.reps.map((e) => e.issues))}`);
r = cycle('legRaise', (k) => sideBody({ hip: { x: 0.5, y: 0.8 }, trunkDeg: -90, thighDeg: 90 - 80 * k, shinDeg: 90 - 80 * k }), 5, 2000);
ok('elevación de piernas: 5', r.cs.reps.count === 5, `(${r.cs.reps.count})`);
r = cycle('crunch', (k) => sideBody({ hip: { x: 0.5, y: 0.8 }, trunkDeg: -90 + 30 * k, thighDeg: 75, shinDeg: 180 }), 6, 1500, { lead: 45 });
ok('abdominales: 6', r.cs.reps.count === 6, `(${r.cs.reps.count})`);
r = cycle('superman', (k) => sideBody({ hip: { x: 0.5, y: 0.8 }, trunkDeg: 90 - 20 * k, thighDeg: 270 + 15 * k, shinDeg: 270 + 15 * k }), 5, 2000, { lead: 45 });
ok('superman: 5', r.cs.reps.count === 5, `(${r.cs.reps.count})`);
r = cycle('chairDip', (k) => { const sh = { x: 0.5, y: 0.35 + 0.35 * T * k }; const L = sideBody({ hip: { x: 0.5, y: sh.y + T }, trunkDeg: 0, thighDeg: 120, shinDeg: 180 }); const el = { x: sh.x - 0.07 * T - 0.43 * T * k, y: sh.y + 0.45 * T + 0.05 * T * k - 0.35 * T * k }; const wr = { x: 0.5 - 0.14 * T, y: 0.35 + 0.9 * T }; for (const s2 of ['L', 'R']) { put(L, 'el' + s2, el); put(L, 'wr' + s2, wr); } return L; }, 5, 1500, { lead: 45 });
ok('fondos en silla: 5', r.cs.reps.count === 5, `(${r.cs.reps.count})`);

console.log(fail ? `\n${fail} fallos` : '\ntodo bien'); process.exit(fail ? 1 : 0);
