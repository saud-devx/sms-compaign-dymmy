
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, CreditCard, Cog, Phone, X, Star } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
  DrawerDescription,
} from "@/components/ui/drawer";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  handleNavigation: (to: string, isExternal?: boolean) => void;
  activeSection: string;
}

const MobileMenu = ({ isOpen, onClose, handleNavigation, activeSection }: MobileMenuProps) => {
  return (
    <Drawer open={isOpen} onOpenChange={(open) => {
      if (!open) onClose();
    }}>
      <DrawerContent className="h-[85vh] max-h-[85vh] rounded-t-xl border-t-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <DrawerHeader className="pb-3">
          <div className="flex items-center justify-between">
            <DrawerTitle className="text-xl font-bold text-primary">Menu</DrawerTitle>
            <DrawerDescription className="sr-only">Navigation menu</DrawerDescription>
            <DrawerClose onClick={onClose} className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="sr-only">Close</span>
            </DrawerClose>
          </div>
        </DrawerHeader>
        
        <div className="flex-1 overflow-y-auto px-5 py-3 space-y-6">
          {/* Navigation Menu */}
          <nav aria-label="Mobile navigation">
            <ul className="space-y-3.5">
              <li>
                <Link to="/services" onClick={onClose}>
                  <NavItem 
                    icon={<Cog className="h-5 w-5 text-primary" />} 
                    label="Services"
                    isActive={activeSection === 'services'}
                  />
                </Link>
              </li>
              <li>
                <Link to="/le-sms" onClick={onClose}>
                  <NavItem 
                    icon={<MessageSquare className="h-5 w-5 text-primary" />} 
                    label="Le SMS"
                    isActive={activeSection === 'le-sms'}
                  />
                </Link>
              </li>
              <li>
                <Link to="/avantages" onClick={onClose}>
                  <NavItem 
                    icon={<Star className="h-5 w-5 text-primary" />} 
                    label="Avantages"
                    isActive={activeSection === 'avantages'}
                  />
                </Link>
              </li>
              <li>
                <Link to="/tarifs" onClick={onClose}>
                  <NavItem 
                    icon={<CreditCard className="h-5 w-5 text-primary" />} 
                    label="Tarifs"
                    isActive={activeSection === 'tarifs'}
                  />
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={onClose}>
                  <NavItem 
                    icon={<Phone className="h-5 w-5 text-primary" />} 
                    label="Contact"
                    isActive={activeSection === 'contact'}
                  />
                </Link>
              </li>
            </ul>
          </nav>

          {/* CTA Buttons */}
          <div className="pt-5 space-y-4">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Accès Rapide</h3>
            <motion.a 
              href="https://client.campagnesms.com/connectez-vous" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full text-center justify-center px-4 py-3.5 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all font-medium"
              onClick={() => onClose()}
              whileTap={{ scale: 0.98 }}
            >
              Connexion
            </motion.a>
            <motion.a 
              href="https://client.campagnesms.com/inscription" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full text-center justify-center px-4 py-3.5 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors font-medium"
              onClick={() => onClose()}
              whileTap={{ scale: 0.98 }}
            >
              Inscription
            </motion.a>
          </div>
          
          {/* Phone Number */}
          <div className="pt-2">
            <div className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Besoin d'aide?</h3>
              <a 
                href="tel:0484849833" 
                className="flex items-center gap-3 px-4 py-3.5 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all rounded-lg font-medium border border-gray-100 dark:border-gray-700 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span>04 84 84 98 33</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="py-6 px-5 border-t border-gray-100 dark:border-gray-800">
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} CampagneSMS. Tous droits réservés.
          </p>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

// Helper component for nav items
const NavItem = ({ 
  icon, 
  label, 
  isActive 
}: { 
  icon: React.ReactNode, 
  label: string, 
  isActive: boolean
}) => {
  return (
    <div 
      className={cn(
        "flex items-center w-full p-4 rounded-lg",
        "bg-white dark:bg-gray-800",
        isActive 
          ? "border-primary/50 shadow-md ring-1 ring-primary/20" 
          : "border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700",
        "border transition-all shadow-sm"
      )}
    >
      <div className="flex items-center gap-3 w-full">
        <div className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
          isActive ? "bg-primary/20" : "bg-primary/10"
        )}>
          {icon}
        </div>
        <span className={cn(
          "font-medium",
          isActive ? "text-primary" : ""
        )}>{label}</span>
        <div className="ml-auto">
          <svg 
            className={cn(
              "h-5 w-5", 
              isActive ? "text-primary" : "text-gray-400"
            )} 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
