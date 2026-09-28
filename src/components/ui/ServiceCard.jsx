import React from 'react';
import { business } from '../../config/business.js';

export default function ServiceCard({ service, onSelectService }) {
  const { title, category, description, image, features } = service;

  return (
    <article className="service-card">
      <div className="service-card-media">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="service-card-image"
          referrerPolicy="no-referrer"
        />
        <div className="service-card-overlay" />
        {category && <span className="service-card-tag">{category}</span>}
      </div>

      <div className="service-card-body">
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-desc">{description}</p>

        {features && features.length > 0 && (
          <ul className="service-card-features">
            {features.map((feat, idx) => (
              <li key={idx} className="service-card-feature-item">
                <span className="feature-bullet" aria-hidden="true">·</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="service-card-footer">
          <a
            href={business.mainCtaHref}
            className="service-card-link"
            onClick={() => onSelectService && onSelectService(service.title)}
            aria-label={`${business.mainCtaText} for ${title}`}
          >
            <span>{business.mainCtaText}</span>
            <svg
              className="service-card-arrow"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
