import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/jk-chaat-cafe-logo.png';
import { subscribeNewsletter } from '../api/client';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    try {
      const data = await subscribeNewsletter(email);
      setMsg({ type: 'success', text: data.message });
      setEmail('');
    } catch (err: any) {
      setMsg({ type: 'error', text: err?.response?.data?.message || 'Could not subscribe. Please try again.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link to="/" className="footer-brand-link">
              <img src={logo} alt="JK Chaat Cafe" className="footer-logo" />
            </Link>
            <p>We help entrepreneurs launch profitable cafe businesses — complete setup, supply and support, start to finish.</p>
          </div>
          <div className="foot-col">
            <h5>Explore</h5>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/franchise">Franchise Plans</Link></li>
              <li><Link to="/products">Products & Menu</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Company</h5>
            <ul>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Get Franchise Updates</h5>
            <p style={{ fontSize: 13.5, color: '#aaa', marginBottom: 14 }}>City-wise openings and offers, straight to your inbox.</p>
            <form className="foot-form" onSubmit={handleSubmit}>
              <input type="email" placeholder="Enter your email" value={email} required onChange={(e) => setEmail(e.target.value)} />
              <button type="submit" disabled={loading}>{loading ? '...' : 'Subscribe'}</button>
            </form>
            {msg && <div className={`form-msg ${msg.type}`} style={{ display: 'block', marginTop: 12 }}>{msg.text}</div>}
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 JK Chaat Cafe. All rights reserved.</span>
          <span>
            <a href="tel:+910000000000">9981105588</a> · 
            <a href="mailto:franchise@jkchaatcafe.com">jkchaatcafe@gmail.com</a>
          </span>
        </div>
      </div>

      <style>{`
        /* ===== DARK THEME FOOTER ===== */
        footer {
          background: #0a0a0a !important;
          padding: 60px 0 30px;
          border-top: 1px solid rgba(255, 215, 0, 0.08);
          margin-top: 0;
        }

        .foot-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-brand-link {
          display: inline-block;
          margin-bottom: 14px;
        }

        .footer-brand-link:hover {
          opacity: 0.8;
        }

        .foot-brand .footer-logo {
          height: 40px;
          width: auto;
          display: block;
          object-fit: contain;
          filter: none !important;
          background: transparent;
        }

        .foot-brand p {
          font-size: 14px;
          line-height: 1.7;
          color: #aaa;
          max-width: 300px;
        }

        .foot-col h5 {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 16px;
          color: #fff;
          letter-spacing: 0.5px;
        }

        .foot-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .foot-col ul li {
          margin-bottom: 10px;
        }

        .foot-col ul li a {
          color: #aaa;
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .foot-col ul li a:hover {
          color: #FFD700;
          padding-left: 6px;
        }

        .foot-form {
          display: flex;
          gap: 8px;
          max-width: 100%;
        }

        .foot-form input {
          flex: 1;
          padding: 10px 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          font-size: 14px;
          background: #1a1a1a;
          color: #fff;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .foot-form input::placeholder {
          color: #666;
        }

        .foot-form input:focus {
          border-color: #FFD700;
        }

        .foot-form button {
          padding: 10px 24px;
          background: #FFD700;
          color: #000;
          border: none;
          border-radius: 8px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .foot-form button:hover:not(:disabled) {
          background: #F4C430;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255, 215, 0, 0.2);
        }

        .foot-form button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .form-msg {
          font-size: 13px;
          padding: 8px 12px;
          border-radius: 6px;
        }

        .form-msg.success {
          color: #000;
          background: #FFD700;
        }

        .form-msg.error {
          color: #fff;
          background: rgba(255, 0, 0, 0.15);
          border: 1px solid rgba(255, 0, 0, 0.2);
        }

        .foot-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          font-size: 13px;
          color: #666;
          flex-wrap: wrap;
          gap: 12px;
        }

        .foot-bottom a {
          color: #888;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .foot-bottom a:hover {
          color: #FFD700;
        }

        @media (max-width: 992px) {
          .foot-grid {
            grid-template-columns: 1fr 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 576px) {
          footer {
            padding: 40px 0 20px;
          }
          .foot-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .foot-brand p {
            max-width: 100%;
          }
          .foot-brand .footer-logo {
            height: 34px;
          }
          .foot-form {
            flex-direction: column;
          }
          .foot-form button {
            width: 100%;
          }
          .foot-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}