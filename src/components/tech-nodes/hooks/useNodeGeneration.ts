
import { useCallback } from 'react';
import { Node } from '../types';
import { getOptimalNodeCount } from '../utils';

/**
 * Hook for generating nodes based on dimensions and performance settings
 */
export const useNodeGeneration = (
  dimensions: { width: number; height: number },
  lowPerformanceMode: boolean,
  reducedMotion: boolean
) => {
  /**
   * Generate nodes based on current dimensions and performance settings
   */
  const generateNodes = useCallback(() => {
    if (!dimensions.width || !dimensions.height) return [];
    
    const nodeCount = getOptimalNodeCount(dimensions.width, lowPerformanceMode, reducedMotion);
    const generatedNodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      // Create node with random position and velocity
      const node: Node = {
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        radius: Math.random() * 6 + 4,
        color: i % 4 === 0 ? 'var(--primary)' : 
               i % 4 === 1 ? 'var(--secondary)' : 
               i % 4 === 2 ? '#ffffff' : 
               'rgba(255, 255, 255, 0.8)',
        vx: (Math.random() - 0.5) * (reducedMotion ? 0.3 : 0.7),
        vy: (Math.random() - 0.5) * (reducedMotion ? 0.3 : 0.7),
        connected: []
      };

      generatedNodes.push(node);
    }

    // Establish connections between nodes - fewer in performance mode
    generatedNodes.forEach(node => {
      const connectionCount = reducedMotion 
        ? 1
        : lowPerformanceMode
          ? Math.floor(Math.random() * 2) + 1
          : Math.floor(Math.random() * 3) + 2;
      
      for (let i = 0; i < connectionCount; i++) {
        const possibleConnections = generatedNodes
          .filter(n => n.id !== node.id && !node.connected.includes(n.id));
        
        if (possibleConnections.length > 0) {
          const randomNode = possibleConnections[Math.floor(Math.random() * possibleConnections.length)];
          node.connected.push(randomNode.id);
        }
      }
    });

    return generatedNodes;
  }, [dimensions.width, dimensions.height, lowPerformanceMode, reducedMotion]);

  return generateNodes;
};

export default useNodeGeneration;
