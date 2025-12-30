// Location-specific and service-specific FAQ generators for better AEO/SEO

import { SITE_CONFIG } from './constants';

export interface FAQ {
  question: string;
  answer: string;
}

// Generate unique FAQs for each location page with local keywords
export function generateLocationFAQs(city: string, state: string, county: string): FAQ[] {
  const stateName = state === 'NC' ? 'North Carolina' : 'South Carolina';
  return [
    {
      question: `How much does a new roof cost in ${city}, ${state}?`,
      answer: `The cost of a new roof in ${city} typically ranges from $8,000 to $25,000+ depending on the size of your home, materials chosen, and roof complexity. As the trusted roofing company in ${city}, Best Roofing Now provides free inspections and detailed quotes with no hidden fees. We also offer financing options for ${city} homeowners.`,
    },
    {
      question: `Do you offer free roof inspections in ${city}?`,
      answer: `Yes! Best Roofing Now provides completely free, no-obligation roof inspections for ${city} homeowners. Our certified inspectors serving ${county} County will assess your roof's condition and provide a detailed report with photos and honest recommendations. Call ${SITE_CONFIG.phone} to schedule your free inspection in ${city}.`,
    },
    {
      question: `How quickly can you repair storm damage in ${city}, ${state}?`,
      answer: `As a local roofing company serving ${city}, we offer 24/7 emergency response for storm damage. For active leaks or urgent repairs in ${county} County, we typically respond within 1-4 hours. We'll tarp your roof immediately to prevent further damage and document everything for your insurance claim.`,
    },
    {
      question: `What roofing materials do you recommend for homes in ${city}?`,
      answer: `For ${city} homes, we primarily recommend CertainTeed, GAF, and Owens Corning architectural shingles. These materials handle ${stateName}'s humid climate, summer heat, and storm conditions exceptionally well. Our ${city} roofing experts will help you choose the best option for your budget and aesthetic preferences.`,
    },
    {
      question: `Are you licensed and insured to work in ${city}, ${state}?`,
      answer: `Yes, Best Roofing Now is fully licensed, bonded, and insured to perform roofing work in ${city} and throughout ${county} County. We're BBB A+ accredited and certified by major manufacturers including CertainTeed and GAF. We carry comprehensive liability insurance and workers' compensation to protect ${city} homeowners.`,
    },
    {
      question: `Do you help with insurance claims for ${city} homeowners?`,
      answer: `Absolutely! Our ${city} roofing team specializes in storm damage claims and works directly with your insurance company. We document all damage thoroughly with photos and detailed reports, meet with adjusters, and advocate for fair settlements for ${county} County homeowners. This service is included at no extra cost.`,
    },
    {
      question: `What is the best time to replace a roof in ${city}, ${state}?`,
      answer: `The best times for roof replacement in ${city} are spring (March-May) and fall (September-November) when temperatures are moderate. However, we install roofs year-round in ${county} County. ${stateName}'s mild winters allow for installation most days. Schedule early during peak seasons as crews book quickly.`,
    },
    {
      question: `How long does roof replacement take in ${city}?`,
      answer: `Most residential roof replacements in ${city} take 1-3 days depending on home size, roof complexity, and weather. Our experienced ${county} County crews work efficiently while maintaining quality standards. We'll provide a clear timeline during your free estimate and keep you informed throughout the project.`,
    },
    {
      question: `What roofing services do you provide in ${city}, ${state}?`,
      answer: `Best Roofing Now offers complete roofing services in ${city} including: roof replacement, roof repair, emergency roofing, storm damage restoration, roof inspections, gutter installation, and siding services. We handle residential and commercial projects throughout ${county} County. Call for a free assessment.`,
    },
    {
      question: `Why choose Best Roofing Now for roofing in ${city}?`,
      answer: `${city} homeowners choose Best Roofing Now because we're local, honest, and committed to quality. We're family-owned and veteran-operated, BBB A+ accredited, and manufacturer-certified. Our 5-star reviews from ${county} County customers reflect our dedication to doing the right thing. We never upsell—if repairs work, that's what we recommend.`,
    },
    {
      question: `Do you offer financing for roofing projects in ${city}?`,
      answer: `Yes! We offer flexible financing options for ${city} homeowners including 0% interest plans for qualified buyers. We believe every family in ${county} County deserves quality roofing protection. During your free consultation, we'll discuss payment options that fit your budget and help make your roof project affordable.`,
    },
  ];
}

// Enhanced service FAQs with more keyword-rich content
export const enhancedServiceFAQs: Record<string, FAQ[]> = {
  'residential-roofing': [
    {
      question: 'How long does a residential roof replacement take in Charlotte NC?',
      answer: 'Most residential roof replacements in Charlotte take 1-3 days depending on size and complexity. Our experienced Charlotte roofing crews work efficiently while maintaining the highest quality standards. We handle complete tear-off, decking inspection, and new installation with minimal disruption to your family.',
    },
    {
      question: 'What is the best roofing material for Charlotte homes?',
      answer: 'For Charlotte residential roofing, we recommend CertainTeed Landmark architectural shingles for their excellent durability, 50-year warranty, and value. For premium options, GAF Timberline HDZ offers superior wind resistance up to 130 MPH—important for Charlotte\'s storm season. We help every homeowner choose the right material for their budget.',
    },
    {
      question: 'Do you offer financing for residential roof replacement?',
      answer: 'Yes! Best Roofing Now offers flexible financing options for Charlotte homeowners including 0% interest for qualified buyers through our lending partners. We believe every family deserves a quality roof, so we work to find payment solutions that fit your budget. Ask about our financing during your free consultation.',
    },
    {
      question: 'How do I know if my Charlotte home needs a new roof?',
      answer: 'Signs your Charlotte home needs roof replacement include: roof age over 15-20 years, multiple or recurring leaks, widespread shingle damage (curling, cracking, missing granules), visible daylight in attic, and sagging areas. Our free roof inspection will give you an honest assessment of your roof\'s condition.',
    },
    {
      question: 'What is included in your residential roofing service?',
      answer: 'Our complete residential roofing service includes: free initial inspection, detailed written estimate, removal and disposal of old roofing, inspection and repair of damaged decking, installation of ice and water shield in valleys and eaves, new underlayment, quality shingle installation, proper ventilation assessment, flashing replacement, and thorough cleanup with magnetic nail sweeps.',
    },
    {
      question: 'Can you work with my HOA on roofing requirements in Charlotte?',
      answer: 'Absolutely! Many Charlotte neighborhoods have HOA requirements for roofing materials and colors. We\'re experienced working with HOAs throughout Charlotte, from Ballantyne to Lake Norman communities. We help you select approved materials, prepare necessary documentation, and can attend HOA meetings if needed to get your project approved.',
    },
    {
      question: 'What causes premature roof failure on Charlotte homes?',
      answer: 'Common causes of premature roof failure in Charlotte include: poor attic ventilation trapping heat and moisture, improper installation by unqualified contractors, storm damage left unrepaired, neglected maintenance, and low-quality materials. Charlotte\'s hot summers and humidity make proper ventilation especially critical. Our inspections identify these issues early.',
    },
    {
      question: 'Do you install energy-efficient roofing in Charlotte?',
      answer: 'Yes! We offer Energy Star-rated cool roof shingles that reflect more sunlight and reduce cooling costs for Charlotte homes. Options include GAF Timberline Cool Series and CertainTeed Landmark Solaris. These shingles can lower attic temperatures by up to 20°F, reducing AC strain during Charlotte\'s hot summers.',
    },
    {
      question: 'What sets Best Roofing Now apart from other Charlotte residential roofers?',
      answer: 'Best Roofing Now is family-owned, veteran-operated, and committed to honesty. We won\'t recommend replacement if repairs will work. We\'re BBB A+ accredited, CertainTeed SELECT ShingleMaster certified, and GAF Factory-Certified. Our 5-star reviews reflect our commitment to Charlotte homeowners. We treat every home like it\'s our own family\'s.',
    },
  ],
  'commercial-roofing': [
    {
      question: 'What types of commercial roofing systems do you install in Charlotte?',
      answer: 'Best Roofing Now installs all major commercial roofing systems in Charlotte including TPO (thermoplastic polyolefin), PVC membranes, EPDM rubber roofing, modified bitumen, built-up roofing (BUR), and standing seam metal roofs. Each system has advantages depending on your building, budget, and energy efficiency goals.',
    },
    {
      question: 'How do you minimize business disruption during commercial roof installation?',
      answer: 'Our Charlotte commercial roofing team coordinates with your operations to minimize disruption. We often work in sections, during off-hours, or on weekends for sensitive businesses. Our crews maintain clean, safe work environments and communicate daily progress. Most Charlotte businesses continue normal operations during roofing projects.',
    },
    {
      question: 'Do you offer commercial roof maintenance programs in Charlotte?',
      answer: 'Yes! Our commercial roof maintenance programs include bi-annual inspections, preventive repairs, drain cleaning, and priority emergency service. Regular maintenance extends your commercial roof life by 5-10 years and prevents costly emergency repairs. Charlotte businesses save money long-term with our maintenance contracts.',
    },
    {
      question: 'What warranties do you offer on commercial roofing in Charlotte NC?',
      answer: 'We offer comprehensive commercial roofing warranties in Charlotte including manufacturer warranties up to 30 years and our workmanship warranty. TPO and PVC systems from CertainTeed and GAF come with full system warranties when installed by our certified commercial crews. We\'ll explain all warranty options during your consultation.',
    },
    {
      question: 'What is the lifespan of a commercial roof in Charlotte?',
      answer: 'Commercial roof lifespan in Charlotte varies by system: TPO and PVC membranes last 20-30 years, EPDM rubber roofing 20-25 years, modified bitumen 15-20 years, built-up roofing 20-30 years, and metal roofing 40-60+ years. Charlotte\'s UV exposure and storm activity affect longevity. Proper maintenance significantly extends these lifespans.',
    },
    {
      question: 'Which commercial roofing system is most energy-efficient for Charlotte businesses?',
      answer: 'White TPO and PVC membranes are the most energy-efficient commercial roofing options for Charlotte. Their reflective surfaces reduce cooling costs by 10-30% during our hot summers. Cool roof coatings can also be applied to existing roofs. We help Charlotte businesses qualify for energy rebates when available.',
    },
    {
      question: 'Do you handle commercial roof repairs and new installations?',
      answer: 'Yes, Best Roofing Now provides complete commercial roofing services in Charlotte including repairs, maintenance, re-roofing, and new construction. We repair all commercial roof types and can often extend your existing roof\'s life with targeted repairs or coatings when full replacement isn\'t necessary.',
    },
    {
      question: 'What size commercial buildings do you work on in Charlotte?',
      answer: 'We handle commercial roofing projects of all sizes in Charlotte, from small retail spaces and restaurants to large warehouses and industrial facilities. Our crews have experience with office buildings, medical facilities, churches, schools, shopping centers, and multi-family apartment complexes throughout the Charlotte metro area.',
    },
    {
      question: 'How do you handle drainage issues on flat commercial roofs?',
      answer: 'Proper drainage is critical for Charlotte commercial roofs due to heavy rainfall. We assess existing drainage during inspections and can install additional drains, create tapered insulation systems for better slope, or add crickets to direct water flow. Poor drainage is a leading cause of commercial roof failure—we address it proactively.',
    },
  ],
  'roof-repair': [
    {
      question: 'How fast can you repair a roof leak in Charlotte?',
      answer: 'For emergency roof leaks in Charlotte, we offer same-day service and can often arrive within hours. Standard roof repairs are typically scheduled within 1-3 business days. Our Charlotte roof repair team prioritizes active leaks to prevent water damage to your home. Call ${SITE_CONFIG.phone} for immediate assistance.',
    },
    {
      question: 'Will you try to sell me a new roof when I only need repairs?',
      answer: 'Never. Best Roofing Now believes in honest assessments for Charlotte homeowners. If roof repairs can effectively extend your roof\'s life, that\'s what we\'ll recommend. We only suggest replacement when repairs would be more expensive long-term or when your roof has reached end-of-life. Our free inspection gives you the honest truth.',
    },
    {
      question: 'What types of roof repairs do you handle in Charlotte?',
      answer: 'Our Charlotte roof repair services include: leak repairs, storm damage repairs, shingle replacement, flashing repairs, vent boot replacement, gutter repairs, soffit and fascia repairs, and emergency tarping. We repair all roof types including asphalt shingles, metal, tile, flat roofs, and slate.',
    },
    {
      question: 'How much does roof repair cost in Charlotte NC?',
      answer: 'Roof repair costs in Charlotte range from $150 for minor repairs to $1,500+ for extensive damage. The exact cost depends on the repair type, materials needed, and accessibility. We provide upfront pricing before any work begins—no surprises. Many Charlotte homeowners find our repairs covered by insurance after storms.',
    },
    {
      question: 'Can you match my existing shingles for repairs in Charlotte?',
      answer: 'In most cases, yes. We carry a wide inventory of common shingle colors and styles from CertainTeed, GAF, and Owens Corning. For older or discontinued shingles, we\'ll find the closest match available. If an exact match isn\'t possible, we discuss options like repairing less visible areas or strategic replacement of sections.',
    },
    {
      question: 'What causes most roof leaks in Charlotte homes?',
      answer: 'Common roof leak causes in Charlotte include: damaged or missing flashing around chimneys and vents, worn pipe boot seals, cracked or missing shingles from storms, clogged gutters causing water backup, ice dam damage (rare but occurs), and improper previous repairs. Our inspection identifies the exact source of your leak.',
    },
    {
      question: 'Do you warranty your roof repairs in Charlotte?',
      answer: 'Yes! All roof repairs by Best Roofing Now include our workmanship warranty. We stand behind our repair work, and if an issue recurs due to our repair, we\'ll fix it at no additional cost. We also use quality materials that come with their own manufacturer warranties.',
    },
    {
      question: 'Is it better to repair or replace an old roof in Charlotte?',
      answer: 'This depends on several factors: roof age, extent of damage, number of previous repairs, and your budget. Generally, if repairs exceed 30% of replacement cost or your roof is over 15-20 years old, replacement may be more economical. We provide honest assessments to help Charlotte homeowners make the right decision.',
    },
    {
      question: 'Can you repair my roof during winter in Charlotte?',
      answer: 'Yes! Charlotte\'s mild winters allow year-round roof repairs. Shingles install properly above 40°F, and we have products rated for colder temperatures when needed. Active leaks should never wait regardless of season—we\'ll protect your home immediately and schedule permanent repairs when conditions are optimal.',
    },
  ],
  'roof-replacement': [
    {
      question: 'How much does a roof replacement cost in Charlotte NC in 2025?',
      answer: 'Roof replacement costs in Charlotte typically range from $8,000 to $25,000+ in 2025, depending on roof size (measured in squares), materials chosen, removal of old layers, and any decking repairs needed. Best Roofing Now provides detailed, itemized quotes with no hidden fees. We also offer financing to make roof replacement affordable.',
    },
    {
      question: 'What happens to my old roof during replacement?',
      answer: 'During your Charlotte roof replacement, we handle complete tear-off and disposal of old materials. Our crews use tarps to protect your landscaping, employ magnetic sweepers to collect nails, and haul all debris to appropriate disposal facilities. Your property is left clean and safe when we finish.',
    },
    {
      question: 'How long is the warranty on a new roof in Charlotte?',
      answer: 'New roofs installed by Best Roofing Now in Charlotte come with comprehensive warranties. CertainTeed shingles include up to 50-year manufacturer warranties, and GAF offers lifetime warranties. Plus, our workmanship warranty covers installation. We\'re certified by major manufacturers, ensuring your warranty is fully protected.',
    },
    {
      question: 'What is the best time of year to replace a roof in Charlotte NC?',
      answer: 'Charlotte\'s best roof replacement seasons are spring (March-May) and fall (September-November) when temperatures are moderate. However, we install roofs year-round in Charlotte. Summer installations work well with proper scheduling around afternoon storms. Winter is fine for most shingle installations. Schedule early for busy seasons.',
    },
    {
      question: 'Can I stay in my home during roof replacement in Charlotte?',
      answer: 'Yes, most Charlotte homeowners stay in their homes during roof replacement. You\'ll experience some noise and vibration during work hours (typically 7AM-6PM). We recommend keeping pets inside or away, removing fragile items from walls, and covering items in the attic. Our crews use the exterior only and don\'t need access inside your home.',
    },
    {
      question: 'Will a new roof increase my Charlotte home\'s value?',
      answer: 'Absolutely! A new roof typically returns 60-70% of its cost in increased home value and makes your Charlotte home much easier to sell. Real estate agents consistently cite roofing as a top factor in home buying decisions. A new roof also eliminates buyer concerns during inspections, often leading to faster sales.',
    },
    {
      question: 'How do I choose the right shingle color for my Charlotte home?',
      answer: 'Consider your home\'s exterior colors (siding, brick, trim), neighborhood style, and personal preference. Darker shingles hide imperfections better and suit traditional homes, while lighter colors reflect heat and complement modern styles. We bring samples to your home so you can see colors against your actual exterior in natural light.',
    },
    {
      question: 'Do I need to replace my gutters when I get a new roof?',
      answer: 'Not necessarily, but it\'s worth considering. If your gutters are older than 15 years or damaged, replacing them with your roof is cost-effective since our crew is already set up. New seamless gutters ensure proper water flow from your new roof. We\'ll assess your gutter condition and provide honest recommendations.',
    },
    {
      question: 'What permits are required for roof replacement in Charlotte?',
      answer: 'Charlotte and most surrounding municipalities require permits for roof replacement. Best Roofing Now handles all permitting for you—it\'s included in our service. We pull the permit, schedule inspections, and ensure your new roof meets all building codes. This protects you and ensures proper warranty coverage.',
    },
  ],
  'storm-damage': [
    {
      question: 'Should I file an insurance claim for roof storm damage in Charlotte?',
      answer: 'If your Charlotte home has significant storm damage, filing a claim is usually worthwhile. Homeowner\'s insurance covers storm, wind, and hail damage. Our free storm damage inspection will honestly assess whether you have a valid claim. We document everything and help Charlotte homeowners navigate the insurance process.',
    },
    {
      question: 'Will my insurance rates increase if I file a storm damage claim?',
      answer: 'Storm damage claims in Charlotte typically don\'t affect your rates like at-fault claims do. Your policy exists to protect you from events like hail and wind damage. Each insurance company handles this differently, but storm claims are generally not held against you. Our team can discuss your specific situation.',
    },
    {
      question: 'What if my insurance company denies my Charlotte roof damage claim?',
      answer: 'If your storm damage claim is denied, don\'t give up. Best Roofing Now helps Charlotte homeowners appeal denials with additional documentation, photos, and expert assessments. We can also work with public adjusters if needed. Our thorough initial documentation often helps overturn unfair denials.',
    },
    {
      question: 'How do I know if my Charlotte roof has storm damage?',
      answer: 'Storm damage signs include: missing or damaged shingles, dents in metal components, granules in gutters, cracked or bruised shingles, damaged flashing, and water stains inside. Some damage isn\'t visible from the ground. After any significant storm in Charlotte, schedule a free inspection to protect your home and document potential claims.',
    },
    {
      question: 'How long do I have to file a storm damage claim in Charlotte?',
      answer: 'Most insurance policies require claims within 1-2 years of the storm date, but timing varies by policy and insurer. However, we strongly recommend filing promptly—ideally within 30 days. Quick action prevents additional damage and strengthens your claim. Our free inspections document damage while evidence is fresh.',
    },
    {
      question: 'What types of storms cause roof damage in Charlotte NC?',
      answer: 'Charlotte experiences hailstorms, severe thunderstorms with high winds, occasional hurricanes and tropical storms, and rare ice storms. Each storm type causes different damage patterns. Hail causes denting and granule loss, wind lifts and removes shingles, and ice creates dam-related damage. We\'re experienced with all Charlotte storm damage.',
    },
    {
      question: 'Will you meet with my insurance adjuster in Charlotte?',
      answer: 'Yes! Meeting with adjusters is a key part of our Charlotte storm damage service. We walk the adjuster through all documented damage, ensure nothing is missed, and advocate for fair assessment. Our presence often results in better settlements for homeowners. This service is included at no extra charge.',
    },
    {
      question: 'What does storm damage insurance claim assistance include?',
      answer: 'Our complete claim assistance includes: free detailed inspection with photos, written damage report, filing guidance, adjuster meeting attendance, supplemental claim support if needed, and coordination throughout repairs. We handle the paperwork stress so Charlotte homeowners can focus on getting their home restored.',
    },
    {
      question: 'Can I choose my own roofer or do I have to use my insurance company\'s?',
      answer: 'You always have the right to choose your own roofing contractor in Charlotte—never let an insurer tell you otherwise. Insurance-preferred contractors may prioritize cost savings over quality. Choosing Best Roofing Now means getting advocates who work for you, not the insurance company.',
    },
  ],
  'emergency-roofing': [
    {
      question: 'What qualifies as a roofing emergency in Charlotte?',
      answer: 'Roofing emergencies in Charlotte include: active leaks during rain, storm damage with exposed areas, fallen trees on roof, significant structural damage, fire damage, and any situation where delay could cause additional damage. Call our 24/7 emergency line at ${SITE_CONFIG.phone} for immediate response.',
    },
    {
      question: 'How fast can you respond to a roofing emergency in Charlotte?',
      answer: 'Our Charlotte emergency roofing team typically responds within 1-4 hours depending on weather conditions and current demand. During active storms, we dispatch as quickly as safely possible. We prioritize emergencies to minimize damage to your Charlotte home. Our crews are available 24/7, including holidays.',
    },
    {
      question: 'What should I do while waiting for emergency roof repair in Charlotte?',
      answer: 'While waiting for our Charlotte emergency team: place buckets under active leaks, move valuables away from water, don\'t go on the roof yourself, take photos of damage and water intrusion, and turn off electricity to affected areas if safe. Our team will handle tarping and temporary repairs upon arrival.',
    },
    {
      question: 'Do you provide temporary repairs or just permanent fixes?',
      answer: 'Our Charlotte emergency service includes immediate temporary repairs (tarping, emergency patches) to stop water intrusion, followed by scheduling permanent repairs. We document all damage for insurance, then work with you on timing for complete restoration. Emergency response includes both immediate protection and long-term solutions.',
    },
    {
      question: 'How much does emergency roof repair cost in Charlotte?',
      answer: 'Emergency tarping and temporary repairs in Charlotte typically range from $300-$800 depending on the damage extent and roof accessibility. These costs are often covered by homeowner\'s insurance for storm damage. We provide clear pricing before work begins—no surprise charges during an already stressful situation.',
    },
    {
      question: 'Do you charge extra for nights, weekends, or holidays in Charlotte?',
      answer: 'We don\'t charge excessive emergency premiums. While emergency response involves some additional cost compared to scheduled repairs, we keep our Charlotte emergency rates fair. We believe protecting your home shouldn\'t come with price gouging. Our emergency fee is clearly communicated before we begin work.',
    },
    {
      question: 'What areas does your Charlotte emergency roofing service cover?',
      answer: 'Our 24/7 emergency roofing service covers the entire Charlotte metro area including Huntersville, Cornelius, Davidson, Matthews, Mint Hill, Concord, Gastonia, Lake Norman, Fort Mill SC, Rock Hill SC, and all surrounding communities within 50 miles of Charlotte. Distance doesn\'t prevent us from helping.',
    },
    {
      question: 'Will my insurance cover emergency roof repairs in Charlotte?',
      answer: 'Yes, emergency repairs for storm, wind, hail, or fallen tree damage are typically covered by homeowner\'s insurance in Charlotte. We document everything thoroughly and work with your insurer. Deductibles apply, but the actual emergency repair costs are usually covered as part of your overall claim.',
    },
    {
      question: 'Can a small leak really become an emergency?',
      answer: 'Absolutely. Even small Charlotte roof leaks can quickly cause major damage—mold growth can begin within 24-48 hours, insulation loses effectiveness when wet, drywall stains and weakens, and electrical hazards can develop. What seems minor today can become a costly disaster tomorrow. We recommend treating all active leaks seriously.',
    },
  ],
  'roof-inspection': [
    {
      question: 'Is the roof inspection really free with no obligation?',
      answer: 'Yes, 100% free with absolutely no obligation. Best Roofing Now believes Charlotte homeowners deserve to understand their roof\'s condition. We\'ll inspect your roof, provide photos and a written report, and give honest recommendations. There\'s no pressure to buy anything—many homeowners just want peace of mind.',
    },
    {
      question: 'What does a roof inspection in Charlotte include?',
      answer: 'Our comprehensive Charlotte roof inspection covers: shingles/roofing material condition, flashing around vents, chimneys, and skylights, gutters and downspouts, soffit and fascia, attic ventilation, signs of water damage or leaks, structural integrity, and estimated remaining roof life. You receive a detailed written report with photos.',
    },
    {
      question: 'How often should Charlotte homeowners have their roof inspected?',
      answer: 'We recommend annual roof inspections for Charlotte homes, plus after any significant storm (hail, high winds, fallen debris). Regular inspections catch small issues before they become expensive problems. Charlotte\'s weather with summer storms and occasional hurricanes makes proactive inspections especially valuable.',
    },
    {
      question: 'Do you use drones for roof inspections in Charlotte?',
      answer: 'Yes! Best Roofing Now uses drone technology for Charlotte roof inspections when appropriate. Drones provide detailed aerial photos, access steep or complex roofs safely, and create comprehensive documentation. Combined with our hands-on inspection, you get the most thorough assessment possible for your Charlotte home.',
    },
    {
      question: 'How long does a roof inspection take in Charlotte?',
      answer: 'A typical Charlotte roof inspection takes 30-60 minutes depending on roof size and complexity. We inspect the exterior thoroughly, check the attic when accessible, and review findings with you on-site. You\'ll receive the written report and photos within 24-48 hours after the inspection.',
    },
    {
      question: 'Should I get a roof inspection before buying a home in Charlotte?',
      answer: 'Absolutely! A pre-purchase roof inspection in Charlotte is one of the smartest investments you can make. Standard home inspections often miss roof issues. We identify problems that could cost thousands and give you negotiating leverage. Many Charlotte home buyers save money by requesting seller repairs or credits based on our findings.',
    },
    {
      question: 'What if you find problems during my Charlotte roof inspection?',
      answer: 'If we find issues, we\'ll explain them clearly with photos and provide repair options with transparent pricing. Minor issues often need simple repairs. For significant problems, we give you all the information to make the best decision. We never pressure you—some homeowners just want to monitor issues and budget for future repairs.',
    },
    {
      question: 'Do you provide inspection reports for insurance claims?',
      answer: 'Yes! Our detailed inspection reports are designed for insurance documentation. We include date-stamped photos, specific damage descriptions, measurements, and professional assessments. This thorough documentation helps Charlotte homeowners get fair settlements from insurance companies.',
    },
    {
      question: 'Can I be present during my Charlotte roof inspection?',
      answer: 'We encourage it! While our inspectors work independently, we\'re happy to have you present. We can explain what we\'re looking at, show you areas of concern, and answer questions in real-time. Understanding your roof empowers you to make informed decisions about your Charlotte home.',
    },
  ],
  'gutters': [
    {
      question: 'Why are seamless gutters better for Charlotte homes?',
      answer: 'Seamless gutters have no joints along their length, eliminating the most common leak points. For Charlotte homes dealing with heavy rainfall (44+ inches annually), seamless gutters handle water flow better and last longer. They\'re custom-fabricated on-site to fit your home perfectly and look cleaner than sectional gutters.',
    },
    {
      question: 'Do gutter guards really work for Charlotte\'s trees?',
      answer: 'Quality gutter guards significantly reduce debris buildup, even with Charlotte\'s abundant trees. We offer several styles including micro-mesh guards that block pine needles and oak leaves. While no guard eliminates all maintenance, the right system for your trees reduces cleaning frequency from twice yearly to once or less.',
    },
    {
      question: 'How often should Charlotte homeowners clean their gutters?',
      answer: 'Without gutter guards, Charlotte homeowners should clean gutters twice yearly—after spring pollen season and after fall leaves drop. Properties with many trees may need additional cleanings. With quality gutter guards, annual inspection is usually sufficient. We offer gutter cleaning services if you need help.',
    },
    {
      question: 'What size gutters do Charlotte homes need?',
      answer: 'Most Charlotte homes work well with standard 5-inch gutters, but homes with large roof areas or steep pitches often benefit from 6-inch gutters. Charlotte\'s heavy rainfall (frequent storms dumping 1-2+ inches) means proper sizing is crucial to prevent overflow. Our assessment recommends the right size for your home.',
    },
    {
      question: 'How much does gutter installation cost in Charlotte NC?',
      answer: 'Seamless gutter installation in Charlotte typically costs $6-$15 per linear foot depending on material (aluminum vs. copper), gutter size, and home height. Most Charlotte homes require 100-200 feet of gutters, averaging $1,000-$2,500. We provide free estimates with clear, itemized pricing and no hidden fees.',
    },
    {
      question: 'What gutter materials do you recommend for Charlotte homes?',
      answer: 'Aluminum seamless gutters are our top recommendation for most Charlotte homes—they\'re affordable, durable, rust-resistant, and available in many colors. For upscale homes, copper gutters add beauty and last 50+ years. We don\'t recommend vinyl gutters for Charlotte\'s climate—they crack and fail prematurely.',
    },
    {
      question: 'What happens if gutters aren\'t properly installed in Charlotte?',
      answer: 'Improperly installed gutters cause serious problems for Charlotte homes: foundation damage from water pooling, basement flooding, soil erosion, siding damage, fascia rot, and landscape destruction. Correct slope (1/4" per 10 feet), secure hangers, and proper downspout placement are essential. Our installations are done right.',
    },
    {
      question: 'Can you replace gutters without replacing the roof?',
      answer: 'Absolutely! Gutter replacement is completely independent from roofing. However, if you\'re planning a roof replacement soon, it\'s often economical to do both together since we\'re already set up. We assess your specific situation and give you honest recommendations on timing.',
    },
    {
      question: 'How long do gutters last in Charlotte?',
      answer: 'Aluminum seamless gutters typically last 20-30 years in Charlotte with proper maintenance. Copper gutters can last 50+ years. Factors affecting lifespan include material quality, installation, maintenance, and tree coverage. Regular cleaning and prompt repairs extend gutter life significantly.',
    },
  ],
  'siding': [
    {
      question: 'What siding material is best for Charlotte NC homes?',
      answer: 'For Charlotte\'s humid climate, we recommend fiber cement (James Hardie) for durability and low maintenance, or quality vinyl for affordability. Fiber cement resists moisture, insects, and rot common in the Southeast. Both handle Charlotte\'s temperature swings well. We\'ll help you choose based on your budget and aesthetic goals.',
    },
    {
      question: 'Can you match existing siding for repairs in Charlotte?',
      answer: 'In most cases, yes. For vinyl siding, we maintain relationships with major manufacturers to source matches. For fiber cement and wood, color matching is usually achievable. If exact matches aren\'t available for older siding, we discuss options including replacing sections for a seamless look.',
    },
    {
      question: 'Does new siding improve home energy efficiency?',
      answer: 'Yes! Modern insulated siding significantly improves energy efficiency for Charlotte homes. Proper installation with house wrap and insulated backing reduces air infiltration and thermal transfer. Many Charlotte homeowners see measurable reductions in heating and cooling costs after siding replacement.',
    },
    {
      question: 'How long does siding installation take in Charlotte?',
      answer: 'Siding installation time depends on home size and complexity. A typical Charlotte home takes 3-7 days for complete siding replacement. Repairs and partial replacements are faster, often 1-2 days. We work efficiently while protecting your landscaping and maintaining a clean work site throughout the project.',
    },
    {
      question: 'How much does siding replacement cost in Charlotte NC?',
      answer: 'Siding replacement in Charlotte typically ranges from $6,000 to $20,000+ depending on home size and material choice. Vinyl averages $4-$8 per square foot installed, fiber cement $8-$14 per square foot. We provide detailed quotes with no hidden fees. Financing options are available for qualified Charlotte homeowners.',
    },
    {
      question: 'What are signs I need new siding in Charlotte?',
      answer: 'Signs you need siding replacement include: warping, buckling, or bubbling, fungus or mold growth, fading that won\'t clean, cracks or holes, rotting (wood siding), high energy bills, frequent painting needs, and interior water damage. If you notice these issues, schedule a free inspection to assess your Charlotte home.',
    },
    {
      question: 'Can you install siding and roofing at the same time in Charlotte?',
      answer: 'Yes! Combining siding and roofing projects often saves money—we\'re already mobilized with equipment and crews. Coordination ensures proper flashing where roof meets siding. Many Charlotte homeowners use insurance claims or refinancing to complete exterior renovations together for maximum impact and efficiency.',
    },
    {
      question: 'What warranty comes with new siding installation?',
      answer: 'James Hardie fiber cement includes a 30-year non-prorated warranty, and quality vinyl siding comes with lifetime limited warranties. Plus, our workmanship warranty covers installation. We\'re certified installers for major brands, ensuring your warranty is fully valid and protected for your Charlotte home.',
    },
    {
      question: 'Do I need to repaint fiber cement siding in Charlotte?',
      answer: 'James Hardie ColorPlus siding comes pre-finished with a 15-year color warranty—no immediate painting needed. Standard fiber cement requires painting but holds paint excellently for 10-15+ years. Charlotte\'s climate is moderate enough that quality paint jobs last well. We can coordinate painting if you choose unfinished fiber cement.',
    },
  ],
};

// Comparison FAQs for featured snippets and AEO (these answer "vs" questions)
export const comparisonFAQs: FAQ[] = [
  {
    question: 'What is the difference between roof repair and roof replacement?',
    answer: 'Roof repair fixes specific damaged areas like leaks, missing shingles, or flashing issues, typically costing $150-$1,500. Roof replacement removes the entire old roof and installs a new roofing system, costing $8,000-$25,000+. Choose repair if damage is localized and your roof is under 15 years old. Choose replacement if your roof is over 20 years old, has widespread damage, or repair costs exceed 30% of replacement cost. Best Roofing Now provides honest assessments to help you make the right choice.',
  },
  {
    question: 'What is the difference between asphalt shingles and metal roofing?',
    answer: 'Asphalt shingles cost $3-$7 per square foot, last 20-30 years, and offer many style options. Metal roofing costs $8-$15 per square foot, lasts 40-70 years, and provides superior energy efficiency and storm resistance. Asphalt is more affordable upfront and easier to repair. Metal is more durable long-term, reflects heat to reduce cooling costs, and is environmentally recyclable. For Charlotte homes, both work well—asphalt for budget-conscious homeowners, metal for those wanting long-term value.',
  },
  {
    question: 'What is the difference between 3-tab shingles and architectural shingles?',
    answer: '3-tab shingles are flat, uniform, and the most affordable option at $2.50-$4 per square foot installed, lasting 15-20 years. Architectural shingles (dimensional shingles) have a layered, textured appearance, cost $4-$7 per square foot, and last 25-30+ years. Architectural shingles are thicker, more wind-resistant (up to 130 MPH vs 60 MPH), and add more curb appeal. Most Charlotte homeowners choose architectural shingles for better value and aesthetics despite slightly higher cost.',
  },
  {
    question: 'What is the difference between GAF and CertainTeed shingles?',
    answer: 'Both GAF and CertainTeed are premium shingle manufacturers with excellent products. GAF Timberline HDZ offers StainGuard Plus protection and industry-leading wind warranty (130 MPH). CertainTeed Landmark features SureNail technology for better adhesion and offers more color options. Both have similar lifespans (25-50 years with proper installation). GAF is America\'s largest shingle manufacturer; CertainTeed is known for consistent quality. Best Roofing Now is certified by both and helps homeowners choose based on color preferences and specific needs.',
  },
  {
    question: 'What is the difference between TPO and EPDM commercial roofing?',
    answer: 'TPO (thermoplastic polyolefin) is white, highly reflective, and reduces cooling costs by 10-30%—ideal for Charlotte\'s hot summers. It costs $5-$8 per square foot and lasts 20-30 years. EPDM (rubber roofing) is typically black, costs $4-$7 per square foot, and lasts 20-25 years. TPO welds at seams for superior waterproofing; EPDM uses adhesives or tape. For Charlotte commercial buildings, we typically recommend TPO for energy efficiency, but EPDM remains cost-effective for budget-conscious projects.',
  },
  {
    question: 'Should I repair my roof or wait until it needs full replacement?',
    answer: 'Repair now if: you have active leaks causing interior damage, missing shingles exposing decking, or storm damage that may worsen. Wait if: damage is purely cosmetic, your roof is near end-of-life anyway (planned replacement within 1-2 years), or you\'re saving for full replacement. Delaying repairs for active leaks can cause thousands in water damage to insulation, drywall, and structure. Our free inspection helps Charlotte homeowners understand the urgency and make informed decisions.',
  },
  {
    question: 'What is the difference between seamless and sectional gutters?',
    answer: 'Seamless gutters are custom-fabricated on-site to fit your home exactly, with no joints along runs (only at corners and downspouts). Sectional gutters come in pre-cut pieces joined together every 10-20 feet. Seamless gutters cost slightly more ($6-$12 per linear foot vs $4-$8) but last longer and leak less because joints are the weakest points. For Charlotte homes, we always recommend seamless aluminum gutters—the reduced maintenance and leak protection are worth the modest price difference.',
  },
  {
    question: 'What is the difference between vinyl and fiber cement siding?',
    answer: 'Vinyl siding costs $4-$8 per square foot, requires minimal maintenance, and lasts 20-40 years. Fiber cement (James Hardie) costs $8-$14 per square foot, resists fire/rot/insects, and lasts 50+ years. Vinyl can warp in extreme heat and crack in cold; fiber cement handles temperature swings better. Fiber cement looks more like real wood and increases home value more. For Charlotte\'s humid climate, fiber cement\'s moisture resistance is valuable, but quality vinyl remains a solid budget option.',
  },
  {
    question: 'Is it better to replace roof in spring or fall in Charlotte?',
    answer: 'Both spring and fall are excellent for roof replacement in Charlotte. Spring (March-May) offers moderate temperatures before summer heat and storms. Fall (September-November) provides cooler weather after hurricane season. Spring advantage: gets ahead of storm season for insurance peace of mind. Fall advantage: shingles seal better in cooler temps and contractors may offer off-peak pricing. Summer works but requires scheduling around afternoon storms. Winter is fine for most projects. We recommend booking 2-4 weeks ahead for either peak season.',
  },
  {
    question: 'What is the difference between roof coating and roof replacement?',
    answer: 'Roof coatings are liquid-applied protective layers that extend existing roof life by 10-15 years, costing $2-$5 per square foot. Roof replacement removes everything and installs new roofing materials, costing $8-$25 per square foot. Coatings work best on flat commercial roofs in good condition, adding waterproofing and reflectivity. Replacement is needed when the roof structure is compromised, damage is extensive, or the roof has reached end-of-life. Coatings are cost-effective maintenance; replacement is a long-term investment.',
  },
];

// Get FAQs for a service, falling back to defaults if not found
export function getServiceFAQs(serviceSlug: string): FAQ[] {
  return enhancedServiceFAQs[serviceSlug] || [
    {
      question: 'Do you offer free estimates for this service?',
      answer: 'Yes! All our consultations and estimates are completely free with no obligation. Contact Best Roofing Now today to schedule your free assessment.',
    },
    {
      question: 'Are you licensed and insured in Charlotte NC?',
      answer: 'Absolutely. Best Roofing Now is fully licensed, bonded, and insured in North Carolina. We\'re BBB A+ accredited and certified by major manufacturers.',
    },
    {
      question: 'What areas do you serve?',
      answer: 'We serve Charlotte and all surrounding areas including Concord, Huntersville, Matthews, Lake Norman, Fort Mill SC, and 30+ other communities within 50 miles of Charlotte.',
    },
  ];
}

// Get comparison FAQs (useful for FAQ pages and featured snippet optimization)
export function getComparisonFAQs(): FAQ[] {
  return comparisonFAQs;
}
