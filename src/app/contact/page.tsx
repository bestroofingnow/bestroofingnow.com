'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
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
              <h2 className="text-2xl font-bold text-primary mb-6">
                Request Your Free Estimate
              </h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-700 mb-4">
                    Your request has been received. Our team will contact you within 24 hours
                    to schedule your free roof inspection.
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                        placeholder="John Smith"
                      />
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
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                        placeholder="(704) 555-1234"
                      />
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
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-dark mb-2">
                      Property Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
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

                  <button
                    type="submit"
                    className="btn btn-primary w-full text-lg py-4"
                  >
                    <Send className="w-5 h-5" />
                    Request Free Estimate
                  </button>

                  <p className="text-sm text-gray text-center">
                    By submitting this form, you agree to be contacted about your roofing needs.
                    We respect your privacy and will never share your information.
                  </p>
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
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition">
                    <Phone className="w-6 h-6 text-primary group-hover:text-white" />
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
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition">
                    <Mail className="w-6 h-6 text-primary group-hover:text-white" />
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
                    <MapPin className="w-6 h-6 text-primary" />
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
                    <Clock className="w-6 h-6 text-primary" />
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
                    <ArrowRight className="w-4 h-4" />
                    View Our Services
                  </Link>
                  <Link
                    href="/financing"
                    className="flex items-center gap-2 text-primary hover:text-accent transition"
                  >
                    <ArrowRight className="w-4 h-4" />
                    Financing Options
                  </Link>
                  <Link
                    href="/locations"
                    className="flex items-center gap-2 text-primary hover:text-accent transition"
                  >
                    <ArrowRight className="w-4 h-4" />
                    Service Areas
                  </Link>
                  <Link
                    href="/faq"
                    className="flex items-center gap-2 text-primary hover:text-accent transition"
                  >
                    <ArrowRight className="w-4 h-4" />
                    FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://manage.bestroofingnow.com/widget/bookings/bestroofingnowconsultation"
              width="100%"
              height="700"
              frameBorder="0"
              title="Book an Appointment"
              className="w-full"
            />
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
          >
            <Phone className="w-6 h-6" />
            {SITE_CONFIG.phone}
          </a>
        </div>
      </section>
    </>
  );
}
