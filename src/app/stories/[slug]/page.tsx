import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Calendar,
  Camera,
  ArrowRight,
  Home,
  Star,
  CheckCircle2,
  Phone,
  Shield,
  ThermometerSun,
  CloudRain,
  Newspaper,
  Award,
  TrendingUp,
} from 'lucide-react';
import { SITE_CONFIG, LOCATIONS } from '@/lib/constants';
import {
  fetchAllProjects,
  fetchProjectsWithPhotoData,
  formatProjectForDisplay,
  PMIPhoto,
} from '@/lib/pmi-api';
import {
  BreadcrumbSchema,
  FAQSchema,
  LocationSchema,
  SpeakableSchema,
  ItemListSchema,
} from '@/components/seo/SchemaMarkup';
import { ProjectPhotoGallery, ProjectPhotoStrip } from '@/components/ui/ProjectPhotoGallery';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';
import { getRoofingContractorIdentity } from '@/lib/schema-helpers';

// Local news stories tied to roofing for engaging content
const LOCAL_STORIES: Record<
  string,
  { title: string; excerpt: string; roofingTie: string }[]
> = {
  charlotte: [
    {
      title: "Charlotte's Tree Canopy: Beautiful but Brutal on Roofs",
      excerpt:
        "Charlotte earns its nickname 'City of Trees' with 47% tree coverage - but those beautiful oaks and maples drop tons of debris each fall that can trap moisture and cause roof damage.",
      roofingTie:
        "After years of gutter cleaning and shingle replacement, many Charlotte homeowners are switching to algae-resistant architectural shingles that stand up to debris better.",
    },
    {
      title: 'Why Charlotte Storm Season Keeps Roofers Busy May-September',
      excerpt:
        "With 25+ severe thunderstorm days annually and the occasional hurricane remnant, Charlotte's storm season creates urgent demand for roof repairs and replacements.",
      roofingTie:
        'Smart homeowners schedule pre-storm inspections in April to catch vulnerabilities before the severe weather hits.',
    },
    {
      title: 'Historic Homes in Myers Park & Dilworth Need Special Care',
      excerpt:
        "Charlotte's oldest neighborhoods have stunning architecture dating back to the early 1900s - but these homes often have unique roofing requirements.",
      roofingTie:
        'We specialize in matching historic aesthetics with modern materials that meet current building codes while preserving neighborhood character.',
    },
  ],
  huntersville: [
    {
      title: 'Lake Norman Effect: Why Huntersville Roofs Get Algae Faster',
      excerpt:
        "The humidity drifting off Lake Norman creates perfect conditions for Gloeocapsa magma - the blue-green algae responsible for those ugly black streaks on roofs.",
      roofingTie:
        'Most new roofs in Huntersville now include StreakFighter or StainGuard Plus technology that prevents algae growth for 25+ years.',
    },
    {
      title: 'Huntersville HOAs: What You Need to Know About Roof Approval',
      excerpt:
        "From Birkdale to Skybrook, most Huntersville neighborhoods have strict HOA guidelines for roofing materials and colors.",
      roofingTie:
        "We handle the HOA approval process and know exactly which shingle colors get approved in each community.",
    },
  ],
  cornelius: [
    {
      title: 'Lakefront Living: Premium Roofing for Premium Homes',
      excerpt:
        "Cornelius waterfront properties face unique challenges - higher wind exposure, increased moisture, and the need for roofing that matches upscale home values.",
      roofingTie:
        "Designer shingles like CertainTeed Presidential Shake offer the beauty of cedar with 50-year durability.",
    },
  ],
  concord: [
    {
      title: 'Race City USA: Where Speed Meets Roofing Excellence',
      excerpt:
        "Concord is home to Charlotte Motor Speedway, and just like NASCAR teams demand precision, local homeowners expect expert workmanship.",
      roofingTie:
        "We bring that same attention to detail to every roof - precise measurements, quality materials, and installations that go the distance.",
    },
    {
      title: 'Concord Growth: New Construction vs. Aging Roofs',
      excerpt:
        "While new subdivisions pop up near the speedway, older neighborhoods in downtown Concord have roofs reaching 20-25 years old.",
      roofingTie:
        "If your Concord home was built before 2005, it's time for a roof inspection. Many original roofs are past their warranty period.",
    },
  ],
  'rock-hill': [
    {
      title: 'Why Charlotte Roofers Cross the Border to Rock Hill',
      excerpt:
        "Just 30 minutes south of Charlotte, Rock Hill offers affordable housing with small-city charm - and access to Charlotte-based contractors.",
      roofingTie:
        "We're fully licensed in both NC and SC, serving Rock Hill with the same quality and warranties as our Charlotte customers.",
    },
    {
      title: "Rock Hill's Southern Exposure: Extra Sun Means Extra Roof Wear",
      excerpt:
        "Located slightly south, Rock Hill homes get more direct sunlight year-round, accelerating shingle deterioration.",
      roofingTie:
        "Light-colored shingles with enhanced UV resistance are our top recommendation for Rock Hill homes.",
    },
  ],
  mooresville: [
    {
      title: "Race City's Other Side: Mooresville Roofing Needs",
      excerpt:
        "Home to NASCAR teams and beautiful Lake Norman estates, Mooresville has a unique mix of historic downtown homes and modern lakefront properties.",
      roofingTie:
        "Whether you have a 1950s bungalow on Main Street or a 2020 lakefront build, we tailor our approach to your home's specific needs.",
    },
  ],
};

// City data for deep SEO content
const CITY_DATA: Record<
  string,
  {
    name: string;
    state: string;
    description: string;
    roofingChallenges: string[];
    popularMaterials: string[];
    avgHomeAge: string;
    climate: string;
    stormRisk: string;
    treeCanopy: string;
    localFacts: string[];
    neighborhoods?: string[];
    faqs: { question: string; answer: string }[];
  }
> = {
  charlotte: {
    name: 'Charlotte',
    state: 'NC',
    description:
      'As the largest city in North Carolina, Charlotte is home to over 870,000 residents living in diverse neighborhoods from historic Myers Park to rapidly growing University City. Charlotte homeowners face unique roofing challenges including hot summers, occasional hurricanes, and frequent hail storms.',
    roofingChallenges: [
      'Hot summers with temperatures exceeding 95°F cause shingle expansion and UV damage',
      'Hurricane season (June-November) brings high winds and heavy rain',
      'Hail storms from spring thunderstorms damage roofs annually',
      'Mature tree canopy leads to moss growth and debris accumulation',
      'Historic homes in Dilworth and Myers Park have unique roofing requirements',
    ],
    popularMaterials: [
      'CertainTeed Landmark architectural shingles',
      'GAF Timberline HDZ with LayerLock technology',
      'Impact-resistant shingles for hail-prone areas',
      'Metal roofing for modern homes and energy efficiency',
    ],
    avgHomeAge: '1970s-1990s with significant new construction',
    climate: 'Humid subtropical with hot summers and mild winters',
    stormRisk: 'Moderate-High (hail, hurricanes, severe thunderstorms)',
    treeCanopy: 'Heavy (Charlotte is known as the "City of Trees")',
    localFacts: [
      'Charlotte is the 15th largest city in the United States',
      'The city is named after Queen Charlotte of Mecklenburg-Strelitz',
      'Charlotte\'s tree canopy covers approximately 47% of the city',
      'The region averages 25+ severe thunderstorm days annually',
    ],
    neighborhoods: [
      'Myers Park',
      'Dilworth',
      'South End',
      'NoDa',
      'Plaza Midwood',
      'Ballantyne',
      'SouthPark',
      'University City',
      'Highland Creek',
      'Steele Creek',
    ],
    faqs: [
      {
        question: 'How much does a new roof cost in Charlotte, NC?',
        answer:
          'A new roof in Charlotte typically costs between $8,000 and $25,000 for a standard residential home, depending on size, material, and complexity. Most Charlotte homes range from 1,500 to 2,500 square feet of roofing area. CertainTeed Landmark shingles are our most popular choice, offering excellent value at $10,000-$15,000 for most homes.',
      },
      {
        question: 'What roofing material is best for Charlotte\'s climate?',
        answer:
          'Architectural shingles like CertainTeed Landmark and GAF Timberline HDZ are ideal for Charlotte\'s humid subtropical climate. They resist heat, UV damage, and the occasional hail. For areas prone to storm damage, we recommend impact-resistant shingles rated Class 4.',
      },
      {
        question: 'How often should Charlotte roofs be inspected?',
        answer:
          'We recommend annual roof inspections in Charlotte, plus inspections after any severe storm. Charlotte\'s combination of hot summers, heavy tree canopy, and storm activity means roofs need regular attention. Our free inspections catch problems early before they become expensive repairs.',
      },
    ],
  },
  huntersville: {
    name: 'Huntersville',
    state: 'NC',
    description:
      'Huntersville is one of Charlotte\'s most desirable suburbs, located along I-77 between Charlotte and Lake Norman. Known for excellent schools and family-friendly neighborhoods, Huntersville has experienced rapid growth since the 1990s with many homes now reaching the age where roof replacement becomes necessary.',
    roofingChallenges: [
      'Many homes built 1995-2005 are now due for roof replacement',
      'Proximity to Lake Norman increases humidity and algae growth',
      'High winds from open areas and lake effect',
      'HOA requirements often specify approved materials and colors',
    ],
    popularMaterials: [
      'CertainTeed Landmark in Georgetown Gray and Charcoal Black',
      'GAF Timberline HDZ with algae-resistant technology',
      'Shingles with StreakFighter protection for algae prevention',
    ],
    avgHomeAge: '1995-2015',
    climate: 'Humid subtropical with lake effect humidity',
    stormRisk: 'Moderate (thunderstorms, occasional hail)',
    treeCanopy: 'Moderate to Heavy',
    localFacts: [
      'Huntersville is home to Birkdale Village and Lake Norman State Park',
      'Population has grown from 3,000 in 1990 to over 60,000 today',
      'Many neighborhoods have active HOAs with roofing guidelines',
      'The town hosts the annual Lake Norman Dragon Boat Festival',
    ],
    faqs: [
      {
        question: 'Do Huntersville HOAs have roofing requirements?',
        answer:
          'Yes, many Huntersville subdivisions have HOA architectural guidelines for roofing. Common requirements include approved shingle colors (typically grays, blacks, and weathered wood tones), material specifications, and contractor insurance requirements. We work with all Huntersville HOAs and can help you navigate the approval process.',
      },
      {
        question: 'Why do Lake Norman area roofs get algae streaks?',
        answer:
          'The humidity from Lake Norman creates ideal conditions for Gloeocapsa magma, the blue-green algae that causes black streaks on roofs. We recommend shingles with built-in algae resistance like CertainTeed\'s StreakFighter or GAF\'s StainGuard Plus technology for all Huntersville homes.',
      },
    ],
  },
  cornelius: {
    name: 'Cornelius',
    state: 'NC',
    description:
      'Cornelius is a charming Lake Norman community known for its waterfront homes, excellent dining, and vibrant downtown area. As one of the most affluent suburbs of Charlotte, Cornelius homeowners often choose premium roofing materials to protect their significant home investments.',
    roofingChallenges: [
      'Waterfront homes face increased wind and moisture exposure',
      'Premium home values warrant high-quality roofing materials',
      'Lake-effect humidity promotes algae and moss growth',
      'Many homes feature complex rooflines requiring expert installation',
    ],
    popularMaterials: [
      'CertainTeed Landmark Pro and Presidential Shake',
      'GAF Timberline Ultra HD for upscale homes',
      'Designer shingles that complement lakefront aesthetics',
    ],
    avgHomeAge: '2000-2020',
    climate: 'Humid subtropical with lake microclimate',
    stormRisk: 'Moderate',
    treeCanopy: 'Moderate',
    localFacts: [
      'Named after a railroad official, Cornelius Hatch',
      'Home to over 30,000 residents',
      'Features miles of Lake Norman shoreline',
      'Hosts the popular Sounds of Summer concert series',
    ],
    faqs: [
      {
        question: 'What\'s the best roof for a Lake Norman waterfront home?',
        answer:
          'Waterfront homes on Lake Norman need roofing that resists wind, moisture, and algae. We recommend CertainTeed Landmark PRO or GAF Timberline Ultra HD with Class 4 impact resistance. For luxury homes, consider CertainTeed Presidential Shake for a premium wood-shake appearance with superior durability.',
      },
    ],
  },
  concord: {
    name: 'Concord',
    state: 'NC',
    description:
      'Concord is the county seat of Cabarrus County and home to Charlotte Motor Speedway. This growing city east of Charlotte features a mix of established neighborhoods and new construction, with homeowners ranging from NASCAR fans to young families.',
    roofingChallenges: [
      'Rapid development means varying home ages and roof conditions',
      'Storm damage common from thunderstorms moving through Piedmont',
      'Some older neighborhoods have original 20+ year old roofs',
      'Industrial areas may have increased debris and pollution',
    ],
    popularMaterials: [
      'CertainTeed Landmark architectural shingles',
      'GAF Timberline HDZ for value and durability',
      'Budget-friendly 3-tab options for investment properties',
    ],
    avgHomeAge: 'Mixed (1970s-2020s)',
    climate: 'Humid subtropical',
    stormRisk: 'Moderate-High',
    treeCanopy: 'Light to Moderate',
    localFacts: [
      'Home to Charlotte Motor Speedway and zMAX Dragway',
      'Population has grown to over 100,000',
      'Features the Great Wolf Lodge indoor water park',
      'Historic downtown district with renovated buildings',
    ],
    faqs: [
      {
        question: 'How do I know if my Concord home needs a new roof?',
        answer:
          'Signs your Concord home needs a new roof include: shingles that are curling, cracking, or missing granules; dark streaks from algae; visible daylight in your attic; and if your roof is 20+ years old. We offer free inspections to assess your roof\'s condition and provide honest recommendations.',
      },
    ],
  },
  'rock-hill': {
    name: 'Rock Hill',
    state: 'SC',
    description:
      'Rock Hill is the largest city in York County, South Carolina, and a popular destination for Charlotte commuters seeking affordable housing and small-city charm. Located just south of the NC/SC border, Rock Hill homeowners benefit from competitive pricing while enjoying proximity to Charlotte.',
    roofingChallenges: [
      'Southern exposure means more sun damage to roofs',
      'Clay soil causes foundation movement affecting roof integrity',
      'Older downtown homes may have unique roofing configurations',
      'Hurricane remnants occasionally bring heavy rain and wind',
    ],
    popularMaterials: [
      'CertainTeed Landmark for excellent UV resistance',
      'GAF Timberline HDZ with StainGuard Plus',
      'Light-colored shingles to reflect South Carolina sun',
    ],
    avgHomeAge: '1960s-2010s',
    climate: 'Humid subtropical with hot summers',
    stormRisk: 'Moderate',
    treeCanopy: 'Light to Moderate',
    localFacts: [
      'Home to Winthrop University',
      'Known as the "Cycling Capital of the South"',
      'Features downtown\'s Knowledge Park innovation district',
      'Host city for BMX and road cycling events',
    ],
    faqs: [
      {
        question: 'Does Best Roofing Now work in South Carolina?',
        answer:
          'Yes! While we\'re based in Charlotte, we serve Rock Hill and York County, South Carolina. Rock Hill is just 30 minutes from our office, and we have completed dozens of roofing projects there. We\'re fully licensed in both North Carolina and South Carolina.',
      },
    ],
  },
  mooresville: {
    name: 'Mooresville',
    state: 'NC',
    description:
      'Mooresville is "Race City USA," home to NASCAR teams and Lake Norman\'s growing residential communities. This Iredell County town has transformed from a small mill town to a thriving suburb with a mix of lakefront estates and family subdivisions.',
    roofingChallenges: [
      'Lake Norman proximity increases humidity and algae issues',
      'Mix of older homes in town and newer lake developments',
      'Some areas have mature trees requiring debris management',
      'Premium lakefront homes need weather-resistant materials',
    ],
    popularMaterials: [
      'CertainTeed Landmark with algae resistance',
      'GAF Timberline HDZ for storm protection',
      'Premium options for lakefront properties',
    ],
    avgHomeAge: 'Mixed (1950s in town, 2000s on lake)',
    climate: 'Humid subtropical with lake effect',
    stormRisk: 'Moderate',
    treeCanopy: 'Moderate to Heavy',
    localFacts: [
      'Home base for many NASCAR teams',
      'Population has grown to over 50,000',
      'Features historic downtown with antique shops',
      'Gateway to Lake Norman\'s eastern shore',
    ],
    faqs: [
      {
        question: 'What\'s special about Lake Norman roofing?',
        answer:
          'Lake Norman homes face unique challenges: increased humidity promotes algae growth, open water exposure means higher winds, and premium home values warrant quality materials. We recommend shingles with built-in algae resistance and Class 4 impact ratings for all Lake Norman properties.',
      },
    ],
  },
};

// Fallback cities when API is unavailable - ensures pages are always generated
const FALLBACK_CITIES = [
  'charlotte', 'huntersville', 'cornelius', 'davidson', 'matthews', 'mint-hill',
  'pineville', 'concord', 'kannapolis', 'harrisburg', 'monroe', 'indian-trail',
  'waxhaw', 'stallings', 'weddington', 'marvin', 'wesley-chapel', 'gastonia',
  'mt-holly', 'belmont', 'kings-mountain', 'mooresville', 'statesville', 'denver',
  'lincolnton', 'lake-norman', 'sherrills-ford', 'terrell', 'hickory', 'newton',
  'albemarle', 'shelby', 'rock-hill', 'fort-mill', 'tega-cay', 'indian-land',
  'lancaster', 'salisbury', 'china-grove', 'mount-holly'
];

// Generate static params for all cities
export async function generateStaticParams() {
  try {
    const projects = await fetchAllProjects();
    const cities = new Set<string>();

    projects.forEach((p) => {
      if (p.city) {
        cities.add(p.city.toLowerCase().replace(/\s+/g, '-'));
      }
    });

    // If API returned projects, use those cities
    if (cities.size > 0) {
      return Array.from(cities).map((slug) => ({ slug }));
    }
  } catch (error) {
    console.error('PMI API failed, using fallback cities:', error);
  }

  // Fallback: use predefined list of cities
  return FALLBACK_CITIES.map((slug) => ({ slug }));
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cityData = CITY_DATA[slug];
  const cityName = cityData?.name || slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  const state = cityData?.state || 'NC';

  return {
    title: `Roofing Projects ${cityName} ${state}`,
    description: `See completed roofing projects in ${cityName}, ${state}. Before & after photos, materials used, and stories from homeowners we've helped. ${cityData?.description?.slice(0, 100) || ''}`,
    keywords: [
      `roofing ${cityName} ${state}`,
      `roof replacement ${cityName}`,
      `roofer near me ${cityName}`,
      `${cityName} roofing company`,
      `CertainTeed ${cityName}`,
      `GAF roofing ${cityName}`,
    ],
    openGraph: {
      title: `Roofing Projects in ${cityName} | Best Roofing Now`,
      description: `Explore our completed roofing work in ${cityName}. Real projects from real homes.`,
      url: `${SITE_CONFIG.url}/stories/${slug}`,
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/stories/${slug}`,
    },
  };
}

export default async function CityStoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cityName = slug.replace(/-/g, ' ');
  const cityData = CITY_DATA[slug];
  const localStories = LOCAL_STORIES[slug] || [];

  // Type for projects with photos
  type ProjectWithPhotos = ReturnType<typeof formatProjectForDisplay> & { photos: PMIPhoto[] };

  // Fetch projects with photo data for this city
  let cityProjects: ProjectWithPhotos[] = [];
  try {
    const [allProjects, projectsWithPhotos] = await Promise.all([
      fetchAllProjects(),
      fetchProjectsWithPhotoData(cityName),
    ]);

    cityProjects = allProjects
      .filter((p) => p.city.toLowerCase() === cityName.toLowerCase())
      .map((p) => {
        // Merge photo data if available
        const withPhotos = projectsWithPhotos.find((wp) => wp._id === p._id);
        return {
          ...formatProjectForDisplay(p),
          photos: (withPhotos?.photos || []) as PMIPhoto[],
        };
      })
      .sort((a, b) => b.year - a.year);
  } catch (error) {
    console.error('Failed to fetch projects for', cityName, error);
  }

  // Show page if we have city data OR projects - only 404 if we have neither
  if (cityProjects.length === 0 && !cityData) {
    notFound();
  }

  const displayName = cityData?.name || (cityProjects[0]?.city || cityName.replace(/\b\w/g, c => c.toUpperCase()));
  const state = cityData?.state || cityProjects[0]?.state || 'NC';

  // Get featured projects (those with photos)
  const featuredProjects = cityProjects.filter((p) => p.photos && p.photos.length > 0);

  // Find matching location for schema
  const location = LOCATIONS.find(
    (l) => l.city.toLowerCase() === displayName.toLowerCase()
  );

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Stories', url: `${SITE_CONFIG.url}/stories` },
          { name: displayName, url: `${SITE_CONFIG.url}/stories/${slug}` },
        ]}
      />
      {cityData?.faqs && <FAQSchema faqs={cityData.faqs} />}
      {location && <LocationSchema location={location} />}

      {/* AEO Schemas for Voice Search */}
      <SpeakableSchema />
      {cityProjects.length > 0 && (
        <ItemListSchema
          title={`Completed Roofing Projects in ${displayName}, ${state}`}
          items={cityProjects.slice(0, 10).map(
            (p) => `${p.name}'s roof on ${p.street} - ${p.product || 'Professional roofing'}`
          )}
          description={`Best Roofing Now has completed ${cityProjects.length} roofing projects in ${displayName}. See our work and customer testimonials.`}
        />
      )}

      {/* Project Schema for Voice Search */}
      {cityProjects.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: `Roofing Projects in ${displayName}, ${state}`,
              description: `Browse ${cityProjects.length} completed roofing projects in ${displayName}. Before and after photos, materials used, and customer stories from Best Roofing Now.`,
              mainEntity: {
                '@type': 'ItemList',
                numberOfItems: cityProjects.length,
                itemListElement: cityProjects.slice(0, 20).map((project, index) => ({
                  '@type': 'ListItem',
                  position: index + 1,
                  item: {
                    '@type': 'Service',
                    name: `Roof ${project.serviceType || 'Installation'} at ${project.street}`,
                    provider: getRoofingContractorIdentity(),
                    areaServed: {
                      '@type': 'City',
                      name: displayName,
                    },
                    datePublished: project.date,
                  },
                })),
              },
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['h1', 'h2', '.speakable-intro'],
              },
            }),
          }}
        />
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/stories"
              className="inline-flex items-center text-white/80 hover:text-white mb-4"
            >
              ← Back to All Stories
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {cityProjects.length > 0
                ? `Roofing Projects in ${displayName}, ${state}`
                : `Roofing Services in ${displayName}, ${state}`}
            </h1>
            <p className="text-xl text-white/90 mb-4 speakable-intro">
              {cityProjects.length > 0
                ? `${cityProjects.length} completed projects from your neighbors`
                : `Professional roofing services for ${displayName} homeowners. Get a free inspection today.`}
            </p>
            {cityProjects.length > 0 && (
              <Link
                href={`/projects/city/${slug}`}
                className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4"
              >
                View all projects with interactive map →
              </Link>
            )}
            <div className="flex flex-wrap gap-4" role="list" aria-label="Service highlights">
              {cityProjects.length > 0 ? (
                <>
                  <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2" role="listitem">
                    <Home className="w-5 h-5" aria-hidden="true" />
                    <span>{cityProjects.length} Projects</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2" role="listitem">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                    <span>5.0 Rating</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2" role="listitem">
                    <Camera className="w-5 h-5" aria-hidden="true" />
                    <span>
                      {cityProjects.filter((p) => p.photoCount > 0).length} with Photos
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2" role="listitem">
                    <Shield className="w-5 h-5" aria-hidden="true" />
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2" role="listitem">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                    <span>5.0 Rating</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2" role="listitem">
                    <Award className="w-5 h-5" aria-hidden="true" />
                    <span>GAF Master Elite</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects with Photos */}
      {featuredProjects.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-2">
                <Camera className="w-4 h-4" />
                FEATURED WORK
              </span>
              <h2 className="text-3xl font-bold text-dark">
                See Our {displayName} Roofing Projects
              </h2>
              <p className="text-gray-600 mt-2">
                Real photos from real homes in your neighborhood
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 4).map((project) => (
                <article
                  key={project.id}
                  className="bg-gray-50 rounded-2xl overflow-hidden"
                >
                  {project.photos && project.photos.length > 0 && (
                    <ProjectPhotoGallery
                      photos={project.photos as PMIPhoto[]}
                      projectName={project.name}
                      street={project.street}
                      className="p-4"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-2">
                      {project.name}&apos;s Roof on {project.street}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {project.city}, {project.state}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.date}
                      </span>
                      {project.photos && (
                        <span className="flex items-center gap-1 text-primary">
                          <Camera className="w-4 h-4" />
                          {project.photos.length} Photos
                        </span>
                      )}
                    </div>
                    {project.product && (
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="text-sm font-medium text-dark">
                          <Award className="w-4 h-4 inline mr-1 text-primary" />
                          {project.product}
                          {project.color && ` - ${project.color}`}
                        </p>
                      </div>
                    )}
                    {project.description && (
                      <p className="text-gray-600 mt-4 text-sm">
                        {project.description}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Local Stories & News Section */}
      {localStories.length > 0 && (
        <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-2">
                <Newspaper className="w-4 h-4" />
                LOCAL INSIGHTS
              </span>
              <h2 className="text-3xl font-bold text-dark">
                {displayName} Roofing News & Stories
              </h2>
              <p className="text-gray-600 mt-2">
                What every {displayName} homeowner should know about their roof
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {localStories.map((story, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
                >
                  <h3 className="text-lg font-bold text-dark mb-3">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{story.excerpt}</p>
                  <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                    <p className="text-sm text-gray-700">
                      <TrendingUp className="w-4 h-4 inline mr-1 text-primary" />
                      <strong>Our Approach:</strong> {story.roofingTie}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* City Overview - Deep SEO Content */}
      {cityData && (
        <section className="py-12 bg-gray-50">
          <div className="container max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-dark mb-4">
                About Roofing in {displayName}
              </h2>
              <p className="text-gray-700 mb-6">{cityData.description}</p>

              {/* Climate & Challenges Grid */}
              <div className="grid md:grid-cols-2 gap-6 not-prose mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold text-dark mb-4 flex items-center gap-2">
                    <ThermometerSun className="w-5 h-5 text-orange-500" />
                    Climate & Weather
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>
                      <strong>Climate:</strong> {cityData.climate}
                    </li>
                    <li>
                      <strong>Storm Risk:</strong> {cityData.stormRisk}
                    </li>
                    <li>
                      <strong>Tree Canopy:</strong> {cityData.treeCanopy}
                    </li>
                    <li>
                      <strong>Avg Home Age:</strong> {cityData.avgHomeAge}
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold text-dark mb-4 flex items-center gap-2">
                    <CloudRain className="w-5 h-5 text-blue-500" />
                    Roofing Challenges
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {cityData.roofingChallenges.slice(0, 4).map((challenge, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Popular Materials */}
              <div className="bg-primary/5 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-dark mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Popular Materials in {displayName}
                </h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {cityData.popularMaterials.map((material, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      {material}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Projects Grid */}
      {cityProjects.length > 0 && (
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-10">
              All {displayName} Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cityProjects.map((project) => (
                <article
                  key={project.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  {/* Photo thumbnail strip */}
                  {project.photos && project.photos.length > 0 && (
                    <div className="h-32 relative">
                      <ProjectPhotoStrip
                        photos={project.photos as PMIPhoto[]}
                        projectName={project.name}
                      />
                    </div>
                  )}

                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Home className="w-5 h-5 text-primary" aria-hidden="true" />
                      <span className="font-semibold text-dark" itemProp="name">
                        {project.name}&apos;s Roof
                      </span>
                    </div>
                    {project.photos && project.photos.length > 0 && (
                      <span className="flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        <Camera className="w-3 h-3" aria-hidden="true" />
                        {project.photos.length} photos
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    <div
                      className="flex items-center gap-2 text-gray-600 mb-3"
                      itemProp="areaServed"
                      itemScope
                      itemType="https://schema.org/Place"
                    >
                      <MapPin className="w-4 h-4" aria-hidden="true" />
                      <span itemProp="address">{project.street}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      <time dateTime={project.date}>{project.date}</time>
                    </div>

                    {project.product && (
                      <div className="bg-gray-50 rounded-lg p-3 mb-4">
                        <p className="text-sm font-medium text-dark" itemProp="serviceOutput">
                          {project.product}
                        </p>
                        {project.color && (
                          <p className="text-xs text-gray-500">{project.color}</p>
                        )}
                      </div>
                    )}

                    {project.description && (
                      <p
                        className="text-sm text-gray-600 line-clamp-3 mb-4"
                        itemProp="description"
                      >
                        {project.description}
                      </p>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-400">ZIP: {project.zip}</span>
                      <Link
                        href={`/projects/city/${slug}`}
                        className="text-primary text-sm font-medium flex items-center gap-1 hover:underline"
                        itemProp="url"
                      >
                        View Projects
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs for AEO */}
      {cityData?.faqs && (
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">
              Frequently Asked Questions About Roofing in {displayName}
            </h2>

            <div className="space-y-6">
              {cityData.faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-dark mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Gallery Strip */}
      <GeoProjectGalleryStrip pageType="other" city={displayName} slug={slug} />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Roofing"
      />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Roofer in {displayName}?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We&apos;ve helped {cityProjects.length}+ homeowners in {displayName}.
            Get a free inspection and join our growing list of satisfied customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {SITE_CONFIG.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Schedule Free Inspection
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export const revalidate = 3600;
