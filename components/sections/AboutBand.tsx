import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS } from '@/lib/data';

export default function AboutBand() {
  return (
    <section aria-labelledby="about-heading" className="bg-canvas px-4 py-[96px] md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-px bg-[#303030] lg:grid-cols-2">
          {/* Photo */}
          <div className="relative min-h-[400px] bg-canvas md:min-h-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1616455579100-2ceaa4eb7d48?auto=format&fit=crop&w=1200&q=80"
              alt="Cosmo Car Customs detailing studio"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          {/* Content */}
          <div className="bg-canvas p-[32px] md:p-[64px]">
            <div className="label-badge mb-[16px] text-white/40">About us</div>
            <h2 id="about-heading" className="display-lg mb-[20px] text-white">
              Precision detailing led by people who care about your vehicle&rsquo;s finish.
            </h2>
            <p className="mb-[24px] text-[14px] leading-7 text-white/65">
              Rajinder has been detailing vehicles since 2020, starting with a deep obsession for paint
              condition and working up to full ceramic, PPF, correction, and tinting services.
              Every client&rsquo;s car is treated as though it&rsquo;s the only one in the shop.
            </p>
            <p className="mb-[32px] text-[14px] leading-7 text-white/65">
              We never rush a job and we never cut corners on product or process.
            </p>
            {/* Stats */}
            <div className="mb-[32px] grid grid-cols-2 gap-px bg-[#303030]">
              {[
                [BUSINESS.googleRating + '/5', 'Google rating'],
                [BUSINESS.reviewCount,          'Verified reviews'],
                [BUSINESS.yearsExperience + ' yrs', 'Experience'],
                ['500+',                        'Vehicles served'],
              ].map(([v, l]) => (
                <div key={String(l)} className="bg-canvas p-[20px]">
                  <div className="text-2xl font-bold text-white">{v}</div>
                  <div className="label-badge mt-[6px] text-white/40">{l}</div>
                </div>
              ))}
            </div>
            <Link href="/consultation" className="btn-primary">Book a Consultation</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
