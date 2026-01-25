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
  FileText,
  CloudRain,
  Camera,
  ClipboardCheck,
  HandshakeIcon,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Insurance Claim Roofing Charlotte NC | Storm Damage Experts | Best Roofing Now',
  description:
    'Expert insurance claim roofing in Charlotte NC. We handle your roof insurance claim from start to finish - free inspections, adjuster meetings, documentation, and repairs. BBB A+ rated.',
  keywords: [
    'insurance claim roofing Charlotte NC',
    'roof insurance claim Charlotte',
    'storm damage roof insurance Charlotte',
    'roofing insurance claims Charlotte NC',
    'insurance roofing contractor Charlotte',
    'roof claim help Charlotte NC',
    'hail damage claim roofing Charlotte',
    'wind damage roof insurance Charlotte',
    'insurance roof replacement Charlotte',
    'roofing company that works with insurance Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/insurance-claim-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Insurance Claim Roofing Charlotte NC | Storm Damage Experts',
    description:
      'Expert insurance claim assistance for Charlotte homeowners. We work directly with your insurance company to get your roof repaired or replaced. Free inspections and documentation.',
    url: `${SITE_CONFIG.url}/insurance-claim-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero18,
        width: 1200,
        height: 630,
        alt: 'Insurance claim roofing Charlotte NC - Best Roofing Now storm damage experts',
      },
    ],
  },
};

// Insurance claim process steps
const claimProcess = [
  {
    icon: Phone,
    step: '1',
    title: 'Free Storm Damage Inspection',
    description: 'We thoroughly inspect your roof for hail, wind, or storm damage and document everything with photos and detailed notes.',
  },
  {
    icon: FileText,
    step: '2',
    title: 'Comprehensive Documentation',
    description: 'We prepare a detailed damage report with measurements, photos, and material specifications that insurance adjusters need.',
  },
  {
    icon: HandshakeIcon,
    step: '3',
    title: 'Meet with Your Adjuster',
    description: 'We schedule and attend the insurance adjuster meeting at your property to ensure all damage is properly identified.',
  },
  {
    icon: ClipboardCheck,
    step: '4',
    title: 'Review & Supplement',
    description: 'We review your claim approval, identify any missed items, and file supplements if the settlement is insufficient.',
  },
  {
    icon: Camera,
    step: '5',
    title: 'Quality Repairs or Replacement',
    description: 'Once approved, our certified team completes your roof repair or replacement using premium materials.',
  },
  {
    icon: Shield,
    step: '6',
    title: 'Final Documentation',
    description: 'We provide all completion documentation, warranty information, and help you close out your claim properly.',
  },
];

// Why choose us for insurance claims
const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating for honest, ethical business practices.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from Charlotte homeowners we've helped with claims.`,
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability insurance for your protection.',
  },
  {
    icon: Users,
    title: 'Insurance Experts',
    description: 'Years of experience working with all major insurance companies on Charlotte roof claims.',
  },
  {
    icon: CheckCircle,
    title: 'No Upfront Costs',
    description: 'We handle insurance work with no money out of pocket - you only pay your deductible.',
  },
  {
    icon: Clock,
    title: 'Fast Response',
    description: 'Quick inspections and documentation to get your claim filed and processed promptly.',
  },
];

// Insurance companies we work with
const insuranceCompanies = [
  'State Farm',
  'Allstate',
  'USAA',
  'Liberty Mutual',
  'Nationwide',
  'Travelers',
  'Erie Insurance',
  'Farmers Insurance',
  'Progressive',
  'Amica',
  'NC Farm Bureau',
  'Hartford',
];

// FAQs about insurance claim roofing
const faqs = [
  {
    question: 'How do I know if I should file a roof insurance claim?',
    answer:
      'If your area has experienced a significant storm with hail, high winds, or heavy debris, you may have damage worth claiming. Signs include missing or damaged shingles, dents in gutters or vents, granules in gutters, and visible impact marks. Best Roofing Now offers free storm damage inspections to help you determine if you have a valid claim before you file.',
  },
  {
    question: 'Will filing a roof claim raise my insurance rates?',
    answer:
      'Weather-related claims for storm damage typically don\'t raise your rates the same way at-fault claims might. Many Charlotte homeowners have storm damage without realizing it. We recommend getting a free inspection to understand your options - there\'s no obligation and no pressure.',
  },
  {
    question: 'What does Best Roofing Now do during the insurance adjuster meeting?',
    answer:
      'We walk the roof with your adjuster, point out all documented damage, explain the scope of repairs needed, and ensure nothing is overlooked. Our presence helps ensure you receive a fair settlement. We know what adjusters look for and speak their language.',
  },
  {
    question: 'What if my insurance claim is denied or underpaid?',
    answer:
      'We help with denied or underpaid claims regularly. We can file supplements with additional documentation, request re-inspections, and help you understand your policy. Our goal is to get you the settlement you deserve for the damage you have.',
  },
  {
    question: 'How long does the insurance claim roofing process take?',
    answer:
      'The typical timeline is 2-4 weeks from inspection to claim approval. After approval, we can usually complete your roof within 1-3 days depending on the scope. We work efficiently while ensuring quality, and we keep you informed throughout the entire process.',
  },
  {
    question: 'Do I have to pay anything upfront for insurance roof work?',
    answer:
      'No. For insurance claims, we work directly with your insurance company. You only pay your deductible once the work is complete. We handle all the paperwork, coordination, and communication with your insurer.',
  },
  {
    question: 'What types of storm damage does homeowner\'s insurance typically cover?',
    answer:
      'Most Charlotte homeowner\'s policies cover hail damage, wind damage, damage from fallen trees or debris, and water damage from storm-related roof breaches. We help you understand your specific coverage and document all qualifying damage.',
  },
  {
    question: 'Can I choose my own roofing contractor for an insurance claim?',
    answer:
      'Absolutely. You have the right to choose any licensed contractor for your insurance repairs. Insurance companies cannot force you to use a preferred vendor. Best Roofing Now works with all insurance companies and advocates for fair settlements on your behalf.',
  },
];

export default function InsuranceClaimRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Insurance Claim Roofing Charlotte NC', url: `${SITE_CONFIG.url}/insurance-claim-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero18}
            alt="Insurance claim roofing Charlotte NC - Storm damage roof experts"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Insurance Claim Specialists | BBB A+ Rated</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Insurance Claim Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Storm damage? We handle your entire roof insurance claim from start to finish.
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now specializes in insurance claim roofing for Charlotte homeowners. From free storm damage inspections to adjuster meetings and quality repairs - we advocate for you every step of the way. No money out of pocket beyond your deductible.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Free Storm Damage Inspection
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
                No Upfront Costs
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                We Meet with Adjusters
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Claim Process Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Insurance Claim Process
            </h2>
            <p className="text-gray text-lg">
              We handle every step of your roof insurance claim so you can focus on what matters most. Here's how we make the process stress-free.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {claimProcess.map((step) => (
              <div
                key={step.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">{step.title}</h3>
                    <p className="text-gray text-sm">{step.description}</p>
                  </div>
                </div>
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
                Why Charlotte Homeowners Trust Us with Insurance Claims
              </h2>
              <p className="text-gray text-lg mb-8">
                Navigating a roof insurance claim can be overwhelming. We've helped hundreds of Charlotte homeowners get fair settlements and quality repairs. Our team knows the insurance process inside and out.
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
                alt="Insurance claim roofing in Charlotte NC - completed storm damage repair"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <CloudRain className="w-10 h-10 text-primary" />
                  <div>
                    <p className="font-bold text-dark">Storm Damage Experts</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.roofsInstalled}+ Roofs Restored</p>
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
                Think You Have Storm Damage?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation inspection. We'll document everything and help you understand your options.
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

      {/* Insurance Companies We Work With */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              We Work with All Major Insurance Companies
            </h2>
            <p className="text-gray text-lg">
              Best Roofing Now has experience working with every major insurance carrier in Charlotte. We know their processes and speak their language.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {insuranceCompanies.map((company) => (
              <span
                key={company}
                className="inline-block bg-light px-6 py-3 rounded-full text-dark font-medium border border-gray-200"
              >
                {company}
              </span>
            ))}
          </div>
          <p className="text-center text-gray mt-8">
            Don't see your insurance company? No problem - we work with all carriers.
          </p>
        </div>
      </section>

      {/* What We Document Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Thorough Documentation for Maximum Coverage
            </h2>
            <p className="text-gray text-lg">
              Proper documentation is key to getting your claim approved. Here's what we inspect and document for your insurance company.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-3">Shingle Damage</h3>
              <ul className="space-y-2 text-gray text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Hail impact marks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Missing or lifted shingles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Granule loss</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Cracked shingles</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-3">Metal Components</h3>
              <ul className="space-y-2 text-gray text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Gutter dents and damage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Vent cap damage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Flashing damage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Downspout damage</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-3">Accessories</h3>
              <ul className="space-y-2 text-gray text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Skylights</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Satellite dishes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Solar panels</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Chimney caps</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-dark mb-3">Other Damage</h3>
              <ul className="space-y-2 text-gray text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Fence damage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Siding damage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Window screens</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>AC units</span>
                </li>
              </ul>
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
              Insurance Claim Roofing Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              We help homeowners with roof insurance claims throughout the Greater Charlotte metro area.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-4">Charlotte Neighborhoods</h3>
              <p className="text-gray text-sm">
                Myers Park, Dilworth, South End, NoDa, Plaza Midwood, Ballantyne, University City, SouthPark, Cotswold, Elizabeth, and more
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-4">Lake Norman Area</h3>
              <p className="text-gray text-sm">
                Huntersville, Cornelius, Davidson, Mooresville, Denver, and surrounding Lake Norman communities
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-4">Greater Charlotte</h3>
              <p className="text-gray text-sm">
                Matthews, Mint Hill, Pineville, Indian Trail, Waxhaw, Fort Mill SC, Rock Hill SC, and more
              </p>
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
                Insurance Claim Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roof insurance claims in Charlotte.
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
        title="Need Help with a Roof Insurance Claim?"
        subtitle="Get a free storm damage inspection and let us handle your insurance claim from start to finish. We advocate for you and ensure you get the settlement you deserve."
      />
    </>
  );
}
