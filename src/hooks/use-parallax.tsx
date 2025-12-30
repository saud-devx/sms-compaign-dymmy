
import { useEffect, useState, RefObject } from 'react';

type ParallaxOptions = {
  speed?: number;  // Speed factor - higher means more movement
  direction?: 'up' | 'down' | 'left' | 'right';
  reverse?: boolean;  // Reverse direction
  disabled?: boolean;  // Disable effect
}

export function useParallax(
  ref: RefObject<HTMLElement>, 
  options: ParallaxOptions = {}
) {
  const { 
    speed = 0.1, 
    direction = 'up', 
    reverse = false,
    disabled = false
  } = options;
  
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || disabled) return;
    
    const element = ref.current;
    
    const checkVisibility = () => {
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const isInViewport = (
        rect.top <= window.innerHeight &&
        rect.bottom >= 0
      );
      
      setIsVisible(isInViewport);
    };
    
    const handleScroll = () => {
      if (!element || !isVisible) return;
      
      const rect = element.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const elementMiddle = rect.top + rect.height / 2;
      const screenMiddle = window.innerHeight / 2;
      const distanceFromMiddle = elementMiddle - screenMiddle;
      
      let xMovement = 0;
      let yMovement = 0;
      
      const movement = distanceFromMiddle * speed * (reverse ? -1 : 1);
      
      switch(direction) {
        case 'up':
          yMovement = movement;
          break;
        case 'down':
          yMovement = -movement;
          break;
        case 'left':
          xMovement = movement;
          break;
        case 'right':
          xMovement = -movement;
          break;
      }
      
      setPosition({ x: xMovement, y: yMovement });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    
    // Initial check
    checkVisibility();
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, [ref, speed, direction, reverse, disabled, isVisible]);

  return {
    style: {
      transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      transition: 'transform 0.1s linear',
    },
    isVisible
  };
}
