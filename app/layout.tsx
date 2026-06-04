import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import StickyCTA from '@/components/layout/StickyCTA';

const inter = Inter({ subsets: ['latin'], weight: ['400','500','600','700'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Cosmo Car Customs | Premium Detailing & Paint Protection — Mississauga, GTA',
  description: 'Ceramic coating, paint protection film, paint correction, window tinting, and premium detailing in Mississauga and the GTA. 4.9-star rated, 250+ reviews, 5+ years of expertise.',
  keywords: ['ceramic coating Mississauga','paint correction GTA','PPF Mississauga','window tinting Mississauga','car detailing GTA'],
  openGraph: { title: 'Cosmo Car Customs', description: 'Premium vehicle detailing and paint protection in Mississauga.', type: 'website', url: 'https://cosmocarcustoms.com' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
