# SEO Action Items — Outside the Codebase

**For:** James, owner — bestroofingnow.com
**Generated:** 2026-05-17
**Context:** Companion document to `research/deep-dive-2026-05-17.md`. Everything in this file lives **outside this repo** — Google Search Console, Google Business Profile, manufacturer portals, third-party citations, journalism placements, etc.

The codebase has done its job for now. Today (5/17) shipped: 4XX cleanup, schema-validation fix, broken-backlink redirects, mass title/description trim, SpeakableContentBlocks on 226 pages, and orphan-page repair. Audit metrics:

| Metric | Before this week | After |
|---|---|---|
| Duplicate canonicals/titles/H1s | 3+7 | 0 |
| Descriptions > 160 chars | 369 | 16 |
| Titles > 60 chars | 102 | 46 |
| Missing speakable schema | 230 | 4 |
| Schema validation errors (pages) | ~1,490 | _expected ~0 after re-crawl_ |
| 4XX errors (pages) | ~563 | _expected ~0 after re-crawl_ |

**The next ranking lift comes from work that doesn't live in code.** That's what this document is for.

---

## Priority order — what to do first

Each item has a **why**, **what**, **how long**, and **how to verify**. Do them in this order. The first three are time-sensitive; the rest can run in parallel over the next 60-90 days.

| # | Item | Time | Cost | When |
|---|---|---|---|---|
| **1** | Submit disavow file | 15 min | $0 | **Today** |
| **2** | Google Business Profile audit + optimization | 2-4 hrs | $0 | This week |
| **3** | ProjectMapIt + partner link outreach | 1 hr | $0 | This week |
| **4** | Manufacturer installer directories (GAF, OC, Atlas, Malarkey) | 2 hrs total | $0 | Within 2 weeks |
| **5** | BBB dofollow + local chamber memberships | 1 hr + dues | $200-$800/yr | Within 30 days |
| **6** | HARO journalism submissions (ongoing) | 30 min/wk | $0 | Start week 1 |
| **7** | Local supply house preferred-contractor listings | 1 hr | $0 | Within 30 days |
| **8** | IndexNow + GSC URL submission for new pages | 30 min | $0 | Within 14 days |
| **9** | NAP consistency audit across citations | 2-3 hrs | $0 | Within 30 days |

---

## 1. Submit the disavow file to Google Search Console

### Why this is #1

Ahrefs Site Explorer (5/17) identified a **fake-testimonial backlink scheme** pointing to bestroofingnow.com from 32 referring domains. The anchor text on each is the same fake review naming "SEOExpress.org" as the SEO provider. Plus 8 other domains Ahrefs flagged as spam are linking with cloaked/Telegram-channel anchors.

**The risk:** Google's algorithm may already be discounting your entire link profile because of this artificial-link pattern. Until you disavow, every legitimate link you earn (manufacturer directories, BBB, chamber, journalism) gets blended into the discounted pile.

A disavow file tells Google "don't count any links from these domains as votes for my site." It's a one-time submission, processed over 4-12 weeks.

### What to do

1. Open the file `research/disavow-2026-05-17.txt` from this repo. (Already generated. Contains the 9 spam domains plus comments explaining each.)

2. Open Google Search Console: https://search.google.com/search-console/disavow-links

3. From the property dropdown at the top, select **`bestroofingnow.com`** (or `www.bestroofingnow.com` — whichever has the verified ownership).

4. If a previous disavow file exists, Google shows it under "Active disavow file." Click **Replace** (not Add) — you want this version to be the authoritative one.

5. Click **Upload** and select the `research/disavow-2026-05-17.txt` file.

6. Confirm the upload. Google shows "Active" status within 1-2 minutes.

7. **Important:** disavow is reversible. If you ever earn a legitimate link from one of these domains in the future, you can edit the file and remove that domain. But that's rare — these are all flagged-spam sites.

### How long

~15 minutes including the GSC walkthrough.

### How to verify success

- **Day 1:** "Active" status appears in GSC disavow tool
- **Day 30:** Re-run Ahrefs site-explorer-anchors. The "SEOExpress.org +400% organic visits" fake-testimonial anchor count should start declining as Google reprocesses link signals
- **Day 60-90:** Anchor count significantly reduced; legitimate links earned during this window start counting full-weight

---

## 2. Google Business Profile (GBP) optimization

### Why this is the single biggest revenue lever

The CTR-by-position data from GSC is unambiguous:

| Position | Industry baseline CTR | Your CTR | Keywords at that pos |
|---|---|---|---|
| 1 | ~25-30% | **0.35%** | 366 |
| 2 | ~15-20% | 0.97% | 53 |
| 3 | ~10-15% | 0.32% | 44 |

You rank #1 on 366 keywords and get 0.35% CTR. The clicks aren't lost — they're going to your GBP listing in the local pack (the 3-pack map), AI Overview, or competitors' GBP listings. None of that traffic shows up in GSC because it's not organic-search click traffic.

**This is the on-page CTR ceiling.** No matter what we do in the codebase, those clicks won't come back to the organic listing — Google fills the SERP with the local pack and AI Overview for these queries. The clicks have to be captured at the GBP listing.

The good news: GBP is a higher-converting click destination than organic anyway. People who click a GBP card see your rating, photos, reviews, and call/directions buttons before they ever visit the website. They convert better.

### What to do — the GBP optimization checklist

Open your GBP at: https://business.google.com (sign in as the account that owns the listing).

#### 2.1 Profile completeness (15 min)

- [ ] **Business name:** "Best Roofing Now" exactly — no keywords stuffed in (GBP keyword-stuffing is a verifiable suspension trigger)
- [ ] **Primary category:** "Roofing contractor"
- [ ] **Additional categories** (you can have up to 9): Add all that apply
  - Commercial roofing contractor
  - Roofing supply store (if you sell)
  - Storm damage restoration service
  - General contractor (if it fits)
- [ ] **Description:** 750 characters max. Use the full allowance. Lead with "veteran-owned, family-operated," include your service area cities, mention manufacturer certs (GAF Master Elite, CertainTeed SELECT, Owens Corning Platinum), and the storm/insurance specialty.
- [ ] **Hours:** Set 24/7 emergency hours via "Special hours" (Google supports separate "regular" and "emergency" hours)
- [ ] **Phone:** (704) 605-6047 — must match what's on the website **exactly** (NAP consistency, see #9)
- [ ] **Website link:** Use a UTM-tagged URL so GA4 can measure GBP clicks separately: `https://www.bestroofingnow.com/?utm_source=gbp&utm_medium=organic&utm_campaign=gbp_profile`
- [ ] **Appointment link:** Add a separate URL pointing to your contact / instant-estimate page

#### 2.2 Service area (10 min)

Add every city you serve as a separate **Service area**:
- Charlotte, Huntersville, Cornelius, Davidson, Matthews, Mint Hill, Pineville (Mecklenburg)
- Concord, Kannapolis, Harrisburg (Cabarrus)
- Monroe, Indian Trail, Waxhaw, Stallings, Weddington, Marvin, Wesley Chapel (Union)
- Gastonia, Mt Holly, Belmont (Gaston)
- Kings Mountain, Shelby (Cleveland)
- Mooresville, Statesville, Troutman (Iredell)
- Denver, Lincolnton (Lincoln)
- Sherrills Ford, Terrell (Catawba)
- Hickory, Newton (Catawba)
- Rock Hill, Fort Mill, Tega Cay, Lake Wylie, Lancaster, Clover, York (SC)
- Lake Norman (umbrella)

GBP supports up to ~20 service areas — pick the highest-value first.

#### 2.3 Photos (30-60 min)

- [ ] **Minimum 50 photos**, ideally 100+
- [ ] **Categories required:** Logo (1), Cover (1), Exterior (≥3), Interior (≥3 office/showroom), Team (≥5), At Work (≥10 before/after roof shots), Identity (Owner photo, BBB plaque, manufacturer cert plaques)
- [ ] **Upload weekly:** Google rewards profiles that get fresh photos. Even 1-2 per week beats a one-time mega-upload
- [ ] **Geo-tag the photos** where possible (your phone's photo metadata includes GPS — keep it). Google reads EXIF data and surfaces photos in location-relevant searches
- [ ] **Caption with city + service** in the description when uploading: "Standing-seam metal roof replacement in Dilworth, Charlotte NC"

#### 2.4 Reviews (ongoing)

- [ ] **Current review count:** Note today's count and rating. Set a baseline.
- [ ] **Target:** +5-10 new reviews per month
- [ ] **Response policy:** Respond to **every review** (5-star and 1-star) within 24 hours. Google ranks profiles that engage with reviews higher.
- [ ] **Ask script:** After every job completion, send a follow-up email/SMS with the direct review link: https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID (replace with your actual Place ID — find it via https://developers.google.com/maps/documentation/places/web-service/place-id)
- [ ] **NEVER pay for reviews or use review-buying services** — Google detects these and suspends the listing

#### 2.5 Posts (weekly)

GBP Posts appear in your knowledge panel and show in search. Use them weekly:

- [ ] **What's New posts:** Recent jobs, before/after photos, manufacturer announcements
- [ ] **Offer posts:** Time-limited offers ("Free inspection — May only", "Insurance claim assistance, no out-of-pocket cost")
- [ ] **Event posts:** Storm season prep events, free inspection days, manufacturer training events
- [ ] **Product posts:** Featured shingle lines (GAF Timberline HDZ, CertainTeed Landmark, etc.) — one per month

#### 2.6 Q&A (monthly)

- [ ] Audit existing Q&A on your profile. Answer all unanswered questions personally.
- [ ] Seed your own Q&A: ask 10-15 common questions from your own account (logged in as Best Roofing Now), then answer them yourself. Sample seeds:
  - "Do you offer emergency roof repair?"
  - "What manufacturer certifications do you hold?"
  - "Do you handle insurance claims?"
  - "Are you veteran-owned?"
  - "What financing options do you offer?"

#### 2.7 Services (one-time setup, then maintain)

- [ ] Add a **separate Service item** for each major service:
  - Roof Replacement
  - Roof Repair
  - Storm Damage Repair
  - Emergency Roof Repair
  - Metal Roofing
  - Commercial Roofing
  - Gutter Installation
  - Insurance Claim Assistance
- [ ] Each service: write a 100-300 character description, set a price range, link to the matching page on bestroofingnow.com

### How long

2-4 hours for initial setup + 30-60 min/week ongoing.

### How to verify success

- **Day 7:** GBP Insights dashboard shows more profile views, calls, direction requests
- **Day 30:** Add a GA4 secondary dimension `utm_source = gbp` to your reports. Direct GBP-attributed sessions should appear and grow.
- **Day 60:** Local pack rankings for "roofer near me" / "roofing company charlotte nc" should improve. Track with a tool like Local Falcon (https://www.localfalcon.com) — you can run a 7×7 grid scan to see your rank in each square mile around your service area.

### Most impactful single tip

If you only do ONE thing on this list: **respond to every single review within 24 hours.** Google's local-pack algorithm heavily favors profiles with high engagement. A 4.8 rating with 200 reviews all responded-to beats a 5.0 rating with 50 unanswered reviews.

---

## 3. ProjectMapIt + partner link reclamation outreach

### Why

ProjectMapIt (DR 50) is a partner that listed Best Roofing Now at `/best-roofing-now-llc`. Their listing has 7 backlinks to URLs that no longer exist on your site. I've added permanent 301 redirects in the codebase that catch each of these — so the links work now — but the cleanest fix is to get ProjectMapIt to update their links to point directly to the live pages, avoiding the 301 hop.

The same applies to ApexRoof (DR 29), FalconRoofing (DR 28), LKN Connect (DR 25), and VeraRoofing (DR 14) — all of which link to legacy URLs.

### What to do

Send a polite email to each partner asking for the link update. Template below.

#### 3.1 ProjectMapIt outreach (highest priority — DR 50)

Find their contact form or your account rep at: https://projectmapit.com/contact

Email template:

```
Subject: Best Roofing Now profile — quick URL update request

Hi [Name],

We've updated our website structure on bestroofingnow.com and a few of the URLs
in our /best-roofing-now-llc profile no longer point to current pages. They're
redirecting correctly via 301, but I'd appreciate updating them at the source
to save your readers a hop:

OLD → NEW
/residential-roof-maintenance        → /roof-maintenance-charlotte-nc
/commercial-gutter-replacement       → /gutter-installation-charlotte-nc
/new-roof-installation               → /new-roof-installation-charlotte-nc
/instant-estimator                   → /contact
/residential-roof-inspection         → /roof-inspection-charlotte-nc
/residential-roof-installation       → /services/residential-roofing
/insurance-claims                    → /insurance-claim-roofing-charlotte-nc

If it's easier to just refresh from our current sitemap, here's the URL:
https://www.bestroofingnow.com/sitemap.xml

Appreciate it!

— James, Best Roofing Now
(704) 605-6047
```

#### 3.2 Other partners (smaller impact, batch them)

Send a shorter version of the same message to:
- ApexRoof (Jenks OK page): mentions us via `Best Roofing Now` link → `/residential-emergency-roofing-assistance`. New target: `/emergency-roof-repair-charlotte-nc`
- FalconRoofing (services/residential/metal-roofing): old `/metal-roofing` → new `/metal-roofing-charlotte-nc`
- LKN Connect (business-listing): `/commercial-gutter-replacement` + `/commercial-roof-maintenance` → respective new targets per the table above
- VeraRoofing (slate-roofing blog): `/slate-roofing-materials` → `/synthetic-slate-roofing-charlotte-nc`

### How long

1 hour total — most are forms or short emails.

### How to verify

- **Day 14:** Re-run Ahrefs broken-backlinks query. The DR 50 ProjectMapIt entries should disappear from the list (because the links now point to live pages, not the legacy slugs).
- Even without partner action, the 301 redirects already capture the link equity. This step just makes it cleaner.

---

## 4. Manufacturer installer directories (DOFOLLOW links)

### Why

You hold three top-tier installer certifications: GAF Master Elite (top 3% nationally), CertainTeed SELECT ShingleMaster (top 1%), Owens Corning Platinum Preferred (top 1%). Each of these manufacturers maintains an installer directory that links to certified contractors. Several of yours either don't yet list bestroofingnow.com or use a nofollow link.

Current state per Ahrefs:
- **CertainTeed.com (DR 83)** — 8 dofollow links ✅ already great
- **GAF.com (DR 85)** — 2 dofollow links ⚠️ should be more
- **Owens Corning** — not yet detected ❌ need to claim
- **Atlas Pro Plus** — not yet detected ❌
- **Malarkey Emerald Pro** — not yet detected ❌

Each of these manufacturer pages is DR 75-85 with high trust. Dofollow links from them flow strong topic-relevant authority directly into the roofing cluster.

### What to do

#### 4.1 Owens Corning Platinum Preferred installer directory

1. Sign in to your Owens Corning Roofing Contractor portal: https://www.owenscorning.com/roofing/contractors
2. Find "Platinum Preferred Contractor Profile" → "Public Profile Settings"
3. Confirm:
   - Company name: Best Roofing Now
   - Website URL: `https://www.bestroofingnow.com` (no trailing slash, no UTM here — manufacturer profiles don't need UTM since traffic is brand-direct)
   - Service areas: All your Charlotte/LKN cities
   - Photo: Upload current team/work photo
   - Description: Lead with "Owens Corning Platinum Preferred — top 1% of US installers"
4. Public profile must be **published** (not draft). Verify by Googling your name + "platinum preferred" — your profile should appear.

#### 4.2 Atlas Pro Plus installer directory

1. Sign in: https://www.atlasroofing.com/contractor-resources
2. Find Pro Plus contractor directory
3. Confirm listing and add link to `https://www.bestroofingnow.com`
4. Upload 3-5 photos featuring Atlas Pinnacle Pristine installs

#### 4.3 Malarkey Emerald Pro installer directory

1. Sign in: https://www.malarkeyroofing.com/contractors
2. Find Emerald Pro contractor profile
3. Add bestroofingnow.com as website
4. Highlight any Malarkey Vista AR / Legacy installs in photos

#### 4.4 GAF case study submission

GAF maintains a case studies section that links to contractors. Submit 2-3 of your most impressive projects:

1. Email GAF marketing: `marketing@gaf.com` (or use the Master Elite contractor portal contact)
2. Subject: "Master Elite Contractor Case Study Submission — Best Roofing Now Charlotte NC"
3. Attach:
   - 5-10 before/after photos of a notable project (luxury home, storm restoration, large commercial)
   - Project specs: roof size, materials used (specifically GAF), timeline, special challenges
   - 100-word case study writeup
   - Customer testimonial (with permission)
4. Ask: "We'd like to be considered for the GAF case studies page. Can you let me know what additional info you need?"

### How long

2 hours total for all four.

### How to verify

- **Day 14-30:** Re-run Ahrefs `site-explorer-referring-domains` filtered to `owenscorning.com`, `atlasroofing.com`, `malarkeyroofing.com`. Each should appear with at least 1 dofollow link.
- **Day 60:** Check Ahrefs DR — small bump (37 → ~39-40) expected from these high-trust dofollow links.

---

## 5. BBB + local chamber dofollow link push

### Why

Currently:
- **BBB.org** (DR 93) has 2 links to bestroofingnow.com, **both nofollow**. BBB is one of the highest-trust local-business signals; getting at least one dofollow is a meaningful bump.
- **ChamberOfCommerce.com** (DR 84) has 8 links, all nofollow.
- **GrowthZoneApp.com** (DR 78) — 57 dofollow ✅ already great (Lake Norman Chamber relationship working)

### What to do

#### 5.1 BBB profile audit

1. Sign in to your BBB business account: https://www.bbb.org
2. Audit your profile at https://www.bbb.org/us/nc/charlotte/profile/roofing-contractors/best-roofing-now-0473-908763
3. Look for two link types:
   - **The profile "Visit Website" link** — typically nofollow, no fix
   - **The "Member badge" embed on bestroofingnow.com** — this is the embedded BBB seal in your footer. Check the HTML it generates. If BBB provides a dofollow option for accredited businesses, use that.
4. If you've upgraded to BBB Accredited Business (paid tier), check the upgraded profile features — some include a dofollow placement.

#### 5.2 Local chamber memberships (if not already members)

The Lake Norman Chamber is already paying off (57 dofollow links). Consider adding:

- **Charlotte Chamber of Commerce:** https://charlottechamber.com — ~$500-800/yr depending on tier. Dofollow listing on member directory.
- **South Park Chamber:** https://southparkchamber.org — smaller but relevant for high-end residential market
- **Concord Cabarrus Chamber:** https://concordchamber.com — covers Cabarrus County clients (you serve Concord, Kannapolis, Harrisburg)
- **Gastonia Chamber:** https://gastoniachamber.com — covers Gaston County (Gastonia, Mt Holly, Belmont)

For each:
1. Apply for membership (online form, ~5 min each)
2. Pay annual dues
3. Once accepted, log in to the member directory and fill out the public profile with website link
4. Most chambers use GrowthZone (same system as LKN) — dofollow by default

### How long

1 hour to apply + ongoing dues.

### Cost

$200-$800 per chamber depending on tier. Worth it for the dofollow link alone, plus the local business network.

### How to verify

- **Day 30-60:** Each new chamber appears in Ahrefs `site-explorer-referring-domains` with dofollow link
- **Member directory page:** Verify your listing is published and the link is `<a href>` not nofollow (view source of the directory page)

---

## 6. HARO (Help A Reporter Out) — ongoing journalism placements

### Why

HARO connects journalists writing stories with expert sources. A single placement in a USA Today, NYT, Forbes, or even local Charlotte Observer article can earn a DR 80+ dofollow link. Ahrefs shows you've earned a USA Today link (DR 92, 5 dofollow) — likely from a past placement. Repeating that pattern is one of the best long-term link sources.

### What to do

1. Sign up for HARO (free): https://www.helpareporter.com
2. Set your topic interests: "Home Improvement," "Real Estate," "Construction," "Storm/Disaster Prep"
3. Three times a day (8am, 1pm, 5pm Eastern), HARO emails source requests
4. **Look for requests like:**
   - "Need a roofer expert on storm damage claims"
   - "Source for article on metal vs asphalt cost"
   - "Roofing expert needed for spring maintenance article"
   - "Need quote from veteran-owned contractor"
5. **When you see a relevant request:**
   - Respond within 4 hours (journalists pick fast)
   - 100-200 words max
   - Include: your credentials (BBB A+, GAF Master Elite, veteran-owned), specific data ("In Charlotte, we see X every spring"), and a quotable insight
   - Sign off: "James Turner, Best Roofing Now, Charlotte NC. Available for follow-up at (704) 605-6047 or james@bestroofingnow.com"

### How long

30 min/week ongoing. The ROI is high but the volume of responses needed is real — expect to send 10-20 pitches per published placement.

### How to verify

- Set a Google Alert for "Best Roofing Now" — every published placement triggers an email
- Check Ahrefs `site-explorer-referring-domains` monthly for new high-DR additions

### Alternative: paid services

If 30 min/week is too much, services like Featured.com or Qwoted aggregate journalist requests and may suit your time better. ~$50-100/month.

---

## 7. Local supply houses preferred-contractor listings

### Why

Local roofing supply houses (where you buy materials) often maintain a "find a contractor" directory or "preferred contractor" list. These are mid-DR (typically 30-50) but topically-tight links from sites that already trust you as a customer.

### What to do

The three biggest in Charlotte:

1. **ABC Supply Co — Charlotte:**
   - https://www.abcsupply.com
   - Branch contact: walk in or call
   - Ask: "Do you have a preferred contractor program? Can Best Roofing Now be listed on the local branch page or main directory?"
   - Bring proof of your manufacturer certs

2. **SRS Distribution — Charlotte:**
   - https://www.srsdistribution.com
   - Same ask
   - SRS sometimes runs contractor events you can sponsor

3. **Beacon Roofing Supply — Charlotte:**
   - https://www.becn.com
   - "Find a Contractor" tool — request inclusion if not already there

### Bonus: insurance carrier preferred-vendor lists

If you've worked with State Farm, Allstate, USAA, Farm Bureau, Erie, or Nationwide on claims — ask your contact about being added to their "preferred vendor" or "contractor referral" list. These are typically internal-only (no public link) but they generate the most lucrative leads on the site. Worth it.

### How long

1 hour total.

### How to verify

- Check Ahrefs `site-explorer-referring-domains` monthly for `abcsupply.com`, `srsdistribution.com`, `becn.com` additions
- Track call-volume increase from preferred-vendor referrals in your CRM

---

## 8. IndexNow + GSC URL submission for new pages

### Why

We shipped several new pages this week (`/energy-efficient-roofing-charlotte-nc`, `/asphalt-shingle-cost-by-brand-charlotte-nc`) and a large refactor on existing pages. Google's normal crawl pace is ~weekly for established sites — submitting via IndexNow (Bing) and the GSC "Inspect URL → Request Indexing" tool accelerates this to ~24 hours.

### What to do

#### 8.1 GSC URL inspection (for the highest-value pages)

For each of these URLs, in Google Search Console:

1. Open https://search.google.com/search-console
2. Select the `bestroofingnow.com` property
3. Paste a URL into the top "Inspect any URL in [domain]" box
4. Click "Request Indexing" if the page is eligible
5. Repeat for these priority URLs:
   - `/` (homepage — the title/meta rewrite needs to be re-crawled)
   - `/metal-roof-cost`
   - `/charlotte-roofing-costs-2026`
   - `/shingle-vs-metal-roof-cost`
   - `/asphalt-shingle-roof-cost`
   - `/asphalt-shingle-cost-by-brand-charlotte-nc` (new)
   - `/energy-efficient-roofing-charlotte-nc` (new)
   - `/storm-damage-roof-repair` (now near-me targeted)
   - `/emergency-roof-repair` (now near-me targeted)
   - `/hail-damage-roof-repair` (now near-me targeted)
   - `/flat-roof-repair`
   - `/commercial-roofing-charlotte-nc`
   - Your top 5 location pages (Dilworth, Plaza Midwood, Providence Plantation, University City, Pineville)

GSC limits you to ~10-12 manual indexing requests per day — spread these over a few days.

#### 8.2 IndexNow (Bing, Yandex, etc.)

If IndexNow integration isn't automated in your Vercel deploy, ping the new pages manually:

1. Go to https://www.bing.com/indexnow
2. Submit your sitemap: `https://www.bestroofingnow.com/sitemap.xml`
3. This triggers Bing + IndexNow-participating engines to re-crawl

### How long

30 min spread over 3-4 days (because of GSC rate limit).

### How to verify

- **GSC URL inspection:** Each inspected URL shows "URL is on Google" within 24-72 hours
- **GSC Performance report:** Impressions for new pages start appearing within 7-14 days

---

## 9. NAP consistency audit

### Why

NAP = Name, Address, Phone. Google's local algorithm heavily favors businesses whose NAP is **identical** across all online citations. Even small variations ("Best Roofing Now" vs "Best Roofing Now LLC" vs "Best Roofing Now, Inc") can dilute local-pack ranking.

### What to do

#### 9.1 Define canonical NAP (15 min)

Write down the exact format you'll use everywhere:

- **Name:** Best Roofing Now
- **Legal name (when required):** Best Roofing Now LLC
- **Address:** 10130 Mallard Creek Rd Ste 300, Charlotte, NC 28262
- **Phone:** (704) 605-6047 (always parenthesized, hyphenated)
- **Website:** https://www.bestroofingnow.com (always with `www`, always `https`)

#### 9.2 Audit your top 25 citations (1-2 hrs)

Search Google for `"Best Roofing Now" "Charlotte"` and click into the top 25 results that aren't your own site. For each, verify the NAP matches your canonical format. Common offenders:
- Yellow Pages, Yelp, BBB, Angi, Houzz, Nextdoor, MapQuest, Bing Places, Apple Maps, Yahoo
- Local directories (Charlotte Magazine business directory, Visit Charlotte, etc.)
- Manufacturer profiles (GAF, CertainTeed, OC pages)

For each:
1. Sign in to the platform (most require an account)
2. Update the NAP to match exactly
3. Note the date of the update

If you don't have access to a listing, use Yext (paid) or BrightLocal (paid) to sync NAP across 50-100+ directories simultaneously. ~$50-100/month, worth it if you find many variations.

#### 9.3 Schema NAP audit (already done in code)

The `RoofingContractor` schema on every page already has consistent NAP:
- name, telephone, address all match. (Verified during the schema-validation fix on 5/17.)

### How long

2-3 hours.

### How to verify

- **Day 30:** Re-run a Google search for `"Best Roofing Now"` — top 25 listings should all show the same address and phone format
- **Day 60:** Local-pack ranking improvements measurable via Local Falcon scan

---

## Verification Cadence — what to measure and when

### Week 1 (5/17 – 5/24)

- [ ] Submit disavow file (Day 1)
- [ ] GBP audit + initial photo upload (Day 1-3)
- [ ] ProjectMapIt + partner outreach emails sent (Day 2)
- [ ] First HARO responses (Day 3-7)
- [ ] **Day 7:** Re-run Ahrefs Site Audit. Expected metrics:
  - Health score: 28 → 65+
  - 4XX count: 563 → near 0
  - Schema errors: 1,490 → near 0

### Week 2 (5/24 – 5/31)

- [ ] OC + Atlas + Malarkey installer directories submitted (Day 8-10)
- [ ] GSC URL inspection done for top 15 pages (Day 8-12)
- [ ] NAP audit started (Day 10-14)
- [ ] **Day 14:** Re-pull GSC keywords + run audit scripts
  - `/metal-roof-cost` ranking: expected pos 12 → 6-8 recovery
  - Homepage CTR on Charlotte-qualified queries: small uptick expected
  - Audit script counts continue to drop

### Month 1 (5/17 – 6/16)

- [ ] First 10 GBP weekly posts (5-week posting cadence established)
- [ ] First 5 new Google reviews acquired (1-2 per week pace)
- [ ] Chamber memberships applied (Charlotte, South Park, Concord, Gastonia)
- [ ] Local supply house listings requested
- [ ] **Day 30:** Re-pull Ahrefs anchors + ranking history
  - Fake-testimonial "SEOExpress.org" anchor count declining
  - Ahrefs DR small bump expected (37 → ~39)

### Month 2 (6/17 – 7/16)

- [ ] First GAF case study submitted
- [ ] HARO: expect 1-2 placements
- [ ] Yext or BrightLocal NAP sync running (if used)
- [ ] **Day 60:** Local Falcon grid scan + Ahrefs site-explorer pull
  - Local pack visibility for "roofer near me" / "roofing company charlotte" should be improving
  - GBP-attributed sessions in GA4 showing measurable volume

### Month 3 (7/17 – 8/17)

- [ ] **Day 90:** Full re-run of `/seo:priorities` for fresh roadmap
- [ ] Disavow file effects largely processed (most link-signal reprocessing happens 4-12 weeks post-submission)
- [ ] All four chamber memberships active and dofollow

---

## Quick reference — links and accounts you'll need

| Item | URL | Notes |
|---|---|---|
| GSC | https://search.google.com/search-console | Disavow tool, URL inspection, Performance reports |
| GSC Disavow | https://search.google.com/search-console/disavow-links | Upload `research/disavow-2026-05-17.txt` |
| GBP | https://business.google.com | Profile management, posts, reviews |
| Local Falcon | https://www.localfalcon.com | Local-pack grid scanning ($30+/mo) |
| BBB | https://www.bbb.org | Business account |
| HARO | https://www.helpareporter.com | Free source requests via email |
| Ahrefs | https://ahrefs.com/site-explorer | DR, backlinks, anchors |
| GAF portal | https://www.gaf.com/contractor | Master Elite contractor resources |
| CertainTeed portal | https://www.certainteed.com/contractor | SELECT ShingleMaster resources |
| Owens Corning portal | https://www.owenscorning.com/roofing/contractors | Platinum Preferred resources |
| Atlas portal | https://www.atlasroofing.com/contractor-resources | Pro Plus resources |
| Malarkey portal | https://www.malarkeyroofing.com/contractors | Emerald Pro resources |
| ABC Supply | https://www.abcsupply.com | Local supply, ask about contractor program |
| SRS Distribution | https://www.srsdistribution.com | Same |
| Beacon Roofing Supply | https://www.becn.com | Same |
| IndexNow | https://www.bing.com/indexnow | Manual sitemap ping |
| Bing Webmaster | https://www.bing.com/webmasters | Bing equivalent of GSC |

---

## Notes + caveats

- **None of this is fast.** The disavow takes 4-12 weeks to process. Manufacturer directories take 2-4 weeks to publish. Chamber memberships are quick but dues + setup take time. Plan for visible results 30-90 days from when you start.
- **Don't over-optimize in this window.** Once the audit metrics stabilize after the re-crawl (~Day 7-14), we'll have clean before/after data. Adding more code-side changes in that window blurs the signal.
- **Track everything.** Set up a simple spreadsheet or Notion doc with: action, date completed, expected impact, verification date. Every link earned, every directory updated, every review acquired. After 90 days the document is gold for the next strategy decision.
- **The codebase work and this document compound.** A well-optimized GBP profile alongside a clean technical site beats either one alone. Local-pack cannibalization is solved by GBP excellence; informational/cost-search ranking is solved by content + backlinks. Both need to happen.

---

**Generated by Claude (Opus 4.7) for james@bestroofingnow.com. Saved at:**
`research/seo-action-items-2026-05-17.md`
