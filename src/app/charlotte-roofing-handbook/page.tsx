import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  BookOpen,
  ArrowRight,
  CheckCircle,
  Phone,
  Shield,
  Star,
  Home,
  Layers,
  AlertTriangle,
  Wrench,
  DollarSign,
  Search,
  Calendar,
  ThermometerSun,
  Droplets,
  Wind,
  Award,
  FileText,
  Hammer,
  ClipboardCheck,
  Sun,
  Snowflake,
  Leaf,
  CloudRain,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { FAQ } from '@/components/sections/FAQ';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  LocalBusinessSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
  ItemListSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DirectoryCitations } from '@/components/ui/DirectoryCitations';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { EstimateButton } from '@/components/estimate';

export const metadata: Metadata = {
  title: 'Charlotte Roofing Handbook (2026) | Complete Homeowner Guide',
  description:
    'The complete Charlotte homeowner roofing guide for 2026. Learn about roof anatomy, materials, repairs, replacement, costs, insurance claims, financing, and seasonal maintenance. Expert advice from certified Charlotte roofers.',
  keywords: [
    'roofing guide Charlotte NC',
    'Charlotte roofing homeowner guide',
    'Charlotte roofing handbook 2026',
    'roof replacement guide Charlotte',
    'roofing materials Charlotte NC',
    'roof repair guide Charlotte',
    'Charlotte roof maintenance checklist',
    'how to choose roofer Charlotte NC',
    'roofing costs Charlotte NC',
    'Charlotte homeowner roof guide',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/charlotte-roofing-handbook`,
  },
  openGraph: {
    title: 'Charlotte Roofing Handbook (2026) | Complete Homeowner Guide',
    description:
      'Everything Charlotte homeowners need to know about their roof in 2026. Materials, repairs, replacement, costs, insurance, and year-round maintenance from certified local roofers.',
    url: `${SITE_CONFIG.url}/charlotte-roofing-handbook`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero5,
        width: 1200,
        height: 630,
        alt: 'Charlotte Roofing Handbook - Complete homeowner guide by Best Roofing Now',
      },
    ],
  },
};

// Handbook FAQ data
const handbookFAQs = [
  {
    question: 'How long does a roof last in Charlotte NC?',
    answer:
      'Roof lifespan in Charlotte depends on the material. Asphalt shingles typically last 20-30 years, architectural shingles 25-35 years, metal roofing 40-70 years, slate 75-100+ years, and cedar shake 20-40 years. Charlotte\'s hot summers, high humidity, and frequent storms can shorten lifespan if the roof is not properly ventilated and maintained. Regular inspections after severe weather are critical for maximizing your roof\'s life.',
  },
  {
    question: 'How much does a new roof cost in Charlotte in 2026?',
    answer:
      'In 2026, a new asphalt shingle roof in Charlotte typically costs between $8,000 and $18,000 for an average-sized home (1,500-2,500 sq ft). Metal roofing ranges from $15,000 to $35,000, while premium materials like slate or copper can exceed $40,000. Factors affecting cost include roof size, pitch, complexity, number of layers to remove, and material choice. Best Roofing Now provides free, no-obligation estimates with transparent pricing.',
  },
  {
    question: 'Does homeowners insurance cover roof replacement in Charlotte?',
    answer:
      'Homeowners insurance in Charlotte typically covers roof damage caused by sudden events like hailstorms, wind, fallen trees, and fire. It does not cover damage from normal wear and tear, neglect, or age-related deterioration. If your roof is damaged by a covered event, you pay your deductible and insurance covers the rest. Best Roofing Now helps Charlotte homeowners file claims and meets with insurance adjusters to ensure fair settlements.',
  },
  {
    question: 'What is the best roofing material for Charlotte homes?',
    answer:
      'Architectural asphalt shingles are the most popular choice for Charlotte homes due to their balance of durability, appearance, and value. They handle Charlotte\'s heat, humidity, and storms well, especially premium brands like GAF Timberline HDZ, CertainTeed Landmark, and Owens Corning Duration. Metal roofing is growing in popularity for its longevity and energy efficiency. The best choice depends on your budget, home style, and long-term plans.',
  },
  {
    question: 'How do I know if my roof needs to be repaired or replaced?',
    answer:
      'A repair is usually sufficient for localized damage like a few missing shingles, minor leak around flashing, or isolated storm damage. A full replacement is recommended when damage is widespread, the roof is over 20 years old, there are multiple layers of shingles, you notice sagging, or granule loss is extensive. A professional inspection from Best Roofing Now will give you an honest assessment of whether repair or replacement is the right choice.',
  },
  {
    question: 'When is the best time to replace a roof in Charlotte?',
    answer:
      'Late spring (April-May) and early fall (September-October) are ideal for roof replacement in Charlotte. These seasons offer mild temperatures that help shingles seal properly, and crews work most efficiently. Summer replacements are possible but the extreme heat can be challenging. Winter installations are feasible in Charlotte since temperatures rarely stay below freezing, but cold weather can slow the shingle sealing process.',
  },
  {
    question: 'How long does a roof replacement take in Charlotte?',
    answer:
      'Most residential roof replacements in Charlotte take 1-3 days. A standard single-story home with a simple roof design can often be completed in 1 day. Larger homes, steep roofs, multiple layers requiring tear-off, or complex designs with many valleys and dormers may take 2-3 days. Weather delays are factored into our scheduling. Best Roofing Now provides a clear timeline before work begins.',
  },
  {
    question: 'Do I need a permit to replace my roof in Charlotte NC?',
    answer:
      'Yes, Mecklenburg County requires a building permit for roof replacements in Charlotte. The permit ensures work meets local building codes and NC Residential Building Code requirements. Best Roofing Now handles the entire permit process for you, including application, inspections, and final sign-off. Never hire a contractor who suggests skipping the permit process.',
  },
  {
    question: 'What should I look for when hiring a roofing contractor in Charlotte?',
    answer:
      'Look for a Charlotte roofing contractor who is licensed and insured in North Carolina, carries workers compensation insurance, has manufacturer certifications (CertainTeed, GAF, Owens Corning), maintains a strong Google rating with verified reviews, is BBB accredited, provides written estimates and contracts, pulls permits, and offers workmanship warranties. Best Roofing Now meets all these criteria and is veteran-owned with a perfect 5.0 Google rating.',
  },
  {
    question: 'How can I maintain my roof to make it last longer in Charlotte?',
    answer:
      'Charlotte homeowners should schedule professional inspections twice a year (spring and fall), keep gutters clean, trim overhanging branches, check attic ventilation, remove moss or algae promptly, address minor repairs immediately, and inspect the roof after every major storm. Proper attic insulation and ventilation prevent moisture buildup that accelerates roof aging. Best Roofing Now offers annual maintenance plans to protect your investment.',
  },
];

// Table of contents data for the handbook
const tableOfContents = [
  { title: 'Understanding Your Roof', anchor: '#understanding-your-roof' },
  { title: 'Signs Your Roof Needs Attention', anchor: '#signs-roof-needs-attention' },
  { title: 'Roofing Materials Compared', anchor: '#roofing-materials-compared' },
  { title: 'Top Roofing Brands We Install', anchor: '#top-roofing-brands' },
  { title: 'Roof Repair', anchor: '#roof-repair' },
  { title: 'Roof Replacement', anchor: '#roof-replacement' },
  { title: 'How to Pay for Your Roof', anchor: '#how-to-pay' },
  { title: 'Hiring the Right Contractor', anchor: '#hiring-contractor' },
  { title: 'Maintaining Your Roof Year-Round', anchor: '#maintaining-your-roof' },
  { title: 'FAQs', anchor: '#faq-section-title' },
];

export default function CharlotteRoofingHandbookPage() {
  const pageUrl = `${SITE_CONFIG.url}/charlotte-roofing-handbook`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="Charlotte Roofing Handbook (2026) | Complete Homeowner Guide"
        description="The complete Charlotte homeowner roofing guide for 2026. Roof anatomy, materials, repairs, replacement, costs, insurance, financing, and maintenance from certified local roofers."
        url={pageUrl}
        primaryImage={IMAGES.hero.hero5}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Guides', url: `${SITE_CONFIG.url}/charlotte-roofing-handbook` },
          { name: 'Charlotte Roofing Handbook', url: pageUrl },
        ]}
      />
      <FAQSchema faqs={handbookFAQs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Guides', url: `${SITE_CONFIG.url}/charlotte-roofing-handbook` },
          { name: 'Charlotte Roofing Handbook', url: pageUrl },
        ]}
      />
      <LocalBusinessSchema includeRating={false} />
      <AISearchOptimizationBundle
        pageUrl={pageUrl}
        pageName="Charlotte Roofing Handbook 2026"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'What is the complete guide to roofing in Charlotte NC?',
            answer:
              'The Charlotte Roofing Handbook by Best Roofing Now is a comprehensive 2026 guide covering roof anatomy, materials comparison, repair vs replacement decisions, costs, insurance claims, financing options, contractor selection, and year-round maintenance for Charlotte homeowners. Best Roofing Now is a veteran-owned, BBB A+ rated company with a 5.0 Google rating.',
            speakableAnswer:
              'Best Roofing Now publishes the Charlotte Roofing Handbook, a complete guide covering materials, costs, repairs, replacement, insurance, and maintenance for Charlotte homeowners.',
          },
          {
            question: 'How much does a roof cost in Charlotte NC in 2026?',
            answer:
              'A new asphalt shingle roof in Charlotte costs $8,000 to $18,000 in 2026 for an average home. Metal roofing costs $15,000 to $35,000. Premium materials like slate or copper can exceed $40,000. Best Roofing Now provides free estimates and offers flexible financing options. Call 704-605-6047 for a no-obligation quote.',
            speakableAnswer:
              'A new roof in Charlotte costs $8,000 to $18,000 for asphalt shingles and $15,000 to $35,000 for metal roofing in 2026. Call Best Roofing Now at 704-605-6047 for a free estimate.',
          },
          {
            question: 'What roofing materials are best for Charlotte homes?',
            answer:
              'Architectural asphalt shingles are the most popular choice for Charlotte homes due to their balance of durability, cost, and appearance. Premium brands like GAF Timberline HDZ, CertainTeed Landmark, and Owens Corning Duration perform well in Charlotte\'s hot, humid climate. Metal roofing is growing in popularity for its longevity and energy efficiency. Best Roofing Now is certified by all three major manufacturers.',
            speakableAnswer:
              'Architectural asphalt shingles are the most popular choice for Charlotte homes. Metal roofing is also growing in popularity. Best Roofing Now installs GAF, CertainTeed, and Owens Corning products.',
          },
          {
            question: 'How do I find a good roofing contractor in Charlotte?',
            answer:
              'Look for a Charlotte roofer who is licensed, insured, manufacturer-certified, BBB accredited, and has strong Google reviews. Best Roofing Now is veteran-owned, holds a 5.0 Google rating with 62+ reviews, maintains BBB A+ accreditation, and is certified by CertainTeed, GAF, and Owens Corning. They pull permits, provide written warranties, and have completed over 500 roofs in Charlotte.',
            speakableAnswer:
              'Best Roofing Now is Charlotte\'s top-rated roofing company with a 5-star Google rating, BBB A+ rating, and certifications from CertainTeed, GAF, and Owens Corning. Call 704-605-6047.',
          },
        ]}
      />
      <VoiceSearchActionSchema />
      <ItemListSchema
        title="Charlotte Roofing Handbook - Table of Contents"
        description="Complete guide to roofing for Charlotte NC homeowners"
        items={tableOfContents.map((item) => item.title)}
      />

      {/* Visual Breadcrumbs */}
      <div className="bg-light border-b border-gray-200">
        <div className="container">
          <Breadcrumbs
            items={[
              { name: 'Guides', href: '/charlotte-roofing-handbook' },
              {
                name: 'Charlotte Roofing Handbook',
                href: '/charlotte-roofing-handbook',
              },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.hero.hero5}
            alt="Charlotte roofing handbook - complete homeowner guide"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <BookOpen className="w-4 h-4" />
              2026 Complete Guide
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              The Charlotte Homeowner&apos;s Complete Roofing Handbook (2026)
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Everything you need to know about your roof in Charlotte, NC. From understanding how
              your roof protects your home to choosing materials, hiring a contractor, navigating
              insurance claims, and keeping your roof in top shape year-round. Written by certified
              Charlotte roofing professionals with over {SITE_CONFIG.customerCount} roofs completed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="primary"
                className="bg-accent hover:bg-accent-dark"
                icon={<Phone className="w-5 h-5" />}
              >
                Call Us: {SITE_CONFIG.phone}
              </Button>
              <EstimateButton
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Free Roof Inspection
              </EstimateButton>
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
                <Award className="w-5 h-5 text-green-400" />
                Veteran-Owned Company
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-light rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6" />
                What&apos;s Inside This Guide
              </h2>
              <nav>
                <ol className="space-y-3">
                  {tableOfContents.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.anchor}
                        className="flex items-center gap-3 text-dark hover:text-primary transition-colors group"
                      >
                        <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                          {index + 1}
                        </span>
                        <span className="font-medium">{item.title}</span>
                        <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Understanding Your Roof */}
      <section id="understanding-your-roof" className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Understanding Your Roof &mdash; How It Protects Your Charlotte Home
              </h2>
              <p className="text-gray text-lg mb-6">
                Your roof is a complex system of layered components working together to keep your
                Charlotte home dry, insulated, and structurally sound. Understanding how these layers
                function helps you make informed decisions about repairs, replacement, and
                maintenance.
              </p>
              <p className="text-gray mb-6">
                Every roof starts with the <strong className="text-dark">deck (sheathing)</strong>,
                typically plywood or OSB boards nailed to the rafters. Above that sits the{' '}
                <strong className="text-dark">underlayment</strong>, a waterproof or
                water-resistant barrier (such as synthetic felt or ice and water shield) that serves
                as a second line of defense. Next comes your visible{' '}
                <strong className="text-dark">roofing material</strong> &mdash; shingles, metal
                panels, slate, or tile &mdash; which takes the brunt of sun, rain, and wind.
              </p>
              <p className="text-gray mb-6">
                Equally important are the supporting elements:{' '}
                <strong className="text-dark">flashing</strong> (thin metal strips) seals
                vulnerable joints around chimneys, vents, skylights, and valleys.{' '}
                <Link
                  href="/roof-ventilation-charlotte-nc"
                  className="text-primary font-semibold hover:text-accent"
                >
                  Proper roof ventilation
                </Link>{' '}
                through ridge vents, soffit vents, and attic fans prevents heat and moisture buildup
                that can warp decking and shorten shingle life. And{' '}
                <Link
                  href="/ridge-vent-installation-charlotte-nc"
                  className="text-primary font-semibold hover:text-accent"
                >
                  ridge vent installation
                </Link>{' '}
                creates continuous airflow along the roof peak, balancing temperatures between your
                attic and the outside.
              </p>
              <p className="text-gray">
                Charlotte&apos;s climate puts unique stress on roofs. Summer temperatures regularly
                exceed 90&deg;F, causing thermal expansion and UV degradation of shingles. High
                humidity creates ideal conditions for algae and moss growth. Severe thunderstorms
                from April through September bring hail, high winds, and heavy rain. Understanding
                your roof&apos;s anatomy helps you spot problems early and communicate effectively
                with your{' '}
                <Link
                  href="/roofing-contractor-charlotte-nc"
                  className="text-primary font-semibold hover:text-accent"
                >
                  roofing contractor
                </Link>
                .
              </p>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={IMAGES.projects.closeup1}
                  alt="Close-up of roof components showing shingles, flashing, and ventilation in Charlotte NC"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <Layers className="w-8 h-8 text-primary mb-2" />
                  <h4 className="font-bold text-dark text-sm">5 Key Layers</h4>
                  <p className="text-gray text-xs mt-1">
                    Deck, underlayment, shingles, flashing, ventilation
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <ThermometerSun className="w-8 h-8 text-primary mb-2" />
                  <h4 className="font-bold text-dark text-sm">Charlotte Climate</h4>
                  <p className="text-gray text-xs mt-1">
                    90&deg;F+ summers, high humidity, severe storms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Signs Your Roof Needs Attention */}
      <section id="signs-roof-needs-attention" className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Signs Your Roof Needs Attention
            </h2>
            <p className="text-gray text-lg">
              Catching roof problems early saves Charlotte homeowners thousands in repair costs.
              Here are the warning signs every homeowner should watch for, especially after the
              frequent storms that sweep through our area.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Droplets className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Active Leaks & Water Stains</h3>
              <p className="text-gray mb-4">
                Water stains on ceilings or walls are the most obvious sign of roof damage. Even
                small stains indicate water is penetrating your roof system. In Charlotte&apos;s
                heavy rains, a minor leak can quickly become major water damage affecting insulation,
                drywall, and even your home&apos;s electrical system.
              </p>
              <Link
                href="/roof-repair-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Roof Repair Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">
                Missing or Damaged Shingles
              </h3>
              <p className="text-gray mb-4">
                After Charlotte&apos;s frequent thunderstorms, check your roof for missing, cracked,
                curled, or buckling shingles. Wind can lift and tear shingles away, while hail
                creates bruises and cracks that may not be visible from the ground. Exposed areas
                allow water to reach the underlayment and decking.
              </p>
              <Link
                href="/missing-shingles-repair-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Missing Shingle Repair
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Search className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Granule Loss & Aging Signs</h3>
              <p className="text-gray mb-4">
                Finding shingle granules in your gutters or at the base of downspouts signals
                advanced wear. Granules protect the asphalt from UV damage, so their loss
                accelerates deterioration. Other aging signs include daylight visible through the
                attic, a sagging roofline, and moss or algae growth that traps moisture.
              </p>
              <Link
                href="/sagging-roof-repair-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Sagging Roof Repair
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="mt-10 bg-accent/5 border border-accent/20 rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-gray">
              <strong className="text-primary">Pro Tip:</strong> Charlotte experiences 45-50
              thunderstorm days per year. We recommend a professional{' '}
              <Link
                href="/storm-damage-roof-repair-charlotte-nc"
                className="text-primary font-semibold hover:text-accent"
              >
                storm damage inspection
              </Link>{' '}
              after any significant weather event. Many types of hail and wind damage are not visible
              from the ground but can still lead to insurance-covered replacement.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Roofing Materials Compared */}
      <section id="roofing-materials-compared" className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Materials Compared for Charlotte Homes
            </h2>
            <p className="text-gray text-lg">
              Choosing the right roofing material is one of the biggest decisions Charlotte
              homeowners face. Each option offers different benefits for our climate, budget, and
              aesthetics. Here is how they compare.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Asphalt Shingles */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow border-t-4 border-primary">
              <h3 className="text-xl font-bold text-dark mb-3">Asphalt Shingles</h3>
              <p className="text-sm text-accent font-semibold mb-4">Most Popular in Charlotte</p>
              <p className="text-gray mb-4">
                Architectural (dimensional) asphalt shingles are the top choice for Charlotte homes,
                offering excellent value, a wide range of colors and styles, and proven performance
                in our hot, humid climate. They resist wind up to 130 mph and carry 25-50 year
                warranties depending on the product line.
              </p>
              <ul className="space-y-2 text-sm text-gray mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Cost: $3.50-$5.50 per sq ft installed
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Lifespan: 25-35 years
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Best for: Most Charlotte homes
                </li>
              </ul>
              <Link
                href="/asphalt-shingle-roofing-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-sm"
              >
                Learn About Asphalt Shingles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Metal Roofing */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow border-t-4 border-primary">
              <h3 className="text-xl font-bold text-dark mb-3">Metal Roofing</h3>
              <p className="text-sm text-accent font-semibold mb-4">Fastest Growing Option</p>
              <p className="text-gray mb-4">
                Standing seam metal and metal shingle roofing is rapidly gaining popularity in
                Charlotte. Metal reflects solar heat (reducing cooling costs by up to 25%), resists
                wind up to 140 mph, and lasts two to three times longer than asphalt. It performs
                exceptionally well in Charlotte&apos;s severe thunderstorms and is completely
                resistant to moss and algae.
              </p>
              <ul className="space-y-2 text-sm text-gray mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Cost: $7.00-$14.00 per sq ft installed
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Lifespan: 40-70 years
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Best for: Long-term homeowners
                </li>
              </ul>
              <Link
                href="/metal-roofing-services"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-sm"
              >
                Explore Metal Roofing
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Slate Roofing */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow border-t-4 border-primary">
              <h3 className="text-xl font-bold text-dark mb-3">Slate Roofing</h3>
              <p className="text-sm text-accent font-semibold mb-4">Premium & Timeless</p>
              <p className="text-gray mb-4">
                Natural slate is the gold standard of roofing materials, prized for its beauty and
                extraordinary durability. Found on many historic Charlotte homes in neighborhoods
                like Myers Park and Dilworth, slate can last a century or more with proper
                maintenance. It is fireproof, impervious to rot, and highly resistant to
                Charlotte&apos;s weather extremes.
              </p>
              <ul className="space-y-2 text-sm text-gray mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Cost: $15.00-$30.00 per sq ft installed
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Lifespan: 75-100+ years
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Best for: Historic and luxury homes
                </li>
              </ul>
              <Link
                href="/slate-roofing-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-sm"
              >
                Slate Roofing Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Cedar Shake */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow border-t-4 border-primary">
              <h3 className="text-xl font-bold text-dark mb-3">Cedar Shake</h3>
              <p className="text-sm text-accent font-semibold mb-4">Natural Character</p>
              <p className="text-gray mb-4">
                Cedar shake roofing offers a distinctive natural look that complements many
                Charlotte home styles. Cedar provides natural insulation and develops an attractive
                silver-gray patina over time. However, Charlotte&apos;s humidity requires diligent
                maintenance to prevent moss, rot, and insect damage. Fire-treated options are
                recommended.
              </p>
              <ul className="space-y-2 text-sm text-gray mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Cost: $8.00-$14.00 per sq ft installed
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Lifespan: 20-40 years
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Best for: Craftsman and rustic homes
                </li>
              </ul>
              <Link
                href="/cedar-shake-roofing-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-sm"
              >
                Cedar Shake Options
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Copper Roofing */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow border-t-4 border-primary">
              <h3 className="text-xl font-bold text-dark mb-3">Copper Roofing</h3>
              <p className="text-sm text-accent font-semibold mb-4">Ultimate Luxury</p>
              <p className="text-gray mb-4">
                Copper is the pinnacle of roofing materials, offering unmatched elegance and a
                lifespan measured in centuries. It develops a distinctive green patina over time that
                Charlotte homeowners either love or choose to maintain in its original brilliant
                state. Copper is maintenance-free and naturally antimicrobial.
              </p>
              <ul className="space-y-2 text-sm text-gray mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Cost: $20.00-$40.00 per sq ft installed
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Lifespan: 100+ years
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Best for: Luxury estates and accents
                </li>
              </ul>
              <Link
                href="/copper-roofing-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-sm"
              >
                Copper Roofing Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Metal vs Shingles Comparison */}
            <div className="bg-primary/5 rounded-2xl p-8 hover:shadow-lg transition-shadow border-t-4 border-accent">
              <h3 className="text-xl font-bold text-dark mb-3">Not Sure Which to Choose?</h3>
              <p className="text-sm text-primary font-semibold mb-4">Side-by-Side Comparison</p>
              <p className="text-gray mb-4">
                The most common debate Charlotte homeowners face is whether to stick with traditional
                asphalt shingles or upgrade to metal. Our detailed comparison breaks down the real
                costs, lifespan, energy savings, and resale value so you can make the right choice
                for your home and budget.
              </p>
              <div className="space-y-3 mb-4">
                <Link
                  href="/metal-roof-vs-shingles-charlotte-nc"
                  className="flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-sm"
                >
                  <ArrowRight className="w-4 h-4" />
                  Metal vs. Shingles Comparison
                </Link>
                <Link
                  href="/standing-seam-metal-roof-charlotte-nc"
                  className="flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-sm"
                >
                  <ArrowRight className="w-4 h-4" />
                  Standing Seam Metal Roofing
                </Link>
                <Link
                  href="/designer-shingles-charlotte-nc"
                  className="flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-sm"
                >
                  <ArrowRight className="w-4 h-4" />
                  Designer Shingles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Top Roofing Brands */}
      <section id="top-roofing-brands" className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Top Roofing Brands We Install
            </h2>
            <p className="text-gray text-lg">
              Best Roofing Now is certified by the three largest roofing manufacturers in North
              America. This means access to premium products, extended warranties, and installation
              standards that exceed code requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* GAF */}
            <div className="bg-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">GAF</h3>
              <p className="text-sm text-accent font-semibold mb-4">
                Factory-Certified Contractor
              </p>
              <p className="text-gray mb-4">
                GAF is North America&apos;s largest roofing manufacturer. Their Timberline HDZ
                shingles are the number-one selling shingle in the country, featuring LayerLock
                technology for superior wind resistance up to 130 mph. As a GAF Factory-Certified
                Contractor, Best Roofing Now can offer GAF&apos;s System Plus and Golden Pledge
                warranties covering both materials and workmanship for up to 50 years.
              </p>
              <ul className="space-y-2 text-sm text-gray mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Timberline HDZ - #1 selling shingle
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Up to 130 mph wind warranty
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  StainGuard Plus algae protection
                </li>
              </ul>
              <div className="space-y-2">
                <Link
                  href="/gaf-roofing-charlotte-nc"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-sm"
                >
                  GAF Roofing Charlotte
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <br />
                <Link
                  href="/gaf-timberline-shingles-charlotte-nc"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-sm"
                >
                  GAF Timberline Shingles
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* CertainTeed */}
            <div className="bg-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">CertainTeed</h3>
              <p className="text-sm text-accent font-semibold mb-4">ShingleMaster</p>
              <p className="text-gray mb-4">
                CertainTeed is known for industry-leading color options and their Landmark series,
                which offers the dimensional look of wood shake at an affordable price. As a SELECT
                ShingleMaster, Best Roofing Now represents the top tier of CertainTeed certified
                contractors, meeting the highest standards for installation quality and customer
                satisfaction.
              </p>
              <ul className="space-y-2 text-sm text-gray mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Landmark series - 50+ color options
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  SureStart warranty protection
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  StreakFighter algae resistance
                </li>
              </ul>
              <Link
                href="/certainteed-shingles-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-sm"
              >
                CertainTeed Shingles Charlotte
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Owens Corning */}
            <div className="bg-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Owens Corning</h3>
              <p className="text-sm text-accent font-semibold mb-4">Preferred Contractor</p>
              <p className="text-gray mb-4">
                Owens Corning&apos;s Duration series features their patented SureNail Technology, a
                built-in fabric strip that provides exceptional nail holding power and wind
                resistance. As a Preferred Contractor, we offer their comprehensive Total Protection
                Roofing System, which pairs Duration shingles with matching components for a fully
                integrated roof.
              </p>
              <ul className="space-y-2 text-sm text-gray mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Duration series with SureNail
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Total Protection Roofing System
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  Platinum warranty available
                </li>
              </ul>
              <Link
                href="/owens-corning-roofing-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-sm"
              >
                Owens Corning Roofing Charlotte
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="text-gray mb-4">
              All three manufacturers offer algae-resistant shingles specifically designed for the
              Southeast climate, making them ideal for Charlotte&apos;s humidity.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Roof Repair */}
      <section id="roof-repair" className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={IMAGES.services.repairs}
                alt="Professional roof repair service in Charlotte NC"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Roof Repair &mdash; When It Makes Sense
              </h2>
              <p className="text-gray text-lg mb-6">
                Not every roof problem requires a full replacement. Many issues can be addressed with
                targeted repairs that extend your roof&apos;s life by years. Understanding when
                repair is the right call versus when replacement is more cost-effective is one of
                the most important decisions a Charlotte homeowner can make.
              </p>
              <p className="text-gray mb-6">
                Repair is typically the right choice when damage is localized to a small area (less
                than 30% of the roof surface), your roof is less than 15 years old, the issue is
                limited to specific components like{' '}
                <Link
                  href="/roof-flashing-repair-charlotte-nc"
                  className="text-primary font-semibold hover:text-accent"
                >
                  flashing
                </Link>{' '}
                or a few{' '}
                <Link
                  href="/missing-shingles-repair-charlotte-nc"
                  className="text-primary font-semibold hover:text-accent"
                >
                  missing shingles
                </Link>
                , and the underlying decking is still in good condition.
              </p>
              <p className="text-gray mb-6">
                Common roof repairs in Charlotte include patching leaks, replacing storm-damaged
                sections, resealing flashing around chimneys and vents, and fixing damaged ridge
                caps. The average repair in Charlotte costs $300 to $1,500, compared to $8,000 to
                $18,000 for a full replacement. For a detailed breakdown, see our{' '}
                <Link
                  href="/roof-repair-cost-charlotte-nc"
                  className="text-primary font-semibold hover:text-accent"
                >
                  roof repair cost guide
                </Link>
                .
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-dark mb-3">When Repair Is NOT Enough</h4>
                <ul className="space-y-2 text-sm text-gray">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Roof is over 20 years old with widespread wear
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    More than 30% of shingles are damaged or missing
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Decking is rotted or sagging
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Repeated repairs in the same areas
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <Link
                  href="/roof-repair-charlotte-nc"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
                >
                  View All Roof Repair Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Roof Replacement */}
      <section id="roof-replacement" className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Replacement &mdash; The Complete Process
            </h2>
            <p className="text-gray text-lg">
              When repair is no longer viable, a full roof replacement restores your home&apos;s
              protection for decades to come. Here is exactly what the process looks like when you
              work with Best Roofing Now in Charlotte.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ol className="space-y-8">
              {[
                {
                  step: 1,
                  icon: Search,
                  title: 'Free Inspection & Estimate',
                  desc: 'We perform a thorough roof inspection using ground-level, ladder, and drone assessments. You receive a detailed report with photos, measurements, and a transparent written estimate with no hidden fees.',
                },
                {
                  step: 2,
                  icon: FileText,
                  title: 'Material Selection & Permits',
                  desc: 'Choose your roofing material, brand, and color from our full selection of GAF, CertainTeed, and Owens Corning products. We handle the Mecklenburg County building permit application and schedule your project.',
                },
                {
                  step: 3,
                  icon: Hammer,
                  title: 'Full Tear-Off & Deck Inspection',
                  desc: 'Our crew removes all existing shingles and underlayment down to bare decking. We inspect every inch of decking for rot, water damage, and structural issues, replacing any compromised boards.',
                },
                {
                  step: 4,
                  icon: Layers,
                  title: 'New Roof System Installation',
                  desc: 'We install ice and water shield in valleys and vulnerable areas, synthetic underlayment across the entire deck, new drip edge and flashing, your chosen roofing material, and ridge ventilation. Every component works together as a system.',
                },
                {
                  step: 5,
                  icon: ClipboardCheck,
                  title: 'Final Inspection & Cleanup',
                  desc: 'We run magnetic sweepers across your entire property to collect every nail, perform a final quality inspection, submit for county building inspection, and walk through the completed project with you. You receive your warranty documentation.',
                },
              ].map((item) => (
                <li key={item.step} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {item.step}
                    </div>
                    {item.step < 5 && <div className="w-0.5 bg-primary/20 flex-1 mt-2" />}
                  </div>
                  <div className="pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <item.icon className="w-5 h-5 text-primary" />
                      <h3 className="font-bold text-dark text-lg">{item.title}</h3>
                    </div>
                    <p className="text-gray">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-1">1-3 Days</div>
              <p className="text-gray text-sm">Typical Completion</p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-1">25-50 Year</div>
              <p className="text-gray text-sm">Material Warranties</p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-1">10 Year</div>
              <p className="text-gray text-sm">Workmanship Warranty</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/roof-replacement-charlotte-nc"
              className="inline-flex items-center justify-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              Roof Replacement Services
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/roof-replacement-cost-charlotte-nc"
              className="inline-flex items-center justify-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              Roof Replacement Costs
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/new-roof-installation-charlotte-nc"
              className="inline-flex items-center justify-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              New Roof Installation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: How to Pay for Your Roof */}
      <section id="how-to-pay" className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                How to Pay for Your Roof
              </h2>
              <p className="text-gray text-lg mb-6">
                A new roof is a significant investment, but Charlotte homeowners have several
                options to make it affordable. Whether you are dealing with storm damage, planning a
                proactive replacement, or working within a tight budget, there is a path forward.
              </p>

              <div className="space-y-6">
                {/* Insurance Claims */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-2">Insurance Claims</h3>
                      <p className="text-gray text-sm">
                        If your roof was damaged by hail, wind, a fallen tree, or other covered
                        event, your homeowners insurance should cover the replacement minus your
                        deductible. Best Roofing Now has helped hundreds of Charlotte homeowners
                        navigate the claims process. We document damage, file paperwork, and meet
                        with your adjuster to ensure a fair settlement.
                      </p>
                      <Link
                        href="/insurance-claim-roofing-charlotte-nc"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-sm mt-2"
                      >
                        Insurance Claim Help
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Financing */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-2">Financing Options</h3>
                      <p className="text-gray text-sm">
                        We offer flexible financing with low monthly payments and competitive
                        interest rates. Many Charlotte homeowners qualify for plans that spread the
                        cost over 5-15 years, making a premium roof affordable. Same-as-cash options
                        are also available for shorter terms.
                      </p>
                      <Link
                        href="/roof-financing-charlotte-nc"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-sm mt-2"
                      >
                        Financing Options
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Affordable Options */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Home className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-2">Value-Focused Options</h3>
                      <p className="text-gray text-sm">
                        Quality roofing does not have to break the bank. We offer competitive pricing
                        on premium materials because of our manufacturer certifications and volume
                        purchasing. Our transparent estimates show exactly where every dollar goes,
                        with no hidden fees or surprise charges.
                      </p>
                      <Link
                        href="/affordable-roofing-charlotte-nc"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-sm mt-2"
                      >
                        Affordable Roofing
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={IMAGES.houses.modern1}
                  alt="Beautiful Charlotte home with a new roof - affordable roofing options"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6">
                <p className="text-gray text-sm">
                  <strong className="text-primary">Did You Know?</strong> A new roof increases a
                  Charlotte home&apos;s resale value by an average of $12,000-$18,000 and recovers
                  60-70% of the investment at sale. It is one of the highest-ROI home improvements
                  you can make.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Hiring the Right Contractor */}
      <section id="hiring-contractor" className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Hiring the Right Roofing Contractor in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Your roofing contractor choice matters as much as your material choice. A poorly
              installed premium roof will fail faster than a well-installed standard roof. Here is
              how to find a contractor you can trust in Charlotte.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Green Flags */}
            <div>
              <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                What to Look For
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    title: 'North Carolina Contractor License',
                    desc: 'Verify they hold an active NC General Contractor or Roofing Contractor license. This is legally required for roofing work in Charlotte.',
                  },
                  {
                    title: 'General Liability & Workers Comp Insurance',
                    desc: 'Ask for certificates of insurance. Without workers comp, YOU could be liable if a worker is injured on your property.',
                  },
                  {
                    title: 'Manufacturer Certifications',
                    desc: 'Certified contractors from GAF, CertainTeed, or Owens Corning have passed training requirements and can offer enhanced warranties.',
                  },
                  {
                    title: 'Strong Google Reviews & BBB Rating',
                    desc: 'Look for a pattern of positive reviews mentioning professionalism, quality, and communication. Check the BBB for complaints and resolution history.',
                  },
                  {
                    title: 'Written Contract & Warranty',
                    desc: 'Get everything in writing: scope of work, materials, timeline, payment schedule, and warranty terms. A reputable contractor will always provide this.',
                  },
                  {
                    title: 'Pulls Permits',
                    desc: 'Legitimate contractors pull building permits for roof replacements. This ensures the work is inspected and meets code. Never skip this step.',
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-dark">{item.title}</span>
                      <p className="text-gray text-sm mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Red Flags */}
            <div>
              <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                Red Flags to Avoid
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    title: 'Door-to-Door Storm Chasers',
                    desc: 'After major storms, out-of-state companies flood Charlotte neighborhoods. They disappear after collecting payment, leaving you with no warranty support.',
                  },
                  {
                    title: 'Demands Large Upfront Payment',
                    desc: 'Legitimate contractors may require a small deposit, but demanding 50%+ upfront is a red flag. Best Roofing Now never requires full payment before work is complete.',
                  },
                  {
                    title: 'No Written Estimate or Contract',
                    desc: 'Verbal agreements leave you unprotected. If a contractor will not put details in writing, walk away.',
                  },
                  {
                    title: 'Suggests Skipping the Permit',
                    desc: 'This is a major red flag. Skipping permits can void your insurance, create legal issues when selling, and result in substandard work.',
                  },
                  {
                    title: 'Unrealistically Low Bids',
                    desc: 'If one bid is significantly lower than others, the contractor may be cutting corners on materials, labor, or insurance coverage.',
                  },
                  {
                    title: 'Pressures You to Decide Immediately',
                    desc: 'A legitimate contractor will give you time to review the estimate and make an informed decision. High-pressure tactics signal desperation.',
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-dark">{item.title}</span>
                      <p className="text-gray text-sm mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 bg-primary/5 rounded-2xl p-8 max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-bold text-primary mb-4">
              Why Charlotte Homeowners Trust Best Roofing Now
            </h3>
            <p className="text-gray mb-6">
              Best Roofing Now is a{' '}
              <Link
                href="/veteran-owned-roofing-company-charlotte-nc"
                className="text-primary font-semibold hover:text-accent"
              >
                veteran-owned roofing company
              </Link>{' '}
              with a perfect {SITE_CONFIG.googleRating} Google rating, BBB {SITE_CONFIG.bbbRating}{' '}
              accreditation, and certifications from all three major manufacturers. We pull permits
              for every job, carry full insurance, provide written contracts and warranties, and have
              completed over {SITE_CONFIG.customerCount} roofs across the Charlotte metro area.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {SITE_CONFIG.certifications.map((cert, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-primary shadow-sm"
                >
                  <Award className="w-4 h-4" />
                  {cert}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/best-roofing-company-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                See Why We Are Charlotte&apos;s Best
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Maintaining Your Roof Year-Round */}
      <section id="maintaining-your-roof" className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Maintaining Your Roof Year-Round
            </h2>
            <p className="text-gray text-lg">
              A well-maintained roof in Charlotte can outlast its warranty by years. Proactive
              seasonal care catches small problems before they become expensive emergencies. Here is
              your season-by-season maintenance plan for the Charlotte area.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Spring */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-dark mb-3">Spring (March-May)</h3>
              <ul className="space-y-2 text-sm text-gray">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  Schedule professional{' '}
                  <Link
                    href="/spring-roof-inspection-charlotte-nc"
                    className="text-primary hover:text-accent"
                  >
                    spring inspection
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  Check for winter storm damage
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  Clean gutters of pollen and debris
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  Trim branches within 6 feet of roof
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  Inspect flashing and caulk joints
                </li>
              </ul>
            </div>

            {/* Summer */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <Sun className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-bold text-dark mb-3">Summer (June-Aug)</h3>
              <ul className="space-y-2 text-sm text-gray">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <Link
                    href="/summer-roof-maintenance-charlotte-nc"
                    className="text-primary hover:text-accent"
                  >
                    Summer maintenance tasks
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  Check attic ventilation is working
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  Inspect after each severe storm
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  Watch for algae and moss growth
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  Ensure gutters drain properly
                </li>
              </ul>
            </div>

            {/* Fall */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Wind className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-dark mb-3">Fall (Sept-Nov)</h3>
              <ul className="space-y-2 text-sm text-gray">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  Schedule fall professional inspection
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <Link
                    href="/gutter-services"
                    className="text-primary hover:text-accent"
                  >
                    Clean gutters
                  </Link>{' '}
                  of leaves and debris
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  Address any repairs before winter
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  Check{' '}
                  <Link
                    href="/gutter-guards-charlotte-nc"
                    className="text-primary hover:text-accent"
                  >
                    gutter guards
                  </Link>{' '}
                  are secure
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  Inspect attic insulation levels
                </li>
              </ul>
            </div>

            {/* Winter */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Snowflake className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-dark mb-3">Winter (Dec-Feb)</h3>
              <ul className="space-y-2 text-sm text-gray">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  Monitor for ice dams after freezes
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  Check attic for condensation
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  Clear heavy snow or ice if safe
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  Watch for ice storm damage
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  Document any damage for spring
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="text-gray mb-6 max-w-2xl mx-auto">
              Consistent maintenance is the single best way to extend your roof&apos;s life and
              avoid unexpected emergency repairs. Best Roofing Now offers annual{' '}
              <Link
                href="/roof-maintenance-charlotte-nc"
                className="text-primary font-semibold hover:text-accent"
              >
                roof maintenance plans
              </Link>{' '}
              that include two professional inspections, gutter cleaning, and minor repair coverage.
            </p>
            <EstimateButton variant="primary">
              Schedule a Roof Inspection
            </EstimateButton>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {SITE_CONFIG.customerCount}+
              </div>
              <p className="text-white/70">Roofs Completed</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {SITE_CONFIG.googleRating}
              </div>
              <p className="text-white/70">Google Rating</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {SITE_CONFIG.bbbRating}
              </div>
              <p className="text-white/70">BBB Rating</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {SITE_CONFIG.yearsInBusiness}+
              </div>
              <p className="text-white/70">Years Serving Charlotte</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        faqs={handbookFAQs}
        title="Charlotte Roofing FAQ"
        subtitle="Answers to the most common roofing questions from Charlotte homeowners"
      />

      {/* Directory Citations */}
      <section className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <DirectoryCitations
              pageType="service"
              maxLinks={3}
              variant="inline"
              title="Verified Business"
            />
            <p className="text-sm text-gray-500">
              Veteran-Owned | Licensed & Insured | BBB {SITE_CONFIG.bbbRating} Rated
            </p>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="guide"
        city="Charlotte"
        slug="charlotte-roofing-handbook"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/charlotte-roofing-handbook`}
      />

      {/* CTA */}
      <CTASection
        title="Ready to Protect Your Charlotte Home?"
        subtitle="Get a free, no-obligation roof inspection and honest assessment from Charlotte's top-rated roofing company. Over 500 roofs completed with a perfect 5.0 Google rating."
      />
    </>
  );
}
