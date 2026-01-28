import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Building2,
  UtensilsCrossed,
  Thermometer,
  DollarSign,
  Clock,
  Shield,
  Wrench,
  XCircle,
  Droplets,
  Wind,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  ArticleSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { EstimateButton } from '@/components/estimate';

export const metadata: Metadata = {
  title: 'Restaurant Roof Repair vs Replacement Charlotte NC | Commercial Guide',
  description:
    'Should you repair or replace your Charlotte restaurant roof? Guide to costs, timing, health code compliance, and minimizing downtime. Free commercial estimates.',
  keywords: [
    'restaurant roof repair Charlotte NC',
    'restaurant roof replacement Charlotte',
    'commercial kitchen roofing Charlotte',
    'restaurant roofing contractor Charlotte NC',
    'flat roof restaurant Charlotte',
    'grease trap ventilation roof Charlotte',
    'commercial restaurant roofing Charlotte',
    'food service roofing Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/restaurant-roof-repair-vs-replacement-charlotte-nc`,
  },
  openGraph: {
    title: 'Restaurant Roof Repair vs Replacement | Charlotte NC Guide',
    description:
      'Expert guide for Charlotte restaurant owners on roof decisions. Health codes, costs, timing, and minimizing business disruption.',
    url: `${SITE_CONFIG.url}/restaurant-roof-repair-vs-replacement-charlotte-nc`,
    type: 'article',
  },
};

const restaurantFAQs = [
  {
    question: 'How do I know if my restaurant roof needs replacement vs repair?',
    answer:
      'Consider replacement if: the roof is 15+ years old with multiple leak points, repair costs exceed 30% of replacement cost, there\'s widespread membrane damage, or you\'ve had health department concerns about ceiling/roof conditions. Repairs make sense for isolated leaks on newer roofs, minor membrane damage, or single-point flashing failures.',
  },
  {
    question: 'Can restaurant roofing work be done without closing the restaurant?',
    answer:
      'Yes, most work can be completed while you operate. We schedule work in phases, protect HVAC and exhaust systems, and prioritize areas away from customer visibility. Interior work (if needed) is scheduled during closed hours. Only severe structural issues require full closure.',
  },
  {
    question: 'How do grease exhaust systems affect restaurant roofs?',
    answer:
      'Grease exhaust fans require special flashing and protection. Grease buildup can degrade roofing membranes over time. During any roof work, we inspect exhaust flashings, verify fire code compliance, and install grease-resistant materials around penetrations. Improper exhaust installation is a common cause of restaurant roof failures.',
  },
  {
    question: 'What roofing material is best for restaurants in Charlotte?',
    answer:
      'TPO and EPDM are most common for flat restaurant roofs. TPO offers better heat reflection (reduces AC costs), while EPDM is more affordable. Modified bitumen works well for roofs with heavy foot traffic from HVAC maintenance. White/reflective surfaces help with Charlotte\'s summer heat and can reduce cooling costs 10-30%.',
  },
  {
    question: 'Will roof work pass Mecklenburg County health inspection?',
    answer:
      'Our commercial roofing work meets all Mecklenburg County health codes. We ensure: no debris enters food prep areas, HVAC systems remain protected, ceiling integrity is maintained, and all work areas are secured. We can provide documentation for health inspectors if needed.',
  },
];

const repairVsReplaceFactors = [
  {
    factor: 'Roof Age',
    repair: 'Under 10-12 years old',
    replace: 'Over 15 years old (approaching end of life)',
  },
  {
    factor: 'Leak Pattern',
    repair: '1-2 isolated leak points',
    replace: 'Multiple leaks across different areas',
  },
  {
    factor: 'Membrane Condition',
    repair: 'Localized damage, seams intact',
    replace: 'Widespread cracking, splitting, or bubbling',
  },
  {
    factor: 'Cost Analysis',
    repair: 'Repair cost under 25% of replacement',
    replace: 'Repair costs exceeding 30%+ of replacement',
  },
  {
    factor: 'Energy Costs',
    repair: 'Insulation performing adequately',
    replace: 'High cooling bills from poor insulation/dark roof',
  },
  {
    factor: 'Health Codes',
    repair: 'No cited violations',
    replace: 'Multiple ceiling/roof-related citations',
  },
];

const restaurantChallenges = [
  {
    challenge: 'Grease Exhaust Penetrations',
    icon: Wind,
    description:
      'Kitchen exhaust fans create high-heat penetrations that require special flashing and fire-rated materials. Grease buildup degrades standard roofing.',
    solution: 'Grease-resistant flashings, proper setbacks, and regular maintenance access.',
  },
  {
    challenge: 'HVAC Concentration',
    icon: Thermometer,
    description:
      'Restaurants typically have 3-5x more HVAC per square foot than offices. Each unit creates penetrations and requires service access.',
    solution: 'Reinforced walkways, equipment curbs, and phased replacement planning.',
  },
  {
    challenge: 'Operating Hours',
    icon: Clock,
    description:
      'Most restaurants operate 12-16 hours daily with limited closure windows. Noise and dust during meal service is unacceptable.',
    solution: 'Phased work schedules, early morning starts, and dust containment systems.',
  },
  {
    challenge: 'Health Code Compliance',
    icon: Shield,
    description:
      'Any debris, water intrusion, or ceiling damage can trigger health department issues and potentially forced closure.',
    solution: 'Interior protection, sealed work areas, and documentation for inspectors.',
  },
];

const costFactors = [
  {
    type: 'Typical Restaurant Repair',
    cost: '$1,500 - $8,000',
    includes: 'Single leak repair, flashing replacement, or small membrane patches.',
  },
  {
    type: 'Full Roof Replacement',
    cost: '$8 - $15 per sq ft',
    includes: 'Complete tear-off, new membrane, insulation, flashings, and warranty.',
  },
  {
    type: 'Roof Coating/Restoration',
    cost: '$3 - $6 per sq ft',
    includes: 'Clean, repair defects, apply reflective coating. Extends life 10-15 years.',
  },
  {
    type: 'HVAC Curb Replacement',
    cost: '$800 - $2,500 each',
    includes: 'New equipment curb, flashing, and membrane tie-in during roof work.',
  },
];

const minimizeDowntimeSteps = [
  {
    step: 1,
    title: 'Pre-Work Planning',
    description:
      'We survey your roof and operations, identify quiet periods, and create a phased work schedule that minimizes disruption to your busiest hours.',
  },
  {
    step: 2,
    title: 'Interior Protection',
    description:
      'Drop cloths, sealed HVAC vents, and dust barriers protect kitchen and dining areas. We verify protection before starting each phase.',
  },
  {
    step: 3,
    title: 'Off-Hours Heavy Work',
    description:
      'Tear-off and loud work scheduled during closed hours when possible. Early morning starts (5-6 AM) complete noisy tasks before lunch rush.',
  },
  {
    step: 4,
    title: 'Daily Weather Seal',
    description:
      'Each work day ends with temporary waterproofing. Your restaurant is protected overnight and through any weather delays.',
  },
  {
    step: 5,
    title: 'Clean Work Handoff',
    description:
      'Debris cleared, protection verified, and work area secured before each shift. We coordinate with your opening manager.',
  },
];

const roofingOptions = [
  {
    type: 'TPO Membrane',
    pros: ['Highly reflective (lower AC costs)', 'Excellent seam strength', 'Chemical resistant'],
    cons: ['Higher material cost', 'Requires skilled installation'],
    best: 'Best for restaurants prioritizing energy efficiency.',
  },
  {
    type: 'EPDM Rubber',
    pros: ['Lower cost', 'Proven durability', 'Easy repairs'],
    cons: ['Dark color absorbs heat', 'Not grease-resistant'],
    best: 'Best for budget-conscious projects or shaded roofs.',
  },
  {
    type: 'Modified Bitumen',
    pros: ['Excellent durability', 'Handles foot traffic', 'Multiple layer protection'],
    cons: ['Requires torch application', 'Less reflective'],
    best: 'Best for roofs with heavy HVAC maintenance traffic.',
  },
  {
    type: 'Roof Coating',
    pros: ['No tear-off required', 'Minimal disruption', 'Reflective surface'],
    cons: ['Existing roof must be sound', 'Not for severe damage'],
    best: 'Best for extending life of aging but intact roofs.',
  },
];

const breadcrumbsSchema = [
  { name: 'Home', url: `${SITE_CONFIG.url}/` },
  { name: 'Commercial Roofing', url: `${SITE_CONFIG.url}/commercial-roofing-charlotte-nc` },
  { name: 'Restaurant Roof Guide', url: `${SITE_CONFIG.url}/restaurant-roof-repair-vs-replacement-charlotte-nc` },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Commercial Roofing', href: '/commercial-roofing-charlotte-nc' },
  { label: 'Restaurant Roof Guide' },
];

export default function RestaurantRoofRepairVsReplacementPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbsSchema} />
      <FAQSchema
        faqs={restaurantFAQs.map((faq) => ({
          question: faq.question,
          answer: faq.answer,
        }))}
      />
      <WebPageSchema
        name="Restaurant Roof Repair vs Replacement Charlotte NC"
        description="Guide for Charlotte restaurant owners deciding between roof repair and replacement. Costs, health codes, and minimizing business disruption."
        url={`${SITE_CONFIG.url}/restaurant-roof-repair-vs-replacement-charlotte-nc`}
      />
      <ArticleSchema
        post={{
          title: 'Restaurant Roof Repair vs Replacement: Charlotte NC Guide',
          description: 'Complete guide for restaurant owners on roof decisions. Health code compliance, costs, timing, and keeping your business open during work.',
          slug: 'restaurant-roof-repair-vs-replacement-charlotte-nc',
          datePublished: '2025-01-30',
          dateModified: '2025-01-30',
        }}
      />

      <section className="pt-8 pb-12 bg-gradient-to-b from-slate-900 via-slate-800 to-blue-900">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-6">
              <UtensilsCrossed className="h-4 w-4" />
              <span>Restaurant & Food Service Roofing</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Restaurant Roof Repair vs Replacement
              <span className="block text-orange-400 mt-2">Charlotte NC Guide</span>
            </h1>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
              Make the right decision for your restaurant&apos;s roof. Health code compliance,
              minimizing downtime, and protecting your investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EstimateButton
                size="lg"
                className="bg-orange-500 text-white hover:bg-orange-400 font-semibold"
              />
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-colors"
              >
                <Phone className="h-5 w-5" />
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant-Specific Challenges */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Why Restaurant Roofing is Different
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Restaurants face unique roofing challenges that general commercial roofers often overlook.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {restaurantChallenges.map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.challenge}</h3>
                    <p className="text-slate-600 text-sm mb-3">{item.description}</p>
                    <p className="text-sm">
                      <span className="font-semibold text-green-700">Our approach: </span>
                      <span className="text-slate-600">{item.solution}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair vs Replace Decision Guide */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Repair or Replace? Decision Guide
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Use these factors to determine the right approach for your restaurant.
          </p>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold">Factor</th>
                  <th className="text-left px-6 py-4 font-semibold text-green-300">
                    <CheckCircle className="h-5 w-5 inline mr-2" />
                    Repair
                  </th>
                  <th className="text-left px-6 py-4 font-semibold text-orange-300">
                    <Wrench className="h-5 w-5 inline mr-2" />
                    Replace
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {repairVsReplaceFactors.map((factor, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-semibold text-slate-900">{factor.factor}</td>
                    <td className="px-6 py-4 text-slate-600">{factor.repair}</td>
                    <td className="px-6 py-4 text-slate-600">{factor.replace}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-600 mb-4">
              Not sure which applies to your situation? We provide free inspections and honest assessments.
            </p>
            <EstimateButton
              size="lg"
              className="bg-slate-900 text-white hover:bg-slate-800"
            />
          </div>
        </div>
      </section>

      {/* Cost Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Restaurant Roofing Costs in Charlotte
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Typical costs for Charlotte area restaurants. Actual costs depend on size, condition, and access.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {costFactors.map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-2">{item.type}</h3>
                <p className="text-2xl font-bold text-orange-600 mb-3">{item.cost}</p>
                <p className="text-sm text-slate-600">{item.includes}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <DollarSign className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-blue-900 mb-2">Cost-Saving Tip</h3>
                <p className="text-blue-800">
                  Coordinate roof work with HVAC replacement when possible. Replacing HVAC curbs during
                  a re-roof is significantly cheaper than doing it later. If your HVAC units are
                  approaching end-of-life (15+ years), plan both projects together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimize Downtime */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            How We Minimize Business Disruption
          </h2>
          <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
            Your restaurant stays open. Here&apos;s how we make it work.
          </p>

          <div className="max-w-4xl mx-auto space-y-4">
            {minimizeDowntimeSteps.map((step, index) => (
              <div key={index} className="flex gap-4 items-start bg-slate-800/50 rounded-xl p-5">
                <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-slate-300 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roofing Material Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Best Roofing Materials for Restaurants
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Most Charlotte restaurants have flat or low-slope roofs. Here are your best options.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {roofingOptions.map((option, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{option.type}</h3>

                <div className="space-y-4 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-green-700 mb-1">Advantages:</p>
                    <ul className="space-y-1">
                      {option.pros.map((pro, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-red-700 mb-1">Considerations:</p>
                    <ul className="space-y-1">
                      {option.cons.map((con, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                          <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="text-sm bg-slate-50 rounded-lg p-3 text-slate-700">
                  <span className="font-semibold">Best for: </span>
                  {option.best}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/tpo-vs-epdm-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-800 font-semibold"
            >
              Read our detailed TPO vs EPDM comparison
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Health Code Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-8 w-8 text-orange-600" />
              <h2 className="text-3xl font-bold text-slate-900">
                Health Code Compliance
              </h2>
            </div>
            <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
              Roof and ceiling issues can trigger Mecklenburg County health violations. We help you stay compliant.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  Common Violations We Prevent
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    Water intrusion in food prep areas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    Ceiling damage or staining above kitchens
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    Pest entry through roof penetrations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    Debris or construction materials in food areas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    Improper exhaust system installation
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Our Compliance Measures
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    Sealed work zones with dust barriers
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    HVAC protection during all work phases
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    Documentation for health inspectors
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    Daily cleanup and debris removal
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    Fire-code compliant exhaust flashings
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {restaurantFAQs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Related Commercial Roofing
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link
              href="/commercial-roofing-charlotte-nc"
              className="group bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors"
            >
              <Building2 className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                Commercial Roofing
              </h3>
              <p className="text-slate-600 text-sm">
                Full commercial roofing services for Charlotte businesses.
              </p>
            </Link>
            <Link
              href="/tpo-roofing-charlotte-nc"
              className="group bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors"
            >
              <Shield className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                TPO Roofing
              </h3>
              <p className="text-slate-600 text-sm">
                Energy-efficient single-ply membrane for flat commercial roofs.
              </p>
            </Link>
            <Link
              href="/roof-coating-charlotte-nc"
              className="group bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors"
            >
              <Droplets className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                Roof Coating
              </h3>
              <p className="text-slate-600 text-sm">
                Extend roof life and improve energy efficiency with reflective coatings.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Get Your Free Restaurant Roof Assessment"
        subtitle="No-obligation inspections for Charlotte area restaurants. We'll tell you honestly: repair or replace."
        variant="primary"
      />
    </>
  );
}
