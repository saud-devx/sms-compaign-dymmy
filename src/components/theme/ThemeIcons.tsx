
import { motion } from "framer-motion";
import { Moon, Sun, Stars } from 'lucide-react';

interface ThemeIconProps {
  className?: string;
}

export const MoonIcon = ({ className }: ThemeIconProps) => (
  <motion.div
    key="moon"
    initial={{ rotate: 90, opacity: 0 }}
    animate={{ rotate: 0, opacity: 1 }}
    exit={{ rotate: -90, opacity: 0 }}
    transition={{ duration: 0.4 }}
    className="absolute"
  >
    <div className="relative">
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ 
          scale: [0.8, 1.1, 0.9, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 0.5 }}
      >
        <Moon className={`h-5 w-5 text-gray-200 ${className || ''}`} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 1, 0],
          x: [0, 3, 0],
          y: [0, -3, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 2
        }}
        className="absolute -top-1 -right-1"
      >
        <Stars className={`h-3 w-3 text-gray-200 ${className || ''}`} />
      </motion.div>
    </div>
  </motion.div>
);

export const SunIcon = ({ className }: ThemeIconProps) => (
  <motion.div
    key="sun"
    initial={{ rotate: -90, opacity: 0 }}
    animate={{ rotate: 0, opacity: 1 }}
    exit={{ rotate: 90, opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    <motion.div
      animate={{ 
        rotate: [0, 180],
        scale: [1, 1.1, 0.9, 1]
      }}
      transition={{ 
        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        scale: { duration: 2, repeat: Infinity, repeatType: "reverse" }
      }}
    >
      <Sun className={`h-5 w-5 text-yellow-500 ${className || ''}`} />
    </motion.div>
  </motion.div>
);

export const ThemeBackgroundEffects = ({ isDark }: { isDark: boolean }) => (
  <>
    <motion.div
      className={`absolute inset-0 rounded-full ${
        isDark 
          ? "bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20" 
          : "bg-gradient-to-br from-yellow-300/20 via-orange-300/20 to-amber-300/20"
      }`}
      initial={false}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />

    {/* Ray effects for sun mode */}
    {!isDark && (
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-yellow-300/40 h-1 w-6 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transformOrigin: 'center',
              transform: `rotate(${i * 45}deg) translateX(10px)`,
            }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
    )}

    {/* Star effects for moon mode */}
    {isDark && (
      <>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white h-1 w-1 rounded-full"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 1.5 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </>
    )}
  </>
);
