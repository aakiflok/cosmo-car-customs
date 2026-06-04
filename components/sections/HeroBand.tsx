'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';
import { BUSINESS } from '@/lib/data';

export default function HeroBand() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Only load Three.js on non-low-end devices
    const lowEnd = navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency < 4;
    if (lowEnd) return;
    let raf: number;
    import('three').then(({ Scene, PerspectiveCamera, WebGLRenderer, Points, PointsMaterial, BufferGeometry, BufferAttribute, PointLight, AmbientLight }) => {
      const scene    = new Scene();
      const camera   = new PerspectiveCamera(45, el.clientWidth / el.clientHeight, 0.1, 1000);
      camera.position.z = 5;
      const renderer = new WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 1.8));
      renderer.setSize(el.clientWidth, el.clientHeight);
      el.appendChild(renderer.domElement);

      const count = 1600;
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * 7;
      const geo = new BufferGeometry();
      geo.setAttribute('position', new BufferAttribute(pos, 3));
      const mat = new PointsMaterial({ color: 0xc79a3b, size: 0.022, transparent: true, opacity: 0.72 });
      const pts = new Points(geo, mat);
      scene.add(pts);
      const al = new AmbientLight(0xffffff, 0.4); scene.add(al);
      const pl = new PointLight(0xc79a3b, 1); pl.position.set(3,3,3); scene.add(pl);

      let mx = 0, my = 0;
      const onMove = (e: PointerEvent) => {
        mx = (e.clientX / innerWidth  - 0.5) * 0.5;
        my = (e.clientY / innerHeight - 0.5) * 0.3;
      };
      window.addEventListener('pointermove', onMove, { passive: true });

      const tick = () => {
        raf = requestAnimationFrame(tick);
        pts.rotation.y += 0.001 + (mx - pts.rotation.y) * 0.006;
        pts.rotation.x += 0.0005 + (my - pts.rotation.x) * 0.004;
        renderer.render(scene, camera);
      };
      tick();

      const ro = new ResizeObserver(() => {
        renderer.setSize(el.clientWidth, el.clientHeight);
        camera.aspect = el.clientWidth / el.clientHeight;
        camera.updateProjectionMatrix();
      });
      ro.observe(el);

      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener('pointermove', onMove);
        ro.disconnect();
        renderer.dispose();
      };
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      className="hero-overlay relative flex min-h-[100svh] items-end overflow-hidden bg-canvas"
      aria-label="Hero — Cosmo Car Customs premium vehicle studio"
    >
      {/* Cinematic photograph */}
      <img
        src="https://images.unsplash.com/photo-1494976688153-cd3554744ab4?auto=format&fit=crop&w=1800&q=80"
        alt=""
        role="presentation"
        className="hero-img absolute inset-0 h-full w-full"
        width={1800}
        height={1200}
        fetchPriority="high"
        decoding="async"
      />
      {/* Three.js particle layer */}
      <div ref={canvasRef} className="canvas-wrap" style={{ opacity: 0.65 }} aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 pb-12 pt-24 md:px-8 md:pb-20 md:pt-32">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">

          {/* Left — headline block */}
          <div className="max-w-[780px]">
            {/* Trust badge */}
            <div className="mb-5 inline-flex items-center gap-2 border border-white/12 bg-black/30 px-3 py-2 label-badge text-white/70 backdrop-blur-sm md:px-4">
              <Star size={10} fill="#c79a3b" stroke="none" aria-hidden="true" />
              {BUSINESS.googleRating} Rating · {BUSINESS.reviewCount} Reviews · {BUSINESS.yearsExperience} Years
            </div>
            <h1 className="display-mega mb-5 text-white">
              Precision detailing and paint protection for drivers who demand showroom-level finish.
            </h1>
            <p className="mb-8 max-w-[580px] text-[14px] leading-7 text-white/68 md:text-[15px]">
              Ceramic coating, PPF, paint correction, window tinting, and detailing for daily drivers and exotics across Mississauga and the GTA.
            </p>
            {/* CTA row — stacks on mobile */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/consultation" className="btn-primary w-full sm:w-auto">Request Consultation</Link>
              <a href="#services" className="btn-outline w-full sm:w-auto">Explore Services</a>
            </div>
          </div>

          {/* Right — info cards — hidden on small mobile, 1-col on md */}
          <div className="hidden gap-4 md:grid lg:grid-cols-1">
            {[
              ['Coverage', 'Mississauga and GTA. Shop visits and select mobile services.'],
              ['Trust', `${BUSINESS.googleRating} Google rating · ${BUSINESS.reviewCount} verified reviews.`],
              ['Experience', `${BUSINESS.yearsExperience} years of combined professional expertise.`],
            ].map(([title, desc]) => (
              <div key={title} className="border border-white/10 bg-black/28 p-5 backdrop-blur-sm">
                <div className="label-badge mb-2 text-white/40">{title}</div>
                <p className="text-[13px] leading-6 text-white/75">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile trust row */}
        <div className="mt-8 grid grid-cols-3 gap-px bg-[#303030] md:hidden">
          {[[BUSINESS.googleRating,'Rating'],[BUSINESS.reviewCount,'Reviews'],[BUSINESS.yearsExperience+' yrs','Experience']].map(([v,l])=>(
            <div key={l} className="bg-canvas/80 px-3 py-4 text-center backdrop-blur-sm">
              <div className="text-lg font-bold text-white">{v}</div>
              <div className="label-badge mt-1 text-white/40">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
