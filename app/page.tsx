import type { Metadata } from 'next';
import ScrollReveal      from '@/components/layout/ScrollReveal';
import HeroBand          from '@/components/sections/HeroBand';
import TrustStrip        from '@/components/sections/TrustStrip';
import BrandStrip        from '@/components/sections/BrandStrip';
import ServicesGrid      from '@/components/sections/ServicesGrid';
import BeforeAfterBand   from '@/components/sections/BeforeAfterBand';
import AboutBand         from '@/components/sections/AboutBand';
import ProcessSteps      from '@/components/sections/ProcessSteps';
import GalleryMosaic     from '@/components/sections/GalleryMosaic';
import PackageTable      from '@/components/sections/PackageTable';
import FinishShowcase    from '@/components/sections/FinishShowcase';
import TestimonialsAuto  from '@/components/sections/TestimonialsAuto';
import ReviewsCarousel   from '@/components/sections/ReviewsCarousel';
import FAQTeaser         from '@/components/sections/FAQTeaser';
import WarrantyBadge     from '@/components/sections/WarrantyBadge';
import CTABand           from '@/components/sections/CTABand';

export const metadata: Metadata = {
  title: 'Cosmo Car Customs | Premium Detailing & Paint Protection — Mississauga',
  description:
    'Ceramic coating, PPF, paint correction, window tinting, and premium detailing in Mississauga and the GTA. 4.9-star rated with 100+ verified reviews.',
  alternates: { canonical: 'https://cosmocarcustoms.com' },
};

const HOME_PACKAGES = [
  {
    name: 'Essential Shield',
    tier: 'essential' as const,
    features: [
      'Single-layer ceramic coating',
      'Full exterior decontamination wash',
      'Clay bar treatment',
      'Paint inspection report',
      '2-year protection warranty',
    ],
  },
  {
    name: 'Signature Protection',
    tier: 'signature' as const,
    highlight: true,
    features: [
      'Multi-layer ceramic coating',
      'Full paint correction (stage 1)',
      'PPF on high-impact zones',
      'Interior protection spray',
      'Dedicated detail specialist',
      '5-year protection warranty',
    ],
  },
  {
    name: 'Concours Finish',
    tier: 'concours' as const,
    features: [
      'Full-body PPF + ceramic stack',
      'Two-stage paint correction',
      'Window tinting (all glass)',
      'Wheel coating + caliper paint',
      'Annual maintenance detail',
      'Lifetime care program',
    ],
  },
];

export default function HomePage() {
  return (
    <>
      <ScrollReveal />
      <HeroBand />
      <TrustStrip />
      <BrandStrip />
      <ServicesGrid />
      <BeforeAfterBand />
      <AboutBand />
      <ProcessSteps />
      <GalleryMosaic />
      <PackageTable packages={HOME_PACKAGES} />
      <FinishShowcase />
      <TestimonialsAuto />
      <ReviewsCarousel />
      <FAQTeaser />
      <WarrantyBadge />
      <CTABand />
    </>
  );
}
