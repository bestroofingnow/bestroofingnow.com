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
  Wind,
  AlertTriangle,
  Home,
  Wrench,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Missing Shingles Repair Charlotte NC | Fast Service | Best Roofing Now',
  description:
    'Missing shingles on your roof? Best Roofing Now provides fast, professional missing shingle repair in Charlotte NC. Wind damage, age-related wear - we fix it all. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'missing shingles repair Charlotte NC',
    'blown off shingles Charlotte',
    'wind damaged shingles Charlotte NC',
    'replace missing shingles Charlotte',
    'shingle repair Charlotte NC',
    'roof shingle replacement Charlotte',
    'storm damaged shingles Charlotte',
    'loose shingles repair Charlotte',
    'shingle blew off roof Charlotte',
    'fix missing roof shingles Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/missing-shingles-repair-charlotte-nc`,
  },
  openGraph: {
    title: 'Missing Shingles Repair Charlotte NC | Fast Service | Best Roofing Now',
    description:
      'Fast, professional missing shingle repair in Charlotte NC. Wind damage, storm damage, age-related wear - we fix it all. BBB A+ rated. Free estimates.',
    url: `${SITE_CONFIG.url}/missing-shingles-repair-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Missing shingles repair service in Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Common causes of missing shingles
const causes = [
  {
    icon: Wind,
    title: 'Wind Damage',
    description:
      'Charlotte experiences severe thunderstorms and high winds. Gusts over 60 mph can lift and tear shingles right off your roof, especially older or improperly installed ones.',
  },
  {
    icon: Clock,
    title: 'Age & Wear',
    description:
      'As shingles age, the adhesive seal weakens and shingles become brittle. After 15-20 years, shingles are much more susceptible to wind uplift and cracking.',
  },
  {
    icon: AlertTriangle,
    title: 'Poor Installation',
    description:
      'Improperly nailed shingles or inadequate starter strips can cause premature shingle loss. We see this often with DIY repairs or unlicensed contractors.',
  },
  {
    icon: Home,
    title: 'Storm Damage',
    description:
      'Hail, falling branches, and severe weather can damage or dislodge shingles. Charlotte averages 25+ severe storm days per year.',
  },
];

// Our repair process
const repairProcess = [
  {
    step: '1',
    title: 'Free Inspection',
    description:
      'We thoroughly inspect your roof to identify all missing, damaged, or vulnerable shingles and assess underlying damage.',
  },
  {
    step: '2',
    title: 'Damage Assessment',
    description:
      'We check the underlayment and decking for water damage, document everything with photos, and provide a detailed repair estimate.',
  },
  {
    step: '3',
    title: 'Shingle Matching',
    description:
      'We source matching shingles from our extensive inventory or order exact replacements to maintain your roof\'s appearance.',
  },
  {
    step: '4',
    title: 'Professional Repair',
    description:
      'Our certified installers properly nail and seal replacement shingles, ensuring they\'ll withstand Charlotte\'s weather.',
  },
  {
    step: '5',
    title: 'Final Inspection',
    description:
      'We verify all repairs, clean up completely, and walk you through the work performed with before/after documentation.',
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
    title: 'Same-Day Service',
    description: 'Fast response for missing shingle repairs to prevent water damage to your home.',
  },
];

// FAQs
const faqs = [
  {
    question: 'How urgent is it to repair missing shingles?',
    answer:
      'Missing shingles should be repaired as soon as possible. Even one missing shingle exposes your roof deck to water infiltration, which can lead to leaks, mold growth, rotted decking, and damage to your attic insulation. In Charlotte\'s rainy climate (43+ inches annually), water damage can occur quickly. We offer same-day service for urgent repairs.',
  },
  {
    question: 'What causes shingles to blow off during storms?',
    answer:
      'Shingles blow off due to a combination of factors: high winds (Charlotte sees 60+ mph gusts during severe storms), aging adhesive that\'s lost its bond, improper nailing during installation, or shingles that were already cracked or damaged. The leading edge and ridge areas are most vulnerable to wind uplift.',
  },
  {
    question: 'Can you match my existing shingles?',
    answer:
      'In most cases, yes. We maintain an extensive inventory of popular shingle colors and styles from major manufacturers like CertainTeed, GAF, and Owens Corning. For older or discontinued shingles, we\'ll find the closest match possible. Keep in mind that existing shingles may have weathered, so new shingles might appear slightly different initially.',
  },
  {
    question: 'How much does it cost to replace missing shingles?',
    answer:
      'Minor shingle repairs in Charlotte typically range from $150-$400 for a few shingles, while more extensive repairs can range from $400-$1,000+. The cost depends on the number of shingles needed, roof accessibility, and whether there\'s underlying damage. We provide free estimates with transparent pricing - no hidden fees.',
  },
  {
    question: 'Will my homeowners insurance cover missing shingles?',
    answer:
      'If the missing shingles were caused by a covered peril like wind or hail (common in Charlotte storms), your insurance may cover the repair minus your deductible. We work with insurance companies regularly and can help document the damage for your claim. Normal wear and tear is typically not covered.',
  },
  {
    question: 'How can I prevent shingles from blowing off in the future?',
    answer:
      'Prevention strategies include: ensuring proper installation with correct nailing patterns, using high-wind rated shingles (we recommend 110+ mph rated for Charlotte), maintaining your roof with regular inspections, trimming overhanging tree branches, and replacing aging shingles before they fail. Our free inspections identify vulnerable areas.',
  },
  {
    question: 'Should I repair or replace my roof if shingles are missing?',
    answer:
      'It depends on the extent and cause of the damage. If you\'re missing a few shingles due to an isolated incident, repair is usually sufficient. However, if shingles are falling off regularly, your roof is over 20 years old, or you have widespread damage, replacement may be more cost-effective long-term. We\'ll give you an honest assessment.',
  },
  {
    question: 'How long does a missing shingle repair take?',
    answer:
      'Most missing shingle repairs take 1-3 hours to complete, depending on the number of shingles and roof accessibility. We can typically complete repairs the same day you call. For larger repairs involving multiple areas or underlying damage, the job may take a full day.',
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

export default function MissingShinglesRepairCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Missing Shingles Repair Charlotte NC', url: `${SITE_CONFIG.url}/missing-shingles-repair-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Missing shingles repair in Charlotte NC - Best Roofing Now professional service"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Wind className="w-4 h-4" />
              <span className="text-sm font-semibold">Fast Response | Same-Day Service Available</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Missing Shingles Repair <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Fast, professional shingle repair to protect your home from water damage
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Missing shingles leave your roof vulnerable to leaks and water damage. Best Roofing Now provides fast,
              expert repairs for wind-damaged, storm-damaged, and age-worn shingles throughout Charlotte. Don't wait
              until a small problem becomes a costly repair.
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

      {/* Problem Section - Why Missing Shingles Are Serious */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Missing Shingles Need Immediate Attention
            </h2>
            <p className="text-gray text-lg">
              Even a single missing shingle can lead to serious water damage. Here's what happens when shingles
              are missing from your Charlotte home's roof.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">Water Infiltration</h3>
                    <p className="text-gray">
                      Rain water seeps under surrounding shingles, soaking the underlayment and decking.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">Mold & Rot</h3>
                    <p className="text-gray">
                      Moisture trapped in your attic creates ideal conditions for mold growth and wood rot.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">Spreading Damage</h3>
                    <p className="text-gray">
                      Water can travel along rafters, causing damage far from the original missing shingle.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">Energy Loss</h3>
                    <p className="text-gray">
                      Exposed areas allow heat to escape in winter and enter in summer, raising energy bills.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.projects.stormDamage1}
                alt="Storm damaged roof with missing shingles in Charlotte NC"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Common Causes of Missing Shingles in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Understanding why shingles go missing helps prevent future problems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {causes.map((cause) => (
              <div key={cause.title} className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <cause.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{cause.title}</h3>
                <p className="text-gray text-sm">{cause.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Process Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Missing Shingle Repair Process
            </h2>
            <p className="text-gray text-lg">
              Professional, thorough repairs that protect your home for years to come.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {repairProcess.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="bg-light p-6 rounded-xl h-full">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-dark mb-2">{step.title}</h3>
                  <p className="text-gray text-sm">{step.description}</p>
                </div>
                {index < repairProcess.length - 1 && (
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
                When you need missing shingles repaired quickly and correctly, trust Charlotte's most
                reliable roofing company.
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
                alt="Best Roofing Now - Professional roofing team completing shingle repair in Charlotte"
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
                Missing Shingles? Don't Wait for Water Damage!
              </h2>
              <p className="text-white/90">
                Get a free inspection and estimate today. Same-day service available.
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

      {/* Service Areas Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Missing Shingle Repair Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              We repair missing shingles for homeowners across Charlotte and surrounding areas.
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

      {/* Prevention Tips Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Preventing Future Shingle Loss
              </h2>
              <p className="text-gray text-lg">
                After we repair your missing shingles, here's how to prevent it from happening again.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">Annual Inspections</h3>
                    <p className="text-gray text-sm">
                      Schedule yearly roof inspections to catch vulnerable shingles before they blow off.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">Post-Storm Checks</h3>
                    <p className="text-gray text-sm">
                      After any severe storm, visually inspect your roof from the ground for obvious damage.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">Trim Overhanging Trees</h3>
                    <p className="text-gray text-sm">
                      Branches can damage shingles during storms. Keep trees trimmed back from your roof.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">Quality Materials</h3>
                    <p className="text-gray text-sm">
                      When replacing shingles, invest in high-wind rated products (110+ mph) for Charlotte weather.
                    </p>
                  </div>
                </div>
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
                Missing Shingles Repair FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about missing shingle repair in Charlotte.
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
        slug="missing-shingles-repair-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/missing-shingles-repair-charlotte-nc`}
      />

      {/* Final CTA */}
      <CTASection
        title="Get Your Missing Shingles Repaired Today"
        subtitle="Don't let missing shingles lead to costly water damage. Contact Best Roofing Now for a free inspection and fast, professional repairs."
      />
    </>
  );
}
