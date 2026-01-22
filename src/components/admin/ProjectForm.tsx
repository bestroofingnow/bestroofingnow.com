'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { MapPin, Calendar, Upload, X, Loader2, Plus, Trash2 } from 'lucide-react';

interface Photo {
  id?: string;
  url: string;
  thumbnailUrl?: string;
  caption?: string;
}

interface ProjectFormData {
  id?: string;
  name?: string;
  description?: string;
  street?: string;
  city: string;
  state: string;
  zip?: string;
  county?: string;
  latitude?: number;
  longitude?: number;
  serviceType?: string;
  product?: string;
  productColor?: string;
  completedDate?: string;
  featured?: boolean;
  published?: boolean;
  photos?: Photo[];
}

interface ProjectFormProps {
  initialData?: ProjectFormData;
  isEditing?: boolean;
}

const SERVICE_TYPES = [
  'Roof Replacement',
  'Roof Repair',
  'New Construction',
  'Storm Damage',
  'Gutter Installation',
  'Siding',
  'Other',
];

const PRODUCTS = [
  'GAF Timberline HDZ',
  'GAF Timberline Ultra HD',
  'CertainTeed Landmark',
  'Owens Corning Duration',
  'Metal Roofing',
  'TPO Roofing',
  'EPDM Roofing',
  'Other',
];

export default function ProjectForm({ initialData, isEditing = false }: ProjectFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<ProjectFormData>({
    city: '',
    state: 'NC',
    published: true,
    ...initialData,
    completedDate: initialData?.completedDate
      ? new Date(initialData.completedDate).toISOString().split('T')[0]
      : new Date().toISOString().split('T')[0],
  });
  const [photos, setPhotos] = useState<Photo[]>(initialData?.photos || []);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !isEditing || !initialData?.id) return;

    setUploading(true);
    setError('');

    try {
      for (const file of Array.from(e.target.files)) {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch(`/api/projects/${initialData.id}/photos`, {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Failed to upload photo');
        }

        const newPhoto = await response.json();
        setPhotos((prev) => [...prev, newPhoto]);
      }
    } catch (err) {
      setError('Failed to upload photos. Please try again.');
      console.error('Upload error:', err);
    } finally {
      setUploading(false);
    }
  };

  const handleDeletePhoto = async (photoId: string) => {
    if (!isEditing || !initialData?.id) return;
    if (!confirm('Delete this photo?')) return;

    try {
      const response = await fetch(
        `/api/projects/${initialData.id}/photos?photoId=${photoId}`,
        { method: 'DELETE' }
      );

      if (response.ok) {
        setPhotos((prev) => prev.filter((p) => p.id !== photoId));
      } else {
        throw new Error('Failed to delete photo');
      }
    } catch (err) {
      setError('Failed to delete photo');
      console.error('Delete error:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    try {
      const url = isEditing ? `/api/projects/${initialData?.id}` : '/api/projects';
      const method = isEditing ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to save project');
      }

      const savedProject = await response.json();
      router.push('/admin/projects');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Failed to save project');
      console.error('Save error:', err);
    } finally {
      setSaving(false);
    }
  };

  const geocodeAddress = async () => {
    const address = `${formData.street || ''} ${formData.city}, ${formData.state} ${formData.zip || ''}`.trim();
    if (!address) return;

    try {
      const response = await fetch(
        `/api/estimate/geocode?address=${encodeURIComponent(address)}`
      );
      const data = await response.json();

      if (data.lat && data.lng) {
        setFormData((prev) => ({
          ...prev,
          latitude: data.lat,
          longitude: data.lng,
        }));
      }
    } catch (err) {
      console.error('Geocoding error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg">{error}</div>
      )}

      {/* Location Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          Location
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Street Address
            </label>
            <input
              type="text"
              name="street"
              value={formData.street || ''}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required
              maxLength={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ZIP Code
            </label>
            <input
              type="text"
              name="zip"
              value={formData.zip || ''}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              County
            </label>
            <input
              type="text"
              name="county"
              value={formData.county || ''}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Coordinates
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                name="latitude"
                value={formData.latitude || ''}
                onChange={handleInputChange}
                placeholder="Latitude"
                step="any"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <input
                type="number"
                name="longitude"
                value={formData.longitude || ''}
                onChange={handleInputChange}
                placeholder="Longitude"
                step="any"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <button
                type="button"
                onClick={geocodeAddress}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <MapPin className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Project Details
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Service Type
            </label>
            <select
              name="serviceType"
              value={formData.serviceType || ''}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="">Select service type</option>
              {SERVICE_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product
            </label>
            <select
              name="product"
              value={formData.product || ''}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="">Select product</option>
              {PRODUCTS.map((product) => (
                <option key={product} value={product}>
                  {product}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Color
            </label>
            <input
              type="text"
              name="productColor"
              value={formData.productColor || ''}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Completion Date
            </label>
            <input
              type="date"
              name="completedDate"
              value={formData.completedDate || ''}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description || ''}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured || false}
                onChange={handleInputChange}
                className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <span className="text-sm text-gray-700">Featured Project</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="published"
                checked={formData.published !== false}
                onChange={handleInputChange}
                className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <span className="text-sm text-gray-700">Published</span>
            </label>
          </div>
        </div>
      </div>

      {/* Photos Section - Only for editing */}
      {isEditing && (
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Upload className="w-5 h-5" />
            Photos ({photos.length})
          </h2>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-4">
            {photos.map((photo) => (
              <div key={photo.id || photo.url} className="relative group">
                <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={photo.thumbnailUrl || photo.url}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 16vw"
                  />
                </div>
                {photo.id && (
                  <button
                    type="button"
                    onClick={() => handleDeletePhoto(photo.id!)}
                    className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}

            {/* Upload Button */}
            <label className="relative aspect-square rounded-lg border-2 border-dashed border-gray-300 hover:border-primary cursor-pointer flex flex-col items-center justify-center text-gray-500 hover:text-primary transition-colors">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handlePhotoUpload}
                disabled={uploading}
                className="hidden"
              />
              {uploading ? (
                <Loader2 className="w-8 h-8 animate-spin" />
              ) : (
                <>
                  <Plus className="w-8 h-8" />
                  <span className="text-sm mt-1">Add Photos</span>
                </>
              )}
            </label>
          </div>
        </div>
      )}

      {/* Submit Buttons */}
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={saving}
          className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
        >
          {saving && <Loader2 className="w-5 h-5 animate-spin" />}
          {isEditing ? 'Save Changes' : 'Create Project'}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
