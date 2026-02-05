import { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen,
  Phone,
  FileText,
  Shield,
  MapPin,
  Home,
  AlertTriangle,
  DollarSign,
  CloudRain,
  Sun,
  Wind,
  Thermometer,
  CheckCircle,
  Building2,
  Scale,
  Clock,
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Complete NC Roofing Guide | Building Codes, Permits & Requirements | Charlotte & Lake Norman',
  description: 'Comprehensive guide to roofing in North Carolina. Learn about NC building codes, permit requirements, HOA rules, insurance claims, and best materials for Charlotte and Lake Norman areas. Expert local knowledge.',
  keywords: [
    'NC roofing codes',
    'North Carolina building codes roofing',
    'Charlotte roofing permits',
    'Mecklenburg County roofing requirements',
    'Lake Norman roofing',
    'NC roofing regulations',
    'roofing permit Charlotte NC',
    'HOA roofing requirements NC',
    'NC roof replacement guide',
    'Charlotte roofing guide',
    'Huntersville roofing permits',
    'Cornelius roofing HOA',
    'Davidson roofing requirements',
  ],
  openGraph: {
    title: 'Complete NC Roofing Guide | Building Codes, Permits & Requirements',
    description: 'Everything you need to know about roofing in North Carolina - codes, permits, HOA rules, and best practices for Charlotte and Lake Norman.',
    url: `${SITE_CONFIG.url}/nc-roofing-guide`,
    type: 'article',
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/nc-roofing-guide`,
  },
};

// FAQ data for schema markup and display
const ncRoofingFAQs = [
  {
    question: 'Do I need a permit to replace my roof in Charlotte, NC?',
    answer: 'Yes, in Charlotte and Mecklenburg County, a building permit is required for roof replacements. The permit ensures work meets NC Building Code requirements. Best Roofing Now handles all permit applications as part of our service - we pull the permit, schedule inspections, and ensure full compliance.',
  },
  {
    question: 'What building codes apply to roofing in North Carolina?',
    answer: 'North Carolina follows the International Residential Code (IRC) with state amendments. Key requirements include: wind resistance ratings per R905.2.4.1 (especially in coastal areas), minimum roof slope requirements (4:12 for asphalt shingles per R905.2.2), proper underlayment, and ice dam protection in designated cold areas. Charlotte falls under the standard NC Building Code with specific wind uplift requirements.',
  },
  {
    question: 'How long does it take to get a roofing permit in Charlotte?',
    answer: 'Standard roofing permit applications in Charlotte/Mecklenburg County typically take 1-3 business days for approval. Express permits for straightforward re-roofing projects may be issued same-day. Best Roofing Now has established relationships with local permitting offices to expedite the process.',
  },
  {
    question: 'Do I need HOA approval for a new roof in Lake Norman communities?',
    answer: 'Most Lake Norman communities (Huntersville, Cornelius, Davidson, Mooresville) have HOA requirements for roofing. You typically need to submit an Architectural Review Request (ARR) with proposed shingle color and material specifications. Approval times vary from 1-4 weeks. We help navigate HOA requirements and provide sample boards when needed.',
  },
  {
    question: 'What roofing materials work best in the Charlotte NC climate?',
    answer: 'For Charlotte\'s hot, humid summers and occasional severe storms, we recommend: architectural asphalt shingles (30-50 year lifespan, excellent value), impact-resistant shingles (Class 4 rating for hail protection), metal roofing (50+ years, energy efficient), or synthetic slate for premium applications. All materials should have proper UV resistance and ventilation for NC summers.',
  },
  {
    question: 'How much does a roof replacement cost in Charlotte, NC?',
    answer: 'The average roof replacement in Charlotte costs $8,000-$15,000 for standard architectural shingles on a typical 2,000 sq ft home. Factors affecting cost include: roof size and pitch, material selection, removal of old layers, any decking repairs, and permit fees. Premium materials like metal or slate range from $15,000-$40,000+.',
  },
  {
    question: 'Does homeowner insurance cover roof replacement in NC?',
    answer: 'NC homeowner insurance typically covers roof damage from covered perils (hail, wind, fallen trees) minus your deductible. However, insurance does not cover normal wear and tear or roofs past their expected lifespan. Best Roofing Now works directly with insurance adjusters and provides detailed documentation to support your claim.',
  },
  {
    question: 'What is the wind resistance requirement for roofs in NC?',
    answer: 'North Carolina requires roofing materials to meet wind resistance standards based on location. In the Charlotte/Lake Norman area (Exposure Category B), shingles must be rated for wind speeds of 110-130 mph. Coastal areas require higher ratings. Proper installation with enhanced nailing patterns is essential for warranty coverage and code compliance.',
  },
  {
    question: 'How often should I replace my roof in North Carolina?',
    answer: 'In North Carolina\'s climate, expect these lifespans: 3-tab asphalt shingles (15-20 years), architectural shingles (25-35 years), metal roofing (40-70 years), and slate/tile (75-100+ years). Charlotte\'s hot summers and occasional severe storms can reduce lifespan. Annual inspections help identify issues before they require full replacement.',
  },
  {
    question: 'What is required for a roofing contractor license in NC?',
    answer: 'North Carolina requires roofing contractors to be licensed by the NC Licensing Board for General Contractors for projects over $30,000. Contractors must carry general liability insurance and workers compensation. Always verify your roofer\'s license at nclbgc.org. Best Roofing Now is fully licensed (#12345), insured, and manufacturer-certified.',
  },
];

// Schema markup component for FAQs
function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ncRoofingFAQs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Article schema for the knowledge base
function ArticleSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Complete North Carolina Roofing Guide: Building Codes, Permits & Requirements',
    description: 'Comprehensive guide covering NC roofing codes, Charlotte permit requirements, Lake Norman HOA rules, and best practices for roof replacement in North Carolina.',
    image: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/12/Untitled-design-53.png',
    author: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/images/logo.png`,
      },
    },
    datePublished: '2026-01-24',
    dateModified: '2026-01-24',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}/nc-roofing-guide`,
    },
    about: [
      { '@type': 'Thing', name: 'Roofing' },
      { '@type': 'Thing', name: 'Building Codes' },
      { '@type': 'Thing', name: 'North Carolina' },
    ],
    mentions: [
      { '@type': 'City', name: 'Charlotte', containedInPlace: { '@type': 'State', name: 'North Carolina' } },
      { '@type': 'Place', name: 'Lake Norman' },
      { '@type': 'City', name: 'Huntersville' },
      { '@type': 'City', name: 'Cornelius' },
      { '@type': 'City', name: 'Davidson' },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function NCRoofingGuidePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'NC Roofing Guide', url: `${SITE_CONFIG.url}/nc-roofing-guide` },
        ]}
      />
      <FAQSchema />
      <ArticleSchema />

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[{ label: 'NC Roofing Guide' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-accent" />
              <span className="text-accent font-semibold">Complete Knowledge Base</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              North Carolina Roofing Guide
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Everything you need to know about roofing in North Carolina — from building codes
              and permit requirements to HOA rules and best materials for Charlotte and Lake Norman.
            </p>
            <p className="text-lg text-white/80 mb-8">
              This comprehensive guide is based on current NC building codes, local ordinances,
              and our experience completing 500+ roofing projects across the Charlotte metro area.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-accent hover:bg-accent-dark text-white"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Expert Consultation
              </a>
              <Link
                href="/contact"
                className="btn bg-white text-primary hover:bg-light"
              >
                Free Roof Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary mb-6">Quick Navigation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '#building-codes', icon: FileText, label: 'NC Building Codes' },
              { href: '#permits', icon: Scale, label: 'Permit Requirements' },
              { href: '#charlotte-area', icon: MapPin, label: 'Charlotte Area' },
              { href: '#lake-norman', icon: Home, label: 'Lake Norman & HOAs' },
              { href: '#climate', icon: CloudRain, label: 'Climate Considerations' },
              { href: '#materials', icon: Shield, label: 'Best Materials' },
              { href: '#costs', icon: DollarSign, label: 'Cost Guide' },
              { href: '#faqs', icon: HelpCircle, label: 'FAQs' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition group"
              >
                <item.icon className="w-5 h-5 text-primary group-hover:text-accent transition" />
                <span className="font-medium text-dark group-hover:text-primary transition">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* NC Building Codes Section */}
      <section id="building-codes" className="section scroll-mt-20">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-primary">
                North Carolina Building Codes for Roofing
              </h2>
            </div>

            <p className="text-lg text-gray mb-8">
              North Carolina adopts the International Residential Code (IRC) with state-specific
              amendments. Understanding these codes ensures your roof replacement is safe, legal,
              and properly warranted.
            </p>

            <div className="space-y-8">
              {/* Code Overview */}
              <div className="card">
                <h3 className="text-xl font-bold text-primary mb-4">
                  NC Residential Code Overview (2024)
                </h3>
                <p className="text-gray mb-4">
                  The North Carolina State Building Code is based on the 2018 International Residential
                  Code with NC amendments. Key roofing sections include:
                </p>
                <ul className="space-y-3">
                  {[
                    { code: 'R905.2', desc: 'Asphalt shingle requirements including material standards, fastening, and underlayment' },
                    { code: 'R905.2.2', desc: 'Slope requirements — minimum 2:12 with double underlayment, 4:12 for standard installation' },
                    { code: 'R905.2.4.1', desc: 'Wind resistance — shingles must meet manufacturer specifications for the design wind speed' },
                    { code: 'R905.2.7', desc: 'Ice dam protection required in areas with 25°F or less average January temperature' },
                    { code: 'R906', desc: 'Roof deck and sheathing requirements for structural integrity' },
                    { code: 'R903.4', desc: 'Flashing requirements at roof penetrations, valleys, and wall intersections' },
                  ].map((item) => (
                    <li key={item.code} className="flex gap-3">
                      <span className="font-mono text-sm bg-primary/10 text-primary px-2 py-1 rounded whitespace-nowrap">
                        {item.code}
                      </span>
                      <span className="text-gray">{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Wind Resistance */}
              <div className="card border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <Wind className="w-8 h-8 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Wind Resistance Requirements
                    </h3>
                    <p className="text-gray mb-4">
                      North Carolina&apos;s wind requirements vary by location. Charlotte and the
                      Lake Norman area fall under <strong>Exposure Category B</strong> with basic
                      wind speeds of <strong>115 mph</strong> for most residential structures.
                    </p>
                    <div className="bg-light rounded-lg p-4">
                      <h4 className="font-semibold text-dark mb-2">Required for Code Compliance:</h4>
                      <ul className="space-y-2 text-gray">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Shingles rated for 110+ mph wind speeds</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Enhanced nailing patterns (6 nails per shingle in high-wind zones)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Starter strips and hip/ridge caps rated for equivalent wind speed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Proper sealing of all roof penetrations</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Underlayment Requirements */}
              <div className="card">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Underlayment Requirements
                </h3>
                <p className="text-gray mb-4">
                  NC code requires specific underlayment based on roof slope:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-light rounded-lg p-4">
                    <h4 className="font-semibold text-dark mb-2">Slope 4:12 or Greater</h4>
                    <ul className="text-gray text-sm space-y-1">
                      <li>• Single layer of ASTM D226 Type I or II felt</li>
                      <li>• Or single layer of self-adhering polymer modified bitumen</li>
                      <li>• Minimum 2&quot; overlap at horizontal joints</li>
                      <li>• Minimum 4&quot; overlap at vertical joints</li>
                    </ul>
                  </div>
                  <div className="bg-light rounded-lg p-4">
                    <h4 className="font-semibold text-dark mb-2">Slope 2:12 to 4:12</h4>
                    <ul className="text-gray text-sm space-y-1">
                      <li>• Double layer underlayment required</li>
                      <li>• 19-inch exposure between layers</li>
                      <li>• Self-adhering membrane recommended</li>
                      <li>• Enhanced flashing at all penetrations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Permit Requirements Section */}
      <section id="permits" className="section bg-light scroll-mt-20">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-primary">
                Roofing Permit Requirements
              </h2>
            </div>

            <p className="text-lg text-gray mb-8">
              A building permit is required for most roofing work in North Carolina. The permit
              process ensures your new roof meets code requirements and protects your investment.
            </p>

            <div className="space-y-8">
              {/* When Permits Required */}
              <div className="card">
                <h3 className="text-xl font-bold text-primary mb-4">
                  When is a Roofing Permit Required?
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      Permit Required
                    </h4>
                    <ul className="space-y-2 text-gray">
                      <li>• Complete roof replacement (re-roofing)</li>
                      <li>• Structural repairs (decking, rafters)</li>
                      <li>• Adding or modifying roof penetrations</li>
                      <li>• Changing roofing materials significantly</li>
                      <li>• Work over $15,000 in value</li>
                      <li>• Adding roof structures (dormers, skylights)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      Permit May Not Be Required
                    </h4>
                    <ul className="space-y-2 text-gray">
                      <li>• Minor repairs (less than 100 sq ft)</li>
                      <li>• Replacing individual shingles</li>
                      <li>• Repairing flashing</li>
                      <li>• Emergency temporary repairs</li>
                      <li>• Gutter replacement only</li>
                    </ul>
                    <p className="text-sm text-gray mt-3 italic">
                      *Always check with your local building department
                    </p>
                  </div>
                </div>
              </div>

              {/* Permit Process */}
              <div className="card border-l-4 border-primary">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Charlotte/Mecklenburg Permit Process
                </h3>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Application Submission', desc: 'Submit permit application with property address, scope of work, and contractor information. Online through Meck County permits portal.' },
                    { step: '2', title: 'Review & Approval', desc: 'Standard review takes 1-3 business days. Express permits for simple re-roofs may be same-day.' },
                    { step: '3', title: 'Permit Issuance', desc: 'Pay permit fees (typically $75-$250 based on project value). Permit posted at job site.' },
                    { step: '4', title: 'Work Performed', desc: 'Complete roofing work per approved scope and NC building code requirements.' },
                    { step: '5', title: 'Final Inspection', desc: 'Schedule inspection through county. Inspector verifies code compliance. Approval required to close permit.' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark">{item.title}</h4>
                        <p className="text-gray text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Permit Fees */}
              <div className="card">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Typical Permit Fees by Jurisdiction
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b">
                        <th className="pb-3 text-dark font-semibold">Jurisdiction</th>
                        <th className="pb-3 text-dark font-semibold">Base Fee</th>
                        <th className="pb-3 text-dark font-semibold">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray">
                      <tr className="border-b">
                        <td className="py-3">Charlotte/Mecklenburg</td>
                        <td className="py-3">$75 - $250</td>
                        <td className="py-3">Based on project value</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Huntersville</td>
                        <td className="py-3">$100 - $200</td>
                        <td className="py-3">Town issues permits separately</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Cornelius</td>
                        <td className="py-3">$85 - $175</td>
                        <td className="py-3">Express permits available</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Davidson</td>
                        <td className="py-3">$100 - $200</td>
                        <td className="py-3">Historic district may require additional review</td>
                      </tr>
                      <tr>
                        <td className="py-3">Mooresville</td>
                        <td className="py-3">$75 - $200</td>
                        <td className="py-3">Iredell County jurisdiction</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* We Handle Permits */}
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      We Handle All Permits
                    </h3>
                    <p className="text-gray mb-4">
                      Best Roofing Now manages the entire permit process as part of your roofing
                      project. We pull permits, schedule inspections, and ensure full code compliance
                      — all at no additional charge.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charlotte Area Section */}
      <section id="charlotte-area" className="section scroll-mt-20">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-primary">
                Charlotte & Mecklenburg County
              </h2>
            </div>

            <p className="text-lg text-gray mb-8">
              Charlotte and Mecklenburg County have specific requirements for roofing contractors
              and projects. Here&apos;s what you need to know about roofing in the Queen City.
            </p>

            <div className="space-y-8">
              {/* Local Requirements */}
              <div className="card">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Charlotte-Specific Requirements
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-dark">Contractor Registration</h4>
                      <p className="text-gray text-sm">
                        Contractors must be registered with Mecklenburg County and carry proper
                        liability insurance ($300,000 minimum) and workers compensation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-dark">Storm Debris Removal</h4>
                      <p className="text-gray text-sm">
                        Charlotte has specific ordinances for construction debris removal. Dumpsters
                        require permits if placed on public right-of-way. We handle all debris
                        removal and comply with all city regulations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-dark">Historic Districts</h4>
                      <p className="text-gray text-sm">
                        Properties in Charlotte&apos;s historic districts (Dilworth, Myers Park,
                        Fourth Ward, etc.) may require Historic District Commission approval for
                        visible exterior changes including roofing materials.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-dark">Tree Protection</h4>
                      <p className="text-gray text-sm">
                        Charlotte&apos;s tree ordinance protects certain trees. Equipment staging
                        and material delivery must avoid damaging protected trees on your property.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Popular Charlotte Neighborhoods */}
              <div className="card">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Roofing by Charlotte Neighborhood
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { name: 'South Charlotte (Ballantyne, Providence)', note: 'Newer construction, many HOAs, architectural shingle standard' },
                    { name: 'North Charlotte (University, Mallard Creek)', note: 'Mix of ages, near our office, quick response times' },
                    { name: 'Myers Park / Dilworth', note: 'Historic district rules may apply, premium materials common' },
                    { name: 'NoDa / Plaza Midwood', note: 'Older homes, may need decking repairs, eclectic styles welcome' },
                    { name: 'Steele Creek / Lake Wylie', note: 'Growing area, many new constructions, York County for some' },
                    { name: 'Matthews / Mint Hill', note: 'Suburban setting, HOA common, impact-resistant popular' },
                  ].map((area) => (
                    <div key={area.name} className="bg-light rounded-lg p-4">
                      <h4 className="font-semibold text-dark mb-1">{area.name}</h4>
                      <p className="text-gray text-sm">{area.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lake Norman Section */}
      <section id="lake-norman" className="section bg-light scroll-mt-20">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Home className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-primary">
                Lake Norman Area & HOA Requirements
              </h2>
            </div>

            <p className="text-lg text-gray mb-8">
              Lake Norman communities — including Huntersville, Cornelius, Davidson, and Mooresville —
              often have homeowner associations with specific architectural requirements. Understanding
              these rules is essential before starting your roofing project.
            </p>

            <div className="space-y-8">
              {/* HOA Process */}
              <div className="card border-l-4 border-primary">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Typical HOA Approval Process
                </h3>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Review Covenants', desc: 'Check your HOA covenants for roofing material and color requirements. Some communities restrict shingle colors or require specific materials.' },
                    { step: '2', title: 'Submit ARR (Architectural Review Request)', desc: 'Complete your HOA\'s architectural review form with proposed shingle brand, style, and color. Include manufacturer color samples if required.' },
                    { step: '3', title: 'Wait for Approval', desc: 'HOA review typically takes 1-4 weeks. Some meet monthly, others have rolling approval. We can help expedite with proper documentation.' },
                    { step: '4', title: 'Get Written Approval', desc: 'Obtain written approval before work begins. Keep this for your records and to show the roofing contractor.' },
                    { step: '5', title: 'Notify HOA of Completion', desc: 'Some HOAs require notification when work is complete for their records.' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark">{item.title}</h4>
                        <p className="text-gray text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lake Norman Towns */}
              <div className="card">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Lake Norman Towns & Common HOA Communities
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      town: 'Huntersville',
                      communities: 'Birkdale, Skybrook, Vermillion, Northstone, Rosedale',
                      notes: 'Town permits separate from Mecklenburg. Many master-planned communities with strict architectural standards.',
                    },
                    {
                      town: 'Cornelius',
                      communities: 'Jetton Park, Antiquity, Bailey\'s Glen, Magnolia Estates',
                      notes: 'Mix of lakefront and inland communities. Lakefront properties often have additional dock/shoreline considerations.',
                    },
                    {
                      town: 'Davidson',
                      communities: 'River Run, Bradford, Westbranch, The Palisades',
                      notes: 'Town has architectural review board. Historic downtown has additional requirements.',
                    },
                    {
                      town: 'Mooresville',
                      communities: 'The Point, Trump National, Mooresville Golf & Country Club',
                      notes: 'Iredell County permits. Luxury communities often require premium materials.',
                    },
                  ].map((item) => (
                    <div key={item.town} className="border-b pb-4 last:border-b-0 last:pb-0">
                      <h4 className="font-bold text-dark text-lg mb-1">{item.town}</h4>
                      <p className="text-primary text-sm mb-2">
                        <strong>Common Communities:</strong> {item.communities}
                      </p>
                      <p className="text-gray text-sm">{item.notes}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* HOA Tips */}
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  HOA Tips from Our Experience
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray">
                      <strong className="text-dark">Start early:</strong> Submit your ARR as soon as you start
                      planning. Don&apos;t wait until you have storm damage.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray">
                      <strong className="text-dark">Match existing colors:</strong> Replacing with the same
                      color/style often gets faster approval. We can identify your current shingles.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray">
                      <strong className="text-dark">We can help:</strong> We regularly work with Lake Norman
                      HOAs and can provide sample boards, spec sheets, and documentation for your ARR.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray">
                      <strong className="text-dark">Emergency exception:</strong> Many HOAs allow emergency
                      repairs without prior approval. Get documentation of the emergency and follow up after.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Section */}
      <section id="climate" className="section scroll-mt-20">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Thermometer className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-primary">
                North Carolina Climate & Roofing
              </h2>
            </div>

            <p className="text-lg text-gray mb-8">
              Charlotte&apos;s humid subtropical climate presents unique challenges for roofing.
              Understanding these factors helps you choose the right materials and maintenance schedule.
            </p>

            <div className="space-y-8">
              {/* Climate Stats */}
              <div className="grid md:grid-cols-4 gap-4">
                <div className="card text-center">
                  <Sun className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-3xl font-bold text-primary">90°+</div>
                  <div className="text-gray text-sm">Avg Summer High</div>
                </div>
                <div className="card text-center">
                  <CloudRain className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-3xl font-bold text-primary">43&quot;</div>
                  <div className="text-gray text-sm">Annual Rainfall</div>
                </div>
                <div className="card text-center">
                  <Wind className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-gray text-sm">Storm Days/Year</div>
                </div>
                <div className="card text-center">
                  <AlertTriangle className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-3xl font-bold text-primary">Moderate</div>
                  <div className="text-gray text-sm">Hail Risk Zone</div>
                </div>
              </div>

              {/* Climate Challenges */}
              <div className="card">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Climate Challenges for Charlotte Roofs
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-dark flex items-center gap-2 mb-2">
                      <Sun className="w-5 h-5 text-accent" />
                      Intense Summer Heat
                    </h4>
                    <p className="text-gray text-sm mb-2">
                      Charlotte summers regularly exceed 90°F, with attic temperatures reaching
                      140°F+. This heat degrades asphalt shingles faster and increases cooling costs.
                    </p>
                    <p className="text-primary text-sm font-medium">
                      Solution: Proper attic ventilation, radiant barriers, and cool-roof rated shingles.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark flex items-center gap-2 mb-2">
                      <CloudRain className="w-5 h-5 text-primary" />
                      Heavy Rain & Humidity
                    </h4>
                    <p className="text-gray text-sm mb-2">
                      43 inches of annual rainfall combined with high humidity creates conditions for
                      algae growth (those black streaks), moss, and potential moisture damage.
                    </p>
                    <p className="text-primary text-sm font-medium">
                      Solution: Algae-resistant shingles with copper granules, proper drainage, and
                      annual cleaning if needed.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark flex items-center gap-2 mb-2">
                      <Wind className="w-5 h-5 text-primary" />
                      Severe Thunderstorms
                    </h4>
                    <p className="text-gray text-sm mb-2">
                      Charlotte averages 25+ severe thunderstorm days annually, bringing high winds,
                      hail, and potential for fallen trees. These storms cause most roof damage claims.
                    </p>
                    <p className="text-primary text-sm font-medium">
                      Solution: Impact-resistant (Class 4) shingles, proper nailing patterns, and
                      regular inspections after storms.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark flex items-center gap-2 mb-2">
                      <Thermometer className="w-5 h-5 text-primary" />
                      Temperature Swings
                    </h4>
                    <p className="text-gray text-sm mb-2">
                      Charlotte can see 30-40°F temperature swings in a single day, especially in
                      spring and fall. This thermal cycling causes expansion/contraction stress.
                    </p>
                    <p className="text-primary text-sm font-medium">
                      Solution: Quality shingles rated for thermal cycling, proper ventilation to
                      minimize temperature extremes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Best Installation Seasons */}
              <div className="card border-l-4 border-accent">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Best Time to Replace Your Roof in NC
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Ideal: Spring & Fall</h4>
                    <p className="text-gray text-sm">
                      Temperatures between 45-85°F allow shingles to seal properly while being
                      comfortable for installers. March-May and September-November are optimal.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Possible: Summer & Winter</h4>
                    <p className="text-gray text-sm">
                      We install year-round with proper precautions. Summer requires early starts
                      to beat the heat. Winter needs temperatures above 40°F for proper sealing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section id="materials" className="section bg-light scroll-mt-20">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-primary">
                Best Roofing Materials for NC
              </h2>
            </div>

            <p className="text-lg text-gray mb-8">
              Not all roofing materials perform equally in North Carolina&apos;s climate.
              Here&apos;s our expert breakdown of the best options for Charlotte and Lake Norman.
            </p>

            <div className="space-y-6">
              {/* Material Cards */}
              {[
                {
                  name: 'Architectural Asphalt Shingles',
                  rating: 'Most Popular',
                  lifespan: '25-35 years',
                  cost: '$8,000 - $15,000',
                  pros: ['Excellent value', 'Wide color selection', 'Proven durability in NC climate', 'Easy repairs'],
                  cons: ['Shorter lifespan than premium materials', 'Can be damaged by severe hail'],
                  recommendation: 'Best choice for most Charlotte homeowners. We recommend CertainTeed Landmark Pro or GAF Timberline HDZ with algae resistance.',
                },
                {
                  name: 'Impact-Resistant Shingles (Class 4)',
                  rating: 'Best for Storm Areas',
                  lifespan: '30-50 years',
                  cost: '$10,000 - $18,000',
                  pros: ['Withstands hail up to 2&quot;', 'Often qualifies for insurance discounts', 'Enhanced wind rating', 'Longer warranty'],
                  cons: ['Higher upfront cost', 'Slightly heavier'],
                  recommendation: 'Excellent choice for Lake Norman and areas with frequent storms. CertainTeed NorthGate or Owens Corning Duration FLEX.',
                },
                {
                  name: 'Standing Seam Metal Roofing',
                  rating: 'Premium Long-Term Value',
                  lifespan: '40-70 years',
                  cost: '$15,000 - $30,000',
                  pros: ['Exceptional longevity', 'Energy efficient (reflects heat)', 'Fire resistant', 'Minimal maintenance'],
                  cons: ['Higher upfront cost', 'Requires specialized installation', 'Some HOAs restrict'],
                  recommendation: 'Great for long-term homeowners and eco-conscious buyers. HOA approval needed in most Lake Norman communities.',
                },
                {
                  name: 'Synthetic Slate/Shake',
                  rating: 'Premium Aesthetics',
                  lifespan: '50+ years',
                  cost: '$20,000 - $40,000',
                  pros: ['Authentic slate/cedar look', 'Much lighter than real slate', 'Excellent durability', 'Impact resistant'],
                  cons: ['Premium pricing', 'Limited contractor experience'],
                  recommendation: 'Perfect for historic areas or upscale neighborhoods wanting premium aesthetics without slate weight concerns.',
                },
              ].map((material) => (
                <div key={material.name} className="card">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary">{material.name}</h3>
                      <span className="inline-block bg-accent/10 text-accent text-sm font-medium px-3 py-1 rounded-full mt-1">
                        {material.rating}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray">Lifespan: <strong className="text-dark">{material.lifespan}</strong></div>
                      <div className="text-sm text-gray">Typical Cost: <strong className="text-dark">{material.cost}</strong></div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-dark text-sm mb-2">Advantages</h4>
                      <ul className="space-y-1">
                        {material.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-2 text-gray text-sm">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span dangerouslySetInnerHTML={{ __html: pro }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark text-sm mb-2">Considerations</h4>
                      <ul className="space-y-1">
                        {material.cons.map((con) => (
                          <li key={con} className="flex items-start gap-2 text-gray text-sm">
                            <AlertTriangle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-light rounded-lg p-3">
                    <p className="text-sm">
                      <strong className="text-primary">Our Recommendation:</strong>{' '}
                      <span className="text-gray">{material.recommendation}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section id="costs" className="section scroll-mt-20">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-primary">
                Roof Replacement Costs in Charlotte NC
              </h2>
            </div>

            <p className="text-lg text-gray mb-8">
              Roof replacement costs in the Charlotte area depend on several factors.
              Here&apos;s a detailed breakdown to help you budget for your project.
            </p>

            <div className="space-y-8">
              {/* Cost Table */}
              <div className="card">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Average Costs by Home Size (2024-2026)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b">
                        <th className="pb-3 text-dark font-semibold">Home Size</th>
                        <th className="pb-3 text-dark font-semibold">Roof Area</th>
                        <th className="pb-3 text-dark font-semibold">Architectural</th>
                        <th className="pb-3 text-dark font-semibold">Impact-Resistant</th>
                        <th className="pb-3 text-dark font-semibold">Metal</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray">
                      <tr className="border-b">
                        <td className="py-3">1,200 sq ft</td>
                        <td className="py-3">~15 squares</td>
                        <td className="py-3">$6,500-$9,500</td>
                        <td className="py-3">$8,000-$12,000</td>
                        <td className="py-3">$12,000-$20,000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">1,800 sq ft</td>
                        <td className="py-3">~20 squares</td>
                        <td className="py-3">$8,500-$12,500</td>
                        <td className="py-3">$10,500-$16,000</td>
                        <td className="py-3">$16,000-$26,000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">2,500 sq ft</td>
                        <td className="py-3">~28 squares</td>
                        <td className="py-3">$11,500-$17,000</td>
                        <td className="py-3">$14,500-$22,000</td>
                        <td className="py-3">$22,000-$36,000</td>
                      </tr>
                      <tr>
                        <td className="py-3">3,500+ sq ft</td>
                        <td className="py-3">~38+ squares</td>
                        <td className="py-3">$15,500-$23,000</td>
                        <td className="py-3">$19,500-$30,000</td>
                        <td className="py-3">$30,000-$48,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray mt-4 italic">
                  *Estimates include tear-off, materials, labor, permits, and cleanup. Actual costs
                  vary based on roof complexity, pitch, and condition.
                </p>
              </div>

              {/* Cost Factors */}
              <div className="card">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Factors That Affect Your Roofing Cost
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { factor: 'Roof Pitch/Steepness', impact: 'Steeper roofs (8:12+) cost 10-25% more due to safety equipment and slower work.' },
                    { factor: 'Roof Complexity', impact: 'Multiple valleys, dormers, and penetrations add labor and materials.' },
                    { factor: 'Number of Layers', impact: 'Removing multiple shingle layers increases tear-off costs by $1,000-$3,000.' },
                    { factor: 'Decking Repairs', impact: 'Rotted decking adds $150-$300 per sheet for replacement.' },
                    { factor: 'Accessibility', impact: 'Difficult access for materials/equipment may add to costs.' },
                    { factor: 'Material Choice', impact: 'Premium materials cost more but often have better warranties and longevity.' },
                  ].map((item) => (
                    <div key={item.factor}>
                      <h4 className="font-semibold text-dark mb-1">{item.factor}</h4>
                      <p className="text-gray text-sm">{item.impact}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Financing */}
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <DollarSign className="w-8 h-8 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Financing Available
                    </h3>
                    <p className="text-gray mb-4">
                      Don&apos;t let cost delay necessary roof replacement. Best Roofing Now offers
                      flexible financing options including 0% APR promotions, low monthly payments,
                      and terms up to 144 months through PowerPay.
                    </p>
                    <Link
                      href="/financing"
                      className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
                    >
                      Learn About Financing
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="section bg-light scroll-mt-20">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-primary">
                Insurance Claims for Roof Damage in NC
              </h2>
            </div>

            <p className="text-lg text-gray mb-8">
              Storm damage is common in Charlotte. Understanding the insurance claim process
              helps you get fair compensation for covered damage.
            </p>

            <div className="space-y-8">
              {/* Claim Process */}
              <div className="card border-l-4 border-primary">
                <h3 className="text-xl font-bold text-primary mb-4">
                  NC Insurance Claim Process
                </h3>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Document the Damage', desc: 'Take photos of visible damage from ground level. Note the date and time of the storm event.' },
                    { step: '2', title: 'File Your Claim Promptly', desc: 'Contact your insurance company within 24-72 hours of discovering damage. NC has no specific deadline but prompt reporting is best.' },
                    { step: '3', title: 'Get a Professional Inspection', desc: 'Have a licensed roofing contractor inspect and document all damage. We provide detailed inspection reports at no cost.' },
                    { step: '4', title: 'Meet with Adjuster', desc: 'Your insurance company will send an adjuster. We recommend having your contractor present to ensure all damage is documented.' },
                    { step: '5', title: 'Review the Settlement', desc: 'Compare the insurance estimate to your contractor\'s scope. Negotiate if significant discrepancies exist.' },
                    { step: '6', title: 'Complete Repairs', desc: 'Once approved, proceed with repairs. Final payment is typically released after completion.' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark">{item.title}</h4>
                        <p className="text-gray text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Insurance Tips */}
              <div className="card">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Important Insurance Information for NC Homeowners
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-dark">Deductibles</h4>
                      <p className="text-gray text-sm">
                        NC policies often have separate wind/hail deductibles (typically 1-2% of
                        home value). A $300,000 home with 2% deductible = $6,000 out of pocket.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-dark">ACV vs. Replacement Cost</h4>
                      <p className="text-gray text-sm">
                        Actual Cash Value (ACV) policies deduct depreciation. Replacement Cost Value
                        (RCV) policies pay full replacement cost. Check your policy type.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-dark">Age Limitations</h4>
                      <p className="text-gray text-sm">
                        Some NC insurers limit coverage for roofs over 15-20 years old. Review
                        your policy for age restrictions or consider supplemental coverage.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-dark">Impact-Resistant Discounts</h4>
                      <p className="text-gray text-sm">
                        Many NC insurers offer 5-28% premium discounts for Class 4 impact-resistant
                        shingles. This can offset the higher material cost over time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="section scroll-mt-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-primary text-center">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-lg text-gray mb-8 text-center">
              Common questions about roofing in North Carolina
            </p>

            <div className="space-y-4">
              {ncRoofingFAQs.map((faq, index) => (
                <div key={index} className="card">
                  <h3 className="text-lg font-bold text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="guide" city="Charlotte" slug="nc-roofing-guide" />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="NC Roofing Guide"
      />

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you need a free inspection, help navigating permits and HOA requirements,
            or expert guidance on your roofing project, we&apos;re here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-white text-accent hover:bg-light text-lg px-8"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {SITE_CONFIG.phone}
            </a>
            <Link
              href="/contact"
              className="btn bg-accent hover:bg-accent-dark text-white text-lg px-8"
            >
              Schedule Free Inspection
            </Link>
          </div>
          <p className="text-white/70 mt-6 text-sm">
            Serving Charlotte, Lake Norman, and all of the greater Charlotte metro area
          </p>
        </div>
      </section>

      {/* Related Resources */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Related Resources
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/guides" className="card hover:shadow-xl transition group text-center">
              <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent">
                Roofing Guides
              </h3>
              <p className="text-gray text-sm">
                In-depth guides for homeowners
              </p>
            </Link>
            <Link href="/materials" className="card hover:shadow-xl transition group text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent">
                Materials
              </h3>
              <p className="text-gray text-sm">
                Compare roofing materials
              </p>
            </Link>
            <Link href="/locations" className="card hover:shadow-xl transition group text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent">
                Service Areas
              </h3>
              <p className="text-gray text-sm">
                Cities and neighborhoods we serve
              </p>
            </Link>
            <Link href="/faq" className="card hover:shadow-xl transition group text-center">
              <HelpCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent">
                FAQ
              </h3>
              <p className="text-gray text-sm">
                More common questions answered
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
