import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS } from '@/lib/data';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-canvas px-4 pb-24 pt-28 md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-16 max-w-[780px]">
          <div className="label-badge mb-3 text-white/40">About Cosmo Car Customs</div>
          <h1 className="display-xl mb-6 text-white">Precision-focused vehicle detailing in Mississauga, led by Rajinder since 2020.</h1>
          <p className="text-[16px] leading-8 text-white/70">What started as a passion project became one of the GTA's most trusted vehicle protection studios. We focus on doing fewer things exceptionally well: ceramic coating, PPF, paint correction, tinting, and detailing — all delivered through a consultation-first process.</p>
        </div>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative h-[480px] overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1616455579100-2ceaa4eb7d48?auto=format&fit=crop&w=1200&q=80" alt="Cosmo Car Customs detailing studio" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div className="space-y-8">
            <div>
              <div className="label-badge mb-4 text-white/40">Our numbers</div>
              <div className="grid grid-cols-2 gap-4">
                {[[BUSINESS.googleRating+'/5','Google rating'],[BUSINESS.reviewCount,'Verified reviews'],[BUSINESS.yearsExperience+' yrs','Experience'],['500+','Vehicles served']].map(([v,l])=>(
                  <div key={l} className="border border-[#303030] p-5">
                    <div className="text-3xl font-bold text-white">{v}</div>
                    <div className="label-badge mt-1 text-white/40">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="label-badge mb-4 text-white/40">Our promise</div>
              <p className="text-[15px] leading-7 text-white/68">We never rush a job. We never cut corners on product or process. And we never start work without understanding exactly what your vehicle needs and what outcome you expect.</p>
            </div>
            <div>
              <div className="label-badge mb-4 text-white/40">Location</div>
              <p className="text-[15px] text-white/68">{BUSINESS.address}</p>
            </div>
            <Link href="/consultation" className="btn-primary inline-flex">Book a Consultation</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
