// Lake Norman HowTo Schemas — high-intent processes for AI search dominance.
//
// Why: AI engines (ChatGPT, Perplexity, Google AI Overview) cite HowTo schemas
// verbatim when answering "how do I..." queries. These three cover the highest-
// intent LKN roofing queries: insurance claims, choosing a roofer, scheduling
// an inspection. Drop into any LKN page near other schema components.

import { SITE_CONFIG } from '@/lib/constants';

const SITE = SITE_CONFIG.url;
const PHONE = SITE_CONFIG.phone;

interface SchemaProps {
  pageUrl?: string;
  city?: string;
}

function HowToBlock({ schema, id }: { schema: object; id: string }) {
  return (
    <script
      key={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * HowTo: File a roof hail / storm damage insurance claim in Lake Norman NC.
 * Targets queries like "how to file roof insurance claim Lake Norman",
 * "what to do after hail damage on Lake Norman home".
 */
export function LKNInsuranceClaimHowTo({ pageUrl, city = 'Lake Norman' }: SchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${pageUrl ?? SITE}/#howto-lkn-insurance-claim`,
    name: `How to File a Roof Hail Damage Insurance Claim in ${city} NC`,
    description: `Step-by-step process for ${city} homeowners to document hail or wind damage and file a successful homeowners insurance claim. North Carolina has a 2-year statute of limitations for storm damage claims.`,
    totalTime: 'P14D',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
    supply: [
      { '@type': 'HowToSupply', name: 'Smartphone or camera' },
      { '@type': 'HowToSupply', name: 'Insurance policy declarations page' },
      { '@type': 'HowToSupply', name: 'Property address and account number' },
    ],
    tool: [
      { '@type': 'HowToTool', name: 'Drone for aerial documentation (provided by Best Roofing Now)' },
      { '@type': 'HowToTool', name: 'Moisture meter (provided by inspector)' },
    ],
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Document the storm event',
        text: `Note the exact date, time, and conditions of the hail or wind event in ${city}. Save local NWS storm reports or screenshots of weather radar — insurance carriers will verify the event occurred at your address.`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Schedule a free roof inspection',
        text: `Call Best Roofing Now at ${PHONE} within 30 days of the storm. A certified inspector will document damage with drone imagery, ground photos, and a written damage assessment — at no cost.`,
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Open your insurance claim',
        text: 'Contact your homeowners insurance carrier and report the storm date, claim type (hail or wind), and request an adjuster appointment. Get the claim number in writing.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Meet the adjuster on-site with your roofer',
        text: 'Schedule the insurance adjuster appointment so your Best Roofing Now project manager can attend. Having a contractor present ensures damage is fully documented and not undercounted.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Review the scope of loss',
        text: 'Compare the adjuster\'s scope of loss with your roofer\'s independent estimate. If items are missed, request a supplemental claim — Best Roofing Now handles supplements at no charge.',
      },
      {
        '@type': 'HowToStep',
        position: 6,
        name: 'Approve the work and schedule replacement',
        text: `Once the claim is approved, sign the work order. Your only out-of-pocket is your deductible. Best Roofing Now handles all paperwork, material delivery, permits with the Town of ${city}, and installation.`,
      },
    ],
  };

  return <HowToBlock schema={schema} id="lkn-insurance-claim" />;
}

/**
 * HowTo: Choose a roofing contractor in Lake Norman NC.
 * Targets queries like "how to choose a roofer Lake Norman",
 * "what to look for in a Lake Norman roofing contractor".
 */
export function LKNChooseRooferHowTo({ pageUrl, city = 'Lake Norman' }: SchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${pageUrl ?? SITE}/#howto-lkn-choose-roofer`,
    name: `How to Choose a Roofing Contractor in ${city} NC`,
    description: `Six checks every ${city} homeowner should run before hiring a roofer — covering NC licensing, insurance, manufacturer certifications, warranties, local references, and contract review.`,
    totalTime: 'P3D',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Verify NC General Contractor licensing or proper exemption',
        text: 'In North Carolina, roofing projects under $30,000 do not require a state general contractor license, but reputable roofers carry one anyway. Ask for the license number and verify on the NC Licensing Board for General Contractors website.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Confirm general liability and workers compensation insurance',
        text: `Request a Certificate of Insurance (COI) showing at minimum $1M general liability and active NC workers compensation. Verify the policy is current — uninsured roofers expose ${city} homeowners to liability if a worker is injured on your property.`,
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Check manufacturer certifications',
        text: 'A CertainTeed SELECT ShingleMaster, GAF Master Elite, or Owens Corning Platinum Preferred certification means the roofer is factory-trained and authorized to issue extended manufacturer warranties (often 50 years).',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Verify BBB rating and Lake Norman community involvement',
        text: `Look up the company on the BBB and confirm A+ accreditation. For ${city} specifically, check whether the roofer is a member of the Lake Norman Chamber of Commerce, LKN Small Business Network, or LKN Connect Community — local accountability signals.`,
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Get at least 3 written estimates with material specs',
        text: `Each estimate should specify exact shingle brand and line, underlayment, ice-and-water shield, drip edge, ventilation, and warranty terms. Apples-to-apples comparison is impossible without spec-level detail.`,
      },
      {
        '@type': 'HowToStep',
        position: 6,
        name: 'Read the contract and warranty before signing',
        text: 'Confirm written workmanship warranty (10+ years), payment schedule (avoid 100% upfront), permit responsibility (the contractor should pull it), cleanup terms, and supplemental insurance claim handling.',
      },
    ],
  };

  return <HowToBlock schema={schema} id="lkn-choose-roofer" />;
}

/**
 * HowTo: Schedule a free Lake Norman roof inspection.
 * Targets queries like "free roof inspection Lake Norman", "schedule roof inspection".
 */
export function LKNFreeInspectionHowTo({ pageUrl, city = 'Lake Norman' }: SchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${pageUrl ?? SITE}/#howto-lkn-free-inspection`,
    name: `How to Schedule a Free Roof Inspection in ${city} NC`,
    description: `${city} homeowners can schedule a no-obligation roof inspection with Best Roofing Now in three steps. Drone imagery, ground inspection, and a written report are included free.`,
    totalTime: 'PT45M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Call or request online',
        text: `Call ${PHONE} or fill out the form at ${SITE}/contact. Provide your ${city} address, preferred date, and brief description (storm damage, age, visible issues).`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Schedule a 45-minute appointment',
        text: `A certified inspector arrives at the agreed time. Inspections take 30-60 minutes and include drone aerial imagery, ground-level perimeter inspection, attic ventilation check, and photos of any concerns.`,
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Receive a written report',
        text: `Within 24 hours you receive a written report with annotated photos, condition rating, recommended repairs (if any), and a no-pressure estimate for any work. If your roof is in good condition, we will tell you so — no upsell.`,
      },
    ],
  };

  return <HowToBlock schema={schema} id="lkn-free-inspection" />;
}

/**
 * Bundle that drops all three high-intent LKN HowTo schemas onto a page.
 * Use on LKN hub pages and major LKN service/material pages where the
 * extra schema weight is justified.
 */
export function LKNHowToBundle({ pageUrl, city = 'Lake Norman' }: SchemaProps) {
  return (
    <>
      <LKNInsuranceClaimHowTo pageUrl={pageUrl} city={city} />
      <LKNChooseRooferHowTo pageUrl={pageUrl} city={city} />
      <LKNFreeInspectionHowTo pageUrl={pageUrl} city={city} />
    </>
  );
}
