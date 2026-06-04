import { Phone, MapPin, Instagram, Clock } from 'lucide-react';
import Link from 'next/link';
import { BUSINESS } from '@/lib/data';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-canvas px-4 pb-24 pt-28 md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14">
          <div className="label-badge mb-3 text-white/40">Contact</div>
          <h1 className="display-xl text-white">Get in touch with the studio.</h1>
        </div>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr]">
          <div className="space-y-6">
            {[{icon: Phone, label:'Phone', value:BUSINESS.phone, href:`tel:${BUSINESS.phone}`},{icon: Phone, label:'Alternative', value:BUSINESS.phone2, href:`tel:${BUSINESS.phone2}`},{icon: MapPin, label:'Address', value:BUSINESS.address, href:'#'},{icon: Instagram, label:'Instagram', value:'@cosmocarcustoms', href:BUSINESS.instagram},{icon: Clock, label:'Hours', value:'Monday – Saturday, 9am – 6pm', href:'#'}].map(({icon:Icon,label,value,href})=>(
              <div key={label} className="flex items-start gap-5 border border-[#303030] p-6">
                <Icon size={18} className="mt-0.5 shrink-0 text-rossa" />
                <div>
                  <div className="label-badge mb-1 text-white/40">{label}</div>
                  <a href={href} className="text-[15px] text-white hover:text-rossa transition-colors">{value}</a>
                </div>
              </div>
            ))}
          </div>
          <div className="border border-[#303030] bg-[#222222] p-8">
            <div className="label-badge mb-5 text-white/40">Quickest path to booking</div>
            <p className="mb-6 text-sm leading-6 text-white/65">Use the consultation flow for the fastest response — it routes your request directly to our team with all the context we need to respond accurately.</p>
            <Link href="/consultation" className="btn-primary">Start Consultation</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
