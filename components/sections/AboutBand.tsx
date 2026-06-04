import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS } from '@/lib/data';

export default function AboutBand() {
  return (
    <section className="bg-[#222222] px-4 py-24 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-2">
        <div className="relative h-[420px] overflow-hidden reveal">
          <Image src="https://images.unsplash.com/photo-1616455579100-2ceaa4eb7d48?auto=format&fit=crop&w=1200&q=80" alt="Cosmo Car Customs detailing studio interior" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" loading="lazy" />
        </div>
        <div className="reveal-up">
          <div className="label-badge mb-3 text-white/40">About the studio</div>
          <h2 className="display-xl mb-5 text-white">Precision-focused detailing, led by Rajinder and the Cosmo Car team since 2020.</h2>
          <p className="mb-5 max-w-[540px] text-[15px] leading-7 text-white/68">What started as a passion for paint care in Mississauga has grown into a full vehicle protection studio trusted by over 500 clients across the GTA. We operate on a simple principle: do it right the first time, or don't do it at all.</p>
          <div className="mb-8 grid grid-cols-2 gap-4">
            {[[BUSINESS.reviewCount,'Google reviews'],[BUSINESS.googleRating+'/5','Average rating'],[BUSINESS.yearsExperience+' yrs','Combined expertise'],['500+','Vehicles protected']].map(([v,l])=>(
              <div key={l} className="border border-[#303030] p-4">
                <div className="text-2xl font-bold text-white">{v}</div>
                <div className="label-badge mt-1 text-white/45">{l}</div>
              </div>
            ))}
          </div>
          <Link href="/about" className="btn-primary">Meet the Team</Link>
        </div>
      </div>
    </section>
  );
}
