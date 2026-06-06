'use client';

import { Shield } from 'lucide-react';

export default function WarrantyBadge() {
  return (
    <section className="w-full bg-elevated border-t border-b border-hairline py-12">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-rossa/10 rounded-lg">
              <Shield size={24} className="text-rossa" aria-hidden="true" />
            </div>
            <div>
              <p className="label-uc text-9px text-white/40 mb-1">Protected</p>
              <p className="text-16px md:text-18px font-600 text-white">5-Year Protection Warranty</p>
              <p className="text-13px text-white/50 mt-1">Transferable • Non-prorated</p>
            </div>
          </div>

          <div className="text-12px text-white/50 text-center md:text-right max-w-[300px]">
            All ceramic coatings and paint protection film installations are covered under our comprehensive 5-year warranty, fully transferable to new owners.
          </div>
        </div>
      </div>
    </section>
  );
}
