import { Metadata } from 'next';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Cosmo Car Customs',
  description: 'This page could not be found.',
};

export default function NotFoundPage() {
  return (
    <div className="bg-canvas min-h-screen flex items-center justify-center py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 w-full">
        <div className="max-w-[600px] mx-auto text-center">
          <div className="mb-8">
            <h1 className="font-barlow text-[120px] md:text-[160px] font-700 leading-none text-rossa mb-4">
              404
            </h1>
            <div className="h-1 w-12 bg-rossa mx-auto" />
          </div>

          <h2 className="display-lg mb-4">This page took a detour.</h2>
          <p className="text-16px text-white/60 mb-12">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>

          <div className="bg-elevated border border-hairline rounded-lg p-8 mb-12 text-left">
            <p className="label-uc text-9px text-white/40 mb-6">Explore instead</p>
            <div className="space-y-3">
              {[
                { label: 'Homepage', href: '/' },
                { label: 'Services', href: '/#services' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 text-14px text-white/70 hover:text-white transition-colors group"
                >
                  <span className="w-6 h-px bg-white/20 group-hover:bg-rossa transition-colors" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-outline flex items-center gap-2 justify-center">
              <ArrowLeft size={14} aria-hidden="true" />
              <span>Go Back</span>
            </Link>
            <Link href="/" className="btn-primary flex items-center gap-2 justify-center">
              <Home size={14} aria-hidden="true" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
