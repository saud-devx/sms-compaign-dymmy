import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Check, Mail, MapPin, Phone, ExternalLink } from "lucide-react";

type FooterLink = {
  label: string;
  href: string;
  isActive: boolean;
};

type FooterGroup = {
  title: string;
  links: FooterLink[];
};

type FooterData = {
  companyName: string;
  companyDescription: string;
  address: string;
  phone: string;
  email: string;
  linkGroups: FooterGroup[];
  copyrightText: string;
};

const Footer = () => {
  const location = useLocation();
  const [footer, setFooter] = useState<FooterData | null>(null);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetch("https://sms-compaign-backend.onrender.com/api/footer")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setFooter(data);
      })
      .catch((err) => {
        console.error("Footer API error:", err);
      });
  }, []);

  if (!footer) return null;

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200/50 dark:border-gray-800/50 pt-16 pb-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {footer.companyName}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {footer.companyDescription}
            </p>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">
                  {footer.address}
                </span>
              </div>

              <div className="flex items-center gap-2 hover:text-primary transition-colors group">
                <Phone className="h-4 w-4 text-gray-500 dark:text-gray-400 group-hover:text-primary" />
                <a
                  href={`tel:${footer.phone}`}
                  className="text-gray-600 dark:text-gray-400 group-hover:text-primary group-hover:underline"
                >
                  {footer.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">
                  {footer.email}
                </span>
              </div>
            </div>
          </div>

          {/* Dynamic Link Groups */}
          {footer.linkGroups.map((group, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <ExternalLink className="text-primary/80 mr-2" size={18} />
                {group.title}
              </h3>

              <div className="space-y-1">
                {group.links
                  .filter((link) => link.isActive)
                  .map((link, i) => (
                    <Link
                      key={i}
                      to={link.href}
                      onClick={handleLinkClick}
                      className="flex items-center gap-2 hover:text-primary transition-colors py-2"
                    >
                      <Check className="h-4 w-4 text-primary" />
                      {link.label}
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-12 py-4 border-t border-gray-200/50 dark:border-gray-800/50 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {footer.copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
