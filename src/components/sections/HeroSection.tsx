
import React from 'react';
import { useHeroCarousel } from '@/hooks/useHeroCarousel';
import { HERO_SLIDES } from '@/data/heroSlides';
import HeroBackground from './hero/HeroBackground';
import ScrollDownIndicator from './hero/ScrollDownIndicator';
import HeroCarousel from './hero/HeroCarousel';
import { useBreakpoint } from '@/components/hooks/use-breakpoint';

const HeroSection = () => {
  const {
    api,
    setApi,
    currentSlide,
    isVisible,
    reducedMotion,
    handleCarouselInteraction
  } = useHeroCarousel();
  
  const { isMobile } = useBreakpoint();

  return (
    <section 
      className={`relative min-h-[90vh] ${isMobile ? 'pt-10' : 'pt-16'} pb-16 bg-gradient-to-br from-white via-blue-50/30 to-green-50/30 dark:from-gray-900 dark:via-gray-800/90 dark:to-gray-900 flex items-center overflow-hidden z-10`}
    >
      <HeroBackground isVisible={isVisible} reducedMotion={reducedMotion} />
      
      <div className="relative w-full h-full z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroCarousel
          slides={HERO_SLIDES}
          currentSlide={currentSlide}
          setApi={setApi}
          api={api}
          onInteraction={handleCarouselInteraction}
        />
      </div>

      <ScrollDownIndicator isVisible={isVisible} reducedMotion={reducedMotion} />
    </section>
  );
};

export default HeroSection;
