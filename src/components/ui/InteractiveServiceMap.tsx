'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

interface ServiceArea {
  id: string;
  name: string;
  slug: string;
  coordinates: { x: number; y: number };
  isPrimary?: boolean;
}

// Charlotte area locations with approximate relative positions
const serviceAreas: ServiceArea[] = [
  { id: 'charlotte', name: 'Charlotte', slug: 'charlotte-nc', coordinates: { x: 50, y: 55 }, isPrimary: true },
  { id: 'huntersville', name: 'Huntersville', slug: 'huntersville-nc', coordinates: { x: 48, y: 30 } },
  { id: 'cornelius', name: 'Cornelius', slug: 'cornelius-nc', coordinates: { x: 45, y: 22 } },
  { id: 'davidson', name: 'Davidson', slug: 'davidson-nc', coordinates: { x: 42, y: 15 } },
  { id: 'mooresville', name: 'Mooresville', slug: 'mooresville-nc', coordinates: { x: 38, y: 8 } },
  { id: 'concord', name: 'Concord', slug: 'concord-nc', coordinates: { x: 70, y: 35 } },
  { id: 'kannapolis', name: 'Kannapolis', slug: 'kannapolis-nc', coordinates: { x: 75, y: 22 } },
  { id: 'matthews', name: 'Matthews', slug: 'matthews-nc', coordinates: { x: 65, y: 70 } },
  { id: 'mint-hill', name: 'Mint Hill', slug: 'mint-hill-nc', coordinates: { x: 72, y: 60 } },
  { id: 'pineville', name: 'Pineville', slug: 'pineville-nc', coordinates: { x: 48, y: 78 } },
  { id: 'gastonia', name: 'Gastonia', slug: 'gastonia-nc', coordinates: { x: 18, y: 65 } },
  { id: 'denver', name: 'Denver', slug: 'denver-nc', coordinates: { x: 25, y: 35 } },
  { id: 'mt-holly', name: 'Mt Holly', slug: 'mt-holly-nc', coordinates: { x: 30, y: 45 } },
  { id: 'lake-norman', name: 'Lake Norman', slug: 'lake-norman', coordinates: { x: 35, y: 20 } },
];

export function InteractiveServiceMap() {
  const [selectedArea, setSelectedArea] = useState<ServiceArea | null>(null);
  const [hoveredArea, setHoveredArea] = useState<ServiceArea | null>(null);

  return (
    <section className="section bg-gradient-to-br from-primary via-primary-dark to-[#0f172a] text-white overflow-hidden">
      <div className="container">
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold">Service Area Map</span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We Serve the Greater Charlotte Area
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Click on any location to learn more about our roofing services in your area
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Interactive Map */}
          <motion.div
            className="relative w-full aspect-square max-w-lg mx-auto bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            role="img"
            aria-label="Interactive map of Charlotte area service locations. Use the buttons below to select a location."
          >
            {/* Background Grid - decorative */}
            <div
              className="absolute inset-0 opacity-20"
              aria-hidden="true"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
                backgroundSize: '30px 30px'
              }}
            />

            {/* Map SVG */}
            <div className="absolute inset-0 p-6">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Connecting Lines from Charlotte */}
                <motion.g
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  {serviceAreas.filter(a => !a.isPrimary).map((area) => (
                    <motion.line
                      key={`line-${area.id}`}
                      x1={50}
                      y1={55}
                      x2={area.coordinates.x}
                      y2={area.coordinates.y}
                      stroke="url(#lineGradient)"
                      strokeWidth="0.3"
                      strokeDasharray="2,2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5 }}
                    />
                  ))}
                </motion.g>

                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C62F2F" />
                    <stop offset="100%" stopColor="#1A43AA" />
                  </linearGradient>
                </defs>

                {/* Location Nodes */}
                {serviceAreas.map((area, i) => (
                  <g
                    key={area.id}
                    onClick={() => setSelectedArea(area)}
                    onKeyDown={(e) => e.key === 'Enter' && setSelectedArea(area)}
                    onMouseEnter={() => setHoveredArea(area)}
                    onMouseLeave={() => setHoveredArea(null)}
                    className="cursor-pointer"
                    data-hover="true"
                    role="button"
                    tabIndex={0}
                    aria-label={`Select ${area.name} location`}
                  >
                    {/* Pulse Effect */}
                    <motion.circle
                      cx={area.coordinates.x}
                      cy={area.coordinates.y}
                      r="3"
                      fill="none"
                      stroke={area.isPrimary ? '#C62F2F' : '#1A43AA'}
                      strokeWidth="0.5"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                      transition={{ repeat: Infinity, duration: 2, delay: i * 0.15 }}
                    />

                    {/* Pin Dot */}
                    <motion.circle
                      cx={area.coordinates.x}
                      cy={area.coordinates.y}
                      r={area.isPrimary ? 3 : hoveredArea?.id === area.id ? 2.5 : 2}
                      className={area.isPrimary ? 'fill-accent' : 'fill-primary-light'}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", delay: i * 0.05 }}
                      whileHover={{ scale: 1.5 }}
                    />

                    {/* Label */}
                    <foreignObject
                      x={area.coordinates.x - 20}
                      y={area.coordinates.y + 4}
                      width="40"
                      height="12"
                      className="overflow-visible pointer-events-none"
                    >
                      <div className={`text-[4px] text-center font-bold tracking-wide uppercase transition-all ${
                        area.isPrimary ? 'text-white text-[5px]' :
                        hoveredArea?.id === area.id ? 'text-white' : 'text-gray-400'
                      }`}>
                        {area.name}
                      </div>
                    </foreignObject>
                  </g>
                ))}
              </svg>
            </div>

            {/* Hover Tooltip */}
            <AnimatePresence>
              {hoveredArea && !selectedArea && (
                <motion.div
                  className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-3 rounded-xl border border-white/10"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <p className="text-sm text-white font-semibold">{hoveredArea.name}</p>
                  <p className="text-xs text-gray-400">Click to view services</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Info Panel */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {selectedArea ? (
                <motion.div
                  key={selectedArea.id}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{selectedArea.name}</h3>
                      <p className="text-gray-300">Roofing Services</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">
                    Best Roofing Now provides expert roofing services in {selectedArea.name} and surrounding areas.
                    Our veteran-founded team delivers quality workmanship you can trust.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/locations/${selectedArea.slug}`}
                      className="btn btn-primary"
                    >
                      View {selectedArea.name} Services
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="btn btn-outline border-white text-white hover:bg-white hover:text-primary">
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">Select a Location</h3>
                  <p className="text-gray-300 mb-4">
                    Click on any pin on the map to see our services in that area.
                    We proudly serve Charlotte and over 30 surrounding communities.
                  </p>
                  <div className="grid grid-cols-2 gap-2" role="group" aria-label="Quick select service areas">
                    {serviceAreas.slice(0, 6).map((area) => (
                      <button
                        key={area.id}
                        onClick={() => setSelectedArea(area)}
                        className="text-left px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                        data-hover="true"
                        aria-label={`View roofing services in ${area.name}`}
                      >
                        {area.name}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {selectedArea && (
              <motion.button
                onClick={() => setSelectedArea(null)}
                className="text-sm text-gray-400 hover:text-white transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                &larr; View all locations
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default InteractiveServiceMap;
