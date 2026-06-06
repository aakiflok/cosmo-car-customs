'use client';
import { useState } from 'react';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';

const JOBS = [
  {
    label: 'Ceramic + Correction',
    vehicle: '2023 BMW M3',
    service: 'Paint Correction + Ceramic Coating',
    timeTaken: '2 days',
    products: ['Gyeon', 'XPEL', '3M'],
    beforeImg: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1400&q=80',
    afterImg:  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80',
  },
  {
    label: 'PPF + Tint',
    vehicle: '2022 Range Rover',
    service: 'Paint Protection Film + Window Tint',
    timeTaken: '1 day',
    products: ['XPEL', 'SunTek'],
    beforeImg: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1400&q=80',
    afterImg:  'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1400&q=80',
  },
  {
    label: 'Full PPF Stack',
    vehicle: '2023 Porsche 911',
    service: 'Full PPF + Multi-Coat Ceramic',
    timeTaken: '3 days',
    products: ['XPEL', 'Gtechniq', 'Gyeon'],
    beforeImg: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80',
    afterImg:  'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1400&q=80',
  },
];

export default function BeforeAfterBand() {
  const [active, setActive] = useState(0);
  const job = JOBS[active];

  return (
    <section className="w-full bg-canvas border-t border-hairline section-pad">
      <div className="w-full px-6 sm:px-10 lg:px-16">

        <div className="mb-12">
          <span className="livery-line" />
          <div className="label-uc text-[9px] text-white/40 mb-4">Real Results</div>
          <h2 className="display-lg">See the transformation.</h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-0 mb-10 border border-hairline w-fit">
          {JOBS.map((j, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-5 py-3 label-uc text-[9px] transition-all duration-200 ${
                active === i ? 'bg-rossa text-white' : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              {j.label}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="grid md:grid-cols-[3fr_1fr] gap-8 items-start">
          <div className="w-full overflow-hidden">
            <BeforeAfterSlider key={active} beforeImg={job.beforeImg} afterImg={job.afterImg} />
          </div>
          <div className="flex flex-col gap-6 pt-2">
            <div>
              <p className="label-uc text-[9px] text-white/40 mb-2">Vehicle</p>
              <p className="text-white text-[14px] font-medium">{job.vehicle}</p>
            </div>
            <div className="h-px bg-hairline" />
            <div>
              <p className="label-uc text-[9px] text-white/40 mb-2">Service</p>
              <p className="text-white text-[14px] leading-relaxed">{job.service}</p>
            </div>
            <div className="h-px bg-hairline" />
            <div>
              <p className="label-uc text-[9px] text-white/40 mb-2">Time taken</p>
              <p className="text-white text-[14px]">{job.timeTaken}</p>
            </div>
            <div className="h-px bg-hairline" />
            <div>
              <p className="label-uc text-[9px] text-white/40 mb-3">Products</p>
              <div className="flex flex-wrap gap-2">
                {job.products.map((p) => (
                  <span key={p} className="label-uc text-[8px] border border-hairline px-2 py-1 text-white/60">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
