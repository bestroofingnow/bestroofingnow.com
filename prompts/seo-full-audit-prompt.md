# Comprehensive SEO Audit Prompt

Use this prompt to run a full SEO audit using the DataForSEO API.

---

## Prompt

```
Run a comprehensive SEO audit for bestroofingnow.com using the DataForSEO API. Analyze all 8 categories and generate detailed JSON and Markdown reports.

Execute: node scripts/seo-full-audit.js

The audit should analyze:

1. **KEYWORD CANNIBALIZATION**
   - Identify keywords where multiple pages compete for the same term
   - Severity scoring: HIGH (>500 vol), MEDIUM (100-500), LOW (<100)
   - Provide consolidation recommendations

2. **ON-PAGE SEO**
   - Title tag optimization (30-60 chars optimal)
   - Meta description (120-160 chars optimal)
   - H1/H2 heading structure
   - Image alt text coverage
   - Content length by page type (blog: 1500+, service: 800+, location: 600+)
   - Internal link density

3. **TECHNICAL SEO (Core Web Vitals)**
   - LCP (Largest Contentful Paint) - target <2.5s
   - FID (First Input Delay) - target <100ms
   - CLS (Cumulative Layout Shift) - target <0.1
   - Performance, accessibility, SEO scores

4. **SCHEMA MARKUP AUDIT**
   - Check for expected schema types per page:
     - Homepage: LocalBusiness, WebSite, Organization
     - Service pages: Service, FAQPage, BreadcrumbList
     - Location pages: LocalBusiness, Place, BreadcrumbList
     - Blog posts: Article, BreadcrumbList
   - Validate required fields present
   - Flag missing schema opportunities

5. **BACKLINK PROFILE**
   - Total backlinks and referring domains
   - Dofollow vs nofollow ratio
   - Anchor text distribution (branded, exact match, partial, generic, URL)
   - Domain rank and spam score
   - Broken backlinks count

6. **CONTENT GAP ANALYSIS**
   - Find top organic competitors
   - Identify keywords competitors rank for that we don't
   - Find striking distance keywords (positions 11-30)
   - Calculate total opportunity volume
   - SERP feature opportunities (FAQs, featured snippets)

7. **LOCAL SEO SIGNALS**
   - NAP consistency (Name, Address, Phone)
   - Local keyword rankings (charlotte nc, lake norman, huntersville, etc.)
   - LocalBusiness schema validation
   - Directory presence check

8. **SERP PERFORMANCE**
   - Position distribution (top 3, 10, 20, 50, 100)
   - Total keyword count and search volume
   - Visibility score calculation
   - Estimated monthly traffic
   - Top performing pages by keyword volume

## OUTPUT REQUIREMENTS

Generate two reports:

1. **JSON Report** (`scripts/seo-audit-results/seo-audit-YYYY-MM-DD.json`)
   - Complete structured data for all 8 categories
   - Priority-scored action items
   - All raw metrics and findings

2. **Markdown Report** (`scripts/seo-audit-results/seo-audit-YYYY-MM-DD.md`)
   - Executive summary with overall score
   - Quick stats table
   - Top 15 priority action items with affected URLs
   - Detailed analysis for each category
   - Striking distance keyword opportunities table

## PRIORITY SCORING

- CRITICAL: Issues severely impacting rankings (e.g., <5 top 10 keywords)
- HIGH: Issues with significant SEO impact (e.g., missing local rankings, cannibalization >500 vol)
- MEDIUM: On-page issues, missing schemas, thin content
- LOW: Minor optimizations

After the audit completes, provide a summary of:
- Overall score out of 100
- Total issues by priority level
- Top 5 actionable recommendations
- Quick wins (striking distance keywords to target)
```

---

## Quick Run Command

```bash
node scripts/seo-full-audit.js
```

---

## DataForSEO API Endpoints Used

| Analysis | Endpoint |
|----------|----------|
| Rankings | `/v3/dataforseo_labs/google/ranked_keywords/live` |
| Competitors | `/v3/dataforseo_labs/google/competitors_domain/live` |
| Content Gap | `/v3/dataforseo_labs/google/domain_intersection/live` |
| Backlinks Summary | `/v3/backlinks/summary/live` |
| Anchor Text | `/v3/backlinks/anchors/live` |
| Technical/Lighthouse | `/v3/on_page/lighthouse/live` |

---

## Expected Cost

~$1-2 per full audit (approximately 20-30 API calls)

---

## Sample Output

```
======================================================================
AUDIT COMPLETE
======================================================================
Overall Score: 59/100
Total Issues Found: 18
  Critical: 1
  High: 1
  Medium: 16
  Low: 0

Reports saved to:
  scripts/seo-audit-results/seo-audit-2026-02-14.json
  scripts/seo-audit-results/seo-audit-2026-02-14.md
```
