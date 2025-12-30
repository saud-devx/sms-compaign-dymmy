
import { cn } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";
import React from "react";

interface EnhancedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "gradient" | "subtle" | "glow";
  animation?: "hover" | "float" | "pulse" | "none";
  children: React.ReactNode;
  gradient?: string;
}

const EnhancedCard = React.forwardRef<HTMLDivElement, EnhancedCardProps>(
  ({ 
    className, 
    children, 
    variant = "default", 
    animation = "hover",
    gradient = "from-primary/20 to-secondary/20",
    ...props 
  }, ref) => {
    const cardVariants: Variants = {
      hover: {
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" }
      },
      float: {
        y: [0, -10, 0],
        transition: { 
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }
      },
      pulse: {
        scale: [1, 1.02, 1],
        transition: { 
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }
      },
      none: {
        y: 0
      }
    };

    const baseStyles = "rounded-xl p-6 transition-all duration-300 overflow-hidden relative";
    
    const variantStyles = {
      default: "bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md",
      glass: "backdrop-blur-md bg-white/90 dark:bg-gray-800/90 border border-gray-100/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl",
      gradient: `bg-gradient-to-br ${gradient} shadow-lg hover:shadow-xl`,
      subtle: "bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100/80 dark:border-gray-700/80",
      glow: "bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-[0_0_15px_rgba(76,175,80,0.2)] hover:shadow-[0_0_25px_rgba(76,175,80,0.4)] dark:shadow-[0_0_15px_rgba(76,175,80,0.3)] dark:hover:shadow-[0_0_25px_rgba(76,175,80,0.5)]"
    };

    // Extract HTML attributes that conflict with Framer Motion props
    const {
      onAnimationStart,
      onAnimationEnd,
      onAnimationIteration,
      onDrag,
      onDragEnd,
      onDragStart,
      ...filteredProps
    } = props;

    // Use React's motion component with proper configuration
    const motionProps = {
      ref,
      className: cn(baseStyles, variantStyles[variant], className),
      variants: cardVariants,
      initial: "none",
      ...(animation === "hover" ? { whileHover: "hover" } : {}),
      ...(animation !== "hover" && animation !== "none" ? { animate: animation } : {})
    };

    return (
      <motion.div {...motionProps} {...filteredProps}>
        {variant === "gradient" && (
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/20 dark:from-white/5 dark:to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
        {children}
      </motion.div>
    );
  }
);

EnhancedCard.displayName = "EnhancedCard";

export { EnhancedCard };
