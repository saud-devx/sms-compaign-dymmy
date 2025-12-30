import React from 'react';
import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const StickyPhoneBar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-primary to-primary/80 shadow-md fixed top-0 left-0 right-0 z-50 bg-opacity-100 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-2 flex items-center justify-between text-white">
          <div className="text-sm font-medium hidden sm:block opacity-90">
            Plateforme d'envoi de SMS professionels
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 mx-auto sm:mx-0"
          >
            <Button 
              variant="ghost"
              size="sm" 
              className="text-white hover:bg-white/20 hover:text-white transition-all duration-300 flex items-center gap-2 group"
              asChild
            >
              <a href="tel:0484849833" className="relative overflow-hidden rounded-md px-4 py-2">
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></span>
                <span className="font-medium hidden sm:inline">Appelez-nous maintenant :</span>
                <span className="font-bold tracking-wide text-lg flex items-center gap-2">
                  <Phone size={18} className="animate-pulse" />
                  <span className="group-hover:text-yellow-200 transition-colors duration-300">
                    04 84 84 98 33
                  </span>
                </span>
                
                {/* Border highlight effect */}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-yellow-200 group-hover:w-full transition-all duration-500 ease-out"></span>
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StickyPhoneBar;
