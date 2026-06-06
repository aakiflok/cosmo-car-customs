'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const STEPS = [
  { n: '01', title: 'Consultation',    body: 'We inspect your vehicle, discuss your goals, and recommend the right protection package.' },
  { n: '02', title: 'Decontamination', body: 'Full wash, clay bar, and iron decontamination to create a perfectly clean surface.' },
  { n: '03', title: 'Correction',      body: 'Machine polishing removes swirls, scratches, and oxidation before any coating goes on.' },
  { n: '04', title: 'Protection',      body: 'Ceramic coating, PPF, or both — applied in our climate-controlled bay for a flawless bond.' },
  { n: '05', title: 'Final Detail',    body: 'Interior vacuum, glass clean, and a full walkaround inspection with you before handover.' },
];

export default function ProcessSteps() {
  useScrollReveal();

  return (
    <section aria-labelledby="process-heading" className="w-full bg-elevated section-pad border-t border-hairline">
      <div className="w-full px-6 sm:px-10 lg:px-16">

        <div className="mb-16 grid lg:grid-cols-2 gap-8 lg:gap-20 items-end">
          <div>
            <span className="livery-line reveal-up" />
            <div className="label-uc mb-3 text-[9px] text-white/30 reveal-up delay-1">Our Process</div>
            <h2 id="process-heading" className="display-xl text-white reveal-up delay-2">
              How we do what we do.
            </h2>
          </div>
          <p className="text-[15px] leading-8 text-white/50 reveal-up delay-3 lg:pb-2">
            Every job follows the same obsessive sequence. No shortcuts, no guesswork.
          </p>
        </div>

        <ol className="grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, i) => (
            <li key={step.n} className="bg-elevated p-8 lg:p-10 reveal-up" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="num-hero text-white/6 leading-none mb-8 text-[4rem] font-barlow font-bold">{step.n}</div>
              <h3 className="display-sm mb-4 text-white">{step.title}</h3>
              <p className="text-[13px] leading-7 text-white/50">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
