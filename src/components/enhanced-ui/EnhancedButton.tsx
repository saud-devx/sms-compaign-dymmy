
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const enhancedButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0 hover:brightness-110",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0 hover:brightness-110",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-primary/50 hover:translate-y-[-2px] hover:shadow-md active:translate-y-0",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0 hover:brightness-110",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:translate-y-[-2px] active:translate-y-0 hover:brightness-110 hover:saturate-150",
        modern: "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-primary/40 dark:hover:border-primary/40 hover:translate-y-[-2px] hover:shadow-md",
        glow: "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_15px_rgba(76,175,80,0.5)] hover:translate-y-[-2px] active:translate-y-0",
        minimal: "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white hover:translate-y-[-1px]",
        vibrant: "bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] text-white hover:saturate-150 hover:hue-rotate-15 hover:shadow-lg hover:translate-y-[-2px] active:translate-y-0",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
        xl: "h-12 px-10 text-base",
        // Add responsive size for mobile
        responsive: "h-auto px-3 py-2 text-sm sm:h-10 sm:px-4 sm:py-2 sm:text-base",
      },
      rounded: {
        default: "rounded-md",
        full: "rounded-full",
        xl: "rounded-xl",
      },
      animation: {
        none: "",
        shine: "shine-effect",
        ripple: "ripple-effect",
        pulse: "animate-pulse",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "full",
      animation: "none",
    },
  }
);

export interface EnhancedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof enhancedButtonVariants> {
  asChild?: boolean;
}

const EnhancedButton = React.forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    rounded, 
    animation,
    asChild = false, 
    children,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    // For ripple effect
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    
    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (animation !== "ripple" || !buttonRef.current) return;
      
      const button = buttonRef.current;
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;
      
      const ripple = document.createElement("span");
      ripple.style.width = ripple.style.height = `${diameter}px`;
      ripple.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
      ripple.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
      ripple.classList.add("ripple");
      
      // Remove existing ripples
      const existingRipple = button.querySelector(".ripple");
      if (existingRipple) {
        existingRipple.remove();
      }
      
      button.appendChild(ripple);
      
      // Remove ripple after animation
      setTimeout(() => {
        ripple.remove();
      }, 600);
    };
    
    const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (animation !== "shine") return;
      
      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();
      
      const x = ((event.clientX - rect.left) / button.offsetWidth) * 100;
      const y = ((event.clientY - rect.top) / button.offsetHeight) * 100;
      
      button.style.setProperty("--x", `${x}%`);
      button.style.setProperty("--y", `${y}%`);
    };
    
    // Merge refs
    const mergedRef = React.useMemo(() => {
      if (animation === "ripple") {
        return (node: HTMLButtonElement) => {
          buttonRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        };
      }
      return ref;
    }, [ref, animation]);
    
    return (
      <Comp
        className={cn(
          enhancedButtonVariants({ variant, size, rounded, animation, className }),
          animation === "ripple" && "overflow-hidden relative",
          animation === "shine" && "shine-effect"
        )}
        ref={mergedRef}
        onMouseMove={handleMouseMove}
        onClick={animation === "ripple" ? createRipple : undefined}
        {...props}
      >
        {children}
        
        {/* Add extra element for glow effect variant */}
        {variant === "glow" && (
          <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
        )}
      </Comp>
    );
  }
);
EnhancedButton.displayName = "EnhancedButton";

export { EnhancedButton, enhancedButtonVariants };
