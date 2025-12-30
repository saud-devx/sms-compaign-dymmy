import { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieConsent from './CookieConsent';
import { ScrollProgress } from './enhanced-ui/ScrollProgress';
import { useBreakpoint } from './hooks/use-breakpoint';
import { handleHashAnchor, preserveHashOnRefresh } from '@/utils/scrollUtils';

interface LayoutProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.3, 
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    }
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    }
  }
};

// New element variants for staggered animations
const elementVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    }
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    }
  }
};

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const { isMobile } = useBreakpoint();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);
  const [key, setKey] = useState(location.pathname);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  // Check if user prefers reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Store original hash when component mounts or when hash changes
  useEffect(() => {
    // Make sure body is always visible for new routes
    document.body.style.visibility = 'visible';
    document.documentElement.style.visibility = 'visible';
    
    // Clear any hash and scroll to top
    if (location.hash) {
      // Handle hash properly without changing URL
      handleHashAnchor();
    } else {
      // Force scroll to top when there is no hash
      window.scrollTo(0, 0);
    }
    
    // Only update key when pathname changes (not hash)
    if (key !== location.pathname) {
      setKey(location.pathname);
    }
  }, [location.pathname, location.hash, key]);

  // Make sure theme transitions are smooth and handle body classes
  useEffect(() => {
    document.body.classList.add('transition-colors', 'duration-300');
    document.documentElement.style.scrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';
    document.body.classList.add('custom-scrollbar', 'texture-grain');
    
    // Force visibility for better UX
    document.body.style.opacity = '1';
    
    // Share active section with navbar component through custom event
    const updateActiveSection = () => {
      if (location.hash) {
        const hash = location.hash.substring(1);
        if (hash && hash !== activeSection) {
          setActiveSection(hash);
          // Dispatch custom event for other components to react to section changes
          window.dispatchEvent(new CustomEvent('sectionChange', { detail: { section: hash } }));
        }
      }
    };
    
    // Call initially and set up listener
    updateActiveSection();
    window.addEventListener('hashchange', updateActiveSection);
    
    return () => {
      document.body.classList.remove('transition-colors', 'duration-300');
      document.body.classList.remove('custom-scrollbar', 'texture-grain');
      window.removeEventListener('hashchange', updateActiveSection);
    };
  }, [prefersReducedMotion, location.hash, activeSection]);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ScrollProgress />
      <div className="flex flex-col min-h-screen">
        {/* Header container - adjusted position */}
        <header className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full">
          <Navbar activeSection={activeSection} />
        </header>
        
        {/* Main content - adjusted padding to remove margin */}
        <motion.main 
          className="flex-grow pt-32 md:pt-32 relative z-10 w-full will-change-transform"
          initial={prefersReducedMotion ? undefined : "initial"}
          animate="in"
          exit={prefersReducedMotion ? undefined : "out"}
          variants={pageVariants}
          key={key}
        >
          {children}
        </motion.main>
        
        <Footer />
      </div>
      
      {/* Cookie Consent Banner */}
      <CookieConsent />
      
      {/* Gradient orb background effects - optimized for performance */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 will-change-transform" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 dark:bg-secondary/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 will-change-transform" />
      </div>
    </div>
  );
};

// Export the element variants for use in other components
export { elementVariants };
export default Layout;
