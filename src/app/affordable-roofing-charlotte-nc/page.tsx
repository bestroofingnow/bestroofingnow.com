import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  DollarSign,
  CheckCircle,
  Phone,
  Calendar,
  Shield,
  Star,
  Calculator,
  ArrowRight,
  HelpCircle,
  AlertTriangle,
  Percent,
  CreditCard,
  FileText,
  TrendingDown,
  Award,
  Users,
  Clock,
  Home,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { TURNER_NOTES } from '@/lib/turner-family';

export const metadata: Metadata = {
  title: 'Affordable Roofing Charlotte NC | Quality at Fair Prices',
  description:
    'Affordable roofing services in Charlotte NC without sacrificing quality. Transparent pricing, flexible financing options, and insurance claim assistance. Get value you can trust from a BBB A+ rated family-owned company.',
  keywords: [
    'affordable roofing Charlotte NC',
    'cheap roofing Charlotte',
    'budget roofing Charlotte NC',
    'low cost roof repair Charlotte',
    'affordable roof replacement Charlotte',
    'roofing financing Charlotte NC',
    'roof payment plans Charlotte',
    'best value roofing Charlotte',
    'honest roofing prices Charlotte',
    'fair price roofing Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/affordable-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Affordable Roofing Charlotte NC | Quality at Fair Prices',
    description:
      'Get quality roofing services at fair prices in Charlotte NC. Transparent pricing, financing options, and insurance claim help. BBB A+ rated, veteran-owned company.',
    url: `${SITE_CONFIG.url}/affordable-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Affordable roofing Charlotte NC - quality roof installation at fair prices',
      },
    ],
  },
};

// Pricing transparency data
const pricingBreakdown = [
  {
    service: 'Roof Inspection',
    range: 'FREE',
    includes: 'Comprehensive assessment, photos, detailed report',
  },
  {
    service: 'Minor Repairs (leaks, flashing)',
    range: '$250 - $750',
    includes: 'Materials, labor, cleanup, warranty',
  },
  {
    service: 'Moderate Repairs (shingle replacement)',
    range: '$500 - $1,500',
    includes: 'Up to 100 sq ft, materials, labor, disposal',
  },
  {
    service: 'Major Repairs (structural)',
    range: '$1,500 - $4,000',
    includes: 'Decking repair, flashing, full restoration',
  },
  {
    service: 'Full Roof Replacement (avg home)',
    range: '$8,000 - $18,000',
    includes: 'Tear-off, disposal, materials, labor, warranty',
  },
  {
    service: 'Premium Roof Replacement',
    range: '$15,000 - $35,000',
    includes: 'Designer shingles or metal, extended warranty',
  },
];

// Value proposition points
const valuePropositions = [
  {
    icon: Shield,
    title: 'Quality Materials Only',
    description:
      'We use CertainTeed, GAF, and Owens Corning products. Cheaper materials cost more in the long run.',
  },
  {
    icon: Award,
    title: 'Manufacturer Warranties',
    description:
      'Our certifications mean you get the best warranties available - up to 50 years on materials.',
  },
  {
    icon: Users,
    title: 'Skilled Crews',
    description:
      'Our experienced installers do the job right the first time, eliminating costly callbacks.',
  },
  {
    icon: FileText,
    title: 'Transparent Quotes',
    description:
      'Detailed line-item estimates so you know exactly where every dollar goes. No hidden fees.',
  },
];

// Financing options
const financingOptions = [
  {
    title: '0% APR for 12 Months',
    description: 'No interest if paid within a year',
    icon: Percent,
    details: 'Perfect for planned replacements when you want to spread payments without extra cost.',
  },
  {
    title: 'Low Monthly Payments',
    description: 'From $99/month',
    icon: CreditCard,
    details: 'Terms up to 144 months available. Protect your home now, pay over time.',
  },
  {
    title: 'Same-Day Approval',
    description: 'Quick, easy application',
    icon: Clock,
    details: 'Soft credit check available. Know your options within minutes, not days.',
  },
  {
    title: 'Insurance Assistance',
    description: 'Maximize your coverage',
    icon: FileText,
    details: 'We work directly with insurance companies to help you get the coverage you deserve.',
  },
];

// Warning signs of scam contractors
const scamWarnings = [
  'Quotes significantly below market rate (more than 40% cheaper)',
  'Demands full payment upfront before work begins',
  'No physical business address or local presence',
  'Pressure to sign immediately or "deal expires today"',
  'No written contract or vague scope of work',
  'Cannot provide proof of insurance or licensing',
  'Only accepts cash payments',
  'No references from local customers',
];

// FAQs focused on cost and affordability
const faqs = [
  {
    question: 'How much does a typical roof replacement cost in Charlotte NC?',
    answer:
      'A typical roof replacement in Charlotte costs between $8,000 and $25,000 for most homes, depending on size and materials. The average Charlotte homeowner pays around $12,000-$15,000 for quality architectural shingles. We provide free, detailed estimates so you know exactly what to expect. Our pricing includes tear-off, disposal, premium materials, professional installation, and comprehensive warranties.',
  },
  {
    question: 'Do you offer financing for roofing projects?',
    answer:
      'Yes! We offer multiple financing options including 0% APR for 12 months and low monthly payment plans starting at $99/month with terms up to 144 months. Our financing partners serve a wide range of credit profiles, and approval is often same-day. We believe everyone deserves a quality roof, regardless of their immediate financial situation.',
  },
  {
    question: 'Will my homeowners insurance cover roof replacement?',
    answer:
      'Insurance typically covers roof replacement if damage was caused by a covered event like storms, hail, wind, or falling debris. Charlotte experiences significant storm activity, and many roof replacements are at least partially covered. Best Roofing Now works directly with insurance companies, provides documentation, meets with adjusters, and helps you navigate the claims process to maximize your coverage.',
  },
  {
    question: 'Why should I avoid the cheapest roofing quote?',
    answer:
      'The cheapest quote often means cut corners - inferior materials, inexperienced labor, skipped steps, or hidden fees that appear later. A roof is a major investment that protects everything you own. Companies offering prices 40% or more below market rate are typically using substandard materials, cutting corners on installation, or plan to hit you with change orders. Our pricing reflects quality materials, proper installation, and real warranties.',
  },
  {
    question: 'How can I budget for a new roof?',
    answer:
      'Start with a free inspection to understand your roof condition and timeline. If replacement is needed within 2-5 years, you can plan ahead. For unexpected needs, our financing options make monthly payments manageable. Many homeowners use home equity, personal savings, or financing. We also help maximize insurance claims for storm damage, which can significantly reduce your out-of-pocket costs.',
  },
  {
    question: 'What makes Best Roofing Now affordable without being cheap?',
    answer:
      'We are efficient, not cheap. Our crews are experienced and work quickly without sacrificing quality. We buy materials in volume from manufacturers we are certified with, passing savings to you. We do not have expensive showrooms or massive overhead - we are a family-owned company focused on roofing, not marketing. And we will never recommend unnecessary work just to inflate a bill.',
  },
  {
    question: 'Do you offer payment plans for roof repairs?',
    answer:
      'Yes, financing is available for projects starting at $1,000. Even smaller repairs can be financed to help manage unexpected expenses. For minor repairs under that threshold, we accept all major credit cards, checks, and cash. We also offer multiple payment schedule options for larger projects.',
  },
  {
    question: 'How do I know if I really need a full replacement or just repairs?',
    answer:
      'We provide honest assessments. If repairs will cost more than 50% of a replacement, or if your roof is 20+ years old with widespread wear, replacement often makes more financial sense. But we never push unnecessary replacements. Our free inspections include photos and explanations so you can make an informed decision. We will tell you the truth, even if it means losing a bigger job.',
  },
];

// Service pricing schema for rich results
function AffordableRoofingSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Affordable Roofing Services in Charlotte NC',
    description:
      'Quality roofing services at fair, transparent prices in Charlotte NC. Financing available, insurance assistance, and honest pricing from a BBB A+ rated family-owned company.',
    provider: {
      '@type': 'RoofingContractor',
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
      name: 'Roofing Services Pricing',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Free Roof Inspection',
          description: 'Comprehensive roof assessment with photos and detailed report',
          price: '0',
          priceCurrency: 'USD',
        },
        {
          '@type': 'Offer',
          name: 'Roof Repair Services',
          description: 'Minor to major roof repairs including leaks, flashing, and shingle replacement',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '250',
            maxPrice: '4000',
          },
        },
        {
          '@type': 'Offer',
          name: 'Roof Replacement',
          description: 'Complete roof replacement with premium materials and warranty',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '8000',
            maxPrice: '35000',
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

export default function AffordableRoofingCharlottePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Affordable Roofing Charlotte NC', url: `${SITE_CONFIG.url}/affordable-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AffordableRoofingSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="Affordable roofing Charlotte NC - quality roof installation at fair prices"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm font-semibold">Fair Pricing, Real Value</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Affordable Roofing in <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Quality roofing that fits your budget - not the cheapest, but the best value.
            </p>

            {/* Value Statement Box */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 max-w-2xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent-light" />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">Our Promise to Charlotte Homeowners</h2>
                  <p className="text-white/80">
                    We deliver quality workmanship and premium materials at fair, transparent prices.
                    No bait-and-switch. No hidden fees. No pressure tactics. Just honest roofing
                    from a family that lives and works in this community.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calculator className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Financing Available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What "Affordable" Really Means */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <TrendingDown className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Understanding True Value</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                What &quot;Affordable&quot; Really Means
              </h2>
              <p className="text-gray text-lg mb-6">
                Affordable does not mean cheap. It means getting the best value for your investment.
                A roof that costs 30% less but fails in 10 years instead of 30 is not affordable -
                it is expensive.
              </p>
              <p className="text-gray text-lg mb-6">
                True affordability comes from quality materials installed correctly the first time,
                backed by real warranties, from a company that will still be here when you need us.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Long-Term Value Over Short-Term Savings</strong>
                    <p className="text-gray text-sm">
                      Quality roofing that lasts 25-50 years costs less per year than cheap work that needs replacing in 10-15.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">No Surprise Costs</strong>
                    <p className="text-gray text-sm">
                      Our detailed quotes include everything. No change orders, no &quot;we found something&quot; upsells.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Flexible Payment Options</strong>
                    <p className="text-gray text-sm">
                      0% financing and payment plans mean you get quality roofing without draining savings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Quality affordable roofing project in Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 max-w-xs">
                <p className="text-sm text-gray italic">
                  &quot;{TURNER_NOTES.james.onHonesty}&quot;
                </p>
                <p className="text-primary font-semibold text-sm mt-2">- James Turner, Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How We Deliver Value Without Cutting Corners
            </h2>
            <p className="text-gray text-lg">
              Our approach to affordable roofing means smart efficiency, not compromised quality.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuePropositions.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Pricing Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Transparent Pricing</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Pricing Guide for Charlotte Homeowners
            </h2>
            <p className="text-gray text-lg">
              Here is what you can expect to pay for roofing services in Charlotte NC.
              These are real ranges based on our completed projects.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-light rounded-xl overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Service</th>
                      <th className="px-6 py-4 text-left font-semibold">Price Range</th>
                      <th className="px-6 py-4 text-left font-semibold hidden md:table-cell">Includes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {pricingBreakdown.map((item, index) => (
                      <tr key={item.service} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 font-medium text-dark">{item.service}</td>
                        <td className="px-6 py-4">
                          <span className={item.range === 'FREE' ? 'text-green-600 font-bold' : 'text-accent font-semibold'}>
                            {item.range}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray text-sm hidden md:table-cell">{item.includes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-100 px-6 py-4 text-sm text-gray">
                <strong>Note:</strong> Actual costs depend on roof size, complexity, material choice, and condition.
                Contact us for a free, detailed estimate specific to your home.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Want an Exact Price for Your Roof?
              </h2>
              <p className="text-white/90">
                Get a free, detailed estimate. We will show you exactly where every dollar goes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-accent"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Free Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-accent hover:bg-white/90"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <CreditCard className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Payment Options</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Flexible Financing to Fit Your Budget
            </h2>
            <p className="text-gray text-lg">
              Your roof protects everything you love. Do not let budget concerns delay necessary repairs.
              We offer multiple ways to make quality roofing affordable.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financingOptions.map((option) => (
              <div
                key={option.title}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-transparent hover:border-primary"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <option.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-dark mb-1">{option.title}</h3>
                <p className="text-primary font-semibold text-sm mb-3">{option.description}</p>
                <p className="text-gray text-sm">{option.details}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/financing"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              Learn More About Financing Options
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Insurance Claim Assistance */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src={IMAGES.projects.contractor1}
                alt="Insurance claim assistance for roofing in Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-4">
                <FileText className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Insurance Help</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Insurance Claim Assistance
              </h2>
              <p className="text-gray text-lg mb-6">
                Storm damage? Hail damage? Your homeowners insurance may cover your roof replacement
                or repair. We work directly with insurance companies to help maximize your coverage
                and minimize your out-of-pocket costs.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-dark">Free damage assessment and documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-dark">We meet with your insurance adjuster</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-dark">Help with paperwork and claims process</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-dark">Work within your approved budget</span>
                </li>
              </ul>
              <Button
                href="/insurance-claim-roofing-charlotte-nc"
                variant="outline"
                icon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
              >
                Learn About Insurance Claims
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Warning: Avoiding Scams */}
      <section className="section bg-red-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 rounded-full px-4 py-2 mb-4">
                <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Important Warning</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                How to Avoid &quot;Too Good to Be True&quot; Roofing Scams
              </h2>
              <p className="text-gray text-lg">
                Every storm season, Charlotte sees storm chasers offering rock-bottom prices.
                Here is how to protect yourself from roofing scams that cost you more in the long run.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="font-bold text-dark text-xl mb-6">Red Flags to Watch For:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {scamWarnings.map((warning) => (
                  <div key={warning} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-dark">{warning}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-bold text-dark mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  What Legitimate Contractors Do:
                </h4>
                <p className="text-gray">
                  Reputable contractors like Best Roofing Now have a physical local address, carry proper insurance,
                  provide written contracts with clear scope, offer references, never demand full payment upfront,
                  and have verifiable reviews. We have been serving Charlotte for over {SITE_CONFIG.yearsInBusiness} years
                  with a BBB A+ rating and 5.0 Google rating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Budget for Roofing */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Calculator className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Planning Ahead</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How to Budget for Your Roofing Project
            </h2>
            <p className="text-gray text-lg">
              Whether you are planning ahead or facing an unexpected repair, here is how to
              approach roofing costs wisely.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-light rounded-xl">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="font-bold text-dark text-xl mb-3">Start with an Inspection</h3>
              <p className="text-gray mb-4">
                A free inspection tells you exactly where your roof stands. You might have more time
                than you think - or you might need action sooner than expected.
              </p>
              <ul className="text-sm text-gray space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Free, no-obligation assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Detailed condition report
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Honest timeline estimate
                </li>
              </ul>
            </div>
            <div className="p-8 bg-light rounded-xl">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="font-bold text-dark text-xl mb-3">Know Your Options</h3>
              <p className="text-gray mb-4">
                Different materials and approaches have different costs. We will help you understand
                the trade-offs between budget and longevity.
              </p>
              <ul className="text-sm text-gray space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Material comparisons
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Repair vs. replace analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Cost-per-year calculations
                </li>
              </ul>
            </div>
            <div className="p-8 bg-light rounded-xl">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="font-bold text-dark text-xl mb-3">Choose Your Path</h3>
              <p className="text-gray mb-4">
                Whether you pay cash, finance, or use insurance, we work with you to make
                quality roofing fit your situation.
              </p>
              <ul className="text-sm text-gray space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  0% financing available
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Insurance claim help
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Phased project options
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* James Turner Personal Note */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-white/20 mx-auto mb-6 flex items-center justify-center">
              <Home className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              A Note on Honest Pricing
            </h2>
            <blockquote className="text-xl md:text-2xl text-white/90 italic mb-6">
              &quot;{TURNER_NOTES.james.onHonesty}&quot;
            </blockquote>
            <p className="text-white/80 mb-4">
              When I started Best Roofing Now, I made a promise to myself and to Charlotte:
              we would never oversell, never cut corners, and never play games with pricing.
              My family name is on this company, and I intend to keep it that way.
            </p>
            <p className="text-white/80 mb-8">
              If you need a new roof, I will tell you. If you just need a repair, I will tell you that too.
              And if your roof is fine and you do not need anything, I will be happy to tell you that as well.
              That is what honest pricing means to us.
            </p>
            <p className="text-accent-light font-semibold text-lg">
              - James Turner, Owner & Founder
            </p>
            <p className="text-white/60 text-sm mt-2">
              Military Veteran | Charlotte Resident for {SITE_CONFIG.yearsInBusiness + 10}+ Years
            </p>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Work Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              Quality roofing at fair prices. See examples of our recent projects.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Affordable roof replacement project Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="Budget-friendly CertainTeed shingle installation Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Value roofing project aerial view Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Fair price residential roofing Charlotte area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
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
                Frequently Asked Questions About Roofing Costs
              </h2>
              <p className="text-gray text-lg">
                Honest answers to your questions about affordable roofing in Charlotte NC.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-dark mb-3">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service City Links */}
      <ServiceCityLinks
        city="Charlotte"
        citySlug="charlotte-nc"
        title="Our Roofing Services in Charlotte"
        subtitle="Quality roofing services at fair prices throughout the Charlotte metro area"
      />

      {/* Final CTA */}
      <CTASection
        title="Ready for a Fair, Honest Roofing Estimate?"
        subtitle="Get a free, no-obligation quote with transparent pricing. We will show you exactly what you need - nothing more, nothing less."
      />
    </>
  );
}
