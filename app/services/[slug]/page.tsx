import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
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
    title: `${s.name} Mississauga & GTA | Cosmo Car Customs`,
    description: s.description,
  };
}

export default function ServicePage({ params }: Props) {
  const service = SERVICES.find(s => s.slug === params.slug);
  if (!service) notFound();
  const schema = serviceSchema(service.name, service.description, `https://cosmocarcustoms.com/services/${service.slug}`);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article>
        {/* Hero */}
        <section className="hero-overlay relative flex min-h-[60vh] items-end overflow-hidden bg-canvas pt-16">
          <Image src={service.image} alt={service.name} fill className="object-cover" priority sizes="100vw" />
          <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 pb-14 md:px-8">
            <div className="label-badge mb-3 text-white/60">{service.number} — Cosmo Car Customs</div>
            <h1 className="display-mega mb-4 text-white">{service.name}</h1>
            <p className="max-w-[600px] text-[15px] leading-7 text-white/72">{service.tagline}</p>
          </div>
        </section>

        {/* Overview */}
        <section className="hairline bg-canvas px-4 py-20 md:px-8">
          <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2">
            <div>
              <div className="label-badge mb-4 text-white/40">What it is</div>
              <p className="text-[16px] leading-8 text-white/78">{service.description}</p>
            </div>
            <div>
              <div className="label-badge mb-4 text-white/40">What you get</div>
              <p className="text-[16px] leading-8 text-white/78">{service.outcome}</p>
              <Link href="/consultation" className="btn-primary mt-8 inline-flex">Get a Quote</Link>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="bg-[#222222] px-4 py-20 md:px-8">
          <div className="mx-auto max-w-[1280px]">
            <div className="label-badge mb-10 text-white/40">Service packages</div>
            <div className="grid gap-px bg-[#303030]" style={{ gridTemplateColumns: `repeat(${service.packages.length},1fr)` }}>
              {service.packages.map(p => (
                <div key={p.name} className="bg-elevated p-8">
                  <h3 className="mb-2 text-xl font-semibold text-white">{p.name}</h3>
                  <div className="label-badge mb-6 text-rossa">{p.duration}</div>
                  <ul className="space-y-3">
                    {p.includes.map(i => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-rossa"></span>{i}
                      </li>
                    ))}
                  </ul>
                  <Link href="/consultation" className="btn-primary mt-8 inline-flex">Book This Package</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        {service.faqs.length > 0 && (
          <section className="bg-canvas px-4 py-20 md:px-8">
            <div className="mx-auto max-w-[860px]">
              <div className="label-badge mb-10 text-white/40">Frequently asked</div>
              <div className="divide-y divide-[#303030]">
                {service.faqs.map(f => (
                  <div key={f.q} className="py-7">
                    <h3 className="mb-3 text-[17px] font-medium text-white">{f.q}</h3>
                    <p className="text-sm leading-7 text-white/65">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="hairline bg-canvas px-4 py-20 text-center md:px-8">
          <div className="mx-auto max-w-[760px]">
            <h2 className="display-lg mb-5 text-white">Ready to book {service.name}?</h2>
            <p className="mb-8 text-[15px] leading-7 text-white/60">Start with a private consultation and we'll recommend the right approach for your vehicle.</p>
            <Link href="/consultation" className="btn-primary">Request Consultation</Link>
          </div>
        </section>
      </article>
    </>
  );
}
