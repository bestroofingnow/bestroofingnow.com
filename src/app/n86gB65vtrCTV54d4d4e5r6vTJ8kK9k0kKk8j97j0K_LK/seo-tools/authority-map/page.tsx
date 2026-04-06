'use client';

import { useState, useEffect, useCallback } from 'react';
import { Map, Loader2, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { adminFetch } from '@/lib/admin-fetch';

interface CoverageResult {
  topic: string;
  importance: string;
  aiSearchVolume: string;
  totalSubtopics: number;
  coveredSubtopics: number;
  coveragePercent: number;
  coveredList: string[];
  gapList: string[];
}

interface AuthorityData {
  overallCoverage: number;
  totalTopics: number;
  coveredTopics: number;
  gaps: number;
  topicResults: CoverageResult[];
  prioritizedGaps: { topic: string; subtopic: string; importance: string; aiSearchVolume: string }[];
}

export default function AuthorityMapPage() {
  const [data, setData] = useState<AuthorityData | null>(null);
  const [loading, setLoading] = useState(true);
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await adminFetch('/api/admin/seo-scans/authority-map');
      const json = await res.json();
      setData(json.data || null);
    } catch (error) {
      console.error('Failed to fetch authority map:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const coverageColor = (pct: number) => {
    if (pct >= 80) return 'text-green-700 bg-green-100';
    if (pct >= 50) return 'text-yellow-700 bg-yellow-100';
    if (pct >= 25) return 'text-orange-700 bg-orange-100';
    return 'text-red-700 bg-red-100';
  };

  const coverageBarColor = (pct: number) => {
    if (pct >= 80) return 'bg-green-500';
    if (pct >= 50) return 'bg-yellow-500';
    if (pct >= 25) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const importanceBadge = (imp: string) => {
    switch (imp) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  if (loading) {
    return <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin text-gray-400" /></div>;
  }

  if (!data) {
    return <div className="p-8 text-center text-gray-500">Failed to load authority map.</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Map className="w-6 h-6 text-violet-600" /> Topical Authority Map
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          Coverage analysis against a comprehensive roofing topic taxonomy. Fill gaps to become THE AI citation source.
        </p>
      </div>

      {/* Overall score */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Overall Topical Authority</p>
            <p className={`text-4xl font-bold mt-1 ${data.overallCoverage >= 70 ? 'text-green-700' : data.overallCoverage >= 40 ? 'text-yellow-700' : 'text-red-700'}`}>
              {data.overallCoverage}%
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-gray-900">{data.totalTopics}</p>
              <p className="text-xs text-gray-500">Total Subtopics</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-700">{data.coveredTopics}</p>
              <p className="text-xs text-gray-500">Covered</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-red-700">{data.gaps}</p>
              <p className="text-xs text-gray-500">Gaps</p>
            </div>
          </div>
        </div>
        <div className="mt-4 h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all ${coverageBarColor(data.overallCoverage)}`}
            style={{ width: `${data.overallCoverage}%` }}
          />
        </div>
      </div>

      {/* Topic breakdown */}
      <div className="space-y-3">
        {data.topicResults.map((result) => (
          <div key={result.topic} className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div
              className="px-5 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
              onClick={() => setExpandedTopic(expandedTopic === result.topic ? null : result.topic)}
            >
              <div className="flex items-center gap-3">
                <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${coverageColor(result.coveragePercent)}`}>
                  {result.coveragePercent}%
                </span>
                <span className="font-semibold text-gray-900">{result.topic}</span>
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${importanceBadge(result.importance)}`}>
                  {result.importance}
                </span>
                {result.aiSearchVolume === 'high' && (
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                    high AI demand
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>{result.coveredSubtopics}/{result.totalSubtopics}</span>
                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${coverageBarColor(result.coveragePercent)}`}
                    style={{ width: `${result.coveragePercent}%` }}
                  />
                </div>
              </div>
            </div>

            {expandedTopic === result.topic && (
              <div className="px-5 pb-4 border-t bg-gray-50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4">
                  {/* Covered */}
                  <div>
                    <h4 className="text-xs font-medium text-green-700 uppercase mb-2 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Covered ({result.coveredList.length})
                    </h4>
                    <ul className="space-y-1">
                      {result.coveredList.map((item, idx) => (
                        <li key={idx} className="text-sm text-green-700 flex items-start gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                      {result.coveredList.length === 0 && (
                        <li className="text-sm text-gray-400">No coverage yet</li>
                      )}
                    </ul>
                  </div>
                  {/* Gaps */}
                  <div>
                    <h4 className="text-xs font-medium text-red-700 uppercase mb-2 flex items-center gap-1">
                      <XCircle className="w-3 h-3" /> Gaps ({result.gapList.length})
                    </h4>
                    <ul className="space-y-1">
                      {result.gapList.map((item, idx) => (
                        <li key={idx} className="text-sm text-red-700 flex items-start gap-1.5">
                          <XCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                      {result.gapList.length === 0 && (
                        <li className="text-sm text-green-600">Full coverage!</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Prioritized gaps */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="px-5 py-4 border-b">
          <h2 className="font-semibold text-gray-900 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-orange-600" /> Priority Content Gaps (Top 30)
          </h2>
          <p className="text-xs text-gray-500 mt-1">Create knowledge base entries for these topics to maximize AI citation authority.</p>
        </div>
        <div className="divide-y">
          {data.prioritizedGaps.slice(0, 30).map((gap, idx) => (
            <div key={idx} className="px-5 py-3 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">{gap.subtopic}</p>
                <p className="text-xs text-gray-400">{gap.topic}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${importanceBadge(gap.importance)}`}>
                  {gap.importance}
                </span>
                {gap.aiSearchVolume === 'high' && (
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                    high demand
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
