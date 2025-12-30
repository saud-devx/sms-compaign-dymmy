
import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import { EnhancedCard } from '@/components/enhanced-ui/EnhancedCard';

const faqItems = [
  {
    question: "Qu'est-ce qu'une campagne SMS marketing ?",
    answer: "Une campagne SMS marketing est une stratégie qui utilise l'envoi de messages texte pour promouvoir des produits, services ou offres auprès d'un public ciblé. Elle permet une communication directe et immédiate avec les clients potentiels ou existants."
  },
  {
    question: "Comment puis-je assurer la conformité GDPR pour mes campagnes SMS ?",
    answer: "Pour assurer la conformité GDPR, vous devez obtenir le consentement explicite des destinataires, offrir une option de désabonnement simple, documenter les consentements, sécuriser les données personnelles et respecter le droit à l'effacement. Notre plateforme intègre nativement ces fonctionnalités."
  },
  {
    question: "Quel est le meilleur moment pour envoyer des SMS marketing ?",
    answer: "Le meilleur moment dépend de votre audience, mais généralement les jours ouvrables entre 10h et 18h obtiennent les meilleurs taux d'engagement. Évitez les lundis matin, vendredis après-midi et les week-ends. Notre plateforme offre des outils d'analyse pour optimiser vos horaires d'envoi."
  },
  {
    question: "Comment mesurer le succès d'une campagne SMS ?",
    answer: "Le succès d'une campagne SMS se mesure par plusieurs indicateurs clés : taux de délivrabilité, taux d'ouverture, taux de conversion, ROI, taux de désabonnement et engagement. Notre plateforme fournit des tableaux de bord détaillés pour suivre ces métriques en temps réel."
  },
  {
    question: "Quelle est la longueur idéale d'un SMS marketing ?",
    answer: "Un SMS standard est limité à 160 caractères. Pour les campagnes marketing, il est recommandé de rester concis et d'aller droit au but. Incluez votre offre principale, un appel à l'action clair et une URL raccourcie si nécessaire."
  },
  {
    question: "Les campagnes SMS sont-elles plus efficaces que l'email marketing ?",
    answer: "Les SMS et les emails ont chacun leurs avantages. Les SMS ont un taux d'ouverture moyen de 98% contre 20% pour les emails, et sont généralement lus dans les 3 minutes. Cependant, les emails permettent plus de contenu et d'éléments visuels. Une stratégie combinant les deux canaux est souvent la plus efficace."
  }
];

const FaqSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden" id="faq">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-100 to-transparent dark:from-gray-800 dark:to-transparent"></div>
        <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Questions fréquentes</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tout ce que vous devez savoir sur nos services de campagne SMS
          </p>
        </motion.div>
        
        <EnhancedCard
          variant="glass"
          animation="none"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          <Accordion 
            type="single" 
            collapsible 
            className="w-full" 
            defaultValue="item-0"
          >
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-b border-gray-200 dark:border-gray-700 last:border-0"
              >
                <AccordionTrigger 
                  className="px-6 py-5 text-left font-medium text-gray-900 dark:text-gray-100 
                           hover:text-primary dark:hover:text-primary transition-colors
                           text-lg flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-1">
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </EnhancedCard>
        
        <div className="mt-10 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Vous avez d'autres questions ? N'hésitez pas à nous contacter
          </p>
          <Link 
            to="/contact" 
            className="text-primary hover:text-primary/80 font-medium flex items-center justify-center gap-2
                     transition-all duration-300 hover:underline group"
          >
            <span>Contactez notre équipe support</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
