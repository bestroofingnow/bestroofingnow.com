#!/usr/bin/env python3
"""
Weekly Blog Improvement Planner

Runs once per week (Monday 6 AM UTC) to:
1. Fetch blog ranking data from DataForSEO
2. Calculate priority scores for each blog
3. Select top 28 blogs to improve (4 per day)
4. Generate a weekly improvement schedule
5. Save plan to weekly_plan.json
"""
import sys
from datetime import datetime, timedelta
from pathlib import Path

# Add parent directory to path for imports
sys.path.insert(0, str(Path(__file__).parent))

from config import Config
from clients import DataForSEOClient, WordPressClient
from utils import save_json, load_json, get_current_timestamp


def calculate_priority_score(
    blog_ranking,
    days_since_update: int,
) -> float:
    """
    Calculate priority score for blog improvement.

    Higher score = should improve sooner.

    Factors:
    - Search volume (primary factor)
    - Striking distance keywords (positions 11-30)
    - Days since last update
    - Position improvement potential
    """
    score = 0.0

    # 1. Search volume - primary factor
    score += blog_ranking.total_search_volume * 1.0

    # 2. Striking distance bonus (keywords close to page 1)
    score += blog_ranking.striking_distance_keywords * 500

    # 3. Position improvement potential
    if 11 <= blog_ranking.best_position <= 20:
        score += 1000  # Almost on page 1
    elif 21 <= blog_ranking.best_position <= 50:
        score += 500   # Page 2-5, good potential
    elif 51 <= blog_ranking.best_position <= 100:
        score += 200   # Worth improving

    # 4. Staleness penalty (encourage updating old content)
    if days_since_update > 365:
        score += 300  # Over a year old
    elif days_since_update > 180:
        score += 150  # Over 6 months old
    elif days_since_update > 90:
        score += 50   # Over 3 months old

    # 5. Keyword count bonus
    score += len(blog_ranking.keywords) * 50

    return score


def get_days_since_update(wp_client: WordPressClient, slug: str) -> int:
    """Get days since blog was last updated."""
    modified = wp_client.get_post_modified_date(slug)
    if not modified:
        return 365  # Default to old if can't determine

    now = datetime.now(modified.tzinfo) if modified.tzinfo else datetime.utcnow()
    delta = now - modified
    return delta.days


def generate_schedule(num_blogs: int, start_date: datetime = None) -> list[str]:
    """
    Generate improvement schedule timestamps.

    4 improvements per day at 00:00, 06:00, 12:00, 18:00 UTC.
    """
    if start_date is None:
        # Start from next occurrence of 00:00 UTC
        start_date = datetime.utcnow().replace(
            hour=0, minute=0, second=0, microsecond=0
        )
        if datetime.utcnow().hour >= 0:
            start_date += timedelta(days=1)

    schedule = []
    current_date = start_date
    times = [0, 6, 12, 18]  # Hours UTC
    time_index = 0

    for _ in range(num_blogs):
        scheduled_time = current_date.replace(hour=times[time_index])
        schedule.append(scheduled_time.isoformat() + "Z")

        time_index += 1
        if time_index >= len(times):
            time_index = 0
            current_date += timedelta(days=1)

    return schedule


def main():
    """Main weekly planning function."""
    print("=" * 60)
    print("Weekly Blog Improvement Planner")
    print("=" * 60)
    print(f"Timestamp: {get_current_timestamp()}")
    print()

    # Initialize clients
    print("Initializing API clients...")
    dataforseo = DataForSEOClient(
        Config.DATAFORSEO_EMAIL,
        Config.DATAFORSEO_API_KEY,
    )
    wordpress = WordPressClient()

    # 1. Fetch blog rankings from DataForSEO
    print("\n[Step 1] Fetching blog rankings from DataForSEO...")
    blog_rankings = dataforseo.get_blog_rankings(Config.TARGET_DOMAIN)

    if not blog_rankings:
        print("ERROR: No blog rankings found. Exiting.")
        sys.exit(1)

    print(f"Found {len(blog_rankings)} blogs with rankings")

    # 2. Calculate priority scores
    print("\n[Step 2] Calculating priority scores...")
    scored_blogs = []

    for ranking in blog_rankings:
        # Get days since last update from WordPress
        days_since = get_days_since_update(wordpress, ranking.slug)

        score = calculate_priority_score(ranking, days_since)

        # Get top keywords for this blog
        top_keywords = [
            kw["keyword"] for kw in sorted(
                ranking.keywords,
                key=lambda x: x.get("search_volume", 0),
                reverse=True,
            )[:5]
        ]

        scored_blogs.append({
            "slug": ranking.slug,
            "url": ranking.url,
            "priority_score": score,
            "metrics": {
                "total_search_volume": ranking.total_search_volume,
                "best_position": ranking.best_position,
                "keywords_count": len(ranking.keywords),
                "striking_distance_keywords": ranking.striking_distance_keywords,
                "days_since_update": days_since,
            },
            "target_keywords": top_keywords,
        })

    # Sort by priority score
    scored_blogs.sort(key=lambda x: x["priority_score"], reverse=True)

    # 3. Select top blogs for the week
    print(f"\n[Step 3] Selecting top {Config.BLOGS_PER_WEEK} blogs...")
    selected_blogs = scored_blogs[:Config.BLOGS_PER_WEEK]

    # 4. Generate schedule
    print("\n[Step 4] Generating improvement schedule...")
    schedule = generate_schedule(len(selected_blogs))

    # 5. Build weekly plan
    week_start = datetime.utcnow()
    week_start = week_start - timedelta(days=week_start.weekday())  # Monday
    week_of = week_start.strftime("%Y-%m-%d")

    weekly_plan = {
        "week_of": week_of,
        "created_at": get_current_timestamp(),
        "total_blogs": len(selected_blogs),
        "blogs_per_day": Config.BLOGS_PER_DAY,
        "blogs": [],
    }

    for i, blog in enumerate(selected_blogs):
        weekly_plan["blogs"].append({
            "index": i + 1,
            "slug": blog["slug"],
            "url": blog["url"],
            "scheduled_time": schedule[i],
            "priority_score": blog["priority_score"],
            "metrics": blog["metrics"],
            "target_keywords": blog["target_keywords"],
            "status": "pending",
            "completed_at": None,
            "output_file": None,
        })

    # 6. Save plan
    print(f"\n[Step 5] Saving weekly plan to {Config.WEEKLY_PLAN_FILE}...")
    save_json(Config.WEEKLY_PLAN_FILE, weekly_plan)

    # Print summary
    print("\n" + "=" * 60)
    print("WEEKLY PLAN SUMMARY")
    print("=" * 60)
    print(f"Week of: {week_of}")
    print(f"Total blogs to improve: {len(selected_blogs)}")
    print(f"Schedule: {Config.BLOGS_PER_DAY} blogs per day")
    print()

    print("Top 10 blogs by priority:")
    for i, blog in enumerate(weekly_plan["blogs"][:10], 1):
        print(
            f"  {i:2}. {blog['slug'][:45]:45} "
            f"(score: {blog['priority_score']:,.0f}, "
            f"vol: {blog['metrics']['total_search_volume']:,})"
        )

    print()
    print(f"Plan saved to: {Config.WEEKLY_PLAN_FILE}")
    print("\n✅ Weekly planning complete!")


if __name__ == "__main__":
    main()
