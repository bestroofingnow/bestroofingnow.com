"""
Claude Code CLI Client for Blog Content Improvement

Uses the Claude Code CLI tool instead of the Anthropic API.
This leverages your existing Claude Code authentication - no API key needed!
"""
import json
import re
import subprocess
import tempfile
from dataclasses import dataclass
from pathlib import Path
from typing import Optional

import sys
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
    """Uses Claude Code CLI to improve blog content."""

    def __init__(self, claude_path: str = "claude"):
        """
        Initialize with Claude Code CLI path.

        Args:
            claude_path: Path to claude CLI (default: uses PATH)
        """
        self.claude_path = claude_path
        self._verify_claude_available()

    def _verify_claude_available(self):
        """Verify Claude Code CLI is available."""
        try:
            result = subprocess.run(
                [self.claude_path, "--version"],
                capture_output=True,
                text=True,
                timeout=10,
            )
            if result.returncode != 0:
                raise RuntimeError(f"Claude CLI not working: {result.stderr}")
        except FileNotFoundError:
            raise RuntimeError(
                f"Claude Code CLI not found at '{self.claude_path}'. "
                "Make sure Claude Code is installed and in your PATH."
            )

    def improve_blog_post(
        self,
        title: str,
        content: str,
        keywords: list[str],
        max_content_length: int = 15000,
    ) -> ImprovementResult:
        """
        Improve a blog post using Claude Code CLI.

        Args:
            title: Original blog post title
            content: Original blog post content (plain text, HTML stripped)
            keywords: Target keywords to include naturally
            max_content_length: Max chars of content to send

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
            # Write prompt to temp file (handles long prompts better)
            with tempfile.NamedTemporaryFile(
                mode="w",
                suffix=".txt",
                delete=False,
                encoding="utf-8",
            ) as f:
                f.write(prompt)
                prompt_file = f.name

            # Call Claude Code CLI with the prompt
            # Using --print to get output directly without interactive mode
            result = subprocess.run(
                [
                    self.claude_path,
                    "--print",  # Non-interactive, print response
                    "--dangerously-skip-permissions",  # Skip permission prompts
                    prompt,
                ],
                capture_output=True,
                text=True,
                timeout=300,  # 5 minute timeout
                cwd=str(Path(__file__).parent.parent.parent),  # Project root
            )

            # Clean up temp file
            Path(prompt_file).unlink(missing_ok=True)

            if result.returncode != 0:
                return ImprovementResult(
                    seo_title=title,
                    meta_description="",
                    improved_content="",
                    faqs=[],
                    keywords_used=[],
                    changes_made=[],
                    success=False,
                    error=f"Claude CLI error: {result.stderr}",
                )

            response_text = result.stdout

            # Parse JSON response from Claude's output
            # Claude Code may include additional text, so we need to find the JSON
            json_text = self._extract_json(response_text)

            if not json_text:
                return ImprovementResult(
                    seo_title=title,
                    meta_description="",
                    improved_content="",
                    faqs=[],
                    keywords_used=[],
                    changes_made=[],
                    success=False,
                    error="Could not find JSON in Claude response",
                )

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

        except subprocess.TimeoutExpired:
            return ImprovementResult(
                seo_title=title,
                meta_description="",
                improved_content="",
                faqs=[],
                keywords_used=[],
                changes_made=[],
                success=False,
                error="Claude CLI timed out after 5 minutes",
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

    def _extract_json(self, text: str) -> Optional[str]:
        """Extract JSON from Claude's response text."""
        # Try to find JSON in code blocks first
        if "```json" in text:
            match = re.search(r"```json\s*(.*?)\s*```", text, re.DOTALL)
            if match:
                return match.group(1).strip()

        if "```" in text:
            match = re.search(r"```\s*(.*?)\s*```", text, re.DOTALL)
            if match:
                potential_json = match.group(1).strip()
                if potential_json.startswith("{"):
                    return potential_json

        # Try to find raw JSON object
        match = re.search(r"\{[\s\S]*\"seo_title\"[\s\S]*\}", text)
        if match:
            return match.group(0)

        # Last resort: look for any JSON object
        match = re.search(r"\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}", text, re.DOTALL)
        if match:
            return match.group(0)

        return None


# Alternative: API-based client for environments without Claude Code CLI
class ClaudeAPIOptimizer:
    """Uses Anthropic API directly (requires API key)."""

    def __init__(self, api_key: str, model: str = "claude-sonnet-4-20250514"):
        """Initialize with Anthropic API key."""
        from anthropic import Anthropic
        self.client = Anthropic(api_key=api_key)
        self.model = model

    def improve_blog_post(
        self,
        title: str,
        content: str,
        keywords: list[str],
        max_content_length: int = 15000,
    ) -> ImprovementResult:
        """Improve blog post using Anthropic API."""
        if len(content) > max_content_length:
            content = content[:max_content_length] + "..."

        keywords_str = "\n".join([f"- {kw}" for kw in keywords[:10]])
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
                messages=[{"role": "user", "content": prompt}],
            )

            text_content = None
            for block in response.content:
                if block.type == "text":
                    text_content = block.text
                    break

            if not text_content:
                return ImprovementResult(
                    seo_title=title, meta_description="", improved_content="",
                    faqs=[], keywords_used=[], changes_made=[],
                    success=False, error="No text in response",
                )

            # Extract JSON
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

        except Exception as e:
            return ImprovementResult(
                seo_title=title, meta_description="", improved_content="",
                faqs=[], keywords_used=[], changes_made=[],
                success=False, error=str(e),
            )


def get_optimizer(use_cli: bool = True, api_key: str = None):
    """
    Factory function to get the appropriate optimizer.

    Args:
        use_cli: If True, use Claude Code CLI (no API key needed)
        api_key: Anthropic API key (only needed if use_cli=False)

    Returns:
        ClaudeOptimizer or ClaudeAPIOptimizer instance
    """
    if use_cli:
        return ClaudeOptimizer()
    else:
        if not api_key:
            raise ValueError("API key required when use_cli=False")
        return ClaudeAPIOptimizer(api_key)


if __name__ == "__main__":
    # Test the CLI-based optimizer
    print("Testing Claude Code CLI optimizer...")

    try:
        optimizer = ClaudeOptimizer()
        print("Claude Code CLI found and working!")

        # Quick test
        result = optimizer.improve_blog_post(
            title="Test Blog Post About Roofing",
            content="This is a test blog post about roofing in Charlotte NC. "
                    "It discusses roof replacement costs and common issues.",
            keywords=["roof replacement charlotte", "roofing costs"],
        )

        if result.success:
            print("\nImprovement successful!")
            print(f"SEO Title: {result.seo_title}")
            print(f"Meta Description: {result.meta_description[:100]}...")
            print(f"FAQs: {len(result.faqs)}")
        else:
            print(f"\nImprovement failed: {result.error}")

    except RuntimeError as e:
        print(f"Error: {e}")
        print("\nFalling back to API-based optimizer would require ANTHROPIC_API_KEY")
