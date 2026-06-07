import { Metadata } from 'next';
import { Star } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { reviews } from '@/lib/reviews';

export const metadata: Metadata = {
  title: 'Customer Reviews | Cosmo Car Customs',
  description: 'Read reviews from our customers about ceramic coating, paint protection film, and detailing services in Mississauga.',
};

export default function ReviewsPage() {
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="bg-canvas">

      {/* Hero */}
      <section className="container-pad page-hero border-b border-hairline">
        <SectionLabel>Testimonials</SectionLabel>
        <h1 className="display-xl mb-6">What our customers say.</h1>
        <p className="text-[15px] text-white/60 max-w-[600px]">
          Trusted by hundreds of car enthusiasts across the Greater Toronto Area.
          These are real reviews from real customers.
        </p>
      </section>

      {/* Rating summary */}
      <section className="container-pad section-pad border-b border-hairline bg-elevated">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="display-mega">{avgRating}</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="fill-rossa text-rossa" aria-hidden="true" />
                ))}
              </div>
            </div>
            <p className="text-[15px] text-white/60">Based on {reviews.length}+ verified reviews</p>
          </div>
          <div className="text-center">
            <p className="label-uc text-[9px] text-white/40 mb-2">Average Rating</p>
            <p className="display-md">Highly Recommended</p>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="container-pad section-pad">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, idx) => (
            <div key={idx} className="p-8 border border-hairline bg-elevated hover:border-white/20 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-semibold text-white text-[14px]">{review.name}</p>
                  <p className="text-[12px] text-white/50">{review.service}</p>
                </div>
                <div className="text-[11px] text-white/40">{review.date}</div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className={i < review.rating ? 'fill-rossa text-rossa' : 'text-white/20'} aria-hidden="true" />
                ))}
              </div>
              <p className="text-[13px] text-white/70 leading-relaxed mb-4">&ldquo;{review.body}&rdquo;</p>
              <div className="pt-4 border-t border-hairline">
                <span className="label-uc text-[8px] text-white/40">Service: {review.service}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-pad section-pad bg-elevated border-t border-hairline text-center">
        <h2 className="display-md mb-4">Ready for your own transformation?</h2>
        <p className="text-[15px] text-white/60 mb-8 max-w-[500px] mx-auto">
          Join hundreds of satisfied customers. Book your consultation today.
        </p>
        <a href="/consultation" className="btn-primary"><span>Book a Consultation</span></a>
      </section>
    </div>
  );
}
