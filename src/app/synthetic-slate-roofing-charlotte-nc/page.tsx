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
  Feather,
  Gem,
  Zap,
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
  title: 'Synthetic Slate Roofing Charlotte',
  description:
    'Synthetic slate roofing in Charlotte NC by Best Roofing Now. DaVinci Roofscapes, Brava Roof Tile, and CeDUR composite slate installation. Lightweight, impact-resistant, and affordable alternative to natural slate. Veteran-owned, BBB A+ rated.',
  keywords: [
    'synthetic slate roofing charlotte nc',
    'faux slate roof charlotte',
    'composite slate roofing charlotte nc',
    'davinci roofing charlotte',
    'brava roof tile charlotte',
    'synthetic slate cost charlotte nc',
    'lightweight slate roof charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/synthetic-slate-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Synthetic Slate Roofing Charlotte NC | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned synthetic slate roofing contractor in Charlotte NC. DaVinci, Brava, CeDUR composite slate installation. Lighter, cheaper, same elegant look. Free estimates.',
    url: `${SITE_CONFIG.url}/synthetic-slate-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero2,
        width: 1200,
        height: 630,
        alt: 'Synthetic slate roofing installation in Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

const services = [
  {
    icon: Gem,
    title: 'DaVinci Roofscapes',
    description: 'Premium composite slate tiles with the look of authentic slate and a 50-year limited lifetime warranty.',
    href: '/services/residential-roofing',
  },
  {
    icon: Shield,
    title: 'Brava Roof Tile',
    description: 'Eco-friendly synthetic slate made from recycled materials, available in old world and Spanish barrel styles.',
    href: '/services/residential-roofing',
  },
  {
    icon: Feather,
    title: 'CeDUR Synthetic Shake',
    description: 'Lightweight synthetic roofing with Class A fire rating and Class 4 impact resistance for Charlotte homes.',
    href: '/services/residential-roofing',
  },
  {
    icon: Home,
    title: 'Composite Slate Installation',
    description: 'Full synthetic slate roof installation with proper underlayment and ventilation for lasting performance.',
    href: '/services/residential-roofing',
  },
  {
    icon: Wrench,
    title: 'Synthetic Roof Repair',
    description: 'Expert repair for damaged synthetic slate tiles including individual tile replacement and flashing repair.',
    href: '/services/roof-repair',
  },
  {
    icon: CheckCircle,
    title: 'Warranty Service',
    description: 'Authorized warranty service for DaVinci, Brava, and CeDUR synthetic roofing products in Charlotte.',
    href: '/services/residential-roofing',
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
    icon: Feather,
    title: 'Lightweight Expert',
    description: 'Specialized knowledge in lightweight roofing systems that do not require structural reinforcement.',
  },
  {
    icon: Users,
    title: 'Certified Installers',
    description: 'Factory-trained and certified by DaVinci, Brava, and CeDUR for proper installation and warranty coverage.',
  },
  {
    icon: Clock,
    title: 'Faster Installation',
    description: 'Synthetic slate installs faster than natural stone, reducing labor time and project disruption.',
  },
];

const localAreas = [
  'Uptown Charlotte',
  'South Charlotte',
  'Myers Park',
  'Dilworth',
  'Eastover',
  'SouthPark',
  'Ballantyne',
  'Providence Plantation',
  'Foxcroft',
  'Quail Hollow',
];

const nearbyCities = [
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Mooresville', href: '/roofing-mooresville-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Mint Hill', href: '/locations/mint-hill-nc' },
  { name: 'Lake Norman', href: '/roofing-lake-norman-nc' },
  { name: 'Weddington', href: '/locations/weddington-nc' },
];

const faqs = [
  {
    question: 'How much does synthetic slate roofing cost compared to real slate in Charlotte?',
    answer:
      'Synthetic slate roofing in Charlotte typically costs $12-$20 per square foot installed, compared to $25-$50+ per square foot for natural slate. For a typical 2,000 sq ft Charlotte home, that means $24,000-$40,000 for synthetic vs. $50,000-$100,000+ for real slate. You get the same elegant appearance at 40-60% less cost, and synthetic slate does not require expensive structural reinforcement.',
  },
  {
    question: 'How long does synthetic slate roofing last?',
    answer:
      'Premium synthetic slate roofing from manufacturers like DaVinci and Brava carries warranties of 50 years to lifetime limited coverage. In Charlotte\'s climate, you can expect 40-60+ years of service life with proper installation and maintenance. This is comparable to natural slate while costing significantly less to install and maintain.',
  },
  {
    question: 'How much does synthetic slate weigh compared to real slate?',
    answer:
      'Synthetic slate weighs approximately 1.5-3.5 pounds per square foot compared to 8-15 pounds per square foot for natural slate. This 75-80% weight reduction means most Charlotte homes can be fitted with synthetic slate without any structural modifications to the roof deck or framing, saving thousands in reinforcement costs.',
  },
  {
    question: 'What wind rating does synthetic slate have for Charlotte storms?',
    answer:
      'Premium synthetic slate products are rated for wind speeds of 110-150+ mph depending on the manufacturer and installation method. DaVinci products are rated up to 110 mph standard and can be enhanced for higher ratings. This exceeds Charlotte building code requirements and provides excellent protection during severe thunderstorms and hurricanes.',
  },
  {
    question: 'Will my Charlotte HOA approve synthetic slate roofing?',
    answer:
      'Most Charlotte HOAs readily approve synthetic slate because it is virtually indistinguishable from natural slate in appearance. Many high-end communities that require slate-look roofing specifically allow synthetic alternatives. We can provide product samples and manufacturer documentation to support your HOA application and have successfully gained approval in numerous Charlotte neighborhoods.',
  },
  {
    question: 'Is synthetic slate impact resistant for Charlotte hail storms?',
    answer:
      'Yes, most synthetic slate products carry a Class 4 impact resistance rating, which is the highest available. This means they can withstand impacts from 2-inch hailstones without cracking or breaking. Natural slate, by comparison, can crack and shatter under hail impact. Many insurance companies offer premium discounts for Class 4 impact-rated roofing in the Charlotte area.',
  },
  {
    question: 'How do you maintain synthetic slate roofing in Charlotte?',
    answer:
      'Synthetic slate requires very little maintenance compared to natural slate. There is no need to worry about cracking, delaminating, or individual tiles becoming brittle over time. We recommend annual visual inspections, keeping gutters clean, and removing debris from valleys. Occasional cleaning with a garden hose keeps the tiles looking their best in Charlotte\'s humid climate.',
  },
  {
    question: 'Can synthetic slate be installed on my existing Charlotte home?',
    answer:
      'In most cases, yes. Because synthetic slate is 75-80% lighter than natural slate, it can typically be installed on standard roof structures without reinforcement. We will inspect your roof deck and framing to confirm suitability. If your home currently has asphalt shingles, it is almost certainly strong enough for synthetic slate without any structural modifications.',
  },
];

export default function SyntheticSlateRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Synthetic Slate Roofing Charlotte NC', url: `${SITE_CONFIG.url}/synthetic-slate-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/synthetic-slate-roofing-charlotte-nc`}
        pageName="Synthetic Slate Roofing Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero2}
            alt="Synthetic slate roofing installation in Charlotte NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Gem className="w-4 h-4" />
              <span className="text-sm font-semibold">Charlotte&apos;s Synthetic Slate Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Synthetic Slate Roofing Charlotte NC
              <br className="hidden md:block" />
              <span className="text-accent-light">The Look of Slate, Without the Weight</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              DaVinci, Brava, and CeDUR composite slate with {SITE_CONFIG.roofsInstalled}+ roofs installed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Get the timeless elegance of natural slate roofing at a fraction of the cost and weight.
              Best Roofing Now installs premium synthetic slate products that are lighter, more impact-resistant,
              and more affordable than real stone, with warranties up to 50 years.
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
              Synthetic Slate Roofing Products We Install
            </h2>
            <p className="text-gray text-lg">
              We are factory-certified installers for the top synthetic slate manufacturers, delivering
              beautiful, durable roofing that looks identical to natural slate at a fraction of the cost.
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
                Why Charlotte Homeowners Choose Synthetic Slate
              </h2>
              <p className="text-gray text-lg mb-8">
                Synthetic slate gives you the luxury appearance of natural stone roofing without the drawbacks.
                It is lighter, more impact-resistant, and costs 40-60% less than real slate while delivering
                comparable beauty and longevity for Charlotte homes.
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
                alt="Best Roofing Now - Synthetic slate roofing specialists in Charlotte NC"
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
                Want the Slate Look Without the Slate Price?
              </h2>
              <p className="text-white/90">
                Get a free estimate for synthetic slate roofing from Charlotte&apos;s certified composite slate installers.
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
              Synthetic Slate Roofing for Charlotte Homes
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Charlotte&apos;s upscale neighborhoods like Myers Park, Eastover, Foxcroft, and Ballantyne are ideal
                candidates for synthetic slate roofing. These communities value architectural beauty and curb appeal,
                and synthetic slate delivers the prestigious look of natural stone without the structural requirements,
                fragility, or prohibitive costs of real slate.
              </p>
              <p>
                <strong>DaVinci Roofscapes</strong> offers the most authentic slate reproduction on the market. Their
                multi-width slate tiles feature realistic color blending with up to 50 color options, and each tile is
                molded from actual slate for authentic texture. DaVinci carries a 50-year limited lifetime warranty
                and is virtually maintenance-free in Charlotte&apos;s climate.
              </p>
              <p>
                <strong>Brava Roof Tile</strong> stands out for its eco-friendly manufacturing using recycled materials.
                Their Old World Slate tiles offer a distinctly weathered European aesthetic, while their Spanish Barrel
                tiles provide a Mediterranean look. Brava products are 100% recyclable and carry Class A fire and
                Class 4 impact ratings.
              </p>
              <p>
                <strong>CeDUR Synthetic Shake</strong> provides a lighter-weight option for Charlotte homes seeking
                a rustic shake look with modern performance. With a Class A fire rating and exceptional impact
                resistance, CeDUR is increasingly popular in Charlotte neighborhoods where fire safety and storm
                protection are priorities.
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
              Our synthetic slate roofing installers serve homeowners throughout Charlotte, Mecklenburg County, and beyond.
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
              Our Roofing Work in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roofing projects throughout Charlotte and Mecklenburg County.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.project1}
                alt="Completed synthetic slate roofing in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.certainteed1}
                alt="Premium roofing installation in Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of completed roofing project in Mecklenburg County"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.project3}
                alt="Professional roofing work in Charlotte area"
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
                Synthetic Slate Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about synthetic slate roofing costs, materials, and installation in Charlotte.
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
        slug="synthetic-slate-roofing-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/synthetic-slate-roofing-charlotte-nc`}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Synthetic Slate Roofing"
      />

      <CTASection
        title="Ready for Synthetic Slate Roofing in Charlotte?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll help you choose the perfect synthetic slate product for your Charlotte home's style and budget."
      />
    </>
  );
}
