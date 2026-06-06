'use client';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS } from '@/lib/data';
import { useParallax } from '@/hooks/useParallax';
import { useCounter } from '@/hooks/useCounter';

function Stat({ value, suffix = '', label, decimals = 0, delay = 0 }: {
  value: number; suffix?: string; label: string; decimals?: number; delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  useCounter(ref, value, 2000);
  return (
    <div className="bg-canvas p-6 md:p-8 fade-up" style={{ transitionDelay: `${delay}s` }}>
      <div className="text-[2rem] sm:text-[2.5rem] font-bold tracking-tight text-white font-barlow leading-none">
        <span ref={ref}>{decimals > 0 ? value.toFixed(decimals) : 0}</span>
        <span className="text-rossa ml-1">{suffix}</span>
      </div>
      <div className="label-uc mt-3 text-[9px] text-white/40">{label}</div>
    </div>
  );
}

export default function AboutBand() {
  const imgRef = useRef<HTMLDivElement>(null);
  useParallax(imgRef, 80);

  return (
    <section aria-labelledby="about-heading" className="w-full bg-canvas section-pad relative overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="grid gap-px bg-hairline lg:grid-cols-2">

          {/* Photo */}
          <div className="relative min-h-[340px] sm:min-h-[500px] lg:min-h-[720px] overflow-hidden bg-canvas clip-reveal">
            <div ref={imgRef} className="absolute inset-[-15%] will-change-transform">
              <Image
                src="https://images.unsplash.com/photo-1616455579100-2ceaa4eb7d48?auto=format&fit=crop&w=1200&q=80"
                alt="Cosmo Car Customs detailing studio"
                fill unoptimized
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-md p-6 md:p-8 border-l-2 border-rossa fade-up delay-4">
              <p className="font-playfair text-[1.1rem] sm:text-[1.35rem] italic text-white leading-snug">
                &ldquo;We don&rsquo;t do volume. We do perfection. Every car is treated as though it&rsquo;s the only one in the shop.&rdquo;
              </p>
              <div className="label-uc mt-4 text-[9px] text-white/50">&mdash; Rajinder, Founder</div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-canvas p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <div className="stagger-children mb-12">
              <span className="livery-line fade-up" />
              <div className="label-uc mb-4 text-[9px] text-white/40 fade-up">About the Studio</div>
              <h2 id="about-heading" className="display-xl mb-8 text-white fade-up max-w-[500px]">
                Precision detailing led by people who care.
              </h2>
              <div className="space-y-6">
                <p className="text-[15px] leading-8 text-white/60 fade-up">
                  Rajinder has been detailing vehicles since 2020, starting with a deep obsession for paint
                  condition and working up to full ceramic, PPF, correction, and tinting services.
                </p>
                <p className="text-[15px] leading-8 text-white/60 fade-up">
                  We never rush a job and we never cut corners on product or process. Our facility is designed
                  for one thing: delivering flawless results.
                </p>
              </div>
            </div>
            <div className="mb-10 grid grid-cols-2 gap-px bg-hairline">
              <Stat value={4.9}  suffix="★" label="Google Rating"    decimals={1} delay={0.3} />
              <Stat value={parseInt(BUSINESS.reviewCount)}     suffix="+" label="Verified Reviews" delay={0.4} />
              <Stat value={parseInt(BUSINESS.yearsExperience)} suffix="+" label="Years Experience" delay={0.5} />
              <Stat value={500}  suffix="+" label="Vehicles Served"  delay={0.6} />
            </div>
            <div className="fade-up delay-7">
              <Link href="/about" className="btn-outline magnetic" data-cursor="link">
                <span>Read Full Story</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
