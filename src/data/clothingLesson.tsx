import type { Lesson } from '../types';

export const clothingLesson: Lesson = {
  id: 3,
  title: "Ropa y Palabras",
  subtitle: "Clothing & Words",
  emoji: "👕",
  color: "from-pink-400 to-pink-600",
  bgColor: "bg-pink-50",
  slides: [
    {
      id: 1,
      type: 'intro',
      title: 'Ropa y palabras: Aprende inglés jugando',
      content: {
        text: 'Una guía visual y divertida para que estudiantes de primaria (y sus profesores/padres) aprendan vocabulario de la ropa en inglés. Actividades, imágenes y juegos para practicar desde hoy.',
      }
    },
    {
      id: 2,
      type: 'vocabulary',
      title: 'Objetivos de la lección',
      content: {
        examples: [
          'Ver y reconocer - Identificar prendas básicas en imágenes y pronunciar su nombre en inglés.',
          'Escuchar y repetir - Practicar la pronunciación con frases cortas y rimas.',
          'Usar y jugar - Actividades prácticas: emparejar, vestir muñecos y juegos de memoria.'
        ]
      }
    },
    {
      id: 3,
      type: 'vocabulary',
      title: 'Vocabulario Básico - Ropa',
      content: {
        items: [
          {
            english: 'T-shirt',
            spanish: 'Camiseta',
            example: 'I wear a blue t-shirt.'
          },
          {
            english: 'Jeans',
            spanish: 'Jeans/Pantalones',
            pronunciation: '/dʒiːnz/',
            example: 'She has new jeans.'
          },
          {
            english: 'Dress',
            spanish: 'Vestido',
            example: 'The dress is pretty.'
          }
        ]
      }
    },
    {
      id: 4,
      type: 'vocabulary',
      title: 'Más palabras: accesorios y calzado',
      content: {
        items: [
          {
            english: 'Sneakers',
            spanish: 'Zapatillas',
            pronunciation: '/sniːkərz/',
            example: 'My sneakers are comfortable.'
          },
          {
            english: 'Backpack',
            spanish: 'Mochila',
            pronunciation: '/bækpæk/',
            example: 'My backpack is heavy.'
          },
          {
            english: 'Shoes',
            spanish: 'Zapatos',
            example: 'Put on your shoes before you run.'
          },
          {
            english: 'Coat',
            spanish: 'Abrigo',
            example: 'I wear a warm coat when it\'s cold.'
          }
        ]
      }
    },
    {
      id: 5,
      type: 'examples',
      title: 'Frases cortas para la clase',
      content: {
        examples: [
          '"What are you wearing?" — ¿Qué llevas puesto?',
          '"I am wearing a red dress." — Llevo un vestido rojo.',
          '"Put on your shoes." — Ponte los zapatos.',
          '"Take off your hat." — Quítate la gorra.'
        ]
      }
    },
    {
      id: 6,
      type: 'activity',
      title: 'Actividad 1: Juego de memoria',
      content: {
        text: 'Matching Game',
        instruction: 'Objetivo: Emparejar imagen con palabra en inglés. Materiales: tarjetas con fotos de ropa y tarjetas con palabras.',
        examples: [
          'Mezclar - Coloca todas las tarjetas boca abajo.',
          'Voltear - Un niño voltea dos tarjetas y dice la palabra en inglés.',
          'Ganar puntos - Si son pareja, se quedan con ellas y repiten la palabra.'
        ]
      }
    },
    {
      id: 7,
      type: 'activity',
      title: 'Actividad 2: Vestir al muñeco',
      content: {
        text: 'Hands-on Activity',
        instruction: 'Usa recortes impresos o ropa de juguete. Pide: "Dress the doll with a hat" y que los niños obedezcan en inglés.'
      }
    },
    {
      id: 8,
      type: 'summary',
      title: 'Resumen y próximos pasos',
      content: {
        text: 'Repasa las palabras, juega las dos actividades y crea una pequeña presentación en clase: cada niño muestra una prenda y dice su nombre en inglés. ¡Celebra el esfuerzo con stickers!',
        instruction: 'Práctica diaria: 5 minutos al día marcan la diferencia. Creatividad: Inventen historias con las prendas. Compartir: Invita a familias a practicar en casa.'
      }
    }
  ]
};