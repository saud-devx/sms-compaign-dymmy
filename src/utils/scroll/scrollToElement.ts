
/**
 * Scroll to an element with the given ID if it exists
 * @param elementId The ID of the element to scroll to
 * @param behavior The scroll behavior (smooth or auto)
 * @param offset Optional offset from the top of the element in pixels
 */
export const scrollToElement = (
  elementId: string, 
  behavior: ScrollBehavior = 'smooth',
  offset: number = 80 // Default offset to account for fixed header
) => {
  // Remove the # if it's present
  const id = elementId.startsWith('#') ? elementId.substring(1) : elementId;
  
  // Find the element
  const element = document.getElementById(id);
  
  // Scroll to it if found
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    // Use requestAnimationFrame for smoother scrolling
    requestAnimationFrame(() => {
      window.scrollTo({
        top: offsetPosition,
        behavior
      });
    });
    
    return true;
  }
  
  return false;
};
