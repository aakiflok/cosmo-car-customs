import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gallery — Before & After Vehicle Transformations',
  description: 'Real before and after results from ceramic coating, paint correction, PPF, and detailing jobs at Cosmo Car Customs in Mississauga.',
  alternates: { canonical: 'https://cosmocarcustoms.com/gallery' },
};

const GALLERY = [
  { src: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80', label: 'Ceramic Coating — BMW M4' },
  { src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80', label: 'Paint Correction — Porsche 911' },
  { src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80', label: 'PPF Full Front — Audi RS5' },
  { src: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80', label: 'Window Tinting — Mercedes GLC' },
  { src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80', label: 'Full Detail — Range Rover' },
  { src: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80', label: 'Multi-Layer Ceramic — Tesla Model S' },
  { src: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=80', label: 'Paint Correction — Lamborghini Urus' },
  { src: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80', label: 'Ceramic + PPF Bundle — Ferrari Roma' },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-canvas">

      {/* Hero */}
      <section className="container-pad page-hero">
        <span className="livery-line" />
        <div className="label-uc mb-3 text-[9px] text-white/30">Before &amp; after</div>
        <h1 className="display-xl mb-6 text-white">The work, documented.</h1>
        <p className="max-w-[480px] text-[15px] leading-7 text-white/50">
          Every image is a real vehicle treated at Cosmo Car Customs.
        </p>
      </section>

      {/* Grid */}
      <section className="hairline container-pad section-pad">
        <div className="grid gap-px bg-[#1f1f1f] sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY.map((img, i) => (
            <figure key={img.src} className="group m-0">
              <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <Image
                  src={img.src} alt={img.label} fill unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                  loading={i < 4 ? 'eager' : 'lazy'}
                />
              </div>
              <figcaption className="border-t border-[#1f1f1f] bg-canvas px-5 py-4">
                <div className="label-uc text-[9px] text-white/40">{img.label}</div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/consultation" className="btn-primary"><span>Book a Service</span></Link>
        </div>
      </section>
    </div>
  );
}
