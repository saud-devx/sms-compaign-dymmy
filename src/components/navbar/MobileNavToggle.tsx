
import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileNavToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileNavToggle = ({ isOpen, onClick }: MobileNavToggleProps) => {
  return (
    <button
      onClick={onClick}
      className="md:hidden flex items-center justify-center p-1.5 rounded-md text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-colors"
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? (
        <X className="w-6 h-6" />
      ) : (
        <Menu className="w-6 h-6" />
      )}
    </button>
  );
};

export default MobileNavToggle;
