// Location-specific and service-specific FAQ generators for better AEO/SEO

import { SITE_CONFIG } from './constants';

export interface FAQ {
  question: string;
  answer: string;
}

// Generate unique FAQs for each location page with local keywords
export function generateLocationFAQs(city: string, state: string, county: string): FAQ[] {
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
      answer: `For ${city} homes, we primarily recommend CertainTeed, GAF, and Owens Corning architectural shingles. These materials handle ${state === 'NC' ? 'North Carolina' : 'South Carolina'}'s humid climate, summer heat, and storm conditions exceptionally well. Our ${city} roofing experts will help you choose the best option for your budget and aesthetic preferences.`,
    },
    {
      question: `Are you licensed and insured to work in ${city}, ${state}?`,
      answer: `Yes, Best Roofing Now is fully licensed, bonded, and insured to perform roofing work in ${city} and throughout ${county} County. We're BBB A+ accredited and certified by major manufacturers including CertainTeed and GAF. We carry comprehensive liability insurance and workers' compensation to protect ${city} homeowners.`,
    },
    {
      question: `Do you help with insurance claims for ${city} homeowners?`,
      answer: `Absolutely! Our ${city} roofing team specializes in storm damage claims and works directly with your insurance company. We document all damage thoroughly with photos and detailed reports, meet with adjusters, and advocate for fair settlements for ${county} County homeowners. This service is included at no extra cost.`,
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
  ],
};

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
