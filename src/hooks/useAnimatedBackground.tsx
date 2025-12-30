
import { useEffect, useRef, useState, useCallback } from 'react';
import { DEFAULT_COLORS, ANIM_TYPES, PARTICLE_SHAPES, getRandom } from '@/components/animated-background/constants';
import { getAnimationVariant, getBorderRadius, getOptimizedParticleCount } from '@/components/animated-background/animation-utils';
import { Particle } from '@/components/animated-background/types';

interface UseAnimatedBackgroundProps {
  count?: number;
  size?: number;
  speed?: number;
  colors?: string[];
  excludeFooter?: boolean;
}

export const useAnimatedBackground = ({
  count = 42,
  size = 80,
  speed = 45,
  colors = DEFAULT_COLORS,
  excludeFooter = true,
}: UseAnimatedBackgroundProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isLowPerfDevice, setIsLowPerfDevice] = useState(false);
  const [reducedMotionPreferred, setReducedMotionPreferred] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const dimensionsRef = useRef({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // Detect low performance devices
  useEffect(() => {
    const checkPerformance = () => {
      // Check for mobile devices or devices with limited memory
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const isLowMemory = 'deviceMemory' in navigator && navigator.deviceMemory !== undefined && navigator.deviceMemory < 4;
      
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setReducedMotionPreferred(prefersReducedMotion);
      
      // Adjust performance settings based on device capabilities
      setIsLowPerfDevice(isMobile || isLowMemory || prefersReducedMotion);
    };
    
    checkPerformance();
    
    // Listen for changes to reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setReducedMotionPreferred(e.matches);
      setIsLowPerfDevice(prev => prev || e.matches);
    };
    
    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  // Memoized function to generate particles
  const generateParticles = useCallback(() => {
    const { width, height } = dimensionsRef.current;
    
    const getFooterOffset = () => {
      if (!excludeFooter) return 0;
      // Try to estimate footer height, fallback if not found
      const footer = document.querySelector('footer');
      if (footer) {
        const rect = (footer as HTMLElement).getBoundingClientRect();
        return window.innerHeight - rect.top + 16;
      }
      return 120;
    };

    // Use the optimizer to get the appropriate particle count
    const optimizedCount = getOptimizedParticleCount(count, isLowPerfDevice);
    
    // Generate fewer particles for reduced motion
    const finalCount = reducedMotionPreferred ? Math.floor(optimizedCount * 0.6) : optimizedCount;
    
    return Array.from({ length: finalCount }).map(() => ({
      x: getRandom(-size, width + size),
      y: getRandom(0, height - getFooterOffset()),
      size: getRandom(size / 1.8, size * 1.65),
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: PARTICLE_SHAPES[Math.floor(Math.random() * PARTICLE_SHAPES.length)],
      blur: getRandom(1.5, 8),
      duration: getRandom(speed * 0.7, speed * 1.7),
      delay: getRandom(0, 13),
      direction: Math.random() > 0.5 ? 1 : -1,
      animType: ANIM_TYPES[Math.floor(Math.random() * ANIM_TYPES.length)],
      opacity: getRandom(0.19, 0.41),
    }));
  }, [count, size, speed, colors, excludeFooter, isLowPerfDevice, reducedMotionPreferred]);

  // Handle resize with debouncing and ResizeObserver
  useEffect(() => {
    const updateDimensions = () => {
      dimensionsRef.current = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    };

    // Initial update
    updateDimensions();
    setParticles(generateParticles());
    
    // Debounced resize handler to prevent excessive rerenders
    let resizeTimeout: NodeJS.Timeout;
    const debouncedResize = () => {
      // Cancel previous resize handler if it exists
      clearTimeout(resizeTimeout);
      
      // Update dimensions immediately for responsive feel
      updateDimensions();
      
      // Debounce particle regeneration to avoid heavy computation during resize
      resizeTimeout = setTimeout(() => {
        setParticles(generateParticles());
      }, 200);
    };
    
    // Use ResizeObserver for better performance than resize event
    if (containerRef.current && !resizeObserverRef.current) {
      resizeObserverRef.current = new ResizeObserver(() => {
        debouncedResize();
      });
      resizeObserverRef.current.observe(containerRef.current);
    }
    
    // Fallback resize listener
    window.addEventListener('resize', debouncedResize);
    
    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
        resizeObserverRef.current = null;
      }
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(resizeTimeout);
    };
  }, [generateParticles]);

  // Memoized animation getter to prevent recreation on every render
  const getAnim = useCallback((particle: Particle) => {
    return getAnimationVariant(particle, isLowPerfDevice);
  }, [isLowPerfDevice]);

  return {
    particles,
    isLowPerfDevice,
    reducedMotionPreferred,
    containerRef,
    getAnim,
    getBorderRadius
  };
};
