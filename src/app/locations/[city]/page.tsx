import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Services } from '@/components/sections/Services';
import { FAQ } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTASection';
import { LocationSchema, BreadcrumbSchema, FAQSchema } from '@/components/seo/SchemaMarkup';
import { SITE_CONFIG, LOCATIONS } from '@/lib/constants';
import { IMAGES, LOCATION_HERO_IMAGES } from '@/lib/images';
import { generateLocationFAQs } from '@/lib/faqs';

// Location-specific content for unique pages
const locationContent: Record<
  string,
  {
    description: string;
    extendedContent: string;
    roofingChallenges: string;
    servicesIntro: string;
    neighborhoods?: string[];
    highlights?: string[];
  }
> = {
  'charlotte-nc': {
    description:
      'When Charlotte homeowners need a roofing company they can trust, they turn to Best Roofing Now. As a family-owned roofing company serving Mecklenburg County and the greater Charlotte metro, we bring over two decades of industry expertise to every project.',
    extendedContent:
      'As the Queen City and largest metropolitan area in the Carolinas, Charlotte combines Southern charm with modern urban living. From the historic tree-lined streets of Myers Park to the bustling energy of Uptown, Charlotte homeowners take pride in properties that reflect the city\'s rich heritage and forward-thinking spirit. Best Roofing Now understands that your roof is more than just shingles—it\'s the protection your family depends on every day. That\'s why we\'ve built our reputation as the roofing company in Charlotte that homeowners trust for honest assessments, quality workmanship, and fair pricing. Our proximity to our main office means Charlotte homeowners receive the fastest response times for inspections, emergency repairs, and scheduled replacements. When you choose our roofing company in Charlotte, you\'re choosing a team that lives and works in your community.',
    roofingChallenges:
      'Charlotte\'s humid subtropical climate brings hot summers with temperatures regularly exceeding 90°F, frequent afternoon thunderstorms from April through September, and occasional ice storms in winter. The city receives approximately 44 inches of rain annually and experiences severe weather events including straight-line winds, hail, and the occasional tornado that can cause significant roof damage. That\'s why choosing a local roofing company in Charlotte with storm damage experience matters. Our team at Best Roofing Now responds quickly to emergency situations, provides thorough inspections using advanced drone technology, and works directly with your insurance company to ensure fair claim settlements. With Charlotte\'s dense tree canopy and aging housing stock spanning everything from 1920s bungalows to modern new construction, roof damage from falling limbs and storm debris is a common concern. As your trusted roofing company in Charlotte, we\'ve seen it all and know exactly how to protect your home.',
    servicesIntro:
      'As the leading roofing company in Charlotte, Best Roofing Now offers comprehensive roofing services including storm damage inspection and insurance claim assistance, complete roof replacement with lifetime warranty, emergency roof repair with 24/7 availability, preventive maintenance programs, gutter installation and repair, and commercial roofing and coating systems. Whether you need a minor repair or a complete roof replacement, our roofing company in Charlotte delivers the quality and professionalism your home deserves. We use only premium materials from trusted manufacturers like GAF and CertainTeed, backed by industry-leading warranties. Contact the roofing company Charlotte homeowners trust for honest assessments and quality workmanship today.',
    neighborhoods: [
      'Myers Park', 'Dilworth', 'South End', 'NoDa', 'University City',
      'Ballantyne', 'Plaza Midwood', 'Elizabeth', 'Eastover', 'SouthPark',
      'Highland Creek', 'Steele Creek', 'Wesley Heights',
    ],
    highlights: [
      'Main office location with fastest response times',
      'Deep knowledge of Charlotte building codes',
      'Insurance claim expertise and adjuster coordination',
      'Free drone inspections with detailed photo documentation',
    ],
  },
  'concord-nc': {
    description:
      'When Concord homeowners need a roofing company they can trust, they turn to Best Roofing Now. As a family-owned roofing company serving Cabarrus County and the greater Charlotte metro, we bring over two decades of industry expertise to every project.',
    extendedContent:
      'Founded in 1796, Concord\'s name meaning "harmony" reflects the spirit of this thriving city that has grown from a textile hub into one of the fastest-growing communities in the Charlotte metro. Home to Charlotte Motor Speedway and Concord Mills, the city blends historic charm with modern attractions. As a trusted roofing company in Concord, Best Roofing Now understands the unique character of this community. Many Concord homes feature the distinctive architecture of the textile boom era, with slate and traditional shingle roofs that require specialized knowledge to maintain and repair. Whether you live in a historic Union Street residence or a modern development near the speedway, our roofing company in Concord has the expertise to protect your investment.',
    roofingChallenges:
      'Concord\'s position in Cabarrus County makes it susceptible to severe thunderstorms moving through the I-85 corridor. The area frequently experiences high winds, hail, and heavy downpours that can test even well-maintained roofing systems. Recent storm activity has caused significant damage to homes throughout the county. That\'s why choosing a local roofing company in Concord with storm damage experience matters. Our team responds quickly to emergency situations, provides thorough inspections using advanced drone technology, and works directly with your insurance company to ensure fair claim settlements. As the premier roofing company in Concord, we\'ve helped hundreds of homeowners navigate the insurance claim process after storm damage.',
    servicesIntro:
      'As your trusted roofing company in Concord, Best Roofing Now offers comprehensive roofing services including storm damage inspection and insurance claim assistance, complete roof replacement with lifetime warranty, emergency roof repair with 24/7 availability, preventive maintenance programs, gutter installation and repair, and commercial roofing systems. Our roofing company in Concord uses only premium materials and employs skilled craftsmen who take pride in their work. When you need a reliable roofing company in Concord, call the team that Cabarrus County trusts.',
    neighborhoods: [
      'Historic Downtown', 'Odell School', 'Afton Village', 'Gibson Village',
      'Charlotte Motor Speedway area', 'Christenbury', 'Moss Creek', 'Skybrook',
    ],
    highlights: [
      'Quick response times to Cabarrus County',
      'Experience with historic Union Street residences',
      'Storm damage specialists for the I-85 corridor',
      'Understanding of textile-era architectural roofing',
    ],
  },
  'huntersville-nc': {
    description:
      'When Huntersville homeowners need a roofing company they can trust, they turn to Best Roofing Now. As a family-owned roofing company serving Mecklenburg County and the greater Charlotte metro, we bring over two decades of industry expertise to every project.',
    extendedContent:
      'As the southern gateway to Lake Norman, Huntersville perfectly balances suburban convenience with outdoor recreation. With a population exceeding 52,000, this thriving community offers residents access to Birkdale Village shopping, excellent schools, and countless parks including Blythe Landing with its public boat launch. Best Roofing Now is proud to serve as the trusted roofing company in Huntersville that residents depend on. From the established neighborhoods along Gilead Road to the newer developments in Skybrook and Vermillion, Huntersville homes require roofing solutions that handle both the summer heat and the occasional severe weather event. Our roofing company in Huntersville has extensive experience working with HOAs and maintaining the aesthetic standards of planned communities.',
    roofingChallenges:
      'Huntersville\'s location between Uptown Charlotte and Lake Norman exposes homes to unique weather patterns, including lake-effect conditions and severe storms that track along the I-77 corridor. Spring and summer thunderstorms frequently bring damaging winds and hail to neighborhoods throughout the town. That\'s why choosing a local roofing company in Huntersville with storm damage experience matters. Our team responds quickly to emergency situations, provides thorough inspections using advanced drone technology, and works directly with your insurance company to ensure fair claim settlements. As the leading roofing company in Huntersville, we understand the specific challenges that lake-effect weather creates for local roofs.',
    servicesIntro:
      'As your go-to roofing company in Huntersville, Best Roofing Now offers comprehensive roofing services including storm damage inspection and insurance claim assistance, complete roof replacement with lifetime warranty, emergency roof repair with 24/7 availability, preventive maintenance programs, gutter installation and repair, and commercial roofing systems. Our roofing company in Huntersville delivers the quality workmanship that this growing community deserves. When you need a dependable roofing company in Huntersville, trust the team with deep local roots.',
    neighborhoods: [
      'Birkdale Village', 'Rosedale', 'Vermillion', 'Skybrook',
      'The Farms', 'Gilead Road area', 'Cedarfield', 'Monteith Park',
    ],
    highlights: [
      'Extensive experience with HOA requirements',
      'Understanding of planned community aesthetic standards',
      'Lake-effect weather expertise',
      'Serving both established and newer developments',
    ],
  },
  'cornelius-nc': {
    description:
      'When Cornelius homeowners need a roofing company they can trust, they turn to Best Roofing Now. As a family-owned roofing company serving Mecklenburg County and the greater Charlotte metro, we bring over two decades of industry expertise to every project.',
    extendedContent:
      'With 70 miles of Lake Norman shoreline, Cornelius has transformed from a small railroad town to one of the most desirable lakefront communities in the Carolinas. Home to Ramsey Creek Park and Hello Sailor restaurant at Holiday Marina, Cornelius offers an unparalleled lakeside lifestyle. Best Roofing Now is the roofing company in Cornelius that waterfront homeowners trust. Cornelius waterfront homes often feature premium architectural shingles, metal roofing, and custom details that require specialized expertise. We understand the importance of maintaining both the structural integrity and aesthetic appeal of lakefront properties. Our roofing company in Cornelius has worked on some of the most beautiful homes in communities like The Peninsula and Connor Quay.',
    roofingChallenges:
      'Waterfront properties in Cornelius face unique challenges from lake-effect weather patterns, including increased wind exposure and humidity that can accelerate roof aging. Summer thunderstorms rolling across Lake Norman can bring sudden intense weather to shoreline homes. That\'s why choosing a local roofing company in Cornelius with storm damage experience matters. Our team responds quickly to emergency situations, provides thorough inspections using advanced drone technology, and works directly with your insurance company to ensure fair claim settlements. As the trusted roofing company in Cornelius, we specialize in wind-resistant installation techniques and materials that withstand constant moisture exposure.',
    servicesIntro:
      'As the premier roofing company in Cornelius, Best Roofing Now offers comprehensive roofing services including storm damage inspection and insurance claim assistance, complete roof replacement with lifetime warranty, emergency roof repair with 24/7 availability, preventive maintenance programs, gutter installation and repair, and commercial roofing systems. Our roofing company in Cornelius understands the premium standards of Lake Norman living. When you need a skilled roofing company in Cornelius, call the waterfront specialists.',
    neighborhoods: [
      'The Peninsula', 'Birkdale', 'Jetton Road', 'Antiquity',
      'Caldwell Station', 'Connor Quay', 'Bailey\'s Glen', 'Westmoreland',
    ],
    highlights: [
      'Specialized expertise for lakefront properties',
      'Premium architectural shingles and metal roofing',
      'Wind-resistant installation techniques',
      'Understanding of waterfront home aesthetics',
    ],
  },
  'davidson-nc': {
    description:
      'When Davidson homeowners need a roofing company they can trust, they turn to Best Roofing Now. As a family-owned roofing company serving Mecklenburg County and the greater Charlotte metro, we bring over two decades of industry expertise to every project.',
    extendedContent:
      'Home to Davidson College since 1837, this charming community blends academic excellence with small-town character. Davidson\'s walkable downtown, historic architecture, and strong sense of community make it one of the most distinctive towns in the Lake Norman region. Best Roofing Now is proud to be the roofing company in Davidson that residents trust with their historic and modern homes alike. Davidson\'s mix of historic homes near the college and newer developments requires a roofing contractor who understands architectural preservation alongside modern building techniques. Our roofing company in Davidson takes pride in maintaining the character of this special community while providing modern roofing solutions.',
    roofingChallenges:
      'Davidson\'s mature tree canopy provides beautiful shade but also presents roofing challenges during storms. High winds can bring down limbs onto roofs, and accumulated debris can clog gutters and valleys, leading to water damage if not addressed promptly. That\'s why choosing a local roofing company in Davidson with storm damage experience matters. Our team responds quickly to emergency situations, provides thorough inspections using advanced drone technology, and works directly with your insurance company to ensure fair claim settlements. As a respected roofing company in Davidson, we have the expertise to work on both protected historic properties and contemporary homes.',
    servicesIntro:
      'As your neighborhood roofing company in Davidson, Best Roofing Now offers comprehensive roofing services including storm damage inspection and insurance claim assistance, complete roof replacement with lifetime warranty, emergency roof repair with 24/7 availability, preventive maintenance programs, gutter installation and repair, and commercial roofing systems. Our roofing company in Davidson respects the town\'s unique character. When you need a thoughtful roofing company in Davidson, trust the team that understands this community.',
    neighborhoods: [
      'Historic Downtown', 'West Branch', 'Summers Walk', 'Davidson Bay',
      'Bradford', 'Davidson College area', 'River Run',
    ],
    highlights: [
      'Respect for historic architectural preservation',
      'Experience with varied architectural styles',
      'Tree damage and debris removal expertise',
      'Community-focused service approach',
    ],
  },
  'mooresville-nc': {
    description:
      'When Mooresville homeowners need a roofing company they can trust, they turn to Best Roofing Now. As a family-owned roofing company serving Iredell County and the greater Charlotte metro, we bring over two decades of industry expertise to every project.',
    extendedContent:
      'Known as Race City USA for its connection to NASCAR, Mooresville offers the most extensive Lake Norman shoreline access with communities divided by I-77 into lakeside and eastern neighborhoods. The town combines motorsports heritage with family-friendly living and excellent schools in the Iredell-Statesville district. Best Roofing Now is the roofing company in Mooresville that delivers championship-quality results. From luxury lakefront estates in The Point to family homes in Morrison Plantation, Mooresville offers diverse housing requiring tailored roofing approaches. Our roofing company in Mooresville understands that lower Iredell County taxes make proper roof maintenance an important investment in protecting your property value.',
    roofingChallenges:
      'Mooresville\'s larger geographic footprint means homes experience varying weather conditions, from lakeside humidity and wind exposure on the west to the more protected eastern neighborhoods. The area frequently sees severe thunderstorms during spring and summer months. That\'s why choosing a local roofing company in Mooresville with storm damage experience matters. Our team responds quickly to emergency situations, provides thorough inspections using advanced drone technology, and works directly with your insurance company to ensure fair claim settlements. As the go-to roofing company in Mooresville, we serve both residential and commercial properties throughout Race City.',
    servicesIntro:
      'As the trusted roofing company in Mooresville, Best Roofing Now offers comprehensive roofing services including storm damage inspection and insurance claim assistance, complete roof replacement with lifetime warranty, emergency roof repair with 24/7 availability, preventive maintenance programs, gutter installation and repair, and commercial roofing systems. Our roofing company in Mooresville brings the same precision and excellence that defines this NASCAR town. When you need a winning roofing company in Mooresville, call the local experts.',
    neighborhoods: [
      'The Point', 'Sailor\'s Watch', 'Sisters Cove', 'Morrison Plantation',
      'Curtis Pond', 'Langtree', 'Muirfield', 'Bridgeport',
    ],
    highlights: [
      'Serving both lakefront estates and family homes',
      'Lower Iredell County taxes - protect your investment',
      'Diverse housing expertise',
      'Commercial and residential roofing',
    ],
  },
  'lake-norman': {
    description:
      'When Lake Norman homeowners need a roofing company they can trust, they turn to Best Roofing Now. As a family-owned roofing company serving multiple counties and the greater Charlotte metro, we bring over two decades of industry expertise to every project.',
    extendedContent:
      'As North Carolina\'s largest man-made lake with 520 miles of shoreline, Lake Norman draws residents seeking waterfront living within easy reach of Charlotte. Often called the "Inland Sea," the lake area spans four counties and includes some of the most prestigious communities in the region. Best Roofing Now is the roofing company in Lake Norman that waterfront property owners depend on. Lake Norman waterfront homes represent significant investments requiring specialized roofing expertise. Our roofing company in Lake Norman understands the unique challenges of lake properties, from wind-resistant installation techniques to materials that withstand constant moisture exposure and salt air from boat traffic.',
    roofingChallenges:
      'Lake Norman properties face enhanced weather exposure due to the open water, experiencing stronger winds, increased humidity, and unique microclimate conditions. Storms tracking across the lake can intensify quickly, bringing sudden severe weather to waterfront homes. That\'s why choosing a local roofing company in Lake Norman with storm damage experience matters. Our team responds quickly to emergency situations, provides thorough inspections using advanced drone technology, and works directly with your insurance company to ensure fair claim settlements. As the premier roofing company in Lake Norman, we protect investments across Cornelius, Davidson, Huntersville, Mooresville, Denver, and Sherrills Ford.',
    servicesIntro:
      'As the leading roofing company in Lake Norman, Best Roofing Now offers comprehensive roofing services including storm damage inspection and insurance claim assistance, complete roof replacement with lifetime warranty, emergency roof repair with 24/7 availability, preventive maintenance programs, gutter installation and repair, and commercial roofing systems. Our roofing company in Lake Norman serves waterfront communities across four counties. When you need a specialized roofing company in Lake Norman, trust the lakefront experts.',
    neighborhoods: [
      'Cornelius waterfront', 'Davidson waterfront', 'Huntersville waterfront',
      'Mooresville waterfront', 'Denver', 'Sherrills Ford',
    ],
    highlights: [
      'Comprehensive four-county Lake Norman coverage',
      'Wind-resistant installation techniques',
      'Materials for constant moisture exposure',
      'Premium waterfront property expertise',
    ],
  },
  'matthews-nc': {
    description:
      'When Matthews homeowners need a roofing company they can trust, they turn to Best Roofing Now. As a family-owned roofing company serving Mecklenburg County and the greater Charlotte metro, we bring over two decades of industry expertise to every project.',
    extendedContent:
      'This charming southeast Mecklenburg town maintains its small-town character while providing excellent schools and a thriving downtown district. Matthews\' annual festivals, historic depot, and walkable downtown attract families seeking community-oriented living within easy reach of Charlotte. Best Roofing Now is proud to be the roofing company in Matthews that local families trust. Matthews homes range from established neighborhoods with mature trees to newer developments requiring different maintenance approaches. Our roofing company in Matthews works closely with homeowners to address the specific challenges of each property while maintaining the community\'s aesthetic standards.',
    roofingChallenges:
      'Matthews\' position in southeast Mecklenburg puts it in the path of storms moving through the region from the southwest. The area experiences frequent severe thunderstorms, occasional tornado warnings, and significant hail events that can damage roofing systems. That\'s why choosing a local roofing company in Matthews with storm damage experience matters. Our team responds quickly to emergency situations, provides thorough inspections using advanced drone technology, and works directly with your insurance company to ensure fair claim settlements. As a trusted roofing company in Matthews, we\'ve served this community through many storm seasons.',
    servicesIntro:
      'As your neighborhood roofing company in Matthews, Best Roofing Now offers comprehensive roofing services including storm damage inspection and insurance claim assistance, complete roof replacement with lifetime warranty, emergency roof repair with 24/7 availability, preventive maintenance programs, gutter installation and repair, and commercial roofing systems. Our roofing company in Matthews delivers small-town service with big-city expertise. When you need a reliable roofing company in Matthews, call your local team.',
    neighborhoods: [
      'Historic Downtown', 'Sardis Forest', 'McKee Farms', 'Matthews Farm',
      'Stallings Road area', 'Sardis Woods', 'Crown Point', 'Weddington Chase',
    ],
    highlights: [
      'Quick service to Union County border',
      'Experience with mature tree neighborhoods',
      'Strong local reputation',
      'Maintaining community aesthetic standards',
    ],
  },
  'mint-hill-nc': {
    description:
      'When Mint Hill homeowners need a roofing company they can trust, they turn to Best Roofing Now. As a family-owned roofing company serving Mecklenburg County and the greater Charlotte metro, we bring over two decades of industry expertise to every project.',
    extendedContent:
      'Known for its rural character and spacious properties, Mint Hill offers a country feel just minutes from Charlotte. The town\'s commitment to preserving green space and its excellent schools in both Mecklenburg and Union county districts make it attractive to families seeking more land. Best Roofing Now is the roofing company in Mint Hill that understands larger properties. Mint Hill properties often feature larger homes on spacious lots, many with detached structures like barns, workshops, and guest houses that also require professional roofing attention. Our roofing company in Mint Hill provides comprehensive service for primary residences and outbuildings alike.',
    roofingChallenges:
      'Mint Hill\'s open spaces and larger lots can increase wind exposure during storms. The area frequently experiences the same severe weather as Charlotte, with thunderstorms, hail, and occasional tornado activity affecting homes throughout the community. That\'s why choosing a local roofing company in Mint Hill with storm damage experience matters. Our team responds quickly to emergency situations, provides thorough inspections using advanced drone technology, and works directly with your insurance company to ensure fair claim settlements. As the preferred roofing company in Mint Hill, we understand the unique needs of country properties.',
    servicesIntro:
      'As your trusted roofing company in Mint Hill, Best Roofing Now offers comprehensive roofing services including storm damage inspection and insurance claim assistance, complete roof replacement with lifetime warranty, emergency roof repair with 24/7 availability, preventive maintenance programs, gutter installation and repair, and commercial roofing systems. Our roofing company in Mint Hill serves everything from main residences to barns and outbuildings. When you need a versatile roofing company in Mint Hill, trust the rural property experts.',
    neighborhoods: [
      'Clear Creek', 'Chestnut Lane', 'Bain School Road area',
      'Potter Road communities', 'Bonterra', 'Summerwood', 'Cheval',
    ],
    highlights: [
      'Service for primary residences and outbuildings',
      'Experience with larger properties',
      'Family-owned serving families',
      'Barns, workshops, and guest house roofing',
    ],
  },
  'harrisburg-nc': {
    description:
      'When Harrisburg homeowners need a roofing company they can trust, they turn to Best Roofing Now. As a family-owned roofing company serving Cabarrus County and the greater Charlotte metro, we bring over two decades of industry expertise to every project.',
    extendedContent:
      'Positioned at the intersection of Mecklenburg, Cabarrus, and Union counties, Harrisburg has experienced tremendous growth while maintaining its small-town appeal. The town\'s excellent schools and convenient access to Charlotte, Concord, and University City make it ideal for families. Best Roofing Now is the roofing company in Harrisburg that growing families trust. Harrisburg\'s rapid growth means homes ranging from newly constructed to established neighborhoods. Whether your home is in a master-planned community like Highland Creek or an older established area, our roofing company in Harrisburg provides roofing solutions tailored to your specific needs.',
    roofingChallenges:
      'Harrisburg\'s location in the path of storms moving northeast from Charlotte means homes frequently experience severe weather. Recent tornado confirmations in the area highlight the importance of storm-resistant roofing and prompt damage assessment after weather events. That\'s why choosing a local roofing company in Harrisburg with storm damage experience matters. Our team responds quickly to emergency situations, provides thorough inspections using advanced drone technology, and works directly with your insurance company to ensure fair claim settlements. As the reliable roofing company in Harrisburg, we\'ve helped this growing community recover from numerous storms.',
    servicesIntro:
      'As your local roofing company in Harrisburg, Best Roofing Now offers comprehensive roofing services including storm damage inspection and insurance claim assistance, complete roof replacement with lifetime warranty, emergency roof repair with 24/7 availability, preventive maintenance programs, gutter installation and repair, and commercial roofing systems. Our roofing company in Harrisburg supports this rapidly growing community. When you need a responsive roofing company in Harrisburg, call the team that grows with you.',
    neighborhoods: [
      'Highland Creek', 'Rocky River Crossing', 'Stallings Road area',
      'Pharr Mill communities', 'Harrisburg Town Center',
    ],
    highlights: [
      'Master-planned community experience',
      'New construction and established home expertise',
      'Storm-resistant roofing specialists',
      'Rapid growth area specialists',
    ],
  },
  'kannapolis-nc': {
    description:
      'When Kannapolis homeowners need a roofing company they can trust, they turn to Best Roofing Now. As a family-owned roofing company serving Cabarrus County and the greater Charlotte metro, we bring over two decades of industry expertise to every project.',
    extendedContent:
      'Once home to Cannon Mills and the world\'s largest towel producer, Kannapolis has reinvented itself with the NC Research Campus biotechnology hub. The hometown of Dale Earnhardt maintains its working-class heritage while embracing a biotech-driven future. Best Roofing Now is the roofing company in Kannapolis that honors both old and new. Kannapolis features a unique mix of historic mill-era homes and newer construction. Many older homes have original architectural features worth preserving, requiring contractors who understand both historic preservation and modern roofing technology. Our roofing company in Kannapolis bridges the gap between tradition and innovation.',
    roofingChallenges:
      'Kannapolis homes, particularly those built during the textile mill era, feature roof systems that have weathered decades of Carolina storms. The area experiences the same severe weather patterns as greater Cabarrus County, including frequent thunderstorms and hail. That\'s why choosing a local roofing company in Kannapolis with storm damage experience matters. Our team responds quickly to emergency situations, provides thorough inspections using advanced drone technology, and works directly with your insurance company to ensure fair claim settlements. As a respected roofing company in Kannapolis, we preserve the city\'s heritage while providing modern protection.',
    servicesIntro:
      'As your hometown roofing company in Kannapolis, Best Roofing Now offers comprehensive roofing services including storm damage inspection and insurance claim assistance, complete roof replacement with lifetime warranty, emergency roof repair with 24/7 availability, preventive maintenance programs, gutter installation and repair, and commercial roofing systems. Our roofing company in Kannapolis combines competitive pricing with quality workmanship. When you need an honest roofing company in Kannapolis, trust the team that shares your values.',
    neighborhoods: [
      'Downtown Kannapolis', 'Fieldcrest area', 'Gem Theatre district',
      'NC Research Campus area', 'Afton Ridge', 'Irish Buffalo Creek',
    ],
    highlights: [
      'Historic mill-era home expertise',
      'Understanding of architectural preservation',
      'Competitive pricing for the area',
      'Modern technology for historic properties',
    ],
  },
  'gastonia-nc': {
    description:
      'When Gastonia homeowners need a roofing company they can trust, they turn to Best Roofing Now. As a family-owned roofing company serving Gaston County and the greater Charlotte metro, we bring over two decades of industry expertise to every project.',
    extendedContent:
      'As Gaston County\'s largest city, Gastonia offers affordable living with easy access to Charlotte via I-85. The city\'s revitalized downtown, historic neighborhoods, and proximity to Crowders Mountain State Park attract residents seeking value without sacrificing convenience. Best Roofing Now is the roofing company in Gastonia that delivers Charlotte quality at Gaston County prices. Gastonia homes span from historic downtown residences to newer suburban developments, each with unique roofing requirements. Our roofing company in Gastonia provides affordable solutions that protect your investment while respecting your budget, with financing options available.',
    roofingChallenges:
      'Gastonia\'s position along the I-85 corridor makes it susceptible to severe storms moving through the region. The area experiences frequent lightning strikes, high winds, and hail events that can cause significant roof damage to homes throughout the county. That\'s why choosing a local roofing company in Gastonia with storm damage experience matters. Our team responds quickly to emergency situations, provides thorough inspections using advanced drone technology, and works directly with your insurance company to ensure fair claim settlements. As the value-focused roofing company in Gastonia, we help homeowners maximize their insurance coverage.',
    servicesIntro:
      'As your budget-friendly roofing company in Gastonia, Best Roofing Now offers comprehensive roofing services including storm damage inspection and insurance claim assistance, complete roof replacement with lifetime warranty, emergency roof repair with 24/7 availability, preventive maintenance programs, gutter installation and repair, and commercial roofing systems. Our roofing company in Gastonia proves quality doesn\'t have to break the bank. When you need an affordable roofing company in Gastonia, call the value experts.',
    neighborhoods: [
      'Downtown Gastonia', 'Forestbrook', 'Ashley Park',
      'Ranlo Road area', 'New Hope', 'Cramerton', 'Belmont area',
    ],
    highlights: [
      'Affordable solutions for every budget',
      'Financing options available',
      'Charlotte-quality work in western suburbs',
      'Storm damage specialists',
    ],
  },
  'pineville-nc': {
    description:
      'When Pineville homeowners need a roofing company they can trust, they turn to Best Roofing Now. As a family-owned roofing company serving Mecklenburg County and the greater Charlotte metro, we bring over two decades of industry expertise to every project.',
    extendedContent:
      'Charlotte\'s southernmost suburb offers convenient access to Carolina Place Mall and the I-485 loop while maintaining a distinct community identity. Pineville\'s affordable housing options and excellent location attract first-time homebuyers and growing families. Best Roofing Now is the roofing company in Pineville that welcomes new homeowners. Pineville\'s mix of starter homes, established neighborhoods, and newer townhome communities requires flexible roofing solutions. Our roofing company in Pineville works with homeowners at every price point to provide quality roofing that protects your investment without straining your budget.',
    roofingChallenges:
      'Pineville experiences the same severe weather as Charlotte, with summer thunderstorms, occasional hail, and high winds affecting homes throughout the community. The area\'s proximity to South Carolina means storms moving north often impact Pineville first. That\'s why choosing a local roofing company in Pineville with storm damage experience matters. Our team responds quickly to emergency situations, provides thorough inspections using advanced drone technology, and works directly with your insurance company to ensure fair claim settlements. As your neighborhood roofing company in Pineville, we\'re often the first responders after severe weather.',
    servicesIntro:
      'As your accessible roofing company in Pineville, Best Roofing Now offers comprehensive roofing services including storm damage inspection and insurance claim assistance, complete roof replacement with lifetime warranty, emergency roof repair with 24/7 availability, preventive maintenance programs, gutter installation and repair, and commercial roofing systems. Our roofing company in Pineville makes quality roofing affordable for everyone. When you need a welcoming roofing company in Pineville, call your neighbors at Best Roofing Now.',
    neighborhoods: [
      'Carolina Place Mall area', 'McMullen Creek', 'Historic Downtown Pineville',
      'Park Crossing',
    ],
    highlights: [
      'Solutions for every price point',
      'First-time homebuyer friendly',
      'Starter homes to established neighborhoods',
      'Quick response times',
    ],
  },
  'denver-nc': {
    description:
      'When Denver homeowners need a roofing company they can trust, they turn to Best Roofing Now. As a family-owned roofing company serving Lincoln County and the greater Charlotte metro, we bring over two decades of industry expertise to every project.',
    extendedContent:
      'This quiet Lake Norman community on the lake\'s western shore offers a slower pace of life with lakefront access, festivals like the annual Strawberry Festival, and proximity to Lake Norman State Park. Denver attracts retirees, families, and anyone seeking affordable lakefront living. Best Roofing Now is the roofing company in Denver that serves all generations. Denver\'s appeal to 55+ communities like Trilogy and young families alike means homes with diverse architectural styles and roofing needs. Whether you\'re protecting a lakefront retreat or a family home near town, our roofing company in Denver provides tailored solutions.',
    roofingChallenges:
      'Denver\'s location on Lake Norman\'s western shore exposes homes to storms moving across the open water. The area experiences significant weather events, with flash flooding, high winds, and storm damage reported regularly during severe weather outbreaks. That\'s why choosing a local roofing company in Denver with storm damage experience matters. Our team responds quickly to emergency situations, provides thorough inspections using advanced drone technology, and works directly with your insurance company to ensure fair claim settlements. As the lakeside roofing company in Denver, we understand waterfront weather.',
    servicesIntro:
      'As your lakefront roofing company in Denver, Best Roofing Now offers comprehensive roofing services including storm damage inspection and insurance claim assistance, complete roof replacement with lifetime warranty, emergency roof repair with 24/7 availability, preventive maintenance programs, gutter installation and repair, and commercial roofing systems. Our roofing company in Denver serves the entire Lincoln County community. When you need a caring roofing company in Denver, trust the team that values community.',
    neighborhoods: [
      'Trilogy at Lake Norman', 'Sailview', 'Westport',
      'Beatty\'s Ford Park area', 'East Lincoln',
    ],
    highlights: [
      '55+ community experience',
      'Lakefront retreat specialists',
      'Family home expertise',
      'Lincoln County knowledge',
    ],
  },
  'monroe-nc': {
    description:
      'When Monroe homeowners need a roofing company they can trust, they turn to Best Roofing Now. As a family-owned roofing company serving Union County and the greater Charlotte metro, we bring over two decades of industry expertise to every project.',
    extendedContent:
      'Union County\'s seat offers historic Southern charm with a thriving downtown courthouse square. Monroe\'s excellent schools, affordable real estate, and access to Charlotte via Highway 74 make it attractive to families seeking space and value. Best Roofing Now is the roofing company in Monroe that preserves Southern heritage. Monroe\'s historic homes near downtown and newer developments throughout Union County require different roofing approaches. Our roofing company in Monroe honors the character of historic properties while bringing modern roofing technology to newer construction.',
    roofingChallenges:
      'Monroe\'s location in Union County puts it in the path of severe weather moving through the region. The area experiences frequent thunderstorms, tornado warnings, and hail events that can cause substantial roof damage. That\'s why choosing a local roofing company in Monroe with storm damage experience matters. Our team responds quickly to emergency situations, provides thorough inspections using advanced drone technology, and works directly with your insurance company to ensure fair claim settlements. As the dependable roofing company in Monroe, we\'ve helped Union County recover from many severe weather events.',
    servicesIntro:
      'As your Union County roofing company in Monroe, Best Roofing Now offers comprehensive roofing services including storm damage inspection and insurance claim assistance, complete roof replacement with lifetime warranty, emergency roof repair with 24/7 availability, preventive maintenance programs, gutter installation and repair, and commercial roofing systems. Our roofing company in Monroe combines quality with competitive pricing. When you need a trustworthy roofing company in Monroe, call the team with Union County values.',
    neighborhoods: [
      'Historic Downtown', 'Wedgewood', 'Indian Trail Road area',
      'Airport area communities', 'Wesley Chapel',
    ],
    highlights: [
      'Historic property preservation',
      'Modern construction expertise',
      'Union County specialists',
      'Competitive pricing with quality',
    ],
  },
  'mt-holly-nc': {
    description:
      'When Mt Holly homeowners need a roofing company they can trust, they turn to Best Roofing Now. As a family-owned roofing company serving Gaston County and the greater Charlotte metro, we bring over two decades of industry expertise to every project.',
    extendedContent:
      'This historic Gaston County town on the Catawba River offers small-town living with convenient access to Charlotte and the Mountain Island Lake area. Mt Holly\'s revitalized downtown and affordable housing attract residents seeking community-oriented living. Best Roofing Now is the roofing company in Mt Holly that values small-town character. Mt Holly\'s mix of historic homes, riverside properties, and newer developments requires versatile roofing expertise. Our roofing company in Mt Holly understands the unique challenges of properties near the Catawba River, including increased humidity and storm exposure.',
    roofingChallenges:
      'Mt Holly\'s riverside location and proximity to Mountain Island Lake create unique weather patterns. The area experiences severe storms from the Charlotte metro that can bring damaging winds, hail, and heavy rainfall. That\'s why choosing a local roofing company in Mt Holly with storm damage experience matters. Our team responds quickly to emergency situations, provides thorough inspections using advanced drone technology, and works directly with your insurance company to ensure fair claim settlements. As the riverside roofing company in Mt Holly, we know how water affects roofs.',
    servicesIntro:
      'As your riverside roofing company in Mt Holly, Best Roofing Now offers comprehensive roofing services including storm damage inspection and insurance claim assistance, complete roof replacement with lifetime warranty, emergency roof repair with 24/7 availability, preventive maintenance programs, gutter installation and repair, and commercial roofing systems. Our roofing company in Mt Holly serves the entire Gaston County community. When you need a dedicated roofing company in Mt Holly, trust your neighbors at Best Roofing Now.',
    neighborhoods: [
      'Downtown Mt Holly', 'Catawba Heights', 'Lucia Road area',
      'Stanley area communities',
    ],
    highlights: [
      'Riverside property expertise',
      'Historic home specialists',
      'Increased humidity and storm exposure knowledge',
      'Catawba River area experience',
    ],
  },
  // === NEW LOCATIONS - 50 Mile Expansion ===
  'indian-trail-nc': {
    description:
      'When Indian Trail homeowners need a roofing company they can trust, they turn to Best Roofing Now. As a family-owned roofing company serving Union County and the greater Charlotte metro, we bring over two decades of industry expertise to every project.',
    extendedContent:
      'One of the fastest-growing towns in North Carolina, Indian Trail has transformed from a quiet crossroads into a thriving community of over 40,000 residents. Named for the ancient trading path that once connected the Catawba and Waxhaw nations, today\'s Indian Trail offers excellent schools, new shopping at Sun Valley Commons, and easy access to Charlotte via Independence Boulevard. Best Roofing Now is the roofing company in Indian Trail that keeps pace with this growing community. From established neighborhoods along Old Monroe Road to the newest developments, our roofing company in Indian Trail understands the rapid growth and diverse housing stock of this dynamic town.',
    roofingChallenges:
      'Indian Trail\'s location in Union County means homes frequently experience severe thunderstorms moving through from the southwest. The area sees significant weather events including high winds, hail, and heavy rainfall that can damage roofing systems. That\'s why choosing a local roofing company in Indian Trail with storm damage experience matters. Our team responds quickly to emergency situations, provides thorough inspections using advanced drone technology, and works directly with your insurance company to ensure fair claim settlements. As your trusted roofing company in Indian Trail, we help protect the investments of this fast-growing community.',
    servicesIntro:
      'As your local roofing company in Indian Trail, Best Roofing Now offers comprehensive roofing services including storm damage inspection and insurance claim assistance, complete roof replacement with lifetime warranty, emergency roof repair with 24/7 availability, preventive maintenance programs, gutter installation and repair, and commercial roofing systems. Our roofing company in Indian Trail serves both long-time residents and new arrivals. When you need a responsive roofing company in Indian Trail, call the team that grows with you.',
    neighborhoods: [
      'Sun Valley', 'Hemby Bridge', 'Secrest Shortcut area', 'Old Monroe Road',
      'Wesley Chapel Road area', 'Stallings border communities',
    ],
    highlights: [
      'Fast-growing community specialists',
      'New construction and established home expertise',
      'Quick response times to Union County',
      'Understanding of rapid development areas',
    ],
  },
  'fort-mill-sc': {
    description:
      'When Fort Mill homeowners need a roofing company they can trust, they turn to Best Roofing Now. As a family-owned roofing company serving York County, SC and the greater Charlotte metro, we bring over two decades of industry expertise to every project.',
    extendedContent:
      'Fort Mill has become one of the most desirable communities in the Charlotte metro, attracting families with its excellent Fort Mill School District, lower South Carolina taxes, and charming downtown. From the master-planned communities of Baxter Village and Springfield to established neighborhoods along Highway 160, Fort Mill offers something for everyone. Best Roofing Now is the roofing company in Fort Mill that Charlotte\'s southern neighbors trust. We understand that Fort Mill homeowners expect Charlotte-quality work with the convenience of a local company. Our roofing company in Fort Mill delivers exactly that—professional service, premium materials, and the personal attention that comes from a family-owned business.',
    roofingChallenges:
      'Fort Mill experiences the same severe weather patterns as Charlotte, with summer thunderstorms, occasional hail, and high winds affecting homes throughout the community. The area\'s rapid growth means many homes are in newer developments, but even newer roofs can suffer storm damage. That\'s why choosing a roofing company in Fort Mill with storm damage experience matters. Our team responds quickly to emergency situations, provides thorough inspections using advanced drone technology, and works directly with your insurance company to ensure fair claim settlements. As the Carolina\'s trusted roofing company in Fort Mill, we cross state lines to serve you.',
    servicesIntro:
      'As your cross-state roofing company in Fort Mill, Best Roofing Now offers comprehensive roofing services including storm damage inspection and insurance claim assistance, complete roof replacement with lifetime warranty, emergency roof repair with 24/7 availability, preventive maintenance programs, gutter installation and repair, and commercial roofing systems. Our roofing company in Fort Mill is licensed in both North and South Carolina. When you need a reliable roofing company in Fort Mill, trust the bi-state experts.',
    neighborhoods: [
      'Baxter Village', 'Springfield', 'Regent Park', 'Kingsley',
      'Dobys Bridge area', 'Downtown Fort Mill', 'Gold Hill',
    ],
    highlights: [
      'Licensed in NC and SC',
      'Understanding of SC building codes',
      'Master-planned community experience',
      'Excellent Fort Mill School District service',
    ],
  },
  'rock-hill-sc': {
    description:
      'When Rock Hill homeowners need a roofing company they can trust, they turn to Best Roofing Now. As a family-owned roofing company serving York County, SC and the greater Charlotte metro, we bring over two decades of industry expertise to every project.',
    extendedContent:
      'South Carolina\'s fifth-largest city, Rock Hill combines historic charm with modern amenities. From the revitalized downtown and Winthrop University campus to major employers like 3D Systems and Comporium, Rock Hill offers economic opportunity and quality of life. Best Roofing Now is the roofing company in Rock Hill that spans the Carolina border. Rock Hill\'s diverse housing stock includes everything from historic homes near downtown to newer developments along Dave Lyle Boulevard. Our roofing company in Rock Hill has the experience to work on any property, from preserving the character of older homes to installing modern roofing systems on new construction.',
    roofingChallenges:
      'Rock Hill sits in the path of severe weather moving through the Charlotte region. The city experiences frequent thunderstorms, hail events, and high winds that can cause significant roof damage. That\'s why choosing a roofing company in Rock Hill with storm damage experience matters. Our team responds quickly to emergency situations, provides thorough inspections using advanced drone technology, and works directly with your insurance company to ensure fair claim settlements. As your Carolina roofing company in Rock Hill, we understand both NC and SC insurance processes.',
    servicesIntro:
      'As your York County roofing company in Rock Hill, Best Roofing Now offers comprehensive roofing services including storm damage inspection and insurance claim assistance, complete roof replacement with lifetime warranty, emergency roof repair with 24/7 availability, preventive maintenance programs, gutter installation and repair, and commercial roofing systems. Our roofing company in Rock Hill serves the entire York County community. When you need a proven roofing company in Rock Hill, trust the bi-state professionals.',
    neighborhoods: [
      'Downtown Rock Hill', 'Winthrop area', 'Ebenezer Road', 'Newport',
      'Lake Wylie area', 'Dave Lyle Boulevard', 'Riverwalk',
    ],
    highlights: [
      'York County\'s largest city coverage',
      'Historic and modern home expertise',
      'NC and SC licensed',
      'Understanding of SC insurance processes',
    ],
  },
  'waxhaw-nc': {
    description:
      'When Waxhaw homeowners need a roofing company they can trust, they turn to Best Roofing Now. As a family-owned roofing company serving Union County and the greater Charlotte metro, we bring over two decades of industry expertise to every project.',
    extendedContent:
      'This charming Union County town preserves its historic character while embracing growth. With antique shops lining Main Street and community events drawing visitors from across the region, Waxhaw maintains small-town appeal just 25 miles from Charlotte. Best Roofing Now is the roofing company in Waxhaw that respects this heritage. Waxhaw\'s mix of historic downtown buildings and newer residential developments requires a versatile approach. Our roofing company in Waxhaw understands the importance of preserving architectural character while providing modern roofing protection for your investment.',
    roofingChallenges:
      'Waxhaw\'s position in southern Union County puts it in the path of severe weather moving through the region. The area experiences thunderstorms, occasional hail, and high winds during storm season. That\'s why choosing a local roofing company in Waxhaw with storm damage experience matters. Our team responds quickly to emergency situations, provides thorough inspections using advanced drone technology, and works directly with your insurance company to ensure fair claim settlements.',
    servicesIntro:
      'As your historic roofing company in Waxhaw, Best Roofing Now offers comprehensive roofing services including storm damage inspection and insurance claim assistance, complete roof replacement with lifetime warranty, emergency roof repair with 24/7 availability, preventive maintenance programs, gutter installation and repair, and commercial roofing systems.',
    neighborhoods: [
      'Downtown Waxhaw', 'Cureton', 'Waxhaw Crossing', 'Millbridge',
      'Providence Road area', 'Marvin border communities',
    ],
    highlights: [
      'Historic downtown preservation expertise',
      'Antique district service',
      'Union County specialists',
      'Small-town personal service',
    ],
  },
  'belmont-nc': {
    description:
      'When Belmont homeowners need a roofing company they can trust, they turn to Best Roofing Now. As a family-owned roofing company serving Gaston County and the greater Charlotte metro, we bring over two decades of industry expertise to every project.',
    extendedContent:
      'Often called the "Best Small Town in the South," Belmont offers a thriving Main Street, excellent dining, and the charm of a walkable downtown just 15 minutes from Uptown Charlotte. The historic Abbey and Belmont Abbey College add to the town\'s distinctive character. Best Roofing Now is the roofing company in Belmont that matches the town\'s high standards. Belmont\'s mix of historic homes near downtown and newer developments requires careful attention to architectural compatibility. Our roofing company in Belmont takes pride in maintaining the aesthetic that makes this town special.',
    roofingChallenges:
      'Belmont experiences severe weather from Charlotte\'s western approach. Storms moving through Gaston County bring high winds, hail, and heavy rainfall that can damage roofing systems. That\'s why choosing a local roofing company in Belmont with storm damage experience matters. Our team responds quickly to emergency situations and works directly with your insurance company.',
    servicesIntro:
      'As your neighborhood roofing company in Belmont, Best Roofing Now offers comprehensive roofing services including storm damage inspection and insurance claim assistance, complete roof replacement with lifetime warranty, emergency roof repair with 24/7 availability, preventive maintenance programs, gutter installation and repair, and commercial roofing systems.',
    neighborhoods: [
      'Downtown Belmont', 'Catawba Heights', 'Belmont Abbey area',
      'Eagle Road communities', 'South Point Road',
    ],
    highlights: [
      'Best Small Town in the South service',
      'Historic home preservation',
      'Main Street aesthetic expertise',
      'Quick access from Charlotte',
    ],
  },
  'statesville-nc': {
    description:
      'When Statesville homeowners need a roofing company they can trust, they turn to Best Roofing Now. As a family-owned roofing company serving Iredell County and the greater Charlotte metro, we bring over two decades of industry expertise to every project.',
    extendedContent:
      'As Iredell County\'s seat and a historic crossroads community, Statesville offers affordable living with easy I-77 access to Charlotte and Lake Norman. The city\'s revitalized downtown, historic neighborhoods, and proximity to outdoor recreation make it attractive to families and retirees alike. Best Roofing Now is the roofing company in Statesville that delivers Charlotte expertise to Iredell County residents. Whether your home is in a historic neighborhood or a newer development, our roofing company in Statesville provides quality service at competitive prices.',
    roofingChallenges:
      'Statesville\'s position along the I-77 corridor exposes homes to severe weather patterns. The area experiences frequent thunderstorms, hail, and high winds that can cause significant roof damage. Our team responds quickly to emergency situations and provides thorough drone inspections.',
    servicesIntro:
      'As your Iredell County roofing company in Statesville, Best Roofing Now offers comprehensive roofing services including storm damage inspection, complete roof replacement, emergency roof repair, and commercial roofing systems.',
    neighborhoods: [
      'Downtown Statesville', 'Signal Hill', 'Northview Acres',
      'Brookdale area', 'Highway 21 corridor',
    ],
    highlights: [
      'Iredell County seat coverage',
      'Affordable solutions',
      'Historic and modern home expertise',
      'I-77 corridor service',
    ],
  },
  'hickory-nc': {
    description:
      'When Hickory homeowners need a roofing company they can trust, they turn to Best Roofing Now. As a family-owned roofing company serving Catawba County and the greater Charlotte metro, we bring over two decades of industry expertise to every project.',
    extendedContent:
      'Named one of the best places to live in America by U.S. News & World Report, Hickory combines affordability with quality of life. The city\'s furniture manufacturing heritage, thriving downtown, and proximity to the Blue Ridge Mountains attract residents seeking value and lifestyle. Best Roofing Now extends its Charlotte-area service to Hickory homeowners who deserve the same quality workmanship.',
    roofingChallenges:
      'Hickory\'s foothills location brings unique weather challenges including severe thunderstorms and occasional ice events in winter. The area\'s terrain can create microclimates that affect roofing differently across neighborhoods.',
    servicesIntro:
      'As your extended-service roofing company reaching Hickory, Best Roofing Now offers storm damage inspection, roof replacement, emergency repair, and commercial roofing services.',
    neighborhoods: [
      'Downtown Hickory', 'Viewmont', 'Highland', 'Kenworth',
      'Catawba Valley area',
    ],
    highlights: [
      'Extended Charlotte metro service',
      'Furniture City coverage',
      'Foothills weather expertise',
      'Same Charlotte quality',
    ],
  },
  'tega-cay-sc': {
    description:
      'When Tega Cay homeowners need a roofing company they can trust, they turn to Best Roofing Now. As a family-owned roofing company serving York County, SC and the greater Charlotte metro, we bring over two decades of industry expertise to every project.',
    extendedContent:
      'This lakeside community on Lake Wylie offers resort-style living with golf courses, waterfront properties, and excellent schools. Tega Cay\'s planned community design and active HOAs mean homeowners expect quality workmanship that maintains neighborhood standards. Best Roofing Now is the roofing company in Tega Cay that understands waterfront living.',
    roofingChallenges:
      'Tega Cay\'s position on Lake Wylie exposes homes to increased wind and weather from the open water. Storm systems can intensify over the lake, bringing stronger winds and more significant rainfall to waterfront properties.',
    servicesIntro:
      'As your lakeside roofing company in Tega Cay, Best Roofing Now offers comprehensive roofing services designed for waterfront homes and HOA communities.',
    neighborhoods: [
      'Tega Cay Golf Club area', 'Windjammer', 'The Peninsula',
      'Lake Wylie waterfront', 'Catawba area',
    ],
    highlights: [
      'HOA-compliant workmanship',
      'Waterfront property expertise',
      'Lake Wylie specialists',
      'SC licensed and insured',
    ],
  },
  'indian-land-sc': {
    description:
      'When Indian Land homeowners need a roofing company they can trust, they turn to Best Roofing Now. As a family-owned roofing company serving Lancaster County, SC and the greater Charlotte metro, we bring over two decades of industry expertise to every project.',
    extendedContent:
      'One of the fastest-growing areas in South Carolina, Indian Land offers newer homes, excellent schools, and lower taxes just across the state line from Charlotte. Master-planned communities like Sun City Carolina Lakes and Edgewater attract families and active adults seeking value. Best Roofing Now serves this growing SC community with the same quality expected in Charlotte.',
    roofingChallenges:
      'Indian Land\'s newer construction means many homes have roofs that are still under manufacturer warranty. However, storm damage can void warranties if not properly addressed. Our team understands warranty requirements and works with manufacturers to protect your coverage.',
    servicesIntro:
      'As your bi-state roofing company serving Indian Land, Best Roofing Now offers storm damage inspection, roof replacement, emergency repair, and warranty-conscious service.',
    neighborhoods: [
      'Sun City Carolina Lakes', 'Edgewater', 'Regent Park South',
      'Lancaster Highway corridor', 'Founders Pointe',
    ],
    highlights: [
      'Fastest-growing SC area coverage',
      'New construction warranty expertise',
      'Active adult community experience',
      'Lower SC tax area service',
    ],
  },
};

// ProjectMapIt map IDs for each location
const locationMapIds: Record<string, string> = {
  'charlotte-nc': '6929921876fb8fa56e295536',
  'concord-nc': '692991a9a73e38e6e4a2a783',
  'matthews-nc': '6929924976fb8fa56e295607',
  'mint-hill-nc': '6929925176fb8fa56e295637',
  'kannapolis-nc': '692991baa73e38e6e4a2a7dc',
  'cornelius-nc': '692991e176fb8fa56e2952dc',
  'lake-norman': '6929920c76fb8fa56e2954b8',
  'huntersville-nc': '692991c876fb8fa56e29522f',
  'denver-nc': '6929920076fb8fa56e29545b',
  'davidson-nc': '692991eb76fb8fa56e29530f',
  'mooresville-nc': '692991f476fb8fa56e295399',
  'gastonia-nc': '6929923d76fb8fa56e2955c9',
  'mt-holly-nc': '6929922b76fb8fa56e295597',
};

// Default content for locations without specific content
const defaultContent = {
  description:
    'Best Roofing Now proudly serves this community with the same quality, integrity, and expertise that has made us Charlotte\'s trusted roofing company. Our team is ready to help with all your roofing needs.',
  extendedContent:
    'As a family-owned roofing company serving the greater Charlotte metro area, Best Roofing Now brings the same quality, integrity, and expertise to every community we serve. We understand that your roof is one of the most important investments in your home, protecting your family and belongings from the elements. That\'s why we approach every project with the same level of care and attention to detail, regardless of the size or scope.',
  roofingChallenges:
    'The Charlotte metro area experiences a humid subtropical climate with hot summers, frequent thunderstorms, and occasional severe weather events. High winds, hail, and heavy rainfall can all take a toll on roofing systems over time. That\'s why choosing a local roofing company with storm damage experience matters. Our team responds quickly to emergency situations, provides thorough inspections using advanced drone technology, and works directly with your insurance company to ensure fair claim settlements.',
  servicesIntro:
    'Best Roofing Now offers comprehensive roofing services including storm damage inspection and insurance claim assistance, complete roof replacement with lifetime warranty, emergency roof repair with 24/7 availability, preventive maintenance programs, gutter installation and repair, and commercial roofing systems. We use only premium materials from trusted manufacturers like GAF and CertainTeed, backed by industry-leading warranties.',
  neighborhoods: [],
  highlights: [
    'Same quality service as Charlotte',
    'Free estimates and inspections',
    'Licensed, bonded, and insured',
    'Satisfaction guaranteed',
  ],
};

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return LOCATIONS.map((location) => ({
    city: location.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const location = LOCATIONS.find((l) => l.slug === city);

  if (!location) {
    return { title: 'Location Not Found' };
  }

  return {
    title: `Roofing Company ${location.city}, ${location.state} | Roof Repair & Replacement`,
    description: `Best Roofing Now serves ${location.city}, ${location.state} with professional roofing services. Residential & commercial roofing, roof repair, replacement, and emergency services. Free estimates!`,
    keywords: [
      `roofing company ${location.city} ${location.state}`,
      `${location.city} roofers`,
      `roof repair ${location.city}`,
      `roof replacement ${location.city} ${location.state}`,
    ],
    alternates: {
      canonical: `${SITE_CONFIG.url}/locations/${city}`,
    },
    openGraph: {
      title: `Roofing Services in ${location.city}, ${location.state}`,
      description: `Professional roofing services in ${location.city}. Free estimates, quality workmanship, BBB A+ rated.`,
      url: `${SITE_CONFIG.url}/locations/${city}`,
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { city } = await params;
  const location = LOCATIONS.find((l) => l.slug === city);

  if (!location) {
    notFound();
  }

  const content = locationContent[city] || defaultContent;
  const otherLocations = LOCATIONS.filter((l) => l.slug !== city).slice(0, 6);

  // Generate unique FAQs for this location
  const locationFAQs = generateLocationFAQs(location.city, location.state, location.county);

  return (
    <>
      <LocationSchema location={location} />
      <FAQSchema faqs={locationFAQs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Service Areas', url: `${SITE_CONFIG.url}/locations` },
          { name: `${location.city}, ${location.state}`, url: `${SITE_CONFIG.url}/locations/${city}` },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="font-semibold">{location.county} County</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Roofing Company in {location.city}, {location.state}
            </h1>
            <p className="text-xl text-white/90 mb-8">{content.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                className="bg-accent hover:bg-accent-dark text-white"
              >
                Get Free Estimate in {location.city}
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={<Phone className="w-5 h-5" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Extended About Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Your Trusted Roofing Company in {location.city}
              </h2>
              <div className="prose prose-lg text-gray">
                <p className="mb-4">{content.extendedContent || defaultContent.extendedContent}</p>
                <p className="mb-4">{content.roofingChallenges || defaultContent.roofingChallenges}</p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                {(LOCATION_HERO_IMAGES[city] || '').endsWith('.mp4') ? (
                  <video
                    src={LOCATION_HERO_IMAGES[city]}
                    poster={IMAGES.hero.roofTeam}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    className="object-cover w-full"
                    style={{ width: '100%', height: 'auto', maxHeight: '400px' }}
                    aria-label={`Best Roofing Now team working in ${location.city}`}
                  />
                ) : (
                  <Image
                    src={LOCATION_HERO_IMAGES[city] || IMAGES.houses.house1}
                    alt={`Best Roofing Now serving ${location.city}`}
                    width={600}
                    height={400}
                    className="object-cover w-full"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in This Location */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Roofing Services Available in {location.city}
            </h2>
            <p className="text-gray text-lg mb-8 text-center">
              {content.servicesIntro || defaultContent.servicesIntro}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark mb-2">Roof Repair in {location.city}</h3>
                <p className="text-gray text-sm">Fast, reliable repairs for leaks, storm damage, and wear. Our roofing company in {location.city} responds quickly to protect your home.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark mb-2">Roof Replacement in {location.city}</h3>
                <p className="text-gray text-sm">Complete roof replacement with premium materials and lifetime warranties. Trust the leading roofing company in {location.city}.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark mb-2">Storm Damage in {location.city}</h3>
                <p className="text-gray text-sm">24/7 emergency response and insurance claim assistance. Your roofing company in {location.city} is here when you need us most.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark mb-2">Roof Inspection in {location.city}</h3>
                <p className="text-gray text-sm">Free drone inspections with detailed photo documentation. Let our roofing company in {location.city} assess your roof.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark mb-2">Gutters in {location.city}</h3>
                <p className="text-gray text-sm">Professional gutter installation and repair to protect your foundation. Your complete roofing company in {location.city}.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark mb-2">Commercial Roofing in {location.city}</h3>
                <p className="text-gray text-sm">Flat roofs, metal roofing, and coating systems for businesses. The commercial roofing company {location.city} trusts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Our Work in the {location.city} Area
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              {(LOCATION_HERO_IMAGES[city] || '').endsWith('.mp4') ? (
                <video
                  src={LOCATION_HERO_IMAGES[city]}
                  poster={IMAGES.hero.roofTeam}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                  className="object-cover hover:scale-105 transition-transform duration-300 w-full h-full absolute inset-0"
                  aria-label={`Roofing project video in ${location.city}`}
                />
              ) : (
                <Image
                  src={LOCATION_HERO_IMAGES[city] || IMAGES.houses.house1}
                  alt={`Roofing crew working in ${location.city}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              )}
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.houses.house1}
                alt={`Residential roofing in ${location.city}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.projects.work1}
                alt={`Roofing project in ${location.city}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.houses.modern1}
                alt={`New roof installation in ${location.city}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for This Location */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Why {location.city} Homeowners Choose Us
              </h2>
              <ul className="space-y-4 mb-8">
                {(content.highlights || defaultContent.highlights).map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-dark">{highlight}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-dark">5.0 star Google rating with {SITE_CONFIG.googleReviewCount}+ reviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-dark">BBB A+ accredited since 2021</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-dark">Veteran-founded, family owned</span>
                </li>
              </ul>
              <Button href="/contact">
                Schedule Your Free Inspection
              </Button>
            </div>

            {/* Neighborhoods Served */}
            {content.neighborhoods && content.neighborhoods.length > 0 && (
              <div className="bg-light rounded-2xl p-8">
                <h3 className="text-xl font-bold text-primary mb-6">
                  Neighborhoods We Serve in {location.city}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {content.neighborhoods.map((neighborhood) => (
                    <div
                      key={neighborhood}
                      className="flex items-center gap-2 bg-white rounded-lg p-3"
                    >
                      <MapPin className="w-4 h-4 text-accent" />
                      <span className="text-dark text-sm">{neighborhood}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <Services
        title={`Roofing Services in ${location.city}`}
        subtitle={`We offer comprehensive roofing solutions for ${location.city} homes and businesses.`}
        showAll={true}
      />

      {/* Project Map - Uses ProjectMapIt embed */}
      {locationMapIds[city] && (
        <section className="section">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Our Recent Projects Near {location.city}
              </h2>
              <p className="text-gray">
                Explore roofing projects we have completed in the {location.city} area and throughout the Charlotte metro.
              </p>
            </div>
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src={`https://projectmapit.com/best-roofing-now-llc/map?map=${locationMapIds[city]}`}
                width="100%"
                height="600"
                style={{ border: 0 }}
                title={`Roofing Projects Near ${location.city}`}
                className="w-full"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      )}

      {/* Contact Info */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Contact Our {location.city} Roofing Team
            </h2>
            <p className="text-gray text-lg mb-6">
              Ready to get started? Our team serves {location.city} and all of {location.county} County
              with professional roofing services. Call us today for a free estimate!
            </p>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-bold text-dark mb-2">Office Address</h3>
                  <p className="text-gray">
                    {SITE_CONFIG.address.street}<br />
                    {SITE_CONFIG.address.suite}<br />
                    {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-2">Contact</h3>
                  <p className="text-gray">
                    Phone: <a href={`tel:${SITE_CONFIG.phoneClean}`} className="text-primary font-semibold">{SITE_CONFIG.phone}</a><br />
                    Email: <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary">{SITE_CONFIG.email}</a><br />
                    Hours: {SITE_CONFIG.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Other Areas We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {otherLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow group"
              >
                <MapPin className="w-5 h-5 text-primary mx-auto mb-2 group-hover:text-accent transition-colors" />
                <span className="text-dark font-medium group-hover:text-primary transition-colors">
                  {loc.city}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Service Areas <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        faqs={locationFAQs}
        title={`${location.city} Roofing FAQ`}
        subtitle={`Common questions about roofing services in ${location.city}, ${location.state}`}
      />

      {/* CTA */}
      <CTASection
        title={`Need a Roofer in ${location.city}?`}
        subtitle={`Get a free estimate from ${location.city}'s trusted roofing company. No pressure, just honest advice.`}
      />
    </>
  );
}
