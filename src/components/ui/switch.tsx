
import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent",
      "transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      "focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-primary data-[state=checked]:to-secondary",
      "data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-gray-700 shadow-inner",
      // Enhanced styling and shadows
      "relative overflow-hidden",
      className
    )}
    {...props}
    ref={ref}
  >
    {/* Subtle ripple effect when checked */}
    <div className="absolute inset-0 pointer-events-none">
      <div className={cn(
        "absolute inset-0 rounded-full bg-white/0 transition-opacity duration-500",
        "data-[state=checked]:bg-white/10 data-[state=checked]:animate-pulse",
        "opacity-0 data-[state=checked]:opacity-100"
      )} />
    </div>
    
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0",
        "transition-transform duration-300 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
        "data-[state=checked]:shadow-md dark:bg-gray-100 data-[state=checked]:scale-105",
        // Enhanced animation for the thumb
        "will-change-transform data-[state=checked]:animate-pulse-once",
        "after:content-[''] after:absolute after:inset-0 after:rounded-full after:scale-0",
        "after:opacity-0 data-[state=checked]:after:opacity-100 data-[state=checked]:after:scale-[2]",
        "after:bg-white/10 after:transition-all after:duration-500"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
