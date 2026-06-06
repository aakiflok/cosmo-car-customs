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
    const x = ('touches' in e) ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    let pos = ((x - rect.left) / rect.width) * 100;
    
    if (pos < 0) pos = 0;
    if (pos > 100) pos = 100;
    
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
      <div className="absolute inset-0">
        <Image src={afterImg} alt="After" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
      </div>

      <div 
        className="absolute inset-0"
        style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
      >
        <Image src={beforeImg} alt="Before" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
      </div>

      <div className={`absolute left-4 top-4 z-10 label-uc bg-black/40 px-3 py-1 backdrop-blur transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0 delay-700'}`}>
        Before
      </div>
      <div className={`absolute right-4 top-4 z-10 label-uc bg-black/40 px-3 py-1 backdrop-blur transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0 delay-700'}`}>
        After
      </div>

      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize"
        style={{ left: `${sliderPos}%` }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        data-cursor="drag"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 pulse-ring">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-gray-300 rounded-full" />
            <div className="w-1 h-3 bg-gray-300 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
