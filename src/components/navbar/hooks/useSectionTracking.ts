
import { useEffect } from 'react';

export const useSectionTracking = (
  activeSection: string | null,
  setActiveSection: (section: string | null) => void,
  isTransitioning: boolean,
  setIsTransitioning: (isTransitioning: boolean) => void
) => {
  // Listen to custom section change events
  useEffect(() => {
    const handleSectionChange = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail?.section) {
        setActiveSection(customEvent.detail.section);
      }
    };
    
    window.addEventListener('sectionChange', handleSectionChange);
    return () => {
      window.removeEventListener('sectionChange', handleSectionChange);
    };
  }, [setActiveSection]);
};
