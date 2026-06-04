import { Star, Shield, Wrench, Award } from 'lucide-react';
import { BUSINESS } from '@/lib/data';

const ITEMS = [
  { icon: Star,   value: BUSINESS.googleRating, label: 'Google Rating',      accent: true },
  { icon: Shield, value: BUSINESS.reviewCount,  label: 'Verified Reviews',   accent: false },
  { icon: Wrench, value: BUSINESS.yearsExperience, label: 'Years of Expertise', accent: false },
  { icon: Award,  value: '500+',                label: 'Vehicles Protected', accent: false },
];

export default function TrustStrip() {
  return (
    <section aria-label="Trust statistics" className="hairline bg-canvas">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-px bg-[#303030] lg:grid-cols-4">
        {ITEMS.map(({ icon: Icon, value, label, accent }) => (
          <div key={label} className="bg-canvas px-6 py-8 md:px-8">
            <Icon size={18} className={`mb-4 ${accent ? 'text-rossa' : 'text-white/40'}`} aria-hidden="true" />
            <div className="text-2xl font-bold text-white md:text-3xl">{value}</div>
            <div className="label-badge mt-2 text-white/40">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
