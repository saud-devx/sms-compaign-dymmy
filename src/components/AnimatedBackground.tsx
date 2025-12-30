
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useAnimatedBackground } from '@/hooks/useAnimatedBackground';
import { DEFAULT_COLORS } from './animated-background/constants';
import { AnimatedBackgroundProps } from './animated-background/types';

const AnimatedBackground = memo(({
  count = 42,
  size = 80,
  speed = 45,
  className = '',
  colors = DEFAULT_COLORS,
  excludeFooter = true,
}: AnimatedBackgroundProps) => {
  const {
    particles,
    isLowPerfDevice,
    reducedMotionPreferred,
    containerRef,
    getAnim,
    getBorderRadius
  } = useAnimatedBackground({
    count,
    size,
    speed,
    colors,
    excludeFooter
  });

  // Don't render anything if reduced motion is preferred and particle count is very small
  if (reducedMotionPreferred && particles.length <= 3) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-[1] select-none overflow-hidden ${className}`}
      aria-hidden="true"
      style={{
        willChange: 'transform, opacity',
        background: 'transparent',
        mixBlendMode: 'overlay',
        userSelect: 'none',
        zIndex: 1,
      }}
    >
      {particles.map((particle, idx) => (
        <motion.div
          key={idx}
          className={`absolute bg-gradient-to-r ${particle.color}`}
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            borderRadius: getBorderRadius(particle.shape),
            filter: `blur(${particle.blur}px) saturate(120%) drop-shadow(0 2px 8px #fff3)`,
            mixBlendMode: 'lighten',
            willChange: 'transform, opacity',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={getAnim(particle)}
          transition={{
            duration: isLowPerfDevice ? particle.duration * 1.5 : particle.duration,
            repeat: Infinity,
            repeatType: "mirror",
            delay: particle.delay,
            ease: "easeInOut",
            // Optimize animation on low performance devices
            ...(!isLowPerfDevice ? {} : { 
              restDelta: 0.01, 
              restSpeed: 0.01 
            })
          }}
        />
      ))}
    </div>
  );
});

AnimatedBackground.displayName = 'AnimatedBackground';
export default AnimatedBackground;
