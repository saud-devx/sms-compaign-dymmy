
import { cn } from "@/lib/utils";
import { MessageSquare, CreditCard, Cog, Star } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationItemsProps {
  activeSection: string | null;
  handleNavigation: (to: string) => void;
}

const NavigationItems = ({ activeSection, handleNavigation }: NavigationItemsProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="hidden md:flex items-center space-x-6">
      <Link 
        to="/services"
        className={cn(
          "transition-all duration-300 flex items-center gap-2 px-4 py-2 rounded-full no-underline",
          "hover:bg-primary/20 hover:text-primary hover:no-underline",
          isActive('/services') ? "text-primary font-medium bg-primary/20" : "hover:text-primary"
        )}
        data-section="services"
      >
        <Cog className="h-4 w-4" />
        Services
      </Link>
      <Link
        to="/le-sms"
        className={cn(
          "transition-all duration-300 flex items-center gap-2 px-4 py-2 rounded-full no-underline",
          "hover:bg-primary/20 hover:text-primary hover:no-underline",
          isActive('/le-sms') ? "text-primary font-medium bg-primary/20" : "hover:text-primary"
        )}
        data-section="le-sms"
      >
        <MessageSquare className="h-4 w-4" />
        Le SMS
      </Link>
      <Link
        to="/avantages"
        className={cn(
          "transition-all duration-300 flex items-center gap-2 px-4 py-2 rounded-full no-underline",
          "hover:bg-primary/20 hover:text-primary hover:no-underline",
          isActive('/avantages') ? "text-primary font-medium bg-primary/20" : "hover:text-primary"
        )}
        data-section="avantages"
      >
        <Star className="h-4 w-4" />
        Avantages
      </Link>
      <Link
        to="/tarifs"
        className={cn(
          "transition-all duration-300 flex items-center gap-2 px-4 py-2 rounded-full no-underline",
          "hover:bg-primary/20 hover:text-primary hover:no-underline",
          isActive('/tarifs') ? "text-primary font-medium bg-primary/20" : "hover:text-primary"
        )}
        data-section="tarifs"
      >
        <CreditCard className="h-4 w-4" />
        Tarifs
      </Link>
    </div>
  );
};

export default NavigationItems;
