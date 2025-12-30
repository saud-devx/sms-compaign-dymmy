
/**
 * Get the current active section based on scroll position with improved accuracy
 * @returns The ID of the currently visible section
 */
export const getCurrentSection = (): string | null => {
  const sections = document.querySelectorAll('section[id]');
  let currentSectionId = null;
  let minDistance = Infinity;
  
  const scrollPosition = window.scrollY + 100; // Offset for navbar
  
  sections.forEach((section) => {
    const sectionElement = section as HTMLElement;
    const sectionTop = sectionElement.offsetTop;
    const sectionHeight = sectionElement.offsetHeight;
    const sectionBottom = sectionTop + sectionHeight;
    
    // Calculate vertical middle point of the section
    const sectionMiddle = sectionTop + (sectionHeight / 2);
    
    // Calculate distance from current scroll to section middle
    const distance = Math.abs(scrollPosition - sectionMiddle);
    
    // Check if this section is visible in the viewport
    const isInView = (
      scrollPosition >= sectionTop - 150 && // Some tolerance above
      scrollPosition < sectionBottom
    );
    
    // Prioritize sections that are in view
    if (isInView && distance < minDistance) {
      minDistance = distance;
      currentSectionId = section.id;
    }
  });
  
  return currentSectionId;
};

/**
 * Set active section in UI based on URL hash 
 * @param setActiveSection Function to update active section state
 */
export const setActiveSectionFromHash = (
  setActiveSection: (sectionId: string | null) => void
) => {
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    setActiveSection(hash);
  }
};
