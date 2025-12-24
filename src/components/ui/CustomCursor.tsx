'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [smoothPosition, setSmoothPosition] = useState({ x: -100, y: -100 });
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    setMounted(true);

    // Check for touch device
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const clickable = target.closest('a, button, [role="button"], [data-hover="true"], input, select, textarea');
      setIsHovering(!!clickable);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth spring-like animation
  useEffect(() => {
    const animate = () => {
      setSmoothPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [position]);

  // Don't render until mounted or on touch devices
  if (!mounted) return null;
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div
      className="fixed top-0 left-0 z-[99999] pointer-events-none mix-blend-difference hidden md:flex items-center justify-center"
      style={{
        left: smoothPosition.x,
        top: smoothPosition.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* House Icon Cursor */}
      <div
        className="relative flex items-center justify-center text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-transform duration-200 ease-out"
        style={{
          transform: isHovering ? 'scale(1.5) rotate(0deg)' : 'scale(1) rotate(-15deg)',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12"
        >
          <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.632 8.632a.75.75 0 0 1-.53 1.28h-1.382v7.497a.75.75 0 0 1-.75.75H13.25V16a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0-.75.75v6H5.5a.75.75 0 0 1-.75-.75V13.753H3.368a.75.75 0 0 1-.53-1.28L11.47 3.841Z" />
        </svg>

        {/* Text appears below house when hovering */}
        <span
          className="absolute top-full mt-2 text-white font-black uppercase tracking-widest text-[10px] whitespace-nowrap bg-red-600 px-2 py-0.5 rounded-full transition-all duration-200"
          style={{
            opacity: isHovering ? 1 : 0,
            transform: isHovering ? 'translateY(0)' : 'translateY(-10px)',
          }}
        >
          View
        </span>
      </div>
    </div>
  );
}
