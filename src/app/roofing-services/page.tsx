import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Home,
  ArrowRight,
  CheckCircle,
  Phone,
  Shield,
  Award,
  Clock,
  Building2,
  Star,
  MapPin,
  Users,
  FileCheck,
  Wrench,
  ExternalLink,
  Calendar,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { FAQ } from '@/components/sections/FAQ';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  ServiceSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DirectoryCitations, TrustBadges } from '@/components/ui/DirectoryCitations';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { EstimateButton } from '@/components/estimate';

export const metadata: Metadata = {
  title: 'Roofing Contractor Charlotte NC | 5-Star Rated | Best Roofing Now',
  description:
    'Best Roofing Now is Charlotte NC\'s trusted roofing contractor since 2020. Veteran-owned, GAF & CertainTeed certified. 500+ roofs completed, 5.0 Google rating. Free inspections. Call (704) 605-6047.',
  keywords: [
    'roofing contractor Charlotte NC',
    'roofing contractor near me',
    'Charlotte roofing contractor',
    'roofing company Charlotte NC',
    'roofer Charlotte NC',
    'roof repair Charlotte NC',
    'roof replacement Charlotte NC',
    'roof inspection Charlotte',
    'emergency roof repair Charlotte',
    'storm damage roof repair Charlotte',
    'residential roofing Charlotte',
    'commercial roofing Charlotte NC',
    'best roofer Charlotte',
    'licensed roofing contractor Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-services`,
  },
  openGraph: {
    title: 'Roofing Contractor Charlotte NC | Veteran-Owned | Best Roofing Now',
    description:
      'Charlotte\'s most trusted roofing contractor. Veteran-owned since 2020. GAF & CertainTeed certified. 500+ projects completed. Free inspections & honest assessments.',
    url: `${SITE_CONFIG.url}/roofing-services`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.roofTeam,
        width: 1200,
        height: 630,
        alt: 'Best Roofing Now - Professional Roofing Contractor Charlotte NC',
      },
    ],
  },
};

// Authority outbound links for SEO credibility
const authorityLinks = {
  gaf: 'https://www.gaf.com/',
  certainteed: 'https://www.certainteed.com/',
  nrca: 'https://www.nrca.net/',
  ibhs: 'https://ibhs.org/',
  energyStar: 'https://www.energystar.gov/',
  jamesHardie: 'https://www.jameshardie.com/',
  velux: 'https://www.veluxusa.com/',
  owensCorning: 'https://www.owenscorning.com/',
};

// Business profile links for citations
const businessProfiles = {
  google: 'https://www.google.com/maps/place/Best+Roofing+Now',
  yelp: 'https://www.yelp.com/biz/best-roofing-now-charlotte',
  bbb: 'https://www.bbb.org/us/nc/charlotte/profile/roofing-contractors/best-roofing-now-0473-90793988',
  angi: 'https://www.angi.com/companylist/us/nc/charlotte/best-roofing-now-reviews-10768833.htm',
  facebook: 'https://www.facebook.com/bestroofingnow',
  projectMapIt: 'https://projectmapit.com/best-roofing-now-llc/map',
};

// Core roofing services with authority links
const roofingServices = [
  {
    slug: 'residential-roofing',
    title: 'Residential Roofing',
    description: 'Complete roofing services for Charlotte homes. From cottages to custom estates, we protect your investment with premium materials from GAF and CertainTeed.',
    icon: Home,
    highlights: ['All home types', 'GAF certified', 'Family-owned'],
    authorityLink: authorityLinks.gaf,
    authorityName: 'GAF',
  },
  {
    slug: 'commercial-roofing',
    title: 'Commercial Roofing',
    description: 'Expert commercial roofing for flat roofs, TPO, PVC, and metal systems. Minimize business disruption with efficient installation.',
    icon: Building2,
    highlights: ['Flat roof experts', 'TPO & PVC', 'Minimal downtime'],
    authorityLink: authorityLinks.nrca,
    authorityName: 'NRCA',
  },
  {
    slug: 'roof-repair',
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, storm damage, and general wear. Same-day emergency service available 24/7.',
    icon: Wrench,
    highlights: ['Same-day service', 'Leak specialists', 'Storm damage'],
    authorityLink: null,
    authorityName: null,
  },
  {
    slug: 'roof-replacement',
    title: 'Roof Replacement',
    description: 'Complete roof replacement with premium CertainTeed, GAF, and Owens Corning materials. Most roofs completed in one day.',
    icon: Home,
    highlights: ['Premium materials', 'Lifetime warranties', 'Financing available'],
    authorityLink: authorityLinks.certainteed,
    authorityName: 'CertainTeed',
  },
  {
    slug: 'storm-damage',
    title: 'Storm Damage & Insurance Claims',
    description: 'Expert storm damage assessment and full insurance claim assistance. We document damage, meet adjusters, and fight for fair settlements.',
    icon: Shield,
    highlights: ['Insurance experts', 'Full documentation', 'Claim advocacy'],
    authorityLink: authorityLinks.ibhs,
    authorityName: 'IBHS',
  },
  {
    slug: 'roof-inspection',
    title: 'Roof Inspection',
    description: 'Free comprehensive inspections with detailed photo reports. Know your roof\'s true condition before problems arise.',
    icon: FileCheck,
    highlights: ['100% free', 'Photo report', 'No obligation'],
    authorityLink: null,
    authorityName: null,
  },
];

// Customer reviews (real testimonials)
const customerReviews = [
  {
    name: 'Sarah M.',
    location: 'Matthews, NC',
    service: 'Roof Replacement',
    rating: 5,
    text: 'We dealt with Banning and James both were quick to respond and extremely helpful. They were able to get the insurance company to cover all the repairs and a whole new roof. Highly recommend!',
    source: 'Google',
  },
  {
    name: 'Mike T.',
    location: 'Huntersville, NC',
    service: 'Storm Damage Repair',
    rating: 5,
    text: 'Best Roofing Now is exactly what their name says - the best! James was honest about what we needed and did not try to upsell us. The crew finished in one day and cleaned up perfectly.',
    source: 'Google',
  },
  {
    name: 'Jennifer L.',
    location: 'Charlotte, NC',
    service: 'Roof Inspection',
    rating: 5,
    text: 'After a bad storm damaged our roof, we called several companies. Best Roofing Now was the only one who did not try to scare us into buying more than we needed. Honest and professional.',
    source: 'Google',
  },
  {
    name: 'David R.',
    location: 'Concord, NC',
    service: 'Insurance Claim',
    rating: 5,
    text: 'James handled our entire insurance claim from start to finish. We got a brand new roof and barely had to lift a finger. Veteran-owned business that truly cares about their customers.',
    source: 'BBB',
  },
];

// Comprehensive FAQs for SEO
const roofingFAQs = [
  {
    question: 'How much does a new roof cost in Charlotte?',
    answer: 'Roof replacement in Charlotte typically costs $8,000-$25,000+ for residential homes, depending on size, materials, and complexity. Asphalt shingles are most affordable ($8,000-$15,000), while metal roofing costs $15,000-$40,000 but lasts 50+ years. We provide free, detailed estimates with transparent pricing and offer financing as low as $99/month through PowerPay.',
  },
  {
    question: 'How long does it take to replace a roof?',
    answer: 'Most residential roof replacements in Charlotte are completed in 1-3 days depending on size, complexity, and weather conditions. At Best Roofing Now, we complete most standard homes in just one day. We work efficiently while maintaining quality, and our crews clean up thoroughly at the end of each day.',
  },
  {
    question: 'Does homeowners insurance cover roof replacement?',
    answer: 'Homeowners insurance typically covers roof damage caused by storms, hail, wind, fallen trees, and other sudden events - not normal wear and tear. Best Roofing Now specializes in insurance claims and has helped thousands of Charlotte homeowners get fair settlements. We document damage, meet with adjusters, and advocate for full coverage on your behalf.',
  },
  {
    question: 'How do I know if I need a new roof or just repairs?',
    answer: 'Signs you may need roof work include: missing or damaged shingles, granules in gutters, visible leaks or water stains, roof age over 20 years, sagging areas, or daylight visible in the attic. According to the National Roofing Contractors Association, most asphalt roofs last 20-25 years. We offer free inspections with honest assessments - we\'ll tell you if a repair will suffice rather than pushing an unnecessary replacement.',
  },
  {
    question: 'What\'s the best roofing material for Charlotte\'s climate?',
    answer: 'For most Charlotte homes, we recommend CertainTeed Landmark or GAF Timberline HDZ architectural shingles for their durability, wind resistance (up to 130 mph), and value. Charlotte\'s hot summers and occasional severe storms require materials rated for heat and impact resistance. For premium longevity, metal roofing offers 50+ year lifespans and reflects solar heat, reducing cooling costs by up to 25%.',
  },
  {
    question: 'Do you offer financing for roof replacement?',
    answer: 'Yes! We offer flexible financing options through PowerPay with payments as low as $99/month. Many homeowners qualify for promotional 0% interest periods. Financing allows you to get the roof you need now without a large upfront payment. Ask about financing options during your free consultation.',
  },
  {
    question: 'What areas do you serve near Charlotte?',
    answer: 'Best Roofing Now serves Charlotte and 60+ surrounding communities including Huntersville, Cornelius, Davidson, Matthews, Mint Hill, Pineville, Concord, Kannapolis, Harrisburg, Monroe, Indian Trail, Waxhaw, Gastonia, Mt Holly, Belmont, Mooresville, Statesville, Denver, Lincolnton, Lake Norman, and South Carolina cities like Rock Hill, Fort Mill, Tega Cay, and Indian Land.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Absolutely. Best Roofing Now is fully licensed, bonded, and insured in North Carolina and South Carolina. We carry both general liability and workers\' compensation insurance to protect you and our team. We\'re also GAF Factory-Certified, CertainTeed SELECT ShingleMaster certified, and an Owens Corning Preferred Contractor. Verify our credentials through the BBB where we maintain an A+ rating.',
  },
];

// Service areas by county
const serviceAreasByCounty = [
  {
    county: 'Mecklenburg County',
    cities: ['Charlotte', 'Huntersville', 'Cornelius', 'Davidson', 'Matthews', 'Mint Hill', 'Pineville'],
  },
  {
    county: 'Cabarrus County',
    cities: ['Concord', 'Kannapolis', 'Harrisburg'],
  },
  {
    county: 'Union County',
    cities: ['Monroe', 'Indian Trail', 'Waxhaw', 'Stallings', 'Weddington', 'Marvin', 'Wesley Chapel'],
  },
  {
    county: 'Gaston County',
    cities: ['Gastonia', 'Mt Holly', 'Belmont'],
  },
  {
    county: 'Iredell County',
    cities: ['Mooresville', 'Statesville'],
  },
  {
    county: 'Lincoln County',
    cities: ['Denver', 'Lincolnton'],
  },
  {
    county: 'York County, SC',
    cities: ['Rock Hill', 'Fort Mill', 'Tega Cay'],
  },
  {
    county: 'Lancaster County, SC',
    cities: ['Indian Land', 'Lancaster'],
  },
];

// Virtual service for schema
const roofingCategoryService = {
  slug: 'roofing-services',
  title: 'Roofing Contractor Charlotte NC',
  description: 'Professional roofing contractor serving Charlotte NC and surrounding areas. Roof repair, replacement, inspection, storm damage, and emergency services. Veteran-owned, GAF & CertainTeed certified.',
  keywords: ['roofing contractor Charlotte NC', 'roofing company Charlotte', 'roofer Charlotte NC', 'roof repair Charlotte'],
  priceRange: '$200 - $40,000+',
};

export default function RoofingServicesPage() {
  const pageUrl = `${SITE_CONFIG.url}/roofing-services`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="Roofing Contractor Charlotte NC | Veteran-Owned | Best Roofing Now"
        description="Charlotte's trusted roofing contractor since 2020. Veteran-owned, GAF & CertainTeed certified. 500+ roofs completed. Free inspections."
        url={pageUrl}
        primaryImage={IMAGES.hero.roofTeam}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Contractor Charlotte NC', url: pageUrl },
        ]}
      />
      <ServiceSchema service={roofingCategoryService} />
      <FAQSchema faqs={roofingFAQs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Contractor Charlotte NC', url: pageUrl },
        ]}
      />

      {/* Visual Breadcrumbs */}
      <div className="bg-light border-b border-gray-200">
        <div className="container">
          <Breadcrumbs
            items={[{ name: 'Roofing Contractor Charlotte NC', href: '/roofing-services' }]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.hero.roofTeam}
            alt="Best Roofing Now - Professional roofing contractor team in Charlotte NC"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            {/* Trust badges inline with hero */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-sm font-medium px-3 py-1.5 rounded-full">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                5.0 Google Rating
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-sm font-medium px-3 py-1.5 rounded-full">
                <Shield className="w-4 h-4" />
                GAF Certified
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-sm font-medium px-3 py-1.5 rounded-full">
                <Users className="w-4 h-4" />
                Veteran-Owned
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Roofing Contractor Charlotte NC
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              Veteran-Owned &amp; Family-Operated Since 2020
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              Serving Charlotte and 60+ surrounding communities in NC &amp; SC. GAF &amp; CertainTeed certified with 500+ roofs completed.
              We deliver honesty, integrity, and quality workmanship on every project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="primary"
                size="lg"
                icon={<Phone className="w-5 h-5" />}
              >
                Call Now: {SITE_CONFIG.phone}
              </Button>
              <EstimateButton
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Get Free Estimate
              </EstimateButton>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Strip */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="container">
          <TrustBadges />
        </div>
      </section>

      {/* Intro / Trust Snapshot Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Charlotte&apos;s Most Trusted Roofing Company
              </h2>
              <p className="text-lg text-gray leading-relaxed">
                At Best Roofing Now, we believe in treating every home like our own. Founded by veteran Fred Turner and his son James,
                our mission is simple: provide honest assessments, quality workmanship, and transparent pricing. We&apos;ll tell you the
                truth about your roof - even when it means we don&apos;t make a sale.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-gray text-sm">Projects Completed</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">60+</div>
                <p className="text-gray text-sm">Cities Served</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5.0</div>
                <p className="text-gray text-sm">Google Rating</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1-Day</div>
                <p className="text-gray text-sm">Most Roofs Completed</p>
              </div>
            </div>

            {/* Certification Badges with Authority Links */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <a
                href={authorityLinks.gaf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray hover:text-primary transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-accent" />
                GAF Factory-Certified
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={authorityLinks.certainteed}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray hover:text-primary transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-accent" />
                CertainTeed SELECT ShingleMaster
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={authorityLinks.owensCorning}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray hover:text-primary transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-accent" />
                Owens Corning Preferred
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="flex items-center gap-2 text-gray">
                <CheckCircle className="w-5 h-5 text-accent" />
                Licensed &amp; Fully Insured
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Why Charlotte Homeowners Choose Best Roofing Now
            </h2>
            <p className="text-center text-gray mb-10 max-w-2xl mx-auto">
              When that big storm rolls through Charlotte, you need a roofing contractor you can trust -
              not an out-of-town storm chaser who&apos;ll be gone next month.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-light p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">Veteran-Owned &amp; Family-Operated Since 2020</h3>
                    <p className="text-gray text-sm">
                      Founded by military veteran Fred Turner and his son James. We bring military discipline,
                      attention to detail, and commitment to excellence to every roofing project.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-light p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">GAF &amp; CertainTeed Certified</h3>
                    <p className="text-gray text-sm">
                      Our certifications mean manufacturer warranties up to lifetime coverage. Learn more about{' '}
                      <a href={authorityLinks.gaf} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">
                        GAF warranty options
                      </a>{' '}
                      and what they mean for your roof.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-light p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">We&apos;ll Tell You If You DON&apos;T Need a Roof</h3>
                    <p className="text-gray text-sm">
                      According to the{' '}
                      <a href={authorityLinks.nrca} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">
                        NRCA
                      </a>
                      , most asphalt roofs last 20-25 years. If yours has life left, we&apos;ll tell you -
                      even when it means we don&apos;t make a sale.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-light p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">Most Roofs Completed in ONE Day</h3>
                    <p className="text-gray text-sm">
                      Our efficient crews and proven process mean minimal disruption to your life.
                      Most residential roofs are completed the same day we start.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-light p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">Free Inspections with Photo Documentation</h3>
                    <p className="text-gray text-sm">
                      Every inspection includes detailed photos of your roof&apos;s condition.
                      No pressure, no obligation - just honest information to help you make informed decisions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-light p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">Full Insurance Claim Assistance</h3>
                    <p className="text-gray text-sm">
                      We handle your insurance claim from start to finish. We document damage per{' '}
                      <a href={authorityLinks.ibhs} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">
                        IBHS standards
                      </a>
                      , meet with adjusters, and fight for fair settlements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            Our Roofing Services
          </h2>
          <p className="text-gray text-center max-w-2xl mx-auto mb-12">
            From minor repairs to complete roof systems, we provide every roofing service your Charlotte home or business needs.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roofingServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  {service.authorityLink && (
                    <p className="text-xs text-gray-400 mb-3">
                      Learn more at{' '}
                      <span className="text-primary">{service.authorityName}</span>
                    </p>
                  )}
                  <span className="inline-flex items-center text-primary font-semibold group-hover:text-accent transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Additional Services Links */}
          <div className="mt-12 text-center">
            <p className="text-gray mb-4">We also offer specialized services:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/gutter-services" className="text-primary hover:text-accent font-medium">
                Gutter Installation &amp; Repair
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/siding-services" className="text-primary hover:text-accent font-medium">
                <span>Siding Installation</span>
                <span className="text-xs text-gray-500 ml-1">(
                  <a href={authorityLinks.jamesHardie} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    James Hardie Certified
                  </a>
                )</span>
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/specialty-services" className="text-primary hover:text-accent font-medium">
                <span>Skylight Installation</span>
                <span className="text-xs text-gray-500 ml-1">(
                  <a href={authorityLinks.velux} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    VELUX Certified
                  </a>
                )</span>
              </Link>
            </div>
            <div className="mt-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                View All 27 Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 rounded-full px-4 py-2 mb-4">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold">5.0 Star Rating</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                What Charlotte Homeowners Say
              </h2>
              <p className="text-gray">
                Don&apos;t just take our word for it - hear from our satisfied customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {customerReviews.map((review, index) => (
                <div key={index} className="bg-light rounded-xl p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray mb-4 italic">&quot;{review.text}&quot;</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-dark">{review.name}</p>
                      <p className="text-sm text-gray">{review.location} - {review.service}</p>
                    </div>
                    <span className="text-xs text-gray-400">via {review.source}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Review Profile Links */}
            <div className="text-center">
              <p className="text-gray mb-4">See more reviews on:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={businessProfiles.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  Google Reviews
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={businessProfiles.yelp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  Yelp
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={businessProfiles.bbb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  BBB (A+ Rated)
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={businessProfiles.angi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  Angi
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        faqs={roofingFAQs}
        title="Roofing Contractor FAQ"
        subtitle="Common questions about hiring a roofing contractor in Charlotte NC"
      />

      {/* Service Areas Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Roofing Services Throughout Charlotte Metro
              </h2>
              <p className="text-gray max-w-2xl mx-auto">
                Best Roofing Now proudly serves Charlotte and 60+ surrounding communities across
                Mecklenburg, Cabarrus, Union, Gaston, Iredell, Lincoln, Catawba counties in NC,
                and York and Lancaster counties in SC.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {serviceAreasByCounty.map((area, index) => (
                <div key={index} className="bg-light rounded-xl p-5">
                  <h3 className="font-bold text-dark mb-3 text-sm uppercase tracking-wide">
                    {area.county}
                  </h3>
                  <ul className="space-y-1">
                    {area.cities.map((city, cityIndex) => (
                      <li key={cityIndex}>
                        <Link
                          href={`/locations/${city.toLowerCase().replace(/\s+/g, '-')}-${area.county.includes('SC') ? 'sc' : 'nc'}`}
                          className="text-gray hover:text-primary text-sm transition-colors"
                        >
                          {city}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                View All 60+ Service Areas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Directions Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Visit Our Charlotte Office
              </h2>
              <p className="text-gray">
                Located at 5701 N Sharon Amity Rd Suite B, Charlotte, NC 28215
              </p>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              {/* Google Map Embed */}
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.0088!2d-80.7802!3d35.2468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDE0JzQ4LjUiTiA4MMKwNDYnNDguNyJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Best Roofing Now Location Map"
                  className="w-full h-full"
                />
              </div>

              {/* Location Details */}
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-dark mb-1">Address</h3>
                      <p className="text-gray text-sm">
                        5701 N Sharon Amity Rd<br />
                        Suite B<br />
                        Charlotte, NC 28215
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-dark mb-1">Phone</h3>
                      <a
                        href={`tel:${SITE_CONFIG.phoneClean}`}
                        className="text-primary hover:text-accent text-sm"
                      >
                        {SITE_CONFIG.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-dark mb-1">Hours</h3>
                      <p className="text-gray text-sm">
                        Mon-Fri: 7AM - 7PM<br />
                        Sat: 8AM - 5PM<br />
                        Sun: Emergency Only
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-gray text-sm">
                    <strong>Directions:</strong> Located off N Sharon Amity Rd near the intersection with The Plaza,
                    just minutes from the Eastland area. Easy access from I-485 and I-85.
                    <a
                      href={businessProfiles.google}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-accent ml-1"
                    >
                      Get directions on Google Maps →
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/storm-restoration" className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Storm Damage &amp; Insurance</h3>
              <p className="text-gray text-sm">Expert storm damage restoration and insurance claim assistance for Charlotte homeowners.</p>
            </Link>
            <Link href="/gutter-services" className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Gutter Services</h3>
              <p className="text-gray text-sm">Complete gutter solutions including installation, repair, cleaning, and gutter guards.</p>
            </Link>
            <Link href="/siding-services" className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Siding Services</h3>
              <p className="text-gray text-sm">Professional siding installation and repair. James Hardie certified installer.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Directory Citations */}
      <section className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <DirectoryCitations pageType="service" maxLinks={4} variant="inline" title="Verified Business Profiles" />
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <span>GAF Certified</span>
              <span className="text-gray-300">|</span>
              <span>Veteran-Owned</span>
              <span className="text-gray-300">|</span>
              <span>BBB A+ Rated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-accent text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Charlotte&apos;s Most Trusted, Honest Roofing Contractor
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Call Best Roofing Now for your free inspection today. No pressure, no obligation -
              just honest answers from a veteran-owned, family-operated business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="secondary"
                size="lg"
                className="bg-white !text-accent hover:bg-white/90"
                icon={<Phone className="w-5 h-5" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
              <EstimateButton
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-accent"
              >
                <Calendar className="w-5 h-5" />
                Get Your Free Estimate
              </EstimateButton>
            </div>

            <p className="mt-6 text-white/80 text-sm">
              Serving Charlotte, Huntersville, Matthews, Concord, and 60+ communities across NC &amp; SC
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
