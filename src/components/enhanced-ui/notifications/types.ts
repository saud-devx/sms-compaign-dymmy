
// Types for the notifications system
import { LucideIcon } from 'lucide-react';

export type PlanType = {
  name: string;
  price: string;
};

export type ActionType = {
  type: string;
  verb: string;
  icon: LucideIcon;
  getMessage: (name: string, city: string, plan: PlanType | null) => string;
  bgColor: string;
  textColor: string;
  pulseColor: string;
};

export type NotificationType = {
  id: string;
  name: string;
  city: string;
  plan: PlanType | null;
  action: ActionType;
  time: { minutes: number; text: string };
  message: string;
};
