import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import LessonView from './pages/LessonView';
import GameView from './pages/GameView';
import { bodyPartsLesson } from './data/bodyPartsLesson';
import { adjectivesLesson } from './data/adjectivesLesson';
import { clothingLesson } from './data/clothingLesson';
import { weatherLesson } from './data/weatherLesson';
import { gamesData } from './data/gamesData';

function App() {
  const lessons = [bodyPartsLesson, adjectivesLesson, clothingLesson, weatherLesson];

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Home />} />

        {/* Rutas de lecciones */}
        <Route path="/lesson/:lessonId" element={<LessonView lessons={lessons} />} />

        {/* Rutas de juegos */}
        <Route path="/game/:gameId" element={<GameView games={gamesData} />} />

        {/* Ruta 404 - Redirige al home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;