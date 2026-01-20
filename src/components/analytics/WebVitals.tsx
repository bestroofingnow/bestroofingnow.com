'use client';

import { useEffect } from 'react';

// Web Vitals types (FID replaced by INP in web-vitals v4+)
type MetricName = 'CLS' | 'FCP' | 'INP' | 'LCP' | 'TTFB';

interface Metric {
  name: MetricName;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

// Thresholds for Core Web Vitals (2024 standards)
const thresholds: Record<MetricName, { good: number; poor: number }> = {
  CLS: { good: 0.1, poor: 0.25 },      // Cumulative Layout Shift
  FCP: { good: 1800, poor: 3000 },     // First Contentful Paint (ms)
  INP: { good: 200, poor: 500 },       // Interaction to Next Paint (ms)
  LCP: { good: 2500, poor: 4000 },     // Largest Contentful Paint (ms)
  TTFB: { good: 800, poor: 1800 },     // Time to First Byte (ms)
};

function getRating(name: MetricName, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = thresholds[name];
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

// Report metrics to console in development, analytics in production
function reportMetric(metric: Metric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    const emoji = metric.rating === 'good' ? '✅' : metric.rating === 'needs-improvement' ? '⚠️' : '❌';
    console.log(
      `${emoji} Web Vital: ${metric.name}`,
      `| Value: ${metric.value.toFixed(metric.name === 'CLS' ? 3 : 0)}`,
      `| Rating: ${metric.rating}`
    );
  }

  // Send to analytics in production (Google Analytics 4, etc.)
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.delta * 1000 : metric.delta),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }
}

export function WebVitals() {
  useEffect(() => {
    // Dynamically import web-vitals to avoid blocking initial render
    // Note: FID was replaced by INP in web-vitals v4+
    import('web-vitals').then(({ onCLS, onFCP, onINP, onLCP, onTTFB }) => {
      const handleMetric = (metric: any) => {
        const webVitalMetric: Metric = {
          name: metric.name,
          value: metric.value,
          rating: getRating(metric.name, metric.value),
          delta: metric.delta,
          id: metric.id,
        };
        reportMetric(webVitalMetric);
      };

      onCLS(handleMetric);
      onFCP(handleMetric);
      onINP(handleMetric); // INP replaced FID as Core Web Vital
      onLCP(handleMetric);
      onTTFB(handleMetric);
    }).catch(() => {
      // web-vitals not installed, skip silently
    });
  }, []);

  return null;
}
