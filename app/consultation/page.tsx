'use client';
import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

const STEPS = [
  {
    id: 'vehicle', label: 'Vehicle category',
    options: ['Daily Driver','Luxury / Sport','Exotic / Supercar','Truck / SUV']
  },
  {
    id: 'service', label: 'Primary interest',
    options: ['Ceramic Coating','Paint Protection Film','Paint Correction','Window Tinting','Full Detail','Bundle Package']
  },
  {
    id: 'condition', label: 'Current paint condition',
    options: ['Brand new / <1 year','Good — minor swirls','Needs correction work','Unknown — needs assessment']
  },
  {
    id: 'timing', label: 'Preferred timing',
    options: ['This week','This month','Within 3 months','Flexible / just exploring']
  },
];

export default function ConsultationPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [contact, setContact] = useState({ name: '', phone: '', email: '' });

  const current = STEPS[step];
  const progress = ((step) / (STEPS.length)) * 100;

  function select(val: string) {
    setAnswers(a => ({ ...a, [current.id]: val }));
    setTimeout(() => { if (step < STEPS.length - 1) setStep(s => s + 1); }, 260);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-canvas px-4 pb-24 pt-28 md:px-8">
      <div className="mx-auto max-w-[780px]">
        {!submitted ? (
          <>
            <div className="label-badge mb-2 text-white/40">Private consultation</div>
            <h1 className="display-xl mb-8 text-white">Tell us about your vehicle and goals.</h1>
            {step < STEPS.length ? (
              <>
                <div className="mb-8">
                  <div className="mb-2 flex justify-between">
                    <span className="label-badge text-white/45">{current.label}</span>
                    <span className="label-badge text-white/30">Step {step + 1} of {STEPS.length + 1}</span>
                  </div>
                  <div className="h-1 w-full bg-[#303030]">
                    <div className="h-full bg-rossa transition-all duration-500" style={{ width: `${progress}%` }} />
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {current.options.map(opt => (
                    <button key={opt} onClick={() => select(opt)}
                      className={`border p-5 text-left transition hover:-translate-y-[1px] ${
                        answers[current.id] === opt ? 'border-rossa bg-rossa/10 text-white' : 'border-[#303030] text-white/78 hover:border-white/40'
                      }`}>
                      <div className="label-badge mb-1 text-white/40">{answers[current.id] === opt ? '✓ Selected' : 'Select'}</div>
                      <div className="text-[16px] font-medium">{opt}</div>
                    </button>
                  ))}
                </div>
                {answers[current.id] && step === STEPS.length - 1 && (
                  <button onClick={() => setStep(STEPS.length)} className="btn-primary mt-6 flex items-center gap-2">
                    Continue <ArrowRight size={14} />
                  </button>
                )}
              </>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="mb-8">
                  <div className="mb-2 flex justify-between">
                    <span className="label-badge text-white/45">Contact details</span>
                    <span className="label-badge text-white/30">Step {STEPS.length + 1} of {STEPS.length + 1}</span>
                  </div>
                  <div className="h-1 w-full bg-[#303030]"><div className="h-full bg-rossa w-full transition-all duration-500" /></div>
                </div>
                {[['name','Name','Your full name'],['phone','Phone','Best number to reach you'],['email','Email','Your email address']].map(([k,l,p])=>(
                  <div key={k}>
                    <label className="label-badge mb-2 block text-white/50">{l}</label>
                    <input type={k==='email'?'email':k==='phone'?'tel':'text'} required placeholder={p} value={contact[k as keyof typeof contact]}
                      onChange={e => setContact(c => ({...c, [k]: e.target.value}))}
                      className="w-full border border-[#303030] bg-canvas px-4 py-3 text-white placeholder-white/30 focus:border-rossa focus:outline-none rounded-none" />
                  </div>
                ))}
                <div className="border border-[#303030] bg-[#222222] p-5">
                  <div className="label-badge mb-3 text-white/40">Your selections</div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {STEPS.map(s => answers[s.id] && (
                      <div key={s.id} className="text-sm"><span className="text-white/45">{s.label}: </span><span className="text-white">{answers[s.id]}</span></div>
                    ))}
                  </div>
                </div>
                <button type="submit" className="btn-primary">Submit Consultation Request</button>
              </form>
            )}
          </>
        ) : (
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-rossa">
              <Check size={28} className="text-rossa" />
            </div>
            <h2 className="display-lg mb-4 text-white">We'll be in touch shortly, {contact.name}.</h2>
            <p className="mb-8 text-[15px] leading-7 text-white/62">Our team typically responds within a few hours. In the meantime, explore our services or view our gallery for inspiration.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/gallery" className="btn-primary">View Gallery</Link>
              <Link href="/#services" className="btn-outline">Explore Services</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
