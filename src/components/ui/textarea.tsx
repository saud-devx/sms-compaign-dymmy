
import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
          "ring-offset-background placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "transition-all duration-300 focus-visible:border-primary focus-visible:shadow-md focus-visible:shadow-primary/30",
          "resize-none dark:bg-gray-800/90 dark:border-gray-600 dark:text-gray-100 dark:placeholder:text-gray-400",
          "hover:border-primary/50 hover:shadow-sm",
          // Enhanced focus styles
          "focus:bg-white/80 dark:focus:bg-gray-800",
          // Enhanced animations on focus
          "will-change-transform focus:translate-y-[-1px]",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
