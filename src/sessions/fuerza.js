import '../modes/strength.js';

export default {
  id: 'fuerza',
  title: 'Fuerza en casa',
  tagline: 'Cuerpo completo · Sin material',
  kind: 'Fuerza',
  summary: 'Piernas, glúteos, pecho, core y espalda con tu propio peso. Progresión en tres niveles.',
  icon: '<path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11"/>',
  material: ['Sin material', 'Esterilla (opcional)'],
  notice:
    'Entrenamiento de fuerza general para personas sanas. Calienta unos minutos antes y para si notas dolor. Si tienes una lesión o una condición médica, consúltalo antes con un profesional. Son pautas generales: no sustituyen a un entrenador.',
  setName: 'Serie',
  rest: 30,
  theme: {
    acc: '#1fd1b8',
    hi: '#8ff0e0',
    accText: '#04211d',
    bgA: '#03100f',
    bgB: '#0b3d38',
    rim: '#7fe9d8',
    floor: ['#1d2b2a', '#162221'],
    musc: '#ff6b57',
    look: { top: 0xeef2f3, topStyle: 'tank', bottom: 0x1a2124, shoes: 0x20272b },
    lookF: { top: 0x1fd1b8, topStyle: 'bra', bottom: 0x1a2124 },
  },
  exercises: [
    {
      name: 'Sentadilla',
      coach: 'squat',
      mirror: true,
      area: 'Piernas y glúteos',
      mus: ['quad', 'glute', 'ham', 'core'],
      mode: 'squat',
      cam: { az: -80, el: 6, dist: 3.5, ty: 0.75 },
      key: [
        'Pies al ancho de hombros, puntas ligeramente abiertas.',
        'Rodillas en línea con los pies, sin que se metan hacia dentro.',
        'Pecho arriba, espalda neutra y talones apoyados.',
        'Baja como si te sentaras en una silla.',
      ],
      errors: ['Rodillas hacia dentro', 'Talones levantados', 'Espalda encorvada'],
      levels: [
        {
          t: 'Brazos al frente',
          d: ['Baja hasta que los muslos queden casi paralelos al suelo.', 'Estira los brazos al frente para mantener el equilibrio.'],
          sets: 3, n: 10, unit: 'rep', repT: 4, v: 'arms',
        },
        {
          t: 'Con pausa abajo',
          d: ['Igual, pero aguanta 2 segundos abajo con la espalda recta.', 'Sube empujando con todo el pie.'],
          sets: 3, n: 10, unit: 'rep', repT: 6, v: 'arms', pause: 2,
        },
        {
          t: 'Sentadilla con salto',
          d: ['Baja y salta con fuerza hacia arriba.', 'Aterriza con suavidad, con las rodillas flexionadas.'],
          sets: 4, n: 8, unit: 'rep', repT: 3.4, v: 'jump',
        },
      ],
    },
    {
      name: 'Zancadas',
      coach: 'lunge',
      area: 'Piernas y equilibrio',
      mus: ['quad', 'glute', 'ham', 'abd'],
      mode: 'lunge',
      cam: { az: -85, el: 6, dist: 3.9, ty: 0.72 },
      key: [
        'Paso largo con el tronco erguido.',
        'La rodilla delantera queda sobre el pie, sin pasar de los dedos.',
        'La rodilla de atrás baja cerca del suelo, sin tocarlo.',
      ],
      errors: ['Rodilla delantera hacia dentro', 'Inclinar el tronco hacia delante', 'Pasos demasiado cortos'],
      levels: [
        {
          t: 'Zancada atrás alterna',
          d: ['Da un paso largo hacia atrás y baja con control.', 'Vuelve a la posición inicial y alterna la pierna.'],
          sets: 3, n: 8, unit: 'rep', repT: 4.2, v: 'back',
        },
        {
          t: 'Adelante con giro',
          d: ['Paso largo hacia delante con las manos juntas al pecho.', 'Abajo, gira el tronco hacia la pierna de delante.'],
          sets: 3, n: 10, unit: 'rep', repT: 4.6, v: 'fwd', twist: 1,
        },
        {
          t: 'Zancadas caminando',
          d: ['Avanza encadenando una zancada tras otra, sin juntar los pies.', 'Mantén el tronco erguido y el paso largo.'],
          sets: 3, n: 12, unit: 'rep', repT: 3.6, v: 'walk',
        },
      ],
    },
    {
      name: 'Puente de glúteos',
      coach: 'bridge',
      area: 'Glúteos y cadena posterior',
      mus: ['glute', 'ham', 'core', 'lumbar'],
      mode: 'bridge',
      cam: { az: -85, el: 9, dist: 3.4, ty: 0.22 },
      key: [
        'Pies apoyados a la anchura de las caderas.',
        'Sube la cadera apretando los glúteos, sin arquear la zona lumbar.',
        'Hombros y cabeza relajados en el suelo.',
      ],
      errors: ['Arquear la zona lumbar', 'Empujar solo con las puntas', 'Rodillas hacia dentro'],
      levels: [
        {
          t: 'Puente con dos piernas',
          d: ['Sube la cadera hasta que cuerpo y muslos queden en línea.', 'Baja despacio sin apoyar del todo.'],
          sets: 3, n: 12, unit: 'rep', repT: 4, v: 'two',
        },
        {
          t: 'Pausa arriba',
          d: ['Sube y mantén 3 segundos apretando los glúteos.', 'Baja con control.'],
          sets: 3, n: 10, unit: 'rep', repT: 7, v: 'two', pause: 3,
        },
        {
          t: 'Puente a una pierna',
          d: ['Estira una pierna y sube solo con la otra.', 'Cadera nivelada, sin que se caiga a un lado. Alterna la pierna.'],
          sets: 3, n: 10, unit: 'rep', repT: 4.2, v: 'single',
        },
      ],
    },
    {
      name: 'Flexiones',
      coach: 'pushup',
      area: 'Pecho, hombros y tríceps',
      mus: ['chest', 'delt', 'tri', 'core'],
      mode: 'pushup',
      cam: { az: -86, el: 8, dist: 3.4, ty: 0.34 },
      key: [
        'Cuerpo en línea recta, de la cabeza a las rodillas o a los talones.',
        'Manos algo más anchas que los hombros, codos a unos 45°.',
        'Baja hasta casi tocar el suelo con el pecho.',
      ],
      errors: ['Cadera caída o levantada', 'Codos muy abiertos', 'Recorrido demasiado corto'],
      levels: [
        {
          t: 'Con rodillas apoyadas',
          d: ['Apoya las rodillas y mantén la espalda recta.', 'Baja el pecho hacia el suelo y empuja para subir.'],
          sets: 3, n: 8, unit: 'rep', repT: 4, v: 'knees',
        },
        {
          t: 'Flexión completa',
          d: ['Apoyo en manos y puntas de los pies, cuerpo en tabla.', 'Baja controlado y sube sin perder la línea.'],
          sets: 3, n: 10, unit: 'rep', repT: 4.5, v: 'full',
        },
        {
          t: 'Bajada lenta de 3 s',
          d: ['Baja en tres segundos y sube con fuerza.', 'Mantén el abdomen firme todo el tiempo.'],
          sets: 4, n: 8, unit: 'rep', repT: 7.5, v: 'full', slow: 1,
        },
      ],
    },
    {
      name: 'Plancha',
      coach: 'plank',
      area: 'Core y estabilidad',
      mus: ['core', 'obl', 'delt', 'glute'],
      mode: 'plank',
      cam: { az: -86, el: 8, dist: 3.4, ty: 0.34 },
      key: [
        'Cuerpo recto, glúteos y abdomen apretados.',
        'Hombros sobre las manos o los codos.',
        'Respira con calma, sin aguantar el aire.',
      ],
      errors: ['Cadera caída', 'Cadera demasiado alta', 'Mirar hacia delante'],
      levels: [
        {
          t: 'Apoyando las rodillas',
          d: ['Apoya las rodillas y forma una línea de la cabeza a las rodillas.', 'Aprieta abdomen y glúteos.'],
          sets: 3, n: 20, unit: 's', v: 'knees',
        },
        {
          t: 'Sobre los antebrazos',
          d: ['Codos bajo los hombros y cuerpo en línea recta.', 'Mantén la posición sin que la cadera caiga.'],
          sets: 3, n: 30, unit: 's', v: 'forearm',
        },
        {
          t: 'Toque alterno de hombro',
          d: ['Plancha con las manos. Toca un hombro con la mano contraria.', 'Evita que la cadera se balancee.'],
          sets: 3, n: 40, unit: 's', v: 'tap',
        },
      ],
    },
    {
      name: 'Abdominales',
      coach: 'crunch',
      area: 'Abdomen',
      mus: ['core', 'obl'],
      mode: 'crunch',
      cam: { az: -85, el: 12, dist: 3.4, ty: 0.25 },
      key: [
        'Zona lumbar apoyada en el suelo.',
        'Sube con el abdomen, sin tirar del cuello.',
        'Exhala al subir, inhala al bajar.',
      ],
      errors: ['Tirar del cuello con las manos', 'Despegar la zona lumbar', 'Ir demasiado rápido'],
      levels: [
        {
          t: 'Encogimiento clásico',
          d: ['Rodillas dobladas y manos junto a la cabeza.', 'Despega los hombros del suelo y baja despacio.'],
          sets: 3, n: 15, unit: 'rep', repT: 3.6, v: 'crunch',
        },
        {
          t: 'Bicicleta',
          d: ['Lleva el codo hacia la rodilla contraria, alternando.', 'Gira con el torso, no solo con los codos.'],
          sets: 3, n: 20, unit: 'rep', repT: 2.6, v: 'bike',
        },
        {
          t: 'Posición de barca',
          d: ['Sentado, inclina el tronco atrás y levanta las piernas.', 'Brazos al frente y abdomen apretado. Mantén la posición.'],
          sets: 3, n: 20, unit: 's', v: 'vsit',
        },
      ],
    },
    {
      name: 'Superman',
      coach: 'superman',
      area: 'Espalda y lumbares',
      mus: ['lumbar', 'back', 'glute', 'delt'],
      mode: 'superman',
      cam: { az: -85, el: 12, dist: 3.4, ty: 0.2 },
      key: [
        'Mirada al suelo y cuello neutro.',
        'Eleva pecho y piernas sin forzar la zona lumbar.',
        'Aprieta los glúteos en la posición alta.',
      ],
      errors: ['Mirar hacia delante', 'Subir demasiado alto', 'Subir con sacudidas'],
      levels: [
        {
          t: 'Brazos y piernas a la vez',
          d: ['Tumbado boca abajo, eleva a la vez brazos, pecho y piernas.', 'Mantén un segundo y baja con control.'],
          sets: 3, n: 10, unit: 'rep', repT: 5, v: 'both',
        },
        {
          t: 'Brazo y pierna contrarios',
          d: ['Eleva el brazo derecho con la pierna izquierda, y al revés.', 'Movimiento lento y controlado.'],
          sets: 3, n: 12, unit: 'rep', repT: 4, v: 'alt',
        },
        {
          t: 'Nadador',
          d: ['Con brazos y piernas elevados, bate alternando como si nadaras.', 'Cuello neutro y abdomen firme.'],
          sets: 3, n: 30, unit: 's', v: 'swim',
        },
      ],
    },
    {
      name: 'Saltos y cardio',
      coach: 'jump',
      area: 'Cardio y potencia',
      mus: ['calf', 'quad', 'glute', 'core'],
      mode: 'jump',
      cam: { az: -60, el: 7, dist: 4.1, ty: 0.75 },
      key: [
        'Aterriza siempre suave, con las rodillas flexionadas.',
        'Mantén el abdomen firme.',
        'Si notas molestias en las rodillas, baja el ritmo.',
      ],
      errors: ['Aterrizar con las piernas rígidas', 'Rodillas hacia dentro', 'Saltar demasiado alto'],
      levels: [
        {
          t: 'Comba imaginaria',
          d: ['Saltitos ligeros sobre las puntas, como si saltaras a la comba.', 'Muñecas sueltas y codos pegados.'],
          sets: 3, n: 30, unit: 's', v: 'rope',
        },
        {
          t: 'Saltos laterales',
          d: ['Salta de lado a lado con los pies juntos.', 'Aterriza suave y sin perder el equilibrio.'],
          sets: 3, n: 30, unit: 's', v: 'side',
        },
        {
          t: 'Salto vertical con brazos',
          d: ['Flexiona, impulsa los brazos y salta lo más alto que puedas.', 'Aterriza suave y repite.'],
          sets: 4, n: 10, unit: 'rep', repT: 3.4, v: 'vert',
        },
      ],
    },
  ],
};
