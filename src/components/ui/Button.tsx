'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-white hover:bg-accent-dark',
  secondary: 'bg-primary text-white hover:bg-primary-dark',
  outline: 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white',
  ghost: 'bg-transparent text-primary hover:bg-light',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      href,
      external,
      loading,
      icon,
      iconPosition = 'left',
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
      'hover:-translate-y-0.5 hover:shadow-lg',
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {loading && (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && icon && iconPosition === 'left' && icon}
        {children}
        {!loading && icon && iconPosition === 'right' && icon}
      </>
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            className={baseStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={baseStyles}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={baseStyles}
        disabled={disabled || loading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, type ButtonProps };
