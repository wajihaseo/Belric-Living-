import React from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';

export default function WhyChooseUs() {
  const { usps } = business;

  return (
    <section className="section why-us-section" id="why-us">
      <div className="container">
        <SectionHeading
          eyebrow="Why Discerning Homeowners Choose Belric Living"
          title="Renovations Rooted in Integrity & Craft"
          description="We take personal responsibility for every project, ensuring strict timelines, transparent communication, and immaculate results."
          theme="dark"
        />

        <div className="why-us-grid">
          {usps.map((usp) => (
            <div key={usp.id} className="why-us-card">
              <span className="why-us-number">{usp.number}</span>
              <h3 className="why-us-card-title">{usp.title}</h3>
              <p className="why-us-card-desc">{usp.description}</p>
            </div>
          ))}
        </div>

        {/* Quiet Trust Bar */}
        <div className="why-us-footer-strip">
          <div className="why-us-footer-item">
            <span className="why-us-footer-label">Primary Location</span>
            <span className="why-us-footer-value">{business.address}</span>
          </div>
          <div className="why-us-footer-sep" />
          <div className="why-us-footer-item">
            <span className="why-us-footer-label">Working Hours</span>
            <span className="why-us-footer-value">{business.openingHours}</span>
          </div>
          <div className="why-us-footer-sep" />
          <div className="why-us-footer-item">
            <span className="why-us-footer-label">Client Promise</span>
            <span className="why-us-footer-value">Turnkey Handover &amp; Spotless Completion</span>
          </div>
        </div>
      </div>
    </section>
  );
}
