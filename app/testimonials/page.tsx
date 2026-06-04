import { Star } from 'lucide-react';
import Link from 'next/link';
import { REVIEWS, BUSINESS } from '@/lib/data';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-canvas px-4 pb-24 pt-28 md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-16 max-w-[760px]">
          <div className="label-badge mb-3 text-white/40">Client testimonials</div>
          <h1 className="display-xl mb-5 text-white">{BUSINESS.googleRating} Google rating across {BUSINESS.reviewCount} verified reviews.</h1>
          <p className="text-[15px] leading-7 text-white/62">Every review comes from a real client who trusted us with their vehicle. We let the outcomes speak.</p>
        </div>
        <div className="grid gap-px bg-[#303030] sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map(r => (
            <div key={r.name} className="bg-canvas p-8">
              <div className="mb-5 flex gap-0.5">{Array.from({length:r.rating}).map((_,i)=><Star key={i} size={14} fill="#c79a3b" stroke="none" />)}</div>
              <p className="mb-6 text-[15px] leading-7 text-white/72">&ldquo;{r.body}&rdquo;</p>
              <div className="border-t border-[#303030] pt-5">
                <div className="font-semibold text-white">{r.name}</div>
                <div className="label-badge mt-1 text-white/40">{r.service}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/consultation" className="btn-primary">Book Your Appointment</Link>
        </div>
      </div>
    </div>
  );
}
