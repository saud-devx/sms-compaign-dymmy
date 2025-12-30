
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import HeroSlideContent from './HeroSlideContent';
import HeroCarouselIndicators from './HeroCarouselIndicators';

interface HeroCarouselProps {
  slides: {
    title: React.ReactNode;
    description: string;
    buttons: React.ReactNode[];
  }[];
  currentSlide: number;
  setApi: (api: any) => void;
  api: any;
  onInteraction: () => void;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ 
  slides, 
  currentSlide, 
  setApi, 
  api,
  onInteraction 
}) => {
  return (
    <Carousel
      opts={{
        loop: true,
        align: 'center',
        dragFree: false,
      }}
      setApi={setApi}
      className="w-full hero-carousel"
      onMouseEnter={onInteraction}
      onTouchStart={onInteraction}
    >
      <CarouselContent>
        {slides.map((slide, i) => (
          <CarouselItem key={i} className="w-full">
            <div className="w-full">
              {currentSlide === i && (
                <HeroSlideContent
                  title={slide.title}
                  description={slide.description}
                  buttons={slide.buttons}
                />
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
      <HeroCarouselIndicators 
        totalSlides={slides.length}
        currentSlide={currentSlide}
        onSelectSlide={(index) => {
          if (api && typeof api.scrollTo === 'function') {
            api.scrollTo(index);
          }
        }}
      />
    </Carousel>
  );
};

export default HeroCarousel;
