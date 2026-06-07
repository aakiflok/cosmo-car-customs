'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { useMagnetic } from '@/hooks/useMagnetic';
import { BUSINESS } from '@/lib/data';

const STATS = [
  { value: BUSINESS.googleRating, label: 'Google Rating'       },
  { value: '200+',                label: 'Five Star Reviews'   },
  { value: BUSINESS.yearsExperience, label: 'Years Experience' },
  { value: '500+',                label: 'Vehicles Protected'  },
];

export default function HeroBand() {
  const btn1Ref = useRef<HTMLAnchorElement>(null);
  const btn2Ref = useRef<HTMLAnchorElement>(null);

  useMagnetic(btn1Ref as React.RefObject<HTMLElement>);
  useMagnetic(btn2Ref as React.RefObject<HTMLElement>);

  return (
    <section
      className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-[#0a0a0a]"
      aria-label="Hero"
    >
      {/* Red left bar */}
      <div className="absolute left-0 top-0 h-full w-[3px] bg-rossa z-20" aria-hidden="true" />

      {/* Two-column grid */}
      <div className="relative z-10 grid lg:grid-cols-2 min-h-[100svh] items-center">

        {/* LEFT: Copy */}
        <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-24 py-24 lg:py-0">

          <div className="flex items-center gap-4 mb-8">
            <span className="block h-[1px] w-10 bg-rossa flex-shrink-0" />
            <span className="label-uc text-[10px] text-white/50 tracking-[0.2em]">
              {BUSINESS.googleRating} Google &middot; {BUSINESS.reviewCount} Reviews &middot; Mississauga
            </span>
          </div>

          <h1 className="display-mega text-white leading-[0.92] mb-6">
            The Detail
            <br />
            <em className="text-white/80">Is Everything.</em>
          </h1>

          <div className="h-[1px] w-16 bg-rossa mb-8" />

          <p className="text-[15px] leading-8 text-white/60 max-w-[440px] mb-10">
            Mississauga&rsquo;s most obsessive detailing studio — ceramic coating,
            PPF, paint correction, and tinting for drivers who demand perfection.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center mb-16">
            <Link ref={btn1Ref} href="/consultation" className="btn-primary magnetic" data-cursor="link">
              <span>Request Consultation</span>
            </Link>
            <Link ref={btn2Ref} href="#services" className="btn-outline magnetic" data-cursor="link">
              Explore Services
            </Link>
          </div>

          <div className="border-t border-white/10 pt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <div className="text-[2rem] font-bold font-barlow tracking-tight text-white leading-none">{value}</div>
                <div className="label-uc mt-2 text-[9px] text-white/35">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Car image */}
        <div className="relative w-full h-[60vw] lg:h-full min-h-[300px] lg:min-h-[100svh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent z-10 w-[40%]" />
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=90"
            alt="Dark sports car on showroom floor"
            fill
            unoptimized
            priority
            className="object-cover object-center"
            sizes="(max-width:1024px) 100vw, 55vw"
          />
          <div className="absolute inset-0 z-20 pointer-events-none rim-light" aria-hidden="true" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-10 z-30 hidden flex-col items-center gap-4 md:flex" aria-hidden="true">
        <span className="label-uc text-[9px] text-white/30" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <span className="block h-16 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
