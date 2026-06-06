'use client';
import Link from 'next/link';
import { BUSINESS } from '@/lib/data';

export default function CTABand() {
  return (
    <section aria-label="Book now" className="w-full bg-rossa section-pad">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          <div>
            <div className="label-uc mb-4 text-[9px] text-white/60">Ready to protect your vehicle?</div>
            <h2 className="display-lg text-white">Book your consultation today.</h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
            <Link href="/consultation" className="btn-primary" style={{ background: '#fff', color: '#DA291C', borderColor: '#fff' }}>
              <span>Request Consultation</span>
            </Link>
            <a
              href={`tel:${BUSINESS.phone.replace(/-/g,'')}`}
              className="btn-outline"
              style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff' }}
            >
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
