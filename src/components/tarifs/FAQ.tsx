import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import SchemaData from '../SchemaData';
import { generateFaqSchema } from '../../utils/schemaUtils';

type FAQItem = {
  _id?: string;
  question: string;
  answer: string;
};

interface FAQProps {
  data?: FAQItem[];
}

export const FAQ = ({ data = [] }: FAQProps) => {
  // Generate FAQ schema from API data
  const faqSchema = useMemo(
    () => generateFaqSchema(data),
    [data]
  );

  if (!data.length) return null;

  return (
    <section className="py-16 px-4" id="faq">
      {/* FAQ Schema */}
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

        <Accordion
          type="single"
          collapsible
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
        >
          {data.map((item, index) => (
            <motion.div
              key={item._id || index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="border-b border-gray-200 dark:border-gray-700 last:border-b-0"
              >
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
