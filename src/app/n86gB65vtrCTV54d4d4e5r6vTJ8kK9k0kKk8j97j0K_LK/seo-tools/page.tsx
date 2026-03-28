'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, TrendingUp, FileText, Users, Loader2, Radar, Shield, Sparkles, Bot, BarChart3, Map } from 'lucide-react';
import { adminFetch } from '@/lib/admin-fetch';

export default function SeoToolsPage() {
  const [quickKeyword, setQuickKeyword] = useState('');
  const [quickResults, setQuickResults] = useState<{ keyword: string; searchVolume: number; cpc: number; difficulty: number }[] | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleQuickSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!quickKeyword.trim()) return;

    setLoading(true);
    try {
      const res = await adminFetch('/api/admin/dataforseo/keywords', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keywords: [quickKeyword.trim()] }),
      });
      const { data } = await res.json();
      setQuickResults(data || []);
    } catch (error) {
      console.error('Quick search error:', error);
    } finally {
      setLoading(false);
    }
  }

  const adminBase = '/n86gB65vtrCTV54d4d4e5r6vTJ8kK9k0kKk8j97j0K_LK';

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">SEO Tools</h1>
        <p className="text-gray-600 mt-1">DataForSEO-powered keyword research, SERP analysis, and content planning</p>
      </div>

      {/* Quick Search */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-lg font-semibold mb-4">Quick Keyword Lookup</h2>
        <form onSubmit={handleQuickSearch} className="flex gap-3">
          <input
            type="text"
            value={quickKeyword}
            onChange={(e) => setQuickKeyword(e.target.value)}
            placeholder="Enter a keyword..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
            Search
          </button>
        </form>

        {quickResults && quickResults.length > 0 && (
          <div className="mt-4 border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left font-medium text-gray-600">Keyword</th>
                  <th className="px-4 py-2 text-right font-medium text-gray-600">Volume</th>
                  <th className="px-4 py-2 text-right font-medium text-gray-600">CPC</th>
                  <th className="px-4 py-2 text-right font-medium text-gray-600">Difficulty</th>
                </tr>
              </thead>
              <tbody>
                {quickResults.map((kw) => (
                  <tr key={kw.keyword} className="border-t">
                    <td className="px-4 py-2 font-medium">{kw.keyword}</td>
                    <td className="px-4 py-2 text-right">{kw.searchVolume.toLocaleString()}</td>
                    <td className="px-4 py-2 text-right">${kw.cpc.toFixed(2)}</td>
                    <td className="px-4 py-2 text-right">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                        kw.difficulty <= 30 ? 'bg-green-100 text-green-800' :
                        kw.difficulty <= 60 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {kw.difficulty}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Tool Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href={`${adminBase}/seo-tools/keywords`} className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Search className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold">Keyword Research</h3>
          </div>
          <p className="text-gray-600 text-sm">Bulk keyword lookup with volume, CPC, competition, and trend data.</p>
        </Link>

        <Link href={`${adminBase}/seo-tools/serp`} className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold">SERP Analysis</h3>
          </div>
          <p className="text-gray-600 text-sm">See who ranks, featured snippets, People Also Ask, and AI Overviews.</p>
        </Link>

        <Link href={`${adminBase}/seo-tools/briefs`} className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold">Content Briefs</h3>
          </div>
          <p className="text-gray-600 text-sm">AI-generated content briefs using real keyword and SERP data.</p>
        </Link>

        <Link href={`${adminBase}/seo-tools/keywords?mode=competitors`} className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold">Competitor Analysis</h3>
          </div>
          <p className="text-gray-600 text-sm">Discover competitor domains and keyword gaps to exploit.</p>
        </Link>

        <Link href={`${adminBase}/seo-tools/scans`} className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Radar className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold">Site Scans</h3>
          </div>
          <p className="text-gray-600 text-sm">Weekly ranking scans with position tracking, gainers, and losers.</p>
        </Link>

        <Link href={`${adminBase}/seo-tools/audits`} className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-rose-600" />
            </div>
            <h3 className="text-lg font-semibold">Page Audits</h3>
          </div>
          <p className="text-gray-600 text-sm">On-page SEO audit: meta tags, headings, images, schema, speed.</p>
        </Link>

        <Link href={`${adminBase}/seo-tools/optimizer`} className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold">AI Optimizer</h3>
          </div>
          <p className="text-gray-600 text-sm">AI-generated meta, heading, and content improvements per page.</p>
        </Link>

        <Link href={`${adminBase}/seo-tools/aeo`} className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-cyan-600" />
            </div>
            <h3 className="text-lg font-semibold">AEO Pipeline</h3>
          </div>
          <p className="text-gray-600 text-sm">AI Overview targeting, FAQ schema, structured data, citation optimization.</p>
        </Link>

        <Link href={`${adminBase}/seo-tools/reports`} className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold">Weekly Reports</h3>
          </div>
          <p className="text-gray-600 text-sm">AI-generated weekly summaries with trends, alerts, and recommendations.</p>
        </Link>

        <Link href={`${adminBase}/seo-tools/authority-map`} className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
              <Map className="w-5 h-5 text-violet-600" />
            </div>
            <h3 className="text-lg font-semibold">Authority Map</h3>
          </div>
          <p className="text-gray-600 text-sm">Topical coverage analysis — find content gaps and become the AI citation authority.</p>
        </Link>
      </div>
    </div>
  );
}
