
import { Particle, ParticleShape } from './types';

export const getAnimationVariant = (particle: Particle, isLowPerfDevice: boolean) => {
  // Use simpler animations for low performance devices
  if (isLowPerfDevice) {
    return {
      y: [0, -15 * particle.direction, 0],
      opacity: [particle.opacity, particle.opacity + 0.05, particle.opacity],
    };
  }
  
  switch (particle.animType) {
    case 'float':
      return {
        y: [0, -30 * particle.direction, 22 * particle.direction, 0],
        x: [0, 18 * particle.direction, -12 * particle.direction, 0],
        scale: [1, 1.09, 0.95, 1.06, 1],
        opacity: [particle.opacity, particle.opacity + 0.1, particle.opacity],
      };
    case 'circle':
      return {
        x: [
          0,
          22 * particle.direction,
          16 * particle.direction,
          -24 * particle.direction,
          0,
        ],
        y: [
          0,
          -17 * particle.direction,
          28 * particle.direction,
          10 * particle.direction,
          0,
        ],
        rotate: [0, 180, 360],
        scale: [1, 1.04, 1.11, 1],
        opacity: [particle.opacity, particle.opacity + 0.13, particle.opacity],
      };
    case 'drift':
    default:
      return {
        x: [0, 200 * particle.direction, 0, -200 * particle.direction, 0],
        y: [0, 0, 40 * particle.direction, 0, 0],
        scale: [1, 0.98, 1.09, 1, 1.04],
        opacity: [particle.opacity, particle.opacity + 0.11, particle.opacity, particle.opacity],
      };
    case 'wave':
      return {
        x: [
          0,
          22 * particle.direction,
          -20 * particle.direction,
          30 * particle.direction,
          0,
        ],
        y: [
          0,
          30 * Math.sin(Math.random()), 
          -18 * particle.direction,
          12 * Math.cos(Math.random()),
          0,
        ],
        scale: [1, 1.15, 0.93, 1.05, 1],
        opacity: [particle.opacity, particle.opacity + 0.08, particle.opacity + 0.1, particle.opacity],
      };
  }
};

export const getBorderRadius = (shape: ParticleShape): string => {
  switch (shape) {
    case 'circle':
      return '50%';
    case 'oval':
      return '50%/36%';
    case 'polygon':
    default:
      return '36%/54% 65%/45% 76%/66% 80%/65% 28%/45%';
  }
};

// New helper function to optimize particle count based on viewport size and device
export const getOptimizedParticleCount = (baseCount: number, isLowPerfDevice: boolean): number => {
  // Get viewport dimensions
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const viewportArea = viewportWidth * viewportHeight;
  
  // Calculate a size factor (smaller viewport = fewer particles)
  const sizeFactor = Math.min(1, Math.max(0.5, viewportArea / (1920 * 1080)));
  
  // Apply performance reduction if needed
  const performanceFactor = isLowPerfDevice ? 0.4 : 1;
  
  // Calculate final count (ensure minimum of 5 particles)
  return Math.max(5, Math.floor(baseCount * sizeFactor * performanceFactor));
};
