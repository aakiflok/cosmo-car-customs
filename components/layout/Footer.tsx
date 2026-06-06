import Link from 'next/link';
import { BUSINESS, SERVICES } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] bg-canvas relative z-10" role="contentinfo">
      <div className="mx-auto max-w-[1440px] container-pad sm:px-8 md:px-10 py-16 sm:py-20 md:py-24">
        <div className="grid gap-8 sm:gap-12 md:gap-16 md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="fade-up">
            <div className="mb-4 sm:mb-6 flex items-center gap-3">
              <span className="block h-[2px] w-8 bg-rossa" />
              <span className="label-uc text-[12px] sm:text-[13px] tracking-[3px] text-white">Cosmo</span>
            </div>
            <p className="max-w-[280px] text-[13px] sm:text-[14px] leading-6 sm:leading-7 text-white/50">
              Premium automotive detailing and paint protection. Based in Mississauga, serving the Greater Toronto Area.
            </p>
            <div className="mt-6 sm:mt-8 text-[12px] sm:text-[13px] text-white/40 leading-5 sm:leading-6">
              <div>{BUSINESS.address}</div>
              <div className="mt-1">Mon &ndash; Sat &middot; 9am &ndash; 6pm</div>
            </div>
          </div>

          {/* Services */}
          <div className="fade-up delay-1">
            <div className="label-uc mb-4 sm:mb-6 text-[8px] sm:text-[9px] text-white/30">Services</div>
            <ul className="space-y-3 sm:space-y-4">
              {SERVICES.map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}
                    className="text-[12px] sm:text-[13px] text-white/50 transition-colors hover:text-white"
                    data-cursor="link">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="fade-up delay-2">
            <div className="label-uc mb-4 sm:mb-6 text-[8px] sm:text-[9px] text-white/30">Company</div>
            <ul className="space-y-3 sm:space-y-4">
              {[['About','/about'],['Gallery','/gallery'],['Reviews','/reviews'],['FAQ','/faq'],['Contact','/contact']].map(([l,h])=>(
                <li key={h}>
                  <Link href={h} className="text-[12px] sm:text-[13px] text-white/50 transition-colors hover:text-white" data-cursor="link">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="fade-up delay-3">
            <div className="label-uc mb-4 sm:mb-6 text-[8px] sm:text-[9px] text-white/30">Contact</div>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href={`tel:${BUSINESS.phone.replace(/-/g,'')}`} className="text-[12px] sm:text-[13px] text-white/50 hover:text-white" data-cursor="link">
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center text-[12px] sm:text-[13px] text-white/50 hover:text-white" data-cursor="link">
                  Instagram
                  <span className="relative ml-2 block h-px w-4 bg-white/20 overflow-hidden">
                    <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  </span>
                </a>
              </li>
            </ul>
            <Link href="/consultation" className="btn-outline mt-6 sm:mt-8 w-full justify-center" data-cursor="link">
              <span>Book Consultation</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-24 flex flex-col items-center justify-between gap-4 sm:gap-6 border-t border-[#1f1f1f] pt-6 sm:pt-8 sm:flex-row fade-up delay-4">
          <p className="label-uc text-[8px] sm:text-[9px] text-white/30">&copy; {new Date().getFullYear()} Cosmo Car Customs. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6 label-uc text-[8px] sm:text-[9px] text-white/30">
            <Link href="/privacy" className="hover:text-white transition-colors" data-cursor="link">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors" data-cursor="link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
