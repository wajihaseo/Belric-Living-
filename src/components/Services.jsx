import React, { useState } from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';
import ServiceCard from './ui/ServiceCard.jsx';

export default function Services({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('All');

  // Extract unique categories for interactive segmented filter
  const categories = ['All', ...new Set(business.services.map(s => s.category).filter(Boolean))];

  const filteredServices = activeCategory === 'All'
    ? business.services
    : business.services.filter(s => s.category === activeCategory);

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="Our Craft & Expertise"
          title="Bespoke Renovation & Improvement Services"
          description="From structural architectural remodeling to fine decorative finishes, our London specialists deliver end-to-end craftsmanship tailored to your residence."
        />

        {/* Interactive Segmented Filter (DoItYourself style category sorting) */}
        {categories.length > 2 && (
          <div className="services-filter-bar">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`services-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* 3-Column Services Grid */}
        <div className="services-grid">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
