// Lake Norman Founder / Owner Person Schema for E-E-A-T
//
// Why: AI engines and Google weight content authored by named, credentialed
// people more heavily than anonymous brand content. This schema attaches
// real Person entities (James Turner and Fred Turner) to the brand, with
// founder/owner roles, military service credential, and explicit "knows
// about Lake Norman roofing" topical authority.
//
// Drop on About-style pages and on the LKN authority hubs to compound the
// E-E-A-T signal already established by LKNExpertiseSchema.

import { SITE_CONFIG } from '@/lib/constants';

const SITE = SITE_CONFIG.url;

interface LKNFounderSchemaProps {
  pageUrl?: string;
}

export function LKNFounderSchema({ pageUrl }: LKNFounderSchemaProps = {}) {
  const orgId = `${SITE}/#organization`;
  const fredId = `${SITE}/#person-fred-turner`;
  const jamesId = `${SITE}/#person-james-turner`;
  const subjectOf = pageUrl ?? SITE;

  const fred = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': fredId,
    name: 'Fred Turner',
    jobTitle: 'Co-Founder',
    worksFor: { '@id': orgId },
    affiliation: { '@id': orgId },
    description:
      'Co-founder of Best Roofing Now. U.S. military veteran whose service-first values shape the company\'s honest-assessment approach to Lake Norman and Charlotte roofing projects.',
    knowsAbout: [
      'residential roofing',
      'commercial roofing',
      'roof inspection',
      'roof replacement',
      'storm damage repair',
      'Lake Norman roofing',
      'North Carolina roofing standards',
      'veteran-owned business operations',
    ],
    knowsLanguage: 'en',
    nationality: 'American',
    award: ['U.S. Military Veteran', 'Co-Founder of Best Roofing Now'],
    subjectOf: { '@type': 'WebPage', url: `${SITE}/about` },
  };

  const james = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': jamesId,
    name: 'James Turner',
    jobTitle: 'Owner & Operations Lead',
    worksFor: { '@id': orgId },
    affiliation: { '@id': orgId },
    parent: { '@id': fredId },
    description:
      'Owner and operations lead at Best Roofing Now. Specializes in Lake Norman residential roofing, premium estate projects across The Peninsula, The Point at Trump National Charlotte, and River Run Country Club, and Lake Norman waterfront wind-resistant roofing systems.',
    knowsAbout: [
      'Lake Norman residential roofing',
      'Lake Norman waterfront roofing',
      'standing seam metal roofing',
      'natural slate and synthetic slate roofing',
      'cedar shake roofing',
      'tile roofing',
      'Class 4 impact-resistant shingles',
      'NC homeowners insurance hail and wind claims',
      'Lake Norman HOA architectural review (ARC) approval process',
      'CertainTeed, GAF, and Owens Corning manufacturer certifications',
    ],
    knowsLanguage: 'en',
    nationality: 'American',
    award: [
      'Owner of Best Roofing Now (5.0 Google Rating)',
      'BBB A+ Accredited Business Owner',
    ],
    subjectOf: { '@type': 'WebPage', url: subjectOf },
  };

  // Companion graph: link both Persons to the Organization explicitly via
  // founder + owner properties so search engines build the entity graph.
  const orgGraph = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': orgId,
    name: 'Best Roofing Now',
    founder: [{ '@id': fredId }, { '@id': jamesId }],
    employee: [{ '@id': fredId }, { '@id': jamesId }],
  };

  const blocks = [fred, james, orgGraph];

  return (
    <>
      {blocks.map((b, i) => (
        <script
          key={`lkn-founder-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(b) }}
        />
      ))}
    </>
  );
}
