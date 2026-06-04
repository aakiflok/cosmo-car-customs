import Link from 'next/link'
import { Phone, MapPin, Instagram } from 'lucide-react'

const serviceLinks = [
  { href: '/services/ceramic-coating',      label: 'Ceramic Coating' },
  { href: '/services/paint-protection-film',label: 'Paint Protection Film' },
  { href: '/services/paint-correction',     label: 'Paint Correction' },
  { href: '/services/window-tinting',       label: 'Window Tinting' },
  { href: '/services/car-detailing',        label: 'Car Detailing' },
]

const companyLinks = [
  { href: '/about',        label: 'About the Studio' },
  { href: '/gallery',      label: 'Gallery' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/faq',          label: 'FAQ' },
  { href: '/consultation', label: 'Book Consultation' },
  { href: '/contact',      label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="divider bg-canvas px-4 py-16 md:px-8">
      <div className="mx-auto max-w-editorial">
        <div className="mb-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 label-upper text-bodyText">Cosmo Car Customs</div>
            <p className="max-w-[280px] text-sm leading-6 text-muted">
              Premium vehicle detailing, ceramic coating, paint protection film, and paint correction in Mississauga and the GTA.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <a href="tel:9059718186" className="flex items-center gap-2 text-sm text-bodyText hover:text-ink">
                <Phone size={13} /> 905-971-8186
              </a>
              <a href="https://www.instagram.com/cosmocarcustoms/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-bodyText hover:text-ink">
                <Instagram size={13} /> @cosmocarcustoms
              </a>
              <address className="flex items-start gap-2 text-sm not-italic text-bodyText">
                <MapPin size={13} className="mt-0.5 shrink-0" />
                1380 Cardiff Blvd Unit 9,<br />Mississauga, ON L5S 1P9
              </address>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="mb-4 label-upper text-bodyText">Services</div>
            <ul className="space-y-2">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted hover:text-ink">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="mb-4 label-upper text-bodyText">Studio</div>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted hover:text-ink">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust */}
          <div>
            <div className="mb-4 label-upper text-bodyText">Why Cosmo</div>
            <ul className="space-y-3 text-sm leading-6 text-muted">
              <li>★ 4.9/5 across 250+ Google Reviews</li>
              <li>5+ years of professional detailing expertise</li>
              <li>Mississauga and GTA service area</li>
              <li>Certified ceramic coating installer</li>
              <li>SunTek window film certified installer</li>
            </ul>
          </div>
        </div>

        <div className="divider pt-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted">© {new Date().getFullYear()} Cosmo Car Customs. All rights reserved.</p>
          <p className="text-xs text-muted">Mississauga, Ontario, Canada</p>
        </div>
      </div>
    </footer>
  )
}
