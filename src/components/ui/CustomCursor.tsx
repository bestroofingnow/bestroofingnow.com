'use client';

import { useEffect, useRef, useCallback } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: -100, y: -100 });
  const smoothPositionRef = useRef({ x: -100, y: -100 });
  const isHoveringRef = useRef(false);
  const animationRef = useRef<number | undefined>(undefined);
  const isTouchDevice = useRef(false);

  // Animation loop using refs to avoid React re-renders
  const animate = useCallback(() => {
    const cursor = cursorRef.current;
    const inner = innerRef.current;
    if (!cursor || !inner) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    // Smooth interpolation
    smoothPositionRef.current.x += (positionRef.current.x - smoothPositionRef.current.x) * 0.15;
    smoothPositionRef.current.y += (positionRef.current.y - smoothPositionRef.current.y) * 0.15;

    // Direct DOM update - no React re-render
    cursor.style.transform = `translate3d(${smoothPositionRef.current.x}px, ${smoothPositionRef.current.y}px, 0) translate(-50%, -50%)`;

    // Update hover state without re-render
    if (isHoveringRef.current) {
      inner.style.transform = 'scale(1.5) rotate(0deg)';
    } else {
      inner.style.transform = 'scale(1) rotate(-15deg)';
    }

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Check for touch device - don't run on mobile
    if (typeof window !== 'undefined') {
      isTouchDevice.current = window.matchMedia('(pointer: coarse)').matches;
      if (isTouchDevice.current) {
        return;
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current.x = e.clientX;
      positionRef.current.y = e.clientY;

      const target = e.target as HTMLElement;
      const clickable = target.closest('a, button, [role="button"], [data-hover="true"], input, select, textarea');
      isHoveringRef.current = !!clickable;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Start animation loop
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  // Don't render on touch devices or during SSR
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[99999] pointer-events-none mix-blend-difference hidden md:flex items-center justify-center will-change-transform"
      style={{
        transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
      }}
      aria-hidden="true"
    >
      <div
        ref={innerRef}
        className="relative flex items-center justify-center text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: 'scale(1) rotate(-15deg)',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12"
          aria-hidden="true"
        >
          <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.632 8.632a.75.75 0 0 1-.53 1.28h-1.382v7.497a.75.75 0 0 1-.75.75H13.25V16a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0-.75.75v6H5.5a.75.75 0 0 1-.75-.75V13.753H3.368a.75.75 0 0 1-.53-1.28L11.47 3.841Z" />
        </svg>

        <span
          className="absolute top-full mt-2 text-white font-black uppercase tracking-widest text-[10px] whitespace-nowrap bg-red-600 px-2 py-0.5 rounded-full opacity-0 transition-all duration-200"
        >
          View
        </span>
      </div>
    </div>
  );
}
