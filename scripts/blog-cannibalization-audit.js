/**
 * Blog Cannibalization Audit & Enhancement Selector
 *
 * Analyzes SEO data to:
 * 1. Identify keyword cannibalization (multiple pages competing for same keyword)
 * 2. Find high-potential blogs to improve
 * 3. Generate a prioritized list of 10 blogs for enhancement
 */

const fs = require('fs');
const path = require('path');

// Load SEO analysis results
const resultsPath = path.join(__dirname, 'seo-analysis-results.json');
const data = JSON.parse(fs.readFileSync(resultsPath, 'utf-8'));

console.log('=' .repeat(70));
console.log('BLOG CANNIBALIZATION AUDIT & ENHANCEMENT SELECTOR');
console.log('=' .repeat(70));
console.log(`Analysis Date: ${new Date().toISOString()}`);
console.log(`Total Ranked Keywords: ${data.rankedKeywords.length}`);
console.log();

// ============================================
// PART 1: Keyword Cannibalization Analysis
// ============================================

console.log('=' .repeat(70));
console.log('PART 1: KEYWORD CANNIBALIZATION ANALYSIS');
console.log('=' .repeat(70));
console.log();

// Group keywords by keyword text
const keywordToUrls = new Map();

data.rankedKeywords.forEach(kw => {
  if (!kw.keyword || !kw.url) return;

  const keyword = kw.keyword.toLowerCase();
  if (!keywordToUrls.has(keyword)) {
    keywordToUrls.set(keyword, []);
  }
  keywordToUrls.get(keyword).push({
    url: kw.url,
    position: kw.position,
    searchVolume: kw.searchVolume || 0,
  });
});

// Find cannibalization: keywords with multiple URLs ranking
const cannibalized = [];

keywordToUrls.forEach((urls, keyword) => {
  if (urls.length > 1) {
    // Sort by position
    urls.sort((a, b) => (a.position || 999) - (b.position || 999));

    cannibalized.push({
      keyword,
      searchVolume: urls[0].searchVolume,
      urls: urls.map(u => ({
        url: u.url.replace('https://www.bestroofingnow.com', '').replace('https://bestroofingnow.com', ''),
        position: u.position,
      })),
      severity: urls[0].searchVolume > 500 ? 'HIGH' : urls[0].searchVolume > 100 ? 'MEDIUM' : 'LOW',
    });
  }
});

// Sort by search volume (highest first)
cannibalized.sort((a, b) => b.searchVolume - a.searchVolume);

console.log(`Found ${cannibalized.length} cannibalized keywords (multiple URLs ranking for same term)`);
console.log();

// Show high-severity cannibalization
const highSeverity = cannibalized.filter(c => c.severity === 'HIGH');
const mediumSeverity = cannibalized.filter(c => c.severity === 'MEDIUM');

console.log(`HIGH SEVERITY (volume > 500): ${highSeverity.length} keywords`);
console.log('-'.repeat(70));
highSeverity.slice(0, 15).forEach(c => {
  console.log(`\n"${c.keyword}" (volume: ${c.searchVolume})`);
  c.urls.forEach((u, i) => {
    const marker = i === 0 ? '→ KEEP' : '  MERGE/REDIRECT';
    console.log(`  ${marker}: ${u.url} (pos: ${u.position})`);
  });
});

console.log();
console.log(`MEDIUM SEVERITY (volume 100-500): ${mediumSeverity.length} keywords`);
console.log('-'.repeat(70));
mediumSeverity.slice(0, 10).forEach(c => {
  console.log(`\n"${c.keyword}" (volume: ${c.searchVolume})`);
  c.urls.forEach((u, i) => {
    console.log(`  ${i === 0 ? '→' : ' '} ${u.url} (pos: ${u.position})`);
  });
});

// ============================================
// PART 2: Blog Performance Analysis
// ============================================

console.log();
console.log('=' .repeat(70));
console.log('PART 2: BLOG PERFORMANCE ANALYSIS');
console.log('=' .repeat(70));
console.log();

// Filter to blog URLs only
const blogKeywords = data.rankedKeywords.filter(kw =>
  kw.url && kw.url.includes('/blog/')
);

// Group by blog slug
const blogMap = new Map();

blogKeywords.forEach(kw => {
  const slug = kw.url.split('/blog/')[1]?.replace(/\/$/, '') || '';
  if (!slug) return;

  if (!blogMap.has(slug)) {
    blogMap.set(slug, {
      slug,
      url: kw.url,
      keywords: [],
      totalVolume: 0,
      bestPosition: 999,
      strikingDistanceKeywords: 0, // positions 11-30
      topKeywords: [],
    });
  }

  const blog = blogMap.get(slug);
  blog.keywords.push({
    keyword: kw.keyword,
    position: kw.position,
    volume: kw.searchVolume || 0,
  });
  blog.totalVolume += kw.searchVolume || 0;

  if (kw.position && kw.position < blog.bestPosition) {
    blog.bestPosition = kw.position;
  }

  if (kw.position && kw.position >= 11 && kw.position <= 30) {
    blog.strikingDistanceKeywords++;
  }
});

// Calculate priority scores
const blogs = Array.from(blogMap.values()).map(blog => {
  // Sort keywords by volume
  blog.keywords.sort((a, b) => (b.volume || 0) - (a.volume || 0));
  blog.topKeywords = blog.keywords.slice(0, 5);

  // Priority score calculation
  let score = 0;

  // Search volume (primary factor)
  score += blog.totalVolume * 1.0;

  // Striking distance bonus (big opportunity)
  score += blog.strikingDistanceKeywords * 500;

  // Position potential
  if (blog.bestPosition >= 11 && blog.bestPosition <= 20) {
    score += 1000; // Almost page 1
  } else if (blog.bestPosition >= 21 && blog.bestPosition <= 50) {
    score += 500;
  } else if (blog.bestPosition >= 51 && blog.bestPosition <= 100) {
    score += 200;
  }

  // Keyword count bonus
  score += blog.keywords.length * 100;

  blog.priorityScore = score;
  return blog;
});

// Sort by priority score
blogs.sort((a, b) => b.priorityScore - a.priorityScore);

console.log(`Total blogs with rankings: ${blogs.length}`);
console.log();

// ============================================
// PART 3: Top 10 Blogs for Enhancement
// ============================================

console.log('=' .repeat(70));
console.log('PART 3: TOP 10 BLOGS FOR ENHANCEMENT');
console.log('=' .repeat(70));
console.log();

const top10 = blogs.slice(0, 10);

top10.forEach((blog, i) => {
  console.log(`${i + 1}. ${blog.slug}`);
  console.log(`   Priority Score: ${blog.priorityScore.toLocaleString()}`);
  console.log(`   Total Volume: ${blog.totalVolume.toLocaleString()}`);
  console.log(`   Best Position: ${blog.bestPosition === 999 ? 'N/A' : blog.bestPosition}`);
  console.log(`   Striking Distance Keywords: ${blog.strikingDistanceKeywords}`);
  console.log(`   Total Keywords: ${blog.keywords.length}`);
  console.log(`   Top Keywords:`);
  blog.topKeywords.slice(0, 3).forEach(kw => {
    console.log(`     - "${kw.keyword}" (vol: ${kw.volume}, pos: ${kw.position})`);
  });
  console.log();
});

// ============================================
// PART 4: Cannibalization Issues in Top Blogs
// ============================================

console.log('=' .repeat(70));
console.log('PART 4: CANNIBALIZATION ISSUES IN TOP BLOGS');
console.log('=' .repeat(70));
console.log();

// Check if any top 10 blogs have cannibalization issues
top10.forEach((blog, i) => {
  const blogUrl = blog.url.replace('https://www.bestroofingnow.com', '').replace('https://bestroofingnow.com', '');

  const issues = cannibalized.filter(c =>
    c.urls.some(u => u.url === blogUrl) && c.searchVolume > 50
  );

  if (issues.length > 0) {
    console.log(`${i + 1}. ${blog.slug}`);
    console.log(`   CANNIBALIZATION ISSUES:`);
    issues.forEach(issue => {
      console.log(`   - "${issue.keyword}" (vol: ${issue.searchVolume})`);
      issue.urls.forEach(u => {
        const marker = u.url === blogUrl ? '→ THIS BLOG' : '  COMPETING:';
        console.log(`     ${marker} ${u.url} (pos: ${u.position})`);
      });
    });
    console.log();
  }
});

// ============================================
// PART 5: Enhancement Recommendations
// ============================================

console.log('=' .repeat(70));
console.log('PART 5: ENHANCEMENT RECOMMENDATIONS');
console.log('=' .repeat(70));
console.log();

const enhancementPlan = top10.map((blog, i) => {
  const blogUrl = blog.url.replace('https://www.bestroofingnow.com', '').replace('https://bestroofingnow.com', '');

  // Find cannibalization issues
  const cannibalizationIssues = cannibalized.filter(c =>
    c.urls.some(u => u.url === blogUrl)
  );

  // Recommendations
  const recommendations = [];

  // Volume-based recommendations
  if (blog.totalVolume > 1000) {
    recommendations.push('HIGH PRIORITY: High-volume keywords - expand content significantly');
  }

  // Position-based recommendations
  if (blog.strikingDistanceKeywords > 0) {
    recommendations.push(`QUICK WIN: ${blog.strikingDistanceKeywords} keywords in striking distance (11-30) - optimize for these`);
  }

  if (blog.bestPosition > 50) {
    recommendations.push('NEEDS WORK: Not ranking well - major content update needed');
  } else if (blog.bestPosition > 20) {
    recommendations.push('OPPORTUNITY: Close to page 1 - targeted optimization can help');
  }

  // Cannibalization recommendations
  if (cannibalizationIssues.length > 0) {
    recommendations.push(`FIX CANNIBALIZATION: ${cannibalizationIssues.length} competing pages - consolidate or differentiate`);
  }

  // Content recommendations
  recommendations.push('Update pricing/dates to 2026');
  recommendations.push('Add Charlotte-specific content');
  recommendations.push('Add FAQ section for featured snippets');

  return {
    rank: i + 1,
    slug: blog.slug,
    priorityScore: blog.priorityScore,
    totalVolume: blog.totalVolume,
    bestPosition: blog.bestPosition,
    strikingDistanceKeywords: blog.strikingDistanceKeywords,
    topKeywords: blog.topKeywords.map(k => k.keyword),
    cannibalizationIssues: cannibalizationIssues.map(c => ({
      keyword: c.keyword,
      volume: c.searchVolume,
      competingUrls: c.urls.filter(u => u.url !== blogUrl).map(u => u.url),
    })),
    recommendations,
  };
});

// Print enhancement plan
enhancementPlan.forEach(plan => {
  console.log(`${plan.rank}. ${plan.slug}`);
  console.log(`   Target Keywords: ${plan.topKeywords.slice(0, 3).join(', ')}`);
  console.log(`   Recommendations:`);
  plan.recommendations.forEach(rec => {
    console.log(`     • ${rec}`);
  });
  if (plan.cannibalizationIssues.length > 0) {
    console.log(`   Cannibalization Fixes:`);
    plan.cannibalizationIssues.slice(0, 3).forEach(issue => {
      console.log(`     • "${issue.keyword}" competes with: ${issue.competingUrls.join(', ')}`);
    });
  }
  console.log();
});

// ============================================
// Save Results
// ============================================

const output = {
  timestamp: new Date().toISOString(),
  summary: {
    totalKeywords: data.rankedKeywords.length,
    totalBlogsWithRankings: blogs.length,
    cannibalizatedKeywords: cannibalized.length,
    highSeverityCannibalization: highSeverity.length,
  },
  cannibalization: {
    highSeverity: highSeverity.slice(0, 20),
    mediumSeverity: mediumSeverity.slice(0, 20),
  },
  top10Blogs: enhancementPlan,
};

const outputPath = path.join(__dirname, 'blog-cannibalization-audit.json');
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
console.log('=' .repeat(70));
console.log(`Results saved to: ${outputPath}`);
console.log('=' .repeat(70));
