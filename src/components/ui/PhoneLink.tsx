'use client';

import { ReactNode, MouseEvent } from 'react';
import { SITE_CONFIG } from '@/lib/constants';
import { trackPhoneClick } from '@/lib/utils';

interface PhoneLinkProps {
  children: ReactNode;
  className?: string;
  location?: string;
  showPhone?: boolean;
  ariaLabel?: string;
}

export function PhoneLink({
  children,
  className = '',
  location = 'unknown',
  ariaLabel,
}: PhoneLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    trackPhoneClick(location);
  };

  return (
    <a
      href={`tel:${SITE_CONFIG.phoneClean}`}
      className={className}
      onClick={handleClick}
      aria-label={ariaLabel || `Call ${SITE_CONFIG.name} at ${SITE_CONFIG.phone}`}
    >
      {children}
    </a>
  );
}

// Simple phone display with tracking
export function PhoneNumber({
  className = '',
  location = 'unknown',
}: {
  className?: string;
  location?: string;
}) {
  return (
    <PhoneLink className={className} location={location}>
      {SITE_CONFIG.phone}
    </PhoneLink>
  );
}
