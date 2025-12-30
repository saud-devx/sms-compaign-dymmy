
// Re-export all scroll utilities from the new modular structure
// This maintains the same API while improving code organization

export {
  scrollToElement,
  getCurrentSection,
  setActiveSectionFromHash,
  handleHashAnchor,
  preserveHashOnRefresh,
  initSmoothScrolling,
  enhanceNavigation
} from './scroll';
