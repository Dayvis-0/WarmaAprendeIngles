import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  color: string;
  onPrevious: () => void;
  onNext: () => void;
  onSlideSelect: (index: number) => void;
}

const SlideNavigation: React.FC<SlideNavigationProps> = ({
  currentSlide,
  totalSlides,
  color,
  onPrevious,
  onNext,
  onSlideSelect
}) => {
  return (
    <div className="flex items-center justify-between">
      <button
        onClick={onPrevious}
        disabled={currentSlide === 0}
        className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all ${
          currentSlide === 0
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-white text-gray-800 hover:bg-gray-50 shadow-lg hover:shadow-xl'
        }`}
      >
        <ChevronLeft className="w-6 h-6" />
        Anterior
      </button>

      <div className="flex gap-2">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => onSlideSelect(idx)}
            className={`rounded-full transition-all ${
              idx === currentSlide
                ? `bg-gradient-to-r ${color} w-8 h-3`
                : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
            }`}
            aria-label={`Ir a diapositiva ${idx + 1}`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all ${
          currentSlide === totalSlides - 1
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : `bg-gradient-to-r ${color} text-white hover:shadow-xl shadow-lg`
        }`}
      >
        Siguiente
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SlideNavigation;