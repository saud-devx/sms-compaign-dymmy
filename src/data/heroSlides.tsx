
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Hero slides with verified working HD images related to SMS campaigns
export const HERO_SLIDES = [
  {
    title: (
      <>
        Votre partenaire n°1 pour vos <span className="gradient-text">campagnes de SMS</span>
      </>
    ),
    description: "Campagne SMS est une plateforme d'envoi de SMS professionnels. Envois unitaires ou campagnes SMS marketing, sans engagement, sans frais additionnels, sans date limite d'utilisation.",
    buttons: [
      <Button asChild variant="gradient" key="services">
        <Link to="/services" className="shadow-lg hover:shadow-xl transition-all">
          Nos Services
        </Link>
      </Button>,
      <Button asChild variant="outline" key="tarifs" className="bg-primary hover:bg-primary/90 text-white border-none shadow-md hover:shadow-lg">
        <Link to="/tarifs">
          Nos Tarifs
        </Link>
      </Button>
    ]
  },
  {
    title: (
      <>
        Lancez une <span className="gradient-text">campagne SMS efficace</span> en quelques clics
      </>
    ),
    description: "Partagez vos offres et alertes instantanément avec notre plateforme SMS simple, rapide et sécurisée. Bénéficiez d'un support client dédié et d'une gestion sans stress pour votre SMS marketing.",
    buttons: [
      <Button asChild key="services2" className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all">
        <Link to="/services">
          Découvrir
        </Link>
      </Button>
    ]
  },
  {
    title: (
      <>
        Plateforme SMS <span className="gradient-text">sécurisée & GDPR</span>
      </>
    ),
    description: "Données hébergées en France, serveurs performants et support illimité : notre infrastructure garantit la sécurité et la conformité pour vos campagnes SMS marketing.",
    buttons: [
      <Button asChild variant="gradient" key="contact">
        <Link to="/contact" className="shadow-lg hover:shadow-xl transition-all">
          Contactez-nous
        </Link>
      </Button>,
      <Button asChild variant="outline" key="le-sms" className="bg-primary hover:bg-primary/90 text-white border-none shadow-md hover:shadow-lg">
        <Link to="/le-sms">
          En savoir plus
        </Link>
      </Button>
    ]
  }
];
