import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { StickyMobileCTA } from '@/components/layout/StickyMobileCTA'
import { localBusinessSchema } from '@/lib/schema'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://cosmocarcustoms.com'),
  title: {
    default: 'Cosmo Car Customs | Premium Auto Detailing Mississauga',
    template: '%s | Cosmo Car Customs',
  },
  description:
    'Premium auto detailing, ceramic coating, paint protection film, paint correction, and window tinting in Mississauga and the GTA. 4.9-star rated studio.',
  keywords: [
    'auto detailing Mississauga',
    'ceramic coating Mississauga',
    'paint protection film GTA',
    'paint correction Mississauga',
    'window tinting Mississauga',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'Cosmo Car Customs',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#181818',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link btn-label">Skip to content</a>
        <Nav />
        <main id="main">{children}</main>
        <StickyMobileCTA />
        <Footer />
      </body>
    </html>
  )
}
