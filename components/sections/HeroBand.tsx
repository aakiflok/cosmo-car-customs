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

function parseStat(raw: string) {
  const suffix   = raw.replace(/[\d.]/g, '');
  const num      = parseFloat(raw);
  const decimals = raw.includes('.') ? (raw.split('.')[1]?.replace(/\D/g, '').length ?? 0) : 0;
  return { num, decimals, suffix };
}

function animateCounter(el: HTMLElement, target: number, decimals: number, suffix: string, duration = 1400) {
  const start = performance.now();
  const step  = (now: number) => {
    const t      = Math.min((now - start) / duration, 1);
    const eased  = 1 - Math.pow(1 - t, 3);
    el.textContent = (eased * target).toFixed(decimals) + suffix;
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// ── Particle system ───────────────────────────────────────
interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  alpha: number; alphaDir: number;
  gold: boolean;
}

function makeParticle(w: number, h: number): Particle {
  return {
    x:        Math.random() * w,
    y:        Math.random() * h,
    vx:       (Math.random() - 0.5) * 0.18,
    vy:       -(Math.random() * 0.35 + 0.12),  // drift upward
    r:        Math.random() * 1.2 + 0.3,
    alpha:    Math.random() * 0.4 + 0.05,
    alphaDir: Math.random() > 0.5 ? 1 : -1,
    gold:     Math.random() < 0.12,             // 12% gold, rest white
  };
}

function useParticles(canvasRef: React.RefObject<HTMLCanvasElement | null>, count = 60) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.offsetWidth;
    let h = canvas.offsetHeight;
    canvas.width  = w;
    canvas.height = h;

    let particles: Particle[] = Array.from({ length: count }, () => makeParticle(w, h));
    let rafId = 0;
    let alive = true;

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width  = w;
      canvas.height = h;
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const draw = () => {
      if (!alive) return;
      ctx.clearRect(0, 0, w, h);

      particles.forEach(p => {
        // Move
        p.x += p.vx;
        p.y += p.vy;
        // Flicker
        p.alpha += p.alphaDir * 0.003;
        if (p.alpha > 0.45 || p.alpha < 0.04) p.alphaDir *= -1;
        // Wrap: recycle at top
        if (p.y < -4) { Object.assign(p, makeParticle(w, h), { y: h + 4 }); }
        if (p.x < -4)  p.x = w + 4;
        if (p.x > w+4) p.x = -4;

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.gold
          ? `rgba(199,154,59,${p.alpha})`   // gold
          : `rgba(255,255,255,${p.alpha})`; // white
        ctx.fill();
      });

      rafId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      alive = false;
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [canvasRef, count]);
}

export default function HeroBand() {
  const btn1Ref   = useRef<HTMLAnchorElement>(null);
  const btn2Ref   = useRef<HTMLAnchorElement>(null);
  const heroRef   = useRef<HTMLElement>(null);
  const carRef    = useRef<HTMLDivElement>(null);
  const copyRef   = useRef<HTMLDivElement>(null);
  const statsRef  = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useMagnetic(btn1Ref as React.RefObject<HTMLElement>);
  useMagnetic(btn2Ref as React.RefObject<HTMLElement>);
  useParticles(canvasRef, 60);

  // Entry animation
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>('[data-hero-anim]');
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => targets.forEach(t => t.classList.add('in')));
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  // Scroll parallax
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const hero = heroRef.current;
    const car  = carRef.current;
    const copy = copyRef.current;
    if (!hero || !car || !copy) return;
    let ticking = false;
    let rafId   = 0;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      rafId = requestAnimationFrame(() => {
        const progress = Math.min(window.scrollY / hero.offsetHeight, 1);
        car.style.transform   = `translateY(${progress * -80}px)`;
        car.style.willChange  = 'transform';
        const fade = progress < 0.5 ? 1 : 1 - (progress - 0.5) * 1.4;
        copy.style.opacity    = String(Math.max(fade, 0.3));
        copy.style.willChange = 'opacity';
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(rafId); };
  }, []);

  // Stat counters
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const grid    = statsRef.current;
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
    }, { threshold: 0.6 });
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-[#0a0a0a]"
      aria-label="Hero"
    >
      {/* Red left bar */}
      <div
        data-hero-anim
        className="absolute left-0 top-0 w-[3px] bg-rossa z-20 clip-reveal"
        style={{ height: '100%' }}
        aria-hidden="true"
      />

      <div className="relative z-10 grid lg:grid-cols-2 min-h-[100svh] items-center">

        {/* LEFT: Copy */}
        <div ref={copyRef} className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-24 py-24 lg:py-0">
          <div data-hero-anim className="fade-up flex items-center gap-4 mb-8">
            <span className="block h-[1px] w-10 bg-rossa flex-shrink-0" />
            <span className="label-uc text-[10px] text-white/50 tracking-[0.2em]">
              {BUSINESS.googleRating} Google &middot; {BUSINESS.reviewCount} Reviews &middot; Mississauga
            </span>
          </div>

          <h1 data-hero-anim className="fade-up delay-1 display-mega text-white leading-[0.92] mb-6">
            The Detail
            <br />
            <em className="text-white/80">Is Everything.</em>
          </h1>

          <div data-hero-anim className="reveal-left delay-2 h-[1px] w-16 bg-rossa mb-8" />

          <p data-hero-anim className="fade-up delay-3 text-[15px] leading-8 text-white/60 max-w-[440px] mb-10">
            Mississauga&rsquo;s most obsessive detailing studio — ceramic coating,
            PPF, paint correction, and tinting for drivers who demand perfection.
          </p>

          <div data-hero-anim className="fade-up delay-4 flex flex-col gap-3 sm:flex-row sm:items-center mb-16">
            <Link ref={btn1Ref} href="/consultation" className="btn-primary magnetic" data-cursor="link">
              <span>Request Consultation</span>
            </Link>
            <Link ref={btn2Ref} href="#services" className="btn-outline magnetic" data-cursor="link">
              Explore Services
            </Link>
          </div>

          <div
            ref={statsRef}
            data-hero-anim
            className="fade-up delay-5 border-t border-white/10 pt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-8"
          >
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <div data-stat-val={value} className="text-[2rem] font-bold font-barlow tracking-tight text-white leading-none">
                  {value}
                </div>
                <div className="label-uc mt-2 text-[9px] text-white/35">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Car + canvas particles */}
        <div
          ref={carRef}
          data-hero-anim
          className="reveal-right delay-1 relative w-full h-[60vw] lg:h-full min-h-[300px] lg:min-h-[100svh] flex items-center justify-center overflow-hidden"
        >
          {/* Left-bleed gradient */}
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

          {/* Particle canvas — sits above image, below gradient */}
          <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="absolute inset-0 z-20 w-full h-full pointer-events-none"
          />
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
    </section>
  );
}
