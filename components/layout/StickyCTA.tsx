'use client';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { BUSINESS } from '@/lib/data';

export default function StickyCTA() {
  return (
    <div className="sticky-bar fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 px-4 py-3 md:hidden">
      <a href={`tel:${BUSINESS.phone}`} className="btn-outline flex flex-1 items-center justify-center gap-2">
        <Phone size={14} /><span>Call Now</span>
      </a>
      <Link href="/consultation" className="btn-primary flex-1 text-center">Consultation</Link>
    </div>
  );
}
