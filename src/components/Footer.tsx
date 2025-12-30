
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  
  // Add force scroll to top function for footer links
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200/50 dark:border-gray-800/50 pt-16 pb-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Campagne SMS</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              La solution d'envoi de SMS en ligne pour les professionnels. Simple, rapide et efficace.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">
                  131 av. du Prado 13008 Marseille
                </span>
              </div>
              <div className="flex items-center gap-2 hover:text-primary transition-colors group">
                <Phone className="h-4 w-4 text-gray-500 dark:text-gray-400 group-hover:text-primary" />
                <a href="tel:0484849833" className="text-gray-600 dark:text-gray-400 group-hover:text-primary group-hover:underline">
                  04 84 84 98 33
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">
                  contact@campagnesms.com
                </span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <ExternalLink className="text-primary/80 mr-2" size={18} />
              Liens rapides
            </h3>
            <div className="space-y-1">
              <Link to="/le-sms" className="flex items-center gap-2 hover:text-primary transition-colors py-2" onClick={handleLinkClick}>
                <Check className="h-4 w-4 text-primary" /> Le SMS
              </Link>
              <Link to="/avantages" className="flex items-center gap-2 hover:text-primary transition-colors py-2" onClick={handleLinkClick}>
                <Check className="h-4 w-4 text-primary" /> Avantages
              </Link>
              <Link to="/tarifs" className="flex items-center gap-2 hover:text-primary transition-colors py-2" onClick={handleLinkClick}>
                <Check className="h-4 w-4 text-primary" /> Tarifs
              </Link>
              <Link to="/contact" className="flex items-center gap-2 hover:text-primary transition-colors py-2" onClick={handleLinkClick}>
                <Check className="h-4 w-4 text-primary" /> Contact
              </Link>
            </div>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <div className="space-y-1">
              <Link to="/contact" className="flex items-center gap-2 hover:text-primary transition-colors py-2" onClick={handleLinkClick}>
                <Check className="h-4 w-4 text-primary" /> Assistance
              </Link>
              <Link to="/conditions-d-utilisation" className="flex items-center gap-2 hover:text-primary transition-colors py-2" onClick={handleLinkClick}>
                <Check className="h-4 w-4 text-primary" /> Conditions d'utilisation
              </Link>
              <Link to="/politique-de-confidentialite" className="flex items-center gap-2 hover:text-primary transition-colors py-2" onClick={handleLinkClick}>
                <Check className="h-4 w-4 text-primary" /> Politique de confidentialité
              </Link>
              <Link to="/politique-de-confidentialite" className="flex items-center gap-2 hover:text-primary transition-colors py-2" onClick={handleLinkClick}>
                <Check className="h-4 w-4 text-primary" /> Légales
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom section - now centered */}
        <div className="mt-12 py-4 border-t border-gray-200/50 dark:border-gray-800/50 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Campagne SMS. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
