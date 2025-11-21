import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Home, Volume2 } from 'lucide-react';
import SlideNavigation from '../components/SlideNavigation';
import type { Lesson, Slide } from '../types';

interface LessonViewProps {
  lessons: Lesson[];
}

const LessonView: React.FC<LessonViewProps> = ({ lessons }) => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const lesson = lessons.find(l => l.id === Number(lessonId));

  if (!lesson) {
    navigate('/');
    return null;
  }

  const handlePrevious = () => setCurrentSlide(Math.max(0, currentSlide - 1));
  const handleNext = () => setCurrentSlide(Math.min(lesson.slides.length - 1, currentSlide + 1));
  const handleSlideSelect = (index: number) => setCurrentSlide(index);
  const handleBack = () => navigate('/');

  const slide: Slide = lesson.slides[currentSlide];

  const renderSlideContent = () => {
    switch (slide.type) {
      // INTRO SLIDE
      case 'intro':
        return (
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {slide.image && (
              <div className="lg:w-1/3 flex justify-center">
                <img src={slide.image} alt={slide.title} className="max-h-80 object-contain rounded-2xl" />
              </div>
            )}
            <div className={`${slide.image ? 'lg:w-2/3' : 'w-full'} text-center lg:text-left`}>
              <h1 className="text-5xl font-bold text-gray-800 mb-4">{slide.title}</h1>
              {slide.subtitle && (
                <p className="text-2xl text-blue-600 font-semibold mb-6">{slide.subtitle}</p>
              )}
              {slide.content.text && (
                <p className="text-xl text-gray-700 leading-relaxed">{slide.content.text}</p>
              )}
            </div>
          </div>
        );

      // CHAPTER SLIDE
      case 'chapter':
        return (
          <div className="text-center py-12">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-3xl p-12 max-w-3xl mx-auto shadow-2xl">
              <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
              {slide.subtitle && (
                <p className="text-2xl font-semibold opacity-90 mb-4">{slide.subtitle}</p>
              )}
              {slide.content.text && (
                <p className="text-lg opacity-80">{slide.content.text}</p>
              )}
            </div>
          </div>
        );

      // VOCABULARY SLIDE
      case 'vocabulary':
        return (
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">{slide.title}</h1>
            {slide.content.text && (
              <p className="text-lg text-gray-600 mb-6 text-center">{slide.content.text}</p>
            )}
            <div className="flex flex-col lg:flex-row gap-6">
              {slide.image && (
                <div className="lg:w-1/3 flex justify-center items-start">
                  <img src={slide.image} alt={slide.title} className="max-h-96 object-contain rounded-2xl shadow-lg" />
                </div>
              )}
              <div className={`${slide.image ? 'lg:w-2/3' : 'w-full'} grid ${slide.content.items && slide.content.items.length > 4 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'} gap-4`}>
                {slide.content.items?.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-gray-600 font-medium">{item.spanish}:</p>
                        <h3 className="text-2xl font-bold text-blue-600">{item.english}</h3>
                      </div>
                      <button className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors">
                        <Volume2 className="w-4 h-4 text-white" />
                      </button>
                    </div>
                    {item.description && (
                      <p className="text-sm text-gray-600">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {slide.content.note && (
              <div className="mt-6 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4 text-center">
                <p className="text-yellow-800 font-semibold">💡 {slide.content.note}</p>
              </div>
            )}
            {slide.content.quote && (
              <div className="mt-6 bg-purple-50 border-2 border-purple-300 rounded-xl p-4 text-center">
                <p className="text-purple-800 italic text-lg">"{slide.content.quote}"</p>
              </div>
            )}
          </div>
        );

      // VOCABULARY NUMBERED SLIDE
      case 'vocabulary-numbered':
        return (
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">{slide.title}</h1>
            {slide.content.text && (
              <p className="text-lg text-gray-600 mb-6 text-center">{slide.content.text}</p>
            )}
            <div className="flex flex-col lg:flex-row gap-6">
              {slide.image && (
                <div className="lg:w-2/5 flex justify-center items-start">
                  <img src={slide.image} alt={slide.title} className="max-h-96 object-contain rounded-2xl shadow-lg" />
                </div>
              )}
              <div className={`${slide.image ? 'lg:w-3/5' : 'w-full'} space-y-3`}>
                {slide.content.items?.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                    <span className="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg flex-shrink-0">
                      {item.number || index + 1}
                    </span>
                    <div className="flex-grow">
                      <div className="flex items-baseline gap-2">
                        <span className="text-gray-600">{item.spanish}:</span>
                        <span className="text-xl font-bold text-blue-600">{item.english}</span>
                      </div>
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
          </div>
        );

      // ACTIVITY SLIDE
      case 'activity':
        return (
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{slide.title}</h1>
            {slide.subtitle && (
              <p className="text-2xl text-purple-600 font-semibold mb-6">{slide.subtitle}</p>
            )}
            {slide.content.instruction && (
              <p className="text-lg text-gray-600 mb-8">{slide.content.instruction}</p>
            )}
            <div className="max-w-2xl mx-auto space-y-4">
              {slide.content.activityItems?.map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border-2 border-green-200 text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-gray-700 font-medium">{item.spanish}:</span>
                    <span className="text-2xl font-bold text-green-600">{item.english}</span>
                    <button className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors ml-auto">
                      <Volume2 className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  <p className="text-gray-600 italic">👉 {item.instruction}</p>
                </div>
              ))}
            </div>
          </div>
        );

      // SUMMARY SLIDE (TABLE)
      case 'summary':
        return (
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">{slide.title}</h1>
            {slide.content.text && (
              <p className="text-lg text-gray-600 mb-6 text-center">{slide.content.text}</p>
            )}
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
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
                  {slide.content.summaryItems?.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
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
            {slide.content.instruction && (
              <div className="mt-6 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4 max-w-2xl mx-auto">
                <p className="text-yellow-800 font-semibold text-center">💡 {slide.content.instruction}</p>
              </div>
            )}
          </div>
        );

      // FINAL SLIDE
      case 'final':
        return (
          <div className="text-center py-8">
            <div className="flex flex-col items-center gap-6">
              {slide.image && (
                <img src={slide.image} alt={slide.title} className="max-h-64 object-contain" />
              )}
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-3xl p-8 max-w-2xl shadow-2xl">
                <h1 className="text-4xl font-bold mb-2">{slide.title}</h1>
                {slide.subtitle && (
                  <p className="text-2xl font-semibold opacity-90 mb-4">{slide.subtitle}</p>
                )}
                {slide.content.text && (
                  <p className="text-lg opacity-90">{slide.content.text}</p>
                )}
              </div>
              <div className="text-6xl">🎉🏆🌟</div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className={`bg-gradient-to-r ${lesson.color} text-white shadow-xl`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={handleBack} className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-lg px-4 py-2 rounded-xl transition-all">
              <Home className="w-5 h-5" />
              <span className="font-semibold">Volver</span>
            </button>
            <div className="text-center">
              <h2 className="text-2xl font-bold">{lesson.title}</h2>
              <p className="text-white/80">{lesson.subtitle}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg px-5 py-2 rounded-xl">
              <span className="font-bold">{currentSlide + 1} / {lesson.slides.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
            <div className={`h-full bg-gradient-to-r ${lesson.color} transition-all duration-500`} style={{ width: `${((currentSlide + 1) / lesson.slides.length) * 100}%` }}></div>
          </div>
        </div>

        {/* Slide Content */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mb-8 min-h-[500px] border-4 border-gray-100">
          {renderSlideContent()}
        </div>

        {/* Navigation */}
        <SlideNavigation
          currentSlide={currentSlide}
          totalSlides={lesson.slides.length}
          color={lesson.color}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onSlideSelect={handleSlideSelect}
        />
      </div>
    </div>
  );
};

export default LessonView;