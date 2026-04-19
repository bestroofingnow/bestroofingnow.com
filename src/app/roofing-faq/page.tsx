import { Metadata } from 'next';
import Link from 'next/link';
import { SEOImage } from '@/components/ui/SEOImage';
import {
  HelpCircle,
  Phone,
  ArrowRight,
  DollarSign,
  FileText,
  Calendar,
  Package,
  Shield,
  Wrench,
  Building2,
  Users,
  CheckCircle,
  Clock,
  AlertTriangle,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import {
  BreadcrumbSchema,
  FAQSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { CitationSection } from '@/components/seo/CitationBlock';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roofing FAQ | 100+ Roofing Questions Answered | Charlotte NC 2026',
  description:
    'Get answers to 100+ roofing questions about costs, choosing a contractor, materials, insurance claims, maintenance, timing, and technical details. Expert answers from Charlotte NC trusted roofers at Best Roofing Now.',
  keywords: [
    'roofing faq',
    'roofing questions to ask',
    'questions about roofing',
    'roofing FAQ Charlotte NC',
    'common roofing questions',
    'roof replacement questions',
    'roofing cost questions',
    'questions to ask roofer',
    'roof insurance questions',
    'roof maintenance FAQ',
    'roofing materials FAQ',
    'how to choose roofing contractor',
    'roofing questions and answers',
    'roof repair FAQ Charlotte NC',
    'roofing help Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-faq`,
  },
  openGraph: {
    title: 'Roofing FAQ | 100+ Questions Answered | Best Roofing Now Charlotte NC',
    description:
      'The most comprehensive roofing FAQ for Charlotte NC homeowners. 100+ expert answers covering costs, contractors, materials, insurance, maintenance, and more.',
    url: `${SITE_CONFIG.url}/roofing-faq`,
    type: 'website',
  },
};

// ── FAQ Data by Category ──────────────────────────────────────────────

const costFaqs = [
  {
    question: 'How much does a new roof cost in Charlotte NC?',
    answer:
      'A new roof in Charlotte NC costs $8,000 to $15,000 for asphalt shingles on a typical 2,000 sq ft home in 2026. Metal roofing runs $24,000 to $36,000, and tile or slate can reach $30,000 to $60,000. The price depends on roof size, material, pitch, complexity, and whether tear-off is needed. Best Roofing Now provides free itemized estimates.',
  },
  {
    question: 'How much does a roof replacement cost per square foot?',
    answer:
      'Roof replacement costs $4.50 to $7.00 per square foot for architectural asphalt shingles, $12 to $18 per square foot for standing seam metal, and $15 to $30 per square foot for tile in Charlotte NC. These prices include materials, labor, tear-off, disposal, and standard warranties.',
  },
  {
    question: 'How much does roof repair cost in Charlotte NC?',
    answer:
      'Roof repair in Charlotte costs $250 to $4,500 depending on scope. Minor leak patches or shingle replacements run $250 to $600. Moderate flashing and valley repairs cost $600 to $1,800. Major structural repairs run $1,800 to $4,500 or more. Best Roofing Now offers free inspections to determine exactly what your roof needs.',
  },
  {
    question: 'Is a metal roof worth the extra cost?',
    answer:
      'Yes, metal roofing is worth the investment for many Charlotte homeowners. While it costs 2 to 3 times more upfront than asphalt shingles, metal roofs last 40 to 70 years versus 25 to 30 for shingles, resist winds up to 140 mph, reflect solar heat reducing cooling costs by 10 to 25 percent, and increase home value. Over a 50-year period, metal is often cheaper than replacing shingles twice.',
  },
  {
    question: 'What is the cheapest roofing material?',
    answer:
      '3-tab asphalt shingles are the cheapest roofing material at $3.50 to $5.50 per square foot installed in Charlotte NC. However, architectural shingles at $4.50 to $7.00 per square foot offer significantly better durability, wind resistance, and curb appeal, making them the better value for most homeowners.',
  },
  {
    question: 'How much do gutters cost with a new roof?',
    answer:
      'Gutter installation costs $600 to $2,400 for a typical Charlotte home. When bundled with a roof replacement, many contractors including Best Roofing Now offer discounted package pricing. Seamless aluminum gutters cost $6 to $12 per linear foot. Adding gutter guards costs an additional $7 to $15 per linear foot.',
  },
  {
    question: 'Can I finance a new roof?',
    answer:
      'Yes, most reputable Charlotte roofing contractors offer financing options. Best Roofing Now partners with lending providers to offer monthly payment plans with competitive interest rates. Many homeowners qualify for 0 percent APR promotional periods. Insurance claims can also offset costs significantly when storm damage is involved.',
  },
  {
    question: 'Why do roofing estimates vary so much?',
    answer:
      'Roofing estimates vary due to differences in material quality, labor costs, warranty coverage, overhead, and whether the contractor includes all line items. Some low estimates omit tear-off, disposal, flashing replacement, or proper underlayment. Always compare itemized written estimates and verify each contractor is licensed and insured.',
  },
  {
    question: 'Does a new roof increase home value?',
    answer:
      'A new roof typically increases home value by $12,000 to $20,000 in the Charlotte NC market, recovering 60 to 70 percent of the investment at resale. Homes with new roofs sell faster and buyers are more willing to pay asking price. A roof in poor condition is one of the top deal-breakers during home inspections.',
  },
  {
    question: 'How much does a roof inspection cost?',
    answer:
      'Best Roofing Now provides free roof inspections for Charlotte area homeowners. Some companies charge $150 to $400 for inspections. Free inspections from reputable contractors include a detailed written report of findings, photos of any damage, and an honest recommendation on whether repair or replacement is needed.',
  },
  {
    question: 'What is the average cost to repair a roof leak?',
    answer:
      'The average cost to repair a roof leak in Charlotte NC is $350 to $1,200. Simple leak patches around flashing or pipe boots cost $250 to $500. Leaks requiring valley repair or section replacement run $600 to $1,800. Emergency leak repair during a storm may include premium pricing for immediate response.',
  },
  {
    question: 'How much does it cost to replace roof decking?',
    answer:
      'Roof decking replacement costs $2 to $5 per square foot for plywood or OSB in Charlotte NC. A full decking replacement on a 2,000 sq ft roof runs $4,000 to $10,000. Many roofs only need partial decking replacement in damaged areas, costing $500 to $2,000. Decking condition is assessed during tear-off.',
  },
  {
    question: 'How much does a flat roof cost in Charlotte?',
    answer:
      'A flat roof in Charlotte NC costs $5 to $12 per square foot installed in 2026 depending on the membrane type. TPO membrane costs $5 to $8 per square foot. EPDM rubber runs $5 to $9. Modified bitumen costs $4 to $7. PVC membrane costs $7 to $12. Flat roofs are common on Charlotte commercial buildings and home additions.',
  },
  {
    question: 'What is the cost of emergency roof repair?',
    answer:
      'Emergency roof repair in Charlotte NC costs $300 to $2,500 depending on the scope. Emergency tarping to stop water damage costs $200 to $500. After-hours and weekend service may include a $100 to $300 premium. Best Roofing Now offers 24/7 emergency response for Charlotte area homeowners.',
  },
  {
    question: 'How much does roof flashing replacement cost?',
    answer:
      'Roof flashing replacement costs $200 to $800 per area in Charlotte NC. Chimney flashing runs $300 to $800. Pipe boot flashing costs $100 to $250 each. Valley flashing runs $400 to $1,000 per valley. During a full roof replacement, all flashing is replaced and included in the total price.',
  },
];

const timingFaqs = [
  {
    question: 'When is the best time to replace a roof?',
    answer:
      'The best time to replace a roof in Charlotte NC is late spring through early fall when temperatures stay between 45 and 85 degrees Fahrenheit. Shingles seal best in warm weather. However, Best Roofing Now installs roofs year-round. Scheduling in late winter or early spring often means shorter wait times and potentially lower prices before peak season.',
  },
  {
    question: 'How long does a roof replacement take?',
    answer:
      'A typical residential roof replacement in Charlotte takes 1 to 3 days for asphalt shingles and 3 to 7 days for metal roofing. Factors that extend the timeline include roof size, complexity such as dormers and valleys, weather delays, and the extent of decking repairs needed. Best Roofing Now provides a project timeline before work begins.',
  },
  {
    question: 'How do I know if I need a new roof?',
    answer:
      'Signs you need a new roof include shingles that are curling, cracking, buckling, or missing; granules accumulating in gutters; daylight visible through the attic; sagging roof deck; water stains on ceilings or walls; roof age over 20 years; and neighbors with similar-age homes replacing their roofs. A free inspection from Best Roofing Now provides a definitive answer.',
  },
  {
    question: 'Can I put a new roof over an existing one?',
    answer:
      'While building codes in Charlotte NC allow one layer of shingles over another, we generally recommend a complete tear-off. Overlaying hides damage to the decking, adds weight to the structure, reduces the new roof lifespan, and can void manufacturer warranties. A tear-off only adds $1,000 to $3,000 to the project and protects your investment.',
  },
  {
    question: 'How long does a roof last in North Carolina?',
    answer:
      'In North Carolina, asphalt shingle roofs last 20 to 30 years, architectural shingles last 25 to 35 years, metal roofs last 40 to 70 years, and tile or slate roofs can last 50 to 100 years. Charlotte heat, humidity, UV exposure, and storm activity can shorten lifespan if roofs are not properly ventilated and maintained.',
  },
  {
    question: 'Should I repair or replace my roof?',
    answer:
      'Repair if your roof is under 15 years old and damage is isolated to a small area. Replace if your roof is over 20 years old, has widespread damage, shows multiple leak points, or if repair costs exceed 30 percent of replacement cost. Best Roofing Now provides honest recommendations and never pushes unnecessary replacements.',
  },
  {
    question: 'What time of year are roofing prices lowest?',
    answer:
      'Roofing prices tend to be lowest in late fall and winter in Charlotte NC when demand drops. Scheduling a replacement for January through March can save 5 to 15 percent compared to peak summer pricing. However, storm damage claims should be addressed promptly regardless of season to prevent further deterioration.',
  },
  {
    question: 'How often should I have my roof inspected?',
    answer:
      'Have your roof inspected at least once a year, ideally in spring after winter weather, and after any major storm. Charlotte experiences significant hail and wind events, making post-storm inspections critical. Best Roofing Now offers free inspections and will document any damage with photos for your records or insurance claims.',
  },
  {
    question: 'Can a roof be replaced in winter in Charlotte?',
    answer:
      'Yes, roofs can be replaced in winter in Charlotte NC. Temperatures rarely drop below freezing for extended periods, and modern adhesive shingles seal properly above 40 degrees Fahrenheit. Experienced crews like Best Roofing Now use hand-sealing techniques during cooler months to ensure proper adhesion. Winter installations often have faster scheduling.',
  },
  {
    question: 'How long should I wait to replace a damaged roof?',
    answer:
      'Do not wait. A damaged roof should be addressed immediately to prevent water intrusion, mold growth, and structural damage. In North Carolina, you have 1 year from the date of storm damage to file an insurance claim. Delaying repairs often leads to more extensive and expensive damage. Best Roofing Now offers emergency tarping and rapid response.',
  },
  {
    question: 'Does weather affect roof installation quality?',
    answer:
      'Yes, weather impacts installation quality. Asphalt shingles seal best above 45 degrees Fahrenheit when the sun activates the adhesive strip. Rain during installation can trap moisture under shingles. High winds above 25 mph make installation unsafe. Experienced crews like Best Roofing Now monitor weather forecasts and adjust schedules to ensure optimal installation conditions.',
  },
  {
    question: 'How long is a roofing warranty valid?',
    answer:
      'Manufacturer material warranties range from 25 years for standard shingles to 50 years or lifetime for premium products. Workmanship warranties from the contractor typically cover 5 to 10 years. GAF and CertainTeed certified contractors like Best Roofing Now can offer enhanced system warranties covering both materials and labor for up to 50 years.',
  },
  {
    question: 'What happens if it rains during my roof replacement?',
    answer:
      'Professional roofing crews protect your home if rain interrupts work. The exposed sections are covered with tarps or temporary barriers to prevent water intrusion. Best Roofing Now uses weather monitoring to plan each project phase and only exposes sections that can be completed and sealed the same day.',
  },
];

const contractorFaqs = [
  {
    question: 'What questions should I ask a roofing contractor?',
    answer:
      'Ask these essential questions: Are you licensed and insured in North Carolina? How long have you been in business? Can you provide local references? Do you offer written warranties on labor? Will you pull the necessary permits? Do you have manufacturer certifications? Will you provide a detailed written estimate? Who will supervise the job on-site?',
  },
  {
    question: 'How do I choose a roofing contractor in Charlotte NC?',
    answer:
      'Choose a Charlotte roofing contractor by verifying their NC general contractor license, checking for $1 million or more in liability insurance, reading Google reviews with at least a 4.5 star rating, confirming BBB accreditation, asking for local references, getting 3 written estimates, and ensuring they offer manufacturer-backed warranties. Best Roofing Now meets all of these criteria.',
  },
  {
    question: 'What are red flags when hiring a roofer?',
    answer:
      'Red flags include demanding large upfront deposits over 30 percent, no written contract or estimate, no proof of insurance or license, door-to-door storm chasing after severe weather, pressure to sign immediately, offering unusually low prices, no physical business address, and unwillingness to provide references. Legitimate contractors like Best Roofing Now welcome scrutiny.',
  },
  {
    question: 'Should I get multiple roofing estimates?',
    answer:
      'Yes, always get at least 3 written estimates from licensed Charlotte NC roofing contractors. Compare them line by line including materials, labor, tear-off, disposal, underlayment, flashing, and warranty terms. The lowest price is not always the best value. Look for detailed, transparent estimates from contractors with strong reputations.',
  },
  {
    question: 'Does a roofing contractor need a license in NC?',
    answer:
      'Yes, North Carolina requires roofing contractors to hold a General Contractor license for projects over $30,000. For projects under $30,000, contractors need registration with the NC Licensing Board. Always verify license status at the NC Licensing Board website. Best Roofing Now is fully licensed, insured, and bonded in North Carolina.',
  },
  {
    question: 'What roofing certifications should I look for?',
    answer:
      'Look for manufacturer certifications like GAF Factory-Certified, CertainTeed ShingleMaster, or Owens Corning Preferred Contractor. These certifications mean the contractor has been trained on proper installation techniques and can offer extended manufacturer warranties up to 50 years. Best Roofing Now holds both GAF and CertainTeed certifications.',
  },
  {
    question: 'What warranty should a roofing contractor offer?',
    answer:
      'A reputable roofing contractor should offer a workmanship warranty of at least 5 to 10 years in addition to the manufacturer material warranty of 25 to 50 years. Best Roofing Now provides industry-leading workmanship warranties. Ensure all warranty terms are in writing before work begins and understand what is and is not covered.',
  },
  {
    question: 'Should I hire a local roofer or a national company?',
    answer:
      'Hire a local Charlotte roofing company for better accountability, faster response times, knowledge of local building codes and weather patterns, and easier warranty claims. Local companies have reputations to protect in the community. National chains often subcontract to local crews and add markup. Best Roofing Now is locally owned and operated.',
  },
  {
    question: 'What insurance should a roofing contractor carry?',
    answer:
      'A roofing contractor should carry general liability insurance of at least $1 million, workers compensation insurance covering all employees, and auto insurance for company vehicles. Ask for a certificate of insurance and verify it is current. If a contractor cannot provide proof of insurance, do not hire them.',
  },
  {
    question: 'Do roofers need to pull permits in Charlotte?',
    answer:
      'Yes, roof replacements in Charlotte NC and Mecklenburg County require a building permit. Your contractor should handle permit applications and ensure the work passes inspection. Unpermitted roofing work can create problems when selling your home, void insurance coverage, and result in fines. Best Roofing Now handles all permitting.',
  },
  {
    question: 'What does a roofing contract include?',
    answer:
      'A proper roofing contract should include a detailed scope of work, material specifications and brands, total cost with payment schedule, start and estimated completion dates, warranty terms for both labor and materials, permit responsibilities, cleanup and disposal provisions, and insurance certificates. Never sign a vague or incomplete contract.',
  },
  {
    question: 'How much deposit should I pay a roofer?',
    answer:
      'A reasonable deposit is 10 to 30 percent of the total project cost, with the balance due upon completion. Never pay more than one third upfront and never pay in full before work is completed and inspected. Best Roofing Now offers flexible payment terms and works with insurance companies for direct billing on covered claims.',
  },
  {
    question: 'Can I be home during a roof replacement?',
    answer:
      'Yes, you can stay home during a roof replacement. Expect significant noise from hammering and equipment, vibrations throughout the house, and debris in the yard. Remove fragile wall hangings and cover attic belongings. Most families find it comfortable to stay home but may prefer to be out during the loudest phases of tear-off and nailing.',
  },
  {
    question: 'How do I verify a roofing contractor license in NC?',
    answer:
      'Verify a North Carolina roofing contractor license at the NC Licensing Board for General Contractors website at nclbgc.org. Search by company name or license number. Verify the license is active, covers the correct trade, and has not been suspended or revoked. Also confirm workers compensation and liability insurance are current.',
  },
];

const materialsFaqs = [
  {
    question: 'What is the best roofing material for Charlotte NC?',
    answer:
      'Architectural asphalt shingles are the most popular and best overall value for Charlotte NC homes, offering 25 to 30 year lifespans, 130 mph wind resistance, and excellent curb appeal at $4.50 to $7.00 per square foot. For premium longevity, standing seam metal at $12 to $18 per square foot lasts 40 to 70 years and handles Charlotte storms exceptionally well.',
  },
  {
    question: 'What is the difference between 3-tab and architectural shingles?',
    answer:
      'Architectural shingles are thicker, more durable, and have a dimensional appearance compared to flat 3-tab shingles. Architectural shingles last 25 to 30 years versus 15 to 20 for 3-tab, resist winds up to 130 mph versus 60 mph, and offer better warranties. They cost about $1 more per square foot but are the industry standard for Charlotte homes.',
  },
  {
    question: 'How long do asphalt shingles last in Charlotte NC?',
    answer:
      'Asphalt shingles last 20 to 30 years in Charlotte NC depending on quality, installation, and maintenance. Architectural shingles from GAF or CertainTeed with proper ventilation and regular maintenance can reach 30 years. Charlotte heat, UV exposure, and storm activity are the primary factors that affect shingle lifespan.',
  },
  {
    question: 'What color roof is best for energy efficiency?',
    answer:
      'Lighter colored roofs reflect more solar radiation and can reduce cooling costs by 10 to 15 percent in Charlotte NC summers. White, light gray, and tan roofing materials are most energy efficient. Energy Star rated shingles and cool metal roofing with reflective coatings offer the best thermal performance. Dark roofs absorb more heat but may be preferred aesthetically.',
  },
  {
    question: 'What is the most durable roofing material?',
    answer:
      'Slate is the most durable roofing material lasting 75 to 200 years, followed by clay tile at 50 to 100 years, metal at 40 to 70 years, and architectural asphalt shingles at 25 to 30 years. For Charlotte NC, standing seam metal offers the best balance of durability, storm resistance, and cost effectiveness for residential homes.',
  },
  {
    question: 'Are impact-resistant shingles worth it in Charlotte?',
    answer:
      'Yes, impact-resistant shingles are worth the investment in Charlotte NC due to frequent hail storms. Class 4 impact-resistant shingles can earn insurance premium discounts of 5 to 28 percent in North Carolina. They cost 10 to 20 percent more than standard shingles but prevent costly hail damage repairs and provide peace of mind.',
  },
  {
    question: 'What type of underlayment is best?',
    answer:
      'Synthetic underlayment is the best choice for Charlotte NC roofs. It is lighter, stronger, and more water-resistant than traditional felt paper. Synthetic underlayment does not wrinkle or tear during installation and provides a reliable moisture barrier. For ice dam protection in valleys and eaves, self-adhering ice and water shield is recommended.',
  },
  {
    question: 'Can I install solar panels on any roof?',
    answer:
      'Most Charlotte NC roofs can support solar panels, but the roof should be in good condition with at least 10 years of remaining life. South-facing roof surfaces with minimal shading are ideal. Asphalt shingle and standing seam metal roofs are the easiest for solar installation. Best Roofing Now can assess your roof for solar readiness during a free inspection.',
  },
  {
    question: 'What is the best roofing material for hurricanes?',
    answer:
      'Standing seam metal roofing rated for 140+ mph winds is the best option for hurricane and severe storm resistance in Charlotte NC. Impact-resistant architectural shingles rated to 130 mph are the next best option. Proper installation with enhanced nailing patterns and sealed roof decking is just as important as material choice for storm protection.',
  },
  {
    question: 'How do I choose between GAF and CertainTeed shingles?',
    answer:
      'Both GAF and CertainTeed are top-tier shingle manufacturers with comparable quality and pricing. GAF Timberline HDZ is the best-selling shingle in America with excellent wind resistance. CertainTeed Landmark offers slightly more color options and a reputation for aesthetic appeal. Best Roofing Now is certified by both and can help you compare warranties and styles for your home.',
  },
  {
    question: 'What is a cool roof and does it save money?',
    answer:
      'A cool roof uses highly reflective materials or coatings that reflect sunlight and absorb less heat. In Charlotte NC summers, cool roofs can reduce surface temperature by 50 to 60 degrees and lower cooling costs by 10 to 15 percent. Energy Star rated shingles and light-colored metal roofs qualify. Cool roofs are especially beneficial for homes with poor attic insulation.',
  },
  {
    question: 'Are synthetic slate shingles a good option?',
    answer:
      'Synthetic slate shingles offer the appearance of natural slate at one third to one half the cost, weighing 75 percent less. They are made from recycled rubber or plastic and cost $8 to $14 per square foot in Charlotte NC. Synthetic slate lasts 40 to 50 years and is more impact resistant than natural slate. It is a strong option for homeowners who love the slate look.',
  },
  {
    question: 'What is the best roofing material for hail protection?',
    answer:
      'Class 4 impact-resistant shingles are the best option for hail protection in Charlotte NC. These shingles pass the UL 2218 test by withstanding a 2-inch steel ball dropped from 20 feet. They cost 10 to 20 percent more than standard shingles but can earn 5 to 28 percent insurance discounts in NC and prevent costly hail damage repairs.',
  },
];

const insuranceFaqs = [
  {
    question: 'Does homeowners insurance cover roof replacement?',
    answer:
      'Homeowners insurance covers roof replacement when damage is caused by a covered peril such as wind, hail, fallen trees, or fire. Normal wear and tear, neglect, and gradual deterioration are not covered. In Charlotte NC, most storm-related roof damage qualifies for insurance coverage. Best Roofing Now assists with the entire claims process.',
  },
  {
    question: 'How do I file a roof insurance claim in Charlotte?',
    answer:
      'File a roof insurance claim by documenting damage with photos, contacting your insurance company to open a claim, scheduling a free inspection with Best Roofing Now, meeting the insurance adjuster at your property, getting a detailed repair or replacement estimate, and reviewing the settlement. North Carolina law gives you 1 year from the damage date to file.',
  },
  {
    question: 'Will my insurance rates go up if I file a roof claim?',
    answer:
      'Filing a single roof claim for storm damage typically does not significantly increase insurance rates in North Carolina. However, multiple claims within a 3 to 5 year period can trigger premium increases or non-renewal. Storm damage claims are generally viewed more favorably than negligence-related claims. The cost of not filing often exceeds any potential rate increase.',
  },
  {
    question: 'What does my roof insurance deductible cost?',
    answer:
      'Roof insurance deductibles in Charlotte NC range from $500 to $5,000 or more. Many policies now have percentage-based deductibles of 1 to 5 percent of the insured value. For a $300,000 home with a 2 percent deductible, you would pay $6,000 out of pocket. Important: North Carolina law prohibits contractors from waiving or paying your deductible.',
  },
  {
    question: 'Can a roofer waive my insurance deductible?',
    answer:
      'No. In North Carolina, it is illegal for a roofing contractor to waive, absorb, or pay your insurance deductible. This practice constitutes insurance fraud. Any contractor who offers to waive your deductible is breaking the law and should not be trusted. Best Roofing Now operates with full transparency and legal compliance on every insurance job.',
  },
  {
    question: 'How long do I have to file a roof insurance claim in NC?',
    answer:
      'In North Carolina, you have 1 year from the date of damage to file a homeowners insurance claim for roof damage. However, you should file as soon as possible after discovering damage. Delays can lead to further deterioration, making it harder to prove the original cause and potentially reducing your settlement.',
  },
  {
    question: 'What does a roof insurance adjuster look for?',
    answer:
      'Insurance adjusters inspect for storm-related damage including missing, cracked, or dented shingles, hail impact marks on shingles and metal components, damaged flashing and vents, water intrusion evidence, and damage to gutters and downspouts. They also assess the overall roof condition and age. Having a roofing contractor present during the inspection can help ensure all damage is documented.',
  },
  {
    question: 'Should I meet my roofer with the insurance adjuster?',
    answer:
      'Yes, having your roofing contractor present during the insurance adjuster visit is highly recommended. An experienced contractor like Best Roofing Now can point out damage the adjuster might miss, provide accurate repair estimates, and serve as your advocate. This often results in a more complete and fair settlement.',
  },
  {
    question: 'What if my insurance claim is denied?',
    answer:
      'If your roof insurance claim is denied in North Carolina, request a written explanation, get an independent inspection from a licensed contractor, file a formal appeal with supporting documentation and photos, consider hiring a public adjuster for large claims, or contact the NC Department of Insurance if you believe the denial is unfair. Best Roofing Now can provide documentation to support your appeal.',
  },
  {
    question: 'Does insurance cover roof leaks?',
    answer:
      'Insurance covers roof leaks caused by sudden events like storms, hail, falling trees, or wind damage. Insurance does not cover leaks from gradual wear, aging, poor maintenance, or improper installation. If a storm caused the initial damage that led to a leak, the claim is typically covered. Document the damage promptly and contact your insurer.',
  },
  {
    question: 'What is a depreciation holdback on a roof claim?',
    answer:
      'A depreciation holdback is the portion of the insurance settlement the company withholds until repairs are completed. Insurance initially pays actual cash value, which accounts for your roof age and depreciation. Once you submit the final invoice showing work is done, insurance releases the withheld depreciation, bringing the total to replacement cost value.',
  },
  {
    question: 'Can I file a supplemental roof insurance claim?',
    answer:
      'Yes, if additional damage is discovered during repair, such as rotten decking found after tear-off, you can file a supplemental claim for the additional work. Your contractor provides documentation and photos of the hidden damage. Best Roofing Now handles supplemental claims regularly and documents all additional findings during the project.',
  },
  {
    question: 'Does insurance cover hail damage to my roof?',
    answer:
      'Yes, hail damage is a covered peril under virtually all homeowners insurance policies. Charlotte NC experiences frequent hail events that cause bruising, cracking, and granule loss on shingles. Even if damage is not visible from the ground, a professional inspection can reveal hail impacts. Best Roofing Now provides free hail damage inspections and documents all findings for your claim.',
  },
];

const maintenanceFaqs = [
  {
    question: 'How do I maintain my roof in Charlotte NC?',
    answer:
      'Maintain your Charlotte NC roof by scheduling annual professional inspections, keeping gutters clean and free of debris, trimming tree branches that overhang the roof, checking for and replacing damaged shingles promptly, ensuring attic ventilation is working properly, looking for moss or algae growth, and addressing any flashing issues around chimneys and vents.',
  },
  {
    question: 'How often should gutters be cleaned?',
    answer:
      'Clean gutters at least twice a year in Charlotte NC, once in late spring and once in late fall after leaves drop. Homes surrounded by pine trees may need quarterly cleaning. Clogged gutters cause water to back up under the roof edge, damaging fascia boards, soffits, and potentially the roof deck. Gutter guards reduce cleaning frequency significantly.',
  },
  {
    question: 'What causes black streaks on my roof?',
    answer:
      'Black streaks on roofs are caused by Gloeocapsa magma, a type of algae that thrives in Charlotte NC humidity. While not structurally harmful, algae discoloration reduces curb appeal and can lead to premature shingle deterioration. Algae-resistant shingles containing copper granules prevent growth. Existing streaks can be cleaned with a gentle bleach solution by a professional.',
  },
  {
    question: 'How do I prevent moss on my roof?',
    answer:
      'Prevent moss growth on your Charlotte NC roof by trimming overhanging trees to increase sunlight, ensuring proper roof ventilation, installing zinc or copper strips along the ridge, keeping gutters clean to prevent moisture buildup, and choosing algae-resistant shingles when replacing your roof. Never pressure wash a roof as it damages shingles.',
  },
  {
    question: 'Is it safe to walk on my roof?',
    answer:
      'Walking on a roof is not recommended for homeowners due to fall risk and potential shingle damage. Asphalt shingles can crack or lose granules when walked on, especially in hot weather when they soften. Leave roof inspections and repairs to trained professionals with proper safety equipment. Best Roofing Now provides free professional inspections.',
  },
  {
    question: 'How do I know if my roof is properly ventilated?',
    answer:
      'Signs of poor roof ventilation include excessive attic heat in summer above 120 degrees, ice dams in winter, moisture or condensation in the attic, peeling exterior paint near the roofline, and premature shingle deterioration. A properly ventilated Charlotte NC attic should have both intake vents at the soffits and exhaust vents at or near the ridge.',
  },
  {
    question: 'What is the best way to remove ice dams?',
    answer:
      'While ice dams are rare in Charlotte NC, they can occur during unusual cold snaps. Prevent them by ensuring proper attic insulation and ventilation. If ice dams form, use calcium chloride ice melt in stockings placed along the dam. Never use rock salt as it damages shingles. Never chip ice off the roof with tools. Call a professional for safe removal.',
  },
  {
    question: 'Can I pressure wash my roof?',
    answer:
      'Never pressure wash an asphalt shingle roof. High-pressure water strips protective granules, dramatically shortening roof life and voiding manufacturer warranties. For cleaning algae, moss, or stains, use a low-pressure soft wash with a 50/50 bleach and water solution applied gently. Metal roofs can tolerate slightly more pressure but still benefit from soft washing.',
  },
  {
    question: 'How do I check for roof damage after a storm?',
    answer:
      'After a storm in Charlotte NC, look for visible missing or damaged shingles from ground level, check gutters for granule accumulation, inspect the attic for water stains or daylight, examine siding and fences for hail dents as indicators of roof impact, and check for downed tree limbs on the roof. Schedule a free professional inspection with Best Roofing Now for a thorough assessment.',
  },
  {
    question: 'When should I replace my roof flashing?',
    answer:
      'Replace roof flashing when you see rust, corrosion, cracks, gaps, or lifted edges around chimneys, vents, skylights, or where the roof meets walls. Flashing deterioration is a leading cause of roof leaks. During a roof replacement, all flashing should be replaced with new material. Spot repairs for minor flashing issues cost $200 to $600.',
  },
  {
    question: 'How do I prepare my home for a roof replacement?',
    answer:
      'Prepare for a roof replacement by moving vehicles away from the house, removing wall decorations that might vibrate loose during hammering, covering items in the attic, trimming tree branches near the roof, ensuring clear access for the crew and dumpster, and letting neighbors know about the project. Best Roofing Now provides a detailed preparation checklist before every project.',
  },
  {
    question: 'What should I do if I find a roof leak?',
    answer:
      'If you find a roof leak, place a bucket under the drip, move valuables away from the area, take photos of the damage and the leak source if visible, check the attic for the entry point, and call a roofing professional immediately. Do not attempt to climb on a wet roof. Best Roofing Now offers emergency response and can provide temporary tarping to stop further damage.',
  },
  {
    question: 'How do I extend the lifespan of my roof?',
    answer:
      'Extend your roof lifespan by scheduling annual professional inspections, keeping gutters clean, trimming overhanging trees, ensuring proper attic ventilation and insulation, addressing minor repairs promptly before they worsen, removing debris and leaves from valleys and low spots, and treating algae or moss growth early. These steps can add 5 to 10 years to your roof life.',
  },
  {
    question: 'What causes attic condensation and how does it affect my roof?',
    answer:
      'Attic condensation is caused by warm moist air rising from living spaces into a poorly ventilated attic. In Charlotte NC winters, this moisture condenses on cold roof decking, causing mold growth, wood rot, and premature shingle failure from below. Proper soffit and ridge ventilation combined with vapor barriers eliminates condensation problems.',
  },
  {
    question: 'Should I remove debris from my roof after a storm?',
    answer:
      'Yes, remove debris like tree branches, leaves, and blown items after a storm, but only from ground level using a leaf blower or by hiring a professional. Walking on a damaged roof is dangerous and can cause additional damage. Document debris with photos before removal for your insurance claim. Schedule a free professional inspection with Best Roofing Now.',
  },
];

const technicalFaqs = [
  {
    question: 'What is a roofing square?',
    answer:
      'A roofing square is a unit of measurement equal to 100 square feet of roof area. Roofing materials are priced and sold by the square. A typical Charlotte NC home has 20 to 30 roofing squares. When contractors quote per square, multiply by the number of squares on your roof to estimate total material cost.',
  },
  {
    question: 'What is roof pitch and why does it matter?',
    answer:
      'Roof pitch is the steepness of a roof expressed as a ratio such as 6/12, meaning 6 inches of rise for every 12 inches of horizontal run. Pitch matters because steeper roofs require more material, more labor time, additional safety equipment, and specialized installation techniques. Roofs steeper than 8/12 significantly increase installation costs.',
  },
  {
    question: 'What is a drip edge and do I need one?',
    answer:
      'A drip edge is a metal flashing installed along the roof edges that directs water away from the fascia and into the gutters. Charlotte NC building code requires drip edge on all new roof installations. It prevents water damage to the underlying wood structure and costs very little compared to the damage it prevents.',
  },
  {
    question: 'What is the purpose of roof underlayment?',
    answer:
      'Roof underlayment is a waterproof or water-resistant barrier installed between the roof deck and shingles. It serves as a secondary moisture barrier if shingles are compromised by wind or damage. Synthetic underlayment is the current standard in Charlotte NC, offering superior protection compared to traditional 15-pound or 30-pound felt paper.',
  },
  {
    question: 'How many layers of shingles can a roof have?',
    answer:
      'Charlotte NC building code allows a maximum of 2 layers of asphalt shingles. However, most roofing professionals including Best Roofing Now recommend a complete tear-off down to the decking before installing new shingles. This allows inspection and repair of the roof deck, provides a flat installation surface, and avoids excess weight on the structure.',
  },
  {
    question: 'What is a roof valley and how is it sealed?',
    answer:
      'A roof valley is the angle formed where two sloping roof sections meet, channeling water toward the gutters. Valleys are sealed using either closed-cut, open metal, or woven shingle methods. In Charlotte NC with heavy rain events, open metal valleys with ice and water shield underlayment provide the best protection against leaks.',
  },
  {
    question: 'What causes roof sagging?',
    answer:
      'Roof sagging is caused by structural issues including water damage weakening the roof deck, undersized or overspaced rafters, excessive weight from too many shingle layers, long-term moisture damage from poor ventilation, and foundation settling. Roof sagging requires immediate professional evaluation as it indicates potential structural failure. Call Best Roofing Now for an emergency inspection.',
  },
  {
    question: 'What is the difference between soffit and fascia?',
    answer:
      'Soffit is the underside of the roof overhang, typically containing ventilation openings that allow airflow into the attic. Fascia is the vertical board running along the roof edge where gutters are mounted. Both protect the roof structure from water and pests. Damaged soffit and fascia should be repaired during roof replacement to ensure proper ventilation and drainage.',
  },
  {
    question: 'Do I need a ridge vent on my roof?',
    answer:
      'A ridge vent is highly recommended for Charlotte NC roofs. It runs along the roof peak and allows hot, moist air to escape from the attic. Combined with soffit vents for intake, a ridge vent creates continuous airflow that reduces attic temperatures by 20 to 40 degrees, prevents moisture buildup, and extends shingle life. It is the most efficient exhaust ventilation method.',
  },
  {
    question: 'What is step flashing and where is it used?',
    answer:
      'Step flashing is a series of L-shaped metal pieces installed where a roof plane meets a vertical wall, such as along dormers, chimneys, and second-story sidewalls. Each piece overlaps the one below it, channeling water down the roof surface. Improper step flashing is a leading cause of leaks. Best Roofing Now installs all flashing to manufacturer specifications.',
  },
  {
    question: 'What is a roof cricket and when is it needed?',
    answer:
      'A roof cricket, also called a saddle, is a peaked structure built behind a chimney or other roof penetration to divert water around it. Building code in Charlotte NC requires a cricket on the upslope side of chimneys wider than 30 inches. Without a cricket, water and debris accumulate behind the chimney causing leaks and deterioration.',
  },
  {
    question: 'What is R-value and how does it relate to my roof?',
    answer:
      'R-value measures insulation thermal resistance. Higher R-values mean better insulation. The NC building code recommends R-38 to R-60 for attic insulation in the Charlotte area. Proper attic insulation works with roof ventilation to regulate temperature, prevent ice dams, reduce energy costs, and extend shingle life. Best Roofing Now assesses insulation during inspections.',
  },
  {
    question: 'What causes granule loss on shingles?',
    answer:
      'Granule loss on shingles is caused by hail impact, aging and UV degradation, foot traffic, power washing, manufacturing defects, and extreme temperature fluctuations. Some granule loss in new shingles is normal. Excessive granule loss exposes the asphalt layer to UV damage, accelerating deterioration. Check your gutters for granule accumulation as an early warning sign.',
  },
  {
    question: 'What is attic ventilation and why is it important?',
    answer:
      'Attic ventilation is a system of intake and exhaust vents that creates airflow through your attic. Intake vents in the soffits bring in cool air. Exhaust vents at the ridge or near the peak expel hot, moist air. Proper ventilation prevents heat buildup that degrades shingles, stops moisture condensation that causes mold and rot, reduces cooling costs, and prevents ice dams.',
  },
  {
    question: 'What is ice and water shield?',
    answer:
      'Ice and water shield is a self-adhering waterproof membrane installed on vulnerable roof areas before shingles. It is required in Charlotte NC along eaves, in valleys, around chimneys, skylights, and other penetrations. Unlike standard underlayment, ice and water shield seals around nail penetrations, providing backup waterproofing if shingles are compromised by wind or ice.',
  },
  {
    question: 'What is the difference between OSB and plywood roof decking?',
    answer:
      'OSB (oriented strand board) and plywood are both used for roof decking. OSB costs 3 to 5 dollars less per sheet and is the most common choice. Plywood handles moisture slightly better and has more structural rigidity. Both perform well when properly installed and ventilated. In Charlotte NC, most new construction and reroofing uses OSB due to cost and availability.',
  },
  {
    question: 'How does roof slope affect drainage?',
    answer:
      'Roof slope directly affects water drainage speed and capacity. Steeper slopes shed water faster, reducing the risk of leaks and ponding. Low-slope roofs below 3/12 pitch require special waterproof membranes instead of standard shingles. Most Charlotte NC homes have slopes between 4/12 and 8/12, which work well with standard asphalt shingles and metal roofing.',
  },
];

// All FAQs combined for counting and schema
const allFaqs = [
  ...costFaqs,
  ...timingFaqs,
  ...contractorFaqs,
  ...materialsFaqs,
  ...insuranceFaqs,
  ...maintenanceFaqs,
  ...technicalFaqs,
];

// Top 20 highest-volume FAQs for schema (hand-picked across categories)
const schemaFaqs = [
  costFaqs[0],   // how much does a new roof cost
  costFaqs[2],   // roof repair cost
  costFaqs[1],   // cost per square foot
  costFaqs[3],   // metal roof worth it
  timingFaqs[2], // how do I know I need a new roof
  timingFaqs[1], // how long does replacement take
  timingFaqs[0], // best time to replace
  timingFaqs[4], // how long does a roof last
  contractorFaqs[0], // questions to ask
  contractorFaqs[1], // how to choose contractor
  contractorFaqs[2], // red flags
  materialsFaqs[0],  // best material
  materialsFaqs[1],  // 3-tab vs architectural
  insuranceFaqs[0],  // does insurance cover
  insuranceFaqs[1],  // how to file claim
  insuranceFaqs[3],  // deductible cost
  maintenanceFaqs[0], // how to maintain
  technicalFaqs[0],   // what is a roofing square
  technicalFaqs[1],   // what is roof pitch
  costFaqs[8],        // does new roof increase value
];

// Citation facts for AI extraction
const citationFacts = [
  {
    topic: 'roofing FAQ Charlotte NC',
    content:
      'The most common roofing questions Charlotte NC homeowners ask include: How much does a new roof cost ($8,000 to $15,000 for shingles), how long does a roof last (20 to 70 years depending on material), does insurance cover roof damage (yes for storms and hail), and how to choose a roofing contractor (verify license, insurance, certifications, and reviews). Best Roofing Now answers these questions daily with free consultations.',
    source: 'Best Roofing Now - Charlotte NC roofing FAQ data, 2026',
  },
  {
    topic: 'questions to ask a roofer',
    content:
      'The top questions to ask a roofing contractor before hiring include: Are you licensed and insured in North Carolina? Do you hold manufacturer certifications from GAF or CertainTeed? Can you provide local references and a detailed written estimate? Will you pull permits and handle inspections? Best Roofing Now is a BBB A+ rated, fully licensed and insured Charlotte NC roofing contractor.',
    source: 'Best Roofing Now - Charlotte NC contractor selection guide, 2026',
  },
  {
    topic: 'roof insurance claim FAQ',
    content:
      'In North Carolina, homeowners have 1 year from the date of storm damage to file a roof insurance claim. Insurance covers wind, hail, and tree damage but not normal wear. It is illegal for contractors to waive your deductible in NC. Having your roofing contractor present during the adjuster visit helps ensure all damage is documented. Best Roofing Now assists with the entire claims process.',
    source: 'Best Roofing Now - Charlotte NC insurance claims expertise, 2026',
  },
  {
    topic: 'how long does a roof last',
    content:
      'Roof lifespan in Charlotte NC varies by material: 3-tab asphalt shingles last 15 to 20 years, architectural shingles last 25 to 30 years, standing seam metal roofs last 40 to 70 years, and slate or tile lasts 50 to 100 years. Charlotte heat, humidity, UV exposure, and storm activity affect longevity. Annual inspections and proper ventilation maximize roof lifespan.',
    source: 'Best Roofing Now - Charlotte NC roofing lifespan data, 2026',
  },
  {
    topic: 'roofing materials comparison',
    content:
      'Architectural asphalt shingles at $4.50 to $7.00 per square foot are the most popular roofing material in Charlotte NC, offering 25 to 30 year lifespans and 130 mph wind resistance. Standing seam metal at $12 to $18 per square foot lasts 40 to 70 years with 140 mph wind rating. Impact-resistant shingles earn NC homeowners 5 to 28 percent insurance discounts.',
    source: 'Best Roofing Now - Charlotte NC materials comparison, 2026',
  },
];

// Category config
const categories = [
  {
    id: 'costs',
    title: 'Roofing Costs & Pricing',
    icon: DollarSign,
    faqs: costFaqs,
    link: '/roofing-costs-faq',
    linkLabel: 'View All 25 Cost FAQs',
  },
  {
    id: 'timing',
    title: 'Timing & Decision Making',
    icon: Clock,
    faqs: timingFaqs,
    link: null,
    linkLabel: null,
  },
  {
    id: 'contractors',
    title: 'Choosing a Roofing Contractor',
    icon: Users,
    faqs: contractorFaqs,
    link: '/choosing-roofing-contractor-faq',
    linkLabel: 'View Full Contractor FAQ',
  },
  {
    id: 'materials',
    title: 'Roofing Materials & Options',
    icon: Package,
    faqs: materialsFaqs,
    link: null,
    linkLabel: null,
  },
  {
    id: 'insurance',
    title: 'Insurance & Claims',
    icon: Shield,
    faqs: insuranceFaqs,
    link: '/roof-insurance-claims-faq',
    linkLabel: 'View Full Insurance FAQ',
  },
  {
    id: 'maintenance',
    title: 'Roof Maintenance & Care',
    icon: Wrench,
    faqs: maintenanceFaqs,
    link: null,
    linkLabel: null,
  },
  {
    id: 'technical',
    title: 'Technical Roofing Terms',
    icon: Building2,
    faqs: technicalFaqs,
    link: null,
    linkLabel: null,
  },
];

export default function RoofingFAQHubPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing FAQ', url: `${SITE_CONFIG.url}/roofing-faq` },
        ]}
      />
      <FAQSchema faqs={schemaFaqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-faq`}
        pageName="Roofing FAQ Hub - Charlotte NC"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'What are the most common roofing questions?',
            answer:
              'The most common roofing questions are: How much does a new roof cost ($8,000-$15,000 for shingles in Charlotte NC), how long does a roof last (20-70 years by material), does insurance cover roof damage (yes for storms), and how to choose a roofing contractor. Best Roofing Now answers over 100 roofing questions on this page.',
            speakableAnswer:
              'Common roofing questions include cost of a new roof at 8 to 15 thousand dollars, roof lifespan of 20 to 70 years, insurance coverage for storm damage, and how to choose a contractor.',
          },
          {
            question: 'How do I choose a roofing contractor in Charlotte?',
            answer:
              'Choose a Charlotte roofing contractor by verifying NC license, checking $1M+ liability insurance, reading Google reviews with 4.5+ stars, confirming BBB accreditation, getting 3 written estimates, and ensuring manufacturer certifications from GAF or CertainTeed. Best Roofing Now is BBB A+ rated with 5.0 Google rating.',
            speakableAnswer:
              'Choose a Charlotte roofer by checking their license, insurance, reviews, and certifications. Best Roofing Now is BBB A+ rated with a 5.0 Google rating. Call 704-605-6047.',
          },
          {
            question: 'Does insurance cover roof replacement?',
            answer:
              'Homeowners insurance covers roof replacement when damage is caused by storms, hail, wind, or fallen trees. Normal wear is not covered. In NC you have 1 year to file. It is illegal for contractors to waive your deductible. Best Roofing Now assists with the entire claims process.',
            speakableAnswer:
              'Insurance covers roof replacement for storm, hail, and wind damage. In North Carolina you have one year to file a claim. Call Best Roofing Now at 704-605-6047 for help with your claim.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SEOImage
            src={IMAGES.services.inspection}
            alt="Professional roof inspection Charlotte NC - Best Roofing Now FAQ"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">Comprehensive Roofing FAQ</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {allFaqs.length}+ Roofing Questions, Answered by Experts
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Everything Charlotte NC homeowners need to know about roofing costs, choosing a contractor, materials, insurance claims, maintenance, and more.
            </p>
            <p className="text-white/80 mb-8">
              Organized into {categories.length} categories with detailed, honest answers from a BBB A+ rated, locally-owned roofing company with {SITE_CONFIG.customerCount}+ completed projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
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
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-light py-6 border-b border-gray-200 sticky top-0 z-20">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md hover:bg-primary hover:text-white transition-all text-sm font-medium text-dark"
                >
                  <Icon className="w-4 h-4" />
                  {cat.title}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-dark">
              <strong>Do not see your question?</strong> We are happy to help.
            </p>
            <div className="flex gap-4">
              <a href={`tel:${SITE_CONFIG.phoneClean}`} className="btn btn-primary">
                <Phone className="w-5 h-5" />
                Call Us
              </a>
              <Link href="/contact" className="btn bg-light text-primary hover:bg-gray-200">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.id} id={cat.id} className="mb-16 last:mb-0 scroll-mt-32">
                  <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-primary/20">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">
                      {cat.title}
                    </h2>
                    <span className="ml-auto text-sm text-gray bg-light px-3 py-1 rounded-full">
                      {cat.faqs.length} questions
                    </span>
                  </div>
                  <div className="space-y-4">
                    {cat.faqs.map((faq, index) => (
                      <details
                        key={index}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition group"
                      >
                        <summary className="p-6 cursor-pointer list-none">
                          <div className="flex items-start gap-3">
                            <HelpCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="font-bold text-dark pr-8">{faq.question}</span>
                            <ArrowRight className="w-5 h-5 text-gray ml-auto flex-shrink-0 transform group-open:rotate-90 transition-transform" />
                          </div>
                        </summary>
                        <div className="px-6 pb-6 pt-0">
                          <p className="text-gray pl-8">{faq.answer}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                  {cat.link && (
                    <div className="mt-4 text-center">
                      <Link
                        href={cat.link}
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition"
                      >
                        {cat.linkLabel}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Citation Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <CitationSection
              heading="Expert Roofing Facts &mdash; Charlotte NC"
              citations={citationFacts}
            />
          </div>
        </div>
      </section>

      {/* Category Pages */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Explore In-Depth FAQ Pages
            </h2>
            <p className="text-gray text-lg mb-8">
              Dive deeper into specific roofing topics with our detailed FAQ guides.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/roofing-costs-faq"
                className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition group"
              >
                <DollarSign className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition">
                  Roofing Cost FAQ
                </h3>
                <p className="text-gray text-sm">
                  25 detailed cost questions with Charlotte NC pricing
                </p>
              </Link>
              <Link
                href="/choosing-roofing-contractor-faq"
                className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition group"
              >
                <Users className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition">
                  Choosing a Contractor FAQ
                </h3>
                <p className="text-gray text-sm">
                  12 questions plus red flags and 10 questions to ask
                </p>
              </Link>
              <Link
                href="/roof-insurance-claims-faq"
                className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition group"
              >
                <Shield className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition">
                  Insurance Claims FAQ
                </h3>
                <p className="text-gray text-sm">
                  10 insurance questions with NC-specific rules
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Stats */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">
              Why Charlotte Homeowners Trust Our Expertise
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-accent mb-2">{allFaqs.length}+</div>
                <div className="text-gray text-sm">Questions Answered</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-accent mb-2">5.0</div>
                <div className="text-gray text-sm">Google Rating</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-accent mb-2">A+</div>
                <div className="text-gray text-sm">BBB Rating</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-gray text-sm">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We are here to help. Contact us anytime and we will give you honest, straightforward
            answers about your roofing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-accent hover:bg-accent-dark text-white"
            >
              <Phone className="w-5 h-5" />
              {SITE_CONFIG.phone}
            </a>
            <Link
              href="/contact"
              className="btn bg-white text-primary hover:bg-light"
            >
              Request Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
