
import React, { useMemo } from 'react';
import SchemaData from '../SchemaData';
import { 
  generateOrganizationSchema, 
  generateWebsiteSchema, 
  generateLocalBusinessSchema, 
  generateFaqSchema
} from '../../utils/schemaUtils';

// Product schema for SMS marketing service
const productSchema = {
  "name": "Campagne SMS Marketing",
  "description": "Envoi de SMS professionnels pour vos campagnes marketing - SMS pas cher et sans engagement",
  "brand": {
    "@type": "Brand",
    "name": "Campagne SMS"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "EUR",
    "lowPrice": "0.029",
    "highPrice": "0.059",
    "priceValidUntil": "2026-01-01",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "1245"
  }
};

// FAQ data for schema
const faqItems = [
  {
    question: "Qu'est-ce qu'une campagne SMS ?",
    answer: "Une campagne SMS est une action marketing consistant à envoyer des messages texte à un groupe ciblé de clients ou prospects pour promouvoir un produit, service, ou partager une information importante."
  },
  {
    question: "Quels sont les avantages du SMS marketing ?",
    answer: "Le SMS marketing offre un taux d'ouverture supérieur à 95%, une communication instantanée, un coût bas, une personnalisation efficace, et des statistiques détaillées pour mesurer vos performances."
  },
  {
    question: "Comment puis-je m'inscrire à votre service ?",
    answer: "L'inscription est simple et rapide. Rendez-vous sur notre page d'inscription, remplissez le formulaire avec vos informations et vous pourrez commencer à envoyer des SMS immédiatement."
  },
  {
    question: "Est-ce que je peux programmer l'envoi de mes SMS ?",
    answer: "Oui, notre plateforme permet de programmer vos envois de SMS à l'avance, à la date et à l'heure qui vous conviennent le mieux."
  },
  {
    question: "Vos services sont-ils conformes au RGPD ?",
    answer: "Absolument. Nous respectons scrupuleusement le Règlement Général sur la Protection des Données (RGPD) et mettons en place toutes les mesures nécessaires pour assurer la confidentialité de vos données."
  }
];

export const IndexPageSchema = () => {
  const schemaData = useMemo(() => [
    generateOrganizationSchema(),
    generateWebsiteSchema(),
    generateLocalBusinessSchema(),
    productSchema,
    generateFaqSchema(faqItems)
  ], []);

  return (
    <SchemaData 
      type={['Organization', 'WebSite', 'LocalBusiness', 'Product', 'FAQPage']} 
      data={schemaData}
    />
  );
};

export default IndexPageSchema;
