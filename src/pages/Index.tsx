
import React, { useEffect } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import HeroSection from '../components/sections/HeroSection';
import WhySmsSection from '../components/sections/WhySmsSection';
import ServicesSection from '../components/sections/ServicesSection';
import FeaturedClientsSection from '../components/sections/FeaturedClientsSection';
import CtaSection from '../components/sections/CtaSection';
import IndexPageSEO from '../components/seo/IndexPageSEO';
import IndexPageSchema from '../components/seo/IndexPageSchema';

const Index = () => {
  // Force scroll to top on page load
  useEffect(() => {
    // Immediately scroll to top
    window.scrollTo(0, 0);
    
    // Clear any hash that might exist
    if (window.location.hash) {
      history.replaceState(null, document.title, window.location.pathname);
    }
    
    // Set smooth scrolling for user interactions
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);
  
  return (
    <div className="min-h-screen relative">
      {/* SEO Components */}
      <IndexPageSEO />
      <IndexPageSchema />
      
      <AnimatedBackground
        count={46}
        size={95}
        speed={38}
        className="z-0"
        excludeFooter={true}
      />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Why SMS Section */}
      <WhySmsSection />
      
      {/* Services Section */}
      <ServicesSection />

      {/* Featured Clients Section */}
      <FeaturedClientsSection />
      
      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default Index;
