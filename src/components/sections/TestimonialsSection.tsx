
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

// Testimonials data
const TESTIMONIALS = [
  {
    name: "Sophie",
    company: "Retail Express",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150",
    quote: "Nous utilisons Campagne SMS depuis 1 an pour informer nos clients des promotions. Le taux de réponse a augmenté de 35% !",
    rating: 5
  },
  {
    name: "Thomas",
    company: "Restaurant Le Gourmet",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150",
    quote: "Interface intuitive, support client réactif et excellent taux de livraison. Parfait pour nos notifications de réservation.",
    rating: 5
  },
  {
    name: "Marie",
    company: "Clinique Santé+",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150",
    quote: "La plateforme nous a permis de réduire considérablement les rendez-vous manqués grâce aux rappels par SMS automatisés.",
    rating: 4
  },
  {
    name: "Jean",
    company: "Agence Immobilière Prestige",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=150",
    quote: "Solution fiable et sécurisée qui nous a permis d'améliorer notre communication avec nos clients potentiels.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-primary/20"></div>
        <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-secondary/20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title mb-4">Ce que nos clients disent</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Découvrez les expériences de nos clients qui utilisent notre plateforme pour leurs campagnes SMS.
          </p>
        </motion.div>
        
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:pl-6 lg:basis-1/2 xl:basis-1/3">
                <div className="h-full">
                  <motion.div 
                    className="h-full p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800 border-l-4 border-primary flex flex-col relative overflow-hidden"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Quote mark in background */}
                    <div className="absolute -right-5 -top-5 text-9xl text-primary/5 font-serif z-0 select-none">
                      "
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-primary">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "https://placehold.co/150x150?text=Profile";
                            }}
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.company}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              size={18}
                              className={`${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                            />
                          ))}
                        </div>
                      </div>
                      
                      <blockquote className="flex-grow mb-6">
                        <p className="italic text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                          "{testimonial.quote}"
                        </p>
                      </blockquote>
                    </div>
                    
                    <div className="flex justify-end mt-auto">
                      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                        <MessageSquare size={18} />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <div className="flex justify-center mt-10">
          <Button asChild variant="default" className="bg-primary/90 hover:bg-primary rounded-full px-8 py-6 hover:brightness-110 hover:shadow-lg">
            <Link to="/contact" className="flex items-center gap-2 font-medium">
              Partagez votre expérience <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
