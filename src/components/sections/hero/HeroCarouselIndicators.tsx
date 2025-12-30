
import React from 'react';

interface HeroCarouselIndicatorsProps {
  totalSlides: number;
  currentSlide: number;
  onSelectSlide: (index: number) => void;
}

const HeroCarouselIndicators: React.FC<HeroCarouselIndicatorsProps> = ({ totalSlides, currentSlide, onSelectSlide }) => {
  return (
    <div className="absolute -bottom-4 left-0 w-full flex justify-center gap-2 z-20">
      {[...Array(totalSlides)].map((_, idx) => (
        <button
          key={idx}
          onClick={() => onSelectSlide(idx)}
          className={`h-3 rounded-full transition-all duration-300 ${
            currentSlide === idx ? 'bg-primary w-10' : 'bg-primary/30 w-3 hover:bg-primary/50'
          }`}
          aria-label={`Go to slide ${idx + 1}`}
        />
      ))}
    </div>
  );
};

export default HeroCarouselIndicators;
