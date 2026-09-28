import React from 'react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';

export default function About() {
  const { about } = business;

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Visual Column */}
          <div className="about-media-col">
            <div className="about-image-wrapper">
              <img
                src={about.image}
                alt={about.title}
                loading="lazy"
                className="about-image"
                referrerPolicy="no-referrer"
              />
              <div className="about-image-badge">
                <span className="about-badge-gold">{business.city}</span>
                <span className="about-badge-sub">Licensed &amp; Insured</span>
              </div>
            </div>
            {about.imageCaption && (
              <p className="about-caption">{about.imageCaption}</p>
            )}
          </div>

          {/* Text Column */}
          <div className="about-text-col">
            <span className="eyebrow">{about.eyebrow}</span>
            <h2 className="about-title">{about.title}</h2>
            <p className="about-lead">{about.lead}</p>

            <div className="about-paragraphs">
              {about.paragraphs.map((p, idx) => (
                <p key={idx} className="about-p">
                  {p}
                </p>
              ))}
            </div>

            {about.highlights && about.highlights.length > 0 && (
              <ul className="about-highlights-list">
                {about.highlights.map((item, idx) => (
                  <li key={idx} className="about-highlight-item">
                    <svg className="about-check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="about-cta-row">
              <Button
                href={business.mainCtaHref}
                variant="primary"
                size="md"
              >
                {business.mainCtaText}
              </Button>
              <a href={business.phoneHref} className="about-phone-link">
                <span>Direct Line:</span>
                <strong>{business.phoneDisplay}</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
