'use client';

import { useEffect } from 'react';
import { rateMetric, type MetricName, type Rating } from '@/lib/performance/web-vitals-thresholds';

interface Metric {
  name: MetricName;
  value: number;
  googleRating: Rating;
  internalRating: Rating;
  delta: number;
  id: string;
}

function reportMetric(metric: Metric) {
  if (process.env.NODE_ENV === 'development') {
    const emoji = metric.googleRating === 'good' ? '✅' : metric.googleRating === 'needs-improvement' ? '⚠️' : '❌';
    const internalEmoji = metric.internalRating === 'good' ? '🏆' : metric.internalRating === 'needs-improvement' ? '🔍' : '🚧';
    // eslint-disable-next-line no-console
    console.log(
      `${emoji} ${metric.name}`,
      `| Value: ${metric.value.toFixed(metric.name === 'CLS' ? 3 : 0)}`,
      `| Google: ${metric.googleRating}`,
      `| Internal: ${internalEmoji} ${metric.internalRating}`
    );
  }

  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.delta * 1000 : metric.delta),
      event_category: 'Web Vitals',
      event_label: metric.id,
      google_rating: metric.googleRating,
      internal_rating: metric.internalRating,
      non_interaction: true,
    });
  }
}

export function WebVitals() {
  useEffect(() => {
    import('web-vitals').then(({ onCLS, onFCP, onINP, onLCP, onTTFB }) => {
      const handleMetric = (metric: { name: MetricName; value: number; delta: number; id: string }) => {
        reportMetric({
          name: metric.name,
          value: metric.value,
          googleRating: rateMetric(metric.name, metric.value, 'google'),
          internalRating: rateMetric(metric.name, metric.value, 'internal'),
          delta: metric.delta,
          id: metric.id,
        });
      };

      onCLS(handleMetric);
      onFCP(handleMetric);
      onINP(handleMetric);
      onLCP(handleMetric);
      onTTFB(handleMetric);
    }).catch(() => {
      // web-vitals not installed, skip silently
    });
  }, []);

  return null;
}
