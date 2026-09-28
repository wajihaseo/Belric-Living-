import React, { useState } from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';

export default function Faq() {
  const { faq } = business;
  const [openIndex, setOpenIndex] = useState(0);

  if (!faq || !faq.items || faq.items.length === 0) {
    return null;
  }

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-container">
        <SectionHeading
          eyebrow={faq.eyebrow}
          title={faq.title}
          description={faq.description}
        />

        <div className="faq-accordion-list">
          {faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-toggle-icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer-pane">
                    <p className="faq-answer-text">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
