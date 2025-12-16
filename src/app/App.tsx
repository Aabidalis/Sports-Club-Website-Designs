import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SportsSection } from './components/SportsSection';
import { BookingSection } from './components/BookingSection';
import { PricingSection } from './components/PricingSection';
import { GallerySection } from './components/GallerySection';
import { BlogSection } from './components/BlogSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Sports Section */}
      <SportsSection />

      {/* Booking Section */}
      <BookingSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Blog Section */}
      <BlogSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* About Us Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}