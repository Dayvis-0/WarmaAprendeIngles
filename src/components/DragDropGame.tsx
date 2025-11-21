import React, { useState } from 'react';
import { RotateCcw, Check } from 'lucide-react';

// Partes del cuerpo y ropa
const CLOTHING_ITEMS = [
  { id: 1, name: 'Hat', spanish: 'Sombrero', emoji: '🎩', correctPart: 'head' },
  { id: 2, name: 'Shirt', spanish: 'Camisa', emoji: '👔', correctPart: 'body' },
  { id: 3, name: 'Pants', spanish: 'Pantalones', emoji: '👖', correctPart: 'legs' },
  { id: 4, name: 'Shoes', spanish: 'Zapatos', emoji: '👞', correctPart: 'feet' },
  { id: 5, name: 'Gloves', spanish: 'Guantes', emoji: '🧤', correctPart: 'hands' },
  { id: 6, name: 'Scarf', spanish: 'Bufanda', emoji: '🧣', correctPart: 'neck' },
];

const BODY_PARTS = [
  { id: 'head', name: 'Head', spanish: 'Cabeza', y: 80 },
  { id: 'neck', name: 'Neck', spanish: 'Cuello', y: 140 },
  { id: 'body', name: 'Body', spanish: 'Cuerpo', y: 200 },
  { id: 'hands', name: 'Hands', spanish: 'Manos', y: 280 },
  { id: 'legs', name: 'Legs', spanish: 'Piernas', y: 360 },
  { id: 'feet', name: 'Feet', spanish: 'Pies', y: 440 },
];

interface PlacedClothing {
  clothingId: number;
  partId: string;
}

interface DragDropGameProps {
  gameColor: string;
  onGameEnd?: (score: number) => void;
}

const DragDropGame: React.FC<DragDropGameProps> = ({ gameColor }) => {
  const [placed, setPlaced] = useState<PlacedClothing[]>([]);
  const [dragging, setDragging] = useState<number | null>(null);
  const [points, setPoints] = useState(0);

  const isClothingPlaced = (clothingId: number) => {
    return placed.some(p => p.clothingId === clothingId);
  };

  const getPlacedPart = (clothingId: number) => {
    return placed.find(p => p.clothingId === clothingId)?.partId;
  };

  const handleDragStart = (clothingId: number) => {
    if (!isClothingPlaced(clothingId)) {
      setDragging(clothingId);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDropOnPart = (partId: string) => {
    if (dragging === null) return;

    const clothing = CLOTHING_ITEMS.find(c => c.id === dragging);
    if (!clothing) return;

    // Verificar si es el lugar correcto
    const isCorrect = clothing.correctPart === partId;

    if (isCorrect) {
      setPlaced([...placed, { clothingId: dragging, partId }]);
      setPoints(points + 10);
    } else {
      // Mostrar error brevemente (sin agregar)
      alert('❌ Ese no es el lugar correcto para ' + clothing.name);
    }

    setDragging(null);
  };

  const handleRemoveClothing = (clothingId: number) => {
    setPlaced(placed.filter(p => p.clothingId !== clothingId));
    setPoints(Math.max(0, points - 10));
  };

  const handleRestart = () => {
    setPlaced([]);
    setPoints(0);
    setDragging(null);
  };

  const isGameWon = placed.length === CLOTHING_ITEMS.length;

  return (
    <div className="w-full">
      {/* Stats */}
      <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-lg">
        <div className="text-center">
          <p className="text-gray-600 text-sm">Puntos</p>
          <p className={`text-4xl font-bold bg-gradient-to-r ${gameColor} bg-clip-text text-transparent`}>
            {points}
          </p>
        </div>
        <div className="text-center">
          <p className="text-gray-600 text-sm">Ropa Colocada</p>
          <p className="text-4xl font-bold text-gray-800">
            {placed.length}/{CLOTHING_ITEMS.length}
          </p>
        </div>
        <button
          onClick={handleRestart}
          className={`flex items-center gap-2 bg-gradient-to-r ${gameColor} text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all`}
        >
          <RotateCcw className="w-5 h-5" />
          Reiniciar
        </button>
      </div>

      {/* Game Container */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Character Area */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 flex flex-col items-center justify-center">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Viste al Personaje</h3>
            <p className="text-gray-600">Arrastra la ropa al lugar correcto</p>
          </div>

          {/* Body Parts Drop Zones */}
          <div className="relative w-full h-96 bg-gradient-to-b from-blue-50 to-purple-50 rounded-2xl p-8 flex flex-col items-center justify-center">
            {/* Stick Figure */}
            <svg className="w-32 h-80" viewBox="0 0 100 300" style={{ marginTop: '-40px' }}>
              {/* Head */}
              <circle cx="50" cy="40" r="20" fill="#ffb366" stroke="#333" strokeWidth="2" />
              {/* Body */}
              <line x1="50" y1="60" x2="50" y2="140" stroke="#333" strokeWidth="2" />
              {/* Arms */}
              <line x1="50" y1="85" x2="25" y2="110" stroke="#333" strokeWidth="2" />
              <line x1="50" y1="85" x2="75" y2="110" stroke="#333" strokeWidth="2" />
              {/* Legs */}
              <line x1="50" y1="140" x2="35" y2="200" stroke="#333" strokeWidth="2" />
              <line x1="50" y1="140" x2="65" y2="200" stroke="#333" strokeWidth="2" />
              {/* Feet */}
              <circle cx="35" cy="210" r="5" fill="#333" />
              <circle cx="65" cy="210" r="5" fill="#333" />
            </svg>

            {/* Drop Zones */}
            {BODY_PARTS.map(part => {
              const clothingOnPart = placed.find(p => p.partId === part.id);
              const clothing = clothingOnPart
                ? CLOTHING_ITEMS.find(c => c.id === clothingOnPart.clothingId)
                : null;

              return (
                <div
                  key={part.id}
                  onDragOver={handleDragOver}
                  onDrop={() => handleDropOnPart(part.id)}
                  className="absolute cursor-pointer"
                  style={{ top: `${part.y}px`, left: '50%', transform: 'translateX(-50%)' }}
                >
                  {clothing ? (
                    <button
                      onClick={() => handleRemoveClothing(clothing.id)}
                      className="text-4xl hover:scale-110 transition-transform"
                      title={`Quitar ${clothing.name}`}
                    >
                      {clothing.emoji}
                    </button>
                  ) : (
                    <div className="w-12 h-12 border-2 border-dashed border-gray-400 rounded-lg bg-white/50"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Clothing Items */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Ropa Disponible</h3>
          <div className="grid grid-cols-2 gap-4 flex-1">
            {CLOTHING_ITEMS.map(clothing => (
              <div key={clothing.id} className={`relative ${isClothingPlaced(clothing.id) ? 'opacity-40' : ''}`}>
                <button
                  draggable={!isClothingPlaced(clothing.id)}
                  onDragStart={() => handleDragStart(clothing.id)}
                  className={`w-full p-6 rounded-2xl font-bold transition-all text-center ${
                    isClothingPlaced(clothing.id)
                      ? 'bg-gray-200 cursor-not-allowed'
                      : `bg-gradient-to-r ${gameColor} text-white cursor-grab hover:shadow-lg`
                  }`}
                >
                  <div className="text-3xl mb-2">{clothing.emoji}</div>
                  <div className="text-sm">{clothing.name}</div>
                  <div className="text-xs opacity-75">{clothing.spanish}</div>
                </button>
                {isClothingPlaced(clothing.id) && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Victory Message */}
      {isGameWon && (
        <div className="text-center bg-gradient-to-r from-green-100 to-emerald-100 p-8 rounded-2xl border-2 border-green-400">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-green-800 mb-2">¡Personaje Vestido!</h2>
          <p className="text-lg text-green-700 mb-4">
            Ganaste con {points} puntos
          </p>
          <button
            onClick={handleRestart}
            className={`bg-gradient-to-r ${gameColor} text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transition-all`}
          >
            Jugar de Nuevo
          </button>
        </div>
      )}
    </div>
  );
};

export default DragDropGame;