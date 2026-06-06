'use client';

const BRANDS = ['Gyeon', 'XPEL', 'SunTek', 'Gtechniq', '3M', 'Meguiar\'s', 'Carpro', 'Koch Chemie'];

export default function BrandStrip() {
  return (
    <section aria-label="Product brands" className="w-full bg-canvas border-t border-hairline py-10 overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-16 mb-6">
        <p className="label-uc text-[9px] text-white/20">Products we use</p>
      </div>
      <div className="relative overflow-hidden">
        <div className="marquee-loop flex items-center gap-16">
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <span key={i} className="label-uc text-[11px] text-white/25 whitespace-nowrap flex-shrink-0">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
