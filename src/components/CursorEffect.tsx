import { useEffect, useRef } from 'react';

export default function CursorEffect() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable cursor effect on touch devices
    const isTouchDevice = () => {
      return (((navigator.maxTouchPoints || navigator.msMaxTouchPoints) || 0) > 0);
    };

    if (isTouchDevice()) {
      return;
    }

    const cursor = cursorRef.current;
    const cursorGlow = cursorGlowRef.current;

    if (!cursor || !cursorGlow) return;

    let rafId: number;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      rafId = requestAnimationFrame(() => {
        cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        cursorGlow.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-4 h-4 bg-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{ left: '-8px', top: '-8px' }}
      />
      <div
        ref={cursorGlowRef}
        className="fixed w-32 h-32 bg-cyan-400/20 rounded-full pointer-events-none z-[9998] blur-xl"
        style={{ left: '-64px', top: '-64px' }}
      />
    </>
  );
}
