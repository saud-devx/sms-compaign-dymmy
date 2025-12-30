
/**
 * Cookie manager utility for handling cookie preferences
 */

// Cookie consent levels
export type ConsentLevel = 'all' | 'necessary' | 'rejected' | null;

// Check if user has given consent
export const hasCookieConsent = (): ConsentLevel => {
  const consent = localStorage.getItem('cookieConsent') as ConsentLevel;
  return consent;
};

// Check if a specific cookie category is allowed
export const isCookieCategoryAllowed = (category: 'necessary' | 'analytics' | 'marketing'): boolean => {
  const consent = hasCookieConsent();
  
  switch (category) {
    case 'necessary':
      // Necessary cookies are always allowed, even with 'necessary' consent
      return consent === 'all' || consent === 'necessary';
    case 'analytics':
    case 'marketing':
      // These cookies require 'all' consent
      return consent === 'all';
    default:
      return false;
  }
};

// Function to set a cookie with proper security settings
export const setCookie = (name: string, value: string, days: number, category: 'necessary' | 'analytics' | 'marketing'): boolean => {
  // Only set the cookie if the category is allowed
  if (isCookieCategoryAllowed(category)) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    const sameSite = "SameSite=Lax"; // Protection against CSRF
    const secure = window.location.protocol === 'https:' ? '; Secure' : '';
    
    document.cookie = `${name}=${value}; ${expires}; path=/; ${sameSite}${secure}`;
    return true;
  }
  return false;
};

// Function to get a cookie value
export const getCookie = (name: string): string | null => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
};

// Function to delete a cookie
export const deleteCookie = (name: string): void => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

// Show cookie settings dialog again
export const resetCookieConsent = (): void => {
  localStorage.removeItem('cookieConsent');
  window.location.reload();
};
