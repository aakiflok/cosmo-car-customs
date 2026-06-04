'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { REVIEWS } from '@/lib/data';

export default function ReviewsCarousel() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx(i => (i - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setIdx(i => (i + 1) % REVIEWS.length);
  const r = REVIEWS[idx];

  return (
    <section className="bg-canvas px-5 py-24 md:px-10 hairline" aria-label="Customer reviews">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <span className="livery-line" />
            <div className="label-uc mb-3 text-[9px] text-white/30">Client voices</div>
            <h2 className="display-xl text-white">What clients say.</h2>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <button onClick={prev} aria-label="Previous review"
              className="flex h-12 w-12 items-center justify-center border border-[#2a2a2a] text-white/40 transition-colors hover:border-white/40 hover:text-white">
              <ChevronLeft size={18} />
            </button>
            <button onClick={next} aria-label="Next review"
              className="flex h-12 w-12 items-center justify-center border border-[#2a2a2a] text-white/40 transition-colors hover:border-white/40 hover:text-white">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div className="border-t border-[#1f1f1f] pt-12">
          <div className="mb-6 flex gap-1" aria-label="5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill="#DA291C" stroke="none" aria-hidden="true" />
            ))}
          </div>
          <blockquote key={idx} className="display-lg mb-10 max-w-[900px] text-white/90"
            style={{ animation: 'page-in 0.5s cubic-bezier(0.16,1,0.3,1) both' }}>
            &ldquo;{r.text}&rdquo;
          </blockquote>
          <div className="label-uc text-[10px] text-white/35">{r.author} &middot; {r.service}</div>
        </div>
        <div className="mt-8 flex items-center gap-3 md:hidden">
          <button onClick={prev} aria-label="Previous"
            className="flex h-10 w-10 items-center justify-center border border-[#2a2a2a] text-white/40">
            <ChevronLeft size={16} />
          </button>
          <span className="label-uc text-[9px] text-white/25">{idx + 1} / {REVIEWS.length}</span>
          <button onClick={next} aria-label="Next"
            className="flex h-10 w-10 items-center justify-center border border-[#2a2a2a] text-white/40">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
