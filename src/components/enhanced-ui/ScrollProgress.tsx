
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface ScrollProgressProps {
  className?: string;
}

export function ScrollProgress({ className }: ScrollProgressProps) {
  const { progress, isVisible } = useScrollProgress();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={cn(
            "fixed top-0 left-0 right-0 z-[100] h-1 w-full origin-left bg-primary/20",
            className
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="h-full bg-primary"
            style={{ width: `${progress}%` }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
