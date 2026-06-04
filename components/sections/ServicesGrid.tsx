import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/data';

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-canvas px-4 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14 max-w-[720px] reveal-up">
          <div className="label-badge mb-3 text-white/40">Signature services</div>
          <h2 className="display-xl mb-5 text-white">Precision-led services built around your vehicle's specific protection needs.</h2>
          <p className="text-[15px] leading-7 text-white/62">From paint correction to full ceramic and film packages — each service is a dedicated consultation-to-delivery process, not a drive-through wash.</p>
        </div>
        <div className="grid gap-px bg-[#303030] md:grid-cols-2 xl:grid-cols-5">
          {SERVICES.map(s => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-canvas block hover:bg-elevated transition-colors">
              <div className="relative h-52 overflow-hidden">
                <Image src={s.image} alt={s.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 20vw" />
              </div>
              <div className="p-6">
                <div className="label-badge mb-2 text-white/35">{s.number}</div>
                <h3 className="mb-2 text-[18px] font-semibold text-white">{s.name}</h3>
                <p className="mb-4 text-sm leading-6 text-white/58">{s.tagline}</p>
                <div className="flex items-center gap-2 label-nav text-rossa">
                  <span>Explore</span><ArrowRight size={13} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
