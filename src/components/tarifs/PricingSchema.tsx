
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface PricingSchemaProps {
  plans: Array<{
    title: string;
    price: string;
    priceUnit: string;
    priceDetail: string;
    features: string[];
    popular?: boolean;
  }>;
}

export const PricingSchema = ({ plans }: PricingSchemaProps) => {
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Service SMS Marketing Campagne SMS",
    "description": "Service d'envoi de SMS marketing professionnel avec tarifs flexibles",
    "provider": {
      "@type": "Organization",
      "name": "Campagne SMS",
      "url": "https://campagnesms.com"
    },
    "offers": plans.map(plan => ({
      "@type": "Offer",
      "name": `Plan ${plan.title}`,
      "description": `Forfait SMS ${plan.title} avec ${plan.features.join(', ')}`,
      "price": plan.price,
      "priceCurrency": "EUR",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://client.campagnesms.com/inscription",
      "eligibleRegion": "FR",
      "category": "SMS Marketing Service",
      "includesObject": plan.features.map(feature => ({
        "@type": "TypeAndQuantityNode",
        "typeOfGood": {
          "@type": "Service",
          "name": feature
        }
      }))
    })),
    "areaServed": "France",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Catalogue des Prix SMS",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "200 SMS",
          "offers": {
            "@type": "Offer",
            "price": "11.00",
            "priceCurrency": "EUR"
          }
        },
        {
          "@type": "OfferCatalog", 
          "name": "700 SMS",
          "offers": {
            "@type": "Offer",
            "price": "37.10",
            "priceCurrency": "EUR"
          }
        },
        {
          "@type": "OfferCatalog",
          "name": "3000 SMS", 
          "offers": {
            "@type": "Offer",
            "price": "150.00",
            "priceCurrency": "EUR"
          }
        },
        {
          "@type": "OfferCatalog",
          "name": "7000 SMS",
          "offers": {
            "@type": "Offer", 
            "price": "329.00",
            "priceCurrency": "EUR"
          }
        },
        {
          "@type": "OfferCatalog",
          "name": "20000 SMS",
          "offers": {
            "@type": "Offer",
            "price": "860.00", 
            "priceCurrency": "EUR"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(pricingSchema)}
      </script>
    </Helmet>
  );
};

export default PricingSchema;
