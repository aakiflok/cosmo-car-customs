'use client';

import { useEffect, RefObject } from 'react';

const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export function useScramble(ref: RefObject<HTMLElement | null>, text: string) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !text) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = text;
      return;
    }

    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();

      let iteration = 0;
      let interval: NodeJS.Timeout;

      const run = () => {
        el.textContent = text
          .split('')
          .map((char, index) => {
            if (index < Math.floor(iteration)) {
              return text[index];
            }
            if (char === ' ') return ' ';
            return CHARSET[Math.floor(Math.random() * CHARSET.length)];
          })
          .join('');

        if (iteration >= text.length) {
          clearInterval(interval);
          el.textContent = text;
        }

        // Locks ~1 char every 2 intervals (if interval is 40ms, locks every 80ms)
        iteration += 0.5;
      };

      interval = setInterval(run, 40);
    }, { threshold: 0.3 });

    io.observe(el);

    return () => {
      io.disconnect();
    };
  }, [ref, text]);
}
