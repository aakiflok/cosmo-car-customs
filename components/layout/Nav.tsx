'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS, SERVICES } from '@/lib/data';

export default function Nav() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      role="banner"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? 'nav-glass' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-10">
        {/* Logo */}
        <Link href="/" className="flex min-h-[48px] items-center gap-3" aria-label="Cosmo Car Customs">
          <span className="block h-[2px] w-8 bg-rossa" aria-hidden="true" />
          <span className="label-uc text-[13px] tracking-[3px] text-white">Cosmo</span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {SERVICES.slice(0,5).map(s => (
            <Link key={s.slug} href={`/services/${s.slug}`}
              className="label-uc text-[10px] text-white/50 transition-colors hover:text-white">
              {s.name}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden items-center gap-6 lg:flex">
          <a href={`tel:${BUSINESS.phone.replace(/-/g,'')}`}
            className="label-uc flex items-center gap-2 text-[10px] text-white/40 transition-colors hover:text-white">
            <Phone size={11} />{BUSINESS.phone}
          </a>
          <Link href="/consultation" className="btn-primary">
            <span>Book Now</span>
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="flex min-h-[48px] min-w-[48px] items-center justify-center text-white lg:hidden"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[#1f1f1f] bg-[#0a0a0a] px-5 pb-8 pt-4 lg:hidden">
          <div className="label-uc mb-4 text-[9px] text-white/25">Services</div>
          {SERVICES.map(s => (
            <Link key={s.slug} href={`/services/${s.slug}`}
              className="block py-3 label-uc text-[11px] text-white/60 hover:text-white">
              {s.name}
            </Link>
          ))}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <a href={`tel:${BUSINESS.phone.replace(/-/g,'')}`}
              className="btn-outline flex items-center justify-center gap-2 text-[11px]">
              <Phone size={11} /> Call
            </a>
            <Link href="/consultation" className="btn-primary">
              <span>Book Now</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
