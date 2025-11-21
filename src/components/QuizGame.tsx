import React, { useState } from 'react';
import { RotateCcw, CheckCircle, XCircle } from 'lucide-react';

// Datos del quiz - Adjetivos
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: '¿Cuál es el opuesto de "big"?',
    options: ['Small', 'Tall', 'Long', 'Wide'],
    correct: 0,
  },
  {
    id: 2,
    question: '"Happy" significa:',
    options: ['Triste', 'Feliz', 'Enojado', 'Cansado'],
    correct: 1,
  },
  {
    id: 3,
    question: '¿Cuál NO es un adjetivo?',
    options: ['Beautiful', 'Run', 'Cold', 'Smart'],
    correct: 1,
  },
  {
    id: 4,
    question: '"Hot" es lo opuesto de:',
    options: ['Cold', 'Warm', 'Cool', 'Soft'],
    correct: 0,
  },
  {
    id: 5,
    question: '"Fast" significa:',
    options: ['Lento', 'Rápido', 'Fuerte', 'Débil'],
    correct: 1,
  },
];

interface QuizGameProps {
  gameColor: string;
  onGameEnd?: (score: number) => void;
}

const QuizGame: React.FC<QuizGameProps> = ({ gameColor, onGameEnd }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  const question = QUIZ_QUESTIONS[currentQuestion];
  const isLastQuestion = currentQuestion === QUIZ_QUESTIONS.length - 1;

  const handleAnswerClick = (optionIndex: number) => {
    if (answered) return;

    setSelectedAnswer(optionIndex);
    const correct = optionIndex === question.correct;
    setIsCorrect(correct);
    setAnswered(true);

    if (correct) {
      setPoints(points + 10);
    }
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      onGameEnd?.(points);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setSelectedAnswer(null);
      setIsCorrect(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setPoints(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setIsCorrect(false);
  };

  const isGameComplete = isLastQuestion && answered;

  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600 font-semibold">
            Pregunta {currentQuestion + 1}/{QUIZ_QUESTIONS.length}
          </span>
          <span className={`text-2xl font-bold bg-gradient-to-r ${gameColor} bg-clip-text text-transparent`}>
            {points} pts
          </span>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-2">
          <div
            className={`bg-gradient-to-r ${gameColor} h-2 rounded-full transition-all`}
            style={{ width: `${((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-12 mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          {question.question}
        </h2>

        {/* Options */}
        <div className="space-y-4 mb-8">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              disabled={answered}
              className={`w-full p-5 text-xl font-bold rounded-2xl transition-all transform hover:scale-105 ${
                selectedAnswer === index
                  ? isCorrect
                    ? `bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg`
                    : `bg-gradient-to-r from-red-400 to-red-600 text-white shadow-lg`
                  : selectedAnswer !== null && index === question.correct
                  ? `bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg`
                  : `bg-gray-100 text-gray-800 hover:bg-gray-200 border-2 border-gray-300 ${answered ? 'cursor-default' : 'cursor-pointer'}`
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {selectedAnswer === index && isCorrect && <CheckCircle className="w-6 h-6" />}
                {selectedAnswer === index && !isCorrect && <XCircle className="w-6 h-6" />}
              </div>
            </button>
          ))}
        </div>

        {/* Feedback Message */}
        {answered && (
          <div className={`text-center mb-8 text-lg font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
            {isCorrect ? '✅ ¡Correcto!' : '❌ Respuesta incorrecta'}
          </div>
        )}

        {/* Next Button */}
        {answered && (
          <button
            onClick={handleNextQuestion}
            className={`w-full bg-gradient-to-r ${gameColor} text-white font-bold py-4 px-8 rounded-2xl hover:shadow-lg transition-all text-lg`}
          >
            {isLastQuestion ? 'Finalizar Quiz' : 'Siguiente Pregunta'}
          </button>
        )}
      </div>

      {/* Game Complete Message */}
      {isGameComplete && (
        <div className="text-center bg-gradient-to-r from-green-100 to-emerald-100 p-8 rounded-2xl border-2 border-green-400">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-green-800 mb-2">¡Quiz Completado!</h2>
          <p className="text-lg text-green-700 mb-6">
            Obtuviste {points} puntos de {QUIZ_QUESTIONS.length * 10}
          </p>
          <button
            onClick={handleRestart}
            className={`flex items-center gap-2 bg-gradient-to-r ${gameColor} text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transition-all mx-auto`}
          >
            <RotateCcw className="w-5 h-5" />
            Intentar de Nuevo
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizGame;