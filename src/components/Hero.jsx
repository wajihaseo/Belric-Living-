import React from 'react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';

export default function Hero() {
  const { hero } = business;

  return (
    <section className="hero-section" id="hero">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="hero-backdrop">
        <img
          src={hero.backgroundImage}
          alt={business.name}
          className="hero-backdrop-img"
          referrerPolicy="no-referrer"
        />
        <div className="hero-backdrop-overlay" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Eyebrow */}
          <div className="hero-eyebrow-wrap">
            <span className="hero-eyebrow">
              {hero.eyebrow}
            </span>
          </div>

          {/* H1 Headline */}
          <h1 className="hero-title">
            {hero.headline}
          </h1>

          {/* Supporting Subheadline */}
          <p className="hero-subtitle">
            {hero.subheadline}
          </p>

          {/* Action Button Pair */}
          <div className="hero-actions">
            <Button
              href={business.mainCtaHref}
              variant="primary"
              size="lg"
              className="hero-btn-primary"
            >
              {business.mainCtaText}
            </Button>

            <Button
              href={business.secondaryCtaHref}
              variant="outline-white"
              size="lg"
              className="hero-btn-secondary"
            >
              {business.secondaryCtaText}
            </Button>
          </div>

          {/* Trust Marker Line */}
          <div className="hero-trust">
            <div className="hero-trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>{hero.trustBadge}</span>
            </div>
            <span className="hero-trust-divider">·</span>
            <div className="hero-trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{business.city}, United Kingdom</span>
            </div>
          </div>
        </div>
      </div>

      {/* DoItYourself-Inspired Quick Consultation Bar at bottom of Hero */}
      <div className="hero-bottom-bar">
        <div className="container hero-bottom-container">
          <div className="hero-bottom-info">
            <span className="hero-bottom-label">Direct London Line</span>
            <a href={business.phoneHref} className="hero-bottom-phone">
              {business.phoneDisplay}
            </a>
          </div>
          <div className="hero-bottom-divider" />
          <div className="hero-bottom-hours">
            <span className="hero-bottom-label">Consultation Hours</span>
            <span className="hero-bottom-val">{business.openingHours}</span>
          </div>
          <div className="hero-bottom-cta">
            <Button
              href={business.mainCtaHref}
              variant="accent"
              size="sm"
            >
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
