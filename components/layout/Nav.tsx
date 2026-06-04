'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { BUSINESS, SERVICES } from '@/lib/data';

const NAV_LINKS = [
  { href: '/#services', label: 'Services', hasDropdown: true },
  { href: '/#process',  label: 'Process' },
  { href: '/gallery',   label: 'Gallery' },
  { href: '/testimonials', label: 'Reviews' },
  { href: '/about',     label: 'About' },
];

export default function Nav() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [svcsOpen, setSvcsOpen] = useState(false);
  const pathname = usePathname();
  const dropRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
    setSvcsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setSvcsOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header
      role="banner"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'nav-glass' : 'bg-transparent'
      }`}
    >
      {/* ── Desktop bar ── */}
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex min-h-[48px] items-center gap-3 text-white" aria-label="Cosmo Car Customs — Home">
          <svg width="32" height="32" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="44" height="44" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M14 28C18 18 30 18 34 28" stroke="#c79a3b" strokeWidth="2.4" strokeLinecap="square"/>
            <path d="M12 31H36M18 18H30" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <span className="hidden sm:block">
            <span className="label-cta block text-[13px] text-white">Cosmo Car Customs</span>
            <span className="label-badge block text-[10px] text-white/45">Mississauga · GTA</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {NAV_LINKS.map(link =>
            link.hasDropdown ? (
              <div key={link.href} ref={dropRef} className="relative">
                <button
                  onClick={() => setSvcsOpen(v => !v)}
                  className="touch-target label-nav flex items-center gap-1 text-white/75 transition-colors hover:text-white"
                  aria-expanded={svcsOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronDown size={12} className={`transition-transform duration-200 ${svcsOpen ? 'rotate-180' : ''}`} />
                </button>
                {svcsOpen && (
                  <div className="absolute left-0 top-full mt-2 w-56 border border-[#303030] bg-canvas shadow-soft">
                    {SERVICES.map(s => (
                      <Link key={s.slug} href={`/services/${s.slug}`}
                        className="block px-5 py-3 text-body-sm text-white/70 transition-colors hover:bg-elevated hover:text-white"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="touch-target label-nav text-white/75 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${BUSINESS.phone.replace(/-/g,'')}`}
            className="touch-target label-nav flex items-center gap-2 text-white/60 transition-colors hover:text-white"
          >
            <Phone size={13} aria-hidden="true" />
            <span>{BUSINESS.phone}</span>
          </a>
          <Link href="/consultation" className="btn-primary">Book Consultation</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="touch-target text-white lg:hidden"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="border-t border-[#303030] bg-canvas px-4 pb-6 pt-2 lg:hidden"
        >
          {/* Services group */}
          <div className="border-b border-[#303030] pb-4 mb-4">
            <div className="label-badge py-3 text-white/35">Services</div>
            {SERVICES.map(s => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="block py-3 label-nav text-white/70"
              >
                {s.name}
              </Link>
            ))}
          </div>
          {/* Other links */}
          {NAV_LINKS.filter(l => !l.hasDropdown).map(l => (
            <Link key={l.href} href={l.href} className="block py-3 label-nav text-white/70">
              {l.label}
            </Link>
          ))}
          {/* CTA row */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <a href={`tel:${BUSINESS.phone.replace(/-/g,'')}`} className="btn-outline flex items-center justify-center gap-2">
              <Phone size={13} /><span>{BUSINESS.phone}</span>
            </a>
            <Link href="/consultation" className="btn-primary">Consultation</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
