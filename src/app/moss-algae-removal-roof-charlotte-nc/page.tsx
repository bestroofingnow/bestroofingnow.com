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
  Droplets,
  Leaf,
  AlertTriangle,
  Sparkles,
  Sun,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Moss & Algae Removal Charlotte',
  description:
    'Professional moss and algae removal from roofs in Charlotte NC. Soft washing, prevention treatments, and NC humidity solutions. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'moss removal roof Charlotte NC',
    'algae roof cleaning Charlotte',
    'roof cleaning Charlotte NC',
    'soft wash roof Charlotte',
    'black streaks roof Charlotte NC',
    'moss prevention Charlotte roofing',
    'algae resistant shingles Charlotte',
    'roof stain removal Charlotte NC',
    'green moss roof Charlotte',
    'roof wash Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/moss-algae-removal-roof-charlotte-nc`,
  },
  openGraph: {
    title: 'Moss & Algae Removal Charlotte NC | Roof Cleaning | Best Roofing Now',
    description:
      'Professional moss and algae removal in Charlotte NC. Soft washing, prevention treatments for NC humidity. BBB A+ rated. Free estimates.',
    url: `${SITE_CONFIG.url}/moss-algae-removal-roof-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero5,
        width: 1200,
        height: 630,
        alt: 'Moss and algae removal services in Charlotte NC - Best Roofing Now roof cleaning experts',
      },
    ],
  },
};

// Problems caused by moss and algae
const problems = [
  {
    icon: Droplets,
    title: 'Water Retention',
    description:
      'Moss acts like a sponge, holding moisture against your shingles. This accelerates shingle degradation and can lead to rot.',
  },
  {
    icon: AlertTriangle,
    title: 'Shingle Damage',
    description:
      'Moss roots can lift shingle edges and algae acids degrade the limestone filler, causing granule loss and shortened roof life.',
  },
  {
    icon: Leaf,
    title: 'Debris Buildup',
    description:
      'Moss traps leaves and debris, creating conditions for further growth and blocking water drainage into gutters.',
  },
  {
    icon: Sun,
    title: 'Energy Inefficiency',
    description:
      'Dark algae streaks absorb more heat, raising attic temperatures and increasing cooling costs during Charlotte\'s hot summers.',
  },
];

// Our cleaning process
const cleaningProcess = [
  {
    step: '1',
    title: 'Roof Inspection',
    description:
      'We thoroughly inspect your roof to assess moss/algae growth, identify underlying issues, and check for any damage.',
  },
  {
    step: '2',
    title: 'Pre-Treatment',
    description:
      'We apply a biodegradable cleaning solution that breaks down moss and algae without harming plants or animals.',
  },
  {
    step: '3',
    title: 'Soft Washing',
    description:
      'Using low-pressure soft wash techniques, we gently clean the roof without damaging shingles like power washing can.',
  },
  {
    step: '4',
    title: 'Rinse & Inspection',
    description:
      'We thoroughly rinse the roof and inspect our work, ensuring all growth is removed and no damage occurred.',
  },
  {
    step: '5',
    title: 'Prevention Treatment',
    description:
      'Optional preventive treatment inhibits future growth, keeping your roof cleaner longer between cleanings.',
  },
];

// Prevention methods
const preventionMethods = [
  {
    title: 'Zinc or Copper Strips',
    description:
      'Metal strips installed near the ridge slowly release ions that inhibit moss and algae growth as rainwater washes over them.',
  },
  {
    title: 'Algae-Resistant Shingles',
    description:
      'When replacing your roof, we can install shingles with copper granules that resist algae growth for 10-15 years.',
  },
  {
    title: 'Tree Trimming',
    description:
      'Reducing shade over the roof allows more sunlight and faster drying, creating conditions less favorable for growth.',
  },
  {
    title: 'Regular Maintenance',
    description:
      'Annual inspections and debris removal keep small problems from becoming major moss or algae infestations.',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Charlotte homeowners.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: Sparkles,
    title: 'Soft Wash Experts',
    description: 'We use gentle, effective soft washing that cleans without damaging your shingles.',
  },
  {
    icon: Users,
    title: 'Certified Installers',
    description: 'CertainTeed, GAF, and Owens Corning certified for premium warranty options.',
  },
  {
    icon: Clock,
    title: 'Lasting Results',
    description: 'Our cleaning and prevention treatments keep your roof cleaner for years.',
  },
];

// Signs you need cleaning
const signsSigns = [
  'Black or dark streaks running down the roof',
  'Green, fuzzy moss patches (especially on north-facing slopes)',
  'Thick moss buildup in shingle valleys',
  'Algae stains around dormers and chimneys',
  'Discolored or stained shingles',
  'Moss visible from ground level',
  'Increased debris accumulation on roof',
  'Neighbors have similar issues (spores spread)',
];

// FAQs
const faqs = [
  {
    question: 'What causes moss and algae to grow on roofs in Charlotte?',
    answer:
      'Charlotte\'s humid climate creates ideal conditions for moss and algae growth. Algae (Gloeocapsa magma) causes the dark streaks you see on many roofs - it feeds on the limestone filler in shingles and thrives in humidity. Moss prefers shaded, damp areas and is common on north-facing roof sections or under tree cover. Both are exacerbated by Charlotte\'s frequent rain (43+ inches annually) and summer humidity.',
  },
  {
    question: 'Is the moss or algae damaging my roof?',
    answer:
      'Yes, both cause damage over time. Algae produces acids that break down the limestone in shingles, causing granule loss and reducing shingle lifespan by years. Moss is worse - it holds moisture against the roof, can lift shingle edges allowing water intrusion, and its roots can work into shingle layers. Left untreated, severe moss growth can shorten roof life by 10 years or more.',
  },
  {
    question: 'What\'s the difference between soft washing and pressure washing?',
    answer:
      'Pressure washing uses high-pressure water (1,500-3,000+ PSI) to blast debris away. This can damage shingles, strip granules, and void warranties. Soft washing uses low pressure (under 500 PSI) combined with specialized cleaning solutions that kill moss and algae at the root. It\'s the method recommended by shingle manufacturers and what we exclusively use for roof cleaning.',
  },
  {
    question: 'How often should I have my roof cleaned?',
    answer:
      'In Charlotte\'s humid climate, most roofs benefit from cleaning every 3-5 years, depending on sun exposure and tree coverage. Heavily shaded roofs or those surrounded by trees may need cleaning more frequently. After a professional cleaning with preventive treatment, you can often extend the time between cleanings to 5-7 years.',
  },
  {
    question: 'How much does roof cleaning cost in Charlotte?',
    answer:
      'Professional soft wash roof cleaning in Charlotte typically costs $250-$600 for most homes, depending on roof size, pitch, and extent of growth. Preventive treatments add $100-$200. The investment is well worth it - cleaning extends roof life and prevents the accelerated damage that moss and algae cause to shingles.',
  },
  {
    question: 'Will roof cleaning void my shingle warranty?',
    answer:
      'No, soft washing will not void your warranty. In fact, most shingle manufacturers recommend soft washing as the proper cleaning method. What CAN void your warranty is pressure washing, which can damage shingles and strip granules. We exclusively use manufacturer-approved soft wash techniques to protect both your roof and your warranty.',
  },
  {
    question: 'Can I clean my roof myself?',
    answer:
      'While DIY roof cleaning products exist, we don\'t recommend it for several reasons: it\'s dangerous (slippery roof + cleaning solution), improper techniques can damage shingles, and consumer products are less effective than professional solutions. Additionally, you may not recognize other roof issues a professional would catch during cleaning. Professional cleaning is safer, more effective, and often more cost-effective.',
  },
  {
    question: 'How can I prevent moss and algae from coming back?',
    answer:
      'Prevention strategies include: installing zinc or copper strips near the ridge (ions inhibit growth), trimming trees to reduce shade, improving attic ventilation to reduce roof moisture, keeping gutters clean to improve drainage, scheduling regular debris removal, and applying preventive treatments during cleaning. When replacing your roof, consider algae-resistant shingles with copper granules.',
  },
];

// Charlotte neighborhoods served
const charlotteNeighborhoods = [
  'Myers Park',
  'Dilworth',
  'South End',
  'NoDa',
  'Plaza Midwood',
  'Ballantyne',
  'University City',
  'Cotswold',
  'Elizabeth',
  'Eastover',
  'SouthPark',
  'Uptown Charlotte',
];

export default function MossAlgaeRemovalRoofCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Moss & Algae Removal Charlotte NC', url: `${SITE_CONFIG.url}/moss-algae-removal-roof-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero5}
            alt="Moss and algae removal in Charlotte NC - Best Roofing Now roof cleaning experts"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Soft Wash Experts | Roof Cleaning</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Moss & Algae Removal <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Restore your roof's appearance and extend its life with professional cleaning
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Charlotte's humid climate makes roofs prone to unsightly moss and algae growth. Best Roofing Now
              uses safe, effective soft washing techniques to remove growth without damaging your shingles. We
              also offer prevention treatments to keep your roof cleaner longer.
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
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Moss & Algae Are Bad for Your Roof
            </h2>
            <p className="text-gray text-lg">
              Those dark streaks and green patches aren't just ugly - they're actively damaging your roof
              and shortening its lifespan.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem) => (
              <div key={problem.title} className="bg-light p-6 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{problem.title}</h3>
                <p className="text-gray text-sm">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs You Need Cleaning Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <Image
                src={IMAGES.cleaning.softWash}
                alt="Soft washing roof cleaning in Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Signs Your Roof Needs Cleaning
              </h2>
              <p className="text-gray text-lg mb-6">
                Not sure if your roof has a moss or algae problem? Look for these telltale signs:
              </p>
              <ul className="space-y-3">
                {signsSigns.map((sign, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Leaf className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray">{sign}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  href="/contact"
                  variant="primary"
                  icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
                >
                  Schedule Free Inspection
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Process Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Soft Wash Cleaning Process
            </h2>
            <p className="text-gray text-lg">
              Safe, effective roof cleaning that restores your roof without causing damage.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {cleaningProcess.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="bg-light p-6 rounded-xl h-full">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-dark mb-2">{step.title}</h3>
                  <p className="text-gray text-sm">{step.description}</p>
                </div>
                {index < cleaningProcess.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-primary z-10" />
                )}
              </div>
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
                Why Charlotte Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When it comes to roof cleaning, trust the experts who do it right and protect your investment.
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
                src={IMAGES.realProjects.project3}
                alt="Best Roofing Now - Professional roof cleaning in Charlotte NC"
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
                Ready to Restore Your Roof's Appearance?
              </h2>
              <p className="text-white/90">
                Get a free estimate for professional moss and algae removal.
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

      {/* Prevention Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Preventing Future Growth
            </h2>
            <p className="text-gray text-lg">
              After cleaning, we offer prevention solutions to keep your roof looking great longer.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preventionMethods.map((method) => (
              <div key={method.title} className="bg-light p-6 rounded-xl">
                <h3 className="font-bold text-dark mb-3">{method.title}</h3>
                <p className="text-gray text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charlotte Humidity Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Charlotte's Humidity & Your Roof
              </h2>
              <p className="text-gray text-lg">
                Understanding why moss and algae thrive in our area helps you protect your investment.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-dark text-lg mb-4 flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-primary" /> Charlotte Climate Factors
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray">Average 43+ inches of rain annually</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray">Summer humidity often exceeds 70%</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray">Warm temperatures accelerate growth</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray">Dense tree cover in many neighborhoods</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" /> Our Solution
                  </h3>
                  <p className="text-gray mb-4">
                    Charlotte's climate means most roofs will develop moss or algae eventually. Regular professional
                    cleaning every 3-5 years, combined with prevention treatments, keeps your roof healthy and
                    attractive.
                  </p>
                  <p className="text-gray">
                    We understand the local conditions and use cleaning solutions and techniques specifically
                    effective for the types of algae and moss common in the Charlotte area.
                  </p>
                </div>
              </div>
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
              Roof Cleaning Services Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              We remove moss and algae from roofs across Charlotte and surrounding areas.
            </p>
          </div>

          <div className="bg-light rounded-xl p-6">
            <h3 className="text-xl font-bold text-dark mb-4">Charlotte Neighborhoods We Serve</h3>
            <div className="flex flex-wrap gap-2">
              {charlotteNeighborhoods.map((neighborhood) => (
                <span
                  key={neighborhood}
                  className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                >
                  {neighborhood}
                </span>
              ))}
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
                Moss & Algae Removal FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roof cleaning in Charlotte.
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
        pageType="other"
        city="Charlotte"
        slug="moss-algae-removal-roof-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/moss-algae-removal-roof-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Moss Algae Removal Roof"

      />

      <CTASection
        title="Get Your Roof Cleaned Today"
        subtitle="Remove unsightly moss and algae while extending your roof's lifespan. Contact Best Roofing Now for a free estimate on professional roof cleaning."
      />
    </>
  );
}
