'use client';
import { useEffect, RefObject } from 'react';

export function useCounter(ref: RefObject<HTMLElement | null>, target: number, duration = 2000) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = target % 1 !== 0 ? target.toFixed(1) : String(target);
      return;
    }
    
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        // ease-out-quad
        const ease = p * (2 - p);
        const current = ease * target;
        
        el.textContent = target % 1 !== 0 ? current.toFixed(1) : String(Math.round(current));
        
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target % 1 !== 0 ? target.toFixed(1) : String(target);
      };
      
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    
    io.observe(el);
    return () => io.disconnect();
  }, [ref, target, duration]);
}
