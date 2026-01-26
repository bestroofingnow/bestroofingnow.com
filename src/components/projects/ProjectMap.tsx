'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { MapPin, Camera, ChevronRight, X, Loader2, Filter, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import Link from 'next/link';

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
  cities?: string[]; // Multiple cities for regional pages (e.g., Lake Norman)
  className?: string;
  height?: string;
  showControls?: boolean;
  showCityFilter?: boolean;
  onMarkerClick?: (marker: MapMarker) => void;
}

// Leaflet-based map component (free, no API key required)
export function ProjectMap({
  city,
  cities,
  className = '',
  height = '500px',
  showControls = true,
  showCityFilter = false,
  onMarkerClick,
}: ProjectMapProps) {
  const [markers, setMarkers] = useState<MapMarker[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null);
  const [cityFilter, setCityFilter] = useState<string>(city || '');
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersLayerRef = useRef<any>(null);

  // Get unique cities for filter dropdown
  const uniqueCities = useMemo(() => {
    const cities = [...new Set(markers.map(m => m.city))].sort();
    return cities;
  }, [markers]);

  // Filter markers by city
  const filteredMarkers = useMemo(() => {
    if (!cityFilter) return markers;
    return markers.filter(m => m.city.toLowerCase().includes(cityFilter.toLowerCase()));
  }, [markers, cityFilter]);

  // Fetch map data - always show projects, expand search if none found locally
  useEffect(() => {
    async function fetchMapData() {
      try {
        const params = new URLSearchParams();
        // Support multiple cities (for regional pages like Lake Norman)
        if (cities && cities.length > 0) {
          params.set('cities', cities.join(','));
        } else if (city) {
          params.set('city', city);
        }

        const response = await fetch(`/api/projects/map?${params}`);
        if (!response.ok) throw new Error('Failed to fetch map data');

        const data = await response.json();
        let fetchedMarkers = data.markers || [];

        // If no projects found for specified city/cities, fetch ALL projects
        // This ensures the map always shows something (expands to show nearest projects)
        if (fetchedMarkers.length === 0 && (city || (cities && cities.length > 0))) {
          const allResponse = await fetch('/api/projects/map');
          if (allResponse.ok) {
            const allData = await allResponse.json();
            fetchedMarkers = allData.markers || [];
          }
        }

        setMarkers(fetchedMarkers);
      } catch (err) {
        console.error('Error fetching map data:', err);
        setError('Unable to load map data');
      } finally {
        setLoading(false);
      }
    }

    fetchMapData();
  }, [city, cities]);

  // Initialize Leaflet map - always show a map even with no markers
  useEffect(() => {
    if (typeof window === 'undefined' || !mapRef.current || loading) return;

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

      // Calculate center from filtered markers (default to Charlotte if no markers)
      let centerLat = 35.2271; // Charlotte default
      let centerLng = -80.8431;

      if (filteredMarkers.length > 0) {
        const lats = filteredMarkers.map(m => m.lat);
        const lngs = filteredMarkers.map(m => m.lng);
        centerLat = (Math.min(...lats) + Math.max(...lats)) / 2;
        centerLng = (Math.min(...lngs) + Math.max(...lngs)) / 2;
      }

      // Create map with full interactivity
      const map = L.map(mapRef.current, {
        center: [centerLat, centerLng],
        zoom: filteredMarkers.length > 0 ? 10 : 9, // Slightly wider zoom if showing fallback
        scrollWheelZoom: true, // Enable scroll wheel zoom
        doubleClickZoom: true, // Enable double-click zoom
        touchZoom: true, // Enable touch zoom on mobile
        zoomControl: false, // Hide default zoom controls (we have custom ones)
        minZoom: 6,
        maxZoom: 18,
      });

      // Add tile layer (OpenStreetMap - free)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      // Add scale control
      L.control.scale({ position: 'bottomleft', imperial: true, metric: false }).addTo(map);

      // Create custom icon with inline styles (Tailwind classes don't work in innerHTML)
      const createIcon = (hasPhotos: boolean) => {
        const bgColor = hasPhotos ? '#1d4ed8' : '#9ca3af'; // primary blue or gray
        return L.divIcon({
          className: 'custom-marker',
          html: `
            <div style="width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: ${bgColor}; color: white; box-shadow: 0 4px 6px rgba(0,0,0,0.3); cursor: pointer; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
              <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      filteredMarkers.forEach(marker => {
        const leafletMarker = L.marker([marker.lat, marker.lng], {
          icon: createIcon(marker.hasPhotos),
        });

        // Format date nicely
        const formattedDate = marker.completedDate
          ? new Date(marker.completedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
          : '';

        // Create popup content with thumbnail
        const popupContent = `
          <div class="project-popup" style="min-width: 240px; font-family: system-ui, -apple-system, sans-serif;">
            ${marker.thumbnail ? `
              <div style="width: 100%; height: 120px; border-radius: 8px; overflow: hidden; margin-bottom: 12px; background: #f3f4f6;">
                <img src="${marker.thumbnail}" alt="${marker.city} roofing project" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.parentElement.style.display='none'" />
              </div>
            ` : ''}
            <p style="font-weight: 600; font-size: 15px; color: #111827; margin: 0 0 4px 0;">${marker.city}, ${marker.state}</p>
            ${marker.product ? `<p style="font-size: 13px; color: #4b5563; margin: 0 0 4px 0;">${marker.product}</p>` : ''}
            <div style="display: flex; align-items: center; gap: 12px; font-size: 12px; color: #6b7280; margin: 8px 0;">
              ${marker.hasPhotos ? `<span>📷 ${marker.photoCount} photos</span>` : '<span>No photos</span>'}
              ${formattedDate ? `<span>📅 ${formattedDate}</span>` : ''}
            </div>
            ${marker.slug ? `
              <button onclick="window.location.href='/projects/${marker.slug}'" style="display: inline-block; margin-top: 8px; padding: 8px 16px; background: #1d4ed8; color: white; font-size: 13px; font-weight: 500; border-radius: 6px; border: none; cursor: pointer; transition: background 0.2s;" onmouseover="this.style.background='#1e40af'" onmouseout="this.style.background='#1d4ed8'">
                View Project →
              </button>
            ` : ''}
          </div>
        `;

        leafletMarker.bindPopup(popupContent, {
          maxWidth: 300,
          className: 'custom-popup',
        });

        // Handle popup open to attach click handlers
        leafletMarker.on('popupopen', () => {
          // Find the button in the popup and attach click handler
          const popup = leafletMarker.getPopup();
          if (popup) {
            const container = popup.getElement();
            if (container) {
              const btn = container.querySelector('button');
              if (btn && marker.slug) {
                btn.onclick = (e: MouseEvent) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.location.href = `/projects/${marker.slug}`;
                };
              }
            }
          }
        });

        leafletMarker.on('click', () => {
          setSelectedMarker(marker);
          if (onMarkerClick) onMarkerClick(marker);
        });

        leafletMarker.addTo(markersLayer);
      });

      // Fit bounds to show all markers
      if (filteredMarkers.length > 0) {
        const bounds = L.latLngBounds(filteredMarkers.map(m => [m.lat, m.lng]));
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
  }, [filteredMarkers, onMarkerClick, loading]);

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

  // Never show empty state - always render the map (it will show default Charlotte area)

  return (
    <div className={`relative rounded-xl overflow-hidden shadow-lg ${className}`}>
      {/* Map Stats & Filter */}
      {showControls && (
        <div className="absolute top-4 left-4 z-[1000] bg-white/90 backdrop-blur-sm rounded-lg shadow-md px-4 py-2">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-semibold">{filteredMarkers.length}</span>
              <span className="text-gray-600">projects</span>
            </div>
            <div className="flex items-center gap-1">
              <Camera className="w-4 h-4 text-primary" />
              <span className="font-semibold">{filteredMarkers.filter(m => m.hasPhotos).length}</span>
              <span className="text-gray-600">with photos</span>
            </div>
          </div>
        </div>
      )}

      {/* City Filter */}
      {showCityFilter && uniqueCities.length > 1 && (
        <div className="absolute top-4 right-4 z-[1000]">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md">
            <div className="flex items-center gap-2 px-3 py-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                className="bg-transparent border-none text-sm font-medium text-gray-700 focus:outline-none cursor-pointer pr-6"
              >
                <option value="">All Cities ({markers.length})</option>
                {uniqueCities.map((c) => {
                  const count = markers.filter(m => m.city === c).length;
                  return (
                    <option key={c} value={c}>
                      {c} ({count})
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Custom Zoom Controls */}
      <div className="absolute bottom-4 right-4 z-[1000] flex flex-col gap-2">
        <button
          onClick={() => mapInstanceRef.current?.zoomIn()}
          className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-2 hover:bg-white transition-colors"
          title="Zoom in"
          aria-label="Zoom in"
        >
          <ZoomIn className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={() => mapInstanceRef.current?.zoomOut()}
          className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-2 hover:bg-white transition-colors"
          title="Zoom out"
          aria-label="Zoom out"
        >
          <ZoomOut className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={() => {
            if (mapInstanceRef.current && filteredMarkers.length > 0 && window.L) {
              const bounds = window.L.latLngBounds(filteredMarkers.map(m => [m.lat, m.lng]));
              mapInstanceRef.current.fitBounds(bounds, { padding: [50, 50] });
            }
          }}
          className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-2 hover:bg-white transition-colors"
          title="Reset view to show all projects"
          aria-label="Reset view"
        >
          <Maximize2 className="w-5 h-5 text-gray-700" />
        </button>
      </div>

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
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }
        .leaflet-popup-content {
          margin: 12px;
        }
        .leaflet-popup-tip {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }
        .custom-popup .leaflet-popup-content-wrapper {
          padding: 0;
        }
        .custom-popup .leaflet-popup-content {
          margin: 12px;
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
