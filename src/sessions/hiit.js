import '../modes/strength.js';
import '../modes/keyframe.js';
import '../modes/dynamic.js';

const cam = { az: -50, el: 6, dist: 3.9, ty: 0.85 };
// Trabajo / descanso por nivel: 20/40, 30/30, 40/20
const W = (a, b, c) => [a, b, c];

const work = (n, rest, sets, extra = {}) => ({ n, rest, sets, unit: 's', ...extra });

export default {
  id: 'hiit',
  title: 'HIIT sin material',
  tagline: 'Cardio intenso · Intervalos',
  kind: 'HIIT',
  summary: 'Intervalos de alta intensidad: trabaja fuerte, descansa justo y repite. Quema mucho en poco tiempo.',
  icon: '<path d="M13 2 4 14h6l-1 8 9-12h-6z"/>',
  material: ['Sin material', 'Calzado deportivo'],
  notice:
    'Entrenamiento de alta intensidad. Calienta antes, hidrátate y para si notas mareo, dolor en el pecho o dolor articular. Si tienes problemas cardiovasculares, lesiones o una condición médica, consúltalo antes con un profesional. Pautas generales.',
  setName: 'Ronda',
  rest: 30,
  theme: {
    acc: '#3b82ff',
    hi: '#8ab8ff',
    accText: '#ffffff',
    bgA: '#050a18',
    bgB: '#0f2a6b',
    rim: '#8ab8ff',
    floor: ['#1a2133', '#131a28'],
    musc: '#d6ff3d',
    look: { top: 0x3b82ff, topStyle: 'tank', bottom: 0x12151c, shoes: 0xf2f2f2 },
    lookF: { top: 0xd6ff3d, topStyle: 'bra', bottom: 0x12151c, shoes: 0xf2f2f2 },
  },
  exercises: [
    {
      name: 'Jumping jacks',
      area: 'Cardio total',
      mus: ['delt', 'calf', 'abd', 'quad'],
      mode: 'jacks',
      cam,
      key: ['Abre brazos y piernas a la vez.', 'Aterriza suave sobre la punta de los pies.', 'Mantén el abdomen firme.'],
      errors: ['Aterrizar con los talones', 'Brazos flojos', 'Aguantar la respiración'],
      levels: [
        { t: 'Ligeros', d: ['Brazos hasta la altura de los hombros.'], ...work(20, 40, 2), repT: 1.0, half: 1 },
        { t: 'Completos', d: ['Brazos por encima de la cabeza.'], ...work(30, 30, 3), repT: 0.8 },
        { t: 'Rápidos', d: ['Ritmo alto sin perder amplitud.'], ...work(40, 20, 3), repT: 0.65 },
      ],
    },
    {
      name: 'Rodillas altas',
      area: 'Cardio y core',
      mus: ['quad', 'core', 'calf'],
      mode: 'highKnees',
      cam,
      key: ['Sube las rodillas hasta la cadera.', 'Brazos activos a 90°.', 'Tronco alto, cuello relajado.'],
      errors: ['Inclinarte hacia atrás', 'Pasos cortos', 'Talones pegados'],
      levels: [
        { t: 'Marcha rápida', d: ['Rodillas a media altura.'], ...work(20, 40, 2), repT: 0.7, h: 60 },
        { t: 'Rodillas altas', d: ['Rodillas a la altura de la cadera.'], ...work(30, 30, 3), repT: 0.55 },
        { t: 'Carrera en el sitio', d: ['Máxima velocidad con rodillas altas.'], ...work(40, 20, 3), repT: 0.42 },
      ],
    },
    {
      name: 'Sentadilla con salto',
      area: 'Piernas explosivas',
      mus: ['quad', 'glute', 'calf'],
      mode: 'squat',
      cam: { ...cam, az: -75 },
      key: ['Baja con la espalda recta.', 'Salta explosivo y estira todo el cuerpo.', 'Aterriza suave con las rodillas flexionadas.'],
      errors: ['Rodillas hacia dentro', 'Aterrizaje rígido', 'Poca profundidad'],
      levels: [
        { t: 'Sentadilla rápida', d: ['Sentadilla sin salto a buen ritmo.'], ...work(20, 40, 2), repT: 2, v: 'arms', n: 20, unit: 's' },
        { t: 'Con salto', d: ['Salta al subir y aterriza suave.'], ...work(30, 30, 3), repT: 2.6, v: 'jump' },
        { t: 'Salto potente', d: ['Máxima altura, aterriza y repite.'], ...work(40, 20, 3), repT: 2.2, v: 'jump' },
      ],
    },
    {
      name: 'Mountain climbers',
      area: 'Core y cardio',
      mus: ['core', 'delt', 'quad'],
      mode: 'mountain',
      cam: { az: -80, el: 8, dist: 4.2, ty: 0.4 },
      key: ['Manos bajo los hombros, cuerpo recto.', 'Lleva las rodillas al pecho alternando.', 'Cadera baja y estable.'],
      errors: ['Cadera alta', 'Manos adelantadas', 'Pasos descoordinados'],
      levels: [
        { t: 'Lentos', d: ['Alterna las rodillas con control.'], ...work(20, 40, 2), repT: 1.1 },
        { t: 'A ritmo', d: ['Más velocidad con cadera estable.'], ...work(30, 30, 3), repT: 0.8 },
        { t: 'Rápidos', d: ['Velocidad máxima sin perder la forma.'], ...work(40, 20, 3), repT: 0.55 },
      ],
    },
    {
      name: 'Patinador',
      area: 'Piernas laterales',
      mus: ['glute', 'abd', 'quad', 'obl'],
      mode: 'skater',
      cam: { az: 10, el: 6, dist: 4.2, ty: 0.8 },
      key: ['Salta de lado a lado.', 'La pierna libre pasa por detrás.', 'Aterriza con la rodilla flexionada.'],
      errors: ['Saltos muy cortos', 'Rodilla hacia dentro', 'Tronco erguido'],
      levels: [
        { t: 'Pasos laterales', d: ['Desplazamientos laterales sin salto.'], ...work(20, 40, 2), repT: 2.2 },
        { t: 'Patinador', d: ['Saltos laterales amplios.'], ...work(30, 30, 3), repT: 1.6 },
        { t: 'Patinador rápido', d: ['Ritmo alto con aterrizajes estables.'], ...work(40, 20, 3), repT: 1.2 },
      ],
    },
    {
      name: 'Burpees',
      area: 'Cuerpo completo',
      mus: ['chest', 'quad', 'core', 'delt'],
      mode: 'burpee',
      cam: { az: -80, el: 8, dist: 4.4, ty: 0.6 },
      key: ['Manos al suelo y salta atrás a la plancha.', 'Cuerpo recto en la plancha.', 'Vuelve y salta arriba.'],
      errors: ['Cadera caída', 'Saltar sin control', 'Espalda redondeada'],
      levels: [
        { t: 'Sin salto', d: ['Ritmo lento y controlado.'], ...work(20, 40, 2), repT: 4.2 },
        { t: 'Completos', d: ['Con salto al final.'], ...work(30, 30, 3), repT: 3.6 },
        { t: 'Rápidos', d: ['Mantén la técnica al ritmo máximo.'], ...work(40, 20, 3), repT: 3 },
      ],
    },
    {
      name: 'Talones al glúteo',
      area: 'Isquios y cardio',
      mus: ['ham', 'calf', 'glute'],
      mode: 'kicks',
      cam,
      key: ['Lleva el talón al glúteo.', 'Rodillas hacia abajo, tronco recto.', 'Brazos alternos.'],
      errors: ['Subir las rodillas', 'Inclinarte hacia delante', 'Pasos cortos'],
      levels: [
        { t: 'Suaves', d: ['Ritmo moderado.'], ...work(20, 40, 2), repT: 0.8 },
        { t: 'A ritmo', d: ['Lleva el talón al glúteo con velocidad.'], ...work(30, 30, 3), repT: 0.6 },
        { t: 'Rápidos', d: ['Velocidad máxima.'], ...work(40, 20, 3), repT: 0.45 },
      ],
    },
    {
      name: 'Comba imaginaria',
      area: 'Coordinación y gemelos',
      mus: ['calf', 'delt', 'quad'],
      mode: 'jump',
      cam: { ...cam, az: -70 },
      key: ['Saltos pequeños sobre la punta de los pies.', 'Muñecas giran, codos pegados.', 'Mira al frente.'],
      errors: ['Saltar demasiado alto', 'Codos abiertos', 'Talones al suelo'],
      levels: [
        { t: 'Suave', d: ['Saltos pequeños y regulares.'], ...work(20, 40, 2), v: 'rope' },
        { t: 'A ritmo', d: ['Más velocidad y ligereza.'], ...work(30, 30, 3), v: 'rope' },
        { t: 'Intenso', d: ['Velocidad máxima y saltos ligeros.'], ...work(40, 20, 3), v: 'rope' },
      ],
    },
  ],
};
