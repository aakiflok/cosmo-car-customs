'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';

interface FAQItem {
  q: string;
  a: string;
}

const FAQ_TEASER: FAQItem[] = [
  {
    q: 'How long does ceramic coating last?',
    a: 'Professional ceramic coatings last 3-10 years depending on the product tier and maintenance. We recommend annual inspections.',
  },
  {
    q: 'Can PPF be combined with ceramic coating?',
    a: 'Yes. PPF installed first, then ceramic coated on top, delivers the best overall protection system for your paint.',
  },
  {
    q: 'What is paint correction and do I need it?',
    a: 'Paint correction removes swirl marks and scratches. It is necessary before ceramic coating or PPF for best results.',
  },
  {
    q: 'Is window tinting legal in Ontario?',
    a: 'Yes, with limitations. We apply only legal tints that pass inspection in Ontario (front windows 65%+ light transmission).',
  },
  {
    q: 'Do you offer mobile detailing?',
    a: 'Our studio in Mississauga is our primary location. For mobile services, please contact us directly for availability.',
  },
  {
    q: 'What is your warranty?',
    a: 'All services include a 5-year protection warranty with transferable coverage on ceramic coatings and PPF.',
  },
];

export default function FAQTeaser() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="w-full bg-canvas py-32 md:py-48 border-t border-hairline">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-20">
          <SectionLabel>Questions?</SectionLabel>
          <h2 className="display-lg">Common questions answered.</h2>
        </div>

        <div className="space-y-1">
          {FAQ_TEASER.map((item, idx) => (
            <div key={idx} className="border-b border-hairline transition-colors hover:border-white/10">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                aria-expanded={openIdx === idx}
              >
                <span className="display-sm flex-1 group-hover:text-rossa transition-colors">
                  {item.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-white/40 transition-transform ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              <div
                className="accordion-body overflow-hidden"
                style={{
                  gridTemplateRows: openIdx === idx ? '1fr' : '0fr',
                }}
              >
                <div className="pb-6 text-15px text-white/60 leading-relaxed">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="text-white/50 text-14px mb-6">
            Have more questions? Visit our full FAQ for detailed information about services, booking, and aftercare.
          </p>
          <Link href="/faq" className="btn-primary">
            <span>View All FAQs</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
