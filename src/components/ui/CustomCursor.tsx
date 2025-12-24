'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    setMounted(true);

    // Check for touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const clickable = target.closest('a, button, [role="button"], [data-hover="true"], input, select, textarea');
      setIsHovering(!!clickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Don't render until mounted or on touch devices
  if (!mounted) return null;
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div
      className="fixed pointer-events-none z-[99999]"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={`relative transition-all duration-200 ease-out ${
          isHovering ? 'scale-150 animate-pulse' : 'scale-100'
        }`}
      >
        {/* Black stroke with white shadow - visible on light backgrounds */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          className="absolute"
          style={{
            filter: 'drop-shadow(0 0 2px white) drop-shadow(0 0 2px white) drop-shadow(0 0 4px white)',
          }}
        >
          <path
            d="M12 3L4 10V20C4 20.5523 4.44772 21 5 21H9V15C9 14.4477 9.44772 14 10 14H14C14.5523 14 15 14.4477 15 15V21H19C19.5523 21 20 20.5523 20 20V10L12 3Z"
            stroke="black"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* White stroke with black shadow - visible on dark backgrounds */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          className="absolute"
          style={{
            filter: 'drop-shadow(0 0 2px black) drop-shadow(0 0 2px black)',
          }}
        >
          <path
            d="M12 3L4 10V20C4 20.5523 4.44772 21 5 21H9V15C9 14.4477 9.44772 14 10 14H14C14.5523 14 15 14.4477 15 15V21H19C19.5523 21 20 20.5523 20 20V10L12 3Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
