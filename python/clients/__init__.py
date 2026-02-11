# Blog Automation Clients
from .dataforseo import DataForSEOClient
from .wordpress import WordPressClient
from .claude import ClaudeOptimizer, ClaudeAPIOptimizer, get_optimizer

__all__ = [
    "DataForSEOClient",
    "WordPressClient",
    "ClaudeOptimizer",      # Uses Claude Code CLI (no API key)
    "ClaudeAPIOptimizer",   # Uses Anthropic API (requires API key)
    "get_optimizer",        # Factory function to get appropriate optimizer
]
