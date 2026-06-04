'use client';
import { useRef } from 'react';
import { useCounter } from '@/hooks/useCounter';
import { BUSINESS } from '@/lib/data';

function Stat({ value, suffix='', label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useCounter(ref, value);
  return (
    <div className="flex flex-col items-start border-r border-[#1f1f1f] px-8 py-10 last:border-r-0 first:pl-0">
      <div className="num-hero text-white">
        <span ref={ref}>0</span><span className="text-rossa">{suffix}</span>
      </div>
      <div className="label-uc mt-3 text-[9px] text-white/35">{label}</div>
    </div>
  );
}

export default function TrustStrip() {
  return (
    <section className="hairline hairline-b bg-[#0d0d0d]" aria-label="Trust stats">
      <div className="mx-auto max-w-[1440px] overflow-x-auto px-5 md:px-10">
        <div className="flex min-w-max md:min-w-0 md:grid md:grid-cols-4">
          <Stat value={49} suffix="" label="Google Rating" />
          <Stat value={parseInt(BUSINESS.reviewCount)} suffix="+" label="Verified Reviews" />
          <Stat value={parseInt(BUSINESS.yearsExperience)} suffix="+" label="Years Experience" />
          <Stat value={500} suffix="+" label="Vehicles Served" />
        </div>
      </div>
    </section>
  );
}
