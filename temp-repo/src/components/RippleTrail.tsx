import { useEffect, useRef } from 'react';

const RIPPLE_COUNT = 80;

export default function RippleTrail() {
  const ripplesRef = useRef<HTMLDivElement[]>([]);
  const stateRef = useRef({
    currentIndex: 0,
    lastX: 0,
    lastY: 0,
    ripples: Array.from({ length: RIPPLE_COUNT }).map(() => ({
      active: false,
      age: 0,
      x: 0,
      y: 0,
    })),
  });

  useEffect(() => {
    const state = stateRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - state.lastX;
      const dy = e.clientY - state.lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 25) {
        state.lastX = e.clientX;
        state.lastY = e.clientY;

        const idx = state.currentIndex;
        state.ripples[idx] = {
          active: true,
          age: 0,
          x: e.clientX,
          y: e.clientY,
        };
        state.currentIndex = (idx + 1) % RIPPLE_COUNT;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;

    const render = () => {
      state.ripples.forEach((ripple, i) => {
        if (ripple.active) {
          ripple.age += 0.012;
          if (ripple.age >= 1) {
            ripple.active = false;
          }

          const el = ripplesRef.current[i];
          if (el) {
            if (ripple.active) {
              const size = 20 + ripple.age * 280;
              const opacity = 1 - Math.pow(ripple.age, 1.2);
              el.style.width = `${size}px`;
              el.style.height = `${size}px`;
              el.style.left = `${ripple.x - size / 2}px`;
              el.style.top = `${ripple.y - size / 2}px`;
              el.style.opacity = opacity.toString();
              el.style.transform = `scale(1)`;
            } else {
              el.style.opacity = '0';
            }
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <svg className="hidden">
        <filter id="liquid-trail">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
        {Array.from({ length: RIPPLE_COUNT }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) ripplesRef.current[i] = el;
            }}
            className="absolute rounded-full opacity-0"
            style={{
              backdropFilter: 'url(#liquid-trail) blur(1px)',
              boxShadow: 'inset 0 0 30px rgba(255,255,255,0.1), 0 0 15px rgba(196,181,253,0.15)',
              willChange: 'transform, opacity, width, height, left, top',
            }}
          />
        ))}
      </div>
    </>
  );
}
