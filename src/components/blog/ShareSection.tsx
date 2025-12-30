
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface ShareSectionProps {
  title: string;
  url: string;
}

const ShareSection = ({ title, url }: ShareSectionProps) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    toast({
      title: "Lien copié",
      description: "Le lien a été copié dans votre presse-papiers",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const getShareUrl = (platform: 'facebook' | 'twitter' | 'linkedin') => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    
    switch (platform) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
      case 'linkedin':
        return `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`;
    }
  };

  return (
    <motion.div 
      className="my-10 p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h3 className="text-xl font-semibold mb-4">Partagez cet article</h3>
      <div className="flex flex-wrap gap-3">
        <Button 
          variant="outline" 
          size="sm"
          className="hover:bg-blue-500 hover:text-white hover:border-blue-500"
          onClick={() => window.open(getShareUrl('facebook'), '_blank')}
        >
          <Facebook className="h-4 w-4 mr-2" />
          Facebook
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className="hover:bg-sky-500 hover:text-white hover:border-sky-500"
          onClick={() => window.open(getShareUrl('twitter'), '_blank')}
        >
          <Twitter className="h-4 w-4 mr-2" />
          Twitter
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className="hover:bg-blue-700 hover:text-white hover:border-blue-700"
          onClick={() => window.open(getShareUrl('linkedin'), '_blank')}
        >
          <Linkedin className="h-4 w-4 mr-2" />
          LinkedIn
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className="hover:bg-gray-800 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900"
          onClick={handleCopyLink}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 mr-2" />
              Copié
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 mr-2" />
              Copier le lien
            </>
          )}
        </Button>
      </div>
    </motion.div>
  );
};

export default ShareSection;
