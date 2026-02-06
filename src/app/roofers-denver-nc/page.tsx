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
  Waves,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { MeetTheFamily } from '@/components/sections/MeetTheFamily';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roofers Denver NC | 5-Star',
  description:
    'Looking for roofers in Denver NC? Best Roofing Now is a 5-star rated, veteran-owned roofing company serving Lake Norman western shore. BBB A+. Free estimates.',
  keywords: [
    'roofers denver nc',
    'denver nc roofers',
    'local roofers denver nc',
    'roofers in denver nc',
    'best roofers denver nc',
    'top roofers denver',
    'professional roofers denver nc',
    'licensed roofers denver nc',
    'experienced roofers denver nc',
    'lake norman western shore roofers',
    'roofers near trilogy lake norman',
    'lincoln county roofers',
    'roofing company denver nc',
    'denver nc roofing contractors',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofers-denver-nc`,
  },
  openGraph: {
    title: 'Roofers Denver NC | Lake Norman | 5-Star Rated',
    description:
      '5-star rated, veteran-owned roofers serving Denver NC and Lake Norman western shore. BBB A+ rated with 500+ roofs completed. Free estimates and 24/7 emergency service.',
    url: `${SITE_CONFIG.url}/roofers-denver-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero2,
        width: 1200,
        height: 630,
        alt: 'Professional roofers Denver NC - Best Roofing Now team at work',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Denver homes from Trilogy at Lake Norman to Sailview and Westport communities.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, flat roof systems for Denver businesses along Highway 16 and Highway 73 corridors.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, and storm damage across Lincoln County.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement with premium materials meeting Lincoln County building codes.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Free comprehensive inspections with detailed reports for Denver properties and lakefront homes.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration and insurance claim assistance for western shore properties.',
    href: '/services/roof-repair',
  },
  {
    icon: Shield,
    title: 'Metal Roofing',
    description: 'Standing seam and corrugated metal roofing engineered for Lake Norman wind exposure.',
    href: '/metal-roofing-denver-nc',
  },
  {
    icon: Waves,
    title: 'Gutters & Drainage',
    description: 'Seamless gutter installation to protect Denver lakefront homes from water runoff damage.',
    href: '/services/gutter-installation',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Star,
    title: '5-Star Rated',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Lake Norman area homeowners.`,
  },
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofers with comprehensive liability insurance for Lincoln County projects.',
  },
  {
    icon: Users,
    title: 'Certified Installers',
    description: 'CertainTeed, GAF, and Owens Corning certified for premium warranty options.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services for Denver and Lake Norman western shore homeowners.',
  },
];

// Denver neighborhoods
const denverNeighborhoods = [
  'Trilogy at Lake Norman',
  'Sailview',
  'Westport',
  'Beatty\'s Ford',
  'East Lincoln',
  'Pinnacle Shores',
  'Magnolia Shores',
  'Island Point',
  'Lake Norman State Park Area',
  'Highway 16 Corridor',
  'Highway 73 Corridor',
  'Downtown Denver',
];

// FAQs
const faqs = [
  {
    question: 'How do I find the best roofers in Denver NC?',
    answer:
      'Look for roofers with strong reviews, proper NC licensing, and experience with Lake Norman western shore properties. Best Roofing Now has 500+ five-star Google reviews, BBB A+ rating, and extensive experience with Denver communities including Trilogy at Lake Norman, Sailview, and Westport. We understand Lincoln County building codes and provide free inspections with transparent estimates.',
  },
  {
    question: 'What should I look for when hiring roofers in Denver NC?',
    answer:
      'Key factors include: NC roofing license, comprehensive insurance, manufacturer certifications (GAF, CertainTeed), strong local reviews, familiarity with Lincoln County permits and codes, and experience with Lake Norman weather patterns. Avoid roofers who require large upfront deposits or cannot provide references from Denver-area customers.',
  },
  {
    question: 'How much do roofers in Denver NC charge?',
    answer:
      'Denver roofing costs vary by project scope: repairs typically range $300-$1,500, inspections are often free, and full replacements run $8,000-$25,000+ for standard homes. Lakefront properties in Trilogy, Sailview, or Pinnacle Shores with premium materials can be $30,000-$80,000+. We provide free detailed estimates so you know exactly what to expect.',
  },
  {
    question: 'Do you offer emergency roofing services in Denver NC?',
    answer:
      'Yes, we provide 24/7 emergency roofing services throughout Denver and the Lake Norman western shore. Our emergency team can typically respond within 1-2 hours for urgent situations like active leaks, storm damage, or fallen trees. Denver sits ~22 miles from Charlotte, and our crews are positioned for fast western shore response.',
  },
  {
    question: 'Are your roofers experienced with lakefront homes near Lake Norman State Park?',
    answer:
      'Absolutely. Our team has extensive experience with Lake Norman western shore properties including Trilogy at Lake Norman, Sailview, Pinnacle Shores, and Island Point. We understand the unique challenges of lakefront construction including elevated wind exposure from the open western shoreline, moisture management, and the premium material requirements of Denver communities.',
  },
  {
    question: 'Does Denver NC use different building codes than Charlotte?',
    answer:
      'Yes. Denver is in Lincoln County, not Mecklenburg County, so all roofing permits and inspections go through Lincoln County Building Inspections rather than the City of Charlotte. We are fully familiar with Lincoln County permitting requirements, inspection schedules, and code compliance standards for roofing projects.',
  },
  {
    question: 'What roofing warranties do you offer in Denver NC?',
    answer:
      'We offer comprehensive warranty options: our own 10-year workmanship warranty on all installations, plus manufacturer warranties up to 50 years on premium materials. As GAF Master Elite and CertainTeed ShingleMaster certified contractors, we can offer extended warranty programs not available from standard roofers.',
  },
  {
    question: 'Why is Lake Norman western shore roofing different from other areas?',
    answer:
      'Denver sits on the western shore of Lake Norman with significant open-water wind exposure, especially in communities like Sailview and Island Point. The prevailing westerly winds cross open water before hitting western shore homes, creating higher wind loads than inland properties. We select materials and installation methods specifically designed for this exposure, including enhanced fastening patterns and wind-rated underlayments.',
  },
];

export default function RoofersDenverNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Denver NC', url: `${SITE_CONFIG.url}/locations/denver-nc` },
          { name: 'Roofers Denver NC', url: `${SITE_CONFIG.url}/roofers-denver-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofers-denver-nc`}
        pageName="Roofers Denver NC"
        city="Denver"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero2}
            alt="Professional roofers Denver NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Waves className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold">Lake Norman Western Shore Roofing Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofers Denver NC
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              5-Star Rated | Lake Norman Western Shore Experts
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is the trusted choice for Denver homeowners seeking reliable,
              experienced roofers. From Trilogy at Lake Norman to Sailview and Westport, we deliver
              quality roofing with military precision and family values throughout Lincoln County.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
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

            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-secondary" />
                {SITE_CONFIG.googleReviewCount}+ 5-Star Reviews
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-secondary" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-secondary" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Complete Roofing Services in Denver NC
            </h2>
            <p className="text-gray text-lg">
              From routine repairs to full replacements, our Denver roofers handle all your roofing needs
              with expertise in Lincoln County codes and Lake Norman western shore conditions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray text-sm mb-3">{service.description}</p>
                <span className="inline-flex items-center text-primary font-medium text-sm">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
                Why Denver Homeowners Choose Our Roofers
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need roofers in Denver NC, choose a company with proven expertise,
                exceptional reviews, and deep knowledge of Lincoln County requirements. We understand
                the western shore&apos;s unique wind exposure and build roofs that last.
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
                alt="Denver NC roofing project by Best Roofing Now - Lake Norman western shore"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-xl shadow-lg p-4">
                <p className="font-bold text-2xl">500+</p>
                <p className="text-sm text-white/90">Lake Norman Roofs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Denver Local Knowledge Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-light rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Denver NC At a Glance
                </h3>
                <ul className="space-y-3 text-gray">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>Western shore of Lake Norman, Lincoln County</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>ZIP code 28037, approximately 22 miles from Charlotte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>Lincoln County building codes and permits (not Mecklenburg)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>Home to Lake Norman State Park and miles of scenic shoreline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>Growing lakefront community with master-planned neighborhoods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>Western shore wind exposure requires enhanced roofing specifications</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Local Denver NC Roofing Expertise
              </h2>
              <p className="text-gray text-lg mb-4">
                Denver sits on the western shore of Lake Norman in Lincoln County, offering a unique
                combination of lakefront living and small-town charm. Our roofers understand the specific
                challenges that Denver&apos;s location creates for roofing systems.
              </p>
              <p className="text-gray mb-4">
                The open western exposure along Lake Norman means Denver homes face stronger prevailing
                winds than communities on the eastern shore. Communities like Sailview, Island Point, and
                Pinnacle Shores are particularly exposed. We select materials and fastening patterns that
                account for this elevated wind load.
              </p>
              <p className="text-gray">
                Because Denver is in Lincoln County, all roofing permits go through Lincoln County
                Building Inspections rather than Mecklenburg County. Our team handles the full permitting
                process, ensuring your project meets all Lincoln County code requirements from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Denver Neighborhoods We Serve
            </h2>
            <p className="text-gray text-lg">
              Our roofers have completed projects throughout Denver, from premier lakefront
              communities to established inland neighborhoods across Lincoln County.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {denverNeighborhoods.map((neighborhood) => (
              <span
                key={neighborhood}
                className="bg-white rounded-full px-5 py-2 text-primary font-medium shadow-sm"
              >
                {neighborhood}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Meet The Family Section */}
      <MeetTheFamily variant="full" />

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Denver NC Roofers FAQs
              </h2>
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

      {/* Service City Links */}
      <ServiceCityLinks
        city="Denver"
        citySlug="denver-nc"
        variant="compact"
      />

      <GeoProjectGalleryStrip pageType="location" city="Denver" slug="roofers-denver-nc" />

      {/* Final CTA */}

      <CityGeoSection

        city="Denver"

        state="NC"

        citySlug="denver-nc"

        service="Roofers"

      />

      <CTASection
        title="Ready for Quality Roofing in Denver NC?"
        subtitle="Get a free estimate from Denver's most trusted roofers. Our team will assess your roof and provide honest recommendations tailored to your Lake Norman western shore home."
      />
    </>
  );
}
