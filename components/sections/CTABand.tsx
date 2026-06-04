import Link from 'next/link';
import { Phone } from 'lucide-react';
import { BUSINESS } from '@/lib/data';

export default function CTABand() {
  return (
    <section className="cta-red px-5 py-24 md:px-10" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="label-uc mb-4 text-[9px] text-white/60">Ready to start?</div>
            <h2 id="cta-heading" className="display-xl max-w-[700px] text-white">
              Your vehicle deserves showroom-level care. Book today.
            </h2>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
            <Link href="/consultation"
              className="btn-outline border-white/40 text-white transition-colors hover:border-white hover:bg-white hover:text-black">
              Request Consultation
            </Link>
            <a href={`tel:${BUSINESS.phone.replace(/-/g, '')}`}
              className="btn-ghost flex items-center gap-2 text-white/70 hover:text-white">
              <Phone size={13} /> {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
