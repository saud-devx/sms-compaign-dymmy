import { useCallback } from 'react';
import { Node } from '../types';

/**
 * Hook for updating node positions based on velocity and boundaries
 */
export const useNodePositionUpdates = (
  dimensions: { width: number; height: number },
  reducedMotion: boolean,
  lowPerformanceMode: boolean
) => {
  /**
   * Update node positions based on velocity and boundaries
   */
  const updateNodePositions = useCallback((nodes: Node[]) => {
    if (nodes.length === 0 || !dimensions.width || !dimensions.height) return nodes;
    if (reducedMotion && nodes.length <= 3) return nodes;

    // Only update if page is visible (performance optimization)
    if (!document.hidden && document.visibilityState === 'visible') {
      return nodes.map(node => {
        // Update node position based on velocity
        let newX = node.x + node.vx;
        let newY = node.y + node.vy;
        let newVx = node.vx;
        let newVy = node.vy;

        // Bounce off walls
        if (newX <= 0 || newX >= dimensions.width) {
          newVx = -node.vx;
          newX = newX <= 0 ? 0 : dimensions.width;
        }
        
        if (newY <= 0 || newY >= dimensions.height) {
          newVy = -node.vy;
          newY = newY <= 0 ? 0 : dimensions.height;
        }

        // Add small random movement to prevent nodes from getting stuck
        // Less frequent randomization for better performance
        if (Math.random() > 0.98) {
          newVx += (Math.random() - 0.5) * 0.1;
          newVy += (Math.random() - 0.5) * 0.1;
        }

        // Keep velocity within bounds
        const maxVelocity = reducedMotion ? 0.3 : lowPerformanceMode ? 0.5 : 0.8;
        newVx = Math.max(-maxVelocity, Math.min(maxVelocity, newVx));
        newVy = Math.max(-maxVelocity, Math.min(maxVelocity, newVy));

        return {
          ...node,
          x: newX,
          y: newY,
          vx: newVx,
          vy: newVy
        };
      });
    }
    
    // If page is hidden, return unchanged nodes
    return nodes;
  }, [dimensions.height, dimensions.width, reducedMotion, lowPerformanceMode]);

  return updateNodePositions;
};

export default useNodePositionUpdates;
