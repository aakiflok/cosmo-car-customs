import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/data';

export default function ServicesGrid() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-canvas px-4 py-[96px] md:px-8">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-[48px] max-w-[720px] reveal-up">
          <div className="label-badge mb-[8px] text-white/40">Signature services</div>
          <h2 id="services-heading" className="display-xl mb-[16px] text-white">
            Precision-led services built around your vehicle&rsquo;s specific protection needs.
          </h2>
          <p className="text-[14px] leading-7 text-white/60 md:text-[15px]">
            Each service is a dedicated consultation-to-delivery process &mdash; not a drive-through wash.
          </p>
        </div>

        {/* Grid — 1-up → 2-up → 5-up */}
        <div className="grid gap-px bg-[#303030] sm:grid-cols-2 xl:grid-cols-5">
          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="card-hover group block bg-canvas"
              aria-label={`${s.name} \u2014 ${s.tagline}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:640px) 100vw, (max-width:1280px) 50vw, 20vw"
                  loading={i < 2 ? 'eager' : 'lazy'}
                />
              </div>
              {/* Body */}
              <div className="p-[24px]">
                <div className="label-badge mb-[8px] text-white/30">{s.number}</div>
                <h3 className="text-title-md mb-[8px] text-white">{s.name}</h3>
                <p className="mb-[16px] text-[13px] leading-6 text-white/55">{s.tagline}</p>
                <div className="flex items-center gap-2 label-nav text-rossa">
                  Explore <ArrowRight size={12} aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
