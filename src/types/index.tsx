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
  type: 'intro' | 'chapter' | 'chapter-vocabulary' | 'chapter-vocabulary-numbered' | 'vocabulary' | 'activity' | 'summary' | 'final' | 'adjectives-grid' | 'dialogues' | 'activities' | 'objectives' | 'clothing-vocabulary' | 'phrases' | 'game-activity' | 'hands-on-activity' | 'fill-blank-test' | 'tips';
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
  objectives?: Objective[];
  phrases?: Phrase[];
  steps?: Step[];
  images?: string[];
  questions?: TestQuestion[];
  tips?: Tip[];
  finalTips?: Tip[];
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

export interface Objective {
  title: string;
  description: string;
  icon: string;
}

export interface Phrase {
  english: string;
  spanish: string;
}

export interface Step {
  title: string;
  description: string;
  icon: string;
}

export interface TestQuestion {
  sentence: string;
  answer: string;
}

export interface Tip {
  title: string;
  description: string;
  icon: string;
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