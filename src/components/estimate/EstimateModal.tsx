'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { X, MapPin, Loader2, Home, Calculator, CheckCircle, Phone, AlertCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import { RoofEstimate, PlacePrediction, LeadData } from '@/types/estimate';
import { formatCurrency, formatNumber } from '@/lib/estimate/calculations';
import { SITE_CONFIG } from '@/lib/constants';

type ModalStep = 'address' | 'calculating' | 'roofType' | 'steepness' | 'complexity' | 'stories' | 'form' | 'results' | 'success';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Roof type options
const ROOF_TYPES = [
  { id: 'shingles', name: 'Shingles', description: 'Most popular choice' },
  { id: 'metal', name: 'Metal Roofing', description: 'Durable & long-lasting' },
  { id: 'synthetic-cedar', name: 'Synthetic Cedar', description: 'Natural wood look' },
  { id: 'synthetic-clay', name: 'Synthetic Clay', description: 'Mediterranean style' },
  { id: 'synthetic-slate', name: 'Synthetic Slate', description: 'Classic elegance' },
  { id: 'coatings', name: 'Roof Coatings', description: 'Restore existing roof' },
];

// Steepness options
const STEEPNESS_OPTIONS = [
  { id: 'easily-walkable', name: 'Easily Walkable', multiplier: 1.0 },
  { id: 'barely-walkable', name: 'Barely Walkable', multiplier: 1.1 },
  { id: 'getting-steep', name: 'Getting Steep', multiplier: 1.2 },
  { id: 'steep', name: 'Steep', multiplier: 1.35 },
  { id: 'phantom-steep', name: 'Phantom Steep', multiplier: 1.5 },
];

// Complexity options
const COMPLEXITY_OPTIONS = [
  { id: 'simple', name: 'Simple', multiplier: 1.0 },
  { id: 'hip-roof', name: 'Hip Roof', multiplier: 1.1 },
  { id: 'hip-complex', name: 'Hip Roof/Complex', multiplier: 1.2 },
  { id: 'complex', name: 'Complex Roof', multiplier: 1.3 },
  { id: 'castle', name: 'Castle Roof', multiplier: 1.5 },
];

// Stories options
const STORIES_OPTIONS = [
  { id: 'ranch', name: 'Ranch', multiplier: 1.0 },
  { id: 'split-level', name: 'Split Level', multiplier: 1.1 },
  { id: '2-story', name: '2 Story', multiplier: 1.15 },
];

interface Package {
  name: string;
  tier: 'good' | 'better' | 'best' | 'premium';
  description: string;
  warranty: string;
  priceRange: { low: number; high: number };
  features: string[];
}

export default function EstimateModal({ isOpen, onClose }: EstimateModalProps) {
  const [step, setStep] = useState<ModalStep>('address');
  const [address, setAddress] = useState('');
  const [predictions, setPredictions] = useState<PlacePrediction[]>([]);
  const [showPredictions, setShowPredictions] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState('');
  const [addressDetails, setAddressDetails] = useState<{
    city: string;
    state: string;
    postalCode: string;
    lat: number;
    lng: number;
  } | null>(null);
  const [estimate, setEstimate] = useState<RoofEstimate | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Question answers
  const [roofType, setRoofType] = useState<string>('');
  const [steepness, setSteepness] = useState<string>('');
  const [complexity, setComplexity] = useState<string>('');
  const [stories, setStories] = useState<string>('');

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    tcpaConsent: false,
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep('address');
        setAddress('');
        setPredictions([]);
        setSelectedAddress('');
        setAddressDetails(null);
        setEstimate(null);
        setError(null);
        setRoofType('');
        setSteepness('');
        setComplexity('');
        setStories('');
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          tcpaConsent: false,
        });
        setFormErrors({});
      }, 300);
    }
  }, [isOpen]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && step === 'address') {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, step]);

  // Fetch address predictions
  const fetchPredictions = useCallback(async (input: string) => {
    if (input.length < 3) {
      setPredictions([]);
      return;
    }

    try {
      const response = await fetch(`/api/estimate/places-autocomplete?input=${encodeURIComponent(input)}`);
      const data = await response.json();

      if (data.predictions) {
        setPredictions(data.predictions);
        setShowPredictions(true);
      }
    } catch {
      console.error('Failed to fetch predictions');
    }
  }, []);

  // Debounced address input handler
  const handleAddressChange = (value: string) => {
    setAddress(value);
    setError(null);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      fetchPredictions(value);
    }, 300);
  };

  // Handle prediction selection
  const handleSelectPrediction = async (prediction: PlacePrediction) => {
    setAddress(prediction.description);
    setSelectedAddress(prediction.description);
    setShowPredictions(false);
    setPredictions([]);

    try {
      const response = await fetch(`/api/estimate/places-details?place_id=${prediction.place_id}`);
      const data = await response.json();

      if (data.lat && data.lng) {
        setAddressDetails({
          city: data.city || '',
          state: data.state || '',
          postalCode: data.postalCode || '',
          lat: data.lat,
          lng: data.lng,
        });
      }
    } catch {
      console.error('Failed to get place details');
    }
  };

  // Get roof estimate
  const handleGetEstimate = async () => {
    if (!selectedAddress) {
      setError('Please select an address from the suggestions');
      return;
    }

    setStep('calculating');
    setError(null);
    setIsLoading(true);

    try {
      let lat = addressDetails?.lat;
      let lng = addressDetails?.lng;

      if (!lat || !lng) {
        const geocodeResponse = await fetch(`/api/estimate/geocode?address=${encodeURIComponent(selectedAddress)}`);
        const geocodeData = await geocodeResponse.json();

        if (geocodeData.error) {
          throw new Error(geocodeData.error);
        }

        lat = geocodeData.lat;
        lng = geocodeData.lng;
        setAddressDetails({
          city: geocodeData.city || addressDetails?.city || '',
          state: geocodeData.state || addressDetails?.state || '',
          postalCode: geocodeData.postalCode || addressDetails?.postalCode || '',
          lat: geocodeData.lat,
          lng: geocodeData.lng,
        });
      }

      const roofResponse = await fetch(
        `/api/estimate/roof-data?lat=${lat}&lng=${lng}&address=${encodeURIComponent(selectedAddress)}`
      );
      const roofData = await roofResponse.json();

      if (roofData.error) {
        throw new Error(roofData.error);
      }

      setEstimate(roofData.estimate);
      setStep('roofType'); // Go to questions instead of results
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to get estimate. Please try again.');
      setStep('address');
    } finally {
      setIsLoading(false);
    }
  };

  // Calculate packages based on selections
  const calculatePackages = (): Package[] => {
    if (!estimate) return [];

    const sqFt = estimate.roofSqFt;
    const squares = estimate.squares;
    const steepMult = STEEPNESS_OPTIONS.find(s => s.id === steepness)?.multiplier || 1.0;
    const complexMult = COMPLEXITY_OPTIONS.find(c => c.id === complexity)?.multiplier || 1.0;
    const storyMult = STORIES_OPTIONS.find(s => s.id === stories)?.multiplier || 1.0;
    const totalMult = steepMult * complexMult * storyMult;

    const packages: Package[] = [];

    if (roofType === 'shingles') {
      // Good - Generic Arch
      packages.push({
        name: 'Architectural Shingles',
        tier: 'good',
        description: 'Quality architectural shingles with standard installation',
        warranty: 'Lifetime prorated warranty, 10 year full coverage',
        priceRange: {
          low: Math.round(sqFt * 3.6 * totalMult),
          high: Math.round(sqFt * 4.5 * totalMult),
        },
        features: ['Architectural shingles', 'Standard underlayment', 'Ice & water shield at valleys', '10-year workmanship warranty'],
      });

      // Better - Landmark
      packages.push({
        name: 'CertainTeed Landmark',
        tier: 'better',
        description: 'Complete CertainTeed roofing system with enhanced protection',
        warranty: '50-year all-inclusive warranty',
        priceRange: {
          low: Math.round(sqFt * 4.5 * totalMult),
          high: Math.round(sqFt * 5.4 * totalMult),
        },
        features: ['CertainTeed Landmark shingles', 'DiamondDeck underlayment', 'WinterGuard ice & water', 'Intake & exhaust ventilation', '50-year SureStart protection'],
      });

      // Best - Landmark Pro or Solaris (Class 3)
      packages.push({
        name: 'Landmark Pro / Solaris',
        tier: 'best',
        description: 'Premium Class 3 impact-resistant shingles',
        warranty: '50-year warranty with impact coverage',
        priceRange: {
          low: Math.round(sqFt * 5.4 * totalMult),
          high: Math.round(sqFt * 5.85 * totalMult),
        },
        features: ['Class 3 impact resistance', 'Insurance discount eligible', 'CertainTeed full system', 'Enhanced curb appeal', 'Maximum protection'],
      });

      // Premium - Designer Class 4 (only for larger roofs)
      if (squares >= 50) {
        packages.push({
          name: 'Belmont / Presidential',
          tier: 'premium',
          description: 'Designer Class 4 impact-resistant shingles - recommended for your roof size',
          warranty: 'Lifetime warranty with Class 4 impact rating',
          priceRange: {
            low: Math.round(sqFt * 5.85 * totalMult),
            high: Math.round(sqFt * 7.65 * totalMult),
          },
          features: ['Class 4 impact resistance', 'Maximum insurance discounts', 'Designer aesthetics', 'Ultimate durability', 'Best value for large roofs'],
        });
      }
    } else if (roofType === 'metal') {
      // Panels
      packages.push({
        name: 'Metal Panels',
        tier: 'good',
        description: 'Durable metal panel roofing system',
        warranty: '40-year warranty',
        priceRange: {
          low: Math.round(sqFt * 7.2 * totalMult),
          high: Math.round(sqFt * 9.0 * totalMult),
        },
        features: ['26-gauge metal panels', 'Factory finish', 'Energy efficient', 'Low maintenance', '40-year paint warranty'],
      });

      // Standing Seam
      packages.push({
        name: 'Standing Seam',
        tier: 'better',
        description: 'Premium concealed fastener metal roofing',
        warranty: '50-year warranty',
        priceRange: {
          low: Math.round(sqFt * 9.0 * totalMult),
          high: Math.round(sqFt * 10.8 * totalMult),
        },
        features: ['Concealed fasteners', '24-gauge steel', 'Kynar 500 finish', 'No exposed screws', 'Superior weather resistance'],
      });

      // Metal Shingles
      packages.push({
        name: 'Metal Shingles',
        tier: 'best',
        description: 'Premium metal shingles with classic aesthetics',
        warranty: 'Lifetime warranty',
        priceRange: {
          low: Math.round(sqFt * 10.8 * totalMult),
          high: Math.round(sqFt * 12.6 * totalMult),
        },
        features: ['Stone-coated or painted finish', 'Shingle aesthetics', 'Impact resistant', 'Wind resistant to 120mph', 'Lifetime transferable warranty'],
      });
    } else if (roofType === 'coatings') {
      packages.push({
        name: 'Silicone Roof Coating',
        tier: 'good',
        description: 'Restore and extend the life of your existing roof',
        warranty: '10-15 year warranty',
        priceRange: {
          low: Math.round(sqFt * 2.25 * totalMult),
          high: Math.round(sqFt * 3.15 * totalMult),
        },
        features: ['Seamless application', 'UV resistant', 'Energy efficient', 'Extends roof life 15+ years', 'No tear-off required'],
      });
    } else {
      // Synthetic options (Cedar, Clay, Slate)
      const syntheticName = roofType === 'synthetic-cedar' ? 'Synthetic Cedar Shake' :
                          roofType === 'synthetic-clay' ? 'Synthetic Clay Tile' : 'Synthetic Slate';

      packages.push({
        name: syntheticName,
        tier: 'good',
        description: `Beautiful ${syntheticName.toLowerCase()} with modern durability`,
        warranty: '50-year warranty',
        priceRange: {
          low: Math.round(sqFt * 9.0 * totalMult),
          high: Math.round(sqFt * 11.7 * totalMult),
        },
        features: ['Authentic appearance', 'Lightweight', 'Impact resistant', 'Fire resistant', 'Low maintenance'],
      });

      packages.push({
        name: `Premium ${syntheticName}`,
        tier: 'better',
        description: 'Enhanced synthetic roofing with premium features',
        warranty: 'Lifetime warranty',
        priceRange: {
          low: Math.round(sqFt * 11.7 * totalMult),
          high: Math.round(sqFt * 14.4 * totalMult),
        },
        features: ['Multi-width blend', 'Enhanced color depth', 'Class 4 impact rating', 'Transferable warranty', 'Complete system installation'],
      });
    }

    return packages;
  };

  // Validate form
  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.phone.trim()) errors.phone = 'Phone is required';
    else if (formData.phone.replace(/\D/g, '').length < 10) errors.phone = 'Invalid phone number';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Invalid email';
    if (!formData.tcpaConsent) errors.tcpaConsent = 'Consent is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Submit lead and show results
  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm() || !estimate) return;

    setIsSubmitting(true);

    try {
      const packages = calculatePackages();
      const leadData: LeadData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        address: selectedAddress,
        city: addressDetails?.city,
        state: addressDetails?.state,
        postalCode: addressDetails?.postalCode,
        tcpaConsent: formData.tcpaConsent,
        consentTimestamp: new Date().toISOString(),
      };

      // Add question answers to the estimate for submission
      const enhancedEstimate = {
        ...estimate,
        roofType,
        steepness,
        complexity,
        stories,
        packages: packages.map(p => ({ name: p.name, tier: p.tier, priceRange: p.priceRange })),
      };

      const response = await fetch('/api/estimate/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lead: leadData, estimate: enhancedEstimate }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setStep('results'); // Now show results after form submission
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Format phone as user types
  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 3) return cleaned;
    if (cleaned.length <= 6) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
  };

  // Navigation helpers
  const goBack = () => {
    const stepOrder: ModalStep[] = ['address', 'calculating', 'roofType', 'steepness', 'complexity', 'stories', 'form', 'results', 'success'];
    const currentIndex = stepOrder.indexOf(step);
    if (currentIndex > 0) {
      // Skip calculating when going back
      const prevStep = stepOrder[currentIndex - 1] === 'calculating' ? 'address' : stepOrder[currentIndex - 1];
      setStep(prevStep);
    }
  };

  const goNext = () => {
    if (step === 'roofType' && roofType) setStep('steepness');
    else if (step === 'steepness' && steepness) setStep('complexity');
    else if (step === 'complexity' && complexity) setStep('stories');
    else if (step === 'stories' && stories) setStep('form');
  };

  if (!isOpen) return null;

  const packages = calculatePackages();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop - no click to close, must use X button */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition z-10 flex flex-col items-center gap-0.5"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" aria-hidden="true" />
          <span className="text-[10px] font-medium">close</span>
        </button>

        {/* Address Step */}
        {step === 'address' && (
          <div className="p-6 md:p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Get Your Free Roof Estimate
              </h2>
              <p className="text-gray-600">
                Enter your address to get started
              </p>
            </div>

            <div className="relative">
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={address}
                  onChange={(e) => handleAddressChange(e.target.value)}
                  onFocus={() => predictions.length > 0 && setShowPredictions(true)}
                  placeholder="Enter your property address..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary text-lg"
                />
              </div>

              {showPredictions && predictions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-20 overflow-hidden">
                  {predictions.map((prediction) => (
                    <button
                      key={prediction.place_id}
                      onClick={() => handleSelectPrediction(prediction)}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-start gap-3 border-b border-gray-100 last:border-0"
                      aria-label={prediction.description}
                    >
                      <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <div className="font-medium text-gray-900">
                          {prediction.structured_formatting?.main_text || prediction.description}
                        </div>
                        {prediction.structured_formatting?.secondary_text && (
                          <div className="text-sm text-gray-500">
                            {prediction.structured_formatting.secondary_text}
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {error && (
              <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg flex items-center gap-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <button
              onClick={handleGetEstimate}
              disabled={!selectedAddress}
              className="w-full mt-6 py-4 bg-accent hover:bg-accent-dark disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold rounded-xl transition text-lg"
            >
              Continue
            </button>

            <p className="mt-4 text-center text-sm text-gray-500">
              We&apos;ll analyze your roof using satellite imagery
            </p>
          </div>
        )}

        {/* Calculating Step */}
        {step === 'calculating' && (
          <div className="p-8 text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-10 h-10 text-primary animate-pulse" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Analyzing Your Roof
            </h2>
            <p className="text-gray-600 mb-6">
              {selectedAddress}
            </p>
            <div className="flex items-center justify-center gap-3">
              <Loader2 className="w-6 h-6 text-primary animate-spin" />
              <span className="text-gray-600">Processing satellite data...</span>
            </div>
          </div>
        )}

        {/* Roof Type Question */}
        {step === 'roofType' && (
          <div className="p-6 md:p-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">1</span>
                <span>of 4</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                What type of roof are you interested in?
              </h2>
              <p className="text-gray-600 text-sm">Select the material you&apos;re considering</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {ROOF_TYPES.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setRoofType(type.id)}
                  className={`p-4 rounded-xl border-2 text-left transition ${
                    roofType === type.id
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-semibold text-gray-900">{type.name}</div>
                  <div className="text-xs text-gray-500">{type.description}</div>
                </button>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={goBack}
                className="flex-1 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition flex items-center justify-center gap-2"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                Back
              </button>
              <button
                onClick={goNext}
                disabled={!roofType}
                className="flex-1 py-3 bg-primary hover:bg-primary-dark disabled:bg-gray-300 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2"
              >
                Next
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}

        {/* Steepness Question */}
        {step === 'steepness' && (
          <div className="p-6 md:p-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">2</span>
                <span>of 4</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                How steep is your roof?
              </h2>
              <p className="text-gray-600 text-sm">Select the pitch that best matches your roof</p>
            </div>

            {/* Pitch diagrams */}
            <div className="grid grid-cols-5 gap-2 mb-4">
              {[
                { id: 'easily-walkable', angle: 15, label: 'EASILY\nWALKABLE' },
                { id: 'barely-walkable', angle: 25, label: 'BARELY\nWALKABLE' },
                { id: 'getting-steep', angle: 35, label: 'GETTING\nSTEEP' },
                { id: 'steep', angle: 45, label: 'STEEP' },
                { id: 'phantom-steep', angle: 55, label: 'PHANTOM\nSTEEP' },
              ].map((pitch) => (
                <button
                  key={pitch.id}
                  onClick={() => setSteepness(pitch.id)}
                  className={`p-2 rounded-lg border-2 transition ${
                    steepness === pitch.id
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="aspect-square flex items-end justify-center mb-1">
                    <svg viewBox="0 0 60 50" className="w-full h-full">
                      <polygon
                        points={`5,45 55,45 30,${45 - Math.tan(pitch.angle * Math.PI / 180) * 25}`}
                        fill="none"
                        stroke={steepness === pitch.id ? '#1A43AA' : '#9CA3AF'}
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className="text-[9px] text-center text-gray-600 whitespace-pre-line leading-tight font-medium">
                    {pitch.label}
                  </div>
                </button>
              ))}
            </div>

            {/* Radio options */}
            <div className="space-y-2">
              {STEEPNESS_OPTIONS.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSteepness(option.id)}
                  className={`w-full p-3 rounded-lg border-2 text-left transition flex items-center gap-3 ${
                    steepness === option.id
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    steepness === option.id ? 'border-primary' : 'border-gray-300'
                  }`}>
                    {steepness === option.id && <div className="w-2 h-2 rounded-full bg-primary" />}
                  </div>
                  <span className="font-medium text-gray-900 text-sm">{option.name}</span>
                </button>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={goBack}
                className="flex-1 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition flex items-center justify-center gap-2"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                Back
              </button>
              <button
                onClick={goNext}
                disabled={!steepness}
                className="flex-1 py-3 bg-primary hover:bg-primary-dark disabled:bg-gray-300 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2"
              >
                Next
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}

        {/* Complexity Question */}
        {step === 'complexity' && (
          <div className="p-6 md:p-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">3</span>
                <span>of 4</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                What style roof looks most like your home?
              </h2>
              <p className="text-gray-600 text-sm">Select the closest match</p>
            </div>

            {/* Roof style diagrams - top row */}
            <div className="grid grid-cols-3 gap-2 mb-2">
              {/* Simple */}
              <button
                onClick={() => setComplexity('simple')}
                className={`p-3 rounded-lg border-2 transition ${
                  complexity === 'simple'
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="aspect-square flex items-center justify-center mb-1">
                  <svg viewBox="0 0 80 60" className="w-full h-full">
                    {/* Simple gable roof */}
                    <polygon points="10,45 70,45 40,15" fill="#D4A574" stroke="#8B7355" strokeWidth="1.5"/>
                    <rect x="20" y="45" width="40" height="10" fill="#E8DCD0" stroke="#8B7355" strokeWidth="1"/>
                    <rect x="35" y="48" width="10" height="7" fill="#A0522D" stroke="#8B7355" strokeWidth="0.5"/>
                  </svg>
                </div>
                <div className="text-[10px] text-center text-gray-700 font-semibold">SIMPLE</div>
              </button>

              {/* Hip Roof */}
              <button
                onClick={() => setComplexity('hip-roof')}
                className={`p-3 rounded-lg border-2 transition ${
                  complexity === 'hip-roof'
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="aspect-square flex items-center justify-center mb-1">
                  <svg viewBox="0 0 80 60" className="w-full h-full">
                    {/* Hip roof - 4 sides slope */}
                    <polygon points="15,45 65,45 55,25 25,25" fill="#D4A574" stroke="#8B7355" strokeWidth="1.5"/>
                    <polygon points="25,25 55,25 40,12" fill="#C19A6B" stroke="#8B7355" strokeWidth="1.5"/>
                    <rect x="20" y="45" width="40" height="10" fill="#E8DCD0" stroke="#8B7355" strokeWidth="1"/>
                  </svg>
                </div>
                <div className="text-[10px] text-center text-gray-700 font-semibold">HIP ROOF</div>
              </button>

              {/* Hip Roof/Complex */}
              <button
                onClick={() => setComplexity('hip-complex')}
                className={`p-3 rounded-lg border-2 transition ${
                  complexity === 'hip-complex'
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="aspect-square flex items-center justify-center mb-1">
                  <svg viewBox="0 0 80 60" className="w-full h-full">
                    {/* Hip with extension */}
                    <polygon points="10,45 50,45 40,25 20,25" fill="#D4A574" stroke="#8B7355" strokeWidth="1.5"/>
                    <polygon points="20,25 40,25 30,15" fill="#C19A6B" stroke="#8B7355" strokeWidth="1.5"/>
                    <polygon points="50,45 70,45 60,30 50,30" fill="#D4A574" stroke="#8B7355" strokeWidth="1.5"/>
                    <polygon points="50,30 60,30 55,22" fill="#C19A6B" stroke="#8B7355" strokeWidth="1.5"/>
                    <rect x="15" y="45" width="55" height="10" fill="#E8DCD0" stroke="#8B7355" strokeWidth="1"/>
                  </svg>
                </div>
                <div className="text-[10px] text-center text-gray-700 font-semibold">HIP/COMPLEX</div>
              </button>
            </div>

            {/* Bottom row */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {/* Complex Roof */}
              <button
                onClick={() => setComplexity('complex')}
                className={`p-3 rounded-lg border-2 transition ${
                  complexity === 'complex'
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="aspect-[4/3] flex items-center justify-center mb-1">
                  <svg viewBox="0 0 80 60" className="w-full h-full">
                    {/* Complex multi-section roof */}
                    <polygon points="5,50 35,50 30,30 10,30" fill="#D4A574" stroke="#8B7355" strokeWidth="1.5"/>
                    <polygon points="10,30 30,30 20,18" fill="#C19A6B" stroke="#8B7355" strokeWidth="1.5"/>
                    <polygon points="35,50 75,50 65,25 45,25" fill="#D4A574" stroke="#8B7355" strokeWidth="1.5"/>
                    <polygon points="45,25 65,25 55,12" fill="#C19A6B" stroke="#8B7355" strokeWidth="1.5"/>
                    <polygon points="25,40 55,40 50,28 30,28" fill="#B8956B" stroke="#8B7355" strokeWidth="1.5"/>
                    <rect x="5" y="50" width="70" height="6" fill="#E8DCD0" stroke="#8B7355" strokeWidth="1"/>
                  </svg>
                </div>
                <div className="text-[10px] text-center text-gray-700 font-semibold">COMPLEX ROOF</div>
              </button>

              {/* Castle Roof */}
              <button
                onClick={() => setComplexity('castle')}
                className={`p-3 rounded-lg border-2 transition ${
                  complexity === 'castle'
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="aspect-[4/3] flex items-center justify-center mb-1">
                  <svg viewBox="0 0 80 60" className="w-full h-full">
                    {/* Very complex castle-style roof */}
                    <polygon points="20,50 40,50 38,35 22,35" fill="#D4A574" stroke="#8B7355" strokeWidth="1"/>
                    <polygon points="22,35 38,35 30,22" fill="#C19A6B" stroke="#8B7355" strokeWidth="1"/>
                    <polygon points="40,50 60,50 58,35 42,35" fill="#D4A574" stroke="#8B7355" strokeWidth="1"/>
                    <polygon points="42,35 58,35 50,22" fill="#C19A6B" stroke="#8B7355" strokeWidth="1"/>
                    <polygon points="5,50 25,50 22,38 8,38" fill="#D4A574" stroke="#8B7355" strokeWidth="1"/>
                    <polygon points="8,38 22,38 15,28" fill="#C19A6B" stroke="#8B7355" strokeWidth="1"/>
                    <polygon points="55,50 75,50 72,38 58,38" fill="#D4A574" stroke="#8B7355" strokeWidth="1"/>
                    <polygon points="58,38 72,38 65,28" fill="#C19A6B" stroke="#8B7355" strokeWidth="1"/>
                    <polygon points="30,35 50,35 40,15" fill="#B8956B" stroke="#8B7355" strokeWidth="1.5"/>
                    <rect x="5" y="50" width="70" height="6" fill="#E8DCD0" stroke="#8B7355" strokeWidth="1"/>
                  </svg>
                </div>
                <div className="text-[10px] text-center text-gray-700 font-semibold">CASTLE ROOF</div>
              </button>
            </div>

            {/* Radio options */}
            <div className="space-y-2">
              {COMPLEXITY_OPTIONS.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setComplexity(option.id)}
                  className={`w-full p-3 rounded-lg border-2 text-left transition flex items-center gap-3 ${
                    complexity === option.id
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    complexity === option.id ? 'border-primary' : 'border-gray-300'
                  }`}>
                    {complexity === option.id && <div className="w-2 h-2 rounded-full bg-primary" />}
                  </div>
                  <span className="font-medium text-gray-900 text-sm">{option.name}</span>
                </button>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={goBack}
                className="flex-1 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition flex items-center justify-center gap-2"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                Back
              </button>
              <button
                onClick={goNext}
                disabled={!complexity}
                className="flex-1 py-3 bg-primary hover:bg-primary-dark disabled:bg-gray-300 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2"
              >
                Next
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}

        {/* Stories Question */}
        {step === 'stories' && (
          <div className="p-6 md:p-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">4</span>
                <span>of 4</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                How many stories is your home?
              </h2>
              <p className="text-gray-600 text-sm">This affects equipment and safety requirements</p>
            </div>

            <div className="space-y-3">
              {STORIES_OPTIONS.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setStories(option.id)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition flex items-center gap-4 ${
                    stories === option.id
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    stories === option.id ? 'border-primary' : 'border-gray-300'
                  }`}>
                    {stories === option.id && <div className="w-3 h-3 rounded-full bg-primary" />}
                  </div>
                  <span className="font-medium text-gray-900">{option.name}</span>
                </button>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={goBack}
                className="flex-1 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition flex items-center justify-center gap-2"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                Back
              </button>
              <button
                onClick={goNext}
                disabled={!stories}
                className="flex-1 py-3 bg-primary hover:bg-primary-dark disabled:bg-gray-300 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2"
              >
                Next
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}

        {/* Contact Form Step */}
        {step === 'form' && (
          <div className="p-6 md:p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Almost Done!
              </h2>
              <p className="text-gray-600">
                Enter your contact info to see your personalized estimate
              </p>
            </div>

            {estimate && (
              <div className="bg-primary/5 rounded-xl p-4 mb-6">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-lg font-bold text-primary">{formatNumber(estimate.roofSqFt)}</div>
                    <div className="text-xs text-gray-500">Sq Ft</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-primary">{estimate.squares}</div>
                    <div className="text-xs text-gray-500">Squares</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-primary">{estimate.pitchRatio}</div>
                    <div className="text-xs text-gray-500">Pitch</div>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmitLead} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                      formErrors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {formErrors.firstName && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                      formErrors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {formErrors.lastName && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
                  placeholder="(704) 555-1234"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                    formErrors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {formErrors.phone && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                    formErrors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                )}
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.tcpaConsent}
                    onChange={(e) => setFormData({ ...formData, tcpaConsent: e.target.checked })}
                    className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <span className="text-xs text-gray-600">
                    By checking this box, I consent to receive calls and texts from Best Roofing Now
                    at the phone number provided, including via automated technology.
                    Consent is not a condition of purchase. Message and data rates may apply.
                  </span>
                </label>
                {formErrors.tcpaConsent && (
                  <p className="text-red-500 text-xs mt-2">{formErrors.tcpaConsent}</p>
                )}
              </div>

              {error && (
                <div className="p-3 bg-red-50 text-red-700 rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">{error}</span>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={goBack}
                  className="flex-1 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition flex items-center justify-center gap-2"
                >
                  <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 bg-accent hover:bg-accent-dark disabled:bg-gray-400 text-white font-bold rounded-xl transition flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                      Processing...
                    </>
                  ) : (
                    'See My Estimate'
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Results Step */}
        {step === 'results' && estimate && (
          <div className="p-6 md:p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                Your Estimate is Ready!
              </h2>
              <p className="text-gray-600 text-sm">{selectedAddress}</p>
            </div>

            {/* Roof Stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-gray-900">{formatNumber(estimate.roofSqFt)}</div>
                <div className="text-xs text-gray-500">Sq Ft</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-gray-900">{estimate.squares}</div>
                <div className="text-xs text-gray-500">Squares</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-gray-900">{estimate.pitchRatio}</div>
                <div className="text-xs text-gray-500">Pitch</div>
              </div>
            </div>

            {/* Package Options */}
            <h3 className="font-bold text-gray-900 mb-3">Your Package Options</h3>
            <div className="space-y-4 mb-6">
              {packages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`border-2 rounded-xl p-4 ${
                    pkg.tier === 'best' || pkg.tier === 'premium'
                      ? 'border-accent bg-accent/5'
                      : pkg.tier === 'better'
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900">{pkg.name}</span>
                        {(pkg.tier === 'best' || pkg.tier === 'premium') && (
                          <span className="bg-accent text-white text-xs px-2 py-0.5 rounded-full">
                            {pkg.tier === 'premium' ? 'Recommended' : 'Popular'}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-gray-500">{pkg.warranty}</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{pkg.description}</p>
                  <div className="text-xl font-bold text-primary mb-2">
                    {formatCurrency(pkg.priceRange.low)} - {formatCurrency(pkg.priceRange.high)}
                  </div>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {pkg.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-500 text-center mb-4">
              *Estimates based on satellite data and your selections. Final pricing requires an on-site inspection.
            </p>

            <div className="bg-primary/5 rounded-xl p-4 mb-4">
              <p className="text-sm text-gray-600 mb-2 text-center">A roofing specialist will contact you shortly!</p>
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="flex items-center justify-center gap-2 text-xl font-bold text-primary hover:text-primary-dark"
              >
                <Phone className="w-5 h-5" />
                {SITE_CONFIG.phone}
              </a>
            </div>

            <button
              onClick={() => setStep('success')}
              className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition"
            >
              Done
            </button>
          </div>
        )}

        {/* Success Step */}
        {step === 'success' && (
          <div className="p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Thank You!
            </h2>
            <p className="text-gray-600 mb-6">
              A roofing specialist will contact you within 24 hours to discuss your project and schedule your free inspection.
            </p>

            <div className="bg-primary/5 rounded-xl p-4 mb-6">
              <p className="text-sm text-gray-600 mb-2">Need immediate assistance?</p>
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="inline-flex items-center gap-2 text-xl font-bold text-primary hover:text-primary-dark"
              >
                <Phone className="w-5 h-5" />
                {SITE_CONFIG.phone}
              </a>
            </div>

            <button
              onClick={onClose}
              className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
