import React, { useState } from 'react';
import { RotateCcw, Check } from 'lucide-react';

// Datos del juego - Clima y ropa
const WEATHER_CLOTHING_PAIRS = [
  {
    id: 1,
    weather: 'Sunny',
    weatherSpanish: 'Soleado',
    weatherEmoji: '☀️',
    clothing: 'Sunglasses',
    clothingSpanish: 'Gafas de Sol',
    clothingEmoji: '😎',
  },
  {
    id: 2,
    weather: 'Cold',
    weatherSpanish: 'Frío',
    weatherEmoji: '❄️',
    clothing: 'Scarf',
    clothingSpanish: 'Bufanda',
    clothingEmoji: '🧣',
  },
  {
    id: 3,
    weather: 'Rainy',
    weatherSpanish: 'Lluvioso',
    weatherEmoji: '🌧️',
    clothing: 'Umbrella',
    clothingSpanish: 'Paraguas',
    clothingEmoji: '☂️',
  },
  {
    id: 4,
    weather: 'Hot',
    weatherSpanish: 'Caluroso',
    weatherEmoji: '🔥',
    clothing: 'T-Shirt',
    clothingSpanish: 'Camiseta',
    clothingEmoji: '👕',
  },
  {
    id: 5,
    weather: 'Windy',
    weatherSpanish: 'Ventoso',
    weatherEmoji: '💨',
    clothing: 'Hat',
    clothingSpanish: 'Sombrero',
    clothingEmoji: '🎩',
  },
  {
    id: 6,
    weather: 'Snowy',
    weatherSpanish: 'Nevado',
    weatherEmoji: '❄️❄️',
    clothing: 'Gloves',
    clothingSpanish: 'Guantes',
    clothingEmoji: '🧤',
  },
];

interface MatchingGameProps {
  gameColor: string;
  onGameEnd?: (score: number) => void;
}

const MatchingGame: React.FC<MatchingGameProps> = ({ gameColor }) => {
  const [matched, setMatched] = useState<number[]>([]);
  const [selected, setSelected] = useState<{ type: 'weather' | 'clothing'; id: number } | null>(null);
  const [points, setPoints] = useState(0);

  const handleItemClick = (type: 'weather' | 'clothing', id: number) => {
    // Si ya está emparejado, no hacer nada
    if (matched.includes(id)) return;

    // Si no hay selección, seleccionar este
    if (!selected) {
      setSelected({ type, id });
      return;
    }

    // Si seleccionó el mismo tipo, cambiar selección
    if (selected.type === type) {
      setSelected({ type, id });
      return;
    }

    // Verificar si es la pareja correcta
    const pair = WEATHER_CLOTHING_PAIRS.find(p => p.id === selected.id);
    const isCorrect = pair && pair.id === id;

    if (isCorrect) {
      setMatched([...matched, selected.id]);
      setPoints(points + 10);
    } else {
      // Mostrar error
      alert('❌ No es la pareja correcta');
    }

    setSelected(null);
  };

  const handleRestart = () => {
    setMatched([]);
    setSelected(null);
    setPoints(0);
  };

  const isGameWon = matched.length === WEATHER_CLOTHING_PAIRS.length;

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
          <p className="text-gray-600 text-sm">Parejas Completas</p>
          <p className="text-4xl font-bold text-gray-800">
            {matched.length}/{WEATHER_CLOTHING_PAIRS.length}
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

      {/* Instructions */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 mb-8 border-2 border-indigo-200">
        <p className="text-gray-700 font-semibold text-center">
          ✨ Haz clic en un elemento del clima y luego en la ropa que le corresponde
        </p>
      </div>

      {/* Game Grid */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Weather Column */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Clima</h3>
          <div className="space-y-4">
            {WEATHER_CLOTHING_PAIRS.map(pair => (
              <button
                key={`weather-${pair.id}`}
                onClick={() => handleItemClick('weather', pair.id)}
                disabled={matched.includes(pair.id)}
                className={`w-full p-6 rounded-2xl font-bold transition-all transform ${
                  matched.includes(pair.id)
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed opacity-50'
                    : selected?.type === 'weather' && selected?.id === pair.id
                    ? `bg-gradient-to-r ${gameColor} text-white shadow-lg scale-105`
                    : `bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:shadow-lg hover:scale-105 cursor-pointer`
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{pair.weatherEmoji}</span>
                  <div className="text-left">
                    <div>{pair.weather}</div>
                    <div className="text-sm opacity-75">{pair.weatherSpanish}</div>
                  </div>
                  {matched.includes(pair.id) && (
                    <Check className="w-6 h-6 ml-auto" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Clothing Column */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Ropa</h3>
          <div className="space-y-4">
            {WEATHER_CLOTHING_PAIRS.map(pair => (
              <button
                key={`clothing-${pair.id}`}
                onClick={() => handleItemClick('clothing', pair.id)}
                disabled={matched.includes(pair.id)}
                className={`w-full p-6 rounded-2xl font-bold transition-all transform ${
                  matched.includes(pair.id)
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed opacity-50'
                    : selected?.type === 'clothing' && selected?.id === pair.id
                    ? `bg-gradient-to-r ${gameColor} text-white shadow-lg scale-105`
                    : `bg-gradient-to-r from-purple-400 to-purple-600 text-white hover:shadow-lg hover:scale-105 cursor-pointer`
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{pair.clothingEmoji}</span>
                  <div className="text-left">
                    <div>{pair.clothing}</div>
                    <div className="text-sm opacity-75">{pair.clothingSpanish}</div>
                  </div>
                  {matched.includes(pair.id) && (
                    <Check className="w-6 h-6 ml-auto" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Victory Message */}
      {isGameWon && (
        <div className="text-center bg-gradient-to-r from-green-100 to-emerald-100 p-8 rounded-2xl border-2 border-green-400">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-green-800 mb-2">¡Todas las Parejas!</h2>
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

export default MatchingGame;