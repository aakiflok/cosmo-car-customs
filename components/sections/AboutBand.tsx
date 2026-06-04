'use client';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS } from '@/lib/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useParallax } from '@/hooks/useParallax';

export default function AboutBand() {
  useScrollReveal();
  const imgRef = useRef<HTMLDivElement>(null);
  useParallax(imgRef, 0.15);

  return (
    <section aria-labelledby="about-heading" className="hairline bg-canvas px-5 py-24 md:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-px bg-[#1f1f1f] lg:grid-cols-2">

          {/* Photo */}
          <div className="relative min-h-[400px] overflow-hidden bg-canvas md:min-h-[560px] reveal">
            <div ref={imgRef} className="absolute inset-[-10%] will-change-transform">
              <Image
                src="https://images.unsplash.com/photo-1616455579100-2ceaa4eb7d48?auto=format&fit=crop&w=1200&q=80"
                alt="Cosmo Car Customs detailing studio"
                fill className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw" loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="bg-canvas p-10 md:p-16">
            <span className="livery-line reveal-up" />
            <div className="label-uc mb-3 text-[9px] text-white/30 reveal-up delay-1">About us</div>
            <h2 id="about-heading" className="display-xl mb-6 text-white fade-up delay-2">
              Precision detailing led by people who care.
            </h2>
            <p className="mb-5 text-[14px] leading-7 text-white/50 reveal-up delay-3">
              Rajinder has been detailing vehicles since 2020, starting with a deep obsession for paint
              condition and working up to full ceramic, PPF, correction, and tinting services.
              Every client&rsquo;s car is treated as though it&rsquo;s the only one in the shop.
            </p>
            <p className="mb-10 text-[14px] leading-7 text-white/50 reveal-up delay-4">
              We never rush a job and we never cut corners on product or process.
            </p>

            {/* Stats */}
            <div className="mb-10 grid grid-cols-2 gap-px bg-[#1f1f1f]">
              {[
                [BUSINESS.googleRating + '/5', 'Google Rating'],
                [BUSINESS.reviewCount,          'Verified Reviews'],
                [BUSINESS.yearsExperience + ' yrs', 'Experience'],
                ['500+',                         'Vehicles Served'],
              ].map(([v, l], i) => (
                <div key={String(l)} className="bg-canvas p-5 reveal-up" style={{ transitionDelay: `${0.28 + i * 0.08}s` }}>
                  <div className="text-2xl font-bold tracking-tight text-white">{v}</div>
                  <div className="label-uc mt-2 text-[9px] text-white/30">{l}</div>
                </div>
              ))}
            </div>

            <div className="reveal-up delay-7">
              <Link href="/consultation" className="btn-primary"><span>Book a Consultation</span></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
