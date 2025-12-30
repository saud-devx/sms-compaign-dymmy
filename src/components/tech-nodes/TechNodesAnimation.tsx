
import React, { useRef, useEffect, useState } from 'react';
import { TechNodesAnimationProps } from './types';
import NodeElement from './NodeElement';
import ConnectionsLayer from './ConnectionsLayer';
import { motion } from 'framer-motion';
import useTechNodesAnimation from './useTechNodesAnimation';

const TechNodesAnimation: React.FC<TechNodesAnimationProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const { nodes, updateNodePositions } = useTechNodesAnimation(dimensions);

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

  // Animation frame for node movement
  useEffect(() => {
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
  }, [updateNodePositions]);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ minHeight: '350px' }}
    >
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ConnectionsLayer 
          nodes={nodes}
          dimensions={dimensions}
        />
        
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
