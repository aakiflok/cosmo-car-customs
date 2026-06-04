import { PROCESS } from '@/lib/data';

export default function ProcessSteps() {
  return (
    <section className="hairline bg-[#0d0d0d] px-5 py-24 md:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14">
          <span className="livery-line" />
          <div className="label-uc mb-3 text-[9px] text-white/30">How it works</div>
          <h2 className="display-xl text-white max-w-[600px] fade-up">From booking to delivery.</h2>
        </div>
        <div className="grid gap-px bg-[#1f1f1f] sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, i) => (
            <div key={step.title} className="bg-[#0d0d0d] p-8 fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="num-hero mb-6 select-none text-rossa opacity-20" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="display-md mb-3 text-white">{step.title}</h3>
              <p className="text-[13px] leading-6 text-white/40">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
