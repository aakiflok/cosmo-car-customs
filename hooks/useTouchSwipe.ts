'use client';
import { useRef, useCallback } from 'react';

interface TouchSwipeHandlers {
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchEnd: (e: React.TouchEvent) => void;
}

export function useTouchSwipe(options: {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  threshold?: number;
} = {}): TouchSwipeHandlers {
  const { onSwipeLeft, onSwipeRight, threshold = 50 } = options;
  const startXRef = useRef(0);
  const startYRef = useRef(0);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    startXRef.current = e.touches[0].clientX;
    startYRef.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - startXRef.current;
    const dy = e.changedTouches[0].clientY - startYRef.current;
    if (Math.abs(dx) < threshold) return;
    if (Math.abs(dy) > Math.abs(dx) * 0.8) return; // ignore vertical scroll
    if (dx < 0 && onSwipeLeft) onSwipeLeft();
    else if (dx > 0 && onSwipeRight) onSwipeRight();
  }, [onSwipeLeft, onSwipeRight, threshold]);

  return {
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
  };
}
