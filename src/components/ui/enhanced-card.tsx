
import * as React from "react"
import { cn } from "@/lib/utils"

interface EnhancedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "3d" | "glass" | "gradient" | "asymmetric"
  children: React.ReactNode
}

const EnhancedCard = React.forwardRef<HTMLDivElement, EnhancedCardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const getCardClasses = () => {
      const baseClasses = "rounded-xl border bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-card-foreground transition-all duration-300"
      
      switch (variant) {
        case "3d":
          return cn(
            baseClasses,
            "card-3d-effect overflow-hidden border-gray-100/40 dark:border-gray-700/40",
            className
          )
        case "glass":
          return cn(
            baseClasses,
            "bg-white/60 dark:bg-gray-800/70 backdrop-blur-xl border-white/20 dark:border-white/10 shadow-lg",
            className
          )
        case "gradient":
          return cn(
            baseClasses,
            "bg-gradient-to-br from-white to-gray-50/90 dark:from-gray-800 dark:to-gray-900/90 border-gray-100/30 dark:border-gray-700/30",
            "hover:shadow-lg hover:-translate-y-1",
            className
          )
        case "asymmetric":
          return cn(
            baseClasses,
            "asymmetric-container overflow-hidden shadow-md hover:shadow-xl",
            className
          )
        default:
          return cn(
            baseClasses,
            "shadow hover:shadow-md",
            className
          )
      }
    }

    return (
      <div
        ref={ref}
        className={getCardClasses()}
        {...props}
      >
        {variant === "3d" ? (
          <div className="card-3d-content p-6">{children}</div>
        ) : (
          children
        )}
      </div>
    )
  }
)
EnhancedCard.displayName = "EnhancedCard"

// Export other card components with the same structure as the original Card component
const EnhancedCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
EnhancedCardHeader.displayName = "EnhancedCardHeader"

const EnhancedCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight text-gray-800 dark:text-gray-100",
      "group-hover:text-primary transition-colors duration-300",
      className
    )}
    {...props}
  />
))
EnhancedCardTitle.displayName = "EnhancedCardTitle"

const EnhancedCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-600 dark:text-gray-300", className)}
    {...props}
  />
))
EnhancedCardDescription.displayName = "EnhancedCardDescription"

const EnhancedCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
EnhancedCardContent.displayName = "EnhancedCardContent"

const EnhancedCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center p-6 pt-0",
      className
    )}
    {...props}
  />
))
EnhancedCardFooter.displayName = "EnhancedCardFooter"

export {
  EnhancedCard,
  EnhancedCardHeader,
  EnhancedCardFooter,
  EnhancedCardTitle,
  EnhancedCardDescription,
  EnhancedCardContent
}
