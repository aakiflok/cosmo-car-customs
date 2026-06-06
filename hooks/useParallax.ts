'use client';

import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';

export function useParallax(ref: RefObject<HTMLElement | null>, yOffset = 100) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const isMobile = window.innerWidth < 768;
    const finalOffset = isMobile ? yOffset * 0.4 : yOffset;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: -finalOffset },
        {
          y: finalOffset,
          ease: 'none',
          scrollTrigger: {
            trigger: el.parentElement || el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [ref, yOffset]);
}
