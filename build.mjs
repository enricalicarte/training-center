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

const sessionHtml = (def) => `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
<meta name="theme-color" content="${def.theme.bgA}">
<meta name="description" content="${def.summary}">
<title>${def.title} · Forja Training Center</title>
<link rel="preload" href="fonts/barlow-condensed-800.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="css/fonts.css">
<link rel="stylesheet" href="css/session.css">
<script src="js/${def.id}.js" defer></script>
</head>
<body style="background:${def.theme.bgA}">
<noscript style="color:#fff;padding:24px;display:block">Forja necesita JavaScript activado.</noscript>
</body>
</html>
`;

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
  writeFileSync(join(dist, 'index.html'), html);
  cpSync('src/hub', join(dist, 'hub'), { recursive: true, filter: (s) => !s.endsWith('index.html') });
}
console.log('Listo →', dist);
