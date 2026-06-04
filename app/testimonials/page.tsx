import type { Metadata } from 'next';
import { Star } from 'lucide-react';
import Link from 'next/link';
import { REVIEWS, BUSINESS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: `${BUSINESS.googleRating} Google rating across ${BUSINESS.reviewCount} verified client reviews for Cosmo Car Customs in Mississauga.`,
  alternates: { canonical: 'https://cosmocarcustoms.com/testimonials' },
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-canvas">

      {/* Hero */}
      <section className="px-5 pb-24 pt-36 md:px-10">
        <div className="mx-auto max-w-[1440px]">
          <span className="livery-line" />
          <div className="label-uc mb-3 text-[9px] text-white/30">Client testimonials</div>
          <h1 className="display-xl mb-6 text-white fade-up">
            {BUSINESS.googleRating} Google rating across {BUSINESS.reviewCount} verified reviews.
          </h1>
          <p className="max-w-[480px] text-[15px] leading-7 text-white/50">
            Every review comes from a real client who trusted us with their vehicle.
          </p>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="hairline px-5 pb-24 md:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-px bg-[#1f1f1f] sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <article key={r.name}
                className="bg-canvas p-10 fade-up"
                style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
                aria-label={`Review by ${r.name}`}>
                <div className="mb-5 flex gap-1" aria-label="5 stars">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} size={13} fill="#DA291C" stroke="none" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mb-8 text-[15px] leading-7 text-white/70">
                  &ldquo;{r.body}&rdquo;
                </blockquote>
                <footer className="border-t border-[#1f1f1f] pt-5">
                  <cite className="not-italic">
                    <div className="text-[14px] font-semibold text-white">{r.name}</div>
                    <div className="label-uc mt-1 text-[9px] text-white/30">{r.service}</div>
                  </cite>
                </footer>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/consultation" className="btn-primary"><span>Book Your Appointment</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
