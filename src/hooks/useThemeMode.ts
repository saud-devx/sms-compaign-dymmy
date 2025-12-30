
import { useState, useEffect } from 'react';
import { isNightTime, applyThemeToDocument } from '@/utils/themeUtils';

export interface ThemeState {
  isDark: boolean;
  isAutomatic: boolean;
  mounted: boolean;
}

export const useThemeMode = (): [
  ThemeState,
  () => void,
  () => void
] => {
  const [themeState, setThemeState] = useState<ThemeState>({
    isDark: false,
    isAutomatic: false,
    mounted: false,
  });

  // Initialize theme state based on saved preference, system preference, or time of day
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // If there's no saved theme, we're in automatic mode
    const isAutoMode = !savedTheme;
    
    const darkModeOn = savedTheme === 'dark' || 
                      (!savedTheme && (prefersDark || isNightTime()));
    
    setThemeState({
      isDark: darkModeOn,
      isAutomatic: isAutoMode,
      mounted: true,
    });
    
    // Apply theme class to document
    applyThemeToDocument(darkModeOn);

    // Set up interval to check time every minute for automatic mode
    const timeInterval = setInterval(() => {
      if (isAutoMode) {
        const shouldBeDark = isNightTime();
        if (shouldBeDark !== darkModeOn) {
          setThemeState(prev => ({ ...prev, isDark: shouldBeDark }));
          applyThemeToDocument(shouldBeDark);
        }
      }
    }, 60000); // Check every minute

    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        const newDarkMode = e.matches;
        setThemeState(prev => ({ ...prev, isDark: newDarkMode }));
        applyThemeToDocument(newDarkMode);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      clearInterval(timeInterval);
    };
  }, []);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    const newDarkMode = !themeState.isDark;
    
    setThemeState(prev => ({
      ...prev,
      isDark: newDarkMode,
      isAutomatic: false
    }));
    
    // Update document class and save preference
    applyThemeToDocument(newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  // Reset to automatic mode based on system preference or time
  const resetToAutomatic = () => {
    // Remove saved preference to go back to automatic
    localStorage.removeItem('theme');
    
    // Check if it should be dark now
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = prefersDark || isNightTime();
    
    setThemeState(prev => ({
      ...prev,
      isDark: shouldBeDark,
      isAutomatic: true
    }));
    
    applyThemeToDocument(shouldBeDark);
  };

  return [themeState, toggleTheme, resetToAutomatic];
};
