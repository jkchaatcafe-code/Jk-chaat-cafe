import { useState } from 'react';
import { submitLead, type LeadPayload } from '../api/client';

export function useLeadForm(endpoint: string, onSuccess?: () => void) {
  const [values, setValues] = useState<LeadPayload>({ name: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  function setField<K extends keyof LeadPayload>(key: K, value: LeadPayload[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    try {
      const data = await submitLead(endpoint, values);
      setMsg({ type: 'success', text: data.message });
      setValues({ name: '', phone: '' });
      onSuccess?.();
    } catch (err: any) {
      const text = err?.response?.data?.message || 'Could not submit. Please check your connection and try again.';
      setMsg({ type: 'error', text });
    } finally {
      setLoading(false);
    }
  }

  return { values, setField, handleSubmit, loading, msg };
}
