'use client';
import { useState } from 'react';
import Image from 'next/image';
import Lightbox, { LightboxImage } from '@/components/ui/Lightbox';
import Link from 'next/link';

const MOSAIC_IMAGES: LightboxImage[] = [
  { src: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=900&q=80', label: 'Porsche 911 — Paint Correction' },
  { src: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=80', label: 'Lamborghini Urus — Ceramic Coating' },
  { src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80', label: 'Audi RS5 — Full Front PPF' },
  { src: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80', label: 'Mercedes GLC — Window Tinting' },
  { src: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=800&q=80', label: 'Tesla Model S — Multi-Layer Ceramic' },
  { src: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80', label: 'Ferrari Roma — PPF + Ceramic' },
];

export default function GalleryMosaic() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const getAreaClass = (i: number) => {
    if (i === 0) return 'mosaic-tall1';
    if (i === 1) return 'mosaic-tall2';
    if (i === 2) return 'mosaic-wide';
    if (i === 3) return 'mosaic-small1';
    if (i === 4) return 'mosaic-small2';
    return 'mosaic-small3';
  };

  return (
    <>
      <section className="bg-canvas px-5 py-32 md:px-10 border-t border-[#1f1f1f]">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="stagger-children">
              <span className="livery-line fade-up" />
              <div className="label-uc mb-4 text-[9px] text-white/40 fade-up">Our Work</div>
              <h2 className="display-xl text-white fade-up">The gallery.</h2>
            </div>
            <div className="fade-up delay-2">
              <Link href="/gallery" className="btn-outline magnetic" data-cursor="link">
                View All Work
              </Link>
            </div>
          </div>

          <div className="gallery-mosaic">
            {MOSAIC_IMAGES.map((img, i) => (
              <div 
                key={i} 
                className={`${getAreaClass(i)} group relative overflow-hidden bg-[#1f1f1f] cursor-pointer fade-up`}
                style={{ transitionDelay: `${0.1 * i}s` }}
                onClick={() => openLightbox(i)}
                data-cursor="image"
              >
                <Image
                  src={img.src}
                  alt={img.label || 'Gallery image'}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="label-uc text-[9px] text-white tracking-widest translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                    {img.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={MOSAIC_IMAGES}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentIndex}
      />
    </>
  );
}
