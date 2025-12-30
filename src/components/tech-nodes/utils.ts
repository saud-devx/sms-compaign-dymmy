
/**
 * Optimizes the node count based on device capabilities and viewport size
 */
export const getOptimalNodeCount = (
  width: number, 
  lowPerformanceMode: boolean, 
  reducedMotion: boolean
): number => {
  if (reducedMotion) return Math.min(6, Math.max(3, Math.floor(width / 240)));
  if (lowPerformanceMode) return Math.min(10, Math.max(6, Math.floor(width / 160)));
  return Math.min(15, Math.max(10, Math.floor(width / 120)));
};

/**
 * Determines if the device has low performance capabilities
 */
export const detectDevicePerformance = () => {
  // Simple heuristic: mobile devices or low memory devices might need performance mode
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const isLowMemory = 'deviceMemory' in navigator && navigator.deviceMemory !== undefined && navigator.deviceMemory < 4;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  return {
    reducedMotion: prefersReducedMotion,
    lowPerformanceMode: isMobile || isLowMemory || prefersReducedMotion
  };
};
