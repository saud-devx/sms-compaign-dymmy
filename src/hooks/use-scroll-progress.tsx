
import { useEffect, useState } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // Always start as visible

  useEffect(() => {
    const updateProgress = () => {
      // Calculate scroll progress
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const percentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      
      // Update progress state
      setProgress(Math.min(Math.max(percentage, 0), 100));
    };

    // Add event listener for scroll events
    window.addEventListener('scroll', updateProgress);
    
    // Initial call to set initial progress
    updateProgress();
    
    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  return { progress, isVisible };
}
