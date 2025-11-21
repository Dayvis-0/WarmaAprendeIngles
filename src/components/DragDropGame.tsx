import React, { useState, useEffect } from 'react';
import { RotateCcw, Check, Star, Trophy, Sparkles } from 'lucide-react';

const CLOTHING_ITEMS = [
  { id: 1, name: 'Hat', spanish: 'Sombrero', emoji: '🎩', correctPart: 'head', color: 'from-purple-400 to-purple-600' },
  { id: 2, name: 'Scarf', spanish: 'Bufanda', emoji: '🧣', correctPart: 'neck', color: 'from-red-400 to-red-600' },
  { id: 3, name: 'Shirt', spanish: 'Camisa', emoji: '👕', correctPart: 'body', color: 'from-blue-400 to-blue-600' },
  { id: 4, name: 'Gloves', spanish: 'Guantes', emoji: '🧤', correctPart: 'hands', color: 'from-orange-400 to-orange-600' },
  { id: 5, name: 'Pants', spanish: 'Pantalones', emoji: '👖', correctPart: 'legs', color: 'from-indigo-400 to-indigo-600' },
  { id: 6, name: 'Shoes', spanish: 'Zapatos', emoji: '👞', correctPart: 'feet', color: 'from-green-400 to-green-600' },
];

const BODY_PARTS = [
  { id: 'head', name: 'Head', spanish: 'Cabeza', y: 50, size: 'large' },
  { id: 'neck', name: 'Neck', spanish: 'Cuello', y: 120, size: 'small' },
  { id: 'body', name: 'Body', spanish: 'Cuerpo', y: 180, size: 'large' },
  { id: 'hands', name: 'Hands', spanish: 'Manos', y: 250, size: 'medium' },
  { id: 'legs', name: 'Legs', spanish: 'Piernas', y: 330, size: 'large' },
  { id: 'feet', name: 'Feet', spanish: 'Pies', y: 420, size: 'medium' },
];

interface PlacedClothing {
  clothingId: number;
  partId: string;
}

interface DragDropGameProps {
  gameColor: string;
  onGameEnd?: (score: number) => void;
}

const DragDropGame: React.FC<DragDropGameProps> = ({ gameColor, onGameEnd }) => {
  const [placed, setPlaced] = useState<PlacedClothing[]>([]);
  const [dragging, setDragging] = useState<number | null>(null);
  const [points, setPoints] = useState(0);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);
  const [recentlyPlaced, setRecentlyPlaced] = useState<number | null>(null);
  const [showVictory, setShowVictory] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (placed.length === CLOTHING_ITEMS.length) {
      setTimeout(() => setShowVictory(true), 500);
      onGameEnd?.(points);
    }
  }, [placed.length, points, onGameEnd]);

  const isClothingPlaced = (clothingId: number) => {
    return placed.some(p => p.clothingId === clothingId);
  };

  const handleDragStart = (clothingId: number) => {
    if (!isClothingPlaced(clothingId)) {
      setDragging(clothingId);
    }
  };

  const handleDragEnd = () => {
    setDragging(null);
    setHoveredPart(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragEnter = (partId: string) => {
    setHoveredPart(partId);
  };

  const handleDragLeave = () => {
    setHoveredPart(null);
  };

  const handleDropOnPart = (partId: string) => {
    if (dragging === null) return;

    const clothing = CLOTHING_ITEMS.find(c => c.id === dragging);
    if (!clothing) return;

    const isCorrect = clothing.correctPart === partId;

    if (isCorrect) {
      setPlaced([...placed, { clothingId: dragging, partId }]);
      setPoints(points + 100);
      setRecentlyPlaced(dragging);
      setTimeout(() => setRecentlyPlaced(null), 1000);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }

    setDragging(null);
    setHoveredPart(null);
  };

  const handleRemoveClothing = (clothingId: number) => {
    setPlaced(placed.filter(p => p.clothingId !== clothingId));
    setPoints(Math.max(0, points - 50));
  };

  const handleRestart = () => {
    setPlaced([]);
    setPoints(0);
    setDragging(null);
    setShowVictory(false);
    setRecentlyPlaced(null);
  };

  const getDropZoneSize = (size: string) => {
    switch (size) {
      case 'large': return 'w-20 h-20';
      case 'medium': return 'w-16 h-16';
      case 'small': return 'w-12 h-12';
      default: return 'w-16 h-16';
    }
  };

  const progress = (placed.length / CLOTHING_ITEMS.length) * 100;

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Header Stats */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
        <div className="grid grid-cols-3 gap-6 mb-4">
          <div className="flex items-center gap-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4">
            <Trophy className="w-10 h-10 text-yellow-500" />
            <div>
              <p className="text-sm text-gray-600">Puntos</p>
              <p className="text-3xl font-bold text-gray-800">{points}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4">
            <Sparkles className="w-10 h-10 text-blue-500" />
            <div>
              <p className="text-sm text-gray-600">Progreso</p>
              <p className="text-3xl font-bold text-gray-800">{placed.length}/{CLOTHING_ITEMS.length}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <button
              onClick={handleRestart}
              className={`bg-gradient-to-r ${gameColor} text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all flex items-center gap-2 font-semibold`}
            >
              <RotateCcw className="w-5 h-5" />
              Reiniciar
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className={`bg-gradient-to-r ${gameColor} h-full transition-all duration-500 ease-out rounded-full flex items-center justify-end px-2`}
            style={{ width: `${progress}%` }}
          >
            {progress > 10 && (
              <span className="text-white text-xs font-bold">{Math.round(progress)}%</span>
            )}
          </div>
        </div>
      </div>

      {/* Main Game Area */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Character Area */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 opacity-40"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
                <span>👤</span> Viste al Personaje
              </h3>
              <p className="text-gray-600">Arrastra la ropa al lugar correcto del cuerpo</p>
            </div>

            {/* Character with Drop Zones */}
            <div className={`relative mx-auto ${shake ? 'animate-shake' : ''}`} style={{ width: '350px', height: '650px' }}>
              {/* Enhanced Decorative Background */}
              <div className="absolute inset-0 -inset-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-full opacity-40 blur-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100 via-transparent to-indigo-100 rounded-full opacity-30 blur-xl animate-pulse"></div>
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-2xl"></div>
              </div>
              
              {/* Enhanced Stick Figure */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 520">
                {/* Head */}
                <defs>
                  <radialGradient id="faceGradient">
                    <stop offset="0%" stopColor="#ffcc99" />
                    <stop offset="100%" stopColor="#ffb366" />
                  </radialGradient>
                </defs>
                <circle cx="140" cy="70" r="35" fill="url(#faceGradient)" stroke="#333" strokeWidth="3" />
                {/* Smile */}
                <path d="M 125 75 Q 140 85 155 75" stroke="#333" strokeWidth="2" fill="none" />
                {/* Eyes */}
                <circle cx="130" cy="65" r="3" fill="#333" />
                <circle cx="150" cy="65" r="3" fill="#333" />
                
                {/* Neck */}
                <rect x="135" y="105" width="10" height="20" fill="#ffb366" stroke="#333" strokeWidth="2" rx="2" />
                
                {/* Body */}
                <rect x="110" y="125" width="60" height="90" fill="#e6f3ff" stroke="#333" strokeWidth="3" rx="8" />
                
                {/* Arms */}
                <rect x="75" y="140" width="35" height="12" fill="#ffb366" stroke="#333" strokeWidth="2" rx="6" />
                <rect x="170" y="140" width="35" height="12" fill="#ffb366" stroke="#333" strokeWidth="2" rx="6" />
                {/* Hands circles */}
                <circle cx="75" cy="146" r="10" fill="#ffb366" stroke="#333" strokeWidth="2" />
                <circle cx="205" cy="146" r="10" fill="#ffb366" stroke="#333" strokeWidth="2" />
                
                {/* Legs */}
                <rect x="120" y="215" width="18" height="120" fill="#e6f3ff" stroke="#333" strokeWidth="2" rx="4" />
                <rect x="142" y="215" width="18" height="120" fill="#e6f3ff" stroke="#333" strokeWidth="2" rx="4" />
                
                {/* Feet */}
                <ellipse cx="129" cy="345" rx="20" ry="12" fill="#8B4513" stroke="#333" strokeWidth="2" />
                <ellipse cx="151" cy="345" rx="20" ry="12" fill="#8B4513" stroke="#333" strokeWidth="2" />
              </svg>

              {/* Drop Zones */}
              {BODY_PARTS.map(part => {
                const clothingOnPart = placed.find(p => p.partId === part.id);
                const clothing = clothingOnPart
                  ? CLOTHING_ITEMS.find(c => c.id === clothingOnPart.clothingId)
                  : null;
                
                const isHovered = hoveredPart === part.id;
                const isRecentlyPlaced = clothing && recentlyPlaced === clothing.id;

                return (
                  <div
                    key={part.id}
                    onDragOver={handleDragOver}
                    onDragEnter={() => handleDragEnter(part.id)}
                    onDragLeave={handleDragLeave}
                    onDrop={() => handleDropOnPart(part.id)}
                    className={`absolute transition-all duration-300 ${
                      isHovered ? 'scale-110' : ''
                    }`}
                    style={{ 
                      top: `${part.y}px`, 
                      left: '50%', 
                      transform: 'translateX(-50%)',
                      zIndex: clothing ? 20 : 10
                    }}
                  >
                    {clothing ? (
                      <button
                        onClick={() => handleRemoveClothing(clothing.id)}
                        className={`text-5xl hover:scale-110 transition-all duration-300 relative ${
                          isRecentlyPlaced ? 'animate-bounce' : ''
                        }`}
                        title={`Quitar ${clothing.name}`}
                      >
                        {clothing.emoji}
                        {isRecentlyPlaced && (
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-green-500 font-bold text-sm whitespace-nowrap animate-fade-up">
                            ✓ ¡Correcto!
                          </div>
                        )}
                      </button>
                    ) : (
                      <div
                        className={`${getDropZoneSize(part.size)} border-3 border-dashed rounded-2xl transition-all duration-300 flex items-center justify-center ${
                          isHovered 
                            ? 'border-green-400 bg-green-100 scale-110 shadow-lg' 
                            : 'border-gray-300 bg-white/60 hover:bg-white/80'
                        }`}
                      >
                        <div className="text-center">
                          <p className="text-xs font-semibold text-gray-600">{part.name}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Clothing Items Panel */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
              <span>👔</span> Ropa Disponible
            </h3>
            <p className="text-gray-600">Arrastra cada prenda al lugar correcto</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {CLOTHING_ITEMS.map(clothing => {
              const isPlaced = isClothingPlaced(clothing.id);
              const isDraggingThis = dragging === clothing.id;
              
              return (
                <div
                  key={clothing.id}
                  className={`relative transition-all duration-300 ${
                    isDraggingThis ? 'opacity-50 scale-95' : ''
                  }`}
                >
                  <div
                    draggable={!isPlaced}
                    onDragStart={() => handleDragStart(clothing.id)}
                    onDragEnd={handleDragEnd}
                    className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
                      isPlaced
                        ? 'bg-gray-100 cursor-not-allowed'
                        : `bg-gradient-to-br ${clothing.color} cursor-grab active:cursor-grabbing hover:shadow-xl hover:scale-105`
                    }`}
                  >
                    {/* Shine effect */}
                    {!isPlaced && (
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                    
                    <div className={`p-6 text-center ${isPlaced ? 'text-gray-400' : 'text-white'}`}>
                      <div className={`text-5xl mb-3 transition-transform duration-300 ${
                        !isPlaced ? 'group-hover:scale-110' : ''
                      }`}>
                        {clothing.emoji}
                      </div>
                      <p className="font-bold text-lg mb-1">{clothing.name}</p>
                      <p className={`text-sm ${isPlaced ? 'opacity-60' : 'opacity-90'}`}>
                        {clothing.spanish}
                      </p>
                    </div>

                    {isPlaced && (
                      <div className="absolute inset-0 flex items-center justify-center bg-green-500/20 backdrop-blur-sm">
                        <div className="bg-green-500 text-white rounded-full p-3 shadow-lg">
                          <Check className="w-8 h-8" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Hint Section */}
          <div className="mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border-2 border-indigo-100">
            <p className="text-sm text-gray-700 text-center">
              💡 <strong>Pista:</strong> Cada prenda va en una parte específica del cuerpo. 
              {placed.length === 0 && " ¡Empieza por el sombrero!"}
            </p>
          </div>
        </div>
      </div>

      {/* Victory Modal */}
      {showVictory && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl p-12 max-w-lg mx-4 shadow-2xl animate-scale-in">
            <div className="text-center">
              <div className="text-8xl mb-6 animate-bounce">🎉</div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                ¡Excelente Trabajo!
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                ¡Has vestido completamente al personaje!
              </p>
              
              <div className="flex justify-center gap-2 mb-8">
                {[...Array(3)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-12 h-12 text-yellow-400 fill-yellow-400 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 mb-8">
                <p className="text-gray-700 text-lg mb-2">Puntuación Final</p>
                <p className="text-5xl font-bold text-gray-800">{points}</p>
                <p className="text-sm text-gray-600 mt-2">puntos</p>
              </div>

              <button
                onClick={handleRestart}
                className={`bg-gradient-to-r ${gameColor} text-white text-xl font-bold py-4 px-10 rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all`}
              >
                🔄 Jugar de Nuevo
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-shake {
          animation: shake 0.5s;
        }
        .animate-fade-up {
          animation: fade-up 0.5s;
        }
        .animate-fade-in {
          animation: fade-in 0.3s;
        }
        .animate-scale-in {
          animation: scale-in 0.3s;
        }
      `}</style>
    </div>
  );
};

export default DragDropGame;