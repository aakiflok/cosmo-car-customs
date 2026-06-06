import type { Metadata } from 'next';
import ScrollReveal      from '@/components/layout/ScrollReveal';
import HeroBand          from '@/components/sections/HeroBand';
import TrustStrip        from '@/components/sections/TrustStrip';
import ServicesGrid      from '@/components/sections/ServicesGrid';
import BeforeAfterBand   from '@/components/sections/BeforeAfterBand';
import ProcessSteps      from '@/components/sections/ProcessSteps';
import BrandStrip        from '@/components/sections/BrandStrip';
import AboutBand         from '@/components/sections/AboutBand';
import GalleryMosaic     from '@/components/sections/GalleryMosaic';
import PackageTable      from '@/components/sections/PackageTable';
import FinishShowcase    from '@/components/sections/FinishShowcase';
import TestimonialsAuto  from '@/components/sections/TestimonialsAuto';
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

      {/* 1. Hook — full viewport cinematic hero */}
      <HeroBand />

      {/* 2. Proof — instant credibility */}
      <TrustStrip />

      {/* 3. Services — what we do */}
      <ServicesGrid />

      {/* 4. Results — show the work (SINGLE compact panel) */}
      <BeforeAfterBand />

      {/* 5. Process — how it works */}
      <ProcessSteps />

      {/* 6. Trust — who backs us */}
      <BrandStrip />

      {/* 7. Story — who we are */}
      <AboutBand />

      {/* 8. Gallery — visual proof */}
      <GalleryMosaic />

      {/* 9. Packages — what it costs */}
      <PackageTable packages={HOME_PACKAGES} />

      {/* 10. Technology — ceramic showcase */}
      <FinishShowcase />

      {/* 11. Social proof — testimonials */}
      <TestimonialsAuto />

      {/* 12. FAQ — handle objections */}
      <FAQTeaser />

      {/* 13. Guarantee — remove risk */}
      <WarrantyBadge />

      {/* 14. CTA — book now */}
      <CTABand />
    </>
  );
}
