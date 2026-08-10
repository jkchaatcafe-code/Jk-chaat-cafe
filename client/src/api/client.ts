import axios from 'axios';

// Set VITE_API_BASE in client/.env when deploying (e.g. https://api.jkchaatcafe.com/api)
const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';

export const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
});

export type LeadPayload = {
  name: string;
  phone: string;
  email?: string;
  city?: string;
  package?: string;
  budget?: string;
  hasLocation?: string;
  message?: string;
};

export async function submitLead(endpoint: string, payload: LeadPayload) {
  const res = await api.post(endpoint, payload);
  return res.data as { message: string; id?: string };
}

export async function subscribeNewsletter(email: string) {
  const res = await api.post('/newsletter', { email });
  return res.data as { message: string };
}
