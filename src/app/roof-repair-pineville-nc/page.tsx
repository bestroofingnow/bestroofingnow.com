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
  MapPin,
  Droplets,
  AlertTriangle,
  Search,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roof Repair Pineville NC | Carolina Place Area | Best Roofing Now',
  description:
    'Need roof repair in Pineville NC? Best Roofing Now offers fast, reliable repairs for leaks, storm damage, and shingle replacement near Carolina Place Mall. BBB A+ rated. Free estimates!',
  keywords: [
    'roof repair Pineville NC',
    'roofing repair Pineville',
    'Pineville roof repair',
    'roof leak repair Pineville NC',
    'emergency roof repair Pineville',
    'roof repair near Carolina Place',
    'shingle repair Pineville NC',
    'roof repair contractors Pineville',
    'fix roof leak Pineville',
    'storm damage repair Pineville NC',
    'roof repair near me Pineville',
    'best roofer Pineville NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-repair-pineville-nc`,
  },
  openGraph: {
    title: 'Roof Repair Pineville NC | Carolina Place Area | Best Roofing Now',
    description:
      'BBB A+ rated roof repair experts serving Pineville NC and Carolina Place area. Fast response, quality repairs, fair pricing. Veteran-owned. Free estimates!',
    url: `${SITE_CONFIG.url}/roof-repair-pineville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Roof repair services in Pineville NC by Best Roofing Now',
      },
    ],
  },
};

// Roof repair services offered
const services = [
  {
    icon: Droplets,
    title: 'Leak Repair',
    description: 'Fast identification and repair of roof leaks to prevent water damage to your Pineville home.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Shingle Repair & Replacement',
    description: 'Fix damaged, missing, or curling shingles to restore your roof\'s protection.',
    href: '/services/roof-repair',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency repairs for wind, hail, and storm damage with insurance claim assistance.',
    href: '/services/storm-damage',
  },
  {
    icon: Wrench,
    title: 'Flashing Repair',
    description: 'Fix leaking flashing around chimneys, vents, skylights, and roof valleys.',
    href: '/services/roof-repair',
  },
  {
    icon: Building2,
    title: 'Flat Roof Repair',
    description: 'Specialized repairs for flat and low-slope roofing systems on commercial buildings.',
    href: '/services/commercial-roofing',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Roof Repair',
    description: '24/7 emergency services for urgent roof problems requiring immediate attention.',
    href: '/services/emergency-roofing',
  },
];

// Common roof problems we fix
const commonProblems = [
  {
    icon: Droplets,
    title: 'Roof Leaks',
    description: 'Active leaks, water stains on ceilings, and moisture in the attic.',
  },
  {
    icon: Home,
    title: 'Missing Shingles',
    description: 'Shingles blown off by wind or deteriorated from age and weather.',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage',
    description: 'Hail damage, wind damage, and debris impact from severe weather.',
  },
  {
    icon: Wrench,
    title: 'Flashing Issues',
    description: 'Deteriorated or improperly installed flashing causing leaks.',
  },
  {
    icon: AlertTriangle,
    title: 'Sagging Roof',
    description: 'Structural issues causing visible sagging or dipping in the roofline.',
  },
  {
    icon: Search,
    title: 'Poor Ventilation',
    description: 'Inadequate attic ventilation leading to moisture and heat problems.',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Pineville homeowners.`,
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
    title: 'Certified Technicians',
    description: 'CertainTeed, GAF, and Owens Corning certified repair technicians.',
  },
  {
    icon: Clock,
    title: 'Fast Response',
    description: 'Same-day and next-day repair appointments available for Pineville area.',
  },
];

// Pineville neighborhoods and areas served
const pinevilleNeighborhoods = [
  'Carolina Place',
  'McMullen Creek',
  'Park Crossing',
  'The Park',
  'Sterling',
  'Pineville Town Center',
  'Park Road',
  'Johnston Road',
  'Carmel Commons',
  'Regent Park',
  'Beverly Woods',
  'Olde Providence',
  'Pineville-Matthews Road',
  'Lancaster Highway',
  'Shopton Road',
  'S Tryon Street',
  'Westinghouse Boulevard',
  'Pine Harbor',
  'Park South',
  'Providence Plantation',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Fort Mill, SC', href: '/locations/fort-mill-sc' },
  { name: 'Indian Land, SC', href: '/locations/indian-land-sc' },
  { name: 'Ballantyne', href: '/locations/charlotte-nc' },
  { name: 'South Charlotte', href: '/locations/charlotte-nc' },
];

// FAQs about roof repair in Pineville
const faqs = [
  {
    question: 'How much does roof repair cost in Pineville NC?',
    answer:
      'Roof repair costs in Pineville typically range from $200-$1,500 depending on the type and extent of damage. Minor repairs like fixing a few shingles cost $200-$500, while more extensive repairs like fixing flashing or addressing multiple leaks range from $500-$1,500. We provide free inspections and detailed quotes before any work begins.',
  },
  {
    question: 'How quickly can you repair my roof in Pineville?',
    answer:
      'Best Roofing Now offers fast response times for Pineville roof repairs. For emergencies like active leaks, we provide same-day or next-day service. Standard repairs are typically scheduled within 1-3 days. We understand that roof problems can\'t wait, especially with North Carolina\'s unpredictable weather.',
  },
  {
    question: 'Do you offer free roof inspections in Pineville?',
    answer:
      'Yes! We offer completely free, no-obligation roof inspections throughout Pineville and the Carolina Place area. Our certified inspectors will thoroughly examine your roof, identify all issues, and provide a detailed written report with photos. There\'s no pressure to hire us after the inspection.',
  },
  {
    question: 'How do I know if my roof needs repair or replacement?',
    answer:
      'Generally, if damage is localized to a small area and your roof is under 15 years old, repair is usually the best option. If damage is widespread, you have multiple leaks, or your roof is approaching 20+ years, replacement may be more cost-effective. We provide honest assessments and won\'t push for replacement unless it\'s truly necessary.',
  },
  {
    question: 'Do you repair roofs damaged by storms near Carolina Place?',
    answer:
      'Absolutely. Storm damage repair is one of our specialties. We serve the entire Pineville area including neighborhoods near Carolina Place Mall. We provide emergency tarping to prevent further damage, thorough documentation for insurance claims, and work directly with your insurance company to maximize your claim.',
  },
  {
    question: 'What causes most roof leaks in Pineville homes?',
    answer:
      'The most common causes of roof leaks in Pineville include: damaged or missing shingles from wind and age, deteriorated flashing around chimneys and vents, clogged gutters causing water backup, improper roof ventilation, and storm damage from hail and falling debris. Our free inspection identifies the exact cause of your leak.',
  },
  {
    question: 'Do you provide warranties on roof repairs?',
    answer:
      'Yes, all our roof repairs come with warranty protection. Material warranties vary by product (typically 10-25 years), and we provide our own workmanship warranty on all repair work. As certified installers for major manufacturers, we can offer enhanced warranty options for qualifying repairs.',
  },
  {
    question: 'Can you repair a roof with multiple layers of shingles?',
    answer:
      'We can often repair roofs with two layers of shingles, though it depends on the type of repair needed. However, NC building codes limit roofs to two layers. If your roof already has two layers and needs significant work, a tear-off and replacement may be required. We\'ll inspect and advise you honestly.',
  },
];

export default function RoofRepairPinevilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Repair Pineville NC', url: `${SITE_CONFIG.url}/roof-repair-pineville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Roof repair services in Pineville NC - Best Roofing Now professional team"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">BBB A+ Rated | Veteran-Owned</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Pineville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Fast, reliable roof repairs serving the Carolina Place area
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides expert roof repair services throughout Pineville and South Charlotte.
              From minor leak fixes to major storm damage repairs, our certified technicians deliver quality
              workmanship backed by warranties you can trust.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Repair Estimate
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
                Same-Day Service Available
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
              Roof Repair Services in Pineville NC
            </h2>
            <p className="text-gray text-lg">
              From small leaks to major storm damage, we handle all types of roof repairs with expert craftsmanship.
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

      {/* Common Problems Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Common Roof Problems We Fix in Pineville
            </h2>
            <p className="text-gray text-lg">
              Our experienced team diagnoses and repairs all types of roofing issues quickly and affordably.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonProblems.map((problem) => (
              <div
                key={problem.title}
                className="p-6 bg-white rounded-xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-dark mb-2">{problem.title}</h3>
                <p className="text-gray text-sm">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Pineville Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need a roof repair in Pineville, you want a company that responds quickly, does quality work,
                and charges fair prices. Best Roofing Now has built our reputation on honesty and excellent
                craftsmanship.
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
                alt="Best Roofing Now - Trusted roof repair in Pineville NC"
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
                Need Roof Repair in Pineville?
              </h2>
              <p className="text-white/90">
                Get a free inspection and estimate from Pineville's trusted roofing experts.
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
                Schedule Free Inspection
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

      {/* Service Areas Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Repair Throughout Pineville & South Charlotte
            </h2>
            <p className="text-gray text-lg">
              Our repair crews serve all Pineville neighborhoods and surrounding South Charlotte communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Pineville Neighborhoods */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Pineville Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {pinevilleNeighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
            </div>

            {/* Nearby Cities */}
            <div className="bg-white rounded-xl p-6">
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
              Recent Roof Repairs in the Pineville Area
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roof repair projects in Pineville and South Charlotte.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Completed roof repair in Pineville NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="Shingle repair by Best Roofing Now in Pineville"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of roof repair project in Pineville area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional roof repair work in Pineville NC"
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
                Roof Repair FAQs for Pineville
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roof repair services in Pineville NC.
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

      {/* Final CTA */}
      <CTASection
        title="Need Roof Repair in Pineville NC?"
        subtitle="Get a free inspection and honest assessment from Pineville's trusted roofing experts. We'll diagnose the problem and provide a fair, transparent quote."
      />
    </>
  );
}
