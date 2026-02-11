"""
WordPress REST API Client for fetching blog posts
"""
from dataclasses import dataclass
from datetime import datetime
from typing import Optional
import httpx
from tenacity import retry, stop_after_attempt, wait_exponential


@dataclass
class WPPost:
    """Represents a WordPress blog post."""
    id: int
    slug: str
    title: str
    content: str
    excerpt: str
    date: datetime
    modified: datetime
    link: str


class WordPressClient:
    """Client for WordPress REST API."""

    def __init__(self, base_url: str = "https://cms.bestroofingnow.com"):
        """Initialize with WordPress site URL."""
        self.api_url = f"{base_url}/wp-json/wp/v2"
        self.client = httpx.Client(timeout=30.0)

    def __del__(self):
        """Cleanup HTTP client."""
        if hasattr(self, "client"):
            self.client.close()

    def _parse_post(self, data: dict) -> WPPost:
        """Parse API response into WPPost object."""
        return WPPost(
            id=data.get("id", 0),
            slug=data.get("slug", ""),
            title=data.get("title", {}).get("rendered", ""),
            content=data.get("content", {}).get("rendered", ""),
            excerpt=data.get("excerpt", {}).get("rendered", ""),
            date=datetime.fromisoformat(
                data.get("date", "2020-01-01T00:00:00").replace("Z", "+00:00")
            ),
            modified=datetime.fromisoformat(
                data.get("modified", "2020-01-01T00:00:00").replace("Z", "+00:00")
            ),
            link=data.get("link", ""),
        )

    @retry(
        stop=stop_after_attempt(3),
        wait=wait_exponential(multiplier=1, min=2, max=30),
    )
    def get_post_by_slug(self, slug: str) -> Optional[WPPost]:
        """
        Fetch a single post by its slug.

        Args:
            slug: The post slug (URL-friendly name)

        Returns:
            WPPost object or None if not found
        """
        response = self.client.get(
            f"{self.api_url}/posts",
            params={"slug": slug, "_fields": "id,slug,title,content,excerpt,date,modified,link"},
        )
        response.raise_for_status()

        posts = response.json()
        if not posts:
            return None

        return self._parse_post(posts[0])

    @retry(
        stop=stop_after_attempt(3),
        wait=wait_exponential(multiplier=1, min=2, max=30),
    )
    def get_all_posts_lite(self, per_page: int = 100) -> list[dict]:
        """
        Fetch all posts with minimal fields for listing.

        Returns:
            List of dicts with id, slug, title, date, modified
        """
        all_posts = []
        page = 1

        while True:
            response = self.client.get(
                f"{self.api_url}/posts",
                params={
                    "per_page": per_page,
                    "page": page,
                    "_fields": "id,slug,title,date,modified",
                },
            )

            if response.status_code == 400:
                # No more pages
                break

            response.raise_for_status()
            posts = response.json()

            if not posts:
                break

            for post in posts:
                all_posts.append({
                    "id": post.get("id"),
                    "slug": post.get("slug"),
                    "title": post.get("title", {}).get("rendered", ""),
                    "date": post.get("date"),
                    "modified": post.get("modified"),
                })

            # Check if there are more pages
            total_pages = int(response.headers.get("X-WP-TotalPages", 1))
            if page >= total_pages:
                break

            page += 1

        return all_posts

    def get_post_modified_date(self, slug: str) -> Optional[datetime]:
        """
        Get just the modified date for a post (minimal API call).

        Args:
            slug: The post slug

        Returns:
            datetime of last modification or None
        """
        response = self.client.get(
            f"{self.api_url}/posts",
            params={"slug": slug, "_fields": "modified"},
        )

        if response.status_code != 200:
            return None

        posts = response.json()
        if not posts:
            return None

        modified_str = posts[0].get("modified", "")
        if not modified_str:
            return None

        return datetime.fromisoformat(modified_str.replace("Z", "+00:00"))


if __name__ == "__main__":
    # Quick test
    client = WordPressClient()

    # Test fetching a specific post
    post = client.get_post_by_slug("roof-crickets-101-what-they-are-benefits-and-why-your-roof-might-need-one")
    if post:
        print(f"Found post: {post.title[:50]}...")
        print(f"  ID: {post.id}")
        print(f"  Modified: {post.modified}")
        print(f"  Content length: {len(post.content)} chars")
    else:
        print("Post not found")

    # Test fetching all posts
    print("\nFetching all posts...")
    posts = client.get_all_posts_lite()
    print(f"Total posts: {len(posts)}")
