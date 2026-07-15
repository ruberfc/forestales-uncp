import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../constants';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 seconds for better readability

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden group">
      
      {/* Slides */}
      {HERO_SLIDES.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Ken Burns effect */}
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src={slide.image}
              alt={slide.title} 
              className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
            />
            {/* Multi-layered Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#000000] z-10"></div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-uncp text-white p-4 rounded-full backdrop-blur-md transition-all hidden md:flex items-center justify-center cursor-pointer transform hover:scale-110 border border-white/20"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-uncp text-white p-4 rounded-full backdrop-blur-md transition-all hidden md:flex items-center justify-center cursor-pointer transform hover:scale-110 border border-white/20"
      >
        <ChevronRight size={24} />
      </button>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {HERO_SLIDES.map((slide, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 transform ${
                index === currentSlide 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95 absolute inset-0 pointer-events-none'
              }`}
            >
              <span className="inline-block bg-uncp/80 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.3em] mb-8 shadow-xl backdrop-blur-sm">
                UNCP • Facultad de Forestales
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-8 leading-[1.1] drop-shadow-2xl uppercase tracking-tight">
                {slide.title}
              </h1>
              {slide.subtitle && (
                <p className="text-lg md:text-xl text-gray-200 font-medium mb-12 drop-shadow-md max-w-2xl mx-auto leading-relaxed opacity-90">
                  {slide.subtitle}
                </p>
              )}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="bg-uncp hover:bg-white hover:text-uncp-dark text-white font-black py-5 px-12 rounded-2xl transition-all transform hover:scale-105 shadow-[0_20px_40px_rgba(0,0,0,0.3)] uppercase tracking-widest text-sm">
                  {slide.cta}
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white font-black py-5 px-12 rounded-2xl transition-all backdrop-blur-md border border-white/20 uppercase tracking-widest text-sm">
                  Admisión 2024
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 z-30 flex gap-4">
        {HERO_SLIDES.map((_, idx) => (
          <button 
            key={idx} 
            onClick={() => goToSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
              idx === currentSlide ? 'w-12 bg-uncp' : 'w-6 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          ></button>
        ))}
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 animate-bounce hidden md:block opacity-50">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;