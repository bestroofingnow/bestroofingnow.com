import { Metadata } from 'next';
import { SEOImage } from '@/components/ui/SEOImage';
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
  Users,
  Clock,
  Wrench,
  Home,
  Layers,
  Hammer,
  Search,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Siding Charlotte NC | Install',
  description:
    'Professional siding installation in Charlotte NC by Best Roofing Now. Vinyl siding, James Hardie fiber cement, LP SmartSide, and board & batten. Veteran-owned, BBB A+ rated. Free estimates for siding replacement and repair.',
  keywords: [
    'siding installation charlotte nc',
    'siding company charlotte',
    'vinyl siding charlotte nc',
    'james hardie siding charlotte',
    'fiber cement siding charlotte nc',
    'siding replacement charlotte',
    'siding contractors charlotte nc',
    'siding repair charlotte nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/siding-installation-charlotte-nc`,
  },
  openGraph: {
    title: 'Siding Charlotte NC | Install | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned siding contractor in Charlotte NC. Vinyl, James Hardie fiber cement, LP SmartSide installation and repair. Free estimates.',
    url: `${SITE_CONFIG.url}/siding-installation-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero2,
        width: 1200,
        height: 630,
        alt: 'Professional siding installation in Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

const services = [
  {
    icon: Home,
    title: 'Vinyl Siding',
    description: 'Affordable, low-maintenance vinyl siding in a wide range of colors and styles for Charlotte homes.',
    href: '/services/residential-roofing',
  },
  {
    icon: Shield,
    title: 'James Hardie Fiber Cement',
    description: 'Premium fiber cement siding engineered for Charlotte\'s humid climate with superior durability.',
    href: '/services/residential-roofing',
  },
  {
    icon: Layers,
    title: 'LP SmartSide',
    description: 'Engineered wood siding with the beauty of real wood and the strength of treated composites.',
    href: '/services/residential-roofing',
  },
  {
    icon: Hammer,
    title: 'Board & Batten',
    description: 'Classic vertical board & batten siding that adds timeless curb appeal to any Charlotte property.',
    href: '/services/residential-roofing',
  },
  {
    icon: Wrench,
    title: 'Siding Repair',
    description: 'Expert siding repair for storm damage, cracks, warping, and moisture intrusion in Mecklenburg County.',
    href: '/services/residential-roofing',
  },
  {
    icon: Search,
    title: 'Siding Inspection',
    description: 'Comprehensive siding inspections to identify damage, moisture issues, and replacement needs.',
    href: '/services/roof-inspection',
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied customers across the region.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC contractor with comprehensive liability insurance for every project.',
  },
  {
    icon: Users,
    title: 'Certified Installers',
    description: 'James Hardie Preferred, LP SmartSide, and CertainTeed certified for premium warranty coverage.',
  },
  {
    icon: Clock,
    title: 'On-Time Completion',
    description: 'We finish siding projects on schedule with minimal disruption to your Charlotte home.',
  },
];

const localAreas = [
  'Uptown Charlotte',
  'South Charlotte',
  'Myers Park',
  'Dilworth',
  'Plaza Midwood',
  'NoDa',
  'Ballantyne',
  'Steele Creek',
  'University City',
  'Matthews',
];

const nearbyCities = [
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Mooresville', href: '/roofing-mooresville-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Mint Hill', href: '/locations/mint-hill-nc' },
  { name: 'Indian Trail', href: '/locations/indian-trail-nc' },
  { name: 'Lake Norman', href: '/siding-installation-lake-norman-nc' },
];

const faqs = [
  {
    question: 'How much does siding installation cost in Charlotte NC?',
    answer:
      'Siding installation costs in Charlotte typically range from $6,000 to $25,000 depending on the material, home size, and complexity. Vinyl siding is the most affordable at $3-$8 per square foot installed, while James Hardie fiber cement runs $8-$14 per square foot. We provide free, detailed estimates with transparent pricing for every Charlotte siding project.',
  },
  {
    question: 'What is the best siding material for Charlotte\'s climate?',
    answer:
      'James Hardie fiber cement siding is one of the best choices for Charlotte\'s humid subtropical climate. It resists moisture, won\'t rot or warp, and handles temperature swings from hot summers to occasional winter freezes. Vinyl siding is also excellent for Charlotte homes, offering low maintenance and good moisture resistance at a lower price point.',
  },
  {
    question: 'How long does siding installation take in Charlotte?',
    answer:
      'Most Charlotte siding installations take 1-3 weeks depending on home size and material choice. A standard vinyl siding project on a 2,000 sq ft home typically takes 5-7 working days. Fiber cement and engineered wood may take slightly longer due to more precise installation requirements. Weather can also affect the timeline during Charlotte\'s rainy seasons.',
  },
  {
    question: 'Do I need a permit for siding replacement in Charlotte?',
    answer:
      'Yes, Mecklenburg County typically requires a building permit for full siding replacement in Charlotte. Our team handles all permit applications and inspections as part of our service. Minor siding repairs usually do not require permits, but we always verify local requirements before starting work.',
  },
  {
    question: 'How does Charlotte\'s humidity affect siding?',
    answer:
      'Charlotte\'s high humidity can cause wood siding to swell, warp, and develop mold or mildew. This is why we recommend moisture-resistant materials like fiber cement, vinyl, or LP SmartSide engineered wood for Charlotte homes. These materials are designed to withstand humidity without deteriorating, and proper installation with moisture barriers adds additional protection.',
  },
  {
    question: 'Will new siding increase my Charlotte home\'s value?',
    answer:
      'Absolutely. New siding is one of the highest-ROI home improvements, typically recouping 70-80% of the investment at resale. In Charlotte\'s competitive housing market, fresh siding dramatically improves curb appeal and can make your home sell faster. James Hardie fiber cement siding tends to deliver the highest return in the Charlotte area.',
  },
  {
    question: 'What about HOA requirements for siding in Charlotte?',
    answer:
      'Many Charlotte neighborhoods have HOA guidelines that dictate approved siding materials, colors, and styles. Our team is experienced with Charlotte HOA processes and can help you select options that meet your association\'s architectural requirements while achieving the look you want. We recommend getting HOA approval before beginning any siding project.',
  },
  {
    question: 'Do you offer siding warranties in Charlotte?',
    answer:
      'Yes, we provide comprehensive warranties on all siding installations. James Hardie products come with a 30-year non-prorated warranty, vinyl siding typically includes lifetime limited warranties, and LP SmartSide offers a 5/50-year warranty. We also back our installation workmanship with our own labor warranty for added peace of mind.',
  },
];

export default function SidingInstallationCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Siding Charlotte NC', url: `${SITE_CONFIG.url}/siding-installation-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/siding-installation-charlotte-nc`}
        pageName="Siding Installation Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero2}
            alt="Professional siding installation in Charlotte NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Charlotte&apos;s Trusted Siding Contractor</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Siding Installation Charlotte NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Expert Siding Contractors</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Vinyl, fiber cement, and engineered wood siding with {SITE_CONFIG.roofsInstalled}+ exterior projects completed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides professional siding installation, replacement, and repair throughout Charlotte
              and Mecklenburg County. From James Hardie fiber cement to affordable vinyl, our certified team delivers
              beautiful, weather-resistant results backed by manufacturer warranties.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Your Free Estimate
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
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Siding Services in Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              From premium fiber cement to budget-friendly vinyl, our certified installers handle every type of siding
              project for Charlotte homeowners with expert craftsmanship and attention to detail.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray text-sm mb-3">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Charlotte Homeowners Choose Best Roofing Now for Siding
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need siding installation or replacement in Charlotte, you want a company with proven expertise
                and a track record of excellence. Best Roofing Now delivers quality siding work backed by
                industry-leading warranties and honest, transparent pricing.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">{item.title}</h3>
                      <p className="text-gray text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <SEOImage
                src={IMAGES.realProjects.drone1}
                alt="Best Roofing Now - Trusted siding contractor in Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-dark">5.0 Rating</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.googleReviewCount}+ Google Reviews</p>
                  </div>
                </div>
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
                Ready for New Siding in Charlotte?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Charlotte&apos;s most trusted siding contractor.
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

      {/* Local Area Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Siding Installation for Charlotte Homes
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Charlotte&apos;s humid subtropical climate presents unique challenges for exterior siding. With hot, humid
                summers averaging 90+ degrees and occasional winter freezes, your siding must withstand significant
                temperature swings and constant moisture exposure. Best Roofing Now helps Charlotte homeowners select
                and install siding materials engineered for these conditions.
              </p>
              <p>
                <strong>Vinyl siding</strong> remains the most popular choice in Charlotte due to its affordability,
                low maintenance, and excellent moisture resistance. Modern vinyl comes in dozens of colors and
                profiles, including options that mimic the look of wood grain, cedar shake, and board & batten.
              </p>
              <p>
                <strong>James Hardie fiber cement siding</strong> is the premium choice for Charlotte homes. Made from
                cement, sand, and cellulose fibers, it stands up to Charlotte&apos;s humidity without warping, rotting, or
                attracting pests. Hardie products are also non-combustible and carry a 30-year non-prorated warranty,
                making them an outstanding long-term investment.
              </p>
              <p>
                <strong>LP SmartSide engineered wood siding</strong> offers the natural beauty of real wood with
                advanced resin technology that resists moisture, fungal decay, and termites. It&apos;s a great middle-ground
                option for Charlotte homeowners who want authentic wood aesthetics with improved durability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Serving Charlotte & Surrounding Communities
            </h2>
            <p className="text-gray text-lg">
              Our siding contractors serve homeowners throughout Charlotte, Mecklenburg County, and the greater metro area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Area Neighborhoods</h3>
              <div className="flex flex-wrap gap-2">
                {localAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Nearby Cities We Serve</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {nearbyCities.map((city) => (
                  <Link
                    key={city.name}
                    href={city.href}
                    className="flex items-center gap-2 text-gray hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>{city.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Service Areas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Siding Work in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed siding and exterior projects throughout Charlotte and Mecklenburg County.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.project1}
                alt="Completed siding installation in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.certainteed1}
                alt="Fiber cement siding project in Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of completed siding project in Mecklenburg County"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.project3}
                alt="Professional siding work in Charlotte area"
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
                Charlotte Siding FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about siding installation, materials, and costs in Charlotte NC.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="service"
        city="Charlotte"
        slug="siding-installation-charlotte-nc"
        count={4}
        title="Recent Siding Projects in Charlotte, NC"
        subtitle="Browse completed siding projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/siding-installation-charlotte-nc`}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Siding Installation"
      />

      <CTASection
        title="Ready for Professional Siding Installation in Charlotte?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your home's exterior and recommend the best siding solution for your budget and style."
      />
    </>
  );
}
