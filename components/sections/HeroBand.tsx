'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { BUSINESS } from '@/lib/data';

export default function HeroBand() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || window.innerWidth < 640) return;
    let rafId: number;
    import('three').then(({ Scene, PerspectiveCamera, WebGLRenderer, Points, PointsMaterial, BufferGeometry, BufferAttribute, AmbientLight, PointLight }) => {
      const el = canvasRef.current!;
      const scene = new Scene();
      const camera = new PerspectiveCamera(45, el.clientWidth / el.clientHeight, 0.1, 1000);
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
      const mat = new PointsMaterial({ color: 0xc79a3b, size: 0.025, transparent: true, opacity: 0.75 });
      const points = new Points(geo, mat);
      scene.add(points);
      scene.add(new AmbientLight(0xffffff, 0.4));
      const pl = new PointLight(0xc79a3b, 1);
      pl.position.set(3, 3, 3);
      scene.add(pl);
      let mx = 0, my = 0;
      const onMove = (e: MouseEvent) => { mx = (e.clientX / innerWidth - 0.5) * 0.5; my = (e.clientY / innerHeight - 0.5) * 0.3; };
      window.addEventListener('pointermove', onMove);
      const animate = () => {
        rafId = requestAnimationFrame(animate);
        points.rotation.y += 0.0012 + (mx - points.rotation.y) * 0.008;
        points.rotation.x += 0.0005 + (my - points.rotation.x) * 0.006;
        renderer.render(scene, camera);
      };
      animate();
      const ro = new ResizeObserver(() => {
        renderer.setSize(el.clientWidth, el.clientHeight);
        camera.aspect = el.clientWidth / el.clientHeight;
        camera.updateProjectionMatrix();
      });
      ro.observe(el);
      return () => { cancelAnimationFrame(rafId); window.removeEventListener('pointermove', onMove); ro.disconnect(); renderer.dispose(); };
    });
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="hero-overlay relative flex min-h-[92vh] items-end overflow-hidden bg-canvas">
      <img src="https://images.unsplash.com/photo-1494976688153-cd3554744ab4?auto=format&fit=crop&w=1800&q=80" alt="Cinematic luxury vehicle" className="absolute inset-0 h-full w-full object-cover" width={1800} height={1200} />
      <div ref={canvasRef} className="canvas-wrap" style={{ opacity: 0.65 }} />
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 pb-14 pt-28 md:px-8 md:pb-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-[780px]">
            <div className="mb-5 inline-flex items-center gap-2 border border-white/12 bg-black/30 px-4 py-2 backdrop-blur label-badge text-white/70">
              <Star size={11} fill="#c79a3b" stroke="none" />
              {BUSINESS.googleRating} Rating · {BUSINESS.reviewCount} Reviews · {BUSINESS.yearsExperience} Years of Expertise
            </div>
            <h1 className="display-mega mb-6 text-white">Precision detailing and paint protection for drivers who demand showroom-level finish.</h1>
            <p className="mb-8 max-w-[600px] text-[15px] leading-7 text-white/70">Ceramic coating, paint correction, PPF, tinting, and detailing for daily drivers and exotics across Mississauga and the GTA. Consultation-first, always.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/consultation" className="btn-primary">Request Private Consultation</Link>
              <a href="#services" className="btn-outline">Explore Services</a>
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-1">
            {[['Services','Ceramic coating, PPF, paint correction, tinting, and detailing.'],['Coverage','Mississauga and GTA. Shop visits and select mobile services.'],['Trust',`${BUSINESS.googleRating} Google rating across ${BUSINESS.reviewCount} verified reviews.`]].map(([t,d]) => (
              <div key={t} className="border border-white/10 bg-black/25 p-5 backdrop-blur-sm">
                <div className="label-badge mb-2 text-white/45">{t}</div>
                <div className="text-sm leading-6 text-white/78">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
