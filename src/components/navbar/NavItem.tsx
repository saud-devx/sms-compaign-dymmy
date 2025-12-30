
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavItemProps {
  to: string;
  icon: LucideIcon;
  isActive: boolean;
  children: React.ReactNode;
}

const NavItem = ({ to, icon: Icon, isActive, children }: NavItemProps) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "group flex items-center gap-1.5 rounded-full px-2 lg:px-3 py-1.5 lg:py-2 transition-all text-sm lg:text-base relative overflow-hidden",
        isActive 
          ? "text-primary font-medium bg-primary/10 dark:bg-primary/20" 
          : "hover:bg-gray-50 dark:hover:bg-gray-800/80 hover:text-primary"
      )}
    >
      <Icon size={18} className={cn("transition-all", isActive ? "text-primary" : "group-hover:text-primary")} /> 
      <span className="relative z-10">{children}</span>
      {isActive && (
        <motion.span 
          className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full -z-0"
          layoutId="nav-indicator"
        />
      )}
    </Link>
  );
};

export default NavItem;

