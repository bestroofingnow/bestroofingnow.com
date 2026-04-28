# SEO + GBP Execution Log

Date: 2026-04-28
Source plan: `reports/seo-gbp-improvement-plan-2026-04-28.md`

## Completed In Code

- Added stable sitemap timestamp helper: `src/lib/sitemap.ts`.
- Replaced dynamic `new Date().toISOString()` sitemap `lastmod` values across:
  - `src/app/sitemap.xml/route.ts`
  - `src/app/sitemaps/blog/route.ts`
  - `src/app/sitemaps/core/route.ts`
  - `src/app/sitemaps/faq/route.ts`
  - `src/app/sitemaps/lake-norman/route.ts`
  - `src/app/sitemaps/locations/route.ts`
  - `src/app/sitemaps/materials/route.ts`
  - `src/app/sitemaps/products/route.ts`
  - `src/app/sitemaps/projects/route.ts`
  - `src/app/sitemaps/resources/route.ts`
  - `src/app/sitemaps/services/route.ts`
  - `src/app/sitemaps/stories/route.ts`
- Added priority internal-link blocks to the four Charlotte organic targets:
  - `/roofing-charlotte-nc`
  - `/roofing-company-charlotte-nc`
  - `/roof-repair-charlotte-nc`
  - `/roof-replacement-charlotte-nc`
- Cleaned unused imports introduced or exposed on the touched Charlotte pages.

## Completed As GBP Execution Artifact

- Added `reports/gbp-execution-checklist-2026-04-28.md` with:
  - GBP core field values
  - Website UTM URL
  - Appointment URL
  - Secondary categories
  - Services, landing pages, and price guidance
  - 12-week GBP post calendar
  - Photo upload cadence
  - Review request and response templates

## Verification

- `npx tsc --noEmit` passed.
- Targeted ESLint on touched files passed with 0 errors and 0 warnings.
- `npm run build` passed.
- Search confirmed no remaining `new Date().toISOString()` sitemap timestamps under `src/app/sitemap.xml` or `src/app/sitemaps`.

## Known Limits

- Full `npm run lint` still fails because the repo has hundreds of pre-existing lint issues in scripts and unrelated app files.
- GBP profile changes require Google Business Profile admin access and must be applied manually from the checklist.
- The production build still logs an existing Next.js `middleware` deprecation warning and YouTube channel lookup warning.

