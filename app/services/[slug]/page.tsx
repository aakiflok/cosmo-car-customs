import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/data';

export function generateStaticParams() {
  return SERVICES.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES.find(s => s.slug === slug);
  if (!s) return {};
  return {
    title: `${s.name} — Cosmo Car Customs`,
    description: s.description,
    alternates: { canonical: `https://cosmocarcustoms.com/services/${s.slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find(s => s.slug === slug);
  if (!service) notFound();

  return (
    <div className="min-h-screen bg-canvas">

      {/* Hero */}
      <section className="relative flex min-h-[55vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={service.image} alt="" role="presentation" fill unoptimized
            className="object-cover object-center" priority sizes="100vw" />
          <div className="hero-scrim absolute inset-0" />
        </div>
        <div className="absolute left-0 top-0 h-full w-[3px] bg-rossa opacity-90" aria-hidden="true" />
        <div className="relative z-10 w-full pl-10 pr-6 sm:pl-14 sm:pr-10 lg:pl-20 lg:pr-16 page-hero pb-16">
          <span className="livery-line" />
          <div className="label-uc mb-3 text-[9px] text-white/40">{service.number} &mdash; Service</div>
          <h1 className="display-xl mb-4 text-white max-w-[700px]">{service.name}</h1>
          <p className="max-w-[520px] text-[15px] leading-7 text-white/60">{service.tagline}</p>
        </div>
      </section>

      {/* Description + outcome */}
      <section className="hairline container-pad section-pad">
        <div className="grid gap-px bg-[#1f1f1f] lg:grid-cols-[1.4fr_1fr]">
          <div className="bg-canvas p-10 md:p-16">
            <span className="livery-line" />
            <div className="label-uc mb-3 text-[9px] text-white/30">About this service</div>
            <p className="text-[15px] leading-8 text-white/60">{service.description}</p>
          </div>
          <div className="bg-[#0d0d0d] p-10 md:p-16">
            <span className="livery-line" />
            <div className="label-uc mb-3 text-[9px] text-white/30">What you get</div>
            <p className="text-[15px] leading-8 text-white/60">{service.outcome}</p>
            <div className="mt-10">
              <Link href="/consultation" className="btn-primary"><span>Book This Service</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="hairline bg-[#0d0d0d] container-pad section-pad">
        <div className="mb-14">
          <span className="livery-line" />
          <div className="label-uc mb-3 text-[9px] text-white/30">Packages</div>
          <h2 className="display-xl text-white">Choose your level of protection.</h2>
        </div>
        <div className="grid gap-px bg-[#1f1f1f] sm:grid-cols-2 lg:grid-cols-3">
          {service.packages.map((pkg, i) => (
            <div key={pkg.name} className="bg-[#0d0d0d] p-10" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="label-uc mb-6 text-[9px] text-rossa">{pkg.duration}</div>
              <h3 className="display-md mb-6 text-white">{pkg.name}</h3>
              <ul className="space-y-3">
                {pkg.includes.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={12} className="mt-1 shrink-0 text-rossa" aria-hidden="true" />
                    <span className="text-[13px] leading-6 text-white/50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <section className="hairline container-pad section-pad">
          <div className="mb-14 max-w-[860px]">
            <span className="livery-line" />
            <div className="label-uc mb-3 text-[9px] text-white/30">Common questions</div>
            <h2 className="display-xl text-white">Frequently asked.</h2>
          </div>
          <div className="divide-y divide-[#1f1f1f] max-w-[860px]">
            {service.faqs.map(faq => (
              <div key={faq.q} className="py-8">
                <h3 className="display-sm mb-4 text-white">{faq.q}</h3>
                <p className="text-[14px] leading-7 text-white/50">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="cta-red container-pad section-pad">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="label-uc mb-3 text-[9px] text-white/60">Ready?</div>
            <h2 className="display-xl text-white max-w-[600px]">
              Book {service.name} today and protect your investment.
            </h2>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/consultation"
              className="btn-outline border-white/40 text-white hover:border-white hover:bg-white hover:text-black">
              <span>Request Consultation</span>
            </Link>
            <Link href="/services" className="btn-ghost flex items-center gap-2 text-white/60 hover:text-white">
              All Services <ArrowRight size={12} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
