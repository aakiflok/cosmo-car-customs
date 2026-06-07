'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { gsap } from 'gsap';
import { useMagnetic } from '@/hooks/useMagnetic';
import { BUSINESS } from '@/lib/data';

const HeroParticles = dynamic(() => import('./HeroParticles'), { ssr: false });

export default function HeroBand() {
  const wrapRef    = useRef<HTMLElement>(null);
  const btn1Ref    = useRef<HTMLAnchorElement>(null);
  const btn2Ref    = useRef<HTMLAnchorElement>(null);
  const bgRef      = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useMagnetic(btn1Ref as React.RefObject<HTMLElement>);
  useMagnetic(btn2Ref as React.RefObject<HTMLElement>);

  useEffect(() => {
    const handleReady = () => setIsReady(true);
    window.addEventListener('preloaderComplete', handleReady);
    const t = setTimeout(() => setIsReady(true), 2800);
    return () => { window.removeEventListener('preloaderComplete', handleReady); clearTimeout(t); };
  }, []);

  useEffect(() => {
    if (!isReady || !wrapRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to('.hero-clip', { clipPath: 'inset(0 0 0% 0)', opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power4.out' });
      gsap.to('.hero-fade', { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.4 });
    }, wrapRef);
    return () => ctx.revert();
  }, [isReady]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 25, ease: 'none',
        scrollTrigger: { trigger: wrapRef.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to(contentRef.current, {
        yPercent: -10, ease: 'none',
        scrollTrigger: { trigger: wrapRef.current, start: 'top top', end: 'bottom top', scrub: true },
      });
    }, wrapRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapRef}
      className="relative flex min-h-[100svh] w-full flex-col justify-end overflow-hidden bg-black"
      aria-label="Hero"
    >
      {/* BG image */}
      <div ref={bgRef} className="absolute inset-0 scale-110 origin-center will-change-transform">
        <Image
          src="https://images.unsplash.com/photo-1494976688153-cd3554744ab4?auto=format&fit=crop&w=1800&q=85"
          alt="" role="presentation" fill unoptimized priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="hero-scrim-side absolute inset-0" />
        <div className="hero-scrim absolute inset-0" />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <HeroParticles />
      </div>

      {/* Left red accent bar */}
      <div className="absolute left-0 top-0 h-full w-[3px] bg-rossa z-20" aria-hidden="true" />

      {/* Content — sits in lower third of screen */}
      <div ref={contentRef} className="relative z-30 w-full will-change-transform">
        <div className="w-full px-6 sm:px-10 lg:px-16 pb-20 pt-32 md:pb-28">

          {/* Eyebrow */}
          <div className="hero-fade opacity-0 translate-y-6 mb-8 flex items-center gap-4">
            <span className="block h-[1px] w-10 bg-rossa" />
            <span className="label-uc text-[10px] text-white/50 tracking-[0.2em]">
              {BUSINESS.googleRating} Google &middot; {BUSINESS.reviewCount} Reviews &middot; Mississauga
            </span>
          </div>

          {/* Two-column grid */}
          <div className="grid lg:grid-cols-2 lg:items-end gap-10 lg:gap-20 mb-16 lg:mb-20">
            <div>
              <h1
                className="hero-clip display-mega text-white opacity-0 leading-[0.92]"
                style={{ clipPath: 'inset(100% 0 0% 0)' }}
              >
                The Detail
                <br />
                <em className="text-white/80">Is Everything.</em>
              </h1>
            </div>
            <div className="flex flex-col gap-8 lg:pb-2">
              <p
                className="hero-clip text-[15px] leading-8 text-white/60 opacity-0 max-w-[480px]"
                style={{ clipPath: 'inset(100% 0 0% 0)' }}
              >
                Mississauga&rsquo;s most obsessive detailing studio — ceramic coating,
                PPF, paint correction, and tinting for drivers who demand perfection.
              </p>
              <div className="hero-fade opacity-0 translate-y-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link ref={btn1Ref} href="/consultation" className="btn-primary magnetic" data-cursor="link">
                  <span>Request Consultation</span>
                </Link>
                <Link ref={btn2Ref} href="#services" className="btn-outline magnetic" data-cursor="link">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="hero-fade opacity-0 translate-y-6 border-t border-white/10 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              [BUSINESS.googleRating,        'Google Rating'      ],
              ['200+',                         'Five Star Reviews' ],
              [BUSINESS.yearsExperience,       'Years Experience'  ],
              ['500+',                         'Vehicles Protected'],
            ].map(([v, l]) => (
              <div key={String(l)}>
                <div className="text-[2rem] sm:text-[2.5rem] font-bold font-barlow tracking-tight text-white leading-none">{v}</div>
                <div className="label-uc mt-2 text-[9px] text-white/35">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-10 z-30 hidden flex-col items-center gap-4 md:flex" aria-hidden="true">
        <span className="label-uc text-[9px] text-white/30" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <span className="pulse-indicator block h-16 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
