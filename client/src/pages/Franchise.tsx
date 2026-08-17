import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
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
  return (
    <div className="jk-franchise-v2">
      {/* ============ HERO ============ */}
      <section className="fr-hero">
        <div className="fr-hero-bg"><img src={IMG.hero} alt="JK Chaat Cafe Franchise Opportunities" /></div>
        <div className="fr-hero-overlay" />
        <div className="container fr-hero-content">
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Franchise plans for <span className="grad-text">first-time owners</span>
          </motion.h1>
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
            <Link to="/franchise-application?plan=starter" className="btn btn-ghost">Apply for Starter</Link>
          </Reveal>
          <Reveal delay={0.08} className="pkg-card featured">
            <span className="pkg-tag">Most Chosen</span><h3>Complete Cafe</h3><div className="pkg-price">₹9-10L <span>/ one-time</span></div>
            <ul>
              <li>{check}300-500 Sq.ft.din-in format</li><li>{check}Full kitchen & seating setup</li><li>{check}Customise menu  (60+ items)</li><li>{check}Launch marketing campaign</li><li>{check}24 Month Guidance</li>
            </ul>
            <Link to="/franchise-application?plan=complete" className="btn btn-ghost">Apply for Complete Cafe</Link>
          </Reveal>
          <Reveal delay={0.16} className="pkg-card">
            <span className="pkg-tag">Master</span><h3>Master Franchise</h3><div className="pkg-price">Custom <span>/ region-based</span></div>
            <ul>
              <li>{check}Exclusive regional rights</li><li>{check}Multi-outlet rollout support</li><li>{check}Dedicated supply chain</li><li>{check}Priority consultation</li>
            </ul>
            <Link to="/franchise-application?plan=master" className="btn btn-ghost">Enquire for Master Franchise</Link>
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
          margin: 0 auto;
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
        .pkg-card .btn-ghost {
          background: transparent;
          color: #FFD700;
          border: 1px solid rgba(255,215,0,0.2);
          padding: 10px 24px;
          border-radius: 10px;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
        }
        .pkg-card .btn-ghost:hover {
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
        }
      `}</style>
    </div>
  );
}