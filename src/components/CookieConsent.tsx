
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Shield, Cookie, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useBreakpoint } from './hooks/use-breakpoint';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const { toast } = useToast();
  const { isMobile } = useBreakpoint();
  
  useEffect(() => {
    // Check if user has already given consent
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    // If no consent found, show the banner after a short delay
    if (!cookieConsent) {
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setShowConsent(false);
    toast({
      title: "Cookies acceptés",
      description: "Merci d'avoir accepté l'utilisation de nos cookies.",
    });
  };
  
  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setShowConsent(false);
    toast({
      title: "Cookies essentiels acceptés",
      description: "Seuls les cookies essentiels seront utilisés.",
    });
  };
  
  const rejectAll = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowConsent(false);
    toast({
      title: "Cookies refusés",
      description: "Vous avez refusé l'utilisation des cookies.",
    });
  };
  
  // Don't render anything if consent has been given
  if (!showConsent) return null;
  
  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="fixed z-50 bottom-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-auto md:max-w-lg rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
        >
          <div className="p-3 sm:p-5">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="mr-2 p-1.5 rounded-full bg-primary/10">
                  <Cookie className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                  Gestion des cookies
                </h3>
              </div>
              
              <button 
                onClick={rejectAll} 
                className="text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
              Nous utilisons des cookies pour améliorer votre expérience. Pour en savoir plus, consultez notre{' '}
              <Link to="/privacy" className="text-primary hover:underline">
                politique de confidentialité
              </Link>.
            </p>
            
            <div className={`flex ${isMobile ? 'flex-col gap-2' : 'flex-wrap gap-2 justify-end'}`}>
              <Button
                variant="ghost"
                size="sm"
                onClick={acceptNecessary}
                className={`text-xs py-1 ${isMobile ? 'w-full' : ''}`}
              >
                Essentiels uniquement
              </Button>
              
              <Button
                onClick={acceptAll}
                size="sm"
                className={`bg-primary hover:bg-primary/90 text-xs py-1 ${isMobile ? 'w-full' : ''}`}
              >
                Accepter tous
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
