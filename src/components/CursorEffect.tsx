import { useEffect, useRef } from 'react';

export default function CursorEffect() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorGlow = cursorGlowRef.current;

    if (!cursor || !cursorGlow) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
      cursorGlow.style.transform = `translate(${clientX}px, ${clientY}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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
