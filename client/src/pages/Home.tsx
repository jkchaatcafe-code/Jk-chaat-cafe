import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';
import HeroVisual from '../components/HeroVisual';
import Journey from '../components/Journey';
import { testimonials } from '../data/content';
import { useState, useEffect } from 'react';

const whyItems = [
  { 
    title: 'Turnkey Setup', 
    text: 'Interior, kitchen & equipment sourcing handled by our team.',
    icon: 'M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6',
  },
  { 
    title: 'Proven Menu & Margins', 
    text: 'Tested chaat, tea & fast-food menu with signature masala blends.',
    icon: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
  },
  { 
    title: 'Trained Staff', 
    text: 'We train your team on recipes, service & hygiene before launch.',
    icon: 'M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  },
  { 
    title: 'Marketing That Works', 
    text: 'Launch campaigns & local marketing to bring footfall from day one.',
    icon: 'M3 3v18h18M7 15l4-4 3 3 5-6',
  },
  { 
    title: 'Raw Materials Supply', 
    text: 'Consistent supply of masala, tea, coffee & packaging to every outlet.',
    icon: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z',
  },
  { 
    title: 'Continuous Guidance', 
    text: 'Ongoing consultation on operations, costs & growth after launch.',
    icon: 'M22 12h-4l-3 9L9 3l-3 9H2',
  },
];

const check = <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>;

const journeySteps = [
  { num: '1', title: 'Enquiry', text: 'Share your city and budget.' },
  { num: '2', title: 'Site Visit', text: 'We evaluate location and layout.' },
  { num: '3', title: 'Agreement', text: 'Franchise terms signed.' },
  { num: '4', title: 'Setup', text: 'Interior & equipment installed.' },
  { num: '5', title: 'Training', text: 'Staff trained on-site.' },
  { num: '6', title: 'Launch', text: 'Grand opening with marketing.' },
];

// Marquee items - no emojis
const marqueeItems = [
  'Complete Franchise Setup',
  'Kitchen Equipment',
  'Premium Masala & Spices',
  'Interior Design',
  'Staff Training',
  'Marketing Support',
  'Menu Planning',
  'Launch Support',
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Cafe Franchise & Business Setup</div>
            <h1>Start your own <span className="grad-text">profitable cafe</span>, we build it with you.</h1>
            <p className="sub">JK Chaat Cafe helps first-time entrepreneurs launch a fully branded cafe business — interiors, kitchen equipment, signature masala, menu, staff training and marketing, handled end to end.</p>
            <div className="hero-ctas">
              <Link to="/franchise" className="btn btn-primary">
                Become a Franchise Partner
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </Link>
              <a href="#brochure" className="btn btn-ghost">Download Brochure</a>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      {/* Marquee - Clean no emojis */}
      <div className="marquee-wrap">
        <div className="marquee">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>

      {/* Why Section */}
      <section className="section why-section">
        <div className="container">
          <Reveal className="section-head center">
            <div className="eyebrow">Why Partner With Us</div>
            <h2 className="why-heading-large">Everything you need, nothing you have to figure out.</h2>
            <p className="section-sub">We solve the three biggest challenges: what to sell, how to set up, and how to keep it full.</p>
          </Reveal>
          
          <div className="why-grid-modern">
            {whyItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06} className="why-card-modern">
                <div className="why-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={item.icon} />
                  </svg>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="why-card-shimmer"></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Plans */}
      <section className="section pkg-section no-gap-top">
        <div className="pkg-band">
          <div className="container">
            <Reveal className="section-head center">
              <div className="eyebrow">Investment Plans</div>
              <h2 className="pkg-heading-large">A franchise package for every budget.</h2>
              <p>Every plan includes setup, training and launch support.</p>
            </Reveal>
            <div className="pkg-grid">
              <Reveal className="pkg-card">
                <span className="pkg-tag">Starter</span>
                <h3>Kiosk Cafe</h3>
                <div className="pkg-price">₹9.9L <span>/ one-time</span></div>
                <ul>
                  <li>{check}Compact kiosk interior design</li>
                  <li>{check}Core equipment package</li>
                  <li>{check}Starter menu & masala kit</li>
                  <li>{check}7-day staff training</li>
                </ul>
                <Link to="/franchise-application" className="btn btn-ghost">Enquire Now</Link>
              </Reveal>
              <Reveal delay={0.08} className="pkg-card featured">
                <span className="pkg-tag">Most Chosen</span>
                <h3>Complete Cafe</h3>
                <div className="pkg-price">₹19.5L <span>/ one-time</span></div>
                <ul>
                  <li>{check}Full interior & branding</li>
                  <li>{check}Complete kitchen & seating</li>
                  <li>{check}Full menu & raw material supply</li>
                  <li>{check}Launch marketing campaign</li>
                  <li>{check}12 months business guidance</li>
                </ul>
                <Link to="/franchise-application" className="btn btn-ghost">Enquire Now</Link>
              </Reveal>
              <Reveal delay={0.16} className="pkg-card">
                <span className="pkg-tag">Master</span>
                <h3>Master Franchise</h3>
                <div className="pkg-price">Custom <span>/ region-based</span></div>
                <ul>
                  <li>{check}Exclusive regional rights</li>
                  <li>{check}Multi-outlet rollout support</li>
                  <li>{check}Dedicated supply chain</li>
                  <li>{check}Priority business consultation</li>
                </ul>
                <Link to="/franchise-application" className="btn btn-ghost">Enquire Now</Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section journey-section">
        <div className="container">
          <Reveal className="section-head center">
            <div className="eyebrow">Your Cafe Setup Journey</div>
            <h2>From enquiry to opening day, in six steps.</h2>
          </Reveal>
          <Journey steps={journeySteps} />
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <Reveal className="stats-band">
            <div className="stats-grid">
              <div><div className="stat-num"><CountUp target={120} suffix="+" /></div><div className="stat-label">Franchise Partners</div></div>
              <div><div className="stat-num"><CountUp target={45} /></div><div className="stat-label">Cities Covered</div></div>
              <div><div className="stat-num"><CountUp target={98} suffix="%" /></div><div className="stat-label">Partner Satisfaction</div></div>
              <div><div className="stat-num"><CountUp target={6} /></div><div className="stat-label">Years of Experience</div></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials - Auto Slide */}
      <section className="section testimonials-section">
        <div className="container">
          <Reveal className="section-head center">
            <div className="eyebrow">Partner Success Stories</div>
            <h2>Real owners, real cafes, real returns.</h2>
          </Reveal>
          
          <div className="testimonials-slider">
            <div 
              className="testimonials-track"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((t, index) => (
                <div className="test-card-slide" key={index}>
                  <div className="test-stars">★★★★★</div>
                  <p className="test-quote">"{t.quote}"</p>
                  <div className="test-person">
                    <div className="test-avatar">{t.name.split(' ').map((n) => n[0]).join('')}</div>
                    <div>
                      <b>{t.name}</b>
                      <span>Franchise Partner, {t.city}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="test-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`test-dot ${currentTestimonial === index ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <Reveal className="cta-banner" id="brochure">
            <div className="cta-blob" style={{ width: 220, height: 220, top: -60, left: -60 }}></div>
            <div className="cta-blob" style={{ width: 160, height: 160, bottom: -50, right: -30 }}></div>
            <h2>Your cafe business starts with one conversation.</h2>
            <p>Tell us your city and budget — we'll show you exactly what it takes.</p>
            <Link to="/franchise-application" className="btn btn-ghost" style={{ color: '#000000' }}>
              Apply for Franchise
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </Link>
          </Reveal>
        </div>
      </section>

      <style>{`
        /* ===== MARQUEE - YELLOW ===== */
        .marquee-wrap {
          background: #FFD700;
          padding: 14px 0;
          overflow: hidden;
        }

        .marquee {
          display: flex;
          animation: marqueeScroll 30s linear infinite;
          white-space: nowrap;
        }

        .marquee span {
          display: inline-block;
          padding: 0 30px;
          color: #000000;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* ===== NO GAP BETWEEN SECTIONS ===== */
        .no-gap-top {
          padding-top: 0 !important;
          margin-top: 0 !important;
        }

        .why-section {
          padding-bottom: 0 !important;
          margin-bottom: 0 !important;
        }

        .pkg-section {
          padding-top: 0 !important;
          margin-top: 0 !important;
        }

        .pkg-band {
          padding-top: 20px !important;
        }

        /* ===== SECTION GAPS ===== */
        .section {
          padding: 50px 0 !important;
        }

        .why-section {
          background: #FFFFFF;
          padding: 50px 0 0 0 !important;
        }

        .journey-section {
          padding: 50px 0 !important;
          background: #FFFFFF;
        }

        .stats-section {
          padding: 30px 0 !important;
          background: #FFFFFF;
        }

        .testimonials-section {
          padding: 50px 0 !important;
          background: #FFFFFF;
        }

        .cta-section {
          padding: 30px 0 50px 0 !important;
          background: #FFFFFF;
        }

        /* ===== HEADINGS - BLACK ===== */
        .why-heading-large {
          font-size: 3rem !important;
          line-height: 1.2 !important;
          max-width: 720px;
          margin-left: auto !important;
          margin-right: auto !important;
          color: #000000 !important;
        }

        .pkg-heading-large {
          font-size: 3rem !important;
          line-height: 1.2 !important;
          color: #000000 !important;
        }

        .section-head h2 {
          color: #000000 !important;
        }

        .section-head p {
          color: #000000 !important;
        }

        .eyebrow {
          color: #FFD700 !important;
          font-weight: 700 !important;
        }

        .section-sub {
          max-width: 560px;
          margin: 0 auto;
          color: #000000;
          font-size: 1.05rem;
          line-height: 1.7;
        }

        /* ===== WHY GRID - WHITE CARDS ===== */
        .why-grid-modern {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 40px;
          padding-bottom: 40px;
        }

        .why-card-modern {
          position: relative;
          background: #FFFFFF;
          border-radius: 20px;
          padding: 32px 24px 28px;
          text-align: center;
          border: 1px solid #E0E0E0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: default;
          overflow: hidden;
        }

        .why-card-modern:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 16px 48px rgba(255, 215, 0, 0.15);
          border-color: #FFD700;
        }

        .why-card-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 3px;
          background: #FFD700;
          transition: left 0.6s ease;
        }

        .why-card-modern:hover .why-card-shimmer {
          left: 100%;
        }

        .why-card-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          color: #000000;
          transition: all 0.4s ease;
          border: 2px solid #FFD700;
        }

        .why-card-icon svg {
          width: 26px;
          height: 26px;
          stroke: currentColor;
          transition: transform 0.4s ease;
        }

        .why-card-modern:hover .why-card-icon {
          background: #FFD700;
          color: #000000;
          transform: rotate(5deg) scale(1.05);
          border-color: #FFD700;
        }

        .why-card-modern:hover .why-card-icon svg {
          transform: scale(1.1);
        }

        .why-card-modern h3 {
          font-size: 1rem;
          font-weight: 700;
          color: #000000;
          margin: 0 0 8px;
          letter-spacing: -0.01em;
        }

        .why-card-modern p {
          font-size: 0.875rem;
          color: #000000;
          line-height: 1.6;
          margin: 0;
        }

        /* ===== TESTIMONIALS SLIDER ===== */
        .testimonials-slider {
          position: relative;
          overflow: hidden;
          margin-top: 40px;
          border-radius: 24px;
        }

        .testimonials-track {
          display: flex;
          transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .test-card-slide {
          min-width: 100%;
          padding: 48px 40px;
          background: #FFFFFF;
          border-radius: 24px;
          text-align: center;
          border: 1px solid #E0E0E0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .test-stars {
          font-size: 1.2rem;
          letter-spacing: 4px;
          color: #FFD700;
          margin-bottom: 16px;
        }

        .test-quote {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #000000;
          max-width: 600px;
          margin: 0 auto 24px;
          font-weight: 500;
        }

        .test-person {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }

        .test-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #FFD700;
          color: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1rem;
        }

        .test-person b {
          display: block;
          color: #000000;
          font-size: 0.95rem;
        }

        .test-person span {
          color: #000000;
          font-size: 0.8rem;
        }

        .test-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 28px;
        }

        .test-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid #000000;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .test-dot.active {
          background: #FFD700;
          border-color: #FFD700;
          transform: scale(1.2);
        }

        .test-dot:hover {
          transform: scale(1.1);
          background: #FFD700;
          border-color: #FFD700;
        }

        /* ===== PKG CARDS - WHITE THEME ===== */
        .pkg-band {
          background: #FFFFFF;
        }

        .pkg-card {
          background: #FFFFFF;
          border: 1px solid #E0E0E0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .pkg-card.featured {
          border-color: #FFD700;
          box-shadow: 0 8px 32px rgba(255, 215, 0, 0.12);
        }

        .pkg-tag {
          background: #FFD700;
          color: #000000;
        }

        .pkg-card.featured .pkg-tag {
          background: #FFD700;
          color: #000000;
        }

        .pkg-card h3 {
          color: #000000;
        }

        .pkg-price {
          color: #000000;
        }

        .pkg-price span {
          color: #000000;
        }

        .pkg-card ul li {
          color: #000000;
        }

        /* ===== STATS ===== */
        .stat-num {
          color: #000000;
        }

        .stat-label {
          color: #000000;
        }

        /* ===== CTA ===== */
        .cta-banner h2 {
          color: #000000;
        }

        .cta-banner p {
          color: #000000;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 992px) {
          .why-grid-modern {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .why-heading-large {
            font-size: 2.5rem !important;
          }
          .pkg-heading-large {
            font-size: 2.5rem !important;
          }
          .test-card-slide {
            padding: 32px 24px;
          }
          .test-quote {
            font-size: 1rem;
          }
        }

        @media (max-width: 768px) {
          .section {
            padding: 40px 0 !important;
          }
          .why-section {
            padding: 40px 0 0 0 !important;
          }
          .journey-section {
            padding: 40px 0 !important;
          }
          .testimonials-section {
            padding: 40px 0 !important;
          }
          .cta-section {
            padding: 30px 0 40px 0 !important;
          }
          
          .why-grid-modern {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin-top: 32px;
          }
          .why-card-modern {
            padding: 24px 16px 20px;
            border-radius: 16px;
          }
          .why-card-icon {
            width: 48px;
            height: 48px;
          }
          .why-card-icon svg {
            width: 22px;
            height: 22px;
          }
          .why-card-modern h3 {
            font-size: 0.9rem;
          }
          .why-card-modern p {
            font-size: 0.8rem;
          }
          .why-heading-large {
            font-size: 2rem !important;
          }
          .pkg-heading-large {
            font-size: 2rem !important;
          }
          .marquee span {
            font-size: 0.8rem;
            padding: 0 16px;
          }
          .test-card-slide {
            padding: 28px 20px;
          }
          .test-quote {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 576px) {
          .section {
            padding: 30px 0 !important;
          }
          .why-section {
            padding: 30px 0 0 0 !important;
          }
          .journey-section {
            padding: 30px 0 !important;
          }
          .testimonials-section {
            padding: 30px 0 !important;
          }
          .cta-section {
            padding: 20px 0 30px 0 !important;
          }
          
          .why-grid-modern {
            grid-template-columns: 1fr;
            max-width: 380px;
            margin-left: auto;
            margin-right: auto;
          }
          .why-card-modern {
            padding: 20px 16px 18px;
          }
          .why-heading-large {
            font-size: 1.6rem !important;
          }
          .pkg-heading-large {
            font-size: 1.6rem !important;
          }
          .marquee span {
            font-size: 0.7rem;
            padding: 0 12px;
          }
          .test-card-slide {
            padding: 24px 16px;
          }
          .test-quote {
            font-size: 0.85rem;
          }
          .test-dot {
            width: 10px;
            height: 10px;
          }
        }
      `}</style>
    </>
  );
}