'use client';
import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const REVIEWS = [
  { name: 'Michael T.',   rating: 5, text: 'Absolutely flawless ceramic coating on my M4. The attention to detail is unreal — no installer in the GTA comes close.', service: 'Ceramic Coating' },
  { name: 'Sarah L.',     rating: 5, text: 'Had PPF done on my new Range Rover. The edges are perfect, zero lifting, and the team walked me through every step.', service: 'PPF' },
  { name: 'David K.',     rating: 5, text: 'Two-stage paint correction brought my 3-year-old 911 back to showroom condition. Worth every penny.', service: 'Paint Correction' },
  { name: 'Priya M.',     rating: 5, text: 'Window tint is perfectly even, no bubbles, no haze. Car is so much cooler inside now. Booked again for ceramic.', service: 'Window Tint' },
  { name: 'Jason R.',     rating: 5, text: 'The full Concours package on my Audi RS7 was extraordinary. These guys care about the craft.', service: 'Full Detail' },
  { name: 'Aisha N.',     rating: 5, text: 'Quick turnaround, honest pricing, and the result was better than I expected. My go-to for detailing in Mississauga.', service: 'Detail & Tint' },
];

export default function TestimonialsAuto() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  useScrollReveal();

  useEffect(() => {
    intervalRef.current = setInterval(() => setCurrent(c => (c + 1) % REVIEWS.length), 4500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  return (
    <section aria-labelledby="testimonials-heading" className="w-full bg-canvas section-pad border-t border-hairline">
      <div className="w-full px-6 sm:px-10 lg:px-16">

        <div className="mb-12">
          <span className="livery-line reveal-up" />
          <div className="label-uc mb-3 text-[9px] text-white/30 reveal-up delay-1">Reviews</div>
          <h2 id="testimonials-heading" className="display-lg text-white reveal-up delay-2">What clients say.</h2>
        </div>

        {/* Auto-scroll cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline mb-10">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`bg-canvas p-8 cursor-pointer transition-all duration-300 ${
                current === i ? 'bg-elevated ring-1 ring-rossa/30' : 'hover:bg-elevated/50'
              }`}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={12} className="fill-rossa text-rossa" />
                ))}
              </div>
              <p className="text-[14px] leading-7 text-white/65 mb-6 italic">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div className="label-uc text-[9px] text-white">{r.name}</div>
                <div className="label-uc text-[8px] text-white/30">{r.service}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex gap-2">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-[2px] transition-all duration-300 ${
                current === i ? 'w-8 bg-rossa' : 'w-4 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
