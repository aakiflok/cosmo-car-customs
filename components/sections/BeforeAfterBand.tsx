'use client';

import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Badge } from '@/components/ui/Badge';

interface BeforeAfterJob {
  title: string;
  service: string;
  vehicle: string;
  beforeImg: string;
  afterImg: string;
  timeTaken: string;
  productsUsed: string[];
}

const SHOWCASE_JOBS: BeforeAfterJob[] = [
  {
    title: 'Black BMW M3 - Full Correction + Ceramic',
    service: 'Paint Correction + Ceramic Coating',
    vehicle: '2023 BMW M3',
    beforeImg: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1400&q=80',
    afterImg: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80',
    timeTaken: '2 days',
    productsUsed: ['Gyeon', 'XPEL', '3M'],
  },
  {
    title: 'White Range Rover - PPF Full Front + Tint',
    service: 'Paint Protection Film + Window Tint',
    vehicle: '2022 Range Rover',
    beforeImg: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1400&q=80',
    afterImg: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1400&q=80',
    timeTaken: '1 day',
    productsUsed: ['XPEL', 'SunTek'],
  },
  {
    title: 'Grey Porsche 911 - Premium Protection',
    service: 'Full PPF + Multi-Coat Ceramic',
    vehicle: '2023 Porsche 911 Carrera',
    beforeImg: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80',
    afterImg: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1400&q=80',
    timeTaken: '3 days',
    productsUsed: ['XPEL', 'Gtechniq', 'Gyeon'],
  },
];

export default function BeforeAfterBand() {
  return (
    <section className="w-full bg-canvas section-pad border-t border-hairline">
      <div className="mx-auto max-w-[1440px] container-pad">
        <SectionLabel>Real Results</SectionLabel>
        <h2 className="display-lg mb-24">See the transformation.</h2>

        <div className="space-y-32 md:space-y-48">
          {SHOWCASE_JOBS.map((job, idx) => (
            <div
              key={idx}
              className={`grid gap-12 md:gap-20 items-center ${
                idx % 2 === 0 ? 'md:grid-cols-[1fr_1fr]' : 'md:grid-cols-[1fr_1fr] md:[&>*:nth-child(1)]:order-2'
              }`}
            >
              {/* Slider */}
              <div className="relative aspect-video overflow-hidden">
                <BeforeAfterSlider beforeImg={job.beforeImg} afterImg={job.afterImg} />
              </div>

              {/* Description */}
              <div className="space-y-6">
                <div>
                  <h3 className="display-md mb-2">{job.title}</h3>
                  <p className="text-white/50 text-14px">{job.vehicle}</p>
                </div>

                <div className="space-y-4 border-t border-hairline pt-6">
                  <div>
                    <p className="label-uc text-8px text-white/40 mb-2">Service</p>
                    <p className="text-15px text-white">{job.service}</p>
                  </div>
                  <div>
                    <p className="label-uc text-8px text-white/40 mb-2">Time taken</p>
                    <p className="text-15px text-white">{job.timeTaken}</p>
                  </div>
                </div>

                <div>
                  <p className="label-uc text-8px text-white/40 mb-3">Products used</p>
                  <div className="flex flex-wrap gap-2">
                    {job.productsUsed.map((product) => (
                      <Badge key={product} variant="dark" className="text-11px">
                        {product}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
