import React from 'react';
import { BookOpen } from 'lucide-react';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  isHome?: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  title = "English Learning Platform", 
  subtitle = "Aprende inglés de forma visual e interactiva",
  isHome = true 
}) => {
  return (
    <div className={`${isHome ? 'bg-gradient-to-r from-indigo-600 to-purple-600' : 'bg-white'} text-white shadow-2xl`}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`${isHome ? 'bg-white/20 backdrop-blur-lg' : 'bg-gradient-to-br from-indigo-500 to-purple-600'} p-4 rounded-2xl`}>
              <BookOpen className={`w-10 h-10 ${isHome ? 'text-white' : 'text-white'}`} />
            </div>
            <div>
              <h1 className={`text-4xl font-bold ${isHome ? 'text-white' : 'text-gray-800'}`}>
                {title}
              </h1>
              <p className={`text-lg ${isHome ? 'text-indigo-100' : 'text-gray-600'}`}>
                {subtitle}
              </p>
            </div>
          </div>
          <div className={`${isHome ? 'bg-white/20 backdrop-blur-lg' : 'bg-gradient-to-br from-indigo-100 to-purple-100'} px-6 py-3 rounded-full`}>
            <p className={`text-sm ${isHome ? 'text-white' : 'text-gray-700'}`}>
              👋 ¡Bienvenido, Estudiante!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;