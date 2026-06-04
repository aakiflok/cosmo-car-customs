import Link from 'next/link';
import { BUSINESS, SERVICES } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] bg-[#0a0a0a]" role="contentinfo">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="block h-[2px] w-8 bg-rossa" />
              <span className="label-uc text-[13px] tracking-[3px] text-white">Cosmo</span>
            </div>
            <p className="max-w-[260px] text-[13px] leading-6 text-white/40">
              Premium detailing and paint protection. Mississauga and GTA.
            </p>
            <div className="mt-6 text-[13px] text-white/30">
              <div>{BUSINESS.address}</div>
              <div className="mt-1">Mon &ndash; Sat &middot; 9am &ndash; 6pm</div>
            </div>
          </div>
          {/* Services */}
          <div>
            <div className="label-uc mb-5 text-[9px] text-white/25">Services</div>
            <ul className="space-y-3">
              {SERVICES.map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}
                    className="text-[13px] text-white/45 transition-colors hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Company */}
          <div>
            <div className="label-uc mb-5 text-[9px] text-white/25">Company</div>
            <ul className="space-y-3">
              {[['About','/about'],['Gallery','/gallery'],['Testimonials','/testimonials'],['FAQ','/faq'],['Contact','/contact']].map(([l,h])=>(
                <li key={h}>
                  <Link href={h} className="text-[13px] text-white/45 transition-colors hover:text-white">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <div className="label-uc mb-5 text-[9px] text-white/25">Contact</div>
            <ul className="space-y-3">
              <li><a href={`tel:${BUSINESS.phone.replace(/-/g,'')}`} className="text-[13px] text-white/45 hover:text-white">{BUSINESS.phone}</a></li>
              <li><a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/45 hover:text-white">Instagram</a></li>
            </ul>
            <Link href="/consultation" className="btn-primary mt-8 w-full justify-center">
              <span>Book Now</span>
            </Link>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[#1f1f1f] pt-8">
          <p className="label-uc text-[9px] text-white/20">&copy; {new Date().getFullYear()} Cosmo Car Customs. All rights reserved.</p>
          <p className="label-uc text-[9px] text-white/15">Mississauga &middot; GTA &middot; Ontario</p>
        </div>
      </div>
    </footer>
  );
}
