'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  service?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function TestimonialCarousel({
  testimonials,
  autoPlay = true,
  autoPlayInterval = 5000,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const paginate = useCallback((newDirection: number) => {
    if (isTransitioning) return;

    setDirection(newDirection > 0 ? 'right' : 'left');
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        let nextIndex = prevIndex + newDirection;
        if (nextIndex < 0) nextIndex = testimonials.length - 1;
        if (nextIndex >= testimonials.length) nextIndex = 0;
        return nextIndex;
      });
      setIsTransitioning(false);
    }, 300);
  }, [testimonials.length, isTransitioning]);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      paginate(1);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, paginate]);

  const currentTestimonial = testimonials[currentIndex];

  // Touch handling for swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) paginate(1);
    if (isRightSwipe) paginate(-1);
  };

  return (
    <div className="relative max-w-4xl mx-auto" role="region" aria-label="Customer testimonials" aria-roledescription="carousel">
      {/* Main Carousel */}
      <div
        className="relative overflow-hidden rounded-2xl bg-white shadow-xl p-8 md:p-12 h-[380px] md:h-[340px]"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10" aria-hidden="true" />

        <div
          className={`transition-all duration-300 ease-out ${
            isTransitioning
              ? direction === 'right'
                ? 'opacity-0 -translate-x-8'
                : 'opacity-0 translate-x-8'
              : 'opacity-100 translate-x-0'
          }`}
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Rating Stars */}
          <div className="flex justify-center gap-1 mb-6" aria-label={`${currentTestimonial.rating} out of 5 stars`}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                aria-hidden="true"
                className={`w-6 h-6 transition-all duration-200 ${
                  i < currentTestimonial.rating
                    ? 'text-accent fill-accent'
                    : 'text-gray-300'
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-xl md:text-2xl text-center text-dark mb-8 leading-relaxed">
            &ldquo;{currentTestimonial.text}&rdquo;
          </blockquote>

          {/* Author Info */}
          <footer className="text-center">
            <cite className="not-italic">
              <p className="font-bold text-dark text-lg">{currentTestimonial.name}</p>
              <p className="text-gray">{currentTestimonial.location}</p>
            </cite>
            {currentTestimonial.service && (
              <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                {currentTestimonial.service}
              </span>
            )}
          </footer>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6" aria-hidden="true" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6" aria-hidden="true" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Testimonial navigation">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`Testimonial ${index + 1} of ${testimonials.length}: ${testimonial.name}`}
            onClick={() => {
              if (index !== currentIndex) {
                setDirection(index > currentIndex ? 'right' : 'left');
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsTransitioning(false);
                }, 300);
              }
            }}
            className={`h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
              index === currentIndex
                ? 'bg-primary w-8'
                : 'bg-gray-300 hover:bg-gray-400 w-3'
            }`}
          />
        ))}
      </div>
      {/* Screen reader announcement */}
      <div className="sr-only" aria-live="polite">
        Showing testimonial {currentIndex + 1} of {testimonials.length}
      </div>
    </div>
  );
}
