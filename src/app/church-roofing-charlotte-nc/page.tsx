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
  Church,
  Heart,
  History,
  Hammer,
  Layers,
  FileCheck,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Church Roofing Charlotte NC | Religious Building Experts | Best Roofing Now',
  description:
    'Expert church roofing services in Charlotte NC. Specializing in steep slopes, steeples, historic churches, and religious buildings. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'church roofing Charlotte NC',
    'church roof repair Charlotte',
    'religious building roofing Charlotte',
    'steeple repair Charlotte NC',
    'historic church roofing Charlotte',
    'church roof replacement Charlotte',
    'sanctuary roofing Charlotte NC',
    'chapel roofing contractor Charlotte',
    'place of worship roofing Charlotte',
    'church building roofer Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/church-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Church Roofing Charlotte NC | Religious Building Experts | Best Roofing Now',
    description:
      'BBB A+ rated church roofing experts in Charlotte NC. Steep slopes, steeples, historic churches, and religious building specialists. Free estimates.',
    url: `${SITE_CONFIG.url}/church-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero5,
        width: 1200,
        height: 630,
        alt: 'Professional church roofing services in Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Church-specific services
const churchServices = [
  {
    icon: Church,
    title: 'Sanctuary Roofing',
    description: 'Complete roofing solutions for main sanctuary buildings with attention to acoustic and aesthetic needs.',
  },
  {
    icon: Layers,
    title: 'Steep Slope Specialists',
    description: 'Expert installation on the steep, complex roof designs common in church architecture.',
  },
  {
    icon: History,
    title: 'Historic Preservation',
    description: 'Sensitive restoration work for historic churches preserving original character and materials.',
  },
  {
    icon: Hammer,
    title: 'Steeple & Spire Repair',
    description: 'Specialized repair and restoration of steeples, spires, and bell towers.',
  },
  {
    icon: Heart,
    title: 'Multi-Building Campuses',
    description: 'Comprehensive roofing for fellowship halls, education buildings, and parsonages.',
  },
  {
    icon: FileCheck,
    title: 'Capital Campaign Support',
    description: 'Detailed proposals and phased project options for church building committees.',
  },
];

// Why choose us for churches
const whyChooseUs = [
  {
    icon: Award,
    title: 'Religious Building Experience',
    description: 'Extensive experience with churches, synagogues, and religious buildings throughout Charlotte.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Charlotte property owners.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Military values of respect, integrity, and attention to detail in every project.',
  },
  {
    icon: CheckCircle,
    title: 'Fully Insured',
    description: 'Comprehensive coverage including specialty access equipment for steeple work.',
  },
  {
    icon: Users,
    title: 'Respectful Service',
    description: 'We understand the sacred nature of your space and work with appropriate reverence.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'We work around worship services and church activities to minimize disruption.',
  },
];

// Types of religious buildings served
const buildingTypes = [
  'Churches',
  'Cathedrals',
  'Chapels',
  'Synagogues',
  'Mosques',
  'Temples',
  'Fellowship Halls',
  'Education Buildings',
  'Parsonages',
  'Parish Houses',
  'Ministry Centers',
  'Community Centers',
];

// Charlotte areas served
const areasServed = [
  'Charlotte',
  'Matthews',
  'Mint Hill',
  'Huntersville',
  'Cornelius',
  'Davidson',
  'Mooresville',
  'Concord',
  'Gastonia',
  'Rock Hill',
  'Fort Mill',
  'Indian Trail',
];

// FAQs about church roofing
const faqs = [
  {
    question: 'Do you have experience with steep church roofs?',
    answer:
      "Absolutely. Church architecture often features steep-pitched roofs that require specialized skills and safety equipment. Our crews are trained for steep-slope work and have completed numerous church roofing projects with pitches of 8/12, 10/12, and even steeper. We use proper harnesses, scaffolding, and equipment to work safely at any pitch.",
  },
  {
    question: 'Can you repair or replace our church steeple roof?',
    answer:
      "Yes, we specialize in steeple and spire work. These require specialized access equipment like boom lifts or scaffolding systems. We carefully assess the steeple structure, match existing materials when possible, and ensure proper flashing at all transition points. For historic steeples, we work to preserve original character while providing modern protection.",
  },
  {
    question: 'How do you handle roofing historic churches?',
    answer:
      "Historic church roofing requires sensitivity to preservation principles. We work with original materials when possible, including slate, copper, and wood shakes. When replacement is necessary, we carefully match the original appearance. We can work with historic preservation requirements and coordinate with any applicable review boards.",
  },
  {
    question: 'Can you work around our worship schedule?',
    answer:
      "Absolutely. We understand that worship services and church activities take priority. We schedule work around Sunday services, Wednesday nights, and other regular programming. For major projects, we create detailed schedules in coordination with church leadership to minimize impact on congregation activities.",
  },
  {
    question: 'What roofing materials do you recommend for churches?',
    answer:
      "The best material depends on your church's architecture, budget, and goals. Architectural shingles offer excellent value and aesthetics for many churches. Metal roofing provides exceptional longevity - often 50+ years. For traditional or historic buildings, slate or slate-look materials maintain architectural integrity. We'll recommend options that balance appearance, durability, and budget.",
  },
  {
    question: 'How much does church roof replacement cost?',
    answer:
      "Church roofing costs vary significantly based on building size, roof complexity, accessibility, and material choice. Steep slopes and steeples add to costs due to safety requirements and equipment needs. We provide detailed proposals with multiple material options so building committees can evaluate choices. We're also happy to present to church boards and answer questions.",
  },
  {
    question: 'Do you help with insurance claims for church roof damage?',
    answer:
      "Yes, we have extensive experience with commercial property insurance claims. We thoroughly document damage, prepare detailed scope reports, meet with insurance adjusters, and advocate for fair settlements. Many churches find our insurance expertise invaluable after storm events. We handle the complexity so church leadership can focus on ministry.",
  },
  {
    question: 'Can you phase a large project over multiple budget years?',
    answer:
      "Absolutely. We understand that many churches need to work within capital campaign timelines or phase projects across budget years. We can divide large projects into logical phases - perhaps sanctuary first, then education building, then fellowship hall. Our proposals clearly identify natural break points for phased execution.",
  },
];

export default function ChurchRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Church Roofing Charlotte NC', url: `${SITE_CONFIG.url}/church-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero5}
            alt="Professional church roofing services in Charlotte NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Religious Building Experts | Veteran-Owned</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Church Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Protecting Charlotte's places of worship with expert craftsmanship
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now understands the unique requirements of church roofing. From steep sanctuary
              roofs to steeple repairs and historic preservation, we bring reverence and expertise to every
              religious building project.
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

      {/* Church-Specific Intro */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Charlotte's Trusted Church Roofing Specialists
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Churches and religious buildings present unique roofing challenges. Steep sanctuary roofs,
                towering steeples, historic materials, and the need to work around worship schedules all
                require a contractor with specialized experience and deep respect for your sacred space.
              </p>
              <p>
                Best Roofing Now has served churches and religious communities throughout Charlotte for years.
                Our veteran-owned company brings values of integrity, respect, and meticulous attention to
                detail that church leadership appreciates. We understand that your building is more than
                structure - it's the heart of your congregation.
              </p>
              <p>
                Whether you need emergency leak repair before Sunday service, a complete sanctuary re-roofing,
                or historic steeple restoration, our team has the skills and equipment to handle even the
                most complex church roofing projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Church Roofing Services
            </h2>
            <p className="text-gray text-lg">
              Comprehensive roofing solutions for churches and religious buildings throughout Charlotte.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {churchServices.map((service) => (
              <div
                key={service.title}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{service.title}</h3>
                <p className="text-gray text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steep Slope & Steeple Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Steep church roof completed by Best Roofing Now in Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Steep Slope & Steeple Specialists
              </h2>
              <p className="text-gray text-lg mb-6">
                Church architecture often features dramatically steep roofs and soaring steeples that require
                specialized expertise and equipment. Our crews are trained and equipped for these challenges.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">Steep Slope Safety</h3>
                    <p className="text-gray text-sm">OSHA-compliant harness systems and staging for pitches up to 18/12</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">Steeple Access</h3>
                    <p className="text-gray text-sm">Boom lifts and custom scaffolding for safe steeple work at any height</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">Complex Roof Lines</h3>
                    <p className="text-gray text-sm">Expert flashing and waterproofing at valleys, dormers, and transitions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">Bell Tower Expertise</h3>
                    <p className="text-gray text-sm">Specialized repairs for bell towers including structural assessment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Churches Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Church building committees need a contractor they can trust with their sacred space and
                congregation's resources. Our approach reflects our understanding of your unique needs.
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
                src={IMAGES.realProjects.project1}
                alt="Church roofing project completed by Best Roofing Now"
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
                    <p className="text-sm text-gray">{SITE_CONFIG.googleReviewCount}+ Reviews</p>
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
                Need Church Roofing in Charlotte?
              </h2>
              <p className="text-white/90">
                Schedule a free assessment with our religious building specialists.
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
                Schedule Free Assessment
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

      {/* Buildings Served Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Religious Buildings We Serve
            </h2>
            <p className="text-gray text-lg">
              We provide roofing services for all types of religious buildings and faith communities.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-4">Building Types</h3>
              <div className="flex flex-wrap gap-2">
                {buildingTypes.map((type) => (
                  <span
                    key={type}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-4">Areas Served</h3>
              <div className="flex flex-wrap gap-2">
                {areasServed.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historic Church Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Historic Church Preservation
                </h2>
                <p className="text-gray text-lg mb-6">
                  Charlotte has many beautiful historic churches that require special care during roofing
                  projects. We understand preservation principles and work to maintain your building's
                  architectural integrity.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Slate roof repair and replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Copper flashing and gutters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Wood shake restoration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Period-appropriate material matching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Historic preservation compliance</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Image
                  src={IMAGES.realProjects.certainteed1}
                  alt="Historic church roofing preservation in Charlotte NC"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Church Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about church and religious building roofing in Charlotte.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-light rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="church-roofing-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/church-roofing-charlotte-nc`}
      />

      {/* Final CTA */}
      <CTASection
        title="Ready to Protect Your Place of Worship?"
        subtitle="Get a free assessment from Charlotte's trusted church roofing experts. We bring reverence, expertise, and exceptional craftsmanship to every religious building project."
      />
    </>
  );
}
