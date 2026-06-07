'use client';

import { Check } from 'lucide-react';
import Link from 'next/link';

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
    <section className="w-full bg-[#0d0d0d] section-pad border-t border-hairline">
      <div className="w-full px-6 sm:px-10 lg:px-16">

        <div className="mb-16">
          <span className="livery-line" />
          <div className="label-uc text-[9px] text-white/40 mb-4">Investment</div>
          <h2 className="display-lg text-white">Choose your package.</h2>
        </div>

        <div className="grid gap-px bg-hairline md:grid-cols-3">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col p-8 transition-all ${
                pkg.highlight
                  ? 'bg-rossa/8 outline outline-1 outline-rossa z-10'
                  : 'bg-canvas hover:bg-elevated'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-8 -translate-y-1/2 bg-rossa px-3 py-1">
                  <span className="label-uc text-[8px] text-white">Most Popular</span>
                </div>
              )}

              <div className="mb-8">
                <div className="label-uc text-[9px] text-white/40 mb-3">
                  {pkg.tier === 'essential' ? 'Tier 01' : pkg.tier === 'signature' ? 'Tier 02' : 'Tier 03'}
                </div>
                <h3 className="display-sm text-white mb-4">{pkg.name}</h3>
                <div className="h-px w-8 bg-rossa" />
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {pkg.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3">
                    <Check
                      size={13}
                      className="flex-shrink-0 text-rossa mt-[3px]"
                      aria-hidden="true"
                    />
                    <span className="text-[13px] text-white/70 leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/consultation"
                className={`w-full py-3 text-center label-uc text-[9px] border transition-all block ${
                  pkg.highlight
                    ? 'bg-rossa border-rossa text-white hover:bg-rossa-dark'
                    : 'border-white/20 text-white hover:border-white/50 hover:bg-white/5'
                }`}
              >
                Book This Package
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-6 text-[12px] text-white/30 text-center">
          Pricing varies by vehicle size and condition.{' '}
          <Link href="/consultation" className="text-white/50 underline underline-offset-2 hover:text-white transition-colors">
            Get an exact quote &rarr;
          </Link>
        </p>
      </div>
    </section>
  );
}
