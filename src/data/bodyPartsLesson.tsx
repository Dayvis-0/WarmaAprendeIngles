import type { Lesson } from "../types";

export const bodyPartsLesson: Lesson = {
  id: 1,
  title: "Aventura en el Cuerpo Humano",
  subtitle: "Body Parts Adventure",
  emoji: "🧒",
  color: "from-blue-400 to-blue-600",
  bgColor: "bg-blue-50",
  slides: [
    // SLIDE 1: Intro
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
    // SLIDE 2: Capítulo 1
    {
      id: 2,
      type: 'chapter',
      title: 'Capítulo 1: La Base de Nuestra Aventura',
      subtitle: 'Partes Principales del Cuerpo',
      content: {}
    },
    // SLIDE 3: Partes Principales
    {
      id: 3,
      type: 'vocabulary',
      title: 'Partes Principales del Cuerpo',
      image: '/images/body/pagina3.png',
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
    // SLIDE 4: Sensores de la Cabeza
    {
      id: 4,
      type: 'vocabulary',
      title: 'Los Sensores de la Cabeza (The Head)',
      image: '/images/body/pagina5.1.png',
      content: {
        text: 'La cabeza tiene partes que nos ayudan a explorar el mundo. ¡Veamos qué hay!',
        items: [
          {
            spanish: 'Ojos',
            english: 'Eyes',
            description: 'Para ver todas las cosas geniales a nuestro alrededor.'
          },
          {
            spanish: 'Nariz',
            english: 'Nose',
            description: 'Para oler flores, comida, y más.'
          },
          {
            spanish: 'Boca',
            english: 'Mouth',
            description: 'Para comer y hablar.'
          },
          {
            spanish: 'Orejas',
            english: 'Ears',
            description: 'Para escuchar música y cuentos.'
          }
        ]
      }
    },
    // SLIDE 5: De la Cabeza a los Dedos
    {
      id: 5,
      type: 'vocabulary',
      title: 'De la Cabeza a los Dedos',
      image: '/images/body/pagina5.2.png',
      content: {
        text: 'Aprendamos sobre las partes pequeñas pero poderosas de nuestro cuerpo.',
        items: [
          {
            spanish: 'Pelo',
            english: 'Hair',
            description: 'Nos cubre la cabeza y nos protege.'
          },
          {
            spanish: 'Cuello',
            english: 'Neck',
            description: 'Sostiene la cabeza y la ayuda a moverse.'
          },
          {
            spanish: 'Hombros',
            english: 'Shoulders',
            description: 'Conectan el cuello con los brazos.'
          },
          {
            spanish: 'Barriga',
            english: 'Stomach/Belly',
            description: 'Donde la comida se procesa.'
          },
          {
            spanish: 'Manos',
            english: 'Hands',
            description: 'Para agarrar cosas y escribir.'
          }
        ]
      }
    },
    // SLIDE 6: Juego de Vocabulario
    {
      id: 6,
      type: 'activity',
      title: 'Juego de Vocabulario Rápido',
      subtitle: '¡A Mover el Esqueleto! (Let\'s Move the Skeleton!)',
      content: {
        instruction: 'Repite en inglés y haz el movimiento:',
        activityItems: [
          {
            spanish: 'Brazo',
            english: 'Arm',
            instruction: 'Dobla tu arm en el codo (elbow).'
          },
          {
            spanish: 'Mano y Dedos',
            english: 'Hand & Fingers',
            instruction: 'Mueve tus fingers de la hand rápidamente.'
          },
          {
            spanish: 'Pierna y Rodilla',
            english: 'Leg & Knee',
            instruction: 'Levanta tu leg doblando la knee.'
          }
        ]
      }
    },
    // SLIDE 7: Capítulo 2
    {
      id: 7,
      type: 'chapter',
      title: 'Capítulo 2: Las Extremidades Poderosas',
      subtitle: 'Brazos y Manos (Arms and Hands)',
      content: {
        text: 'Nuestras extremidades superiores nos dan la capacidad de crear y manipular.'
      }
    },
    // SLIDE 8: Brazos y Manos (numerado)
    {
      id: 8,
      type: 'vocabulary-numbered',
      title: 'Brazos y Manos (Arms and Hands)',
      image: '/images/body/pagina5.3.png',
      content: {
        text: 'Nuestras extremidades superiores nos dan la capacidad de crear y manipular.',
        items: [
          {
            number: 1,
            spanish: 'Codo',
            english: 'Elbow',
            description: 'La articulación que permite doblar el brazo.'
          },
          {
            number: 2,
            spanish: 'Muñeca',
            english: 'Wrist',
            description: 'Conecta la mano con el brazo.'
          },
          {
            number: 3,
            spanish: 'Mano',
            english: 'Hand',
            description: 'Usamos para agarrar. ¡Tiene cinco dedos!'
          },
          {
            number: 4,
            spanish: 'Dedo',
            english: 'Finger',
            description: 'Cada dedo tiene un nombre, pero en general son fingers.'
          },
          {
            number: 5,
            spanish: 'Pulgar',
            english: 'Thumb',
            description: 'El dedo más fuerte de la mano.'
          }
        ]
      }
    },
    // SLIDE 9: Piernas y Pies
    {
      id: 9,
      type: 'vocabulary',
      title: 'Piernas y Pies (Legs and Feet)',
      image: '/images/body/pagina5.4.png',
      content: {
        text: 'Son nuestro motor de movimiento. Cada parte es clave para caminar, correr y saltar.',
        items: [
          {
            spanish: 'Muslo',
            english: 'Thigh',
            description: 'La parte superior de la leg.'
          },
          {
            spanish: 'Rodilla',
            english: 'Knee',
            description: 'Nos permite doblar la leg.'
          },
          {
            spanish: 'Tobillo',
            english: 'Ankle',
            description: 'Conecta la leg con el foot.'
          },
          {
            spanish: 'Pie',
            english: 'Foot',
            description: 'La base que nos sostiene.'
          },
          {
            spanish: 'Dedos del Pie',
            english: 'Toes',
            description: 'Los dedos de nuestros feet.'
          }
        ],
        note: '¡Recuerda que foot es singular y feet es plural!'
      }
    },
    // SLIDE 10: Capítulo 3
    {
      id: 10,
      type: 'chapter',
      title: 'Capítulo 3: Órganos Vitales (Vital Organs)',
      subtitle: 'Lo Que No Vemos Pero es Fundamental',
      content: {
        text: 'Dentro de nuestro tronco y cabeza hay órganos que trabajan sin parar. ¡Son como el motor de un coche!'
      }
    },
    // SLIDE 11: Órganos Vitales
    {
      id: 11,
      type: 'vocabulary',
      title: 'Órganos Vitales (Vital Organs)',
      image: '/images/body/pagina9.png',
      content: {
        text: 'Dentro de nuestro tronco y cabeza hay órganos que trabajan sin parar. ¡Son como el motor de un coche!',
        items: [
          {
            spanish: 'Cerebro',
            english: 'Brain',
            description: 'Piensa y recuerda. ¡El jefe de todo!'
          },
          {
            spanish: 'Corazón',
            english: 'Heart',
            description: 'Bombea la sangre a todo el cuerpo.'
          },
          {
            spanish: 'Pulmones',
            english: 'Lungs',
            description: 'Nos ayudan a respirar aire limpio.'
          }
        ],
        quote: 'Cuida bien tu cuerpo; es el único lugar que tienes para vivir. ¡Es tu templo!'
      }
    },
    // SLIDE 12: Resumen
    {
      id: 12,
      type: 'summary',
      title: 'Resumen: ¡Todo Junto!',
      content: {
        text: 'Practiquemos algunas palabras importantes que aprendimos hoy.',
        summaryItems: [
          { spanish: 'Cabeza', english: 'Head', pronunciation: '/jéd/' },
          { spanish: 'Ojo', english: 'Eye', pronunciation: '/ái/' },
          { spanish: 'Brazo', english: 'Arm', pronunciation: '/árm/' },
          { spanish: 'Mano', english: 'Hand', pronunciation: '/jánd/' },
          { spanish: 'Pierna', english: 'Leg', pronunciation: '/lég/' },
          { spanish: 'Pie', english: 'Foot', pronunciation: '/fút/' },
          { spanish: 'Dedo', english: 'Finger', pronunciation: '/fínguer/' }
        ],
        instruction: 'Consejo para maestros: ¡Hagan el juego de "Simon Says" (Simón Dice) usando solo los nombres en inglés!'
      }
    },
    // SLIDE 13: Final
    {
      id: 13,
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