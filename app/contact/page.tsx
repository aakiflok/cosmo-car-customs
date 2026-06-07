import type { Metadata } from 'next';
import { Phone, MapPin, Instagram, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { BUSINESS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact Cosmo Car Customs in Mississauga. Call ${BUSINESS.phone} or fill in the consultation form.`,
  alternates: { canonical: 'https://cosmocarcustoms.com/contact' },
};

const CONTACT_ITEMS = [
  { icon: Phone,     label: 'Primary phone',   value: BUSINESS.phone,          href: `tel:${BUSINESS.phone.replace(/-/g,'')}` },
  { icon: Phone,     label: 'Alternative',     value: BUSINESS.phone2,         href: `tel:${BUSINESS.phone2.replace(/-/g,'')}` },
  { icon: MapPin,    label: 'Address',         value: BUSINESS.address,        href: 'https://maps.google.com/?q=1380+Cardiff+Blvd+Unit+9+Mississauga+ON' },
  { icon: Instagram, label: 'Instagram',       value: '@cosmocarcustoms',       href: BUSINESS.instagram },
  { icon: Clock,     label: 'Hours',           value: 'Mon – Sat · 9am – 6pm', href: '#' },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-canvas">

      {/* Hero */}
      <section className="w-full px-6 sm:px-10 lg:px-16 page-hero">
        <span className="livery-line" />
        <div className="label-uc mb-3 text-[9px] text-white/30">Contact</div>
        <h1 className="display-xl mb-6 text-white">Get in touch with the studio.</h1>
        <p className="max-w-[480px] text-[15px] leading-7 text-white/50">
          Call, message on Instagram, or use the consultation flow for fastest response.
        </p>
      </section>

      {/* Details grid */}
      <section className="border-t border-hairline w-full px-6 sm:px-10 lg:px-16 section-pad">
        <div className="grid gap-px bg-hairline lg:grid-cols-[1fr_0.55fr]">
          <div className="bg-canvas p-10 md:p-14">
            <span className="livery-line" />
            <div className="label-uc mb-8 text-[9px] text-white/30">Studio details</div>
            <ul className="divide-y divide-hairline">
              {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex min-h-[68px] items-center gap-5 py-4 transition-colors">
                    <Icon size={15} className="shrink-0 text-rossa" aria-hidden="true" />
                    <div className="flex-1">
                      <div className="label-uc text-[9px] text-white/30">{label}</div>
                      <div className="mt-1 text-[14px] text-white transition-colors group-hover:text-rossa">{value}</div>
                    </div>
                    <ArrowRight size={12} className="text-white/20 transition-colors group-hover:text-rossa" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-elevated p-10 md:p-14">
            <span className="livery-line" />
            <div className="label-uc mb-4 text-[9px] text-white/30">Fastest route</div>
            <h2 className="display-md mb-4 text-white">Start with a consultation.</h2>
            <p className="mb-8 text-[14px] leading-7 text-white/45">
              The consultation flow routes your request with full context so our team can respond accurately and quickly.
            </p>
            <Link href="/consultation" className="btn-primary w-full"><span>Start Consultation</span></Link>
            <p className="mt-6 label-uc text-[9px] text-white/25">
              Responds within a few hours &middot; Mon &ndash; Sat 9am &ndash; 6pm
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
