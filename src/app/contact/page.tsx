'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
  Star,
  Shield
} from 'lucide-react';
import { SITE_CONFIG, EXTERNAL_RESOURCES } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { FinancingBanner } from '@/components/ui/FinancingBanner';

// Schema markup for Contact page
const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Best Roofing Now',
  description: 'Contact Best Roofing Now for free roof inspections, estimates, and 24/7 emergency roofing services in Charlotte NC and surrounding areas.',
  url: `${SITE_CONFIG.url}/contact`,
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.url}/#business`,
    name: SITE_CONFIG.name,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    url: SITE_CONFIG.url,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: 'US',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: SITE_CONFIG.customerCount.toString(),
    },
  },
};

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showBookingWidget, setShowBookingWidget] = useState(false);
  const bookingRef = useRef<HTMLDivElement>(null);

  // Validation functions
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        const phoneDigits = value.replace(/\D/g, '');
        if (phoneDigits.length < 10) return 'Please enter a valid 10-digit phone number';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
      default:
        return '';
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  // Lazy load booking widget when it comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowBookingWidget(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px', threshold: 0 }
    );

    if (bookingRef.current) {
      observer.observe(bookingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all required fields
    const requiredFields = ['name', 'phone', 'email'];
    const newErrors: Record<string, string> = {};
    const newTouched: Record<string, boolean> = {};

    requiredFields.forEach(field => {
      newTouched[field] = true;
      const error = validateField(field, formState[field as keyof typeof formState]);
      if (error) newErrors[field] = error;
    });

    setTouched(prev => ({ ...prev, ...newTouched }));
    setErrors(newErrors);

    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Submit to webhook
    setIsSubmitting(true);
    try {
      await fetch(EXTERNAL_RESOURCES.webhooks.ghlLeadWebhook, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          address: formState.address,
          service: formState.service,
          message: formState.message,
          source: 'website_contact_form',
          page_url: typeof window !== 'undefined' ? window.location.href : 'https://www.bestroofingnow.com/contact',
          submitted_at: new Date().toISOString(),
        }),
        mode: 'no-cors', // LeadConnector may not support CORS
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      // Still show success since no-cors doesn't return response
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });

    // Clear error when user starts typing (if field was touched)
    if (touched[name] && errors[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.hero.hero21}
            alt="Contact Best Roofing Now for your roofing needs"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Get Your Free Roof Inspection
            </h1>
            <p className="text-xl text-white/90">
              Ready to protect your home with Charlotte&apos;s most trusted roofing company?
              Contact us today for a free, no-obligation estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Request Your Free Estimate
              </h2>

              {/* Trust Bar */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-6 p-3 bg-accent/10 rounded-lg border border-accent/20">
                <span className="flex items-center gap-1 text-sm font-medium">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  <span className="text-dark">5.0 Rating</span>
                </span>
                <span className="text-gray-300" aria-hidden="true">|</span>
                <span className="flex items-center gap-1 text-sm font-medium text-dark">
                  <Shield className="w-4 h-4 text-primary" aria-hidden="true" />
                  BBB A+ Rated
                </span>
                <span className="text-gray-300" aria-hidden="true">|</span>
                <span className="text-sm font-medium text-dark">
                  {SITE_CONFIG.customerCount}+ Happy Customers
                </span>
              </div>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center" role="alert">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-700 mb-4">
                    Your request has been received. Our team will contact you within 2 hours
                    during business hours to schedule your free roof inspection.
                  </p>
                  <p className="text-green-600 text-sm">
                    Need immediate assistance? Call us at{' '}
                    <a href={`tel:${SITE_CONFIG.phoneClean}`} className="font-bold underline">
                      {SITE_CONFIG.phone}
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 rounded-lg border outline-none transition ${
                          touched.name && errors.name
                            ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                            : 'border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20'
                        }`}
                        placeholder="John Smith"
                        aria-invalid={touched.name && !!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {touched.name && errors.name && (
                        <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        inputMode="tel"
                        autoComplete="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 rounded-lg border outline-none transition ${
                          touched.phone && errors.phone
                            ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                            : 'border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20'
                        }`}
                        placeholder="(704) 555-1234"
                        aria-invalid={touched.phone && !!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {touched.phone && errors.phone && (
                        <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      inputMode="email"
                      autoComplete="email"
                      value={formState.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 rounded-lg border outline-none transition ${
                        touched.email && errors.email
                          ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                          : 'border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20'
                      }`}
                      placeholder="john@example.com"
                      aria-invalid={touched.email && !!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {touched.email && errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-dark mb-2">
                      Property Address <span className="text-gray font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formState.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      placeholder="123 Main St, Charlotte, NC 28202"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-dark mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    >
                      <option value="">Select a service...</option>
                      <option value="roof-inspection">Free Roof Inspection</option>
                      <option value="roof-repair">Roof Repair</option>
                      <option value="roof-replacement">Roof Replacement</option>
                      <option value="storm-damage">Storm Damage / Insurance Claim</option>
                      <option value="emergency">Emergency Repair</option>
                      <option value="gutters">Gutters</option>
                      <option value="siding">Siding</option>
                      <option value="commercial">Commercial Roofing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
                      placeholder="Tell us about your roofing needs, any visible damage, or questions you have..."
                    />
                  </div>

                  {/* Response Time Promise */}
                  <p className="text-sm text-accent font-medium text-center mb-2">
                    We respond within 2 hours during business hours
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full text-lg py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" aria-hidden="true" />
                        Get My Free Quote Now
                      </>
                    )}
                  </button>

                  <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <span className="text-xs text-gray leading-relaxed">
                        By checking this box and submitting this form, I agree to be contacted about my roofing needs via phone calls, SMS/text messages, and emails, including through AI-powered and automated messaging systems. I understand that message and data rates may apply. I can opt out at any time. We respect your privacy and will never share your information with third parties.
                      </span>
                    </label>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href={`tel:${SITE_CONFIG.phoneClean}`}
                  className="flex items-start gap-4 p-6 bg-light rounded-xl hover:bg-primary/5 transition group"
                  aria-label={`Call us at ${SITE_CONFIG.phone}`}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition">
                    <Phone className="w-6 h-6 text-primary group-hover:text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Call Us 24/7</h3>
                    <p className="text-xl font-bold text-primary">{SITE_CONFIG.phone}</p>
                    <p className="text-sm text-gray mt-1">Emergency service available</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-4 p-6 bg-light rounded-xl hover:bg-primary/5 transition group"
                  aria-label={`Email us at ${SITE_CONFIG.email}`}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition">
                    <Mail className="w-6 h-6 text-primary group-hover:text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Email Us</h3>
                    <p className="text-primary">{SITE_CONFIG.email}</p>
                    <p className="text-sm text-gray mt-1">We respond within 24 hours</p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-light rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Office Address</h3>
                    <p className="text-dark">
                      {SITE_CONFIG.address.street}<br />
                      {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-6 bg-light rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Business Hours</h3>
                    <p className="text-dark">24 Hours / 7 Days a Week</p>
                    <p className="text-sm text-gray mt-1">Emergency service always available</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-8 p-6 bg-primary/5 rounded-xl">
                <h3 className="font-bold text-dark mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link
                    href="/services"
                    className="flex items-center gap-2 text-primary hover:text-accent transition"
                  >
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    View Our Services
                  </Link>
                  <Link
                    href="/financing"
                    className="flex items-center gap-2 text-primary hover:text-accent transition"
                  >
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    Financing Options
                  </Link>
                  <Link
                    href="/locations"
                    className="flex items-center gap-2 text-primary hover:text-accent transition"
                  >
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    Service Areas
                  </Link>
                  <Link
                    href="/faq"
                    className="flex items-center gap-2 text-primary hover:text-accent transition"
                  >
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Banner */}
      <section className="section bg-light">
        <div className="container">
          <FinancingBanner variant="inline" />
        </div>
      </section>

      {/* Book Online */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Schedule Your Free Inspection Online
            </h2>
            <p className="text-gray">
              Pick a time that works best for you. Our team will confirm your appointment within 24 hours.
            </p>
          </div>
          <div
            ref={bookingRef}
            className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
            style={{ minHeight: '700px' }}
          >
            {showBookingWidget ? (
              <iframe
                src="https://manage.bestroofingnow.com/widget/booking/IQZBSV8mbq2tgmwjL7ul"
                width="100%"
                height="700"
                title="Book an Appointment"
                className="w-full border-0"
                loading="lazy"
              />
            ) : (
              <div className="flex items-center justify-center h-[700px] bg-gray-50" role="status" aria-label="Loading booking calendar">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" aria-hidden="true" />
                  <p className="text-gray">Loading booking calendar...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Serving Charlotte & Surrounding Areas
            </h2>
            <p className="text-gray">
              Based in Charlotte, we serve homeowners and businesses throughout the
              greater Charlotte metropolitan area.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative aspect-video md:aspect-square rounded-xl overflow-hidden">
                <Image
                  src={IMAGES.hero.hero21}
                  alt="Best Roofing Now service area in Charlotte"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video md:aspect-square rounded-xl overflow-hidden">
                <Image
                  src={IMAGES.location.serviceAreaMap}
                  alt="Charlotte metro service area map"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="section bg-accent text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Roof Emergency? We Are Here 24/7
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Storm damage, leaks, or other roofing emergencies do not wait for business hours.
            Neither do we. Call now for immediate assistance.
          </p>
          <a
            href={`tel:${SITE_CONFIG.phoneClean}`}
            className="btn bg-white text-accent hover:bg-light text-xl px-8 py-4"
            aria-label={`Call us now at ${SITE_CONFIG.phone} for emergency roofing service`}
          >
            <Phone className="w-6 h-6" aria-hidden="true" />
            {SITE_CONFIG.phone}
          </a>
        </div>
      </section>

      {/* Schema Markup */}
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
    </>
  );
}
