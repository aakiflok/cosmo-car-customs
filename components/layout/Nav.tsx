'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS } from '@/lib/data';

const LINKS = [
  { href: '/#services', label: 'Services' },
  { href: '/#process', label: 'Process' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/testimonials', label: 'Reviews' },
  { href: '/about', label: 'About' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-canvas/90 backdrop-blur-xl border-b border-[#303030]' : 'bg-transparent'
    }`}>
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-3 text-white">
          <svg width="32" height="32" viewBox="0 0 48 48" fill="none" aria-label="Cosmo Car Customs">
            <rect x="2" y="2" width="44" height="44" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M14 28C18 18 30 18 34 28" stroke="#c79a3b" strokeWidth="2.4" strokeLinecap="square"/>
            <path d="M12 31H36M18 18H30" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <div className="hidden sm:block">
            <div className="label-cta text-[13px]">Cosmo Car Customs</div>
            <div className="label-badge text-[10px] text-white/50">Mississauga Premium Studio</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} className="label-nav text-white/80 hover:text-white transition-colors">{l.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={`tel:${BUSINESS.phone.replace(/-/g,'')}`} className="hidden items-center gap-2 text-white/70 hover:text-white transition-colors lg:flex">
            <Phone size={14} />
            <span className="label-nav">{BUSINESS.phone}</span>
          </a>
          <Link href="/consultation" className="btn-primary hidden lg:inline-flex">Book Consultation</Link>
          <button className="text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-[#303030] bg-canvas px-4 py-6 lg:hidden">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} className="block py-3 label-nav text-white/80" onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
          <Link href="/consultation" className="btn-primary mt-4 w-full" onClick={() => setOpen(false)}>Book Consultation</Link>
        </div>
      )}
    </header>
  );
}
