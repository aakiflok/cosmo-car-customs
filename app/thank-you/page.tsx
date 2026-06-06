import { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Thank You | Cosmo Car Customs',
  description: 'Your consultation request has been received. We will contact you within 24 hours.',
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <div className="bg-canvas min-h-screen flex items-center justify-center py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 w-full">
        <div className="max-w-[600px] mx-auto text-center">
          <div className="mb-12 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-rossa/10 border border-rossa flex items-center justify-center">
              <Check size={48} className="text-rossa" aria-hidden="true" />
            </div>
          </div>

          <h1 className="display-lg mb-4">Thank you!</h1>
          <p className="text-16px text-white/60 mb-12">
            Your consultation request has been received. We'll review your vehicle details and get back to you within 24 hours.
          </p>

          <div className="bg-elevated border border-hairline rounded-lg p-8 md:p-12 mb-12 text-left">
            <h2 className="display-sm mb-8 text-center">What happens next</h2>

            <div className="space-y-6">
              {[
                {
                  num: '1',
                  title: 'Review',
                  desc: 'Our team will review your vehicle information and service requirements.',
                },
                {
                  num: '2',
                  title: 'Contact',
                  desc: 'We will call you within 24 hours to confirm availability and discuss options.',
                },
                {
                  num: '3',
                  title: 'Schedule',
                  desc: 'Finalize your booking and drop off your vehicle at our Mississauga studio.',
                },
              ].map((step) => (
                <div key={step.num} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-rossa/20 border border-rossa/50 flex items-center justify-center">
                      <span className="font-600 text-rossa text-14px">{step.num}</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-600 text-white mb-1">{step.title}</p>
                    <p className="text-13px text-white/60">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-hairline border border-white/10 rounded-lg p-6 md:p-8 mb-12">
            <p className="text-13px text-white/70">
              <span className="font-600">Questions?</span>
              {' '}Call us at{' '}
              <a href="tel:+14165551234" className="text-rossa hover:underline">
                +1 (416) 555-1234
              </a>
              {' '}or email{' '}
              <a href="mailto:hello@cosmocarcustoms.com" className="text-rossa hover:underline">
                hello@cosmocarcustoms.com
              </a>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gallery" className="btn-outline">
              <span>View Gallery</span>
            </Link>
            <Link href="/" className="btn-primary flex items-center gap-2">
              <span>Back to Home</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
