
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from "framer-motion";
import NavLogo from './NavLogo';
import MobileNavToggle from './MobileNavToggle';
import MobileMenu from './MobileMenu';
import NavigationItems from './NavigationItems';
import AuthButtons from './AuthButtons';
import { scrollToElement } from '@/utils/scrollUtils';
import StickyPhoneBar from '../StickyPhoneBar';
import ThemeToggle from '../ThemeToggle';
import { useNavbarAnimation } from './hooks/useNavbarAnimation';
import { useScrollHandling } from './hooks/useScrollHandling';
import { useSectionTracking } from './hooks/useSectionTracking';

interface NavbarProps {
  activeSection?: string | null;
}

const Navbar = ({ activeSection: propActiveSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Get navbar animation variants
  const { navVariants } = useNavbarAnimation();
  
  // Handle scroll state and section tracking
  const { scrolled, activeSection, setActiveSection, isTransitioning, setIsTransitioning } = 
    useScrollHandling(propActiveSection);
  
  // Track sections and handle hash navigation
  useSectionTracking(activeSection, setActiveSection, isTransitioning, setIsTransitioning);

  // Handle prop changes and initial hash
  useEffect(() => {
    if (propActiveSection !== undefined && propActiveSection !== activeSection) {
      setActiveSection(propActiveSection);
    }
  }, [propActiveSection, activeSection, setActiveSection]);

  // Close mobile menu on route change and handle hash detection
  useEffect(() => {
    setIsOpen(false);
    
    // Extract hash from the location and set active section
    const hash = location.hash ? location.hash.substring(1) : null;
    if (hash) {
      setActiveSection(hash);
      // Smooth scroll to the section on initial load with a slight delay
      setTimeout(() => {
        // Set transitioning flag to prevent scroll handler from changing section
        setIsTransitioning(true);
        scrollToElement(hash, 'auto', 80);
        
        // Reset transitioning flag after scrolling is likely complete
        setTimeout(() => setIsTransitioning(false), 1000);
      }, 50);
    }
  }, [location.pathname, location.hash, setActiveSection, setIsTransitioning]);

  const toggleMobileMenu = () => {
    setIsOpen(prev => !prev);
  };
  
  // Handle navigation to pages or sections
  const handleNavigation = (to: string) => {
    // Close mobile menu first
    setIsOpen(false);
    
    // If this is a route with a hash, handle the hash navigation
    if (to.includes('#') && location.pathname === '/') {
      const sectionId = to.substring(to.indexOf('#') + 1);
      
      // Set transitioning flag to prevent scroll handler from changing section
      setIsTransitioning(true);
      setActiveSection(sectionId);
      
      // Scroll to the section
      scrollToElement(sectionId, 'smooth', 80);
      
      // Reset transitioning flag after scrolling is likely complete
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  };

  // Fixed navbar height for all states
  const navbarHeight = "h-20";
  const mobileNavbarHeight = "h-16";

  return (
    <>
      <StickyPhoneBar />
      <motion.nav 
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "fixed top-12 left-0 right-0 z-[100] transition-all duration-300 w-full", 
          scrolled 
            ? "bg-white dark:bg-gray-900 backdrop-blur-lg shadow-lg" 
            : "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm",
          "border-b border-gray-100/50 dark:border-gray-800/50",
          "will-change-transform"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={cn(
            "flex justify-between items-center transition-all duration-300", 
            isMobile ? mobileNavbarHeight : navbarHeight
          )}>
            {/* Logo */}
            <NavLogo />

            {/* Navigation Items */}
            <NavigationItems 
              activeSection={activeSection} 
              handleNavigation={handleNavigation} 
            />

            {/* Theme Toggle and Login/Register Buttons */}
            <AuthButtons />

            {/* Mobile Menu Toggle and Theme Toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <MobileNavToggle 
                isOpen={isOpen} 
                onClick={toggleMobileMenu} 
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)}
          handleNavigation={handleNavigation}
          activeSection={activeSection || ''}
        />
      </motion.nav>
    </>
  );
};

export default Navbar;
