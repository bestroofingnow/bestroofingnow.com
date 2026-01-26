import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, AlertTriangle, Clock, Shield, CheckCircle, Zap, MapPin, DollarSign, HelpCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import {
  BreadcrumbSchema,
  FAQSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: '24/7 Emergency Roofing Services Charlotte NC | 1-2 Hour Response',
  description: 'Charlotte NC 24/7 emergency roofing hotline. We respond in 1-2 hours for roof emergencies - active leaks, fallen trees, sudden damage. Call (704) 605-6047 anytime!',
  keywords: [
    '24/7 roofing service charlotte nc',
    '24 hour roofer charlotte',
    'emergency roofing hotline charlotte',
    'roofer on call charlotte nc',
    'night time roof repair charlotte',
    'after hours roofer charlotte nc',
    'weekend roofing service charlotte',
    'immediate roof help charlotte',
    'round the clock roofer charlotte nc',
    'late night roof repair charlotte',
  ],
  openGraph: {
    title: '24/7 Emergency Roof Repair Charlotte NC | 1-2 Hour Response',
    description: 'Emergency roof repair available 24/7 in Charlotte NC. Storm damage, active leaks, fallen trees - we respond in 1-2 hours. Call now!',
    url: `${SITE_CONFIG.url}/emergency`,
    type: 'website',
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/emergency`,
  },
};

const emergencyTypes = [
  {
    title: 'Storm Damage',
    description: 'High winds, hail, and severe storms can cause immediate damage requiring urgent attention.',
    icon: '⚡',
  },
  {
    title: 'Active Roof Leaks',
    description: 'Water actively entering your home causes damage by the minute. We stop leaks fast.',
    icon: '💧',
  },
  {
    title: 'Fallen Trees/Debris',
    description: 'Tree limbs or debris on your roof create immediate risks and need professional removal.',
    icon: '🌳',
  },
  {
    title: 'Fire Damage',
    description: 'After fire department clearance, we secure and protect your roof from further damage.',
    icon: '🔥',
  },
  {
    title: 'Structural Collapse',
    description: 'Sagging or collapsed roof sections require immediate professional assessment.',
    icon: '🏠',
  },
  {
    title: 'Missing Roof Sections',
    description: 'Large areas of missing shingles or exposed decking need urgent weatherproofing.',
    icon: '🔧',
  },
];

// Charlotte neighborhood emergency response times
const neighborhoodResponseTimes = [
  { name: 'Uptown Charlotte', responseTime: '30-45 min', distance: '5 miles' },
  { name: 'South End', responseTime: '35-50 min', distance: '6 miles' },
  { name: 'Myers Park', responseTime: '40-55 min', distance: '8 miles' },
  { name: 'Dilworth', responseTime: '40-55 min', distance: '7 miles' },
  { name: 'Plaza Midwood', responseTime: '35-50 min', distance: '6 miles' },
  { name: 'NoDa', responseTime: '30-45 min', distance: '4 miles' },
  { name: 'University City', responseTime: '15-30 min', distance: '2 miles' },
  { name: 'Ballantyne', responseTime: '45-60 min', distance: '12 miles' },
  { name: 'Matthews', responseTime: '40-55 min', distance: '10 miles' },
  { name: 'Huntersville', responseTime: '25-40 min', distance: '8 miles' },
  { name: 'Lake Norman', responseTime: '35-50 min', distance: '15 miles' },
  { name: 'Concord', responseTime: '30-45 min', distance: '12 miles' },
];

// Emergency pricing data for transparency
const emergencyPricing = [
  { service: 'Emergency Roof Tarping', priceRange: '$300 - $800', description: 'Temporary waterproof covering to prevent further water damage' },
  { service: 'Emergency Leak Repair', priceRange: '$200 - $600', description: 'Immediate patch repair to stop active leaks' },
  { service: 'Storm Damage Assessment', priceRange: 'FREE', description: 'Comprehensive damage inspection and documentation' },
  { service: 'Debris Removal', priceRange: '$150 - $500', description: 'Removal of tree limbs, branches, and storm debris' },
  { service: 'Emergency Board-Up', priceRange: '$200 - $400', description: 'Secure exposed areas from weather and intruders' },
  { service: 'Temporary Shingle Repair', priceRange: '$250 - $700', description: 'Replace missing or damaged shingles immediately' },
];

// Charlotte neighborhoods we serve
const charlotteNeighborhoods = [
  'Uptown Charlotte', 'South End', 'Myers Park', 'Dilworth', 'Plaza Midwood',
  'NoDa', 'Elizabeth', 'Cherry', 'Sedgefield', 'Wilmore', 'Cotswold',
  'Eastover', 'Providence Park', 'Foxcroft', 'SouthPark', 'Barclay Downs',
  'Quail Hollow', 'Carmel', 'Stonehaven', 'Ballantyne', 'Piper Glen',
  'University City', 'Prosperity Village', 'Highland Creek', 'Mallard Creek',
  'Derita', 'Hidden Valley', 'Newell', 'Oakdale', 'Enderly Park',
  'Wesley Heights', 'Seversville', 'Optimist Park', 'Belmont', 'Villa Heights',
  'Commonwealth', 'Chantilly', 'Shannon Park', 'Montclaire', 'Starmount',
];

// Surrounding cities we serve for emergency repairs
const surroundingCities = [
  'Huntersville', 'Cornelius', 'Davidson', 'Mooresville', 'Matthews',
  'Mint Hill', 'Indian Trail', 'Pineville', 'Fort Mill', 'Rock Hill',
  'Gastonia', 'Concord', 'Kannapolis', 'Harrisburg', 'Mount Holly',
];

// FAQ data optimized for featured snippets
const emergencyFaqs = [
  {
    question: 'How quickly can you respond to a roof emergency in Charlotte NC?',
    answer: 'Our emergency roof repair team typically responds within 1-2 hours to Charlotte NC and surrounding areas. We have crews stationed throughout the metro area, including University City, South End, and Ballantyne, allowing us to reach most Charlotte neighborhoods quickly. For severe storm events affecting multiple homes, response times may vary, but we prioritize active leaks and safety hazards.',
  },
  {
    question: 'What is the cost of emergency roof repair in Charlotte?',
    answer: 'Emergency roof repair costs in Charlotte typically range from $200 to $800 depending on the service needed. Emergency tarping costs $300-$800, leak repairs run $200-$600, and debris removal is $150-$500. We provide free storm damage assessments and transparent pricing before any work begins. Many emergency repairs are covered by homeowners insurance.',
  },
  {
    question: 'Do you offer 24-hour roof repair services in Charlotte NC?',
    answer: 'Yes, Best Roofing Now offers 24/7 emergency roof repair services throughout Charlotte NC and the surrounding metro area. Our emergency hotline at (704) 605-6047 is staffed around the clock, including nights, weekends, and holidays. Whether it is 2 AM after a storm or Sunday afternoon, our team is ready to respond.',
  },
  {
    question: 'What should I do while waiting for emergency roof repair?',
    answer: 'While waiting for emergency roof repair, prioritize safety first - do not climb on the roof. Move valuables away from leak areas, use buckets and towels to contain water, and document all damage with photos and videos for insurance. If water is near electrical fixtures, turn off power to affected areas. Do not attempt DIY repairs that could make the situation worse.',
  },
  {
    question: 'Will my homeowners insurance cover emergency roof repairs?',
    answer: 'Most homeowners insurance policies cover emergency roof repairs caused by sudden events like storms, fallen trees, hail, and wind damage. Coverage typically includes emergency tarping, temporary repairs, and permanent restoration. Best Roofing Now works directly with insurance companies, documents all damage thoroughly, and helps homeowners navigate the claims process for fair settlements.',
  },
  {
    question: 'What areas near Charlotte do you serve for emergency roof repair?',
    answer: 'We provide 24/7 emergency roof repair services throughout the Charlotte metro area including Huntersville, Cornelius, Davidson, Mooresville, Matthews, Mint Hill, Indian Trail, Pineville, Concord, Kannapolis, and Gastonia. We also serve Fort Mill and Rock Hill in South Carolina. Our response radius covers approximately 50 miles from our Charlotte headquarters.',
  },
];

// EmergencyService Schema component
function EmergencyServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EmergencyService',
    '@id': `${SITE_CONFIG.url}/emergency/#emergency-service`,
    name: '24/7 Emergency Roof Repair Charlotte NC',
    alternateName: ['Emergency Roofer Charlotte', '24 Hour Roof Repair Charlotte NC'],
    description: 'Professional 24/7 emergency roof repair services in Charlotte NC. Fast response for storm damage, active leaks, fallen trees, and all roof emergencies. Licensed and insured.',
    url: `${SITE_CONFIG.url}/emergency`,
    telephone: SITE_CONFIG.phone,
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE_CONFIG.url}/emergency`,
      servicePhone: SITE_CONFIG.phone,
      availableLanguage: ['English', 'Spanish'],
    },
    provider: {
      '@type': 'RoofingContractor',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_CONFIG.address.street,
        addressLocality: SITE_CONFIG.address.city,
        addressRegion: SITE_CONFIG.address.state,
        postalCode: SITE_CONFIG.address.zip,
        addressCountry: 'US',
      },
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Charlotte',
        containedInPlace: { '@type': 'State', name: 'North Carolina' },
      },
      ...surroundingCities.map(city => ({
        '@type': 'City',
        name: city,
      })),
    ],
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    offers: emergencyPricing.map(item => ({
      '@type': 'Offer',
      name: item.service,
      description: item.description,
      priceRange: item.priceRange,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE_CONFIG.googleRating,
      reviewCount: SITE_CONFIG.googleReviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    serviceType: 'Emergency Roof Repair',
    category: ['Roofing', 'Emergency Services', 'Storm Damage Repair'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function EmergencyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Emergency Services', url: `${SITE_CONFIG.url}/emergency` },
        ]}
      />
      <EmergencyServiceSchema />
      <FAQSchema faqs={emergencyFaqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/emergency`}
        pageName="Emergency Roof Repair Charlotte NC"
        city="Charlotte"
        includeVoiceActions={true}
      />
      <VoiceSearchActionSchema />
      {/* Emergency Hero */}
      <section className="bg-red-600 text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[{ label: 'Emergency Services' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-10 h-10 animate-pulse" aria-hidden="true" />
              <span className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-bold">
                24/7 AVAILABLE
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              24/7 Emergency Roof Repair Charlotte NC
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Roof emergencies don&apos;t wait for business hours. Our emergency response
              team is available 24 hours a day, 7 days a week to protect your
              Charlotte home from further damage.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-white text-red-600 hover:bg-gray-100 text-lg px-8 animate-pulse"
            >
              <Phone className="w-6 h-6" aria-hidden="true" />
              CALL NOW: {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-8 bg-dark text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-accent" aria-hidden="true" />
              <div>
                <div className="text-3xl font-bold">1-2 Hours</div>
                <div className="text-white/70 text-sm">Average Response Time</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20" />
            <div className="flex items-center gap-3">
              <Zap className="w-8 h-8 text-accent" aria-hidden="true" />
              <div>
                <div className="text-3xl font-bold">24/7/365</div>
                <div className="text-white/70 text-sm">Always Available</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20" />
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-accent" aria-hidden="true" />
              <div>
                <div className="text-3xl font-bold">Licensed</div>
                <div className="text-white/70 text-sm">& Fully Insured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Types */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            We Handle All Roof Emergencies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyTypes.map((emergency, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="text-4xl mb-4">{emergency.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{emergency.title}</h3>
                <p className="text-gray text-sm">{emergency.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Our Emergency Response Process
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-bold text-primary mb-2">You Call</h3>
              <p className="text-gray text-sm">Call our 24/7 emergency line and speak with a real person immediately.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-bold text-primary mb-2">We Respond</h3>
              <p className="text-gray text-sm">Our emergency crew is dispatched and arrives within 1-2 hours.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-bold text-primary mb-2">We Secure</h3>
              <p className="text-gray text-sm">Emergency tarping and temporary repairs to stop further damage.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="font-bold text-primary mb-2">We Follow Up</h3>
              <p className="text-gray text-sm">Schedule permanent repairs and assist with insurance claims.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Checklist */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              While You Wait: Emergency Checklist
            </h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-6 mb-8">
              <h3 className="font-bold text-yellow-800 mb-4">Do This Now:</h3>
              <ul className="space-y-3 text-yellow-800">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Stay safe</strong> - Don&apos;t go on the roof or into areas with active leaks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Move valuables</strong> - Relocate furniture and belongings from leak areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Contain water</strong> - Use buckets and towels to minimize interior damage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Document everything</strong> - Take photos and videos for insurance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Turn off electricity</strong> - If water is near electrical fixtures</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
              <h3 className="font-bold text-red-700 mb-4">Don&apos;t Do This:</h3>
              <ul className="space-y-3 text-red-800">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-red-600">✕</span>
                  <span>Don&apos;t climb on the roof - leave it to professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-red-600">✕</span>
                  <span>Don&apos;t sign anything with storm chasers who show up unsolicited</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-red-600">✕</span>
                  <span>Don&apos;t attempt DIY repairs that could worsen the situation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-red-600">✕</span>
                  <span>Don&apos;t wait to call your insurance company</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Help */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              We Help with Insurance Claims
            </h2>
            <p className="text-gray mb-8">
              Emergency roof damage is stressful enough. We work directly with your
              insurance company, document all damage thoroughly, and help ensure you
              receive fair compensation for repairs.
            </p>
            <Link href="/guides/insurance-claim-guide" className="btn btn-outline">
              Read Our Insurance Claim Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Pricing Transparency */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <DollarSign className="w-8 h-8 text-primary" aria-hidden="true" />
              <h2 className="text-3xl font-bold text-primary">
                Emergency Roof Repair Pricing Charlotte NC
              </h2>
            </div>
            <p className="text-gray max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. We provide upfront estimates before any work begins.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {emergencyPricing.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
                <h3 className="font-bold text-primary mb-1">{item.service}</h3>
                <div className="text-2xl font-bold text-red-600 mb-2">{item.priceRange}</div>
                <p className="text-gray text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray text-sm mt-6">
            * Prices are estimates. Final pricing depends on roof size, damage extent, and materials needed.
            Free estimates provided before work begins.
          </p>
        </div>
      </section>

      {/* Neighborhood Response Times */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-primary" aria-hidden="true" />
              <h2 className="text-3xl font-bold text-primary">
                Emergency Response Times by Charlotte Neighborhood
              </h2>
            </div>
            <p className="text-gray max-w-2xl mx-auto">
              Based from our University City headquarters, we serve all Charlotte neighborhoods with fast emergency response.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {neighborhoodResponseTimes.map((area, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
                <h3 className="font-bold text-primary text-sm mb-1">{area.name}</h3>
                <div className="text-lg font-bold text-red-600">{area.responseTime}</div>
                <p className="text-gray text-xs">{area.distance} from HQ</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray text-sm mt-6">
            Response times may vary during severe weather events affecting multiple properties.
          </p>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin className="w-8 h-8 text-primary" aria-hidden="true" />
              <h2 className="text-3xl font-bold text-primary">
                24/7 Emergency Roof Repair Areas We Serve
              </h2>
            </div>
            <p className="text-gray max-w-2xl mx-auto">
              We provide emergency roofing services throughout Charlotte and the surrounding metro area.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h3 className="font-bold text-primary text-lg mb-4 text-center">Charlotte Neighborhoods</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {charlotteNeighborhoods.map((neighborhood, idx) => (
                  <span
                    key={idx}
                    className="bg-light text-primary text-sm px-3 py-1 rounded-full border border-gray-200"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-primary text-lg mb-4 text-center">Surrounding Cities</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {surroundingCities.map((city, idx) => (
                  <Link
                    key={idx}
                    href={`/locations/${city.toLowerCase().replace(/\s+/g, '-')}-nc`}
                    className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {city}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="w-8 h-8 text-primary" aria-hidden="true" />
              <h2 className="text-3xl font-bold text-primary">
                Emergency Roof Repair FAQs - Charlotte NC
              </h2>
            </div>
            <p className="text-gray max-w-2xl mx-auto">
              Common questions about our 24/7 emergency roofing services in Charlotte.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {emergencyFaqs.map((faq, idx) => (
              <details
                key={idx}
                className="bg-white rounded-xl shadow-md border border-gray-100 group"
              >
                <summary className="p-5 cursor-pointer font-bold text-primary hover:text-primary/80 list-none flex items-start justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="text-2xl font-light text-gray group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-gray">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-red-600 text-white">
        <div className="container text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-4 animate-pulse" aria-hidden="true" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Roof Emergency? Call Now!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don&apos;t wait for the damage to get worse. Our emergency team is standing
            by 24/7 to protect your home.
          </p>
          <a
            href={`tel:${SITE_CONFIG.phoneClean}`}
            className="btn bg-white text-red-600 hover:bg-gray-100 text-xl px-12 py-4"
          >
            <Phone className="w-6 h-6" aria-hidden="true" />
            {SITE_CONFIG.phone}
          </a>
          <p className="mt-4 text-white/70 text-sm">
            Average response time: 1-2 hours
          </p>
        </div>
      </section>
    </>
  );
}
