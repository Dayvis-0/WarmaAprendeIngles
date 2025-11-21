import React from 'react';
import { Play } from 'lucide-react';

interface GameCardProps {
  title: string;
  subtitle: string;
  emoji: string;
  color: string;
  bgColor: string;
  onClick: () => void;
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  subtitle,
  emoji,
  color,
  bgColor,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={`${bgColor} rounded-2xl p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-white relative overflow-hidden group`}
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
            {emoji}
          </div>
          <div className={`bg-gradient-to-br ${color} p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <Play className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-4">{subtitle}</p>
        
        <div className="flex items-center justify-between">
          <span className="bg-white px-4 py-2 rounded-full text-xs font-semibold text-gray-700 shadow">
            🎮 Juego Interactivo
          </span>
          <span className="text-gray-400 group-hover:text-indigo-600 transition-colors">→</span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;