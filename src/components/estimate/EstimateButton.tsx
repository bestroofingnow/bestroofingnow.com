'use client';

import { useEstimate } from './EstimateProvider';
import { Calculator } from 'lucide-react';
import { ReactNode } from 'react';

interface EstimateButtonProps {
  children?: ReactNode;
  className?: string;
  variant?: 'primary' | 'accent' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

export default function EstimateButton({
  children,
  className = '',
  variant = 'accent',
  size = 'md',
  showIcon = true,
}: EstimateButtonProps) {
  const { openEstimateModal } = useEstimate();

  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-colors';

  const variantStyles = {
    primary: 'bg-primary hover:bg-primary-dark text-white',
    accent: 'bg-accent hover:bg-accent-dark text-white',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    white: 'bg-white hover:bg-gray-100 text-primary',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      onClick={openEstimateModal}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {showIcon && <Calculator className="w-5 h-5" aria-hidden="true" />}
      {children || 'Get Free Instant Estimate'}
    </button>
  );
}
