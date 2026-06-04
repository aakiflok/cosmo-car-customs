'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { PROCESS_STEPS } from '@/lib/data';

export default function ProcessSteps() {
  useScrollReveal();

  return (
    <section className="hairline bg-[#0d0d0d] px-5 py-24 md:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14">
          <span className="livery-line reveal-up" />
          <div className="label-uc mb-3 text-[9px] text-white/30 reveal-up delay-1">How it works</div>
          <h2 className="display-xl text-white max-w-[600px] fade-up delay-2">From booking to delivery.</h2>
        </div>
        <div className="grid gap-px bg-[#1f1f1f] sm:grid-cols-3 stagger-children">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.title}
              className="bg-[#0d0d0d] p-10 reveal-up"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div
                className="num-hero mb-6 select-none text-rossa opacity-20 reveal-up"
                aria-hidden="true"
                style={{ transitionDelay: `${i * 0.12 + 0.06}s` }}
              >
                {step.number}
              </div>
              <h3 className="display-md mb-4 text-white">{step.title}</h3>
              <p className="text-[13px] leading-6 text-white/40">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
