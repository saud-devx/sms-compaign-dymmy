import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NotFound from '../pages/NotFound';

/**
 * This component helps recover from navigation errors
 * and ensures the 404 page is displayed when needed
 */
export const ErrorBoundaryRouter = () => {
  const location = useLocation();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Reset error state on route change
    setHasError(false);

    // Add error handler for missing chunks and navigation errors
    const handleError = (event: ErrorEvent) => {
      // Handle various error types that could occur during navigation
      if (
        event.message.includes('Loading chunk') || 
        event.message.includes('Failed to fetch') ||
        event.message.includes('Cannot find module') ||
        event.message.includes('NetworkError')
      ) {
        console.error('Navigation error detected:', event.message);
        setHasError(true);
        event.preventDefault();
      }
    };

    // Register error handler
    window.addEventListener('error', handleError);
    
    return () => {
      // Clean up event handler on route change
      window.removeEventListener('error', handleError);
    };
  }, [location.pathname]);

  // If an error occurred, show 404 page
  if (hasError) {
    return <NotFound />;
  }

  // Otherwise, render nothing - let normal routing take place
  return null;
};

export default ErrorBoundaryRouter;
