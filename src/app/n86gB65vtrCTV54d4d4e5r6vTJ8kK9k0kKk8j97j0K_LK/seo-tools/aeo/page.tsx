'use client';

import { useState, useEffect, useCallback } from 'react';
import { Bot, Loader2, Play, Check, X, Copy, Code } from 'lucide-react';
import { adminFetch } from '@/lib/admin-fetch';

interface ScanRecord {
  id: string;
  status: string;
  createdAt: string;
}

interface AeoOptimization {
  id: string;
  url: string;
  optimizationType: string;
  currentValue: string | null; // AEO sub-type: faq_schema, citation_paragraph, etc.
  suggestedValue: string;
  reasoning: string;
  impact: string;
  status: string;
}

export default function AeoPage() {
  const [scans, setScans] = useState<ScanRecord[]>([]);
  const [selectedScan, setSelectedScan] = useState<string | null>(null);
  const [optimizations, setOptimizations] = useState<AeoOptimization[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filterSubType, setFilterSubType] = useState<string>('all');
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

  const fetchAeo = useCallback(async (scanId: string) => {
    try {
      const res = await adminFetch(`/api/admin/seo-scans/${scanId}/aeo`);
      const { data } = await res.json();
      setOptimizations(data || []);
    } catch (error) {
      console.error('Failed to fetch AEO data:', error);
    }
  }, []);

  useEffect(() => { fetchScans(); }, [fetchScans]);
  useEffect(() => { if (selectedScan) fetchAeo(selectedScan); }, [selectedScan, fetchAeo]);

  async function handleRunPipeline() {
    if (!selectedScan) return;
    setRunning(true);
    setSummary(null);
    try {
      const res = await adminFetch(`/api/admin/seo-scans/${selectedScan}/aeo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ maxPages: 30 }),
      });
      const { data, error } = await res.json();
      if (error) {
        setSummary(`Error: ${error}`);
      } else {
        setSummary(
          `Processed ${data.pagesProcessed} pages. Generated: ${data.faqSchemas} FAQ schemas, ` +
          `${data.citationParagraphs} citation paragraphs, ${data.serviceSchemas} service schemas.`,
        );
        fetchAeo(selectedScan);
      }
    } catch {
      setSummary('AEO pipeline failed. Check console.');
    } finally {
      setRunning(false);
    }
  }

  async function handleStatusUpdate(id: string, status: 'approved' | 'rejected') {
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

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }

  const subTypeLabel = (type: string | null) => {
    const labels: Record<string, string> = {
      faq_schema: 'FAQ Schema',
      citation_paragraph: 'Citation Paragraph',
      local_schema: 'LocalBusiness Schema',
      service_schema: 'Service Schema',
      how_to_schema: 'HowTo Schema',
    };
    return labels[type ?? ''] || type || 'Unknown';
  };

  const subTypeColor = (type: string | null) => {
    switch (type) {
      case 'faq_schema': return 'bg-purple-100 text-purple-800';
      case 'citation_paragraph': return 'bg-cyan-100 text-cyan-800';
      case 'local_schema': return 'bg-indigo-100 text-indigo-800';
      case 'service_schema': return 'bg-teal-100 text-teal-800';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const filtered = optimizations.filter(o =>
    filterSubType === 'all' || o.currentValue === filterSubType
  );

  // Stats
  const faqCount = optimizations.filter(o => o.currentValue === 'faq_schema').length;
  const citationCount = optimizations.filter(o => o.currentValue === 'citation_paragraph').length;
  const schemaCount = optimizations.filter(o =>
    o.currentValue === 'local_schema' || o.currentValue === 'service_schema'
  ).length;

  if (loading) {
    return <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin text-gray-400" /></div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Bot className="w-6 h-6 text-cyan-600" /> AEO Pipeline
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            AI Overview targeting, FAQ schema, structured data, citation paragraphs.
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
            onClick={handleRunPipeline}
            disabled={running || !selectedScan}
            className="bg-cyan-600 text-white px-5 py-2.5 rounded-lg hover:bg-cyan-700 transition-colors disabled:opacity-50 flex items-center gap-2 font-medium"
          >
            {running ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
            {running ? 'Processing...' : 'Run AEO Pipeline'}
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

      {/* Stats cards */}
      {optimizations.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
            <p className="text-2xl font-bold text-purple-800">{faqCount}</p>
            <p className="text-xs font-medium text-purple-600 mt-1">FAQ Schemas</p>
          </div>
          <div className="bg-cyan-50 rounded-xl p-4 border border-cyan-200">
            <p className="text-2xl font-bold text-cyan-800">{citationCount}</p>
            <p className="text-xs font-medium text-cyan-600 mt-1">Citation Paragraphs</p>
          </div>
          <div className="bg-teal-50 rounded-xl p-4 border border-teal-200">
            <p className="text-2xl font-bold text-teal-800">{schemaCount}</p>
            <p className="text-xs font-medium text-teal-600 mt-1">Schema Markups</p>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="flex gap-3">
        <select
          value={filterSubType}
          onChange={(e) => setFilterSubType(e.target.value)}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
        >
          <option value="all">All Types</option>
          <option value="faq_schema">FAQ Schema</option>
          <option value="citation_paragraph">Citation Paragraphs</option>
          <option value="local_schema">LocalBusiness Schema</option>
          <option value="service_schema">Service Schema</option>
        </select>
        <span className="text-sm text-gray-500 self-center">{filtered.length} items</span>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border p-8 text-center text-gray-500">
          {optimizations.length === 0
            ? 'No AEO data yet. Run the pipeline to generate structured data and citation content.'
            : 'No items match your filter.'}
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
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${subTypeColor(opt.currentValue)}`}>
                    {subTypeLabel(opt.currentValue)}
                  </span>
                  <span className="text-sm font-medium text-gray-900">{opt.url}</span>
                </div>
                <div className="flex items-center gap-2">
                  {opt.status === 'pending' ? (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleStatusUpdate(opt.id, 'approved'); }}
                        className="p-1.5 rounded-lg bg-green-100 text-green-700 hover:bg-green-200"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleStatusUpdate(opt.id, 'rejected'); }}
                        className="p-1.5 rounded-lg bg-red-100 text-red-700 hover:bg-red-200"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <span className={`px-2 py-0.5 rounded text-xs font-medium capitalize ${
                      opt.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {opt.status}
                    </span>
                  )}
                  <Code className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              {expandedId === opt.id && (
                <div className="px-5 pb-4 border-t bg-gray-50 space-y-3">
                  <div className="pt-3">
                    <p className="text-xs font-medium text-gray-500 uppercase mb-1">Reasoning</p>
                    <p className="text-sm text-gray-700">{opt.reasoning}</p>
                  </div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-xs font-medium text-gray-500 uppercase">
                        {opt.currentValue?.includes('schema') ? 'JSON-LD' : 'Content'}
                      </p>
                      <button
                        onClick={() => copyToClipboard(opt.suggestedValue)}
                        className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800"
                      >
                        <Copy className="w-3 h-3" /> Copy
                      </button>
                    </div>
                    <pre className="text-sm bg-white border rounded-lg p-3 whitespace-pre-wrap overflow-x-auto max-h-80">
                      {opt.suggestedValue}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
