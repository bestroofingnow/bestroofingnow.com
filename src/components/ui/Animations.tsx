'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

// CSS-based animation wrappers using IntersectionObserver
// Eliminates Framer Motion dependency (~50KB savings)

interface AnimationProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

// Hook for intersection observer based animations
function useInViewAnimation(margin = '-50px') {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [margin]);

  return { ref, isInView };
}

// Fade in from bottom animation
export function FadeInUp({ children, delay = 0, className = '' }: AnimationProps) {
  const { ref, isInView } = useInViewAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// Fade in from left
export function FadeInLeft({ children, delay = 0, className = '' }: AnimationProps) {
  const { ref, isInView } = useInViewAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateX(0)' : 'translateX(-50px)',
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// Fade in from right
export function FadeInRight({ children, delay = 0, className = '' }: AnimationProps) {
  const { ref, isInView } = useInViewAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateX(0)' : 'translateX(50px)',
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// Scale up animation
export function ScaleIn({ children, delay = 0, className = '' }: AnimationProps) {
  const { ref, isInView } = useInViewAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'scale(1)' : 'scale(0.8)',
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// Staggered children animation container
export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className = '',
}: {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}) {
  const { ref, isInView } = useInViewAnimation();

  return (
    <div
      ref={ref}
      className={className}
      style={{ '--stagger-delay': `${staggerDelay}s` } as React.CSSProperties}
      data-in-view={isInView}
    >
      {children}
    </div>
  );
}

// Staggered child item
export function StaggerItem({
  children,
  className = '',
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  const { ref, isInView } = useInViewAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      {children}
    </div>
  );
}

// Animated counter for stats - pure JS, no Framer Motion
export function AnimatedCounter({
  value,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',
}: {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();

          let startTime: number;
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * value));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { rootMargin: '-50px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}

// Simple passthrough components for backwards compatibility
export function FloatingElement({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function PulseElement({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function HoverScale({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`transition-transform hover:scale-105 ${className}`}>{children}</div>;
}

export function TextReveal({ text, className = '' }: { text: string; className?: string }) {
  return <span className={className}>{text}</span>;
}

export function ParallaxSection({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}
