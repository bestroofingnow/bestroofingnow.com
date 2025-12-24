'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const onMouseMove = useCallback((event: MouseEvent) => {
    cursorX.set(event.clientX);
    cursorY.set(event.clientY);
    
    if (!isVisible) setIsVisible(true);

    const target = event.target as HTMLElement;
    const isClickable = !!(
      target.closest('a') ||
      target.closest('button') ||
      target.closest('[data-hover="true"]') ||
      target.closest('[role="button"]')
    );
    setIsHovering(isClickable);
  }, [cursorX, cursorY, isVisible]);

  useEffect(() => {
    // Check if touch device
    const isTouchDevice = 
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;

    if (isTouchDevice) {
      return;
    }

    window.addEventListener('mousemove', onMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [onMouseMove]);

  // Don't render anything on touch devices or server
  if (typeof window === 'undefined') return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.15 }}
    >
      <motion.div
        animate={{
          scale: isHovering ? 1.4 : 1,
          rotate: isHovering ? 0 : -15,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative"
      >
        {/* Shadow/Glow layer */}
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          className="absolute inset-0 blur-sm opacity-50"
        >
          <path
            d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.632 8.632a.75.75 0 0 1-.53 1.28h-1.382v7.497a.75.75 0 0 1-.75.75H13.25V16a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0-.75.75v6H5.5a.75.75 0 0 1-.75-.75V13.753H3.368a.75.75 0 0 1-.53-1.28L11.47 3.841Z"
            fill="#000"
          />
        </svg>
        
        {/* White outline for visibility on dark backgrounds */}
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          className="absolute inset-0"
        >
          <path
            d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.632 8.632a.75.75 0 0 1-.53 1.28h-1.382v7.497a.75.75 0 0 1-.75.75H13.25V16a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0-.75.75v6H5.5a.75.75 0 0 1-.75-.75V13.753H3.368a.75.75 0 0 1-.53-1.28L11.47 3.841Z"
            fill="none"
            stroke="#fff"
            strokeWidth="2.5"
          />
        </svg>
        
        {/* Main house icon - Brand Primary Blue */}
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          className="relative"
        >
          <path
            d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.632 8.632a.75.75 0 0 1-.53 1.28h-1.382v7.497a.75.75 0 0 1-.75.75H13.25V16a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0-.75.75v6H5.5a.75.75 0 0 1-.75-.75V13.753H3.368a.75.75 0 0 1-.53-1.28L11.47 3.841Z"
            fill="#1A43AA"
            stroke="#0f2a6b"
            strokeWidth="0.5"
          />
        </svg>

        {/* Hover label */}
        <motion.div
          className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-full bg-red-600 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-lg"
          initial={{ opacity: 0, y: -5, scale: 0.8 }}
          animate={{
            opacity: isHovering ? 1 : 0,
            y: isHovering ? 0 : -5,
            scale: isHovering ? 1 : 0.8,
          }}
          transition={{ duration: 0.15 }}
        >
          View
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
