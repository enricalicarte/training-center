// Genera dist/standalone/<id>.html: un solo archivo con JS, CSS y fuentes incrustados.
import fs from 'node:fs'; import path from 'node:path';
const dist = path.resolve(import.meta.dirname, '../dist');
fs.mkdirSync(`${dist}/standalone`, { recursive: true });
const ids = (process.argv[2] || 'boxeo,fuerza,yoga,movilidad,calistenia,hiit').split(',');
const b64 = f => fs.readFileSync(f).toString('base64');
let fonts = fs.readFileSync(`${dist}/css/fonts.css`, 'utf8').replace(/url\(\.\.\/fonts\/([^)]+)\)/g, (_, f) => `url(data:font/woff2;base64,${b64(`${dist}/fonts/${f.replace(/['"]/g,'')}`)})`);
const css = fs.readFileSync(`${dist}/css/session.css`, 'utf8');
for (const id of ids) {
  let h = fs.readFileSync(`${dist}/${id}.html`, 'utf8');
  const js = fs.readFileSync(`${dist}/js/${id}.js`, 'utf8').replace(/<\/script/gi, '<\\/script');
  h = h.replace(/<link[^>]*fonts\.css[^>]*>/, `<style>${fonts}</style>`)
       .replace(/<link[^>]*session\.css[^>]*>/, `<style>${css}</style>`)
       .replace(/<link[^>]*rel="preload"[^>]*>/g, '')
       .replace(/<script[^>]*src="js\/[^"]*"[^>]*><\/script>/, '');
  h = h.replace('</body>', () => `<script>${js}</script></body>`);
  h = h.replace(/href="index.html"/g, 'href="#" onclick="return false"');
  fs.writeFileSync(`${dist}/standalone/${id}.html`, h);
  console.log(id, (h.length/1048576).toFixed(2), 'MB', /src="js|href="css|href="fonts/.test(h) ? 'REFS PENDIENTES' : 'ok');
}
