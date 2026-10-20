import { build, context } from 'esbuild';
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = resolve('.');
const dist = join(root, 'dist');
const watch = process.argv.includes('--watch');

// Sesiones disponibles (orden en el hub). Cada una vive en src/sessions/<id>.js
const SESSIONS = (process.env.SESSIONS ? process.env.SESSIONS.split(',') : readdirSync('src/sessions').filter((f) => f.endsWith('.js')).map((f) => f.slice(0, -3)));

rmSync(dist, { recursive: true, force: true });
mkdirSync(join(dist, 'js'), { recursive: true });
mkdirSync(join(dist, 'css'), { recursive: true });
cpSync('assets/fonts', join(dist, 'fonts'), { recursive: true });
if (existsSync('assets/img')) cpSync('assets/img', join(dist, 'img'), { recursive: true });
cpSync('src/styles', join(dist, 'css'), { recursive: true });

const SITE = (process.env.SITE_URL || 'https://enricalicarte.github.io/training-center/').replace(/\/?$/, '/');
const TODAY = new Date().toISOString().slice(0, 10);
const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// Título y descripción optimizados por sesión (palabras que la gente busca)
const FAQ = [
  ['¿Necesito material para entrenar con Forja?', 'No. La mayoría de sesiones se hacen sin material; la calistenia usa solo una silla estable y el yoga y la movilidad van mejor con una esterilla.'],
  ['¿Es gratis? ¿Hay que registrarse?', 'Es gratis y no necesitas cuenta. Tu progreso se guarda solo en tu dispositivo.'],
  ['¿Sirve para principiantes?', 'Sí. Todos los ejercicios tienen tres niveles (principiante, intermedio y avanzado) que puedes cambiar sobre la marcha.'],
  ['¿Cuánto duran las sesiones?', 'Entre 9 y 31 minutos según la sesión: yoga unos 9, movilidad 14, HIIT 24, boxeo 25, fuerza y calistenia 31.'],
  ['¿Funciona en el móvil?', 'Sí. Funciona en el navegador del móvil, tablet, ordenador o televisión, en pantalla completa y sin instalar nada.'],
];
const SEO = {
  fuerza: ['Rutina de fuerza en casa sin material', 'Rutina de fuerza en casa sin material: sentadillas, zancadas, flexiones y plancha guiadas por un coach 3D en 3 niveles. Gratis, sin registro.'],
  boxeo: ['Boxeo de sombra en casa: entrenamiento guiado', 'Entrenamiento de boxeo de sombra en casa: guardia, directos, ganchos y esquivas con un coach 3D. Cardio y coordinación sin material.'],
  yoga: ['Yoga en casa para principiantes: flow guiado', 'Sesión de yoga en casa con coach 3D: montaña, árbol, guerrero, perro boca abajo y relajación. Para principiantes y todos los niveles.'],
  movilidad: ['Ejercicios de movilidad y estiramientos en casa', 'Rutina de movilidad y estiramientos en casa: caderas, hombros, columna y piernas, paso a paso con un coach 3D. Ideal para calentar o recuperar.'],
  calistenia: ['Calistenia en casa con una silla: rutina completa', 'Calistenia en casa con una silla: fondos, flexiones inclinadas, sentadilla búlgara, subidas y plancha. Rutina guiada en 3 niveles.'],
  hiit: ['HIIT en casa sin material: rutina de cardio', 'Entrenamiento HIIT en casa sin material: jumping jacks, burpees, mountain climbers y más. Cardio intenso guiado por un coach 3D.'],
};
const MUS = { quad: 'Cuádriceps', ham: 'Isquiotibiales', glute: 'Glúteos', calf: 'Gemelos', add: 'Aductores', abd: 'Glúteo medio', core: 'Abdomen', obl: 'Oblicuos', lumbar: 'Lumbares', back: 'Espalda', chest: 'Pecho', delt: 'Hombros', tri: 'Tríceps', bic: 'Bíceps', ankle: 'Tobillos' };
const jsonLd = (o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`;
const FAVICON = (b = '') => `<link rel="icon" href="${b}favicon.svg" type="image/svg+xml">
<link rel="manifest" href="${b}manifest.webmanifest">`;
const seoHead = ({ url, title, desc, img, type = 'website', base = '' }) => `<link rel="canonical" href="${url}">
<meta name="robots" content="index,follow,max-image-preview:large">
<meta property="og:site_name" content="Forja Training Center">
<meta property="og:type" content="${type}">
<meta property="og:locale" content="es_ES">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}${img}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${SITE}${img}">
${FAVICON(base)}`;
const srOnly = 'position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap';

const sessionHtml = (def) => { const [st, sd] = SEO[def.id] || [def.title, def.summary]; const url = SITE + def.id + '.html'; return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
<meta name="theme-color" content="${def.theme.bgA}">
<meta name="description" content="${esc(sd)}">
<title>${esc(st)} · Forja Training Center</title>
${seoHead({ url, title: st + ' · Forja Training Center', desc: sd, img: 'img/' + def.id + '.jpg', type: 'article' })}
${jsonLd({
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'ExercisePlan', name: def.title, description: sd, url, inLanguage: 'es', exerciseType: def.kind, isAccessibleForFree: true, image: SITE + 'img/' + def.id + '.jpg', publisher: { '@type': 'Organization', name: 'Forja Training Center', url: SITE } },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Forja Training Center', item: SITE }, { '@type': 'ListItem', position: 2, name: def.title, item: url }] },
  ],
})}
<link rel="preload" href="fonts/barlow-condensed-800.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="css/fonts.css">
<link rel="stylesheet" href="css/session.css">
<script src="js/${def.id}.js" defer></script>
</head>
<body style="background:${def.theme.bgA}">
<main style="${srOnly}" id="seo">
<nav aria-label="Migas"><a href="./">Forja Training Center</a> › ${esc(def.title)}</nav>
<h1>${esc(st)}</h1>
<p>${esc(sd)}</p>
<h2>Material</h2><p>${def.material.map(esc).join(', ')}</p>
<h2>Ejercicios de la sesión</h2>
<ol>${def.exercises.map((e) => `<li><strong>${esc(e.name)}</strong> — ${esc(e.area)}. Músculos: ${e.mus.map((m) => MUS[m] || m).join(', ')}.</li>`).join('')}</ol>
<p>${esc(def.notice)}</p>
<h2>Más entrenamientos</h2>
<ul>${SESSIONS.filter((x) => x !== def.id).map((x) => `<li><a href="${x}.html">${esc(SEO[x] ? SEO[x][0] : x)}</a></li>`).join('')}</ul>
</main>
<noscript><p style="color:#fff;padding:24px">Forja necesita JavaScript activado para mostrar el entrenador 3D.</p></noscript>
</body>
</html>
`; };

const defs = [];
async function bundleSession(id) {
  const result = await build({
    stdin: {
      contents: `import def from './${id}.js'; import { bootSession } from '../engine/session.js'; bootSession(def);`,
      resolveDir: join(root, 'src/sessions'),
      sourcefile: `entry-${id}.js`,
    },
    bundle: true,
    minify: true,
    format: 'iife',
    target: 'es2020',
    outfile: join(dist, 'js', `${id}.js`),
    legalComments: 'none',
    logLevel: 'warning',
  });
  return result;
}

async function loadDef(id) {
  // Importa la definición (datos) en Node, sin DOM: los modos se registran pero no se ejecutan.
  const out = join(root, 'node_modules/.cache-defs', `${id}.mjs`);
  await build({
    entryPoints: [join(root, 'src/sessions', `${id}.js`)],
    bundle: true,
    format: 'esm',
    platform: 'node',
    outfile: out,
    logLevel: 'silent',
    external: ['three'],
    banner: { js: "globalThis.document ??= undefined;" },
  });
  return (await import(pathToFileURL(out).href + '?t=' + Date.now())).default;
}

for (const id of SESSIONS) {
  await bundleSession(id);
  const def = await loadDef(id);
  defs.push(def);
  writeFileSync(join(dist, `${id}.html`), sessionHtml(def));
  console.log('✓', id, (readFileSync(join(dist, 'js', `${id}.js`)).length / 1024).toFixed(0) + ' KB');
}

// Hub
await build({
  entryPoints: [join(root, 'src/hub/hub.js')],
  bundle: true, minify: true, format: 'iife', target: 'es2020',
  outfile: join(dist, 'js', 'hub.js'), legalComments: 'none', logLevel: 'warning',
});
const catalog = defs.map((d) => ({
  id: d.id,
  title: d.title,
  tagline: d.tagline,
  kind: d.kind,
  summary: d.summary,
  material: d.material,
  acc: d.theme.acc,
  hi: d.theme.hi,
  bgA: d.theme.bgA,
  bgB: d.theme.bgB,
  accText: d.theme.accText || '#fff',
  exercises: d.exercises.length,
  minutes: Math.round(
    d.exercises.reduce((sum, ex) => {
      const l = ex.levels[1];
      const dur = l.unit === 'rep' ? l.n * (l.repT || 3) : l.n;
      const rest = l.rest !== undefined ? l.rest : d.rest;
      return sum + l.sets * dur + l.sets * rest;
    }, 0) / 60,
  ),
  names: d.exercises.map((e) => e.name),
}));
writeFileSync(join(dist, 'catalog.json'), JSON.stringify(catalog, null, 1));
if (existsSync('src/hub/index.html')) {
  let html = readFileSync('src/hub/index.html', 'utf8');
  html = html.replace('/*__CATALOG__*/[]', JSON.stringify(catalog));
  const HT = 'Forja Training Center · Entrena en casa con coach 3D';
  const HD = 'Entrena en casa o donde sea con un coach 3D: fuerza, boxeo, yoga, movilidad, calistenia y HIIT. Rutinas guiadas con voz y cuenta atrás, 3 niveles, gratis y sin registro.';
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${HT}</title>`).replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(HD)}">`);
  html = html.replace('<!--__SEO_HEAD__-->', seoHead({ url: SITE, title: HT, desc: HD, img: 'img/og.jpg' }) + '\n' + jsonLd({
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', name: 'Forja Training Center', url: SITE, inLanguage: 'es', description: HD },
      { '@type': 'Organization', name: 'Forja Training Center', url: SITE, logo: SITE + 'favicon.svg' },
      { '@type': 'ItemList', name: 'Sesiones de entrenamiento', itemListElement: defs.map((d, i) => ({ '@type': 'ListItem', position: i + 1, name: (SEO[d.id] || [d.title])[0], url: SITE + d.id + '.html' })) },
      { '@type': 'FAQPage', mainEntity: FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    ],
  }));
  html = html.replace('<!--__SESSION_LINKS__-->', defs.map((d) => `<li><a href="${d.id}.html">${esc((SEO[d.id] || [d.title])[0])}</a></li>`).join('') + '<li><a href="ejercicios/">Guía de ejercicios</a></li>');
  html = html.replace('<!--__FAQ__-->', FAQ.map(([q, a]) => `<details data-reveal><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join(''));
  writeFileSync(join(dist, 'index.html'), html);
  cpSync('src/hub', join(dist, 'hub'), { recursive: true, filter: (s) => !s.endsWith('index.html') });
}

// ───── Guías de ejercicios: una página indexable por ejercicio (SEO de cola larga) ─────
const LV = ['Principiante', 'Intermedio', 'Avanzado'];
const slug = (t) => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const guides = [];
{
  const used = new Set();
  for (const d of defs) for (const [i, e] of d.exercises.entries()) {
    let sl = slug(e.name);
    if (used.has(sl)) sl += '-' + d.id;
    used.add(sl);
    guides.push({ d, e, i, sl, url: `${SITE}ejercicios/${sl}.html` });
  }
}
const GT = (g) => `Cómo hacer ${g.e.name.toLowerCase()} bien: técnica, errores y niveles`;
const GD = (g) => {
  const m = g.e.mus.map((x) => MUS[x] || x).join(', ');
  const t = `${g.e.name}: ${g.e.area.toLowerCase()}. Aprende la técnica paso a paso, los errores más comunes y 3 niveles de progresión. Músculos: ${m}.`;
  return t.length > 158 ? t.slice(0, 155).replace(/[ ,.]+\S*$/, '') + '…' : t;
};
mkdirSync(join(dist, 'ejercicios'), { recursive: true });
const gShell = ({ title, desc, url, body, ld, d }) => `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#05070a">
<title>${esc(title)} · Forja</title>
<meta name="description" content="${esc(desc)}">
${seoHead({ url, title, desc, img: d ? 'img/' + d.id + '.jpg' : 'img/og.jpg', type: 'article', base: '../' })}
${jsonLd(ld)}
<link rel="preload" href="../fonts/barlow-condensed-800.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="../css/fonts.css">
<link rel="stylesheet" href="../css/guide.css">
</head>
<body style="--acc:${d ? d.theme.acc : '#e0293f'};--hi:${d ? d.theme.hi : '#ff8493'};--on:${d ? d.theme.accText || '#fff' : '#fff'}">
<header><a class="logo" href="../">Forja<small>TU TRAINING CENTER</small></a><nav aria-label="Principal"><a href="../">Inicio</a><a href="./">Ejercicios</a></nav></header>
<main>${body}</main>
<footer><p><b>Importante.</b> Forja ofrece pautas generales de ejercicio para personas sanas y no sustituye el consejo de un profesional sanitario o de un entrenador. Si tienes una lesión o una condición médica, consúltalo antes de empezar y para si notas dolor, mareo o falta de aire.</p></footer>
</body>
</html>
`;
for (const g of guides) {
  const { d, e } = g;
  const sessLinks = guides.filter((x) => x.d === d && x !== g).map((x) => `<li><a href="${x.sl}.html">${esc(x.e.name)}</a></li>`).join('');
  const lvl = e.levels.map((l, k) => `<article class="lv"><div class="bars">${[0, 1, 2].map((b) => `<i${b <= k ? ' class="on"' : ''}></i>`).join('')}</div><h3>${LV[k]}</h3><p class="t">${esc(l.t)}</p><ul>${l.d.map((x) => `<li>${esc(x)}</li>`).join('')}</ul><p class="dose">${l.sets} series × ${l.n} ${l.unit === 'rep' ? 'repeticiones' : 'segundos'}</p></article>`).join('');
  const body = `<nav class="bc" aria-label="Migas"><a href="../">Forja</a> › <a href="./">Ejercicios</a> › ${esc(e.name)}</nav>
<h1>Cómo hacer ${esc(e.name.toLowerCase())}: técnica correcta</h1>
<p class="lead">${esc(e.name)} es un ejercicio de <strong>${esc(e.area.toLowerCase())}</strong> de la sesión <a href="../${d.id}.html">${esc(d.title)}</a>. Aquí tienes la técnica paso a paso, los errores que más se repiten y cómo progresar en tres niveles.</p>
<div class="cta"><a class="btn" href="../${d.id}.html">Practicar con el coach 3D</a></div>
<h2>Músculos que trabaja</h2>
<ul class="chips">${e.mus.map((m) => `<li>${esc(MUS[m] || m)}</li>`).join('')}</ul>
<h2>Técnica paso a paso</h2>
<ol class="steps">${e.key.map((k) => `<li>${esc(k)}</li>`).join('')}</ol>
<h2>Errores comunes</h2>
<ul class="errs">${e.errors.map((k) => `<li>${esc(k)}</li>`).join('')}</ul>
<h2>Progresión en 3 niveles</h2>
<div class="lvs">${lvl}</div>
<div class="cta"><a class="btn" href="../${d.id}.html">Empezar la sesión de ${esc(d.title.toLowerCase())}</a></div>
<h2>Más ejercicios de ${esc(d.title.toLowerCase())}</h2>
<ul class="more">${sessLinks}</ul>`;
  writeFileSync(join(dist, 'ejercicios', g.sl + '.html'), gShell({
    title: GT(g), desc: GD(g), url: g.url, d, body,
    ld: { '@context': 'https://schema.org', '@graph': [
      { '@type': 'HowTo', name: `Cómo hacer ${e.name.toLowerCase()}`, description: GD(g), inLanguage: 'es', image: SITE + 'img/' + d.id + '.jpg', step: e.key.map((k, n) => ({ '@type': 'HowToStep', position: n + 1, text: k })) },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Forja', item: SITE }, { '@type': 'ListItem', position: 2, name: 'Ejercicios', item: SITE + 'ejercicios/' }, { '@type': 'ListItem', position: 3, name: e.name, item: g.url }] },
    ] },
  }));
}
{
  const IT = 'Guía de ejercicios en casa: técnica, músculos y errores comunes';
  const ID = `${guides.length} ejercicios explicados paso a paso: fuerza, boxeo, yoga, movilidad, calistenia y HIIT. Técnica correcta, músculos que trabajan y errores a evitar.`;
  const body = `<nav class="bc" aria-label="Migas"><a href="../">Forja</a> › Ejercicios</nav>
<h1>Guía de ejercicios en casa</h1>
<p class="lead">${esc(ID)}</p>
${defs.map((d) => `<h2><a href="../${d.id}.html">${esc((SEO[d.id] || [d.title])[0])}</a></h2><ul class="more">${guides.filter((g) => g.d === d).map((g) => `<li><a href="${g.sl}.html">${esc(g.e.name)}</a> <span>${esc(g.e.area)}</span></li>`).join('')}</ul>`).join('')}`;
  writeFileSync(join(dist, 'ejercicios', 'index.html'), gShell({
    title: IT, desc: ID, url: SITE + 'ejercicios/', d: null, body,
    ld: { '@context': 'https://schema.org', '@graph': [
      { '@type': 'CollectionPage', name: IT, description: ID, inLanguage: 'es', url: SITE + 'ejercicios/' },
      { '@type': 'ItemList', itemListElement: guides.map((g, n) => ({ '@type': 'ListItem', position: n + 1, name: g.e.name, url: g.url })) },
    ] },
  }));
}
writeFileSync(join(dist, 'css', 'guide.css'), `*{box-sizing:border-box;margin:0;padding:0}html{background:#05070a}body{background:#05070a;color:#f3f6f9;font:17px/1.65 IN,system-ui,sans-serif;-webkit-font-smoothing:antialiased}
a{color:var(--hi);text-decoration:none}a:hover{text-decoration:underline}
header{display:flex;justify-content:space-between;align-items:center;max-width:860px;margin:0 auto;padding:20px 20px}
.logo{font:800 26px/1 BC,sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#f3f6f9}.logo small{display:block;font:700 9.5px/1 BC,sans-serif;letter-spacing:.34em;color:#8a98a8;margin-top:4px}
header nav{display:flex;gap:22px;font-weight:600;font-size:14px}header nav a{color:#8a98a8}
main{max-width:860px;margin:0 auto;padding:10px 20px 60px}
.bc{font-size:13px;color:#8a98a8;margin:10px 0 18px}.bc a{color:#8a98a8}
h1{font:800 clamp(40px,7vw,68px)/.95 BC,sans-serif;text-transform:uppercase;margin-bottom:18px}
h2{font:800 clamp(28px,4vw,38px)/1 BC,sans-serif;text-transform:uppercase;margin:44px 0 14px;border-top:1px solid rgba(255,255,255,.1);padding-top:26px}h2 a{color:inherit}
.lead{color:#aebbc8;font-size:18px}.lead a{font-weight:600}
.cta{margin:26px 0}.btn{display:inline-block;background:var(--acc);color:var(--on);font:800 17px/1 BC,sans-serif;letter-spacing:.12em;text-transform:uppercase;padding:16px 28px;border-radius:99px;box-shadow:0 10px 34px -10px var(--acc)}.btn:hover{text-decoration:none;filter:brightness(1.1)}
.chips{display:flex;flex-wrap:wrap;gap:8px;list-style:none}.chips li{padding:6px 14px;border-radius:99px;border:1px solid var(--acc);background:rgba(255,255,255,.04);font-size:15px}
.steps{padding-left:1.4em}.steps li{margin:10px 0;padding-left:6px}.steps li::marker{color:var(--hi);font-weight:700}
.errs{list-style:none}.errs li{margin:8px 0;padding-left:28px;position:relative}.errs li:before{content:"✕";position:absolute;left:0;color:#ff6b6b;font-weight:700}
.lvs{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.lv{border:1px solid rgba(255,255,255,.12);border-radius:18px;padding:20px;background:#090d12}
.bars{display:flex;gap:4px;margin-bottom:14px}.bars i{width:26px;height:6px;border-radius:2px;background:rgba(255,255,255,.14)}.bars i.on{background:var(--acc)}
.lv h3{font:800 24px/1 BC,sans-serif;text-transform:uppercase}.lv .t{color:var(--hi);font-weight:600;margin:4px 0 8px}.lv ul{padding-left:1.1em;font-size:15px;color:#aebbc8}.lv .dose{margin-top:12px;font:700 15px BC,sans-serif;letter-spacing:.08em;text-transform:uppercase}
.more{list-style:none;display:grid;grid-template-columns:repeat(2,1fr);gap:6px 20px}.more li{padding:6px 0;border-bottom:1px solid rgba(255,255,255,.07)}.more span{color:#8a98a8;font-size:14px;margin-left:6px}
footer{max-width:860px;margin:0 auto;padding:30px 20px 60px;color:#66768a;font-size:13px;border-top:1px solid rgba(255,255,255,.08)}footer b{color:#8a98a8}
@media(max-width:700px){.lvs,.more{grid-template-columns:1fr}}
`);
// enlaza cada ejercicio de las páginas de sesión con su guía
for (const d of defs) {
  const f = join(dist, d.id + '.html');
  let h = readFileSync(f, 'utf8');
  for (const g of guides.filter((x) => x.d === d)) h = h.replace(`<li><strong>${esc(g.e.name)}</strong>`, `<li><a href="ejercicios/${g.sl}.html"><strong>${esc(g.e.name)}</strong></a>`);
  h = h.replace('<h2>Más entrenamientos</h2>', '<h2>Más entrenamientos</h2><p><a href="ejercicios/">Guía de ejercicios paso a paso</a></p>');
  writeFileSync(f, h);
}
writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}sitemap.xml\n`);
writeFileSync(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[['', 1.0], ['ejercicios/', 0.7], ...defs.map((d) => [d.id + '.html', 0.8]), ...guides.map((g) => ['ejercicios/' + g.sl + '.html', 0.6])].map(([u, p]) => `  <url><loc>${SITE}${u}</loc><lastmod>${TODAY}</lastmod><changefreq>monthly</changefreq><priority>${p}</priority></url>`).join('\n')}\n</urlset>\n`);
writeFileSync(join(dist, 'favicon.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#e0293f"/><path d="M36 8 16 36h14l-3 20 21-30H34z" fill="#fff"/></svg>`);
writeFileSync(join(dist, 'manifest.webmanifest'), JSON.stringify({ name: 'Forja Training Center', short_name: 'Forja', description: 'Entrena en casa o donde sea con un coach 3D.', lang: 'es', start_url: './', scope: './', display: 'standalone', background_color: '#05070a', theme_color: '#05070a', icons: [{ src: 'favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }] }));
writeFileSync(join(dist, '404.html'), `<!DOCTYPE html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Página no encontrada · Forja Training Center</title><meta http-equiv="refresh" content="4;url=${SITE}"><style>body{background:#05070a;color:#f3f6f9;font:18px system-ui;display:grid;place-items:center;min-height:100vh;text-align:center}a{color:#ff8493}</style></head><body><div><h1>Esta página no existe</h1><p><a href="${SITE}">Volver a Forja Training Center</a></p></div></body></html>`);
console.log('Listo →', dist);
