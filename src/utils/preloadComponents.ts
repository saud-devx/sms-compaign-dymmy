
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Pages to preload based on common navigation patterns
const pagesToPreload = {
  '/': ['/services', '/le-sms', '/tarifs', '/contact'], // From homepage
  '/services': ['/tarifs', '/contact', '/case-studies'], // From services
  '/actualites': ['/contact', '/services'], // From blog
};

/**
 * A hook that preloads components based on the current route
 * This helps improve perceived performance by preloading likely navigation targets
 */
export const usePreloadComponents = () => {
  const location = useLocation();

  useEffect(() => {
    // Only preload in production and if the feature is supported
    if (process.env.NODE_ENV !== 'production' || !document.createElement('link').relList.supports('prefetch')) {
      return;
    }

    // Get pages to preload based on current path
    const pagesToPreloadForCurrentPath = pagesToPreload[location.pathname as keyof typeof pagesToPreload];
    
    if (pagesToPreloadForCurrentPath) {
      // Create link elements to prefetch pages after a short delay
      setTimeout(() => {
        pagesToPreloadForCurrentPath.forEach(path => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = path;
          link.as = 'document';
          document.head.appendChild(link);
        });
      }, 1000); // Wait 1 second to avoid competing with initial page load
    }
  }, [location.pathname]);
};
