'use client';

import { Check } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';

interface Package {
  name: string;
  tier: 'essential' | 'signature' | 'concours';
  features: string[];
  highlight?: boolean;
}

interface PackageTableProps {
  packages: Package[];
}

export default function PackageTable({ packages }: PackageTableProps) {
  return (
    <section className="w-full bg-canvas section-pad border-t border-hairline">
      <div className="mx-auto max-w-[1440px] container-pad">
        <SectionLabel>Investment</SectionLabel>
        <h2 className="display-lg mb-20">Choose your package.</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative p-6 sm:p-8border transition-all ${
                pkg.highlight
                  ? 'border-rossa bg-rossa/5 md:scale-105 md:shadow-2xl'
                  : 'border-hairline bg-elevated hover:border-white/20'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rossa px-3 py-1 rounded-full">
                  <span className="label-uc text-7px text-white">Most Popular</span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="display-sm mb-2">{pkg.name}</h3>
                <div className="h-px w-8 bg-rossa" />
              </div>

              <ul className="space-y-4 mb-12">
                {pkg.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3">
                    <Check size={16} className="flex-shrink-0 text-rossa mt-1" aria-hidden="true" />
                    <span className="text-14px text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 border transition-all text-12px font-600 uppercase tracking-wide ${
                  pkg.highlight
                    ? 'bg-rossa border-rossa text-white hover:bg-rossa-dark'
                    : 'border-white/20 text-white hover:border-white/40'
                }`}
              >
                Select Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
