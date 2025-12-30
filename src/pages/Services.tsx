import { useEffect, useState } from 'react';
import {
  MessageSquare,
  Shield,
  Clock,
  Users,
  Zap,
  BarChart,
  ArrowRight,
  CheckCircle,
  FileText
} from 'lucide-react';
import LiveChat from '../components/LiveChat';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOMetadata from '../components/SEOMetadata';
import { InternalLinks } from '../components/seo/InternalLinks';

const iconMap: any = {
  MessageSquare,
  Shield,
  Clock,
  Users,
  Zap,
  BarChart
};

const Services = () => {
  const isMobile = useIsMobile();

  const [services, setServices] = useState<any[]>([]);
  const [features, setFeatures] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const s = await fetch('https://sms-compaign-backend.onrender.com/api/services').then(r => r.json());
      const f = await fetch('https://sms-compaign-backend.onrender.com/api/features').then(r => r.json());

      setServices(s || []);
      setFeatures(f || []);
    };

    load();
  }, []);

  return (
    <>
      <SEOMetadata
        title="Services SMS - Plateforme d'envoi de SMS professionnels"
        description="Plateforme SMS professionnelle pour campagnes marketing, API SMS et envoi automatique."
        canonicalUrl="https://www.campagnesms.com/services"
      />

      <div className="min-h-screen">

        {/* SERVICES GRID */}
        <section className="min-h-[80vh] pt-32 pb-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Services SMS Professionnels</span>
              </h1>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {services
                .filter(s => s.isActive)   // ✅ only active services
                .map(s => {
                  const Icon = iconMap[s.icon];
                  const accent = s.color === 'secondary' ? 'secondary' : 'primary';

                  return (
                    <div
                      key={s._id}
                      className="card hover-scale bg-white/90 dark:bg-gray-800/90 group"
                    >
                      <div
                        className={`h-14 w-14 bg-${accent}/10 rounded-full flex items-center justify-center mb-4`}
                      >
                        {Icon && <Icon className={`h-8 w-8 text-${accent}`} />}
                      </div>

                      <h3
                        className={`text-xl font-semibold mb-2 group-hover:text-${accent}`}
                      >
                        {s.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300">
                        {s.description}
                      </p>
                    </div>
                  );
                })}
            </div>

          </div>
        </section>

        {/* ADVANCED FEATURES */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6"><span className="gradient-text">Fonctionnalités Avancées</span></h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Découvrez nos outils professionnels qui permettent d'optimiser vos campagnes SMS marketing et d'obtenir des résultats exceptionnels avec notre pack SMS professionnel.
              </p>
            </div>

            <div className="space-y-16">
              {features
                .filter(f => f.isActive)   // ✅ only active features
                .map((f, i) => {
                  const reverse = i % 2 !== 0;
                  const accent = f.iconColor === 'secondary' ? 'secondary' : 'primary';

                  return (
                    <motion.div
                      key={f._id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}
                    >
                      <div className="md:w-1/2">
                        <div className={`p-2 bg-gradient-to-br from-${accent}/20 to-secondary/20 rounded-2xl`}>
                          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                            <img
                              src={f.image}
                              alt={f.title}
                              className="rounded-lg aspect-video object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                          {f.description}
                        </p>

                        <ul className="space-y-3">
                          {f.bullets?.map((b: string, idx: number) => (
                            <li key={idx} className="flex gap-2">
                              <CheckCircle className={`h-6 w-6 text-${accent}`} />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}

            </div>
          </div>
        </section>

        {/* CTA Section with updated content */}
        <section className="py-20 relative bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-gray-800 dark:to-gray-900">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2000"
              alt="Background"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 text-center"
            >
              <FileText className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl font-bold mb-4">Prêt à démarrer votre campagne SMS ?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Découvrez notre plateforme SMS avec prix SMS compétitifs. Forfait SMS illimité adapté à tous types d'entreprises pour vos campagnes SMS marketing et campagne d'envoi SMS.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/tarifs">
                  <Button variant="default" size="lg" className="rounded-full px-8">
                    <span className="flex items-center gap-2">
                      Voir nos prix SMS <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="rounded-full px-8">
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Explorez nos solutions complètes
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Découvrez comment notre plateforme SMS peut transformer votre communication d'entreprise avec nos forfait SMS et logiciel SMS marketing
              </p>
            </motion.div>

            <InternalLinks currentPage="services" variant="horizontal" />
          </div>
        </section>
        <LiveChat />
      </div>
    </>
  );
};
//  yahan tak functionality fine 

export default Services;
