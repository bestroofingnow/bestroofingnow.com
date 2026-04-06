/**
 * Topical Authority Mapper.
 *
 * Analyzes the site's content coverage against a comprehensive
 * roofing topic taxonomy. Identifies gaps where competitors are
 * being cited by AI tools instead of Best Roofing Now.
 *
 * The authority map helps prioritize content creation to achieve
 * comprehensive topical coverage — the #1 factor in AI citation ranking.
 */

import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import { eq } from 'drizzle-orm';
import { knowledgeBase } from './db/schema';

function getDb() {
  if (!process.env.POSTGRES_URL) throw new Error('Database not configured');
  return drizzle(sql);
}

/** Comprehensive roofing topic taxonomy */
export interface TopicNode {
  topic: string;
  subtopics: string[];
  importance: 'critical' | 'high' | 'medium' | 'low';
  aiSearchVolume: 'high' | 'medium' | 'low'; // How often AI tools get asked about this
}

export const ROOFING_TOPIC_TAXONOMY: TopicNode[] = [
  {
    topic: "Roofing Materials",
    importance: "critical",
    aiSearchVolume: "high",
    subtopics: [
      "Asphalt shingles (3-tab vs architectural vs designer)",
      "Metal roofing (standing seam, corrugated, steel, aluminum)",
      "Flat roof membranes (TPO, EPDM, PVC, modified bitumen)",
      "Tile roofing (clay, concrete, synthetic)",
      "Slate roofing (natural vs synthetic)",
      "Cedar shake and shingle",
      "Copper roofing",
      "Rubber roofing",
      "Green/living roofs",
      "Solar roofing tiles",
      "Material comparison guides",
      "Material lifespan by climate",
      "Impact-resistant materials (Class 4)",
      "Energy-efficient roofing materials",
      "Fire-rated roofing materials",
    ],
  },
  {
    topic: "Roof Repair",
    importance: "critical",
    aiSearchVolume: "high",
    subtopics: [
      "Roof leak detection and repair",
      "Missing or damaged shingle repair",
      "Flashing repair and replacement",
      "Valley repair",
      "Ridge cap repair",
      "Pipe boot replacement",
      "Sagging roof repair",
      "Roof decking repair",
      "Chimney flashing repair",
      "Skylight leak repair",
      "Gutter repair",
      "Soffit and fascia repair",
      "Emergency temporary repairs (tarping)",
      "Repair vs replacement decision guide",
      "Flat roof repair methods",
    ],
  },
  {
    topic: "Roof Replacement",
    importance: "critical",
    aiSearchVolume: "high",
    subtopics: [
      "When to replace a roof",
      "Roof replacement process step-by-step",
      "Roof replacement costs by material",
      "Tear-off vs overlay",
      "Timeline and duration",
      "Permits and inspections",
      "Choosing materials for replacement",
      "Roof replacement financing options",
      "New roof warranty types",
      "Re-roofing building codes",
    ],
  },
  {
    topic: "Storm Damage",
    importance: "critical",
    aiSearchVolume: "high",
    subtopics: [
      "Hail damage identification",
      "Wind damage assessment",
      "Tree damage to roof",
      "Hurricane/tropical storm preparation",
      "Tornado damage",
      "Ice storm damage",
      "Lightning strikes on roof",
      "Emergency tarping services",
      "Storm damage insurance claims",
      "Temporary vs permanent repairs after storms",
      "Documenting storm damage",
      "Storm chaser contractor warnings",
    ],
  },
  {
    topic: "Insurance Claims",
    importance: "high",
    aiSearchVolume: "high",
    subtopics: [
      "How to file a roof insurance claim",
      "Working with insurance adjusters",
      "Supplementing insurance claims",
      "Depreciation and recoverable depreciation",
      "Deductible requirements",
      "What insurance covers vs doesn't",
      "Timeframes for filing claims",
      "Choosing a contractor for insurance work",
      "Public adjusters vs contractor advocacy",
      "NC insurance regulations for roofing",
    ],
  },
  {
    topic: "Roof Maintenance",
    importance: "high",
    aiSearchVolume: "medium",
    subtopics: [
      "Seasonal maintenance checklist",
      "Roof cleaning (moss, algae, debris)",
      "Gutter maintenance",
      "Attic inspection",
      "Preventive maintenance programs",
      "DIY maintenance vs professional",
      "Roof coating and sealant application",
      "Ventilation maintenance",
      "Tree trimming around roof",
      "Annual inspection scheduling",
    ],
  },
  {
    topic: "Commercial Roofing",
    importance: "high",
    aiSearchVolume: "medium",
    subtopics: [
      "Commercial roof types and systems",
      "Flat roof vs low-slope solutions",
      "Commercial roof maintenance programs",
      "Roof asset management",
      "Energy-efficient commercial roofing",
      "Commercial roof repair vs replacement",
      "Building-specific roofing (warehouse, office, retail, restaurant, church, school, hospital)",
      "Commercial roof warranties",
      "Commercial roof inspection schedules",
      "Green building certifications (LEED)",
    ],
  },
  {
    topic: "Costs and Financing",
    importance: "high",
    aiSearchVolume: "high",
    subtopics: [
      "Roof repair costs by type",
      "Roof replacement costs by material",
      "Factors affecting roofing costs",
      "Getting roofing estimates",
      "Financing options for new roofs",
      "Insurance coverage for roofing",
      "Tax credits for energy-efficient roofing",
      "ROI of different roofing materials",
      "Hidden costs in roofing projects",
      "Seasonal pricing trends",
    ],
  },
  {
    topic: "Choosing a Contractor",
    importance: "high",
    aiSearchVolume: "high",
    subtopics: [
      "What to look for in a roofer",
      "Roofing licenses and certifications",
      "Insurance requirements for contractors",
      "Red flags and scams to avoid",
      "Getting multiple estimates",
      "Understanding roofing contracts",
      "Manufacturer certifications (GAF, Owens Corning, CertainTeed)",
      "BBB and review checking",
      "Local vs national contractors",
      "Storm chaser contractor warnings",
    ],
  },
  {
    topic: "Ventilation and Insulation",
    importance: "medium",
    aiSearchVolume: "medium",
    subtopics: [
      "Why roof ventilation matters",
      "Types of roof vents (ridge, soffit, turbine, power)",
      "Proper ventilation ratios",
      "Attic insulation types and R-values",
      "Ice dam prevention through ventilation",
      "Ventilation and energy efficiency",
      "Signs of poor ventilation",
      "Radiant barriers",
      "Vapor barriers",
      "Balanced ventilation design",
    ],
  },
  {
    topic: "Gutters and Drainage",
    importance: "medium",
    aiSearchVolume: "medium",
    subtopics: [
      "Gutter installation types and costs",
      "Seamless vs sectional gutters",
      "Gutter guard types and effectiveness",
      "Gutter sizing for different roofs",
      "Gutter maintenance schedule",
      "Downspout placement and drainage",
      "French drains and gutter extensions",
      "Copper and specialty gutters",
      "Gutter repair vs replacement",
      "Rain chain alternatives",
    ],
  },
  {
    topic: "Specialty Services",
    importance: "medium",
    aiSearchVolume: "medium",
    subtopics: [
      "Skylight installation and repair",
      "Solar panel roof integration",
      "Roof coating systems",
      "Green/vegetative roofs",
      "Historical roof restoration",
      "Roof certification for real estate",
      "Drone roof inspections",
      "Infrared moisture detection",
      "Emergency roof services",
      "Temporary structures and tarping",
    ],
  },
  {
    topic: "Building Codes and Regulations",
    importance: "medium",
    aiSearchVolume: "low",
    subtopics: [
      "North Carolina roofing codes",
      "Charlotte/Mecklenburg permits",
      "Wind speed requirements by zone",
      "Underlayment requirements",
      "Maximum roof layers allowed",
      "Fire rating requirements",
      "HOA roofing restrictions",
      "Historic district roofing rules",
      "ADA compliance for commercial",
      "Energy code requirements",
    ],
  },
  {
    topic: "Climate and Weather",
    importance: "medium",
    aiSearchVolume: "medium",
    subtopics: [
      "How climate affects roofing choices",
      "UV and heat damage to roofs",
      "Humidity and algae/moss growth",
      "Wind uplift and shingle ratings",
      "Hail size and damage correlation",
      "Freeze-thaw cycle damage",
      "Hurricane and tropical storm preparation",
      "Seasonal roofing considerations",
      "Climate zones and material selection",
      "Climate change impact on roofing",
    ],
  },
  {
    topic: "Warranty Information",
    importance: "medium",
    aiSearchVolume: "medium",
    subtopics: [
      "Manufacturer warranty types",
      "Workmanship warranty importance",
      "Extended warranty programs (GAF Golden Pledge, etc.)",
      "What voids a roofing warranty",
      "Warranty transferability",
      "Prorated vs non-prorated warranties",
      "Filing a warranty claim",
      "System warranties vs standard",
      "Commercial roof warranties",
      "Comparing warranty programs across manufacturers",
    ],
  },
];

interface CoverageResult {
  topic: string;
  importance: string;
  aiSearchVolume: string;
  totalSubtopics: number;
  coveredSubtopics: number;
  coveragePercent: number;
  coveredList: string[];
  gapList: string[];
}

/**
 * Analyze knowledge base coverage against the topic taxonomy.
 * Returns coverage percentage per topic and specific gaps.
 */
export async function analyzeTopicalCoverage(): Promise<{
  overallCoverage: number;
  totalTopics: number;
  coveredTopics: number;
  gaps: number;
  topicResults: CoverageResult[];
  prioritizedGaps: { topic: string; subtopic: string; importance: string; aiSearchVolume: string }[];
}> {
  const db = getDb();

  // Get all published knowledge base entries
  const entries = await db
    .select()
    .from(knowledgeBase)
    .where(eq(knowledgeBase.published, true));

  // Build a searchable index of existing content
  const contentIndex = entries.map(e => ({
    question: e.question.toLowerCase(),
    answer: e.answer.toLowerCase(),
    keywords: (e.triggerKeywords || []).map((k: string) => k.toLowerCase()),
    category: e.category.toLowerCase(),
  }));

  const topicResults: CoverageResult[] = [];
  const allGaps: { topic: string; subtopic: string; importance: string; aiSearchVolume: string }[] = [];
  let totalSubtopics = 0;
  let totalCovered = 0;

  for (const node of ROOFING_TOPIC_TAXONOMY) {
    const coveredList: string[] = [];
    const gapList: string[] = [];

    for (const subtopic of node.subtopics) {
      totalSubtopics++;
      const subtopicLower = subtopic.toLowerCase();
      const subtopicTerms = subtopicLower.split(/[\s,()\/]+/).filter(t => t.length > 3);

      // Check if any existing content covers this subtopic
      const isCovered = contentIndex.some(entry => {
        // Check direct keyword match
        const keywordMatch = entry.keywords.some(kw =>
          subtopicTerms.some(term => kw.includes(term))
        );
        if (keywordMatch) return true;

        // Check question match (2+ terms must appear)
        const questionMatches = subtopicTerms.filter(term =>
          entry.question.includes(term)
        ).length;
        if (questionMatches >= 2) return true;

        // Check answer coverage (3+ terms)
        const answerMatches = subtopicTerms.filter(term =>
          entry.answer.includes(term)
        ).length;
        if (answerMatches >= 3) return true;

        return false;
      });

      if (isCovered) {
        coveredList.push(subtopic);
        totalCovered++;
      } else {
        gapList.push(subtopic);
        allGaps.push({
          topic: node.topic,
          subtopic,
          importance: node.importance,
          aiSearchVolume: node.aiSearchVolume,
        });
      }
    }

    topicResults.push({
      topic: node.topic,
      importance: node.importance,
      aiSearchVolume: node.aiSearchVolume,
      totalSubtopics: node.subtopics.length,
      coveredSubtopics: coveredList.length,
      coveragePercent: Math.round((coveredList.length / node.subtopics.length) * 100),
      coveredList,
      gapList,
    });
  }

  // Prioritize gaps: critical+high AI volume first
  const prioritizedGaps = allGaps.sort((a, b) => {
    const importanceOrder: Record<string, number> = { critical: 0, high: 1, medium: 2, low: 3 };
    const volumeOrder: Record<string, number> = { high: 0, medium: 1, low: 2 };
    const importanceDiff = (importanceOrder[a.importance] ?? 3) - (importanceOrder[b.importance] ?? 3);
    if (importanceDiff !== 0) return importanceDiff;
    return (volumeOrder[a.aiSearchVolume] ?? 2) - (volumeOrder[b.aiSearchVolume] ?? 2);
  });

  const overallCoverage = totalSubtopics > 0
    ? Math.round((totalCovered / totalSubtopics) * 100)
    : 0;

  return {
    overallCoverage,
    totalTopics: totalSubtopics,
    coveredTopics: totalCovered,
    gaps: allGaps.length,
    topicResults,
    prioritizedGaps,
  };
}
