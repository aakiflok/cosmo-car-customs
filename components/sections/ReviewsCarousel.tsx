'use client';
import { useState, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { REVIEWS } from '@/lib/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useTouchSwipe } from '@/hooks/useTouchSwipe';

export default function ReviewsCarousel() {
  useScrollReveal();
  const [idx, setIdx] = useState(0);
  const [animClass, setAnimClass] = useState('review-enter');
  const containerRef = useRef<HTMLDivElement>(null);

  const navigate = useCallback((direction: 'next' | 'prev') => {
    setAnimClass('review-exit');
    setTimeout(() => {
      setIdx(i =>
        direction === 'next'
          ? (i + 1) % REVIEWS.length
          : (i - 1 + REVIEWS.length) % REVIEWS.length
      );
      setAnimClass('review-enter');
    }, 380);
  }, []);

  const prev = useCallback(() => navigate('prev'), [navigate]);
  const next = useCallback(() => navigate('next'), [navigate]);

  const touchHandlers = useTouchSwipe({ onSwipeLeft: next, onSwipeRight: prev });

  const r = REVIEWS[idx];

  return (
    <section className="bg-canvas section-pad container-pad hairline" aria-label="Customer reviews">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 sm:mb-14 flex items-end justify-between flex-col sm:flex-row">
          <div>
            <span className="livery-line reveal-up" />
            <div className="label-uc mb-2 sm:mb-3 text-[9px] text-white/30 reveal-up delay-1">Client voices</div>
            <h2 className="display-xl text-white text-2xl sm:text-3xl md:text-4xl fade-up delay-2">What clients say.</h2>
          </div>
          <div className="hidden items-center gap-2 sm:gap-3 md:flex reveal-up delay-3">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center border border-[#2a2a2a] text-white/40 transition-colors hover:border-white/40 hover:text-white"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              aria-label="Next review"
              className="flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center border border-[#2a2a2a] text-white/40 transition-colors hover:border-white/40 hover:text-white"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        <div ref={containerRef} className="border-t border-[#1f1f1f] pt-12 touch-pan-y select-none" {...touchHandlers}>
          <div className="mb-6 flex gap-1" aria-label="5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill="#DA291C" stroke="none" aria-hidden="true" />
            ))}
          </div>
          <blockquote
            key={idx}
            className={`display-lg mb-8 sm:mb-10 max-w-[900px] text-base sm:text-lg md:text-2xl text-white/90 ${animClass}`}
          >
            &ldquo;{r.body}&rdquo;
          </blockquote>
          <div className="label-uc text-[8px] sm:text-[10px] text-white/35">
            {r.name} &middot; {r.service}
          </div>
        </div>
        <div className="mt-8 flex items-center gap-3 md:hidden">
          <button
            onClick={prev}
            aria-label="Previous"
            className="flex h-10 w-10 items-center justify-center border border-[#2a2a2a] text-white/40"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="label-uc text-[9px] text-white/25">{idx + 1} / {REVIEWS.length}</span>
          <button
            onClick={next}
            aria-label="Next"
            className="flex h-10 w-10 items-center justify-center border border-[#2a2a2a] text-white/40"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
