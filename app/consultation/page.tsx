'use client';
import { useState } from 'react';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import Link from 'next/link';

const STEPS = [
  { id: 'vehicle',   label: 'Vehicle category',       hint: 'This helps us recommend the right product tier.',     options: ['Daily Driver', 'Luxury / Sport', 'Exotic / Supercar', 'Truck / SUV'] },
  { id: 'service',   label: 'Primary interest',        hint: 'You can always add services during assessment.',       options: ['Ceramic Coating', 'Paint Protection Film', 'Paint Correction', 'Window Tinting', 'Full Detail', 'Bundle Package'] },
  { id: 'condition', label: 'Current paint condition', hint: 'Be honest — this shapes our recommendation.',         options: ['Brand new / < 1 year', 'Good — minor swirls', 'Needs correction work', 'Unknown — needs assessment'] },
  { id: 'timing',    label: 'Preferred timing',        hint: 'We will do our best to accommodate.',                 options: ['This week', 'This month', 'Within 3 months', 'Flexible / just exploring'] },
];

export default function ConsultationPage() {
  const [step,      setStep]      = useState(0);
  const [answers,   setAnswers]   = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [contact,   setContact]   = useState({ name: '', phone: '', email: '' });

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
    <div className="min-h-screen bg-canvas container-pad page-hero pb-24">
      <div className="max-w-[680px]">
        {!submitted ? (
          <>
            <span className="livery-line" />
            <div className="label-uc mb-3 text-[9px] text-white/30">Private consultation</div>
            <h1 className="display-xl mb-10 text-white">Tell us about your vehicle and goals.</h1>

            <div className="mb-10">
              <div className="mb-2 flex items-center justify-between">
                <span className="label-uc text-[9px] text-white/40">
                  {isContactStep ? 'Contact details' : current.label}
                </span>
                <span className="label-uc text-[9px] text-white/25">Step {step + 1} of {STEPS.length + 1}</span>
              </div>
              <div className="h-px w-full bg-[#1f1f1f]" role="progressbar"
                aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}>
                <div className="h-full bg-rossa transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
              {!isContactStep && (
                <p className="mt-2 label-uc text-[9px] text-white/30">{current.hint}</p>
              )}
            </div>

            {!isContactStep ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {current.options.map(opt => {
                  const selected = answers[current.id] === opt;
                  return (
                    <button key={opt} onClick={() => select(opt)}
                      className={`border p-6 text-left transition-all hover:-translate-y-px ${
                        selected ? 'border-rossa bg-rossa/10' : 'border-[#1f1f1f] hover:border-white/20'
                      }`}
                      aria-pressed={selected}>
                      <div className="label-uc mb-1 text-[9px] text-white/30">{selected ? '✓ Selected' : 'Select'}</div>
                      <div className="text-[15px] font-medium text-white">{opt}</div>
                    </button>
                  );
                })}
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="space-y-5">
                {([['name','Name','text','Your full name'],['phone','Phone','tel','Best number to reach you'],['email','Email','email','Your email address']] as const).map(
                  ([key, label, type, placeholder]) => (
                    <div key={key}>
                      <label htmlFor={key} className="label-uc mb-2 block text-[9px] text-white/40">{label}</label>
                      <input id={key} type={type} required placeholder={placeholder}
                        autoComplete={key === 'email' ? 'email' : key === 'phone' ? 'tel' : 'name'}
                        value={contact[key]} onChange={e => setContact(c => ({ ...c, [key]: e.target.value }))}
                        className="input" />
                    </div>
                  )
                )}
                <div className="border border-[#1f1f1f] bg-[#0d0d0d] p-6">
                  <div className="label-uc mb-4 text-[9px] text-white/30">Your selections</div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {STEPS.map(s => answers[s.id] && (
                      <div key={s.id} className="text-[13px]">
                        <span className="text-white/35">{s.label}: </span>
                        <span className="text-white">{answers[s.id]}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button type="button" onClick={() => setStep(s => s - 1)}
                    className="btn-outline flex w-full items-center justify-center gap-2 sm:w-auto">
                    <ArrowLeft size={12} aria-hidden="true" /> Back
                  </button>
                  <button type="submit" className="btn-primary flex w-full items-center justify-center gap-2 sm:w-auto">
                    <span>Submit Request</span> <ArrowRight size={12} aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}

            {!isContactStep && step > 0 && (
              <button onClick={() => setStep(s => s - 1)} className="btn-outline mt-6 flex items-center gap-2">
                <ArrowLeft size={12} aria-hidden="true" /> Back
              </button>
            )}
            {!isContactStep && answers[current?.id] && (
              <button onClick={() => setStep(s => s + 1)} className="btn-primary ml-3 mt-4 flex items-center gap-2">
                <span>Continue</span> <ArrowRight size={12} aria-hidden="true" />
              </button>
            )}
          </>
        ) : (
          <div className="text-center">
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center border border-rossa">
              <Check size={26} className="text-rossa" aria-hidden="true" />
            </div>
            <h2 className="display-lg mb-4 text-white">
              We&rsquo;ll be in touch shortly{contact.name ? `, ${contact.name}` : ''}.
            </h2>
            <p className="mb-10 text-[14px] leading-7 text-white/50">
              Our team typically responds within a few hours during business hours.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Link href="/gallery" className="btn-primary"><span>View Gallery</span></Link>
              <Link href="/#services" className="btn-outline">Explore Services</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
