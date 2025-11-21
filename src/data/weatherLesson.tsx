import type { Lesson } from '../types';

export const weatherLesson: Lesson = {
  id: 4,
  title: "El Tiempo",
  subtitle: "Weather & Climate",
  emoji: "🌤️",
  color: "from-cyan-400 to-cyan-600",
  bgColor: "bg-cyan-50",
  slides: [
    {
      id: 1,
      type: 'intro',
      title: 'El tiempo (Weather) — vocabulario y conceptos',
      content: {
        text: 'Hoy aprenderemos palabras y ideas clave sobre el tiempo en inglés. Verás imágenes, ejemplos y actividades fáciles para practicar.',
      }
    },
    {
      id: 2,
      type: 'vocabulary',
      title: 'Palabras Básicas',
      content: {
        text: 'Basic Words',
        items: [
          {
            english: 'Sun',
            spanish: 'Sol',
            example: 'La estrella que da luz y calor.'
          },
          {
            english: 'Cloud',
            spanish: 'Nube',
            pronunciation: '/klaud/',
            example: 'Formaciones de agua en el cielo.'
          },
          {
            english: 'Rain',
            spanish: 'Lluvia',
            pronunciation: '/reɪn/',
            example: 'Las gotas que caen del cielo.'
          }
        ]
      }
    },
    {
      id: 3,
      type: 'vocabulary',
      title: 'Más Palabras Útiles',
      content: {
        text: 'More Useful Words',
        items: [
          {
            english: 'Partly Cloudy',
            spanish: 'Parcialmente nublado',
            example: 'Sol y nubes juntos.'
          },
          {
            english: 'Thunderstorm',
            spanish: 'Tormenta',
            example: 'Lluvia fuerte con truenos y relámpagos.'
          },
          {
            english: 'Fog',
            spanish: 'Niebla',
            example: 'Nubes cerca del suelo que cubren la vista.'
          },
          {
            english: 'Windy',
            spanish: 'Ventoso',
            pronunciation: '/ˈwɪndi/',
            example: 'Cuando hay mucho viento.'
          }
        ]
      }
    },
    {
      id: 4,
      type: 'examples',
      title: 'Frases Útiles en Inglés',
      content: {
        text: 'Useful Phrases',
        examples: [
          '"What\'s the weather like today?" — ¿Cómo está el tiempo hoy?',
          '"It\'s sunny." — Está soleado.',
          '"It\'s raining." — Está lloviendo.',
          '"It\'s very windy." — Hace mucho viento.',
          '"Look! There\'s a rainbow." — ¡Mira! Hay un arcoíris.'
        ]
      }
    },
    {
      id: 5,
      type: 'vocabulary',
      title: 'El Clima y la Ropa',
      content: {
        text: 'Weather and Clothing',
        items: [
          {
            english: 'Sunny',
            spanish: 'Soleado',
            example: 'Wear sunglasses and a T-shirt. (gafas de sol, camiseta)'
          },
          {
            english: 'Rainy',
            spanish: 'Lluvioso',
            example: 'Wear a raincoat and use an umbrella. (impermeable, paraguas)'
          }
        ]
      }
    },
    {
      id: 6,
      type: 'activity',
      title: 'Mini-actividad: ¿Qué tiempo hace?',
      content: {
        text: 'Observa por la ventana 1 minuto. Luego contesta en inglés:',
        examples: [
          'What do you see? (I see...)',
          'Is it hot or cold? (It\'s hot / It\'s cold)',
          'What should you wear? (I should wear...)'
        ]
      }
    },
    {
      id: 7,
      type: 'vocabulary',
      title: 'Vocabulario Extra',
      content: {
        text: 'Palabras que verás',
        items: [
          {
            english: 'Temperature',
            spanish: 'Temperatura',
            example: 'Cuánto calor o frío hace.'
          },
          {
            english: 'Forecast',
            spanish: 'Previsión',
            example: 'Lo que el meteorólogo dice que pasará.'
          },
          {
            english: 'Rainbow',
            spanish: 'Arcoíris',
            example: 'Colores que aparecen tras la lluvia y el sol.'
          }
        ]
      }
    },
    {
      id: 8,
      type: 'activity',
      title: 'Actividades para Practicar',
      content: {
        text: 'Activities',
        examples: [
          'Charades del tiempo - Un niño hace el clima y los demás adivinan en inglés.',
          'Dibuja el tiempo - Dibuja el clima de hoy y escribe la palabra en inglés.',
          'Juego de emparejar - Empareja imagen + palabra (sun, rain, snow, wind).'
        ]
      }
    },
    {
      id: 9,
      type: 'vocabulary',
      title: '¿Por qué cambia el tiempo?',
      content: {
        text: 'El tiempo cambia por el sol, la temperatura y el movimiento del aire. El sol calienta la tierra y el aire se mueve formando viento, nubes y lluvia.',
      }
    },
    {
      id: 10,
      type: 'summary',
      title: 'Resumen y Siguiente Paso',
      content: {
        text: 'Hoy aprendimos palabras y frases sobre el tiempo en inglés, vimos ropa apropiada y jugamos con actividades.',
        instruction: 'Practica con un amigo: pregunta "What\'s the weather like?" y responde en inglés.'
      }
    }
  ]
};