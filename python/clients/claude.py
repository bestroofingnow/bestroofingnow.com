"""
Claude AI Client for Blog Content Improvement
"""
import json
import re
from dataclasses import dataclass
from typing import Optional
from anthropic import Anthropic
from tenacity import retry, stop_after_attempt, wait_exponential

import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent.parent))

from config import JAMES_VOICE_GUIDELINES, BLOG_IMPROVEMENT_PROMPT


@dataclass
class ImprovementResult:
    """Result of blog improvement."""
    seo_title: str
    meta_description: str
    improved_content: str
    faqs: list[dict]
    keywords_used: list[str]
    changes_made: list[str]
    success: bool = True
    error: Optional[str] = None


class ClaudeOptimizer:
    """Uses Claude AI to improve blog content."""

    def __init__(self, api_key: str, model: str = "claude-sonnet-4-20250514"):
        """Initialize with Anthropic API key."""
        self.client = Anthropic(api_key=api_key)
        self.model = model

    @retry(
        stop=stop_after_attempt(3),
        wait=wait_exponential(multiplier=1, min=4, max=60),
    )
    def improve_blog_post(
        self,
        title: str,
        content: str,
        keywords: list[str],
        max_content_length: int = 15000,
    ) -> ImprovementResult:
        """
        Improve a blog post using Claude AI.

        Args:
            title: Original blog post title
            content: Original blog post content (plain text, HTML stripped)
            keywords: Target keywords to include naturally
            max_content_length: Max chars of content to send (to avoid token limits)

        Returns:
            ImprovementResult with improved content
        """
        # Truncate content if too long
        if len(content) > max_content_length:
            content = content[:max_content_length] + "..."

        # Format keywords
        keywords_str = "\n".join([f"- {kw}" for kw in keywords[:10]])

        # Build prompt
        prompt = BLOG_IMPROVEMENT_PROMPT.format(
            voice_guidelines=JAMES_VOICE_GUIDELINES,
            title=title,
            content=content,
            keywords=keywords_str,
        )

        try:
            response = self.client.messages.create(
                model=self.model,
                max_tokens=8192,
                messages=[
                    {
                        "role": "user",
                        "content": prompt,
                    }
                ],
            )

            # Extract text content
            text_content = None
            for block in response.content:
                if block.type == "text":
                    text_content = block.text
                    break

            if not text_content:
                return ImprovementResult(
                    seo_title=title,
                    meta_description="",
                    improved_content="",
                    faqs=[],
                    keywords_used=[],
                    changes_made=[],
                    success=False,
                    error="No text content in response",
                )

            # Parse JSON response
            # Sometimes Claude wraps JSON in markdown code blocks
            json_text = text_content
            if "```json" in json_text:
                match = re.search(r"```json\s*(.*?)\s*```", json_text, re.DOTALL)
                if match:
                    json_text = match.group(1)
            elif "```" in json_text:
                match = re.search(r"```\s*(.*?)\s*```", json_text, re.DOTALL)
                if match:
                    json_text = match.group(1)

            result_data = json.loads(json_text)

            return ImprovementResult(
                seo_title=result_data.get("seo_title", title),
                meta_description=result_data.get("meta_description", ""),
                improved_content=result_data.get("improved_content", ""),
                faqs=result_data.get("faqs", []),
                keywords_used=result_data.get("keywords_used", keywords),
                changes_made=result_data.get("changes_made", []),
                success=True,
            )

        except json.JSONDecodeError as e:
            return ImprovementResult(
                seo_title=title,
                meta_description="",
                improved_content="",
                faqs=[],
                keywords_used=[],
                changes_made=[],
                success=False,
                error=f"Failed to parse JSON response: {e}",
            )
        except Exception as e:
            return ImprovementResult(
                seo_title=title,
                meta_description="",
                improved_content="",
                faqs=[],
                keywords_used=[],
                changes_made=[],
                success=False,
                error=str(e),
            )


if __name__ == "__main__":
    # Quick test
    from config import Config

    if not Config.ANTHROPIC_API_KEY:
        print("Error: ANTHROPIC_API_KEY not set")
        exit(1)

    optimizer = ClaudeOptimizer(Config.ANTHROPIC_API_KEY)

    # Test with sample content
    result = optimizer.improve_blog_post(
        title="Test Blog Post About Roofing",
        content="This is a test blog post about roofing in Charlotte NC. "
                "It discusses roof replacement costs and common issues.",
        keywords=["roof replacement charlotte", "roofing costs"],
    )

    if result.success:
        print("Improvement successful!")
        print(f"SEO Title: {result.seo_title}")
        print(f"Meta Description: {result.meta_description[:100]}...")
        print(f"FAQs: {len(result.faqs)}")
        print(f"Keywords Used: {result.keywords_used}")
    else:
        print(f"Improvement failed: {result.error}")
