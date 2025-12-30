
/**
 * Handle scroll to anchor elements without changing URL hash
 * @param delay Optional delay before scrolling in ms
 */
export const handleHashAnchor = (delay = 100) => {
  // Clear any hashes that might exist in the URL
  if (window.location.hash) {
    history.replaceState(null, document.title, window.location.pathname);
  }
};

/**
 * Clean function to ensure page refreshes always start from the top
 * without preserving hash state
 */
export const preserveHashOnRefresh = () => {
  // Clear any session storage items that might be related to hash navigation
  sessionStorage.removeItem('__preservedHash');
  sessionStorage.removeItem('__lastHash');
  sessionStorage.removeItem('__currentSection');
  sessionStorage.removeItem('__isNavigationEvent');
  
  // Clear hash from URL if present
  if (window.location.hash) {
    history.replaceState(null, document.title, window.location.pathname);
  }
  
  // Ensure page refreshes always start from top
  window.addEventListener('beforeunload', () => {
    sessionStorage.removeItem('__preservedHash');
    sessionStorage.removeItem('__lastHash');
    sessionStorage.removeItem('__currentSection');
  });
};
