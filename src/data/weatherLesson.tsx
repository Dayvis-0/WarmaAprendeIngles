import type { Lesson } from "../types";

export const weatherLesson: Lesson = {
  id: 4,
  title: "El tiempo (Weather)",
  subtitle: "Vocabulario y conceptos",
  emoji: "🌤️",
  color: "from-sky-400 to-blue-600",
  bgColor: "bg-sky-50",
  pptFile: "/ppts/El-tiempo-Weather-vocabulario-y-conceptos.pptx",
  slides: [
    // PÁGINA 1: Intro
    {
      id: 1,
      type: 'intro',
      title: 'El tiempo (Weather) — vocabulario y conceptos',
      image: '/images/weather/pagina1.png',
      content: {
        text: 'Hoy aprenderemos palabras y ideas clave sobre el tiempo en inglés. Verás imágenes, ejemplos y actividades fáciles para practicar.'
      }
    },
    // PÁGINA 2: Palabras básicas
    {
      id: 2,
      type: 'clothing-vocabulary',
      title: 'Palabras básicas / Basic words',
      content: {
        items: [
          {
            english: 'Sun',
            spanish: 'Sol',
            description: 'La estrella que da luz y calor.',
            image: '/images/weather/pagina2.1sun.png',
            audio: '/audios/weather/pronunciation_en_sun.mp3'
          },
          {
            english: 'Cloud / Rain',
            spanish: 'Nube / lluvia',
            description: 'Las gotas que caen del cielo.',
            image: '/images/weather/pagina2.2cloud.png',
            audio: '/audios/weather/pronunciation_en_rain.mp3'
          }
        ]
      }
    },
    // PÁGINA 3: Más palabras útiles
    {
      id: 3,
      type: 'clothing-vocabulary',
      title: 'Más palabras útiles / More useful words',
      content: {
        items: [
          {
            english: 'Partly cloudy',
            spanish: 'Parcialmente nublado',
            description: 'Sol y nubes juntos.',
            image: '/images/weather/pagina3.1partycloud.png',
            audio: '/audios/weather/pronunciation_en_partly_cloudy.mp3'
          },
          {
            english: 'Thunderstorm',
            spanish: 'Tormenta',
            description: 'Lluvia fuerte con truenos y relámpagos.',
            image: '/images/weather/pagina3.2thunderstorm.png',
            audio: '/audios/weather/pronunciation_en_thunderstorm.mp3'
          },
          {
            english: 'Fog',
            spanish: 'Niebla',
            description: 'Nubes cerca del suelo que cubren la vista.',
            image: '/images/weather/pagina3.3fog.png',
            audio: '/audios/weather/pronunciation_en_fog.mp3'
          }
        ]
      }
    },
    // PÁGINA 4: Frases útiles
    {
      id: 4,
      type: 'phrases',
      title: 'Frases útiles en inglés / Useful phrases',
      image: '/images/weather/pagina4.png',
      content: {
        phrases: [
          {
            english: "What's the weather like today?",
            spanish: '¿Cómo está el tiempo hoy?',
            audio: '/audios/weather/what_the_weather_like.mp3'
          },
          {
            english: "It's sunny.",
            spanish: 'Está soleado.',
            audio: '/audios/weather/its_sunny.mp3'
          },
          {
            english: "It's raining.",
            spanish: 'Está lloviendo.',
            audio: '/audios/weather/its_raining.mp3'
          },
          {
            english: "It's very windy.",
            spanish: 'Hace mucho viento.',
            audio: "/audios/weather/it's_very_windy.mp3"
          },
          {
            english: "Look! There's a rainbow.",
            spanish: '¡Mira! Hay un arcoíris.',
            audio: "/audios/weather/look_there's_a_rainbrow.mp3"
          }
        ]
      }
    },
    // PÁGINA 5: Clima y ropa
    {
      id: 5,
      type: 'clothing-vocabulary',
      title: 'El clima y la ropa / Weather and clothing',
      content: {
        items: [
          {
            english: 'Sunny',
            spanish: 'Soleado',
            description: 'Wear sunglasses and a T-shirt. (gafas de sol, camiseta)',
            image: '/images/weather/pagina5.1sunny.png',
            audio: '/audios/weather/pronunciation_en_sunny.mp3'
          },
          {
            english: 'Rainy',
            spanish: 'Lluvioso',
            description: 'Wear a raincoat and use an umbrella. (impermeable, paraguas)',
            image: '/images/weather/pagina5.2Rainy.png',
            audio: '/audios/weather/pronunciation_en_rainy.mp3'
          }
        ]
      }
    },
    // PÁGINA 6: Actividades para practicar
    {
      id: 6,
      type: 'hands-on-activity',
      title: 'Actividades para practicar / Activities',
      content: {
        text: 'Charades del tiempo: Un niño hace el clima y los demás adivinan en inglés. | Dibuja el tiempo: Dibuja el clima de hoy y escribe la palabra en inglés. | Juego de emparejar: Empareja imagen + palabra (sun, rain, snow, wind).',
        images: [
          '/images/weather/pagina6.1charades.png',
          '/images/weather/pagina6.2.dibuja.png',
          '/images/weather/pagina6.3.juego.png'
        ]
      }
    },
    // PÁGINA 7: Mini-actividad
    {
      id: 7,
      type: 'activities',
      title: 'Mini-actividad: ¿Qué tiempo hace?',
      subtitle: 'Observa por la ventana 1 minuto. Luego contesta en inglés:',
      content: {
        activities: [
          {
            title: 'Observation Activity',
            instruction: 'Look outside and answer these questions in English:',
            questions: [
              'What do you see? (I see...)',
              'Is it hot or cold? (It\'s hot / It\'s cold)',
              'What should you wear? (I should wear...)'
            ]
          }
        ]
      }
    },
    // PÁGINA 8: Explicación científica
    {
      id: 8,
      type: 'tips',
      title: 'Pequeña explicación: ¿Por qué cambia el tiempo?',
      content: {
        text: 'El tiempo cambia por el sol, la temperatura y el movimiento del aire. El sol calienta la tierra y el aire se mueve formando viento, nubes y lluvia.',
        tips: [
          {
            title: 'Sun heats',
            description: 'El sol calienta la tierra',
            icon: '☀️'
          },
          {
            title: 'Warm air rises',
            description: 'El aire caliente sube',
            icon: '🌡️'
          },
          {
            title: 'Clouds form',
            description: 'Se forman las nubes',
            icon: '☁️'
          },
          {
            title: 'Rain or wind',
            description: 'Lluvia o viento aparecen',
            icon: '🌧️'
          }
        ]
      }
    },
    // PÁGINA 9: Vocabulario extra
    {
      id: 9,
      type: 'vocabulary',
      title: 'Vocabulario extra: palabras que verás',
      image: '/images/weather/paagina9.png',
      imagePosition: 'right',
      content: {
        items: [
          {
            english: 'Temperature',
            spanish: 'Temperatura',
            description: 'Cuánto calor o frío hace.',
            audio: '/audios/weather/pronunciation_en_temperature.mp3'
          },
          {
            english: 'Forecast',
            spanish: 'Previsión',
            description: 'Lo que el meteorólogo dice que pasará.',
            audio: '/audios/weather/pronunciation_en_forecast.mp3'
          },
          {
            english: 'Rainbow',
            spanish: 'Arcoíris',
            description: 'Colores que aparecen tras la lluvia y el sol.',
            audio: '/audios/weather/pronunciation_en_rainbow.mp3'
          }
        ]
      }
    },
    // PÁGINA 10: Resumen
    {
      id: 10,
      type: 'hands-on-activity',
      title: 'Resumen y siguiente paso / Summary & next step',
      content: {
        text: 'Hoy aprendimos palabras y frases sobre el tiempo en inglés, vimos ropa apropiada y jugamos con actividades. Practica con un amigo: pregunta "What\'s the weather like?" y responde en inglés.',
        images: [
          '/images/weather/pagina10.1.png',
          '/images/weather/ppagina10.2.png',
          '/images/weather/ppagina10.3.png'
        ]
      }
    }
  ]
};