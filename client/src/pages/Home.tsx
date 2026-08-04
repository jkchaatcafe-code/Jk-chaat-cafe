// import { Link } from 'react-router-dom';
// import Reveal from '../components/Reveal';
// import CountUp from '../components/CountUp';
// import HeroVisual from '../components/HeroVisual';
// import Journey from '../components/Journey';
// import { testimonials } from '../data/content';
// import { useState, useEffect } from 'react';

// const whyItems = [
//   { 
//     title: 'Turnkey Setup', 
//     text: 'Interior, kitchen & equipment sourcing handled by our team.',
//     icon: 'M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6',
//   },
//   { 
//     title: 'Proven Menu & Margins', 
//     text: 'Tested chaat, tea & fast-food menu with signature masala blends.',
//     icon: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
//   },
//   { 
//     title: 'Trained Staff', 
//     text: 'We train your team on recipes, service & hygiene before launch.',
//     icon: 'M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
//   },
//   { 
//     title: 'Marketing That Works', 
//     text: 'Launch campaigns & local marketing to bring footfall from day one.',
//     icon: 'M3 3v18h18M7 15l4-4 3 3 5-6',
//   },
//   { 
//     title: 'Raw Materials Supply', 
//     text: 'Consistent supply of masala, tea, coffee & packaging to every outlet.',
//     icon: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z',
//   },
//   { 
//     title: 'Continuous Guidance', 
//     text: 'Ongoing consultation on operations, costs & growth after launch.',
//     icon: 'M22 12h-4l-3 9L9 3l-3 9H2',
//   },
// ];

// const check = <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>;

// const journeySteps = [
//   { num: '1', title: 'Enquiry', text: 'Share your city and budget.' },
//   { num: '2', title: 'Site Visit', text: 'We evaluate location and layout.' },
//   { num: '3', title: 'Agreement', text: 'Franchise terms signed.' },
//   { num: '4', title: 'Setup', text: 'Interior & equipment installed.' },
//   { num: '5', title: 'Training', text: 'Staff trained on-site.' },
//   { num: '6', title: 'Launch', text: 'Grand opening with marketing.' },
// ];

// // Marquee items - no emojis
// const marqueeItems = [
//   'Complete Franchise Setup',
//   'Kitchen Equipment',
//   'Premium Masala & Spices',
//   'Interior Design',
//   'Staff Training',
//   'Marketing Support',
//   'Menu Planning',
//   'Launch Support',
// ];

// export default function Home() {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <section className="hero">
//         <div className="container hero-grid">
//           <div>
//             <div className="eyebrow">Cafe Franchise & Business Setup</div>
//             <h1>Start your own <span className="grad-text">profitable cafe</span>, we build it with you.</h1>
//             <p className="sub">JK Chaat Cafe helps first-time entrepreneurs launch a fully branded cafe business — interiors, kitchen equipment, signature masala, menu, staff training and marketing, handled end to end.</p>
//             <div className="hero-ctas">
//               <Link to="/franchise" className="btn btn-primary">
//                 Become a Franchise Partner
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
//               </Link>
//               <a href="#brochure" className="btn btn-ghost">Download Brochure</a>
//             </div>
//           </div>
//           <HeroVisual />
//         </div>
//       </section>

//       {/* Marquee - Clean no emojis */}
//       <div className="marquee-wrap">
//         <div className="marquee">
//           {[...marqueeItems, ...marqueeItems].map((item, index) => (
//             <span key={index}>{item}</span>
//           ))}
//         </div>
//       </div>

//       {/* Why Section */}
//       <section className="section why-section">
//         <div className="container">
//           <Reveal className="section-head center">
//             <div className="eyebrow">Why Partner With Us</div>
//             <h2 className="why-heading-large">Everything you need, nothing you have to figure out.</h2>
//             <p className="section-sub">We solve the three biggest challenges: what to sell, how to set up, and how to keep it full.</p>
//           </Reveal>
          
//           <div className="why-grid-modern">
//             {whyItems.map((item, index) => (
//               <Reveal key={item.title} delay={index * 0.06} className="why-card-modern">
//                 <div className="why-card-icon">
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d={item.icon} />
//                   </svg>
//                 </div>
//                 <h3>{item.title}</h3>
//                 <p>{item.text}</p>
//                 <div className="why-card-shimmer"></div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Investment Plans */}
//       <section className="section pkg-section no-gap-top">
//         <div className="pkg-band">
//           <div className="container">
//             <Reveal className="section-head center">
//               <div className="eyebrow">Investment Plans</div>
//               <h2 className="pkg-heading-large">A franchise package for every budget.</h2>
//               <p>Every plan includes setup, training and launch support.</p>
//             </Reveal>
//             <div className="pkg-grid">
//               <Reveal className="pkg-card">
//                 <span className="pkg-tag">Starter</span>
//                 <h3>Kiosk Cafe</h3>
//                 <div className="pkg-price">₹9.9L <span>/ one-time</span></div>
//                 <ul>
//                   <li>{check}Compact kiosk interior design</li>
//                   <li>{check}Core equipment package</li>
//                   <li>{check}Starter menu & masala kit</li>
//                   <li>{check}7-day staff training</li>
//                 </ul>
//                 <Link to="/franchise-application" className="btn btn-ghost">Enquire Now</Link>
//               </Reveal>
//               <Reveal delay={0.08} className="pkg-card featured">
//                 <span className="pkg-tag">Most Chosen</span>
//                 <h3>Complete Cafe</h3>
//                 <div className="pkg-price">₹19.5L <span>/ one-time</span></div>
//                 <ul>
//                   <li>{check}Full interior & branding</li>
//                   <li>{check}Complete kitchen & seating</li>
//                   <li>{check}Full menu & raw material supply</li>
//                   <li>{check}Launch marketing campaign</li>
//                   <li>{check}12 months business guidance</li>
//                 </ul>
//                 <Link to="/franchise-application" className="btn btn-ghost">Enquire Now</Link>
//               </Reveal>
//               <Reveal delay={0.16} className="pkg-card">
//                 <span className="pkg-tag">Master</span>
//                 <h3>Master Franchise</h3>
//                 <div className="pkg-price">Custom <span>/ region-based</span></div>
//                 <ul>
//                   <li>{check}Exclusive regional rights</li>
//                   <li>{check}Multi-outlet rollout support</li>
//                   <li>{check}Dedicated supply chain</li>
//                   <li>{check}Priority business consultation</li>
//                 </ul>
//                 <Link to="/franchise-application" className="btn btn-ghost">Enquire Now</Link>
//               </Reveal>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="section journey-section">
//         <div className="container">
//           <Reveal className="section-head center">
//             <div className="eyebrow">Your Cafe Setup Journey</div>
//             <h2>From enquiry to opening day, in six steps.</h2>
//           </Reveal>
//           <Journey steps={journeySteps} />
//         </div>
//       </section>

//       <section className="section stats-section">
//         <div className="container">
//           <Reveal className="stats-band">
//             <div className="stats-grid">
//               <div><div className="stat-num"><CountUp target={120} suffix="+" /></div><div className="stat-label">Franchise Partners</div></div>
//               <div><div className="stat-num"><CountUp target={45} /></div><div className="stat-label">Cities Covered</div></div>
//               <div><div className="stat-num"><CountUp target={98} suffix="%" /></div><div className="stat-label">Partner Satisfaction</div></div>
//               <div><div className="stat-num"><CountUp target={6} /></div><div className="stat-label">Years of Experience</div></div>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* Testimonials - Auto Slide */}
//       <section className="section testimonials-section">
//         <div className="container">
//           <Reveal className="section-head center">
//             <div className="eyebrow">Partner Success Stories</div>
//             <h2>Real owners, real cafes, real returns.</h2>
//           </Reveal>
          
//           <div className="testimonials-slider">
//             <div 
//               className="testimonials-track"
//               style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
//             >
//               {testimonials.map((t, index) => (
//                 <div className="test-card-slide" key={index}>
//                   <div className="test-stars">★★★★★</div>
//                   <p className="test-quote">"{t.quote}"</p>
//                   <div className="test-person">
//                     <div className="test-avatar">{t.name.split(' ').map((n) => n[0]).join('')}</div>
//                     <div>
//                       <b>{t.name}</b>
//                       <span>Franchise Partner, {t.city}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             <div className="test-dots">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   className={`test-dot ${currentTestimonial === index ? 'active' : ''}`}
//                   onClick={() => setCurrentTestimonial(index)}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="section cta-section">
//         <div className="container">
//           <Reveal className="cta-banner" id="brochure">
//             <div className="cta-blob" style={{ width: 220, height: 220, top: -60, left: -60 }}></div>
//             <div className="cta-blob" style={{ width: 160, height: 160, bottom: -50, right: -30 }}></div>
//             <h2>Your cafe business starts with one conversation.</h2>
//             <p>Tell us your city and budget — we'll show you exactly what it takes.</p>
//             <Link to="/franchise-application" className="btn btn-ghost" style={{ color: '#000000' }}>
//               Apply for Franchise
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
//             </Link>
//           </Reveal>
//         </div>
//       </section>

//       <style>{`
//         /* ===== MARQUEE - YELLOW ===== */
//         .marquee-wrap {
//           background: #FFD700;
//           padding: 14px 0;
//           overflow: hidden;
//         }

//         .marquee {
//           display: flex;
//           animation: marqueeScroll 30s linear infinite;
//           white-space: nowrap;
//         }

//         .marquee span {
//           display: inline-block;
//           padding: 0 30px;
//           color: #000000;
//           font-weight: 700;
//           font-size: 0.95rem;
//           letter-spacing: 0.5px;
//         }

//         @keyframes marqueeScroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }

//         /* ===== NO GAP BETWEEN SECTIONS ===== */
//         .no-gap-top {
//           padding-top: 0 !important;
//           margin-top: 0 !important;
//         }

//         .why-section {
//           padding-bottom: 0 !important;
//           margin-bottom: 0 !important;
//         }

//         .pkg-section {
//           padding-top: 0 !important;
//           margin-top: 0 !important;
//         }

//         .pkg-band {
//           padding-top: 20px !important;
//         }

//         /* ===== SECTION GAPS ===== */
//         .section {
//           padding: 50px 0 !important;
//         }

//         .why-section {
//           background: #FFFFFF;
//           padding: 50px 0 0 0 !important;
//         }

//         .journey-section {
//           padding: 50px 0 !important;
//           background: #FFFFFF;
//         }

//         .stats-section {
//           padding: 30px 0 !important;
//           background: #FFFFFF;
//         }

//         .testimonials-section {
//           padding: 50px 0 !important;
//           background: #FFFFFF;
//         }

//         .cta-section {
//           padding: 30px 0 50px 0 !important;
//           background: #FFFFFF;
//         }

//         /* ===== HEADINGS - BLACK ===== */
//         .why-heading-large {
//           font-size: 3rem !important;
//           line-height: 1.2 !important;
//           max-width: 720px;
//           margin-left: auto !important;
//           margin-right: auto !important;
//           color: #000000 !important;
//         }

//         .pkg-heading-large {
//           font-size: 3rem !important;
//           line-height: 1.2 !important;
//           color: #000000 !important;
//         }

//         .section-head h2 {
//           color: #000000 !important;
//         }

//         .section-head p {
//           color: #000000 !important;
//         }

//         .eyebrow {
//           color: #FFD700 !important;
//           font-weight: 700 !important;
//         }

//         .section-sub {
//           max-width: 560px;
//           margin: 0 auto;
//           color: #000000;
//           font-size: 1.05rem;
//           line-height: 1.7;
//         }

//         /* ===== WHY GRID - WHITE CARDS ===== */
//         .why-grid-modern {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 24px;
//           margin-top: 40px;
//           padding-bottom: 40px;
//         }

//         .why-card-modern {
//           position: relative;
//           background: #FFFFFF;
//           border-radius: 20px;
//           padding: 32px 24px 28px;
//           text-align: center;
//           border: 1px solid #E0E0E0;
//           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
//           transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
//           cursor: default;
//           overflow: hidden;
//         }

//         .why-card-modern:hover {
//           transform: translateY(-8px) scale(1.02);
//           box-shadow: 0 16px 48px rgba(255, 215, 0, 0.15);
//           border-color: #FFD700;
//         }

//         .why-card-shimmer {
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 3px;
//           background: #FFD700;
//           transition: left 0.6s ease;
//         }

//         .why-card-modern:hover .why-card-shimmer {
//           left: 100%;
//         }

//         .why-card-icon {
//           width: 56px;
//           height: 56px;
//           border-radius: 50%;
//           background: #FFFFFF;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin: 0 auto 16px;
//           color: #000000;
//           transition: all 0.4s ease;
//           border: 2px solid #FFD700;
//         }

//         .why-card-icon svg {
//           width: 26px;
//           height: 26px;
//           stroke: currentColor;
//           transition: transform 0.4s ease;
//         }

//         .why-card-modern:hover .why-card-icon {
//           background: #FFD700;
//           color: #000000;
//           transform: rotate(5deg) scale(1.05);
//           border-color: #FFD700;
//         }

//         .why-card-modern:hover .why-card-icon svg {
//           transform: scale(1.1);
//         }

//         .why-card-modern h3 {
//           font-size: 1rem;
//           font-weight: 700;
//           color: #000000;
//           margin: 0 0 8px;
//           letter-spacing: -0.01em;
//         }

//         .why-card-modern p {
//           font-size: 0.875rem;
//           color: #000000;
//           line-height: 1.6;
//           margin: 0;
//         }

//         /* ===== TESTIMONIALS SLIDER ===== */
//         .testimonials-slider {
//           position: relative;
//           overflow: hidden;
//           margin-top: 40px;
//           border-radius: 24px;
//         }

//         .testimonials-track {
//           display: flex;
//           transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
//         }

//         .test-card-slide {
//           min-width: 100%;
//           padding: 48px 40px;
//           background: #FFFFFF;
//           border-radius: 24px;
//           text-align: center;
//           border: 1px solid #E0E0E0;
//           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
//         }

//         .test-stars {
//           font-size: 1.2rem;
//           letter-spacing: 4px;
//           color: #FFD700;
//           margin-bottom: 16px;
//         }

//         .test-quote {
//           font-size: 1.2rem;
//           line-height: 1.8;
//           color: #000000;
//           max-width: 600px;
//           margin: 0 auto 24px;
//           font-weight: 500;
//         }

//         .test-person {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 14px;
//         }

//         .test-avatar {
//           width: 48px;
//           height: 48px;
//           border-radius: 50%;
//           background: #FFD700;
//           color: #000000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-weight: 700;
//           font-size: 1rem;
//         }

//         .test-person b {
//           display: block;
//           color: #000000;
//           font-size: 0.95rem;
//         }

//         .test-person span {
//           color: #000000;
//           font-size: 0.8rem;
//         }

//         .test-dots {
//           display: flex;
//           justify-content: center;
//           gap: 10px;
//           margin-top: 28px;
//         }

//         .test-dot {
//           width: 12px;
//           height: 12px;
//           border-radius: 50%;
//           border: 2px solid #000000;
//           background: transparent;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           padding: 0;
//         }

//         .test-dot.active {
//           background: #FFD700;
//           border-color: #FFD700;
//           transform: scale(1.2);
//         }

//         .test-dot:hover {
//           transform: scale(1.1);
//           background: #FFD700;
//           border-color: #FFD700;
//         }

//         /* ===== PKG CARDS - WHITE THEME ===== */
//         .pkg-band {
//           background: #FFFFFF;
//         }

//         .pkg-card {
//           background: #FFFFFF;
//           border: 1px solid #E0E0E0;
//           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
//         }

//         .pkg-card.featured {
//           border-color: #FFD700;
//           box-shadow: 0 8px 32px rgba(255, 215, 0, 0.12);
//         }

//         .pkg-tag {
//           background: #FFD700;
//           color: #000000;
//         }

//         .pkg-card.featured .pkg-tag {
//           background: #FFD700;
//           color: #000000;
//         }

//         .pkg-card h3 {
//           color: #000000;
//         }

//         .pkg-price {
//           color: #000000;
//         }

//         .pkg-price span {
//           color: #000000;
//         }

//         .pkg-card ul li {
//           color: #000000;
//         }

//         /* ===== STATS ===== */
//         .stat-num {
//           color: #000000;
//         }

//         .stat-label {
//           color: #000000;
//         }

//         /* ===== CTA ===== */
//         .cta-banner h2 {
//           color: #000000;
//         }

//         .cta-banner p {
//           color: #000000;
//         }

//         /* ===== RESPONSIVE ===== */
//         @media (max-width: 992px) {
//           .why-grid-modern {
//             grid-template-columns: repeat(2, 1fr);
//             gap: 20px;
//           }
//           .why-heading-large {
//             font-size: 2.5rem !important;
//           }
//           .pkg-heading-large {
//             font-size: 2.5rem !important;
//           }
//           .test-card-slide {
//             padding: 32px 24px;
//           }
//           .test-quote {
//             font-size: 1rem;
//           }
//         }

//         @media (max-width: 768px) {
//           .section {
//             padding: 40px 0 !important;
//           }
//           .why-section {
//             padding: 40px 0 0 0 !important;
//           }
//           .journey-section {
//             padding: 40px 0 !important;
//           }
//           .testimonials-section {
//             padding: 40px 0 !important;
//           }
//           .cta-section {
//             padding: 30px 0 40px 0 !important;
//           }
          
//           .why-grid-modern {
//             grid-template-columns: 1fr 1fr;
//             gap: 16px;
//             margin-top: 32px;
//           }
//           .why-card-modern {
//             padding: 24px 16px 20px;
//             border-radius: 16px;
//           }
//           .why-card-icon {
//             width: 48px;
//             height: 48px;
//           }
//           .why-card-icon svg {
//             width: 22px;
//             height: 22px;
//           }
//           .why-card-modern h3 {
//             font-size: 0.9rem;
//           }
//           .why-card-modern p {
//             font-size: 0.8rem;
//           }
//           .why-heading-large {
//             font-size: 2rem !important;
//           }
//           .pkg-heading-large {
//             font-size: 2rem !important;
//           }
//           .marquee span {
//             font-size: 0.8rem;
//             padding: 0 16px;
//           }
//           .test-card-slide {
//             padding: 28px 20px;
//           }
//           .test-quote {
//             font-size: 0.95rem;
//           }
//         }

//         @media (max-width: 576px) {
//           .section {
//             padding: 30px 0 !important;
//           }
//           .why-section {
//             padding: 30px 0 0 0 !important;
//           }
//           .journey-section {
//             padding: 30px 0 !important;
//           }
//           .testimonials-section {
//             padding: 30px 0 !important;
//           }
//           .cta-section {
//             padding: 20px 0 30px 0 !important;
//           }
          
//           .why-grid-modern {
//             grid-template-columns: 1fr;
//             max-width: 380px;
//             margin-left: auto;
//             margin-right: auto;
//           }
//           .why-card-modern {
//             padding: 20px 16px 18px;
//           }
//           .why-heading-large {
//             font-size: 1.6rem !important;
//           }
//           .pkg-heading-large {
//             font-size: 1.6rem !important;
//           }
//           .marquee span {
//             font-size: 0.7rem;
//             padding: 0 12px;
//           }
//           .test-card-slide {
//             padding: 24px 16px;
//           }
//           .test-quote {
//             font-size: 0.85rem;
//           }
//           .test-dot {
//             width: 10px;
//             height: 10px;
//           }
//         }
//       `}</style>
//     </>
//   );
// }





import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';
import Journey from '../components/Journey';
import { testimonials } from '../data/content';

// ---- real photography (Pexels, free for commercial use) ----
const IMG = {
  heroChai: 'https://images.pexels.com/photos/34324342/pexels-photo-34324342.jpeg?auto=compress&cs=tinysrgb&w=1600',
  cafeInterior: 'https://images.pexels.com/photos/35134952/pexels-photo-35134952.jpeg?auto=compress&cs=tinysrgb&w=1200',
  cafeBooth: 'https://images.pexels.com/photos/30951017/pexels-photo-30951017.jpeg?auto=compress&cs=tinysrgb&w=1200',
  chaat: 'https://images.pexels.com/photos/34270741/pexels-photo-34270741.jpeg?auto=compress&cs=tinysrgb&w=900',
  burger: 'https://images.pexels.com/photos/1552641/pexels-photo-1552641.jpeg?auto=compress&cs=tinysrgb&w=900',
  chaiClose: 'https://images.pexels.com/photos/37186989/pexels-photo-37186989.jpeg?auto=compress&cs=tinysrgb&w=900',
};

const whyItems = [
  { title: 'Turnkey Setup', text: 'Interior, kitchen & equipment sourcing handled by our team.', icon: 'M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6' },
  { title: 'Proven Menu & Margins', text: 'Tested chaat, tea & fast-food menu with signature masala blends.', icon: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' },
  { title: 'Trained Staff', text: 'We train your team on recipes, service & hygiene before launch.', icon: 'M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' },
  { title: 'Marketing That Works', text: 'Launch campaigns & local marketing to bring footfall from day one.', icon: 'M3 3v18h18M7 15l4-4 3 3 5-6' },
  { title: 'Raw Materials Supply', text: 'Consistent supply of masala, tea, coffee & packaging to every outlet.', icon: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z' },
  { title: 'Continuous Guidance', text: 'Ongoing consultation on operations, costs & growth after launch.', icon: 'M22 12h-4l-3 9L9 3l-3 9H2' },
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

const marqueeItems = ['Complete Franchise Setup', 'Kitchen Equipment', 'Premium Masala & Spices', 'Interior Design', 'Staff Training', 'Marketing Support', 'Menu Planning', 'Launch Support'];

const menuPreview = [
  { name: 'Street-Style Chaat', img: IMG.chaat, tag: 'Bestseller' },
  { name: 'Loaded Burgers & Fries', img: IMG.burger, tag: 'Fast Food' },
  { name: 'Signature Masala Chai', img: IMG.chaiClose, tag: 'Beverage' },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroOverlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);

  useEffect(() => {
    const interval = setInterval(() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length), 4500);
    return () => clearInterval(interval);
  }, []);

  const headlineWords = 'Start your own profitable cafe, we build it with you.'.split(' ');

  return (
    <>
      {/* ============ HERO — real photo, parallax, staggered headline ============ */}
      <section className="jk-hero" ref={heroRef}>
        <motion.div className="jk-hero-bg" style={{ y: heroImgY }}>
          <img src={IMG.heroChai} alt="Fresh chai being poured at a bustling street stall" />
        </motion.div>
        <motion.div className="jk-hero-overlay" style={{ opacity: heroOverlayOpacity }} />

        <div className="container jk-hero-content">
          <motion.div className="eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Cafe Franchise &amp; Business Setup
          </motion.div>

          <h1 className="jk-hero-headline">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.05, ease: [0.2, 0.7, 0.2, 1] }}
                style={{ display: 'inline-block', marginRight: '0.28em' }}
              >
                {word === 'profitable' || word === 'cafe,' ? <span className="grad-text">{word}</span> : word}
              </motion.span>
            ))}
          </h1>

          <motion.p className="jk-hero-sub" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }}>
            JK Chaat Cafe helps first-time entrepreneurs launch a fully branded cafe business — interiors, kitchen equipment, signature masala, menu, staff training and marketing, handled end to end.
          </motion.p>

          <motion.div className="hero-ctas" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.05 }}>
            <Link to="/franchise" className="btn btn-primary">
              Become a Franchise Partner
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </Link>
            <a href="#brochure" className="btn btn-ghost jk-hero-ghost">Download Brochure</a>
          </motion.div>

          <motion.div className="jk-hero-stats" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 }}>
            <div><b><CountUp target={120} suffix="+" /></b><span>Franchise Partners</span></div>
            <div><b><CountUp target={45} /></b><span>Cities Covered</span></div>
            <div><b><CountUp target={6} /></b><span>Years in Business</span></div>
          </motion.div>
        </div>

        <motion.div className="jk-scroll-cue" animate={{ y: [0, 10, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
        </motion.div>
      </section>

      <div className="marquee-wrap">
        <div className="marquee">
          {[...marqueeItems, ...marqueeItems].map((item, index) => <span key={index}>{item}</span>)}
        </div>
      </div>

      {/* ============ WHY US — split photo + feature list ============ */}
      <section className="section jk-why">
        <div className="container jk-why-grid">
          <motion.div
            className="jk-why-photos"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <img src={IMG.cafeInterior} alt="Warm, inviting JK Chaat Cafe interior" className="jk-why-photo-main" />
            <motion.img
              src={IMG.chaiClose}
              alt="Fresh masala chai served at the counter"
              className="jk-why-photo-float"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          <div>
            <Reveal className="section-head">
              <div className="eyebrow">Why Partner With Us</div>
              <h2 className="why-heading-large">Everything you need, nothing you have to figure out.</h2>
              <p className="section-sub" style={{ margin: '14px 0 0' }}>We solve the three biggest challenges: what to sell, how to set up, and how to keep it full.</p>
            </Reveal>

            <div className="jk-why-list">
              {whyItems.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06} className="jk-why-row">
                  <div className="jk-why-row-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={item.icon} /></svg>
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ MENU PREVIEW — real food photography ============ */}
      <section className="section jk-menu-preview">
        <div className="container">
          <Reveal className="section-head center">
            <div className="eyebrow">On The Menu</div>
            <h2 className="why-heading-large">Food people actually crave.</h2>
            <p className="section-sub">A tested menu that keeps customers coming back — and keeps margins healthy.</p>
          </Reveal>

          <div className="jk-menu-grid">
            {menuPreview.map((item, i) => (
              <motion.div
                key={item.name}
                className="jk-menu-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="jk-menu-card-img">
                  <img src={item.img} alt={item.name} loading="lazy" />
                  <span className="jk-menu-tag">{item.tag}</span>
                </div>
                <h4>{item.name}</h4>
              </motion.div>
            ))}
          </div>

          <Reveal className="jk-menu-cta">
            <Link to="/products" className="btn btn-primary">
              Explore Full Menu
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ INVESTMENT PLANS ============ */}
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

      {/* ============ PROCESS ============ */}
      <section className="section journey-section">
        <div className="container">
          <Reveal className="section-head center">
            <div className="eyebrow">Your Cafe Setup Journey</div>
            <h2>From enquiry to opening day, in six steps.</h2>
          </Reveal>
          <Journey steps={journeySteps} />
        </div>
      </section>

      {/* ============ STATS — photo background ============ */}
      <section className="section jk-stats-photo">
        <div className="jk-stats-bg">
          <img src={IMG.cafeBooth} alt="" />
          <div className="jk-stats-overlay" />
        </div>
        <div className="container">
          <div className="jk-stats-grid">
            <Reveal><div className="jk-stat-num"><CountUp target={120} suffix="+" /></div><div className="jk-stat-label">Franchise Partners</div></Reveal>
            <Reveal delay={0.06}><div className="jk-stat-num"><CountUp target={45} /></div><div className="jk-stat-label">Cities Covered</div></Reveal>
            <Reveal delay={0.12}><div className="jk-stat-num"><CountUp target={98} suffix="%" /></div><div className="jk-stat-label">Partner Satisfaction</div></Reveal>
            <Reveal delay={0.18}><div className="jk-stat-num"><CountUp target={6} /></div><div className="jk-stat-label">Years of Experience</div></Reveal>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS — crossfade slider ============ */}
      <section className="section testimonials-section">
        <div className="container">
          <Reveal className="section-head center">
            <div className="eyebrow">Partner Success Stories</div>
            <h2>Real owners, real cafes, real returns.</h2>
          </Reveal>

          <div className="testimonials-slider">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="test-card-slide"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5 }}
              >
                <div className="test-stars">★★★★★</div>
                <p className="test-quote">"{testimonials[currentTestimonial].quote}"</p>
                <div className="test-person">
                  <div className="test-avatar">{testimonials[currentTestimonial].name.split(' ').map((n) => n[0]).join('')}</div>
                  <div>
                    <b>{testimonials[currentTestimonial].name}</b>
                    <span>Franchise Partner, {testimonials[currentTestimonial].city}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="test-dots">
              {testimonials.map((_, index) => (
                <button key={index} className={`test-dot ${currentTestimonial === index ? 'active' : ''}`} onClick={() => setCurrentTestimonial(index)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA — full photo background ============ */}
      <section className="section cta-section">
        <div className="container">
          <div className="jk-cta-photo" id="brochure">
            <img src={IMG.cafeInterior} alt="" />
            <div className="jk-cta-photo-overlay" />
            <motion.div
              className="jk-cta-photo-content"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
            >
              <h2>Your cafe business starts with one conversation.</h2>
              <p>Tell us your city and budget — we'll show you exactly what it takes.</p>
              <Link to="/franchise-application" className="btn btn-primary">
                Apply for Franchise
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        /* ===== HERO ===== */
        .jk-hero {
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          padding-bottom: 80px;
        }
        .jk-hero-bg { position: absolute; inset: -10% 0 0 0; height: 120%; z-index: 0; }
        .jk-hero-bg img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .jk-hero-overlay {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(0deg, rgba(10,6,3,0.92) 0%, rgba(10,6,3,0.55) 45%, rgba(10,6,3,0.25) 100%);
        }
        .jk-hero-content { position: relative; z-index: 2; max-width: 760px; }
        .jk-hero .eyebrow { color: #FFD700; }
        .jk-hero .eyebrow::before { background: #FFD700; }
        .jk-hero-headline {
          font-family: 'Baloo 2', sans-serif;
          font-size: clamp(2.4rem, 5.5vw, 4rem);
          line-height: 1.12;
          color: #fff;
          margin: 14px 0 18px;
        }
        .jk-hero-headline .grad-text {
          background: linear-gradient(100deg, #FFD700, #FFF3B0);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .jk-hero-sub { color: rgba(255,255,255,0.88); font-size: 1.08rem; line-height: 1.7; max-width: 560px; margin-bottom: 30px; }
        .jk-hero-ghost { background: rgba(255,255,255,0.1); color: #fff; border-color: rgba(255,255,255,0.4); backdrop-filter: blur(6px); }
        .jk-hero-ghost:hover { background: rgba(255,255,255,0.18); border-color: #fff; }
        .jk-hero-stats { display: flex; gap: 36px; margin-top: 42px; flex-wrap: wrap; }
        .jk-hero-stats b { font-family: 'Baloo 2', sans-serif; font-size: 1.8rem; color: #FFD700; display: block; }
        .jk-hero-stats span { color: rgba(255,255,255,0.75); font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; }
        .jk-scroll-cue { position: absolute; bottom: 24px; left: 50%; transform: translateX(-50%); z-index: 2; }
        .jk-scroll-cue svg { width: 26px; height: 26px; opacity: 0.75; }

        /* ===== MARQUEE ===== */
        .marquee-wrap { background: #FFD700; padding: 14px 0; overflow: hidden; }
        .marquee { display: flex; animation: marqueeScroll 30s linear infinite; white-space: nowrap; }
        .marquee span { display: inline-block; padding: 0 30px; color: #000; font-weight: 700; font-size: 0.95rem; letter-spacing: 0.5px; }
        @keyframes marqueeScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        /* ===== SHARED SECTION TEXT ===== */
        .section { padding: 70px 0; }
        .why-heading-large { font-size: 2.6rem; line-height: 1.2; max-width: 640px; color: #000; }
        .pkg-heading-large { font-size: 2.6rem; line-height: 1.2; color: #000; }
        .section-head h2 { color: #000; }
        .section-head.center { text-align: center; margin: 0 auto 40px; }
        .section-head.center .why-heading-large { margin-left: auto; margin-right: auto; }
        .eyebrow { color: #C99400; font-weight: 700; }
        .eyebrow::before { background: #FFD700; }
        .section-sub { max-width: 560px; margin: 10px auto 0; color: #55524c; font-size: 1.02rem; line-height: 1.7; }

        /* ===== WHY US SPLIT ===== */
        .jk-why-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 56px; align-items: center; }
        .jk-why-photos { position: relative; }
        .jk-why-photo-main { width: 100%; aspect-ratio: 4/5; object-fit: cover; border-radius: 24px; box-shadow: 0 30px 60px -20px rgba(0,0,0,0.35); }
        .jk-why-photo-float {
          position: absolute; bottom: -30px; right: -30px; width: 46%; aspect-ratio: 1/1; object-fit: cover;
          border-radius: 18px; border: 6px solid #fff; box-shadow: 0 20px 40px -12px rgba(0,0,0,0.3);
        }
        .jk-why-list { margin-top: 30px; display: flex; flex-direction: column; gap: 22px; }
        .jk-why-row { display: flex; gap: 16px; align-items: flex-start; }
        .jk-why-row-icon {
          flex-shrink: 0; width: 44px; height: 44px; border-radius: 12px;
          background: #FFF7D6; display: flex; align-items: center; justify-content: center;
          border: 1.5px solid #FFD700;
        }
        .jk-why-row-icon svg { width: 20px; height: 20px; color: #a87200; }
        .jk-why-row h3 { font-size: 1.02rem; font-weight: 700; color: #000; margin-bottom: 4px; }
        .jk-why-row p { font-size: 0.9rem; color: #55524c; line-height: 1.6; margin: 0; }

        /* ===== MENU PREVIEW ===== */
        .jk-menu-preview { background: #FAF7F0; }
        .jk-menu-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; margin-top: 40px; }
        .jk-menu-card { border-radius: 20px; overflow: hidden; background: #fff; box-shadow: 0 10px 30px -14px rgba(0,0,0,0.15); }
        .jk-menu-card-img { position: relative; aspect-ratio: 4/3; overflow: hidden; }
        .jk-menu-card-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .jk-menu-card:hover .jk-menu-card-img img { transform: scale(1.08); }
        .jk-menu-tag {
          position: absolute; top: 14px; left: 14px; background: #FFD700; color: #000;
          font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em;
          padding: 5px 12px; border-radius: 100px;
        }
        .jk-menu-card h4 { padding: 16px 18px 20px; font-size: 1.02rem; color: #000; }
        .jk-menu-cta { text-align: center; margin-top: 40px; }

        /* ===== PKG (reuse existing tokens, keep white theme) ===== */
        .no-gap-top { padding-top: 0 !important; }
        .pkg-band { background: #fff; padding: 60px 0; }
        .pkg-card { background: #fff; border: 1px solid #E0E0E0; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
        .pkg-card.featured { border-color: #FFD700; box-shadow: 0 8px 32px rgba(255,215,0,0.12); }
        .pkg-tag { background: #FFD700; color: #000; }
        .pkg-card h3, .pkg-price, .pkg-price span, .pkg-card ul li { color: #000; }

        /* ===== STATS PHOTO BAND ===== */
        .jk-stats-photo { position: relative; padding: 0; overflow: hidden; }
        .jk-stats-bg { position: relative; height: 340px; }
        .jk-stats-bg img { width: 100%; height: 100%; object-fit: cover; }
        .jk-stats-overlay { position: absolute; inset: 0; background: linear-gradient(100deg, rgba(10,6,3,0.88), rgba(10,6,3,0.6)); }
        .jk-stats-photo .container { position: absolute; inset: 0; display: flex; align-items: center; }
        .jk-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; width: 100%; text-align: center; }
        .jk-stat-num { font-family: 'Baloo 2', sans-serif; font-size: 2.6rem; font-weight: 800; color: #FFD700; }
        .jk-stat-label { color: rgba(255,255,255,0.85); font-size: 0.78rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 4px; }

        /* ===== TESTIMONIALS ===== */
        .testimonials-slider { position: relative; margin-top: 40px; }
        .test-card-slide { padding: 48px 40px; background: #fff; border-radius: 24px; text-align: center; border: 1px solid #E0E0E0; box-shadow: 0 2px 8px rgba(0,0,0,0.04); max-width: 720px; margin: 0 auto; }
        .test-stars { font-size: 1.2rem; letter-spacing: 4px; color: #FFD700; margin-bottom: 16px; }
        .test-quote { font-size: 1.15rem; line-height: 1.8; color: #000; margin: 0 auto 24px; font-weight: 500; }
        .test-person { display: flex; align-items: center; justify-content: center; gap: 14px; }
        .test-avatar { width: 48px; height: 48px; border-radius: 50%; background: #FFD700; color: #000; display: flex; align-items: center; justify-content: center; font-weight: 700; }
        .test-person b { display: block; color: #000; font-size: 0.95rem; }
        .test-person span { color: #55524c; font-size: 0.8rem; }
        .test-dots { display: flex; justify-content: center; gap: 10px; margin-top: 28px; }
        .test-dot { width: 12px; height: 12px; border-radius: 50%; border: 2px solid #000; background: transparent; cursor: pointer; padding: 0; transition: all 0.3s ease; }
        .test-dot.active { background: #FFD700; border-color: #FFD700; transform: scale(1.2); }

        /* ===== CTA PHOTO BANNER ===== */
        .cta-section { padding-top: 20px; }
        .jk-cta-photo { position: relative; border-radius: 32px; overflow: hidden; min-height: 340px; display: flex; align-items: center; }
        .jk-cta-photo img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .jk-cta-photo-overlay { position: absolute; inset: 0; background: linear-gradient(100deg, rgba(10,6,3,0.85), rgba(10,6,3,0.45)); }
        .jk-cta-photo-content { position: relative; z-index: 1; padding: 60px 50px; max-width: 560px; }
        .jk-cta-photo-content h2 { color: #fff; font-size: 2.1rem; margin-bottom: 12px; }
        .jk-cta-photo-content p { color: rgba(255,255,255,0.85); margin-bottom: 26px; font-size: 1.02rem; }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 992px) {
          .jk-why-grid { grid-template-columns: 1fr; gap: 40px; }
          .jk-why-photos { max-width: 420px; margin: 0 auto; }
          .jk-menu-grid { grid-template-columns: repeat(2, 1fr); }
          .jk-stats-grid { grid-template-columns: repeat(2, 1fr); row-gap: 28px; }
          .jk-hero { min-height: 82vh; }
        }
        @media (max-width: 640px) {
          .section { padding: 46px 0; }
          .jk-menu-grid { grid-template-columns: 1fr; }
          .jk-hero-stats { gap: 24px; }
          .jk-cta-photo-content { padding: 40px 26px; }
          .jk-why-photo-float { display: none; }
          .why-heading-large, .pkg-heading-large { font-size: 1.9rem; }
        }
      `}</style>
    </>
  );
}
