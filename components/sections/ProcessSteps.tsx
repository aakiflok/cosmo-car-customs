import Link from 'next/link';
import { PROCESS_STEPS } from '@/lib/data';

export default function ProcessSteps() {
  return (
    <section id="process" aria-labelledby="process-heading" className="bg-canvas px-4 py-[96px] md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-[48px] max-w-[720px] reveal-up">
          <div className="label-badge mb-[8px] text-white/40">How it works</div>
          <h2 id="process-heading" className="display-xl mb-[16px] text-white">
            Simple process. Precise outcome.
          </h2>
          <p className="text-[14px] leading-7 text-white/58 md:text-[15px]">
            From consultation through delivery — every step is clear and intentional.
          </p>
        </div>

        {/* Steps — 1-up → 3-up */}
        <div className="grid gap-px bg-[#303030] md:grid-cols-3">
          {PROCESS_STEPS.map((s, i) => (
            <div key={s.number} className={`bg-canvas p-[32px] reveal reveal-delay-${i + 1} md:p-[48px]`}>
              {/* Spec-cell number */}
              <div className="spec-cell mb-[32px]">
                <div className="num-display text-rossa">{s.number}</div>
              </div>
              <h3 className="display-md mb-[16px] text-white">{s.title}</h3>
              <p className="max-w-[360px] text-[13px] leading-7 text-white/60">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-[48px] text-center">
          <Link href="/consultation" className="btn-primary">Start Your Consultation</Link>
        </div>
      </div>
    </section>
  );
}
