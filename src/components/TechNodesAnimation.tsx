
import React, { useRef, useEffect, useState } from 'react';
import { Node } from './tech-nodes/types';
import useTechNodesAnimation from './tech-nodes/useTechNodesAnimation';
import ConnectionsLayer from './tech-nodes/ConnectionsLayer';
import NodeElement from './tech-nodes/NodeElement';
import { motion } from 'framer-motion';
import useDevicePerformance from './tech-nodes/hooks/useDevicePerformance';

const TechNodesAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const { lowPerformanceMode } = useDevicePerformance();

  // Setup the canvas dimensions based on the container
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    // Initial size
    updateSize();

    // Update on resize
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Get nodes and animation update function
  const { nodes, updateNodePositions } = useTechNodesAnimation(dimensions);

  // Animation frame for node movement
  useEffect(() => {
    if (!nodes || nodes.length === 0) return;
    
    let animationFrameId: number;

    const animate = () => {
      updateNodePositions();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation
    animationFrameId = requestAnimationFrame(animate);

    // Clean up animation frame
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [nodes, updateNodePositions]);

  if (!nodes || nodes.length === 0 || !dimensions.width || !dimensions.height) {
    return null;
  }

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden z-0 pointer-events-none"
      style={{ minHeight: '350px' }}
    >
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Connection lines between nodes */}
        <ConnectionsLayer 
          nodes={nodes}
          dimensions={dimensions}
        />
        
        {/* Individual nodes */}
        {nodes.map((node) => (
          <NodeElement 
            key={node.id} 
            node={node} 
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TechNodesAnimation;
