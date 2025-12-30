
import React from 'react';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';
import { resetCookieConsent } from '@/utils/cookieManager';

interface CookieSettingsButtonProps {
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
  className?: string;
}

const CookieSettingsButton = ({
  variant = 'outline',
  className = ''
}: CookieSettingsButtonProps) => {
  const handleOpenCookieSettings = () => {
    resetCookieConsent();
  };

  return (
    <Button
      variant={variant}
      size="sm"
      rounded="full"
      onClick={handleOpenCookieSettings}
      className={`flex items-center gap-1 text-xs ${className}`}
    >
      <Cookie className="h-3.5 w-3.5" />
      <span>Cookies</span>
    </Button>
  );
};

export default CookieSettingsButton;
