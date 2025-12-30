
import { MessageSquare, Euro, Cog } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";
import { ExternalLink } from 'lucide-react';
import NavItem from './NavItem';
import ThemeToggle from '../ThemeToggle';

interface DesktopNavProps {
  servicePages: Array<{
    title: string;
    path: string;
  }>;
}

const DesktopNav = ({ servicePages }: DesktopNavProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
      <motion.nav 
        variants={itemVariants}
        className="flex items-center space-x-0.5"
      >
        <NavItem
          to="/services"
          icon={Cog}
          isActive={isActive('/services')}
        >
          Services
        </NavItem>

        <NavItem
          to="/le-sms"
          icon={MessageSquare}
          isActive={isActive('/le-sms')}
        >
          Le SMS
        </NavItem>

        <NavItem
          to="/tarifs"
          icon={Euro}
          isActive={isActive('/tarifs')}
        >
          Tarifs
        </NavItem>
        
        <NavItem
          to="/actualites"
          icon={MessageSquare}
          isActive={isActive('/actualites')}
        >
          Actualités
        </NavItem>
      </motion.nav>

      <motion.div 
        variants={itemVariants}
        className="h-8 w-px bg-gray-200 dark:bg-gray-700 mx-1"
      ></motion.div>

      <motion.div
        variants={itemVariants}
        className="flex items-center"
      >
        <ThemeToggle />
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="h-8 w-px bg-gray-200 dark:bg-gray-700 mx-1"
      ></motion.div>

      <motion.div 
        variants={itemVariants}
        className="flex items-center space-x-2"
      >
        <Button 
          variant="outline" 
          size="default"
          className="font-medium border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary hover:border-primary transition-all rounded-full flex items-center gap-1 px-4"
          asChild
        >
          <a href="https://client.campagnesms.com/connectez-vous" target="_blank" rel="noopener noreferrer">
            Connexion 
            <ExternalLink size={14} className="ml-1 opacity-70" />
          </a>
        </Button>
        <Button 
          size="default" 
          className="font-medium shadow-md hover:shadow-xl transition-all hover:-translate-y-1 bg-green-500 rounded-full glow-on-hover flex items-center gap-1 px-4"
          asChild
        >
          <a href="https://client.campagnesms.com/inscription" target="_blank" rel="noopener noreferrer">
            Inscription
            <ExternalLink size={14} className="ml-1 opacity-70" />
          </a>
        </Button>
      </motion.div>
    </div>
  );
};

export default DesktopNav;
