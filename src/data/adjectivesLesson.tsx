import type { Lesson } from '../types';

export const adjectivesLesson: Lesson = {
  id: 2,
  title: "Awesome Adjectives",
  subtitle: "Adjetivos Calificativos",
  emoji: "✨",
  color: "from-purple-400 to-purple-600",
  bgColor: "bg-purple-50",
  slides: [
    {
      id: 1,
      type: 'intro',
      title: 'Awesome Adjectives',
      content: {
        text: 'Powering Up Your English! Master the 15 most useful adjectives to describe anything and everything around you!',
      }
    },
    {
      id: 2,
      type: 'vocabulary',
      title: '¿Qué son los Adjetivos?',
      content: {
        text: 'Words that describe nouns. They tell us how something looks, feels, or is.',
        examples: [
          'The Cat - Just a noun',
          'The Orange Cat - Adjective + Noun = Better!',
          'Adjectives make your English more interesting and colorful!'
        ]
      }
    },
    {
      id: 3,
      type: 'vocabulary',
      title: 'Size Matters: BIG & SMALL',
      content: {
        items: [
          {
            english: 'BIG',
            spanish: 'Grande',
            example: "That's a big elephant! He lives in a big house."
          },
          {
            english: 'SMALL',
            spanish: 'Pequeño',
            example: 'I have a small dog. She has a small phone.'
          }
        ]
      }
    },
    {
      id: 4,
      type: 'vocabulary',
      title: 'Speed Check: FAST & SLOW',
      content: {
        items: [
          {
            english: 'FAST',
            spanish: 'Rápido',
            pronunciation: '/fæst/',
            example: 'The fast car zooms!'
          },
          {
            english: 'SLOW',
            spanish: 'Lento',
            example: 'The slow turtle crawls.'
          }
        ]
      }
    },
    {
      id: 5,
      type: 'vocabulary',
      title: 'Feelings Count: HAPPY & SAD',
      content: {
        items: [
          {
            english: 'HAPPY 😊',
            spanish: 'Feliz',
            example: 'I am happy today! Happy music makes us dance.'
          },
          {
            english: 'SAD 😔',
            spanish: 'Triste',
            example: 'He feels sad and lonely. That sad movie made me cry.'
          }
        ]
      }
    },
    {
      id: 6,
      type: 'vocabulary',
      title: 'Quality Check: GOOD & BAD',
      content: {
        items: [
          {
            english: 'GOOD',
            spanish: 'Bueno',
            example: 'This pizza tastes good! She is a good friend.'
          },
          {
            english: 'BAD',
            spanish: 'Malo',
            pronunciation: '/bæd/',
            example: 'That joke was bad. The weather is bad today.'
          }
        ]
      }
    },
    {
      id: 7,
      type: 'vocabulary',
      title: 'Looks Matter: PRETTY & UGLY',
      content: {
        items: [
          {
            english: 'PRETTY',
            spanish: 'Bonito',
            pronunciation: '/prɪti/',
            example: 'The pretty flower blooms. She has a pretty smile.'
          },
          {
            english: 'UGLY',
            spanish: 'Feo',
            example: 'An ugly old building. That ugly sweater is funny!'
          }
        ]
      }
    },
    {
      id: 8,
      type: 'vocabulary',
      title: 'Time Passes: OLD & NEW',
      content: {
        items: [
          {
            english: 'OLD',
            spanish: 'Viejo',
            example: 'My old shoes are dirty. Grandpa is old and wise.'
          },
          {
            english: 'NEW',
            spanish: 'Nuevo',
            example: 'I have a new bike! These new shoes are cool.'
          }
        ]
      }
    },
    {
      id: 9,
      type: 'summary',
      title: '¡Your Challenge!',
      content: {
        text: 'Write 3 sentences using adjectives you learned today.',
        instruction: 'Sentence 1: Use BIG or SMALL | Sentence 2: Use HAPPY, SAD, GOOD, or BAD | Sentence 3: Use any adjective you want!'
      }
    }
  ]
};