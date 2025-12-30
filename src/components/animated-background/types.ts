
import { ANIM_TYPES, PARTICLE_SHAPES } from './constants';

export type ParticleShape = typeof PARTICLE_SHAPES[number];
export type AnimationType = typeof ANIM_TYPES[number];

export interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  shape: ParticleShape;
  blur: number;
  duration: number;
  delay: number;
  direction: number;
  animType: AnimationType;
  opacity: number;
}

export interface AnimatedBackgroundProps {
  count?: number;
  size?: number;
  speed?: number;
  className?: string;
  colors?: string[];
  excludeFooter?: boolean;
}
