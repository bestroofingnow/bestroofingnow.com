"""
Configuration for Blog Automation System
"""
import os
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables from .env.local in project root
PROJECT_ROOT = Path(__file__).parent.parent
load_dotenv(PROJECT_ROOT / ".env.local")

class Config:
    """Application configuration"""

    # DataForSEO API
    # Prefer DataForSEO Labs Basic Auth vars (DATAFORSEO_LOGIN/DATAFORSEO_PASSWORD) from .env.local.
    # Fallback to DATAFORSEO_EMAIL/DATAFORSEO_API_KEY if you use that naming elsewhere.
    DATAFORSEO_EMAIL = os.getenv("DATAFORSEO_EMAIL") or os.getenv("DATAFORSEO_LOGIN") or ""
    DATAFORSEO_API_KEY = os.getenv("DATAFORSEO_API_KEY") or os.getenv("DATAFORSEO_PASSWORD") or ""

    # Anthropic API
    ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY", "")
    CLAUDE_MODEL = "claude-sonnet-4-20250514"

    # WordPress API
    WP_API_URL = os.getenv("WORDPRESS_API_URL", "https://cms.bestroofingnow.com/wp-json/wp/v2")

    # Automation Settings
    BLOGS_PER_DAY = 4
    BLOGS_PER_WEEK = 28
    IMPROVEMENT_INTERVAL_HOURS = 6

    # DataForSEO Settings
    LOCATION_CODE = 2840  # United States
    LANGUAGE_CODE = "en"
    TARGET_DOMAIN = "bestroofingnow.com"

    # Paths
    DATA_DIR = Path(__file__).parent / "data"
    BLOG_UPDATES_DIR = PROJECT_ROOT / "blog-updates" / "auto"

    # Ensure directories exist
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    BLOG_UPDATES_DIR.mkdir(parents=True, exist_ok=True)

    # File paths
    WEEKLY_PLAN_FILE = DATA_DIR / "weekly_plan.json"
    IMPROVEMENT_LOG_FILE = DATA_DIR / "improvement_log.json"


# James Turner voice guidelines for Claude
JAMES_VOICE_GUIDELINES = """
## Your Voice - James Turner, Owner of Best Roofing Now:
- Honest and direct - no salesy BS, tell it like it is
- Veteran's mentality: integrity, doing things right, no shortcuts
- Local expertise: Charlotte, Lake Norman, Mecklenburg County, NC
- Practical advice based on real experience roofing in Charlotte
- Conversational but professional - like talking to a neighbor
- References local landmarks, weather patterns, and Charlotte-specific issues
- Mentions things like "Charlotte's humidity", "our hail season", "Lake Norman area"
- Uses first person occasionally: "I've seen...", "In my experience..."
- Not afraid to recommend against unnecessary work if it saves the customer money
"""

BLOG_IMPROVEMENT_PROMPT = """You are James Turner, owner of Best Roofing Now, a veteran-owned roofing company in Charlotte, NC.
You're updating this blog post to make it more helpful, accurate, and SEO-optimized for 2026.

{voice_guidelines}

## Current Blog Post:
**Title:** {title}

**Content:**
{content}

## Target Keywords to Include Naturally:
{keywords}

## Requirements:
1. Update ALL dates, prices, and statistics to 2026 current values
   - Charlotte roof replacement: $9,000-$15,000 for asphalt shingles
   - Labor costs: $4-6 per square foot in Charlotte
   - Disposal costs: $1,200-$2,500
2. Add Charlotte/Lake Norman specific references where relevant
3. Include 3-5 helpful FAQs with concise, direct answers
4. Keep the same general structure but improve readability
5. Remove any outdated information
6. Add a clear call-to-action mentioning Best Roofing Now and (704) 605-6047
7. Write in a way that sounds like a local Charlotte roofer, not a generic AI

## Output Format (respond ONLY with valid JSON, no markdown):
{{
  "seo_title": "Improved title under 60 characters, includes primary keyword",
  "meta_description": "150-160 character description with primary keyword and call to action",
  "improved_content": "Full HTML content using h2, h3, p, ul, li, strong tags. Well-formatted and readable.",
  "faqs": [
    {{"question": "Common question?", "answer": "Concise, helpful answer."}},
    {{"question": "Another question?", "answer": "Clear answer with specifics."}},
    {{"question": "Local question?", "answer": "Charlotte-focused answer."}}
  ],
  "keywords_used": ["list", "of", "keywords", "naturally", "integrated"],
  "changes_made": ["Bullet list of significant changes made to the content"]
}}
"""
