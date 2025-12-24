'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  }, [testimonials.length]);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      paginate(1);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, paginate]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl p-8 md:p-12 min-h-[300px]">
        <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10" />

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="cursor-grab active:cursor-grabbing"
          >
            {/* Rating Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Star
                    className={`w-6 h-6 ${
                      i < currentTestimonial.rating
                        ? 'text-accent fill-accent'
                        : 'text-gray-300'
                    }`}
                  />
                </motion.div>
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-center text-dark mb-8 leading-relaxed">
              &ldquo;{currentTestimonial.text}&rdquo;
            </blockquote>

            {/* Author Info */}
            <div className="text-center">
              <p className="font-bold text-dark text-lg">{currentTestimonial.name}</p>
              <p className="text-gray">{currentTestimonial.location}</p>
              {currentTestimonial.service && (
                <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  {currentTestimonial.service}
                </span>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
