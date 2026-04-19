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
  Clock,
  MapPin,
  AlertTriangle,
  CloudLightning,
  FileText,
  Camera,
  Wrench,
  PhoneCall,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';
import { LKNNeighborhoodGrid } from '@/components/sections/LKNNeighborhoodGrid';
import { LKNHowToBundle } from '@/components/seo/LKNHowToSchemas';
import { LKNExpertiseSchema } from '@/components/seo/LKNExpertiseSchema';
import { LKNFounderSchema } from '@/components/seo/LKNFounderSchema';
export const metadata: Metadata = {
  title: 'Lake Norman Storm Damage Roof Guide',
  description:
    'Lake Norman storm damage roof guide. Hail, wind damage, insurance claims, and emergency repairs for LKN homeowners. BBB A+ rated. Call (704) 605-6047.',
  keywords: [
    'lake norman storm damage',
    'hail damage lake norman',
    'storm damage roof lake norman nc',
    'wind damage roof lake norman',
    'lake norman roof insurance claim',
    'emergency roof repair lake norman',
    'storm damage roofer mooresville nc',
    'hail damage cornelius nc',
    'roof storm damage davidson nc',
    'lake norman emergency roofer',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/lake-norman-storm-damage-guide`,
  },
  openGraph: {
    title: 'Lake Norman Storm Damage Roof Guide | What to Do After a Storm',
    description:
      'Complete guide to storm damage recovery for Lake Norman homeowners. Hail damage, wind damage, insurance claims & emergency repairs across all LKN communities.',
    url: `${SITE_CONFIG.url}/lake-norman-storm-damage-guide`,
    type: 'website',
    images: [
      {
        url: IMAGES.houses.modern1,
        width: 1200,
        height: 630,
        alt: 'Lake Norman storm damage roof guide - emergency repairs and insurance claims',
      },
    ],
  },
};

// Lake Norman storm patterns
const stormPatterns = [
  {
    icon: CloudLightning,
    title: 'Lake-Effect Microbursts',
    description:
      'Lake Norman\'s 32,000-acre surface creates localized microbursts that can produce straight-line winds exceeding 80 MPH. These intense, short-duration events cause concentrated damage in narrow corridors, often affecting waterfront neighborhoods disproportionately.',
  },
  {
    icon: AlertTriangle,
    title: 'Hail Corridors',
    description:
      'The Charlotte metro area, including Lake Norman, sits in a moderate hail zone with an average of 3-5 significant hail events per year. The I-77 corridor from Huntersville through Mooresville is particularly prone to damaging hail from spring and summer supercells.',
  },
  {
    icon: CloudLightning,
    title: 'Tropical Remnants',
    description:
      'Remnants of tropical systems regularly bring sustained 50-70 MPH winds and 6+ inches of rain to Lake Norman. The 2024 Hurricane Helene remnants caused widespread roof damage across Cornelius, Davidson, and Mooresville, with hundreds of insurance claims filed.',
  },
  {
    icon: AlertTriangle,
    title: 'Winter Ice Storms',
    description:
      'Lake Norman\'s proximity to the mountains means occasional ice storms that add hundreds of pounds of weight to roofs. Combined with falling tree limbs, ice events cause puncture damage, gutter destruction, and structural stress on older roof systems.',
  },
];

// Step-by-step after a storm
const afterStormSteps = [
  {
    step: 1,
    icon: Shield,
    title: 'Ensure Safety First',
    description:
      'Stay away from downed power lines and do not walk on a damaged roof. If you see active leaking or structural damage, evacuate the area beneath and call emergency services if needed.',
    timing: 'Immediately',
  },
  {
    step: 2,
    icon: Camera,
    title: 'Document Everything',
    description:
      'Photograph all visible damage from the ground, including your roof, gutters, siding, windows, and landscape. Take wide shots and close-ups. Date-stamp photos and note the storm date and type.',
    timing: 'Within 24 hours',
  },
  {
    step: 3,
    icon: PhoneCall,
    title: 'Call Best Roofing Now',
    description:
      'Contact us at (704) 605-6047 for emergency tarping and a free storm damage inspection. We provide same-day emergency response for active leaks and complete damage assessments within 24 hours.',
    timing: 'Within 24 hours',
  },
  {
    step: 4,
    icon: FileText,
    title: 'File Your Insurance Claim',
    description:
      'Contact your insurance company to file a claim. We can be present for the adjuster inspection and provide our own detailed damage report with photos, measurements, and material specifications.',
    timing: 'Within 48 hours',
  },
  {
    step: 5,
    icon: Wrench,
    title: 'Temporary Repairs',
    description:
      'We perform emergency tarping and temporary repairs to prevent further water intrusion while your claim is processed. This protects your home and demonstrates mitigation to your insurer.',
    timing: 'Within 48 hours',
  },
  {
    step: 6,
    icon: CheckCircle,
    title: 'Full Restoration',
    description:
      'Once your claim is approved, we complete the full roof restoration using manufacturer-specified materials and installation methods. We work directly with your insurance company on any supplements needed.',
    timing: '2-4 weeks',
  },
];

// Lake Norman city storm damage pages
const stormDamageCities = [
  { name: 'Mooresville', slug: 'storm-damage-roof-repair-mooresville-nc', note: 'Iredell County storm response' },
  { name: 'Cornelius', slug: 'roofing-cornelius-nc', note: 'Peninsula & Jetton area storm experts' },
  { name: 'Davidson', slug: 'roofing-davidson-nc', note: 'Historic home storm restoration' },
  { name: 'Huntersville', slug: 'roofing-huntersville-nc', note: 'I-77 hail corridor response' },
  { name: 'Denver', slug: 'roofing-denver-nc', note: 'Western shore wind damage' },
  { name: 'Sherrills Ford', slug: 'roofing-sherrills-ford-nc', note: 'South shore storm damage' },
];

// Insurance claim tips
const insuranceTips = [
  {
    title: 'File Promptly',
    description: 'NC law gives you 3 years to file, but filing within 48-72 hours yields the best outcomes. Delayed claims face more scrutiny.',
  },
  {
    title: 'Never Sign Over Your Claim',
    description: 'We never ask you to sign over your insurance benefits. You maintain full control of your claim and choose when to proceed.',
  },
  {
    title: 'Document Pre-Storm Condition',
    description: 'If you have recent inspection reports or photos showing your roof before the storm, share them with your adjuster. This strengthens your claim.',
  },
  {
    title: 'Request a Re-Inspection',
    description: 'If your claim is initially denied or underpaid, you have the right to request a re-inspection. We attend every adjuster meeting on your behalf.',
  },
  {
    title: 'Understand Your Deductible',
    description: 'Most Lake Norman homeowner policies have a 1-2% hail/wind deductible. On a $500K home, that is $5K-$10K. We help you understand your out-of-pocket costs upfront.',
  },
  {
    title: 'Get a Detailed Scope',
    description: 'Our inspection report includes line-item damage assessment using Xactimate software, the same tool your insurance company uses, ensuring nothing is missed.',
  },
];

// FAQs
const stormDamageFAQs = [
  {
    question: 'How quickly can you respond to storm damage in Lake Norman?',
    answer:
      'Best Roofing Now provides 24/7 emergency storm damage response for all Lake Norman communities. We typically arrive within 2-4 hours for emergency tarping and perform full damage inspections within 24 hours. As local Lake Norman roofers, we are positioned to respond faster than Charlotte-based companies.',
  },
  {
    question: 'How do I know if my Lake Norman roof has storm damage?',
    answer:
      'Common signs of storm damage include missing or lifted shingles, granule accumulation in gutters, dents in metal flashing or vents, cracked or broken shingles, water stains on interior ceilings, and damaged siding or gutters. However, many types of hail damage are only visible upon close roof inspection. We offer free storm damage inspections for all Lake Norman homeowners.',
  },
  {
    question: 'Will my insurance cover storm damage to my Lake Norman roof?',
    answer:
      'Most homeowner insurance policies cover storm damage including hail, wind, and fallen trees. Coverage depends on your specific policy, deductible, and the age/condition of your roof. We work with all major insurance carriers in NC and help document damage to maximize your claim approval. Our success rate on Lake Norman storm damage claims exceeds 95%.',
  },
  {
    question: 'What is the difference between repairable and replaceable storm damage?',
    answer:
      'Minor damage such as a few missing shingles from wind can often be repaired. However, widespread hail damage, significant wind damage affecting 30%+ of the roof surface, or structural damage from fallen trees typically requires full replacement. Insurance adjusters use a threshold of damage to determine repair vs replacement. We provide honest assessments and never recommend unnecessary replacement.',
  },
  {
    question: 'Why does Lake Norman get more storm damage than inland areas?',
    answer:
      'Lake Norman\'s 32,000-acre water surface creates localized weather effects including microbursts, stronger wind gusts, and lake-effect precipitation. Waterfront homes face 20-40% higher wind speeds. The I-77 corridor from Huntersville to Mooresville is also a known hail corridor. These factors combine to produce more frequent and severe storm damage than many inland Charlotte suburbs.',
  },
  {
    question: 'Should I get a storm damage inspection even if my roof looks fine?',
    answer:
      'Absolutely. Hail damage is often invisible from the ground. Impact marks on shingles, cracked fiberglass mats, and compromised sealant strips only appear upon close inspection. Undetected storm damage leads to premature failure and leaks months later. Our free inspections have identified damage on roofs that homeowners believed were unaffected in over 60% of post-storm inspections.',
  },
  {
    question: 'How long do I have to file an insurance claim for storm damage in NC?',
    answer:
      'North Carolina gives homeowners up to 3 years to file a property damage insurance claim. However, we strongly recommend filing within 48-72 hours of the storm. Prompt filing results in faster processing, less scrutiny, and higher approval rates. Delayed claims often face denials due to difficulty proving the damage was storm-related.',
  },
  {
    question: 'Do you handle the entire insurance claim process?',
    answer:
      'We assist with every step of the insurance claim process. This includes detailed damage documentation with Xactimate-compatible reports, attending adjuster inspections, providing supplemental documentation when claims are underpaid, and coordinating directly with your adjuster on material and scope approvals. You maintain full control of your claim while we handle the technical details.',
  },
];

export default function LakeNormanStormDamageGuidePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Lake Norman Roofing', url: `${SITE_CONFIG.url}/roofing-lake-norman-nc` },
          { name: 'Storm Damage Guide', url: `${SITE_CONFIG.url}/lake-norman-storm-damage-guide` },
        ]}
      />
      <LocalBusinessSchema includeRating={true} />
      <FAQSchema faqs={stormDamageFAQs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/lake-norman-storm-damage-guide`}
        pageName="Lake Norman Storm Damage Roof Guide"
        city="Lake Norman"
      />
      <VoiceSearchActionSchema />
      <LKNHowToBundle pageUrl={`${SITE_CONFIG.url}/lake-norman-storm-damage-guide`} city={"Lake Norman"} />
      <LKNExpertiseSchema pageUrl={`${SITE_CONFIG.url}/lake-norman-storm-damage-guide`} />
      <LKNFounderSchema pageUrl={`${SITE_CONFIG.url}/lake-norman-storm-damage-guide`} />

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.hero.hero1}
            alt="Lake Norman storm damage roof repair and insurance claim assistance"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <CloudLightning className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">Storm Damage Experts</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Lake Norman Storm Damage<br />
              <span className="text-accent">Roof Recovery Guide</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Your complete guide to storm damage recovery on Lake Norman. From emergency
              tarping to insurance claims, we handle the entire process so you can focus
              on your family.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Clock className="w-5 h-5 text-accent" />
                <span>24/7 Emergency Response</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Shield className="w-5 h-5 text-accent" />
                <span>95%+ Claim Approval</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span>{SITE_CONFIG.googleRating} Google Rating</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href={`tel:${SITE_CONFIG.phone}`} variant="primary" size="lg">
                <Phone className="w-5 h-5" />
                Emergency: (704) 605-6047
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Calendar className="w-5 h-5" />
                Free Storm Inspection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lake Norman Storm Patterns */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Lake Norman Storm Patterns
            </h2>
            <p className="text-gray-600 text-lg">
              Lake Norman&apos;s unique geography creates weather patterns that produce more
              frequent and severe storm damage than many inland areas of the Charlotte metro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {stormPatterns.map((pattern) => (
              <div key={pattern.title} className="bg-light rounded-xl p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <pattern.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{pattern.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pattern.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step by Step After a Storm */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What to Do After a Storm Hits Lake Norman
            </h2>
            <p className="text-gray-600 text-lg">
              Follow these steps to protect your home, maximize your insurance claim,
              and get your Lake Norman roof restored quickly.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {afterStormSteps.map((step) => (
              <div key={step.step} className="bg-white rounded-xl p-6 shadow-sm flex gap-6 items-start">
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-bold">{step.step}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-primary">{step.title}</h3>
                    <span className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                      {step.timing}
                    </span>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Claim Process */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Insurance Claim Tips for Lake Norman Homeowners
              </h2>
              <p className="text-gray-600 mb-8">
                Navigating insurance claims after storm damage can be overwhelming. Our team has helped
                hundreds of Lake Norman homeowners successfully process their claims with a 95%+ approval rate.
              </p>
              <div className="space-y-4">
                {insuranceTips.map((tip) => (
                  <div key={tip.title} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-dark mb-1">{tip.title}</h3>
                      <p className="text-gray-600">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.houses.house1}
                alt="Lake Norman roof storm damage inspection and insurance claim support"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">95%+</div>
                <div className="text-sm text-white/80">Claim Approval Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Repair vs Replace */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Repair vs. Replace: Making the Right Decision
            </h2>
            <p className="text-gray-600 text-lg">
              Not every storm-damaged roof needs full replacement. Here is how to determine
              the right approach for your Lake Norman home.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <Wrench className="w-7 h-7 text-accent" />
                When Repair Is Right
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Fewer than 10 missing or damaged shingles</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Damage isolated to one roof slope or area</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Roof is less than 10 years old with matching materials available</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">No underlying deck damage or water intrusion</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Minor flashing or vent damage only</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <AlertTriangle className="w-7 h-7 text-red-500" />
                When Replacement Is Needed
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Hail damage affecting 30%+ of the roof area</span>
                </li>
                <li className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Widespread wind damage across multiple slopes</span>
                </li>
                <li className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Roof is 15+ years old with existing wear and prior repairs</span>
                </li>
                <li className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Structural damage from fallen trees or branches</span>
                </li>
                <li className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Active leaking at multiple points or deck water damage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Storm Damage by City */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Storm Damage Response Across Lake Norman
            </h2>
            <p className="text-gray-600 text-lg">
              We provide emergency storm damage response to every Lake Norman community
              with local crews positioned for fast arrival.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stormDamageCities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="group bg-light rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {city.name}
                  </h3>
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <p className="text-gray-600 text-sm">{city.note}</p>
                <span className="inline-flex items-center gap-1 text-primary font-medium text-sm mt-3 group-hover:text-accent transition-colors">
                  Storm damage services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">Storm Damage FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Common questions from Lake Norman homeowners about storm damage,
              insurance claims, and the restoration process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {stormDamageFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-primary mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            More Lake Norman Roofing Resources
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/roofing-lake-norman-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Lake Norman Roofing</h3>
              <p className="text-sm text-gray-600">Complete LKN roofing hub</p>
            </Link>
            <Link href="/insurance-claim-roofing-lake-norman-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Insurance Claims LKN</h3>
              <p className="text-sm text-gray-600">Full claim process help</p>
            </Link>
            <Link href="/storm-damage-roof-repair-mooresville-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Storm Damage Mooresville</h3>
              <p className="text-sm text-gray-600">Iredell County repairs</p>
            </Link>
            <Link href="/lake-norman-waterfront-roofing" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Waterfront Roofing</h3>
              <p className="text-sm text-gray-600">Wind-resistant lakefront</p>
            </Link>
            <Link href="/roofing-cornelius-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Cornelius NC</h3>
              <p className="text-sm text-gray-600">Peninsula storm recovery</p>
            </Link>
            <Link href="/roofing-davidson-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Davidson NC</h3>
              <p className="text-sm text-gray-600">Historic home restoration</p>
            </Link>
            <Link href="/roofing-huntersville-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Huntersville NC</h3>
              <p className="text-sm text-gray-600">I-77 corridor response</p>
            </Link>
            <Link href="/roofing-mooresville-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Mooresville NC</h3>
              <p className="text-sm text-gray-600">Residential &amp; commercial</p>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="location"
        city="Mooresville"
        slug="lake-norman-storm-damage-guide"
        count={4}
        title="Recent Storm Damage Repairs in Lake Norman"
        subtitle="Browse completed storm damage restoration projects from the Lake Norman area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/lake-norman-storm-damage-guide`}
      />

      <CityGeoSection
        city="Lake Norman"
        state="NC"
        citySlug="lake-norman"
        service="Storm Damage Roof Repair"
      />

      {/* Lake Norman Guide Cross-Link */}
      <section className="py-8 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray mb-4">Want to learn everything about roofing on Lake Norman?</p>
            <Link href="/lake-norman-roofing-guide" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-lg">
              Read The Complete Lake Norman Roofing Guide (2026) <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <LKNNeighborhoodGrid currentSlug="lake-norman-storm-damage-guide" />
      <CTASection
        title="Storm Damage? We're Here 24/7."
        subtitle="Call Lake Norman's trusted storm damage experts for emergency tarping, free inspections, and full insurance claim support. We serve every LKN community."
      />
    </>
  );
}
