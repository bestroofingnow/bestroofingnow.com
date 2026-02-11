"""
Utility functions for Blog Automation System
"""
import json
import re
from datetime import datetime
from pathlib import Path
from typing import Any
from bs4 import BeautifulSoup
import html2text


def strip_html(html: str) -> str:
    """Remove HTML tags and decode entities, preserving text content."""
    if not html:
        return ""

    # Remove script and style elements
    soup = BeautifulSoup(html, "html.parser")
    for element in soup(["script", "style"]):
        element.decompose()

    # Get text content
    text = soup.get_text(separator=" ")

    # Clean up whitespace
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def html_to_markdown(html: str) -> str:
    """Convert HTML to Markdown for readability."""
    if not html:
        return ""

    h = html2text.HTML2Text()
    h.ignore_links = False
    h.ignore_images = True
    h.body_width = 0  # Don't wrap lines
    return h.handle(html)


def load_json(file_path: Path) -> dict | list | None:
    """Load JSON from file, return None if doesn't exist."""
    if not file_path.exists():
        return None
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            return json.load(f)
    except (json.JSONDecodeError, IOError) as e:
        print(f"Error loading {file_path}: {e}")
        return None


def save_json(file_path: Path, data: Any) -> bool:
    """Save data to JSON file."""
    try:
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False, default=str)
        return True
    except IOError as e:
        print(f"Error saving {file_path}: {e}")
        return False


def get_current_timestamp() -> str:
    """Get current timestamp in ISO format."""
    return datetime.utcnow().isoformat() + "Z"


def get_week_start() -> str:
    """Get the Monday of the current week as YYYY-MM-DD."""
    today = datetime.utcnow()
    monday = today - timedelta(days=today.weekday())
    return monday.strftime("%Y-%m-%d")


def slugify(text: str) -> str:
    """Convert text to URL-friendly slug."""
    text = text.lower()
    text = re.sub(r"[^a-z0-9\s-]", "", text)
    text = re.sub(r"[\s_]+", "-", text)
    text = re.sub(r"-+", "-", text)
    return text.strip("-")


def truncate_content(content: str, max_length: int = 15000) -> str:
    """Truncate content to max length, preserving word boundaries."""
    if len(content) <= max_length:
        return content

    truncated = content[:max_length]
    # Find last space to avoid cutting words
    last_space = truncated.rfind(" ")
    if last_space > max_length - 100:
        truncated = truncated[:last_space]
    return truncated + "..."


def format_blog_output(
    slug: str,
    seo_title: str,
    meta_description: str,
    improved_content: str,
    faqs: list[dict],
    keywords: list[str],
    changes: list[str],
) -> str:
    """Format improved blog as Markdown for saving."""
    timestamp = get_current_timestamp()
    date_str = datetime.utcnow().strftime("%Y-%m-%d")

    faq_section = "\n".join(
        [f"**Q: {faq['question']}**\nA: {faq['answer']}\n" for faq in faqs]
    )

    changes_section = "\n".join([f"- {change}" for change in changes])

    return f"""# {seo_title}

**Slug:** {slug}
**SEO Title:** {seo_title}
**Meta Description:** {meta_description}
**Target Keywords:** {', '.join(keywords)}
**Improved:** {timestamp}

---

## Improved Content

{improved_content}

---

## FAQs (Schema-Ready)

{faq_section}

---

## Changes Made

{changes_section}

---

## WordPress Update Instructions

1. Navigate to: https://cms.bestroofingnow.com/wp-admin/post.php?action=edit&post=[POST_ID]
2. Replace content with the improved HTML above
3. Update SEO title and meta description in Yoast/RankMath
4. Add FAQ schema using the questions/answers above
5. Update the modified date
6. Publish and verify

---

*Auto-generated on {date_str} by Blog Automation System*
"""


# Import timedelta for get_week_start
from datetime import timedelta
