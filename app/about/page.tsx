import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS, PROCESS_STEPS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About',
  description: 'The story behind Cosmo Car Customs — premium vehicle protection in Mississauga since 2020.',
  alternates: { canonical: 'https://cosmocarcustoms.com/about' },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-canvas">

      {/* Hero */}
      <section className="container-pad page-hero">
        <span className="livery-line" />
        <div className="label-uc mb-3 text-[9px] text-white/30">About Cosmo Car Customs</div>
        <h1 className="display-xl mb-6 max-w-[780px] text-white">
          Precision-focused vehicle protection in Mississauga, led by Rajinder since 2020.
        </h1>
        <p className="max-w-[580px] text-[15px] leading-8 text-white/50">
          What started as a passion for paint care became one of the GTA&rsquo;s most trusted vehicle
          protection studios. We focus on doing fewer things exceptionally well.
        </p>
      </section>

      {/* Editorial split */}
      <section className="hairline container-pad section-pad">
        <div className="grid gap-px bg-[#1f1f1f] lg:grid-cols-2">
          <div className="relative min-h-[400px] overflow-hidden bg-canvas md:min-h-[580px]">
            <Image
              src="https://images.unsplash.com/photo-1616455579100-2ceaa4eb7d48?auto=format&fit=crop&w=1200&q=80"
              alt="Cosmo Car Customs detailing studio interior"
              fill unoptimized className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width:1024px) 100vw, 50vw" loading="lazy"
            />
          </div>
          <div className="bg-canvas p-10 md:p-16">
            <span className="livery-line" />
            <div className="label-uc mb-3 text-[9px] text-white/30">Our story</div>
            <p className="mb-5 text-[15px] leading-8 text-white/50">
              Rajinder has been detailing vehicles since 2020, starting with a deep obsession for paint
              condition and working up to full ceramic, PPF, correction, and tinting services.
              Every client&rsquo;s car is treated as though it&rsquo;s the only one in the shop.
            </p>
            <p className="mb-10 text-[15px] leading-8 text-white/50">
              We never rush a job. We never cut corners on product or process. And we never start work
              without understanding exactly what your vehicle needs.
            </p>
            <div className="mb-10 grid grid-cols-2 gap-px bg-[#1f1f1f]">
              {[
                [BUSINESS.googleRating + '/5', 'Google Rating'],
                [BUSINESS.reviewCount,          'Verified Reviews'],
                [BUSINESS.yearsExperience,       'Years Experience'],
                ['500+',                         'Vehicles Served'],
              ].map(([v, l]) => (
                <div key={String(l)} className="bg-canvas p-5">
                  <div className="text-2xl font-bold tracking-tight text-white">{v}</div>
                  <div className="label-uc mt-2 text-[9px] text-white/30">{l}</div>
                </div>
              ))}
            </div>
            <Link href="/consultation" className="btn-primary"><span>Book a Consultation</span></Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="hairline bg-[#0d0d0d] container-pad section-pad">
        <div className="mb-14">
          <span className="livery-line" />
          <div className="label-uc mb-3 text-[9px] text-white/30">Our principles</div>
          <h2 className="display-xl text-white max-w-[600px]">What we stand for.</h2>
        </div>
        <div className="grid gap-px bg-[#1f1f1f] sm:grid-cols-3">
          {[
            ['No shortcuts', 'Every step follows the correct sequence — wash, decontaminate, correct, protect. No step is skipped to save time.'],
            ['Honest advice', 'We recommend only what your vehicle genuinely needs. No upselling. No manufactured urgency.'],
            ['Accountable work', 'We stand behind every job. If something is not right, we make it right — that is how every client becomes a repeat client.'],
          ].map(([title, body]) => (
            <div key={String(title)} className="bg-[#0d0d0d] p-10">
              <div className="mb-3 block h-[2px] w-6 bg-rossa" />
              <h3 className="display-md mb-4 text-white">{title}</h3>
              <p className="text-[13px] leading-6 text-white/40">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="hairline container-pad section-pad">
        <div className="mb-14">
          <span className="livery-line" />
          <div className="label-uc mb-3 text-[9px] text-white/30">How we work</div>
          <h2 className="display-xl text-white max-w-[600px]">From booking to delivery.</h2>
        </div>
        <div className="grid gap-px bg-[#1f1f1f] sm:grid-cols-3">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.title} className="bg-canvas p-10" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="num-hero mb-6 select-none text-rossa opacity-20" aria-hidden="true">{step.number}</div>
              <h3 className="display-md mb-4 text-white">{step.title}</h3>
              <p className="text-[13px] leading-6 text-white/40">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Location */}
      <section className="hairline bg-[#0d0d0d] container-pad section-pad">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="livery-line" />
            <div className="label-uc mb-3 text-[9px] text-white/30">Find us</div>
            <h2 className="display-lg mb-6 text-white">Visit the studio.</h2>
            <address className="not-italic text-[15px] leading-7 text-white/50">{BUSINESS.address}</address>
            <p className="mt-3 label-uc text-[9px] text-white/30">Monday &ndash; Saturday &middot; 9am &ndash; 6pm</p>
          </div>
          <div className="flex gap-4">
            <Link href="/consultation" className="btn-primary"><span>Book a Visit</span></Link>
            <a href={`tel:${BUSINESS.phone.replace(/-/g,'')}`} className="btn-outline">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
