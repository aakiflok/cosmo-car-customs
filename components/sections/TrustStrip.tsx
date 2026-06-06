'use client';
import { useRef } from 'react';
import { useCounter } from '@/hooks/useCounter';
import { BUSINESS } from '@/lib/data';

function Stat({
  value,
  suffix = '',
  label,
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  useCounter(ref, value);
  return (
    <div className="group relative flex flex-col items-start px-4 sm:px-6 md:px-10 py-8 sm:py-12 md:py-16 first:pl-0 fade-up">
      <div className="absolute left-0 top-1/2 h-8 sm:h-10 md:h-12 w-px -translate-y-1/2 bg-rossa opacity-20 group-first:hidden" aria-hidden="true" />
      <div className="num-hero text-white tracking-tighter">
        <span ref={ref}>{decimals > 0 ? value.toFixed(decimals) : 0}</span>
        <span className="text-rossa ml-1">{suffix}</span>
      </div>
      <div className="label-uc mt-2 sm:mt-3 md:mt-4 text-[8px] sm:text-[9px] text-white/40">{label}</div>
    </div>
  );
}

export default function TrustStrip() {
  return (
    <section className="bg-[#0d0d0d] border-y border-[#1f1f1f]" aria-label="Trust stats">
      <div className="mx-auto max-w-[1440px] overflow-x-auto px-5 md:px-10 no-scrollbar">
        <div className="flex min-w-max md:min-w-0 md:grid md:grid-cols-4">
          <Stat value={4.9}  suffix="★" label="Google Rating"    decimals={1} />
          <Stat value={parseInt(BUSINESS.reviewCount)} suffix="+" label="Verified Reviews" />
          <Stat value={parseInt(BUSINESS.yearsExperience)} suffix="+" label="Years Experience" />
          <Stat value={500}  suffix="+" label="Vehicles Served" />
        </div>
      </div>
    </section>
  );
}
