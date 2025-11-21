import type { Lesson } from "../types";

export const bodyPartsLesson: Lesson = {
  id: 1,
  title: "Aventura en el Cuerpo Humano",
  subtitle: "Body Parts Adventure",
  emoji: "🧒",
  color: "from-blue-400 to-blue-600",
  bgColor: "bg-blue-50",
  pptFile: "/ppts/Aventura-en-el-Cuerpo-Humano.pptx",
  slides: [
    // PÁGINA 1: Intro
    {
      id: 1,
      type: 'intro',
      title: '¡Aventura en el Cuerpo Humano!',
      subtitle: 'Aprende las partes del cuerpo en inglés de forma divertida',
      image: '/images/body/pagina1.png',
      content: {
        text: 'Hola, super exploradores! Hoy vamos a iniciar un viaje increíble para conocer una máquina maravillosa: nuestro cuerpo! Y lo mejor es que lo haremos aprendiendo sus nombres en inglés. ¡Prepárense para la diversión!'
      }
    },
    // PÁGINA 2: Capítulo 1 + Partes Principales
    {
      id: 2,
      type: 'chapter-vocabulary',
      title: 'Capítulo 1: La Base de Nuestra Aventura',
      subtitle: 'Partes Principales del Cuerpo',
      content: {
        items: [
          {
            spanish: 'La Cabeza',
            english: 'Head',
            description: 'Donde están el cerebro, los ojos y la boca. ¡Es nuestro centro de mando!'
          },
          {
            spanish: 'El Tronco',
            english: 'Torso/Trunk',
            description: 'El área central que conecta todo. Aquí están el pecho y el abdomen.'
          },
          {
            spanish: 'Los Brazos',
            english: 'Arms',
            description: 'Nos permiten abrazar, lanzar y saludar. ¡Son muy importantes!'
          },
          {
            spanish: 'Las Piernas',
            english: 'Legs',
            description: 'Nos ayudan a correr, saltar y bailar. ¡Nuestra herramienta de movimiento!'
          }
        ]
      }
    },
    // PÁGINA 3: Sensores de la Cabeza
    {
      id: 3,
      type: 'vocabulary',
      title: 'Los Sensores de la Cabeza (The Head)',
      image: '/images/body/pagina3.png',
      imagePosition: 'right',
      content: {
        text: 'La cabeza tiene partes que nos ayudan a explorar el mundo. ¡Veamos qué hay!',
        items: [
          {
            spanish: 'Ojos',
            english: 'Eyes',
            description: 'Para ver todas las cosas geniales a nuestro alrededor.',
            audio: '/audios/body/pronunciation_en_eyes.mp3'
          },
          {
            spanish: 'Nariz',
            english: 'Nose',
            description: 'Para oler flores, comida, y más.',
            audio: '/audios/body/pronunciation_en_nose.mp3'
          },
          {
            spanish: 'Boca',
            english: 'Mouth',
            description: 'Para comer y hablar.',
            audio: '/audios/body/pronunciation_en_mouth.mp3'
          },
          {
            spanish: 'Orejas',
            english: 'Ears',
            description: 'Para escuchar música y cuentos.',
            audio: '/audios/body/pronunciation_en_ears.mp3'
          }
        ]
      }
    },
    // PÁGINA 4: De la Cabeza a los Dedos
    {
      id: 4,
      type: 'vocabulary',
      title: 'De la Cabeza a los Dedos',
      content: {
        text: 'Aprendamos sobre las partes pequeñas pero poderosas de nuestro cuerpo.',
        items: [
          {
            spanish: 'Pelo',
            english: 'Hair',
            description: 'Nos cubre la cabeza y nos protege.',
            audio: '/audios/body/pronunciation_en_hair.mp3'
          },
          {
            spanish: 'Cuello',
            english: 'Neck',
            description: 'Sostiene la cabeza y la ayuda a moverse.',
            audio: '/audios/body/pronunciation_en_neck.mp3'
          },
          {
            spanish: 'Hombros',
            english: 'Shoulders',
            description: 'Conectan el cuello con los brazos.',
            audio: '/audios/body/pronunciation_en_shoulders.mp3'
          },
          {
            spanish: 'Barriga',
            english: 'Stomach/Belly',
            description: 'Donde la comida se procesa.',
            audio: '/audios/body/pronunciation_en_stomach.mp3'
          },
          {
            spanish: 'Manos',
            english: 'Hands',
            description: 'Para agarrar cosas y escribir.',
            audio: '/audios/body/pronunciation_en_hands.mp3'
          }
        ]
      }
    },
    // PÁGINA 5: Juego de Vocabulario Rápido
    {
      id: 5,
      type: 'activity',
      title: 'Juego de Vocabulario Rápido',
      subtitle: '¡A Mover el Esqueleto! (Let\'s Move the Skeleton!)',
      content: {
        instruction: 'Repite en inglés y haz el movimiento:',
        activityItems: [
          {
            spanish: 'Brazo',
            english: 'Arm',
            instruction: 'Dobla tu arm en el codo (elbow).',
            image: '/images/body/pagina5.1.png'
          },
          {
            spanish: 'Mano y Dedos',
            english: 'Hand & Fingers',
            instruction: 'Mueve tus fingers de la hand rápidamente.',
            image: '/images/body/pagina5.2.png'
          },
          {
            spanish: 'Pierna y Rodilla',
            english: 'Leg & Knee',
            instruction: 'Levanta tu leg doblando la knee.',
            image: '/images/body/pagina5.3.png'
          }
        ],
        extraImage: '/images/body/pagina5.4.png'
      }
    },
    // PÁGINA 6: Capítulo 2 + Brazos y Manos
    {
      id: 6,
      type: 'chapter-vocabulary-numbered',
      title: 'Capítulo 2: Las Extremidades Poderosas',
      subtitle: 'Brazos y Manos (Arms and Hands)',
      content: {
        text: 'Nuestras extremidades superiores nos dan la capacidad de crear y manipular.',
        items: [
          {
            number: 1,
            spanish: 'Codo',
            english: 'Elbow',
            description: 'La articulación que permite doblar el brazo.',
            audio: '/audios/body/pronunciation_en_elbow.mp3'
          },
          {
            number: 2,
            spanish: 'Muñeca',
            english: 'Wrist',
            description: 'Conecta la mano con el brazo.',
            audio: '/audios/body/pronunciation_en_wrist.mp3'
          },
          {
            number: 3,
            spanish: 'Mano',
            english: 'Hand',
            description: 'Usamos para agarrar. ¡Tiene cinco dedos!',
            audio: '/audios/body/pronunciation_en_hand.mp3'
          },
          {
            number: 4,
            spanish: 'Dedo',
            english: 'Finger',
            description: 'Cada dedo tiene un nombre, pero en general son fingers.',
            audio: '/audios/body/pronunciation_en_finger.mp3'
          },
          {
            number: 5,
            spanish: 'Pulgar',
            english: 'Thumb',
            description: 'El dedo más fuerte de la mano.',
            audio: '/audios/body/pronunciation_en_thumb.mp3'
          }
        ]
      }
    },
    // PÁGINA 7: Piernas y Pies
    {
      id: 7,
      type: 'vocabulary',
      title: 'Piernas y Pies (Legs and Feet)',
      content: {
        text: 'Son nuestro motor de movimiento. Cada parte es clave para caminar, correr y saltar.',
        items: [
          {
            spanish: 'Muslo',
            english: 'Thigh',
            description: 'La parte superior de la leg.',
            audio: '/audios/body/pronunciation_en_thigh.mp3'
          },
          {
            spanish: 'Rodilla',
            english: 'Knee',
            description: 'Nos permite doblar la leg.',
            audio: '/audios/body/pronunciation_en_knee.mp3'
          },
          {
            spanish: 'Tobillo',
            english: 'Ankle',
            description: 'Conecta la leg con el foot.',
            audio: '/audios/body/pronunciation_en_ankle.mp3'
          },
          {
            spanish: 'Pie',
            english: 'Foot',
            description: 'La base que nos sostiene.',
            audio: '/audios/body/pronunciation_en_foot.mp3'
          },
          {
            spanish: 'Dedos del Pie',
            english: 'Toes',
            description: 'Los dedos de nuestros feet.',
            audio: '/audios/body/pronunciation_en_toes.mp3'
          }
        ],
        note: '¡Recuerda que foot es singular y feet es plural!'
      }
    },
    // PÁGINA 8: Capítulo 3 + Órganos Vitales
    {
      id: 8,
      type: 'chapter-vocabulary',
      title: 'Capítulo 3: Órganos Vitales (Vital Organs)',
      subtitle: 'Lo Que No Vemos Pero es Fundamental',
      content: {
        text: 'Dentro de nuestro tronco y cabeza hay órganos que trabajan sin parar. ¡Son como el motor de un coche!',
        items: [
          {
            spanish: 'Cerebro',
            english: 'Brain',
            description: 'Piensa y recuerda. ¡El jefe de todo!',
            audio: '/audios/body/pronunciation_en_brain.mp3'
          },
          {
            spanish: 'Corazón',
            english: 'Heart',
            description: 'Bombea la sangre a todo el cuerpo.',
            audio: '/audios/body/pronunciation_en_heart.mp3'
          },
          {
            spanish: 'Pulmones',
            english: 'Lungs',
            description: 'Nos ayudan a respirar aire limpio.',
            audio: '/audios/body/pronunciation_en_lungs.mp3'
          }
        ],
        quote: 'Cuida bien tu cuerpo; es el único lugar que tienes para vivir. ¡Es tu templo!'
      }
    },
    // PÁGINA 9: Resumen
    {
      id: 9,
      type: 'summary',
      title: 'Resumen: ¡Todo Junto!',
      image: '/images/body/pagina9.png',
      content: {
        text: 'Practiquemos algunas palabras importantes que aprendimos hoy.',
        summaryItems: [
          { spanish: 'Cabeza', english: 'Head', pronunciation: '/jéd/' },
          { spanish: 'Ojo', english: 'Eye', pronunciation: '/ái/', audio: '/audios/body/pronunciation_en_eyes.mp3' },
          { spanish: 'Brazo', english: 'Arm', pronunciation: '/árm/' },
          { spanish: 'Mano', english: 'Hand', pronunciation: '/jánd/', audio: '/audios/body/pronunciation_en_hand.mp3' },
          { spanish: 'Pierna', english: 'Leg', pronunciation: '/lég/' },
          { spanish: 'Pie', english: 'Foot', pronunciation: '/fút/', audio: '/audios/body/pronunciation_en_foot.mp3' },
          { spanish: 'Dedo', english: 'Finger', pronunciation: '/fínguer/', audio: '/audios/body/pronunciation_en_finger.mp3' }
        ]
      }
    },
    // PÁGINA 10: Final
    {
      id: 10,
      type: 'final',
      title: '¡Felicidades, Exploradores Bilingües!',
      subtitle: '¡Sigue practicando!',
      image: '/images/body/pagina10.png',
      content: {
        text: '¡Han completado la misión! Ahora conocen las partes principales del cuerpo en español y en inglés. Recuerden que aprender un nuevo idioma es como ejercitar un músculo: cuanto más lo usas, más fuerte se vuelve.'
      }
    }
  ]
};