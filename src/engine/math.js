// Utilidades matemáticas pequeñas y sin dependencias.

export const rad = (deg) => (deg * Math.PI) / 180;
export const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
export const lerp = (a, b, t) => a + (b - a) * t;

/** smoothstep 0..1 */
export const smooth = (t) => {
  t = clamp(t, 0, 1);
  return t * t * (3 - 2 * t);
};

/**
 * Meseta suave: sube en `up`, se mantiene `hold`, baja en `down` (segundos o fracciones,
 * da igual mientras se use la misma unidad que `x`). Devuelve 0..1.
 */
export function plateau(x, up, hold, down) {
  if (x < up) return smooth(x / up);
  if (x < up + hold) return 1;
  if (x < up + hold + down) return 1 - smooth((x - up - hold) / down);
  return 0;
}

/** Onda triangular suave 0..1..0 con periodo 1 */
export function pingpong(phase) {
  const t = phase - Math.floor(phase);
  return t < 0.5 ? smooth(t * 2) : 1 - smooth((t - 0.5) * 2);
}

/** Parte entera y fraccionaria de t/periodo → { r: repetición, u: 0..1 dentro de ella } */
export function cycle(t, period) {
  const r = Math.floor(t / period);
  return { r, u: (t - r * period) / period };
}

/**
 * Interpolación monótona (Fritsch–Carlson) sobre fotogramas [[t, v1, v2, ...], ...].
 * Devuelve [v1, v2, ...] en el instante t. Sin sobreoscilaciones.
 */
export function curve(keys, t) {
  const n = keys.length;
  if (t <= keys[0][0]) return keys[0].slice(1);
  if (t >= keys[n - 1][0]) return keys[n - 1].slice(1);
  let k = 1;
  while (t > keys[k][0]) k++;
  const a = keys[k - 1];
  const b = keys[k];
  const h = b[0] - a[0] || 1e-6;
  const u = (t - a[0]) / h;
  const u2 = u * u;
  const u3 = u2 * u;
  const slope = (c, i) => (keys[i][c] - keys[i - 1][c]) / (keys[i][0] - keys[i - 1][0] || 1e-6);
  const tangent = (i, c) => {
    if (i === 0 || i === n - 1) return 0;
    const d0 = slope(c, i);
    const d1 = slope(c, i + 1);
    if (d0 * d1 <= 0) return 0;
    const h0 = keys[i][0] - keys[i - 1][0];
    const h1 = keys[i + 1][0] - keys[i][0];
    const w1 = 2 * h1 + h0;
    const w2 = h1 + 2 * h0;
    return (w1 + w2) / (w1 / d0 + w2 / d1);
  };
  return b.slice(1).map((_, j) => {
    const c = j + 1;
    const m0 = tangent(k - 1, c) * h;
    const m1 = tangent(k, c) * h;
    return (
      (2 * u3 - 3 * u2 + 1) * a[c] +
      (u3 - 2 * u2 + u) * m0 +
      (-2 * u3 + 3 * u2) * b[c] +
      (u3 - u2) * m1
    );
  });
}
