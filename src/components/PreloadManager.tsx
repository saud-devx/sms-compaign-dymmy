
import { usePreloadComponents } from '../utils/preloadComponents';

/**
 * This component manages preloading of likely navigation targets
 * to improve perceived performance
 */
export const PreloadManager = () => {
  // Use the preload hook to handle preloading logic
  usePreloadComponents();
  
  // This is a utility component with no visual representation
  return null;
};
