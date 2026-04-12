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
  Target,
  Heart,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, ServiceAreaPageSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Veteran-Owned Roofer Charlotte',
  description:
    'Best Roofing Now is a veteran-owned roofing company in Charlotte NC. Military values of integrity, precision, and service guide every roof we install. BBB A+ rated, 500+ roofs completed. Free estimates for veterans, military families, and all Charlotte homeowners.',
  keywords: [
    'veteran owned roofing charlotte nc',
    'military roofer charlotte',
    'veteran roofing company charlotte nc',
    'veteran roofer near me',
    'military roofing contractor charlotte',
    'veteran owned roofing company nc',
    'best veteran roofer charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/veteran-owned-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Veteran-Owned Roofer Charlotte NC | Best Roofing Now',
    description:
      'Proudly veteran-owned roofing company in Charlotte NC. Military precision, integrity, and service in every project. BBB A+ rated with 500+ roofs installed. Free estimates.',
    url: `${SITE_CONFIG.url}/veteran-owned-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Veteran-owned roofing company in Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete residential roofing solutions with military-grade attention to detail for Charlotte homes.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, and flat roof systems for Charlotte businesses with precision installation.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, and wear — done right the first time.',
    href: '/services/roof-repair',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage',
    description: 'Rapid storm damage response and full insurance claim assistance for Charlotte homeowners.',
    href: '/services/storm-damage',
  },
  {
    icon: Clock,
    title: 'Emergency Repair',
    description: '24/7 emergency roofing service — we respond quickly when your home needs immediate protection.',
    href: '/services/roof-repair',
  },
  {
    icon: Search,
    title: 'Free Inspections',
    description: 'Comprehensive no-cost roof inspections with honest assessments and detailed reports.',
    href: '/services/roof-inspection',
  },
];

// Why choose us - military themed
const whyChooseUs = [
  {
    icon: Target,
    title: 'Military Precision',
    description: 'Every measurement, cut, and nail placement reflects the precision and discipline learned in military service.',
  },
  {
    icon: Shield,
    title: 'Mission-Focused',
    description: 'We approach every roofing project like a mission — planned, executed, and completed to the highest standard.',
  },
  {
    icon: Award,
    title: 'Integrity First',
    description: 'Honest assessments, transparent pricing, and no shortcuts. Our military values mean we do what is right.',
  },
  {
    icon: Heart,
    title: 'Service Before Self',
    description: 'Your family\'s safety and satisfaction come first. We serve our customers the way we served our country.',
  },
  {
    icon: CheckCircle,
    title: 'Certified Excellence',
    description: 'CertainTeed, GAF, and Owens Corning certified installers delivering manufacturer-backed warranties.',
  },
  {
    icon: Users,
    title: 'Community Commitment',
    description: 'Proudly serving Charlotte and supporting fellow veterans, military families, and our local community.',
  },
];

// Charlotte area communities
const localAreas = [
  'Charlotte',
  'University City',
  'NoDa',
  'South End',
  'Ballantyne',
  'Myers Park',
  'Dilworth',
  'Plaza Midwood',
  'Uptown Charlotte',
  'South Charlotte',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Mint Hill', href: '/locations/mint-hill-nc' },
  { name: 'Indian Trail', href: '/locations/indian-trail-nc' },
  { name: 'Gastonia', href: '/locations/gastonia-nc' },
  { name: 'Rock Hill', href: '/locations/rock-hill-sc' },
];

// FAQs
const faqs = [
  {
    question: 'Is Best Roofing Now a veteran-owned company?',
    answer:
      'Yes, Best Roofing Now is a proudly veteran-owned and operated roofing company based in Charlotte, NC. Our military background shapes everything we do — from the precision of our installations to the integrity of our customer interactions. We bring the same discipline, accountability, and commitment to excellence that defined our military service to every roofing project.',
  },
  {
    question: 'Do you offer military or veteran discounts?',
    answer:
      'We appreciate the service of our fellow veterans and active-duty military families. Best Roofing Now offers special pricing considerations for veterans, active-duty service members, and military families in the Charlotte area. Contact us for a free estimate and ask about our veteran appreciation program.',
  },
  {
    question: 'What military values guide your roofing work?',
    answer:
      'Three core military values drive our business: Integrity First — we provide honest assessments and never recommend unnecessary work. Service Before Self — your family\'s safety and satisfaction always come first. Excellence in All We Do — every roof we install meets the highest standards of craftsmanship. These values earned trust on the battlefield, and they earn trust on your rooftop.',
  },
  {
    question: 'Do you hire veterans at Best Roofing Now?',
    answer:
      'We actively support veteran employment and value the skills that military service develops. Veterans bring discipline, teamwork, attention to detail, and a strong work ethic that translates directly to quality roofing work. If you are a veteran interested in a career in roofing, we encourage you to reach out to our team.',
  },
  {
    question: 'Do you serve military bases near Charlotte?',
    answer:
      'Yes, we serve homeowners and families near military installations in the Charlotte region. While Charlotte does not have a major active-duty base within city limits, we serve military families stationed throughout the metro area and those connected to Fort Liberty (formerly Fort Bragg), which is approximately 2.5 hours east. Our service area covers the entire Charlotte metro.',
  },
  {
    question: 'How does military experience benefit roofing?',
    answer:
      'Military experience translates directly to superior roofing work in several ways: project planning and logistics ensure efficient timelines, attention to detail means nothing is overlooked, discipline results in consistent quality across every project, and leadership skills enable effective crew management. Our military training means we approach your roof with the same seriousness as any mission.',
  },
  {
    question: 'What areas in Charlotte do you serve?',
    answer:
      'Best Roofing Now serves the entire Charlotte metro area and beyond, including University City, NoDa, South End, Ballantyne, Myers Park, Dilworth, Plaza Midwood, Uptown, and South Charlotte. We also serve surrounding cities like Huntersville, Concord, Mooresville, Matthews, Mint Hill, Indian Trail, Gastonia, and Rock Hill, SC. With over 500 roofs installed, we know the Charlotte region inside and out.',
  },
  {
    question: 'Why should I choose a veteran-owned roofer?',
    answer:
      'Choosing a veteran-owned roofer means working with a company built on accountability, integrity, and a commitment to excellence that was forged through military service. Veterans understand that cutting corners is never acceptable, that your word is your bond, and that the mission is not complete until the customer is satisfied. With Best Roofing Now, you get military-grade quality, honest communication, and a team that takes pride in protecting your home.',
  },
];

export default function VeteranOwnedRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Veteran-Owned Roofer Charlotte', url: `${SITE_CONFIG.url}/veteran-owned-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/veteran-owned-roofing-charlotte-nc`}
        pageName="Veteran-Owned Roofer Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="Veteran-owned roofing company in Charlotte NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Proudly Veteran-Owned &amp; Operated</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Veteran-Owned Roofer
              <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Military precision and integrity in every roof — {SITE_CONFIG.roofsInstalled}+ roofs installed across Charlotte
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is a veteran-owned roofing company proudly serving Charlotte and the surrounding area.
              We bring the same discipline, attention to detail, and commitment to excellence that defined our military
              service to every roofing project we complete.
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
              Roofing Services from Charlotte&apos;s Veteran-Owned Team
            </h2>
            <p className="text-gray text-lg">
              From full roof replacements to emergency storm repairs, our veteran-led crew delivers
              military-grade craftsmanship on every project across Charlotte.
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
                Why Charlotte Trusts Our Veteran-Owned Roofing Team
              </h2>
              <p className="text-gray text-lg mb-8">
                Military service taught us that excellence is not optional — it is the standard. When you choose
                Best Roofing Now, you are choosing a roofing company built on the same values that defend our nation:
                integrity, precision, and unwavering commitment to the mission.
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
                alt="Best Roofing Now - Veteran-owned roofing contractor in Charlotte NC"
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
                Ready to Work with a Veteran-Owned Roofer?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Charlotte&apos;s most trusted veteran-owned roofing company.
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

      {/* Military Values in Roofing Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Military Values, Expert Roofing
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                At Best Roofing Now, our military background is not just a label — it is the foundation of how we
                operate every day. The values instilled through military service — integrity, discipline, attention
                to detail, and an unwavering commitment to the mission — are the same values that guide every roof
                we install, repair, or replace across Charlotte.
              </p>
              <p>
                When you hire a veteran-owned roofing company, you are hiring a team that understands accountability.
                In the military, there are no excuses for subpar work. That same standard applies to our roofing
                projects. Every shingle is properly aligned, every flashing is correctly sealed, and every project
                is completed to manufacturer specifications — because cutting corners is never an option.
              </p>
              <p>
                We are proud to serve our fellow veterans, active-duty military families, and all Charlotte homeowners
                who value honest, high-quality work. As a veteran-owned business, we understand the sacrifices military
                families make, and we are committed to providing the same level of service and dedication that we gave
                to our country. Best Roofing Now is BBB A+ rated with over {SITE_CONFIG.googleReviewCount} five-star
                Google reviews — proof that military values deliver real results for Charlotte homeowners.
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
              Veteran-Owned Roofing Across Charlotte
            </h2>
            <p className="text-gray text-lg">
              Our veteran-led roofing team serves homeowners and businesses throughout the greater Charlotte metro area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Local Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Neighborhoods</h3>
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

            {/* Nearby Cities */}
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
              Our Work Across Charlotte
            </h2>
            <p className="text-gray text-lg">
              Browse completed roofing projects from our veteran-owned team throughout the Charlotte metro area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Veteran-owned roofing project completed in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed certified roof installation by veteran roofer in Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Aerial view of completed roofing project by Best Roofing Now"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional roofing work by veteran-owned company in Charlotte"
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
                Veteran-Owned Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about our veteran-owned roofing company in Charlotte NC.
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
        slug="veteran-owned-roofing-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from our veteran-owned team across Charlotte."
        schemaPageUrl={`${SITE_CONFIG.url}/veteran-owned-roofing-charlotte-nc`}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Veteran-Owned Roofing"
      />

      <CTASection
        title="Ready to Work with Charlotte's Trusted Veteran-Owned Roofer?"
        subtitle="Get a free, no-obligation estimate from our veteran-led team. We'll assess your roof with military precision and provide honest recommendations — no pressure, no gimmicks."
      />
    </>
  );
}
