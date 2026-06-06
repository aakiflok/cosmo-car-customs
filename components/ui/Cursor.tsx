'use client';

import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let outerX = mouseX;
    let outerY = mouseY;
    let innerX = mouseX;
    let innerY = mouseY;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = e.target as HTMLElement;
      if (!target) return;
      
      const cursorState = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      if (outerRef.current) {
        outerRef.current.className = cursorState ? `state-${cursorState}` : '';
      }
      
      if (cursorState === 'image') setLabel('View');
      else if (cursorState === 'drag') setLabel('Drag →');
      else if (cursorState === 'close') setLabel('×');
      else setLabel(null);
    };

    window.addEventListener('mousemove', onMouseMove);

    let frame: number;
    const render = () => {
      outerX += (mouseX - outerX) * 0.12;
      outerY += (mouseY - outerY) * 0.12;
      innerX += (mouseX - innerX) * 0.9;
      innerY += (mouseY - innerY) * 0.9;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate(calc(-50% + ${outerX}px), calc(-50% + ${outerY}px))`;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(calc(-50% + ${innerX}px), calc(-50% + ${innerY}px))`;
      }

      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div id="custom-cursor-outer" ref={outerRef}>
        {label && <span>{label}</span>}
      </div>
      <div id="custom-cursor-inner" ref={innerRef} />
    </>
  );
}
