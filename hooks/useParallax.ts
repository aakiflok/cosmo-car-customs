'use client';
import { useEffect, RefObject } from 'react';

export function useParallax(
  ref: RefObject<HTMLElement | null>,
  speed = 0.25
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translateY(${centerOffset * speed}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [ref, speed]);
}
