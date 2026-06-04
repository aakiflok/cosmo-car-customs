import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import StickyCTA from '@/components/layout/StickyCTA';
import PageTransition from '@/components/layout/PageTransition';
import { localBusinessSchema } from '@/lib/schema';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cosmocarcustoms.com'),
  title: {
    default: 'Cosmo Car Customs | Premium Detailing & Paint Protection — Mississauga, GTA',
    template: '%s | Cosmo Car Customs',
  },
  description: 'Ceramic coating, paint protection film, paint correction, window tinting, and premium detailing in Mississauga and the GTA. 4.9-star rated, 250+ reviews.',
  keywords: ['ceramic coating Mississauga','paint correction GTA','PPF Mississauga','window tinting Mississauga','car detailing GTA','auto detailing Mississauga'],
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
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-black">
          Skip to content
        </a>
        <Nav />
        <main id="main-content" className="pb-safe">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
