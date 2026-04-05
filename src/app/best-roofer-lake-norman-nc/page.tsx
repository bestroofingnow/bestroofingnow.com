import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle,
  Phone,
  Calendar,
  Shield,
  Star,
  ArrowRight,
  HelpCircle,
  Award,
  MapPin,
  ThumbsUp,
  Users,
  BadgeCheck,
  Wrench,
  Clock,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Best Roofer Lake Norman NC | #1 Rated LKN',
  description:
    `Best roofer in Lake Norman NC. ${SITE_CONFIG.googleRating}-star rated, ${SITE_CONFIG.roofsInstalled}+ roofs installed, veteran-owned. GAF & CertainTeed certified. Serving Cornelius, Davidson, Mooresville & all LKN. Call (704) 605-6047.`,
  keywords: [
    'best roofer lake norman',
    'best roofing company lake norman nc',
    'top rated roofer lake norman',
    'best roofer mooresville nc',
    'best roofer cornelius nc',
    '#1 roofer lake norman nc',
    'highest rated roofer lake norman',
    'best roofing contractor lake norman',
    'top roofer lake norman nc',
    'lake norman best roofing company',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/best-roofer-lake-norman-nc`,
  },
  openGraph: {
    title: 'Best Roofer Lake Norman NC | #1 Rated LKN Roofing Company',
    description:
      `Lake Norman's top-rated roofing company. ${SITE_CONFIG.googleRating}-star Google rating, ${SITE_CONFIG.roofsInstalled}+ projects completed, veteran-owned. Serving all LKN communities.`,
    url: `${SITE_CONFIG.url}/best-roofer-lake-norman-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.houses.modern1,
        width: 1200,
        height: 630,
        alt: 'Best roofer Lake Norman NC - #1 rated roofing company on LKN',
      },
    ],
  },
};

// Why we're #1
const whyBestReasons = [
  {
    icon: Star,
    title: `${SITE_CONFIG.googleRating}-Star Google Rating`,
    description: `Perfect ${SITE_CONFIG.googleRating}-star rating across ${SITE_CONFIG.googleReviewCount}+ Google reviews. Lake Norman homeowners consistently rate us the highest for quality, communication, and professionalism.`,
  },
  {
    icon: Award,
    title: 'Manufacturer Certified',
    description:
      `${SITE_CONFIG.certifications.join(' and ')} certified. Only the top 2% of roofers earn these designations, qualifying your project for enhanced warranties up to 50 years.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned & Operated',
    description:
      'Founded by a military veteran with values of discipline, integrity, and commitment to excellence. Our veteran ownership means accountability and attention to detail on every Lake Norman project.',
  },
  {
    icon: Users,
    title: `${SITE_CONFIG.roofsInstalled}+ Projects Completed`,
    description:
      `Over ${SITE_CONFIG.roofsInstalled} roofing projects completed across the Charlotte metro, with 200+ in the Lake Norman area alone. From The Peninsula to The Point, our work speaks for itself.`,
  },
  {
    icon: BadgeCheck,
    title: `BBB ${SITE_CONFIG.bbbRating} Rated`,
    description:
      `Better Business Bureau ${SITE_CONFIG.bbbRating} rating with zero complaints. We maintain the highest standards of business ethics, transparent pricing, and customer communication.`,
  },
  {
    icon: Clock,
    title: 'Local LKN Response',
    description:
      'Based near Lake Norman with crews positioned across the region. We respond faster than Charlotte-based companies with 24/7 emergency service and same-day estimates for all LKN communities.',
  },
];

// What to look for in an LKN roofer
const whatToLookFor = [
  {
    title: 'Manufacturer Certifications',
    good: 'GAF Master Elite, CertainTeed ShingleMaster, or equivalent',
    bad: 'No manufacturer certifications or only basic contractor status',
    why: 'Certified contractors must meet strict installation standards and offer enhanced warranties. Non-certified contractors cannot provide the same warranty protection.',
  },
  {
    title: 'Insurance & Licensing',
    good: 'Licensed in NC, fully insured with $1M+ liability, workers comp coverage',
    bad: 'Unlicensed, minimal insurance, no workers compensation',
    why: 'Lake Norman spans multiple counties. Your roofer must be licensed in Mecklenburg, Iredell, and/or Catawba County with proper insurance to protect your property.',
  },
  {
    title: 'Local Reputation',
    good: '4.8+ Google rating with 50+ reviews, BBB accredited, verified local projects',
    bad: 'Few reviews, no local project history, recently established',
    why: 'Storm chasers flood Lake Norman after major storms. A strong local reputation with verifiable projects ensures your roofer will be here when warranty issues arise.',
  },
  {
    title: 'Waterfront Experience',
    good: 'Documented lakefront installations, knowledge of wind-resistant methods',
    bad: 'No waterfront experience, standard installation methods only',
    why: 'Lake Norman waterfront homes require specialized installation techniques. A roofer without lakefront experience may use standard methods that fail under lake conditions.',
  },
  {
    title: 'Transparent Pricing',
    good: 'Detailed written estimates with material specs, no hidden fees',
    bad: 'Vague verbal quotes, pressure tactics, lowball initial pricing',
    why: 'Quality Lake Norman roofers provide line-item estimates showing materials, labor, and warranty costs. Beware of quotes significantly below market rates.',
  },
];

// Lake Norman communities
const lknCommunities = [
  { name: 'Cornelius', slug: 'cornelius-nc', highlight: 'The Peninsula & Jetton Road' },
  { name: 'Davidson', slug: 'davidson-nc', highlight: 'River Run & historic district' },
  { name: 'Mooresville', slug: 'mooresville-nc', highlight: 'The Point & Race City' },
  { name: 'Huntersville', slug: 'huntersville-nc', highlight: 'Birkdale & Skybrook' },
  { name: 'Denver', slug: 'denver-nc', highlight: 'Westport & western shore' },
  { name: 'Sherrills Ford', slug: 'sherrills-ford-nc', highlight: 'South shore lakefront' },
];

// Review highlights
const reviewHighlights = [
  {
    name: 'Sarah M.',
    location: 'Cornelius, NC',
    rating: 5,
    text: 'Best Roofing Now replaced our waterfront home roof after storm damage. They handled our insurance claim perfectly and the new roof looks incredible. Truly the best roofer on Lake Norman.',
  },
  {
    name: 'David T.',
    location: 'Mooresville, NC',
    rating: 5,
    text: 'After getting 4 quotes from different companies, Best Roofing Now was the most professional and transparent. Their price was fair and the quality exceeded expectations. Highly recommend for any LKN homeowner.',
  },
  {
    name: 'Jennifer K.',
    location: 'Davidson, NC',
    rating: 5,
    text: 'Veteran-owned and it shows. The attention to detail, communication, and follow-through were exceptional. They treated our historic Davidson home with the care it deserved.',
  },
];

// FAQs
const bestRooferFAQs = [
  {
    question: 'What makes Best Roofing Now the best roofer on Lake Norman?',
    answer:
      `Best Roofing Now is Lake Norman's top-rated roofing company with a perfect ${SITE_CONFIG.googleRating}-star Google rating, ${SITE_CONFIG.roofsInstalled}+ completed projects, and manufacturer certifications from GAF and CertainTeed. As a veteran-owned company, we bring military-grade discipline to every Lake Norman project. Our BBB ${SITE_CONFIG.bbbRating} rating and zero complaints demonstrate our commitment to excellence.`,
  },
  {
    question: 'How do I verify a Lake Norman roofer is legitimate?',
    answer:
      'Check their NC General Contractor license on the NC Licensing Board website. Verify their insurance certificates are current and include both general liability ($1M+) and workers compensation. Confirm manufacturer certifications directly on GAF.com or CertainTeed.com. Check their Google reviews, BBB status, and ask for references from local Lake Norman projects you can drive by.',
  },
  {
    question: 'Why should I avoid storm chasers after Lake Norman storms?',
    answer:
      'Storm chasers are out-of-state roofing companies that arrive after major storms, offer lowball pricing, perform substandard work, and leave before warranty claims arise. They lack local licensing, insurance, and manufacturer certifications. Lake Norman homeowners who hire storm chasers frequently face warranty disputes, incomplete work, and no recourse. Always choose a locally established, certified roofer.',
  },
  {
    question: 'What certifications should a Lake Norman roofer have?',
    answer:
      'The most important certifications are GAF Master Elite (or Factory-Certified at minimum) and CertainTeed ShingleMaster. These require annual training, proper licensing, insurance verification, and installation audits. Only 2-5% of roofers achieve these levels. These certifications unlock enhanced warranties (up to 50 years) that non-certified contractors cannot offer.',
  },
  {
    question: 'How many roofing projects has Best Roofing Now completed on Lake Norman?',
    answer:
      `Best Roofing Now has completed over 200 roofing projects in the Lake Norman area, including waterfront homes in Cornelius, Davidson, Mooresville, Denver, and Sherrills Ford. Our total project count across the Charlotte metro exceeds ${SITE_CONFIG.roofsInstalled}. You can view our completed LKN projects in our project gallery with photos and locations.`,
  },
  {
    question: 'Do you offer free estimates for Lake Norman homes?',
    answer:
      'Yes, Best Roofing Now provides completely free, no-obligation roofing estimates for all Lake Norman communities. Our estimates include a thorough roof inspection, detailed written scope of work, material specifications, pricing with no hidden fees, and warranty options. We typically schedule estimates within 1-2 business days of your call.',
  },
  {
    question: 'What warranty does Best Roofing Now offer on Lake Norman roofs?',
    answer:
      `As a GAF Factory-Certified and CertainTeed ShingleMaster contractor, we offer enhanced manufacturer warranties up to 50 years including the GAF Golden Pledge and CertainTeed SureStart PLUS coverage. We also provide our own ${SITE_CONFIG.yearsInBusiness > 5 ? '10' : '5'}-year workmanship guarantee covering installation quality. These warranty levels are not available from non-certified contractors.`,
  },
  {
    question: 'How do I get started with the best roofer on Lake Norman?',
    answer:
      'Getting started is easy. Call us at (704) 605-6047 or fill out our online contact form for a free estimate. We will schedule a convenient time to inspect your roof, discuss your options, provide a detailed written estimate, and answer all your questions. There is never any pressure or obligation. Most Lake Norman estimates are scheduled within 1-2 business days.',
  },
];

export default function BestRooferLakeNormanPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Lake Norman Roofing', url: `${SITE_CONFIG.url}/roofing-lake-norman-nc` },
          { name: 'Best Roofer Lake Norman', url: `${SITE_CONFIG.url}/best-roofer-lake-norman-nc` },
        ]}
      />
      <LocalBusinessSchema includeRating={true} />
      <FAQSchema faqs={bestRooferFAQs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/best-roofer-lake-norman-nc`}
        pageName="Best Roofer Lake Norman NC | #1 Rated LKN"
        city="Lake Norman"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.houses.modern1}
            alt="Best roofer Lake Norman NC - #1 rated roofing company serving all LKN communities"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">#1 Rated on Lake Norman</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Best Roofer Lake Norman NC<br />
              <span className="text-accent">#1 Rated LKN Roofing Company</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              {SITE_CONFIG.googleRating}-star rated, {SITE_CONFIG.roofsInstalled}+ projects completed, veteran-owned.
              Lake Norman&apos;s most trusted roofing company serving Cornelius, Davidson,
              Mooresville, Huntersville, Denver &amp; Sherrills Ford.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span>{SITE_CONFIG.googleRating} Google ({SITE_CONFIG.googleReviewCount}+ Reviews)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Award className="w-5 h-5 text-accent" />
                <span>BBB {SITE_CONFIG.bbbRating} Rated</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Shield className="w-5 h-5 text-accent" />
                <span>Veteran-Owned</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                <Calendar className="w-5 h-5" />
                Free LKN Estimate
              </Button>
              <Button href={`tel:${SITE_CONFIG.phone}`} variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Phone className="w-5 h-5" />
                (704) 605-6047
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're #1 */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Lake Norman Chooses Best Roofing Now
            </h2>
            <p className="text-gray-600 text-lg">
              We have earned our reputation as Lake Norman&apos;s best roofer through
              consistent quality, transparent pricing, and genuine care for every homeowner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyBestReasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-light rounded-xl p-6"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              <span className="text-accent font-semibold">Lake Norman Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Lake Norman Homeowners Say
            </h2>
            <p className="text-gray-600 text-lg">
              Real reviews from Lake Norman homeowners who chose Best Roofing Now
              for their roofing projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviewHighlights.map((review) => (
              <div key={review.name} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                <div>
                  <p className="font-bold text-primary">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href={SITE_CONFIG.externalProfiles.googleMaps}
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              rel="noopener"
              target="_blank"
            >
              Read all {SITE_CONFIG.googleReviewCount}+ Google reviews
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* What to Look For */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How to Choose the Best Roofer on Lake Norman
            </h2>
            <p className="text-gray-600 text-lg">
              Protect your investment by knowing what separates a great LKN roofer
              from the rest. Use this checklist when evaluating any roofing contractor.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {whatToLookFor.map((item) => (
              <div key={item.title} className="bg-light rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-green-600 uppercase tracking-wide font-semibold mb-1">Look For</p>
                      <p className="text-gray-700 text-sm">{item.good}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <ThumbsUp className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5 rotate-180" />
                    <div>
                      <p className="text-xs text-red-500 uppercase tracking-wide font-semibold mb-1">Red Flag</p>
                      <p className="text-gray-700 text-sm">{item.bad}</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm"><strong>Why it matters:</strong> {item.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Credentials */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Credentials Speak for Themselves
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">GAF Factory-Certified Contractor</h3>
                    <p className="text-gray-600">
                      Factory-certified by North America&apos;s largest roofing manufacturer.
                      Enables enhanced warranty options including the Golden Pledge warranty.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">CertainTeed ShingleMaster</h3>
                    <p className="text-gray-600">
                      Credential-verified by CertainTeed for installation excellence.
                      Qualifies for SureStart PLUS extended warranty coverage.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">BBB {SITE_CONFIG.bbbRating} Accredited</h3>
                    <p className="text-gray-600">
                      Better Business Bureau {SITE_CONFIG.bbbRating} rating with zero complaints.
                      We meet or exceed all BBB standards for trust and transparency.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">Licensed in All LKN Counties</h3>
                    <p className="text-gray-600">
                      Fully licensed, bonded, and insured in Mecklenburg, Iredell, and Catawba
                      counties, covering every Lake Norman community without restrictions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">Veteran-Owned Business</h3>
                    <p className="text-gray-600">
                      Military veteran ownership brings integrity, discipline, and a commitment
                      to doing the job right the first time on every Lake Norman project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.houses.house1}
                alt="Best roofer Lake Norman - completed roofing project on lakefront home"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">{SITE_CONFIG.roofsInstalled}+</div>
                <div className="text-sm text-white/80">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LKN Communities */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Serving Every Lake Norman Community
            </h2>
            <p className="text-gray-600 text-lg">
              The best roofer on Lake Norman is right in your neighborhood.
              We serve all LKN communities with local crews and fast response times.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lknCommunities.map((community) => (
              <Link
                key={community.slug}
                href={`/roofing-${community.slug}`}
                className="group bg-light rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {community.name}
                  </h3>
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <p className="text-gray-600 text-sm">{community.highlight}</p>
                <span className="inline-flex items-center gap-1 text-primary font-medium text-sm mt-3 group-hover:text-accent transition-colors">
                  View services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">Best Roofer FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Common questions about choosing the best roofer on Lake Norman,
              our certifications, and what sets us apart.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {bestRooferFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-primary mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            More Lake Norman Roofing Resources
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/roofing-lake-norman-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Lake Norman Roofing</h3>
              <p className="text-sm text-gray-600">Complete LKN roofing hub</p>
            </Link>
            <Link href="/luxury-roofing-lake-norman-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Luxury Roofing LKN</h3>
              <p className="text-sm text-gray-600">Premium waterfront estates</p>
            </Link>
            <Link href="/lake-norman-waterfront-roofing" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Waterfront Roofing</h3>
              <p className="text-sm text-gray-600">Lakefront home specialists</p>
            </Link>
            <Link href="/lake-norman-roofing-costs-2026" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">LKN Roofing Costs</h3>
              <p className="text-sm text-gray-600">2026 pricing guide</p>
            </Link>
            <Link href="/roofing-cornelius-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Cornelius NC</h3>
              <p className="text-sm text-gray-600">Peninsula &amp; Jetton Rd</p>
            </Link>
            <Link href="/roofing-davidson-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Davidson NC</h3>
              <p className="text-sm text-gray-600">Historic &amp; luxury homes</p>
            </Link>
            <Link href="/roofing-mooresville-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Mooresville NC</h3>
              <p className="text-sm text-gray-600">The Point &amp; Langtree</p>
            </Link>
            <Link href="/lake-norman-storm-damage-guide" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Storm Damage Guide</h3>
              <p className="text-sm text-gray-600">LKN storm recovery</p>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="location"
        city="Cornelius"
        slug="best-roofer-lake-norman-nc"
        count={4}
        title="Recent Lake Norman Roofing Projects"
        subtitle="Browse completed roofing projects from Lake Norman's #1 rated roofing company."
        schemaPageUrl={`${SITE_CONFIG.url}/best-roofer-lake-norman-nc`}
      />

      <CityGeoSection
        city="Lake Norman"
        state="NC"
        citySlug="lake-norman"
        service="Roofing"
      />

      <CTASection
        title="Ready to Work with Lake Norman's Best Roofer?"
        subtitle="Get a free estimate from the #1 rated roofing company on Lake Norman. Veteran-owned, manufacturer certified, and trusted by hundreds of LKN homeowners."
      />
    </>
  );
}
