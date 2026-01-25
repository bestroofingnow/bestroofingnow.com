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
  AlertTriangle,
  CloudRain,
  Search,
  MapPin,
  Zap,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocationSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roof Repair Concord NC | Fast & Affordable | Best Roofing Now',
  description:
    'Need roof repair in Concord NC? Best Roofing Now offers fast, affordable roof repair services including leak repair, storm damage, and emergency repairs. BBB A+ rated, veteran-owned. Free estimates for Cabarrus County homeowners!',
  keywords: [
    'roof repair concord nc',
    'roof leak repair concord nc',
    'emergency roof repair concord',
    'storm damage roof repair concord nc',
    'concord roof repair',
    'shingle repair concord nc',
    'affordable roof repair concord',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-repair-concord-nc`,
  },
  openGraph: {
    title: 'Roof Repair Concord NC | Fast & Affordable | Best Roofing Now',
    description:
      'Fast, affordable roof repair in Concord NC. BBB A+ rated, veteran-owned roofing company. Emergency service available. Free estimates for all roof repairs in Cabarrus County.',
    url: `${SITE_CONFIG.url}/roof-repair-concord-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Professional roof repair services in Concord NC - Best Roofing Now',
      },
    ],
  },
};

// Repair services offered
const repairServices = [
  {
    icon: AlertTriangle,
    title: 'Leak Repair',
    description: 'Fast identification and repair of roof leaks before they cause water damage to your Concord home.',
    href: '/services/roof-repair',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Expert repair of wind, hail, and storm damage with insurance claim assistance for Cabarrus County homeowners.',
    href: '/services/storm-damage',
  },
  {
    icon: Zap,
    title: 'Emergency Repairs',
    description: '24/7 emergency roof repair service for urgent situations in Concord that cannot wait.',
    href: '/services/emergency-roofing',
  },
  {
    icon: Home,
    title: 'Shingle Repair',
    description: 'Replacement of missing, cracked, or damaged shingles to restore your Concord roof.',
    href: '/services/residential-roofing',
  },
  {
    icon: Wrench,
    title: 'Flashing Repair',
    description: 'Repair or replacement of damaged flashing around chimneys, vents, and skylights.',
    href: '/services/roof-repair',
  },
  {
    icon: Search,
    title: 'Free Inspection',
    description: 'Complimentary roof inspection to identify problems and provide honest repair recommendations.',
    href: '/services/roof-inspection',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Clock,
    title: 'Fast Response Time',
    description: 'Same-day service available for urgent roof repairs in Concord and throughout Cabarrus County.',
  },
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and excellent track record.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied customers throughout the Charlotte metro.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with a commitment to integrity and quality work.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability and workers comp insurance.',
  },
  {
    icon: Users,
    title: 'Expert Technicians',
    description: 'Certified repair specialists with years of experience diagnosing and fixing roof problems.',
  },
];

// Common repair issues in Concord
const commonRepairIssues = [
  {
    title: 'Storm & Hail Damage',
    description: 'Concord experiences severe thunderstorms and hail events, especially during spring and summer. We repair damage from high winds, hail impacts, and fallen debris.',
  },
  {
    title: 'Aging Shingles',
    description: 'Many Concord neighborhoods built in the 1990s-2000s now have roofs reaching the end of their lifespan. We identify and repair deteriorating shingles before leaks develop.',
  },
  {
    title: 'Flashing Failures',
    description: 'The hot North Carolina summers cause flashing around chimneys, vents, and skylights to expand and contract, leading to cracks and leaks.',
  },
  {
    title: 'Improper Ventilation',
    description: 'Poor attic ventilation is common in Concord homes, causing moisture buildup, ice dams in winter, and premature shingle deterioration.',
  },
];

// Concord neighborhoods/areas
const concordAreas = [
  'Afton Village',
  'Cannon Crossing',
  'Christenbury',
  'Coddle Creek',
  'Georgian Pointe',
  'Gibson Village',
  'Highland Creek',
  'Moss Creek Village',
  'Weddington Trace',
  'Skybrook',
  'Poplar Tent',
  'Harrisburg (border)',
];

// Nearby cities
const nearbyCities = [
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Kannapolis', href: '/locations/kannapolis-nc' },
  { name: 'Harrisburg', href: '/locations/harrisburg-nc' },
  { name: 'Huntersville', href: '/roof-repair-huntersville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Mount Pleasant', href: '/locations/mount-pleasant-nc' },
];

// FAQs specific to roof repair in Concord
const faqs = [
  {
    question: 'How quickly can you repair my roof in Concord NC?',
    answer:
      'For most roof repairs in Concord, we can respond the same day or next day. Emergency repairs are prioritized with our 24/7 service. Minor repairs like replacing a few shingles can often be completed in a few hours, while more extensive repairs may take 1-2 days. We always provide a clear timeline before starting work.',
  },
  {
    question: 'How much does roof repair cost in Concord NC?',
    answer:
      'Roof repair costs in Concord typically range from $200-$1,500 for most common repairs. Minor repairs like replacing a few shingles start around $200-$400. Leak repairs average $400-$900, while more extensive storm damage may cost $1,000-$1,500. We provide free inspections and upfront pricing with no hidden fees.',
  },
  {
    question: 'Do you offer emergency roof repair in Concord?',
    answer:
      'Yes! Best Roofing Now offers 24/7 emergency roof repair services in Concord and throughout Cabarrus County. Whether you have an active leak, storm damage, or a tree on your roof, our emergency team responds quickly to prevent further damage and protect your home.',
  },
  {
    question: 'Will my insurance cover roof repairs in Concord?',
    answer:
      'Many roof repairs in Concord are covered by homeowners insurance, especially those caused by storms, hail, or fallen trees. We have extensive experience working with insurance companies and provide detailed documentation to support your claim. We offer free inspections to help determine if your damage may be covered.',
  },
  {
    question: 'How do I know if my roof needs repair or replacement?',
    answer:
      'We recommend repair when damage is localized and your roof still has significant life remaining. Signs you may need repair include a few missing shingles, minor leaks, or small areas of damage. Replacement is better when your roof is over 20 years old, has widespread damage, or when repairs would cost more than 30% of replacement cost. Our free inspection helps determine the best option.',
  },
  {
    question: 'What types of roof damage do you repair in Concord?',
    answer:
      'We repair all types of roof damage in Concord including: missing or damaged shingles, roof leaks, storm and hail damage, wind damage, flashing problems, vent boot failures, gutter damage, ice dam damage, and more. Our technicians are experienced with all roofing materials including asphalt shingles, metal, tile, and flat roofing systems.',
  },
  {
    question: 'Do you provide a warranty on roof repairs?',
    answer:
      'Yes, all our roof repairs in Concord come with a workmanship warranty. The specific warranty depends on the type of repair performed. We also use quality materials from manufacturers like CertainTeed, GAF, and Owens Corning, which carry their own material warranties. We stand behind our work 100%.',
  },
  {
    question: 'Why is Concord experiencing more roof damage recently?',
    answer:
      'Concord is one of the fastest-growing cities in North Carolina, with many homes built during development booms now reaching the age where roofs need attention. Combined with increasingly severe weather patterns and summer storms, many Cabarrus County homeowners are seeing more roof issues. Regular inspections help catch problems early.',
  },
];

export default function RoofRepairConcordNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Repair Concord NC', url: `${SITE_CONFIG.url}/roof-repair-concord-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocationSchema
        location={{
          city: 'Concord',
          state: 'NC',
          slug: 'concord-nc',
          county: 'Cabarrus',
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Professional roof repair services in Concord NC"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">Fast & Affordable Roof Repair</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Repair <br className="hidden md:block" />
              <span className="text-accent-light">Concord NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Fast, affordable roof repairs for Cabarrus County homeowners
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides expert roof repair services throughout Concord and the surrounding Cabarrus County area.
              From minor leak repairs to emergency storm damage, our certified technicians respond quickly to protect your home.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
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

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent-light" />
                Same-Day Service
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Licensed & Insured
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
              Roof Repair Services in Concord NC
            </h2>
            <p className="text-gray text-lg">
              Whether you have a small leak or major storm damage, our expert repair team has you covered.
              We diagnose problems accurately and provide lasting repairs at affordable prices.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairServices.map((service) => (
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

      {/* Common Repair Issues Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Common Roof Problems in Concord Homes
            </h2>
            <p className="text-gray text-lg">
              As a fast-growing Charlotte suburb in Cabarrus County, Concord homes face unique roofing challenges.
              Here are the most common issues we repair for local homeowners.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {commonRepairIssues.map((issue) => (
              <div key={issue.title} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-dark mb-3">{issue.title}</h3>
                <p className="text-gray">{issue.description}</p>
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
                Why Concord Homeowners Trust Us for Roof Repairs
              </h2>
              <p className="text-gray text-lg mb-8">
                When your roof needs repair, you need a company that responds fast, diagnoses accurately, and fixes it right
                the first time. Best Roofing Now has built our reputation serving Cabarrus County with honest assessments and quality workmanship.
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
                src={IMAGES.realProjects.certainteed1}
                alt="Completed roof repair project in Concord NC"
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

      {/* Local Expertise Section */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Local Concord Roofing Expertise
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Concord has grown rapidly as one of Charlotte&apos;s most desirable suburbs, with its excellent schools,
              proximity to Charlotte Motor Speedway, and thriving downtown. We understand the unique needs of
              Cabarrus County homeowners and the specific challenges our local climate presents.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">Growing Community</h3>
                <p className="text-white/80 text-sm">
                  We&apos;ve served Concord families for years, watching neighborhoods like Afton Village and Christenbury grow.
                  We know the roofing needs of both newer construction and established homes.
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">Weather Expertise</h3>
                <p className="text-white/80 text-sm">
                  From summer thunderstorms to occasional ice storms, we understand how Cabarrus County weather
                  affects your roof and provide repairs that last.
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">Quick Response</h3>
                <p className="text-white/80 text-sm">
                  Our team is just minutes away from Concord, allowing us to respond quickly to repair requests
                  and emergencies throughout the area.
                </p>
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
                Need Roof Repair in Concord?
              </h2>
              <p className="text-white/90">
                Get a free inspection and honest assessment. We will find the problem and fix it right.
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
                Schedule Inspection
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
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Repair Throughout Concord & Cabarrus County
            </h2>
            <p className="text-gray text-lg">
              We provide fast roof repair services throughout Concord and the surrounding Cabarrus County communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Concord Areas */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Concord Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {concordAreas.map((area) => (
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
                Roof Repair FAQs - Concord NC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roof repair services in Concord and Cabarrus County.
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
        title="Ready to Get Your Roof Repaired in Concord?"
        subtitle="Contact us today for a free inspection and estimate. Our expert team will diagnose your roof problems and provide honest, affordable repair recommendations."
      />
    </>
  );
}
