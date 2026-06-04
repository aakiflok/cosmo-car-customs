'use client';
import { useEffect } from 'react';

export function useScrollReveal(
  selector = '.fade-up, .clip-reveal, .reveal, .reveal-up, .reveal-left, .reveal-right'
) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(selector);
    if (!els.length) return;
    const io = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    // Also trigger stagger-children parents by observing their children
    const staggerParents = document.querySelectorAll<HTMLElement>('.stagger-children');
    staggerParents.forEach(parent => {
      const children = parent.querySelectorAll<HTMLElement>(
        '.fade-up, .reveal, .reveal-up, .reveal-left, .reveal-right'
      );
      children.forEach(child => io.observe(child));
    });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}
