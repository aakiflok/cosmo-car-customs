'use client';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesHorizontal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !wrapperRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 768) return;

    const sections = gsap.utils.toArray('.service-card') as HTMLElement[];
    const totalWidth = wrapperRef.current.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      const tween = gsap.to(sections, {
        x: () => -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });

      gsap.to(progressRef.current, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          scrub: true,
        }
      });

      sections.forEach((section) => {
        const img = section.querySelector('.service-img');

        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            containerAnimation: tween,
            start: 'left 60%',
            end: 'right 40%',
            toggleClass: { targets: section, className: 'is-active' },
          }
        });

        gsap.to(img, {
          x: '20%',
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            containerAnimation: tween,
            start: 'left right',
            end: 'right left',
            scrub: true,
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-canvas md:h-screen md:overflow-hidden">
      {/* Mobile Vertical Layout */}
      <div className="md:hidden px-5 py-24">
        <div className="mb-14 fade-up">
          <span className="livery-line" />
          <h2 className="display-xl text-white">Our Services.</h2>
        </div>
        <div className="flex flex-col gap-8">
          {SERVICES.map((s, i) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group block relative aspect-[4/5] overflow-hidden fade-up delay-1">
              <Image src={s.image} alt={s.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="label-uc mb-3 text-[9px] text-rossa">{s.number}</div>
                <h3 className="font-barlow text-[3rem] font-bold uppercase leading-none tracking-tight text-white mb-2">{s.name}</h3>
                <p className="text-[14px] text-white/60 mb-6">{s.tagline}</p>
                <div className="flex items-center gap-2 label-uc text-[9px] text-white group-hover:text-rossa transition-colors">
                  Explore <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop Horizontal Layout */}
      <div className="hidden md:flex h-full items-center" data-cursor="drag">
        <div ref={wrapperRef} className="flex h-[80vh] items-center gap-[8vw] px-[10vw]">
          {SERVICES.map(s => (
            <div key={s.slug} className="service-card relative h-[75vh] w-[75vw] shrink-0 opacity-40 transition-opacity duration-700 overflow-hidden [&.is-active]:opacity-100">
              <Link href={`/services/${s.slug}`} className="group block h-full w-full">
                <div className="absolute inset-0 scale-[1.2] origin-left">
                  <div className="service-img relative h-full w-full">
                    <Image src={s.image} alt={s.name} fill className="object-cover" sizes="100vw" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20 transition-colors duration-500 group-hover:bg-black/10" />
                <div className="absolute inset-0 p-16 flex flex-col justify-end service-content">
                  <div className="overflow-hidden mb-6">
                    <div className="label-uc text-[14px] text-rossa translate-y-full transition-transform duration-500 group-hover:translate-y-0 ease-out">{s.number}</div>
                  </div>
                  <h3 className="font-barlow text-[6rem] lg:text-[8rem] font-bold uppercase leading-none tracking-tighter text-white drop-shadow-lg">
                    {s.name}
                  </h3>
                  <div className="overflow-hidden mt-6">
                    <div className="flex items-center gap-4 text-white translate-y-full transition-transform duration-500 group-hover:translate-y-0 delay-75 ease-out">
                      <span className="label-uc text-[13px] tracking-[3px]">Explore Service</span>
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-hairline hidden md:block z-50">
        <div ref={progressRef} className="h-full bg-rossa origin-left scale-x-0" />
      </div>
    </section>
  );
}
