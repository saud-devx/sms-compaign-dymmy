
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import ErrorBoundaryRouter from "./components/ErrorBoundaryRouter";
import { PreloadManager } from "./components/PreloadManager";
import { useEffect } from "react";
import { enhanceNavigation } from "./utils/scrollUtils";
import { ScrollProgress } from "./components/enhanced-ui/ScrollProgress";

// Import pages
import Index from "./pages/Index";
import ConditionsUtilisation from "./pages/ConditionsUtilisation";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import Services from "./pages/Services";
import Tarifs from "./pages/Tarifs";
import LeSms from "./pages/LeSms";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Avantages from "./pages/Avantages";

// Import CSS files for enhanced styling
import "./styles/notification-animations.css";
import "./styles/modern/enhanced-typography.css";
import "./styles/modern/micro-animations.css";
import "./styles/blog.css";
import "./styles/dark-mode-enhancement.css";
import "./styles/animations.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Prevents unnecessary refetches
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1 // Limit retry attempts
    }
  }
});

// Component to handle scrolling and performance optimizations
const ScrollAndPerformanceHandler = () => {
  useEffect(() => {
    // Enhanced navigation handling for better hash-based scrolling
    enhanceNavigation();
    
    // Fix visibility immediately to prevent flashing
    document.body.style.visibility = 'visible';
    document.documentElement.style.visibility = 'visible';
    document.documentElement.style.opacity = '1';
    
    // Apply performance optimizations
    document.documentElement.classList.add('scroll-smooth');
    
    // Reduce paint thrashing during animations
    document.body.classList.add('will-change-auto');
    
    // Optimize rendering performance with passive event listeners
    const supportsPassive = (() => {
      let result = false;
      try {
        // Test if passive option is supported
        const opts = Object.defineProperty({}, 'passive', {
          get: () => { result = true; return true; }
        });
        window.addEventListener('testpassive', null as any, opts);
        window.removeEventListener('testpassive', null as any, opts);
      } catch (e) {}
      return result;
    })();
    
    const eventListenerOptions = supportsPassive ? { passive: true } : false;
    
    // Use optimized scroll listener for any scroll-based animations
    const optimizedScrollHandler = () => {
      // Use requestAnimationFrame to batch scroll-related updates
      requestAnimationFrame(() => {
        // Any scroll-based animations or state updates would go here
      });
    };
    
    window.addEventListener('scroll', optimizedScrollHandler, eventListenerOptions);
    
    return () => {
      document.documentElement.classList.remove('scroll-smooth');
      document.body.classList.remove('will-change-auto');
      window.removeEventListener('scroll', optimizedScrollHandler);
    };
  }, []);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollProgress />
          <PreloadManager />
          <ErrorBoundaryRouter />
          <ScrollAndPerformanceHandler />
          <Routes>
            <Route path="/" element={<Layout><Index /></Layout>} />
            <Route path="/services" element={<Layout><Services /></Layout>} />
            <Route path="/le-sms" element={<Layout><LeSms /></Layout>} />
            <Route path="/tarifs" element={<Layout><Tarifs /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
            <Route path="/conditions-d-utilisation" element={<Layout><ConditionsUtilisation /></Layout>} />
            <Route path="/politique-de-confidentialite" element={<Layout><PolitiqueConfidentialite /></Layout>} />
            <Route path="/avantages" element={<Layout><Avantages /></Layout>} />
          
            {/* 404 route - catch all non-matching routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
