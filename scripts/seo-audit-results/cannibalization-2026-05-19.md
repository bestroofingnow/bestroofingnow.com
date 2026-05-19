# Cannibalization Audit — 2026-05-19

**Scope:** Every `src/app/**/page.tsx` (excluding dynamic `[slug]` routes).
**Pages scanned:** 515
**Pages with title extracted:** 496
**Pages with H1 extracted:** 514
**Pages with canonical extracted:** 383

## 🚨 Exact-duplicate canonicals
Worst-case — multiple pages pointing to the same canonical URL.

_None_ — every page has a unique canonical.

## 🚨 Exact-duplicate titles

_None_ — every page has a unique title.

## ⚠️  Near-duplicate titles (same after normalization)
Titles that match after stripping " | Best Roofing Now", " | Charlotte NC", and punctuation.

_None_.

## ⚠️  Exact-duplicate H1s

_None_ — every page has a unique H1.

## 📊 Cluster overlap (pages sharing core phrase after city/year strip)
Clusters of 3+ pages targeting the same core phrase. Some of these are intentional
(geographic variants), others may be cannibalizing.

### "commercial roofing" — 14 pages
- `/commercial-roofing-concord-nc` — title: Commercial Roofing Concord NC
- `/commercial-roofing-cornelius-nc` — title: Commercial Roofing Cornelius NC
- `/commercial-roofing-davidson-nc` — title: Commercial Roofing Davidson NC
- `/commercial-roofing-denver-nc` — title: Commercial Roofing Denver NC
- `/commercial-roofing-fort-mill-sc` — title: Commercial Roofing Fort Mill SC
- `/commercial-roofing-gastonia-nc` — title: Commercial Roofing Gastonia NC
- `/commercial-roofing-huntersville-nc` — title: Commercial Roofing Huntersville
- `/commercial-roofing-lake-norman-nc` — title: Commercial Roofing Lake Norman NC
- `/commercial-roofing-matthews-nc` — title: Commercial Roofing Matthews NC
- `/commercial-roofing-mooresville-nc` — title: Commercial Roofing Mooresville NC
- `/commercial-roofing-mt-holly-nc` — title: Commercial Roofing Mt Holly NC
- `/commercial-roofing-rock-hill-sc` — title: Commercial Roofing Rock Hill SC
- … and 2 more

### "gutter installation" — 10 pages
- `/gutter-installation-charlotte-nc` — title: Gutter Installation Charlotte NC
- `/gutter-installation-cornelius-nc` — title: Gutter Installation Cornelius NC
- `/gutter-installation-davidson-nc` — title: Gutter Installation Davidson NC
- `/gutter-installation-denver-nc` — title: Gutter Installation Denver NC
- `/gutter-installation-lake-norman-nc` — title: Gutter Installation Lake Norman NC
- `/gutter-installation-lake-wylie-sc` — title: Gutter Installation Lake Wylie SC
- `/gutter-installation-matthews-nc` — title: Gutter Installation Matthews NC
- `/gutter-installation-mt-holly-nc` — title: Gutter Installation Mt Holly NC
- `/gutter-installation-sherrills-ford-nc` — title: Gutter Installation Sherrills Ford
- `/gutter-installation-statesville-nc` — title: Gutter Installation Statesville NC

### "roof replacement" — 10 pages
- `/roof-replacement-charlotte-nc` — title: Roof Replacement Charlotte NC | 2026
- `/roof-replacement-concord-nc` — title: Roof Replacement Concord NC
- `/roof-replacement-davidson-nc` — title: Roof Replacement Davidson NC
- `/roof-replacement-fort-mill-sc` — title: Roof Replacement Fort Mill SC
- `/roof-replacement-gastonia-nc` — title: Roof Replacement Gastonia NC
- `/roof-replacement-huntersville-nc` — title: Roof Replacement Huntersville NC | Lake Norman
- `/roof-replacement-lake-norman-nc` — title: Roof Replacement Lake Norman NC
- `/roof-replacement-mooresville-nc` — title: Roof Replacement Mooresville NC
- `/roof-replacement-sherrills-ford-nc` — title: Roof Replacement Sherrills Ford
- `/roof-replacement-statesville-nc` — title: Roof Replacement Statesville NC

### "emergency roof repair" — 7 pages
- `/emergency-roof-repair-cornelius-nc` — title: Emergency Roof Repair Cornelius NC
- `/emergency-roof-repair-davidson-nc` — title: Emergency Roof Repair Davidson NC
- `/emergency-roof-repair-denver-nc` — title: Emergency Roof Repair Denver NC
- `/emergency-roof-repair-huntersville-nc` — title: Emergency Roof Repair Huntersville
- `/emergency-roof-repair-mooresville-nc` — title: Emergency Roof Repair Mooresville NC
- `/emergency-roof-repair-sherrills-ford-nc` — title: Emergency Roof Repair Sherrills Ford
- `/emergency-roof-repair-statesville-nc` — title: Emergency Roof Repair Statesville NC

### "metal roofing" — 7 pages
- `/metal-roofing-cornelius-nc` — title: Metal Roofing Cornelius NC | Lake Norman
- `/metal-roofing-davidson-nc` — title: Metal Roofing Davidson NC | Lake Norman
- `/metal-roofing-denver-nc` — title: Metal Roofing Denver NC
- `/metal-roofing-huntersville-nc` — title: Metal Roofing Huntersville NC
- `/metal-roofing-mooresville-nc` — title: Metal Roofing Mooresville NC
- `/metal-roofing-sherrills-ford-nc` — title: Metal Roofing Sherrills Ford NC
- `/metal-roofing-statesville-nc` — title: Metal Roofing Statesville NC

### "roof inspection free" — 6 pages
- `/roof-inspection-charlotte-nc` — title: Roof Inspection Charlotte NC | Free
- `/roof-inspection-cornelius-nc` — title: Roof Inspection Cornelius NC | Free
- `/roof-inspection-davidson-nc` — title: Roof Inspection Davidson NC | Free
- `/roof-inspection-denver-nc` — title: Roof Inspection Denver NC | Free
- `/roof-inspection-huntersville-nc` — title: Roof Inspection Huntersville NC | Free
- `/roof-inspection-matthews-nc` — title: Roof Inspection Matthews NC | Free

### "storm damage roof repair" — 6 pages
- `/storm-damage-roof-repair-charlotte-nc` — title: Storm Damage Roof Repair Charlotte NC
- `/storm-damage-roof-repair-davidson-nc` — title: Storm Damage Roof Repair Davidson NC
- `/storm-damage-roof-repair-matthews-nc` — title: Storm Damage Roof Repair Matthews NC
- `/storm-damage-roof-repair-mt-holly-nc` — title: Storm Damage Roof Repair Mt Holly NC
- `/storm-damage-roof-repair-sherrills-ford-nc` — title: Storm Damage Roof Repair Sherrills Ford
- `/storm-damage-roof-repair-statesville-nc` — title: Storm Damage Roof Repair Statesville

### "roof repair" — 5 pages
- `/roof-repair-cornelius-nc` — title: Roof Repair Cornelius NC
- `/roof-repair-fort-mill-sc` — title: Roof Repair Fort Mill SC
- `/roof-repair-huntersville-nc` — title: Roof Repair Huntersville NC
- `/roof-repair-sherrills-ford-nc` — title: Roof Repair Sherrills Ford NC
- `/roof-repair-statesville-nc` — title: Roof Repair Statesville NC

### "roofing top rated" — 5 pages
- `/roofing-concord-nc` — title: Roofing Concord NC | Top Rated
- `/roofing-davidson-nc` — title: Roofing Davidson NC | Top Rated
- `/roofing-fort-mill-sc` — title: Roofing Fort Mill SC | Top Rated
- `/roofing-gastonia-nc` — title: Roofing Gastonia NC | Top Rated
- `/roofing-matthews-nc` — title: Roofing Matthews NC | Top Rated

### "roofing 5 star" — 4 pages
- `/roofing-cornelius-nc` — title: Roofing Cornelius NC | 5-Star
- `/roofing-huntersville-nc` — title: Roofing Huntersville NC | 5-Star
- `/roofing-mooresville-nc` — title: Roofing Mooresville NC | 5-Star
- `/roofing-rock-hill-sc` — title: Roofing Rock Hill SC | 5-Star

### "roof replacement free estimates" — 3 pages
- `/roof-replacement-cornelius-nc` — title: Roof Replacement Cornelius NC | Lake Norman | Free Estimates
- `/roof-replacement-denver-nc` — title: Roof Replacement Denver NC | Lake Norman | Free Estimates
- `/roof-replacement-lake-wylie-sc` — title: Roof Replacement Lake Wylie SC | Free Estimates

### "roofers 5 star rated" — 3 pages
- `/roofers-concord-nc` — title: Roofers Concord NC | 5-Star Rated
- `/roofers-huntersville-nc` — title: Roofers Huntersville NC | 5-Star Rated
- `/roofers-mooresville-nc` — title: Roofers Mooresville NC | 5-Star Rated

### "roofers 5 star" — 3 pages
- `/roofers-cornelius-nc` — title: Roofers Cornelius NC | 5-Star
- `/roofers-davidson-nc` — title: Roofers Davidson NC | 5-Star
- `/roofers-denver-nc` — title: Roofers Denver NC | 5-Star

## 🔧 Pages missing metadata export

- `/contact`
- `/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/blogs/new`
- `/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/blogs`
- `/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/cta-banners`
- `/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/knowledge-base/new`
- `/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/knowledge-base`
- `/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK`
- `/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/projects/new`
- `/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/projects`
- `/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/seo-tools/aeo`
- `/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/seo-tools/audits`
- `/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/seo-tools/authority-map`
- `/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/seo-tools/briefs`
- `/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/seo-tools/keywords`
- `/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/seo-tools/optimizer`
- `/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/seo-tools`
- `/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/seo-tools/reports`
- `/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/seo-tools/scans`
- `/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/seo-tools/serp`