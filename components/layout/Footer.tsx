'use client';
import Link from 'next/link';
import { BUSINESS, SERVICES } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="w-full bg-canvas border-t border-hairline" role="contentinfo">
      <div className="w-full px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-16">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="block h-[2px] w-8 bg-rossa" />
              <span className="label-uc text-[13px] tracking-[3px] text-white">Cosmo</span>
            </div>
            <p className="text-[13px] leading-7 text-white/40 mb-6">
              Premium car detailing, ceramic coating, PPF, and window tinting in Mississauga, ON.
            </p>
            <div className="label-uc text-[9px] text-white/20">{BUSINESS.googleRating} Google &middot; {BUSINESS.reviewCount} Reviews</div>
          </div>

          {/* Services */}
          <div>
            <div className="label-uc mb-6 text-[9px] text-white/30">Services</div>
            <ul className="space-y-3">
              {SERVICES.map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-[13px] text-white/40 hover:text-white transition-colors">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="label-uc mb-6 text-[9px] text-white/30">Company</div>
            <ul className="space-y-3">
              {[['About', '/about'],['Gallery', '/gallery'],['Reviews', '/reviews'],['FAQ', '/faq'],['Contact', '/consultation']].map(([l,h]) => (
                <li key={h}>
                  <Link href={h} className="text-[13px] text-white/40 hover:text-white transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="label-uc mb-6 text-[9px] text-white/30">Contact</div>
            <div className="space-y-4">
              <div>
                <div className="label-uc text-[8px] text-white/20 mb-1">Phone</div>
                <a href={`tel:${BUSINESS.phone.replace(/-/g,'')}`} className="text-[13px] text-white/50 hover:text-white transition-colors">{BUSINESS.phone}</a>
              </div>
              <div>
                <div className="label-uc text-[8px] text-white/20 mb-1">Address</div>
                <p className="text-[13px] text-white/50">{BUSINESS.address}</p>
              </div>
              <div>
                <div className="label-uc text-[8px] text-white/20 mb-1">Hours</div>
                <p className="text-[13px] text-white/50">{BUSINESS.hours}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-hairline pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="label-uc text-[8px] text-white/20">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="label-uc text-[8px] text-white/15">Mississauga, Ontario, Canada</p>
        </div>
      </div>
    </footer>
  );
}
