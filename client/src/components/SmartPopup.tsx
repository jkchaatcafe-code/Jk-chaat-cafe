import { useEffect, useRef, useState } from 'react';
import { useLeadForm } from '../hooks/useLeadForm';

export default function SmartPopup() {
  const [open, setOpen] = useState(false);
  const shownRef = useRef(false);
  const { values, setField, handleSubmit, loading, msg } = useLeadForm('/leads/popup', () => {
    setTimeout(() => setOpen(false), 1800);
  });

  useEffect(() => {
    if (sessionStorage.getItem('jk_popup_shown')) return;

    const trigger = () => {
      if (shownRef.current) return;
      shownRef.current = true;
      setOpen(true);
      sessionStorage.setItem('jk_popup_shown', '1');
    };

    const onScroll = () => {
      const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrolled >= 40) trigger();
    };
    const onMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget && e.clientY < 10) trigger();
    };
    const timer = setTimeout(trigger, 45000);

    window.addEventListener('scroll', onScroll);
    document.addEventListener('mouseout', onMouseOut);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mouseout', onMouseOut);
      clearTimeout(timer);
    };
  }, []);

  if (!open) return null;

  return (
    <div className="popup-overlay open" onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
      <div className="popup-card">
        <button className="popup-close" onClick={() => setOpen(false)} aria-label="Close">&times;</button>
        <h3>Thinking of starting a cafe?</h3>
        <p>Tell us a little about your plan and our franchise team will call you back within 24 hours.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" required value={values.name} onChange={(e) => setField('name', e.target.value)} placeholder="Your full name" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" required value={values.phone} onChange={(e) => setField('phone', e.target.value)} placeholder="Your phone number" />
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" required value={values.city || ''} onChange={(e) => setField('city', e.target.value)} placeholder="Your city" />
          </div>
          <div className="form-group">
            <label>Investment Budget</label>
            <select required value={values.budget || ''} onChange={(e) => setField('budget', e.target.value)}>
              <option value="">Select budget range</option>
              <option>Under ₹10L</option>
              <option>₹10L – ₹20L</option>
              <option>₹20L – ₹35L</option>
              <option>Above ₹35L</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
            {loading ? 'Submitting...' : 'Request a Callback'}
          </button>
          {msg && <div className={`form-msg ${msg.type}`} style={{ display: 'block' }}>{msg.text}</div>}
        </form>
      </div>
    </div>
  );
}