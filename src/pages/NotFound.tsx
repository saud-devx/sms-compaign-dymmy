
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log the 404 error for tracking purposes
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Force scroll to top on 404 page
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Layout>
      <Helmet>
        <title>Page non trouvée | 404</title>
        <meta name="description" content="La page que vous recherchez n'existe pas ou a été déplacée." />
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-[70vh] flex items-center justify-center bg-white dark:bg-gray-900 px-4 py-16 md:py-24"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
          <div className="absolute bottom-20 left-[10%] w-72 h-72 rounded-full bg-secondary/5 dark:bg-secondary/10 blur-3xl"></div>
        </div>
        
        <div className="max-w-md w-full text-center z-10">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="mb-6">
              <h1 className="text-8xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">404</h1>
              <p className="text-gray-500 dark:text-gray-400 mt-1">Page non trouvée</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 relative backdrop-blur-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Oups ! Vous êtes perdu ?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                La page que vous recherchez n'existe pas ou a été déplacée. 
                Nous vous invitons à retourner à l'accueil ou à la page précédente.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button asChild variant="default" className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90">
                  <a href="/">
                    <Home className="h-4 w-4" />
                    <span>Accueil</span>
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex items-center justify-center gap-2">
                  <a href="javascript:history.back()">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Retour</span>
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>Vous cherchiez peut-être :</p>
            <div className="mt-3 flex flex-wrap gap-2 justify-center">
              <a href="/services" className="text-primary hover:underline">Services</a>
              <a href="/le-sms" className="text-primary hover:underline">Le SMS</a>
              <a href="/tarifs" className="text-primary hover:underline">Tarifs</a>
              <a href="/contact" className="text-primary hover:underline">Contact</a>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default NotFound;
