import SEO from '../components/SEO'
import { organizationSchema } from '../utils/schema'
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from '../components/Reveal';
import Journey from '../components/Journey';
import CountUp from '../components/CountUp';
import aboutHeroImg from '../assets/img/aboutpagehero.jpeg';
import aboutInteriorImg from '../assets/img/aboutinterior.jpeg';
import aboutKitchenImg from '../assets/img/aboutkitchen.jpeg';

// ---- Premium Images ----
const IMG = {
  aboutHero: aboutHeroImg,
  interior: aboutInteriorImg,
  kitchen: aboutKitchenImg,
};

const historySteps = [
  { num: '2020', title: 'Started', text: 'First cafe concept and masala recipes developed.' },
  { num: '2021', title: 'First Partners', text: 'Early franchise partners onboarded across MP.' },
  { num: '2022', title: 'Central Supply', text: 'In-house masala and raw material supply chain built.' },
  { num: '2023', title: 'Training Academy', text: 'Structured staff training program launched.' },
  { num: '2024', title: '45+ Cities', text: 'Franchise network expanded across central India.' },
  { num: '2026', title: '120+ Partners', text: 'A growing family of profitable cafe owners.' },
];

const aboutFeatures = [
  { 
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    title: 'Perfect Ingredients', 
    desc: 'We use only the finest, freshest ingredients sourced from trusted suppliers.' 
  },
  { 
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    title: 'Eco-Friendly', 
    desc: 'We ensure our operational activities adhere to standard procedures for a healthier environment.' 
  },
  { 
    icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75',
    title: 'Dedicated Service', 
    desc: 'Our staff is well-skilled & trained to deliver great food and great service.' 
  },
  { 
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Sustainable Models', 
    desc: 'Low cost business models that fit into modern-day trends for long-term success.' 
  },
];

const values = [
  { icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', text: 'Work for the community where we live' },
  { icon: 'M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3', text: 'Customer Satisfaction' },
  { icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75', text: 'Optimal services to Franchisees' },
  { icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', text: 'Think Local Act Global' },
  { icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z', text: 'Break. Taste. Smile.' },
  { icon: 'M13 10V3L4 14h7v7l9-11h-7z', text: 'Consistent Innovations' },
  { icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 17v1m0-1c1.11 0 2.08-.402 2.599-1', text: 'To become most reputed food franchise brand' },
  { icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z', text: 'Serve customers outstandingly' },
];

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);

  return (
    <>
      <SEO
        title="About JK Chaat Cafe – Indian Chaat & Food Franchise Brand"
        description="Learn about JK Chaat Cafe, an Indian food brand focused on authentic chaat, fast food, beverages and a scalable franchise model for entrepreneurs across India."
        canonical="https://jkchaatcafe.com/about"
        keywords="JK Chaat Cafe, Indian chaat brand, chaat cafe brand, Indian food brand, street food brand India, food franchise brand, QSR food brand"
        schema={[organizationSchema]}
      />
      
      <div className="jk-about">
        <style>{`
          /* ===== DARK THEME BASE WITH BACKGROUND IMAGE ===== */
          .jk-about {
            background: #0a0a0a;
            margin-top: 0;
            position: relative;
            min-height: 100vh;
          }

          /* ===== BACKGROUND IMAGE - BRIGHT & CLEAR ===== */
          .jk-about-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            background-image: url(${aboutHeroImg});
            background-size: contain;
            background-position: center top;
            background-repeat: no-repeat;
            background-attachment: scroll;
            opacity: 0.25;
            pointer-events: none;
            filter: brightness(1.2) contrast(1.1);
          }

          .jk-about-bg::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 40%;
            background: linear-gradient(180deg, transparent, #0a0a0a);
          }

          /* ===== ALL SECTIONS TRANSPARENT ===== */
          .jk-about .section {
            padding: 60px 0;
            position: relative;
            z-index: 1;
            background: transparent !important;
          }

          .jk-about .section-title {
            font-size: clamp(2rem, 4vw, 3rem);
            line-height: 1.2;
            color: #fff;
            max-width: 700px;
          }
          .jk-about .section-head.center .section-title {
            margin: 0 auto;
          }
          .jk-about .section-head.center p {
            color: #aaa;
            max-width: 600px;
            margin: 10px auto 0;
          }
          .jk-about .eyebrow {
            color: #FFD700;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-size: 0.85rem;
            display: inline-block;
            margin-bottom: 10px;
          }
          .jk-about .grad-text {
            background: linear-gradient(135deg, #FFD700, #F4A900);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          /* ===== HERO ===== */
          .jk-about-hero {
            position: relative;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            overflow: hidden;
            padding: 40px 0 60px;
            margin-top: -60px;
            padding-top: 120px;
            z-index: 1;
            background: transparent !important;
          }
          .jk-about-hero-content {
            position: relative;
            z-index: 2;
            max-width: 820px;
            margin: 0 auto;
            padding-top: 40px;
          }
          .jk-about-hero h1 {
            font-size: clamp(2.8rem, 5vw, 4.5rem);
            line-height: 1.1;
            color: #fff;
            margin: 0 0 16px;
          }
          .jk-about-hero h1 .grad-text {
            display: inline-block;
          }
          .jk-about-hero p {
            color: rgba(255,255,255,0.85);
            font-size: 1.15rem;
            line-height: 1.8;
            max-width: 600px;
            margin: 0 auto;
          }

          /* ===== ABOUT CONTENT ===== */
          .jk-about-grid {
            display: grid;
            grid-template-columns: 1fr 0.9fr;
            gap: 60px;
            align-items: center;
          }
          .jk-about-text .section-title { margin: 10px 0 16px; }
          .jk-about-text p { color: #ddd; font-size: 1.05rem; line-height: 1.8; }
          .jk-about-image-wrap { position: relative; }
          .jk-about-image-wrap img {
            width: 100%;
            aspect-ratio: 4/5;
            object-fit: cover;
            border-radius: 24px;
            border: 1px solid rgba(255,215,0,0.05);
          }
          .jk-about-image-badge {
            position: absolute;
            bottom: -20px;
            right: -20px;
            background: rgba(26,26,26,0.9);
            backdrop-filter: blur(12px);
            border: 2px solid #FFD700;
            padding: 16px 24px;
            border-radius: 16px;
            text-align: center;
          }
          .jk-about-image-badge .badge-number {
            font-family: 'Baloo 2', sans-serif;
            font-size: 2rem;
            font-weight: 800;
            color: #FFD700;
            display: block;
          }
          .jk-about-image-badge .badge-text {
            color: #fff;
            font-size: 0.75rem;
            font-weight: 600;
          }

          /* ===== FEATURES ===== */
          .jk-about-features-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            margin-top: 40px;
          }
          .jk-about-feature-card {
            background: rgba(26,26,26,0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255,255,255,0.04);
            border-radius: 20px;
            padding: 32px 24px;
            text-align: center;
            transition: all 0.3s ease;
          }
          .jk-about-feature-card:hover {
            border-color: rgba(255,215,0,0.15);
            transform: translateY(-8px);
            box-shadow: 0 20px 40px -16px rgba(0,0,0,0.5);
            background: rgba(26,26,26,0.85);
          }
          .jk-about-feature-icon {
            width: 56px;
            height: 56px;
            margin: 0 auto 12px;
            border-radius: 14px;
            background: rgba(255,215,0,0.08);
            border: 1px solid rgba(255,215,0,0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
          }
          .jk-about-feature-card:hover .jk-about-feature-icon {
            background: #FFD700;
            border-color: #FFD700;
          }
          .jk-about-feature-icon svg {
            width: 26px;
            height: 26px;
            stroke: #FFD700;
            transition: stroke 0.3s ease;
          }
          .jk-about-feature-card:hover .jk-about-feature-icon svg {
            stroke: #000;
          }
          .jk-about-feature-card h3 {
            color: #fff;
            font-size: 1.1rem;
            margin: 0 0 8px;
          }
          .jk-about-feature-card p {
            color: #ccc;
            font-size: 0.9rem;
            line-height: 1.6;
            margin: 0;
          }

          /* ===== MISSION VISION ===== */
          .jk-mission-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            margin-top: 40px;
          }
          .jk-mission-card {
            background: rgba(26,26,26,0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255,255,255,0.04);
            border-radius: 20px;
            padding: 32px 28px;
            transition: all 0.3s ease;
            text-align: center;
          }
          .jk-mission-card:hover {
            border-color: rgba(255,215,0,0.15);
            transform: translateY(-6px);
            box-shadow: 0 20px 40px -16px rgba(0,0,0,0.4);
            background: rgba(26,26,26,0.85);
          }
          .jk-mission-icon {
            width: 64px;
            height: 64px;
            margin: 0 auto 12px;
            border-radius: 50%;
            background: rgba(255,215,0,0.08);
            border: 1px solid rgba(255,215,0,0.1);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .jk-mission-icon svg {
            width: 30px;
            height: 30px;
            stroke: #FFD700;
          }
          .jk-mission-card h3 {
            color: #fff;
            font-size: 1.4rem;
            margin: 0 0 8px;
          }
          .jk-mission-card p {
            color: #ccc;
            font-size: 1rem;
            line-height: 1.7;
            margin: 0;
          }

          /* ===== VALUES ===== */
          .jk-values-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin-top: 40px;
          }
          .jk-value-item {
            text-align: center;
            padding: 24px 16px;
            background: rgba(26,26,26,0.6);
            backdrop-filter: blur(8px);
            border-radius: 16px;
            border: 1px solid rgba(255,255,255,0.04);
            transition: all 0.3s ease;
          }
          .jk-value-item:hover {
            border-color: rgba(255,215,0,0.1);
            transform: translateY(-4px);
            background: rgba(26,26,26,0.8);
          }
          .jk-value-icon {
            width: 40px;
            height: 40px;
            margin: 0 auto 8px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .jk-value-icon svg {
            width: 20px;
            height: 20px;
            stroke: #FFD700;
          }
          .jk-value-item h4 {
            color: #fff;
            font-size: 0.9rem;
            margin: 0;
            line-height: 1.3;
          }

          /* ===== CTA ===== */
          .jk-cta-banner {
            position: relative;
            border-radius: 32px;
            overflow: hidden;
            min-height: 320px;
            display: flex;
            align-items: center;
            background: rgba(26,26,26,0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255,215,0,0.05);
          }
          .jk-cta-bg {
            position: absolute;
            inset: 0;
            opacity: 0.3;
          }
          .jk-cta-bg img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .jk-cta-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.3));
          }
          .jk-cta-content {
            position: relative;
            z-index: 1;
            padding: 50px 48px;
            max-width: 600px;
          }
          .jk-cta-content h2 {
            color: #fff;
            font-size: 2rem;
            line-height: 1.2;
            margin-bottom: 12px;
          }
          .jk-cta-content p {
            color: rgba(255,255,255,0.8);
            margin-bottom: 24px;
            font-size: 1rem;
          }
          .jk-cta-content .btn-primary {
            padding: 14px 32px;
            font-size: 1rem;
            background: #FFD700;
            color: #000;
            border: none;
            border-radius: 10px;
            font-weight: 700;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s ease;
          }
          .jk-cta-content .btn-primary:hover {
            background: #F4C430;
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(255,215,0,0.3);
          }
          .jk-cta-content .btn-primary svg {
            width: 18px;
            height: 18px;
          }

          /* ===== RESPONSIVE ===== */
          @media (max-width: 992px) {
            .jk-about-grid { grid-template-columns: 1fr; gap: 40px; }
            .jk-about-features-grid { grid-template-columns: repeat(2, 1fr); }
            .jk-values-grid { grid-template-columns: repeat(2, 1fr); }
            .jk-mission-grid { grid-template-columns: 1fr 1fr; }
            .jk-about-hero { min-height: 80vh; }
            .jk-about-hero h1 { font-size: 3rem; }
          }

          @media (max-width: 768px) {
            .jk-about-features-grid { grid-template-columns: 1fr; }
            .jk-values-grid { grid-template-columns: 1fr 1fr; }
            .jk-mission-grid { grid-template-columns: 1fr; }
            .jk-about-hero h1 { font-size: 2.4rem; }
            .jk-about-hero { padding: 20px 0 40px; min-height: 60vh; margin-top: -40px; padding-top: 100px; }
            .jk-about-image-badge { right: 0; padding: 12px 18px; }
            .jk-about-image-badge .badge-number { font-size: 1.5rem; }
            .jk-about-hero p { font-size: 1rem; }
          }

          @media (max-width: 576px) {
            .jk-about-hero h1 { font-size: 1.8rem; }
            .jk-about-hero { margin-top: -30px; padding-top: 80px; min-height: 50vh; }
            .jk-about-hero p { font-size: 0.95rem; }
            .jk-about-hero-content { padding-top: 20px; }
            .jk-about-bg { opacity: 0.15; }
            .jk-about-bg {
              background-size: cover;
              background-position: center;
            }
          }
        `}</style>

        {/* ============ BACKGROUND IMAGE ============ */}
        <div className="jk-about-bg" />

        {/* ============ HERO ============ */}
        <section className="jk-about-hero" ref={heroRef}>
          <div className="container jk-about-hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Building <span className="grad-text">Cafe Owners</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              JK Chaat Cafe helps first-time entrepreneurs launch a fully branded cafe business — interiors, kitchen equipment, signature masala, menu, staff training and marketing, handled end to end.
            </motion.p>
          </div>
        </section>

        {/* ============ ABOUT CONTENT ============ */}
        <section className="section jk-about-content">
          <div className="container">
            <div className="jk-about-grid">
              <motion.div
                className="jk-about-text"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="section-title">Innovative and continuous progress since 2020</h2>
                <p>
                  Established in 2020, JK Chaat Cafe has grown rapidly and now the brand has expanded across India. 
                  Being one of the most-trusted food brands, our focus is to deliver rich quality food with proper 
                  health and hygiene regulations, awesome taste and unmatched services to our partners.
                </p>
                <p style={{ marginTop: '16px' }}>
                  This is the era of competitive-business thus it is important to improve the on-going process 
                  by using technology in day-to-day operations. We are passionate to bring more dynamic and 
                  profitable business concepts. Join our franchise family to move one step ahead of the peers.
                </p>
              </motion.div>

              <motion.div
                className="jk-about-image-wrap"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <img src={IMG.interior} alt="JK Chaat Cafe Interior" />
                <div className="jk-about-image-badge">
                  <span className="badge-number">6+</span>
                  <span className="badge-text">Years of Excellence</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============ FEATURES ============ */}
        <section className="section">
          <div className="container">
            <Reveal className="section-head center">
              <h2 className="section-title">Our Core Principles</h2>
            </Reveal>
            <div className="jk-about-features-grid">
              {aboutFeatures.map((f, i) => (
                <motion.div key={i} className="jk-about-feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="jk-about-feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={f.icon} />
                    </svg>
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ MISSION & VISION ============ */}
        <section className="section">
          <div className="container">
            <Reveal className="section-head center">
              <h2 className="section-title">Mission & Vision</h2>
            </Reveal>
            <div className="jk-mission-grid">
              <motion.div className="jk-mission-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6 }}
              >
                <div className="jk-mission-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <h3>Our Vision</h3>
                <p>"To bring people together over unforgettable food, setting new standards in taste, innovation, and franchise success."</p>
              </motion.div>

              <motion.div className="jk-mission-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="jk-mission-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                </div>
                <h3>Our Mission</h3>
                <p>"To deliver delicious, high-quality, and hygienic food with consistent taste across every outlet, creating memorable dining experiences for our customers while empowering our franchise partners to grow successfully."</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============ VALUES ============ */}
        <section className="section">
          <div className="container">
            <Reveal className="section-head center">
              <h2 className="section-title">What Drives Us</h2>
            </Reveal>
            <div className="jk-values-grid">
              {values.map((item, i) => (
                <motion.div key={i} className="jk-value-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="jk-value-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <h4>{item.text}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ JOURNEY ============ */}
        <section className="section">
          <div className="container">
            <Reveal className="section-head center">
              <h2 className="section-title">A short history, built one franchise at a time.</h2>
            </Reveal>
            <Journey steps={historySteps} />
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="section">
          <div className="container">
            <motion.div className="jk-cta-banner"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="jk-cta-bg">
                <img src={IMG.kitchen} alt="Kitchen" />
                <div className="jk-cta-overlay" />
              </div>
              <div className="jk-cta-content">
                <h2>Ready to write your own success story?</h2>
                <p>Join a growing network of cafe owners who started with zero restaurant experience.</p>
                <Link to="/franchise-application" className="btn-primary">
                  Apply for Franchise
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}