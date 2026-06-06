'use client';
import { useRef } from 'react';
import { PROCESS_STEPS } from '@/lib/data';
import { useScramble } from '@/hooks/useScramble';

export default function ProcessSteps() {
  const h2Ref = useRef<HTMLHeadingElement>(null);
  useScramble(h2Ref, 'From booking to delivery.');

  return (
    <section className="bg-[#0a0a0a] border-t border-[#1f1f1f] section-pad container-pad">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 grid lg:grid-cols-[1fr_auto] lg:items-end gap-8">
          <div className="stagger-children">
            <span className="livery-line fade-up" />
            <div className="label-uc mb-4 text-[9px] text-white/40 fade-up">How it works</div>
            <h2 ref={h2Ref} className="display-xl text-white max-w-[600px] min-h-[1.5em] fade-up delay-2">From booking to delivery.</h2>
          </div>
          <div className="hidden lg:flex flex-col items-end gap-1 pb-2 fade-up delay-3">
            <span className="num-hero text-white/8 leading-none">03</span>
            <p className="label-uc text-[9px] text-white/25">Simple steps</p>
          </div>
        </div>
        <div className="grid gap-px bg-[#1f1f1f] sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.title}
              className="bg-[#0a0a0a] p-5 sm:p-7 md:p-10 lg:p-12 fade-up"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="font-barlow text-[4rem] sm:text-[5rem] lg:text-[6rem] leading-none tracking-tighter mb-4 sm:mb-6 select-none text-rossa opacity-20 fade-up"
                aria-hidden="true"
                style={{ transitionDelay: `${i * 0.1 + 0.1}s` }}
              >
                {step.number}
              </div>
              <h3 className="display-sm mb-3 sm:mb-4 text-white text-base sm:text-lg">{step.title}</h3>
              <p className="text-[13px] sm:text-[14px] leading-6 sm:leading-7 text-white/50">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
