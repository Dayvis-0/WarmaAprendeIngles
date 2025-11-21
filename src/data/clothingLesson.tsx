import type { Lesson } from "../types";

export const clothingLesson: Lesson = {
  id: 3,
  title: "Ropa y palabras",
  subtitle: "Aprende inglés jugando",
  emoji: "👕",
  color: "from-pink-400 to-rose-600",
  bgColor: "bg-pink-50",
  pptFile: "/ppts/Ropa-y-palabras-Aprende-ingles-jugando.pptx",
  slides: [
    // PÁGINA 1: Intro
    {
      id: 1,
      type: 'intro',
      title: 'Ropa y palabras: Aprende inglés jugando',
      image: '/images/clothing/pagina1.png',
      content: {
        text: 'Una guía visual y divertida para que estudiantes de primaria (y sus profesores/padres) aprendan vocabulario de la ropa en inglés. Actividades, imágenes y juegos para practicar desde hoy.'
      }
    },
    // PÁGINA 2: Objetivos
    {
      id: 2,
      type: 'objectives',
      title: 'Objetivos de la lección',
      image: '/images/clothing/pagina2.png',
      content: {
        objectives: [
          {
            title: 'Ver y reconocer',
            description: 'Identificar prendas básicas en imágenes y pronunciar su nombre en inglés.',
            icon: '👀'
          },
          {
            title: 'Escuchar y repetir',
            description: 'Practicar la pronunciación con frases cortas y rimas.',
            icon: '👂'
          },
          {
            title: 'Usar y jugar',
            description: 'Actividades prácticas: emparejar, vestir muñecos y juegos de memoria.',
            icon: '🎮'
          }
        ]
      }
    },
    // PÁGINA 3: Vocabulario básico
    {
      id: 3,
      type: 'clothing-vocabulary',
      title: 'Vocabulario básico — Ropa',
      content: {
        items: [
          {
            english: 'T-shirt',
            spanish: 'Camiseta',
            description: '"I wear a blue t-shirt."',
            image: '/images/clothing/pagina3.1tshirt.png',
            audio: '/audios/clothing/pronunciation_en_t-shirt.mp3'
          },
          {
            english: 'Jeans',
            spanish: 'Jeans/pantalones',
            description: '"She has new jeans."',
            image: '/images/clothing/pagina3.2.jeans.png',
            audio: '/audios/clothing/pronunciation_en_jeans.mp3'
          },
          {
            english: 'Dress',
            spanish: 'Vestido',
            description: '"The dress is pretty."',
            image: '/images/clothing/pagina3.3dress.png',
            audio: '/audios/clothing/pronunciation_en_dress.mp3'
          }
        ]
      }
    },
    // PÁGINA 4: Accesorios y calzado
    {
      id: 4,
      type: 'clothing-vocabulary',
      title: 'Más palabras: accesorios y calzado',
      content: {
        items: [
          {
            english: 'Sneakers',
            spanish: 'Zapatillas',
            description: '"My sneakers are comfortable."',
            image: '/images/clothing/pagina4.1sneakers.png',
            audio: '/audios/clothing/pronunciation_en_sneakers.mp3'
          },
          {
            english: 'Backpack',
            spanish: 'Mochila',
            description: '"My backpack is heavy."',
            image: '/images/clothing/pagina4.2backpack.png',
            audio: '/audios/clothing/pronunciation_en_backpack.mp3'
          }
        ]
      }
    },
    // PÁGINA 5: Frases cortas
    {
      id: 5,
      type: 'phrases',
      title: 'Frases cortas para la clase',
      image: '/images/clothing/pagina5.png',
      content: {
        phrases: [
          {
            english: 'What are you wearing?',
            spanish: '¿Qué llevas puesto?',
            audio: '/audios/clothing/whatareyouwearing.mp3'
          },
          {
            english: 'I am wearing a red dress.',
            spanish: 'Llevo un vestido rojo.',
            audio: '/audios/clothing/iamwearingareddress.mp3'
          },
          {
            english: 'Put on your shoes.',
            spanish: 'Ponte los zapatos.',
            audio: '/audios/clothing/put_on_tour_shoes.mp3'
          },
          {
            english: 'Take off your hat.',
            spanish: 'Quítate la gorra.',
            audio: '/audios/clothing/takeoffyourhat.mp3'
          }
        ]
      }
    },
    // PÁGINA 6: Actividad 1
    {
      id: 6,
      type: 'game-activity',
      title: 'Actividad 1: Juego de memoria (matching)',
      image: '/images/clothing/pagina6.png',
      content: {
        text: 'Objetivo: Emparejar imagen con palabra en inglés. Materiales: tarjetas con fotos de ropa y tarjetas con palabras.',
        steps: [
          {
            title: 'Mezclar',
            description: 'Coloca todas las tarjetas boca abajo.',
            icon: '🔀'
          },
          {
            title: 'Voltear',
            description: 'Un niño voltea dos tarjetas y dice la palabra en inglés.',
            icon: '🔄'
          },
          {
            title: 'Ganar puntos',
            description: 'Si son pareja, se quedan con ellas y repiten la palabra.',
            icon: '⭐'
          }
        ]
      }
    },
    // PÁGINA 7: Actividad 2
    {
      id: 7,
      type: 'hands-on-activity',
      title: 'Actividad 2: Vestir al muñeco (hands-on)',
      content: {
        text: 'Usa recortes impresos o ropa de juguete. Pide: "Dress the doll with a hat" y que los niños obedezcan en inglés.',
        images: [
          '/images/clothing/pagina7.1.png',
          '/images/clothing/pagina7.2.png',
          '/images/clothing/pagina7.3.png'
        ]
      }
    },
    // PÁGINA 8: Test
    {
      id: 8,
      type: 'fill-blank-test',
      title: 'Pequeño test: ¿Qué palabra falta?',
      content: {
        questions: [
          {
            sentence: 'I wear a warm __________ when it\'s cold.',
            answer: 'coat'
          },
          {
            sentence: 'Put on your __________ before you run.',
            answer: 'shoes'
          },
          {
            sentence: 'She has a colorful __________ for school.',
            answer: 'backpack'
          }
        ]
      }
    },
    // PÁGINA 9: Consejos
    {
      id: 9,
      type: 'tips',
      title: 'Consejos para profesores y padres',
      image: '/images/clothing/pagina 9.png',
      content: {
        tips: [
          {
            title: 'Repetir en contexto',
            description: 'Usa las palabras durante el día: hora de vestirse, salida a la calle, hora de jugar.',
            icon: '🔁'
          },
          {
            title: 'Jugar y cantar',
            description: 'Crea canciones y rimas cortas para recordar palabras y frases.',
            icon: '🎵'
          },
          {
            title: 'Refuerzo visual',
            description: 'Pega etiquetas en la ropa y en el clóset con la palabra en inglés.',
            icon: '👁️'
          }
        ]
      }
    },
    // PÁGINA 10: Resumen
    {
      id: 10,
      type: 'final',
      title: 'Resumen y próximos pasos',
      content: {
        text: 'Repasa las palabras, juega las dos actividades y crea una pequeña presentación en clase: cada niño muestra una prenda y dice su nombre en inglés. ¡Celebra el esfuerzo con stickers!',
        finalTips: [
          {
            title: 'Práctica diaria',
            description: '5 minutos al día marcan la diferencia.',
            icon: '📅'
          },
          {
            title: 'Creatividad',
            description: 'Inventen historias con las prendas.',
            icon: '✨'
          },
          {
            title: 'Compartir',
            description: 'Invita a familias a practicar en casa.',
            icon: '👨‍👩‍👧'
          }
        ]
      }
    }
  ]
};