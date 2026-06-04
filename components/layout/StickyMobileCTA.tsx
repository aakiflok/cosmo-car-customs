'use client'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export function StickyMobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-hairline bg-canvas/88 px-4 py-3 backdrop-blur-xl md:hidden"
      aria-label="Quick actions"
    >
      <a
        href="tel:9059718186"
        className="btn btn-outline-dark btn-label flex-1 gap-2"
      >
        <Phone size={14} />
        Call Now
      </a>
      <Link
        href="/consultation"
        className="btn btn-primary btn-label flex-1"
      >
        Consultation
      </Link>
    </div>
  )
}
