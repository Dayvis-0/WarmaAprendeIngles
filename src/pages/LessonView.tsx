import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Home, Volume2, ChevronLeft, ChevronRight, Maximize, Minimize, Download } from 'lucide-react';
import type { Lesson, Slide } from '../types';

interface LessonViewProps {
  lessons: Lesson[];
}

const LessonView: React.FC<LessonViewProps> = ({ lessons }) => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const lesson = lessons.find(l => l.id === Number(lessonId));

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlide(prev => Math.min((lesson?.slides.length || 1) - 1, prev + 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlide(prev => Math.max(0, prev - 1));
      } else if (e.key === 'Escape' && isFullscreen) {
        handleExitFullscreen();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lesson, isFullscreen]);

  // Detectar cambios en fullscreen
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  if (!lesson) {
    navigate('/');
    return null;
  }

  const handlePrevious = () => setCurrentSlide(Math.max(0, currentSlide - 1));
  const handleNext = () => setCurrentSlide(Math.min(lesson.slides.length - 1, currentSlide + 1));
  const handleBack = () => navigate('/');

  const toggleFullscreen = () => {
    if (!isFullscreen && contentRef.current) {
      contentRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleExitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  const handleDownload = () => {
    if (lesson?.pptFile) {
      const link = document.createElement('a');
      link.href = lesson.pptFile;
      link.download = lesson.pptFile.split('/').pop() || 'presentacion.pptx';
      link.click();
    }
  };

  const slide: Slide = lesson.slides[currentSlide];

  const renderSlideContent = () => {
    switch (slide.type) {
      // INTRO
      case 'intro':
        return (
          <div className="flex flex-col lg:flex-row items-center gap-8 h-full">
            {slide.image && (
              <div className="lg:w-1/3 flex justify-center">
                <img src={slide.image} alt={slide.title} className="max-h-72 object-contain" />
              </div>
            )}
            <div className={`${slide.image ? 'lg:w-2/3' : 'w-full'} text-center lg:text-left`}>
              <h1 className="text-5xl lg:text-6xl font-bold text-blue-700 mb-4">{slide.title}</h1>
              {slide.subtitle && (
                <p className="text-2xl text-purple-600 font-semibold mb-6">{slide.subtitle}</p>
              )}
              {slide.content.text && (
                <p className="text-xl text-gray-700 leading-relaxed">{slide.content.text}</p>
              )}
            </div>
          </div>
        );

      // CHAPTER + VOCABULARY
      case 'chapter-vocabulary':
        return (
          <div>
            <div className="text-center mb-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-blue-700 mb-2">{slide.title}</h1>
              {slide.subtitle && (
                <p className="text-2xl text-purple-600 font-semibold">{slide.subtitle}</p>
              )}
              {slide.content.text && (
                <p className="text-lg text-gray-600 mt-2">{slide.content.text}</p>
              )}
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {slide.content.items?.map((item, i) => (
                <div key={i} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-5 border-l-4 border-blue-500 shadow-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-gray-600 font-medium">{item.spanish}: </span>
                      <span className="text-2xl font-bold text-blue-600">{item.english}</span>
                    </div>
                    <button className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors">
                      <Volume2 className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  {item.description && (
                    <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
            {slide.content.quote && (
              <div className="mt-6 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4 text-center">
                <p className="text-yellow-800 italic">"{slide.content.quote}"</p>
              </div>
            )}
          </div>
        );

      // CHAPTER + VOCABULARY NUMBERED
      case 'chapter-vocabulary-numbered':
        return (
          <div>
            <div className="text-center mb-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-blue-700 mb-2">{slide.title}</h1>
              {slide.subtitle && (
                <p className="text-2xl text-purple-600 font-semibold">{slide.subtitle}</p>
              )}
              {slide.content.text && (
                <p className="text-lg text-gray-600 mt-2">{slide.content.text}</p>
              )}
            </div>
            <div className="space-y-3 max-w-3xl mx-auto">
              {slide.content.items?.map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-md border-l-4 border-blue-500">
                  <span className="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg flex-shrink-0">
                    {item.number || i + 1}
                  </span>
                  <div className="flex-grow">
                    <span className="text-gray-600">{item.spanish}: </span>
                    <span className="text-xl font-bold text-blue-600">{item.english}</span>
                    {item.description && (
                      <p className="text-sm text-gray-500">{item.description}</p>
                    )}
                  </div>
                  <button className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors flex-shrink-0">
                    <Volume2 className="w-4 h-4 text-white" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      // VOCABULARY
      case 'vocabulary':
        return (
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-blue-700 mb-2 text-center">{slide.title}</h1>
            {slide.content.text && (
              <p className="text-lg text-gray-600 mb-6 text-center">{slide.content.text}</p>
            )}
            <div className={`flex flex-col ${slide.imagePosition === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6`}>
              <div className={`${slide.image ? 'lg:w-2/3' : 'w-full'}`}>
                <div className="grid md:grid-cols-2 gap-4">
                  {slide.content.items?.map((item, i) => (
                    <div key={i} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border-l-4 border-blue-500 shadow-md">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-gray-600 font-medium">{item.spanish}: </span>
                          <span className="text-xl font-bold text-blue-600">{item.english}</span>
                        </div>
                        <button className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors">
                          <Volume2 className="w-4 h-4 text-white" />
                        </button>
                      </div>
                      {item.description && (
                        <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {slide.image && (
                <div className="lg:w-1/3 flex justify-center items-start">
                  <img src={slide.image} alt={slide.title} className="max-h-80 object-contain rounded-xl shadow-lg" />
                </div>
              )}
            </div>
            {slide.content.note && (
              <div className="mt-6 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4 text-center">
                <p className="text-yellow-800 font-semibold">💡 {slide.content.note}</p>
              </div>
            )}
          </div>
        );

      // ACTIVITY
      case 'activity':
        return (
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-blue-700 mb-2 text-center">{slide.title}</h1>
            {slide.subtitle && (
              <p className="text-xl text-purple-600 font-semibold mb-4 text-center">{slide.subtitle}</p>
            )}
            {slide.content.instruction && (
              <p className="text-lg text-gray-600 mb-6 text-center">{slide.content.instruction}</p>
            )}
            <div className="grid md:grid-cols-3 gap-4">
              {slide.content.activityItems?.map((item, i) => (
                <div key={i} className="bg-gradient-to-b from-green-50 to-emerald-100 rounded-xl p-4 border-2 border-green-300 shadow-md text-center">
                  {item.image && (
                    <img src={item.image} alt={item.english} className="h-24 object-contain mx-auto mb-3" />
                  )}
                  <p className="text-gray-700 font-medium">{item.spanish}: <span className="text-xl font-bold text-green-600">{item.english}</span></p>
                  <p className="text-sm text-gray-600 mt-2 italic">{item.instruction}</p>
                </div>
              ))}
            </div>
            {slide.content.extraImage && (
              <div className="flex justify-center mt-4">
                <img src={slide.content.extraImage} alt="Extra" className="h-24 object-contain" />
              </div>
            )}
          </div>
        );

      // SUMMARY
      case 'summary':
        return (
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-blue-700 mb-2 text-center">{slide.title}</h1>
            {slide.content.text && (
              <p className="text-lg text-gray-600 mb-6 text-center">{slide.content.text}</p>
            )}
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <div className={`${slide.image ? 'lg:w-2/3' : 'w-full'}`}>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                        <th className="py-3 px-4 text-left">Español</th>
                        <th className="py-3 px-4 text-left">English</th>
                        <th className="py-3 px-4 text-left">Pronunciación</th>
                        <th className="py-3 px-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {slide.content.summaryItems?.map((item, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="py-3 px-4 font-medium text-gray-700">{item.spanish}</td>
                          <td className="py-3 px-4 font-bold text-blue-600">{item.english}</td>
                          <td className="py-3 px-4 text-purple-600 italic">{item.pronunciation}</td>
                          <td className="py-3 px-4">
                            <button className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors">
                              <Volume2 className="w-3 h-3 text-white" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {slide.image && (
                <div className="lg:w-1/3 flex justify-center">
                  <img src={slide.image} alt={slide.title} className="max-h-64 object-contain rounded-xl shadow-lg" />
                </div>
              )}
            </div>
          </div>
        );

      // FINAL
      case 'final':
        return (
          <div className="text-center py-4">
            {slide.content.finalTips ? (
              // Final con tips (para clothing)
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-pink-700 mb-4">{slide.title}</h1>
                {slide.content.text && (
                  <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">{slide.content.text}</p>
                )}
                <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  {slide.content.finalTips.map((tip, i) => (
                    <div key={i} className="bg-gradient-to-b from-yellow-50 to-orange-50 rounded-xl p-4 border-2 border-yellow-300 shadow-md text-center">
                      <div className="text-4xl mb-2">{tip.icon}</div>
                      <h3 className="text-lg font-bold text-orange-700 mb-2">{tip.title}</h3>
                      <p className="text-gray-600 text-sm">{tip.description}</p>
                    </div>
                  ))}
                </div>
                <div className="text-5xl mt-6">🎉⭐🏆</div>
              </div>
            ) : (
              // Final normal
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                {slide.image && (
                  <div className="lg:w-1/3">
                    <img src={slide.image} alt={slide.title} className="max-h-64 object-contain mx-auto" />
                  </div>
                )}
                <div className={`${slide.image ? 'lg:w-2/3' : 'w-full'}`}>
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-3xl p-8 shadow-2xl">
                    <h1 className="text-4xl font-bold mb-2">{slide.title}</h1>
                    {slide.subtitle && (
                      <p className="text-2xl font-semibold opacity-90 mb-4">{slide.subtitle}</p>
                    )}
                    {slide.content.text && (
                      <p className="text-lg opacity-90">{slide.content.text}</p>
                    )}
                  </div>
                  <div className="text-6xl mt-6">🎉🏆🌟</div>
                </div>
              </div>
            )}
          </div>
        );

      // ADJECTIVES GRID
      case 'adjectives-grid':
        return (
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-purple-700 mb-2 text-center">{slide.title}</h1>
            {slide.subtitle && (
              <p className="text-lg text-gray-600 mb-6 text-center">{slide.subtitle}</p>
            )}
            <div className={`grid ${slide.content.items?.length === 2 ? 'md:grid-cols-2 max-w-3xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-4'} gap-4`}>
              {slide.content.items?.map((item, i) => (
                <div key={i} className="bg-gradient-to-b from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-200 shadow-md text-center hover:shadow-lg transition-shadow">
                  {item.image ? (
                    <img src={item.image} alt={item.english} className="h-24 object-contain mx-auto mb-3" />
                  ) : item.icon ? (
                    <div className="text-6xl mb-3">{item.icon}</div>
                  ) : null}
                  <h3 className="text-2xl font-bold text-purple-600">{item.english}</h3>
                  <p className="text-gray-600 font-medium">Meaning: {item.spanish}</p>
                  {item.description && (
                    <p className="text-sm text-gray-500 italic mt-2">{item.description}</p>
                  )}
                  <button className="mt-2 bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors">
                    <Volume2 className="w-4 h-4 text-white" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      // DIALOGUES
      case 'dialogues':
        return (
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-purple-700 mb-2 text-center">{slide.title}</h1>
            {slide.subtitle && (
              <p className="text-lg text-gray-600 mb-6 text-center">{slide.subtitle}</p>
            )}
            <div className="grid md:grid-cols-3 gap-4">
              {slide.content.dialogues?.map((dialogue, i) => (
                <div key={i} className="bg-gradient-to-b from-blue-50 to-purple-50 rounded-xl p-4 border-2 border-blue-200 shadow-md">
                  {dialogue.image && (
                    <img src={dialogue.image} alt="dialogue" className="h-20 object-contain mx-auto mb-3" />
                  )}
                  <div className="space-y-2">
                    {dialogue.speakers.map((speaker, j) => (
                      <div key={j} className="bg-white rounded-lg p-2 shadow-sm">
                        <span className="font-bold text-purple-600">{speaker}: </span>
                        <span className="text-gray-700">{dialogue.lines[j]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      // ACTIVITIES
      case 'activities':
        return (
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-purple-700 mb-2 text-center">{slide.title}</h1>
            {slide.subtitle && (
              <p className="text-lg text-gray-600 mb-6 text-center">{slide.subtitle}</p>
            )}
            <div className="grid md:grid-cols-2 gap-6">
              {slide.content.activities?.map((activity, i) => (
                <div key={i} className="bg-gradient-to-b from-green-50 to-emerald-50 rounded-xl p-5 border-2 border-green-200 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-green-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">{i + 1}</span>
                    <h3 className="text-xl font-bold text-green-700">{activity.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-3 text-sm">{activity.instruction}</p>
                  <div className="space-y-2">
                    {activity.questions.map((q, j) => (
                      <p key={j} className="text-gray-700 bg-white rounded-lg p-2 text-sm">{j + 1}. {q}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      // OBJECTIVES
      case 'objectives':
        return (
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-pink-700 mb-6 text-center">{slide.title}</h1>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-2/3">
                <div className="grid md:grid-cols-2 gap-4">
                  {slide.content.objectives?.map((obj, i) => (
                    <div key={i} className={`bg-gradient-to-br from-pink-50 to-rose-100 rounded-xl p-5 border-2 border-pink-200 shadow-md ${i === 2 ? 'md:col-span-2' : ''}`}>
                      <div className="text-4xl mb-2">{obj.icon}</div>
                      <h3 className="text-xl font-bold text-pink-700 mb-2">{obj.title}</h3>
                      <p className="text-gray-600">{obj.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              {slide.image && (
                <div className="lg:w-1/3 flex justify-center">
                  <img src={slide.image} alt={slide.title} className="max-h-64 object-contain rounded-xl shadow-lg" />
                </div>
              )}
            </div>
          </div>
        );

      // CLOTHING VOCABULARY
      case 'clothing-vocabulary':
        return (
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-pink-700 mb-6 text-center">{slide.title}</h1>
            <div className={`grid ${slide.content.items?.length === 2 ? 'md:grid-cols-2 max-w-3xl mx-auto' : 'md:grid-cols-3'} gap-6`}>
              {slide.content.items?.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border-2 border-pink-200 shadow-lg text-center hover:shadow-xl transition-shadow">
                  {item.image && (
                    <img src={item.image} alt={item.english} className="h-32 object-contain mx-auto mb-4" />
                  )}
                  <h3 className="text-2xl font-bold text-pink-600">{item.english}</h3>
                  <p className="text-gray-600 font-medium">{item.spanish}</p>
                  {item.description && (
                    <p className="text-sm text-gray-500 italic mt-2 bg-pink-50 rounded-lg p-2">{item.description}</p>
                  )}
                  <button className="mt-3 bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors">
                    <Volume2 className="w-4 h-4 text-white" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      // PHRASES
      case 'phrases':
        return (
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-pink-700 mb-6 text-center">{slide.title}</h1>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className={`${slide.image ? 'lg:w-2/3' : 'w-full'}`}>
                <div className="space-y-3">
                  {slide.content.phrases?.map((phrase, i) => (
                    <div key={i} className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4 border-l-4 border-pink-500 shadow-md flex items-center justify-between">
                      <div>
                        <p className="text-lg font-bold text-pink-700">"{phrase.english}"</p>
                        <p className="text-gray-600">— {phrase.spanish}</p>
                      </div>
                      <button className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors">
                        <Volume2 className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              {slide.image && (
                <div className="lg:w-1/3 flex justify-center">
                  <img src={slide.image} alt={slide.title} className="max-h-64 object-contain rounded-xl shadow-lg" />
                </div>
              )}
            </div>
          </div>
        );

      // GAME ACTIVITY
      case 'game-activity':
        return (
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-pink-700 mb-2 text-center">{slide.title}</h1>
            {slide.content.text && (
              <p className="text-lg text-gray-600 mb-6 text-center">{slide.content.text}</p>
            )}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className={`${slide.image ? 'lg:w-2/3' : 'w-full'}`}>
                <div className="grid md:grid-cols-3 gap-4">
                  {slide.content.steps?.map((step, i) => (
                    <div key={i} className="bg-gradient-to-b from-yellow-50 to-orange-50 rounded-xl p-4 border-2 border-yellow-300 shadow-md text-center">
                      <div className="text-4xl mb-2">{step.icon}</div>
                      <h3 className="text-lg font-bold text-orange-700 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              {slide.image && (
                <div className="lg:w-1/3 flex justify-center">
                  <img src={slide.image} alt={slide.title} className="max-h-48 object-contain rounded-xl shadow-lg" />
                </div>
              )}
            </div>
          </div>
        );

      // HANDS-ON ACTIVITY
      case 'hands-on-activity':
        return (
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-pink-700 mb-4 text-center">{slide.title}</h1>
            {slide.content.text && (
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6 mb-6 text-center border-2 border-pink-200">
                <p className="text-lg text-gray-700">{slide.content.text}</p>
              </div>
            )}
            {slide.content.images && (
              <div className="flex justify-center gap-4 flex-wrap">
                {slide.content.images.map((img, i) => (
                  <img key={i} src={img} alt={`Activity ${i + 1}`} className="h-40 object-contain rounded-xl shadow-lg" />
                ))}
              </div>
            )}
          </div>
        );

      // FILL BLANK TEST
      case 'fill-blank-test':
        return (
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-pink-700 mb-6 text-center">{slide.title}</h1>
            <div className="max-w-2xl mx-auto space-y-4">
              {slide.content.questions?.map((q, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border-2 border-pink-200 shadow-md">
                  <div className="flex items-start gap-3">
                    <span className="bg-pink-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">{i + 1}</span>
                    <div className="flex-grow">
                      <p className="text-lg text-gray-700 mb-2">{q.sentence}</p>
                      <p className="text-pink-600 font-bold">Answer: {q.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      // TIPS
      case 'tips':
        return (
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-pink-700 mb-6 text-center">{slide.title}</h1>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className={`${slide.image ? 'lg:w-2/3' : 'w-full'}`}>
                <div className="grid md:grid-cols-3 gap-4">
                  {slide.content.tips?.map((tip, i) => (
                    <div key={i} className="bg-gradient-to-b from-blue-50 to-indigo-50 rounded-xl p-4 border-2 border-blue-200 shadow-md text-center">
                      <div className="text-4xl mb-2">{tip.icon}</div>
                      <h3 className="text-lg font-bold text-blue-700 mb-2">{tip.title}</h3>
                      <p className="text-gray-600 text-sm">{tip.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              {slide.image && (
                <div className="lg:w-1/3 flex justify-center">
                  <img src={slide.image} alt={slide.title} className="max-h-48 object-contain rounded-xl shadow-lg" />
                </div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className={`bg-gradient-to-r ${lesson.color} text-white shadow-xl print:hidden`}>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <button onClick={handleBack} className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-3 py-2 rounded-xl transition-all">
              <Home className="w-5 h-5" />
              <span className="font-semibold hidden sm:inline">Volver</span>
            </button>
            <div className="text-center">
              <h2 className="text-xl lg:text-2xl font-bold">{lesson.title}</h2>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={handleDownload} className="bg-white/20 hover:bg-white/30 p-2 rounded-xl transition-all" title="Descargar PPT">
                <Download className="w-5 h-5" />
              </button>
              <button onClick={toggleFullscreen} className="bg-white/20 hover:bg-white/30 p-2 rounded-xl transition-all" title="Agrandar contenido (F)">
                {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
              </button>
              <div className="bg-white/20 px-3 py-2 rounded-xl">
                <span className="font-bold">{currentSlide + 1} / {lesson.slides.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`max-w-6xl mx-auto px-4 py-6 ${isFullscreen ? 'h-[calc(100vh-120px)] flex flex-col' : ''}`}>
        {/* Progress Bar */}
        <div className="mb-4 print:hidden">
          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className={`h-full bg-gradient-to-r ${lesson.color} transition-all duration-500`} style={{ width: `${((currentSlide + 1) / lesson.slides.length) * 100}%` }}></div>
          </div>
        </div>

        {/* Slide Content */}
        <div 
          ref={contentRef}
          className={`bg-white rounded-3xl shadow-2xl p-6 lg:p-10 border-4 border-gray-100 ${isFullscreen ? 'fixed inset-0 z-50 rounded-none border-0 overflow-auto flex items-center justify-center' : 'min-h-[450px]'}`}
        >
          <div className={isFullscreen ? 'max-w-6xl w-full p-8' : 'w-full'}>
            {renderSlideContent()}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-6 print:hidden">
          <button
            onClick={handlePrevious}
            disabled={currentSlide === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              currentSlide === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Anterior</span>
          </button>

          <div className="flex gap-2">
            {lesson.slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentSlide ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentSlide === lesson.slides.length - 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              currentSlide === lesson.slides.length - 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg'
            }`}
          >
            <span className="hidden sm:inline">Siguiente</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Keyboard hint */}
        <p className="text-center text-gray-400 text-sm mt-4 print:hidden">
          Usa las teclas ← → para navegar • F para pantalla completa
        </p>
      </div>
    </div>
  );
};

export default LessonView;