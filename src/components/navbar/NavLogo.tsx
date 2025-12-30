
import { Globe } from 'lucide-react';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NavLogo = () => {
  const navigate = useNavigate();
  
  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        stiffness: 200, 
        delay: 0.2 
      } 
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Clear any section storage when going to home
    sessionStorage.removeItem('__currentSection');
    sessionStorage.removeItem('__preservedHash');
    sessionStorage.removeItem('__lastHash');
    sessionStorage.removeItem('__isNavigationEvent');
    
    // Replace current URL with clean home URL without hash
    window.history.pushState(null, "", "/");
    
    // Use React Router navigate to go to home
    navigate("/", { replace: true });
    
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div 
      variants={logoVariants}
      className="flex-shrink-0 flex items-center"
    >
      <a 
        href="/" 
        className="font-bold tracking-tight hover:opacity-80 transition-opacity flex items-center gap-2 group text-2xl md:text-3xl"
        aria-label="Campagne SMS - Retour à l'accueil"
        onClick={handleLogoClick}
      >
        <Globe className="text-primary group-hover:animate-spin-slow transition-all h-7 w-7 md:h-8 md:w-8" strokeWidth={2.5} />
        <span className="gradient-text group-hover:opacity-80">
          <motion.span 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Campagne
          </motion.span>
          <motion.span 
            className="inline-block w-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            aria-hidden="true"
          ></motion.span>
          <motion.span 
            className="text-primary font-extrabold"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            SMS
          </motion.span>
        </span>
      </a>
    </motion.div>
  );
};

export default NavLogo;
