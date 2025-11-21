import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Home, Trophy } from 'lucide-react';
import type { Game } from '../types';

interface GameViewProps {
  games: Game[];
}

const GameView: React.FC<GameViewProps> = ({ games }) => {
  const { gameId } = useParams<{ gameId: string }>();
  const navigate = useNavigate();

  const game = games.find(g => g.id === Number(gameId));

  if (!game) {
    navigate('/');
    return null;
  }

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className={`bg-gradient-to-r ${game.color} text-white shadow-xl`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-lg px-4 py-2 rounded-xl transition-all"
            >
              <Home className="w-5 h-5" />
              <span className="font-semibold">Volver</span>
            </button>

            <div className="text-center">
              <h2 className="text-2xl font-bold">{game.title}</h2>
              <p className="text-white/80">{game.subtitle}</p>
            </div>

            <div className="bg-white/20 backdrop-blur-lg px-5 py-2 rounded-xl flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              <span className="font-bold">0 pts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Game Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl shadow-2xl p-12 min-h-[600px] flex flex-col items-center justify-center border-4 border-gray-100">
          <div className="text-center">
            <div className="text-8xl mb-8 animate-bounce">{game.emoji}</div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">{game.title}</h1>
            <p className="text-2xl text-gray-600 mb-8">{game.subtitle}</p>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🎮 Instrucciones:</h3>
              <div className="text-left space-y-3 text-gray-700">
                {game.type === 'memory' && (
                  <>
                    <p>• Encuentra las parejas de tarjetas haciendo clic en ellas</p>
                    <p>• Memoriza la posición de cada palabra en inglés</p>
                    <p>• ¡Completa todas las parejas para ganar!</p>
                  </>
                )}
                {game.type === 'quiz' && (
                  <>
                    <p>• Responde las preguntas de opción múltiple</p>
                    <p>• Selecciona la respuesta correcta</p>
                    <p>• ¡Obtén el puntaje más alto posible!</p>
                  </>
                )}
                {game.type === 'dragdrop' && (
                  <>
                    <p>• Arrastra las prendas de ropa al muñeco</p>
                    <p>• Coloca cada prenda en el lugar correcto</p>
                    <p>• ¡Viste al muñeco completamente!</p>
                  </>
                )}
                {game.type === 'matching' && (
                  <>
                    <p>• Une el clima con la ropa apropiada</p>
                    <p>• Arrastra las líneas para conectar las parejas</p>
                    <p>• ¡Completa todas las conexiones correctamente!</p>
                  </>
                )}
              </div>
            </div>

            <button
              className={`bg-gradient-to-r ${game.color} text-white text-xl font-bold py-5 px-12 rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all shadow-lg`}
            >
              🚀 ¡Comenzar Juego!
            </button>

            <p className="text-gray-500 mt-6 text-sm">
              Este juego está en desarrollo. ¡Pronto estará disponible!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameView;