import { MetadataRoute } from 'next';

const ADMIN_PATH = '/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/';
const COMMON_DISALLOW = ['/api/', '/_next/', '/static/', ADMIN_PATH];

// Explicit allow list surfaces the machine-readable surfaces LLMs care about,
// even though `allow: '/'` already covers them. Being explicit helps crawlers
// that honor most-specific-match semantics.
const AI_ALLOW = ['/', '/llms.txt', '/llms-full.txt', '/data/service-areas.json', '/sitemap.xml'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: COMMON_DISALLOW,
      },
      // AI crawler bots — explicitly welcome, with explicit allows for
      // machine-readable endpoints.
      ...[
        'GPTBot',
        'ChatGPT-User',
        'OAI-SearchBot',
        'ClaudeBot',
        'Claude-User',
        'PerplexityBot',
        'Perplexity-User',
        'Google-Extended',
        'Applebot-Extended',
        'anthropic-ai',
        'Bytespider',
        'cohere-ai',
        'DuckAssistBot',
        'MistralAI-User',
        'Meta-ExternalAgent',
      ].map((bot) => ({
        userAgent: bot,
        allow: AI_ALLOW,
        disallow: COMMON_DISALLOW,
      })),
    ],
    sitemap: 'https://www.bestroofingnow.com/sitemap.xml',
  };
}
