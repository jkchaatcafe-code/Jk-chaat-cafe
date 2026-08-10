import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { submitLead } from '../api/client';

const HERO_IMG = 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=80';

export default function FranchiseApplication() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    package: '',
    budget: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitLead('/leads/franchise-application', formData);
      setSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="jk-franchise-app">
        <div className="container" style={{ maxWidth: '600px', margin: '100px auto', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🎉</div>
          <h2 style={{ color: '#FFD700', fontSize: '2rem', marginBottom: '12px' }}>Application Submitted!</h2>
          <p style={{ color: '#aaa', fontSize: '1.1rem' }}>Our franchise team will contact you within 24 hours.</p>
          <Link to="/" className="btn btn-primary" style={{ marginTop: '24px' }}>Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="jk-franchise-app">
      <style>{`
        .jk-franchise-app {
          background: #0a0a0a;
          min-height: 100vh;
          padding: 40px 0;
        }
        .jk-franchise-app .page-hero {
          position: relative;
          min-height: 35vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 40px 0 60px;
          margin-top: -70px;
          padding-top: 120px;
        }
        .jk-franchise-app .hero-bg {
          position: absolute;
          inset: -20% 0 0 0;
          height: 120%;
          z-index: 0;
        }
        .jk-franchise-app .hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .jk-franchise-app .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.92) 100%);
        }
        .jk-franchise-app .hero-content {
          position: relative;
          z-index: 1;
          max-width: 820px;
          padding-top: 20px;
        }
        .jk-franchise-app .hero-content .breadcrumb {
          color: rgba(255,255,255,0.5);
          font-size: 0.85rem;
          margin-bottom: 16px;
        }
        .jk-franchise-app .hero-content .breadcrumb a {
          color: #FFD700;
          text-decoration: none;
        }
        .jk-franchise-app .hero-content h1 {
          font-size: clamp(2.4rem, 4vw, 3.6rem);
          line-height: 1.1;
          color: #fff;
          margin: 0 0 16px;
        }
        .jk-franchise-app .hero-content p {
          color: rgba(255,255,255,0.8);
          font-size: 1.05rem;
          line-height: 1.7;
          max-width: 580px;
        }
        .jk-franchise-app .grad-text {
          background: linear-gradient(135deg, #FFD700, #F4A900);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .jk-franchise-app .form-container {
          max-width: 700px;
          margin: -30px auto 0;
          position: relative;
          z-index: 2;
          background: #141414;
          border-radius: 24px;
          padding: 48px;
          border: 1px solid rgba(255,255,255,0.04);
        }
        .jk-franchise-app .form-container h2 {
          color: #FFD700;
          font-size: 1.8rem;
          margin-bottom: 8px;
        }
        .jk-franchise-app .form-container p {
          color: #888;
          margin-bottom: 28px;
        }
        .jk-franchise-app .form-group {
          margin-bottom: 18px;
        }
        .jk-franchise-app .form-group label {
          display: block;
          color: #aaa;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 6px;
        }
        .jk-franchise-app .form-group input,
        .jk-franchise-app .form-group select,
        .jk-franchise-app .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.06);
          background: #0a0a0a;
          color: #fff;
          font-size: 1rem;
          transition: all 0.3s ease;
          outline: none;
        }
        .jk-franchise-app .form-group input:focus,
        .jk-franchise-app .form-group select:focus,
        .jk-franchise-app .form-group textarea:focus {
          border-color: #FFD700;
          box-shadow: 0 0 0 2px rgba(255,215,0,0.05);
        }
        .jk-franchise-app .form-group select option {
          background: #0a0a0a;
          color: #fff;
        }
        .jk-franchise-app .form-group textarea {
          min-height: 100px;
          resize: vertical;
        }
        .jk-franchise-app .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .jk-franchise-app .btn-submit {
          width: 100%;
          padding: 16px;
          background: #FFD700;
          color: #000;
          border: none;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 8px;
        }
        .jk-franchise-app .btn-submit:hover {
          background: #F4C430;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(255,215,0,0.2);
        }
        .jk-franchise-app .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
        @media (max-width: 768px) {
          .jk-franchise-app .form-container {
            padding: 32px 24px;
            margin-top: -20px;
          }
          .jk-franchise-app .form-row {
            grid-template-columns: 1fr;
          }
          .jk-franchise-app .page-hero {
            min-height: 30vh;
          }
          .jk-franchise-app .hero-content h1 {
            font-size: 2rem;
          }
        }
        @media (max-width: 576px) {
          .jk-franchise-app .form-container {
            padding: 24px 16px;
          }
          .jk-franchise-app .hero-content h1 {
            font-size: 1.6rem;
          }
        }
      `}</style>

      {/* ===== HERO ===== */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src={HERO_IMG} alt="Franchise Application" />
          <div className="hero-overlay" />
        </div>
        <div className="container hero-content">
          <div className="breadcrumb"><Link to="/">Home</Link> / Franchise Application</div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Apply for <span className="grad-text">Franchise</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Fill in your details and our franchise team will get back to you within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* ===== FORM ===== */}
      <div className="container">
        <div className="form-container">
          <h2>Become a Franchise Partner</h2>
          <p>Fill in your details and our team will reach out to you shortly.</p>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>City</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Package</label>
                <select name="package" value={formData.package} onChange={handleChange}>
                  <option value="">Select a package</option>
                  <option value="starter">Starter Kiosk Cafe - ₹9.9L</option>
                  <option value="complete">Complete Cafe - ₹19.5L</option>
                  <option value="master">Master Franchise - Custom</option>
                </select>
              </div>
              <div className="form-group">
                <label>Budget</label>
                <select name="budget" value={formData.budget} onChange={handleChange}>
                  <option value="">Select budget range</option>
                  <option value="5-10">₹5L - ₹10L</option>
                  <option value="10-20">₹10L - ₹20L</option>
                  <option value="20-50">₹20L - ₹50L</option>
                  <option value="50+">₹50L+</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your plans, location, or any questions..." />
            </div>

            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}