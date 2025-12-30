
export const useNavbarAnimation = () => {
  const navVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.1
      } 
    }
  };

  return { navVariants };
};
