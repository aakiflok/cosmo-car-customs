'use client';
import { Shield, Star, Clock, Award } from 'lucide-react';
import { BUSINESS } from '@/lib/data';

const TRUST = [
  { icon: Star,   label: BUSINESS.googleRating + ' Google Rating',   sub: BUSINESS.reviewCount + ' verified reviews' },
  { icon: Shield, label: 'Licensed & Insured',                        sub: 'Full professional coverage' },
  { icon: Clock,  label: '5-Year Warranty',                           sub: 'On all ceramic coatings' },
  { icon: Award,  label: 'Certified Installers',                      sub: 'Gyeon, XPEL & SunTek trained' },
];

export default function TrustStrip() {
  return (
    <section aria-label="Trust signals" className="w-full bg-elevated border-t border-hairline">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-hairline">
          {TRUST.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-4 py-6 sm:py-8 px-4 sm:px-6 first:pl-0 last:pr-0">
              <Icon size={18} className="flex-shrink-0 text-rossa" aria-hidden="true" />
              <div>
                <div className="label-uc text-[9px] text-white">{label}</div>
                <div className="label-uc mt-1 text-[8px] text-white/35">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
