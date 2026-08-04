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

// ---- Premium Dark Theme Images ----
const IMG = {
  hero: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&q=80',
  heroDark: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80',
  interior: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80',
  interiorDark: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1200&q=80',
  food1: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&q=80',
  food2: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80',
  food3: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=900&q=80',
  food4: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=900&q=80',
  chai: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=900&q=80',
  chai2: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=900&q=80',
  team: 'https://images.unsplash.com/photo-1522336572468-97b06e8ef143?w=1200&q=80',
  counter: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=1200&q=80',
  kitchen: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=1200&q=80',
  crowd: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
  coffee: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=900&q=80',
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
  { name: 'Signature Masala Chai', img: IMG.chai, tag: 'Bestseller', desc: 'Authentic Indian chai with secret spice blend' },
  { name: 'Loaded Burgers', img: IMG.food2, tag: 'Fast Food', desc: 'Juicy patties with fresh ingredients' },
  { name: 'Street-Style Chaat', img: IMG.food1, tag: 'Trending', desc: 'Tangy, spicy & absolutely irresistible' },
  { name: 'Premium Coffee', img: IMG.coffee, tag: 'Beverage', desc: 'Rich, aromatic coffee from finest beans' },
  { name: 'Tandoori Delights', img: IMG.food4, tag: 'Signature', desc: 'Smoky, flavorful tandoori specialties' },
  { name: 'Fresh Juices', img: IMG.food3, tag: 'Healthy', desc: 'Freshly squeezed, natural & refreshing' },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroBlur = useTransform(scrollYProgress, [0, 0.8], [0, 4]);

  useEffect(() => {
    const interval = setInterval(() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length), 4500);
    return () => clearInterval(interval);
  }, []);

  const headlineWords = 'Start your own profitable cafe, we build it with you.'.split(' ');

  return (
    <>
      {/* ============ HERO — Premium Dark Parallax ============ */}
      <section className="jk-hero" ref={heroRef}>
        <motion.div 
          className="jk-hero-bg" 
          style={{ 
            y: heroImgY,
            scale: heroScale,
            opacity: heroOpacity,
            filter: useTransform(heroBlur, (v) => `blur(${v}px)`)
          }}
        >
          <img src={IMG.heroDark} alt="Premium cafe experience" />
          <div className="jk-hero-gradient" />
        </motion.div>

        <div className="container jk-hero-content">
          {/* <motion.div 
            className="jk-hero-badge"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="jk-badge-dot" />
            <span>🔥 Now Expanding Across India</span>
            <span className="jk-badge-pulse">● Live</span>
          </motion.div> */}

          <h1 className="jk-hero-headline">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.1 + i * 0.06, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                style={{ display: 'inline-block', marginRight: '0.2em' }}
              >
                {word === 'profitable' || word === 'cafe,' ? (
                  <span className="grad-text">{word}</span>
                ) : word}
              </motion.span>
            ))}
          </h1>

          <motion.p 
            className="jk-hero-sub" 
            initial={{ opacity: 0, y: 25 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            JK Chaat Cafe helps first-time entrepreneurs launch a fully branded cafe business — interiors, kitchen equipment, signature masala, menu, staff training and marketing, handled end to end.
          </motion.p>

          <motion.div 
            className="hero-ctas" 
            initial={{ opacity: 0, y: 25 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <Link to="/franchise" className="btn btn-primary btn-hero">
              Become a Franchise Partner
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </Link>
            <a href="#brochure" className="btn btn-ghost jk-hero-ghost">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4v16h16M8 8l8 8M16 8l-8 8" /></svg>
              Download Brochure
            </a>
          </motion.div>

          <motion.div 
            className="jk-hero-stats" 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 1.3 }}
          >
            {[
              { target: 120, suffix: '+', label: 'Franchise Partners' },
              { target: 45, suffix: '', label: 'Cities Covered' },
              { target: 6, suffix: '', label: 'Years in Business' },
              { target: 98, suffix: '%', label: 'Partner Satisfaction' }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                className="jk-hero-stat"
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <b><CountUp target={stat.target} suffix={stat.suffix} /></b>
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="jk-scroll-cue" 
          animate={{ y: [0, 14, 0] }} 
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
        </motion.div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div className="marquee-wrap">
        <div className="marquee">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index}>
              <svg viewBox="0 0 24 24" fill="#000" width="16" height="16"><circle cx="12" cy="12" r="6" /></svg>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ============ WHY US — Dark Theme ============ */}
      <section className="section jk-why">
        <div className="container jk-why-grid">
          <motion.div
            className="jk-why-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="jk-why-visual-grid">
              <img src={IMG.interiorDark} alt="Premium cafe interior" className="jk-why-img-main" />
              <motion.img 
                src={IMG.chai2} 
                alt="Fresh chai" 
                className="jk-why-img-float"
                animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* <div className="jk-why-experience">
                <span className="jk-exp-number">6+</span>
                <span className="jk-exp-label">Years of Excellence</span>
              </div> */}
            </div>
          </motion.div>

          <div>
            <Reveal className="section-head">
              <div className="eyebrow">Why Partner With Us</div>
              <h2 className="why-heading-large">Everything you need, <br />nothing you have to figure out.</h2>
              <p className="section-sub" style={{ margin: '14px 0 0' }}>We solve the three biggest challenges: what to sell, how to set up, and how to keep it full.</p>
            </Reveal>

            <div className="jk-why-list">
              {whyItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="jk-why-row"
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ x: 6 }}
                >
                  <div className="jk-why-row-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={item.icon} /></svg>
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ MENU PREVIEW — 6 Items ============ */}
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="jk-menu-card-img">
                  <img src={item.img} alt={item.name} loading="lazy" />
                  <span className="jk-menu-tag">{item.tag}</span>
                  <div className="jk-menu-overlay" />
                </div>
                <div className="jk-menu-body">
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                </div>
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
              {[
                { tag: 'Starter', title: 'Kiosk Cafe', price: '₹9.9L', features: ['Compact kiosk interior design', 'Core equipment package', 'Starter menu & masala kit', '7-day staff training'] },
                { tag: 'Most Chosen', title: 'Complete Cafe', price: '₹19.5L', featured: true, features: ['Full interior & branding', 'Complete kitchen & seating', 'Full menu & raw material supply', 'Launch marketing campaign', '12 months business guidance'] },
                { tag: 'Master', title: 'Master Franchise', price: 'Custom', features: ['Exclusive regional rights', 'Multi-outlet rollout support', 'Dedicated supply chain', 'Priority business consultation'] }
              ].map((pkg, i) => (
                <Reveal key={pkg.title} delay={i * 0.08} className={`pkg-card ${pkg.featured ? 'featured' : ''}`}>
                  <span className="pkg-tag">{pkg.tag}</span>
                  <h3>{pkg.title}</h3>
                  <div className="pkg-price">{pkg.price} <span>/ one-time</span></div>
                  <ul>
                    {pkg.features.map((f, idx) => (
                      <li key={idx}>{check}{f}</li>
                    ))}
                  </ul>
                  <Link to="/franchise-application" className="btn btn-ghost">Enquire Now</Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ JOURNEY ============ */}
      <section className="section journey-section">
        <div className="container">
          <Reveal className="section-head center">
            <div className="eyebrow">Your Cafe Setup Journey</div>
            <h2>From enquiry to opening day, in six steps.</h2>
          </Reveal>
          <Journey steps={journeySteps} />
        </div>
      </section>

      {/* ============ STATS — Dark Photo Background ============ */}
      <section className="section jk-stats-photo">
        <motion.div 
          className="jk-stats-bg"
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <img src={IMG.crowd} alt="Our team" />
          <div className="jk-stats-overlay" />
        </motion.div>
        <div className="container">
          <div className="jk-stats-grid">
            {[
              { target: 120, suffix: '+', label: 'Franchise Partners' },
              { target: 45, suffix: '', label: 'Cities Covered' },
              { target: 98, suffix: '%', label: 'Partner Satisfaction' },
              { target: 6, suffix: '', label: 'Years of Experience' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="jk-stat-num"><CountUp target={stat.target} suffix={stat.suffix} /></div>
                <div className="jk-stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
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
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
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
                <motion.button 
                  key={index} 
                  className={`test-dot ${currentTestimonial === index ? 'active' : ''}`} 
                  onClick={() => setCurrentTestimonial(index)}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA — Premium Dark Banner ============ */}
      <section className="section cta-section">
        <div className="container">
          <motion.div 
            className="jk-cta-premium"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            id="brochure"
          >
            <div className="jk-cta-bg">
              <img src={IMG.kitchen} alt="Cafe kitchen" />
              <div className="jk-cta-overlay" />
            </div>
            <div className="jk-cta-content">
              <motion.div 
                className="jk-cta-badge"
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, type: 'spring' }}
              >
                🚀 Limited Opportunities Available
              </motion.div>
              <h2>Your cafe business starts with one conversation.</h2>
              <p>Tell us your city and budget — we'll show you exactly what it takes.</p>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link to="/franchise-application" className="btn btn-primary btn-cta">
                  Apply for Franchise
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ FLOATING PARTICLES ============ */}
      <div className="jk-particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="jk-particle"
            initial={{ 
              x: Math.random() * 100, 
              y: Math.random() * 100,
              scale: Math.random() * 0.5 + 0.2,
              opacity: Math.random() * 0.3 + 0.1
            }}
            animate={{ 
              x: [null, Math.random() * 200 - 100],
              y: [null, Math.random() * 200 - 100],
              opacity: [null, Math.random() * 0.5 + 0.1]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      <style>{`
        /* ===== DARK THEME BASE ===== */
        body {
          background: #0a0a0a;
        }
        .jk-hero-headline, .jk-hero-sub, .jk-hero-stat span, .jk-hero-badge span {
          color: #fff;
        }
        .section-head h2, .section-head p, .section-head .eyebrow, .why-heading-large, .pkg-heading-large {
          color: #fff;
        }
        .eyebrow { color: #FFD700; }
        .eyebrow::before { background: #FFD700; }
        .section-sub { color: #b0a8a0; }

        /* ===== HERO ===== */
        .jk-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          padding-bottom: 80px;
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
          display: block;
        }
        .jk-hero-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.9) 100%);
        }
        .jk-hero-content {
          position: relative;
          z-index: 2;
          max-width: 860px;
          padding-bottom: 20px;
        }
        .jk-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: rgba(255,215,0,0.08);
          backdrop-filter: blur(16px);
          padding: 10px 24px;
          border-radius: 100px;
          border: 1px solid rgba(255,215,0,0.2);
          color: #FFD700;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 24px;
        }
        .jk-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #FFD700;
          animation: pulse-dot 2s ease-in-out infinite;
        }
        .jk-badge-pulse {
          padding: 2px 12px;
          background: rgba(0,255,100,0.15);
          border-radius: 100px;
          font-size: 0.7rem;
          color: #00ff64;
          border: 1px solid rgba(0,255,100,0.2);
          animation: pulse-badge 2s ease-in-out infinite;
        }
        @keyframes pulse-badge {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        .jk-hero-headline {
          font-family: 'Baloo 2', sans-serif;
          font-size: clamp(2.8rem, 6.5vw, 5rem);
          line-height: 1.08;
          color: #fff;
          margin: 0 0 20px;
        }
        .jk-hero-headline .grad-text {
          background: linear-gradient(135deg, #FFD700, #F4A900, #FFD700);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmer 3s ease-in-out infinite;
        }
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .jk-hero-sub {
          color: rgba(255,255,255,0.9);
          font-size: 1.15rem;
          line-height: 1.8;
          max-width: 600px;
          margin-bottom: 32px;
        }
        .jk-hero-ghost {
          background: rgba(255,255,255,0.06);
          color: #fff;
          border-color: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .jk-hero-ghost svg { width: 18px; height: 18px; }
        .jk-hero-ghost:hover { background: rgba(255,255,255,0.12); border-color: #fff; }
        .btn-hero { padding: 16px 36px; font-size: 1.05rem; box-shadow: 0 20px 40px -12px rgba(255,215,0,0.3); }
        .jk-hero-stats {
          display: grid;
          grid-template-columns: repeat(4, auto);
          gap: 48px;
          margin-top: 48px;
        }
        .jk-hero-stat { cursor: default; }
        .jk-hero-stat b {
          font-family: 'Baloo 2', sans-serif;
          font-size: 2.2rem;
          color: #FFD700;
          display: block;
        }
        .jk-hero-stat span {
          color: rgba(255,255,255,0.6);
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .jk-scroll-cue {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }
        .jk-scroll-cue svg { width: 28px; height: 28px; opacity: 0.5; }

        /* ===== MARQUEE ===== */
        .marquee-wrap {
          background: linear-gradient(90deg, #FFD700, #F4A900);
          padding: 14px 0;
          overflow: hidden;
        }
        .marquee {
          display: flex;
          animation: marqueeScroll 30s linear infinite;
          white-space: nowrap;
        }
        .marquee span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0 30px;
          color: #000;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* ===== WHY US ===== */
        .jk-why { background: #0d0d0d; padding: 80px 0; }
        .jk-why-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 60px; align-items: center; }
        .jk-why-visual-grid { position: relative; }
        .jk-why-img-main {
          width: 100%;
          aspect-ratio: 4/5;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6);
          border: 1px solid rgba(255,215,0,0.05);
        }
        .jk-why-img-float {
          position: absolute;
          bottom: -30px;
          right: -30px;
          width: 50%;
          aspect-ratio: 1/1;
          object-fit: cover;
          border-radius: 18px;
          border: 4px solid #1a1a1a;
          box-shadow: 0 20px 40px -12px rgba(0,0,0,0.5);
        }
        .jk-why-experience {
          position: absolute;
          top: 20px;
          right: -10px;
          background: #1a1a1a;
          padding: 16px 24px;
          border-radius: 16px;
          box-shadow: 0 15px 30px -10px rgba(0,0,0,0.4);
          text-align: center;
          border: 1px solid rgba(255,215,0,0.3);
        }
        .jk-exp-number { font-family: 'Baloo 2', sans-serif; font-size: 2rem; font-weight: 800; color: #FFD700; display: block; }
        .jk-exp-label { font-size: 0.75rem; font-weight: 600; color: #b0a8a0; }
        .why-heading-large { font-size: 2.8rem; line-height: 1.15; max-width: 600px; color: #fff; }
        .jk-why-list { margin-top: 32px; display: flex; flex-direction: column; gap: 16px; }
        .jk-why-row {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 14px 18px;
          border-radius: 14px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.04);
          transition: all 0.3s ease;
          cursor: default;
        }
        .jk-why-row:hover {
          background: rgba(255,215,0,0.05);
          border-color: rgba(255,215,0,0.1);
        }
        .jk-why-row-icon {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255,215,0,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,215,0,0.1);
          transition: all 0.3s ease;
        }
        .jk-why-row:hover .jk-why-row-icon {
          background: #FFD700;
          transform: scale(1.05);
        }
        .jk-why-row-icon svg { width: 20px; height: 20px; color: #FFD700; transition: color 0.3s ease; }
        .jk-why-row:hover .jk-why-row-icon svg { color: #000; }
        .jk-why-row h3 { font-size: 1.05rem; font-weight: 700; color: #fff; margin-bottom: 2px; }
        .jk-why-row p { font-size: 0.9rem; color: #9a928a; line-height: 1.5; margin: 0; }

        /* ===== MENU ===== */
        .jk-menu-preview { background: #0d0d0d; padding: 80px 0; }
        .jk-menu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 40px;
        }
        .jk-menu-card {
          border-radius: 20px;
          overflow: hidden;
          background: #1a1a1a;
          box-shadow: 0 10px 30px -14px rgba(0,0,0,0.4);
          border: 1px solid rgba(255,255,255,0.04);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .jk-menu-card:hover {
          box-shadow: 0 20px 50px -20px rgba(255,215,0,0.1);
          border-color: rgba(255,215,0,0.15);
        }
        .jk-menu-card-img {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
        }
        .jk-menu-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .jk-menu-card:hover .jk-menu-card-img img { transform: scale(1.08); }
        .jk-menu-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.4));
        }
        .jk-menu-tag {
          position: absolute;
          top: 14px;
          left: 14px;
          background: #FFD700;
          color: #000;
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 5px 14px;
          border-radius: 100px;
          box-shadow: 0 4px 12px rgba(255,215,0,0.3);
        }
        .jk-menu-body { padding: 18px 20px 22px; }
        .jk-menu-body h4 { font-size: 1.05rem; color: #fff; margin: 0 0 4px; }
        .jk-menu-body p { font-size: 0.85rem; color: #9a928a; margin: 0; }
        .jk-menu-cta { text-align: center; margin-top: 40px; }

        /* ===== PKG ===== */
        .pkg-band { background: #0d0d0d; padding: 60px 0; }
        .pkg-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .pkg-card {
          background: #1a1a1a;
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 20px;
          padding: 32px 24px;
          transition: all 0.4s ease;
          text-align: center;
        }
        .pkg-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -16px rgba(0,0,0,0.5);
          border-color: rgba(255,215,0,0.1);
        }
        .pkg-card.featured {
          border-color: #FFD700;
          box-shadow: 0 8px 32px rgba(255,215,0,0.08);
          transform: scale(1.02);
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
        .pkg-card h3 { font-size: 1.4rem; margin: 12px 0 8px; color: #fff; }
        .pkg-price { font-family: 'Baloo 2', sans-serif; font-size: 2rem; font-weight: 700; color: #FFD700; }
        .pkg-price span { font-size: 0.9rem; font-weight: 400; color: #9a928a; }
        .pkg-card ul { list-style: none; padding: 0; margin: 20px 0 24px; text-align: left; }
        .pkg-card ul li {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 6px 0;
          color: #b0a8a0;
          font-size: 0.9rem;
        }
        .pkg-card ul li svg { width: 18px; height: 18px; flex-shrink: 0; color: #FFD700; }
        .pkg-card .btn-ghost { color: #fff; border-color: rgba(255,255,255,0.1); }
        .pkg-card .btn-ghost:hover { border-color: #FFD700; background: #FFD700; color: #000; }

        /* ===== STATS ===== */
        .jk-stats-photo {
          position: relative;
          padding: 0;
          overflow: hidden;
        }
        .jk-stats-bg {
          position: relative;
          height: 420px;
        }
        .jk-stats-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .jk-stats-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.88), rgba(0,0,0,0.5));
        }
        .jk-stats-photo .container {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
        }
        .jk-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          width: 100%;
          text-align: center;
        }
        .jk-stat-num {
          font-family: 'Baloo 2', sans-serif;
          font-size: 3.2rem;
          font-weight: 800;
          color: #FFD700;
          text-shadow: 0 2px 20px rgba(255,215,0,0.1);
        }
        .jk-stat-label { color: rgba(255,255,255,0.75); font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; margin-top: 4px; }

        /* ===== TESTIMONIALS ===== */
        .testimonials-section { background: #0d0d0d; padding: 80px 0; }
        .testimonials-slider { position: relative; margin-top: 40px; }
        .test-card-slide {
          padding: 48px 40px;
          background: #1a1a1a;
          border-radius: 24px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.04);
          box-shadow: 0 10px 30px -16px rgba(0,0,0,0.4);
          max-width: 720px;
          margin: 0 auto;
        }
        .test-stars { font-size: 1.2rem; letter-spacing: 4px; color: #FFD700; margin-bottom: 16px; }
        .test-quote { font-size: 1.15rem; line-height: 1.8; color: #fff; margin: 0 auto 24px; font-weight: 500; }
        .test-person { display: flex; align-items: center; justify-content: center; gap: 14px; }
        .test-avatar {
          width: 48px; height: 48px; border-radius: 50%;
          background: #FFD700; color: #000;
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 1rem;
        }
        .test-person b { display: block; color: #fff; font-size: 0.95rem; }
        .test-person span { color: #9a928a; font-size: 0.8rem; }
        .test-dots { display: flex; justify-content: center; gap: 10px; margin-top: 28px; }
        .test-dot {
          width: 12px; height: 12px; border-radius: 50%;
          border: 2px solid #666;
          background: transparent;
          cursor: pointer;
          padding: 0;
          transition: all 0.3s ease;
        }
        .test-dot.active { background: #FFD700; border-color: #FFD700; transform: scale(1.2); }

        /* ===== CTA ===== */
        .cta-section { padding: 40px 0 80px; background: #0d0d0d; }
        .jk-cta-premium {
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          min-height: 380px;
          display: flex;
          align-items: center;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.5);
        }
        .jk-cta-bg { position: absolute; inset: 0; }
        .jk-cta-bg img { width: 100%; height: 100%; object-fit: cover; }
        .jk-cta-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.88), rgba(0,0,0,0.4));
        }
        .jk-cta-content { position: relative; z-index: 1; padding: 60px 50px; max-width: 600px; }
        .jk-cta-badge {
          display: inline-block;
          background: rgba(255,215,0,0.08);
          backdrop-filter: blur(12px);
          padding: 6px 18px;
          border-radius: 100px;
          border: 1px solid rgba(255,215,0,0.15);
          color: #FFD700;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .jk-cta-content h2 { color: #fff; font-size: 2.4rem; line-height: 1.15; margin-bottom: 12px; }
        .jk-cta-content p { color: rgba(255,255,255,0.8); margin-bottom: 28px; font-size: 1.05rem; }
        .btn-cta { padding: 16px 38px; font-size: 1.05rem; box-shadow: 0 20px 40px -12px rgba(255,215,0,0.25); }

        /* ===== PARTICLES ===== */
        .jk-particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9999;
          overflow: hidden;
        }
        .jk-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #FFD700;
          border-radius: 50%;
          filter: blur(2px);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1200px) {
          .jk-hero-headline { font-size: clamp(2.6rem, 5.5vw, 4rem); }
          .jk-hero-stats { gap: 32px; }
        }

        @media (max-width: 992px) {
          .jk-why-grid { grid-template-columns: 1fr; gap: 40px; }
          .jk-why-visual-grid { max-width: 500px; margin: 0 auto; }
          .jk-menu-grid { grid-template-columns: repeat(2, 1fr); }
          .pkg-grid { grid-template-columns: repeat(2, 1fr); }
          .jk-stats-grid { grid-template-columns: repeat(2, 1fr); row-gap: 28px; }
          .jk-hero-stats { grid-template-columns: repeat(2, auto); gap: 24px; }
          .jk-hero { min-height: 80vh; }
          .jk-why-img-float { width: 40%; bottom: -20px; right: -20px; }
          .jk-stat-num { font-size: 2.6rem; }
        }

        @media (max-width: 768px) {
          .jk-why-img-float { display: none; }
          .jk-why-experience { right: 0; padding: 12px 18px; }
          .jk-exp-number { font-size: 1.6rem; }
          .jk-cta-content { padding: 40px 28px; }
          .jk-cta-content h2 { font-size: 1.8rem; }
          .jk-cta-premium { min-height: 300px; }
          .jk-hero-badge { font-size: 0.75rem; padding: 8px 16px; }
          .jk-hero-stats { gap: 16px; margin-top: 32px; }
          .jk-hero-stat b { font-size: 1.6rem; }
          .jk-stats-bg { height: 320px; }
          .test-card-slide { padding: 28px 20px; }
          .test-quote { font-size: 1rem; }
        }

        @media (max-width: 640px) {
          .section { padding: 50px 0; }
          .jk-menu-grid { grid-template-columns: 1fr; }
          .pkg-grid { grid-template-columns: 1fr; }
          .pkg-card.featured { transform: scale(1); }
          .why-heading-large, .pkg-heading-large { font-size: 2rem; }
          .jk-stats-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .jk-stat-num { font-size: 2rem; }
          .jk-hero { min-height: 70vh; padding-bottom: 40px; }
          .jk-scroll-cue { display: none; }
          .jk-hero-headline { font-size: 2.2rem; }
          .jk-hero-sub { font-size: 1rem; }
          .jk-hero-stats { grid-template-columns: 1fr 1fr; gap: 12px; }
          .jk-hero-stat b { font-size: 1.4rem; }
          .jk-cta-content h2 { font-size: 1.4rem; }
          .btn-hero, .btn-cta { padding: 12px 24px; font-size: 0.95rem; }
          .jk-particles { display: none; }
        }

        @media (max-width: 400px) {
          .jk-hero-headline { font-size: 1.8rem; }
          .jk-hero-stats { gap: 8px; }
          .jk-hero-stat b { font-size: 1.2rem; }
          .jk-hero-stat span { font-size: 0.6rem; }
          .jk-hero-badge { font-size: 0.65rem; padding: 6px 12px; flex-wrap: wrap; }
        }
      `}</style>
    </>
  );
}
