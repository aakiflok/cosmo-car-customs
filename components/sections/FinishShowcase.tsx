'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function FinishShowcase() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      import('three').then(({ Scene, PerspectiveCamera, WebGLRenderer, Mesh, IcosahedronGeometry, MeshPhysicalMaterial, AmbientLight, PointLight, LineSegments, WireframeGeometry, LineBasicMaterial }) => {
        const scene = new Scene();
        const camera = new PerspectiveCamera(45, el.clientWidth / el.clientHeight, 0.1, 100);
        camera.position.z = 4.5;
        const renderer = new WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(devicePixelRatio, 1.8));
        renderer.setSize(el.clientWidth, el.clientHeight);
        el.appendChild(renderer.domElement);
        
        const geo = new IcosahedronGeometry(1.4, 10);
        const mat = new MeshPhysicalMaterial({
          color: 0x1a1a18,
          metalness: 0.95,
          roughness: 0.04,
          clearcoat: 1,
          clearcoatRoughness: 0.02,
          envMapIntensity: 1.5,
        });
        const sphere = new Mesh(geo, mat);
        
        const wireGeo = new IcosahedronGeometry(1.6, 2);
        const wireMat = new LineBasicMaterial({ color: 0xc79a3b, transparent: true, opacity: 0.35 });
        const wireframe = new LineSegments(new WireframeGeometry(wireGeo), wireMat);
        
        scene.add(sphere, wireframe);
        scene.add(new AmbientLight(0xffffff, 0.5));
        const pl1 = new PointLight(0xffffff, 2); pl1.position.set(4, 4, 4); scene.add(pl1);
        const pl2 = new PointLight(0xc79a3b, 1.5); pl2.position.set(-4, -2, 2); scene.add(pl2);
        
        let frame: number;
        const animate = () => {
          frame = requestAnimationFrame(animate);
          sphere.rotation.y += 0.004;
          sphere.rotation.x += 0.002;
          wireframe.rotation.y -= 0.003;
          wireframe.rotation.x += 0.001;
          renderer.render(scene, camera);
        };
        animate();

        return () => {
          cancelAnimationFrame(frame);
          if (el.contains(renderer.domElement)) {
            el.removeChild(renderer.domElement);
          }
          renderer.dispose();
          geo.dispose();
          mat.dispose();
          wireGeo.dispose();
          wireMat.dispose();
        };
      });
    }, { threshold: 0.1 });
    
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-canvas section-pad container-pad hairline hairline-b">
      <div className="mx-auto grid max-w-[1440px] items-center gap-16 lg:grid-cols-2">
        <div className="stagger-children">
          <span className="livery-line fade-up" />
          <div className="label-uc mb-4 text-[9px] text-white/40 fade-up">Ceramic coating</div>
          <h2 className="display-xl mb-6 text-white fade-up max-w-[600px]">
            A finish so deep it looks like it came from the factory.
          </h2>
          <p className="mb-8 max-w-[540px] text-[15px] leading-8 text-white/60 fade-up">
            Our ceramic coating process permanently bonds to your paint, creating a hardened
            hydrophobic layer that sheds water, resists UV oxidation, and produces a gloss
            depth you can see across the room.
          </p>
          <ul className="mb-10 space-y-4 text-[14px] text-white/60">
            {[
              '3–10 years of protection depending on product tier',
              'Resistance to UV oxidation, bird etch, and chemical staining',
              'Hydrophobic water-sheeting effect',
              'Pairs with PPF for the ultimate protection system',
            ].map((item, i) => (
              <li key={item} className="flex items-start gap-3 fade-up">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-rossa rounded-full" />
                {item}
              </li>
            ))}
          </ul>
          <div className="fade-up">
            <Link href="/services/ceramic-coating" className="btn-outline magnetic" data-cursor="link">
              <span>View Ceramic Coating</span>
            </Link>
          </div>
        </div>
        <div ref={canvasRef} className="relative min-h-[500px] md:min-h-[600px] border border-[#1f1f1f] bg-[#0d0d0d] fade-up delay-2 overflow-hidden" data-cursor="drag">
          <div className="absolute left-6 top-6 z-10 border border-white/10 bg-black/40 px-3 py-2 label-uc text-[9px] text-white/50 backdrop-blur">
            Interactive 3D simulation
          </div>
        </div>
      </div>
    </section>
  );
}
