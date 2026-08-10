import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import { useLeadForm } from '../hooks/useLeadForm';

// Hero Background Image
const HERO_IMG = 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=80';

export default function Contact() {
  const { values, setField, handleSubmit, loading, msg } = useLeadForm('/leads/contact');

  return (
    <div className="jk-contact">
      <style>{`
        /* ===== DARK THEME ===== */
        .jk-contact {
          background: #0a0a0a;
          color: #fff;
          min-height: 100vh;
        }
        .jk-contact .section {
          padding: 60px 0;
        }
        .jk-contact .grad-text {
          background: linear-gradient(135deg, #FFD700, #F4A900);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .jk-contact h1, .jk-contact h2, .jk-contact h3, .jk-contact h4 {
          color: #fff;
        }
        .jk-contact p {
          color: #aaa;
        }
        .jk-contact .breadcrumb {
          color: rgba(255,255,255,0.5);
          font-size: 0.85rem;
          margin-bottom: 16px;
        }
        .jk-contact .breadcrumb a {
          color: #FFD700;
          text-decoration: none;
        }

        /* ===== HERO ===== */
        .jk-contact .page-hero {
          position: relative;
          min-height: 110vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 40px 0 60px;
          margin-top: -70px;
          padding-top: 120px;
        }
        .jk-contact .hero-bg {
          position: absolute;
          inset: -20% 0 0 0;
          height: 120%;
          z-index: 0;
        }
        .jk-contact .hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .jk-contact .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.92) 100%);
        }
        .jk-contact .hero-content {
          position: relative;
          z-index: 1;
          max-width: 820px;
          padding-top: 20px;
        }
        .jk-contact .hero-content h1 {
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          line-height: 1.1;
          color: #fff;
          margin: 0 0 16px;
        }
        .jk-contact .hero-content p {
          color: rgba(255,255,255,0.8);
          font-size: 1.05rem;
          line-height: 1.7;
          max-width: 580px;
        }

        /* ===== FORM CARD ===== */
        .jk-contact .form-card {
          background: #141414;
          border-radius: 20px;
          padding: 36px 32px;
          border: 1px solid rgba(255,255,255,0.04);
        }
        .jk-contact .form-card h3 {
          font-size: 1.4rem;
          margin-bottom: 20px;
          color: #FFD700;
        }
        .jk-contact .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .jk-contact .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .jk-contact .form-group.full {
          grid-column: 1 / -1;
        }
        .jk-contact .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #aaa;
        }
        .jk-contact .form-group input,
        .jk-contact .form-group textarea {
          padding: 12px 16px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.06);
          background: #0a0a0a;
          color: #fff;
          font-size: 1rem;
          transition: all 0.3s ease;
          outline: none;
        }
        .jk-contact .form-group input:focus,
        .jk-contact .form-group textarea:focus {
          border-color: #FFD700;
          box-shadow: 0 0 0 2px rgba(255,215,0,0.05);
        }
        .jk-contact .form-group textarea {
          min-height: 100px;
          resize: vertical;
        }
        .jk-contact .btn-primary {
          background: #FFD700;
          color: #000;
          padding: 14px 32px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          margin-top: 8px;
        }
        .jk-contact .btn-primary:hover {
          background: #F4C430;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(255,215,0,0.2);
        }
        .jk-contact .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
        .jk-contact .btn-primary svg {
          width: 18px;
          height: 18px;
        }
        .jk-contact .form-msg {
          margin-top: 12px;
          padding: 12px 16px;
          border-radius: 10px;
          font-weight: 500;
        }
        .jk-contact .form-msg.success {
          background: rgba(255,215,0,0.08);
          color: #FFD700;
          border: 1px solid rgba(255,215,0,0.1);
        }
        .jk-contact .form-msg.error {
          background: rgba(255,0,0,0.08);
          color: #ff6b6b;
          border: 1px solid rgba(255,0,0,0.1);
        }

        /* ===== CONTACT INFO ===== */
        .jk-contact .contact-info {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .jk-contact .contact-info-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background: #141414;
          padding: 18px 20px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.04);
          transition: all 0.3s ease;
        }
        .jk-contact .contact-info-card:hover {
          border-color: rgba(255,215,0,0.08);
          transform: translateX(4px);
        }
        .jk-contact .contact-info-card .ic {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255,215,0,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .jk-contact .contact-info-card .ic svg {
          width: 20px;
          height: 20px;
          stroke: #FFD700;
        }
        .jk-contact .contact-info-card h4 {
          font-size: 0.9rem;
          margin: 0 0 2px;
          color: #fff;
        }
        .jk-contact .contact-info-card p {
          font-size: 0.85rem;
          color: #888;
          margin: 0;
        }
        .jk-contact .map-embed {
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.04);
          margin-top: 4px;
        }
        .jk-contact .map-embed iframe {
          width: 100%;
          height: 200px;
          border: none;
          display: block;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 992px) {
          .jk-contact .container[style] {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .jk-contact .page-hero {
            min-height: 50vh;
          }
          .jk-contact .form-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 768px) {
          .jk-contact .page-hero {
            min-height: 45vh;
            margin-top: -50px;
            padding-top: 100px;
          }
          .jk-contact .hero-content h1 {
            font-size: 2.2rem;
          }
          .jk-contact .form-card {
            padding: 24px 20px;
          }
          .jk-contact .contact-info-card {
            padding: 14px 16px;
          }
        }
        @media (max-width: 576px) {
          .jk-contact .page-hero {
            min-height: 35vh;
            margin-top: -40px;
            padding-top: 80px;
            padding-bottom: 30px;
          }
          .jk-contact .hero-content h1 {
            font-size: 1.8rem;
          }
          .jk-contact .hero-content p {
            font-size: 0.9rem;
          }
          .jk-contact .form-card {
            padding: 20px 16px;
          }
          .jk-contact .contact-info-card {
            padding: 12px 14px;
          }
          .jk-contact .contact-info-card .ic {
            width: 36px;
            height: 36px;
          }
          .jk-contact .contact-info-card .ic svg {
            width: 16px;
            height: 16px;
          }
          .jk-contact .btn-primary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      {/* ============ HERO ============ */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src={HERO_IMG} alt="Contact JK Chaat Cafe" />
          <div className="hero-overlay" />
        </div>
        <div className="container hero-content">
          <div className="breadcrumb"><Link to="/">Home</Link> / Contact</div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Let's talk about your <span className="grad-text">cafe</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Fill the form and our franchise team will call you within 24 hours, or reach us directly below.
          </motion.p>
        </div>
      </section>

      {/* ============ CONTACT SECTION ============ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 40, alignItems: 'start' }}>
          {/* FORM */}
          <Reveal className="form-card">
            <h3>Send an Enquiry</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" required value={values.name} onChange={(e) => setField('name', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" required value={values.phone} onChange={(e) => setField('phone', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" required value={values.email || ''} onChange={(e) => setField('email', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input type="text" required value={values.city || ''} onChange={(e) => setField('city', e.target.value)} />
                </div>
              </div>
              <div className="form-group full">
                <label>Message</label>
                <textarea placeholder="Tell us about your plan, timeline or questions" value={values.message || ''} onChange={(e) => setField('message', e.target.value)} />
              </div>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
              {msg && <div className={`form-msg ${msg.type}`}>{msg.text}</div>}
            </form>
          </Reveal>

          {/* CONTACT INFO */}
          <Reveal delay={0.1} className="contact-info">
            <div className="contact-info-card">
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92Z" />
                </svg>
              </div>
              <div>
                <h4>Call Us</h4>
                <p>+91 90395 54484</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              </div>
              <div>
                <h4>Email Us</h4>
                <p>jkchaatcafe@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h4>Head Office</h4>
                <p>Vijay Nagar, Indore, Madhya Pradesh</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <h4>Business Hours</h4>
                <p>Mon – Sat, 10:00 AM – 7:00 PM</p>
              </div>
            </div>

            <div className="map-embed">
              <iframe src="https://www.google.com/maps?q=Indore,Madhya%20Pradesh&output=embed" loading="lazy" title="map" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}