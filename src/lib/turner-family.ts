// Turner Family personal notes and quotes for use throughout the site
// The Turners are originally from Alabama but have made Charlotte their home

export const TURNER_NOTES = {
  james: {
    onQuality:
      "My daddy always said, 'If you're gonna do something, do it right the first time.' That's why we never cut corners on materials or workmanship.",
    onCommunity:
      "Charlotte took me in 15 years ago and gave me a home. Now I get to give back by protecting the homes of my neighbors.",
    onStorms:
      "When storms hit, some companies see dollar signs. I see my neighbors in trouble. That's the difference.",
    onHonesty:
      "I'd rather lose a job being honest than win one being shady. That's not how the Turners do business.",
  },
  fred: {
    onWorkEthic:
      "Back in Alabama, we didn't have fancy tools - just hard work and determination. That mindset hasn't changed.",
    onDetails:
      "The devil's in the details. A roof might look fine from the ground, but we check every shingle, every nail, every flashing.",
    onTeam:
      "Every person on our crew knows: if you wouldn't put it on your own house, don't put it on someone else's.",
  },
  shirley: {
    onCustomerCare:
      "When someone calls worried about their roof, they're not just a customer - they're someone's mama or daddy or grandbaby. We treat them that way.",
    onCommunication:
      "Nobody should feel confused about what's happening with their roof. We explain everything in plain English, not contractor-speak.",
    onTrust:
      "Trust is earned one roof at a time. That's why we've never had a single BBB complaint.",
  },
};

export const TURNER_FAMILY_INFO = {
  james: {
    name: 'James Turner',
    role: 'Founder & Owner',
    yearsInCharlotte: 15,
    militaryVeteran: true,
    background:
      'Originally from Alabama, James has called Charlotte home for over 15 years. His military service taught him the value of integrity, precision, and never leaving a job half-done.',
  },
  fred: {
    name: 'Fred Turner',
    role: 'Operations Manager',
    joinedYear: 2022,
    background:
      'Fred joined his son in Charlotte in 2022, bringing decades of hands-on experience and old-school work ethic to the team.',
  },
  shirley: {
    name: 'Shirley Turner',
    role: 'Customer Relations',
    joinedYear: 2022,
    background:
      'Shirley moved to Charlotte with Fred in 2022 and ensures every customer feels heard, valued, and cared for throughout their roofing project.',
  },
};

// Roofing tips and advice from James - these can be displayed throughout the site
export const JAMES_ROOFING_TIPS = [
  {
    id: 'spring-inspection',
    title: 'Spring Inspection Tip',
    tip: "After winter, I always tell folks to get up on a ladder and check their gutters. Nine times out of ten, you'll find debris that's been sitting there causing water backup. A $50 gutter cleaning can save you a $5,000 repair.",
    season: 'spring',
  },
  {
    id: 'storm-prep',
    title: 'Before Storm Season',
    tip: "Charlotte gets hit with some nasty storms from April through September. Before the season kicks off, trim any branches within 10 feet of your roof. I've seen too many beautiful roofs destroyed by trees that should've been trimmed months ago.",
    season: 'spring',
  },
  {
    id: 'attic-check',
    title: 'The Attic Test',
    tip: "Want to know if your roof's in trouble? On a rainy day, go up to your attic with a flashlight. Look for any water stains or daylight coming through. If you see either, call someone before that small leak becomes a big problem.",
    season: 'any',
  },
  {
    id: 'summer-heat',
    title: 'Summer Heat Advice',
    tip: "Charlotte summers are brutal on roofs - we regularly hit 95+ degrees. That heat makes shingles expand and contract daily. If your shingles are curling at the edges or losing granules, they're telling you they've had enough.",
    season: 'summer',
  },
  {
    id: 'insurance-tip',
    title: 'Insurance Claim Advice',
    tip: "If you've had storm damage, don't wait to file your claim. Insurance companies have time limits, and the longer you wait, the harder it is to prove the damage was from that specific storm. Document everything with photos the same day if you can.",
    season: 'any',
  },
  {
    id: 'contractor-advice',
    title: 'Choosing a Roofer',
    tip: "Here's my honest advice: never hire a roofer who won't give you a physical address and let you check their reviews. Storm chasers knock on doors after every hail storm and disappear after cashing your insurance check. Local companies like us - we're not going anywhere.",
    season: 'any',
  },
  {
    id: 'winter-ice',
    title: 'Ice Dam Prevention',
    tip: "We don't get as much ice as up north, but when we do, it causes problems. Ice dams form when heat escapes through your attic and melts snow that refreezes at the edge. Good attic insulation prevents most ice dam issues.",
    season: 'winter',
  },
  {
    id: 'ventilation',
    title: 'Attic Ventilation',
    tip: "A lot of folks don't realize their attic needs to breathe. Without proper ventilation, heat builds up in summer and moisture builds up in winter. Both destroy shingles from the inside out. I check ventilation on every inspection - it's that important.",
    season: 'any',
  },
  {
    id: 'maintenance-saves',
    title: 'Why Maintenance Matters',
    tip: "I had a customer in Ballantyne who skipped maintenance for 5 years. A $150 flashing repair turned into $8,000 of water damage to their ceiling and insulation. I tell every homeowner the same thing: a $199 maintenance plan is the cheapest insurance you'll ever buy.",
    season: 'any',
  },
  {
    id: 'cost-honesty',
    title: 'Real Talk on Roof Costs',
    tip: "When someone asks me what a new roof costs, I don't give them the lowest number to get in the door. I give them the real number. If a contractor's estimate is way lower than everyone else's, that's not a deal - that's a warning sign. Cheap work costs more in the long run.",
    season: 'any',
  },
  {
    id: 'fall-prep',
    title: 'Fall Roof Prep',
    tip: "October in Charlotte is beautiful, but those falling leaves are your roof's worst enemy. They pile up in valleys and gutters, hold moisture, and cause rot. Every November I tell my customers: get those leaves off before winter rain sets in. It takes 30 minutes and saves thousands.",
    season: 'fall',
  },
  {
    id: 'gutter-safety',
    title: 'Gutter Cleaning Safety',
    tip: "I've been on more roofs than I can count, and I still respect the ladder every single time. The biggest mistake I see homeowners make is overreaching - they lean too far to avoid climbing down and moving the ladder. That's how falls happen. Take the extra two minutes to reposition. Your gutters aren't going anywhere.",
    season: 'any',
  },
];

// Community involvement and events
export const COMMUNITY_INVOLVEMENT = [
  {
    id: 'habitat-for-humanity',
    name: 'Habitat for Humanity Charlotte',
    description: "We've partnered with Habitat for Humanity to provide roofing for families in need. Nothing feels better than handing keys to a family and knowing their roof will protect them for decades.",
    type: 'nonprofit',
    ongoing: true,
  },
  {
    id: 'veterans-roof',
    name: 'Roofs for Veterans',
    description: "As a veteran myself, I know what it means to serve. Every year we donate a free roof replacement to a local veteran in need. It's our way of saying thank you to those who served.",
    type: 'nonprofit',
    ongoing: true,
  },
  {
    id: 'charlotte-chamber',
    name: 'Charlotte Chamber of Commerce',
    description: "Being part of the Charlotte business community means more than just having customers here - it means investing in the city's future. We're proud members of the Charlotte Chamber.",
    type: 'networking',
    ongoing: true,
  },
  {
    id: 'lake-norman-chamber',
    name: 'Lake Norman Chamber of Commerce',
    description: "The Lake Norman area has become like a second home to us. We joined the chamber to better serve our neighbors in Huntersville, Cornelius, Davidson, and Mooresville.",
    type: 'networking',
    ongoing: true,
  },
  {
    id: 'bbb-accredited',
    name: 'Better Business Bureau',
    description: "Getting BBB accredited wasn't just about the badge - it's a commitment to do business the right way. That A+ rating means something to us, and we work every day to keep it.",
    type: 'accreditation',
    ongoing: true,
  },
  {
    id: 'storm-relief',
    name: 'Emergency Storm Response',
    description: "When major storms hit Charlotte, we don't wait for calls. We drive through neighborhoods checking on elderly residents and folks we know might need help. That's just what neighbors do.",
    type: 'community',
    ongoing: true,
  },
];

// Personal anecdotes for storytelling throughout the site
export const TURNER_ANECDOTES = [
  {
    id: 'first-charlotte-job',
    title: 'Our First Charlotte Job',
    story: "I still remember our first roofing job in Charlotte - a small ranch house in Plaza Midwood. The homeowner was a single mom who'd been quoted crazy prices by other companies. We did the job for a fair price and she sent us a thank you card that I still have in my office. That's when I knew Charlotte was home.",
    author: 'james',
  },
  {
    id: 'dad-joins',
    title: 'When Dad Came to Town',
    story: "When my dad showed up from Alabama in 2022, I thought he'd want to relax. Instead, he was at the job site at 6 AM the next morning. He said, 'If my name's gonna be on this company, I'm gonna make sure we do it right.' He hasn't slowed down since.",
    author: 'james',
  },
  {
    id: 'storm-story',
    title: 'The Night Everything Changed',
    story: "During the big storm of 2023, we got over 200 calls in 48 hours. Instead of seeing dollar signs, I saw my neighbors in trouble. We worked 18-hour days for two weeks straight, prioritizing the elderly and families with kids. Some of those folks still call just to say hi.",
    author: 'james',
  },
  {
    id: 'mrs-johnson',
    title: "Mrs. Johnson's Roof",
    story: "There was this sweet lady in Myers Park, Mrs. Johnson, who was worried sick about affording a new roof. When we finished the job, she tried to give us cookies instead of a tip. Shirley still talks about those cookies. We've done her maintenance for free ever since - she reminds us of my grandmother.",
    author: 'james',
  },
  {
    id: 'alabama-lessons',
    title: 'Lessons from Alabama',
    story: "Growing up in Alabama, we didn't have much, but we had our word. My daddy taught me that a handshake meant more than any contract. I've carried that with me to Charlotte. When I tell you something, you can take it to the bank.",
    author: 'fred',
  },
  {
    id: 'shirley-calling',
    title: 'Why Shirley Answers the Phone',
    story: "People ask why I answer the phones instead of hiring someone. It's simple - when someone calls about their roof, they're often worried. They need to hear a real person who cares, not a recording. Every call matters to us because every home matters to someone.",
    author: 'shirley',
  },
  {
    id: 'maintenance-story',
    title: 'The Leak That Changed Everything',
    story: "Early on, I got a call from a family in Dilworth whose roof was leaking into their daughter's bedroom. Turns out they'd had a small issue two years earlier but never got it checked. Two years of water damage had rotted the decking. That's when I started offering maintenance plans - because no kid should have a bucket in their room catching rainwater.",
    author: 'james',
  },
  {
    id: 'honest-estimate',
    title: 'The Estimate That Lost Us Money',
    story: "A customer in SouthPark called for a roof replacement quote. When I got up there, the roof only needed $600 in repairs. I told her the truth instead of selling her a $15,000 roof she didn't need. She's sent us twelve referrals since then. Honesty is the best business plan I've ever had.",
    author: 'james',
  },
  {
    id: 'gutter-rescue',
    title: 'The Gutter That Saved a Foundation',
    story: "A couple in Mint Hill called about water pooling around their foundation. They were getting quotes for $12,000 in foundation work. I went out and looked at the gutters first - completely clogged with pine needles, downspouts disconnected. We cleaned everything out and extended the downspouts for $250. The water problem disappeared. Their foundation contractor called me afterward and said, 'You just saved them twelve grand.' That's why I always tell people: check the gutters first.",
    author: 'james',
  },
];
