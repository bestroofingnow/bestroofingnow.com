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
  Building2,
  CloudRain,
  Search,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, ServiceAreaPageSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roofing Denver NC | Lake Norman Roofers',
  description:
    'Trusted roofing company serving Denver NC on Lake Norman\'s western shore. BBB A+ rated, veteran-owned. Roof repair, replacement & inspection. Free estimates!',
  keywords: [
    'roofing denver nc',
    'roofing company denver nc',
    'denver nc roofers',
    'denver nc roofing contractor',
    'roof repair denver nc',
    'roof replacement denver nc',
    'lake norman western shore roofing',
    'roofers near denver nc',
    'best roofer denver nc',
    'lincoln county roofing',
    'denver nc roof inspection',
    'trilogy at lake norman roofing',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-denver-nc`,
  },
  openGraph: {
    title: 'Roofing Denver NC | Lake Norman Roofers | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing company serving Denver NC on Lake Norman\'s western shore. Licensed and insured with 500+ roofs installed. Free estimates for all roofing services.',
    url: `${SITE_CONFIG.url}/roofing-denver-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Denver NC - Best Roofing Now',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Denver homes from Trilogy at Lake Norman to Sailview and beyond.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, flat roof systems, and commercial repairs for Denver and Highway 16 corridor businesses.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, dependable repairs for leaks, missing shingles, and western shore storm damage in Denver.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement with premium materials rated for Lake Norman wind exposure.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Free comprehensive inspections for Denver homeowners with detailed photo reports.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration and insurance claim assistance for Lincoln County homes.',
    href: '/services/storm-damage',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Lake Norman homeowners.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability insurance.',
  },
  {
    icon: Users,
    title: 'Certified Installers',
    description: 'CertainTeed, GAF, and Owens Corning certified for premium warranty options.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services when Denver residents need us most.',
  },
];

// Denver neighborhoods and areas
const denverAreas = [
  'Trilogy at Lake Norman',
  'Sailview',
  'Westport',
  'Beatty\'s Ford',
  'East Lincoln',
  'Lake Norman State Park Area',
  'Pinnacle Shores',
  'Magnolia Shores',
  'Coves of Lake Norman',
  'Island Point',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Mooresville', href: '/roofing-mooresville-nc' },
  { name: 'Cornelius', href: '/roofing-cornelius-nc' },
  { name: 'Huntersville', href: '/roofing-huntersville-nc' },
  { name: 'Davidson', href: '/roofing-davidson-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
];

// FAQs specific to Denver NC
const faqs = [
  {
    question: 'Do you provide roofing services in Denver NC?',
    answer:
      'Yes! Best Roofing Now proudly serves Denver NC and the entire western shore of Lake Norman from our Charlotte headquarters, approximately 22 miles away. We provide full roofing services including roof repair, replacement, inspection, and storm damage restoration to all Denver neighborhoods from Trilogy at Lake Norman to Sailview and East Lincoln.',
  },
  {
    question: 'How much does a new roof cost in Denver NC?',
    answer:
      'Roof replacement costs in Denver typically range from $8,000 to $25,000 for most homes, depending on roof size, pitch, material choice, and complexity. Lakefront properties in Sailview or Pinnacle Shores with larger square footage or premium materials may be higher. We provide free, no-obligation estimates with transparent pricing and no hidden fees.',
  },
  {
    question: 'Does Denver NC require different building permits than Mecklenburg County?',
    answer:
      'Yes. Denver is located in Lincoln County, which has its own building codes and permit requirements separate from Mecklenburg County. Our team is fully familiar with Lincoln County permitting processes and handles all permit applications for your roofing project. This is an important distinction many out-of-area contractors miss.',
  },
  {
    question: 'What roofing challenges are unique to Lake Norman\'s western shore?',
    answer:
      'Denver sits on the western shore of Lake Norman, which receives different storm exposure patterns than the eastern side. Prevailing westerly winds can drive rain directly against western-shore rooflines, and the open water fetch creates stronger gusts. We recommend wind-rated shingles and reinforced flashing systems specifically designed for these conditions.',
  },
  {
    question: 'Do you work with the Trilogy at Lake Norman community?',
    answer:
      'Absolutely. We have experience working within Trilogy at Lake Norman, the popular 55+ active adult community in Denver. We understand their HOA guidelines, architectural standards, and the specific roof styles common in the community. We handle HOA approval paperwork and coordinate scheduling to minimize disruption to residents.',
  },
  {
    question: 'How does storm damage work with insurance in Lincoln County?',
    answer:
      'We have extensive experience helping Denver homeowners navigate insurance claims after storms. Lake Norman\'s western shore is particularly susceptible to wind-driven rain and hail. We provide thorough damage documentation, meet with your insurance adjuster on-site, and advocate for fair settlements so your roof is fully restored.',
  },
  {
    question: 'Do you offer free roof inspections in Denver NC?',
    answer:
      'Yes! We offer completely free roof inspections throughout Denver and the western shore of Lake Norman. Our certified inspectors will thoroughly examine your roof and provide a detailed written report with photos. There is no obligation - just honest information to help you make informed decisions about your home.',
  },
  {
    question: 'What areas near Denver NC do you also serve?',
    answer:
      'In addition to Denver, we serve all Lake Norman communities including Mooresville, Cornelius, Davidson, Huntersville, and surrounding areas. Our Charlotte headquarters allows us to efficiently serve the entire Lake Norman region, including both the western and eastern shores.',
  },
];

export default function RoofingDenverNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Denver NC', url: `${SITE_CONFIG.url}/roofing-denver-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <ServiceAreaPageSchema
        city="Denver"
        state="NC"
        slug="roofing-denver-nc"
        distance={22}
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-denver-nc`}
        pageName="Roofing Denver NC"
        city="Denver"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Professional roofing services in Denver NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Denver NC &amp; Lake Norman&apos;s Western Shore</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Denver NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Lake Norman Western Shore Roofers</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Trusted roofing services for Denver homeowners with {SITE_CONFIG.roofsInstalled}+ roofs installed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now serves Denver NC and Lake Norman&apos;s western shore from our Charlotte headquarters.
              Whether you need roof repairs for your lakefront home in Sailview or a complete replacement in Trilogy
              at Lake Norman, our certified team delivers exceptional quality backed by industry-leading warranties.
            </p>

            {/* CTA Buttons */}
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
                Licensed &amp; Insured
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
              Complete Roofing Services in Denver NC
            </h2>
            <p className="text-gray text-lg">
              From minor repairs to complete roof replacements, our certified contractors serve all of Denver and
              Lake Norman&apos;s western shore with expert craftsmanship and premium materials.
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
                Why Denver Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need a roofing company serving Denver NC, you want experts who understand
                the unique demands of Lake Norman&apos;s western shore. Best Roofing Now has built our
                reputation on honesty, quality workmanship, and putting customers first.
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
                alt="Completed roofing project in Denver NC by Best Roofing Now"
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

      {/* Local Area Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Serving All of Denver &amp; Lake Norman&apos;s Western Shore
            </h2>
            <p className="text-gray text-lg">
              From the active adult lifestyle at Trilogy to lakefront estates in Sailview, we provide expert
              roofing services throughout Denver and nearby Lake Norman communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Denver Areas */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Denver Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {denverAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Nearby Cities */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Nearby Lake Norman Cities We Serve</h3>
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

          {/* Lake Norman Western Shore Context */}
          <div className="mt-12 bg-primary/5 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Lake Norman&apos;s Western Shore Roofing Experts
            </h3>
            <p className="text-gray mb-4">
              Denver NC sits on the western shore of Lake Norman in Lincoln County, offering a distinct
              small-town character just 22 miles from Charlotte. Unlike towns on the eastern shore that
              fall under Mecklenburg County jurisdiction, Denver operates under Lincoln County building
              codes and permit requirements - a critical detail for any roofing project. Our team is
              well-versed in Lincoln County permitting and ensures every project meets local standards.
            </p>
            <p className="text-gray mb-4">
              The western shore presents unique roofing challenges. Prevailing weather systems move
              east across the Piedmont, meaning Denver homes are often the first to encounter storms
              crossing Lake Norman. The open water fetch creates stronger wind gusts along the shoreline,
              making wind-rated materials and proper installation techniques essential for homes in
              Sailview, Pinnacle Shores, and the Coves of Lake Norman.
            </p>
            <p className="text-gray mb-4">
              Denver is also home to Lake Norman State Park, the annual Denver Days celebration (formerly
              the Strawberry Festival), and the thriving Trilogy at Lake Norman 55+ community. Whether your
              home overlooks the lake or you live in the East Lincoln area, Best Roofing Now delivers
              quality roofing services backed by our BBB A+ rating and manufacturer certifications.
            </p>
            <p className="text-gray">
              We&apos;re proud to serve this growing community from our Charlotte headquarters, providing the
              same exceptional service we&apos;ve delivered to {SITE_CONFIG.roofsInstalled}+ homeowners
              across the Lake Norman region.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Need a Roofing Company in Denver NC?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Lake Norman&apos;s western shore&apos;s most trusted roofing company.
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
                Denver NC Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in Denver NC and Lake Norman&apos;s western shore.
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
        pageType="location"
        city="Denver"
        slug="roofing-denver-nc"
        count={4}
        title="Recent Roofing Projects in Denver, NC"
        subtitle="Browse completed roofing projects from the Denver area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-denver-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Denver"

        state="NC"

        citySlug="denver-nc"

        service="Roofing"

      />

      <CTASection
        title="Ready for Expert Roofing in Denver NC?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations tailored to your Lake Norman western shore home."
      />
    </>
  );
}
