'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { useMagnetic } from '@/hooks/useMagnetic';
import { BUSINESS } from '@/lib/data';

const STATS = [
  { value: BUSINESS.googleRating,    label: 'Google Rating'     },
  { value: '200+',                   label: 'Five Star Reviews'  },
  { value: BUSINESS.yearsExperience, label: 'Years Experience'   },
  { value: '500+',                   label: 'Vehicles Protected' },
];

const STAT_DELAYS = ['delay-1', 'delay-2', 'delay-3', 'delay-4'];

function parseStat(raw: string) {
  const suffix   = raw.replace(/[\d.]/g, '');
  const num      = parseFloat(raw);
  const decimals = raw.includes('.') ? (raw.split('.')[1]?.replace(/\D/g, '').length ?? 0) : 0;
  return { num, decimals, suffix };
}

function animateCounter(el: HTMLElement, target: number, decimals: number, suffix: string, duration = 1400) {
  const start = performance.now();
  const step  = (now: number) => {
    const t     = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = (eased * target).toFixed(decimals) + suffix;
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export default function HeroBand() {
  const btn1Ref    = useRef<HTMLAnchorElement>(null);
  const btn2Ref    = useRef<HTMLAnchorElement>(null);
  const heroRef    = useRef<HTMLElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);
  const belowRef   = useRef<HTMLDivElement>(null);

  useMagnetic(btn1Ref as React.RefObject<HTMLElement>);
  useMagnetic(btn2Ref as React.RefObject<HTMLElement>);

  // Entry animation (above fold)
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>('[data-hero-anim]');
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => targets.forEach(t => t.classList.add('in')));
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  // Scroll-reveal for below-fold section
  useEffect(() => {
    const section = belowRef.current;
    if (!section) return;
    const items = section.querySelectorAll<HTMLElement>('[data-scroll-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 },
    );
    items.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Stat counters
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const grid = statsRef.current;
    if (!grid) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      grid.querySelectorAll<HTMLElement>('[data-stat-val]').forEach(cell => {
        const raw = cell.dataset.statVal ?? '0';
        const { num, decimals, suffix } = parseStat(raw);
        if (reduced) { cell.textContent = raw; return; }
        animateCounter(cell, num, decimals, suffix);
      });
    }, { threshold: 0.4 });
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full bg-[#0a0a0a] overflow-hidden"
      aria-label="Hero"
    >
      {/* ── ABOVE FOLD ── */}
      <div className="relative flex min-h-[100svh] w-full items-end">

        {/* Dark gradient background behind SVG */}
        <div className="absolute inset-0 bg-[#0a0a0a]" />

        {/* Cosmo hero SVG — right-aligned, fills the right half */}
        <div
          className="absolute inset-y-0 right-0 z-[2] flex items-center justify-end"
          style={{ width: '60%' }}
          aria-hidden="true"
        >
          <Image
            src="/herosvg.svg"
            alt=""
            fill
            priority
            className="object-contain object-right"
            sizes="60vw"
          />
        </div>

        {/* Left-to-right gradient so copy stays readable over SVG */}
        <div
          className="absolute inset-0 z-[3]"
          style={{ background: 'linear-gradient(to right, #0a0a0a 38%, rgba(10,10,10,0.55) 65%, transparent 100%)' }}
          aria-hidden="true"
        />

        {/* Studio vignette */}
        <div
          className="absolute inset-0 z-[4]"
          style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(10,10,10,0.45) 70%, rgba(10,10,10,0.9) 100%)' }}
          aria-hidden="true"
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 z-[4]"
          style={{ background: 'linear-gradient(to bottom, transparent, #0a0a0a)' }}
          aria-hidden="true"
        />

        {/* Red left bar */}
        <div className="absolute left-0 top-0 h-full w-[3px] bg-rossa z-20" aria-hidden="true" />

        {/* Copy */}
        <div className="relative z-20 w-full px-8 sm:px-14 lg:px-20 xl:px-28 pb-20 lg:pb-28">
          <div data-hero-anim className="fade-up flex items-center gap-4 mb-8">
            <span className="block h-[1px] w-10 bg-rossa flex-shrink-0" />
            <span className="label-uc text-[10px] text-white/50 tracking-[0.2em]">
              {BUSINESS.googleRating} Google &middot; {BUSINESS.reviewCount} Reviews &middot; Mississauga
            </span>
          </div>

          <h1 data-hero-anim className="fade-up delay-1 display-mega text-white max-w-[720px] mb-10">
            The Detail<br />
            <em className="text-white/70">Is Everything.</em>
          </h1>

          <div data-hero-anim className="fade-up delay-2 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link ref={btn1Ref} href="/consultation" className="btn-primary magnetic" data-cursor="link">
              <span>Request Consultation</span>
            </Link>
            <Link ref={btn2Ref} href="#services" className="btn-outline magnetic" data-cursor="link">
              Explore Services
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          data-hero-anim
          className="fade-up delay-9 absolute bottom-10 right-10 z-30 hidden flex-col items-center gap-4 md:flex"
          aria-hidden="true"
        >
          <span className="label-uc text-[9px] text-white/30" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
          <span className="block h-16 w-[1px] bg-gradient-to-b from-white/40 to-transparent pulse-indicator" />
        </div>
      </div>

      {/* ── BELOW FOLD ── */}
      <div
        ref={belowRef}
        className="relative z-10 px-8 sm:px-14 lg:px-20 xl:px-28 pt-16 pb-24"
      >
        {/* Detailer GIF + copy — side by side on desktop */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

          {/* GIF panel */}
          <div
            data-scroll-reveal
            className="reveal-up relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[520px] mx-auto">
              <Image
                src="/download.gif"
                alt="Cosmo Car Customs detailer applying ceramic coating"
                width={520}
                height={400}
                unoptimized
                className="w-full h-auto object-contain"
                style={{ mixBlendMode: 'lighten' }}
              />
            </div>
          </div>

          {/* Copy panel */}
          <div className="flex flex-col justify-center">
            <div data-scroll-reveal className="reveal-up flex items-center gap-4 mb-6">
              <span className="block h-[1px] w-10 bg-rossa flex-shrink-0" />
              <span className="label-uc text-[10px] text-white/40 tracking-[0.2em]">Our Process</span>
            </div>

            <p data-scroll-reveal className="reveal-up delay-1 text-[15px] leading-8 text-white/55 max-w-[480px] mb-12">
              Mississauga&rsquo;s most obsessive detailing studio — ceramic coating,
              PPF, paint correction, and tinting for drivers who demand perfection.
              Every vehicle treated as if it were our own.
            </p>

            {/* Stats */}
            <div
              ref={statsRef}
              className="border-t border-white/10 pt-10 grid grid-cols-2 gap-10"
            >
              {STATS.map(({ value, label }, i) => (
                <div
                  key={label}
                  data-scroll-reveal
                  className={`reveal-up ${STAT_DELAYS[i]}`}
                >
                  <div
                    data-stat-val={value}
                    className="text-[2.5rem] font-bold font-barlow tracking-tight text-white leading-none"
                  >
                    {value}
                  </div>
                  <div className="label-uc mt-2 text-[9px] text-white/35">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
