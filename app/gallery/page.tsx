import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gallery — Before & After Vehicle Transformations',
  description: 'Real before and after results from ceramic coating, paint correction, PPF, and detailing jobs at Cosmo Car Customs in Mississauga.',
};

const GALLERY = [
  { src:'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80', label:'Ceramic Coating — BMW M4' },
  { src:'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80', label:'Paint Correction — Porsche 911' },
  { src:'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80', label:'PPF Full Front — Audi RS5' },
  { src:'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80', label:'Window Tinting — Mercedes GLC' },
  { src:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80', label:'Full Detail — Range Rover' },
  { src:'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80', label:'Multi-Layer Ceramic — Tesla Model S' },
  { src:'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=80', label:'Paint Correction — Lamborghini Urus' },
  { src:'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80', label:'Ceramic + PPF Bundle — Ferrari Roma' },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-canvas px-4 pb-[96px] pt-[96px] md:px-8">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-[64px] max-w-[680px]">
          <div className="label-badge mb-[8px] text-white/40">Before &amp; after</div>
          <h1 className="display-xl text-white">The work, documented.</h1>
        </div>
        {/* Grid: 1-up → 2-up → 4-up */}
        <div className="grid gap-px bg-[#303030] sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY.map((img, i) => (
            <figure key={img.src} className="group m-0">
              <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                  loading={i < 4 ? 'eager' : 'lazy'}
                />
              </div>
              <figcaption className="border border-t-0 border-[#303030] bg-canvas px-[16px] py-[12px]">
                <div className="label-badge text-white/50">{img.label}</div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-[64px] text-center">
          <Link href="/consultation" className="btn-primary">Book a Service</Link>
        </div>
      </div>
    </div>
  );
}
