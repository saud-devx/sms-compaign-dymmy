
import { useParticleBackground } from "@/hooks/use-particle-background";
import { cn } from "@/lib/utils";

interface ParticleBackgroundProps {
  className?: string;
  count?: number;
  colors?: string[];
  speed?: number;
  connected?: boolean;
}

export function ParticleBackground({
  className,
  count = 70,
  colors = ['rgba(76, 175, 80, 0.3)', 'rgba(3, 169, 244, 0.3)'],
  speed = 0.25,
  connected = true
}: ParticleBackgroundProps) {
  const { canvasRef } = useParticleBackground({
    count,
    colors,
    speed,
    connected,
    responsive: true
  });

  return (
    <div className={cn("absolute inset-0 z-0 overflow-hidden", className)}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
    </div>
  );
}
