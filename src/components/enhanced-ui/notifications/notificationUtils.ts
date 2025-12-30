
import { frenchNames, frenchCities, plans, actions } from './notificationData';
import { NotificationType, PlanType } from './types';

// Generate a random time in the past (1-30 minutes for more recency)
export const getRandomTime = () => {
  const minutes = Math.floor(Math.random() * 29) + 1;
  return { minutes, text: `il y a ${minutes} ${minutes === 1 ? 'minute' : 'minutes'}` };
};

// Generate a random activity
export const generateActivity = (forceType?: string): NotificationType => {
  const action = forceType 
    ? actions.find(a => a.type === forceType) || actions[Math.floor(Math.random() * actions.length)]
    : actions[Math.floor(Math.random() * actions.length)];
  const name = frenchNames[Math.floor(Math.random() * frenchNames.length)];
  const city = frenchCities[Math.floor(Math.random() * frenchCities.length)];
  const plan = plans[Math.floor(Math.random() * plans.length)];
  const time = getRandomTime();
  
  let message = '';
  
  if (action.type === 'viewing') {
    message = action.getMessage(name, city, null);
  } else if (action.type === 'purchase') {
    message = action.getMessage(name, city, plan);
  } else {
    message = action.getMessage(name, city, null);
  }

  return {
    id: Date.now().toString(),
    name,
    city,
    plan,
    action,
    time,
    message
  };
};
