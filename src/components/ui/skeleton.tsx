
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-muted/80 relative overflow-hidden dark:bg-gray-700/80",
        "after:absolute after:inset-0 after:-translate-x-full",
        "after:animate-[shimmer_2s_infinite] after:bg-gradient-to-r after:from-transparent after:via-white/35 after:to-transparent dark:after:via-white/20", 
        className
      )}
      style={{
        animationFillMode: "forwards"
      }}
      {...props}
    />
  )
}

export { Skeleton }
