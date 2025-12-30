
import React from 'react';
import { motion } from 'framer-motion';

interface HeroBackgroundProps {
  isVisible: boolean;
  reducedMotion: boolean;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ isVisible, reducedMotion }) => {
  return (
    <>
      {/* Enhanced decorative background elements with advanced animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 dark:from-primary/15 dark:via-secondary/10 dark:to-primary/15">
          <div className="absolute inset-0 pattern-grid opacity-20 dark:opacity-30"></div>
          <motion.div 
            className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-gradient-to-br from-primary/15 to-secondary/10 dark:from-primary/25 dark:to-secondary/15 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-gradient-to-tr from-secondary/10 to-primary/15 dark:from-secondary/20 dark:to-primary/25 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute left-1/3 top-1/4 w-72 h-72 rounded-full bg-gradient-to-bl from-primary/10 to-secondary/5 dark:from-primary/20 dark:to-secondary/10 blur-3xl opacity-40 dark:opacity-60"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4],
              y: [0, -15, 0],
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>
        
        {/* Floating particles - only render when visible and not on reduced motion */}
        <div className="absolute inset-0 opacity-30 dark:opacity-40 overflow-hidden">
          {isVisible && !reducedMotion && [...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-primary/70 dark:bg-primary/90"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroBackground;
