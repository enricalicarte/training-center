// Pruebas del coach con esqueletos sintéticos (vista lateral/frontal). node tools/test-coach.mjs
import { CoachSession, LM } from '../src/engine/coach-logic.js';
const blank = () => Array.from({ length: 33 }, () => ({ x: 0.5, y: 0.5, visibility: 0.99 }));
// intersección de dos círculos: rodilla/codo a distancias a y b de P y Q, hacia el lado `dir` (+1 delante)
function joint(P, Q, a, b, dir) {
  const d = Math.hypot(Q.x - P.x, Q.y - P.y);
  const x = (a * a - b * b + d * d) / (2 * d);
  const h = Math.sqrt(Math.max(a * a - x * x, 0));
  const ux = (Q.x - P.x) / d, uy = (Q.y - P.y) / d;
  const cand = [{ x: P.x + ux * x - uy * h, y: P.y + uy * x + ux * h }, { x: P.x + ux * x + uy * h, y: P.y + uy * x - ux * h }];
  return cand.sort((m, n) => dir * (n.x - m.x))[0];
}
const set = (L, side, o) => { for (const [k, v] of Object.entries(o)) { L[LM[k + side]] = { ...v, visibility: 0.99 }; } };
const jitter = (L, a) => L.map((p) => ({ ...p, x: p.x + (Math.random() - 0.5) * a, y: p.y + (Math.random() - 0.5) * a }));

function squatFrame(depth, lean = 15, heelUp = 0) { // depth 0..1
  const L = blank(), an = { x: 0.5, y: 0.9 };
  const hip = { x: 0.5 - 0.16 * depth, y: 0.46 + 0.22 * depth };
  const kn = joint(an, hip, 0.22, 0.22, +1);
  const sh = { x: hip.x + 0.28 * Math.sin((lean + 25 * depth) * Math.PI / 180), y: hip.y - 0.28 * Math.cos((lean + 25 * depth) * Math.PI / 180) };
  for (const s of ['L', 'R']) set(L, s, { sh, hip, kn, an, he: { x: an.x - 0.04, y: an.y - heelUp }, ft: { x: an.x + 0.08, y: an.y }, el: sh, wr: sh });
  return L;
}
function pushFrame(depth, sag = 0) {
  const L = blank(); const W = { x: 0.75, y: 0.85 };
  const sh = { x: 0.7, y: 0.85 - 0.3 + 0.22 * depth };
  const an = { x: 0.1, y: 0.85 };
  const hip = { x: sh.x + (an.x - sh.x) * 0.55, y: sh.y + (an.y - sh.y) * 0.55 + sag };
  const el = joint(sh, W, 0.15, 0.15, -1);
  for (const s of ['L', 'R']) set(L, s, { sh, el, wr: W, hip, kn: hip, an, he: an, ft: an });
  return L;
}
function bridgeFrame(up) {
  const L = blank(); const sh = { x: 0.2, y: 0.85 }, an = { x: 0.6, y: 0.85 };
  const hip = { x: 0.38 + 0.0 * up, y: 0.85 - 0.02 - 0.2 * up };
  const kn = joint(hip, an, 0.24, 0.24, 1);
  for (const s of ['L', 'R']) set(L, s, { sh, hip, kn, an, he: an, ft: an, el: sh, wr: sh });
  return L;
}
function jackFrame(open) {
  const L = blank(); const c = 0.5; const w = 0.035 + 0.2 * open;
  set(L, 'L', { sh: { x: c - 0.07, y: 0.3 }, hip: { x: c - 0.05, y: 0.55 }, an: { x: c - w, y: 0.9 }, wr: { x: c - 0.08 - 0.12 * open, y: open > 0.5 ? 0.1 : 0.55 }, kn: { x: c - w, y: 0.72 }, el: { x: c, y: 0.4 }, he: { x: c - w, y: 0.9 }, ft: { x: c - w, y: 0.9 } });
  set(L, 'R', { sh: { x: c + 0.07, y: 0.3 }, hip: { x: c + 0.05, y: 0.55 }, an: { x: c + w, y: 0.9 }, wr: { x: c + 0.08 + 0.12 * open, y: open > 0.5 ? 0.1 : 0.55 }, kn: { x: c + w, y: 0.72 }, el: { x: c, y: 0.4 }, he: { x: c + w, y: 0.9 }, ft: { x: c + w, y: 0.9 } });
  L[LM.nose] = { x: c, y: 0.2, visibility: 1 };
  return L;
}

function run(kind, frame, reps, per = 2000, extra = {}) {
  const cs = new CoachSession(kind); const evs = []; let t = 0;
  for (let r = 0; r < reps; r++) for (let f = 0; f <= 60; f++, t += per / 60) {
    const u = f / 60, k = 0.5 - 0.5 * Math.cos(2 * Math.PI * u);
    const out = cs.push(jitter(frame(k, extra), 0.004), t);
    evs.push(...out.ev);
  }
  return { cs, reps: evs.filter((e) => e.type === 'rep'), tips: evs.filter((e) => e.type === 'tip') };
}
let fail = 0;
const ok = (name, cond, info = '') => { console.log((cond ? '✓' : '✗'), name, info); if (!cond) fail++; };

let r = run('squat', (k) => squatFrame(k), 6);
ok('sentadilla buena: 6 reps contadas', r.cs.reps.count === 6, `(${r.cs.reps.count})`);
ok('sentadilla buena: todas con buena técnica', r.reps.every((e) => e.good), JSON.stringify(r.reps.map((e) => e.issues)));
r = run('squat', (k) => squatFrame(k * 0.3), 4);
ok('sentadilla corta no se cuenta como buena', r.reps.every((e) => !e.good) , `(${r.reps.length} reps)`);
r = run('squat', (k) => squatFrame(k, 55), 4);
ok('sentadilla con tronco inclinado avisa', r.reps.some((e) => e.issues.includes('chest')) || r.tips.some((e) => e.key === 'chest'), JSON.stringify(r.reps[0] && r.reps[0].issues));
r = run('pushup', (k) => pushFrame(k), 5, 1800);
ok('flexiones: 5 reps buenas', r.cs.reps.count === 5 && r.reps.every((e) => e.good), `(${r.cs.reps.count} ${JSON.stringify(r.reps.map((e) => e.issues))})`);
r = run('pushup', (k) => pushFrame(k, 0.1), 4, 1800);
ok('flexiones con cadera caída avisa', r.reps.some((e) => e.issues.includes('sag')) || r.tips.some((e) => e.key === 'sag'));
r = run('pushup', (k) => pushFrame(k * 0.2), 4, 1800);
ok('flexiones a medias no cuentan', r.cs.reps.count === 0, `(${r.cs.reps.count})`);
r = run('bridge', (k) => bridgeFrame(k), 5, 2400);
ok('puente: 5 reps', r.cs.reps.count === 5, `(${r.cs.reps.count}) ${JSON.stringify(r.reps.map((e) => e.issues))}`);
r = run('jacks', (k) => jackFrame(k > 0.5 ? 1 : 0), 8, 900);
ok('jumping jacks: 8 reps buenas', r.cs.reps.count === 8 && r.reps.every((e) => e.good), `(${r.cs.reps.count})`);
// plancha
{ const cs = new CoachSession('plank'); let t = 0; for (let i = 0; i < 300; i++, t += 33) cs.push(pushFrame(0, 0).map((p) => ({ ...p })), t);
  ok('plancha recta suma ~10 s', cs.an.seconds >= 8 && cs.an.seconds <= 10, `(${cs.an.seconds}s)`);
  const cs2 = new CoachSession('plank'); const tips = []; t = 0; for (let i = 0; i < 150; i++, t += 33) tips.push(...cs2.push(pushFrame(0, 0.15), t).ev);
  ok('plancha con cadera caída avisa', tips.some((e) => e.key === 'sag')); }
// poca visibilidad
{ const cs = new CoachSession('squat'); const L = squatFrame(0).map((p) => ({ ...p, visibility: 0.1 })); ok('sin visibilidad: ok=false', cs.push(L, 0).ok === false); }
console.log(fail ? `\n${fail} fallos` : '\ntodo bien'); process.exit(fail ? 1 : 0);
