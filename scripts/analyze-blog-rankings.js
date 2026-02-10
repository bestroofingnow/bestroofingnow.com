const data = require("./seo-analysis-results.json");

const blogKeywords = data.rankedKeywords
  .filter(k => k.url && k.url.includes("/blog/"))
  .sort((a, b) => b.searchVolume - a.searchVolume);

const blogMap = new Map();
blogKeywords.forEach(k => {
  const slug = k.url.split("/blog/")[1];
  if (!blogMap.has(slug)) {
    blogMap.set(slug, { slug, keywords: [], totalVolume: 0, bestPosition: 999 });
  }
  const entry = blogMap.get(slug);
  entry.keywords.push({ keyword: k.keyword, position: k.position, volume: k.searchVolume });
  entry.totalVolume += k.searchVolume;
  entry.bestPosition = Math.min(entry.bestPosition, k.position);
});

const sorted = Array.from(blogMap.values())
  .sort((a, b) => b.totalVolume - a.totalVolume)
  .slice(0, 15);

console.log("Top 15 Blog Posts by Total Search Volume:");
console.log("==========================================");
sorted.forEach((b, i) => {
  console.log("");
  console.log((i+1) + ". " + b.slug);
  console.log("   Total Volume: " + b.totalVolume + " | Best Position: " + b.bestPosition);
  console.log("   Top Keywords:");
  b.keywords.slice(0, 3).forEach(k => {
    console.log("     - \"" + k.keyword + "\" (vol: " + k.volume + ", pos: " + k.position + ")");
  });
});
