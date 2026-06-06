'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const FAQS = [
  { q: 'How long does a ceramic coating last?',       a: 'Our coatings are rated for 5–7 years with proper maintenance washes every 6 months. The Concours stack can last even longer.' },
  { q: 'Do I need paint correction before coating?',  a: 'For the best result, yes. Coating locks in the surface — if there are swirls or scratches underneath, they’ll be locked in too. We always recommend at least a Stage 1 polish.' },
  { q: 'How long will my car be in the shop?',        a: 'Depends on the service: a basic detail is same-day, a full PPF + ceramic stack can take 3–4 days. We’ll give you an exact timeline at consultation.' },
  { q: 'Is PPF worth it on a new car?',               a: 'Absolutely — that’s actually the best time. A new car has zero chips or scratches, and the film goes on perfectly. Protecting it from day one preserves resale value significantly.' },
];

export default function FAQTeaser() {
  const [open, setOpen] = useState<number | null>(null);
  useScrollReveal();

  return (
    <section aria-labelledby="faq-heading" className="w-full bg-elevated section-pad border-t border-hairline">
      <div className="w-full px-6 sm:px-10 lg:px-16">

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          <div>
            <span className="livery-line reveal-up" />
            <div className="label-uc mb-3 text-[9px] text-white/30 reveal-up delay-1">FAQ</div>
            <h2 id="faq-heading" className="display-lg text-white reveal-up delay-2">Common questions.</h2>
            <Link href="/faq" className="btn-ghost label-uc text-[9px] mt-8 inline-flex items-center gap-2 reveal-up delay-3">
              All questions &rarr;
            </Link>
          </div>

          <div className="divide-y divide-hairline">
            {FAQS.map((faq, i) => (
              <div key={i} className="reveal-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left gap-6"
                  aria-expanded={open === i}
                >
                  <span className="text-[15px] font-medium text-white">{faq.q}</span>
                  {open === i
                    ? <Minus size={16} className="flex-shrink-0 text-rossa" />
                    : <Plus  size={16} className="flex-shrink-0 text-white/40" />
                  }
                </button>
                <div className={`accordion-body ${open === i ? 'open' : ''}`}>
                  <div>
                    <p className="pb-6 text-[14px] leading-7 text-white/55">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
