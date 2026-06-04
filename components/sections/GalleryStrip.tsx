'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const IMGS = [
  { src:'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80', alt:'Luxury vehicle front quarter with polished paint' },
  { src:'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80', alt:'Performance coupe in studio lighting' },
  { src:'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80', alt:'Dark vehicle side profile with smooth finish' },
  { src:'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80', alt:'Sports car rear detail after ceramic coating' },
  { src:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80', alt:'Luxury vehicle paint protection film application' },
  { src:'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80', alt:'Hood gloss reflection after correction and coating' },
];

export default function GalleryStrip() {
  useScrollReveal();

  return (
    <section id="gallery" className="bg-[#f7f7f7] px-4 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="label-badge mb-3 text-black/40 reveal-up">Before &amp; after</div>
            <h2 className="display-xl text-[#181818] fade-up delay-1">The work speaks louder than any claim.</h2>
          </div>
          <div className="reveal-right delay-2">
            <Link href="/gallery" className="btn-outline-light">View Full Gallery</Link>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {IMGS.map((img, i) => {
            const dir = i % 3 === 0 ? 'reveal-left' : i % 3 === 1 ? 'reveal-up' : 'reveal-right';
            return (
              <div
                key={img.src}
                className={`relative h-64 overflow-hidden ${dir}`}
                style={{ transitionDelay: `${i * 0.09}s` }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
