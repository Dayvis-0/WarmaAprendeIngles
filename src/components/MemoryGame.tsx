import React, { useState, useEffect } from 'react';
import { RotateCcw } from 'lucide-react';

// Datos del juego - Partes del cuerpo
const MEMORY_PAIRS = [
  { id: 1, english: 'Head', spanish: 'Cabeza' },
  { id: 2, english: 'Eyes', spanish: 'Ojos' },
  { id: 3, english: 'Nose', spanish: 'Nariz' },
  { id: 4, english: 'Mouth', spanish: 'Boca' },
  { id: 5, english: 'Hands', spanish: 'Manos' },
  { id: 6, english: 'Feet', spanish: 'Pies' },
];

interface Card {
  id: string;
  pairId: number;
  word: string;
  language: 'en' | 'es';
  isFlipped: boolean;
  isMatched: boolean;
}

interface MemoryGameProps {
  gameColor: string;
  onGameEnd?: (score: number) => void;
}

const MemoryGame: React.FC<MemoryGameProps> = ({ gameColor, onGameEnd }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flipped, setFlipped] = useState<string[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [points, setPoints] = useState(0);
  const [moves, setMoves] = useState(0);

  // Inicializar juego
  useEffect(() => {
    initializeGame();
  }, []);

  // Verificar si hay pareja cuando se voltean 2 tarjetas
  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;
      const firstCard = cards.find(c => c.id === first);
      const secondCard = cards.find(c => c.id === second);

      // Si son la misma pareja
      if (firstCard?.pairId === secondCard?.pairId) {
        setMatched([...matched, firstCard!.pairId]);
        setPoints(points + 10);
        setFlipped([]);
      } else {
        // No coinciden, voltear de nuevo después de 1 segundo
        setTimeout(() => {
          setFlipped([]);
        }, 1000);
      }
      setMoves(moves + 1);
    }
  }, [flipped]);

  // Verificar si ganó
  useEffect(() => {
    if (matched.length === MEMORY_PAIRS.length && matched.length > 0) {
      setTimeout(() => {
        onGameEnd?.(points);
      }, 500);
    }
  }, [matched]);

  const initializeGame = () => {
    // Crear tarjetas: inglés y español para cada pareja
    const newCards: Card[] = [];
    MEMORY_PAIRS.forEach(pair => {
      newCards.push({
        id: `${pair.id}-en`,
        pairId: pair.id,
        word: pair.english,
        language: 'en',
        isFlipped: false,
        isMatched: false,
      });
      newCards.push({
        id: `${pair.id}-es`,
        pairId: pair.id,
        word: pair.spanish,
        language: 'es',
        isFlipped: false,
        isMatched: false,
      });
    });

    // Mezclar tarjetas
    newCards.sort(() => Math.random() - 0.5);
    setCards(newCards);
    setFlipped([]);
    setMatched([]);
    setPoints(0);
    setMoves(0);
  };

  const handleCardClick = (cardId: string) => {
    // No hacer nada si ya está volteada o emparejada
    if (flipped.includes(cardId) || matched.includes(cards.find(c => c.id === cardId)?.pairId || -1)) {
      return;
    }

    // No permitir más de 2 tarjetas
    if (flipped.length >= 2) {
      return;
    }

    setFlipped([...flipped, cardId]);
  };

  const isGameWon = matched.length === MEMORY_PAIRS.length;

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
          <p className="text-gray-600 text-sm">Movimientos</p>
          <p className="text-4xl font-bold text-gray-800">{moves}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-600 text-sm">Parejas</p>
          <p className="text-4xl font-bold text-gray-800">
            {matched.length}/{MEMORY_PAIRS.length}
          </p>
        </div>
        <button
          onClick={initializeGame}
          className={`flex items-center gap-2 bg-gradient-to-r ${gameColor} text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all`}
        >
          <RotateCcw className="w-5 h-5" />
          Reiniciar
        </button>
      </div>

      {/* Grid de tarjetas */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {cards.map(card => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            disabled={isGameWon}
            className={`aspect-square rounded-2xl font-bold text-lg transition-all transform hover:scale-105 ${
              flipped.includes(card.id) || matched.includes(card.pairId)
                ? `bg-gradient-to-r ${gameColor} text-white shadow-lg`
                : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
            } ${isGameWon && matched.includes(card.pairId) ? 'cursor-default' : 'cursor-pointer'}`}
          >
            {flipped.includes(card.id) || matched.includes(card.pairId) ? card.word : '?'}
          </button>
        ))}
      </div>

      {/* Mensaje de victoria */}
      {isGameWon && (
        <div className="text-center bg-gradient-to-r from-green-100 to-emerald-100 p-8 rounded-2xl border-2 border-green-400">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-green-800 mb-2">¡Lo hiciste!</h2>
          <p className="text-lg text-green-700 mb-4">
            Ganaste con {points} puntos en {moves} movimientos
          </p>
          <button
            onClick={initializeGame}
            className={`bg-gradient-to-r ${gameColor} text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transition-all`}
          >
            Jugar de nuevo
          </button>
        </div>
      )}
    </div>
  );
};

export default MemoryGame;