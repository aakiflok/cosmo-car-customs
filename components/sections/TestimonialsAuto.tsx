'use client';
import { useState, useEffect } from 'react';
import { REVIEWS } from '@/lib/data';
import { useTouchSwipe } from '@/hooks/useTouchSwipe';
import { Star } from 'lucide-react';

export default function TestimonialsAuto() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [key, setKey] = useState(0);

  const next = () => {
    setIndex(prev => (prev + 1) % REVIEWS.length);
    setKey(prev => prev + 1);
  };

  const prev = () => {
    setIndex(prev => (prev - 1 + REVIEWS.length) % REVIEWS.length);
    setKey(prev => prev + 1);
  };

  const handlers = useTouchSwipe({ onSwipeLeft: next, onSwipeRight: prev });

  useEffect(() => {
    if (isHovered) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [isHovered, index]);

  return (
    <section className="bg-canvas px-5 py-32 md:px-10 overflow-hidden border-t border-[#1f1f1f]" {...handlers}>
      <div 
        className="mx-auto max-w-[800px] text-center fade-up"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-cursor="drag"
      >
        <div className="flex justify-center gap-1 mb-10">
          {[1, 2, 3, 4, 5].map(i => (
            <Star key={i} size={16} className="text-rossa fill-rossa" />
          ))}
        </div>

        <div className="relative min-h-[200px] md:min-h-[160px]">
          {REVIEWS.map((review, i) => {
            const isActive = i === index;
            const isPrev = i === (index - 1 + REVIEWS.length) % REVIEWS.length;
            
            let transformClass = 'translate-x-12 opacity-0';
            if (isActive) transformClass = 'translate-x-0 opacity-100';
            else if (isPrev) transformClass = '-translate-x-12 opacity-0';

            return (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ease-out ${transformClass}`}
                style={{ pointerEvents: isActive ? 'auto' : 'none' }}
              >
                <blockquote className="display-sm text-white mb-8">
                  &ldquo;{review.body}&rdquo;
                </blockquote>
                <div className="label-uc text-[9px] text-white/40">
                  <span className="text-white">{review.name}</span> &mdash; {review.service}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center gap-3">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => { setIndex(i); setKey(prev => prev + 1); }}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                i === index ? 'bg-rossa w-6' : 'bg-[#1f1f1f] w-1.5 hover:bg-white/20'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="mt-10 mx-auto h-[2px] w-full max-w-[120px] bg-[#1f1f1f] overflow-hidden">
          <div
            key={key}
            className="h-full bg-rossa origin-left"
            style={{
              animation: isHovered ? 'none' : 'progress 5s linear forwards',
            }}
          />
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes progress {
            0% { transform: scaleX(0); }
            100% { transform: scaleX(1); }
          }
        `}} />
      </div>
    </section>
  );
}
