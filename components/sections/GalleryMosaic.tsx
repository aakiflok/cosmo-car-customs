'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Real client work photos from /public/cardetailingphots/cardetailing client/
const BASE = '/cardetailingphots/cardetailing client';

const PHOTOS = [
  { src: `${BASE}/528467999_17981387387893687_5500255530360627965_n.jpg`,  alt: 'Client car ceramic detail' },
  { src: `${BASE}/530691415_17981632967893687_3893720928888373214_n.jpg`,  alt: 'Paint correction finish' },
  { src: `${BASE}/531514924_17981633006893687_7733364091737250821_n.jpg`,  alt: 'PPF installation' },
  { src: `${BASE}/547951873_17985693983893687_4007768365919087567_n.jpg`,  alt: 'Ceramic coating gloss' },
  { src: `${BASE}/568447561_17990210066893687_2796386767032509790_n.jpg`,  alt: 'Full exterior detail' },
  { src: `${BASE}/670152071_18010115891893687_2781582330196868870_n.jpg`,  alt: 'Show car finish' },
];

export default function GalleryMosaic() {
  useScrollReveal();

  return (
    <section aria-labelledby="gallery-heading" className="w-full bg-canvas section-pad border-t border-hairline">
      <div className="w-full px-6 sm:px-10 lg:px-16">

        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="livery-line reveal-up" />
            <div className="label-uc mb-3 text-[9px] text-white/30 reveal-up delay-1">Our Work</div>
            <h2 id="gallery-heading" className="display-lg text-white reveal-up delay-2">The finished product.</h2>
          </div>
          <Link href="/gallery" className="btn-ghost label-uc text-[9px] hidden sm:flex items-center gap-2 reveal-up delay-3">
            View full gallery &rarr;
          </Link>
        </div>

        <div className="gallery-mosaic">
          {PHOTOS.map((p, i) => {
            const cls = ['mosaic-tall1','mosaic-tall2','mosaic-wide','mosaic-small1','mosaic-small2','mosaic-small3'][i];
            return (
              <div key={i} className={`${cls} relative overflow-hidden bg-elevated reveal-up`} style={{ transitionDelay: `${i * 0.08}s` }}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width:640px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>

        <div className="mt-8 sm:hidden text-center">
          <Link href="/gallery" className="btn-ghost label-uc text-[9px]">View full gallery &rarr;</Link>
        </div>
      </div>
    </section>
  );
}
