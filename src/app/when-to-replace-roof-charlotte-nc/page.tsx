import { Metadata } from 'next';
import { SEOImage } from '@/components/ui/SEOImage';
import Link from 'next/link';
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Shield,
  Star,
  AlertTriangle,
  Calendar,
  Clock,
  DollarSign,
  Thermometer,
  Droplets,
  Eye,
  TrendingDown,
  Zap,
  CloudRain,
  Users,
  Home,
  HelpCircle,
  Layers,
  Award,
  Search,
  Sun,
  Snowflake,
  Leaf,
  Flower2,
  Wrench,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { EstimateButton } from '@/components/estimate';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  ArticleSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { CitationSection } from '@/components/seo/CitationBlock';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'When to Replace Your Roof Charlotte NC | 10 Warning Signs (2026)',
  description:
    'How to know when your roof needs replacing in Charlotte NC. 10 warning signs, material lifespan guide, seasonal timing, replacement costs, and what to expect during the process. Free inspections from BBB A+ rated contractor.',
  keywords: [
    'when to replace roof Charlotte NC',
    'roof needs replaced Charlotte NC',
    'signs you need a new roof Charlotte NC',
    'how to know if roof needs replacing Charlotte NC',
    'roof replacement signs Charlotte NC',
    'how long does a roof last Charlotte NC',
    'roof lifespan Charlotte NC',
    'when to replace shingle roof Charlotte NC',
    'roof replacement cost Charlotte NC 2026',
    'best time to replace roof Charlotte NC',
    'roof replacement timeline Charlotte NC',
    'roof age replacement Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/when-to-replace-roof-charlotte-nc`,
  },
  openGraph: {
    title: 'When to Replace Your Roof in Charlotte NC | 10 Warning Signs (2026)',
    description:
      'Complete homeowner guide to knowing when your roof needs replacing. 10 warning signs, material lifespan chart, seasonal guidance, and 2026 cost ranges for Charlotte NC.',
    url: `${SITE_CONFIG.url}/when-to-replace-roof-charlotte-nc`,
    type: 'article',
    images: [
      {
        url: IMAGES.hero.hero8,
        width: 1200,
        height: 630,
        alt: 'When to replace your roof Charlotte NC - homeowner guide by Best Roofing Now',
      },
    ],
  },
};

// 10 Signs Your Roof Needs Replacing
const replacementSigns = [
  {
    number: 1,
    icon: Clock,
    title: 'Your Roof Is 20+ Years Old',
    description:
      'Most asphalt shingle roofs in Charlotte last 20 to 25 years. If your roof is approaching or past that age, it has likely exhausted its effective lifespan regardless of how it looks from the ground. The underlayment and decking protection degrade over time even when shingles appear intact.',
    urgency: 'high' as const,
  },
  {
    number: 2,
    icon: Layers,
    title: 'Curling or Buckling Shingles',
    description:
      'Shingles that curl at the edges or buckle in the middle indicate moisture damage beneath the surface or that they have reached the end of their useful life. In Charlotte\'s humid climate, curling shingles allow water to penetrate the roof deck and cause rapid deterioration.',
    urgency: 'high' as const,
  },
  {
    number: 3,
    icon: TrendingDown,
    title: 'Excessive Granule Loss',
    description:
      'Check your gutters and downspouts for accumulations of dark, sandy granules. Some granule loss is normal on new roofs, but heavy granule loss on an older roof means the shingles have lost their protective coating. Without granules, shingles deteriorate rapidly under Charlotte\'s intense UV exposure.',
    urgency: 'high' as const,
  },
  {
    number: 4,
    icon: Eye,
    title: 'Daylight Visible Through the Roof',
    description:
      'If you can see daylight through your roof boards from inside the attic, moisture and outside air are entering your home. This is a serious structural concern that indicates the roof deck has deteriorated and spot repairs are no longer sufficient to protect your home.',
    urgency: 'critical' as const,
  },
  {
    number: 5,
    icon: AlertTriangle,
    title: 'Sagging Roof Deck',
    description:
      'A sagging roof line is one of the most serious warning signs. It indicates structural damage to the decking or support system, often caused by prolonged moisture exposure. A sagging roof is a safety hazard that requires immediate professional evaluation and almost always means full replacement.',
    urgency: 'critical' as const,
  },
  {
    number: 6,
    icon: Droplets,
    title: 'Multiple or Recurring Leaks',
    description:
      'A single leak from a damaged flashing or cracked pipe boot is a straightforward repair. But multiple leaks in different areas of your home, or leaks that keep returning after repair, signal that the entire roofing system has deteriorated beyond what targeted fixes can address.',
    urgency: 'high' as const,
  },
  {
    number: 7,
    icon: Flower2,
    title: 'Moss, Algae, or Mold Growth',
    description:
      'While algae staining is largely cosmetic, heavy moss growth indicates trapped moisture that actively damages shingles. In Charlotte\'s humid subtropical climate, moss and mold can spread quickly across north-facing roof slopes, lifting shingles and accelerating rot in the underlying deck.',
    urgency: 'medium' as const,
  },
  {
    number: 8,
    icon: Thermometer,
    title: 'Rising Energy Bills',
    description:
      'A deteriorating roof compromises your home\'s insulation envelope. If your heating and cooling costs have increased noticeably without other explanation, your roof may be allowing conditioned air to escape and outside air to infiltrate. A new roof with proper ventilation and underlayment can reduce energy costs by 10 to 25 percent.',
    urgency: 'medium' as const,
  },
  {
    number: 9,
    icon: CloudRain,
    title: 'Storm Damage History',
    description:
      'Charlotte averages 45 to 50 thunderstorm days per year and experiences regular hail events between March and June. If your roof has sustained multiple storm damage events over its lifetime, the cumulative impact significantly shortens its remaining lifespan even if individual repairs were made after each event.',
    urgency: 'medium' as const,
  },
  {
    number: 10,
    icon: Users,
    title: 'Neighbors Are Replacing Their Roofs',
    description:
      'Homes built around the same time in the same Charlotte neighborhood were typically roofed with the same materials by the same builders. If multiple neighbors on your street are replacing their roofs, yours has likely experienced the same wear and weather exposure and is approaching the same end-of-life point.',
    urgency: 'medium' as const,
  },
];

// Repair vs Replace decision matrix
const decisionMatrix = [
  {
    scenario: 'Localized damage, roof under 15 years',
    recommendation: 'Repair' as const,
    reason: 'Your roof has significant life remaining. Targeted repair is cost-effective.',
  },
  {
    scenario: 'Single leak around a vent or chimney',
    recommendation: 'Repair' as const,
    reason: 'Flashing repairs are straightforward and affordable at $200-$800.',
  },
  {
    scenario: 'Storm damage in one area, insurance covers repair',
    recommendation: 'Repair' as const,
    reason: 'Insurance-covered spot repair preserves a roof with remaining life.',
  },
  {
    scenario: 'Roof is 20+ years old with widespread issues',
    recommendation: 'Replace' as const,
    reason: 'Ongoing repairs on an aging roof cost more long-term than replacement.',
  },
  {
    scenario: 'Multiple leaks in different areas',
    recommendation: 'Replace' as const,
    reason: 'Widespread failure indicates the entire system has deteriorated.',
  },
  {
    scenario: 'Sagging roof deck or structural damage',
    recommendation: 'Replace' as const,
    reason: 'Structural issues cannot be fixed with surface repairs.',
  },
  {
    scenario: '3+ repairs in the last 5 years',
    recommendation: 'Replace' as const,
    reason: 'Cumulative repair costs approach or exceed replacement cost.',
  },
  {
    scenario: 'Selling within 1-3 years, roof looks worn',
    recommendation: 'Replace' as const,
    reason: 'New roof adds 4-6% home value and eliminates buyer objections.',
  },
  {
    scenario: 'Storm damage qualifies for full insurance claim',
    recommendation: 'Replace' as const,
    reason: 'Get a new roof for just your deductible. Best financial decision.',
  },
];

// Material lifespan table
const materialLifespans = [
  {
    material: '3-Tab Asphalt Shingles',
    lifespan: '15-20 years',
    charlotteNote: 'Charlotte\'s heat and storms often reduce lifespan to 12-18 years.',
    costRange: '$5,500 - $9,000',
  },
  {
    material: 'Architectural (Dimensional) Shingles',
    lifespan: '25-30 years',
    charlotteNote: 'The most popular choice in Charlotte. Typically lasts 20-25 years locally.',
    costRange: '$8,000 - $15,000',
  },
  {
    material: 'Standing Seam Metal',
    lifespan: '40-70 years',
    charlotteNote: 'Excellent for Charlotte storms. Resists hail, wind, and humidity.',
    costRange: '$18,000 - $36,000',
  },
  {
    material: 'Metal Shingles',
    lifespan: '40-60 years',
    charlotteNote: 'Combines metal durability with traditional shingle aesthetics.',
    costRange: '$15,000 - $28,000',
  },
  {
    material: 'Cedar Shake',
    lifespan: '30-50 years',
    charlotteNote: 'Requires more maintenance in Charlotte\'s humidity. Prone to moss and rot.',
    costRange: '$20,000 - $40,000',
  },
  {
    material: 'Slate',
    lifespan: '75-100+ years',
    charlotteNote: 'Found in historic Charlotte neighborhoods. Virtually permanent but expensive.',
    costRange: '$35,000 - $70,000+',
  },
  {
    material: 'Synthetic Slate/Shake',
    lifespan: '40-60 years',
    charlotteNote: 'The look of natural materials with better performance in Charlotte weather.',
    costRange: '$18,000 - $35,000',
  },
  {
    material: 'TPO/EPDM (Flat Roof)',
    lifespan: '15-30 years',
    charlotteNote: 'Common on Charlotte commercial buildings. Can be extended with coatings.',
    costRange: '$8,000 - $20,000',
  },
];

// Seasonal guidance
const seasonalGuide = [
  {
    season: 'Spring (March - May)',
    icon: Flower2,
    rating: 'Good',
    ratingColor: 'bg-green-100 text-green-800',
    description:
      'Ideal temperatures for installation (50-80F). Book early because spring is peak demand season after winter damage assessments. Expect 2-4 week lead times.',
    pros: ['Optimal installation temperatures', 'Shingles seal properly in warm weather', 'Longest remaining warranty season ahead'],
    cons: ['Peak demand means longer wait times', 'Rain delays possible in April'],
  },
  {
    season: 'Summer (June - August)',
    icon: Sun,
    rating: 'Good with Caution',
    ratingColor: 'bg-yellow-100 text-yellow-800',
    description:
      'Charlotte summers average 90F+ with high humidity. Experienced crews work early mornings. Shingles seal quickly in heat. Afternoon thunderstorms can cause brief delays.',
    pros: ['Shingles seal rapidly', 'Longer daylight hours for work', 'Dry conditions most days'],
    cons: ['Extreme heat affects crew productivity', 'Afternoon storms cause brief delays', 'Shingles can be over-flexible when hot'],
  },
  {
    season: 'Fall (September - November)',
    icon: Leaf,
    rating: 'Best',
    ratingColor: 'bg-green-100 text-green-800',
    description:
      'The best time to replace a roof in Charlotte. Moderate temperatures, lower humidity, and minimal rain create ideal conditions. Book in August for fall installation.',
    pros: ['Perfect installation temperatures', 'Lower humidity than summer', 'Before winter weather arrives'],
    cons: ['High demand after hurricane season', 'Daylight hours shorten in November'],
  },
  {
    season: 'Winter (December - February)',
    icon: Snowflake,
    rating: 'Possible',
    ratingColor: 'bg-blue-100 text-blue-800',
    description:
      'Charlotte winters are mild enough for roof work most days. Temperatures rarely stay below freezing for extended periods. Off-season pricing may be available.',
    pros: ['Shorter wait times', 'Potential off-season discounts', 'Charlotte winters are mild'],
    cons: ['Shingles may not seal until spring warmth', 'Occasional ice or frost delays', 'Shorter work days'],
  },
];

// Replacement process timeline
const replacementProcess = [
  {
    step: 1,
    title: 'Free Inspection & Estimate',
    duration: 'Day 1',
    description: 'We climb on your roof, inspect every component, check your attic, photograph all findings, and provide a detailed written estimate with our honest recommendation.',
  },
  {
    step: 2,
    title: 'Material Selection & Scheduling',
    duration: '1-2 Weeks',
    description: 'Choose your shingle style, color, and upgrades. We order materials and schedule your installation date. If filing an insurance claim, we handle all documentation.',
  },
  {
    step: 3,
    title: 'Tear-Off & Deck Inspection',
    duration: 'Day 1 of Install',
    description: 'Our crew removes all existing roofing material down to the deck. We inspect the wood decking for rot or damage and replace any compromised sections.',
  },
  {
    step: 4,
    title: 'Underlayment & Flashing',
    duration: 'Day 1 of Install',
    description: 'We install ice and water shield in valleys and along eaves, synthetic underlayment across the entire deck, and new flashing around all penetrations.',
  },
  {
    step: 5,
    title: 'Shingle Installation',
    duration: 'Day 1-2 of Install',
    description: 'Shingles are installed according to manufacturer specifications for maximum warranty coverage. Ridge vents, hip and ridge caps, and all trim are completed.',
  },
  {
    step: 6,
    title: 'Cleanup & Final Inspection',
    duration: 'Completion Day',
    description: 'Magnetic sweep for nails, full property cleanup, and a final walk-through with you. We ensure you are completely satisfied before collecting final payment.',
  },
];

// Cost ranges
const costRanges = [
  {
    category: 'Small Home (under 1,500 sq ft)',
    shingleRange: '$5,500 - $9,000',
    metalRange: '$14,000 - $22,000',
  },
  {
    category: 'Average Home (1,500 - 2,500 sq ft)',
    shingleRange: '$8,000 - $15,000',
    metalRange: '$18,000 - $30,000',
  },
  {
    category: 'Large Home (2,500 - 3,500 sq ft)',
    shingleRange: '$12,000 - $20,000',
    metalRange: '$25,000 - $42,000',
  },
  {
    category: 'Premium/Estate (3,500+ sq ft)',
    shingleRange: '$18,000 - $30,000+',
    metalRange: '$35,000 - $60,000+',
  },
];

// FAQs
const replacementFAQs = [
  {
    question: 'How do I know if my roof needs to be replaced in Charlotte NC?',
    answer:
      'The clearest signs your Charlotte roof needs replacing are: age over 20 years for asphalt shingles, curling or buckling shingles across large areas, heavy granule loss in gutters, daylight visible through attic roof boards, sagging in the roof deck, multiple leaks in different areas, and neighbors with same-era homes replacing their roofs. If your roof shows three or more of these signs, replacement is likely the right decision. Best Roofing Now offers free inspections with honest recommendations.',
  },
  {
    question: 'How long does an asphalt shingle roof last in Charlotte NC?',
    answer:
      'Standard 3-tab asphalt shingles last 15 to 20 years in Charlotte, while architectural (dimensional) shingles last 25 to 30 years. However, Charlotte\'s intense UV exposure, 45+ annual thunderstorm days, regular hail events, and high humidity often reduce effective lifespan by 3 to 5 years compared to manufacturer ratings. Proper attic ventilation and regular maintenance can help maximize your roof\'s lifespan.',
  },
  {
    question: 'What is the best time of year to replace a roof in Charlotte NC?',
    answer:
      'Fall (September through November) is the best time to replace a roof in Charlotte NC. Temperatures are moderate (60-75F), humidity is lower than summer, and rain is less frequent. Spring (March through May) is also good but has higher demand and longer wait times. Charlotte\'s mild winters allow year-round installation, though shingles may not fully seal until warmer weather. Book 2 to 4 weeks in advance for fall installation.',
  },
  {
    question: 'How much does a roof replacement cost in Charlotte NC in 2026?',
    answer:
      'In 2026, a full roof replacement in Charlotte NC costs $8,000 to $15,000 for a standard 2,000 to 2,500 square foot home with architectural shingles. Standing seam metal roofing costs $18,000 to $36,000 for the same home. Costs vary based on roof size, pitch, complexity, material choice, and whether structural repairs are needed. Best Roofing Now provides free, detailed estimates with no obligation.',
  },
  {
    question: 'Does a new roof increase home value in Charlotte NC?',
    answer:
      'Yes. A new roof in Charlotte NC typically increases home value by 4 to 6 percent and returns 60 to 70 percent of its cost at resale. Beyond the dollar value, a new roof eliminates a major inspection concern for buyers, reduces time on market, and often leads to stronger offers. In competitive Charlotte neighborhoods like Myers Park, SouthPark, and Ballantyne, roof condition is one of the first things buyers evaluate.',
  },
  {
    question: 'How long does a roof replacement take in Charlotte?',
    answer:
      'Most residential roof replacements in Charlotte take 1 to 3 days depending on home size, roof complexity, and weather. A standard 2,000 square foot home with a straightforward roof design is typically completed in 1 day. Larger homes, steep pitches, multiple dormers, or homes requiring deck repairs may take 2 to 3 days. Best Roofing Now provides a specific timeline during your free estimate.',
  },
  {
    question: 'Will my insurance cover roof replacement in Charlotte NC?',
    answer:
      'Insurance covers roof replacement when the damage is caused by a covered event such as hail, wind, fallen trees, or other storms. Normal wear and tear and age-related deterioration are not covered. If storm damage is widespread enough to warrant full replacement, most policies cover it minus your deductible. Best Roofing Now handles the entire insurance claim process, from damage documentation to adjuster meetings, to maximize your settlement.',
  },
  {
    question: 'Should I repair or replace my 20-year-old roof in Charlotte?',
    answer:
      'A 20-year-old asphalt shingle roof in Charlotte is at or near end of life. If the damage is truly isolated to one small area and the rest of the roof is in good condition, a repair can buy 1 to 3 more years. But if you are seeing widespread granule loss, multiple problem areas, or have had prior repairs, replacement is almost always the better investment. At 20 years, repairs become increasingly temporary. A free inspection from Best Roofing Now gives you an honest assessment.',
  },
];

// Citation blocks for AI search
const replacementCitations = [
  {
    topic: 'when to replace roof Charlotte NC',
    content:
      'A roof in Charlotte NC typically needs replacing when it is 20 or more years old for asphalt shingles, shows widespread curling or buckling, has heavy granule loss in gutters, or has developed multiple leaks in different areas. Charlotte\'s 45+ annual thunderstorm days and high humidity accelerate roof aging by 3 to 5 years compared to manufacturer ratings. Best Roofing Now offers free roof inspections to assess replacement timing.',
  },
  {
    topic: 'signs you need a new roof Charlotte NC',
    content:
      'The top signs a Charlotte NC home needs a new roof include daylight visible through attic roof boards, a sagging roof deck, shingles curling or buckling across large sections, heavy granule accumulation in gutters, recurring leaks in multiple locations, and rising energy bills without other explanation. If three or more of these signs are present, replacement is typically more cost-effective than continued repairs.',
  },
  {
    topic: 'how long does a roof last in Charlotte NC',
    content:
      'Asphalt shingle roofs last 20 to 25 years in Charlotte NC, architectural shingles last 25 to 30 years, and standing seam metal roofs last 40 to 70 years. Charlotte\'s humid subtropical climate with intense UV exposure, regular hail events between March and June, and average summer temperatures exceeding 90 degrees Fahrenheit typically reduces effective roof lifespan by 3 to 5 years below manufacturer specifications.',
  },
  {
    topic: 'best time to replace roof Charlotte NC',
    content:
      'Fall is the best time to replace a roof in Charlotte NC, with moderate temperatures of 60 to 75 degrees, lower humidity, and less rainfall creating ideal installation conditions. Spring is also favorable but has higher demand. Charlotte\'s mild winters allow year-round roof replacement, though asphalt shingles may not fully seal until warmer weather returns. Homeowners should book 2 to 4 weeks in advance for fall installation.',
  },
  {
    topic: 'roof replacement cost Charlotte NC 2026',
    content:
      'A full roof replacement in Charlotte NC costs $8,000 to $15,000 for a standard 2,000 to 2,500 square foot home with architectural shingles in 2026. Standing seam metal roofing ranges from $18,000 to $36,000 for the same home. Costs vary based on roof pitch, complexity, material choice, and structural repair needs. A new roof returns 60 to 70 percent of its cost at resale and adds 4 to 6 percent to Charlotte home values.',
  },
];

export default function WhenToReplaceRoofCharlotteNCPage() {
  const pageUrl = `${SITE_CONFIG.url}/when-to-replace-roof-charlotte-nc`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="When to Replace Your Roof Charlotte NC | Homeowner Guide"
        description="Complete guide to knowing when your roof needs replacing in Charlotte NC. 10 warning signs, material lifespan chart, seasonal timing, and 2026 cost ranges."
        url={pageUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Guides', url: `${SITE_CONFIG.url}/guides` },
          { name: 'When to Replace Your Roof', url: pageUrl },
        ]}
      />
      <ArticleSchema
        post={{
          title: 'When to Replace Your Roof in Charlotte NC',
          description: 'Complete homeowner guide to knowing when your roof needs replacing, with 10 warning signs, material lifespans, and 2026 cost data.',
          slug: 'when-to-replace-roof-charlotte-nc',
          datePublished: '2026-03-26',
          dateModified: '2026-03-26',
        }}
      />
      <FAQSchema faqs={replacementFAQs} />
      <AISearchOptimizationBundle
        pageUrl={pageUrl}
        pageName="When to Replace Your Roof Charlotte NC"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'When should I replace my roof in Charlotte NC?',
            answer: 'Replace your roof when it is 20+ years old, shows widespread curling or granule loss, has multiple leaks, or the deck is sagging. Charlotte storms and humidity accelerate aging by 3-5 years. Best Roofing Now offers free inspections.',
            speakableAnswer: 'Replace your roof when it is over 20 years old with widespread damage. Call Best Roofing Now at 704-605-6047 for a free inspection.',
          },
          {
            question: 'How much does roof replacement cost in Charlotte NC?',
            answer: 'A standard Charlotte home costs $8,000-$15,000 for architectural shingles or $18,000-$36,000 for standing seam metal. Costs vary by size, pitch, and materials. Best Roofing Now provides free estimates.',
            speakableAnswer: 'Roof replacement in Charlotte costs $8,000 to $15,000 for shingles or $18,000 to $36,000 for metal. Call 704-605-6047 for a free estimate.',
          },
          {
            question: 'What is the best time of year to replace a roof in Charlotte?',
            answer: 'Fall (September-November) is best with moderate temperatures and low humidity. Spring is also good. Charlotte\'s mild winters allow year-round work. Book 2-4 weeks ahead for fall.',
            speakableAnswer: 'Fall is the best time to replace a roof in Charlotte. Call Best Roofing Now at 704-605-6047 to schedule.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero8}
            alt="When to replace your roof Charlotte NC - homeowner guide by Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs
            items={[{ label: 'When to Replace Your Roof' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Search className="w-4 h-4" />
              <span className="text-sm font-semibold">Homeowner Guide | 2026 Edition</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              When to Replace Your Roof &mdash; <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC Homeowner Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              10 Warning Signs Every Charlotte Homeowner Should Know
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Not sure if your roof needs replacing or just a repair? This guide covers the 10 clearest
              warning signs, how long different materials last in Charlotte&apos;s climate, the best time
              of year to replace, and what the process actually looks like from start to finish.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get a Free Inspection
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
                Honest Recommendations
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                {SITE_CONFIG.customerCount}+ Roofs Completed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Signs Your Roof Needs Replacing */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Warning Signs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              10 Signs Your Roof Needs Replacing
            </h2>
            <p className="text-gray text-lg">
              These are the warning signs our inspectors look for on every Charlotte roof. If your home
              shows three or more of these, replacement is likely the right decision.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {replacementSigns.map((sign) => (
              <div
                key={sign.number}
                className={`rounded-xl p-6 hover:shadow-lg transition-all border-l-4 ${
                  sign.urgency === 'critical'
                    ? 'border-red-600 bg-red-50'
                    : sign.urgency === 'high'
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-yellow-500 bg-yellow-50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    sign.urgency === 'critical'
                      ? 'bg-red-200'
                      : sign.urgency === 'high'
                      ? 'bg-orange-200'
                      : 'bg-yellow-200'
                  }`}>
                    <sign.icon className={`w-6 h-6 ${
                      sign.urgency === 'critical'
                        ? 'text-red-700'
                        : sign.urgency === 'high'
                        ? 'text-orange-700'
                        : 'text-yellow-700'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        sign.urgency === 'critical'
                          ? 'bg-red-200 text-red-800'
                          : sign.urgency === 'high'
                          ? 'bg-orange-200 text-orange-800'
                          : 'bg-yellow-200 text-yellow-800'
                      }`}>
                        #{sign.number}
                      </span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full uppercase ${
                        sign.urgency === 'critical'
                          ? 'bg-red-600 text-white'
                          : sign.urgency === 'high'
                          ? 'bg-orange-600 text-white'
                          : 'bg-yellow-600 text-white'
                      }`}>
                        {sign.urgency} urgency
                      </span>
                    </div>
                    <h3 className="font-bold text-dark mb-2">{sign.title}</h3>
                    <p className="text-gray text-sm">{sign.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray mb-4">
              Not sure how many signs apply to your roof? Our inspectors will check every one.
            </p>
            <EstimateButton variant="accent" size="lg" estimateType="residential">
              Schedule Your Free Roof Inspection
            </EstimateButton>
          </div>
        </div>
      </section>

      {/* Repair vs Replace Decision Guide */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <HelpCircle className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Decision Guide</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Repair vs. Replace Decision Guide
            </h2>
            <p className="text-gray text-lg">
              Use this decision matrix to determine whether your Charlotte roof needs a targeted repair
              or a full replacement. When in doubt, a free inspection gives you the definitive answer.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-4 text-left font-semibold text-sm">Scenario</th>
                      <th className="px-4 py-4 text-center font-semibold text-sm w-32">Recommendation</th>
                      <th className="px-4 py-4 text-left font-semibold text-sm">Why</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {decisionMatrix.map((row, index) => (
                      <tr key={row.scenario} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-4 font-medium text-dark text-sm">{row.scenario}</td>
                        <td className="px-4 py-4 text-center">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                            row.recommendation === 'Repair'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {row.recommendation}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-gray text-sm">{row.reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="text-center mt-6">
              <Link
                href="/roof-repair-vs-replacement-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Read our full Repair vs. Replacement Guide
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Material Lifespan Table */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Layers className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Material Guide</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How Long Different Roof Materials Last in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Charlotte&apos;s humid subtropical climate with intense UV, regular hail, and 45+ annual thunderstorm
              days affects roof lifespan differently depending on the material. Here is what to expect for each type.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-4 text-left font-semibold text-sm">Material</th>
                      <th className="px-4 py-4 text-center font-semibold text-sm">Expected Lifespan</th>
                      <th className="px-4 py-4 text-left font-semibold text-sm">Charlotte Climate Note</th>
                      <th className="px-4 py-4 text-center font-semibold text-sm">2026 Cost Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {materialLifespans.map((row, index) => (
                      <tr key={row.material} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-4 font-medium text-dark text-sm">{row.material}</td>
                        <td className="px-4 py-4 text-center">
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary">
                            {row.lifespan}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-gray text-sm">{row.charlotteNote}</td>
                        <td className="px-4 py-4 text-center font-semibold text-dark text-sm">{row.costRange}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-4 py-4 text-sm text-gray">
                <strong>Note:</strong> Cost ranges are for a typical 2,000-2,500 sq ft Charlotte home in 2026. Actual
                costs vary by roof size, pitch, complexity, and accessibility.{' '}
                <Link href="/roofing-costs-2026" className="text-primary font-semibold hover:text-accent">
                  See full 2026 cost guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time of Year to Replace */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Seasonal Guide</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Best Time of Year to Replace Your Roof in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Charlotte&apos;s climate allows roof replacement year-round, but some seasons deliver better
              results and pricing than others. Here is what to expect each season.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {seasonalGuide.map((season) => (
              <div
                key={season.season}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <season.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark">{season.season}</h3>
                    <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-bold mt-1 ${season.ratingColor}`}>
                      {season.rating}
                    </span>
                  </div>
                </div>
                <p className="text-gray text-sm mb-4">{season.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-bold text-green-700 uppercase mb-2">Pros</h4>
                    <ul className="space-y-1">
                      {season.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-1.5 text-xs text-gray">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-red-700 uppercase mb-2">Cons</h4>
                    <ul className="space-y-1">
                      {season.cons.map((con) => (
                        <li key={con} className="flex items-start gap-1.5 text-xs text-gray">
                          <AlertTriangle className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect During Replacement */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Wrench className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">The Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What to Expect During a Roof Replacement
            </h2>
            <p className="text-gray text-lg">
              Knowing what to expect removes the stress from the process. Here is exactly how a roof
              replacement works with Best Roofing Now, from first call to final cleanup.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {replacementProcess.map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-6 bg-light rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                    <span className="text-xs font-bold text-primary mt-2">{item.duration}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                    <p className="text-gray text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost Overview */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">2026 Cost Data</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Replacement Cost Ranges &mdash; Charlotte NC 2026
            </h2>
            <p className="text-gray text-lg">
              What you will pay depends on your home size, roof complexity, and material choice. These
              ranges reflect actual 2026 pricing in the Charlotte metro market.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-10">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-4 text-left font-semibold text-sm">Home Size</th>
                      <th className="px-4 py-4 text-center font-semibold text-sm">Architectural Shingles</th>
                      <th className="px-4 py-4 text-center font-semibold text-sm">Standing Seam Metal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {costRanges.map((row, index) => (
                      <tr key={row.category} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-4 font-medium text-dark text-sm">{row.category}</td>
                        <td className="px-4 py-4 text-center font-semibold text-dark text-sm">{row.shingleRange}</td>
                        <td className="px-4 py-4 text-center font-semibold text-dark text-sm">{row.metalRange}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-4 py-4 text-sm text-gray">
                <strong>Note:</strong> Costs include tear-off, disposal, materials, labor, and cleanup. Additional costs
                may apply for structural deck repairs, steep pitch, multiple stories, or complex designs.{' '}
                <Link href="/roof-replacement-cost-charlotte-nc" className="text-primary font-semibold hover:text-accent">
                  See detailed replacement costs
                </Link>
              </div>
            </div>
          </div>

          {/* Summary cost cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-dark mb-2">Average Shingle Roof</h3>
              <p className="text-2xl font-bold text-primary mb-1">$8,000 - $15,000</p>
              <p className="text-gray text-sm">Architectural shingles, standard home</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-dark mb-2">Average Metal Roof</h3>
              <p className="text-2xl font-bold text-primary mb-1">$18,000 - $36,000</p>
              <p className="text-gray text-sm">Standing seam, 40-70 year lifespan</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <TrendingDown className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-dark mb-2">ROI at Resale</h3>
              <p className="text-2xl font-bold text-green-700 mb-1">60-70%</p>
              <p className="text-gray text-sm">Plus 4-6% increase in home value</p>
            </div>
          </div>

          <div className="text-center">
            <EstimateButton variant="accent" size="lg" estimateType="residential">
              Get Your Free Replacement Estimate
            </EstimateButton>
            <p className="text-gray text-sm mt-4">
              No obligation &bull; Honest recommendations &bull; 100% free
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Best Roofing Now */}
      <section className="section bg-gradient-to-br from-primary via-primary to-primary-dark text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Why Charlotte Homeowners Trust Best Roofing Now
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              When your roof needs replacing, you need a contractor who tells the truth, does the work
              right, and stands behind it. That is exactly what we do.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-6">
                <Award className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Fully Certified</h3>
                <p className="text-white/80 text-sm">
                  NC Licensed, Insured, BBB A+, CertainTeed SELECT, GAF Certified
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <Star className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">5.0 Google Rating</h3>
                <p className="text-white/80 text-sm">
                  Hundreds of 5-star reviews from Charlotte homeowners
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <Users className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Local & Veteran-Owned</h3>
                <p className="text-white/80 text-sm">
                  Charlotte-based since 2019. We live and work in your community.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-accent hover:bg-accent-dark text-white"
              >
                <Phone className="w-5 h-5" />
                {SITE_CONFIG.phone}
              </a>
              <Link href="/reviews" className="btn bg-white text-primary hover:bg-gray-100">
                Read Our Reviews
              </Link>
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
                Roof Replacement FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to the most common questions Charlotte homeowners ask about knowing when to
                replace their roof and what the process involves.
              </p>
            </div>
            <div className="space-y-4">
              {replacementFAQs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white border rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition">
                    <h3 className="font-bold text-dark pr-4">{faq.question}</h3>
                    <ArrowRight className="w-5 h-5 text-primary transform group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-gray">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Citation Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <CitationSection
              heading="Expert Facts About Roof Replacement in Charlotte NC"
              citations={replacementCitations}
            />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Related Roofing Guides &amp; Services
            </h2>
            <p className="text-gray">
              Explore detailed cost guides, material comparisons, and service pages to help you make
              an informed roofing decision.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/roof-repair-vs-replacement-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Repair vs. Replacement Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/roof-replacement-cost-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Replacement Cost Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/roof-replacement-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Roof Replacement Services
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/metal-roofing-services"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Metal Roofing
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/roofing-costs-2026"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              2026 Roofing Costs
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/storm-damage-roof-repair-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Storm Damage Repair
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="when-to-replace-roof-charlotte-nc"
        count={4}
        title="Recent Roof Replacements in Charlotte, NC"
        subtitle="Browse completed roof replacement projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={pageUrl}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="When To Replace Roof"
      />

      <CTASection
        title="Not Sure If Your Roof Needs Replacing?"
        subtitle="Get a free, no-obligation roof inspection from Charlotte's most trusted roofing contractor. We will climb on your roof, examine every component, and give you an honest recommendation based on what we find."
      />
    </>
  );
}
