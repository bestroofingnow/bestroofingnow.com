import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  BookOpen,
  ArrowRight,
  CheckCircle,
  Phone,
  Shield,
  Star,
  Home,
  Layers,
  AlertTriangle,
  Wrench,
  DollarSign,
  Search,
  Calendar,
  ThermometerSun,
  Droplets,
  Wind,
  Award,
  FileText,
  Hammer,
  ClipboardCheck,
  Sun,
  Snowflake,
  Leaf,
  CloudRain,
  MapPin,
  Users,
  BadgeCheck,
  HelpCircle,
  TrendingUp,
  Zap,
  Ruler,
  TreePine,
  Waves,
  Building2,
  Sparkles,
  Lock,
  Eye,
  Calculator,
  Megaphone,
  Heart,
  Clock,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { FAQ } from '@/components/sections/FAQ';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
  ItemListSchema,
  LocalBusinessSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DirectoryCitations } from '@/components/ui/DirectoryCitations';
import { CityGeoSection } from '@/components/sections/CityGeoSection';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { EstimateButton } from '@/components/estimate';

// ============================================================
// METADATA
// ============================================================
export const metadata: Metadata = {
  title: 'Lake Norman Roofing Guide (2026)',
  description:
    'The complete Lake Norman roofing guide for 2026. Costs, materials, luxury roofing, synthetic shingles, metal roofs, waterfront challenges, storm damage, HOA rules, maintenance, and 50 FAQs answered by LKN\'s top-rated roofer.',
  keywords: [
    'lake norman roofing guide',
    'lake norman roofing guide 2026',
    'roofing lake norman nc',
    'lake norman roof replacement guide',
    'lake norman roofing costs',
    'luxury roofing lake norman',
    'synthetic roofing lake norman nc',
    'metal roofing lake norman nc',
    'waterfront roofing lake norman',
    'lake norman roof maintenance',
    'lake norman roofer',
    'best roofer lake norman nc',
    'lake norman roofing company',
    'mooresville roofing guide',
    'cornelius roofing guide',
    'davidson roofing guide',
    'denver nc roofing guide',
    'lake norman hoa roofing requirements',
    'lake norman storm damage roof',
    'lake norman roof repair',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/lake-norman-roofing-guide`,
  },
  openGraph: {
    title: 'The Complete Lake Norman Roofing Guide (2026) | Everything LKN Homeowners Need to Know',
    description:
      'The definitive 2026 guide to roofing on Lake Norman. Costs, materials, luxury & synthetic options, waterfront challenges, storm damage, HOA rules, maintenance — plus 50 FAQs answered by Lake Norman\'s most trusted roofer.',
    url: `${SITE_CONFIG.url}/lake-norman-roofing-guide`,
    type: 'article',
    images: [
      {
        url: IMAGES.houses.modern1,
        width: 1200,
        height: 630,
        alt: 'Lake Norman roofing guide 2026 - complete homeowner resource by Best Roofing Now',
      },
    ],
  },
};

// ============================================================
// 50 LAKE NORMAN FAQS
// ============================================================
const lakeNormanFAQs = [
  // === COSTS & PRICING (1-10) ===
  {
    question: 'How much does a new roof cost on Lake Norman in 2026?',
    answer:
      'A new roof on Lake Norman costs between $10,000 and $60,000+ in 2026, depending on home size, material, and complexity. Standard homes in Mooresville or Denver range from $10,000 to $18,000 for architectural shingles. Waterfront homes on The Peninsula or Northington typically cost $20,000 to $40,000 due to larger footprints, steeper pitches, and premium materials. Luxury estates with slate, copper, or designer shingles can exceed $60,000. Best Roofing Now provides free, no-obligation estimates for all Lake Norman communities.',
  },
  {
    question: 'Why does roofing cost more on Lake Norman than in Charlotte?',
    answer:
      'Lake Norman roofing costs run 15-30% higher than Charlotte metro averages for several reasons: waterfront homes tend to be larger (3,000-6,000+ sq ft), steeper roof pitches are common on luxury lakefront properties, HOA requirements often mandate premium materials, lake-effect winds demand higher wind-rated products, and access challenges on hillside lots increase labor costs. The investment is justified by the higher property values and stricter quality standards in LKN communities.',
  },
  {
    question: 'How much does a metal roof cost on Lake Norman?',
    answer:
      'Standing seam metal roofing on Lake Norman costs $15,000 to $45,000 for most homes. A 2,000 sq ft home typically runs $18,000-$28,000 installed. Waterfront estates with complex rooflines can reach $40,000-$60,000. While the upfront cost is higher than shingles, metal roofs last 40-70 years, reduce cooling costs by up to 25%, and require minimal maintenance — making them increasingly popular with Lake Norman homeowners who plan to stay long-term.',
  },
  {
    question: 'What is the cost of synthetic slate roofing on Lake Norman?',
    answer:
      'Synthetic slate roofing on Lake Norman costs $12,000 to $35,000 for a typical home, or approximately $9-$16 per square foot installed. This is roughly half the cost of natural slate ($20-$40 per sq ft) while delivering a nearly identical appearance, better impact resistance, and a 50-year warranty. Synthetic slate is rapidly becoming the preferred choice for Lake Norman luxury homes because it provides the upscale look HOAs require without the structural reinforcement natural slate demands.',
  },
  {
    question: 'Does a new roof increase my Lake Norman home value?',
    answer:
      'Yes. According to the National Association of Realtors, a new roof returns 60-70% of its cost at resale. On Lake Norman, where average home prices exceed $500,000 and waterfront properties routinely sell for $1M+, the return can be even higher because buyers in this market expect move-in-ready condition. Keller Williams Lake Norman agents confirm that homes with aging roofs sit on the market 30-60 days longer and often sell $15,000-$30,000 below asking price. Best Roofing Now is a preferred roofing contractor for Keller Williams Lake Norman, so we understand what buyers and agents look for.',
  },
  {
    question: 'Are there financing options for Lake Norman roof replacement?',
    answer:
      'Best Roofing Now offers multiple financing options for Lake Norman homeowners: 0% interest for 12-18 months, low monthly payments with terms up to 144 months, no prepayment penalties, and quick approval (often same-day). We also accept insurance claim proceeds and help coordinate the process. Many Lake Norman homeowners choose financing even when they can pay cash, preserving liquidity for other home improvements or investments.',
  },
  {
    question: 'How much does roof repair cost on Lake Norman?',
    answer:
      'Minor roof repairs on Lake Norman range from $300 to $1,500, while moderate repairs (larger leak areas, flashing replacement, partial re-shingling) cost $1,500 to $5,000. Major structural repairs can reach $5,000-$10,000. Emergency tarping after storm damage costs $500-$1,500. Best Roofing Now provides free inspections to determine whether repair or replacement is the better investment for your specific situation.',
  },
  {
    question: 'Does homeowners insurance cover roof damage on Lake Norman?',
    answer:
      'Yes, homeowners insurance typically covers roof damage from sudden events like hailstorms, wind, fallen trees, and lightning — all common on Lake Norman. It does not cover normal wear, neglect, or age-related deterioration. Most Lake Norman policies have deductibles of $1,000-$5,000. Best Roofing Now helps Lake Norman homeowners document damage, file claims, and meet with adjusters to ensure fair settlements. We have helped hundreds of LKN families navigate the insurance process successfully.',
  },
  {
    question: 'Can I get an insurance discount with impact-resistant shingles on Lake Norman?',
    answer:
      'Yes. Installing Class 4 impact-resistant shingles (such as GAF Armor Shield II or CertainTeed NorthGate) qualifies Lake Norman homeowners for insurance premium discounts of 10-28%, depending on your carrier. On a $3,000/year premium, that saves $300-$840 annually — potentially paying back the upgrade cost within 5-8 years. Given Lake Norman\'s exposure to hail and severe thunderstorms, we strongly recommend Class 4 shingles for all waterfront properties.',
  },
  {
    question: 'What is the average cost per square foot for roofing on Lake Norman?',
    answer:
      'Roofing costs per square foot on Lake Norman in 2026: 3-tab asphalt shingles $3.50-$5.50, architectural shingles $5.00-$8.00, impact-resistant shingles $7.00-$11.00, standing seam metal $10.00-$16.00, synthetic slate $9.00-$16.00, natural slate $20.00-$40.00, copper $25.00-$45.00, and cedar shake $8.00-$14.00. These prices include materials, labor, tear-off, disposal, and permits. Actual cost depends on roof pitch, accessibility, and complexity.',
  },
  // === MATERIALS (11-20) ===
  {
    question: 'What is the best roofing material for Lake Norman homes?',
    answer:
      'The best roofing material depends on your Lake Norman home type and budget. For most homes, architectural shingles (GAF Timberline HDZ or CertainTeed Landmark) offer the best value at $5-$8/sq ft with 25-30 year lifespans. For waterfront homes, Class 4 impact-resistant shingles provide superior storm protection with insurance discounts. For luxury estates, synthetic slate or standing seam metal deliver premium aesthetics with 50+ year lifespans. Best Roofing Now is certified by GAF, CertainTeed, and Owens Corning to help you choose the ideal material.',
  },
  {
    question: 'What are synthetic roofing shingles and are they good for Lake Norman?',
    answer:
      'Synthetic roofing shingles are engineered polymer composites that replicate the appearance of natural materials like slate, cedar shake, or tile — at a fraction of the weight and cost. They are excellent for Lake Norman because they resist impact damage (Class 4 rated), tolerate high humidity without moss or rot, weigh 75% less than natural slate (no structural reinforcement needed), carry 50-year warranties, and are available in colors and profiles that satisfy even the strictest HOA architectural committees. Leading brands include DaVinci Roofscapes, Brava Roof Tile, and CertainTeed Symphony.',
  },
  {
    question: 'Is synthetic slate as good as real slate for Lake Norman homes?',
    answer:
      'Synthetic slate outperforms natural slate in several key areas for Lake Norman: it weighs 75% less (no need for structural reinforcement), has superior impact resistance (Class 4 vs Class 1-2 for natural slate), costs 40-60% less installed, is easier and faster to install (reducing labor costs), and carries 50-year transferable warranties. The visual difference is minimal — most people cannot distinguish quality synthetic slate from natural at normal viewing distances. The one advantage natural slate retains is its 100+ year lifespan, but for most Lake Norman homeowners, a 50-year synthetic warranty covers their ownership horizon.',
  },
  {
    question: 'What is the best metal roof for Lake Norman waterfront homes?',
    answer:
      'Standing seam metal roofing is the best metal option for Lake Norman waterfront homes. The concealed fastener system prevents water penetration, the continuous panels resist wind uplift (rated to 140+ mph), and the smooth surface sheds debris from lakeside trees. Galvalume or aluminum panels are recommended over steel for waterfront properties because they resist corrosion from lake-effect moisture. Popular colors on Lake Norman include Charcoal Gray, Burnished Slate, and Dark Bronze, which complement both modern and traditional lakefront architecture.',
  },
  {
    question: 'Are cedar shake roofs a good choice for Lake Norman?',
    answer:
      'Cedar shake can work on Lake Norman but requires more maintenance than in drier climates. Lake Norman\'s high humidity (60-80% average) promotes moss, mildew, and accelerated weathering on cedar. If you love the natural cedar look, consider CeDUR synthetic cedar shake instead — it provides the same distinctive appearance with Class A fire rating, Class 4 impact resistance, and zero maintenance. Several homes in The Peninsula and Northington have successfully transitioned from natural cedar to CeDUR synthetic with HOA approval.',
  },
  {
    question: 'What is a cool roof and does it help on Lake Norman?',
    answer:
      'A cool roof uses reflective materials or coatings to reflect more sunlight and absorb less heat than a standard roof. On Lake Norman, where summer temperatures regularly exceed 90 degrees F, a cool roof can reduce attic temperatures by 30-50 degrees and lower cooling costs by 10-25%. Light-colored metal roofs, white membrane roofing, and reflective shingle options (like GAF Timberline CS Cool Series) all qualify. The energy savings are especially significant for Lake Norman\'s larger homes with extensive roof surfaces.',
  },
  {
    question: 'What are designer shingles and who uses them on Lake Norman?',
    answer:
      'Designer shingles are premium asphalt shingles engineered to mimic the look of natural slate, cedar, or tile at a lower cost. They feature thicker profiles, deeper shadow lines, and enhanced color blends. Popular Lake Norman choices include GAF Grand Canyon (wood shake look), CertainTeed Grand Manor (slate look), and Owens Corning Berkshire (slate look). These cost $8-$14 per square foot — double standard architectural shingles but a fraction of natural materials. They are especially popular in Lake Norman communities with HOA aesthetic requirements.',
  },
  {
    question: 'What roofing materials do Lake Norman HOAs typically require?',
    answer:
      'Lake Norman HOA requirements vary by community but commonly mandate: minimum architectural-grade shingles (no 3-tab), specific color palettes (earth tones, grays, slate-inspired), minimum 30-year warranty products, and in luxury communities, premium materials like designer shingles, synthetic slate, or standing seam metal. The Peninsula, Northington, The Point, Jetton Park, and Governors Island typically have the strictest requirements. Best Roofing Now works directly with your HOA architectural review committee to ensure material selections meet all guidelines before ordering.',
  },
  {
    question: 'What is the lifespan of different roofing materials on Lake Norman?',
    answer:
      'Expected roof lifespans on Lake Norman: 3-tab asphalt shingles 15-20 years, architectural shingles 25-30 years, impact-resistant shingles 30-50 years, designer shingles 30-40 years, standing seam metal 40-70 years, synthetic slate 50+ years, natural slate 75-100+ years, copper 70-100+ years, cedar shake 20-30 years (less in humid lakeside conditions), and flat/TPO/EPDM 20-30 years. Lake Norman\'s climate — high humidity, UV exposure, and storm frequency — tends to reduce lifespans by 10-15% compared to manufacturer estimates unless roofs receive regular professional maintenance.',
  },
  {
    question: 'Can I install solar panels on my Lake Norman roof?',
    answer:
      'Yes, Lake Norman is excellent for solar due to North Carolina\'s favorable solar incentives and 213 average sunny days per year. Metal roofing is the ideal substrate for solar panels because clamp-on mounting systems attach without penetrating the roof surface. If you are planning both a new roof and solar, coordinate the installation to avoid having to remove panels later for roof work. Best Roofing Now partners with solar installers to provide integrated roof-and-solar solutions for Lake Norman homeowners.',
  },
  // === LAKE NORMAN SPECIFIC (21-30) ===
  {
    question: 'What makes roofing different on Lake Norman compared to other areas?',
    answer:
      'Lake Norman creates a unique microclimate that affects roofing: lake-effect winds are 10-20% stronger than inland areas (especially on the western shore), humidity from the 32,000-acre lake accelerates organic growth on roofs, temperature fluctuations are more extreme near the water, waterfront lots often have steeper terrain requiring specialized access equipment, larger home sizes mean more complex rooflines, and HOA restrictions are among the strictest in the Charlotte metro. These factors require a roofer with specific Lake Norman experience — not just any Charlotte contractor.',
  },
  {
    question: 'Which Lake Norman communities does Best Roofing Now serve?',
    answer:
      'Best Roofing Now serves every Lake Norman community across Mooresville, Cornelius, Davidson, Huntersville, Denver, Sherrills Ford, and Statesville. We have completed projects in The Peninsula, The Point, Northington, Jetton Park, Birkdale Village area, Governors Island, Pinnacle at Lake Norman, Lake Norman Estates, River Run, Norman Estates, Westmoreland, Sail View, and dozens more. As members of the Lake Norman Chamber of Commerce, LKN Connect Community, and the Lake Norman Small Business Network (LKN SBN), we are deeply invested in the Lake Norman community — not just passing through for a job.',
  },
  {
    question: 'Does lake proximity affect how long my roof lasts?',
    answer:
      'Yes. Homes within 500 feet of Lake Norman\'s shoreline experience higher humidity, more wind exposure, and increased UV reflection off the water surface. These factors can reduce roof lifespan by 15-20% compared to identical materials on inland homes. To maximize longevity on waterfront properties, we recommend algae-resistant shingles, enhanced ventilation systems, annual professional inspections, and proactive gutter maintenance. Standing seam metal or synthetic slate are the best long-term materials for lakefront homes because they are impervious to moisture damage.',
  },
  {
    question: 'How do lake-effect winds affect my roof on Lake Norman?',
    answer:
      'Lake Norman\'s 32,000-acre surface creates wind corridors that intensify gusts, particularly on the western and southern shores. During thunderstorms, wind speeds over the lake can be 10-20% higher than inland readings. This means roofing materials must meet higher wind ratings — we recommend minimum 130 mph wind resistance for all Lake Norman homes and 150 mph for exposed waterfront properties. Proper installation with six-nail patterns (instead of four), starter strip adhesion, and hip-and-ridge capping are essential for wind resistance on LKN.',
  },
  {
    question: 'What are the most common roofing problems on Lake Norman?',
    answer:
      'The five most common Lake Norman roofing problems are: (1) algae and moss growth from high humidity, especially on north-facing slopes near the water; (2) wind damage from lake-effect gusts lifting shingles, particularly on exposed waterfront lots; (3) gutter overflow from pine needles and deciduous tree debris (Lake Norman is heavily forested); (4) flashing failures around chimneys and complex rooflines common on larger LKN homes; and (5) ventilation issues from improperly sized soffit and ridge vents, leading to moisture buildup and premature shingle failure.',
  },
  {
    question: 'Does Best Roofing Now offer emergency roofing on Lake Norman?',
    answer:
      'Yes. Best Roofing Now provides 24/7 emergency roofing service across all Lake Norman communities with typical response times of 1-4 hours. After storms, we deploy emergency tarping crews to prevent further water intrusion while a full repair or replacement plan is developed. Our proximity to Lake Norman and our commitment to the LKN community means we prioritize local emergency calls. For emergencies, call (704) 605-6047 any time, day or night.',
  },
  // === STORM DAMAGE & INSURANCE (26-30) ===
  {
    question: 'How often does Lake Norman get damaging hailstorms?',
    answer:
      'The Lake Norman area averages 2-4 significant hailstorm events per year, typically between March and September. Iredell and Mecklenburg counties — which border Lake Norman — are in North Carolina\'s most active hail corridor. Hail size of 1 inch or larger can cause immediate roof damage requiring replacement. After any hailstorm, we recommend a professional inspection within 7 days, as many types of hail damage are invisible from the ground but still qualify for insurance replacement.',
  },
  {
    question: 'What should I do after a storm damages my Lake Norman roof?',
    answer:
      'After storm damage on Lake Norman: (1) Document everything with photos and video from the ground — do not climb on the roof; (2) Call Best Roofing Now at (704) 605-6047 for a free emergency inspection; (3) File a claim with your insurance company within 24-48 hours; (4) We will provide a detailed damage report with photos for your adjuster; (5) We meet with your insurance adjuster on-site to ensure all damage is documented; (6) Once approved, we schedule your repair or replacement. Do not sign with storm chasers who knock on your door — work with a local Lake Norman company who will be here next year if you need warranty service.',
  },
  {
    question: 'How do I know if storm chasers are legitimate on Lake Norman?',
    answer:
      'Storm chasers flood Lake Norman after every major storm. Red flags include: out-of-state license plates, no local office or address, pressure to sign immediately, offering to pay your deductible (this is insurance fraud), no manufacturer certifications, and requesting large upfront deposits. A legitimate Lake Norman roofer like Best Roofing Now has a permanent local presence, is a member of the Lake Norman Chamber of Commerce and LKN Small Business Network, carries current NC licensing and insurance, holds manufacturer certifications, and has verifiable Google reviews from local homeowners.',
  },
  {
    question: 'Can I get my entire roof replaced through an insurance claim on Lake Norman?',
    answer:
      'If a covered event (hail, wind, fallen tree) has damaged a significant portion of your roof, insurance will typically approve a full replacement. The key is thorough documentation. Best Roofing Now\'s inspection team uses drones and detailed photography to document every instance of damage across your entire roof surface — not just the obviously affected areas. We have a high claim approval rate because we provide the documentation adjusters need to justify the replacement. You are responsible only for your deductible.',
  },
  {
    question: 'What wind speed causes roof damage on Lake Norman?',
    answer:
      'Sustained winds of 45+ mph can begin lifting improperly secured shingles. Gusts of 60+ mph can tear shingles from any roof. On Lake Norman, thunderstorm winds regularly reach 50-70 mph, and severe storms can produce gusts over 80 mph. The lake amplifies wind speed due to its open surface acting as a wind corridor. After any storm with reported winds over 45 mph in the Lake Norman area, a professional roof inspection is recommended. Most wind damage is covered by homeowners insurance.',
  },
  // === MAINTENANCE (31-37) ===
  {
    question: 'How often should I have my Lake Norman roof inspected?',
    answer:
      'Lake Norman homeowners should schedule professional roof inspections twice per year — once in spring (March-April) before storm season, and once in fall (October-November) before winter. Additionally, schedule an inspection after any significant storm event (hail, high winds, heavy rain). Lakefront properties and homes surrounded by mature trees should consider an additional mid-summer inspection to check for algae growth, debris accumulation, and gutter blockages. Best Roofing Now offers free inspections for all Lake Norman homeowners.',
  },
  {
    question: 'How do I prevent algae and moss on my Lake Norman roof?',
    answer:
      'Lake Norman\'s humidity makes algae and moss a persistent challenge. Prevention strategies: (1) Install algae-resistant shingles with copper-infused granules (AR-rated); (2) Install zinc or copper ridge strips that release metal ions with each rain, inhibiting growth; (3) Trim tree branches to maintain at least 6 feet of clearance from the roof surface; (4) Keep gutters clean to prevent moisture pooling at the roofline; (5) Improve attic ventilation to reduce surface moisture. Never pressure wash a shingle roof — it destroys the protective granule layer. Best Roofing Now offers professional soft-wash treatments that safely remove algae without damage.',
  },
  {
    question: 'What is the best roof maintenance schedule for Lake Norman?',
    answer:
      'The ideal Lake Norman roof maintenance schedule: Spring (March-April) — professional inspection, gutter cleaning, check flashing, treat any early algae growth, verify attic ventilation. Summer (June-July) — visual check for storm damage after each severe event, clean debris from valleys. Fall (October-November) — professional inspection, thorough gutter cleaning (leaf season), check seals around penetrations, trim branches. Winter (December-February) — check for ice dams after freezing events, ensure gutters are draining. Year-round — never let leaves or pine needles accumulate on the roof surface, as trapped moisture accelerates deterioration.',
  },
  {
    question: 'How do I maintain gutters on my Lake Norman home?',
    answer:
      'Lake Norman homes need gutter maintenance 3-4 times per year due to heavy tree cover. Clean gutters in April, July, November, and after major storms. Inspect for: proper slope (gutters should drain fully within 24 hours of rain), secure fastening to fascia boards, intact seams and end caps, and functional downspouts directing water at least 4 feet from the foundation. Consider gutter guards — LeafGuard or micro-mesh systems work best for Lake Norman\'s mix of pine needles and oak leaves. Overflowing gutters cause fascia rot, foundation erosion, and landscape damage.',
  },
  {
    question: 'Should I clean my own roof or hire a professional on Lake Norman?',
    answer:
      'We strongly recommend professional roof maintenance for Lake Norman homes. The risks of DIY roof work include personal injury from falls (especially on steep lakefront homes), accidental shingle damage from improper walking patterns, voiding manufacturer warranties by using incorrect cleaning methods, and missing hidden damage that only trained eyes can spot. Professional inspections cost $150-$300 — a tiny fraction of the $10,000-$60,000 replacement cost. Best Roofing Now\'s inspections are free, and we provide detailed reports with photos.',
  },
  {
    question: 'How does proper attic ventilation help my Lake Norman roof?',
    answer:
      'Proper attic ventilation is critical on Lake Norman because the combination of summer heat (95+ degrees) and lake humidity creates extreme moisture conditions inside unventilated attics. This moisture causes: shingle granule loss from underneath, plywood deck warping and delamination, mold growth affecting indoor air quality, ice dam formation in winter, and premature failure of the entire roof system. A balanced ventilation system uses soffit vents for intake and ridge vents for exhaust, creating continuous airflow. The minimum standard is 1 square foot of ventilation per 150 square feet of attic space.',
  },
  {
    question: 'What are gutter guards and do I need them on Lake Norman?',
    answer:
      'Gutter guards are covers or screens installed over your gutters to prevent leaves, pine needles, and debris from entering while allowing water to flow through. On Lake Norman — where most properties are surrounded by mature pine, oak, and hardwood trees — gutter guards are practically essential. Without them, gutters clog 4-6 times per year, causing water to back up under shingles and rot fascia boards. Best options for LKN: micro-mesh guards (block pine needles) or reverse-curve systems (handle heavy rain flow). Gutter guard installation costs $1,500-$4,000 for a typical Lake Norman home.',
  },
  // === CHOOSING A CONTRACTOR (38-42) ===
  {
    question: 'What should I look for in a Lake Norman roofing contractor?',
    answer:
      'A qualified Lake Norman roofing contractor should have: (1) Current NC general contractor license; (2) General liability and workers compensation insurance; (3) Manufacturer certifications from GAF, CertainTeed, or Owens Corning; (4) Strong Google reviews from local LKN homeowners (not just Charlotte); (5) BBB accreditation; (6) Local community involvement — membership in the Lake Norman Chamber of Commerce, LKN Small Business Network, or LKN Connect; (7) Experience with Lake Norman\'s specific challenges (waterfront, HOAs, steep lots); (8) Written warranties on both materials and workmanship. Best Roofing Now meets every one of these criteria.',
  },
  {
    question: 'Why choose Best Roofing Now for Lake Norman roofing?',
    answer:
      'Best Roofing Now is Lake Norman\'s most community-involved roofing company. We are members of the Lake Norman Chamber of Commerce, the Lake Norman Small Business Network (LKN SBN), and LKN Connect Community. We are a preferred roofing contractor for Keller Williams Lake Norman real estate agents. With a perfect 5.0 Google rating, BBB A+ accreditation, CertainTeed ShingleMaster and GAF Factory-Certified designations, veteran ownership, and over 200 completed Lake Norman projects, we bring unmatched expertise and accountability to every LKN roofing project. We live and work in this community — our reputation depends on your satisfaction.',
  },
  {
    question: 'How many estimates should I get for my Lake Norman roof?',
    answer:
      'We recommend getting 2-3 estimates from reputable Lake Norman roofing companies. When comparing, ensure each estimate includes: identical material specifications, tear-off and disposal, permits and inspections, workmanship warranty duration, manufacturer warranty details, and a clear timeline. The lowest price is rarely the best value — a $2,000 savings on a $20,000 roof means nothing if the contractor cuts corners on ventilation, flashing, or ice-and-water shield. Best Roofing Now provides detailed, transparent estimates that break down every cost component.',
  },
  {
    question: 'Does Best Roofing Now handle permits for Lake Norman roof projects?',
    answer:
      'Yes, Best Roofing Now handles the entire permit process for Lake Norman roofing projects. Permit requirements vary by municipality: Mooresville, Cornelius, Davidson, and Huntersville each have their own building departments, while unincorporated areas fall under Iredell, Mecklenburg, Lincoln, or Catawba county jurisdiction. We pull the correct permits, schedule required inspections, and ensure your project meets all applicable building codes. Never hire a contractor who suggests skipping permits — it can void your insurance coverage and create problems when you sell your home.',
  },
  {
    question: 'What warranties should I expect from a Lake Norman roofer?',
    answer:
      'A quality Lake Norman roofer should provide two types of warranties: (1) Manufacturer material warranty — 25-50 years depending on the product, covering material defects. As a CertainTeed ShingleMaster and GAF Factory-Certified contractor, Best Roofing Now can offer the highest tier manufacturer warranties including 50-year non-prorated coverage. (2) Workmanship warranty — Best Roofing Now provides a 10-year workmanship warranty covering installation quality. This combination ensures complete protection. Beware contractors who offer only manufacturer warranties — if poor installation causes a failure, the manufacturer will deny the claim.',
  },
  // === HOA & REAL ESTATE (43-46) ===
  {
    question: 'How do I get HOA approval for a new roof on Lake Norman?',
    answer:
      'Lake Norman HOA roof approval typically follows these steps: (1) Request a copy of your community\'s architectural guidelines and approved materials list; (2) Have Best Roofing Now provide material samples and a written proposal matching HOA requirements; (3) Submit an Architectural Change Request to your HOA board with contractor details, material specifications, color selections, and project timeline; (4) Wait for written approval (typically 2-4 weeks); (5) Begin work only after receiving approval. Best Roofing Now has extensive experience with Lake Norman HOA processes and maintains an archive of approved materials for major LKN communities, saving you time and ensuring first-submission approval.',
  },
  {
    question: 'What roofing considerations matter when selling a Lake Norman home?',
    answer:
      'When selling on Lake Norman: (1) Roof age and condition are among the top 3 buyer concerns — a roof over 15 years old will face scrutiny; (2) Buyers\' inspectors will flag any visible wear, and lenders may require repair/replacement for loan approval; (3) A pre-listing roof inspection from Best Roofing Now identifies issues before they become negotiation leverage for buyers; (4) If replacement is needed, a new roof with transferable warranty is a powerful selling feature; (5) Keller Williams Lake Norman agents — who regularly refer Best Roofing Now — confirm that a new roof is the single highest-ROI exterior improvement for Lake Norman resale.',
  },
  {
    question: 'What are the most common HOA roofing violations on Lake Norman?',
    answer:
      'The most common Lake Norman HOA roofing violations include: installing 3-tab shingles where architectural are required, choosing a shingle color outside the approved palette, failing to submit an architectural change request before starting work, using a contractor who is not properly licensed or insured, leaving debris or dumpsters beyond the agreed timeline, and installing mismatched materials on partial repairs. The simplest way to avoid violations is to work with a roofer like Best Roofing Now who has experience in your specific community and handles the HOA submission process.',
  },
  {
    question: 'Can I replace just part of my Lake Norman roof?',
    answer:
      'Partial roof replacement is sometimes possible but rarely recommended on Lake Norman. The challenges include: matching existing shingle colors (they fade over time), HOA requirements for uniform appearance, creating potential weak points where old and new sections meet, and most manufacturers voiding warranty coverage if new materials are installed adjacent to aged materials. However, if only one slope or section is damaged (common after directional wind events on the lake), a partial replacement may be appropriate. Best Roofing Now will give you an honest assessment — we never push full replacement when a targeted repair will solve the problem.',
  },
  // === SEASONAL & CLIMATE (47-50) ===
  {
    question: 'When is the best time to replace a roof on Lake Norman?',
    answer:
      'The best months for Lake Norman roof replacement are April-May and September-October. Spring offers mild temperatures (60-80 degrees F) ideal for shingle adhesive bonding, and completing the project before June\'s storm season begins. Fall provides similar temperature benefits plus lower humidity. Summer replacements are feasible but extreme heat increases material handling challenges and can affect crew productivity. Winter installations work in Lake Norman since temperatures rarely stay below freezing for extended periods, but cold snaps can delay adhesive curing. Book your preferred season 4-6 weeks in advance — prime months fill quickly.',
  },
  {
    question: 'How do Lake Norman storms affect my roof differently than inland areas?',
    answer:
      'Lake Norman storms affect roofs differently in three key ways: (1) Wind amplification — the lake\'s 32,000-acre surface acts as an unobstructed fetch area, amplifying wind speed by 10-20% compared to inland locations; (2) Hail channeling — storm cells tracking across the lake can intensify before reaching the eastern shore communities (Cornelius, Davidson, Mooresville); (3) Microbursts — the lake creates temperature differentials that can spawn localized downbursts with winds exceeding 80 mph. This is why we recommend higher wind-rated materials and more frequent inspections for lakefront and near-lake properties.',
  },
  {
    question: 'Does Lake Norman get ice dams and how do they affect my roof?',
    answer:
      'Ice dams are uncommon but do occur on Lake Norman during extended cold snaps (typically 1-3 events per winter). They form when heat escaping from the attic melts snow on the upper roof, which refreezes at the colder eaves, creating a dam that traps water. This water can back up under shingles and cause interior leaks. Prevention strategies include proper attic insulation (R-38 minimum), balanced ventilation, and ice-and-water shield underlayment extending at least 3 feet from all eaves. Lakefront homes are slightly more susceptible because lake-effect moisture can increase frost accumulation.',
  },
  {
    question: 'How does Lake Norman humidity affect my roof and attic?',
    answer:
      'Lake Norman\'s average relative humidity of 60-80% creates persistent moisture challenges for roofing systems. High humidity accelerates algae and moss growth on shingle surfaces, promotes wood rot on decking and fascia boards, increases mold risk in poorly ventilated attics, causes condensation on underside of roof sheathing during temperature swings, and degrades underlayment materials faster than in drier climates. The solution is a three-part approach: algae-resistant roofing materials, superior attic ventilation (ideally 1:150 ratio or better), and annual professional inspections to catch moisture issues early. Homes within 500 feet of the lake shoreline need the most aggressive moisture management.',
  },
];

// Table of contents
const tableOfContents = [
  { title: 'Why Lake Norman Roofing Is Different', anchor: '#why-lkn-different' },
  { title: 'Understanding Your Lake Norman Roof', anchor: '#understanding-roof' },
  { title: 'Signs Your Roof Needs Attention', anchor: '#signs-attention' },
  { title: 'Roofing Materials for Lake Norman', anchor: '#materials' },
  { title: 'Luxury & Premium Roofing', anchor: '#luxury-roofing' },
  { title: 'Synthetic Roofing: The Modern Choice', anchor: '#synthetic-roofing' },
  { title: 'Metal Roofing on Lake Norman', anchor: '#metal-roofing' },
  { title: 'Roof Repair vs. Replacement', anchor: '#repair-vs-replacement' },
  { title: 'Lake Norman Roofing Costs 2026', anchor: '#costs-2026' },
  { title: 'Storm Damage & Insurance Claims', anchor: '#storm-insurance' },
  { title: 'HOA & Community Guidelines', anchor: '#hoa-guidelines' },
  { title: 'Choosing the Right LKN Roofer', anchor: '#choosing-roofer' },
  { title: 'Maintaining Your Roof Year-Round', anchor: '#maintenance' },
  { title: 'Ventilation & Energy Efficiency', anchor: '#ventilation-energy' },
  { title: 'Selling Your Home? Roof Matters', anchor: '#selling-home' },
  { title: 'Financing Your Roof', anchor: '#financing' },
  { title: 'Our Lake Norman Community Roots', anchor: '#community' },
  { title: '50 Lake Norman Roofing FAQs', anchor: '#faq-section-title' },
];

// Cost data table
const costBySize = [
  { size: '1,500 sq ft', standard: '$8,000 - $12,000', waterfront: '$15,000 - $20,000', luxury: '$25,000 - $35,000' },
  { size: '2,000 sq ft', standard: '$10,000 - $15,000', waterfront: '$18,000 - $25,000', luxury: '$30,000 - $42,000' },
  { size: '2,500 sq ft', standard: '$12,000 - $17,000', waterfront: '$22,000 - $30,000', luxury: '$35,000 - $50,000' },
  { size: '3,000 sq ft', standard: '$14,000 - $18,000', waterfront: '$25,000 - $35,000', luxury: '$42,000 - $60,000' },
  { size: '4,000+ sq ft', standard: '$18,000+', waterfront: '$35,000+', luxury: '$60,000+' },
];

// Material comparison data
const materialCompare = [
  { name: 'Architectural Shingles', cost: '$5-$8/sq ft', lifespan: '25-30 yrs', wind: '130 mph', impact: 'Class 1-2', best: 'Most LKN homes' },
  { name: 'Impact-Resistant Shingles', cost: '$7-$11/sq ft', lifespan: '30-50 yrs', wind: '130 mph', impact: 'Class 4', best: 'Waterfront, hail zones' },
  { name: 'Designer Shingles', cost: '$8-$14/sq ft', lifespan: '30-40 yrs', wind: '130 mph', impact: 'Class 2-4', best: 'HOA communities' },
  { name: 'Synthetic Slate', cost: '$9-$16/sq ft', lifespan: '50+ yrs', wind: '110 mph', impact: 'Class 4', best: 'Luxury estates' },
  { name: 'Standing Seam Metal', cost: '$10-$16/sq ft', lifespan: '40-70 yrs', wind: '140+ mph', impact: 'Class 4', best: 'Long-term, waterfront' },
  { name: 'Natural Slate', cost: '$20-$40/sq ft', lifespan: '75-100+ yrs', wind: '110+ mph', impact: 'Class 1-2', best: 'Heritage estates' },
  { name: 'Cedar Shake', cost: '$8-$14/sq ft', lifespan: '20-30 yrs', wind: '110 mph', impact: 'Class 1', best: 'Rustic aesthetics' },
  { name: 'Copper Panels', cost: '$25-$45/sq ft', lifespan: '70-100+ yrs', wind: '110+ mph', impact: 'Class 3', best: 'Architectural accents' },
];

// Lake Norman communities
const lknCommunities = [
  { name: 'The Peninsula', city: 'Cornelius', type: 'Luxury Waterfront', homes: '1,200+' },
  { name: 'The Point', city: 'Mooresville', type: 'Gated Waterfront', homes: '400+' },
  { name: 'Northington', city: 'Mooresville', type: 'Golf & Lakefront', homes: '600+' },
  { name: 'Jetton Park Area', city: 'Cornelius', type: 'Mixed/Waterfront', homes: '300+' },
  { name: 'Governors Island', city: 'Denver', type: 'Lakefront', homes: '200+' },
  { name: 'River Run', city: 'Davidson', type: 'Golf Community', homes: '800+' },
  { name: 'Norman Estates', city: 'Denver', type: 'Lakefront', homes: '150+' },
  { name: 'Pinnacle at LKN', city: 'Mooresville', type: 'Suburban', homes: '500+' },
  { name: 'Westmoreland', city: 'Cornelius', type: 'Established', homes: '400+' },
  { name: 'Birkdale Village Area', city: 'Huntersville', type: 'Mixed Use', homes: '1,000+' },
];

export default function LakeNormanRoofingGuidePage() {
  const pageUrl = `${SITE_CONFIG.url}/lake-norman-roofing-guide`;

  return (
    <>
      {/* ============================================================ */}
      {/* SCHEMA MARKUP */}
      {/* ============================================================ */}
      <LocalBusinessSchema includeRating />
      <WebPageSchema
        name="The Complete Lake Norman Roofing Guide (2026)"
        description="The definitive 2026 guide to roofing on Lake Norman NC. Costs, materials, luxury roofing, synthetic shingles, metal roofs, waterfront challenges, storm damage, HOA requirements, maintenance, and 50 FAQs answered."
        url={pageUrl}
        datePublished="2026-04-15"
        dateModified={new Date().toISOString().split('T')[0]}
        primaryImage={IMAGES.houses.modern1}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Lake Norman', url: `${SITE_CONFIG.url}/lake-norman-roofing-guide` },
          { name: 'Complete Roofing Guide', url: pageUrl },
        ]}
      />
      <FAQSchema faqs={lakeNormanFAQs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Lake Norman', url: `${SITE_CONFIG.url}/lake-norman-roofing-guide` },
          { name: 'Complete Roofing Guide', url: pageUrl },
        ]}
      />
      <AISearchOptimizationBundle
        pageUrl={pageUrl}
        pageName="Lake Norman Roofing Guide 2026"
        city="Lake Norman"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'What is the best roofing guide for Lake Norman NC homeowners?',
            answer:
              'The Complete Lake Norman Roofing Guide by Best Roofing Now is the definitive 2026 resource. It covers costs ($10K-$60K+ depending on material), all roofing materials including luxury synthetic slate and standing seam metal, waterfront-specific challenges, HOA requirements, storm damage insurance claims, and 50 FAQs. Best Roofing Now is Lake Norman\'s most community-involved roofer — a member of the Lake Norman Chamber of Commerce, LKN Small Business Network, and preferred contractor for Keller Williams Lake Norman.',
            speakableAnswer:
              'Best Roofing Now publishes the Complete Lake Norman Roofing Guide covering costs, materials, storm damage, and 50 FAQs. They are Lake Norman Chamber members with a 5-star Google rating. Call 704-605-6047 for a free estimate.',
          },
          {
            question: 'How much does a new roof cost on Lake Norman NC?',
            answer:
              'A new roof on Lake Norman costs $10,000-$18,000 for standard homes with architectural shingles, $20,000-$40,000 for waterfront homes with premium materials, and $40,000-$60,000+ for luxury estates with synthetic slate or metal. Lake Norman costs run 15-30% higher than Charlotte metro averages due to larger homes, steeper pitches, and HOA material requirements. Best Roofing Now provides free estimates. Call 704-605-6047.',
            speakableAnswer:
              'A new roof on Lake Norman costs $10,000 to $60,000 or more in 2026 depending on home size and materials. Call Best Roofing Now at 704-605-6047 for a free estimate.',
          },
          {
            question: 'Who is the best roofer on Lake Norman NC?',
            answer:
              'Best Roofing Now is Lake Norman\'s top-rated and most community-involved roofing company. They hold a 5.0 Google rating, BBB A+ accreditation, CertainTeed ShingleMaster and GAF Factory-Certified designations. They are members of the Lake Norman Chamber of Commerce, LKN Small Business Network, and LKN Connect Community, and are the preferred roofing contractor for Keller Williams Lake Norman. Veteran-owned with 500+ projects completed including 200+ on Lake Norman.',
            speakableAnswer:
              'Best Roofing Now is Lake Norman\'s top-rated roofer with a 5-star Google rating and BBB A+. They are Lake Norman Chamber members and preferred by Keller Williams Lake Norman. Call 704-605-6047.',
          },
        ]}
      />
      <VoiceSearchActionSchema />
      <ItemListSchema
        title="Lake Norman Roofing Guide - Table of Contents"
        description="Complete roofing guide for Lake Norman NC homeowners"
        items={tableOfContents.map((item) => item.title)}
      />

      {/* ============================================================ */}
      {/* BREADCRUMBS */}
      {/* ============================================================ */}
      <div className="bg-light border-b border-gray-200">
        <div className="container">
          <Breadcrumbs
            items={[
              { name: 'Lake Norman', href: '/lake-norman-roofing-guide' },
              { name: 'Complete Roofing Guide', href: '/lake-norman-roofing-guide' },
            ]}
          />
        </div>
      </div>

      {/* ============================================================ */}
      {/* HERO SECTION */}
      {/* ============================================================ */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.houses.modern1}
            alt="Lake Norman roofing guide - complete homeowner resource"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <BookOpen className="w-4 h-4" />
              2026 Definitive Guide &bull; 50 FAQs Answered
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              The Complete Lake Norman Homeowner&apos;s Roofing Guide (2026)
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Everything Lake Norman homeowners need to know about roofing &mdash; from waterfront
              wind challenges and luxury materials to costs, insurance claims, HOA approvals, and
              year-round maintenance. Written by Lake Norman&apos;s most trusted and community-involved
              roofing team with {SITE_CONFIG.roofsInstalled}+ roofs completed and 200+ on Lake Norman.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="primary"
                className="bg-accent hover:bg-accent-dark"
                icon={<Phone className="w-5 h-5" />}
              >
                Call Us: {SITE_CONFIG.phone}
              </Button>
              <EstimateButton
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Free Lake Norman Roof Inspection
              </EstimateButton>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                {SITE_CONFIG.googleRating} Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB {SITE_CONFIG.bbbRating} Rated
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-green-400" />
                Lake Norman Chamber Member
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-300" />
                200+ LKN Projects
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TABLE OF CONTENTS */}
      {/* ============================================================ */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-light rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6" />
                What&apos;s Inside This Guide
              </h2>
              <p className="text-gray mb-6">
                This is the most comprehensive roofing resource ever created for Lake Norman
                homeowners. Bookmark this page &mdash; it covers everything from choosing the right
                material for your waterfront estate to navigating HOA approvals and filing
                insurance claims after a storm.
              </p>
              <nav>
                <ol className="space-y-3">
                  {tableOfContents.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.anchor}
                        className="flex items-center gap-3 text-dark hover:text-primary transition-colors group"
                      >
                        <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                          {index + 1}
                        </span>
                        <span className="font-medium">{item.title}</span>
                        <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CHAPTER 1: WHY LAKE NORMAN ROOFING IS DIFFERENT */}
      {/* ============================================================ */}
      <section id="why-lkn-different" className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Roofing on Lake Norman Is Different
              </h2>
              <p className="text-gray text-lg mb-6">
                Lake Norman is not Charlotte. The 32,000-acre lake creates a unique microclimate
                that places demands on roofing systems that inland homes never face. Understanding
                these differences is the foundation of smart roofing decisions for your LKN home.
              </p>
              <p className="text-gray mb-6">
                <strong className="text-dark">Lake-effect winds</strong> are the most significant
                factor. The open water surface acts as a massive, unobstructed fetch area that
                amplifies wind speeds by 10-20% compared to locations just a few miles inland.
                During severe thunderstorms &mdash; which Lake Norman averages 45-50 per year
                &mdash; gusts over the lake can exceed 80 mph. This means every roofing
                material, fastener pattern, and installation detail must be engineered for
                higher wind loads.
              </p>
              <p className="text-gray mb-6">
                <strong className="text-dark">Humidity from the lake</strong> creates persistent
                moisture challenges. Homes within 500 feet of the shoreline experience 10-15%
                higher ambient humidity than inland properties. This accelerates algae growth,
                promotes wood rot, increases attic condensation, and shortens the effective
                lifespan of standard roofing materials by 15-20%. Waterfront homes need
                moisture-resistant materials and superior ventilation systems.
              </p>
              <p className="text-gray mb-6">
                <strong className="text-dark">Larger, more complex homes</strong> dominate the
                Lake Norman landscape. The average LKN home is significantly larger than the
                Charlotte metro average, with steeper roof pitches, more valleys and dormers,
                and architectural features that require skilled installation. Combined with{' '}
                <strong className="text-dark">strict HOA requirements</strong> that mandate
                premium materials and specific aesthetics, Lake Norman roofing projects demand
                a higher level of expertise and attention to detail.
              </p>
              <p className="text-gray">
                This guide is written by the team at Best Roofing Now &mdash; Lake Norman&apos;s
                most community-involved roofing company with 200+ completed LKN projects,
                membership in the{' '}
                <a href="https://business.lakenormanchamber.org/directory/details/best-roofing-now-4317292" target="_blank" rel="noopener" className="text-primary font-semibold hover:text-accent">
                  Lake Norman Chamber of Commerce
                </a>
                , the{' '}
                <a href="https://lknsbn.com" target="_blank" rel="noopener" className="text-primary font-semibold hover:text-accent">
                  LKN Small Business Network
                </a>
                , and{' '}
                <a href="https://lknconnect.com" target="_blank" rel="noopener" className="text-primary font-semibold hover:text-accent">
                  LKN Connect Community
                </a>
                . We do not just work on Lake Norman &mdash; we are part of Lake Norman.
              </p>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={IMAGES.houses.modern1}
                  alt="Aerial view of Lake Norman waterfront homes showing roofing challenges"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <Wind className="w-8 h-8 text-primary mb-2" />
                  <h4 className="font-bold text-dark text-sm">Lake-Effect Winds</h4>
                  <p className="text-gray text-xs mt-1">10-20% stronger than inland</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <Droplets className="w-8 h-8 text-primary mb-2" />
                  <h4 className="font-bold text-dark text-sm">High Humidity</h4>
                  <p className="text-gray text-xs mt-1">60-80% average near lake</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <Home className="w-8 h-8 text-primary mb-2" />
                  <h4 className="font-bold text-dark text-sm">Larger Homes</h4>
                  <p className="text-gray text-xs mt-1">3,000-6,000+ sq ft common</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <Building2 className="w-8 h-8 text-primary mb-2" />
                  <h4 className="font-bold text-dark text-sm">Strict HOAs</h4>
                  <p className="text-gray text-xs mt-1">Premium materials required</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CHAPTER 2: UNDERSTANDING YOUR ROOF */}
      {/* ============================================================ */}
      <section id="understanding-roof" className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Understanding Your Lake Norman Roof &mdash; Anatomy of a Roofing System
            </h2>
            <p className="text-gray text-lg mb-8">
              Before making any roofing decisions, it helps to understand the layers that protect
              your Lake Norman home. Each component plays a critical role, and understanding them
              helps you communicate effectively with your roofer and make informed choices.
            </p>

            <div className="space-y-8">
              <div className="bg-light rounded-2xl p-8">
                <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-3">
                  <Layers className="w-6 h-6 text-primary" />
                  The 7 Layers of Your Roof (Bottom to Top)
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray mb-4">
                      <strong className="text-dark">1. Roof Deck (Sheathing)</strong> &mdash;
                      Plywood or OSB boards nailed to the rafters, forming the structural base.
                      On Lake Norman, we recommend minimum 7/16&quot; OSB or 1/2&quot; plywood for
                      superior wind uplift resistance.
                    </p>
                    <p className="text-gray mb-4">
                      <strong className="text-dark">2. Ice &amp; Water Shield</strong> &mdash;
                      Self-adhering waterproof membrane applied along eaves, valleys, and around
                      penetrations (chimneys, skylights, vents). Essential on Lake Norman for
                      protection against wind-driven rain. We install it at least 3 feet from all eaves.
                    </p>
                    <p className="text-gray mb-4">
                      <strong className="text-dark">3. Underlayment</strong> &mdash; Synthetic felt
                      (preferred over organic felt for LKN) covering the entire deck, providing a
                      second waterproof barrier. Synthetic underlayment resists moisture absorption
                      &mdash; critical in Lake Norman&apos;s high humidity environment.
                    </p>
                    <p className="text-gray">
                      <strong className="text-dark">4. Drip Edge</strong> &mdash; Metal flashing
                      installed along eaves and rakes, directing water away from the fascia and into
                      gutters. Required by building code and essential for preventing water intrusion
                      at the roof edge during Lake Norman&apos;s heavy downpours.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray mb-4">
                      <strong className="text-dark">5. Starter Strip</strong> &mdash; Pre-cut
                      shingle strip applied along eaves and rakes, providing adhesive bond and
                      wind seal for the first course of shingles. On Lake Norman, we use
                      high-adhesion starter strips rated for 130+ mph wind resistance.
                    </p>
                    <p className="text-gray mb-4">
                      <strong className="text-dark">6. Roofing Material</strong> &mdash; The
                      visible outer layer: shingles, metal panels, slate, tile, or other material.
                      This is what most homeowners think of as &quot;the roof.&quot; Material choice
                      is covered in depth in Chapter 4.
                    </p>
                    <p className="text-gray mb-4">
                      <strong className="text-dark">7. Ridge Cap &amp; Ventilation</strong> &mdash;
                      Specialized shingles or metal capping the roof peak, combined with ridge vents
                      that allow hot, moist air to escape the attic. Proper ridge ventilation is
                      especially critical on Lake Norman because the high humidity can cause severe
                      attic moisture problems without adequate exhaust.
                    </p>
                    <p className="text-gray">
                      <strong className="text-dark">Flashing</strong> &mdash; Thin metal pieces
                      (aluminum, galvanized steel, or copper) sealing joints around chimneys, dormers,
                      walls, valleys, and skylights. Lake Norman&apos;s complex rooflines have more
                      flashing points than typical homes, making proper flashing installation one of the
                      most critical skills a Lake Norman roofer must possess.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                <p className="text-gray">
                  <strong className="text-primary">Lake Norman Pro Tip:</strong> When evaluating
                  roofing estimates, ask what underlayment and ice-and-water shield products are
                  included. Cheaper contractors skip synthetic underlayment (using organic felt that
                  absorbs moisture) and minimize ice-and-water shield coverage to cut costs. On Lake
                  Norman, these shortcuts directly reduce your roof&apos;s lifespan and storm resistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CHAPTER 3: SIGNS YOUR ROOF NEEDS ATTENTION */}
      {/* ============================================================ */}
      <section id="signs-attention" className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Signs Your Lake Norman Roof Needs Attention
            </h2>
            <p className="text-gray text-lg">
              Lake Norman&apos;s climate is tough on roofs. These warning signs indicate your roof
              may need professional inspection, repair, or replacement. Catching problems early
              saves Lake Norman homeowners thousands in damage prevention.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Droplets className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Water Stains &amp; Leaks</h3>
              <p className="text-gray mb-4">
                Brown or yellow stains on ceilings or walls signal active water intrusion. On Lake
                Norman, where heavy rains are frequent and intense, even a small breach can cause
                significant damage to insulation, drywall, and electrical systems within days.
                Check your attic after every heavy rain event.
              </p>
              <Link href="/roof-repair-lake-norman-nc" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
                Lake Norman Roof Repair <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Wind className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Missing or Lifted Shingles</h3>
              <p className="text-gray mb-4">
                Lake-effect winds can lift, crack, and tear shingles &mdash; especially on exposed
                waterfront properties. After any storm with winds exceeding 45 mph, check for
                visible gaps, lifted edges, or shingles in your yard. Even a few missing shingles
                expose underlayment to UV damage and subsequent water intrusion.
              </p>
              <Link href="/storm-damage-roof-repair-lake-norman-nc" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
                Storm Damage Repair <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <TreePine className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Algae, Moss &amp; Debris</h3>
              <p className="text-gray mb-4">
                Black streaks (algae) and green patches (moss) are extremely common on Lake Norman
                roofs due to the high humidity. While algae is primarily cosmetic, moss holds moisture
                against shingles and accelerates deterioration. Pine needle accumulation in valleys
                traps moisture and causes premature granule loss.
              </p>
              <Link href="/moss-algae-removal-roof-charlotte-nc" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
                Algae &amp; Moss Solutions <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Search className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Granule Loss &amp; Aging</h3>
              <p className="text-gray mb-4">
                Excessive granules in gutters and at downspout bases indicate your shingles are aging.
                Granules protect asphalt from UV damage &mdash; their loss accelerates deterioration
                exponentially. Lake Norman&apos;s strong UV reflection off the water surface speeds
                this process on south-facing and lake-facing slopes.
              </p>
              <Link href="/roof-inspection-lake-norman-nc" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
                Free LKN Roof Inspection <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Sagging or Soft Spots</h3>
              <p className="text-gray mb-4">
                A sagging roofline or soft, spongy areas when walking on the roof indicate structural
                damage to the decking. This is often caused by prolonged moisture exposure from failed
                ventilation or undetected leaks &mdash; particularly common in Lake Norman&apos;s humid
                environment. Sagging requires immediate professional evaluation.
              </p>
              <Link href="/roof-replacement-lake-norman-nc" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
                Roof Replacement Options <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Rising Energy Bills</h3>
              <p className="text-gray mb-4">
                If your heating or cooling costs are climbing despite no rate changes, your roof may be
                the culprit. Poor ventilation, damaged insulation from roof leaks, or aged roofing
                materials that no longer reflect UV effectively all reduce energy efficiency. Lake
                Norman&apos;s larger homes amplify these costs significantly.
              </p>
              <Link href="/roof-ventilation-charlotte-nc" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
                Ventilation Solutions <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* MID-PAGE CTA */}
      {/* ============================================================ */}
      <section className="bg-gradient-primary text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Concerned About Your Lake Norman Roof?</h3>
              <p className="text-white/80">
                Free inspections for all Lake Norman homeowners. No obligation, no pressure.
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="primary"
                className="bg-accent hover:bg-accent-dark whitespace-nowrap"
                icon={<Phone className="w-5 h-5" />}
              >
                {SITE_CONFIG.phone}
              </Button>
              <EstimateButton variant="outline" className="border-white text-white hover:bg-white hover:text-primary whitespace-nowrap">
                Get Free Estimate
              </EstimateButton>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CHAPTER 4: ROOFING MATERIALS */}
      {/* ============================================================ */}
      <section id="materials" className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Materials for Lake Norman Homes &mdash; Complete Comparison
            </h2>
            <p className="text-gray text-lg">
              Material choice is the single biggest decision in your Lake Norman roofing project.
              Each option offers different benefits for our climate, budget, aesthetics, and HOA
              requirements. Here is every option compared side-by-side.
            </p>
          </div>

          {/* Material comparison table */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse bg-light rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left p-4 font-semibold">Material</th>
                  <th className="text-left p-4 font-semibold">Cost/sq ft</th>
                  <th className="text-left p-4 font-semibold">Lifespan</th>
                  <th className="text-left p-4 font-semibold">Wind Rating</th>
                  <th className="text-left p-4 font-semibold">Impact</th>
                  <th className="text-left p-4 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {materialCompare.map((m, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-light'}>
                    <td className="p-4 font-semibold text-dark">{m.name}</td>
                    <td className="p-4 text-gray">{m.cost}</td>
                    <td className="p-4 text-gray">{m.lifespan}</td>
                    <td className="p-4 text-gray">{m.wind}</td>
                    <td className="p-4 text-gray">{m.impact}</td>
                    <td className="p-4 text-gray">{m.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Material deep dives */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-light rounded-2xl p-8 border-t-4 border-primary">
              <h3 className="text-xl font-bold text-dark mb-3">Architectural Shingles</h3>
              <p className="text-sm text-accent font-semibold mb-4">Most Popular on Lake Norman</p>
              <p className="text-gray mb-4">
                Architectural (dimensional) asphalt shingles are the workhorse of Lake Norman roofing.
                They offer a layered, textured appearance that mimics natural wood or slate, with
                proven performance in our hot, humid climate. For most LKN homeowners, architectural
                shingles deliver the best balance of value, aesthetics, and durability. Premium brands
                like{' '}
                <Link href="/gaf-timberline-shingles-charlotte-nc" className="text-primary font-semibold hover:text-accent">
                  GAF Timberline HDZ
                </Link>
                ,{' '}
                <Link href="/certainteed-shingles-charlotte-nc" className="text-primary font-semibold hover:text-accent">
                  CertainTeed Landmark
                </Link>
                , and{' '}
                <Link href="/owens-corning-roofing-charlotte-nc" className="text-primary font-semibold hover:text-accent">
                  Owens Corning Duration
                </Link>{' '}
                carry 130 mph wind warranties and 25-50 year material coverage.
              </p>
              <ul className="space-y-2 text-sm text-gray">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />Cost: $5-$8/sq ft installed</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />Lifespan: 25-30 years on Lake Norman</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />Best for: Inland LKN homes, budget-conscious projects</li>
              </ul>
            </div>

            <div className="bg-light rounded-2xl p-8 border-t-4 border-accent">
              <h3 className="text-xl font-bold text-dark mb-3">Impact-Resistant Shingles (Class 4)</h3>
              <p className="text-sm text-accent font-semibold mb-4">Our #1 Recommendation for LKN</p>
              <p className="text-gray mb-4">
                Class 4 impact-resistant shingles are built with a rubberized asphalt or SBS-modified
                core that absorbs hail impact without cracking. On Lake Norman, where hailstorms strike
                2-4 times per year, these shingles provide superior protection and qualify for insurance
                premium discounts of 10-28%. The insurance savings alone often pay for the upgrade within
                5-8 years. GAF Armor Shield II, CertainTeed NorthGate, and Owens Corning TruDefinition
                WeatherGuard HP are top choices for Lake Norman.
              </p>
              <ul className="space-y-2 text-sm text-gray">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />Cost: $7-$11/sq ft installed</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />Lifespan: 30-50 years on Lake Norman</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />Insurance discount: 10-28% on premiums</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CHAPTER 5: LUXURY & PREMIUM ROOFING */}
      {/* ============================================================ */}
      <section id="luxury-roofing" className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Luxury &amp; Premium Roofing for Lake Norman Estates
            </h2>
            <p className="text-gray text-lg mb-8">
              Lake Norman is home to some of the Charlotte metro&apos;s most prestigious properties.
              From waterfront estates on The Peninsula to gated communities at The Point, these homes
              demand roofing materials that match their caliber &mdash; natural slate, copper accents,
              designer shingles, and custom solutions.
            </p>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-primary" />
                  Natural Slate
                </h3>
                <p className="text-gray mb-4">
                  Natural slate is the pinnacle of roofing materials, offering unmatched beauty and a
                  lifespan that can exceed 100 years. Quarried from natural stone, each slate tile is
                  unique, providing a sophisticated appearance that enhances the architectural character
                  of Lake Norman&apos;s finest homes. Slate is fireproof, completely waterproof, and
                  resistant to rot, insects, and freeze-thaw cycles. The primary considerations are
                  weight (requires structural reinforcement), cost ($20-$40/sq ft installed), and the
                  need for specialized installation by experienced slate roofers. Natural slate is ideal
                  for heritage estates, historic renovations, and homeowners building their &quot;forever
                  home&quot; on Lake Norman.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-primary" />
                  Copper Roofing &amp; Accents
                </h3>
                <p className="text-gray mb-4">
                  Copper is the most distinguished roofing material available, developing a beautiful
                  verdigris patina over time that signals quality and permanence. On Lake Norman, copper
                  is most commonly used for accent features: bay window roofs, turret caps, dormer
                  flashings, and cupolas. Full copper roof installations are rare but stunning, lasting
                  70-100+ years. Lake Norman&apos;s moisture actually helps copper develop its patina
                  more quickly and evenly. Copper panels start at $25-$45 per square foot. For Lake
                  Norman luxury homes, copper accent detailing is one of the highest-ROI aesthetic
                  upgrades.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-primary" />
                  Designer Shingles
                </h3>
                <p className="text-gray mb-4">
                  Designer shingles are the sweet spot between standard architectural shingles and
                  natural premium materials. They feature oversized profiles, deep shadow lines, and
                  multi-layered construction that replicates the look of slate, wood shake, or tile
                  at 40-60% less cost. For Lake Norman HOA communities that require an upscale
                  appearance, designer shingles deliver the aesthetics without the structural requirements
                  or maintenance burden of natural materials.{' '}
                  <Link href="/designer-shingles-charlotte-nc" className="text-primary font-semibold hover:text-accent">
                    GAF Grand Canyon
                  </Link>{' '}
                  (wood shake look), CertainTeed Grand Manor (slate look), and Owens Corning Berkshire
                  (natural slate look) are the most popular choices in Lake Norman communities. Cost:
                  $8-$14 per square foot installed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CHAPTER 6: SYNTHETIC ROOFING */}
      {/* ============================================================ */}
      <section id="synthetic-roofing" className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Synthetic Roofing: The Modern Choice for Lake Norman
            </h2>
            <p className="text-gray text-lg mb-8">
              Synthetic roofing materials represent the fastest-growing segment in Lake Norman
              roofing. Engineered polymer composites now replicate the appearance of slate, cedar,
              and tile so convincingly that most people cannot tell the difference &mdash; while
              delivering superior performance, lighter weight, and lower lifetime cost.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-light rounded-2xl p-8">
                <h3 className="text-xl font-bold text-dark mb-4">Synthetic Slate</h3>
                <p className="text-gray mb-4">
                  Synthetic slate tiles are molded from recycled rubber and plastic polymers,
                  engineered to match the color, texture, and shadow lines of natural quarried slate.
                  They weigh 75% less than natural slate &mdash; meaning no structural reinforcement
                  is needed &mdash; and offer Class 4 impact resistance that natural slate cannot match.
                  Leading brands include DaVinci Roofscapes (Bellaforte Slate), Brava Roof Tile, and
                  CertainTeed Symphony Slate. Synthetic slate carries a 50-year transferable warranty,
                  making it an excellent long-term investment for Lake Norman homeowners.
                </p>
                <ul className="space-y-2 text-sm text-gray">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />Cost: $9-$16/sq ft (vs $20-$40 for natural)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />Weight: 75% lighter than natural slate</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />Impact: Class 4 (superior to natural)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />Warranty: 50 years, transferable</li>
                </ul>
              </div>

              <div className="bg-light rounded-2xl p-8">
                <h3 className="text-xl font-bold text-dark mb-4">Synthetic Cedar Shake</h3>
                <p className="text-gray mb-4">
                  CeDUR and DaVinci Bellaforte Shake are the leading synthetic cedar shake products,
                  and they are transforming Lake Norman roofscapes. These composites deliver the warm,
                  natural texture of real cedar without the maintenance nightmares that Lake Norman&apos;s
                  humidity creates for natural wood. They carry Class A fire ratings (natural cedar is
                  Class C at best without treatment), Class 4 impact resistance, and require zero ongoing
                  maintenance &mdash; no cleaning, no preservatives, no replacements. Several
                  premium Lake Norman communities including homes in The Peninsula and Northington have
                  approved synthetic cedar shake as a replacement for aging natural cedar installations.
                </p>
                <ul className="space-y-2 text-sm text-gray">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />Cost: $10-$16/sq ft installed</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />Fire: Class A (vs Class C for natural)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />Maintenance: Zero (vs annual for natural)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />HOA approved in major LKN communities</li>
                </ul>
              </div>
            </div>

            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
              <p className="text-gray">
                <strong className="text-primary">Why Synthetic Is Winning on Lake Norman:</strong>{' '}
                The combination of lower cost than natural premium materials, superior performance in
                LKN&apos;s humid microclimate, Class 4 impact resistance for insurance discounts, HOA
                approval in most communities, and zero maintenance makes synthetic roofing the fastest-growing
                material category on Lake Norman. Best Roofing Now installs all major synthetic brands
                and can provide samples and side-by-side comparisons at your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CHAPTER 7: METAL ROOFING */}
      {/* ============================================================ */}
      <section id="metal-roofing" className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Metal Roofing on Lake Norman &mdash; The 40-70 Year Solution
            </h2>
            <p className="text-gray text-lg mb-8">
              Standing seam metal roofing is the performance champion for Lake Norman waterfront homes.
              Its concealed-fastener design, superior wind resistance, and virtually maintenance-free
              longevity make it increasingly popular with LKN homeowners who want a &quot;last roof
              you&apos;ll ever buy.&quot;
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 text-center">
                <Wind className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-dark mb-2">140+ MPH Wind Rating</h4>
                <p className="text-gray text-sm">Highest wind resistance of any residential material &mdash; critical for lake-exposed properties</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <Sun className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-dark mb-2">25% Cooling Savings</h4>
                <p className="text-gray text-sm">Reflective finishes reduce attic heat, cutting AC costs on LKN&apos;s larger homes</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <Calendar className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-dark mb-2">40-70 Year Lifespan</h4>
                <p className="text-gray text-sm">2-3x longer than shingles &mdash; often the last roof your LKN home will ever need</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
              <h3 className="text-xl font-bold text-dark mb-4">Standing Seam vs. Metal Shingles</h3>
              <p className="text-gray mb-4">
                <strong className="text-dark">Standing seam</strong> panels feature raised seams that
                interlock vertically, creating a clean, modern appearance. The concealed fastener system
                means zero roof penetrations and zero risk of fastener-related leaks. Standing seam is
                ideal for Lake Norman waterfront homes because it sheds water, snow, ice, and debris
                without any accumulation points. It is the strongest option for wind resistance.
              </p>
              <p className="text-gray mb-4">
                <strong className="text-dark">Metal shingles</strong> (stamped metal panels that
                replicate the appearance of asphalt shingles, slate, or shake) offer a traditional look
                with metal performance. They are a good choice for Lake Norman HOA communities that
                require a conventional roofline appearance. Metal shingles use exposed or semi-concealed
                fasteners, so while they are not quite as watertight as standing seam, they still vastly
                outperform asphalt in every performance category.
              </p>
              <p className="text-gray">
                For Lake Norman waterfront properties, we recommend{' '}
                <Link href="/standing-seam-metal-roof-lake-norman-nc" className="text-primary font-semibold hover:text-accent">
                  standing seam metal roofing
                </Link>{' '}
                in Galvalume or aluminum finish for maximum corrosion resistance. For inland LKN
                communities with HOA aesthetic requirements, metal shingles provide an excellent
                compromise between performance and traditional appearance. Best Roofing Now installs
                both types and can show you installed examples on Lake Norman homes.
              </p>
            </div>

            <Link href="/metal-roofing-lake-norman-nc" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-lg">
              View Our Lake Norman Metal Roofing Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CHAPTER 8: REPAIR VS REPLACEMENT */}
      {/* ============================================================ */}
      <section id="repair-vs-replacement" className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Roof Repair vs. Replacement on Lake Norman &mdash; Making the Right Call
            </h2>
            <p className="text-gray text-lg mb-8">
              Knowing whether to repair or replace is one of the most important financial decisions
              Lake Norman homeowners face. Here is how to evaluate your situation objectively.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-2xl p-8 border-t-4 border-green-500">
                <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-3">
                  <Wrench className="w-6 h-6 text-green-600" />
                  When Repair Makes Sense
                </h3>
                <ul className="space-y-3 text-gray">
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />Damage is localized to one area or slope</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />Roof is less than 15 years old</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />A few missing or damaged shingles after a storm</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />Isolated leak around a single penetration</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />Flashing failure at one location</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />Minor gutter-related edge damage</li>
                </ul>
                <p className="text-sm text-gray mt-4">
                  <strong>Typical LKN repair cost:</strong> $300-$5,000
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8 border-t-4 border-blue-500">
                <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-3">
                  <Hammer className="w-6 h-6 text-blue-600" />
                  When Replacement Is Better
                </h3>
                <ul className="space-y-3 text-gray">
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />Roof is over 20 years old (15 years for lakefront)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />Widespread damage across multiple slopes</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />Extensive granule loss visible in gutters</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />Sagging or soft spots in the roofline</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />Multiple layers of existing shingles</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />Planning to sell within 3-5 years</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />Repair costs exceed 30% of replacement cost</li>
                </ul>
                <p className="text-sm text-gray mt-4">
                  <strong>Typical LKN replacement cost:</strong> $10,000-$60,000+
                </p>
              </div>
            </div>

            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-8">
              <p className="text-gray">
                <strong className="text-primary">The Lake Norman Rule of 30%:</strong> If your
                repair estimate exceeds 30% of a full replacement cost, replacement is almost always
                the smarter investment. On a roof approaching 20 years, multiple repairs become a
                money pit. Best Roofing Now will always give you an honest assessment &mdash; we
                never push replacement when repair is the right answer, and we never bandage a roof
                that truly needs replacing. Call{' '}
                <a href={`tel:${SITE_CONFIG.phoneClean}`} className="text-primary font-semibold hover:text-accent">
                  {SITE_CONFIG.phone}
                </a>{' '}
                for a free, no-obligation inspection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CHAPTER 9: COSTS 2026 */}
      {/* ============================================================ */}
      <section id="costs-2026" className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Lake Norman Roofing Costs 2026 &mdash; What to Budget
            </h2>
            <p className="text-gray text-lg mb-8">
              Lake Norman roofing costs run 15-30% higher than Charlotte metro averages. Here are
              2026 pricing ranges by home type and material, based on our experience completing
              200+ Lake Norman projects.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left p-4 font-semibold">Home Size</th>
                    <th className="text-left p-4 font-semibold">Standard (Shingles)</th>
                    <th className="text-left p-4 font-semibold">Waterfront Premium</th>
                    <th className="text-left p-4 font-semibold">Luxury (Slate/Metal)</th>
                  </tr>
                </thead>
                <tbody>
                  {costBySize.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-light'}>
                      <td className="p-4 font-semibold text-dark">{row.size}</td>
                      <td className="p-4 text-gray">{row.standard}</td>
                      <td className="p-4 text-gray">{row.waterfront}</td>
                      <td className="p-4 text-gray">{row.luxury}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-dark mb-4">What Drives Lake Norman Costs Higher</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Ruler className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-dark">Larger Roof Footprints</p>
                    <p className="text-sm text-gray">Average LKN home is 30-50% larger than Charlotte metro, increasing material and labor volume</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-dark">Steeper Roof Pitches</p>
                    <p className="text-sm text-gray">Steep roofs (8:12 to 12:12 pitch) require safety equipment and slower installation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-dark">Complex Rooflines</p>
                    <p className="text-sm text-gray">More valleys, dormers, hips, and penetrations increase flashing work and waste</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-dark">HOA Material Requirements</p>
                    <p className="text-sm text-gray">Many LKN HOAs mandate premium materials above the base architectural grade</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-dark">Access Challenges</p>
                    <p className="text-sm text-gray">Hillside waterfront lots, gated entries, and narrow roads add logistics complexity</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-dark">Higher Wind Specifications</p>
                    <p className="text-sm text-gray">Lake-exposed homes need premium underlayment, enhanced fastener patterns, and high-wind rated materials</p>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/lake-norman-roofing-costs-2026" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-lg">
              See Detailed Lake Norman Pricing Guide <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CHAPTER 10: STORM DAMAGE & INSURANCE */}
      {/* ============================================================ */}
      <section id="storm-insurance" className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Storm Damage &amp; Insurance Claims on Lake Norman
            </h2>
            <p className="text-gray text-lg mb-8">
              Lake Norman sits in one of North Carolina&apos;s most active severe weather corridors.
              Understanding how to respond to storm damage and navigate insurance claims can save
              you thousands and ensure your home is properly restored.
            </p>

            <div className="bg-light rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-dark mb-4">Lake Norman Storm Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">45-50</p>
                  <p className="text-sm text-gray">Thunderstorm days/year</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">2-4</p>
                  <p className="text-sm text-gray">Significant hail events/year</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">60-80+</p>
                  <p className="text-sm text-gray">MPH peak storm gusts</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">10-20%</p>
                  <p className="text-sm text-gray">Wind amplification over lake</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-dark mb-4">Your 6-Step Storm Damage Response Plan</h3>
            <div className="space-y-4 mb-8">
              {[
                { step: '1', title: 'Document Everything', desc: 'Photograph damage from the ground immediately. Do not climb on the roof. Document interior damage (water stains, leaks) as well.' },
                { step: '2', title: 'Call Best Roofing Now', desc: 'Call (704) 605-6047 for a free emergency inspection. We respond within 1-4 hours for Lake Norman emergencies and can deploy tarps to prevent further damage.' },
                { step: '3', title: 'File Your Insurance Claim', desc: 'Contact your insurance company within 24-48 hours. Provide your initial documentation. Do not accept any settlement before a professional inspection.' },
                { step: '4', title: 'Professional Damage Assessment', desc: 'We provide a comprehensive damage report with drone photography, close-up documentation, and a detailed scope of work for your adjuster.' },
                { step: '5', title: 'Adjuster Meeting', desc: 'We meet with your insurance adjuster on-site to walk the roof together, ensuring all damage is documented and included in the claim.' },
                { step: '6', title: 'Repair or Replacement', desc: 'Once your claim is approved, we schedule your project. You pay only your deductible — insurance covers the approved scope of work.' },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 bg-light rounded-xl p-6">
                  <span className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">{item.step}</span>
                  <div>
                    <h4 className="font-bold text-dark">{item.title}</h4>
                    <p className="text-gray text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h4 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Storm Chaser Warning
              </h4>
              <p className="text-gray">
                After every major storm, out-of-state contractors descend on Lake Norman offering
                &quot;free&quot; inspections and same-day contracts. Protect yourself: never sign
                anything at the door, never let anyone pay your deductible (it is illegal), verify
                NC licensing and insurance, check Google reviews, and confirm local community
                involvement. Best Roofing Now is a permanent member of the Lake Norman community
                &mdash;{' '}
                <a href="https://business.lakenormanchamber.org/directory/details/best-roofing-now-4317292" target="_blank" rel="noopener" className="text-primary font-semibold hover:text-accent">
                  Lake Norman Chamber of Commerce
                </a>{' '}
                member, LKN SBN member &mdash; not a storm chaser passing through.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CHAPTER 11: HOA & COMMUNITY GUIDELINES */}
      {/* ============================================================ */}
      <section id="hoa-guidelines" className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              HOA &amp; Community Roofing Guidelines on Lake Norman
            </h2>
            <p className="text-gray text-lg mb-8">
              Most Lake Norman communities have Homeowners Associations with specific architectural
              guidelines governing roofing materials, colors, and installation standards. Navigating
              these requirements is a critical part of any LKN roofing project.
            </p>

            <h3 className="text-xl font-bold text-dark mb-4">Lake Norman Communities We Serve</h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left p-4 font-semibold">Community</th>
                    <th className="text-left p-4 font-semibold">City</th>
                    <th className="text-left p-4 font-semibold">Type</th>
                    <th className="text-left p-4 font-semibold">Homes</th>
                  </tr>
                </thead>
                <tbody>
                  {lknCommunities.map((c, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-light'}>
                      <td className="p-4 font-semibold text-dark">{c.name}</td>
                      <td className="p-4 text-gray">{c.city}</td>
                      <td className="p-4 text-gray">{c.type}</td>
                      <td className="p-4 text-gray">{c.homes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
              <h3 className="text-xl font-bold text-dark mb-4">Common HOA Requirements on Lake Norman</h3>
              <ul className="space-y-3 text-gray">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-dark">Material minimums:</strong> Most LKN HOAs require minimum architectural-grade shingles. Luxury communities often require designer shingles, synthetic slate, or metal.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-dark">Color palettes:</strong> Pre-approved color lists (typically earth tones, grays, charcoals, and natural tones). Color samples must be submitted for approval before ordering.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-dark">Architectural Review:</strong> Formal Architectural Change Request (ACR) required before any roofing work begins. Typical approval timeline: 2-4 weeks.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-dark">Contractor requirements:</strong> Licensed, insured, and sometimes pre-approved contractor lists. Best Roofing Now is pre-approved or has completed projects in all major LKN communities.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-dark">Dumpster and timeline rules:</strong> Restrictions on dumpster placement, work hours, and project duration. We coordinate all logistics with your HOA.</span></li>
              </ul>
            </div>

            <p className="text-gray">
              Best Roofing Now maintains a library of approved materials and colors for major Lake
              Norman communities. We handle the entire HOA submission process &mdash; from material
              selection to ACR filing to final approval &mdash; so you do not have to navigate the
              bureaucracy yourself.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CHAPTER 12: CHOOSING THE RIGHT ROOFER */}
      {/* ============================================================ */}
      <section id="choosing-roofer" className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Choosing the Right Lake Norman Roofing Contractor
            </h2>
            <p className="text-gray text-lg mb-8">
              Your roof is the single most important structural element of your home. Choosing the
              right contractor is as important as choosing the right material. Here is what separates
              a qualified Lake Norman roofer from the rest.
            </p>

            <div className="bg-light rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-dark mb-4">The 8-Point Lake Norman Roofer Checklist</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: FileText, title: 'NC General Contractor License', desc: 'Valid and current — verify at nclbgc.org' },
                  { icon: Shield, title: 'Insurance Coverage', desc: 'General liability AND workers compensation (request certificates)' },
                  { icon: Award, title: 'Manufacturer Certifications', desc: 'GAF, CertainTeed, or Owens Corning certified for enhanced warranties' },
                  { icon: Star, title: 'Verified Google Reviews', desc: 'Strong rating from LOCAL Lake Norman homeowners, not just Charlotte' },
                  { icon: BadgeCheck, title: 'BBB Accreditation', desc: 'BBB A+ or better with zero unresolved complaints' },
                  { icon: Users, title: 'Community Involvement', desc: 'Lake Norman Chamber, LKN SBN, or LKN Connect membership' },
                  { icon: ClipboardCheck, title: 'Written Warranties', desc: 'Both material AND workmanship warranties in writing before work begins' },
                  { icon: MapPin, title: 'Lake Norman Experience', desc: 'Proven track record with HOAs, waterfront, and steep-lot projects on LKN' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4">
                    <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-dark text-sm">{item.title}</p>
                      <p className="text-gray text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h4 className="font-bold text-primary mb-3">Why Best Roofing Now for Lake Norman</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" />{SITE_CONFIG.googleRating} Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" />BBB {SITE_CONFIG.bbbRating} Rated, zero complaints</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" />CertainTeed ShingleMaster certified</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" />GAF Factory-Certified contractor</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" />Veteran-owned and operated</li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" />Lake Norman Chamber of Commerce member</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" />LKN Small Business Network member</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" />LKN Connect Community member</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" />Keller Williams LKN preferred contractor</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" />200+ Lake Norman projects completed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CHAPTER 13: MAINTENANCE */}
      {/* ============================================================ */}
      <section id="maintenance" className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Maintaining Your Lake Norman Roof Year-Round
            </h2>
            <p className="text-gray text-lg mb-8">
              Proper maintenance can extend your Lake Norman roof&apos;s life by 5-10 years and
              prevent costly emergency repairs. Here is a seasonal maintenance calendar designed
              specifically for Lake Norman&apos;s climate.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-3">
                  <Leaf className="w-6 h-6 text-green-500" />
                  Spring (March-May)
                </h3>
                <ul className="space-y-2 text-gray text-sm">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Schedule professional inspection (post-winter)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Clean gutters of winter debris</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Check all flashing seals</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Treat early algae/moss growth</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Verify attic ventilation is functioning</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Trim branches within 6 feet of roof</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-3">
                  <Sun className="w-6 h-6 text-yellow-500" />
                  Summer (June-August)
                </h3>
                <ul className="space-y-2 text-gray text-sm">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />Inspect after EVERY storm event</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />Check attic temperature (should be within 10-15 degrees of outside)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />Clean debris from valleys and gutters</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />Watch for rapid algae growth (peak humidity season)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />Mid-summer inspection for lakefront properties</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />Check pipe boot seals (UV degradation peaks in summer)</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-3">
                  <CloudRain className="w-6 h-6 text-orange-500" />
                  Fall (September-November)
                </h3>
                <ul className="space-y-2 text-gray text-sm">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />Schedule professional inspection (pre-winter)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />Thorough gutter cleaning (peak leaf season)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />Check seals around all penetrations</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />Remove all debris from roof surface</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />Verify gutter guards are secure and functional</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />Check attic insulation depth (R-38 minimum)</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-3">
                  <Snowflake className="w-6 h-6 text-blue-400" />
                  Winter (December-February)
                </h3>
                <ul className="space-y-2 text-gray text-sm">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />Check for ice dams after freezing events</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />Ensure gutters and downspouts are draining</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />Monitor attic for condensation or frost</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />Remove heavy snow accumulation if over 6 inches</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />Check for fallen branches or tree damage</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />Plan spring roof project (best availability)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CHAPTER 14: VENTILATION & ENERGY */}
      {/* ============================================================ */}
      <section id="ventilation-energy" className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ventilation &amp; Energy Efficiency for Lake Norman Roofs
            </h2>
            <p className="text-gray text-lg mb-6">
              Proper attic ventilation is perhaps the most underappreciated aspect of Lake Norman
              roofing. The combination of summer heat and lake humidity creates conditions that can
              destroy a roof system from the inside out &mdash; even while the shingles look fine
              from the ground.
            </p>
            <p className="text-gray mb-6">
              A balanced ventilation system uses <strong className="text-dark">soffit vents</strong>{' '}
              (intake at the eaves) and <strong className="text-dark">ridge vents</strong> (exhaust at
              the peak) to create continuous airflow through the attic. This flow removes hot, moist air
              before it can condense on the underside of the roof deck. On Lake Norman, where ambient
              humidity regularly exceeds 70%, this airflow is critical. Without it, moisture accumulates,
              causing mold growth, plywood delamination, and premature failure of shingles from below.
            </p>
            <p className="text-gray mb-8">
              The minimum ventilation standard is 1 square foot of net free area per 150 square feet
              of attic floor space (or 1:150 ratio). For Lake Norman waterfront homes, we recommend
              exceeding this by 25% due to the elevated humidity. During a roof replacement, we
              always evaluate and upgrade ventilation as part of the project &mdash; it is one of the
              highest-ROI improvements you can make for long-term roof performance and energy savings.
            </p>
            <p className="text-gray">
              Energy-efficient roofing options for Lake Norman include reflective metal roofing
              (reduces cooling costs 10-25%), cool-colored shingles that reflect more solar radiation,
              radiant barrier underlayment that blocks heat transfer to the attic, and solar-ready
              roof systems. Given the larger square footage of Lake Norman homes, these energy
              improvements can save $500-$2,000+ annually on utility bills.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CHAPTER 15: SELLING YOUR HOME */}
      {/* ============================================================ */}
      <section id="selling-home" className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Selling Your Lake Norman Home? What You Need to Know About Your Roof
            </h2>
            <p className="text-gray text-lg mb-6">
              On Lake Norman, where the median home price exceeds $500,000 and waterfront properties
              routinely sell for over $1 million, your roof&apos;s condition is one of the first things
              buyers and their inspectors evaluate. A compromised roof can stall a sale, trigger price
              reductions, or collapse a deal entirely.
            </p>
            <p className="text-gray mb-6">
              <strong className="text-dark">Keller Williams Lake Norman agents</strong> &mdash; for whom
              Best Roofing Now is a preferred roofing contractor &mdash; consistently report that roof
              condition is in the top three buyer concerns for Lake Norman properties. Homes with aging
              or damaged roofs sit on the market 30-60 days longer and typically sell $15,000-$30,000
              below asking price as buyers demand concessions or replacements.
            </p>
            <p className="text-gray mb-6">
              Our recommendation: if you are planning to sell within 1-3 years and your roof is over
              15 years old, schedule a pre-listing inspection with Best Roofing Now. We will give you
              an honest assessment of whether replacement, targeted repairs, or a professional cleaning
              will maximize your return. A new roof with a transferable manufacturer warranty is the
              single most impactful exterior improvement for Lake Norman resale value.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CHAPTER 16: FINANCING */}
      {/* ============================================================ */}
      <section id="financing" className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Financing Your Lake Norman Roof
            </h2>
            <p className="text-gray text-lg mb-6">
              A quality roof is a significant investment, but it should not be a financial burden.
              Best Roofing Now offers multiple financing options designed to make the right roofing
              decision accessible to every Lake Norman homeowner.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-light rounded-xl p-6 text-center">
                <DollarSign className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-dark mb-2">0% Interest</h4>
                <p className="text-gray text-sm">12-18 month same-as-cash options for qualified buyers</p>
              </div>
              <div className="bg-light rounded-xl p-6 text-center">
                <Calendar className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-dark mb-2">Low Monthly Payments</h4>
                <p className="text-gray text-sm">Terms up to 144 months with no prepayment penalties</p>
              </div>
              <div className="bg-light rounded-xl p-6 text-center">
                <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-dark mb-2">Same-Day Approval</h4>
                <p className="text-gray text-sm">Quick approval process — often within hours of application</p>
              </div>
            </div>
            <p className="text-gray">
              We also coordinate directly with insurance companies for storm damage claims, ensuring
              seamless processing of approved work. For Lake Norman homeowners, visit our{' '}
              <Link href="/roof-financing-charlotte-nc" className="text-primary font-semibold hover:text-accent">
                financing page
              </Link>{' '}
              or call{' '}
              <a href={`tel:${SITE_CONFIG.phoneClean}`} className="text-primary font-semibold hover:text-accent">
                {SITE_CONFIG.phone}
              </a>{' '}
              to discuss payment options for your project.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CHAPTER 17: COMMUNITY ROOTS */}
      {/* ============================================================ */}
      <section id="community" className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Lake Norman Community Roots
            </h2>
            <p className="text-gray text-lg mb-6">
              Best Roofing Now is not just another Charlotte roofing company that services Lake Norman.
              We are deeply embedded in the Lake Norman community through formal memberships,
              partnerships, and relationships that reflect our commitment to this area.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
                <Award className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-dark">Lake Norman Chamber of Commerce</h4>
                  <p className="text-gray text-sm mt-1">
                    Active member supporting local business growth and community development
                    across all Lake Norman municipalities.
                  </p>
                  <a href="https://business.lakenormanchamber.org/directory/details/best-roofing-now-4317292" target="_blank" rel="noopener" className="text-primary text-sm font-semibold hover:text-accent mt-2 inline-block">
                    View Our Chamber Profile
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
                <Users className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-dark">LKN Small Business Network</h4>
                  <p className="text-gray text-sm mt-1">
                    Member of lknsbn.com &mdash; a trusted network of Lake Norman small businesses
                    committed to serving the local community with excellence.
                  </p>
                  <a href="https://lknsbn.com" target="_blank" rel="noopener" className="text-primary text-sm font-semibold hover:text-accent mt-2 inline-block">
                    Visit LKN SBN
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
                <Heart className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-dark">LKN Connect Community</h4>
                  <p className="text-gray text-sm mt-1">
                    Active participant in the LKN Connect Community, connecting with homeowners
                    and businesses across the Lake Norman region.
                  </p>
                  <a href="https://lknconnect.com" target="_blank" rel="noopener" className="text-primary text-sm font-semibold hover:text-accent mt-2 inline-block">
                    Find Us on LKN Connect
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
                <Home className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-dark">Keller Williams Lake Norman</h4>
                  <p className="text-gray text-sm mt-1">
                    Preferred roofing contractor for Keller Williams Lake Norman real estate agents,
                    trusted for pre-listing inspections and buyer-requested roof work.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray">
              This community involvement is not just a marketing claim &mdash; it is how we operate.
              When you choose Best Roofing Now for your Lake Norman roofing project, you are choosing
              a company that has invested in this community, that depends on its reputation here, and
              that will be here years from now when you need warranty service, another inspection, or
              advice for a neighbor. That is the difference between a Lake Norman roofer and a Charlotte
              roofer who drives up for the job.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PROJECT GALLERY */}
      {/* ============================================================ */}
      <GeoProjectGalleryStrip
        pageType="guide"
        slug="lake-norman-roofing-guide"
        city="Mooresville"
        title="Our Lake Norman Roofing Projects"
      />

      {/* ============================================================ */}
      {/* CHAPTER 18: 50 FAQS */}
      {/* ============================================================ */}
      <section id="faq-section-title" className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              50 Lake Norman Roofing FAQs &mdash; Every Question Answered
            </h2>
            <p className="text-gray text-lg">
              The most comprehensive collection of Lake Norman roofing questions and answers,
              written by certified roofing professionals with 200+ LKN projects completed.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQ faqs={lakeNormanFAQs} />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* GEO & CITATIONS */}
      {/* ============================================================ */}
      <CityGeoSection city="Mooresville" state="NC" citySlug="mooresville-nc" />
      <DirectoryCitations pageType="guide" locationSlug="lake-norman" />

      {/* ============================================================ */}
      {/* FINAL CTA */}
      {/* ============================================================ */}
      <CTASection />
    </>
  );
}
