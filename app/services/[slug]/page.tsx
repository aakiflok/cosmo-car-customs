import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';
import { SERVICES } from '@/lib/data';
import { serviceSchema } from '@/lib/schema';
import type { Metadata } from 'next';

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return SERVICES.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = SERVICES.find(s => s.slug === params.slug);
  if (!s) return {};
  return {
    title: `${s.name} in Mississauga & GTA`,
    description: s.description,
    openGraph: { title: `${s.name} | Cosmo Car Customs`, description: s.description, url: `https://cosmocarcustoms.com/services/${s.slug}` },
  };
}

export default function ServicePage({ params }: Props) {
  const service = SERVICES.find(s => s.slug === params.slug);
  if (!service) notFound();
  const siblingServices = SERVICES.filter(s => s.slug !== service.slug);
  const schema = serviceSchema(service.name, service.description, `https://cosmocarcustoms.com/services/${service.slug}`);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="min-h-screen bg-canvas">

        {/* ── Hero ── */}
        <section className="hero-overlay relative flex min-h-[60vh] items-end overflow-hidden bg-canvas pt-16" aria-label={`${service.name} hero`}>
          <Image
            src={service.image}
            alt={`${service.name} by Cosmo Car Customs`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 pb-10 md:px-8 md:pb-16">
            <Link href="/" className="label-badge mb-4 inline-flex items-center gap-2 text-white/50 hover:text-white">
              <ArrowLeft size={11} aria-hidden="true" /> Home
            </Link>
            <div className="label-badge mb-3 text-white/50">{service.number} — Cosmo Car Customs</div>
            <h1 className="display-mega mb-4 text-white">{service.name}</h1>
            <p className="max-w-[560px] text-[14px] leading-7 text-white/70 md:text-[15px]">{service.tagline}</p>
          </div>
        </section>

        {/* ── Overview ── */}
        <section className="hairline bg-canvas px-4 py-[96px] md:px-8">
          <div className="mx-auto grid max-w-[1280px] gap-[48px] lg:grid-cols-2">
            <div>
              <div className="label-badge mb-[16px] text-white/40">What it is</div>
              <p className="text-[15px] leading-8 text-white/75 md:text-[16px]">{service.description}</p>
            </div>
            <div>
              <div className="label-badge mb-[16px] text-white/40">What you get</div>
              <p className="mb-[32px] text-[15px] leading-8 text-white/75 md:text-[16px]">{service.outcome}</p>
              <Link href="/consultation" className="btn-primary">Get a Quote</Link>
            </div>
          </div>
        </section>

        {/* ── Packages ── */}
        <section className="bg-[#222222] px-4 py-[96px] md:px-8">
          <div className="mx-auto max-w-[1280px]">
            <div className="label-badge mb-[48px] text-white/40">Service packages</div>
            {/* 1-up on mobile, auto-cols on desktop */}
            <div
              className="grid gap-px bg-[#303030]"
              style={{ gridTemplateColumns: `repeat(${Math.min(service.packages.length, 3)}, 1fr)` }}
            >
              {service.packages.map((pkg, i) => (
                <div key={pkg.name} className={`bg-elevated p-[32px] md:p-[40px] reveal reveal-delay-${i + 1}`}>
                  <h3 className="text-title-md mb-[8px] text-white">{pkg.name}</h3>
                  <div className="label-badge mb-[24px] text-rossa">{pkg.duration}</div>
                  <ul className="mb-[32px] space-y-[12px]" aria-label={`${pkg.name} includes`}>
                    {pkg.includes.map(item => (
                      <li key={item} className="flex items-start gap-[8px] text-[13px] leading-6 text-white/65">
                        <Check size={13} className="mt-0.5 shrink-0 text-rossa" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/consultation" className="btn-primary">Book This Package</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        {service.faqs.length > 0 && (
          <section className="bg-canvas px-4 py-[96px] md:px-8">
            <div className="mx-auto max-w-[860px]">
              <div className="label-badge mb-[48px] text-white/40">Frequently asked</div>
              <div className="divide-y divide-[#303030]">
                {service.faqs.map(faq => (
                  <div key={faq.q} className="py-[32px] reveal">
                    <h2 className="display-md mb-[12px] text-white">{faq.q}</h2>
                    <p className="text-[14px] leading-7 text-white/62">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Related services ── */}
        <section className="bg-[#222222] px-4 py-[96px] md:px-8">
          <div className="mx-auto max-w-[1280px]">
            <div className="label-badge mb-[32px] text-white/40">Other services</div>
            <div className="grid gap-px bg-[#303030] sm:grid-cols-2 lg:grid-cols-4">
              {siblingServices.slice(0, 4).map(s => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="card-hover block bg-canvas p-[24px]">
                  <div className="label-badge mb-[8px] text-white/30">{s.number}</div>
                  <div className="text-title-sm mb-[8px] font-medium text-white">{s.name}</div>
                  <p className="text-[12px] leading-5 text-white/50">{s.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Service CTA ── */}
        <section className="hairline bg-canvas px-4 py-[96px] text-center md:px-8">
          <div className="mx-auto max-w-[720px]">
            <h2 className="display-lg mb-[20px] text-white">Ready to book {service.name}?</h2>
            <p className="mb-[32px] text-[14px] leading-7 text-white/58">
              Start with a short consultation and we&rsquo;ll recommend the right approach for your vehicle.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/consultation" className="btn-primary w-full sm:w-auto">Request Consultation</Link>
              <Link href="/services" className="btn-outline w-full sm:w-auto">All Services</Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
