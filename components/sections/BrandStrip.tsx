'use client';

import { useMemo } from 'react';

const BRANDS = ['Gyeon', 'IGL', 'XPEL', '3M', 'LLumar', 'Gtechniq'];

export default function BrandStrip() {
  const repeatedBrands = useMemo(() => [...BRANDS, ...BRANDS], []);

  return (
    <section className="w-full border-t border-hairline bg-[#0d0d0d] py-16 overflow-hidden" aria-label="Trusted brands">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <p className="label-uc text-9px mb-12 text-white/40">Trusted products we use</p>
        
        <div className="relative flex gap-16">
          <div className="marquee-loop flex gap-16">
            {repeatedBrands.map((brand, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-max text-16px md:text-20px font-inter text-white/30 hover:text-white/80 transition-colors duration-300 cursor-default"
                aria-label={brand}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
