'use client';
import { useEffect, RefObject } from 'react';

export function useTouchSwipe(
  ref: RefObject<HTMLElement | null>,
  onSwipeLeft: () => void,
  onSwipeRight: () => void,
  threshold = 50
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let startX = 0;
    let startY = 0;
    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) < threshold) return;
      if (Math.abs(dy) > Math.abs(dx) * 0.8) return; // ignore vertical scroll
      if (dx < 0) onSwipeLeft();
      else onSwipeRight();
    };
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [ref, onSwipeLeft, onSwipeRight, threshold]);
}
