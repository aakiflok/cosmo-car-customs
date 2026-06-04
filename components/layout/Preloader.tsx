'use client';
import { useEffect, useRef } from 'react';

export default function Preloader() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const letters = el.querySelectorAll<HTMLElement>('.pre-letter');
    letters.forEach((l, i) => {
      l.style.animationDelay = `${0.55 + i * 0.07}s`;
    });
    const dur = window.innerWidth < 640 ? 1200 : 1800;
    const t = setTimeout(() => {
      el.classList.add('done');
      el.addEventListener('animationend', () => {
        el.style.display = 'none';
        document.body.style.overflow = '';
      }, { once: true });
    }, dur);
    document.body.style.overflow = 'hidden';
    return () => clearTimeout(t);
  }, []);

  return (
    <div id="preloader" ref={ref} aria-hidden="true">
      <div className="pre-line" />
      <div className="pre-word">
        {'COSMO'.split('').map((ch, i) => (
          <span key={i} className="pre-letter">{ch}</span>
        ))}
      </div>
    </div>
  );
}
