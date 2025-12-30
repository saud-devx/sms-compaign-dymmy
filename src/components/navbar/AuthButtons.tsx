
import React from 'react';
import ThemeToggle from '../ThemeToggle';
import { ExternalLink } from 'lucide-react';

const AuthButtons = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <ThemeToggle />
      <a 
        href="https://client.campagnesms.com/connectez-vous" 
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 hover:-translate-y-0.5 transition-all shadow-sm hover:shadow-md flex items-center gap-2"
      >
        Connexion
        <ExternalLink size={14} />
      </a>
      <a 
        href="https://client.campagnesms.com/inscription" 
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:brightness-110 hover:-translate-y-0.5 transition-all shadow-sm hover:shadow-md flex items-center gap-2"
      >
        Inscription
        <ExternalLink size={14} />
      </a>
    </div>
  );
};

export default AuthButtons;
