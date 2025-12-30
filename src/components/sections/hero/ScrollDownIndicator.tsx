
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToElement } from '@/utils/scrollUtils';

interface ScrollDownIndicatorProps {
  isVisible: boolean;
  reducedMotion: boolean;
}

const ScrollDownIndicator: React.FC<ScrollDownIndicatorProps> = ({ isVisible, reducedMotion }) => {
  if (!isVisible || reducedMotion) {
    return null;
  }

  const handleScrollToNextSection = () => {
    // Directly scroll to the services section
    scrollToElement('services');
  };

  return (
    <motion.div 
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.7 }}
    >
      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-600 dark:text-gray-400 mb-2 animate-pulse">Découvrez nos services</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors"
            onClick={handleScrollToNextSection}
            aria-label="Faire défiler vers le bas"
          >
            <ArrowDown className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollDownIndicator;
