import Link from 'next/link';
import { Phone } from 'lucide-react';
import { BUSINESS } from '@/lib/data';

export default function CTABand() {
  return (
    <section className="bg-canvas px-4 py-24 text-center md:px-8 md:py-28">
      <div className="mx-auto max-w-[900px]">
        <div className="label-badge mb-4 text-white/40">Ready to protect your investment?</div>
        <h2 className="display-xl mb-6 text-white">Start with a private consultation. We'll take it from there.</h2>
        <p className="mx-auto mb-10 max-w-[680px] text-[15px] leading-7 text-white/62">Whether you need a single service or a complete protection package — the consultation is where we figure out exactly what your vehicle needs.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/consultation" className="btn-primary">Request Consultation</Link>
          <a href={`tel:${BUSINESS.phone}`} className="btn-outline flex items-center gap-2">
            <Phone size={14} />{BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
