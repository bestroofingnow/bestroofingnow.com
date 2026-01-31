'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { CheckCircle, Loader2, MapPin, ArrowRight, Shield, Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { trackLead, trackFormSubmission } from '@/components/analytics';
import { Prediction } from '@/types/estimate';

interface FormData {
  address: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  tcpaConsent: boolean;
  // Honeypot
  website: string;
}

interface FormErrors {
  address?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  tcpaConsent?: string;
}

interface UTMParams {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
}

export default function LandingForm() {
  const [formData, setFormData] = useState<FormData>({
    address: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    tcpaConsent: false,
    website: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [showPredictions, setShowPredictions] = useState(false);
  const [utmParams, setUtmParams] = useState<UTMParams>({
    utmSource: '',
    utmMedium: '',
    utmCampaign: '',
    utmTerm: '',
    utmContent: '',
  });
  const [addressDetails, setAddressDetails] = useState<{
    city: string;
    state: string;
    postalCode: string;
  }>({ city: '', state: '', postalCode: '' });

  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const predictionsRef = useRef<HTMLDivElement>(null);

  // Capture UTM params on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmParams({
      utmSource: params.get('utm_source') || '',
      utmMedium: params.get('utm_medium') || '',
      utmCampaign: params.get('utm_campaign') || '',
      utmTerm: params.get('utm_term') || '',
      utmContent: params.get('utm_content') || '',
    });
  }, []);

  // Close predictions on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (predictionsRef.current && !predictionsRef.current.contains(e.target as Node)) {
        setShowPredictions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Format phone number as (XXX) XXX-XXXX
  const formatPhone = (value: string): string => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const validateField = useCallback((name: string, value: string | boolean): string | undefined => {
    switch (name) {
      case 'firstName':
        if (!value || (typeof value === 'string' && value.trim().length < 2)) return 'First name is required';
        break;
      case 'lastName':
        if (!value || (typeof value === 'string' && value.trim().length < 1)) return 'Last name is required';
        break;
      case 'phone': {
        const digits = typeof value === 'string' ? value.replace(/\D/g, '') : '';
        if (digits.length < 10) return 'Valid 10-digit phone number required';
        break;
      }
      case 'email':
        if (!value || (typeof value === 'string' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)))
          return 'Valid email address required';
        break;
      case 'tcpaConsent':
        if (!value) return 'Consent is required to proceed';
        break;
    }
    return undefined;
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : name === 'phone' ? formatPhone(value) : value;

    setFormData((prev) => ({ ...prev, [name]: newValue }));

    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    setSubmitError('');

    // Address autocomplete
    if (name === 'address' && typeof newValue === 'string' && newValue.length >= 3) {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => fetchPredictions(newValue), 300);
    } else if (name === 'address') {
      setPredictions([]);
      setShowPredictions(false);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, type === 'checkbox' ? checked : value);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const fetchPredictions = async (input: string) => {
    try {
      const res = await fetch(`/api/estimate/places-autocomplete?input=${encodeURIComponent(input)}`);
      if (res.ok) {
        const data = await res.json();
        setPredictions(data.predictions || []);
        setShowPredictions(true);
      }
    } catch {
      // Silently fail
    }
  };

  const selectPrediction = async (prediction: Prediction) => {
    setFormData((prev) => ({ ...prev, address: prediction.description }));
    setPredictions([]);
    setShowPredictions(false);

    // Fetch place details for city/state/zip
    try {
      const res = await fetch(`/api/estimate/places-details?placeId=${prediction.place_id}`);
      if (res.ok) {
        const data = await res.json();
        if (data.details) {
          setAddressDetails({
            city: data.details.city || '',
            state: data.details.state || '',
            postalCode: data.details.postalCode || '',
          });
        }
      }
    } catch {
      // Silently fail
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.website) return;

    // Validate all fields
    const newErrors: FormErrors = {};
    const fieldsToValidate = ['firstName', 'lastName', 'phone', 'email', 'tcpaConsent'] as const;
    let hasErrors = false;

    for (const field of fieldsToValidate) {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        hasErrors = true;
      }
    }

    if (hasErrors) {
      setErrors(newErrors);
      setTouched({ firstName: true, lastName: true, phone: true, email: true, tcpaConsent: true });
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const res = await fetch('/api/estimate/landing-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          phone: formData.phone,
          email: formData.email.trim(),
          address: formData.address,
          city: addressDetails.city,
          state: addressDetails.state,
          postalCode: addressDetails.postalCode,
          tcpaConsent: formData.tcpaConsent,
          consentTimestamp: new Date().toISOString(),
          landingPage: window.location.pathname,
          ...utmParams,
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
        trackLead('ad-landing-page');
        trackFormSubmission('landing-free-inspection');
      } else {
        const data = await res.json();
        setSubmitError(data.error || 'Something went wrong. Please try again or call us directly.');
      }
    } catch {
      setSubmitError(`Something went wrong. Please call us at ${SITE_CONFIG.phone}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success state
  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-dark mb-2">You&apos;re All Set!</h3>
        <p className="text-gray mb-4">
          We&apos;ve received your request and are already analyzing your roof. A certified roofing specialist
          will call you within <strong>2 hours</strong> during business hours.
        </p>
        <div className="bg-light rounded-lg p-4 mb-6">
          <p className="text-sm text-gray mb-1">In the meantime, save our number:</p>
          <a
            href={`tel:${SITE_CONFIG.phoneClean}`}
            className="text-xl font-bold text-primary hover:text-accent transition-colors"
          >
            <Phone className="w-5 h-5 inline mr-2" />
            {SITE_CONFIG.phone}
          </a>
        </div>
        <div className="flex items-center justify-center gap-4 text-sm text-gray">
          <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-primary" /> BBB A+ Rated</span>
          <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-primary" /> Veteran-Owned</span>
        </div>
      </div>
    );
  }

  const inputClasses = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-lg border outline-none transition text-base ${
      touched[field] && errors[field]
        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
        : 'border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20'
    }`;

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Form header */}
      <div className="bg-primary px-6 py-4 text-center">
        <h2 className="text-white text-xl font-bold">Get Your Free Roof Report</h2>
        <p className="text-white/80 text-sm mt-1">Satellite analysis + storm damage check + cost estimate</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-4" noValidate>
        {/* Address with autocomplete */}
        <div className="relative" ref={predictionsRef}>
          <label htmlFor="address" className="block text-sm font-medium text-dark mb-1.5">
            Property Address
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Enter your home address"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 text-base"
            />
          </div>
          {showPredictions && predictions.length > 0 && (
            <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
              {predictions.map((p) => (
                <button
                  key={p.place_id}
                  type="button"
                  onClick={() => selectPrediction(p)}
                  className="w-full px-4 py-3 text-left hover:bg-light transition text-sm border-b border-gray-100 last:border-0"
                >
                  <span className="font-medium">{p.main_text}</span>
                  <span className="text-gray ml-1">{p.secondary_text}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Name row */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-dark mb-1.5">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              autoComplete="given-name"
              value={formData.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="James"
              className={inputClasses('firstName')}
            />
            {touched.firstName && errors.firstName && (
              <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-dark mb-1.5">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              autoComplete="family-name"
              value={formData.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Turner"
              className={inputClasses('lastName')}
            />
            {touched.lastName && errors.lastName && (
              <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            inputMode="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="(704) 555-0123"
            className={inputClasses('phone')}
          />
          {touched.phone && errors.phone && (
            <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="you@example.com"
            className={inputClasses('email')}
          />
          {touched.email && errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Honeypot - hidden from users */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* TCPA Consent */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="tcpaConsent"
            name="tcpaConsent"
            checked={formData.tcpaConsent}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-1 h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
          />
          <label htmlFor="tcpaConsent" className="text-xs text-gray leading-tight">
            I agree to receive calls and texts from Best Roofing Now at the phone number provided. Consent is not a condition of purchase. Message and data rates may apply.
          </label>
        </div>
        {touched.tcpaConsent && errors.tcpaConsent && (
          <p className="text-xs text-red-600 -mt-2">{errors.tcpaConsent}</p>
        )}

        {/* Submit error */}
        {submitError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
            {submitError}
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-4 px-6 rounded-lg text-lg transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Get My Free Roof Report
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>

        {/* Trust signals below button */}
        <div className="flex items-center justify-center gap-4 text-xs text-gray pt-1">
          <span className="flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5 text-green-600" /> 100% Free
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5 text-green-600" /> No Obligation
          </span>
          <span className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-primary" /> BBB A+
          </span>
        </div>
      </form>
    </div>
  );
}
