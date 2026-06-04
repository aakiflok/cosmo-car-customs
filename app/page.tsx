import type { Metadata } from 'next';
import HeroBand        from '@/components/sections/HeroBand';
import TrustStrip      from '@/components/sections/TrustStrip';
import ServicesGrid    from '@/components/sections/ServicesGrid';
import AboutBand       from '@/components/sections/AboutBand';
import ProcessSteps    from '@/components/sections/ProcessSteps';
import ReviewsCarousel from '@/components/sections/ReviewsCarousel';
import CTABand         from '@/components/sections/CTABand';
import ScrollReveal    from '@/components/layout/ScrollReveal';

export const metadata: Metadata = {
  title: 'Cosmo Car Customs | Premium Detailing & Paint Protection — Mississauga',
  description:
    'Ceramic coating, PPF, paint correction, window tinting, and premium detailing in Mississauga and the GTA. 4.9-star rated with 100+ verified reviews.',
  alternates: { canonical: 'https://cosmocarcustoms.com' },
};

export default function HomePage() {
  return (
    <>
      <ScrollReveal />
      <HeroBand />
      <TrustStrip />
      <ServicesGrid />
      <AboutBand />
      <ProcessSteps />
      <ReviewsCarousel />
      <CTABand />
    </>
  );
}
