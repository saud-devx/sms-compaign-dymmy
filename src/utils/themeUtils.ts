
/**
 * Utility functions for theme management
 */

/**
 * Checks if it's currently night time (between 8 PM and 8 AM)
 */
export const isNightTime = (): boolean => {
  const currentHour = new Date().getHours();
  return currentHour >= 20 || currentHour < 8;
};

/**
 * Applies theme preference to document
 */
export const applyThemeToDocument = (isDark: boolean): void => {
  document.documentElement.classList.toggle('dark', isDark);
};

/**
 * Shows toast notification for theme change
 */
export const showThemeToast = (toast: any, isDark: boolean, isAuto = false): void => {
  let message = isDark ? "Mode sombre activé ✨" : "Mode clair activé ☀️";
  
  if (isAuto) {
    message = "Mode automatique activé 🕒";
  }
  
  toast.success(message, { 
    position: "bottom-center", 
    className: isDark ? "dark-toast" : "light-toast" 
  });
};
