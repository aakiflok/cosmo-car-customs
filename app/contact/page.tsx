import type { Metadata } from 'next';
import { Phone, MapPin, Instagram, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { BUSINESS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact Cosmo Car Customs in Mississauga. Call ${BUSINESS.phone} or fill in the consultation form.`,
};

const CONTACT_ITEMS = [
  { icon: Phone,     label: 'Primary phone',  value: BUSINESS.phone,         href: `tel:${BUSINESS.phone.replace(/-/g,'')}` },
  { icon: Phone,     label: 'Alternative',    value: BUSINESS.phone2,        href: `tel:${BUSINESS.phone2.replace(/-/g,'')}` },
  { icon: MapPin,    label: 'Address',        value: BUSINESS.address,       href: 'https://maps.google.com/?q=1380+Cardiff+Blvd+Unit+9+Mississauga+ON' },
  { icon: Instagram, label: 'Instagram',      value: '@cosmocarcustoms',      href: BUSINESS.instagram },
  { icon: Clock,     label: 'Hours',          value: 'Mon – Sat · 9am – 6pm', href: '#' },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-canvas px-4 pb-[96px] pt-[128px] md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-[64px]">
          <div className="label-badge mb-[8px] text-white/40">Contact</div>
          <h1 className="display-xl text-white">Get in touch with the studio.</h1>
        </div>

        <div className="grid gap-px bg-[#303030] lg:grid-cols-[1fr_0.6fr]">
          {/* Contact details */}
          <div className="bg-canvas p-[32px] md:p-[48px]">
            <div className="label-badge mb-[24px] text-white/40">Studio details</div>
            <ul className="space-y-[4px]">
              {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex min-h-[64px] items-center gap-[16px] border-b border-[#303030] py-[16px] transition-colors hover:text-rossa"
                  >
                    <Icon size={16} className="shrink-0 text-rossa" aria-hidden="true" />
                    <div className="flex-1">
                      <div className="label-badge text-white/35">{label}</div>
                      <div className="mt-[4px] text-[14px] text-white">{value}</div>
                    </div>
                    <ArrowRight size={13} className="text-white/25" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Consultation card */}
          <div className="bg-elevated p-[32px] md:p-[48px]">
            <div className="label-badge mb-[16px] text-white/40">Fastest route to booking</div>
            <p className="mb-[24px] text-[14px] leading-7 text-white/65">
              Use the consultation flow — it routes your request with full context so our team can respond accurately and quickly.
            </p>
            <Link href="/consultation" className="btn-primary w-full">Start Consultation</Link>
            <div className="mt-[24px] border-t border-[#303030] pt-[24px]">
              <p className="text-[12px] leading-6 text-white/35">
                Typically responds within a few business hours during Mon – Sat, 9am – 6pm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
