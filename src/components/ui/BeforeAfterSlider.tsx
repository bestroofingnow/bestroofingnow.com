'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  className = '',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl cursor-ew-resize select-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* After Image (Background) */}
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={afterImage}
          alt={afterLabel}
          fill
          className="object-cover"
          draggable={false}
        />
        {/* After Label */}
        <div className="absolute bottom-4 right-4 bg-accent text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Overlay with clip) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <div className="relative aspect-[4/3] w-full h-full">
          <Image
            src={beforeImage}
            alt={beforeLabel}
            fill
            className="object-cover"
            draggable={false}
          />
          {/* Before Label */}
          <div className="absolute bottom-4 left-4 bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
            {beforeLabel}
          </div>
        </div>
      </div>

      {/* Slider Handle */}
      <button
        type="button"
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 transition-transform hover:scale-x-150"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') {
            setSliderPosition((prev) => Math.max(0, prev - 5));
          } else if (e.key === 'ArrowRight') {
            setSliderPosition((prev) => Math.min(100, prev + 5));
          }
        }}
        aria-label="Drag to compare before and after images. Use left and right arrow keys to adjust."
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(sliderPosition)}
      >
        {/* Handle Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-primary" aria-hidden="true">
          <div className="flex items-center gap-0.5">
            <svg
              className="w-3 h-3 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="w-3 h-3 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Vertical Line Effect */}
        <div className="absolute inset-0 w-1 bg-white shadow-lg" aria-hidden="true" />
      </button>

      {/* Instructions Overlay */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
        Drag to compare
      </div>
    </div>
  );
}

// Gallery of before/after comparisons
interface BeforeAfterGalleryProps {
  items: {
    before: string;
    after: string;
    title?: string;
  }[];
}

export function BeforeAfterGallery({ items }: BeforeAfterGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-6">
      {/* Main Slider */}
      <BeforeAfterSlider
        beforeImage={items[activeIndex].before}
        afterImage={items[activeIndex].after}
      />

      {/* Title */}
      {items[activeIndex].title && (
        <p className="text-center text-lg font-semibold text-dark">
          {items[activeIndex].title}
        </p>
      )}

      {/* Thumbnails */}
      {items.length > 1 && (
        <div className="flex justify-center gap-4">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                index === activeIndex
                  ? 'border-primary scale-110 shadow-lg'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
              aria-label={`View ${item.title || `project ${index + 1}`} before and after comparison`}
              aria-pressed={index === activeIndex}
            >
              <Image
                src={item.after}
                alt=""
                fill
                className="object-cover"
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
