
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Star, Quote } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const clients = [
  { 
    name: "Real Escape Room", 
    logo: "RE",
    logoColor: "bg-gradient-to-br from-emerald-100 to-emerald-200 text-emerald-600 dark:from-emerald-300 dark:to-emerald-400 dark:text-emerald-800",
    bgGradient: "bg-gradient-to-br from-emerald-50 to-emerald-100/70 dark:from-emerald-400/30 dark:to-emerald-500/30",
    borderColor: "border-emerald-200 dark:border-emerald-500/50",
    description: "Escape Game n°1 sur Marseille",
    testimonial: "Campagne SMS nous a permis d'augmenter notre taux de conversion de 27% en seulement 3 mois.",
    industry: "Divertissement",
    url: "https://real-escape-room.com"
  },
  { 
    name: "Aaron Kali", 
    logo: "AK",
    logoColor: "bg-gradient-to-br from-green-100 to-green-200 text-green-600 dark:from-green-300 dark:to-green-400 dark:text-green-800",
    bgGradient: "bg-gradient-to-br from-green-50 to-green-100/70 dark:from-green-400/30 dark:to-green-500/30",
    borderColor: "border-green-200 dark:border-green-500/50",
    description: "Bijoux porteur de sens",
    testimonial: "Notre taux d'ouverture est passé de 15% à 98% en passant de l'email au SMS.",
    industry: "Commerce - Joaillerie", 
    url: "https://aaronkali.com"
  },
  { 
    name: "Saint Clair", 
    logo: "SC",
    logoColor: "bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600 dark:from-purple-300 dark:to-purple-400 dark:text-purple-800",
    bgGradient: "bg-gradient-to-br from-purple-50 to-purple-100/70 dark:from-purple-400/30 dark:to-purple-500/30",
    borderColor: "border-purple-200 dark:border-purple-500/50",
    description: "Agence de communication digitale",
    testimonial: "L'interface intuitive et le support client réactif nous ont considérablement facilité la tâche.",
    industry: "Digital agency",
  },
  { 
    name: "5e Avenue Lyon", 
    logo: "5eA",
    logoColor: "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 dark:from-blue-300 dark:to-blue-400 dark:text-blue-800",
    bgGradient: "bg-gradient-to-br from-blue-50 to-blue-100/70 dark:from-blue-400/30 dark:to-blue-500/30",
    borderColor: "border-blue-200 dark:border-blue-500/50",
    description: "Prêt-à-porter homme et femme",
    testimonial: "Les rappels SMS ont réduit de 42% les rendez-vous manqués dans nos cliniques.",
    industry: "Mode",
  }
];

const FeaturedClientsSection = () => {
  const [activeClient, setActiveClient] = useState(0);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-850"></div>
        <div className="absolute right-0 bottom-0 -mb-40 -mr-40 w-96 h-96 bg-secondary/5 dark:bg-secondary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute left-0 top-0 -ml-40 -mt-40 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Ils nous font confiance</h2>
          <p className="text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto text-balance">
            Des entreprises de tous secteurs utilisent notre plateforme pour leurs campagnes SMS et constatent des résultats exceptionnels
          </p>
        </motion.div>
        
        {/* Client cards */}
        <div className="mb-20">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {clients.map((client, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`h-full cursor-pointer overflow-hidden rounded-2xl backdrop-blur-sm border-2 group ${client.borderColor} ${client.bgGradient}`}
                    onClick={() => setActiveClient(index)}
                  >
                    <div className="relative h-full flex flex-col p-6">
                      {/* Upper part with logo */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-16 h-16 ${client.logoColor} flex items-center justify-center rounded-2xl shadow-lg text-2xl font-bold`}>
                          {client.logo}
                        </div>
                        <div className="bg-white/40 dark:bg-gray-700/60 backdrop-blur-sm p-2 rounded-full shadow-sm">
                          <div className="flex gap-0.5 justify-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Company info */}
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-50 mb-1 group-hover:text-primary transition-colors">
                        {client.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
                        {client.description}
                      </p>
                      
                      {/* Industry badge */}
                      <div className="mt-auto">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/50 dark:bg-gray-700/70 text-gray-700 dark:text-gray-100 backdrop-blur-sm">
                          {client.industry}
                        </span>
                      </div>
                      
                      {/* URL if available */}
                      {client.url && (
                        <div className="mt-2 text-xs text-primary/80 hover:text-primary transition-colors truncate">
                          <a href={client.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {client.url.replace(/(^\w+:|^)\/\//, '')}
                          </a>
                        </div>
                      )}
                      
                      {/* Highlight effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Bottom highlight bar */}
                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-secondary rounded-r-full group-hover:w-full transition-all duration-500 ease-out"></div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-4" />
              <CarouselNext className="-right-4" />
            </div>
          </Carousel>
        </div>
        
        {/* Testimonial showcase */}
        <motion.div 
          className="relative rounded-2xl p-8 md:p-10 border border-primary/10 bg-white/80 dark:bg-gray-800/90 backdrop-blur-xl shadow-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          key={activeClient}
        >
          {/* Decorative elements */}
          <div className="absolute -left-3 -top-3 text-6xl text-primary/10 pointer-events-none">"</div>
          <div className="absolute -right-3 -bottom-3 text-6xl text-secondary/10 pointer-events-none">"</div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
              {/* Client logo for testimonial */}
              <div className={`w-20 h-20 ${clients[activeClient].logoColor} rounded-2xl flex items-center justify-center shadow-lg`}>
                <span className="text-3xl font-bold">{clients[activeClient].logo}</span>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-50">{clients[activeClient].name}</h3>
                    <p className="text-gray-600 dark:text-gray-200">{clients[activeClient].description}</p>
                  </div>
                  <div className="flex gap-1 justify-center md:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-100 mb-6 italic leading-relaxed">
                  "{clients[activeClient].testimonial}"
                </p>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <p className="font-medium text-gray-900 dark:text-white">Client vérifié</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-secondary" />
                    <p className="text-sm text-gray-500 dark:text-gray-300">Client depuis 2022</p>
                  </div>
                  {clients[activeClient].url && (
                    <div className="flex items-center space-x-2">
                      <a 
                        href={clients[activeClient].url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm text-primary hover:underline flex items-center gap-1"
                      >
                        Visiter le site <span className="text-xs">↗</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedClientsSection;
