import type { Lesson } from "../types";

export const adjectivesLesson: Lesson = {
  id: 2,
  title: "Descriptive Adjectives",
  subtitle: "Describing the World Around Us!",
  emoji: "🌈",
  color: "from-purple-400 to-pink-600",
  bgColor: "bg-purple-50",
  pptFile: "/ppts/adjetivos calificativos.pptx",
  slides: [
    // PÁGINA 1: Intro
    {
      id: 1,
      type: 'intro',
      title: 'Descriptive Adjectives: Describing the World Around Us!',
      image: '/images/adjectives/pagina1.png',
      content: {
        text: '¡Hola, niños! ¡Hoy vamos a emprender una emocionante aventura para aprender sobre los adjetivos calificativos en inglés! Los adjetivos calificativos son palabras que nos dicen cómo son las personas, los animales o las cosas. Nos ayudan a describir si algo es grande o pequeño, bonito o feo, rápido o lento. Gracias a ellos, nuestras frases y cuentos se vuelven más divertidos y fáciles de imaginar, porque pintan con palabras las características de todo lo que nos rodea. En inglés se llaman descriptive adjectives y cumplen la misma función: dar detalles que hacen que lo que decimos sea más claro y colorido.'
      }
    },
    // PÁGINA 2: What is an Adjective
    {
      id: 2,
      type: 'vocabulary',
      title: 'What Exactly is an Adjective?',
      image: '/images/adjectives/pagina2.png',
      imagePosition: 'right',
      content: {
        text: 'Un adjetivo es una palabra que nos dice más sobre un sustantivo (una persona, lugar o cosa). Responde preguntas como "¿Qué tipo?" o "¿Cuántos?" ¡Imagina que ves un perro grande o una niña feliz. Las palabras "grande" y "feliz" son adjetivos!',
        items: [
          {
            english: 'The dog is big.',
            spanish: 'El perro es grande.',
            description: ''
          },
          {
            english: 'The girl is happy.',
            spanish: 'La niña está feliz.',
            description: ''
          },
          {
            english: 'The car is fast.',
            spanish: 'El auto es rápido.',
            description: ''
          }
        ],
        note: '¿Ves cómo los adjetivos pintan una imagen más clara en nuestras mentes?'
      }
    },
    // PÁGINA 3: First Adjectives (BIG, SMALL, HAPPY, SAD)
    {
      id: 3,
      type: 'adjectives-grid',
      title: "Let's Learn Our First Adjectives!",
      subtitle: '¿Estás listo para aprender algunos adjetivos súper útiles? ¡Vamos!',
      content: {
        items: [
          {
            english: 'BIG',
            spanish: 'Grande',
            description: 'The elephant is big.',
            image: '/images/adjectives/pagina3.1big.png',
            audio: '/audios/adjectives/pronunciation_en_big.mp3'
          },
          {
            english: 'SMALL',
            spanish: 'Pequeño',
            description: 'The mouse is small.',
            image: '/images/adjectives/pagina3.2small.jpg',
            audio: '/audios/adjectives/pronunciation_en_small.mp3'
          },
          {
            english: 'HAPPY',
            spanish: 'Feliz',
            description: 'The boy is happy.',
            image: '/images/adjectives/pagina3.3haappy.jpg',
            audio: '/audios/adjectives/pronunciation_en_happy.mp3'
          },
          {
            english: 'SAD',
            spanish: 'Triste',
            description: 'The girl is sad.',
            image: '/images/adjectives/pagina3.4sad.jpg',
            audio: '/audios/adjectives/pronunciation_en_sad.mp3'
          }
        ]
      }
    },
    // PÁGINA 4: More Adjectives (FAST, SLOW, TALL, SHORT)
    {
      id: 4,
      type: 'adjectives-grid',
      title: 'More Adjectives to Know!',
      subtitle: '¡Vamos a ampliar nuestro vocabulario de adjetivos con palabras más divertidas!',
      content: {
        items: [
          {
            english: 'FAST',
            spanish: 'Rápido',
            description: 'The lightning is fast.',
            icon: '⚡',
            audio: '/audios/adjectives/pronunciation_en_fast.mp3'
          },
          {
            english: 'SLOW',
            spanish: 'Lento',
            description: 'The turtle is slow.',
            icon: '🐢',
            audio: '/audios/adjectives/pronunciation_en_slow.mp3'
          },
          {
            english: 'TALL',
            spanish: 'Alto',
            description: 'The giraffe is tall.',
            icon: '🦒',
            audio: '/audios/adjectives/pronunciation_en_tall.mp3'
          },
          {
            english: 'SHORT',
            spanish: 'Bajo / Corto',
            description: 'The boy is short.',
            icon: '👦',
            audio: '/audios/adjectives/pronunciation_en_short.mp3'
          }
        ]
      }
    },
    // PÁGINA 5: STRONG, WEAK
    {
      id: 5,
      type: 'adjectives-grid',
      title: 'Describing Strengths and Cleanliness!',
      subtitle: 'Los adjetivos nos ayudan a hablar sobre cuán fuertes o limpios son las cosas.',
      content: {
        items: [
          {
            english: 'STRONG',
            spanish: 'Fuerte',
            description: 'The superhero is strong.',
            image: '/images/adjectives/pagina5.1strong.png',
            audio: '/audios/adjectives/pronunciation_en_strong.mp3'
          },
          {
            english: 'WEAK',
            spanish: 'Débil',
            description: 'The plant is weak.',
            image: '/images/adjectives/pagina5.2weak.png',
            audio: '/audios/adjectives/pronunciation_en_weak.mp3'
          }
        ]
      }
    },
    // PÁGINA 6: CLEAN, DIRTY
    {
      id: 6,
      type: 'adjectives-grid',
      title: 'Clean vs Dirty',
      content: {
        items: [
          {
            english: 'CLEAN',
            spanish: 'Limpio',
            description: 'The room is clean.',
            image: '/images/adjectives/pagina6.1clean.png',
            audio: '/audios/adjectives/pronunciation_en_clean.mp3'
          },
          {
            english: 'DIRTY',
            spanish: 'Sucio',
            description: 'The shoes are dirty.',
            image: '/images/adjectives/pagina6.2.dirty.png',
            audio: '/audios/adjectives/pronunciation_en_dirty.mp3'
          }
        ]
      }
    },
    // PÁGINA 7: FUNNY, ANGRY, BRAVE, SHY
    {
      id: 7,
      type: 'adjectives-grid',
      title: 'Expressing Feelings and Personality!',
      subtitle: 'Los adjetivos también son excelentes para describir sentimientos y cómo actúan las personas.',
      content: {
        items: [
          {
            english: 'FUNNY',
            spanish: 'Gracioso',
            description: 'The clown is funny.',
            icon: '🤡',
            audio: '/audios/adjectives/pronunciation_en_funny.mp3'
          },
          {
            english: 'ANGRY',
            spanish: 'Enojado',
            description: 'The cat is angry.',
            icon: '😠',
            audio: '/audios/adjectives/pronunciation_en_angry.mp3'
          },
          {
            english: 'BRAVE',
            spanish: 'Valiente',
            description: 'The boy is brave.',
            icon: '🦸',
            audio: '/audios/adjectives/pronunciation_en_brave.mp3'
          },
          {
            english: 'SHY',
            spanish: 'Tímido',
            description: 'The girl is shy.',
            icon: '😊',
            audio: '/audios/adjectives/pronunciation_en_shy.mp3'
          }
        ]
      }
    },
    // PÁGINA 8: LOUD, QUIET
    {
      id: 8,
      type: 'adjectives-grid',
      title: 'Describing Sounds and Temperatures!',
      subtitle: 'Usamos adjetivos para hablar sobre sonidos fuertes o suaves, y cómo se sienten las cosas calientes o frías.',
      content: {
        items: [
          {
            english: 'LOUD',
            spanish: 'Ruidoso',
            description: 'The dog is loud.',
            image: '/images/adjectives/pagina8.1loud.png',
            audio: '/audios/adjectives/pronunciation_en_loud.mp3'
          },
          {
            english: 'QUIET',
            spanish: 'Tranquilo / Silencioso',
            description: 'The baby is quiet.',
            image: '/images/adjectives/pagina8.2quiet.png',
            audio: '/audios/adjectives/pronunciation_en_quiet.mp3'
          }
        ]
      }
    },
    // PÁGINA 9: HOT, COLD
    {
      id: 9,
      type: 'adjectives-grid',
      title: 'Hot vs Cold',
      content: {
        items: [
          {
            english: 'HOT',
            spanish: 'Caliente',
            description: 'The soup is hot.',
            image: '/images/adjectives/pagina9.1.hot.png',
            audio: '/audios/adjectives/pronunciation_en_hot.mp3'
          },
          {
            english: 'COLD',
            spanish: 'Frío',
            description: 'The ice is cold.',
            image: '/images/adjectives/pagina9.2.cold.png',
            audio: '/audios/adjectives/pronunciation_en_cold.mp3'
          }
        ]
      }
    },
    // PÁGINA 10: Mini Dialogues
    {
      id: 10,
      type: 'dialogues',
      title: "Let's Practice with Mini Dialogues!",
      subtitle: 'Ahora que conoces muchos adjetivos, ¡veamos cómo suenan en las conversaciones!',
      content: {
        dialogues: [
          {
            speakers: ['Tom', 'Ana'],
            lines: ['The dog is big!', 'Yes! And the cat is small!'],
            image: '/images/adjectives/pagina10.1big.png'
          },
          {
            speakers: ['Liam', 'Mia'],
            lines: ['I am happy today!', 'I am sad… I lost my toy.'],
            image: '/images/adjectives/pagina10.2happy.png'
          },
          {
            speakers: ['Sara', 'Ben'],
            lines: ['This turtle is slow.', 'But the rabbit is fast!'],
            image: '/images/adjectives/pagina10.3slow.png'
          }
        ]
      }
    },
    // PÁGINA 11: Activities
    {
      id: 11,
      type: 'activities',
      title: 'Fun Activities: Show What You Know!',
      subtitle: '¡Es hora de poner a prueba tus conocimientos! Hagamos algunas actividades interesantes.',
      content: {
        activities: [
          {
            title: 'Complete the Sentence!',
            instruction: 'Choose the right adjective to finish these sentences.',
            questions: [
              'The cat is _______ (big/small).',
              'The soup is _______ (hot/cold).',
              'The giraffe is _______ (tall/short).',
              'The clown is _______ (funny/sad).',
              'The baby is _______ (quiet/loud).'
            ]
          },
          {
            title: 'Choose the Correct Adjective!',
            instruction: 'Pick the adjective that best describes the situation!',
            questions: [
              'The turtle is (fast / slow).',
              'The boy is (strong / weak).',
              'The room is (clean / dirty).',
              'The girl is (shy / brave).',
              'The ice is (hot / cold).'
            ]
          }
        ]
      }
    },
    // PÁGINA 12: Final
    {
      id: 12,
      type: 'final',
      title: 'Fantastic Job, Adjective Superstars!',
      image: '/images/adjectives/pagina12.png',
      content: {
        text: '¡Hoy has aprendido muchísimos adjetivos increíbles! ¡Ahora puedes describir personas, animales y objetos como todo un experto! ¡Sigue practicando tus nuevas palabras a diario y pronto hablarás inglés como un profesional! Recuerda, ¡aprender es divertido!'
      }
    }
  ]
};