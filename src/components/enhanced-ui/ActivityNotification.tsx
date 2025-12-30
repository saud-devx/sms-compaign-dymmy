
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { NotificationItem } from './notifications/NotificationItem';
import { NotificationType } from './notifications/types';
import { generateActivity } from './notifications/notificationUtils';

interface ActivityNotificationProps {
  minDelay?: number;
  maxDelay?: number;
  showDuration?: number;
}

export const ActivityNotification = ({
  minDelay = 6000, // 6 seconds minimum between notifications
  maxDelay = 15000, // 15 seconds maximum between notifications
  showDuration = 6000, // 6 seconds visible
}: ActivityNotificationProps) => {
  // Only storing a single notification at a time
  const [notification, setNotification] = useState<NotificationType | null>(null);
  const [active, setActive] = useState(true);
  const { toast } = useToast();
  const location = useLocation();
  
  // Disable notifications on Actualités pages
  useEffect(() => {
    const path = location.pathname;
    if (path === '/actualites' || path.startsWith('/actualites/') || 
        path === '/blog' || path.startsWith('/blog/')) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [location.pathname]);

  // Function to add a new notification
  const addNotification = (forceType?: string) => {
    if (!active) return;
    
    const newActivity = generateActivity(forceType);
    setNotification(newActivity);

    // Remove the notification after showDuration
    setTimeout(() => {
      setNotification(null);
    }, showDuration);
  };

  // On first render, show a specific type based on location
  useEffect(() => {
    const path = location.pathname;
    let initialType: string | undefined;
    
    // Don't show notifications on actualites/blog pages
    if (path === '/actualites' || path.startsWith('/actualites/') ||
        path === '/blog' || path.startsWith('/blog/')) {
      return;
    }
    
    if (path === '/tarifs' || path === '/pricing') {
      initialType = 'purchase';
    } else if (path === '/') {
      initialType = 'viewing';
    } else {
      initialType = 'signup';
    }

    // First notification shows up more quickly
    setTimeout(() => {
      addNotification(initialType);
    }, 2000);
  }, [location.pathname]);

  // Set up the recurring notifications
  useEffect(() => {
    if (!active) return;

    // Start the interval for subsequent notifications
    const intervalId = setInterval(() => {
      // Only add a new notification if there's no current notification
      if (!notification) {
        const delay = Math.floor(Math.random() * (maxDelay - minDelay)) + minDelay;
        setTimeout(() => addNotification(), delay);
      }
    }, Math.max(minDelay, 5000));

    return () => {
      clearInterval(intervalId);
    };
  }, [active, minDelay, maxDelay, notification]);

  // Removed the toast notifications code as it was already commented out

  return (
    <div className="fixed bottom-4 left-4 z-50 w-full max-w-[320px] sm:max-w-[360px]">
      <AnimatePresence>
        {notification && (
          <NotificationItem notification={notification} />
        )}
      </AnimatePresence>
    </div>
  );
};
