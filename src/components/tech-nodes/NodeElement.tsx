
import React from 'react';
import { motion } from 'framer-motion';
import { Node } from './types';

interface NodeElementProps {
  node: Node;
}

const NodeElement: React.FC<NodeElementProps> = ({ node }) => {
  return (
    <motion.div 
      key={node.id}
      className="absolute rounded-full"
      style={{
        width: node.radius * 2,
        height: node.radius * 2,
        backgroundColor: node.color,
        left: node.x - node.radius,
        top: node.y - node.radius,
        boxShadow: `0 0 ${node.radius * 3}px ${node.color}`,
        filter: 'blur(1px)',
        willChange: 'transform',
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    />
  );
};

export default React.memo(NodeElement);
