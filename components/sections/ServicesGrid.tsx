'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ServicesGrid() {
  useScrollReveal();

  return (
    <section id="services" aria-labelledby="services-heading" className="w-full bg-canvas section-pad">
      <div className="w-full px-6 sm:px-10 lg:px-16">

        <div className="mb-14 grid lg:grid-cols-[1fr_auto] lg:items-end gap-8">
          <div>
            <span className="livery-line reveal-up" />
            <div className="label-uc mb-3 text-[9px] text-white/30 reveal-up delay-1">What we do</div>
            <h2 id="services-heading" className="display-xl text-white max-w-[700px] fade-up delay-2">
              Signature services built around your vehicle&rsquo;s needs.
            </h2>
          </div>
          <div className="hidden lg:flex flex-col items-end gap-1 pb-2 fade-up delay-3">
            <span className="num-hero text-white/10 leading-none">05</span>
            <p className="label-uc text-[9px] text-white/25">Services available</p>
          </div>
        </div>

        <div className="grid gap-px bg-hairline sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="service-card group block bg-canvas reveal-up"
              style={{ transitionDelay: `${i * 0.1}s` }}
              aria-label={`${s.name} — ${s.tagline}`}
            >
              <div className="service-card-img">
                <Image src={s.image} alt="" fill className="object-cover" sizes="20vw" />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <div className="service-card-content p-5 sm:p-6 lg:p-7">
                <div className="label-uc mb-6 text-[9px] text-rossa">{s.number}</div>
                <h3 className="display-md mb-3 text-white">{s.name}</h3>
                <p className="mb-6 text-xs sm:text-sm leading-6 text-white/45 transition-colors group-hover:text-white/70">{s.tagline}</p>
                <div className="label-uc flex items-center gap-2 text-[9px] text-rossa">
                  View <ArrowRight size={11} aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
