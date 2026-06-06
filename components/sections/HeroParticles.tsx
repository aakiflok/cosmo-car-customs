'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const container = containerRef.current;
    const isMobile = window.innerWidth < 768;
    const COUNT = isMobile ? 600 : 1800;

    /* ── Scene ────────────────────────────────── */
    const scene    = new THREE.Scene();
    const camera   = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    /* ── Circular sprite texture ──────────────── */
    const canvas2d = document.createElement('canvas');
    canvas2d.width  = 64;
    canvas2d.height = 64;
    const ctx = canvas2d.getContext('2d')!;
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0,   'rgba(255,255,255,1)');
    gradient.addColorStop(0.4, 'rgba(255,255,255,0.6)');
    gradient.addColorStop(1,   'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
    const sprite = new THREE.CanvasTexture(canvas2d);

    /* ── Geometry ─────────────────────────────── */
    const geometry  = new THREE.BufferGeometry();
    const positions = new Float32Array(COUNT * 3);
    const speeds    = new Float32Array(COUNT);
    const offsets   = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 120;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
      speeds[i]  = 0.3 + Math.random() * 0.7;
      offsets[i] = Math.random() * Math.PI * 2;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    /* ── Material ─────────────────────────────── */
    const material = new THREE.PointsMaterial({
      size:        isMobile ? 0.5 : 0.4,
      map:         sprite,
      transparent: true,
      opacity:     0.55,
      depthWrite:  false,
      blending:    THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    /* ── Mouse parallax ───────────────────────── */
    let targetX = 0, targetY = 0;
    const onPointerMove = (e: PointerEvent) => {
      targetX = (e.clientX / window.innerWidth  - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('pointermove', onPointerMove);

    /* ── Resize ───────────────────────────────── */
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    /* ── Animation loop ───────────────────────── */
    let frameId: number;
    let time = 0;
    let camX = 0, camY = 0;

    const animate = () => {
      time += 0.0008;
      const pos = geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < COUNT; i++) {
        pos[i * 3]     += Math.sin(time * speeds[i] + offsets[i])       * 0.003;
        pos[i * 3 + 1] += Math.cos(time * speeds[i] * 0.7 + offsets[i]) * 0.002;
      }
      geometry.attributes.position.needsUpdate = true;

      // Gentle camera drift on mouse
      camX += (targetX * 3 - camX) * 0.04;
      camY += (-targetY * 3 - camY) * 0.04;
      camera.position.x = camX;
      camera.position.y = camY;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(frameId);
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      sprite.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" />;
}
