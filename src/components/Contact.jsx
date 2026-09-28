import React, { useState } from 'react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';

export default function Contact({ preselectedService }) {
  const { contact } = business;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: preselectedService || business.services[0]?.title || '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync if preselectedService changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only submission confirmation
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: business.services[0]?.title || '',
      message: ''
    });
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Contact Information Column */}
          <div className="contact-info-col">
            <span className="eyebrow">{contact.eyebrow}</span>
            <h2 className="contact-title">{contact.title}</h2>
            <p className="contact-subheadline">{contact.subheadline}</p>

            <div className="contact-details-card">
              {/* Phone */}
              <div className="contact-method-item">
                <div className="contact-method-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-method-body">
                  <span className="contact-method-label">Direct Phone</span>
                  <a href={business.phoneHref} className="contact-method-link">
                    {business.phoneDisplay}
                  </a>
                  <span className="contact-method-hint">Instant consultation &amp; quotes</span>
                </div>
              </div>

              {/* Email */}
              <div className="contact-method-item">
                <div className="contact-method-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-method-body">
                  <span className="contact-method-label">Email Inquiries</span>
                  <a href={business.emailHref} className="contact-method-link">
                    {business.email}
                  </a>
                  <span className="contact-method-hint">Detailed plans &amp; architectural drawings</span>
                </div>
              </div>

              {/* Address & Directions */}
              <div className="contact-method-item">
                <div className="contact-method-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-method-body">
                  <span className="contact-method-label">Registered Office</span>
                  <p className="contact-address-text">{business.address}</p>
                  <a
                    href={business.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-directions-link"
                  >
                    <span>{business.directionsCtaText}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>

              {/* WhatsApp (only rendered if provided) */}
              {business.whatsapp && (
                <div className="contact-method-item">
                  <div className="contact-method-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </div>
                  <div className="contact-method-body">
                    <span className="contact-method-label">WhatsApp</span>
                    <a
                      href={`https://wa.me/${business.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-method-link"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              )}

              {/* Hours */}
              <div className="contact-hours-block">
                <span className="contact-hours-label">Hours of Operation</span>
                <span className="contact-hours-value">{business.openingHours}</span>
                <span className="contact-hours-note">{business.openingHoursNote}</span>
              </div>
            </div>
          </div>

          {/* Consultation Request Form Column */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <h3 className="contact-form-title">{contact.formTitle}</h3>
              <p className="contact-form-subtitle">{contact.formSubtitle}</p>

              {isSubmitted ? (
                <div className="contact-form-success" role="alert">
                  <div className="success-icon-wrap">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h4 className="success-title">Consultation Request Received</h4>
                  <p className="success-text">{contact.successMessage}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleReset}
                    className="success-btn"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      {contact.fields.name} *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. William Edwards"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-row">
                    {/* Phone */}
                    <div className="form-group">
                      <label htmlFor="contact-phone" className="form-label">
                        {contact.fields.phone} *
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="e.g. +44 7123 456789"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <label htmlFor="contact-email" className="form-label">
                        {contact.fields.email} *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="e.g. william@example.co.uk"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="form-group">
                    <label htmlFor="contact-service" className="form-label">
                      {contact.fields.service}
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-select"
                    >
                      {business.services.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title} ({srv.category})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">
                      {contact.fields.message}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="4"
                      placeholder="Tell us briefly about your property, timeline, or scope..."
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full text-center"
                  >
                    {contact.submitText}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
