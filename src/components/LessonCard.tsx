import React from 'react';
import { ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface LessonCardProps {
  title: string;
  subtitle: string;
  emoji: string;
  icon: LucideIcon;
  color: string;
  slidesCount: number;
  onClick: () => void;
}

const LessonCard: React.FC<LessonCardProps> = ({
  title,
  subtitle,
  emoji,
  icon: Icon,
  color,
  slidesCount,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-3xl p-8 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border-2 border-gray-100 hover:border-transparent relative overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className={`bg-gradient-to-br ${color} p-5 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-12 h-12 text-white" />
          </div>
          <div className="text-5xl group-hover:animate-bounce">
            {emoji}
          </div>
        </div>
        
        <h3 className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
          {title}
        </h3>
        <p className="text-lg text-gray-600 mb-6">{subtitle}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold text-gray-700">
              📄 {slidesCount} diapositivas
            </span>
            <span className="bg-green-100 px-4 py-2 rounded-full text-sm font-semibold text-green-700">
              🎯 Interactivo
            </span>
          </div>
          <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-2 transition-all" />
        </div>
      </div>
    </div>
  );
};

export default LessonCard;