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
  Users,
  Clock,
  Wrench,
  Home,
  Layers,
  Hammer,
  Search,
  MapPin,
  Droplets,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Siding Lake Norman NC',
  description:
    'Professional siding installation for Lake Norman NC waterfront homes. Vinyl siding, James Hardie fiber cement, LP SmartSide engineered wood. Moisture-resistant siding built for lakefront living. Veteran-owned, BBB A+ rated. Free estimates.',
  keywords: [
    'siding installation lake norman nc',
    'siding company lake norman',
    'vinyl siding lake norman',
    'james hardie siding lake norman nc',
    'siding replacement lake norman',
    'siding contractors lake norman nc',
    'waterfront siding lake norman',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/siding-installation-lake-norman-nc`,
  },
  openGraph: {
    title: 'Siding Lake Norman NC | Waterfront Siding Experts | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned siding contractor serving Lake Norman NC. Waterfront-grade vinyl, James Hardie fiber cement, and LP SmartSide installation. Free estimates.',
    url: `${SITE_CONFIG.url}/siding-installation-lake-norman-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero2,
        width: 1200,
        height: 630,
        alt: 'Professional siding installation for Lake Norman NC homes - Best Roofing Now',
      },
    ],
  },
};

const services = [
  {
    icon: Home,
    title: 'Vinyl Siding',
    description: 'Moisture-resistant vinyl siding ideal for Lake Norman waterfront homes with lasting color and durability.',
    href: '/services/residential-roofing',
  },
  {
    icon: Shield,
    title: 'James Hardie Fiber Cement',
    description: 'Premium fiber cement siding engineered for lakefront humidity and wind exposure with a 30-year warranty.',
    href: '/services/residential-roofing',
  },
  {
    icon: Layers,
    title: 'LP SmartSide',
    description: 'Engineered wood siding with advanced moisture resistance perfect for Lake Norman\'s lakefront environment.',
    href: '/services/residential-roofing',
  },
  {
    icon: Hammer,
    title: 'Board & Batten',
    description: 'Elegant vertical board & batten siding that complements the natural beauty of Lake Norman properties.',
    href: '/services/residential-roofing',
  },
  {
    icon: Wrench,
    title: 'Siding Repair',
    description: 'Expert repair for storm damage, moisture intrusion, and wind-driven wear on lakefront siding.',
    href: '/services/residential-roofing',
  },
  {
    icon: Search,
    title: 'Siding Inspection',
    description: 'Comprehensive inspections to identify moisture damage and weathering issues on Lake Norman homes.',
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
    icon: Droplets,
    title: 'Waterfront Expertise',
    description: 'Specialized experience with lakefront homes and the unique moisture challenges they face.',
  },
  {
    icon: Clock,
    title: 'On-Time Completion',
    description: 'We finish siding projects on schedule with minimal disruption to your Lake Norman home.',
  },
];

const localAreas = [
  'Lake Norman Waterfront',
  'Cornelius',
  'Davidson',
  'Mooresville',
  'Huntersville',
  'Denver',
  'Sherrills Ford',
];

const nearbyCities = [
  { name: 'Charlotte', href: '/siding-installation-charlotte-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Mooresville', href: '/roofing-mooresville-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Denver', href: '/roofing-denver-nc' },
  { name: 'Sherrills Ford', href: '/roofing-sherrills-ford-nc' },
  { name: 'Statesville', href: '/locations/statesville-nc' },
];

const faqs = [
  {
    question: 'What siding is best for Lake Norman waterfront homes?',
    answer:
      'James Hardie fiber cement siding is the top choice for Lake Norman waterfront properties. It is engineered to resist moisture, humidity, and wind-driven rain that lakefront homes constantly face. Fiber cement will not rot, warp, or attract pests, and it carries a 30-year non-prorated warranty. Vinyl siding is also an excellent moisture-resistant option at a lower price point.',
  },
  {
    question: 'How much does siding cost on Lake Norman?',
    answer:
      'Siding installation for Lake Norman homes typically ranges from $8,000 to $30,000 depending on home size, material choice, and waterfront complexity. Lakefront homes may require additional moisture barriers and premium materials, which can add 10-20% to the cost. We provide free, detailed estimates with transparent pricing for every Lake Norman project.',
  },
  {
    question: 'Does lakefront living affect siding lifespan?',
    answer:
      'Yes, Lake Norman waterfront homes expose siding to higher humidity, more wind, and occasional water spray that can accelerate wear on lower-grade materials. With proper material selection and installation, however, quality siding can last 30-50 years on lakefront properties. We recommend fiber cement or premium vinyl with enhanced moisture barriers for the longest lifespan.',
  },
  {
    question: 'How do you protect siding from Lake Norman wind exposure?',
    answer:
      'For Lake Norman waterfront homes, we use enhanced fastening methods, wind-rated materials, and proper flashing at all transitions. James Hardie fiber cement is rated for winds up to 150 mph when properly installed. We also pay extra attention to corners, eaves, and areas facing the lake where wind exposure is greatest.',
  },
  {
    question: 'Can you match siding to existing Lake Norman home styles?',
    answer:
      'Absolutely. Lake Norman features diverse architectural styles from modern lakefront estates to traditional craftsman homes. We offer fiber cement, vinyl, and engineered wood siding in hundreds of colors, profiles, and textures to match any style. Our design team can help you select options that complement your home and blend with the Lake Norman aesthetic.',
  },
  {
    question: 'Do Lake Norman HOAs have siding requirements?',
    answer:
      'Most Lake Norman communities including those in Cornelius, Davidson, and Mooresville have HOA guidelines for exterior materials, colors, and styles. Our team has extensive experience working within Lake Norman HOA requirements and can help you navigate the approval process. We recommend obtaining HOA approval before scheduling your siding project.',
  },
  {
    question: 'How long does siding installation take on Lake Norman?',
    answer:
      'Most Lake Norman siding installations take 1-3 weeks depending on home size and material. Waterfront homes may require additional time for moisture barrier installation and wind-rated fastening. Weather and lake conditions can also affect scheduling. We provide a clear timeline at the start of every project and keep you updated throughout.',
  },
  {
    question: 'Do you offer siding repair for storm-damaged Lake Norman homes?',
    answer:
      'Yes, we provide emergency and scheduled siding repair for storm-damaged Lake Norman homes. Lake Norman sees severe thunderstorms, high winds, and occasional hail that can damage siding. We respond quickly to prevent further moisture intrusion and can assist with insurance claims for storm damage repairs.',
  },
];

export default function SidingInstallationLakeNormanNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Siding Lake Norman NC', url: `${SITE_CONFIG.url}/siding-installation-lake-norman-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/siding-installation-lake-norman-nc`}
        pageName="Siding Installation Lake Norman NC"
        city="Cornelius"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero2}
            alt="Professional siding installation for Lake Norman NC homes - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Lake Norman&apos;s Waterfront Siding Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Siding Installation Lake Norman NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Waterfront Siding Specialists</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Moisture-resistant siding built for lakefront living with {SITE_CONFIG.roofsInstalled}+ exterior projects completed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides expert siding installation for Lake Norman waterfront homes and communities
              including Cornelius, Davidson, Mooresville, and Huntersville. Our certified team specializes in
              moisture-resistant materials that stand up to lakefront conditions.
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
              Siding Services for Lake Norman Homes
            </h2>
            <p className="text-gray text-lg">
              From waterfront estates to lakeside communities, our certified installers handle every type of siding
              project with materials built to withstand Lake Norman&apos;s unique environment.
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
                Why Lake Norman Homeowners Choose Best Roofing Now for Siding
              </h2>
              <p className="text-gray text-lg mb-8">
                Lake Norman waterfront properties demand siding expertise that goes beyond standard installation.
                Our team understands the moisture, wind, and humidity challenges unique to lakefront living and
                delivers results that protect your investment for decades.
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
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Best Roofing Now - Trusted siding contractor serving Lake Norman NC"
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
                Need Siding for Your Lake Norman Home?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Lake Norman&apos;s trusted waterfront siding experts.
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
              Siding Built for Lake Norman Waterfront Living
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Lake Norman is the largest man-made lake in North Carolina, and its waterfront homes face unique
                exterior challenges. Constant humidity from the lake, wind exposure across open water, and seasonal
                storms demand siding materials and installation techniques specifically engineered for lakefront
                conditions. Best Roofing Now brings specialized waterfront expertise to every Lake Norman siding project.
              </p>
              <p>
                Waterfront homes on Lake Norman are particularly susceptible to moisture intrusion where siding meets
                trim, windows, and doors. Our installation process includes enhanced moisture barriers, proper
                flashing at all transitions, and ventilation systems that allow walls to breathe and dry after
                exposure to lake humidity. These details make the difference between siding that lasts 15 years
                and siding that lasts 40.
              </p>
              <p>
                We serve all Lake Norman communities including Cornelius, Davidson, Mooresville, Huntersville,
                Denver, and Sherrills Ford. Whether your home sits directly on the waterfront or in a nearby
                lakeside neighborhood, our team will assess your specific exposure conditions and recommend the
                best siding solution for lasting protection and curb appeal.
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
              Serving Lake Norman & Surrounding Communities
            </h2>
            <p className="text-gray text-lg">
              Our siding contractors serve homeowners throughout the Lake Norman region and surrounding communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Lake Norman Area Communities</h3>
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
              Our Work Across the Lake Norman Region
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed siding and exterior projects throughout Lake Norman.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Completed siding installation on Lake Norman waterfront home"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="Fiber cement siding project in Lake Norman area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of completed exterior project near Lake Norman"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional siding work in Lake Norman community"
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
                Lake Norman Siding FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about siding installation for Lake Norman waterfront homes.
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
        city="Cornelius"
        slug="siding-installation-lake-norman-nc"
        count={4}
        title="Recent Siding Projects in Lake Norman, NC"
        subtitle="Browse completed siding projects from the Lake Norman area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/siding-installation-lake-norman-nc`}
      />

      <CityGeoSection
        city="Lake Norman"
        state="NC"
        citySlug="lake-norman"
        service="Siding Installation"
      />

      <CTASection
        title="Ready for Professional Siding on Lake Norman?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your waterfront home's exterior and recommend the best siding solution for lasting lakefront protection."
      />
    </>
  );
}
