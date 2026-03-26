'use client';

import { useState, useEffect } from 'react';
import {
  Plus, Edit, Trash2, CheckCircle, XCircle, Loader2, Save, X, Megaphone,
} from 'lucide-react';
import { adminFetch } from '@/lib/admin-fetch';

interface CTABanner {
  id: string;
  name: string;
  title: string;
  subtitle: string | null;
  buttonText: string;
  buttonUrl: string;
  secondaryButtonText: string | null;
  secondaryButtonUrl: string | null;
  footnote: string | null;
  variant: string;
  placement: string;
  active: boolean;
  order: number;
  createdAt: string;
}

const PLACEMENTS = ['global', 'blog', 'services', 'homepage'];
const VARIANTS = ['primary', 'accent'];

const emptyForm = {
  name: '',
  title: '',
  subtitle: '',
  buttonText: 'Schedule Free Inspection',
  buttonUrl: '/contact',
  secondaryButtonText: '',
  secondaryButtonUrl: '',
  footnote: '',
  variant: 'accent',
  placement: 'global',
  active: false,
  order: 0,
};

export default function AdminCTABannersPage() {
  const [banners, setBanners] = useState<CTABanner[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const loadBanners = async () => {
    try {
      const response = await adminFetch('/api/admin/cta-banners');
      const data = await response.json();
      setBanners(data.banners || []);
    } catch (err) {
      console.error('Error loading banners:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBanners();
  }, []);

  const openNewForm = () => {
    setForm(emptyForm);
    setEditingId(null);
    setShowForm(true);
    setError('');
  };

  const openEditForm = (banner: CTABanner) => {
    setForm({
      name: banner.name,
      title: banner.title,
      subtitle: banner.subtitle || '',
      buttonText: banner.buttonText,
      buttonUrl: banner.buttonUrl,
      secondaryButtonText: banner.secondaryButtonText || '',
      secondaryButtonUrl: banner.secondaryButtonUrl || '',
      footnote: banner.footnote || '',
      variant: banner.variant,
      placement: banner.placement,
      active: banner.active,
      order: banner.order,
    });
    setEditingId(banner.id);
    setShowForm(true);
    setError('');
  };

  const handleSave = async () => {
    if (!form.name || !form.title) {
      setError('Name and title are required');
      return;
    }

    setSaving(true);
    setError('');

    try {
      const url = editingId
        ? `/api/admin/cta-banners/${editingId}`
        : '/api/admin/cta-banners';

      const response = await adminFetch(url, {
        method: editingId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to save');
      }

      setShowForm(false);
      await loadBanners();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save');
    } finally {
      setSaving(false);
    }
  };

  const handleToggleActive = async (banner: CTABanner) => {
    try {
      const response = await adminFetch(`/api/admin/cta-banners/${banner.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ active: !banner.active }),
      });

      if (response.ok) {
        await loadBanners();
      }
    } catch (err) {
      console.error('Error toggling banner:', err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this CTA banner?')) return;

    try {
      const response = await adminFetch(`/api/admin/cta-banners/${id}`, { method: 'DELETE' });
      if (response.ok) {
        setBanners(banners.filter((b) => b.id !== id));
      } else {
        alert('Failed to delete CTA banner');
      }
    } catch (err) {
      console.error('Error deleting banner:', err);
    }
  };

  const updateField = (field: string, value: string | boolean | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">CTA Banners</h1>
          <p className="text-gray-600">Manage call-to-action banners across your site</p>
        </div>
        <button
          onClick={openNewForm}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
        >
          <Plus className="w-5 h-5" />
          New Banner
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6 border-2 border-primary">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              {editingId ? 'Edit Banner' : 'New Banner'}
            </h2>
            <button
              onClick={() => setShowForm(false)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {error && (
            <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-4">{error}</div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Internal Name *
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => updateField('name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="e.g., Spring 2026 Promo"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Placement
              </label>
              <select
                value={form.placement}
                onChange={(e) => updateField('placement', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white"
              >
                {PLACEMENTS.map((p) => (
                  <option key={p} value={p}>{p.charAt(0).toUpperCase() + p.slice(1)}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title *
              </label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => updateField('title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Ready to Protect Your Home?"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subtitle
              </label>
              <textarea
                value={form.subtitle}
                onChange={(e) => updateField('subtitle', e.target.value)}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Get a free, no-obligation roof inspection..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Primary Button Text
              </label>
              <input
                type="text"
                value={form.buttonText}
                onChange={(e) => updateField('buttonText', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Primary Button URL
              </label>
              <input
                type="text"
                value={form.buttonUrl}
                onChange={(e) => updateField('buttonUrl', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Secondary Button Text
              </label>
              <input
                type="text"
                value={form.secondaryButtonText}
                onChange={(e) => updateField('secondaryButtonText', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Optional"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Secondary Button URL
              </label>
              <input
                type="text"
                value={form.secondaryButtonUrl}
                onChange={(e) => updateField('secondaryButtonUrl', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Optional"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Footnote
              </label>
              <input
                type="text"
                value={form.footnote}
                onChange={(e) => updateField('footnote', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="No pressure. No obligation. Just honest advice."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Color Variant
              </label>
              <select
                value={form.variant}
                onChange={(e) => updateField('variant', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white"
              >
                {VARIANTS.map((v) => (
                  <option key={v} value={v}>{v.charAt(0).toUpperCase() + v.slice(1)}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-3 pt-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.active}
                  onChange={(e) => updateField('active', e.target.checked)}
                  className="w-4 h-4 text-primary rounded focus:ring-primary"
                />
                <span className="text-sm font-medium text-gray-700">Set as Active</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={() => setShowForm(false)}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark disabled:opacity-50"
            >
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              {editingId ? 'Update' : 'Create'} Banner
            </button>
          </div>
        </div>
      )}

      {/* Banners List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-8 text-center">
            <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto" />
            <p className="text-gray-600 mt-4">Loading banners...</p>
          </div>
        ) : banners.length === 0 ? (
          <div className="p-8 text-center">
            <Megaphone className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">No CTA banners yet</p>
            <button
              onClick={openNewForm}
              className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg"
            >
              <Plus className="w-5 h-5" />
              Create Your First Banner
            </button>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {banners.map((banner) => (
              <div key={banner.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-gray-900">{banner.name}</h3>
                      {banner.active ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                          <CheckCircle className="w-3 h-3" />
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                          <XCircle className="w-3 h-3" />
                          Inactive
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                        {banner.placement}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                        {banner.variant}
                      </span>
                    </div>
                    <p className="text-lg font-semibold text-gray-800">{banner.title}</p>
                    {banner.subtitle && (
                      <p className="text-sm text-gray-600 mt-1">{banner.subtitle}</p>
                    )}
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span>Button: &quot;{banner.buttonText}&quot; → {banner.buttonUrl}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <button
                      onClick={() => handleToggleActive(banner)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                        banner.active
                          ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                          : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}
                    >
                      {banner.active ? 'Deactivate' : 'Activate'}
                    </button>
                    <button
                      onClick={() => openEditForm(banner)}
                      className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(banner.id)}
                      className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
