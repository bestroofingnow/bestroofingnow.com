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
  Gem,
  Flame,
  Home,
  Landmark,
  Leaf,
  Sparkles,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Slate Roofing Charlotte NC | Luxury Slate Roof Installation',
  description:
    'Expert slate roof installation and repair in Charlotte NC. Natural slate roofing for luxury homes and historic properties. 100+ year lifespan. BBB A+ rated. Free estimates.',
  keywords: [
    'slate roofing charlotte nc',
    'slate roof repair charlotte',
    'slate roof installation charlotte nc',
    'natural slate roofing charlotte',
    'slate roof contractors charlotte',
    'luxury roofing charlotte nc',
    'historic home roofing charlotte',
    'slate shingles charlotte nc',
    'slate roof replacement charlotte',
    'premium roofing charlotte nc',
    'slate tile roof charlotte',
    'estate roofing charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/slate-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Slate Roofing Charlotte NC | Luxury Slate Roof Installation',
    description:
      'Premium natural slate roof installation for Charlotte\'s finest homes. Timeless beauty, 100+ year lifespan, and unmatched elegance from BBB A+ rated experts.',
    url: `${SITE_CONFIG.url}/slate-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.houses.modern1,
        width: 1200,
        height: 630,
        alt: 'Slate roofing installation Charlotte NC - Best Roofing Now luxury roofing',
      },
    ],
  },
};

// Benefits of slate roofing
const benefits = [
  {
    icon: Clock,
    title: '100+ Year Lifespan',
    description: 'Natural slate routinely lasts 100-150 years, often outliving the homes they protect.',
  },
  {
    icon: Gem,
    title: 'Timeless Beauty',
    description: 'Each slate tile is unique, creating a stunning, elegant appearance that only improves with age.',
  },
  {
    icon: Flame,
    title: 'Fireproof Protection',
    description: 'Natural stone is completely fireproof - the highest possible fire rating for any roofing material.',
  },
  {
    icon: Leaf,
    title: '100% Natural',
    description: 'Quarried natural stone with zero environmental impact. No chemicals, plastics, or synthetics.',
  },
  {
    icon: Shield,
    title: 'Storm Resistant',
    description: 'Dense slate stands up to high winds, hail, and severe weather better than almost any other material.',
  },
  {
    icon: Sparkles,
    title: 'Increases Home Value',
    description: 'Slate roofs significantly increase property values and are highly desirable to luxury home buyers.',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Award,
    title: 'Slate Roofing Specialists',
    description: 'Our master craftsmen have specialized training in traditional slate installation techniques.',
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
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability insurance.',
  },
  {
    icon: Users,
    title: 'Historic Preservation',
    description: 'Experience with historic homes and preservation requirements throughout Charlotte.',
  },
  {
    icon: Clock,
    title: 'Lifetime Investment',
    description: 'We help you select the perfect slate for a roof that will last generations.',
  },
];

// Slate types and colors
const slateTypes = [
  {
    type: 'Vermont Slate',
    description: 'Premium American slate in unfading gray, green, purple, and red colors.',
    lifespan: '125-200 years',
  },
  {
    type: 'Pennsylvania Slate',
    description: 'Classic black and gray slates with proven multi-generational performance.',
    lifespan: '100-150 years',
  },
  {
    type: 'Welsh Slate',
    description: 'Prestigious European slate known for its deep blue-gray tones.',
    lifespan: '100-200 years',
  },
  {
    type: 'Spanish Slate',
    description: 'Cost-effective option with beautiful dark gray and black coloring.',
    lifespan: '75-100 years',
  },
];

// Ideal applications
const applications = [
  {
    icon: Home,
    title: 'Luxury Estates',
    description: 'The ultimate roofing choice for upscale homes in Myers Park, Eastover, and other premier neighborhoods.',
  },
  {
    icon: Landmark,
    title: 'Historic Homes',
    description: 'Authentic restoration for Dilworth, Fourth Ward, and other historic Charlotte neighborhoods.',
  },
  {
    icon: Gem,
    title: 'Custom Homes',
    description: 'Make a statement with new construction featuring timeless slate roofing.',
  },
];

// FAQs
const faqs = [
  {
    question: 'How much does a slate roof cost in Charlotte NC?',
    answer:
      'Slate roofing in Charlotte typically costs $20-40 per square foot installed, or $40,000-$80,000+ for an average home. Premium Vermont or Welsh slates can exceed $50/sq ft. While significantly more expensive upfront than other materials, slate\'s 100-150 year lifespan makes it the most cost-effective roofing choice over the very long term - often the only roof a home will ever need.',
  },
  {
    question: 'How long does a slate roof actually last?',
    answer:
      'Natural slate roofs routinely last 100-150 years, with some lasting 200+ years. Many slate roofs installed in the 1800s are still protecting homes today. The key factors are slate quality (unfading vs weathering grades), proper installation, and appropriate roof structure. Hard slates like Vermont unfading can last 175-200 years when properly maintained.',
  },
  {
    question: 'Is my home\'s structure strong enough for slate?',
    answer:
      'Slate is heavier than other roofing materials (800-1500 lbs per 100 sq ft vs 200-300 for shingles). Most homes built before 1940 were designed for slate and can support it without modification. Newer homes may need structural reinforcement. We provide thorough structural assessments to determine if your home can support slate or what modifications might be needed.',
  },
  {
    question: 'Can you repair my existing slate roof?',
    answer:
      'Absolutely. Slate roof repair is one of our specialties. We can replace broken or missing slates, repair flashing, address leaks, and restore your slate roof to excellent condition. We maintain an inventory of salvaged and new slates in various sizes and colors to match existing roofs. Often, a well-executed repair extends a slate roof\'s life by decades.',
  },
  {
    question: 'What maintenance does a slate roof require?',
    answer:
      'Slate roofs require minimal maintenance compared to their incredible lifespan. Annual inspections to check for cracked or slipped slates, debris in valleys, and flashing condition are recommended. The copper or stainless steel flashings typically need replacement every 70-100 years - still less often than most roofs need complete replacement!',
  },
  {
    question: 'Should I get natural slate or synthetic slate?',
    answer:
      'Natural slate offers unmatched longevity (100-150+ years vs 50 years for synthetic), authentic beauty that improves with age, and the highest fire rating. Synthetic slate costs less and weighs less, but lacks the heirloom quality and exceptional lifespan of natural stone. For homes where slate is the goal, we typically recommend natural slate for its superior long-term value.',
  },
  {
    question: 'Is slate roofing appropriate for Charlotte\'s climate?',
    answer:
      'Slate is excellent for Charlotte\'s climate. It handles our temperature variations, humidity, UV exposure, and occasional severe storms with ease. The dense stone is impervious to the rot and mold that can affect other materials in our humid climate. Many of Charlotte\'s oldest homes still have their original slate roofs.',
  },
  {
    question: 'Do you work with historic preservation requirements?',
    answer:
      'Yes. We have experience working with Charlotte\'s historic neighborhoods and understand preservation requirements. We can match existing slate patterns, colors, and installation methods to maintain historic authenticity. We also work with the Charlotte-Mecklenburg Historic Landmarks Commission when required for designated properties.',
  },
];

export default function SlateRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Slate Roofing Charlotte NC', url: `${SITE_CONFIG.url}/slate-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.houses.modern1}
            alt="Slate roofing installation Charlotte NC - Best Roofing Now luxury roofing"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Gem className="w-4 h-4" />
              <span className="text-sm font-semibold">Luxury Slate Roofing Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Slate Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Natural slate roofing with a 100+ year lifespan for Charlotte's finest homes
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now specializes in luxury slate roof installation and repair throughout
              Charlotte. Natural slate offers timeless beauty, unmatched durability, and the
              prestige that discerning homeowners deserve.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Your Free Consultation
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
                <Clock className="w-5 h-5 text-green-400" />
                100+ Year Lifespan
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Natural Slate Roofing?
            </h2>
            <p className="text-gray text-lg">
              For over a thousand years, natural slate has been the roofing choice for the world's
              finest buildings. Experience the same timeless elegance and unmatched durability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{benefit.title}</h3>
                <p className="text-gray text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slate Types Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Premium Slate Options
            </h2>
            <p className="text-gray text-lg">
              We source the finest natural slate from quarries around the world to match
              your home's style and your expectations for quality.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {slateTypes.map((slate) => (
              <div key={slate.type} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-dark mb-2">{slate.type}</h3>
                <p className="text-gray mb-4">{slate.description}</p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Clock className="w-5 h-5" />
                  <span>Expected Lifespan: {slate.lifespan}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Perfect for Charlotte's Finest Properties
              </h2>
              <p className="text-gray text-lg mb-8">
                From historic restorations to luxury new construction, slate roofing makes a
                statement of quality and permanence that other materials simply cannot match.
              </p>
              <div className="space-y-6">
                {applications.map((app) => (
                  <div key={app.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <app.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">{app.title}</h3>
                      <p className="text-gray">{app.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-dark mb-4">Charlotte Neighborhoods We Serve:</h3>
                <div className="flex flex-wrap gap-2">
                  {['Myers Park', 'Eastover', 'Dilworth', 'Fourth Ward', 'Elizabeth', 'Sedgefield', 'Cotswold', 'Foxcroft', 'Providence Plantation'].map((item) => (
                    <span
                      key={item}
                      className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.houses.house1}
                alt="Luxury slate roofing for Charlotte homes"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Repair Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Expert Slate Roof Repair & Restoration
            </h2>
            <p className="text-gray text-lg mb-8">
              Already have a slate roof? Our master craftsmen specialize in repairs and
              restoration to keep your slate roof protecting your home for generations to come.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark mb-3">Slate Repair Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Broken slate replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Slipped slate re-securing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Flashing repair/replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Leak investigation & repair</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark mb-3">Restoration Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Full slate roof assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Historic slate matching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Ridge and hip restoration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Complete roof restoration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Charlotte's Luxury Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Slate roofing requires master craftsmanship and specialized expertise.
                Our trained artisans honor traditional techniques while delivering
                results that stand the test of time.
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
                alt="Best Roofing Now - Expert slate roof installation in Charlotte NC"
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
                Interested in a Slate Roof for Your Home?
              </h2>
              <p className="text-white/90">
                Schedule a free consultation with Charlotte's slate roofing specialists.
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
                Schedule Consultation
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
                Slate Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about natural slate roofing in Charlotte NC.
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

      {/* Related Services */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Related Premium Roofing Services
            </h2>
            <p className="text-gray text-lg">
              Explore our full range of premium roofing services in Charlotte.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/standing-seam-metal-roof-charlotte-nc"
              className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                Standing Seam Metal
              </h3>
              <p className="text-gray text-sm mb-3">
                Premium metal roofing with 50+ year lifespan and modern elegance.
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/certainteed-shingles-charlotte-nc"
              className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                CertainTeed Shingles
              </h3>
              <p className="text-gray text-sm mb-3">
                Premium architectural shingles with industry-leading warranties.
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/services/residential-roofing"
              className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                All Residential Roofing
              </h3>
              <p className="text-gray text-sm mb-3">
                Complete residential roofing solutions for Charlotte homeowners.
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Experience the Timeless Elegance of Natural Slate"
        subtitle="Invest in a roof that will protect and beautify your home for generations. Contact Charlotte's trusted slate roofing specialists for a free consultation."
      />
    </>
  );
}
