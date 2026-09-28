import React, { useState } from 'react';
import { business } from './config/business.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Testimonials from './components/Testimonials.jsx';
import Faq from './components/Faq.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="site-wrapper">
      {/* Sticky, Responsive Brand Navbar */}
      <Navbar />

      <main>
        {/* Full-height atmospheric hero with DoItYourself-inspired quick consult bar */}
        <Hero />

        {/* Elevated 3-column services grid with category filters */}
        <Services onSelectService={handleSelectService} />

        {/* Craft-centered two-column About section */}
        <About />

        {/* Deep Slate Architectural Trust Section (USPs) */}
        <WhyChooseUs />

        {/* Testimonials: rendered only if genuine reviews are present in config */}
        {business.testimonials && business.testimonials.length > 0 && (
          <Testimonials />
        )}

        {/* Clean, high-value FAQ accordion */}
        <Faq />

        {/* Conversion-focused Contact & Consultation Request */}
        <Contact preselectedService={selectedService} />
      </main>

      {/* Calm, comprehensive luxury footer */}
      <Footer />
    </div>
  );
}
