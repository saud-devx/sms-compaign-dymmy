
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Calculator, Shield, BookOpen, CheckCircle } from 'lucide-react';

interface InternalLink {
  to: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  keywords: string[];
}

interface InternalLinksProps {
  currentPage: 'home' | 'services' | 'tarifs' | 'le-sms' | 'avantages' | 'contact';
  variant?: 'grid' | 'horizontal' | 'minimal';
}

export const InternalLinks = ({ currentPage, variant = 'grid' }: InternalLinksProps) => {
  const allLinks: Record<string, InternalLink> = {
    services: {
      to: '/services',
      title: 'Services SMS',
      description: 'Découvrez notre plateforme sms complète pour l\'envoi de sms professionnel',
      icon: <MessageSquare className="w-6 h-6" />,
      keywords: ['plateforme sms', 'envoi de sms', 'api sms', 'sms marketing']
    },
    tarifs: {
      to: '/tarifs',
      title: 'Prix SMS',
      description: 'Tarifs transparents pour vos campagnes sms avec prix sms compétitifs',
      icon: <Calculator className="w-6 h-6" />,
      keywords: ['prix sms', 'tarif sms', 'prix campagne sms', 'forfait sms']
    },
    'le-sms': {
      to: '/le-sms',
      title: 'Le SMS Marketing',
      description: 'Guide complet sur les avantages du sms marketing pour votre entreprise',
      icon: <BookOpen className="w-6 h-6" />,
      keywords: ['sms marketing', 'guide sms', 'communication sms', 'marketing mobile']
    },
    avantages: {
      to: '/avantages',
      title: 'Avantages SMS',
      description: 'Pourquoi choisir notre solution de campagne sms pour votre communication',
      icon: <CheckCircle className="w-6 h-6" />,
      keywords: ['avantages sms', 'communication sms', 'marketing mobile', 'campagne sms']
    },
    contact: {
      to: '/contact',
      title: 'Contact',
      description: 'Contactez nos experts pour votre projet de sms marketing professionnel',
      icon: <Shield className="w-6 h-6" />,
      keywords: ['contact sms', 'support sms', 'aide campagne sms', 'conseil sms']
    }
  };

  const getRelevantLinks = (): InternalLink[] => {
    const linkMappings: Record<string, string[]> = {
      home: ['services', 'tarifs', 'le-sms', 'avantages'],
      services: ['tarifs', 'le-sms', 'avantages', 'contact'],
      tarifs: ['services', 'le-sms', 'contact', 'avantages'],
      'le-sms': ['services', 'tarifs', 'avantages', 'contact'],
      avantages: ['services', 'tarifs', 'le-sms', 'contact'],
      contact: ['services', 'tarifs', 'le-sms', 'avantages']
    };

    return linkMappings[currentPage]?.map(key => allLinks[key]) || [];
  };

  const relevantLinks = getRelevantLinks();

  if (variant === 'minimal') {
    return (
      <div className="flex flex-wrap gap-2 text-sm">
        {relevantLinks.slice(0, 3).map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className="text-primary hover:text-primary/80 underline transition-colors"
          >
            {link.title}
          </Link>
        ))}
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {relevantLinks.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className="group p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="text-primary">{link.icon}</div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {link.title}
                </h4>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {relevantLinks.map((link, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link
            to={link.to}
            className="group block p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                {link.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors mb-2">
                  {link.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {link.description}
                </p>
                <div className="flex items-center text-primary font-medium">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default InternalLinks;
