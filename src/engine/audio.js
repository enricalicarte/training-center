// Sonido, voz, pantalla completa y bloqueo de apagado de pantalla.

let ctx;

export function beep(settings, freq = 660, dur = 0.12, type = 'sine', gain = 0.16) {
  if (!settings.sound) return;
  try {
    ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    g.gain.value = gain;
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start();
    g.gain.exponentialRampToValueAtTime(8e-4, ctx.currentTime + dur);
    osc.stop(ctx.currentTime + dur);
  } catch {
    /* sin audio */
  }
}

/** Secuencia de notas [[freq, delayMs, dur?], ...] */
export function chime(settings, notes) {
  notes.forEach(([f, delay, d]) => setTimeout(() => beep(settings, f, d || 0.22, 'triangle', 0.2), delay));
}

let voicePick;
function pickVoice() {
  if (voicePick !== undefined) return voicePick;
  try {
    const list = speechSynthesis.getVoices();
    if (!list.length) return null;
    voicePick =
      list.find((v) => v.lang === 'es-ES' && /natural|google|premium|enhanced/i.test(v.name)) ||
      list.find((v) => v.lang === 'es-ES') ||
      list.find((v) => v.lang.startsWith('es')) ||
      null;
  } catch {
    voicePick = null;
  }
  return voicePick;
}

export function speak(settings, text) {
  if (!settings.voice || !window.speechSynthesis) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'es-ES';
    u.rate = 1;
    const v = pickVoice();
    if (v) u.voice = v;
    speechSynthesis.speak(u);
  } catch {
    /* sin voz */
  }
}

export function stopSpeech() {
  try {
    speechSynthesis.cancel();
  } catch {
    /* nada */
  }
}

export function requestFullscreen() {
  const el = document.documentElement;
  try {
    if (!document.fullscreenElement && el.requestFullscreen) el.requestFullscreen().catch(() => {});
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  } catch {
    /* nada */
  }
}

export function toggleFullscreen() {
  if (document.fullscreenElement) document.exitFullscreen();
  else requestFullscreen();
}

export async function keepAwake() {
  try {
    if (navigator.wakeLock) await navigator.wakeLock.request('screen');
  } catch {
    /* nada */
  }
}

if (window.speechSynthesis) {
  try {
    speechSynthesis.addEventListener('voiceschanged', () => {
      voicePick = undefined;
    });
  } catch {
    /* nada */
  }
}
