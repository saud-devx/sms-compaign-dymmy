
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const validateForm = () => {
    const newErrors: {
      name?: string;
      email?: string;
      message?: string;
    } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
    // Clear error when user types
    if (errors[id as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [id]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus('sending');
    
    try {
      // In a real app, this would be a POST request to a backend API
      // For now, we'll simulate a successful submission
      setTimeout(() => {
        setFormStatus('success');
        toast({
          title: "Message envoyé !",
          description: "Nous vous répondrons très bientôt.",
          variant: "default",
        });
        
        // Reset form after success
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' });
          setFormStatus('idle');
        }, 3000);
      }, 1500);
    } catch (error) {
      console.error("Error sending message:", error);
      setFormStatus('error');
      toast({
        title: "Erreur d'envoi",
        description: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Contactez <span className="gradient-text">Nous</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour vous aider avec vos projets
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-5 gap-8">
          <motion.div 
            className="space-y-6 md:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col gap-5 mb-10">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Nous sommes là pour vous
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                N'hésitez pas à nous contacter pour toute question ou demande d'information.
                Notre équipe est à votre disposition pour vous aider.
              </p>
            </div>
            
            <motion.div 
              className="flex items-start gap-5 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="h-14 w-14 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
                <Phone className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Téléphone</h3>
                <p className="text-gray-700 dark:text-gray-300">04 84 84 98 33</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Lundi au Vendredi, 9h - 18h</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start gap-5 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="h-14 w-14 bg-secondary/10 dark:bg-secondary/20 rounded-full flex items-center justify-center">
                <Mail className="h-7 w-7 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Email</h3>
                <p className="text-gray-700 dark:text-gray-300">contact@campagnesms.com</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Nous vous répondons sous 24h</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start gap-5 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="h-14 w-14 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Adresse</h3>
                <p className="text-gray-700 dark:text-gray-300">131 av. du Prado 13008 Marseille</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">France</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.form 
            onSubmit={handleSubmit} 
            className="md:col-span-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 relative border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient-x"></div>
            
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Envoyez-nous un message</h3>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nom</label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full ${errors.name ? 'border-red-500 dark:border-red-400' : ''}`}
                  placeholder="Votre nom"
                  required
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full ${errors.email ? 'border-red-500 dark:border-red-400' : ''}`}
                  placeholder="Votre email"
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full ${errors.message ? 'border-red-500 dark:border-red-400' : ''}`}
                  placeholder="Votre message"
                  required
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.message}</p>
                )}
              </div>
              
              <Button
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 py-6 text-lg"
                disabled={formStatus === 'sending' || formStatus === 'success'}
              >
                {formStatus === 'idle' && (
                  <span className="flex items-center">
                    Envoyer <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
                {formStatus === 'sending' && 'Envoi en cours...'}
                {formStatus === 'success' && (
                  <span className="flex items-center">
                    Message envoyé ! <Check className="ml-2 h-4 w-4" />
                  </span>
                )}
                {formStatus === 'error' && 'Erreur, veuillez réessayer'}
              </Button>
              
              {formStatus === 'success' && (
                <motion.div 
                  className="text-center text-green-600 dark:text-green-400 font-medium p-3 bg-green-50 dark:bg-green-900/30 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Merci pour votre message ! Nous vous répondrons très rapidement.
                </motion.div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
