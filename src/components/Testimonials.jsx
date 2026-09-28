import React from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';

export default function Testimonials() {
  const { testimonials } = business;

  // The prompt strictly requires: include ONLY if real testimonials exist.
  // If none provided, omit this section entirely — do not replace it with filler.
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <SectionHeading
          eyebrow="Client Testimonials"
          title="What Our Clients Say"
          description="Read experiences from homeowners across London."
        />

        <div className="testimonials-grid">
          {testimonials.map((item, idx) => (
            <div key={idx} className="testimonial-card">
              <blockquote className="testimonial-quote">
                “{item.quote}”
              </blockquote>
              <div className="testimonial-author">
                <span className="testimonial-name">{item.author}</span>
                {item.location && (
                  <span className="testimonial-location">{item.location}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
