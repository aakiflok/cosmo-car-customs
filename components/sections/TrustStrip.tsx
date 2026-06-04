import { Star, Shield, Wrench, Award } from 'lucide-react';
import { BUSINESS } from '@/lib/data';

const ITEMS = [
  { icon: Star, value: BUSINESS.googleRating, label: 'Google Rating' },
  { icon: Shield, value: BUSINESS.reviewCount, label: 'Verified Reviews' },
  { icon: Wrench, value: BUSINESS.yearsExperience, label: 'Years of Expertise' },
  { icon: Award, value: '500+', label: 'Vehicles Protected' },
];

export default function TrustStrip() {
  return (
    <section className="hairline bg-canvas px-4 py-10 md:px-8">
      <div className="mx-auto grid max-w-[1280px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-4 border-r border-[#303030] last:border-r-0 pr-6">
            <Icon size={20} className="text-rossa shrink-0" />
            <div>
              <div className="text-2xl font-bold text-white">{value}</div>
              <div className="label-badge mt-0.5 text-white/45">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
