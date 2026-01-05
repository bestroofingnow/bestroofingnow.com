'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name?: string;
  label?: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`py-3 ${className}`}
    >
      <ol className="flex items-center flex-wrap gap-1 text-sm">
        <li className="flex items-center">
          <Link
            href="/"
            className="text-gray-500 hover:text-primary transition-colors flex items-center gap-1"
            aria-label="Home"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const displayName = item.name || item.label || '';
          return (
            <li key={item.href || displayName} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400 mx-1" aria-hidden="true" />
              {isLast || !item.href ? (
                <span
                  className="text-dark font-medium"
                  aria-current={isLast ? 'page' : undefined}
                >
                  {displayName}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-500 hover:text-primary transition-colors"
                >
                  {displayName}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
