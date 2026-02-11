"""
DataForSEO API Client for Blog Ranking Analysis
"""
import base64
import time
from dataclasses import dataclass
from typing import Optional
import httpx
from tenacity import retry, stop_after_attempt, wait_exponential


@dataclass
class BlogRanking:
    """Represents a blog post's ranking data."""
    slug: str
    url: str
    keywords: list[dict]  # List of {keyword, position, search_volume}
    total_search_volume: int
    best_position: int
    striking_distance_keywords: int  # Keywords at positions 11-30


class DataForSEOClient:
    """Client for DataForSEO API to get blog ranking data."""

    BASE_URL = "https://api.dataforseo.com"

    def __init__(self, email: str, api_key: str):
        """Initialize with credentials."""
        credentials = f"{email}:{api_key}"
        self.auth_header = base64.b64encode(credentials.encode()).decode()
        self.client = httpx.Client(timeout=60.0)

    def __del__(self):
        """Cleanup HTTP client."""
        if hasattr(self, "client"):
            self.client.close()

    def _make_request(self, endpoint: str, data: list[dict]) -> dict:
        """Make authenticated POST request to DataForSEO API."""
        response = self.client.post(
            f"{self.BASE_URL}{endpoint}",
            headers={
                "Authorization": f"Basic {self.auth_header}",
                "Content-Type": "application/json",
            },
            json=data,
        )
        response.raise_for_status()
        return response.json()

    @retry(
        stop=stop_after_attempt(3),
        wait=wait_exponential(multiplier=1, min=2, max=30),
    )
    def get_ranked_keywords(
        self,
        domain: str,
        location_code: int = 2840,
        language_code: str = "en",
        limit: int = 500,
    ) -> list[dict]:
        """
        Get all ranked keywords for a domain.

        Args:
            domain: Target domain (e.g., 'bestroofingnow.com')
            location_code: DataForSEO location code (2840 = US)
            language_code: Language code
            limit: Max results to return

        Returns:
            List of keyword ranking data
        """
        endpoint = "/v3/dataforseo_labs/google/ranked_keywords/live"

        response = self._make_request(
            endpoint,
            [
                {
                    "target": domain,
                    "location_code": location_code,
                    "language_code": language_code,
                    "limit": limit,
                    "order_by": ["keyword_data.keyword_info.search_volume,desc"],
                }
            ],
        )

        if not response.get("tasks"):
            return []

        task = response["tasks"][0]
        if task.get("status_code") != 20000:
            print(f"DataForSEO error: {task.get('status_message')}")
            return []

        result = task.get("result", [{}])[0]
        items = result.get("items", [])

        return [
            {
                "keyword": item.get("keyword_data", {}).get("keyword"),
                "position": item.get("ranked_serp_element", {})
                .get("serp_item", {})
                .get("rank_absolute"),
                "search_volume": item.get("keyword_data", {})
                .get("keyword_info", {})
                .get("search_volume"),
                "cpc": item.get("keyword_data", {})
                .get("keyword_info", {})
                .get("cpc"),
                "url": item.get("ranked_serp_element", {})
                .get("serp_item", {})
                .get("url"),
                "competition": item.get("keyword_data", {})
                .get("keyword_info", {})
                .get("competition"),
            }
            for item in items
            if item.get("keyword_data", {}).get("keyword")
        ]

    def get_blog_rankings(
        self,
        domain: str,
        location_code: int = 2840,
        language_code: str = "en",
    ) -> list[BlogRanking]:
        """
        Get ranking data for all blog posts.

        Filters to only /blog/ URLs and aggregates metrics per post.

        Returns:
            List of BlogRanking objects sorted by priority
        """
        print("Fetching ranked keywords from DataForSEO...")
        all_keywords = self.get_ranked_keywords(
            domain=domain,
            location_code=location_code,
            language_code=language_code,
            limit=500,
        )

        # Filter to blog URLs only
        blog_keywords = [
            kw for kw in all_keywords
            if kw.get("url") and "/blog/" in kw["url"]
        ]

        print(f"Found {len(blog_keywords)} keywords ranking for blog posts")

        # Group by blog slug
        blog_map: dict[str, dict] = {}

        for kw in blog_keywords:
            url = kw["url"]
            # Extract slug from URL
            slug = url.split("/blog/")[-1].rstrip("/")
            if not slug:
                continue

            if slug not in blog_map:
                blog_map[slug] = {
                    "slug": slug,
                    "url": url,
                    "keywords": [],
                    "total_search_volume": 0,
                    "best_position": 999,
                    "striking_distance_keywords": 0,
                }

            blog = blog_map[slug]
            blog["keywords"].append({
                "keyword": kw["keyword"],
                "position": kw["position"],
                "search_volume": kw["search_volume"],
            })
            blog["total_search_volume"] += kw["search_volume"] or 0

            if kw["position"] and kw["position"] < blog["best_position"]:
                blog["best_position"] = kw["position"]

            # Count striking distance keywords (positions 11-30)
            if kw["position"] and 11 <= kw["position"] <= 30:
                blog["striking_distance_keywords"] += 1

        # Convert to BlogRanking objects
        rankings = [
            BlogRanking(
                slug=data["slug"],
                url=data["url"],
                keywords=data["keywords"],
                total_search_volume=data["total_search_volume"],
                best_position=data["best_position"] if data["best_position"] < 999 else 0,
                striking_distance_keywords=data["striking_distance_keywords"],
            )
            for data in blog_map.values()
        ]

        # Sort by total search volume descending
        rankings.sort(key=lambda x: x.total_search_volume, reverse=True)

        print(f"Aggregated {len(rankings)} unique blog posts with rankings")
        return rankings


if __name__ == "__main__":
    # Quick test
    from config import Config

    client = DataForSEOClient(Config.DATAFORSEO_EMAIL, Config.DATAFORSEO_API_KEY)
    rankings = client.get_blog_rankings(Config.TARGET_DOMAIN)

    print("\nTop 10 Blog Posts by Search Volume:")
    for i, blog in enumerate(rankings[:10], 1):
        print(
            f"{i}. {blog.slug[:50]}... "
            f"(vol: {blog.total_search_volume}, pos: {blog.best_position})"
        )
