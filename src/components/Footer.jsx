import React from 'react';
import { business } from '../config/business.js';

export default function Footer() {
  const { footer } = business;

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand-header">
              <span className="footer-brand-mark">B</span>
              <span className="footer-brand-name">{business.name}</span>
            </div>
            <p className="footer-tagline">{footer.tagline}</p>
            <p className="footer-type">{business.businessType}</p>
            <div className="footer-city-tag">
              <span className="footer-city-dot" />
              <span>{business.city}, United Kingdom</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-nav-list">
              {business.navLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Key Services</h4>
            <ul className="footer-nav-list">
              {business.services.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <a href="#services" className="footer-link">
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-heading">London Office</h4>
            <p className="footer-contact-item">{business.address}</p>
            <p className="footer-contact-item">
              <a href={business.phoneHref} className="footer-highlight-link">
                {business.phoneDisplay}
              </a>
            </p>
            <p className="footer-contact-item">
              <a href={business.emailHref} className="footer-link">
                {business.email}
              </a>
            </p>
            <p className="footer-contact-item footer-hours">
              {business.openingHours}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {footer.copyrightYear} {footer.copyrightText}
          </p>
          <div className="footer-legal-links">
            <a href="#hero" className="footer-back-to-top">
              <span>Back to Top</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
