'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface BeforeAfterProps {
  beforeImg: string;
  afterImg: string;
}

export default function BeforeAfterSlider({ beforeImg, afterImg }: BeforeAfterProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchend', handleUp);
    return () => {
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchend', handleUp);
    };
  }, []);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    let pos = ((x - rect.left) / rect.width) * 100;
    pos = Math.max(0, Math.min(100, pos));
    setSliderPos(pos);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden select-none"
      style={{ aspectRatio: '16/9' }}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After image (base) */}
      <div className="absolute inset-0">
        <Image
          src={afterImg}
          alt="After detailing"
          fill
          unoptimized
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 75vw"
        />
      </div>

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
      >
        <Image
          src={beforeImg}
          alt="Before detailing"
          fill
          unoptimized
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 75vw"
        />
      </div>

      {/* Labels */}
      <div
        className={`absolute left-4 top-4 z-10 label-uc text-[9px] bg-black/50 px-3 py-1 backdrop-blur-sm transition-opacity duration-700 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Before
      </div>
      <div
        className={`absolute right-4 top-4 z-10 label-uc text-[9px] bg-black/50 px-3 py-1 backdrop-blur-sm transition-opacity duration-700 delay-200 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        After
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-[1px] bg-white/60 cursor-ew-resize z-20"
        style={{ left: `${sliderPos}%` }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        data-cursor="drag"
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl cursor-ew-resize">
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
            <path d="M5 1L1 5L5 9" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 1L15 5L11 9" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
