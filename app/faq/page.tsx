'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { SERVICES } from '@/lib/data';

const ALL_FAQS = SERVICES.flatMap(s => s.faqs.map(f => ({ ...f, service: s.name })));

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-canvas container-pad page-hero pb-24">
      <h1 className="display-xl mb-[64px] text-white">Common questions, direct answers.</h1>
      <div className="divide-y divide-[#303030] max-w-[860px]" role="list">
        {ALL_FAQS.map((faq, i) => (
          <div key={i} role="listitem">
            <button
              className="flex w-full items-center justify-between gap-4 py-[24px] text-left"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              aria-controls={`faq-${i}`}
            >
              <div>
                <div className="label-uc mb-1 text-[9px] text-rossa">{faq.service}</div>
                <h2 className="text-[15px] font-medium text-white md:text-[17px]">{faq.q}</h2>
              </div>
              <ChevronDown
                size={18}
                className={`shrink-0 text-white/40 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
            <div id={`faq-${i}`} className={`accordion-body ${open === i ? 'open' : ''}`}>
              <div>
                <p className="pb-[24px] text-[14px] leading-7 text-white/60">{faq.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[64px] border-t border-[#303030] pt-[48px] max-w-[860px]">
        <p className="mb-[24px] text-[14px] text-white/55">Still have a question? Talk directly to our team.</p>
        <Link href="/consultation" className="btn-primary"><span>Book a Consultation</span></Link>
      </div>
    </div>
  );
}
