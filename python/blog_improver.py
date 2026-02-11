#!/usr/bin/env python3
"""
Blog Improvement Script

Runs every 6 hours to:
1. Load the weekly plan
2. Find the next pending blog
3. Fetch current content from WordPress
4. Use Claude AI to generate improved content
5. Save improved content as markdown
6. Update plan status
"""
import sys
from datetime import datetime
from pathlib import Path

# Add parent directory to path for imports
sys.path.insert(0, str(Path(__file__).parent))

from config import Config
from clients import WordPressClient
from clients.claude import ClaudeOptimizer, ClaudeAPIOptimizer, get_optimizer
from utils import (
    load_json,
    save_json,
    strip_html,
    get_current_timestamp,
    format_blog_output,
)


def load_weekly_plan() -> dict | None:
    """Load the current weekly plan."""
    plan = load_json(Config.WEEKLY_PLAN_FILE)
    if not plan:
        print(f"ERROR: Weekly plan not found at {Config.WEEKLY_PLAN_FILE}")
        print("Run weekly_planner.py first to create a plan.")
        return None
    return plan


def get_next_pending_blog(plan: dict) -> dict | None:
    """Find the next blog that needs improvement."""
    for blog in plan.get("blogs", []):
        if blog.get("status") == "pending":
            return blog
    return None


def update_blog_status(
    plan: dict,
    slug: str,
    status: str,
    output_file: str = None,
) -> None:
    """Update a blog's status in the plan."""
    for blog in plan.get("blogs", []):
        if blog.get("slug") == slug:
            blog["status"] = status
            blog["completed_at"] = get_current_timestamp()
            if output_file:
                blog["output_file"] = output_file
            break

    save_json(Config.WEEKLY_PLAN_FILE, plan)


def log_improvement(
    slug: str,
    success: bool,
    output_file: str = None,
    error: str = None,
) -> None:
    """Log improvement to history file."""
    log = load_json(Config.IMPROVEMENT_LOG_FILE) or {"improvements": []}

    log["improvements"].append({
        "timestamp": get_current_timestamp(),
        "slug": slug,
        "success": success,
        "output_file": output_file,
        "error": error,
    })

    # Keep only last 100 entries
    log["improvements"] = log["improvements"][-100:]

    save_json(Config.IMPROVEMENT_LOG_FILE, log)


def main():
    """Main blog improvement function."""
    print("=" * 60)
    print("Blog Improvement Script")
    print("=" * 60)
    print(f"Timestamp: {get_current_timestamp()}")
    print()

    # Determine which optimizer to use
    # Prefer Claude Code CLI (no API key needed), fallback to API
    use_cli = True
    try:
        # Test if Claude Code CLI is available
        import subprocess
        result = subprocess.run(["claude", "--version"], capture_output=True, timeout=5)
        if result.returncode != 0:
            use_cli = False
    except (FileNotFoundError, subprocess.TimeoutExpired):
        use_cli = False

    if use_cli:
        print("Using Claude Code CLI (no API key needed)")
    else:
        if not Config.ANTHROPIC_API_KEY:
            print("ERROR: Claude Code CLI not available and ANTHROPIC_API_KEY not set")
            print("Either install Claude Code or set the API key in environment")
            sys.exit(1)
        print("Using Anthropic API (Claude Code CLI not available)")

    # 1. Load weekly plan
    print("[Step 1] Loading weekly plan...")
    plan = load_weekly_plan()
    if not plan:
        sys.exit(1)

    print(f"Plan week: {plan.get('week_of')}")
    print(f"Total blogs: {plan.get('total_blogs')}")

    # Count status
    pending = sum(1 for b in plan.get("blogs", []) if b.get("status") == "pending")
    completed = sum(1 for b in plan.get("blogs", []) if b.get("status") == "completed")
    print(f"Status: {completed} completed, {pending} pending")

    # 2. Find next pending blog
    print("\n[Step 2] Finding next pending blog...")
    blog = get_next_pending_blog(plan)

    if not blog:
        print("No pending blogs remaining. Week complete!")
        print("\nRun weekly_planner.py to generate a new plan.")
        sys.exit(0)

    print(f"Selected: {blog['slug']}")
    print(f"Priority Score: {blog['priority_score']:,.0f}")
    print(f"Target Keywords: {', '.join(blog['target_keywords'][:3])}")

    # 3. Fetch current content from WordPress
    print("\n[Step 3] Fetching content from WordPress...")
    wp_client = WordPressClient()
    post = wp_client.get_post_by_slug(blog["slug"])

    if not post:
        print(f"ERROR: Could not fetch post '{blog['slug']}' from WordPress")
        update_blog_status(plan, blog["slug"], "error")
        log_improvement(blog["slug"], False, error="Post not found in WordPress")
        sys.exit(1)

    print(f"Post ID: {post.id}")
    print(f"Title: {post.title}")
    print(f"Content length: {len(post.content):,} chars")
    print(f"Last modified: {post.modified}")

    # 4. Strip HTML and prepare content
    print("\n[Step 4] Preparing content for Claude...")
    plain_content = strip_html(post.content)
    print(f"Plain text length: {len(plain_content):,} chars")

    # 5. Call Claude to improve content
    print("\n[Step 5] Calling Claude AI for improvement...")
    optimizer = get_optimizer(use_cli=use_cli, api_key=Config.ANTHROPIC_API_KEY if not use_cli else None)

    result = optimizer.improve_blog_post(
        title=post.title,
        content=plain_content,
        keywords=blog["target_keywords"],
    )

    if not result.success:
        print(f"ERROR: Claude improvement failed: {result.error}")
        update_blog_status(plan, blog["slug"], "error")
        log_improvement(blog["slug"], False, error=result.error)
        sys.exit(1)

    print("Improvement successful!")
    print(f"  SEO Title: {result.seo_title}")
    print(f"  FAQs generated: {len(result.faqs)}")
    print(f"  Keywords used: {len(result.keywords_used)}")
    print(f"  Changes made: {len(result.changes_made)}")

    # 6. Save improved content as markdown
    print("\n[Step 6] Saving improved content...")
    date_str = datetime.utcnow().strftime("%Y-%m-%d")
    output_filename = f"{date_str}-{blog['slug'][:50]}.md"
    output_path = Config.BLOG_UPDATES_DIR / output_filename

    markdown_content = format_blog_output(
        slug=blog["slug"],
        seo_title=result.seo_title,
        meta_description=result.meta_description,
        improved_content=result.improved_content,
        faqs=result.faqs,
        keywords=result.keywords_used,
        changes=result.changes_made,
    )

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(markdown_content)

    print(f"Saved to: {output_path}")

    # 7. Update plan status
    print("\n[Step 7] Updating plan status...")
    update_blog_status(
        plan,
        blog["slug"],
        "completed",
        output_file=str(output_path),
    )

    # 8. Log improvement
    log_improvement(blog["slug"], True, output_file=str(output_path))

    # Print summary
    print("\n" + "=" * 60)
    print("IMPROVEMENT COMPLETE")
    print("=" * 60)
    print(f"Blog: {blog['slug']}")
    print(f"Output: {output_path}")
    print()

    # Show remaining
    remaining = sum(1 for b in plan.get("blogs", []) if b.get("status") == "pending")
    print(f"Remaining blogs this week: {remaining}")

    if remaining > 0:
        next_blog = get_next_pending_blog(plan)
        if next_blog:
            print(f"Next up: {next_blog['slug']}")

    print("\n✅ Blog improvement complete!")


if __name__ == "__main__":
    main()
