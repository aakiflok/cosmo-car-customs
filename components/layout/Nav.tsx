'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '/services',      label: 'Services' },
  { href: '/#process',      label: 'Process' },
  { href: '/gallery',       label: 'Gallery' },
  { href: '/testimonials',  label: 'Proof' },
  { href: '/about',         label: 'About' },
]

export function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-hairline bg-canvas/90 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-editorial items-center justify-between px-4 md:px-8">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-3 text-ink">
          <svg width="32" height="32" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="44" height="44" stroke="currentColor" strokeWidth="1.5" />
            <path d="M14 28C18 18 30 18 34 28" stroke="#c79a3b" strokeWidth="2.4" strokeLinecap="square" />
            <path d="M12 31H36" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span className="nav-link text-[13px]">Cosmo Car Customs</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                'nav-link text-[13px] transition-colors duration-150',
                pathname === l.href ? 'text-ink' : 'text-bodyText hover:text-ink'
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a href="tel:9059718186" className="nav-link flex items-center gap-1.5 text-[13px] text-bodyText hover:text-ink">
            <Phone size={13} />
            905-971-8186
          </a>
          <Link href="/consultation" className="btn btn-primary btn-label">
            Book Consultation
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-hairline bg-canvas/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col divide-y divide-hairline px-4" aria-label="Mobile">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="nav-link py-4 text-[13px] text-bodyText hover:text-ink"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/consultation"
                onClick={() => setOpen(false)}
                className="btn btn-primary btn-label my-4 w-full"
              >
                Book Consultation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
