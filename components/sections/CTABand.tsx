import Link from 'next/link';
import { Phone } from 'lucide-react';
import { BUSINESS } from '@/lib/data';

export default function CTABand() {
  return (
    <section aria-label="Final call to action" className="bg-canvas px-4 py-[96px] text-center md:px-8">
      <div className="mx-auto max-w-[860px]">
        {/* Livery label */}
        <div className="label-badge mb-[16px] text-white/40">Ready to protect your investment?</div>
        <h2 className="display-xl mb-[24px] text-white">
          Start with a private consultation. We&rsquo;ll take it from there.
        </h2>
        <p className="mx-auto mb-[40px] max-w-[640px] text-[14px] leading-7 text-white/58 md:text-[15px]">
          Whether you need a single service or a complete protection package — the consultation is where we figure out exactly what your vehicle needs.
        </p>
        {/* CTA pair — stacks on mobile */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/consultation" className="btn-primary w-full sm:w-auto">Request Consultation</Link>
          <a
            href={`tel:${BUSINESS.phone.replace(/-/g,'')}`}
            className="btn-outline flex w-full items-center justify-center gap-2 sm:w-auto"
          >
            <Phone size={13} aria-hidden="true" />{BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
