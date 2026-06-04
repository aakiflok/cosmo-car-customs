import Link from 'next/link';
import { Phone, MapPin, Instagram } from 'lucide-react';
import { BUSINESS, SERVICES } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-[#303030] bg-canvas px-4 py-16 md:px-8">
      <div className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="label-cta mb-3 text-[13px] text-white">{BUSINESS.name}</div>
          <div className="label-badge mb-5 text-white/45">{BUSINESS.tagline}</div>
          <p className="max-w-[300px] text-sm leading-6 text-white/55">{BUSINESS.reviewCount} Google reviews · {BUSINESS.googleRating} rating · Mississauga and GTA.</p>
        </div>
        <div>
          <div className="label-badge mb-5 text-white/40">Services</div>
          <ul className="space-y-3">
            {SERVICES.map(s => (
              <li key={s.slug}><Link href={`/services/${s.slug}`} className="text-sm text-white/60 hover:text-white transition-colors">{s.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="label-badge mb-5 text-white/40">Company</div>
          <ul className="space-y-3 text-sm">
            {[['About','about'],['Gallery','gallery'],['Testimonials','testimonials'],['FAQ','faq'],['Contact','contact']].map(([l,h]) => (
              <li key={h}><Link href={`/${h}`} className="text-white/60 hover:text-white transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="label-badge mb-5 text-white/40">Contact</div>
          <ul className="space-y-4">
            <li className="flex items-start gap-2 text-sm text-white/60"><Phone size={14} className="mt-0.5 shrink-0" /><a href={`tel:${BUSINESS.phone}`} className="hover:text-white">{BUSINESS.phone}</a></li>
            <li className="flex items-start gap-2 text-sm text-white/60"><MapPin size={14} className="mt-0.5 shrink-0" /><span>{BUSINESS.address}</span></li>
            <li className="flex items-center gap-2 text-sm text-white/60"><Instagram size={14} /><a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">@cosmocarcustoms</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1280px] items-center justify-between border-t border-[#303030] pt-6">
        <p className="text-sm text-white/35">© {new Date().getFullYear()} Cosmo Car Customs. All rights reserved.</p>
        <p className="text-sm text-white/35">Mississauga, Ontario</p>
      </div>
    </footer>
  );
}
