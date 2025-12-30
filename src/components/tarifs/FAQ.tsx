
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import SchemaData from '../SchemaData';
import { generateFaqSchema } from '../../utils/schemaUtils';

const faqItems = [
  {
    question: "Comment sont calculés les tarifs ?",
    answer: "Nos tarifs sont calculés en fonction du volume de SMS envoyés. Plus vous envoyez de messages, plus le tarif unitaire est avantageux. Tous les prix sont indiqués hors taxes."
  },
  {
    question: "Existe-t-il un engagement minimum ?",
    answer: "Non, nos forfaits sont sans engagement. Vous pouvez ajuster votre formule à tout moment en fonction de vos besoins, à la hausse comme à la baisse."
  },
  {
    question: "Puis-je tester votre service avant de m'engager ?",
    answer: "Absolument ! Vous pouvez créer un compte gratuit et bénéficier de 10 SMS de test pour essayer notre plateforme sans engagement."
  },
  {
    question: "Les SMS non utilisés sont-ils reportés au mois suivant ?",
    answer: "Les crédits SMS achetés n'expirent pas et sont disponibles jusqu'à leur utilisation complète. Il n'y a pas de perte de crédits non utilisés."
  },
  {
    question: "Comment puis-je passer d'un forfait à un autre ?",
    answer: "Vous pouvez changer de forfait à tout moment depuis votre espace client dans la section 'Mon abonnement'. Le changement prend effet immédiatement."
  }
];

export const FAQ = () => {
  // Generate FAQ schema data
  const faqSchema = useMemo(() => generateFaqSchema(faqItems), []);
  
  return (
    <section className="py-16 px-4" id="faq">
      {/* Add FAQ Schema */}
      <SchemaData type="FAQPage" data={faqSchema} />
      
      <motion.div 
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          Questions <span className="gradient-text">fréquentes</span>
        </motion.h2>
        
        <Accordion type="single" collapsible className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <AccordionItem value={`item-${index}`} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                <AccordionTrigger className="py-5 text-gray-900 dark:text-white font-medium hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300 pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
};
