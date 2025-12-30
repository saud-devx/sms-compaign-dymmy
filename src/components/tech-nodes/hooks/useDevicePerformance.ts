
import { useState, useEffect } from 'react';
import { detectDevicePerformance } from '../utils';

/**
 * Hook to detect device performance and reduced motion preference
 */
export const useDevicePerformance = () => {
  const [lowPerformanceMode, setLowPerformanceMode] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  
  /**
   * useEffect hook to detect device performance and reduced motion preference.
   * Sets the state for lowPerformanceMode and reducedMotion based on device capabilities.
   */
  useEffect(() => {
    const { lowPerformanceMode, reducedMotion } = detectDevicePerformance();
    
    setReducedMotion(reducedMotion);
    setLowPerformanceMode(lowPerformanceMode);
    
    // Listen for changes to reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionPreferenceChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
      setLowPerformanceMode(prev => prev || event.matches);
    };
    
    mediaQuery.addEventListener('change', handleMotionPreferenceChange);
    return () => mediaQuery.removeEventListener('change', handleMotionPreferenceChange);
  }, []);

  return { lowPerformanceMode, reducedMotion };
};

export default useDevicePerformance;
