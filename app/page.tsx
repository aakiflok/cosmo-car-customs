import HeroBand from '@/components/sections/HeroBand';
import TrustStrip from '@/components/sections/TrustStrip';
import ServicesGrid from '@/components/sections/ServicesGrid';
import FinishShowcase from '@/components/sections/FinishShowcase';
import ProcessSteps from '@/components/sections/ProcessSteps';
import GalleryStrip from '@/components/sections/GalleryStrip';
import ReviewsCarousel from '@/components/sections/ReviewsCarousel';
import AboutBand from '@/components/sections/AboutBand';
import CTABand from '@/components/sections/CTABand';

export default function Home() {
  return (
    <>
      <HeroBand />
      <TrustStrip />
      <ServicesGrid />
      <FinishShowcase />
      <ProcessSteps />
      <GalleryStrip />
      <ReviewsCarousel />
      <AboutBand />
      <CTABand />
    </>
  );
}
