import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';

// ---- Premium Images ----
const IMG = {
  hero: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&q=80',
  hero2: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=80',
  interior: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80',
  food1: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&q=80',
  food2: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80',
  food3: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=900&q=80',
  chai: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=900&q=80',
  team: 'https://images.unsplash.com/photo-1522336572468-97b06e8ef143?w=1200&q=80',
  crowd: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
  kitchen: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=1200&q=80',
  coffee: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=900&q=80',
};

// Menu Categories with SVG Icons
const menuCategories = [
  { 
    name: 'Tea & Coffee', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"/>
      </svg>
    ),
    items: ['Regular Tea', 'Masala Tea', 'Green Tea', 'Black Coffee', 'Hot Chocolate'] 
  },
  { 
    name: 'Shakes', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8M10 12v6M14 12v6M2 8h20M12 2v6M8 2l2 2M16 2l-2 2"/>
      </svg>
    ),
    items: ['Oreo Shake', 'Kitkat Shake', 'Mango Shake', 'Strawberry Shake', 'Cold Coffee'] 
  },
  { 
    name: 'Bubble Tea', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 22v-4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        <circle cx="12" cy="12" r="4"/>
      </svg>
    ),
    items: ['Strawberry Bubble', 'Vanilla Bubble', 'Chocolate Bubble', 'Coconut Bubble'] 
  },
  { 
    name: 'Pizza', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 12l2 2M12 16l-2-2M16 12l-2-2M12 8l2 2"/>
      </svg>
    ),
    items: ['Cheese Burst', 'Garden Fresh', 'Mushroom Veg', 'Spicy Loaded'] 
  },
  { 
    name: 'Burgers', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2H4v2zM2 10h20M4 8v2M20 8v2M6 5h12M8 5V3M16 5V3"/>
      </svg>
    ),
    items: ['Classic Burger', 'Cheese Burst', 'Paneer Makhani', 'Mexican Burger'] 
  },
  { 
    name: 'Sandwich', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h16M4 8h16M4 16h16M2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
        <path d="M8 10l2 2-2 2M16 10l-2 2 2 2"/>
      </svg>
    ),
    items: ['Makhani Sandwich', 'Bombay Grill', 'Malaysian Sandwich', 'Paneer Tikki'] 
  },
  { 
    name: 'Chaat', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 12l2 2 4-4M10 12h4"/>
      </svg>
    ),
    items: ['Delhi Papdi Chaat', 'Aloo Tikki', 'Dahi Bhalla', 'Samosa Chaat'] 
  },
  { 
    name: 'Mojitos', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2v4M16 2v4M4 8h16M6 8v10a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V8M12 14v4M9 11l3 3 3-3"/>
      </svg>
    ),
    items: ['Mint Mojito', 'Watermelon Mojito', 'Rose Mojito'] 
  },
];

// Features with SVG Icons
const features = [
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Environment Friendly', 
    desc: 'We are responsible for what we do, our operational activities keep the nature clean.' 
  },
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h16M4 18h16M4 6h16M8 6v12M16 6v12"/>
      </svg>
    ),
    title: 'Diversified Menu', 
    desc: 'Be it chaat, pizza, burgers, and more, we have 150+ menu variety for everyone.' 
  },
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: 'Best Quality & Taste', 
    desc: 'We offer healthy and hygienic food made of natural ingredients.' 
  },
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: 'Proven & Tested Concept', 
    desc: 'We have excellent & affordable models that can be replicated easily.' 
  },
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'World-Class Support', 
    desc: 'Our Staff is well-skilled to assist franchise partners efficiently.' 
  },
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
        <path d="M16 8v8M8 12h8"/>
      </svg>
    ),
    title: 'Hassle-Free Operations', 
    desc: 'We maintain Excellence in day-to-day operations.' 
  },
];

const testimonials = [
  { name: 'Rahil Jain', text: 'Their organization is very good and is spread over many places and the service is also very good along with the taste.', city: 'Indore' },
  { name: 'Vinit Tiwari', text: 'Chaat Puchka itself provides training of its products to its franchise owner along with the service of the staff.', city: 'Bhopal' },
  { name: 'Priya Sharma', text: 'Best franchise opportunity in India. Great support and amazing food quality.', city: 'Mumbai' },
];

export default function Home() {
  const [activeMenu, setActiveMenu] = useState('Tea & Coffee');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="jk-hero" ref={heroRef}>
        <motion.div className="jk-hero-bg" style={{ y: heroImgY }}>
          <img src={IMG.hero} alt="Welcome to JK Chaat Cafe" />
          <div className="jk-hero-gradient" />
        </motion.div>

        <div className="container jk-hero-content">
          <motion.div
            className="jk-hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="jk-badge-dot" /> Welcome to JK Chaat Cafe
          </motion.div>

          <motion.h1
            className="jk-hero-headline"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Delivering great food for <br />
            <span className="grad-text">120+ Varieties!</span>
          </motion.h1>

          <motion.p
            className="jk-hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            India's Fastest Growing Food Franchise Brand — Join us for unbeatable success with our unique formula to outperform well-established players.
          </motion.p>

          <motion.div
            className="jk-hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link to="/franchise" className="btn btn-primary btn-hero">
              Book a Franchise
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </Link>
            <Link to="/menu" className="btn btn-ghost jk-hero-ghost">
              Our Menu
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M4 4v16h16M8 8l8 8M16 8l-8 8" /></svg>
            </Link>
          </motion.div>

          <motion.div
            className="jk-hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="jk-stat-item">
              <span className="jk-stat-number">120+</span>
              <span className="jk-stat-label">Menu Varieties</span>
            </div>
            <div className="jk-stat-item">
              <span className="jk-stat-number">50+</span>
              <span className="jk-stat-label">Franchise Outlets</span>
            </div>
            <div className="jk-stat-item">
              <span className="jk-stat-number">98%</span>
              <span className="jk-stat-label">Satisfaction Rate</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div className="jk-marquee">
        <div className="jk-marquee-track">
          {[...Array(2)].map((_, i) => (
            <span key={i}>
              Complete Franchise Setup • Kitchen Equipment • Premium Masala • Interior Design • Staff Training • Marketing Support • Menu Planning • Launch Support •
            </span>
          ))}
        </div>
      </div>

      {/* ============ ABOUT / WHY US ============ */}
      <section className="section jk-about">
        <div className="container">
          <div className="jk-about-grid">
            <motion.div
              className="jk-about-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="eyebrow">Top Franchise Business</div>
              <h2 className="section-title">Profitable and consistent growth as the ingredient to achieve our goal.</h2>
              <p className="section-desc">
                We've grown into a top-notch food franchise brand by continuously offering quality services to our clients. Being one of the most-trusted food brands, our focus is to deliver rich quality food, hygiene, awesome taste, and unmatched services to our partners.
              </p>
              <div className="jk-about-features">
                <div className="jk-about-feature">
                  <span className="jk-feature-icon">✓</span>
                  <div>
                    <h4>360° Brand Support</h4>
                    <p>Location guidance, site development, and opening event planning.</p>
                  </div>
                </div>
                <div className="jk-about-feature">
                  <span className="jk-feature-icon">✓</span>
                  <div>
                    <h4>ROI in 12-15 Months</h4>
                    <p>High profit margin with low investment and fast returns.</p>
                  </div>
                </div>
                <div className="jk-about-feature">
                  <span className="jk-feature-icon">✓</span>
                  <div>
                    <h4>Complete Training Support</h4>
                    <p>Owner training, staff hiring, and operation audit support.</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary jk-about-btn">
                More About Us
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </Link>
            </motion.div>

            <motion.div
              className="jk-about-image"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img src={IMG.interior} alt="Cafe interior" />
              <div className="jk-about-badge">
                <span className="jk-badge-number">6+</span>
                <span className="jk-badge-text">Years of Excellence</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ WHY US ============ */}
      <section className="section jk-why-us">
        <div className="container">
          <Reveal className="section-head center">
            <div className="eyebrow">Why Choose Our Franchise Model</div>
            <h2 className="section-title">Your Success, Our Priority</h2>
          </Reveal>

          <div className="jk-why-grid">
            {[
              {
                number: '01',
                title: 'Our Purpose',
                items: ['360° Brand Support', 'Location Guidance', 'Site Development', 'Opening Event Planning', 'ROI in 12-15 Months', 'Owner Training']
              },
              {
                number: '02',
                title: 'Dedicated Service',
                items: ['Raw Material Support', 'Design & Construction', 'Marketing & Promotion', 'Standard Recipes', 'Budget Friendly Menu', 'High Profit Margin']
              },
              {
                number: '03',
                title: 'Sustainable Business Models',
                items: ['Extensive R&D', 'Low Cost Model', 'Modern-Day Trends', 'Long-Term Success', 'Scalable Operations']
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="jk-why-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="jk-why-number">{item.number}</div>
                <h3>{item.title}</h3>
                <ul>
                  {item.items.map((li, idx) => (
                    <li key={idx}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6 9 17l-5-5" /></svg>
                      {li}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MENU - With SVG Icons ============ */}
      <section className="section jk-menu">
        <div className="container">
          <Reveal className="section-head center">
            <div className="eyebrow">Our Tasty Menu</div>
            <h2 className="section-title">Check Our Delicious Menu</h2>
          </Reveal>

          <div className="jk-menu-tabs">
            {menuCategories.map((cat) => (
              <button
                key={cat.name}
                className={`jk-menu-tab ${activeMenu === cat.name ? 'active' : ''}`}
                onClick={() => setActiveMenu(cat.name)}
              >
                <span className="jk-menu-icon">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeMenu}
              className="jk-menu-items"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {menuCategories.find(c => c.name === activeMenu)?.items.map((item, i) => (
                <motion.div
                  key={i}
                  className="jk-menu-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <span className="jk-menu-dot" />
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <Reveal className="jk-menu-cta">
            <Link to="/products" className="btn btn-primary">
              Discover More Menu
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ FEATURES - With SVG Icons & Center Layout ============ */}
      <section className="section jk-features">
        <div className="container">
          <Reveal className="section-head center">
            <div className="eyebrow">Our Best Features</div>
            <h2 className="section-title">What Makes Us Different</h2>
          </Reveal>

          <div className="jk-features-grid">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="jk-feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
              >
                <div className="jk-feature-icon-wrapper">
                  <div className="jk-feature-icon">{f.icon}</div>
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="section jk-testimonials">
        <div className="container">
          <Reveal className="section-head center">
            <div className="eyebrow">Happy Clients</div>
            <h2 className="section-title">What Our Partners Say</h2>
          </Reveal>

          <div className="jk-testimonial-slider">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="jk-testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <div className="jk-testimonial-stars">★★★★★</div>
                <p className="jk-testimonial-text">"{testimonials[currentTestimonial].text}"</p>
                <div className="jk-testimonial-author">
                  <div className="jk-testimonial-avatar">
                    {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4>{testimonials[currentTestimonial].name}</h4>
                    <span>{testimonials[currentTestimonial].city}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="jk-testimonial-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`jk-testimonial-dot ${currentTestimonial === i ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section jk-cta">
        <div className="container">
          <motion.div
            className="jk-cta-banner"
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
              <h2>Start Your Entrepreneurship Journey Today</h2>
              <p>Join us for unbeatable success with our unique formula to outperform well-established players.</p>
              <div className="jk-cta-buttons">
                <Link to="/franchise-application" className="btn btn-primary btn-cta">
                  Become a Franchise Partner
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </Link>
                <Link to="/contact" className="btn btn-ghost btn-cta-ghost">
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        /* ===== BASE DARK THEME ===== */
        body { background: #0a0a0a; }
        .section { padding: 70px 0; }
        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.2;
          color: #fff;
          max-width: 700px;
        }
        .section-head.center .section-title { margin: 0 auto; }
        .section-head.center p { color: #aaa; max-width: 600px; margin: 10px auto 0; }
        .eyebrow {
          color: #FFD700;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: 0.85rem;
          display: inline-block;
          margin-bottom: 10px;
        }
        .section-desc { color: #aaa; font-size: 1.05rem; line-height: 1.7; max-width: 560px; }

        /* ===== HERO ===== */
        .jk-hero {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          padding-bottom: 60px;
        }
        .jk-hero-bg {
          position: absolute;
          inset: -10% 0 0 0;
          height: 120%;
          z-index: 0;
        }
        .jk-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .jk-hero-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.95) 100%);
        }
        .jk-hero-content {
          position: relative;
          z-index: 2;
          max-width: 820px;
        }
        .jk-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,215,0,0.1);
          border: 1px solid rgba(255,215,0,0.2);
          padding: 8px 20px;
          border-radius: 100px;
          color: #FFD700;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .jk-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #FFD700;
          animation: pulse-dot 2s infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        .jk-hero-headline {
          font-size: clamp(2.8rem, 6vw, 4.8rem);
          line-height: 1.1;
          color: #fff;
          margin: 0 0 20px;
        }
        .jk-hero-headline .grad-text {
          background: linear-gradient(135deg, #FFD700, #F4A900);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .jk-hero-sub {
          color: rgba(255,255,255,0.8);
          font-size: 1.1rem;
          line-height: 1.8;
          max-width: 580px;
          margin-bottom: 30px;
        }
        .jk-hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .btn-hero { padding: 14px 32px; font-size: 1rem; }
        .jk-hero-ghost {
          background: rgba(255,255,255,0.06);
          color: #fff;
          border-color: rgba(255,255,255,0.15);
        }
        .jk-hero-ghost:hover { background: rgba(255,255,255,0.12); }
        .jk-hero-stats {
          display: flex;
          gap: 48px;
          margin-top: 40px;
        }
        .jk-stat-item {
          display: flex;
          flex-direction: column;
        }
        .jk-stat-number {
          font-family: 'Baloo 2', sans-serif;
          font-size: 2.2rem;
          font-weight: 800;
          color: #FFD700;
        }
        .jk-stat-label {
          color: rgba(255,255,255,0.6);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* ===== MARQUEE ===== */
        .jk-marquee {
          background: #FFD700;
          padding: 12px 0;
          overflow: hidden;
        }
        .jk-marquee-track {
          display: flex;
          animation: marqueeScroll 25s linear infinite;
          white-space: nowrap;
        }
        .jk-marquee-track span {
          display: inline-block;
          padding: 0 20px;
          color: #000;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.3px;
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* ===== ABOUT ===== */
        .jk-about { background: #0d0d0d; }
        .jk-about-grid {
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }
        .jk-about-text .section-title { margin: 10px 0 16px; }
        .jk-about-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin: 24px 0 30px;
        }
        .jk-about-feature {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }
        .jk-feature-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #FFD700;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 14px;
          flex-shrink: 0;
        }
        .jk-about-feature h4 {
          color: #fff;
          font-size: 1rem;
          margin: 0 0 2px;
        }
        .jk-about-feature p {
          color: #aaa;
          font-size: 0.9rem;
          margin: 0;
        }
        .jk-about-image {
          position: relative;
        }
        .jk-about-image img {
          width: 100%;
          aspect-ratio: 4/5;
          object-fit: cover;
          border-radius: 24px;
        }
        .jk-about-badge {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: #1a1a1a;
          border: 2px solid #FFD700;
          padding: 16px 24px;
          border-radius: 16px;
          text-align: center;
        }
        .jk-badge-number {
          font-family: 'Baloo 2', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: #FFD700;
          display: block;
        }
        .jk-badge-text {
          color: #fff;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .jk-about-btn { margin-top: 10px; }

        /* ===== WHY US ===== */
        .jk-why-us { background: #0a0a0a; }
        .jk-why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 40px;
        }
        .jk-why-card {
          background: #1a1a1a;
          border: 1px solid rgba(255,255,255,0.04);
          border-radius: 20px;
          padding: 32px 24px;
          transition: all 0.3s ease;
        }
        .jk-why-card:hover {
          border-color: rgba(255,215,0,0.15);
          box-shadow: 0 20px 40px -16px rgba(0,0,0,0.5);
        }
        .jk-why-number {
          font-family: 'Baloo 2', sans-serif;
          font-size: 2.8rem;
          font-weight: 800;
          color: rgba(255,215,0,0.15);
          line-height: 1;
          margin-bottom: 8px;
        }
        .jk-why-card h3 {
          color: #fff;
          font-size: 1.2rem;
          margin: 0 0 16px;
        }
        .jk-why-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .jk-why-card ul li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #bbb;
          font-size: 0.9rem;
          padding: 6px 0;
          border-bottom: 1px solid rgba(255,255,255,0.03);
        }
        .jk-why-card ul li:last-child { border-bottom: none; }
        .jk-why-card ul li svg {
          width: 16px;
          height: 16px;
          color: #FFD700;
          flex-shrink: 0;
        }

        /* ===== MENU - SVG Icons ===== */
        .jk-menu { background: #0d0d0d; }
        .jk-menu-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin: 30px 0 24px;
        }
        .jk-menu-tab {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 22px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.06);
          background: transparent;
          color: #aaa;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          font-weight: 600;
        }
        .jk-menu-tab:hover {
          border-color: rgba(255,215,0,0.2);
          color: #fff;
        }
        .jk-menu-tab.active {
          background: #FFD700;
          color: #000;
          border-color: #FFD700;
        }
        .jk-menu-tab.active .jk-menu-icon svg {
          stroke: #000;
        }
        .jk-menu-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
        }
        .jk-menu-icon svg {
          width: 18px;
          height: 18px;
          stroke: currentColor;
          transition: stroke 0.3s ease;
        }
        .jk-menu-tab:hover .jk-menu-icon svg {
          stroke: #fff;
        }
        .jk-menu-tab.active .jk-menu-icon svg {
          stroke: #000;
        }
        .jk-menu-items {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          max-width: 600px;
          margin: 0 auto;
        }
        .jk-menu-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          background: rgba(255,255,255,0.02);
          border-radius: 10px;
          color: #ddd;
          font-size: 0.9rem;
          border: 1px solid rgba(255,255,255,0.03);
        }
        .jk-menu-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #FFD700;
          flex-shrink: 0;
        }
        .jk-menu-cta { text-align: center; margin-top: 30px; }

        /* ===== FEATURES - SVG Icons Center ===== */
        .jk-features { background: #0a0a0a; }
        .jk-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 40px;
        }
        .jk-feature-card {
          background: #1a1a1a;
          border: 1px solid rgba(255,255,255,0.04);
          border-radius: 20px;
          padding: 32px 24px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .jk-feature-card:hover {
          border-color: rgba(255,215,0,0.1);
          box-shadow: 0 20px 40px -16px rgba(0,0,0,0.4);
          transform: translateY(-8px);
        }
        .jk-feature-icon-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 16px;
        }
        .jk-feature-icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: rgba(255,215,0,0.08);
          border: 1px solid rgba(255,215,0,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .jk-feature-card:hover .jk-feature-icon {
          background: #FFD700;
          border-color: #FFD700;
        }
        .jk-feature-icon svg {
          width: 26px;
          height: 26px;
          stroke: #FFD700;
          transition: stroke 0.3s ease;
        }
        .jk-feature-card:hover .jk-feature-icon svg {
          stroke: #000;
        }
        .jk-feature-card h3 {
          color: #fff;
          font-size: 1.1rem;
          margin: 0 0 8px;
        }
        .jk-feature-card p {
          color: #aaa;
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0;
        }

        /* ===== TESTIMONIALS ===== */
        .jk-testimonials { background: #0d0d0d; }
        .jk-testimonial-slider {
          max-width: 720px;
          margin: 40px auto 0;
        }
        .jk-testimonial-card {
          background: #1a1a1a;
          border: 1px solid rgba(255,255,255,0.04);
          border-radius: 24px;
          padding: 40px;
          text-align: center;
        }
        .jk-testimonial-stars {
          color: #FFD700;
          font-size: 1.2rem;
          letter-spacing: 4px;
          margin-bottom: 16px;
        }
        .jk-testimonial-text {
          color: #fff;
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 24px;
        }
        .jk-testimonial-author {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }
        .jk-testimonial-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #FFD700;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1rem;
        }
        .jk-testimonial-author h4 {
          color: #fff;
          margin: 0;
          font-size: 1rem;
        }
        .jk-testimonial-author span {
          color: #aaa;
          font-size: 0.8rem;
        }
        .jk-testimonial-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 24px;
        }
        .jk-testimonial-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid #666;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .jk-testimonial-dot.active {
          background: #FFD700;
          border-color: #FFD700;
          transform: scale(1.2);
        }

        /* ===== CTA ===== */
        .jk-cta { background: #0a0a0a; padding-top: 20px; }
        .jk-cta-banner {
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          min-height: 320px;
          display: flex;
          align-items: center;
        }
        .jk-cta-bg {
          position: absolute;
          inset: 0;
        }
        .jk-cta-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .jk-cta-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.85), rgba(0,0,0,0.4));
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
        .jk-cta-buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .btn-cta { padding: 14px 30px; font-size: 1rem; }
        .btn-cta-ghost {
          background: rgba(255,255,255,0.06);
          color: #fff;
          border-color: rgba(255,255,255,0.1);
        }
        .btn-cta-ghost:hover {
          background: rgba(255,255,255,0.12);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 992px) {
          .jk-about-grid { grid-template-columns: 1fr; gap: 40px; }
          .jk-why-grid { grid-template-columns: repeat(2, 1fr); }
          .jk-features-grid { grid-template-columns: repeat(2, 1fr); }
          .jk-menu-items { grid-template-columns: repeat(2, 1fr); }
          .jk-hero-stats { gap: 30px; }
        }

        @media (max-width: 768px) {
          .jk-why-grid { grid-template-columns: 1fr; }
          .jk-features-grid { grid-template-columns: 1fr; }
          .jk-menu-items { grid-template-columns: 1fr; }
          .jk-about-badge { right: 0; }
          .jk-hero-stats { flex-wrap: wrap; gap: 20px; }
          .jk-hero-content { padding-bottom: 20px; }
          .jk-cta-content { padding: 30px 24px; }
          .jk-cta-content h2 { font-size: 1.6rem; }
          .jk-testimonial-card { padding: 28px 20px; }
        }

        @media (max-width: 576px) {
          .jk-hero { min-height: 80vh; }
          .jk-hero-headline { font-size: 2.2rem; }
          .jk-about-features { gap: 12px; }
          .jk-why-card { padding: 24px 18px; }
          .jk-hero-buttons { flex-direction: column; }
          .jk-cta-buttons { flex-direction: column; }
          .btn-hero, .btn-cta, .btn-cta-ghost { width: 100%; justify-content: center; }
          .jk-menu-tabs { gap: 6px; }
          .jk-menu-tab { padding: 6px 12px; font-size: 0.75rem; gap: 6px; }
          .jk-menu-icon { width: 16px; height: 16px; }
          .jk-menu-icon svg { width: 14px; height: 14px; }
          .jk-feature-icon { width: 44px; height: 44px; }
          .jk-feature-icon svg { width: 20px; height: 20px; }
        }
      `}</style>
    </>
  );
}
