import type { Metadata } from 'next';
import { Star } from 'lucide-react';
import Link from 'next/link';
import { REVIEWS, BUSINESS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: `${BUSINESS.googleRating} Google rating across ${BUSINESS.reviewCount} verified client reviews for Cosmo Car Customs in Mississauga.`,
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-canvas px-4 pb-[96px] pt-[128px] md:px-8">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-[64px] max-w-[720px]">
          <div className="label-badge mb-[8px] text-white/40">Client testimonials</div>
          <h1 className="display-xl mb-[16px] text-white">
            {BUSINESS.googleRating} Google rating across {BUSINESS.reviewCount} verified reviews.
          </h1>
          <p className="text-[14px] leading-7 text-white/58">
            Every review comes from a real client who trusted us with their vehicle.
          </p>
        </div>

        {/* Review grid: 1-up → 2-up → 3-up */}
        <div className="grid gap-px bg-[#303030] sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <article
              key={r.name}
              className={`bg-canvas p-[32px] md:p-[40px] reveal reveal-delay-${(i % 3) + 1}`}
              aria-label={`Review by ${r.name}`}
            >
              <div className="mb-[16px] flex gap-1" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="#c79a3b" stroke="none" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mb-[24px] text-[15px] leading-7 text-white/72">
                &ldquo;{r.body}&rdquo;
              </blockquote>
              <footer className="border-t border-[#303030] pt-[20px]">
                <cite className="not-italic">
                  <div className="text-[15px] font-semibold text-white">{r.name}</div>
                  <div className="label-badge mt-[4px] text-white/40">{r.service}</div>
                </cite>
              </footer>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-[64px] text-center">
          <Link href="/consultation" className="btn-primary">Book Your Appointment</Link>
        </div>
      </div>
    </div>
  );
}
