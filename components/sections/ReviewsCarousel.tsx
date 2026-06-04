import { Star } from 'lucide-react';
import { REVIEWS, BUSINESS } from '@/lib/data';

export default function ReviewsCarousel() {
  return (
    <section id="proof" className="bg-canvas px-4 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 reveal-up">
          <div>
            <div className="label-badge mb-3 text-white/40">Client proof</div>
            <h2 className="display-xl text-white">{BUSINESS.googleRating} across {BUSINESS.reviewCount} verified Google reviews.</h2>
          </div>
        </div>
        <div className="grid gap-px bg-[#303030] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {REVIEWS.map(r => (
            <div key={r.name} className="bg-canvas p-6 reveal">
              <div className="mb-4 flex gap-0.5">{Array.from({length:r.rating}).map((_,i)=><Star key={i} size={12} fill="#c79a3b" stroke="none" />)}</div>
              <p className="mb-5 text-sm leading-6 text-white/72">&ldquo;{r.body}&rdquo;</p>
              <div>
                <div className="text-sm font-semibold text-white">{r.name}</div>
                <div className="label-badge mt-1 text-white/40">{r.service}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
