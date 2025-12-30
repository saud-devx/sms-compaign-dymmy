
export interface Node {
  id: number;
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
  connected: number[];
}

export interface TechNodesAnimationProps {
  className?: string;
}
