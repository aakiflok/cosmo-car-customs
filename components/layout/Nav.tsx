'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS, SERVICES } from '@/lib/data';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { label: 'Services', href: '/#services' },
    { label: 'Gallery',  href: '/gallery'   },
    { label: 'Reviews',  href: '/reviews'   },
    { label: 'About',    href: '/about'     },
    { label: 'FAQ',      href: '/faq'       },
  ];

  return (
    <header
      role="banner"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? 'nav-glass' : 'bg-transparent'
      }`}
    >
      {/* Nav inner — full width, symmetric px padding */}
      <div className="w-full flex h-20 items-center justify-between px-6 sm:px-10 lg:px-16">

        {/* Logo */}
        <Link href="/" className="flex min-h-[48px] items-center gap-3 relative z-50" aria-label="Cosmo Car Customs" data-cursor="link">
          <span className="block h-[2px] w-8 bg-rossa" aria-hidden="true" />
          <span className="label-uc text-[13px] tracking-[3px] text-white">Cosmo</span>
        </Link>

        {/* Desktop centre links */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map(link => (
            <Link key={link.href} href={link.href}
              className="label-uc text-[10px] text-white/50 transition-colors hover:text-white"
              data-cursor="link">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop right */}
        <div className="hidden items-center gap-6 lg:flex">
          <a href={`tel:${BUSINESS.phone.replace(/-/g,'')}`}
            className="label-uc flex items-center gap-2 text-[10px] text-white/40 transition-colors hover:text-white"
            data-cursor="link">
            <Phone size={11} />{BUSINESS.phone}
          </a>
          <Link href="/consultation" className="btn-primary" data-cursor="link">
            <span>Book Now</span>
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="flex min-h-[48px] min-w-[48px] items-center justify-center text-white lg:hidden relative z-50"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          data-cursor="link"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      <div className={`fixed inset-0 z-40 bg-canvas transition-transform duration-700 lg:hidden ${
        open ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="flex h-full flex-col justify-center px-6 sm:px-10">
          <nav className="flex flex-col gap-4 sm:gap-6">
            {links.map((link, i) => (
              <div key={link.href} className="overflow-hidden">
                <Link href={link.href}
                  className={`block text-2xl md:text-3xl font-playfair italic text-white transition-transform duration-700 ${
                    open ? 'translate-y-0' : 'translate-y-full'
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}>
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>
          <div className={`mt-12 space-y-4 transition-opacity duration-700 delay-500 ${open ? 'opacity-100' : 'opacity-0'}`}>
            <div className="label-uc text-[9px] text-white/30">Contact</div>
            <a href={`tel:${BUSINESS.phone.replace(/-/g,'')}`} className="block text-[15px] text-white">{BUSINESS.phone}</a>
            <Link href="/consultation" className="btn-primary inline-flex">
              <span>Book Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
