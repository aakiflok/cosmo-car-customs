import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About',
  description: 'The story behind Cosmo Car Customs — premium vehicle protection in Mississauga since 2020.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* Hero band */}
      <section className="px-4 pb-[96px] pt-[128px] md:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="label-badge mb-[8px] text-white/40">About Cosmo Car Customs</div>
          <h1 className="display-xl mb-[24px] max-w-[780px] text-white">
            Precision-focused vehicle detailing in Mississauga, led by Rajinder since 2020.
          </h1>
          <p className="max-w-[640px] text-[15px] leading-8 text-white/68">
            What started as a passion for paint care became one of the GTA&rsquo;s most trusted vehicle protection studios. We focus on doing fewer things exceptionally well.
          </p>
        </div>
      </section>

      {/* Editorial split */}
      <section className="hairline px-4 pb-[96px] md:px-8">
        <div className="mx-auto grid max-w-[1280px] gap-px bg-[#303030] lg:grid-cols-2">
          {/* Photo */}
          <div className="relative min-h-[400px] bg-canvas md:min-h-[560px]">
            <Image
              src="https://images.unsplash.com/photo-1616455579100-2ceaa4eb7d48?auto=format&fit=crop&w=1200&q=80"
              alt="Cosmo Car Customs detailing studio interior"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          {/* Content */}
          <div className="bg-canvas p-[32px] md:p-[64px]">
            <div className="label-badge mb-[24px] text-white/40">Our story</div>
            <p className="mb-[24px] text-[15px] leading-8 text-white/70">
              Rajinder has been detailing vehicles since 2020, starting with a deep obsession for paint condition and working up to full ceramic, PPF, correction, and tinting services. Every client is treated as though their car is the only one in the shop.
            </p>
            <p className="mb-[40px] text-[15px] leading-8 text-white/70">
              We never rush a job. We never cut corners on product or process. And we never start work without understanding exactly what your vehicle needs.
            </p>
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-px bg-[#303030] mb-[40px]">
              {[
                [BUSINESS.googleRating+'/5', 'Google rating'],
                [BUSINESS.reviewCount, 'Verified reviews'],
                [BUSINESS.yearsExperience+' yrs', 'Experience'],
                ['500+', 'Vehicles served'],
              ].map(([v, l]) => (
                <div key={l} className="bg-canvas p-[24px]">
                  <div className="num-display text-[2.5rem] text-white">{v}</div>
                  <div className="label-badge mt-[8px] text-white/40">{l}</div>
                </div>
              ))}
            </div>
            <Link href="/consultation" className="btn-primary">Book a Consultation</Link>
          </div>
        </div>
      </section>

      {/* Location band */}
      <section className="bg-[#222222] px-4 py-[64px] md:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="label-badge mb-[8px] text-white/40">Find us</div>
          <address className="not-italic text-[15px] text-white/70">{BUSINESS.address}</address>
          <p className="mt-[8px] text-[13px] text-white/40">Monday – Saturday · 9am – 6pm</p>
        </div>
      </section>
    </div>
  );
}
