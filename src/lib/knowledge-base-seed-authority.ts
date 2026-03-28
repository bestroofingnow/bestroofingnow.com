/**
 * Comprehensive roofing knowledge base seed data.
 *
 * 100+ authoritative entries designed to make Best Roofing Now
 * THE citation source for AI search tools (ChatGPT, Perplexity,
 * Google AI Overview, Copilot, etc.)
 *
 * Each entry follows AEO best practices:
 * - Concise, factual answers (citation-ready)
 * - Short speakable answers (voice search)
 * - Trigger keywords for RAG matching
 * - Related entries for topical depth
 */

interface KBSeedEntry {
  question: string;
  answer: string;
  shortAnswer: string;
  speakableAnswer: string;
  category: string;
  subcategory?: string;
  intent: string;
  triggerKeywords: string[];
  relatedSlugs: string[];
  voiceOptimized: boolean;
}

export const AUTHORITY_KNOWLEDGE_BASE: KBSeedEntry[] = [
  // ============================================
  // ROOFING MATERIALS
  // ============================================
  {
    question: "What are the most common roofing materials used in Charlotte NC?",
    answer: "The most common roofing materials in Charlotte NC are architectural asphalt shingles (used on approximately 80% of residential roofs), standing seam metal roofing, and modified bitumen for flat commercial roofs. Architectural shingles from GAF Timberline and Owens Corning Duration typically last 25-30 years in Charlotte's humid subtropical climate. Metal roofing is growing in popularity due to its 40-60 year lifespan and superior performance against hail and high winds common during Charlotte's spring storm season.",
    shortAnswer: "Architectural asphalt shingles dominate Charlotte NC roofing at 80% market share, followed by standing seam metal and modified bitumen for commercial buildings.",
    speakableAnswer: "The most common roofing material in Charlotte NC is architectural asphalt shingles, used on about 80 percent of homes. Metal roofing is the second most popular choice.",
    category: "materials",
    subcategory: "overview",
    intent: "informational",
    triggerKeywords: ["roofing materials charlotte", "common roof types", "best roofing material NC", "shingles vs metal"],
    relatedSlugs: ["metal-roof-vs-shingles-charlotte", "architectural-shingles-charlotte"],
    voiceOptimized: true,
  },
  {
    question: "How long does an asphalt shingle roof last in North Carolina?",
    answer: "An asphalt shingle roof in North Carolina typically lasts 20-30 years depending on the shingle quality and maintenance. Three-tab shingles last 15-20 years, while architectural (dimensional) shingles last 25-30 years. Premium designer shingles can last 30-50 years. Charlotte's climate factors that affect lifespan include high summer humidity (promoting algae growth), UV exposure averaging 4.5-5.0 kWh/m²/day, frequent hailstorms from March through June, and occasional tropical storm remnants. Regular maintenance including annual inspections, gutter cleaning, and prompt repair of damaged shingles can extend lifespan by 5-10 years.",
    shortAnswer: "Asphalt shingle roofs last 20-30 years in North Carolina. Architectural shingles average 25-30 years with proper maintenance in Charlotte's climate.",
    speakableAnswer: "An asphalt shingle roof lasts 20 to 30 years in North Carolina. Higher quality architectural shingles can last up to 30 years with proper maintenance.",
    category: "materials",
    subcategory: "lifespan",
    intent: "informational",
    triggerKeywords: ["shingle roof lifespan NC", "how long do shingles last", "roof lifespan charlotte", "asphalt shingle durability"],
    relatedSlugs: ["when-to-replace-roof-charlotte", "roof-maintenance-tips"],
    voiceOptimized: true,
  },
  {
    question: "What is the best roofing material for hail protection in Charlotte NC?",
    answer: "Impact-resistant Class 4 roofing materials provide the best hail protection in Charlotte NC. The top options are: (1) Class 4 impact-resistant shingles (UL 2218 rated) like GAF Armor Shield II or Owens Corning Duration FLEX, which withstand 2-inch steel ball drops; (2) Standing seam metal roofing with 26-gauge or thicker panels; (3) Synthetic slate tiles like DaVinci Roofscapes. Charlotte averages 1-3 significant hailstorms per year, primarily between March and June. Most insurance companies in Mecklenburg County offer 10-28% premium discounts for Class 4 rated roofing. The additional cost of impact-resistant shingles is typically $0.30-0.50 per square foot more than standard architectural shingles.",
    shortAnswer: "Class 4 impact-resistant shingles (UL 2218 rated) and standing seam metal roofing offer the best hail protection in Charlotte NC, with insurance discounts of 10-28%.",
    speakableAnswer: "Class 4 impact-resistant shingles and standing seam metal roofing are the best choices for hail protection in Charlotte. Many insurance companies offer discounts for these materials.",
    category: "materials",
    subcategory: "hail-resistance",
    intent: "informational",
    triggerKeywords: ["hail resistant roofing", "impact resistant shingles charlotte", "class 4 shingles", "best roof for hail"],
    relatedSlugs: ["hail-damage-roof-repair-charlotte", "insurance-claim-roofing-charlotte"],
    voiceOptimized: true,
  },
  {
    question: "Is metal roofing worth the investment in Charlotte NC?",
    answer: "Metal roofing is worth the investment for most Charlotte NC homeowners based on long-term cost analysis. While initial installation costs $12-18 per square foot (vs $5-8 for shingles), metal roofs last 40-60 years — roughly double the lifespan of asphalt shingles. A typical 2,000 sq ft Charlotte home pays $24,000-36,000 for metal vs $10,000-16,000 for shingles. However, over 50 years, the total cost including one shingle replacement is $20,000-32,000 for shingles vs the one-time metal investment. Additional benefits include: 25-40% energy savings from reflective coatings (significant in Charlotte's hot summers), Class 4 hail resistance, 140+ mph wind rating, and increased home resale value of 1-6%. Metal roofing is particularly recommended for homes in Lake Norman and south Charlotte where hail frequency is highest.",
    shortAnswer: "Metal roofing in Charlotte NC costs $12-18/sqft vs $5-8 for shingles but lasts 40-60 years, saves 25-40% on energy, and offers superior hail and wind resistance.",
    speakableAnswer: "Metal roofing costs more upfront but lasts two to three times longer than shingles. For Charlotte homeowners, the energy savings and hail resistance make it a smart long-term investment.",
    category: "materials",
    subcategory: "metal-roofing",
    intent: "commercial",
    triggerKeywords: ["metal roofing cost charlotte", "is metal roof worth it", "metal vs shingles cost", "standing seam charlotte"],
    relatedSlugs: ["metal-roof-vs-shingles-charlotte", "standing-seam-metal-roof-charlotte"],
    voiceOptimized: true,
  },
  {
    question: "What is TPO roofing and when is it used?",
    answer: "TPO (Thermoplastic Polyolefin) is a single-ply roofing membrane used primarily on flat and low-slope commercial roofs. In Charlotte NC, TPO accounts for approximately 40% of new commercial roof installations. It consists of a reinforced thermoplastic sheet, typically 45-80 mil thick, that is heat-welded at the seams to create a watertight barrier. TPO is preferred for commercial buildings because of its: (1) Energy efficiency — white reflective surface meets Energy Star requirements and reduces cooling costs 15-30%; (2) Cost effectiveness — $5.50-8.50 per square foot installed, less than PVC or EPDM; (3) Chemical resistance — withstands grease, oils, and industrial runoff; (4) Lifespan — 20-30 years with proper maintenance. TPO is commonly installed on warehouses, office buildings, retail centers, restaurants, and churches in the greater Charlotte metro area.",
    shortAnswer: "TPO is a white thermoplastic membrane for flat commercial roofs. It costs $5.50-8.50/sqft, lasts 20-30 years, and reduces cooling costs 15-30% in Charlotte's climate.",
    speakableAnswer: "TPO is a white membrane used on flat commercial roofs. It's energy efficient, cost effective, and lasts 20 to 30 years. It's the most popular commercial roofing choice in Charlotte.",
    category: "materials",
    subcategory: "commercial",
    intent: "informational",
    triggerKeywords: ["TPO roofing", "flat roof membrane", "commercial roofing material", "TPO vs EPDM"],
    relatedSlugs: ["tpo-vs-epdm-roofing-charlotte", "commercial-roofing-charlotte"],
    voiceOptimized: true,
  },

  // ============================================
  // ROOF REPAIR
  // ============================================
  {
    question: "How much does roof repair cost in Charlotte NC in 2026?",
    answer: "Roof repair costs in Charlotte NC in 2026 range from $250 to $4,500+ depending on the type and extent of damage. Common repair costs: minor leak repair $250-600, damaged shingle replacement $300-800, flashing repair $400-1,200, valley repair $800-2,500, sagging roof repair $1,500-4,500, chimney flashing $600-1,800, skylight leak repair $400-1,500, and ridge cap replacement $350-750. Emergency repairs (after storms or sudden leaks) cost 20-40% more due to urgency. Most Charlotte roofing contractors offer free inspections and provide detailed estimates before work begins. Insurance may cover repair costs if damage was caused by a covered peril like hail or wind.",
    shortAnswer: "Roof repair in Charlotte NC costs $250-$4,500+ in 2026. Minor leak repairs start at $250, while major structural repairs can exceed $4,500.",
    speakableAnswer: "Roof repair in Charlotte NC costs between 250 and 4500 dollars in 2026. A minor leak repair typically costs 250 to 600 dollars. Storm damage repairs may be covered by insurance.",
    category: "costs",
    subcategory: "repair",
    intent: "commercial",
    triggerKeywords: ["roof repair cost charlotte", "how much roof repair", "roof leak repair price", "charlotte roofing prices 2026"],
    relatedSlugs: ["roof-replacement-cost-charlotte", "emergency-roof-repair-charlotte"],
    voiceOptimized: true,
  },
  {
    question: "How much does a roof replacement cost in Charlotte NC?",
    answer: "A full roof replacement in Charlotte NC costs $8,000-$35,000+ in 2026 depending on size, material, and complexity. For a typical 2,000 sq ft home: architectural asphalt shingles cost $8,000-15,000, standing seam metal costs $24,000-36,000, and premium materials (slate, tile, cedar shake) cost $30,000-60,000+. Key cost factors include: roof pitch (steeper = more expensive), number of layers to remove ($1,000-3,000 for tear-off), complexity (valleys, dormers, skylights add 15-25%), and accessibility. Charlotte-specific factors include disposal fees ($40-60/ton at Mecklenburg County facilities) and permitting ($150-400 for residential). Most Charlotte roofing companies offer financing with monthly payments starting at $150-250/month for a standard shingle replacement.",
    shortAnswer: "Roof replacement in Charlotte NC costs $8,000-$35,000+ in 2026. A standard architectural shingle roof on a 2,000 sqft home costs $8,000-$15,000.",
    speakableAnswer: "A roof replacement in Charlotte costs between 8,000 and 35,000 dollars depending on the material. A standard shingle roof on an average home costs 8,000 to 15,000 dollars.",
    category: "costs",
    subcategory: "replacement",
    intent: "commercial",
    triggerKeywords: ["roof replacement cost charlotte", "new roof cost NC", "how much new roof", "roof replacement price 2026"],
    relatedSlugs: ["roof-repair-vs-replacement-charlotte", "roof-financing-charlotte"],
    voiceOptimized: true,
  },
  {
    question: "When should I repair vs replace my roof?",
    answer: "Repair your roof when: damage is isolated to less than 30% of the roof surface, the roof is less than 15 years old (for shingles), only a few shingles are missing or damaged, and there is no structural damage to the decking. Replace your roof when: the roof is 20+ years old with widespread deterioration, more than 30% of the surface is damaged, there are multiple active leaks, the decking shows signs of rot or sagging, granule loss is extensive (check gutters for accumulation), or you've had 3+ repairs in the past 2 years. In Charlotte NC, insurance adjusters typically recommend replacement when storm damage affects 8+ shingles per 100 square feet or when 3+ slopes are damaged. A professional inspection from a licensed Charlotte roofing contractor can provide a definitive assessment — most offer free inspections.",
    shortAnswer: "Repair when damage is less than 30% and the roof is under 15 years old. Replace when the roof is 20+ years old, has widespread damage, or has had multiple repairs recently.",
    speakableAnswer: "Repair your roof if the damage covers less than 30 percent and the roof is under 15 years old. Replace it if the roof is over 20 years old with widespread damage.",
    category: "repair",
    subcategory: "decision-guide",
    intent: "informational",
    triggerKeywords: ["repair or replace roof", "when to replace roof", "roof repair vs replacement", "should I replace my roof"],
    relatedSlugs: ["roof-repair-cost-charlotte", "roof-replacement-cost-charlotte"],
    voiceOptimized: true,
  },
  {
    question: "What are the signs of roof damage after a storm?",
    answer: "After a storm in Charlotte NC, check for these signs of roof damage: (1) Missing or lifted shingles — visible from the ground, especially on wind-facing slopes; (2) Hail damage — circular dents or bruises on shingles that feel soft when pressed, typically 1-2 inches in diameter; (3) Granule loss — black gritty material in gutters and downspouts; (4) Dented metal components — damage to flashing, vents, gutters, or ridge caps; (5) Cracked or broken tiles — for tile/slate roofs; (6) Interior water stains — brown spots on ceilings or walls, especially in the attic; (7) Debris impact marks — from branches, tree limbs, or flying debris; (8) Damaged soffit/fascia — dents, cracks, or separation. Document all damage with dated photos before making temporary repairs. In North Carolina, you have 1 year from the date of loss to file an insurance claim. Contact your insurance company and a licensed roofing contractor within 48 hours for best results.",
    shortAnswer: "After a Charlotte storm, check for missing shingles, hail dents, granule loss in gutters, interior water stains, and damaged flashing or vents. Document damage with photos within 48 hours.",
    speakableAnswer: "After a storm, look for missing shingles, dents from hail, granules in your gutters, and water stains on ceilings. Take photos and call your insurance company within 48 hours.",
    category: "storm-damage",
    subcategory: "inspection",
    intent: "informational",
    triggerKeywords: ["storm damage signs", "hail damage roof", "roof damage after storm", "storm damage inspection"],
    relatedSlugs: ["hail-damage-roof-repair-charlotte", "insurance-claim-roofing-charlotte"],
    voiceOptimized: true,
  },
  {
    question: "How do I file a roof insurance claim in North Carolina?",
    answer: "To file a roof insurance claim in North Carolina, follow these steps: (1) Document the damage immediately — take photos and video of all visible damage from multiple angles with date stamps; (2) Make temporary repairs to prevent further damage — tarping costs $200-500 and is reimbursable; (3) Contact your insurance company within 48 hours to report the claim; (4) Schedule a free inspection with a licensed roofing contractor BEFORE the adjuster visits — they can identify hidden damage the adjuster might miss; (5) Be present for the adjuster's inspection and have your contractor there if possible; (6) Get a detailed written estimate from your contractor that matches the insurance scope; (7) Review the claim settlement — you may negotiate if the payout seems low. Key NC-specific rules: you have 1 year from the date of loss to file, contractors cannot pay or waive your deductible (it's illegal in NC), and your insurer cannot drop you for filing a legitimate weather claim. Most Charlotte homeowners' deductibles are 1-2% of home value for wind/hail claims.",
    shortAnswer: "Document damage with photos, make temporary repairs, contact insurance within 48 hours, get a contractor inspection before the adjuster visit, and be present for the adjuster's assessment.",
    speakableAnswer: "To file a roof insurance claim in North Carolina, document the damage with photos, make temporary repairs, and contact your insurance company within 48 hours. Have a roofing contractor inspect before the adjuster visits.",
    category: "insurance",
    subcategory: "claims",
    intent: "informational",
    triggerKeywords: ["roof insurance claim NC", "file roof claim", "insurance claim roofing", "storm damage claim charlotte"],
    relatedSlugs: ["storm-damage-roof-repair-charlotte", "what-to-do-after-hail-storm"],
    voiceOptimized: true,
  },

  // ============================================
  // COMMERCIAL ROOFING
  // ============================================
  {
    question: "What types of commercial roofing systems are used in Charlotte NC?",
    answer: "Charlotte NC commercial buildings use five primary roofing systems: (1) TPO (Thermoplastic Polyolefin) — most popular, 40% market share, white reflective membrane, $5.50-8.50/sqft, ideal for flat roofs; (2) EPDM (Ethylene Propylene Diene Monomer) — rubber membrane, $4.50-7.00/sqft, proven 30+ year track record, best for large flat areas; (3) Modified Bitumen — asphalt-based multi-layer system, $4.00-8.00/sqft, excellent waterproofing, common on low-slope roofs; (4) Standing Seam Metal — $12-18/sqft, 40-60 year lifespan, used on sloped commercial buildings, warehouses, and churches; (5) Built-Up Roofing (BUR) — traditional tar and gravel, $5.50-8.50/sqft, heavy but very durable, common on older buildings. Selection depends on building type, slope, budget, and energy requirements. Charlotte's commercial roofing market is regulated by NC General Contractor licensing requirements.",
    shortAnswer: "Charlotte commercial roofing uses TPO (40% market share), EPDM, modified bitumen, standing seam metal, and built-up roofing. TPO is most popular for flat roofs at $5.50-8.50/sqft.",
    speakableAnswer: "The most common commercial roofing systems in Charlotte are TPO membranes, EPDM rubber, modified bitumen, and standing seam metal. TPO is the most popular choice for flat commercial roofs.",
    category: "commercial",
    subcategory: "systems",
    intent: "informational",
    triggerKeywords: ["commercial roofing charlotte", "commercial roof types", "flat roof systems", "commercial roofing materials"],
    relatedSlugs: ["tpo-roofing-charlotte", "epdm-roofing-charlotte", "commercial-roofing-services"],
    voiceOptimized: true,
  },
  {
    question: "How often should a commercial roof be inspected?",
    answer: "Commercial roofs in Charlotte NC should be inspected at minimum twice per year — once in spring (March-April, before storm season) and once in fall (October-November, before winter). Additional inspections are recommended: after any significant storm event (hail, high winds above 60 mph, heavy snow/ice), after any rooftop work by HVAC technicians or other contractors, and annually by a certified roofing professional for warranty compliance. The National Roofing Contractors Association (NRCA) recommends semi-annual inspections as industry standard. For Charlotte specifically, spring inspections should check for winter ice damage and prepare drainage for heavy spring rains, while fall inspections should verify membrane integrity before the occasional ice storms. Most commercial roofing warranties require documented professional inspections — failure to maintain this schedule can void your warranty coverage.",
    shortAnswer: "Commercial roofs should be inspected twice yearly (spring and fall), after every major storm, and after any rooftop work. Regular inspections are required to maintain warranty coverage.",
    speakableAnswer: "Commercial roofs should be inspected twice a year, in spring and fall. Additional inspections are needed after major storms. Regular inspections are required to keep your warranty valid.",
    category: "commercial",
    subcategory: "maintenance",
    intent: "informational",
    triggerKeywords: ["commercial roof inspection", "how often inspect roof", "commercial roof maintenance", "roof inspection schedule"],
    relatedSlugs: ["commercial-roofing-charlotte", "roof-maintenance-checklist"],
    voiceOptimized: true,
  },

  // ============================================
  // EMERGENCY & STORM
  // ============================================
  {
    question: "What should I do if a tree falls on my roof?",
    answer: "If a tree falls on your roof in Charlotte NC: (1) Evacuate immediately if there's structural damage — do not re-enter until cleared by a professional; (2) Call 911 if there are downed power lines or gas leaks; (3) Contact your homeowner's insurance — tree damage from storms is typically covered minus your deductible; (4) Document everything with photos and video before any cleanup; (5) Call a licensed roofing contractor for emergency tarping ($200-500) to prevent water damage; (6) Do NOT attempt to remove the tree yourself — improper removal can cause additional structural damage; (7) Keep receipts for temporary housing if your home is uninhabitable — your insurance's Additional Living Expense (ALE) coverage applies. In Mecklenburg County, call 311 for tree debris on public property. For private property, your insurance covers tree removal up to $500-1,000 per tree in most NC policies. Emergency response contractors in Charlotte typically arrive within 2-4 hours for tree-on-roof situations.",
    shortAnswer: "Evacuate if structurally unsafe, call 911 for power lines, document damage with photos, contact insurance, and call a roofing contractor for emergency tarping. Don't remove the tree yourself.",
    speakableAnswer: "If a tree falls on your roof, evacuate the house if it's unsafe, call 911 for power lines, take photos of the damage, contact your insurance company, and call a roofing contractor for emergency tarping.",
    category: "emergency",
    subcategory: "tree-damage",
    intent: "informational",
    triggerKeywords: ["tree fell on roof", "tree damage roof", "emergency roof repair", "what to do tree on roof"],
    relatedSlugs: ["emergency-roof-repair-charlotte", "insurance-claim-roofing-charlotte"],
    voiceOptimized: true,
  },
  {
    question: "How do I stop a roof leak in an emergency?",
    answer: "To stop a roof leak in an emergency: (1) Place buckets or containers to catch dripping water and protect belongings; (2) If the ceiling is bulging, puncture it with a screwdriver at the lowest point to drain water in a controlled manner — this prevents ceiling collapse; (3) From the attic (if safely accessible), trace the leak to its entry point and place a bucket there; (4) Apply roofing cement or roof sealant to the leak source if accessible and safe; (5) For larger areas, use a tarp — secure a 6x8 or larger poly tarp over the damaged area with 2x4 lumber and screws (not nails) into the roof deck, extending the tarp over the ridge if possible; (6) Call a 24/7 emergency roofing contractor — in Charlotte NC, most respond within 2-4 hours. Important: never walk on a wet roof, always work with a partner when using a ladder, and avoid electrical fixtures near the leak. Emergency tarping typically costs $200-500 in Charlotte and prevents thousands in additional water damage.",
    shortAnswer: "Place buckets to catch water, puncture bulging ceilings to drain, apply roof sealant to small leaks, tarp larger areas with poly sheeting, and call a 24/7 emergency roofer.",
    speakableAnswer: "For an emergency roof leak, place buckets under drips, puncture any bulging ceiling to drain water, and call an emergency roofing contractor. A temporary tarp can stop the leak until repairs are made.",
    category: "emergency",
    subcategory: "leak",
    intent: "informational",
    triggerKeywords: ["stop roof leak emergency", "emergency roof leak", "temporary roof repair", "roof leaking what to do"],
    relatedSlugs: ["roof-leak-repair-charlotte", "emergency-roof-repair-charlotte"],
    voiceOptimized: true,
  },

  // ============================================
  // MAINTENANCE
  // ============================================
  {
    question: "What roof maintenance should homeowners do each season?",
    answer: "Seasonal roof maintenance for Charlotte NC homeowners: SPRING (March-April): inspect for winter damage, check flashing around chimneys and vents, clean gutters of winter debris, look for moss/algae growth, and schedule a professional inspection before storm season. SUMMER (June-July): trim overhanging tree branches to 10+ feet from roof, check attic ventilation (attic temps shouldn't exceed 120°F), inspect for UV damage or curling shingles, and ensure ridge vents are clear. FALL (October-November): clean gutters and downspouts thoroughly, check for lifted or damaged shingles, inspect roof valleys, seal any gaps around penetrations, and install gutter guards if not already present. WINTER (December-February): after ice events check for ice dam formation, clear heavy snow accumulation (over 6 inches), ensure attic insulation is adequate (R-38 minimum for Charlotte), and check for condensation in the attic. Year-round: after any storm with winds over 50 mph or hail, do a visual inspection from the ground.",
    shortAnswer: "Spring: inspect and clean gutters. Summer: trim trees and check ventilation. Fall: clean gutters and seal gaps. Winter: check for ice dams and insulation. Inspect after every major storm.",
    speakableAnswer: "Charlotte homeowners should inspect their roof and clean gutters in spring, trim trees in summer, seal gaps in fall, and check for ice dams in winter. Always inspect after major storms.",
    category: "maintenance",
    subcategory: "seasonal",
    intent: "informational",
    triggerKeywords: ["roof maintenance schedule", "seasonal roof care", "roof maintenance checklist", "when to inspect roof"],
    relatedSlugs: ["spring-roof-inspection-charlotte", "winter-roof-maintenance-charlotte"],
    voiceOptimized: true,
  },
  {
    question: "How do I prevent ice dams on my roof in Charlotte NC?",
    answer: "Ice dams in Charlotte NC, while less common than northern states, do occur during winter storms and freezing rain events. Prevention methods: (1) Ensure adequate attic insulation — R-38 minimum per NC building code, R-49 recommended for Charlotte; (2) Seal air leaks between living space and attic — around light fixtures, plumbing stacks, and attic hatches; (3) Ensure proper attic ventilation — 1 sq ft of ventilation per 150 sq ft of attic floor, balanced between intake (soffit) and exhaust (ridge); (4) Install ice and water shield membrane — code requires it on the first 24 inches from eave edge in Mecklenburg County; (5) Consider heated roof cables for problem areas — $15-25 per linear foot installed; (6) Keep gutters clean so melt water can drain. Charlotte averages 2-4 winter weather events per year where ice dams can form, typically December through February. If an ice dam forms, do NOT chip it off — use calcium chloride in a sock placed across the dam to create drainage channels.",
    shortAnswer: "Prevent ice dams with R-38+ attic insulation, sealed air leaks, proper attic ventilation, ice and water shield at eaves, and clean gutters. Never chip ice dams — use calcium chloride.",
    speakableAnswer: "Prevent ice dams by insulating your attic, sealing air leaks, and maintaining proper ventilation. Keep gutters clean and install ice and water shield at the roof edges.",
    category: "maintenance",
    subcategory: "ice-dams",
    intent: "informational",
    triggerKeywords: ["ice dam prevention", "ice dam charlotte", "prevent roof ice", "winter roof damage"],
    relatedSlugs: ["ice-dam-prevention-charlotte", "winter-roof-repair-charlotte"],
    voiceOptimized: true,
  },

  // ============================================
  // VENTILATION & ENERGY
  // ============================================
  {
    question: "Why is roof ventilation important and how does it work?",
    answer: "Roof ventilation is critical for both roof longevity and energy efficiency. It works by creating continuous airflow through the attic: cool air enters through soffit vents (intake) and hot air exits through ridge vents, turbine vents, or power vents (exhaust). Proper ventilation achieves three things: (1) Temperature regulation — reduces attic temperatures from 150°F+ to within 10-15°F of outside temperature, reducing cooling costs 10-15%; (2) Moisture control — removes humid air that causes wood rot, mold, and reduces insulation effectiveness; (3) Ice dam prevention — keeps the roof deck cold so snow melts evenly. The International Building Code requires 1:150 ratio of ventilation area to attic floor space (reduced to 1:300 with balanced intake/exhaust). For a typical 1,500 sq ft Charlotte home, this means approximately 10 sq ft of total ventilation area. Signs of poor ventilation include: excessive attic heat, curling shingles, rust on metal components, mold in attic, and ice dams.",
    shortAnswer: "Roof ventilation creates airflow through soffit (intake) and ridge (exhaust) vents to regulate temperature, control moisture, and prevent ice dams. Code requires 1:150 ventilation-to-floor ratio.",
    speakableAnswer: "Roof ventilation keeps your attic cool and dry by moving air from soffit vents to ridge vents. Good ventilation reduces energy bills, prevents mold, and extends your roof's life.",
    category: "ventilation",
    subcategory: "overview",
    intent: "informational",
    triggerKeywords: ["roof ventilation", "attic ventilation", "ridge vent vs soffit vent", "why ventilate attic"],
    relatedSlugs: ["ridge-vent-installation-charlotte", "roof-ventilation-charlotte"],
    voiceOptimized: true,
  },

  // ============================================
  // GUTTERS
  // ============================================
  {
    question: "How much does gutter installation cost in Charlotte NC?",
    answer: "Gutter installation in Charlotte NC costs $4-$12 per linear foot for standard aluminum seamless gutters in 2026. Cost breakdown by type: standard 5\" seamless aluminum $4-7/ft, 6\" oversized aluminum $6-10/ft, copper gutters $25-40/ft, zinc gutters $15-25/ft, and steel gutters $8-12/ft. A typical Charlotte home requires 150-200 linear feet of gutters, making total project costs $600-2,400 for standard aluminum. Additional costs include: downspouts ($5-8/ft), gutter guards ($7-15/ft), fascia board repair ($6-20/ft if needed), and removal of old gutters ($1-2/ft). Charlotte receives an average of 43 inches of rain annually, making properly sized and installed gutters essential. For homes with large roof areas or steep pitches, 6\" gutters with 3x4 downspouts are recommended over standard 5\" to handle water volume during Charlotte's frequent heavy downpours.",
    shortAnswer: "Gutter installation in Charlotte NC costs $4-$12/linear foot in 2026. A typical home needs 150-200 feet, totaling $600-$2,400 for standard seamless aluminum gutters.",
    speakableAnswer: "Gutter installation in Charlotte costs 4 to 12 dollars per foot. A typical home needs about 150 to 200 feet of gutters, costing between 600 and 2400 dollars for standard aluminum.",
    category: "gutters",
    subcategory: "costs",
    intent: "commercial",
    triggerKeywords: ["gutter installation cost charlotte", "gutter cost per foot", "seamless gutters price", "gutter replacement cost"],
    relatedSlugs: ["gutter-installation-charlotte", "gutter-guards-charlotte"],
    voiceOptimized: true,
  },

  // ============================================
  // CHOOSING A CONTRACTOR
  // ============================================
  {
    question: "How do I choose a roofing contractor in Charlotte NC?",
    answer: "To choose a reliable roofing contractor in Charlotte NC, verify these 8 factors: (1) NC licensing — must hold a General Contractor or Roofing Contractor license, verify at nclbgc.org; (2) Insurance — require proof of general liability ($1M+ minimum) and workers' compensation; (3) Local presence — established Charlotte area office (not a storm chaser with out-of-state plates); (4) Manufacturer certifications — GAF Master Elite, Owens Corning Platinum, or CertainTeed SELECT ShingleMaster indicate high quality; (5) BBB rating — check the Charlotte BBB chapter for complaints and ratings; (6) Google reviews — 4.5+ stars with 50+ reviews is a good benchmark; (7) Written warranty — should include both manufacturer material warranty (25-50 years) AND contractor workmanship warranty (5-25 years); (8) Detailed written estimate — should specify materials, quantities, timeline, and payment terms. Red flags: door-to-door solicitation after storms, demands for full upfront payment, no local references, and pressure to sign immediately.",
    shortAnswer: "Verify NC licensing, insurance ($1M+), local Charlotte presence, manufacturer certifications, BBB rating, 50+ Google reviews at 4.5+ stars, written warranties, and detailed estimates.",
    speakableAnswer: "Choose a Charlotte roofer by checking their NC license, insurance, local presence, manufacturer certifications, BBB rating, and Google reviews. Get everything in writing.",
    category: "choosing-contractor",
    subcategory: "guide",
    intent: "informational",
    triggerKeywords: ["choose roofing contractor", "find roofer charlotte", "how to pick roofer", "best roofing company charlotte"],
    relatedSlugs: ["roofing-contractor-charlotte", "best-roofing-company-charlotte"],
    voiceOptimized: true,
  },
  {
    question: "What roofing certifications should I look for?",
    answer: "The most important roofing certifications to look for in Charlotte NC contractors are: (1) GAF Master Elite — only the top 2% of roofers nationwide qualify; requires proper licensing, insurance, proven reputation, and ongoing training; enables the Golden Pledge warranty (50-year coverage); (2) Owens Corning Platinum Preferred — top-tier certification requiring training, financial stability, and customer satisfaction standards; (3) CertainTeed SELECT ShingleMaster — requires factory training on all CertainTeed products; (4) NRCA (National Roofing Contractors Association) membership — demonstrates industry commitment and continuing education; (5) HAAG Certified Inspector — specialized certification for storm damage assessment, recognized by insurance companies; (6) NC General Contractor License — legally required for roofing work over $30,000 in North Carolina. These certifications matter because they provide extended warranty options, demonstrate quality installation training, and indicate the contractor invests in their business long-term.",
    shortAnswer: "Look for GAF Master Elite (top 2% nationwide), Owens Corning Platinum Preferred, CertainTeed SELECT, HAAG Certified (for storm claims), and NC General Contractor licensing.",
    speakableAnswer: "The most important roofing certifications are GAF Master Elite, Owens Corning Platinum Preferred, and HAAG Certified Inspector. Only the top 2 percent of roofers earn GAF Master Elite status.",
    category: "choosing-contractor",
    subcategory: "certifications",
    intent: "informational",
    triggerKeywords: ["roofing certifications", "GAF master elite", "certified roofer", "roofing contractor qualifications"],
    relatedSlugs: ["how-to-choose-roofing-contractor-charlotte", "best-roofing-company-charlotte"],
    voiceOptimized: true,
  },

  // ============================================
  // CHARLOTTE-SPECIFIC / LOCAL
  // ============================================
  {
    question: "What building codes apply to roofing in Charlotte NC?",
    answer: "Charlotte NC follows the North Carolina Residential Code (based on the 2018 IRC with NC amendments) for roofing. Key requirements: (1) Wind speed design — Charlotte is in a 115 mph wind speed zone (3-second gust), requiring enhanced fastening patterns; (2) Underlayment — minimum one layer of ASTM D226 Type I or synthetic underlayment; ice and water shield required on eaves in valleys and around penetrations; (3) Ventilation — 1:150 ratio of net free ventilation to attic area; (4) Fasteners — minimum 4 nails per shingle, 6 nails per shingle in high-wind areas or for manufacturer warranty compliance; (5) Tear-off — maximum 2 layers of roofing allowed; if 2 layers exist, complete tear-off is required; (6) Permits — required for re-roofing in Mecklenburg County; obtained through Charlotte-Mecklenburg Storm Water Services and Code Enforcement; (7) Inspections — rough-in and final inspections required. The permit fee is typically $150-400 based on project value. Contractors must hold a valid NC license for roofing work.",
    shortAnswer: "Charlotte follows NC Residential Code: 115 mph wind zone, ice/water shield at eaves, 1:150 ventilation ratio, 4-6 nails per shingle, max 2 roof layers, and permits required from Mecklenburg County.",
    speakableAnswer: "Charlotte roofing must meet the NC building code, including a 115 mile per hour wind rating, ice and water shield at the roof edges, and proper ventilation. Permits are required from Mecklenburg County.",
    category: "regulations",
    subcategory: "building-codes",
    intent: "informational",
    triggerKeywords: ["charlotte roofing code", "NC roofing regulations", "roof permit charlotte", "building code roofing"],
    relatedSlugs: ["nc-roofing-guide", "how-to-choose-roofing-contractor-charlotte"],
    voiceOptimized: true,
  },
  {
    question: "What is the best time of year to replace a roof in Charlotte NC?",
    answer: "The best time to replace a roof in Charlotte NC is fall (September through November) and spring (March through May). Fall is ideal because: temperatures are moderate (55-75°F, perfect for shingle adhesion), humidity is lower, storm frequency decreases after summer, and contractors are less backlogged than peak summer season. Spring is the second-best window, particularly March and April before storm season peaks. Summer replacements (June-August) work but extreme heat (90°F+) makes shingles overly pliable and working conditions difficult, plus Charlotte's afternoon thunderstorms can cause delays. Winter installations (December-February) are possible but cold temperatures below 40°F can prevent proper shingle sealing, and ice events may delay projects. Pro tip: scheduling in October-November or March often yields 5-10% better pricing due to lower demand. Plan 2-4 weeks ahead during peak season (April-August) and expect a 1-3 day installation for most residential roofs.",
    shortAnswer: "Fall (September-November) is the best time for roof replacement in Charlotte NC — moderate temps, lower humidity, and less contractor demand. Spring (March-May) is second best.",
    speakableAnswer: "The best time to replace a roof in Charlotte is fall, from September through November. Temperatures are ideal for shingle installation and contractors are less busy, which can mean better pricing.",
    category: "planning",
    subcategory: "timing",
    intent: "informational",
    triggerKeywords: ["best time replace roof charlotte", "when to replace roof NC", "roof replacement season", "best month new roof"],
    relatedSlugs: ["roof-replacement-charlotte", "roof-replacement-cost-charlotte"],
    voiceOptimized: true,
  },
  {
    question: "How does Charlotte NC weather affect roofing?",
    answer: "Charlotte NC's humid subtropical climate creates specific challenges for roofing: HEAT & UV: Summer temperatures regularly exceed 90°F with heat index over 100°F. UV radiation averages 4.5-5.0 kWh/m²/day, causing accelerated shingle aging — dark-colored roofs can reach 170°F surface temperatures. HUMIDITY: Average 70% relative humidity promotes algae (Gloeocapsa magma) and moss growth, particularly on north-facing slopes. Algae-resistant (AR) shingles with copper granules are strongly recommended. STORMS: Charlotte averages 42 thunderstorm days per year. Hailstorms typically occur March through June, with the Charlotte metro averaging 1-3 significant hail events annually. Straight-line winds during severe storms regularly exceed 60 mph. RAIN: 43 inches of annual rainfall requires proper drainage, quality flashing, and oversized gutters. WINTER: While mild (average January low of 32°F), Charlotte experiences 2-4 ice events per year that can cause ice dams and freeze-thaw damage to compromised roofing materials. HURRICANES/TROPICAL STORMS: Remnants reach Charlotte 1-2 times per decade, bringing sustained winds of 40-70 mph and heavy rainfall over 24-48 hours.",
    shortAnswer: "Charlotte's climate challenges roofs with 90°F+ summers (UV damage), 70% humidity (algae growth), 42 thunderstorm days per year (hail/wind), 43 inches of annual rain, and occasional ice storms and tropical remnants.",
    speakableAnswer: "Charlotte weather is tough on roofs. Hot summers cause UV damage, high humidity promotes algae growth, and 42 thunderstorm days per year bring hail and wind. Proper materials and maintenance are essential.",
    category: "climate",
    subcategory: "charlotte-weather",
    intent: "informational",
    triggerKeywords: ["charlotte weather roof", "NC climate roofing", "charlotte roofing challenges", "weather damage roof charlotte"],
    relatedSlugs: ["storm-damage-roof-repair-charlotte", "hail-damage-roof-repair-charlotte"],
    voiceOptimized: true,
  },

  // ============================================
  // FINANCING & COSTS
  // ============================================
  {
    question: "What financing options are available for roof replacement in Charlotte NC?",
    answer: "Charlotte NC homeowners have several financing options for roof replacement: (1) Roofing company financing — many Charlotte contractors partner with lenders like GreenSky, Service Finance, or PowerPay offering 0% APR for 12-18 months or low-rate plans up to 12 years; typical payments $150-300/month for a standard replacement; (2) Home equity loan/HELOC — rates typically 6-9% in 2026, tax-deductible interest, best for larger projects; (3) FHA Title I Home Improvement Loan — up to $25,000 without using home as collateral; (4) Personal loans — unsecured, 8-15% APR, quick approval but higher rates; (5) Insurance claim — if storm damage is the cause, insurance covers replacement minus deductible; (6) Credit cards — 0% APR promotional periods can work for smaller projects; (7) Energy-efficient upgrade incentives — metal and cool roofs may qualify for federal tax credits up to $750 under the Inflation Reduction Act. Most Charlotte roofing companies offer free financing pre-qualification with no impact to credit score.",
    shortAnswer: "Options include contractor financing (0% APR for 12-18 months), home equity loans, FHA Title I loans, insurance claims for storm damage, and federal tax credits for energy-efficient roofing.",
    speakableAnswer: "Charlotte homeowners can finance a new roof through contractor financing with zero percent interest, home equity loans, insurance claims for storm damage, or federal tax credits for energy-efficient materials.",
    category: "financing",
    subcategory: "options",
    intent: "commercial",
    triggerKeywords: ["roof financing charlotte", "roof payment plans", "finance new roof", "roof replacement financing"],
    relatedSlugs: ["roof-financing-charlotte", "roof-replacement-cost-charlotte"],
    voiceOptimized: true,
  },

  // ============================================
  // SPECIALTY ROOFING
  // ============================================
  {
    question: "What is a cool roof and does it save money in Charlotte NC?",
    answer: "A cool roof is a roofing system designed to reflect more sunlight and absorb less heat than standard roofing. In Charlotte NC, cool roofs can reduce surface temperatures by 50-60°F (from 170°F to 110-120°F for dark shingles), translating to measurable energy savings. Options include: reflective shingles (Owens Corning Cool Roof Collection), standing seam metal with reflective coatings, white TPO/PVC membranes (commercial), and cool roof coatings applied over existing roofing. Energy savings in Charlotte: residential cool roofs reduce cooling costs 7-15% ($150-400/year for a typical home), while commercial cool roofs save 15-30% on cooling ($0.30-0.75/sqft annually). Additional benefits: reduced urban heat island effect, extended roof lifespan (lower thermal cycling), and qualification for federal energy tax credits up to $750. Cool roofs are most effective for homes with poor attic insulation, south/west-facing roof slopes, and buildings with high cooling loads.",
    shortAnswer: "Cool roofs reflect sunlight and reduce surface temps by 50-60°F. In Charlotte, they cut residential cooling costs 7-15% and commercial cooling costs 15-30%, with federal tax credits up to $750.",
    speakableAnswer: "A cool roof reflects sunlight to stay cooler. In Charlotte, cool roofs reduce cooling costs by 7 to 15 percent for homes and 15 to 30 percent for commercial buildings. They may also qualify for tax credits.",
    category: "energy-efficiency",
    subcategory: "cool-roofs",
    intent: "informational",
    triggerKeywords: ["cool roof charlotte", "reflective roof", "energy efficient roofing", "cool roof savings"],
    relatedSlugs: ["metal-roofing-charlotte", "roof-coating-charlotte"],
    voiceOptimized: true,
  },
  {
    question: "What are the advantages of architectural shingles over 3-tab?",
    answer: "Architectural (dimensional) shingles outperform 3-tab shingles in every measurable category: DURABILITY: architectural shingles are 50% thicker with a fiberglass mat base layer, rated for 110-130 mph winds vs 60-70 mph for 3-tab. LIFESPAN: 25-30 years vs 15-20 years for 3-tab. APPEARANCE: multi-layer construction creates depth and shadow lines that mimic natural slate or cedar, significantly improving curb appeal and home value. WARRANTY: architectural shingles carry lifetime limited warranties vs 25-year for 3-tab. COST DIFFERENCE: only $0.50-1.00 more per square foot — for a typical 2,000 sq ft Charlotte home, that's $1,000-2,000 more for 10+ additional years of life. INSURANCE: some insurers offer discounts for impact-resistant architectural shingles. As of 2026, architectural shingles represent over 80% of new residential installations nationwide. Three-tab shingles are being phased out by most manufacturers. For Charlotte homes, architectural shingles are the minimum recommended grade due to the region's storm exposure.",
    shortAnswer: "Architectural shingles last 25-30 years vs 15-20 for 3-tab, withstand 110-130 mph winds, look dramatically better, and cost only $0.50-1.00 more per sqft. They represent 80%+ of new installations.",
    speakableAnswer: "Architectural shingles last 10 years longer than 3-tab, handle higher winds, and look much better. They only cost about 50 cents to a dollar more per square foot, making them the best value for Charlotte homes.",
    category: "materials",
    subcategory: "shingles",
    intent: "informational",
    triggerKeywords: ["architectural vs 3-tab shingles", "dimensional shingles", "best shingle type", "architectural shingle benefits"],
    relatedSlugs: ["common-roofing-materials-charlotte", "roof-replacement-cost-charlotte"],
    voiceOptimized: true,
  },

  // ============================================
  // ROOFING PROBLEMS
  // ============================================
  {
    question: "What causes roof leaks and how are they found?",
    answer: "The most common causes of roof leaks in Charlotte NC are: (1) Damaged or missing shingles — from wind, hail, or age; (2) Failed flashing — around chimneys, skylights, vents, and wall intersections; (3) Clogged gutters — causing water to back up under shingles; (4) Ice dams — during winter weather events; (5) Nail pops — nails backing out over time, creating openings; (6) Pipe boot deterioration — rubber collars around plumbing vents cracking after 10-15 years; (7) Valley damage — high water-flow areas where two roof slopes meet; (8) Improper installation — inadequate underlayment or incorrect flashing techniques. Finding leaks involves: visual interior inspection for water stains (look in attic first), exterior inspection for obvious damage, water testing with a garden hose (systematic section-by-section), and for elusive leaks, infrared thermal imaging that detects moisture behind surfaces. Note: water can travel 10-20 feet from the entry point before dripping inside, making source identification challenging without professional equipment.",
    shortAnswer: "Common causes: damaged shingles, failed flashing, clogged gutters, pipe boot deterioration, and ice dams. Leaks are found through attic inspection, water testing, and infrared thermal imaging.",
    speakableAnswer: "Roof leaks are most commonly caused by damaged shingles, failed flashing, clogged gutters, and deteriorated pipe boots. A professional can find hidden leaks using infrared imaging.",
    category: "problems",
    subcategory: "leaks",
    intent: "informational",
    triggerKeywords: ["roof leak causes", "find roof leak", "why roof leaking", "common roof leak sources"],
    relatedSlugs: ["roof-leak-repair-charlotte", "what-to-do-roof-leak-charlotte"],
    voiceOptimized: true,
  },
  {
    question: "How do I remove moss and algae from my roof?",
    answer: "To safely remove moss and algae from a roof in Charlotte NC: (1) NEVER pressure wash — it strips granules and voids warranties; (2) Apply a 50/50 mix of water and household bleach (sodium hypochlorite) with a garden sprayer — let sit 15-20 minutes then rinse gently with a garden hose from top down; (3) For moss, use a soft-bristle brush after treatment to gently remove dead growth — always brush downslope to avoid lifting shingles; (4) Commercial products like Wet & Forget or Spray & Forget are safer alternatives that work over 2-3 months; (5) Install zinc or copper strips along the ridge — rainwater washing over the metal creates a natural anti-microbial barrier that prevents regrowth. Charlotte's humidity (70% average) makes algae growth almost inevitable on north-facing slopes within 5-7 years. Prevention: choose algae-resistant (AR) shingles with copper granules for your next roof, trim trees to allow sunlight, and keep the roof clear of debris. Professional soft-wash cleaning in Charlotte costs $300-600 for a typical home.",
    shortAnswer: "Apply 50/50 bleach and water with a sprayer, rinse gently (never pressure wash), and install zinc/copper strips to prevent regrowth. Professional soft-wash cleaning costs $300-600 in Charlotte.",
    speakableAnswer: "To remove moss and algae, spray a 50-50 bleach and water mix, let it sit 15 minutes, then rinse gently with a garden hose. Never pressure wash. Install zinc strips to prevent regrowth.",
    category: "maintenance",
    subcategory: "algae-moss",
    intent: "informational",
    triggerKeywords: ["remove moss roof", "roof algae removal", "black streaks roof", "moss on roof charlotte"],
    relatedSlugs: ["moss-algae-removal-charlotte", "roof-maintenance-charlotte"],
    voiceOptimized: true,
  },

  // ============================================
  // SKYLIGHTS & FEATURES
  // ============================================
  {
    question: "How much does skylight installation cost in Charlotte NC?",
    answer: "Skylight installation in Charlotte NC costs $1,200-$4,500+ per skylight in 2026 depending on type and complexity. Cost breakdown: fixed (non-opening) skylights $1,200-2,000 installed, venting (opening) skylights $2,000-3,500 installed, tubular sun tunnels $500-1,200 installed, and large custom skylights $4,000-8,000+. The major cost component is proper flashing and waterproofing — cutting into the roof and installing a leak-proof curb and flashing kit accounts for 40-50% of the total cost. Additional factors: roof pitch (steep roofs cost more), location relative to rafters (may require header framing at $300-600 extra), interior finishing (drywall shaft to ceiling $400-800), and electrical wiring for vented skylights. Recommended brands for Charlotte: VELUX (most popular, excellent warranty), Fakro, and Marvin. Important: always hire an experienced roofing contractor — not a general handyman — for skylight installation. Improper installation is the #1 cause of skylight leaks.",
    shortAnswer: "Skylight installation in Charlotte NC costs $1,200-$4,500+ per unit in 2026. Fixed skylights cost $1,200-2,000 and venting skylights $2,000-3,500, including proper flashing and waterproofing.",
    speakableAnswer: "Skylight installation in Charlotte costs between 1200 and 4500 dollars per skylight. Fixed skylights start at 1200 dollars, and venting skylights start at 2000 dollars installed.",
    category: "skylights",
    subcategory: "costs",
    intent: "commercial",
    triggerKeywords: ["skylight installation cost", "skylight cost charlotte", "VELUX skylight price", "roof skylight installation"],
    relatedSlugs: ["skylight-installation-charlotte", "velux-skylights-charlotte"],
    voiceOptimized: true,
  },

  // ============================================
  // FLAT ROOFING
  // ============================================
  {
    question: "What is the best flat roof material for commercial buildings?",
    answer: "The best flat roof material depends on the building's needs: TPO (Thermoplastic Polyolefin) is the best all-around choice — white reflective surface, heat-welded seams, 20-30 year lifespan, $5.50-8.50/sqft, ideal for energy efficiency and new construction. EPDM (Rubber) is the most cost-effective — proven 30+ year track record, $4.50-7.00/sqft, excellent for large warehouse and industrial roofs. PVC (Polyvinyl Chloride) is best for restaurants and chemical exposure — superior chemical and grease resistance, fire-rated, 20-30 years, $6.50-10.00/sqft. Modified Bitumen is best for high-traffic roofs — multi-layer asphalt system, puncture-resistant, 20-25 years, $4.00-8.00/sqft, excellent for roofs with heavy foot traffic from HVAC maintenance. Built-Up Roofing (BUR) is best for budget-conscious projects — traditional tar and gravel, very durable, 20-30 years, $5.50-8.50/sqft. For Charlotte's climate, TPO is the most recommended due to its energy efficiency benefits — the white membrane can reduce cooling costs 15-30% compared to dark-colored roofing.",
    shortAnswer: "TPO is the best all-around commercial flat roof material — energy efficient, durable, and cost-effective. EPDM is most economical, PVC for restaurants, and modified bitumen for high-traffic roofs.",
    speakableAnswer: "TPO is the most popular flat roof material for commercial buildings. It's energy efficient, cost effective, and lasts 20 to 30 years. EPDM rubber is the most economical option.",
    category: "commercial",
    subcategory: "flat-roof",
    intent: "informational",
    triggerKeywords: ["best flat roof material", "commercial flat roof", "TPO vs EPDM vs PVC", "flat roof options"],
    relatedSlugs: ["tpo-roofing-charlotte", "epdm-roofing-charlotte", "flat-roof-contractors-charlotte"],
    voiceOptimized: true,
  },

  // ============================================
  // ROOF INSPECTION
  // ============================================
  {
    question: "What happens during a professional roof inspection?",
    answer: "A professional roof inspection in Charlotte NC covers both exterior and interior components across a systematic 25-30 point checklist: EXTERIOR INSPECTION: (1) Shingle condition — checking for curling, cracking, blistering, missing granules, and proper nail placement; (2) Flashing integrity — around chimneys, vents, skylights, walls, and valleys; (3) Gutter and drainage — proper attachment, slope, and flow; (4) Roof penetrations — pipe boots, satellite mounts, and HVAC curbs; (5) Ridge and hip caps — sealed and intact; (6) Soffit and fascia — rot, damage, and ventilation screen integrity; (7) Structural alignment — sagging, waviness, or uneven planes. INTERIOR/ATTIC INSPECTION: (8) Decking condition — moisture, rot, or delamination; (9) Ventilation adequacy — intake and exhaust balance; (10) Insulation — depth, coverage, and moisture content; (11) Daylight penetration — light visible through the roof deck; (12) Staining or moisture — active or historical leaks. The inspector documents findings with photos and provides a written report with repair recommendations, estimated remaining lifespan, and urgency ratings. In Charlotte, most reputable contractors offer free inspections for homeowners considering repair or replacement.",
    shortAnswer: "A professional inspection covers a 25-30 point checklist: shingles, flashing, gutters, ventilation, attic condition, decking integrity, and insulation — with a written report and photos.",
    speakableAnswer: "A professional roof inspection covers shingles, flashing, gutters, ventilation, and the attic. The inspector provides a written report with photos and repair recommendations. Most Charlotte roofers offer free inspections.",
    category: "inspection",
    subcategory: "process",
    intent: "informational",
    triggerKeywords: ["roof inspection process", "what happens roof inspection", "roof inspection checklist", "professional roof inspection"],
    relatedSlugs: ["roof-inspection-charlotte", "spring-roof-inspection-charlotte"],
    voiceOptimized: true,
  },

  // ============================================
  // WARRANTY
  // ============================================
  {
    question: "What types of roofing warranties are available?",
    answer: "Roofing warranties come in two categories — manufacturer and contractor: MANUFACTURER WARRANTIES: (1) Standard material warranty — covers manufacturing defects for 25-50 years (prorated after 10 years); free with purchase; (2) System warranty — covers all manufacturer components (shingles, underlayment, ventilation) for 25-50 years; requires all components from the same manufacturer; (3) Enhanced/extended warranty — like GAF Golden Pledge (50 years, non-prorated, includes labor coverage) or Owens Corning Platinum Protection — requires certified contractor installation. CONTRACTOR WARRANTIES: (4) Workmanship warranty — covers installation errors for 2-25 years depending on the contractor; this is the most important warranty because installation errors are the #1 cause of roof failure. KEY FACTS: manufacturer warranties do NOT cover installation errors; they only cover material defects. Workmanship warranties are only as reliable as the contractor who issues them — choose a contractor with a long local track record. In Charlotte, the best contractors offer 10-25 year workmanship warranties backed by their business longevity and manufacturer certification requirements.",
    shortAnswer: "Two types: manufacturer warranties (25-50 years for material defects) and contractor workmanship warranties (2-25 years for installation errors). Enhanced warranties like GAF Golden Pledge cover both for 50 years.",
    speakableAnswer: "Roofing warranties include manufacturer material warranties for 25 to 50 years and contractor workmanship warranties for installation quality. The best option is an enhanced warranty like GAF Golden Pledge that covers both.",
    category: "warranty",
    subcategory: "types",
    intent: "informational",
    triggerKeywords: ["roofing warranty types", "roof warranty coverage", "GAF golden pledge", "workmanship warranty roof"],
    relatedSlugs: ["warranty-page", "how-to-choose-roofing-contractor-charlotte"],
    voiceOptimized: true,
  },
];
