
import { MessageSquare, Zap, Lock, BarChart, Check, Award, Users } from 'lucide-react';
import LiveChat from '../components/LiveChat';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOMetadata from '../components/SEOMetadata';
import SchemaData from '../components/SchemaData';
import { useEffect, useState } from 'react';
import * as Icons from "lucide-react";

const LeSms = () => {
  const [data, setData] = useState(null);
useEffect(() => {
  let isMounted = true;

  fetch('https://sms-compaign-backend.onrender.com/api/le-sms', { cache: 'no-store' })
    .then(res => res.json())
    .then(res => {
      if (isMounted) {
        console.log('SETTING DATA:', res.hero?.title);
        setData(res);
      }
    });

  return () => {
    isMounted = false;
  };
}, []);


  console.log(data, 'sms page data');

  if (!data) return null; // or loader
  // FAQ schema for the SMS page
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faq
      ?.filter(f => f.isActive)
      ?.sort((a, b) => a.order - b.order)
      ?.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
  };


  return (
    <>
      <SEOMetadata
        title={data.seo?.title}
        description={data.seo?.description}
        keywords={data.seo?.keywords}
        canonicalUrl={data.seo?.canonicalUrl}
      />

      <SchemaData type="FAQPage" data={faqSchema} />

      <div className="min-h-screen">
        <section className="min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              <span className="gradient-text">{data.hero?.title}</span>
              <motion.span
                className="block h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-2 w-1/5"
                initial={{ width: 0 }}
                animate={{ width: "20%" }}
                transition={{ delay: 0.5, duration: 0.7 }}
              />
            </h1>


            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mt-12">
              <motion.div
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:border-primary/30 border border-gray-100 dark:border-gray-700"
              >
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                  <Award className="h-6 w-6 text-primary" />
                  {data.whySms?.title}
                </h2>

                <ul className="space-y-5">
                  {data.whySms?.items
                    ?.filter(i => i.isActive)
                    ?.sort((a, b) => a.order - b.order)
                    ?.map((item, idx) => {
                      const Icon = Icons[item.icon];

                      return (
                        <motion.li
                          key={idx}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-start gap-4 transition-all"
                        >
                          <div className={`h-10 w-10 bg-${item.iconBg}/10 rounded-full flex items-center justify-center mt-1`}>
                            {Icon && <Icon className={`h-5 w-5 text-${item.iconColor}`} />}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">{item.title}</p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">{item.description}</p>
                          </div>
                        </motion.li>
                      );
                    })}
                </ul>

              </motion.div>

              <motion.div
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:border-primary/30 border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                  <Users className="h-5 w-5 text-primary" />
                  {data.advantages?.title}
                </h3>

                <ul className="space-y-4">
                  {data.advantages?.items
                    ?.filter(i => i.isActive)
                    ?.sort((a, b) => a.order - b.order)
                    ?.map((item, idx) => (
                      <motion.li
                        key={idx}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-3 transition-all"
                      >
                        <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center">
                          <Check className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <p className="text-gray-800 dark:text-gray-200">{item.description}</p>
                      </motion.li>
                    ))}
                </ul>

              </motion.div>
            </div>

            {/* Cas d'usage section */}
            <div className="mt-16 sm:mt-24">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900 dark:text-white">
                {data.useCases?.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {data.useCases?.items
                  ?.filter(i => i.isActive)
                  ?.sort((a, b) => a.order - b.order)
                  ?.map((item, idx) => {
                    const Icon = Icons[item.icon];

                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -8 }}
                        className="card hover-scale bg-white dark:bg-gray-800 backdrop-blur-sm group p-6 rounded-xl"
                      >
                        <div className={`h-12 w-12 bg-${item.color}/10 rounded-full flex items-center justify-center mb-4`}>
                          {Icon && <Icon className={`h-6 w-6 text-${item.color}`} />}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          {item.description}
                        </p>
                      </motion.div>
                    );
                  })}
              </div>

            </div>

            {/* Call to action */}
            <div className="mt-16 sm:mt-24 text-center">
              <motion.div
                whileHover={{ scale: 1.03, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-xl p-6 sm:p-10 shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {data.cta?.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-200 mb-8 max-w-2xl mx-auto">
                  {data.cta?.description}
                </p>

                <Link
                  to={data.cta?.buttonLink}
                  className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-medium"
                >
                  {data.cta?.buttonLabel}
                </Link>
              </motion.div>
            </div>
          </div>
        </section >

        <LiveChat />
      </div >
    </>
  );
};

export default LeSms;
