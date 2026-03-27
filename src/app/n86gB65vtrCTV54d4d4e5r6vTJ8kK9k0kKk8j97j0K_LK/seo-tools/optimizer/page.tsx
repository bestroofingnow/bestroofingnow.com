'use client';

import { useState, useEffect, useCallback } from 'react';
import { Sparkles, Loader2, Play, Check, X, Eye } from 'lucide-react';
import { adminFetch } from '@/lib/admin-fetch';

interface ScanRecord {
  id: string;
  status: string;
  createdAt: string;
}

interface Optimization {
  id: string;
  url: string;
  optimizationType: string;
  currentValue: string | null;
  suggestedValue: string;
  reasoning: string;
  impact: string;
  status: string;
  appliedAt: string | null;
  createdAt: string;
}

export default function OptimizerPage() {
  const [scans, setScans] = useState<ScanRecord[]>([]);
  const [selectedScan, setSelectedScan] = useState<string | null>(null);
  const [optimizations, setOptimizations] = useState<Optimization[]>([]);
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('pending');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [running, setRunning] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);

  const fetchScans = useCallback(async () => {
    try {
      const res = await adminFetch('/api/admin/seo-scans');
      const { data } = await res.json();
      const completed = (data || []).filter((s: ScanRecord) => s.status === 'completed');
      setScans(completed);
      if (completed.length > 0) setSelectedScan(completed[0].id);
    } catch (error) {
      console.error('Failed to fetch scans:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchOptimizations = useCallback(async (scanId: string) => {
    try {
      const statusParam = filterStatus !== 'all' ? `?status=${filterStatus}` : '';
      const res = await adminFetch(`/api/admin/seo-scans/${scanId}/optimize${statusParam}`);
      const { data } = await res.json();
      setOptimizations(data || []);
    } catch (error) {
      console.error('Failed to fetch optimizations:', error);
    }
  }, [filterStatus]);

  useEffect(() => { fetchScans(); }, [fetchScans]);
  useEffect(() => { if (selectedScan) fetchOptimizations(selectedScan); }, [selectedScan, fetchOptimizations]);

  async function handleRunOptimizer() {
    if (!selectedScan) return;
    setRunning(true);
    setSummary(null);
    try {
      const res = await adminFetch(`/api/admin/seo-scans/${selectedScan}/optimize`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ maxPages: 50 }),
      });
      const { data, error } = await res.json();
      if (error) {
        setSummary(`Error: ${error}`);
      } else {
        setSummary(
          `Optimized ${data.pagesOptimized} pages. ${data.totalSuggestions} suggestions generated. ` +
          `${data.highImpact} high-impact.`,
        );
        fetchOptimizations(selectedScan);
      }
    } catch {
      setSummary('Optimizer failed. Check console.');
    } finally {
      setRunning(false);
    }
  }

  async function handleStatusUpdate(id: string, status: 'approved' | 'applied' | 'rejected') {
    try {
      await adminFetch(`/api/admin/optimizations/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      setOptimizations(prev =>
        prev.map(o => o.id === id ? { ...o, status } : o)
      );
    } catch (error) {
      console.error('Status update failed:', error);
    }
  }

  const filtered = optimizations.filter(o =>
    filterType === 'all' || o.optimizationType === filterType
  );

  const impactColor = (impact: string) => {
    switch (impact) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const typeLabel = (type: string) => {
    const labels: Record<string, string> = {
      meta: 'Meta Tags', headings: 'Headings', content: 'Content',
      schema: 'Schema', links: 'Internal Links', aeo: 'AEO',
    };
    return labels[type] || type;
  };

  if (loading) {
    return <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin text-gray-400" /></div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-emerald-600" /> AI Optimizer
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            AI-generated SEO improvements for each page. Review and approve suggestions.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {scans.length > 0 && (
            <select
              value={selectedScan ?? ''}
              onChange={(e) => setSelectedScan(e.target.value)}
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
            >
              {scans.map((s) => (
                <option key={s.id} value={s.id}>
                  Scan: {new Date(s.createdAt).toLocaleDateString()}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleRunOptimizer}
            disabled={running || !selectedScan}
            className="bg-emerald-600 text-white px-5 py-2.5 rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 flex items-center gap-2 font-medium"
          >
            {running ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
            {running ? 'Optimizing...' : 'Run Optimizer'}
          </button>
        </div>
      </div>

      {summary && (
        <div className={`p-4 rounded-lg text-sm ${
          summary.startsWith('Error') ? 'bg-red-50 text-red-800 border border-red-200' : 'bg-green-50 text-green-800 border border-green-200'
        }`}>
          {summary}
        </div>
      )}

      {/* Filters */}
      <div className="flex gap-3">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
        >
          <option value="all">All Types</option>
          <option value="meta">Meta Tags</option>
          <option value="headings">Headings</option>
          <option value="content">Content</option>
          <option value="schema">Schema</option>
          <option value="links">Links</option>
        </select>
        <select
          value={filterStatus}
          onChange={(e) => { setFilterStatus(e.target.value); }}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
        >
          <option value="all">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="applied">Applied</option>
          <option value="rejected">Rejected</option>
        </select>
        <span className="text-sm text-gray-500 self-center">{filtered.length} suggestions</span>
      </div>

      {/* Optimization cards */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border p-8 text-center text-gray-500">
          {optimizations.length === 0
            ? 'No optimizations yet. Run the optimizer to generate AI suggestions.'
            : 'No optimizations match your filters.'}
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((opt) => (
            <div key={opt.id} className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <div
                className="px-5 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                onClick={() => setExpandedId(expandedId === opt.id ? null : opt.id)}
              >
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${impactColor(opt.impact)}`}>
                    {opt.impact}
                  </span>
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                    {typeLabel(opt.optimizationType)}
                  </span>
                  <span className="text-sm font-medium text-gray-900">{opt.url}</span>
                </div>
                <div className="flex items-center gap-2">
                  {opt.status === 'pending' ? (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleStatusUpdate(opt.id, 'approved'); }}
                        className="p-1.5 rounded-lg bg-green-100 text-green-700 hover:bg-green-200"
                        title="Approve"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleStatusUpdate(opt.id, 'rejected'); }}
                        className="p-1.5 rounded-lg bg-red-100 text-red-700 hover:bg-red-200"
                        title="Reject"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <span className={`px-2 py-0.5 rounded text-xs font-medium capitalize ${
                      opt.status === 'approved' ? 'bg-green-100 text-green-800' :
                      opt.status === 'applied' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {opt.status}
                    </span>
                  )}
                  <Eye className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              {expandedId === opt.id && (
                <div className="px-5 pb-4 border-t bg-gray-50 space-y-3">
                  <div className="pt-3">
                    <p className="text-xs font-medium text-gray-500 uppercase mb-1">Reasoning</p>
                    <p className="text-sm text-gray-700">{opt.reasoning}</p>
                  </div>
                  {opt.currentValue && (
                    <div>
                      <p className="text-xs font-medium text-gray-500 uppercase mb-1">Current</p>
                      <pre className="text-sm bg-red-50 border border-red-200 rounded-lg p-3 whitespace-pre-wrap overflow-x-auto">
                        {opt.currentValue}
                      </pre>
                    </div>
                  )}
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase mb-1">Suggested</p>
                    <pre className="text-sm bg-green-50 border border-green-200 rounded-lg p-3 whitespace-pre-wrap overflow-x-auto">
                      {opt.suggestedValue}
                    </pre>
                  </div>
                  {opt.status === 'approved' && (
                    <button
                      onClick={() => handleStatusUpdate(opt.id, 'applied')}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
                    >
                      Mark as Applied
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
