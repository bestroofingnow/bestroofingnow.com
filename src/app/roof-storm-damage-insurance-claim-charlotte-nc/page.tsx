import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Shield,
  CheckCircle,
  Phone,
  Calendar,
  AlertTriangle,
  Camera,
  FileText,
  Clock,
  Users,
  Wrench,
  Star,
  ArrowRight,
  HelpCircle,
  CloudRain,
  CloudLightning,
  TreePine,
  Droplets,
  Award,
  Search,
  BadgeCheck,
  CircleDollarSign,
  XCircle,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { getRoofingContractorIdentity } from '@/lib/schema-helpers';
import { IMAGES } from '@/lib/images';
import EstimateButton from '@/components/estimate/EstimateButton';

export const metadata: Metadata = {
  title: 'Roof Storm Damage Insurance Claim Charlotte NC | Free Inspection',
  description:
    'Step-by-step guide to filing a roof storm damage insurance claim in Charlotte NC. Hail damage, wind damage, emergency roof repair. FREE inspections from BBB A+ rated contractor. We work with your insurance company.',
  keywords: [
    'roof storm damage insurance claim',
    'hail damage roof insurance',
    'roof insurance claim tips',
    'storm damage roof repair Charlotte NC',
    'emergency roof repair Charlotte',
    'how to file roof insurance claim',
    'wind damage roof repair',
    'roof damage from storm what to do',
    'roof insurance claim process Charlotte NC',
    'hail damage roof repair Charlotte NC',
    'storm damage roofing contractor Charlotte',
    'insurance claim roofing Charlotte NC',
    'roof damage inspection Charlotte NC',
    'Charlotte NC storm damage specialist',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-storm-damage-insurance-claim-charlotte-nc`,
  },
  openGraph: {
    title: 'Roof Storm Damage Insurance Claim Charlotte NC | Free Inspection',
    description:
      'Complete guide to filing roof storm damage insurance claims in Charlotte NC. Free inspections, insurance assistance, and expert storm damage repair from Best Roofing Now.',
    url: `${SITE_CONFIG.url}/roof-storm-damage-insurance-claim-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero14,
        width: 1200,
        height: 630,
        alt: 'Storm damage roof repair and insurance claims Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

const stormFAQs = [
  {
    question: 'How do I file a roof insurance claim after storm damage in Charlotte NC?',
    answer:
      'Start by documenting the damage with photos and videos from ground level. Contact your insurance company within 48 hours to open a claim. Then schedule a free professional roof inspection with Best Roofing Now. We provide a detailed damage report that supports your claim, can meet with the adjuster on-site, and help you navigate the entire process from filing to final repair. Our storm damage specialists have helped hundreds of Charlotte homeowners maximize their insurance coverage.',
  },
  {
    question: 'Does homeowners insurance cover storm damage to my roof?',
    answer:
      'Yes, most homeowners insurance policies in Charlotte NC cover roof damage caused by storms, hail, wind, falling trees, and lightning. Coverage typically includes repair or replacement of damaged roofing materials, damaged decking, and related water damage to the interior. However, insurance does not cover damage from neglect, normal wear and tear, or pre-existing conditions. Best Roofing Now provides free inspections and helps determine what damage is storm-related and covered by your policy.',
  },
  {
    question: 'How long do I have to file a roof damage insurance claim in North Carolina?',
    answer:
      'In North Carolina, most insurance policies require you to report storm damage promptly, typically within one year of the event. However, we strongly recommend contacting your insurance company within 48 hours of discovering damage. Delays can complicate your claim and give insurers reason to dispute the timeline. Best Roofing Now can inspect your roof the same day or next day after a storm to help you meet these deadlines.',
  },
  {
    question: 'What does hail damage look like on a roof?',
    answer:
      'Hail damage on asphalt shingles appears as dark spots or dents where granules have been knocked off, exposing the black asphalt underneath. You may also see cracked or bruised shingles, dented metal flashing, damaged gutters with dimples or dents, and cracked vent covers. Hail damage is often difficult to spot from the ground, which is why a professional inspection is essential. Best Roofing Now offers free hail damage inspections using both ladder access and drone technology for a thorough assessment.',
  },
  {
    question: 'Will my insurance rates go up if I file a roof damage claim?',
    answer:
      'Filing a single storm damage claim generally does not cause a significant rate increase in North Carolina, especially when the damage is from a widespread weather event like a hailstorm or hurricane. Insurance companies expect storm claims in Charlotte due to the region\'s weather patterns. However, filing multiple claims within a short period can impact your rates. Best Roofing Now helps you understand whether a claim makes financial sense based on your deductible and the extent of damage.',
  },
  {
    question: 'How much does storm damage roof repair cost in Charlotte NC?',
    answer:
      'Storm damage roof repair in Charlotte ranges from $500 to $1,500 for minor wind damage or localized hail damage, $1,500 to $5,000 for moderate damage affecting multiple areas, and $8,500 to $15,000+ for a full replacement when storm damage is extensive. Most storm damage repairs are covered by insurance minus your deductible, which is typically $1,000 to $2,500 for most Charlotte homeowners. Best Roofing Now provides free inspections and works directly with your insurer.',
  },
  {
    question: 'Should I get a roof inspection after every storm in Charlotte?',
    answer:
      'You should get a professional roof inspection after any severe storm that produces hail larger than a quarter (1 inch), wind gusts exceeding 60 mph, or if you notice visible debris or damage to neighboring properties. Charlotte averages 3-5 significant hail events per year, so periodic post-storm inspections are important preventive maintenance. Best Roofing Now offers free post-storm inspections with no obligation, and catching damage early protects both your home and your insurance claim timeline.',
  },
  {
    question: 'Can I choose my own roofing contractor for an insurance claim?',
    answer:
      'Absolutely. In North Carolina, you have the legal right to choose any licensed roofing contractor for insurance claim work. Your insurance company cannot require you to use their preferred contractor. Choosing a storm damage specialist like Best Roofing Now ensures you get a contractor experienced in insurance documentation, proper damage assessment, and working alongside adjusters. We handle the paperwork, meet with adjusters, and advocate for fair coverage on your behalf.',
  },
  {
    question: 'What should I do if my insurance claim is denied?',
    answer:
      'If your roof damage insurance claim is denied, do not accept the decision immediately. Request a written explanation of the denial, then have an independent inspection done by a certified roofing contractor like Best Roofing Now. We can provide a detailed supplemental damage report with photographic evidence that may not have been captured during the original adjuster visit. You can file an appeal with your insurance company, request a re-inspection, or contact the North Carolina Department of Insurance for assistance.',
  },
  {
    question: 'How quickly can Best Roofing Now respond to storm damage in Charlotte?',
    answer:
      'Best Roofing Now offers 24/7 emergency storm damage response throughout the Charlotte metro area. For active leaks or exposed roof areas, we can typically perform emergency tarping within 1-4 hours. For non-emergency storm damage inspections, we can usually schedule within 24-48 hours after a storm event. Our emergency line is (704) 605-6047. As a local, family-owned company, we prioritize Charlotte-area homeowners during storm season.',
  },
];

function StormDamageServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Storm Damage Roof Insurance Claim Assistance - Charlotte NC',
    description:
      'Expert storm damage roof repair and insurance claim assistance in Charlotte NC. Free inspections, insurance documentation, adjuster meetings, and complete repair services for hail, wind, and storm damage.',
    provider: {
      ...getRoofingContractorIdentity(),
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: SITE_CONFIG.googleRating,
        reviewCount: SITE_CONFIG.googleReviewCount,
        bestRating: 5,
        worstRating: 1,
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Charlotte, NC',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Storm Damage & Insurance Claim Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Free Storm Damage Roof Inspection',
          description: 'Complimentary professional inspection after storm events with detailed damage report',
          price: '0',
          priceCurrency: 'USD',
        },
        {
          '@type': 'Offer',
          name: 'Hail Damage Roof Repair',
          description: 'Expert repair of hail-damaged shingles, flashing, and roofing components',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '500',
            maxPrice: '15000',
            unitText: 'per project',
          },
        },
        {
          '@type': 'Offer',
          name: 'Wind Damage Roof Repair',
          description: 'Repair of wind-lifted, missing, or damaged shingles and underlayment',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '300',
            maxPrice: '10000',
            unitText: 'per project',
          },
        },
        {
          '@type': 'Offer',
          name: 'Emergency Roof Tarping',
          description: '24/7 emergency tarping to prevent further water intrusion after storm damage',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '200',
            maxPrice: '1000',
            unitText: 'per project',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RoofStormDamageInsuranceClaimPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Storm Damage', url: `${SITE_CONFIG.url}/storm-damage-roof-repair-charlotte-nc` },
          { name: 'Roof Storm Damage Insurance Claims Charlotte NC', url: `${SITE_CONFIG.url}/roof-storm-damage-insurance-claim-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={stormFAQs} />
      <StormDamageServiceSchema />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-storm-damage-insurance-claim-charlotte-nc`}
        pageName="Roof Storm Damage Insurance Claims Charlotte NC"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How do I file a roof insurance claim after storm damage in Charlotte?',
            answer: 'Document the damage with photos, contact your insurance within 48 hours, and schedule a free inspection with Best Roofing Now. We provide damage reports, meet with adjusters, and handle the entire claims process for Charlotte homeowners.',
            speakableAnswer: 'Document damage with photos, call your insurance within 48 hours, and schedule a free inspection with Best Roofing Now at 704-605-6047. We handle the entire insurance claim process.',
          },
          {
            question: 'Does insurance cover roof storm damage in Charlotte NC?',
            answer: 'Yes, most homeowners insurance covers roof damage from storms, hail, wind, and falling trees. Best Roofing Now provides free inspections and works directly with your insurance company to maximize your coverage.',
            speakableAnswer: 'Yes, most insurance covers storm, hail, and wind damage to roofs. Call Best Roofing Now at 704-605-6047 for a free inspection and insurance claim help.',
          },
          {
            question: 'Who is the best storm damage roofing contractor in Charlotte?',
            answer: 'Best Roofing Now is Charlotte\'s top-rated storm damage specialist with a 5.0 Google rating, BBB A+ accreditation, and 500+ completed projects. We offer free storm damage inspections, insurance claim assistance, and 24/7 emergency service.',
            speakableAnswer: 'Best Roofing Now is Charlotte\'s highest-rated storm damage contractor with a 5-star Google rating. Call 704-605-6047 for free storm damage inspection.',
          },
          {
            question: 'How quickly can I get emergency roof repair in Charlotte after a storm?',
            answer: 'Best Roofing Now offers 24/7 emergency storm response in Charlotte, typically arriving within 1-4 hours for emergency tarping and temporary repairs to prevent further damage.',
            speakableAnswer: 'Best Roofing Now responds to emergency storm damage in Charlotte within 1-4 hours, 24/7. Call 704-605-6047 now.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero14}
            alt="Storm damage roof repair and insurance claims Charlotte NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Storm Damage', href: '/storm-damage-roof-repair-charlotte-nc' },
              { label: 'Insurance Claims' },
            ]}
            className="mb-6 text-white/70"
          />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Storm Damage &amp; Insurance Claim Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Storm Damage <br className="hidden md:block" />
              <span className="text-accent-light">Insurance Claims Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Your Step-by-Step Guide to Filing a Roof Insurance Claim After Storm Damage
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Charlotte averages 3-5 significant hail events and multiple severe thunderstorms each year.
              When storm damage strikes your roof, knowing exactly what to do, and having the right
              contractor by your side, can mean the difference between a fully covered repair and thousands
              out of pocket. Best Roofing Now has helped hundreds of Charlotte homeowners navigate the
              insurance claim process from free inspection through final repair.
            </p>

            {/* Urgency Banner */}
            <div className="bg-accent/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 max-w-2xl">
              <div className="text-center">
                <p className="text-lg text-white/90 mb-1">After Storm Damage, Act Fast</p>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Report Damage Within 48 Hours
                </div>
                <p className="text-lg text-white/80">
                  Free inspection &bull; Insurance documentation &bull; 24/7 emergency response
                </p>
                <div className="flex items-center justify-center gap-4 mt-4 text-sm text-white/70">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                    Free Inspections
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                    Insurance Assistance
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                    24/7 Emergency
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Free Storm Inspection
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Emergency: {SITE_CONFIG.phone}
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                {SITE_CONFIG.googleRating} Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB {SITE_CONFIG.bbbRating} Rated
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                {SITE_CONFIG.customerCount}+ Projects Completed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Insurance Claim Process */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-semibold">Insurance Claim Guide</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How to File a Roof Storm Damage Insurance Claim
            </h2>
            <p className="text-gray text-lg">
              Filing a roof insurance claim after storm damage does not have to be overwhelming. Follow
              these six steps to protect your home, maximize your coverage, and get your roof repaired
              properly. Best Roofing Now guides Charlotte homeowners through every step of this process
              at no additional cost.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                1
              </div>
              <div className="flex-1 bg-light rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Camera className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-dark">Document the Damage Immediately</h3>
                </div>
                <p className="text-gray mb-3">
                  As soon as it is safe to go outside after a storm, begin documenting any visible damage.
                  Take wide-angle photos of your entire roof from multiple angles, close-up photos of any
                  visible damage to shingles, gutters, flashing, or vents, and photos of any debris or fallen
                  branches on your property. Document damage to siding, windows, and outdoor structures as well,
                  since these items support the severity of the storm event. Record the date and time, and write
                  notes describing what you observe. Do not climb on the roof yourself &mdash; ground-level photos
                  and photos from upper-story windows are sufficient for the initial report.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm font-semibold text-dark mb-2">Documentation Checklist:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Wide-angle roof photos from each side
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Close-ups of visible damage
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Gutter and downspout damage
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Interior water stains or leaks
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Fallen debris on property
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Date, time, and written notes
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                2
              </div>
              <div className="flex-1 bg-light rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-dark">Contact Your Insurance Company Within 48 Hours</h3>
                </div>
                <p className="text-gray">
                  Call your homeowners insurance company as soon as possible, ideally within 48 hours of
                  the storm. Provide your policy number, the date of the storm, and a general description
                  of the damage you observed. Ask for a claim number and the name of the adjuster who will
                  be assigned to your case. Do not sign any contracts or agree to any repairs until after your
                  professional inspection and adjuster visit. Your insurance company will schedule an adjuster
                  to visit your property, typically within 5-14 business days, though this timeline can stretch
                  after major storm events that affect many homes simultaneously.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                3
              </div>
              <div className="flex-1 bg-light rounded-xl p-6 border-2 border-accent/20">
                <div className="flex items-center gap-2 mb-2">
                  <Search className="w-5 h-5 text-accent" />
                  <h3 className="text-xl font-bold text-dark">Get a FREE Professional Roof Inspection</h3>
                </div>
                <p className="text-gray mb-3">
                  Before the insurance adjuster arrives, schedule a free professional inspection with
                  Best Roofing Now. Our certified inspectors use both ladder access and drone technology to
                  thoroughly assess every square foot of your roof. We document all storm damage with high-resolution
                  photos, measure affected areas, and prepare a detailed inspection report. This independent
                  report serves as critical evidence for your insurance claim and ensures no damage is missed
                  during the adjuster&apos;s visit. Our inspection is completely free with no obligation &mdash;
                  even if you choose another contractor for the actual repairs.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="sm"
                    icon={<Calendar className="w-4 h-4" aria-hidden="true" />}
                  >
                    Schedule Free Inspection
                  </Button>
                  <Button
                    href={`tel:${SITE_CONFIG.phoneClean}`}
                    variant="outline"
                    size="sm"
                    icon={<Phone className="w-4 h-4" aria-hidden="true" />}
                  >
                    Call {SITE_CONFIG.phone}
                  </Button>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                4
              </div>
              <div className="flex-1 bg-light rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-dark">Meet with the Insurance Adjuster</h3>
                </div>
                <p className="text-gray">
                  When the insurance adjuster visits your property, Best Roofing Now can be there with you.
                  Our storm damage specialist will walk the roof alongside the adjuster, point out all documented
                  damage areas, and ensure nothing is overlooked. Adjusters are often under time pressure and
                  may miss damage that is not immediately visible, especially on the back side of the roof or
                  in hard-to-reach areas. Having your contractor present ensures a thorough and fair assessment.
                  We share our inspection report and supporting photos directly with the adjuster, which typically
                  results in a more complete and accurate damage estimate.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                5
              </div>
              <div className="flex-1 bg-light rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-dark">Review the Insurance Settlement</h3>
                </div>
                <p className="text-gray">
                  Once the adjuster completes their assessment, your insurance company will send a settlement
                  offer, sometimes called the &ldquo;scope of loss.&rdquo; Review this document carefully with
                  your roofing contractor before accepting. Best Roofing Now compares the insurance estimate
                  against our own inspection report to verify all damage is accounted for. If the settlement
                  is insufficient, we help you file a supplement with additional documentation. Many initial
                  estimates undervalue the true scope of repair, and filing a well-supported supplement is a
                  normal and expected part of the process. We handle this paperwork at no charge to you.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                6
              </div>
              <div className="flex-1 bg-light rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Wrench className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-dark">Choose Your Contractor and Begin Repairs</h3>
                </div>
                <p className="text-gray">
                  With your insurance settlement approved, choose a licensed, insured contractor to perform
                  the repairs. Best Roofing Now coordinates directly with your insurance company on scheduling,
                  material specifications, and payment. We use only manufacturer-certified materials and our
                  work is backed by both material and workmanship warranties. Most storm damage repairs are
                  completed within 1-3 days, and your only out-of-pocket cost is typically your insurance
                  deductible. We handle the entire project from material ordering through final inspection and
                  cleanup, so you can focus on getting back to normal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <CTASection
        title="Storm Damage? Get a FREE Roof Inspection Today"
        subtitle="Our certified inspectors will assess your roof, document all damage, and provide a detailed report to support your insurance claim. No obligation, no pressure."
      />

      {/* Types of Storm Damage */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <CloudLightning className="w-4 h-4" />
              <span className="text-sm font-semibold">Types of Storm Damage</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Types of Storm Damage Covered by Insurance
            </h2>
            <p className="text-gray text-lg">
              Charlotte NC experiences a wide range of severe weather events throughout the year. Understanding
              the different types of storm damage helps you identify problems quickly and strengthens your
              insurance claim. Here are the most common types of storm damage we repair for Charlotte homeowners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Hail Damage */}
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-t-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CloudRain className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Hail Damage</h3>
              <p className="text-sm text-accent font-semibold mb-3">Most Common in Charlotte</p>
              <p className="text-gray text-sm mb-4">
                Charlotte and the surrounding Piedmont region experience frequent hailstorms, especially during
                spring and early summer. Hail as small as 1 inch can cause significant damage to asphalt shingles.
              </p>
              <ul className="space-y-2 text-gray text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>Dented or bruised shingles with granule loss</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>Cracked or fractured shingle surfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>Dented metal flashing, gutters, and vents</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>Damaged or cracked vent covers and skylights</span>
                </li>
              </ul>
              <Link href="/hail-damage-roof-repair-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1 mt-4">
                Hail Damage Repair <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Wind Damage */}
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-t-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <CloudLightning className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Wind Damage</h3>
              <p className="text-sm text-accent font-semibold mb-3">Thunderstorms &amp; Hurricanes</p>
              <p className="text-gray text-sm mb-4">
                Severe thunderstorms and tropical systems bring damaging straight-line winds and occasional
                tornadoes to the Charlotte area. Winds exceeding 60 mph can lift, curl, or completely remove
                shingles from your roof.
              </p>
              <ul className="space-y-2 text-gray text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Lifted, curled, or creased shingles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Missing shingles exposing underlayment or decking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Damaged or detached ridge caps and hip shingles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Loose or torn flashing around chimneys and walls</span>
                </li>
              </ul>
              <Link href="/wind-damage-roof-repair-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1 mt-4">
                Wind Damage Repair <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Fallen Tree / Debris */}
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-t-4 border-amber-500">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <TreePine className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Fallen Tree &amp; Debris Damage</h3>
              <p className="text-sm text-accent font-semibold mb-3">Impact &amp; Structural Damage</p>
              <p className="text-gray text-sm mb-4">
                Charlotte&apos;s heavily wooded neighborhoods mean falling trees and large branches are a
                common cause of severe roof damage during storms. Even smaller limbs can puncture shingles
                or damage flashing on impact.
              </p>
              <ul className="space-y-2 text-gray text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Punctured or crushed roofing sections</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Damaged roof decking and structural rafters</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Crushed gutters, fascia, and soffit boards</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Immediate water intrusion requiring emergency tarping</span>
                </li>
              </ul>
              <Link href="/tree-damage-roof-repair-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1 mt-4">
                Tree Damage Repair <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Heavy Rain / Water Damage */}
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-t-4 border-purple-500">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Heavy Rain &amp; Water Damage</h3>
              <p className="text-sm text-accent font-semibold mb-3">Leaks &amp; Water Intrusion</p>
              <p className="text-gray text-sm mb-4">
                Charlotte receives an average of 43 inches of rain per year, and intense thunderstorms can
                dump several inches in a matter of hours. This volume of water exploits any weakness in your
                roofing system and causes immediate interior damage.
              </p>
              <ul className="space-y-2 text-gray text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>Active roof leaks and ceiling water stains</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>Overflowed or separated gutter systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>Compromised flashing and valley seals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>Attic moisture, mold growth, and insulation damage</span>
                </li>
              </ul>
              <Link href="/emergency-roof-repair-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1 mt-4">
                Emergency Repair <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Signs of Storm Damage You Might Miss */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-4">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-sm font-semibold">Hidden Damage Warning</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Signs of Storm Damage You Might Miss
              </h2>
              <p className="text-gray text-lg mb-6">
                Not all storm damage is visible from the ground. Many Charlotte homeowners do not realize
                their roof has been compromised until months later when a secondary leak develops or the
                damage has worsened significantly. These hidden indicators of storm damage are exactly what our
                professional inspections are designed to catch. If you notice any of the following after a storm,
                schedule a free inspection immediately.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Granules Collecting in Gutters</strong>
                    <p className="text-gray text-sm">
                      Black, sand-like material in your gutters or at the base of downspouts indicates hail has
                      stripped protective granules from your shingles, shortening their lifespan dramatically.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Dents on Metal Components</strong>
                    <p className="text-gray text-sm">
                      Check your mailbox, air conditioning unit, and metal fence posts. If they show dents from hail,
                      your roof almost certainly sustained damage as well.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Cracked or Chipped Window Screens</strong>
                    <p className="text-gray text-sm">
                      Damaged window screens are a reliable indicator of hail size and impact force that likely
                      affected your roof as well.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Ceiling Stains or Bubbling Paint</strong>
                    <p className="text-gray text-sm">
                      Brown water stains or paint bubbling on interior ceilings often indicate a slow leak that
                      started during a storm and has been worsening over time.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Neighbor&apos;s Roof Being Replaced</strong>
                    <p className="text-gray text-sm">
                      If neighbors are getting insurance-covered roof replacements after a storm, your roof likely
                      experienced the same hail or wind damage and should be inspected.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.services.stormDamage}
                alt="Storm damage inspection in Charlotte NC - hidden roof damage signs"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Search className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-dark">Free Inspections</p>
                    <p className="text-sm text-gray">Drone &amp; Ladder Access</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Insurance Covers vs Doesn't Cover */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <CircleDollarSign className="w-4 h-4" />
              <span className="text-sm font-semibold">Coverage Guide</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Roof Insurance Typically Covers vs. What It Does Not
            </h2>
            <p className="text-gray text-lg">
              Understanding your policy coverage before you file a claim helps set realistic expectations
              and prevents surprises. Most standard homeowners policies in Charlotte cover sudden, accidental
              damage from weather events but exclude gradual deterioration. Here is a general overview, though
              specific coverage varies by policy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Covered */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Typically Covered
              </h3>
              <ul className="space-y-3 text-gray text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Hail damage to shingles, flashing, and gutters</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Wind damage including missing or lifted shingles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Fallen tree or branch impact damage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Lightning strike damage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Interior water damage caused by a covered roof event</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Emergency tarping and temporary repairs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Full roof replacement when damage exceeds repair thresholds</span>
                </li>
              </ul>
            </div>

            {/* Not Covered */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500" />
                Typically NOT Covered
              </h3>
              <ul className="space-y-3 text-gray text-sm">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Normal wear and tear or aging of roofing materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Poor maintenance or neglected repairs</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Pre-existing damage before the storm event</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Cosmetic damage that does not affect roof function</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Flood damage (requires separate flood insurance)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Faulty installation or contractor workmanship issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Roof upgrades or improvements beyond restoring original condition</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-primary/5 rounded-xl p-6 text-center">
              <p className="text-gray">
                <strong className="text-dark">Not sure if your damage is covered?</strong> Best Roofing Now
                provides a free assessment and honest opinion on whether filing a claim makes financial sense based on
                your specific damage and deductible. We never pressure you to file a claim if the damage does not warrant it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Charlotte Storm Data */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <CloudLightning className="w-4 h-4" />
              <span className="text-sm font-semibold">Charlotte Weather Data</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Charlotte Roofs Need Storm Damage Protection
            </h2>
            <p className="text-gray text-lg">
              Charlotte sits in one of the most storm-active regions in the Southeast. The Piedmont area&apos;s
              geography creates conditions that produce severe thunderstorms, hail, and high winds throughout
              much of the year. Understanding Charlotte&apos;s storm patterns helps you stay prepared and act
              quickly when damage occurs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            <div className="p-6 bg-light rounded-xl text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CloudRain className="w-7 h-7 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary mb-1">3&ndash;5</p>
              <p className="text-gray text-sm font-medium">Significant Hail Events Per Year</p>
            </div>
            <div className="p-6 bg-light rounded-xl text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CloudLightning className="w-7 h-7 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary mb-1">40&ndash;50</p>
              <p className="text-gray text-sm font-medium">Thunderstorm Days Annually</p>
            </div>
            <div className="p-6 bg-light rounded-xl text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-7 h-7 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary mb-1">43&Prime;</p>
              <p className="text-gray text-sm font-medium">Average Annual Rainfall</p>
            </div>
            <div className="p-6 bg-light rounded-xl text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-7 h-7 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary mb-1">Jun&ndash;Nov</p>
              <p className="text-gray text-sm font-medium">Hurricane Season Risk Window</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-light rounded-xl p-8">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte&apos;s Storm Season Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-24 font-bold text-primary text-sm">Mar &ndash; May</span>
                  <p className="text-gray text-sm">
                    <strong className="text-dark">Spring Severe Weather:</strong> Strong thunderstorms with hail and damaging winds.
                    This is the most active period for hail damage in Charlotte, with hailstones frequently exceeding 1 inch in diameter.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-24 font-bold text-primary text-sm">Jun &ndash; Aug</span>
                  <p className="text-gray text-sm">
                    <strong className="text-dark">Summer Storms:</strong> Afternoon pop-up thunderstorms with heavy rain, lightning, and
                    occasional microbursts. High heat also accelerates wear on existing roof damage. Early hurricane season begins in June.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-24 font-bold text-primary text-sm">Sep &ndash; Nov</span>
                  <p className="text-gray text-sm">
                    <strong className="text-dark">Hurricane Season Peak:</strong> Tropical systems bring sustained high winds and
                    torrential rain. While Charlotte is 200+ miles inland, weakened hurricanes and tropical storms still cause significant
                    roof damage. Falling trees are the biggest concern during these events.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-24 font-bold text-primary text-sm">Dec &ndash; Feb</span>
                  <p className="text-gray text-sm">
                    <strong className="text-dark">Winter Ice Events:</strong> Ice storms and freezing rain create ice dams on roofs,
                    causing water backup under shingles. Charlotte typically sees 1-3 significant winter weather events per year that can
                    damage roofing systems.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/charlotte-storm-season-roof-guide"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
                >
                  Read our Complete Charlotte Storm Season Roof Guide <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work with a Storm Damage Specialist */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Work with a Storm Damage Specialist Contractor
            </h2>
            <p className="text-gray text-lg">
              Not every roofing contractor has the experience, documentation skills, and insurance knowledge needed
              to maximize your storm damage claim. Choosing the wrong contractor can leave money on the table or
              result in substandard repairs. Here is what sets a storm damage specialist apart from a general roofer.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Camera className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Professional Documentation</h3>
              <p className="text-gray text-sm">
                Detailed damage reports with high-resolution photos, measurements, and technical descriptions that
                insurance adjusters need to approve full coverage. We speak the language adjusters understand.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Adjuster Meeting Support</h3>
              <p className="text-gray text-sm">
                We meet with adjusters on your behalf, walk the roof together, and ensure all damage is
                documented and accounted for in the settlement. This often results in a more comprehensive
                and fair claim payout.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Supplement Filing</h3>
              <p className="text-gray text-sm">
                If the initial settlement does not cover the full scope of repair, we file detailed supplements
                with supporting evidence. Supplements are a normal, expected part of the claims process and often
                recover additional funds.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Licensed &amp; Insured</h3>
              <p className="text-gray text-sm">
                Fully licensed, bonded, and insured with comprehensive liability and workers compensation coverage.
                Your insurance company requires your contractor to carry proper coverage, and we exceed minimum requirements.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <BadgeCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Manufacturer Certified</h3>
              <p className="text-gray text-sm">
                CertainTeed ShingleMaster and GAF Factory-Certified means we install roofing materials according
                to exact manufacturer specifications, preserving your product warranty and meeting insurance requirements.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">24/7 Emergency Response</h3>
              <p className="text-gray text-sm">
                Storms do not wait for business hours. Our emergency crews are available around the clock for tarping
                and temporary repairs to prevent further damage. Prompt response also strengthens your insurance claim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Best Roofing Now */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Charlotte Homeowners Trust Best Roofing Now for Storm Damage Claims
            </h2>
            <p className="text-gray text-lg">
              Over {SITE_CONFIG.customerCount} completed projects and a perfect 5.0 Google rating. Here is what sets us apart when it comes to storm damage and insurance claims.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-light rounded-xl hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">5.0 Google Rating</h3>
              <p className="text-gray text-sm">{SITE_CONFIG.googleReviewCount}+ five-star reviews from Charlotte homeowners who trusted us with their storm damage repairs.</p>
            </div>
            <div className="p-6 bg-light rounded-xl hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">BBB A+ &amp; Veteran-Owned</h3>
              <p className="text-gray text-sm">BBB A+ accredited, veteran-owned, and family-operated. We bring military-grade discipline to every project.</p>
            </div>
            <div className="p-6 bg-light rounded-xl hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CircleDollarSign className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Free Inspections</h3>
              <p className="text-gray text-sm">100% free storm damage inspections with detailed reports. No obligation, no pressure, no hidden fees.</p>
            </div>
            <div className="p-6 bg-light rounded-xl hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Insurance Experts</h3>
              <p className="text-gray text-sm">Hundreds of successful insurance claims processed. We handle documentation, adjuster meetings, and supplements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Storm Damage Insurance Claim FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to the most common questions about filing roof storm damage insurance claims in Charlotte NC.
              </p>
            </div>
            <div className="space-y-4">
              {stormFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Related Storm Damage &amp; Insurance Resources
            </h2>
            <p className="text-gray">
              Explore more storm damage repair, emergency roofing, and insurance claim resources for Charlotte and surrounding areas.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/storm-damage-roof-repair-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Storm Damage Repair <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/hail-damage-roof-repair-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Hail Damage Repair <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/wind-damage-roof-repair-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Wind Damage Repair <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/emergency-roof-repair-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Emergency Roof Repair <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/insurance-claim-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Insurance Claim Roofing <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/tree-damage-roof-repair-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Tree Damage Repair <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/hurricane-damage-roof-repair-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Hurricane Damage Repair <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/what-to-do-after-hail-storm-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              After a Hail Storm Guide <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/charlotte-storm-season-roof-guide"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Storm Season Roof Guide <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/charlotte-roofing-costs-2026"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Roofing Costs 2026 <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/emergency-roof-tarping"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Emergency Roof Tarping <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/ice-storm-damage-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Ice Storm Damage <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="guide"
        city="Charlotte"
        slug="roof-storm-damage-insurance-claim-charlotte-nc"
        count={4}
        title="Recent Storm Damage Repair Projects in Charlotte, NC"
        subtitle="Browse completed storm damage roof repairs from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roof-storm-damage-insurance-claim-charlotte-nc`}
      />

      {/* Final CTA */}
      <CTASection
        title="Storm Damage? We Handle Everything."
        subtitle="Free inspection, insurance documentation, adjuster support, and expert repairs. Best Roofing Now is Charlotte's trusted storm damage specialist. Call now for 24/7 emergency response."
      />
    </>
  );
}
