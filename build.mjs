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
const FAVICON = `<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="manifest" href="manifest.webmanifest">`;
const seoHead = ({ url, title, desc, img, type = 'website' }) => `<link rel="canonical" href="${url}">
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
${FAVICON}`;
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
  html = html.replace('<!--__SESSION_LINKS__-->', defs.map((d) => `<li><a href="${d.id}.html">${esc((SEO[d.id] || [d.title])[0])}</a></li>`).join(''));
  html = html.replace('<!--__FAQ__-->', FAQ.map(([q, a]) => `<details data-reveal><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join(''));
  writeFileSync(join(dist, 'index.html'), html);
  cpSync('src/hub', join(dist, 'hub'), { recursive: true, filter: (s) => !s.endsWith('index.html') });
}
writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}sitemap.xml\n`);
writeFileSync(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[['', 1.0], ...defs.map((d) => [d.id + '.html', 0.8])].map(([u, p]) => `  <url><loc>${SITE}${u}</loc><lastmod>${TODAY}</lastmod><changefreq>monthly</changefreq><priority>${p}</priority></url>`).join('\n')}\n</urlset>\n`);
writeFileSync(join(dist, 'favicon.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#e0293f"/><path d="M36 8 16 36h14l-3 20 21-30H34z" fill="#fff"/></svg>`);
writeFileSync(join(dist, 'manifest.webmanifest'), JSON.stringify({ name: 'Forja Training Center', short_name: 'Forja', description: 'Entrena en casa o donde sea con un coach 3D.', lang: 'es', start_url: './', scope: './', display: 'standalone', background_color: '#05070a', theme_color: '#05070a', icons: [{ src: 'favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }] }));
writeFileSync(join(dist, '404.html'), `<!DOCTYPE html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Página no encontrada · Forja Training Center</title><meta http-equiv="refresh" content="4;url=${SITE}"><style>body{background:#05070a;color:#f3f6f9;font:18px system-ui;display:grid;place-items:center;min-height:100vh;text-align:center}a{color:#ff8493}</style></head><body><div><h1>Esta página no existe</h1><p><a href="${SITE}">Volver a Forja Training Center</a></p></div></body></html>`);
console.log('Listo →', dist);
