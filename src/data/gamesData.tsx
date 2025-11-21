import type { Game } from '../types';

export const gamesData: Game[] = [
  {
    id: 1,
    title: "Memory Match - Cuerpo Humano",
    subtitle: "Encuentra las parejas de Body Parts",
    emoji: "🧠",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-50",
    type: "memory",
    lessonId: 1
  },
  {
    id: 2,
    title: "Quiz - Adjetivos",
    subtitle: "Pon a prueba tu conocimiento de Adjectives",
    emoji: "🎯",
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-50",
    type: "quiz",
    lessonId: 2
  },
  {
    id: 3,
    title: "Drag & Drop - Ropa",
    subtitle: "Arrastra la ropa correcta al muñeco",
    emoji: "🎮",
    color: "from-pink-400 to-pink-600",
    bgColor: "bg-pink-50",
    type: "dragdrop",
    lessonId: 3
  },
  {
    id: 4,
    title: "Matching - El Tiempo",
    subtitle: "Une el clima con la ropa correcta",
    emoji: "🌈",
    color: "from-cyan-400 to-cyan-600",
    bgColor: "bg-cyan-50",
    type: "matching",
    lessonId: 4
  }
];