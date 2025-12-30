
import { Mail, Phone, MapPin, Send, Check, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import LiveChat from '../components/LiveChat';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Textarea } from '../components/ui/textarea';
import { toast } from '../components/ui/use-toast';

const Contact = () => {
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
      // Create form data for email sending
      const emailData = {
        to: "contact@campagnesms.com",
        from: formData.email,
        subject: `Message de contact de ${formData.name}`,
        text: formData.message,
        html: `
          <h3>Nouveau message de contact</h3>
          <p><strong>Nom:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message.replace(/\n/g, '<br>')}</p>
        `
      };
      
      // Using a mailto link as a fallback since we can't actually send emails from the frontend
      // In a real app, this would be a POST request to a backend endpoint
      const mailtoUrl = `mailto:contact@campagnesms.com?subject=Message de ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`De: ${formData.name} <${formData.email}>\n\n${formData.message}`)}`;
      
      // Open the mailto link in a new window (will be handled by the user's email client)
      window.open(mailtoUrl, '_blank');
      
      // Show success state
      setFormStatus('success');
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons très bientôt.",
        variant: "success"
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    } catch (error) {
      console.error("Error sending message:", error);
      setFormStatus('error');
      toast({
        title: "Erreur d'envoi",
        description: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <section className="relative min-h-screen pt-28 pb-20">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 z-0"></div>
        
        <div className="absolute opacity-30 w-72 h-72 bg-primary rounded-full blur-3xl -top-10 -left-20 animate-pulse"></div>
        <div className="absolute opacity-20 w-96 h-96 bg-secondary rounded-full blur-3xl bottom-10 -right-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Animated circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div 
            key={i} 
            className="absolute rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 z-0"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              width: 20 + Math.random() * 100,
              height: 20 + Math.random() * 100,
              opacity: 0.1 + Math.random() * 0.2
            }}
            animate={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 10 + Math.random() * 20, 
              repeat: Infinity, 
              repeatType: "reverse"
            }}
          />
        ))}
        
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="flex items-center justify-center mb-12 gap-2"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles className="text-primary h-6 w-6 mr-1" />
            <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-900 dark:text-white">
              Contactez <span className="gradient-text">Nous</span>
            </h1>
            <Sparkles className="text-primary h-6 w-6 ml-1" />
          </motion.div>
          
          <div className="grid md:grid-cols-5 gap-8 mt-16">
            <motion.div 
              className="space-y-6 md:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div 
                className="flex flex-col gap-5 mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Nous sommes là pour vous</h3>
                <p className="text-gray-700 dark:text-gray-200">N'hésitez pas à nous contacter pour toute question ou demande d'information. Notre équipe est à votre disposition pour vous aider.</p>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-5 hover-scale transition-all bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700"
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
                className="flex items-start gap-5 transition-all bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700"
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
                className="flex items-start gap-5 transition-all bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700"
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
              className="md:col-span-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient-x"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Envoyez-nous un message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nom</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary/70 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all`}
                    placeholder="Votre nom"
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary/70 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all`}
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
                    className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary/70 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all`}
                    placeholder="Votre message"
                    required
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.message}</p>
                  )}
                </div>
                
                <motion.button 
                  type="submit" 
                  className="btn-primary w-full flex items-center justify-center gap-2 shadow-lg hover:shadow-xl py-4"
                  disabled={formStatus === 'sending' || formStatus === 'success'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {formStatus === 'idle' && (
                    <>
                      Envoyer <Send className="h-4 w-4 ml-1" />
                    </>
                  )}
                  {formStatus === 'sending' && 'Envoi en cours...'}
                  {formStatus === 'success' && (
                    <>
                      Message envoyé ! <Check className="h-4 w-4 ml-1" />
                    </>
                  )}
                  {formStatus === 'error' && 'Erreur, veuillez réessayer'}
                </motion.button>
                
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
              
              <motion.div 
                className="mt-8 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Link to="/services" className="text-primary flex items-center hover:text-secondary transition-all">
                  Découvrez nos services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </motion.form>
          </div>
        </motion.div>
      </section>

      <LiveChat />
    </div>
  );
};

export default Contact;
