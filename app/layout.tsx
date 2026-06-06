import type { Metadata } from 'next';
import { Inter, Playfair_Display, Barlow_Condensed } from 'next/font/google';
import './globals.css';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/layout/PageTransition';
import Preloader from '@/components/layout/Preloader';
import { localBusinessSchema } from '@/lib/schema';
import { LenisProvider } from '@/hooks/useLenis';
import Cursor from '@/components/ui/Cursor';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-playfair',
});

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-barlow',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cosmocarcustoms.com'),
  title: {
    default: 'Cosmo Car Customs | Premium Detailing & Paint Protection — Mississauga',
    template: '%s | Cosmo Car Customs',
  },
  description: 'Ceramic coating, PPF, paint correction, window tinting, and premium detailing in Mississauga and the GTA. 4.9-star rated.',
  openGraph: {
    title: 'Cosmo Car Customs',
    description: 'Premium vehicle detailing and paint protection in Mississauga.',
    type: 'website',
    url: 'https://cosmocarcustoms.com',
    locale: 'en_CA',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = localBusinessSchema();
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${barlow.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body className="antialiased">
        <a href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-black">
          Skip to content
        </a>
        <LenisProvider>
          <Cursor />
          <Preloader />
          <Nav />
          <main id="main-content" className="pb-safe">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
