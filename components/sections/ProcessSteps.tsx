import { PROCESS_STEPS } from '@/lib/data';

export default function ProcessSteps() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="w-full bg-elevated border-t border-hairline section-pad"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="mb-14">
          <span className="livery-line" />
          <div className="label-uc mb-3 text-[9px] text-white/30">How it works</div>
          <h2 id="process-heading" className="display-xl text-white max-w-[600px]">
            We don&rsquo;t rush the process.
          </h2>
        </div>
        <div className="grid gap-px bg-hairline sm:grid-cols-3">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.number}
              className="bg-elevated p-10 md:p-14 reveal-up"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="num-hero mb-6 text-white/8" aria-hidden="true">{step.number}</div>
              <div className="label-uc mb-3 text-[9px] text-rossa">{step.number}</div>
              <h3 className="display-md mb-4 text-white">{step.title}</h3>
              <p className="text-[14px] leading-7 text-white/50">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
