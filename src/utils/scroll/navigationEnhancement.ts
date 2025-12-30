
import { scrollToElement } from './scrollToElement';

/**
 * Add a smooth scroll to all links that point to internal anchors
 * without changing URL hash
 */
export const initSmoothScrolling = () => {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    
    if (anchor && anchor.hash && anchor.pathname === window.location.pathname) {
      e.preventDefault();
      const hash = anchor.hash.substring(1);
      
      // Scroll to element without updating URL
      scrollToElement(hash, 'smooth', 80);
    }
  });
};

/**
 * Add global navigation enhancements but without hash-based URL changes
 */
export const enhanceNavigation = () => {
  // Clear any hash from URL
  if (window.location.hash) {
    history.replaceState(null, document.title, window.location.pathname);
  }
  
  // Initialize smooth scrolling
  initSmoothScrolling();
  
  // Ensure page loads always start from the top
  window.addEventListener('load', () => {
    window.scrollTo(0, 0);
  });
};
