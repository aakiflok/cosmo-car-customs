'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useMagnetic } from '@/hooks/useMagnetic';
import { BUSINESS } from '@/lib/data';

export default function HeroBand() {
  const wrapRef = useRef<HTMLElement>(null);
  const btn1Ref = useRef<HTMLAnchorElement>(null);
  const btn2Ref = useRef<HTMLAnchorElement>(null);
  const imgRef  = useRef<HTMLDivElement>(null);

  useMagnetic(btn1Ref as React.RefObject<HTMLElement>);
  useMagnetic(btn2Ref as React.RefObject<HTMLElement>);

  useEffect(() => {
    const img = imgRef.current;
    if (!img || window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    const fn = () => {
      img.style.transform = `translateY(${window.scrollY * 0.3}px) scale(1.08)`;
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      wrapRef.current?.querySelectorAll<HTMLElement>('.clip-reveal, .fade-up')
        .forEach((el, i) => setTimeout(() => el.classList.add('in'), i * 90));
    }, 1900);
    return () => clearTimeout(t);
  }, []);

  return (
    <section ref={wrapRef} className="relative flex min-h-[100svh] items-end overflow-hidden bg-canvas" aria-label="Hero">
      <div ref={imgRef} className="absolute inset-0" style={{ transform: 'scale(1.08)' }}>
        <Image
          src="https://images.unsplash.com/photo-1494976688153-cd3554744ab4?auto=format&fit=crop&w=1800&q=80"
          alt="" role="presentation" fill className="object-cover object-center" priority sizes="100vw"
        />
      </div>
      <div className="hero-scrim absolute inset-0" aria-hidden="true" />
      <div className="absolute left-0 top-0 h-full w-[3px] bg-rossa opacity-90" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-16 pt-28 md:px-10 md:pb-24">
        <div className="fade-up mb-6 flex items-center gap-4">
          <span className="block h-[2px] w-8 bg-rossa" />
          <span className="label-uc text-[10px] text-white/50">
            {BUSINESS.googleRating} Google &middot; {BUSINESS.reviewCount} Reviews &middot; Mississauga
          </span>
        </div>
        <div className="overflow-hidden mb-6">
          <h1 className="clip-reveal display-mega text-white max-w-[900px]">Precision detailing. Showroom finish.</h1>
        </div>
        <div className="overflow-hidden mb-10">
          <p className="clip-reveal delay-1 text-[15px] leading-7 text-white/55 max-w-[520px]">
            Ceramic coating, PPF, paint correction &amp; tinting for drivers who demand perfection. Serving Mississauga and the GTA.
          </p>
        </div>
        <div className="fade-up delay-2 flex flex-col gap-3 sm:flex-row">
          <Link ref={btn1Ref} href="/consultation" className="btn-primary magnetic"><span>Request Consultation</span></Link>
          <Link ref={btn2Ref} href="#services" className="btn-outline magnetic">Explore Services</Link>
        </div>
        <div className="fade-up delay-3 mt-16 grid grid-cols-3 gap-px border-t border-white/10 pt-8 sm:w-fit">
          {[
            [BUSINESS.googleRating, 'Google Rating'],
            [BUSINESS.reviewCount,  'Reviews'],
            [BUSINESS.yearsExperience + '+', 'Years'],
          ].map(([v, l]) => (
            <div key={String(l)} className="pr-10">
              <div className="text-[2rem] font-bold leading-none tracking-tight text-white">{v}</div>
              <div className="label-uc mt-2 text-[9px] text-white/35">{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 right-8 hidden flex-col items-center gap-3 md:flex" aria-hidden="true">
        <span className="label-uc text-[9px] text-white/25" style={{ writingMode:'vertical-rl' }}>Scroll</span>
        <span className="block h-12 w-px bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
