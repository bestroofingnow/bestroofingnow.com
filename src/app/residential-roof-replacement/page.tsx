import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  Calendar,
  Shield,
  Star,
  CheckCircle,
  AlertTriangle,
  Clock,
  FileText,
  Award,
  Home,
  DollarSign,
  MapPin,
  HelpCircle,
  Wrench,
  ArrowRight,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  ServiceSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Residential Roof Replacement Charlotte NC | Free Estimates | Best Roofing Now',
  description:
    'Professional residential roof replacement in Charlotte NC. Asphalt, metal, tile, slate & cedar options. Free estimates, financing available, 25-year warranties. Trusted by 500+ homeowners. Call now!',
  keywords: [
    'residential roof replacement near me',
    'residential roof replacement Charlotte NC',
    'home roof replacement cost Charlotte',
    'best residential roofer Charlotte NC',
    'roof replacement contractor near me',
    'roof replacement cost Charlotte NC',
    'asphalt shingle roof replacement Charlotte',
    'metal roof replacement Charlotte NC',
    'residential roofing company Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/residential-roof-replacement`,
  },
  openGraph: {
    title: 'Residential Roof Replacement Charlotte NC | Free Estimates | Best Roofing Now',
    description:
      'Professional residential roof replacement in Charlotte NC. Asphalt, metal, tile, slate & cedar options. Free estimates, financing available.',
    url: `${SITE_CONFIG.url}/residential-roof-replacement`,
    type: 'website',
    images: [
      {
        url: IMAGES.stock.heroSuburbanHomes,
        width: 1200,
        height: 630,
        alt: 'Residential roof replacement in Charlotte NC',
      },
    ],
  },
};

const replacementSigns = [
  {
    icon: AlertTriangle,
    title: 'Roof Is 20+ Years Old',
    description:
      'Most asphalt shingle roofs last 20-25 years. If your roof is approaching or past this age, replacement is more cost-effective than repeated repairs.',
  },
  {
    icon: AlertTriangle,
    title: 'Widespread Shingle Damage',
    description:
      'Curling, cracking, buckling, or missing shingles across large areas signal the roof has reached the end of its useful life.',
  },
  {
    icon: AlertTriangle,
    title: 'Granule Loss in Gutters',
    description:
      'Finding excessive granules in your gutters means shingles are deteriorating. Without granules, shingles cannot protect against UV rays or rain.',
  },
  {
    icon: AlertTriangle,
    title: 'Sagging Roof Deck',
    description:
      'A sagging roofline indicates structural damage to the decking beneath your shingles. This requires immediate replacement to prevent collapse.',
  },
  {
    icon: AlertTriangle,
    title: 'Daylight Through Roof Boards',
    description:
      'If you see light coming through your attic roof boards, moisture and weather are penetrating your roof and causing hidden damage.',
  },
  {
    icon: AlertTriangle,
    title: 'Recurring Leaks',
    description:
      'Multiple leaks or a roof leak that keeps returning after repair indicates systemic failure. A full replacement solves the root problem.',
  },
  {
    icon: AlertTriangle,
    title: 'Rising Energy Bills',
    description:
      'A failing roof allows heat to escape in winter and enter in summer. Unexplained increases in energy bills often trace back to a compromised roof.',
  },
  {
    icon: AlertTriangle,
    title: 'Moss, Mold, or Algae Growth',
    description:
      'Extensive biological growth traps moisture against shingles, accelerating decay. While cleaning helps short-term, widespread growth often means replacement time.',
  },
];

const roofingMaterials = [
  {
    name: 'Asphalt Shingles',
    costRange: '$8,000 - $15,000',
    lifespan: '20-30 years',
    pros: ['Most affordable option', 'Wide color selection', 'Easy to install and repair', 'Available everywhere'],
    cons: ['Shorter lifespan than premium materials', 'Less wind resistance than metal', 'Can lose granules over time'],
    best: 'Budget-conscious homeowners wanting reliable protection',
  },
  {
    name: 'Architectural Shingles',
    costRange: '$10,000 - $20,000',
    lifespan: '30-50 years',
    pros: ['Dimensional, upscale appearance', 'Better wind resistance (up to 130 mph)', 'Longer manufacturer warranties', 'Excellent curb appeal'],
    cons: ['Higher cost than 3-tab shingles', 'Heavier than standard asphalt', 'Some styles limited by availability'],
    best: 'Homeowners wanting the best balance of price and performance',
  },
  {
    name: 'Metal Roofing',
    costRange: '$15,000 - $30,000',
    lifespan: '50-70 years',
    pros: ['Longest lifespan of common materials', 'Energy efficient (reflects heat)', 'Fire and wind resistant', 'Low maintenance'],
    cons: ['Higher upfront cost', 'Can be noisy in heavy rain without insulation', 'Requires specialized installation'],
    best: 'Homeowners planning to stay long-term who want maximum durability',
  },
  {
    name: 'Cedar Shake',
    costRange: '$20,000 - $40,000',
    lifespan: '30-50 years',
    pros: ['Natural, rustic beauty', 'Excellent insulation value', 'Eco-friendly and biodegradable', 'Unique character that ages beautifully'],
    cons: ['Requires regular maintenance', 'Fire risk (unless treated)', 'Susceptible to rot and insects', 'Most expensive common option'],
    best: 'Homeowners who value natural aesthetics and are willing to maintain',
  },
  {
    name: 'Synthetic Slate/Tile',
    costRange: '$15,000 - $35,000',
    lifespan: '40-60 years',
    pros: ['Looks like real slate or tile at lower cost', 'Lightweight (no structural reinforcement needed)', 'Impact and fire resistant', 'Low maintenance'],
    cons: ['Higher cost than asphalt', 'Newer product with shorter track record', 'Limited contractor experience'],
    best: 'Homeowners wanting a premium look without the weight of real stone',
  },
];

const replacementProcess = [
  {
    step: 1,
    title: 'Free Inspection & Assessment',
    description:
      'Our certified inspectors evaluate your entire roof system including shingles, flashing, ventilation, decking, and gutters. We document findings with photos and provide honest recommendations.',
    icon: FileText,
  },
  {
    step: 2,
    title: 'Detailed Written Estimate',
    description:
      'You receive a transparent, line-item estimate covering materials, labor, permits, and cleanup. No hidden fees. We explain every cost and answer all your questions.',
    icon: DollarSign,
  },
  {
    step: 3,
    title: 'Material Selection',
    description:
      'Choose from top-rated brands like GAF, CertainTeed, and Owens Corning. We help you pick the right material, color, and warranty level for your home and budget.',
    icon: Home,
  },
  {
    step: 4,
    title: 'Old Roof Tear-Off',
    description:
      'We remove all existing shingles and underlayment down to the decking. We inspect the deck for rot or damage and replace any compromised sections before installing your new roof.',
    icon: Wrench,
  },
  {
    step: 5,
    title: 'Professional Installation',
    description:
      'Our experienced crews install ice and water shield, synthetic underlayment, starter strips, shingles, ridge vents, and flashing according to manufacturer specifications for full warranty coverage.',
    icon: Shield,
  },
  {
    step: 6,
    title: 'Final Inspection & Cleanup',
    description:
      'We perform a thorough final inspection, run a magnetic sweep for nails, clean your property completely, and walk you through our work. Your satisfaction is guaranteed.',
    icon: CheckCircle,
  },
];

const faqs = [
  {
    question: 'How much does a residential roof replacement cost in Charlotte NC?',
    answer:
      'The average residential roof replacement in Charlotte costs between $8,000 and $20,000 for a standard-sized home (1,500-2,500 sq ft) with asphalt or architectural shingles. Metal roofing ranges from $15,000 to $30,000, and premium materials like cedar shake or synthetic slate range from $15,000 to $40,000. Factors that affect price include roof size, pitch, accessibility, material choice, and whether structural repairs are needed. We provide free, no-obligation estimates so you know the exact cost before committing.',
  },
  {
    question: 'How long does a residential roof replacement take?',
    answer:
      'Most residential roof replacements in Charlotte take 1-3 days for a standard asphalt shingle installation. Larger homes, steeper roofs, or premium materials like metal or cedar shake may take 3-5 days. Weather delays can extend the timeline, but we plan around Charlotte\'s forecast and protect your home with tarps if needed between work days.',
  },
  {
    question: 'Do I need a permit for a roof replacement in Charlotte NC?',
    answer:
      'Yes, Mecklenburg County requires a building permit for roof replacements. Best Roofing Now handles all permitting as part of our service. The cost is typically $150-$300 and is included in our estimate. We also schedule the required final inspection to ensure your new roof meets all local building codes.',
  },
  {
    question: 'Should I repair or replace my roof?',
    answer:
      'As a general rule, if your roof is under 15 years old and damage is limited to a small area (less than 30%), repair is usually the better option. If your roof is over 20 years old, has widespread damage, or you are facing your third or fourth repair, replacement is more cost-effective long-term. We provide honest assessments and will never recommend replacement when a repair will do.',
  },
  {
    question: 'What roofing materials do you recommend for Charlotte homes?',
    answer:
      'For most Charlotte homes, we recommend architectural shingles (like GAF Timberline HDZ or CertainTeed Landmark) for the best balance of durability, wind resistance, and value. They handle Charlotte\'s heat, humidity, and storm seasons well. For homeowners wanting maximum longevity, standing seam metal roofing is an excellent choice that lasts 50+ years. We help you choose the right material based on your budget, home style, and long-term plans.',
  },
  {
    question: 'Does Best Roofing Now offer financing for roof replacement?',
    answer:
      'Yes, we offer flexible financing options to make roof replacement affordable. Options include low-interest payment plans, 12-month same-as-cash financing, and extended terms up to 60 months. We also assist with insurance claims when storm damage is involved, which can cover most or all of your replacement cost. Contact us for details on current financing programs.',
  },
  {
    question: 'What warranties come with a new roof from Best Roofing Now?',
    answer:
      'Every roof we install comes with a comprehensive warranty package. This includes the manufacturer\'s material warranty (25-50 years depending on shingle line), our 10-year workmanship warranty covering installation, and extended system warranties available through GAF and CertainTeed. As a GAF Factory-Certified Contractor and CertainTeed ShingleMaster, we can offer the strongest warranty protection available.',
  },
  {
    question: 'Why is spring the best time for roof replacement in Charlotte?',
    answer:
      'Spring is the ideal time for roof replacement in Charlotte for several reasons. Winter storms may have caused hidden damage that needs addressing before summer heat and hurricane season. Mild spring temperatures (55-85F) are perfect for shingle adhesion and sealant curing. Scheduling in spring also means your new roof is fully protected before Charlotte\'s severe storm season peaks in June-September. Plus, contractors have more availability in spring before the summer rush.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Services', url: `${SITE_CONFIG.url}/services` },
  { name: 'Residential Roof Replacement', url: `${SITE_CONFIG.url}/residential-roof-replacement` },
];

export default function ResidentialRoofReplacementPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: 'Residential Roof Replacement',
          description:
            'Professional residential roof replacement in Charlotte NC. Asphalt, metal, tile, slate & cedar options with free estimates and financing.',
          slug: 'residential-roof-replacement',
        }}
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/residential-roof-replacement`}
        pageName="Residential Roof Replacement Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.stock.heroSuburbanHomes}
            alt="Residential roof replacement in Charlotte NC"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/80 rounded-full px-4 py-2 mb-4">
              <Home className="w-4 h-4" />
              <span className="text-sm font-semibold">Trusted by 500+ Charlotte Homeowners</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Residential Roof Replacement
              <br className="hidden md:block" />
              <span className="text-blue-300">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Full-service roof replacement with free estimates & financing
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Spring is the peak season for residential roof replacement in Charlotte. After winter
              storms and before hurricane season, now is the ideal time to protect your home with a
              new roof. Best Roofing Now delivers expert installation, premium materials, and
              warranties you can count on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Free Roof Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-800"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-300" />
                Licensed &amp; Insured
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-300" />
                GAF &amp; CertainTeed Certified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Signs You Need a Roof Replacement */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              8 Signs You Need a Roof Replacement
            </h2>
            <p className="text-gray text-lg">
              Not sure if your roof needs replacing? Look for these warning signs that indicate it
              is time for a full residential roof replacement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {replacementSigns.map((sign) => (
              <div key={sign.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <sign.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-bold text-dark mb-2">{sign.title}</h3>
                <p className="text-gray text-sm">{sign.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray mb-4">
              Noticed any of these signs? Get a professional assessment before small problems become
              expensive emergencies.
            </p>
            <Button
              href="/contact"
              variant="primary"
              icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
            >
              Schedule Free Inspection
            </Button>
          </div>
        </div>
      </section>

      {/* Roofing Material Options */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Material Options &amp; Charlotte Pricing
            </h2>
            <p className="text-gray text-lg">
              Compare the most popular residential roofing materials available for Charlotte homes.
              All prices reflect typical Charlotte NC installation costs for a standard 2,000 sq ft
              roof.
            </p>
          </div>
          <div className="space-y-6">
            {roofingMaterials.map((material) => (
              <div
                key={material.name}
                className="bg-white rounded-xl p-6 md:p-8 shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-dark">{material.name}</h3>
                    <p className="text-gray text-sm mt-1">Best for: {material.best}</p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-primary/10 rounded-lg px-4 py-2 text-center">
                      <p className="text-xs text-gray font-medium">Charlotte Cost</p>
                      <p className="text-lg font-bold text-primary">{material.costRange}</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg px-4 py-2 text-center">
                      <p className="text-xs text-gray font-medium">Lifespan</p>
                      <p className="text-lg font-bold text-blue-600">{material.lifespan}</p>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Pros
                    </h4>
                    <ul className="space-y-2">
                      {material.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm text-gray">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                      Cons
                    </h4>
                    <ul className="space-y-2">
                      {material.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm text-gray">
                          <AlertTriangle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray mb-4">
              Not sure which material is right for your home? We will help you choose.
            </p>
            <Button
              href="/contact"
              variant="primary"
              icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
            >
              Get a Free Material Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Replacement Process */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our 6-Step Roof Replacement Process
              </h2>
              <p className="text-gray text-lg">
                From inspection to final cleanup, here is exactly what to expect when you choose
                Best Roofing Now for your residential roof replacement in Charlotte.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {replacementProcess.map((item) => (
                <div key={item.step} className="bg-light rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-dark">{item.title}</h3>
                  </div>
                  <p className="text-gray text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost Guide Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <DollarSign className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Charlotte Pricing Guide</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Roof Replacement Cost in Charlotte NC
              </h2>
              <p className="text-gray text-lg">
                What Charlotte homeowners actually pay for a full residential roof replacement in
                2026. Prices vary based on roof size, pitch, material, and complexity.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm mb-8">
              <h3 className="text-xl font-bold text-dark mb-6">
                Average Cost by Roof Size (Architectural Shingles)
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-light rounded-lg">
                  <p className="text-sm text-gray mb-1">Small Home (1,000-1,500 sq ft)</p>
                  <p className="text-2xl font-bold text-primary">$8,000 - $12,000</p>
                </div>
                <div className="text-center p-4 bg-light rounded-lg">
                  <p className="text-sm text-gray mb-1">Average Home (1,500-2,500 sq ft)</p>
                  <p className="text-2xl font-bold text-primary">$10,000 - $18,000</p>
                </div>
                <div className="text-center p-4 bg-light rounded-lg">
                  <p className="text-sm text-gray mb-1">Large Home (2,500-4,000 sq ft)</p>
                  <p className="text-2xl font-bold text-primary">$15,000 - $28,000</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-dark mb-4">
                Factors That Affect Your Roof Replacement Cost
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { factor: 'Roof Size & Complexity', detail: 'Larger roofs, multiple layers, dormers, and valleys increase cost.' },
                  { factor: 'Roof Pitch (Steepness)', detail: 'Steeper roofs require more safety equipment and time, adding 10-25%.' },
                  { factor: 'Material Choice', detail: 'Asphalt is most affordable; metal and premium materials cost 2-3x more.' },
                  { factor: 'Decking Repairs', detail: 'Rotted or damaged plywood decking adds $50-$100 per sheet replaced.' },
                  { factor: 'Permits & Code Requirements', detail: 'Mecklenburg County permits run $150-$300. Code upgrades may add more.' },
                  { factor: 'Tear-Off Layers', detail: 'Removing multiple layers of old shingles increases labor and disposal costs.' },
                ].map((item) => (
                  <div key={item.factor} className="flex items-start gap-3 p-3 bg-light rounded-lg">
                    <DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-dark text-sm">{item.factor}</p>
                      <p className="text-gray text-sm">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing & Insurance Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-light rounded-xl p-6 md:p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-dark mb-4">Financing Options</h2>
                <p className="text-gray mb-4">
                  A new roof is an investment in your home. We make it affordable with flexible
                  financing options designed for Charlotte homeowners.
                </p>
                <ul className="space-y-3">
                  {[
                    '12-month same-as-cash financing available',
                    'Low monthly payments up to 60 months',
                    'Quick approval process with competitive rates',
                    'No prepayment penalties',
                    'Apply online or in-person during your estimate',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-light rounded-xl p-6 md:p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-dark mb-4">Insurance Claim Help</h2>
                <p className="text-gray mb-4">
                  If your roof replacement is due to storm damage, your homeowners insurance may
                  cover most or all of the cost. We handle the entire claims process.
                </p>
                <ul className="space-y-3">
                  {[
                    'Free damage inspection and documentation',
                    'We file and manage your insurance claim',
                    'We meet with your adjuster on-site',
                    'Maximize your claim with detailed reporting',
                    'You only pay your deductible',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray">
                      <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Best Roofing Now */}
      <section className="bg-slate-800 text-white py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">
              Why Charlotte Homeowners Choose Best Roofing Now
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Star, title: '5.0-Star Rated', desc: `${SITE_CONFIG.googleReviewCount}+ Google reviews with a perfect rating.` },
                { icon: Award, title: 'Factory Certified', desc: 'GAF & CertainTeed certified for the strongest warranties.' },
                { icon: Shield, title: 'Licensed & Insured', desc: 'Fully licensed, bonded, and insured in North Carolina.' },
                { icon: MapPin, title: 'Locally Owned', desc: 'Family-owned, veteran-operated Charlotte roofing company.' },
                { icon: Clock, title: 'Fast Turnaround', desc: 'Most replacements completed in 1-3 days.' },
                { icon: DollarSign, title: 'Financing Available', desc: 'Affordable payment plans to fit your budget.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-800"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Free Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-slate-800 hover:bg-white/90"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Information */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Industry-Leading Warranty Protection
              </h2>
              <p className="text-gray text-lg">
                Your new roof is backed by comprehensive warranties from both the manufacturer and
                Best Roofing Now. As certified contractors, we offer warranty levels most roofers
                cannot match.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-light rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">Manufacturer Warranty</h3>
                <p className="text-2xl font-bold text-primary mb-2">25-50 Years</p>
                <p className="text-gray text-sm">
                  Material defect coverage from GAF, CertainTeed, or Owens Corning. Duration depends
                  on the shingle line selected.
                </p>
              </div>
              <div className="bg-light rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">Workmanship Warranty</h3>
                <p className="text-2xl font-bold text-primary mb-2">10 Years</p>
                <p className="text-gray text-sm">
                  Our installation workmanship guarantee covers labor-related issues for a full
                  decade after your roof replacement.
                </p>
              </div>
              <div className="bg-light rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">System Warranty</h3>
                <p className="text-2xl font-bold text-primary mb-2">Up to 50 Years</p>
                <p className="text-gray text-sm">
                  Available through GAF and CertainTeed system warranties when all components are
                  from the same manufacturer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <GeoProjectGalleryStrip
        pageType="service"
        city="Charlotte"
        slug="residential-roof-replacement"
        count={4}
        title="Residential Roof Replacements"
        subtitle="Browse completed residential roof replacement projects in Charlotte."
        schemaPageUrl={`${SITE_CONFIG.url}/residential-roof-replacement`}
      />

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
                Residential Roof Replacement FAQs
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6">
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
            Related Roofing Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/services/residential-roofing"
              className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-primary mb-2">Residential Roofing</h3>
              <p className="text-gray text-sm">
                Complete residential roofing services including repair, maintenance, and
                installation.
              </p>
            </Link>
            <Link
              href="/roof-inspection-charlotte-nc"
              className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-primary mb-2">Roof Inspections</h3>
              <p className="text-gray text-sm">
                Professional roof inspections to assess condition and plan for replacement.
              </p>
            </Link>
            <Link
              href="/hail-damage-roof-repair"
              className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-primary mb-2">Storm Damage Repair</h3>
              <p className="text-gray text-sm">
                Hail and storm damage repair with full insurance claim assistance.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready for a New Roof?"
        subtitle="Get a free, no-obligation estimate for your residential roof replacement today."
      />
    </>
  );
}
