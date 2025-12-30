
import { useState, useEffect, useCallback } from 'react';
import useDevicePerformance from '@/components/tech-nodes/hooks/useDevicePerformance';

export const useHeroCarousel = () => {
  const [api, setApi] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  // Get reducedMotion preference from the device performance hook
  const { reducedMotion } = useDevicePerformance();

  // Use intersection observer to pause animations when not visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    const heroSection = document.querySelector('section');
    if (heroSection) {
      observer.observe(heroSection);
    }
    
    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  // Handle auto-sliding with simple timer
  useEffect(() => {
    if (!api || isPaused || !isVisible) return;
    
    let autoSlideTimeout: NodeJS.Timeout;
    
    const startAutoSlide = () => {
      autoSlideTimeout = setTimeout(() => {
        if (api.canScrollNext()) {
          api.scrollNext();
        } else {
          api.scrollTo(0);
        }
      }, 3000); // Changed from 5000 to 3000 (3 seconds between slides)
    };
    
    startAutoSlide();
    
    return () => {
      clearTimeout(autoSlideTimeout);
    };
  }, [api, currentSlide, isPaused, isVisible]);

  // Setup carousel event listeners
  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };
    
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api, currentSlide]);

  // Handle user interaction with carousel
  const handleCarouselInteraction = useCallback(() => {
    setIsPaused(true);
    
    // Resume auto-sliding after user interaction
    const timeout = setTimeout(() => {
      setIsPaused(false);
    }, 3000); // Changed from 5000 to 3000 (resume auto-sliding after 3 seconds)
    
    return () => clearTimeout(timeout);
  }, []);

  return {
    api,
    setApi,
    currentSlide,
    isPaused,
    isVisible,
    reducedMotion,
    handleCarouselInteraction
  };
};
