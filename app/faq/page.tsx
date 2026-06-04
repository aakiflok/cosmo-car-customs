import Link from 'next/link';
import { SERVICES } from '@/lib/data';

export default function FAQPage() {
  const allFaqs = SERVICES.flatMap(s => s.faqs.map(f => ({ ...f, service: s.name })));
  return (
    <div className="min-h-screen bg-canvas px-4 pb-24 pt-28 md:px-8">
      <div className="mx-auto max-w-[900px]">
        <div className="mb-16">
          <div className="label-badge mb-3 text-white/40">FAQ</div>
          <h1 className="display-xl mb-5 text-white">Common questions, direct answers.</h1>
        </div>
        <div className="divide-y divide-[#303030]">
          {allFaqs.map((f, i) => (
            <div key={i} className="py-8">
              <div className="label-badge mb-3 text-rossa">{f.service}</div>
              <h2 className="mb-3 text-[18px] font-medium text-white">{f.q}</h2>
              <p className="text-sm leading-7 text-white/65">{f.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 border-t border-[#303030] pt-12 text-center">
          <p className="mb-6 text-[15px] text-white/60">Still have a question? Talk to our team directly.</p>
          <Link href="/contact" className="btn-primary">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
