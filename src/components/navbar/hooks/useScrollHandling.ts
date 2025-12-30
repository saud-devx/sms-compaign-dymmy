
import { useState, useEffect } from 'react';
import { getCurrentSection } from '@/utils/scrollUtils';

export const useScrollHandling = (propActiveSection?: string | null) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(propActiveSection || null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Effect to handle scroll events and identify current section
  useEffect(() => {
    let lastKnownScrollPosition = window.scrollY;
    let ticking = false;
    
    const handleScroll = () => {
      lastKnownScrollPosition = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Update navbar appearance based on scroll position
          setScrolled(lastKnownScrollPosition > 20);
          
          // Only update active section if we're not artificially setting it
          if (!isTransitioning) {
            const currentSection = getCurrentSection();
            if (currentSection && currentSection !== activeSection) {
              setActiveSection(currentSection);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial scroll position check
    setScrolled(window.scrollY > 20);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection, isTransitioning]);

  return { 
    scrolled, 
    activeSection, 
    setActiveSection, 
    isTransitioning, 
    setIsTransitioning 
  };
};
