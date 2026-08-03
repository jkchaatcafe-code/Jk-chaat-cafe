import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { useLeadForm } from '../hooks/useLeadForm';

export default function Contact() {
  const { values, setField, handleSubmit, loading, msg } = useLeadForm('/leads/contact');

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / Contact</div>
          <h1>Let's talk about your <span className="grad-text">cafe</span>.</h1>
          <p>Fill the form and our franchise team will call you within 24 hours, or reach us directly below.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 40, alignItems: 'start' }}>
          <Reveal className="form-card">
            <h3 style={{ marginBottom: 20 }}>Send an Enquiry</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group"><label>Full Name</label><input type="text" required value={values.name} onChange={(e) => setField('name', e.target.value)} /></div>
                <div className="form-group"><label>Phone Number</label><input type="tel" required value={values.phone} onChange={(e) => setField('phone', e.target.value)} /></div>
                <div className="form-group"><label>Email</label><input type="email" required value={values.email || ''} onChange={(e) => setField('email', e.target.value)} /></div>
                <div className="form-group"><label>City</label><input type="text" required value={values.city || ''} onChange={(e) => setField('city', e.target.value)} /></div>
              </div>
              <div className="form-group full"><label>Message</label><textarea placeholder="Tell us about your plan, timeline or questions" value={values.message || ''} onChange={(e) => setField('message', e.target.value)} /></div>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </button>
              {msg && <div className={`form-msg ${msg.type}`} style={{ display: 'block' }}>{msg.text}</div>}
            </form>
          </Reveal>
          <Reveal delay={0.1} className="contact-info">
            <div className="contact-info-card"><div className="ic"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92Z" /></svg></div><div><h4>Call Us</h4><p>+91 00000 00000</p></div></div>
            <div className="contact-info-card"><div className="ic"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg></div><div><h4>Email Us</h4><p>jkchaatcafe@gmail.com</p></div></div>
            <div className="contact-info-card"><div className="ic"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg></div><div><h4>Head Office</h4><p>Vijay Nagar, Indore, Madhya Pradesh</p></div></div>
            <div className="contact-info-card"><div className="ic"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></div><div><h4>Business Hours</h4><p>Mon – Sat, 10:00 AM – 7:00 PM</p></div></div>
            <div className="map-embed"><iframe src="https://www.google.com/maps?q=Indore,Madhya%20Pradesh&output=embed" loading="lazy" title="map"></iframe></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
