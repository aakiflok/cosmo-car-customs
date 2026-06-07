'use client';
import { useEffect, useRef } from 'react';

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  size: number;
  opacity: number;
  maxOpacity: number;
  offset: number;
}

export default function CeramicDust() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 768) return; // off on mobile

    const ctx = canvas.getContext('2d')!;
    const COUNT = 60;
    let raf = 0;
    let time = 0;
    let W = 0, H = 0;

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Spawn in top-right quadrant near car area
    const spawn = (): Particle => ({
      x:          W * 0.45 + Math.random() * W * 0.55,
      y:          Math.random() * H,
      vx:         (Math.random() - 0.5) * 0.15,
      vy:         -(0.25 + Math.random() * 0.35),
      size:       0.8 + Math.random() * 1.2,
      opacity:    0,
      maxOpacity: 0.25 + Math.random() * 0.45,
      offset:     Math.random() * Math.PI * 2,
    });

    const particles: Particle[] = Array.from({ length: COUNT }, spawn);

    const tick = () => {
      time += 0.012;
      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        // drift up + sway
        p.y  += p.vy;
        p.x  += p.vx + Math.sin(time + p.offset) * 0.12;

        // fade in near bottom, fade out near top
        const progress = 1 - p.y / H; // 0 at bottom, 1 at top
        p.opacity = p.maxOpacity * Math.sin(progress * Math.PI);

        // respawn when off top
        if (p.y < -4) {
          Object.assign(p, spawn());
          p.y = H + 4;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity.toFixed(3)})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ willChange: 'transform' }}
    />
  );
}
