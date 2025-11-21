import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Star, Cloud, Shirt } from 'lucide-react';
import Header from '../components/Header';
import LessonCard from '../components/LessonCard';
import GameCard from '../components/GameCard';
import { bodyPartsLesson } from '../data/bodyPartsLesson';
import { adjectivesLesson } from '../data/adjectivesLesson';
import { clothingLesson } from '../data/clothingLesson';
import { weatherLesson } from '../data/weatherLesson';
import { gamesData } from '../data/gamesData';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const lessons = [bodyPartsLesson, adjectivesLesson, clothingLesson, weatherLesson];
  const icons = [User, Star, Shirt, Cloud];

  const handleSelectLesson = (lessonId: number) => {
    navigate(`/lesson/${lessonId}`);
  };

  const handleSelectGame = (gameId: number) => {
    navigate(`/game/${gameId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Sección de Lecciones */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              📚 Elige tu Lección
            </h2>
            <p className="text-xl text-gray-600">
              Cada lección incluye vocabulario, imágenes, ejemplos y actividades interactivas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {lessons.map((lesson, index) => (
              <LessonCard
                key={lesson.id}
                title={lesson.title}
                subtitle={lesson.subtitle}
                emoji={lesson.emoji}
                icon={icons[index]}
                color={lesson.color}
                slidesCount={lesson.slides.length}
                onClick={() => handleSelectLesson(lesson.id)}
              />
            ))}
          </div>
        </div>

        {/* Sección de Juegos */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              🎮 Practica con Juegos
            </h2>
            <p className="text-xl text-gray-600">
              Refuerza lo aprendido de forma divertida e interactiva
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gamesData.map((game) => (
              <GameCard
                key={game.id}
                title={game.title}
                subtitle={game.subtitle}
                emoji={game.emoji}
                color={game.color}
                bgColor={game.bgColor}
                onClick={() => handleSelectGame(game.id)}
              />
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="font-bold text-gray-800 mb-2">Contenido Visual</h3>
            <p className="text-gray-600 text-sm">
              Imágenes, colores y diseños atractivos para mejor aprendizaje
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">🔊</div>
            <h3 className="font-bold text-gray-800 mb-2">Pronunciación</h3>
            <p className="text-gray-600 text-sm">
              Escucha cómo se pronuncia cada palabra en inglés
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">🎮</div>
            <h3 className="font-bold text-gray-800 mb-2">Actividades</h3>
            <p className="text-gray-600 text-sm">
              Juegos y ejercicios para practicar lo aprendido
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;