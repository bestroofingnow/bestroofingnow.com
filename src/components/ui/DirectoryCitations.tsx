'use client';

import { ExternalLink } from 'lucide-react';
import { getDirectoryLinksForPage } from '@/lib/directory-links';

interface DirectoryCitationsProps {
  pageType: string;
  locationSlug?: string;
  maxLinks?: number;
  variant?: 'inline' | 'footer' | 'sidebar';
  title?: string;
  className?: string;
}

export function DirectoryCitations({
  pageType,
  locationSlug,
  maxLinks = 3,
  variant = 'inline',
  title = 'Find Us On',
  className = '',
}: DirectoryCitationsProps) {
  const links = getDirectoryLinksForPage(pageType, locationSlug, maxLinks);

  if (links.length === 0) return null;

  if (variant === 'inline') {
    return (
      <div className={`flex flex-wrap items-center gap-2 text-sm ${className}`}>
        <span className="text-gray-500 font-medium">{title}:</span>
        {links.map((link, index) => (
          <span key={link.url} className="inline-flex items-center">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors inline-flex items-center gap-1"
              aria-label={`Visit our ${link.name} profile`}
            >
              {link.name}
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            {index < links.length - 1 && (
              <span className="ml-2 text-gray-300" aria-hidden="true">|</span>
            )}
          </span>
        ))}
      </div>
    );
  }

  if (variant === 'sidebar') {
    return (
      <div className={`bg-light rounded-xl p-6 ${className}`}>
        <h3 className="font-semibold text-dark mb-4">{title}</h3>
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                aria-label={`Visit our ${link.name} profile`}
              >
                <ExternalLink className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Footer variant
  return (
    <div className={`${className}`}>
      <h4 className="font-semibold text-white mb-3">{title}</h4>
      <div className="flex flex-wrap gap-3">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
            aria-label={`Visit our ${link.name} profile`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}

// Trust badges component for showing certifications and reviews
export function TrustBadges({ className = '' }: { className?: string }) {
  const reviewLinks = getDirectoryLinksForPage('reviews', undefined, 4);
  const certLinks = getDirectoryLinksForPage('about', undefined, 2);

  const allLinks = [...reviewLinks, ...certLinks].slice(0, 5);

  return (
    <div className={`flex flex-wrap items-center justify-center gap-4 ${className}`}>
      {allLinks.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-primary hover:text-accent"
          aria-label={`View our ${link.name} profile`}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}
