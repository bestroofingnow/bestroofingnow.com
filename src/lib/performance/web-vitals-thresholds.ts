// Phase 4 of brn-gold-standard: split CWV thresholds.
//
// Google's official thresholds are the COMPLIANCE bar — these are what Google reports
// in CrUX and Search Console. Internal targets are stricter and define the engineering
// goal for a "gold-standard" home-service site (per §3 of the strategic blueprint).

export type MetricName = 'CLS' | 'FCP' | 'INP' | 'LCP' | 'TTFB';
export type Rating = 'good' | 'needs-improvement' | 'poor';

interface ThresholdSet {
  good: number;
  poor: number;
}

// Google's official thresholds (https://web.dev/articles/vitals).
// FCP and TTFB are not Core Web Vitals but are reported alongside.
export const GOOGLE_THRESHOLDS: Record<MetricName, ThresholdSet> = {
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  INP: { good: 200, poor: 500 },
  LCP: { good: 2500, poor: 4000 },
  TTFB: { good: 800, poor: 1800 },
};

// Stricter internal targets — used to flag pages that meet Google's bar but fall short
// of the gold-standard. Surface these as `internalRating: 'review'` in analytics.
export const INTERNAL_TARGETS: Record<MetricName, ThresholdSet> = {
  CLS: { good: 0.05, poor: 0.1 },
  FCP: { good: 1200, poor: 1800 },
  INP: { good: 150, poor: 200 },
  LCP: { good: 2000, poor: 2500 },
  TTFB: { good: 600, poor: 800 },
};

export function rateMetric(
  name: MetricName,
  value: number,
  bar: 'google' | 'internal',
): Rating {
  const t = bar === 'google' ? GOOGLE_THRESHOLDS[name] : INTERNAL_TARGETS[name];
  if (value <= t.good) return 'good';
  if (value <= t.poor) return 'needs-improvement';
  return 'poor';
}
