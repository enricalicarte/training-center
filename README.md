# Forja · Fitness en casa (adultos)

Web estática con 6 sesiones guiadas por un avatar 3D (Three.js). Sin servidor ni cuentas.

- `dist/` → sitio listo para publicar (abrir `index.html`, o servir con cualquier hosting estático).
- `src/sessions/*.js` → contenido de cada sesión (ejercicios, niveles, textos, colores).
- `src/modes/*.js` → animaciones de cada movimiento; `src/engine/` → avatar, IK, escena, sesión.
- `src/hub/index.html` → página de inicio.

## Comandos
    npm install
    npm run build      # genera dist/
    SESSIONS=hiit node build.mjs   # solo una sesión

## Añadir una sesión
Crea `src/sessions/<id>.js` siguiendo `fuerza.js` y ejecuta `npm run build`; aparece sola en el inicio
(añade su miniatura en `assets/img/<id>.jpg` y su grupo/orden en `src/hub/index.html`).
