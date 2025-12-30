
import React from 'react';
import { motion } from 'framer-motion';
import { NotificationType } from './types';

interface NotificationItemProps {
  notification: NotificationType;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({ notification }) => {
  return (
    <motion.div
      key={notification.id}
      initial={{ opacity: 0, x: -30, y: 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="neo-glass-card py-4 px-5 backdrop-blur-md rounded-xl border-l-4 border-l-primary/70 shadow-xl dark:shadow-primary/20 notification-pulse flex items-start gap-3 hover:scale-[1.02] transition-transform cursor-pointer"
    >
      <div className={`rounded-full ${notification.action.bgColor} p-3 ${notification.action.textColor} flex-shrink-0 animate-pulse`}>
        <notification.action.icon size={18} />
      </div>
      <div className="flex-1">
        <p className="text-gray-800 dark:text-white font-medium leading-tight text-sm sm:text-base">
          {notification.message}
        </p>
        {notification.action.type !== 'viewing' && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">
            {notification.time.text}
          </p>
        )}
      </div>
      <div className="absolute -z-10 inset-0 rounded-xl bg-gradient-to-tr opacity-20 animate-pulse-glow-animation"
           style={{
             backgroundImage: `linear-gradient(to right, ${notification.action.pulseColor})`,
             animationDuration: '3s',
           }}></div>
    </motion.div>
  );
};
