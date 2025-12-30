
import * as React from 'react';
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

// Optimize the content to use React.memo and better animation control
const CollapsibleContent = React.memo(
  React.forwardRef<
    React.ElementRef<typeof CollapsiblePrimitive.CollapsibleContent>,
    React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent>
  >(({ children, ...props }, ref) => (
    <CollapsiblePrimitive.CollapsibleContent
      ref={ref}
      {...props}
      style={{
        ...props.style,
        // Adding will-change to optimize rendering performance
        willChange: 'height, opacity',
        // Using CSS transform for better GPU acceleration
        transform: 'translateZ(0)',
      }}
    >
      {children}
    </CollapsiblePrimitive.CollapsibleContent>
  ))
);
CollapsibleContent.displayName = "CollapsibleContent";

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
