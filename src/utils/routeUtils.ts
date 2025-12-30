
/**
 * Utility functions for route handling in a single-page application
 * Improved for mobile devices and server configurations with enhanced mobile support
 */

/**
 * Ensures routes work correctly when accessed directly
 * This function can be called at application startup
 */
export const initializeRouteHandling = () => {
  // Log initialization for debugging
  console.log("Route handling initialized");
  
  // Check for direct navigation through browser's history API
  if (window.location.pathname !== '/') {
    console.log(`Direct navigation detected to: ${window.location.pathname}`);
    
    // Make sure body is always visible
    document.body.style.visibility = 'visible';
    document.documentElement.style.visibility = 'visible';
    document.body.style.opacity = '1';
    
    // Force immediate scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Force multiple scroll attempts for reliability
    const timepoints = [10, 50, 100, 200, 500];
    timepoints.forEach(delay => {
      setTimeout(() => {
        // Reset visibility each time
        document.body.style.visibility = 'visible';
        document.documentElement.style.visibility = 'visible';
        document.body.style.opacity = '1';
        
        // Force scroll to top
        window.scrollTo(0, 0);
        
        // Force a reflow for all devices
        document.body.style.display = 'none';
        document.body.offsetHeight; // Force a reflow
        document.body.style.display = 'block';
        window.dispatchEvent(new Event('resize'));
      }, delay);
    });
    
    // Register a page show event handler for when navigating with back/forward buttons
    window.addEventListener('pageshow', (event) => {
      // Check if the page is being loaded from cache
      if (event.persisted) {
        console.log('Page loaded from cache - resetting visibility and scroll position');
        
        // Force content to be visible
        document.body.style.visibility = 'visible';
        document.documentElement.style.visibility = 'visible';
        document.body.style.opacity = '1';
        
        // Force scroll to top
        window.scrollTo(0, 0);
        
        // For mobile especially, force a reflow
        const isMobile = window.innerWidth < 768;
        if (isMobile) {
          document.body.style.display = 'none';
          document.body.offsetHeight; // Force a reflow
          document.body.style.display = 'block';
          window.dispatchEvent(new Event('resize'));
        }
      }
    });
  }
  
  // Register popstate event handler for browser navigation
  window.addEventListener('popstate', () => {
    console.log('Browser navigation detected - popstate event');
    
    // Force content to be visible
    document.body.style.visibility = 'visible';
    document.documentElement.style.visibility = 'visible';
    document.body.style.opacity = '1';
    
    // Force scroll to top
    window.scrollTo(0, 0);
  });
};

/**
 * Gets the base URL for the application
 * Useful when working with assets and API paths
 */
export const getBaseUrl = () => {
  return import.meta.env.BASE_URL || '/';
};

/**
 * Normalizes paths to ensure they work consistently across environments
 */
export const normalizePath = (path: string) => {
  const base = getBaseUrl();
  // Remove trailing slashes from base and leading slashes from path
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
};

/**
 * Ensures content is visible - can be called when needed
 */
export const ensureContentVisibility = () => {
  document.body.style.visibility = 'visible';
  document.documentElement.style.visibility = 'visible';
  document.body.style.opacity = '1';
};

/**
 * Forces scroll to top of page with multiple attempts
 */
export const forceScrollToTop = () => {
  // Immediate scroll attempt
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  
  // Additional scroll attempts for reliability
  const timepoints = [10, 50, 100];
  timepoints.forEach(delay => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, delay);
  });
};

