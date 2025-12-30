
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useIsMobile } from '@/hooks/use-mobile';

/**
 * ScrollToTop component
 * Ensures content scrolls to top on route changes for both mobile and desktop
 */
export function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathRef = useRef<string>("");
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Only handle navigation when the path changes
    if (prevPathRef.current !== pathname) {
      console.log('NavigationEvent: Route changed to:', pathname);
      
      // Important: Set visibility immediately to prevent flash of unstyled content
      document.documentElement.style.visibility = 'visible';
      document.body.style.visibility = 'visible';
      document.body.style.opacity = '1';
      
      // Multiple scroll attempts for reliability
      const performScroll = () => {
        // Force scroll with all methods available
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        // Force immediate scrolling with behavior: auto
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto'
        });
      };
      
      // Initial immediate scroll
      performScroll();
      
      // Clear any focused elements
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      
      // Additional scroll attempts at different timepoints for reliability
      const timepoints = [10, 50, 100, 300];
      timepoints.forEach(delay => {
        setTimeout(() => {
          performScroll();
          
          // Mobile-specific handling
          if (isMobile) {
            // Force a reflow for mobile browsers
            document.body.style.display = 'none';
            document.body.offsetHeight; // Force reflow
            document.body.style.display = 'block';
          }
        }, delay);
      });
      
      // Final check with logging
      setTimeout(() => {
        performScroll();
        console.log('Final scroll attempt completed for path:', pathname);
      }, 500);
      
      // Update the previous path reference
      prevPathRef.current = pathname;
    }
  }, [pathname, isMobile]);

  return null;
}
