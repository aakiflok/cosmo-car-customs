import { PROCESS_STEPS } from '@/lib/data';

export default function ProcessSteps() {
  return (
    <section id="process" className="bg-canvas px-4 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14 max-w-[720px] reveal-up">
          <div className="label-badge mb-3 text-white/40">How it works</div>
          <h2 className="display-xl mb-5 text-white">Simple process. Precise outcome. No guesswork.</h2>
        </div>
        <div className="grid gap-px bg-[#303030] lg:grid-cols-3">
          {PROCESS_STEPS.map(s => (
            <div key={s.number} className="bg-canvas p-8 md:p-12 reveal">
              <div className="mb-8 text-[80px] font-bold leading-none tracking-[-0.04em] text-rossa">{s.number}</div>
              <h3 className="mb-4 text-[22px] font-medium text-white">{s.title}</h3>
              <p className="max-w-[380px] text-sm leading-6 text-white/65">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
