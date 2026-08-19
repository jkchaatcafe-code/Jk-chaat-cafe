import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Reveal from '../components/Reveal';
import { submitLead } from '../api/client';
// Import local hero image
import franchiseHero from '../assets/img/franchisehero.jpeg';

const IMG = {
  hero: franchiseHero, // Use imported local image
  handshake: 'https://images.pexels.com/photos/33175648/pexels-photo-33175648.jpeg?auto=compress&cs=tinysrgb&w=900',
  kitchen: 'https://images.pexels.com/photos/19553654/pexels-photo-19553654.jpeg?auto=compress&cs=tinysrgb&w=900',
  chef: 'https://images.pexels.com/photos/30120987/pexels-photo-30120987.jpeg?auto=compress&cs=tinysrgb&w=900',
};

const check = <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>;

const models = [
  { title: 'FOFO Model', sub: 'Franchise Owned, Franchise Operated', text: 'You invest and run day-to-day operations yourself, with our complete training and support.' },
  { title: 'Single Unit', sub: 'One Outlet, One City', text: 'Perfect for first-time entrepreneurs testing the waters with a focused, manageable investment.' },
  { title: 'Multi-Unit', sub: 'Scale Across a City', text: 'Open multiple outlets under one agreement, with shared supply chain efficiencies.' },
];

const supportPillars = [
  { title: 'Site Selection & Design', text: 'We help evaluate footfall and finalize a layout built for volume.', img: IMG.kitchen },
  { title: 'Recipe & Training Transfer', text: 'Our chef-inspired, tested recipes come with hands-on kitchen training.', img: IMG.chef },
  { title: 'Ongoing Business Support', text: 'From launch marketing to monthly consultation, we stay invested in your success.', img: IMG.handshake },
];

export default function Franchise() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', city: '', enquiry: '' });
  const [showThankYou, setShowThankYou] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFormError('');
    try {
      await submitLead('/leads/popup', {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        message: formData.enquiry,
      });
      setShowPopup(false);
      setShowThankYou(true);
      setTimeout(() => setShowThankYou(false), 3000);
      setFormData({ name: '', email: '', phone: '', city: '', enquiry: '' });
    } catch (err: any) {
      setFormError(err?.response?.data?.message || 'Could not submit. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const openPopup = () => setShowPopup(true);

  return (
    <div className="jk-franchise-v2">
      {/* ============ POPUP ============ */}
      {showPopup && (
        <div className="jk-popup-overlay" onClick={(e) => e.target === e.currentTarget && setShowPopup(false)}>
          <div className="jk-popup">
            <button className="jk-popup-close" onClick={() => setShowPopup(false)}>✕</button>
            <h2>Get Franchise</h2>
            <p>Fill in your details and we'll get back to you</p>
            <form onSubmit={handleFormSubmit}>
              <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
              <input type="text" placeholder="City" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} required />
              <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
              <textarea placeholder="Your Enquiry..." value={formData.enquiry} onChange={(e) => setFormData({...formData, enquiry: e.target.value})} />
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit Enquiry'}
              </button>
              {formError && <p style={{ color: '#E63946', fontSize: '0.85rem', marginTop: 10 }}>{formError}</p>}
            </form>
          </div>
        </div>
      )}

      {/* ============ THANK YOU ============ */}
      {showThankYou && (
        <div className="jk-thankyou">
          <div className="jk-thankyou-content">
            <div className="icon">🎉</div>
            <h2>Thank You!</h2>
            <p>We'll get back to you shortly.</p>
          </div>
        </div>
      )}

      {/* ============ HERO ============ */}
      <section className="fr-hero">
        <div className="fr-hero-bg"><img src={IMG.hero} alt="JK Chaat Cafe Franchise Opportunities" /></div>
        <div className="fr-hero-overlay" />
        <div className="container fr-hero-content">
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Franchise plans for <span className="grad-text">first-time owners</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Join JK Chaat Cafe and start your entrepreneurial journey with a proven business model.
          </motion.p>
          
          {/* ===== HERO BUTTON - ADDED HERE ===== */}
          <motion.div 
            className="fr-hero-buttons" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button className="btn-hero" onClick={openPopup}>
              Get Franchise Now
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>

      {/* ============ FRANCHISE MODELS ============ */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <div className="eyebrow">Choose Your Model</div>
            <h2>Flexible franchise structures, built around you.</h2>
          </Reveal>
          <div className="fr-models-grid">
            {models.map((m, i) => (
              <motion.div
                key={m.title}
                className="fr-model-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="fr-model-num">0{i + 1}</span>
                <h3>{m.title}</h3>
                <span className="fr-model-sub">{m.sub}</span>
                <p>{m.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INVESTMENT PLANS ============ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container pkg-grid">
          <Reveal className="pkg-card">
            <span className="pkg-tag">Starter</span><h3>Kiosk Cafe</h3><div className="pkg-price">₹5-6L <span>/ one-time</span></div>
            <ul>
              <li>{check}150–250 sq.ft kiosk format</li><li>{check}Core kitchen equipment</li><li>{check}Customise menu (18–22 items)</li><li>{check}10 Days Training </li><li>{check}12 Months guidance</li>
            </ul>
            <button onClick={openPopup} className="btn-ghost">Apply for Starter</button>
          </Reveal>
          <Reveal delay={0.08} className="pkg-card featured">
            <span className="pkg-tag">Most Chosen</span><h3>Complete Cafe</h3><div className="pkg-price">₹9-10L <span>/ one-time</span></div>
            <ul>
              <li>{check}300-500 Sq.ft.din-in format</li><li>{check}Full kitchen & seating setup</li><li>{check}Customise menu  (60+ items)</li><li>{check}Launch marketing campaign</li><li>{check}24 Month Guidance</li>
            </ul>
            <button onClick={openPopup} className="btn-ghost">Apply for Complete Cafe</button>
          </Reveal>
          <Reveal delay={0.16} className="pkg-card">
            <span className="pkg-tag">Master</span><h3>Master Franchise</h3><div className="pkg-price">Custom <span>/ region-based</span></div>
            <ul>
              <li>{check}Exclusive regional rights</li><li>{check}Multi-outlet rollout support</li><li>{check}Dedicated supply chain</li><li>{check}Priority consultation</li>
            </ul>
            <button onClick={openPopup} className="btn-ghost">Enquire for Master Franchise</button>
          </Reveal>
        </div>
      </section>

      {/* ============ SUPPORT PILLARS — photo cards ============ */}
      <section className="section fr-support">
        <div className="container">
          <Reveal className="section-head center">
            <div className="eyebrow">What's Included</div>
            <h2>We stay with you, every step of the way.</h2>
          </Reveal>
          <div className="fr-support-grid">
            {supportPillars.map((p, i) => (
              <motion.div
                key={p.title}
                className="fr-support-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <div className="fr-support-img"><img src={p.img} alt={p.title} loading="lazy" /></div>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className="section fr-cta">
        <div className="container">
          <div className="fr-cta-banner">
            <div className="fr-cta-overlay" />
            <div className="fr-cta-content">
              <h2>Ready to Start Your Franchise Journey?</h2>
              <p>Join JK Chaat Cafe and become part of India's fastest-growing food franchise network.</p>
              <button onClick={openPopup} className="btn-primary-cta">
                Apply for Franchise Now
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* ===== DARK THEME ===== */
        .jk-franchise-v2 {
          background: #0a0a0a;
          color: #fff;
        }
        .jk-franchise-v2 .section {
          padding: 70px 0;
        }
        .jk-franchise-v2 .section-head.center {
          text-align: center;
        }
        .jk-franchise-v2 .section-head .eyebrow {
          color: #FFD700;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: 0.85rem;
          display: inline-block;
          margin-bottom: 10px;
        }
        .jk-franchise-v2 .section-head h2 {
          color: #fff;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.2;
          max-width: 700px;
          margin: 0 auto;
        }
        .jk-franchise-v2 .grad-text {
          background: linear-gradient(135deg, #FFD700, #F4A900);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* ===== HERO - OPTIMIZED IMAGE DISPLAY ===== */
        .fr-hero {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin-top: -80px;
          padding-top: 80px;
        }
        .fr-hero-bg {
          position: absolute;
          inset: -10% 0 -10% 0;
          width: 100%;
          height: 120%;
          z-index: 0;
        }
        .fr-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          display: block;
        }
        .fr-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.85) 100%);
          z-index: 1;
        }
        .fr-hero-content {
          position: relative;
          z-index: 2;
          max-width: 820px;
          padding-top: 40px;
          text-align: center;
          margin: 0 auto;
        }
        .fr-hero-content h1 {
          color: #fff;
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          line-height: 1.1;
          margin-bottom: 16px;
        }
        .fr-hero-content p {
          color: rgba(255,255,255,0.85);
          font-size: 1.1rem;
          line-height: 1.8;
          max-width: 600px;
          margin: 0 auto 32px;
        }

        /* ===== HERO BUTTONS ===== */
        .fr-hero-buttons {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          width: 100%;
        }
        .btn-hero {
          background: #fff;
          color: #0a0a0a;
          font-size: 1.1rem;
          padding: 16px 36px;
          border-radius: 12px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 30px rgba(255,255,255,0.1);
        }
        .btn-hero:hover {
          background: #f0f0f0;
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(255,255,255,0.15);
        }
        .btn-hero svg {
          width: 20px;
          height: 20px;
          stroke: currentColor;
          stroke-width: 2.4;
        }

        /* ===== FRANCHISE MODELS ===== */
        .fr-models-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-top: 40px;
        }
        .fr-model-card {
          background: #1a1a1a;
          border-radius: 22px;
          padding: 32px 26px;
          border: 1px solid rgba(255,255,255,0.04);
          transition: all 0.3s ease;
        }
        .fr-model-card:hover {
          border-color: rgba(255,215,0,0.15);
          transform: translateY(-6px);
          box-shadow: 0 20px 40px -16px rgba(0,0,0,0.5);
        }
        .fr-model-num {
          font-family: 'Baloo 2', sans-serif;
          font-size: 2.4rem;
          font-weight: 800;
          color: rgba(255,215,0,0.15);
          line-height: 1;
        }
        .fr-model-card h3 {
          font-size: 1.2rem;
          margin: 6px 0 4px;
          color: #FFD700;
        }
        .fr-model-sub {
          display: block;
          font-size: 0.78rem;
          color: #aaa;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 12px;
        }
        .fr-model-card p {
          color: #aaa;
          font-size: 0.92rem;
          line-height: 1.6;
        }

        /* ===== INVESTMENT PLANS ===== */
        .pkg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 40px;
        }
        .pkg-card {
          background: #1a1a1a;
          border-radius: 20px;
          padding: 32px 24px;
          border: 1px solid rgba(255,255,255,0.04);
          text-align: center;
          transition: all 0.3s ease;
        }
        .pkg-card:hover {
          border-color: rgba(255,215,0,0.1);
          transform: translateY(-6px);
          box-shadow: 0 20px 40px -16px rgba(0,0,0,0.4);
        }
        .pkg-card.featured {
          border-color: #FFD700;
          box-shadow: 0 8px 32px rgba(255,215,0,0.08);
        }
        .pkg-tag {
          display: inline-block;
          background: #FFD700;
          color: #000;
          padding: 4px 16px;
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
        }
        .pkg-card h3 {
          font-size: 1.4rem;
          margin: 12px 0 8px;
          color: #fff;
        }
        .pkg-price {
          font-family: 'Baloo 2', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          color: #FFD700;
        }
        .pkg-price span {
          font-size: 0.9rem;
          font-weight: 400;
          color: #888;
        }
        .pkg-card ul {
          list-style: none;
          padding: 0;
          margin: 20px 0 24px;
          text-align: left;
        }
        .pkg-card ul li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #bbb;
          font-size: 0.9rem;
          padding: 6px 0;
          border-bottom: 1px solid rgba(255,255,255,0.03);
        }
        .pkg-card ul li:last-child {
          border-bottom: none;
        }
        .pkg-card ul li svg {
          width: 16px;
          height: 16px;
          color: #FFD700;
          flex-shrink: 0;
        }
        .btn-ghost {
          background: transparent;
          color: #FFD700;
          border: 1px solid rgba(255,215,0,0.2);
          padding: 10px 24px;
          border-radius: 10px;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
          cursor: pointer;
          font-size: 0.9rem;
        }
        .btn-ghost:hover {
          background: #FFD700;
          color: #000;
          border-color: #FFD700;
        }

        /* ===== SUPPORT ===== */
        .fr-support {
          background: #0d0d0d;
        }
        .fr-support-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 40px;
        }
        .fr-support-card {
          background: #1a1a1a;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.04);
          transition: all 0.3s ease;
        }
        .fr-support-card:hover {
          border-color: rgba(255,215,0,0.08);
          transform: translateY(-6px);
          box-shadow: 0 20px 40px -16px rgba(0,0,0,0.4);
        }
        .fr-support-img {
          aspect-ratio: 4/3;
          overflow: hidden;
        }
        .fr-support-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .fr-support-card:hover .fr-support-img img {
          transform: scale(1.06);
        }
        .fr-support-card h4 {
          padding: 18px 20px 6px;
          font-size: 1.02rem;
          color: #FFD700;
        }
        .fr-support-card p {
          padding: 0 20px 20px;
          color: #aaa;
          font-size: 0.88rem;
          line-height: 1.55;
        }

        /* ===== POPUP ===== */
        .jk-popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }
        .jk-popup {
          background: #1a1a1a;
          border-radius: 24px;
          padding: 48px;
          max-width: 480px;
          width: 90%;
          border: 1px solid rgba(255,215,0,0.1);
          position: relative;
        }
        .jk-popup h2 {
          color: #FFD700;
          font-size: 1.8rem;
          margin-bottom: 8px;
        }
        .jk-popup p {
          color: #aaa;
          margin-bottom: 24px;
        }
        .jk-popup input,
        .jk-popup textarea {
          width: 100%;
          padding: 12px 16px;
          margin-bottom: 14px;
          background: #0a0a0a;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          color: #fff;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        .jk-popup input:focus,
        .jk-popup textarea:focus {
          outline: none;
          border-color: #FFD700;
        }
        .jk-popup textarea { min-height: 80px; resize: vertical; }
        .jk-popup .btn-primary {
          width: 100%;
          justify-content: center;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
          background: #FFD700;
          color: #0a0a0a;
          box-shadow: 0 8px 30px rgba(255,215,0,0.2);
        }
        .jk-popup .btn-primary:hover {
          background: #f4c430;
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(255,215,0,0.3);
        }
        .jk-popup-close {
          position: absolute;
          top: 16px;
          right: 20px;
          background: none;
          border: none;
          color: #666;
          font-size: 1.5rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .jk-popup-close:hover { color: #fff; }
        .jk-thankyou {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(12px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.5s ease;
        }
        .jk-thankyou-content {
          text-align: center;
          animation: scaleUp 0.5s ease;
        }
        .jk-thankyou-content .icon {
          font-size: 4rem;
          margin-bottom: 16px;
        }
        .jk-thankyou-content h2 {
          color: #FFD700;
          font-size: 2rem;
        }
        .jk-thankyou-content p {
          color: #aaa;
          font-size: 1.1rem;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        /* ===== CTA SECTION ===== */
        .fr-cta {
          background: #0a0a0a;
          padding: 40px 0 80px;
        }
        .fr-cta-banner {
          background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%);
          border-radius: 32px;
          padding: 60px 48px;
          text-align: center;
          border: 1px solid rgba(255,215,0,0.08);
          position: relative;
          overflow: hidden;
        }
        .fr-cta-banner::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 60%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,215,0,0.03) 0%, transparent 70%);
          pointer-events: none;
        }
        .fr-cta-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(255,215,0,0.02) 0%, transparent 70%);
        }
        .fr-cta-content {
          position: relative;
          z-index: 1;
        }
        .fr-cta-content h2 {
          color: #fff;
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          margin-bottom: 12px;
        }
        .fr-cta-content p {
          color: #aaa;
          font-size: 1.05rem;
          margin-bottom: 28px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .btn-primary-cta {
          background: #FFD700;
          color: #0a0a0a;
          padding: 16px 36px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .btn-primary-cta:hover {
          background: #f4c430;
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(255,215,0,0.3);
        }
        .btn-primary-cta svg {
          width: 20px;
          height: 20px;
          stroke: currentColor;
          stroke-width: 2.4;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 992px) {
          .fr-models-grid,
          .fr-support-grid,
          .pkg-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .fr-hero {
            min-height: 60vh;
          }
          .fr-hero-content h1 {
            font-size: 2.8rem;
          }
        }

        @media (max-width: 768px) {
          .fr-models-grid,
          .fr-support-grid,
          .pkg-grid {
            grid-template-columns: 1fr;
          }
          .fr-hero {
            min-height: 50vh;
            margin-top: -60px;
            padding-top: 100px;
          }
          .fr-hero-content h1 {
            font-size: 2.2rem;
          }
          .fr-hero-content p {
            font-size: 1rem;
          }
          .fr-hero-bg img {
            object-position: center 40%;
          }
          .fr-cta-banner {
            padding: 40px 24px;
          }
          .jk-popup {
            padding: 32px 20px;
          }
          .fr-hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          .btn-hero {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 576px) {
          .fr-hero {
            margin-top: -40px;
            padding-top: 80px;
            min-height: 40vh;
          }
          .fr-hero-content h1 {
            font-size: 1.8rem;
          }
          .fr-hero-bg img {
            object-position: center 35%;
          }
          .fr-cta-content h2 {
            font-size: 1.4rem;
          }
          .fr-cta-content .btn-primary-cta {
            width: 100%;
            justify-content: center;
          }
          .btn-ghost {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}