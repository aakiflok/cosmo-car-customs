'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const FINISHES = [
  {
    id: 'ceramic',
    label: 'Ceramic Coating',
    headline: 'Liquid glass that lasts years.',
    body: 'A semi-permanent SiO₂ layer chemically bonds to your paint, creating a hydrophobic shield against UV, chemicals, and micro-scratches. Maintained properly, it outlasts any wax by years.',
    specs: [['Hardness', '9H'],['Hydrophobic', '130°+'],['Lifespan', '5–7 yr'],['Gloss', '+40%']],
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'ppf',
    label: 'Paint Protection Film',
    headline: 'Self-healing armour for your paint.',
    body: 'Urethane film absorbs rock chips, road debris, and key scratches. The self-healing top coat eliminates minor swirls with heat. Available in gloss, matte, or satin finish.',
    specs: [['Thickness', '8 mil'],['Self-heal', 'Yes'],['UV block', '99%'],['Lifespan', '10+ yr']],
    img: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'tint',
    label: 'Window Tinting',
    headline: 'Clarity, privacy, UV rejection.',
    body: 'Nano-ceramic film blocks up to 99% of UV rays and significantly reduces heat, without compromising visibility. Available from light limo to factory-match shades.',
    specs: [['UV Rejection', '99%'],['Heat block', '60%+'],['Clarity', 'High'],['Warranty', 'Lifetime']],
    img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1400&q=80',
  },
];

export default function FinishShowcase() {
  const [active, setActive] = useState(0);
  useScrollReveal();
  const fin = FINISHES[active];

  return (
    <section aria-labelledby="finish-heading" className="w-full bg-elevated section-pad border-t border-hairline">
      <div className="w-full px-6 sm:px-10 lg:px-16">

        <div className="mb-12">
          <span className="livery-line reveal-up" />
          <div className="label-uc mb-3 text-[9px] text-white/30 reveal-up delay-1">Technology</div>
          <h2 id="finish-heading" className="display-lg text-white reveal-up delay-2">Protection that performs.</h2>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-hairline mb-10">
          {FINISHES.map((f, i) => (
            <button
              key={f.id}
              onClick={() => setActive(i)}
              className={`px-6 py-4 label-uc text-[9px] border-b-[2px] -mb-px transition-all ${
                active === i ? 'border-rossa text-white' : 'border-transparent text-white/35 hover:text-white/70'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div>
            <h3 className="display-md text-white mb-6">{fin.headline}</h3>
            <p className="text-[15px] leading-8 text-white/55 mb-10">{fin.body}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-hairline">
              {fin.specs.map(([k, v]) => (
                <div key={k} className="bg-elevated p-5">
                  <div className="font-barlow font-bold text-[1.4rem] text-white leading-none mb-2">{v}</div>
                  <div className="label-uc text-[8px] text-white/35">{k}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src={fin.img} alt={fin.label} fill unoptimized className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
