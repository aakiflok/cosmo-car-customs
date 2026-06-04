'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ServicesGrid() {
  useScrollReveal();

  return (
    <section id="services" aria-labelledby="services-heading" className="bg-canvas px-5 py-24 md:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14">
          <span className="livery-line reveal-up" />
          <div className="label-uc mb-3 text-[9px] text-white/30 reveal-up delay-1">What we do</div>
          <h2 id="services-heading" className="display-xl text-white max-w-[700px] fade-up delay-2">
            Signature services built around your vehicle&rsquo;s needs.
          </h2>
        </div>
        <div className="grid gap-px bg-[#1f1f1f] sm:grid-cols-2 xl:grid-cols-5">
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
                <div className="absolute inset-0 bg-black/60" />
              </div>
              <div className="service-card-content p-7">
                <div className="label-uc mb-6 text-[9px] text-rossa">{s.number}</div>
                <h3 className="display-md mb-3 text-white">{s.name}</h3>
                <p className="mb-6 text-[13px] leading-6 text-white/45 transition-colors group-hover:text-white/70">{s.tagline}</p>
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
