'use client';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function WarrantyBadge() {
  return (
    <section aria-label="Warranty" className="w-full bg-canvas section-pad border-t border-hairline">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[auto_1fr_auto] gap-8 lg:gap-16 items-center">

          <ShieldCheck size={52} className="text-rossa flex-shrink-0" strokeWidth={1.2} />

          <div>
            <div className="label-uc mb-3 text-[9px] text-white/30">Our Guarantee</div>
            <h2 className="text-[1.35rem] sm:text-[1.6rem] font-semibold tracking-tight text-white leading-snug mb-3">
              Every service is backed by our warranty.
            </h2>
            <p className="text-[14px] leading-7 text-white/50">
              Ceramic coatings come with a 5-year written warranty. PPF carries a 10-year manufacturer warranty.
              If anything fails due to product or installation defect, we fix it — no questions asked.
            </p>
          </div>

          <Link href="/consultation" className="btn-primary flex-shrink-0">
            <span>Claim Your Warranty</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
