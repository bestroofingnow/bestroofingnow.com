import React from 'react';

interface GradientTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({
  text,
  as: Component = 'span',
  className = ''
}) => {
  return (
    <Component className={`relative inline-block font-bold tracking-tight isolate ${className}`}>
      {/* Main Gradient Text - uses brand colors with CSS animation */}
      <span
        className="absolute inset-0 z-10 block bg-gradient-to-r from-primary via-accent via-primary-light to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-shift"
        aria-hidden="true"
        style={{
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        {text}
      </span>

      {/* Base layer for solid fallback */}
      <span
        className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark opacity-50"
        style={{
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        {text}
      </span>

      {/* Blur Glow Effect */}
      <span
        className="absolute inset-0 -z-10 block bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent blur-xl opacity-30"
        style={{
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          transform: 'translateZ(0)'
        }}
      >
        {text}
      </span>
    </Component>
  );
};

export default GradientText;
