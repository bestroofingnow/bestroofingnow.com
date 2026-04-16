import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/', '/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/'],
      },
      // AI crawler bots — explicitly welcome
      ...[
        'GPTBot',
        'ChatGPT-User',
        'ClaudeBot',
        'PerplexityBot',
        'Google-Extended',
        'Applebot-Extended',
        'anthropic-ai',
        'Bytespider',
        'cohere-ai',
      ].map((bot) => ({
        userAgent: bot,
        allow: '/' as const,
        disallow: ['/api/', '/_next/', '/static/', '/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK/'],
      })),
    ],
    sitemap: 'https://www.bestroofingnow.com/sitemap.xml',
  };
}
