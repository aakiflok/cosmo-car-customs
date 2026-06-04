'use client';
import { useState } from 'react';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import Link from 'next/link';

const STEPS = [
  {
    id: 'vehicle',
    label: 'Vehicle category',
    hint: 'This helps us recommend the right product tier.',
    options: ['Daily Driver', 'Luxury / Sport', 'Exotic / Supercar', 'Truck / SUV'],
  },
  {
    id: 'service',
    label: 'Primary interest',
    hint: 'You can always add services during assessment.',
    options: ['Ceramic Coating', 'Paint Protection Film', 'Paint Correction', 'Window Tinting', 'Full Detail', 'Bundle Package'],
  },
  {
    id: 'condition',
    label: 'Current paint condition',
    hint: 'Be honest — this shapes our recommendation.',
    options: ['Brand new / < 1 year', 'Good — minor swirls', 'Needs correction work', 'Unknown — needs assessment'],
  },
  {
    id: 'timing',
    label: 'Preferred timing',
    hint: 'We will do our best to accommodate.',
    options: ['This week', 'This month', 'Within 3 months', 'Flexible / just exploring'],
  },
];

export default function ConsultationPage() {
  const [step,      setStep]      = useState(0);
  const [answers,   setAnswers]   = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [contact,   setContact]   = useState({ name:'', phone:'', email:'' });

  const isContactStep = step === STEPS.length;
  const current       = STEPS[step];
  const progress      = (step / (STEPS.length + 1)) * 100;

  function select(val: string) {
    const next = { ...answers, [current.id]: val };
    setAnswers(next);
    if (step < STEPS.length - 1) setTimeout(() => setStep(s => s + 1), 240);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-canvas px-4 pb-24 pt-24 md:px-8">
      <div className="mx-auto max-w-[720px]">
        {!submitted ? (
          <>
            {/* Page header */}
            <div className="label-badge mb-[8px] text-white/40">Private consultation</div>
            <h1 className="display-xl mb-[32px] text-white">Tell us about your vehicle and goals.</h1>

            {/* Progress */}
            <div className="mb-[40px]">
              <div className="mb-[8px] flex items-center justify-between">
                <span className="label-badge text-white/40">
                  {isContactStep ? 'Contact details' : current.label}
                </span>
                <span className="label-badge text-white/25">Step {step + 1} of {STEPS.length + 1}</span>
              </div>
              {/* Progress bar */}
              <div className="h-px w-full bg-[#303030]" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}>
                <div className="h-full bg-rossa transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
              {!isContactStep && (
                <p className="mt-[8px] text-[12px] text-white/35">{current.hint}</p>
              )}
            </div>

            {!isContactStep ? (
              /* ── Option grid ── */
              <div className="grid gap-[12px] sm:grid-cols-2">
                {current.options.map(opt => {
                  const selected = answers[current.id] === opt;
                  return (
                    <button
                      key={opt}
                      onClick={() => select(opt)}
                      className={`border p-[20px] text-left transition-all hover:-translate-y-[1px] active:translate-y-0 ${
                        selected
                          ? 'border-rossa bg-rossa/8 text-white'
                          : 'border-[#303030] text-white/72 hover:border-white/30'
                      }`}
                      aria-pressed={selected}
                    >
                      <div className="label-badge mb-[4px] text-white/35">{selected ? '✓ Selected' : 'Select'}</div>
                      <div className="text-[15px] font-medium">{opt}</div>
                    </button>
                  );
                })}
              </div>
            ) : (
              /* ── Contact form ── */
              <form onSubmit={submit} noValidate className="space-y-[16px]">
                {([['name','Name','text','Your full name'],['phone','Phone','tel','Best number to reach you'],['email','Email','email','Your email address']] as const).map(
                  ([key, label, type, placeholder]) => (
                    <div key={key}>
                      <label htmlFor={key} className="label-badge mb-[8px] block text-white/45">{label}</label>
                      <input
                        id={key}
                        type={type}
                        required
                        placeholder={placeholder}
                        autoComplete={key === 'email' ? 'email' : key === 'phone' ? 'tel' : 'name'}
                        value={contact[key]}
                        onChange={e => setContact(c => ({ ...c, [key]: e.target.value }))}
                        className="input"
                      />
                    </div>
                  )
                )}

                {/* Summary */}
                <div className="border border-[#303030] bg-[#222222] p-[24px]">
                  <div className="label-badge mb-[16px] text-white/35">Your selections</div>
                  <div className="grid gap-[8px] sm:grid-cols-2">
                    {STEPS.map(s => answers[s.id] && (
                      <div key={s.id} className="text-[13px]">
                        <span className="text-white/40">{s.label}: </span>
                        <span className="text-white">{answers[s.id]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-[12px] sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setStep(s => s - 1)}
                    className="btn-outline flex w-full items-center justify-center gap-2 sm:w-auto"
                  >
                    <ArrowLeft size={13} aria-hidden="true" /> Back
                  </button>
                  <button type="submit" className="btn-primary flex w-full items-center justify-center gap-2 sm:w-auto">
                    Submit Request <ArrowRight size={13} aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}

            {/* Back / forward nav for option steps */}
            {!isContactStep && step > 0 && (
              <button
                onClick={() => setStep(s => s - 1)}
                className="btn-outline mt-[24px] flex items-center gap-2"
              >
                <ArrowLeft size={13} aria-hidden="true" /> Back
              </button>
            )}
            {/* Manual advance if already answered */}
            {!isContactStep && answers[current.id] && (
              <button
                onClick={() => setStep(s => s + 1)}
                className="btn-primary mt-[16px] ml-[12px] flex items-center gap-2"
              >
                Continue <ArrowRight size={13} aria-hidden="true" />
              </button>
            )}
          </>
        ) : (
          /* ── Confirmation ── */
          <div className="text-center">
            <div className="mx-auto mb-[32px] flex h-[64px] w-[64px] items-center justify-center border border-rossa">
              <Check size={26} className="text-rossa" aria-hidden="true" />
            </div>
            <h2 className="display-lg mb-[16px] text-white">We&rsquo;ll be in touch shortly{contact.name ? `, ${contact.name}` : ''}.</h2>
            <p className="mb-[40px] text-[14px] leading-7 text-white/58">
              Our team typically responds within a few hours during business hours. In the meantime, explore our gallery or browse services.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/gallery"   className="btn-primary w-full sm:w-auto">View Gallery</Link>
              <Link href="/#services" className="btn-outline w-full sm:w-auto">Explore Services</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
