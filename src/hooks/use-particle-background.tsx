
import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  speedX: number;
  speedY: number;
  alpha: number;
}

interface ParticleBackgroundOptions {
  count?: number;
  colors?: string[];
  speed?: number;
  connected?: boolean;
  minRadius?: number;
  maxRadius?: number;
  responsive?: boolean;
}

export function useParticleBackground(options: ParticleBackgroundOptions = {}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  
  const {
    count = 50,
    colors = ['rgba(76, 175, 80, 0.4)', 'rgba(3, 169, 244, 0.4)'],
    speed = 0.5,
    connected = true,
    minRadius = 1,
    maxRadius = 3,
    responsive = true,
  } = options;

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Update canvas dimensions
    const updateDimensions = () => {
      if (!canvasRef.current || !canvas.parentElement) return;
      
      const parent = canvas.parentElement;
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      
      canvas.width = width;
      canvas.height = height;
      
      setDimensions({ width, height });
      
      // If responsive, recreate particles when dimensions change
      if (responsive && particlesRef.current.length) {
        createParticles();
      }
    };

    // Initialize canvas
    updateDimensions();
    
    if (responsive) {
      window.addEventListener('resize', updateDimensions);
    }

    // Create particles
    const createParticles = () => {
      const particles: Particle[] = [];
      for (let i = 0; i < count; i++) {
        const radius = Math.random() * (maxRadius - minRadius) + minRadius;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedX: (Math.random() - 0.5) * speed,
          speedY: (Math.random() - 0.5) * speed,
          alpha: Math.random() * 0.5 + 0.5
        });
      }
      particlesRef.current = particles;
    };
    
    createParticles();

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(')', `, ${particle.alpha})`);
        ctx.fill();
        
        // Draw connections
        if (connected) {
          for (let j = i + 1; j < particlesRef.current.length; j++) {
            const p2 = particlesRef.current[j];
            const dx = particle.x - p2.x;
            const dy = particle.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(150, 150, 150, ${0.2 * (1 - distance / 100)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (responsive) {
        window.removeEventListener('resize', updateDimensions);
      }
    };
  }, [count, colors, speed, connected, minRadius, maxRadius, responsive]);

  return { canvasRef, dimensions };
}
