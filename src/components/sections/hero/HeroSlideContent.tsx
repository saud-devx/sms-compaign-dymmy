
import React from 'react';
import { useBreakpoint } from '@/components/hooks/use-breakpoint';

interface HeroSlideContentProps {
  title: React.ReactNode;
  description: string;
  buttons: React.ReactNode[];
}

const HeroSlideContent: React.FC<HeroSlideContentProps> = ({ title, description, buttons }) => {
  const { isMobile } = useBreakpoint();
  
  return (
    <div className="w-full relative z-30 max-w-3xl mx-auto">
      <div className="text-center">
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${isMobile ? 'mb-4' : 'mb-6'} tracking-tight relative inline-block`}>
          {title}
        </h1>
        <p className={`text-lg md:text-xl text-gray-700 dark:text-gray-300 ${isMobile ? 'mb-6' : 'mb-10'} leading-relaxed max-w-2xl mx-auto`}>
          {description}
        </p>
        <div className={`flex flex-wrap justify-center gap-4 ${isMobile ? 'mb-4' : 'mb-8'}`}>
          {buttons.map((button, idx) => (
            <div key={idx} className="transform transition-transform hover:scale-105">
              {button}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlideContent;
