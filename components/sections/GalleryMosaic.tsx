'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const PHOTOS = [
  { src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80', alt: 'Ferrari ceramic coat' },
  { src: 'https://images.unsplash.com/photo-1494976688153-cd3554744ab4?auto=format&fit=crop&w=900&q=80',  alt: 'BMW paint correction' },
  { src: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1400&q=80', alt: 'Porsche PPF install' },
  { src: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80',  alt: 'Detail close-up' },
  { src: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=900&q=80',    alt: 'Interior detailing' },
  { src: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=80',    alt: 'Wheel coating' },
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
                <Image src={p.src} alt={p.alt} fill unoptimized className="object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width:640px) 100vw, 50vw" loading="lazy" />
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
