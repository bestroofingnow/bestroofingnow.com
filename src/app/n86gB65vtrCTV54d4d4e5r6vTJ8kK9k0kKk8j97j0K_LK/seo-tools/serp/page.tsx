'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, Loader2, ArrowLeft, Star, Zap, MessageCircle, MapPin } from 'lucide-react';
import Link from 'next/link';
import { adminFetch } from '@/lib/admin-fetch';

interface SerpData {
  keyword: string;
  results: { position: number; title: string; url: string; description: string }[];
  featuredSnippet: { title: string; description: string; url: string } | null;
  peopleAlsoAsk: string[];
  localPack: { title: string; rating: number; reviews: number }[] | null;
  aiOverview: boolean;
}

export default function SerpPage() {
  const searchParams = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get('keyword') || '');
  const [data, setData] = useState<SerpData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const adminBase = '/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK';

  useEffect(() => {
    const kw = searchParams.get('keyword');
    if (kw) {
      setKeyword(kw);
      handleSearch(kw);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSearch(kw?: string) {
    const searchKw = kw || keyword;
    if (!searchKw.trim()) return;

    setLoading(true);
    setError('');
    try {
      const res = await adminFetch('/api/admin/dataforseo/serp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keyword: searchKw.trim() }),
      });
      const json = await res.json();
      if (json.error) throw new Error(json.error);
      setData(json.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'SERP analysis failed');
    } finally {
      setLoading(false);
    }
  }

  const isOurSite = (url: string) => url.includes('bestroofingnow.com');

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href={`${adminBase}/seo-tools`} className="text-gray-500 hover:text-gray-700">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">SERP Analysis</h1>
          <p className="text-gray-600 text-sm">See who ranks and what SERP features exist</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-6">
        <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="flex gap-3">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Enter a keyword to analyze..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
            Analyze
          </button>
        </form>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>
      )}

      {data && (
        <>
          {/* SERP Features Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className={`rounded-xl border p-4 ${data.aiOverview ? 'bg-purple-50 border-purple-200' : 'bg-gray-50'}`}>
              <div className="flex items-center gap-2 mb-1">
                <Zap className={`w-4 h-4 ${data.aiOverview ? 'text-purple-600' : 'text-gray-400'}`} />
                <span className="text-sm font-medium">AI Overview</span>
              </div>
              <span className={`text-lg font-bold ${data.aiOverview ? 'text-purple-700' : 'text-gray-400'}`}>
                {data.aiOverview ? 'Present' : 'None'}
              </span>
            </div>

            <div className={`rounded-xl border p-4 ${data.featuredSnippet ? 'bg-blue-50 border-blue-200' : 'bg-gray-50'}`}>
              <div className="flex items-center gap-2 mb-1">
                <Star className={`w-4 h-4 ${data.featuredSnippet ? 'text-blue-600' : 'text-gray-400'}`} />
                <span className="text-sm font-medium">Featured Snippet</span>
              </div>
              <span className={`text-lg font-bold ${data.featuredSnippet ? 'text-blue-700' : 'text-gray-400'}`}>
                {data.featuredSnippet ? 'Yes' : 'None'}
              </span>
            </div>

            <div className={`rounded-xl border p-4 ${data.peopleAlsoAsk.length > 0 ? 'bg-green-50 border-green-200' : 'bg-gray-50'}`}>
              <div className="flex items-center gap-2 mb-1">
                <MessageCircle className={`w-4 h-4 ${data.peopleAlsoAsk.length > 0 ? 'text-green-600' : 'text-gray-400'}`} />
                <span className="text-sm font-medium">People Also Ask</span>
              </div>
              <span className={`text-lg font-bold ${data.peopleAlsoAsk.length > 0 ? 'text-green-700' : 'text-gray-400'}`}>
                {data.peopleAlsoAsk.length || 'None'}
              </span>
            </div>

            <div className={`rounded-xl border p-4 ${data.localPack ? 'bg-orange-50 border-orange-200' : 'bg-gray-50'}`}>
              <div className="flex items-center gap-2 mb-1">
                <MapPin className={`w-4 h-4 ${data.localPack ? 'text-orange-600' : 'text-gray-400'}`} />
                <span className="text-sm font-medium">Local Pack</span>
              </div>
              <span className={`text-lg font-bold ${data.localPack ? 'text-orange-700' : 'text-gray-400'}`}>
                {data.localPack ? `${data.localPack.length} results` : 'None'}
              </span>
            </div>
          </div>

          {/* Featured Snippet */}
          {data.featuredSnippet && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-blue-800 mb-2">Featured Snippet</h3>
              <p className="font-medium text-gray-900">{data.featuredSnippet.title}</p>
              <p className="text-gray-700 mt-1 text-sm">{data.featuredSnippet.description}</p>
              <a href={data.featuredSnippet.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs mt-2 inline-block hover:underline">
                {data.featuredSnippet.url}
              </a>
            </div>
          )}

          {/* People Also Ask */}
          {data.peopleAlsoAsk.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold mb-3">People Also Ask</h3>
              <div className="space-y-2">
                {data.peopleAlsoAsk.map((q, i) => (
                  <div key={i} className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                    <MessageCircle className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-800">{q}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Organic Results */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="px-6 py-4 border-b">
              <h3 className="text-lg font-semibold">Organic Results ({data.results.length})</h3>
            </div>
            <div className="divide-y">
              {data.results.map((result) => (
                <div key={result.position} className={`px-6 py-4 ${isOurSite(result.url) ? 'bg-green-50 border-l-4 border-l-green-500' : ''}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-sm font-mono bg-gray-100 text-gray-600 px-2 py-0.5 rounded flex-shrink-0">
                      #{result.position}
                    </span>
                    <div className="min-w-0">
                      <a
                        href={result.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-medium text-sm block truncate"
                      >
                        {result.title}
                      </a>
                      <p className="text-xs text-green-700 truncate">{result.url}</p>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{result.description}</p>
                      {isOurSite(result.url) && (
                        <span className="inline-block mt-1 text-xs font-medium text-green-700 bg-green-100 px-2 py-0.5 rounded">
                          Our Site
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
