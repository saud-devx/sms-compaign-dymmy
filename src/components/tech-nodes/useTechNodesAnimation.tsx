
import { useEffect, useRef, useState } from 'react';
import { Node } from './types';
import useNodeGeneration from './hooks/useNodeGeneration';
import useNodePositionUpdates from './hooks/useNodePositionUpdates';
import useDevicePerformance from './hooks/useDevicePerformance';

interface Dimensions {
  width: number;
  height: number;
}

/**
 * useTechNodesAnimation hook manages the animation logic for the TechNodes component.
 * It handles node generation, animation, and performance optimization based on device capabilities.
 */
export const useTechNodesAnimation = (dimensions: Dimensions) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const animationRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number>(0);
  
  // Get device performance settings
  const { lowPerformanceMode, reducedMotion } = useDevicePerformance();
  
  // Get node generation function
  const generateNodes = useNodeGeneration(dimensions, lowPerformanceMode, reducedMotion);
  
  // Get node position update function
  const updateNodePositions = useNodePositionUpdates(dimensions, reducedMotion, lowPerformanceMode);

  /**
   * useEffect hook to initialize nodes when dimensions change
   */
  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;
    
    setNodes(generateNodes());
  }, [generateNodes, dimensions.width, dimensions.height]);

  /**
   * Update node positions for the animation frame
   */
  const updateAnimation = () => {
    setNodes(prevNodes => updateNodePositions(prevNodes));
  };

  return {
    nodes,
    updateNodePositions: updateAnimation,
    dimensions
  };
};

export default useTechNodesAnimation;
