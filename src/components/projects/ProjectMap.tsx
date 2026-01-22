'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { MapPin, Camera, ChevronRight, X, Loader2 } from 'lucide-react';

interface MapMarker {
  id: string;
  lat: number;
  lng: number;
  city: string;
  state: string;
  product: string | null;
  photoCount: number;
  hasPhotos: boolean;
  completedDate: string;
  thumbnail?: string | null;
  slug?: string;
}

interface ProjectMapProps {
  city?: string;
  className?: string;
  height?: string;
  showControls?: boolean;
  onMarkerClick?: (marker: MapMarker) => void;
}

// Leaflet-based map component (free, no API key required)
export function ProjectMap({
  city,
  className = '',
  height = '500px',
  showControls = true,
  onMarkerClick,
}: ProjectMapProps) {
  const [markers, setMarkers] = useState<MapMarker[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersLayerRef = useRef<any>(null);

  // Fetch map data
  useEffect(() => {
    async function fetchMapData() {
      try {
        const params = new URLSearchParams();
        if (city) params.set('city', city);

        const response = await fetch(`/api/projects/map?${params}`);
        if (!response.ok) throw new Error('Failed to fetch map data');

        const data = await response.json();
        setMarkers(data.markers || []);
      } catch (err) {
        console.error('Error fetching map data:', err);
        setError('Unable to load map data');
      } finally {
        setLoading(false);
      }
    }

    fetchMapData();
  }, [city]);

  // Initialize Leaflet map
  useEffect(() => {
    if (typeof window === 'undefined' || !mapRef.current || markers.length === 0) return;

    // Dynamically load Leaflet
    const loadLeaflet = async () => {
      // Add Leaflet CSS
      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      // Load Leaflet JS
      if (!window.L) {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.async = true;
        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      // Wait for L to be available
      await new Promise(resolve => setTimeout(resolve, 100));

      const L = window.L;

      // Clean up existing map
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }

      // Calculate center from markers
      const lats = markers.map(m => m.lat);
      const lngs = markers.map(m => m.lng);
      const centerLat = (Math.min(...lats) + Math.max(...lats)) / 2;
      const centerLng = (Math.min(...lngs) + Math.max(...lngs)) / 2;

      // Create map
      const map = L.map(mapRef.current, {
        center: [centerLat || 35.2271, centerLng || -80.8431], // Default to Charlotte
        zoom: 10,
        scrollWheelZoom: false,
      });

      // Add tile layer (OpenStreetMap - free)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      // Create custom icon
      const createIcon = (hasPhotos: boolean) => {
        return L.divIcon({
          className: 'custom-marker',
          html: `
            <div class="w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${
              hasPhotos ? 'bg-primary text-white' : 'bg-gray-400 text-white'
            }">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
          `,
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32],
        });
      };

      // Add markers
      const markersLayer = L.layerGroup().addTo(map);

      markers.forEach(marker => {
        const leafletMarker = L.marker([marker.lat, marker.lng], {
          icon: createIcon(marker.hasPhotos),
        });

        // Create popup content
        const popupContent = `
          <div class="p-2 min-w-[200px]">
            <p class="font-semibold text-gray-900">${marker.city}, ${marker.state}</p>
            ${marker.product ? `<p class="text-sm text-gray-600">${marker.product}</p>` : ''}
            <p class="text-sm text-gray-500 mt-1">
              ${marker.hasPhotos ? `📷 ${marker.photoCount} photos` : 'No photos'}
            </p>
            ${marker.slug ? `<a href="/projects/${marker.slug}" class="text-primary text-sm mt-2 inline-block hover:underline">View Project →</a>` : ''}
          </div>
        `;

        leafletMarker.bindPopup(popupContent);

        leafletMarker.on('click', () => {
          setSelectedMarker(marker);
          if (onMarkerClick) onMarkerClick(marker);
        });

        leafletMarker.addTo(markersLayer);
      });

      // Fit bounds to show all markers
      if (markers.length > 0) {
        const bounds = L.latLngBounds(markers.map(m => [m.lat, m.lng]));
        map.fitBounds(bounds, { padding: [50, 50] });
      }

      mapInstanceRef.current = map;
      markersLayerRef.current = markersLayer;
    };

    loadLeaflet().catch(console.error);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [markers, onMarkerClick]);

  if (loading) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-xl ${className}`} style={{ height }}>
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-2" />
          <p className="text-gray-600">Loading project map...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-xl ${className}`} style={{ height }}>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  if (markers.length === 0) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-xl ${className}`} style={{ height }}>
        <div className="text-center">
          <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-600">No projects found in this area</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative rounded-xl overflow-hidden shadow-lg ${className}`}>
      {/* Map Stats */}
      {showControls && (
        <div className="absolute top-4 left-4 z-[1000] bg-white/90 backdrop-blur-sm rounded-lg shadow-md px-4 py-2">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-semibold">{markers.length}</span>
              <span className="text-gray-600">projects</span>
            </div>
            <div className="flex items-center gap-1">
              <Camera className="w-4 h-4 text-primary" />
              <span className="font-semibold">{markers.filter(m => m.hasPhotos).length}</span>
              <span className="text-gray-600">with photos</span>
            </div>
          </div>
        </div>
      )}

      {/* Map Container */}
      <div ref={mapRef} style={{ height }} className="w-full" />

      {/* Custom Marker Styles */}
      <style jsx global>{`
        .custom-marker {
          background: transparent;
          border: none;
        }
        .leaflet-popup-content-wrapper {
          border-radius: 12px;
        }
        .leaflet-popup-content {
          margin: 8px 12px;
        }
      `}</style>
    </div>
  );
}

// Add Leaflet type to window
declare global {
  interface Window {
    L: any;
  }
}

export default ProjectMap;
