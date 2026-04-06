'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const HERO_BLUR_DATA_URL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAA4ACgMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAABv/EAB8QAAICAgIDAQAAAAAAAAAAAAECAwQABREhBhIxQf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AptNrLUdWSW1MsijgKnx/eMMB//Z';

interface HeroImageRotatorProps {
  images: string[];
  interval?: number;
  alt?: string;
}

export function HeroImageRotator({
  images,
  interval = 6000,
  alt = 'Charlotte NC roofing - Best Roofing Now',
}: HeroImageRotatorProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const advance = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 1000); // 1s fade duration
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(advance, interval);
    return () => clearInterval(timer);
  }, [images.length, interval, advance]);

  if (images.length === 0) return null;

  return (
    <div className="absolute inset-0 hidden md:block" aria-hidden="true">
      {images.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: index === currentIndex ? (isTransitioning ? 0 : 1) : 0,
          }}
        >
          <Image
            src={src}
            alt={`${alt} - ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="(max-width: 768px) 1px, (max-width: 1024px) 1024px, 1920px"
            quality={45}
            placeholder="blur"
            blurDataURL={HERO_BLUR_DATA_URL}
          />
        </div>
      ))}
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}
