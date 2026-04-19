import { Metadata } from 'next';
import Link from 'next/link';
import { SEOImage } from '@/components/ui/SEOImage';
import { MapPin, CheckCircle, HelpCircle } from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  CollectionPageSchema,
  SpeakableContentBlocks,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG, LOCATIONS } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roofing Service Areas | Charlotte NC & Lake Norman',
  description:
    'Best Roofing Now serves 45+ cities across Charlotte metro — Mecklenburg, Cabarrus, Union, Gaston, Iredell, Lincoln, York SC, and more. Free estimates, no travel fees.',
  keywords: [
    'roofing service areas charlotte nc',
    'charlotte metro roofing',
    'lake norman roofing contractor',
    'union county roofer',
    'cabarrus county roofing',
    'iredell county roofer',
    'mecklenburg county roofing contractor',
    'york county sc roofing',
    'roofing companies near me charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/locations`,
  },
  openGraph: {
    title: 'Roofing Service Areas | Charlotte Metro & Lake Norman | Best Roofing Now',
    description: 'Best Roofing Now serves 45+ cities across the Charlotte metro including Lake Norman, Union County, Cabarrus, Gaston, Iredell, Lincoln, and York SC.',
    url: `${SITE_CONFIG.url}/locations`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero17, width: 1200, height: 630, alt: 'Best Roofing Now service areas across Charlotte metro' }],
  },
};

interface CountyGroup {
  county: string;
  state: 'NC' | 'SC';
  description: string;
}

const COUNTY_DESCRIPTIONS: CountyGroup[] = [
  { county: 'Mecklenburg', state: 'NC', description: 'Our home base — Charlotte, Huntersville, Cornelius, Davidson, Matthews, Mint Hill, and Pineville. Same-day inspections and fastest emergency response.' },
  { county: 'Cabarrus', state: 'NC', description: 'Concord, Kannapolis, and Harrisburg — growing suburbs with mixed housing stock from 1990s builder-grade to new-construction premium.' },
  { county: 'Union', state: 'NC', description: 'Monroe, Indian Trail, Waxhaw, Stallings, Weddington, Marvin, Wesley Chapel — Charlotte\'s southeast growth corridor with large-lot custom homes.' },
  { county: 'Gaston', state: 'NC', description: 'Gastonia, Mt Holly, Belmont, Cramerton, Lowell, Dallas, Cherryville, Bessemer City — west of Charlotte with a mix of historic downtowns and new development.' },
  { county: 'Iredell', state: 'NC', description: 'Mooresville and Statesville — the north end of Lake Norman including lakefront custom homes and racing-industry corporate corridors.' },
  { county: 'Lincoln', state: 'NC', description: 'Denver (secondary HQ) and Lincolnton — the Lake Norman west shore, rural subdivisions, and fast-growing commuter belt.' },
  { county: 'Catawba', state: 'NC', description: 'Hickory, Newton, Sherrills Ford, and Terrell — the Lake Norman north end and Unifour manufacturing corridor.' },
  { county: 'Rowan', state: 'NC', description: 'Salisbury, China Grove, and Landis — I-85 corridor north of Charlotte with established neighborhoods and historic architecture.' },
  { county: 'Cleveland', state: 'NC', description: 'Shelby and Kings Mountain — west of Gastonia in the Piedmont foothills.' },
  { county: 'Stanly', state: 'NC', description: 'Albemarle — east of Charlotte in the Uwharrie foothills.' },
  { county: 'York', state: 'SC', description: 'Rock Hill, Fort Mill, Tega Cay, Clover, York, and Lake Wylie — the South Carolina side of the Charlotte metro with strong new construction and retiree communities.' },
  { county: 'Lancaster', state: 'SC', description: 'Indian Land and Lancaster — booming Panhandle growth corridor with Charlotte-commuter planned communities.' },
];

const coverageChecklist = [
  'Verified recent project photos and case studies per city',
  'Neighborhood-level knowledge (HOA specs, architectural review, permits)',
  'Local code familiarity — Mecklenburg, Union, Cabarrus, Iredell, Lincoln, Gaston, York SC',
  'Climate-specific recommendations (Piedmont hail, Lake Norman wind, lakefront moisture)',
  'Insurance carrier relationships for storm-damage claims throughout the metro',
  'No travel fees — Charlotte and Denver NC HQs put crews within 30 minutes of every zone',
];

const faqs = [
  { question: 'What cities does Best Roofing Now serve around Charlotte?', answer: 'We serve 45+ cities across the Charlotte metro and Lake Norman region, including Mecklenburg (Charlotte, Huntersville, Cornelius, Davidson, Matthews, Mint Hill, Pineville), Cabarrus (Concord, Kannapolis, Harrisburg), Union (Monroe, Indian Trail, Waxhaw, Stallings, Weddington, Marvin, Wesley Chapel), Gaston, Iredell (Mooresville, Statesville), Lincoln (Denver, Lincolnton), Catawba, Rowan, Cleveland, Stanly counties in NC, plus York and Lancaster counties in South Carolina (Rock Hill, Fort Mill, Tega Cay, Indian Land). Our Charlotte and Denver NC headquarters put crews within 30 minutes of every service area.' },
  { question: 'Do you charge travel fees for outlying cities?', answer: 'No. We include travel in our project pricing for every city on this page. Free estimates are provided throughout our coverage area — from Shelby and Kings Mountain in the west, out to Statesville and Salisbury in the north, Monroe and Albemarle to the east, and Fort Mill, Rock Hill, and Lancaster in South Carolina. If your city is not listed, call (704) 605-6047 to confirm coverage.' },
  { question: 'How quickly can you respond to a roofing emergency in the Charlotte metro?', answer: 'For Mecklenburg County and the immediate metro (Cornelius, Davidson, Matthews, Pineville, Huntersville, Mint Hill), our typical emergency tarping response is under 3 hours. For Lake Norman, Cabarrus, Union, and eastern Gaston counties, response is typically 3–6 hours. For outer service areas (Statesville, Hickory, Salisbury, Shelby, Lancaster SC), we target same-day or next-morning. Emergency dispatch runs 24/7 from our Charlotte and Denver NC HQs.' },
  { question: 'Do you know the local building codes in each county?', answer: 'Yes. Our crews are licensed in NC and SC and permit-compliant across Mecklenburg, Union, Cabarrus, Gaston, Iredell, Lincoln, Catawba, Rowan, Cleveland, Stanly, York SC, and Lancaster SC counties. We handle permits, inspections, and architectural review board submissions where required — including Historic Davidson, Historic Downtown Matthews, and Historic Concord design review.' },
  { question: 'Which Lake Norman cities do you serve?', answer: 'All of them — Huntersville, Cornelius, Davidson, Mooresville, Denver, Sherrills Ford, Terrell, and the Lake Wylie corridor on the South Carolina side. We maintain a secondary headquarters in Denver NC (Lincoln County) specifically to serve the Lake Norman west shore and deliver the same response times as our Charlotte HQ. Lakefront specifications — wind uplift, moisture management, shoreline stormwater — are part of every LKN estimate we prepare.' },
  { question: 'Do you serve South Carolina cities south of Charlotte?', answer: 'Yes. We serve Rock Hill, Fort Mill, Tega Cay, Clover, York, Lake Wylie, Indian Land, and Lancaster in South Carolina. SC-specific permitting, insurance carriers, and supplier networks (Beacon, ABC Supply, SRS) are handled the same way as our NC work. Our crews cross the state line daily — there is no meaningful difference in response time, warranty, or pricing.' },
  { question: 'How are the service area pages organized?', answer: 'Each city page provides: a service-area-specific hero, local climate and architectural context, common roofing issues for that city, recent project photos, neighborhood lists, and local contact information. Combine a city page with a service page (e.g., roof-repair-davidson-nc, commercial-roofing-matthews-nc) for hyperlocal service+city content including pricing ranges, insurance carriers, and neighborhood-level recommendations.' },
];

// Group locations by county for better UX + SEO topical clustering
function groupLocationsByCounty() {
  const grouped: Record<string, typeof LOCATIONS> = {};
  for (const loc of LOCATIONS) {
    const key = `${loc.county}-${loc.state}`;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(loc);
  }
  return grouped;
}

export default function LocationsPage() {
  const groupedLocations = groupLocationsByCounty();
  const pageUrl = `${SITE_CONFIG.url}/locations`;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Service Areas', url: pageUrl },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <WebPageSchema
        name="Roofing Service Areas | Charlotte Metro & Lake Norman"
        description="Best Roofing Now service areas across Charlotte NC, Lake Norman, and 12 surrounding counties in NC and SC. 45+ cities with same-day emergency response."
        url={pageUrl}
        primaryImage={IMAGES.hero.hero17}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Service Areas', url: pageUrl },
        ]}
      />
      <CollectionPageSchema
        name="Best Roofing Now Service Areas"
        description="Comprehensive list of 45+ cities served by Best Roofing Now across the Charlotte metro region."
        url={pageUrl}
        items={LOCATIONS.map((loc) => ({
          name: `${loc.city}, ${loc.state}`,
          url: `${SITE_CONFIG.url}/locations/${loc.slug}`,
          description: `Roofing services in ${loc.city}, ${loc.state} — ${loc.county} County, ${loc.distance} miles from our Charlotte headquarters.`,
        }))}
      />
      <SpeakableContentBlocks includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={pageUrl} pageName="Roofing Service Areas" />
      <VoiceSearchActionSchema />

      {/* Visual Breadcrumbs */}
      <div className="bg-light border-b border-gray-200">
        <div className="container">
          <Breadcrumbs
            items={[
              { name: 'Service Areas', href: '/locations' },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SEOImage
            src={IMAGES.hero.hero17}
            alt="Roofing services across Charlotte metro area"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="font-semibold">Service Areas</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Proudly Serving Charlotte &amp; Surrounding Areas
            </h1>
            <p className="speakable-intro text-xl text-white/90">
              Best Roofing Now serves 45+ cities across 12 counties in NC and SC — Mecklenburg, Cabarrus, Union, Gaston, Iredell, Lincoln, Catawba, Rowan, Cleveland, Stanly in North Carolina, plus York and Lancaster counties in South Carolina. From our Charlotte and Denver NC headquarters, we deliver same-day estimates and 24/7 emergency response across the entire region. No travel fees, ever.
            </p>
          </div>
        </div>
      </section>

      {/* Area Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Best Roofing Now serves the entire Charlotte metro area, from the Lake Norman waterfront communities of Cornelius, Davidson, and Denver to the growing suburbs of Concord, Huntersville, and Matthews. Our crews travel daily across Mecklenburg, Iredell, Cabarrus, Union, Lincoln, Gaston, and York (SC) counties, so we know the local building codes, HOA requirements, and weather patterns that affect every roof in the region.
              </p>
              <p>
                Each service area page below includes verified project photos, neighborhood-specific roofing recommendations, and direct contact information. Whether you need a quick storm-damage inspection in Fort Mill or a full roof replacement in Mooresville, our family-owned team is ready to help. Select your city to see recent work near you and request a free, no-obligation estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Find */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What You&apos;ll Find on Every City Page</h2>
              <p className="text-gray text-lg">Our 45+ service area pages are built around six pillars that make local roofing decisions faster and smarter.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {coverageChecklist.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grouped by County */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Service Areas by County</h2>
            <p className="text-gray text-lg">45+ cities organized by county, each with local climate, code, and insurance context.</p>
          </div>
          <div className="space-y-10">
            {COUNTY_DESCRIPTIONS.map((group) => {
              const cities = groupedLocations[`${group.county}-${group.state}`];
              if (!cities || cities.length === 0) return null;
              return (
                <div key={`${group.county}-${group.state}`}>
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-primary">
                      {group.county} County, {group.state}
                      <span className="text-sm font-normal text-gray ml-3">({cities.length} {cities.length === 1 ? 'city' : 'cities'})</span>
                    </h3>
                    <p className="text-gray-700 text-sm mt-2 max-w-3xl">{group.description}</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cities.map((location) => (
                      <Link
                        key={location.slug}
                        href={`/locations/${location.slug}`}
                        className="bg-light rounded-xl p-5 hover:shadow-lg transition-all group border border-gray-100"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                            <MapPin className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg font-bold text-dark group-hover:text-primary transition-colors">
                              {location.city}, {location.state}
                            </h4>
                            <p className="text-gray text-xs mt-1">{location.distance} mi from Charlotte HQ</p>
                            {location.isPrimary && (
                              <span className="inline-block mt-2 text-xs font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded">
                                HQ Location
                              </span>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage FAQs */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Coverage Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Service Area FAQs</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Not Listed CTA */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Don&apos;t See Your City?
            </h2>
            <p className="text-gray text-lg mb-6">
              We serve many communities throughout the Charlotte region and beyond. Give us a call
              to confirm service availability in your area — most of the metro is within 45 miles of our Charlotte or Denver NC headquarters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE_CONFIG.phoneClean}`} className="btn btn-primary">
                Call {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="btn btn-outline">
                Contact Us Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
