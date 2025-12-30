const BASE_URL = 'https://sms-compaign-backend.onrender.com/api/tarifs';

/* ---------- TYPES (optional but recommended) ---------- */
export type Tarif = any;
export type Plan = any;
export type VolumePricing = any;
export type Advantage = any;
export type Faq = any;

/* ---------- PUBLIC ---------- */
export const fetchTarifsPage = async (): Promise<Tarif> => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error('Failed to fetch tarifs page');
  return res.json();
};

/* ---------- ADMIN : PLANS ---------- */
export const fetchTarifPlans = async (): Promise<Plan[]> => {
  const res = await fetch(`${BASE_URL}/admin/plan`);
  if (!res.ok) throw new Error('Failed to fetch plans');
  return res.json();
};

/* ---------- ADMIN : VOLUME PRICING ---------- */
export const fetchVolumePricing = async (): Promise<VolumePricing[]> => {
  const res = await fetch(`${BASE_URL}/admin/volume`);
  if (!res.ok) throw new Error('Failed to fetch volume pricing');
  return res.json();
};

/* ---------- ADMIN : ADVANTAGES ---------- */
export const fetchAdvantages = async (): Promise<Advantage[]> => {
  const res = await fetch(`${BASE_URL}/admin/advantage`);
  if (!res.ok) throw new Error('Failed to fetch advantages');
  return res.json();
};

/* ---------- ADMIN : FAQ ---------- */
export const fetchTarifFAQs = async (): Promise<Faq[]> => {
  const res = await fetch(`${BASE_URL}/admin/faq`);
  if (!res.ok) throw new Error('Failed to fetch FAQs');
  return res.json();
};
