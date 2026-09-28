import React, { useState, useEffect } from 'react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      {/* Top Utility Bar (DoItYourself inspired authoritative utility strip) */}
      <div className="navbar-top-strip">
        <div className="container navbar-top-container">
          <div className="navbar-top-left">
            <span className="navbar-top-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{business.city}, {business.country}</span>
            </span>
            <span className="navbar-top-divider">·</span>
            <span className="navbar-top-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>{business.openingHours}</span>
            </span>
          </div>

          <div className="navbar-top-right">
            <a href={business.phoneHref} className="navbar-top-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>{business.phoneDisplay}</span>
            </a>
            {business.whatsapp && (
              <>
                <span className="navbar-top-divider">·</span>
                <a
                  href={`https://wa.me/${business.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbar-top-link"
                >
                  WhatsApp
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="navbar-main">
        <div className="container navbar-container">
          {/* Brand Wordmark (Display Font, Luxury Mark + Typographic Wordmark) */}
          <a href="#" className="navbar-brand" onClick={closeMenu}>
            <span className="navbar-brand-mark">B</span>
            <div className="navbar-brand-text">
              <span className="navbar-brand-name">{business.name}</span>
              <span className="navbar-brand-sub">{business.city} · Renovation</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="navbar-nav" aria-label="Main Navigation">
            {business.navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="navbar-link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Area */}
          <div className="navbar-actions">
            <Button
              href={business.mainCtaHref}
              variant="primary"
              size="sm"
              className="navbar-cta-btn"
            >
              {business.mainCtaText}
            </Button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              className="navbar-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-menu" role="dialog" aria-modal="true">
          <div className="container navbar-mobile-container">
            <nav className="navbar-mobile-links">
              {business.navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="navbar-mobile-link"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="navbar-mobile-footer">
              <Button
                href={business.mainCtaHref}
                variant="primary"
                size="md"
                className="w-full text-center"
                onClick={closeMenu}
              >
                {business.mainCtaText}
              </Button>

              <div className="navbar-mobile-contact">
                <a href={business.phoneHref} className="navbar-mobile-tel">
                  {business.phoneDisplay}
                </a>
                <span className="navbar-mobile-addr">{business.address}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
