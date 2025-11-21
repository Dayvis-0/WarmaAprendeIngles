// Tipos para las lecciones
export interface Lesson {
  id: number;
  title: string;
  subtitle: string;
  emoji: string;
  color: string;
  bgColor: string;
  slides: Slide[];
  pptFile?: string;
}

export interface Slide {
  id: number;
  type: 'intro' | 'chapter' | 'chapter-vocabulary' | 'chapter-vocabulary-numbered' | 'vocabulary' | 'activity' | 'summary' | 'final' | 'adjectives-grid' | 'dialogues' | 'activities';
  title: string;
  subtitle?: string;
  content: SlideContent;
  image?: string;
  imagePosition?: 'left' | 'right';
}

export interface SlideContent {
  text?: string;
  items?: VocabularyItem[];
  activityItems?: ActivityItem[];
  summaryItems?: SummaryItem[];
  instruction?: string;
  note?: string;
  quote?: string;
  extraImage?: string;
  dialogues?: Dialogue[];
  activities?: ActivityBlock[];
}

export interface VocabularyItem {
  english: string;
  spanish: string;
  pronunciation?: string;
  description?: string;
  image?: string;
  icon?: string;
  number?: number;
}

export interface ActivityItem {
  spanish: string;
  english: string;
  instruction: string;
  image?: string;
}

export interface SummaryItem {
  spanish: string;
  english: string;
  pronunciation: string;
}

export interface Dialogue {
  speakers: string[];
  lines: string[];
  image?: string;
}

export interface ActivityBlock {
  title: string;
  instruction: string;
  questions: string[];
}

// Tipos para los juegos
export interface Game {
  id: number;
  title: string;
  subtitle: string;
  emoji: string;
  color: string;
  bgColor: string;
  type: 'matching' | 'quiz' | 'memory' | 'dragdrop';
  lessonId: number;
}

export interface GameQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  image?: string;
}

// Tipo para la navegación
export type ViewType = 'home' | 'lesson' | 'game';