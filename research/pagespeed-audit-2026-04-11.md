# PageSpeed Insights Audit Report
**Date:** 2026-04-11
**Site:** bestroofingnow.com
**Pages tested:** 5

## Performance Scores Overview

| Page | Mobile | Desktop |
|------|--------|---------|
| Homepage | ERR | ERR |
| Roofing Charlotte NC | ERR | ERR |
| Roof Replacement Charlotte NC | ERR | ERR |
| Roofing Lake Norman NC | ERR | ERR |
| Roof Repair Charlotte NC | ERR | ERR |

## Detailed Metrics

### Homepage
URL: https://www.bestroofingnow.com

| Metric | Mobile | Desktop |
|--------|--------|---------|
| Performance Score | ERR | ERR |
| First Contentful Paint | ERR | ERR |
| Largest Contentful Paint | ERR | ERR |
| Total Blocking Time | ERR | ERR |
| Cumulative Layout Shift | ERR | ERR |
| Speed Index | ERR | ERR |

### Roofing Charlotte NC
URL: https://www.bestroofingnow.com/roofing-charlotte-nc

| Metric | Mobile | Desktop |
|--------|--------|---------|
| Performance Score | ERR | ERR |
| First Contentful Paint | ERR | ERR |
| Largest Contentful Paint | ERR | ERR |
| Total Blocking Time | ERR | ERR |
| Cumulative Layout Shift | ERR | ERR |
| Speed Index | ERR | ERR |

### Roof Replacement Charlotte NC
URL: https://www.bestroofingnow.com/roof-replacement-charlotte-nc

| Metric | Mobile | Desktop |
|--------|--------|---------|
| Performance Score | ERR | ERR |
| First Contentful Paint | ERR | ERR |
| Largest Contentful Paint | ERR | ERR |
| Total Blocking Time | ERR | ERR |
| Cumulative Layout Shift | ERR | ERR |
| Speed Index | ERR | ERR |

### Roofing Lake Norman NC
URL: https://www.bestroofingnow.com/roofing-lake-norman-nc

| Metric | Mobile | Desktop |
|--------|--------|---------|
| Performance Score | ERR | ERR |
| First Contentful Paint | ERR | ERR |
| Largest Contentful Paint | ERR | ERR |
| Total Blocking Time | ERR | ERR |
| Cumulative Layout Shift | ERR | ERR |
| Speed Index | ERR | ERR |

### Roof Repair Charlotte NC
URL: https://www.bestroofingnow.com/roof-repair-charlotte-nc

| Metric | Mobile | Desktop |
|--------|--------|---------|
| Performance Score | ERR | ERR |
| First Contentful Paint | ERR | ERR |
| Largest Contentful Paint | ERR | ERR |
| Total Blocking Time | ERR | ERR |
| Cumulative Layout Shift | ERR | ERR |
| Speed Index | ERR | ERR |

## Critical Issues to Fix

No significant opportunities detected (or all pages errored).

## Quick Wins

These are low-effort changes that typically improve scores across all pages:

1. **Optimize images** -- Use next/image with proper sizing, serve WebP/AVIF, add explicit width/height
2. **Reduce unused JavaScript** -- Code-split with dynamic imports, defer non-critical scripts
3. **Preconnect to required origins** -- Add `<link rel="preconnect">` for third-party domains (Google Fonts, analytics, CMS)
4. **Eliminate render-blocking resources** -- Inline critical CSS, defer non-critical stylesheets
5. **Cache static assets** -- Ensure proper Cache-Control headers on Vercel for static files

## Recommendations (Prioritized by Impact)

### High Impact
- Fix LCP issues: Ensure hero images are preloaded and served at correct size
- Reduce TBT: Move heavy JS execution off the main thread; lazy-load non-critical components
- Minimize CLS: Set explicit dimensions on all images, embeds, and dynamic content

### Medium Impact
- Enable text compression (gzip/brotli) for all text-based assets
- Reduce server response time (TTFB) -- check Vercel edge function cold starts
- Use `next/font` to avoid font-related layout shifts

### Low Impact (Polish)
- Minimize main-thread work by deferring analytics/tracking scripts
- Remove unused CSS with PurgeCSS or Tailwind content configuration
- Add `fetchpriority="high"` to LCP images
