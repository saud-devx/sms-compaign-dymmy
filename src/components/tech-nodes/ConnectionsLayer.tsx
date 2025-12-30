
import React from 'react';
import { Node } from './types';

export interface ConnectionsLayerProps {
  nodes: Node[];
  dimensions: { width: number; height: number };
}

const ConnectionsLayer: React.FC<ConnectionsLayerProps> = ({ nodes, dimensions }) => {
  return (
    <svg className="absolute inset-0 w-full h-full">
      {nodes.map(node => 
        node.connected.map(connectedId => {
          const connectedNode = nodes.find(n => n.id === connectedId);
          if (!connectedNode) return null;
          
          // Calculate opacity based on distance
          const dx = node.x - connectedNode.x;
          const dy = node.y - connectedNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = Math.min(dimensions.width, dimensions.height) / 2;
          const opacity = Math.max(0, Math.min(0.8, 1 - (distance / maxDistance)));
          
          return (
            <line
              key={`${node.id}-${connectedId}`}
              x1={node.x}
              y1={node.y}
              x2={connectedNode.x}
              y2={connectedNode.y}
              stroke={node.color}
              strokeWidth="1.5"
              strokeOpacity={opacity}
            />
          );
        })
      )}
    </svg>
  );
};

export default React.memo(ConnectionsLayer);
