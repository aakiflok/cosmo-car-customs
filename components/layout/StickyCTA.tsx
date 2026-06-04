'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { BUSINESS } from '@/lib/data';

export default function StickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <div className={`sticky-bar fixed inset-x-0 bottom-0 z-40 lg:hidden transition-transform duration-300 ${
      show ? 'translate-y-0' : 'translate-y-full'
    }`}>
      <div className="grid grid-cols-2">
        <a href={`tel:${BUSINESS.phone.replace(/-/g,'')}`}
          className="flex min-h-[56px] items-center justify-center gap-2 label-uc text-[10px] text-white/70 border-r border-[#1f1f1f]">
          <Phone size={13} /> Call
        </a>
        <Link href="/consultation"
          className="flex min-h-[56px] items-center justify-center label-uc text-[10px] bg-rossa text-white">
          Book Now
        </Link>
      </div>
    </div>
  );
}
