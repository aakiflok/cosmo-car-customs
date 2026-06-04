'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function FinishShowcase() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
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
        const mat = new MeshPhysicalMaterial({ color: 0x1a1a18, metalness: 0.95, roughness: 0.04, clearcoat: 1, clearcoatRoughness: 0.02, envMapIntensity: 1.5 });
        const sphere = new Mesh(geo, mat);
        const wireGeo = new IcosahedronGeometry(1.6, 2);
        const wireMat = new LineBasicMaterial({ color: 0xc79a3b, transparent: true, opacity: 0.55 });
        const wireframe = new LineSegments(new WireframeGeometry(wireGeo), wireMat);
        scene.add(sphere, wireframe);
        scene.add(new AmbientLight(0xffffff, 0.5));
        const pl1 = new PointLight(0xffffff, 2); pl1.position.set(4, 4, 4); scene.add(pl1);
        const pl2 = new PointLight(0xc79a3b, 1.5); pl2.position.set(-4, -2, 2); scene.add(pl2);
        const animate = () => {
          requestAnimationFrame(animate);
          sphere.rotation.y += 0.004; sphere.rotation.x += 0.002;
          wireframe.rotation.y -= 0.003; wireframe.rotation.x += 0.001;
          renderer.render(scene, camera);
        };
        animate();
      });
    }, { threshold: 0.1 });
    observer.observe(el);
  }, []);

  return (
    <section className="bg-[#222222] px-4 py-24 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-2">
        <div className="reveal reveal-up">
          <div className="label-badge mb-3 text-white/40">Ceramic coating</div>
          <h2 className="display-xl mb-5 text-white">A finish so deep it looks like it came from the factory — only better.</h2>
          <p className="mb-5 max-w-[540px] text-[15px] leading-7 text-white/68">Our ceramic coating process permanently bonds to your paint, creating a hardened hydrophobic layer that sheds water, resists UV oxidation, and produces a gloss depth you can see across the room.</p>
          <ul className="mb-8 space-y-3 text-sm text-white/70">
            {['3–10 years of protection depending on product tier','Resistance to UV oxidation, bird etch, and chemical staining','Hydrophobic water-sheeting effect','Pairs with PPF for the ultimate protection system'].map(i => (
              <li key={i} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 bg-rossa"></span>{i}</li>
            ))}
          </ul>
          <Link href="/services/ceramic-coating" className="btn-primary">View Ceramic Coating</Link>
        </div>
        <div ref={canvasRef} className="relative min-h-[420px] border border-white/10 bg-canvas">
          <div className="absolute left-4 top-4 z-10 border border-white/10 bg-black/40 px-3 py-2 label-badge text-white/55 backdrop-blur">3D finish simulation</div>
        </div>
      </div>
    </section>
  );
}
