'use client';

const BRANDS = [
  'Gyeon',
  'XPEL',
  'SunTek',
  'Gtechniq',
  '3M',
  'Meguiar\'s',
  'CarPro',
  'Koch Chemie',
  'IGL Coatings',
  'Jescar',
];

export default function BrandStrip() {
  return (
    <section aria-label="Product brands we use" className="w-full bg-canvas border-t border-hairline py-10 overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-16 mb-6">
        <p className="label-uc text-[9px] text-white/30">Professional products we trust</p>
      </div>
      <div className="relative overflow-hidden">
        <div className="marquee-loop flex items-center gap-16">
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <span
              key={i}
              className="label-uc text-[11px] text-white/35 whitespace-nowrap flex-shrink-0 tracking-[3px]"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
