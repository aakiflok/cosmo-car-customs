import { Star } from 'lucide-react';
import Link from 'next/link';
import { REVIEWS, BUSINESS } from '@/lib/data';

export default function ReviewsCarousel() {
  return (
    <section aria-labelledby="reviews-heading" className="bg-canvas px-4 py-[96px] md:px-8">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-[48px] flex flex-wrap items-end justify-between gap-6 reveal-up">
          <div>
            <div className="label-badge mb-[8px] text-white/40">Client proof</div>
            <h2 id="reviews-heading" className="display-xl text-white">
              {BUSINESS.googleRating} across {BUSINESS.reviewCount} verified reviews.
            </h2>
          </div>
          <Link href="/testimonials" className="btn-outline shrink-0">Read All Reviews</Link>
        </div>

        {/* Cards — 1-up → 2-up → 3-up on mobile-tablet-desktop */}
        <div className="grid gap-px bg-[#303030] sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.slice(0,3).map((r, i) => (
            <article key={r.name} className={`bg-canvas p-[32px] reveal reveal-delay-${i + 1}`}>
              <div className="mb-[16px] flex gap-1" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={13} fill="#c79a3b" stroke="none" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mb-[24px] text-[14px] leading-7 text-white/70">
                &ldquo;{r.body}&rdquo;
              </blockquote>
              <footer className="border-t border-[#303030] pt-[16px]">
                <cite className="not-italic">
                  <div className="text-[14px] font-semibold text-white">{r.name}</div>
                  <div className="label-badge mt-[4px] text-white/40">{r.service}</div>
                </cite>
              </footer>
            </article>
          ))}
        </div>

        {/* Mobile — show all 5 as column */}
        <div className="mt-px grid gap-px bg-[#303030] sm:hidden">
          {REVIEWS.slice(3).map(r => (
            <article key={r.name} className="bg-canvas p-[32px] reveal">
              <div className="mb-[16px] flex gap-1">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={13} fill="#c79a3b" stroke="none" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mb-[24px] text-[14px] leading-7 text-white/70">&ldquo;{r.body}&rdquo;</blockquote>
              <footer className="border-t border-[#303030] pt-[16px]">
                <cite className="not-italic">
                  <div className="text-[14px] font-semibold text-white">{r.name}</div>
                  <div className="label-badge mt-[4px] text-white/40">{r.service}</div>
                </cite>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
