
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-card-foreground shadow-sm",
      "transition-all duration-300 hover:shadow-lg",
      "group relative overflow-hidden",
      "after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-gradient-to-r after:from-primary after:to-secondary",
      "hover:after:w-full after:transition-all after:duration-500 after:ease-out",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
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
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-600 dark:text-gray-300", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
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
CardFooter.displayName = "CardFooter"

// New component for consistent card imagery
const CardImage = React.forwardRef<
  HTMLDivElement,
  React.ImgHTMLAttributes<HTMLImageElement> & { containerClassName?: string }
>(({ src, alt, className, containerClassName, ...props }, ref) => (
  <div className={cn("relative h-48 overflow-hidden", containerClassName)}>
    <img 
      ref={ref as React.Ref<HTMLImageElement>}
      src={src} 
      alt={alt || "Card image"} 
      className={cn(
        "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
        className
      )}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = "https://placehold.co/800x400?text=Image";
      }}
      {...props}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
))
CardImage.displayName = "CardImage"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardImage }
