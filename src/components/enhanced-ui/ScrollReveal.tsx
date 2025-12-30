
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  as?: React.ElementType;
  skipAnimation?: boolean;
}

export function ScrollReveal({
  children,
  className,
  threshold = 0.1,
  direction = 'up',
  distance = 50,
  delay = 0,
  duration = 0.6,
  once = true,
  as = 'div',
  skipAnimation = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  useEffect(() => {
    if (skipAnimation || prefersReducedMotion) {
      setIsVisible(true);
      return;
    }
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '10px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, once, skipAnimation, prefersReducedMotion]);

  // Initial animation state
  const getInitialProps = () => {
    if (skipAnimation || prefersReducedMotion) {
      return { opacity: 1, x: 0, y: 0 };
    }
    
    switch (direction) {
      case 'down':
        return { opacity: 0, y: -distance };
      case 'left':
        return { opacity: 0, x: distance };
      case 'right':
        return { opacity: 0, x: -distance };
      case 'up':
      default:
        return { opacity: 0, y: distance };
    }
  };

  // Create motion props that will be applied to the component
  const motionProps = {
    ref,
    initial: getInitialProps(),
    animate: isVisible ? { opacity: 1, x: 0, y: 0 } : getInitialProps(),
    transition: {
      duration,
      delay,
      ease: [0.215, 0.61, 0.355, 1], // Custom easing for better feel
    },
    className: cn(className)
  };

  // Render the appropriate motion component based on the 'as' prop
  const Component = motion[as as keyof typeof motion] as React.ComponentType<any>;
  
  // If Component is undefined or not valid, fall back to motion.div
  if (!Component) {
    return <motion.div {...motionProps}>{children}</motion.div>;
  }
  
  return <Component {...motionProps}>{children}</Component>;
}
