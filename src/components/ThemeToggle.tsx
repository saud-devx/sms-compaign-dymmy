
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { MoonIcon, SunIcon, ThemeBackgroundEffects } from "./theme/ThemeIcons";
import { useThemeMode } from "@/hooks/useThemeMode";
import { showThemeToast } from "@/utils/themeUtils";

const ThemeToggle = () => {
  const [{ isDark, isAutomatic, mounted }, toggleTheme, resetToAutomatic] = useThemeMode();
  
  const handleToggle = () => {
    toggleTheme();
    showThemeToast(toast, !isDark);
  };
  
  const handleResetToAutomatic = () => {
    resetToAutomatic();
    showThemeToast(toast, isDark, true);
  };
  
  // Prevent hydration mismatch
  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <div className="flex items-center space-x-3">
      <motion.button
        aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
        onClick={handleToggle}
        onDoubleClick={handleResetToAutomatic} // Double-click to reset to automatic mode
        className={cn(
          "p-2 rounded-full transition-all duration-500 relative overflow-hidden",
          "hover:bg-gray-100 dark:hover:bg-gray-700/90 focus:outline-none", // Increased contrast in dark hover state
          "group focus:ring-2 focus:ring-primary/70 focus:ring-offset-2 dark:focus:ring-offset-gray-900", // Enhanced focus ring
          "w-10 h-10 flex items-center justify-center",
          // Enhanced dark mode styles with better contrast
          "bg-white/90 dark:bg-gray-800/95",
          "shadow-[0_2px_5px_rgba(0,0,0,0.03)]",
          "dark:shadow-[0_2px_5px_rgba(0,0,0,0.25)]", // Increased shadow contrast
          "border border-gray-100/50 dark:border-gray-600/80" // Enhanced border contrast
        )}
        whileTap={{ scale: 0.9 }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: isDark 
            ? "0 0 15px rgba(255, 255, 255, 0.3)" // Increased glow brightness
            : "0 0 15px rgba(74, 222, 128, 0.3)" 
        }}
      >
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isDark ? <MoonIcon /> : <SunIcon />}
          </AnimatePresence>
        </div>
        
        <ThemeBackgroundEffects isDark={isDark} />
      </motion.button>
    </div>
  );
};

export default ThemeToggle;
