
import * as React from 'react';
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

// Optimize aspect ratio for better performance with will-change and React.memo
const AspectRatio = React.memo(
  React.forwardRef<
    React.ElementRef<typeof AspectRatioPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>
  >(({ children, style, ...props }, ref) => (
    <AspectRatioPrimitive.Root
      ref={ref}
      style={{
        ...style,
        // Adding will-change to optimize layout calculations
        willChange: 'padding-bottom',
        // Using hardware acceleration for smoother rendering
        transform: 'translateZ(0)',
      }}
      {...props}
    >
      {children}
    </AspectRatioPrimitive.Root>
  ))
);
AspectRatio.displayName = "AspectRatio";

export { AspectRatio }
