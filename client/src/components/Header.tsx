// import { useEffect, useState } from 'react';
// import { NavLink, Link, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import logo from '../assets/img/jk-chaat-cafe-logo.png';

// const links = [
//   { to: '/', label: 'Home' },
//   { to: '/about', label: 'About' },
//   { to: '/franchise', label: 'Franchise' },
//   { to: '/products', label: 'Products & Menu' },
//   { to: '/gallery', label: 'Gallery' },
//   { to: '/blogs', label: 'Blogs' },
//   { to: '/contact', label: 'Contact' },
// ];

// // Food emojis for page transition only
// const foodEmojis = ['🍕', '🍔', '🌮', '🥙', '☕', '🧋', '🍦', '🥤', '🍟', '🌭'];

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();
//   const [showTransition, setShowTransition] = useState(false);
//   const [transitionEmojis, setTransitionEmojis] = useState<string[]>([]);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? 'hidden' : '';
//   }, [menuOpen]);

//   // Page transition effect on route change
//   useEffect(() => {
//     setShowTransition(true);
//     const shuffled = [...foodEmojis].sort(() => 0.5 - Math.random());
//     setTransitionEmojis(shuffled.slice(0, 6));
//     const timer = setTimeout(() => setShowTransition(false), 800);
//     return () => clearTimeout(timer);
//   }, [location.pathname]);

//   return (
//     <>
//       <style>{`
//         /* ===== HEADER WRAPPER - TRANSPARENT ===== */
//         .header-wr {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           z-index: 1000;
//         }

//         /* ===== TOP BAR ===== */
//         .header-top {
//           background: transparent !important;
//           backdrop-filter: none !important;
//           padding: 12px 0;
//           border-bottom: 1px solid rgba(255, 255, 255, 0.05);
//         }
//         .header-top .center-wr {
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 0 40px;
//         }
//         .header-top-content {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           flex-wrap: wrap;
//           gap: 12px;
//         }
//         .header-logo-block {
//           flex-shrink: 0;
//         }
//         .header-logo-block a {
//           display: block;
//         }
//         .header-logo-block img {
//           height: 50px;
//           width: auto;
//           filter: none !important;
//         }
//         .header-call-email-block {
//           display: flex;
//           align-items: center;
//           gap: 24px;
//           flex-wrap: wrap;
//         }
//         .header-call-email {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }
//         .header-call-email figure {
//           margin: 0;
//           flex-shrink: 0;
//         }
//         .header-call-email figure img {
//           width: 20px;
//           height: 20px;
//           filter: brightness(0) invert(1);
//         }
//         .header-call-email-detail {
//           display: flex;
//           flex-wrap: wrap;
//           align-items: center;
//           gap: 4px;
//         }
//         .header-call-email-detail span {
//           color: rgba(255,255,255,0.5);
//           font-size: 12px;
//           font-weight: 500;
//         }
//         .header-call-email-detail a {
//           color: rgba(255,255,255,0.8);
//           text-decoration: none;
//           font-size: 13px;
//           transition: color 0.3s ease;
//         }
//         .header-call-email-detail a:hover {
//           color: #FFD700;
//         }
//         .header-call-email-detail .comma {
//           color: rgba(255,255,255,0.3);
//           margin: 0 2px;
//         }

//         /* ===== SOCIAL ICONS - RIGHT SIDE ===== */
//         .header-social-icon {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//         }
//         .header-social-icon ul {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           list-style: none;
//           margin: 0;
//           padding: 0;
//         }
//         .header-social-icon ul li a {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 28px;
//           height: 28px;
//           border-radius: 50%;
//           background: rgba(255,255,255,0.05);
//           transition: all 0.3s ease;
//         }
//         .header-social-icon ul li a:hover {
//           background: #FFD700;
//           transform: translateY(-2px);
//         }
//         .header-social-icon ul li a svg {
//           width: 14px;
//           height: 14px;
//           fill: #fff;
//           transition: fill 0.3s ease;
//         }
//         .header-social-icon ul li a:hover svg {
//           fill: #000;
//         }

//         /* ===== BOTTOM NAVIGATION - CENTERED ===== */
//         .header-bottom {
//           background: transparent !important;
//           backdrop-filter: none !important;
//           border-bottom: 1px solid rgba(255, 255, 255, 0.05);
//         }
//         .header-bottom .center-wr {
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 0 40px;
//         }
//         .header-bottom-content {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 10px 0;
//         }
//         .header-menu {
//           display: flex;
//           align-items: center;
//         }
//         .header-menu .menu {
//           display: flex;
//           align-items: center;
//           gap: 32px;
//           list-style: none;
//           margin: 0;
//           padding: 0;
//         }
//         .header-menu .menu li a {
//           color: rgba(255,255,255,0.85);
//           text-decoration: none;
//           font-size: 14px;
//           font-weight: 500;
//           position: relative;
//           padding: 4px 0;
//           transition: color 0.3s ease;
//           letter-spacing: 0.3px;
//         }
//         .header-menu .menu li a::after {
//           content: '';
//           position: absolute;
//           bottom: -2px;
//           left: 50%;
//           width: 0;
//           height: 2px;
//           background: #FFD700;
//           transition: all 0.3s ease;
//           transform: translateX(-50%);
//         }
//         .header-menu .menu li a:hover {
//           color: #fff;
//         }
//         .header-menu .menu li a:hover::after {
//           width: 100%;
//         }
//         .header-menu .menu li a.active {
//           color: #FFD700;
//         }
//         .header-menu .menu li a.active::after {
//           width: 100%;
//         }
//         .header-menu .menu li.mobile-menu {
//           display: none;
//         }

//         /* ===== CONTACT BUTTON - HIDDEN ===== */
//         .header-contact-btn {
//           display: none !important;
//         }

//         /* ===== BURGER MENU ===== */
//         .burger {
//           display: none;
//           flex-direction: column;
//           gap: 5px;
//           background: none;
//           border: none;
//           cursor: pointer;
//           padding: 4px;
//           z-index: 1001;
//         }
//         .burger span {
//           display: block;
//           width: 26px;
//           height: 2px;
//           background: #fff;
//           border-radius: 2px;
//           transition: all 0.3s ease;
//           transform-origin: center;
//         }
//         .burger.open span:nth-child(1) {
//           transform: rotate(45deg) translate(5px, 5px);
//         }
//         .burger.open span:nth-child(2) {
//           opacity: 0;
//           transform: scaleX(0);
//         }
//         .burger.open span:nth-child(3) {
//           transform: rotate(-45deg) translate(5px, -5px);
//         }
//         .burger:hover span {
//           background: #FFD700;
//         }

//         /* ===== MOBILE MENU ===== */
//         .jk-mobile-menu {
//           position: fixed;
//           top: 0;
//           right: -100%;
//           width: 100%;
//           max-width: 400px;
//           height: 100vh;
//           background: rgba(10,10,10,0.98);
//           backdrop-filter: blur(20px);
//           padding: 90px 32px 40px;
//           display: flex;
//           flex-direction: column;
//           gap: 4px;
//           transition: right 0.4s cubic-bezier(0.22,1,0.36,1);
//           z-index: 999;
//           border-left: 1px solid rgba(255,215,0,0.05);
//           overflow-y: auto;
//         }
//         .jk-mobile-menu.open {
//           right: 0;
//         }
//         .jk-mobile-menu a {
//           color: rgba(255,255,255,0.85);
//           text-decoration: none;
//           font-size: 20px;
//           font-weight: 500;
//           padding: 16px 0;
//           border-bottom: 1px solid rgba(255,255,255,0.05);
//           transition: all 0.3s ease;
//         }
//         .jk-mobile-menu a:last-of-type {
//           border-bottom: none;
//         }
//         .jk-mobile-menu a:hover {
//           color: #FFD700;
//           padding-left: 12px;
//         }
//         .jk-mobile-menu .btn {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 10px;
//           padding: 16px 24px;
//           border-radius: 12px;
//           font-size: 16px;
//           font-weight: 600;
//           text-decoration: none;
//           margin-top: 24px;
//           background: #FFD700;
//           color: #000;
//           border: none;
//           cursor: pointer;
//           width: 100%;
//           transition: all 0.3s ease;
//         }
//         .jk-mobile-menu .btn:hover {
//           background: #F4C430;
//           transform: translateY(-2px);
//         }

//         /* ===== OVERLAY ===== */
//         .jk-menu-overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: rgba(0,0,0,0.6);
//           backdrop-filter: blur(4px);
//           z-index: 998;
//           opacity: 0;
//           visibility: hidden;
//           transition: all 0.4s ease;
//         }
//         .jk-menu-overlay.open {
//           opacity: 1;
//           visibility: visible;
//         }

//         /* ===== RESPONSIVE ===== */
//         @media (max-width: 1024px) {
//           .header-top .center-wr,
//           .header-bottom .center-wr {
//             padding: 0 24px;
//           }
//           .header-call-email-block {
//             gap: 16px;
//           }
//         }

//         @media (max-width: 820px) {
//           .header-menu .menu {
//             display: none;
//           }
//           .burger {
//             display: flex;
//           }
//           .header-logo-block img {
//             height: 40px;
//           }
//           .header-call-email-block {
//             gap: 10px;
//           }
//           .header-call-email-detail span {
//             font-size: 11px;
//           }
//           .header-call-email-detail a {
//             font-size: 11px;
//           }
//           .header-social-icon ul li a {
//             width: 24px;
//             height: 24px;
//           }
//           .header-social-icon ul li a svg {
//             width: 12px;
//             height: 12px;
//           }
//           .header-top {
//             padding: 8px 0;
//           }
//           .header-bottom-content {
//             justify-content: space-between;
//           }
//           .jk-mobile-menu {
//             max-width: 100%;
//             padding: 80px 24px 30px;
//           }
//           .jk-mobile-menu a {
//             font-size: 18px;
//             padding: 14px 0;
//           }
//         }

//         @media (max-width: 480px) {
//           .header-top .center-wr,
//           .header-bottom .center-wr {
//             padding: 0 16px;
//           }
//           .header-logo-block img {
//             height: 34px;
//           }
//           .header-call-email {
//             gap: 6px;
//           }
//           .header-call-email figure img {
//             width: 16px;
//             height: 16px;
//           }
//           .header-call-email-detail span {
//             font-size: 10px;
//           }
//           .header-call-email-detail a {
//             font-size: 10px;
//           }
//           .header-social-icon ul {
//             gap: 6px;
//           }
//           .header-social-icon ul li a {
//             width: 20px;
//             height: 20px;
//           }
//           .header-social-icon ul li a svg {
//             width: 10px;
//             height: 10px;
//           }
//           .header-bottom-content {
//             padding: 8px 0;
//           }
//           .burger span {
//             width: 22px;
//             height: 2px;
//           }
//           .jk-mobile-menu {
//             padding: 70px 20px 30px;
//           }
//           .jk-mobile-menu a {
//             font-size: 17px;
//             padding: 12px 0;
//           }
//         }
//       `}</style>

//       {/* ===== HEADER WRAPPER ===== */}
//       <div className="header-wr">
//         {/* ===== TOP BAR ===== */}
//         <div className="header-top">
//           <div className="center-wr">
//             <div className="header-top-content">
//               {/* LOGO - LEFT */}
//               <div className="header-logo-block">
//                 <Link to="/" onClick={() => setMenuOpen(false)}>
//                   <img src={logo} alt="JK Chaat Cafe" />
//                 </Link>
//               </div>

//               {/* CONTACT & SOCIAL - RIGHT */}
//               <div className="header-call-email-block">
//                 <div className="header-call-email">
//                   <figure>
//                     <img src="https://www.chaatpuchka.net/wp-content/uploads/2023/07/header_callus.svg" alt="Call Us" />
//                   </figure>
//                   <div className="header-call-email-detail">
//                     <span>Call Us:</span>
//                     <a href="tel:+919039554484">+91 90395 54484</a>
//                     <span className="comma">,</span>
//                     <a href="tel:+919039556484">+91 90395 56484</a>
//                   </div>
//                 </div>

//                 <div className="header-call-email hide-mobile">
//                   <figure>
//                     <img src="https://www.chaatpuchka.net/wp-content/uploads/2023/07/header_email.svg" alt="Email" />
//                   </figure>
//                   <div className="header-call-email-detail">
//                     <span>Email:</span>
//                     <a href="mailto:info@jkchaatcafe.com">info@jkchaatcafe.com</a>
//                   </div>
//                 </div>

//                 {/* SOCIAL ICONS */}
//                 <div className="header-social-icon">
//                   <ul>
//                     <li>
//                       <a href="#" target="_blank" aria-label="Facebook">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.516 16.086">
//                           <path d="M5.676,12.471c0,1.155,0,2.31,0,3.465,0,.125-.038.151-.156.15q-1.471-.007-2.943,0c-.123,0-.153-.034-.153-.153q.005-3.438,0-6.877c0-.247.039-.214-.22-.215-.683,0-1.367,0-2.051,0C.027,8.847,0,8.808,0,8.683Q.008,7.222,0,5.761c0-.1.029-.134.133-.132.719,0,1.438,0,2.157.006.11,0,.143-.029.141-.14-.005-.591-.008-1.181,0-1.772a4.051,4.051,0,0,1,.49-1.992A3.276,3.276,0,0,1,4.913.186,6.04,6.04,0,0,1,6.931.012C7.4.031,7.879.052,8.351.1c.082.009.1.035.1.112q0,1.17,0,2.34c0,.092-.027.119-.119.118-.515,0-1.03,0-1.545,0a1.729,1.729,0,0,0-.573.1.723.723,0,0,0-.484.552,2.048,2.048,0,0,0-.053.472c0,.56,0,1.12,0,1.679,0,.118.027.157.152.156.843-.005,1.687,0,2.53,0,.172,0,.17,0,.152.163q-.151,1.333-.3,2.665c0,.044-.016.086-.022.13-.035.253-.035.253-.3.253-.683,0-1.367,0-2.051,0-.139,0-.166.041-.166.17C5.679,10.161,5.677,11.316,5.676,12.471Z" fill="#fff"/>
//                         </svg>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" target="_blank" aria-label="Instagram">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.571 14.604">
//                           <path d="M0,11.125V3.485A.328.328,0,0,0,.025,3.4a3.19,3.19,0,0,1,.267-.939A3.926,3.926,0,0,1,4,.017c2.18-.032,4.36-.007,6.539-.007a3.96,3.96,0,0,1,1.206.185,4.02,4.02,0,0,1,2.819,3.793c.015,2.212.01,4.427,0,6.639A3.836,3.836,0,0,1,13.6,13.18,3.99,3.99,0,0,1,10.437,14.6H4.11a4.131,4.131,0,0,1-1.973-.459,4.009,4.009,0,0,1-1.888-2.1A6.551,6.551,0,0,1,0,11.125Zm7.261,2.182h.412c1.006-.005,2.015.028,3.021-.015a2.619,2.619,0,0,0,1.993-1.036,2.868,2.868,0,0,0,.589-1.873c-.005-2.032,0-4.065,0-6.1A3.559,3.559,0,0,0,13.2,3.41a2.717,2.717,0,0,0-2.232-2.065,6.666,6.666,0,0,0-1.094-.04h-5.8a2.744,2.744,0,0,0-2.8,2.809c0,.826,0,1.653,0,2.479V10.5a2.746,2.746,0,0,0,2.8,2.809c1.064.005,2.127,0,3.191,0Z" fill="#fff"/>
//                           <path d="M7.276,11.068A3.763,3.763,0,1,1,11.029,7.3a3.783,3.783,0,0,1-3.753,3.77ZM9.733,7.305A2.463,2.463,0,1,0,7.273,9.769,2.47,2.47,0,0,0,9.733,7.305Z" fill="#fff"/>
//                           <path d="M11.189,2.451a.946.946,0,1,1-.951.949.956.956,0,0,1,.951-.949Z" fill="#fff"/>
//                         </svg>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" target="_blank" aria-label="YouTube">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="17.032" height="14.194" viewBox="0 0 17.032 14.194">
//                           <path d="M4.8,12a4.26,4.26,0,0,1-1.7-.452A3.639,3.639,0,0,1,1.67,10.2a.4.4,0,0,1,.379-.628A4.176,4.176,0,0,0,2.9,9.452a6.779,6.779,0,0,1-.873-.313A3.631,3.631,0,0,1,.022,6.812a.526.526,0,0,1,.663-.647,4.276,4.276,0,0,0,.947.159,4.053,4.053,0,0,1-.8-.756A3.557,3.557,0,0,1,.244,2.334a.521.521,0,0,1,.9-.167,11.215,11.215,0,0,0,1.5,1.242A10.848,10.848,0,0,0,7.863,5.274c.392.037.379.037.331-.338a3.529,3.529,0,0,1,2.383-3.8,3.7,3.7,0,0,1,3.887.774A.3.3,0,0,0,14.772,2a8.023,8.023,0,0,0,1.514-.5c.133-.06.271-.115.385.019s.029.235-.039.35a3.937,3.937,0,0,1-1.254,1.253,5.365,5.365,0,0,0,1.05-.19c.091-.022.179-.055.271-.077a.247.247,0,0,1,.293.084.211.211,0,0,1-.042.285A6.614,6.614,0,0,1,15.779,4.3a.362.362,0,0,0-.167.34,10.132,10.132,0,0,1-2.75,7.146A9.885,9.885,0,0,1,7.127,14.9a11.054,11.054,0,0,1-6.862-.91c-.131-.063-.3-.115-.255-.3s.22-.173.369-.174A7.531,7.531,0,0,0,4.8,12Z" transform="translate(0 -0.893)" fill="#fff"/>
//                         </svg>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ===== BOTTOM NAVIGATION - CENTERED ===== */}
//         <div className="header-bottom">
//           <div className="center-wr">
//             <div className="header-bottom-content">
//               <div className="header-menu">
//                 <ul className="menu">
//                   {links.map((l) => (
//                     <li key={l.to}>
//                       <NavLink 
//                         to={l.to} 
//                         end={l.to === '/'} 
//                         className={({ isActive }) => (isActive ? 'active' : '')}
//                         onClick={() => setMenuOpen(false)}
//                       >
//                         {l.label}
//                       </NavLink>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <button 
//                 className={`burger ${menuOpen ? 'open' : ''}`} 
//                 aria-label="Menu" 
//                 onClick={() => setMenuOpen(!menuOpen)}
//               >
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ===== OVERLAY ===== */}
//       <div className={`jk-menu-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />

//       {/* ===== MOBILE MENU ===== */}
//       <div className={`jk-mobile-menu ${menuOpen ? 'open' : ''}`}>
//         {links.map((l) => (
//           <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)}>
//             {l.label}
//           </Link>
//         ))}
//         <Link
//           to="/franchise-application"
//           className="btn"
//           onClick={() => setMenuOpen(false)}
//         >
//           Contact Us
//         </Link>
//       </div>

//       {/* ===== PAGE TRANSITION ANIMATION ===== */}
//       <AnimatePresence>
//         {showTransition && (
//           <motion.div
//             className="jk-page-transition"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <motion.div
//               className="jk-transition-emojis"
//               initial={{ scale: 0.5, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.5, opacity: 0 }}
//               transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
//             >
//               {transitionEmojis.map((emoji, i) => (
//                 <motion.span
//                   key={i}
//                   initial={{ rotate: -20, scale: 0 }}
//                   animate={{ rotate: 0, scale: 1 }}
//                   transition={{ delay: i * 0.07, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
//                 >
//                   {emoji}
//                 </motion.span>
//               ))}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/img/jk-chaat-cafe-logo.png';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/franchise', label: 'Franchise' },
  { to: '/products', label: 'Products & Menu' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <>
      <style>{`
        /* ===== HEADER WRAPPER - ALWAYS TRANSPARENT ===== */
        .header-wr {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: transparent !important;
        }

        /* ===== TOP BAR - ALWAYS TRANSPARENT ===== */
        .header-top {
          background: transparent !important;
          backdrop-filter: none !important;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .header-top .center-wr {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .header-top-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .header-logo-block {
          flex-shrink: 0;
        }
        .header-logo-block a {
          display: block;
        }
        .header-logo-block img {
          height: 50px;
          width: auto;
          filter: none !important;
        }
        .header-call-email-block {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .header-call-email {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .header-call-email figure {
          margin: 0;
          flex-shrink: 0;
        }
        .header-call-email figure img {
          width: 20px;
          height: 20px;
          filter: brightness(0) invert(1);
        }
        .header-call-email-detail {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 4px;
        }
        .header-call-email-detail span {
          color: rgba(255,255,255,0.5);
          font-size: 12px;
          font-weight: 500;
        }
        .header-call-email-detail a {
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          font-size: 13px;
          transition: color 0.3s ease;
        }
        .header-call-email-detail a:hover {
          color: #FFD700;
        }
        .header-call-email-detail .comma {
          color: rgba(255,255,255,0.3);
          margin: 0 2px;
        }

        /* ===== SOCIAL ICONS - RIGHT SIDE ===== */
        .header-social-icon {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .header-social-icon ul {
          display: flex;
          align-items: center;
          gap: 12px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .header-social-icon ul li a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          transition: all 0.3s ease;
        }
        .header-social-icon ul li a:hover {
          background: #FFD700;
          transform: translateY(-2px);
        }
        .header-social-icon ul li a svg {
          width: 14px;
          height: 14px;
          fill: #fff;
          transition: fill 0.3s ease;
        }
        .header-social-icon ul li a:hover svg {
          fill: #000;
        }

        /* ===== BOTTOM NAVIGATION - ALWAYS TRANSPARENT ===== */
        .header-bottom {
          background: transparent !important;
          backdrop-filter: none !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .header-bottom .center-wr {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .header-bottom-content {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 0;
        }
        .header-menu {
          display: flex;
          align-items: center;
        }
        .header-menu .menu {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .header-menu .menu li a {
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          position: relative;
          padding: 4px 0;
          transition: color 0.3s ease;
          letter-spacing: 0.3px;
        }
        .header-menu .menu li a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 2px;
          background: #FFD700;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        .header-menu .menu li a:hover {
          color: #fff;
        }
        .header-menu .menu li a:hover::after {
          width: 100%;
        }
        .header-menu .menu li a.active {
          color: #FFD700;
        }
        .header-menu .menu li a.active::after {
          width: 100%;
        }

        /* ===== BURGER MENU ===== */
        .burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          z-index: 1001;
        }
        .burger span {
          display: block;
          width: 26px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }
        .burger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .burger.open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .burger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }
        .burger:hover span {
          background: #FFD700;
        }

        /* ===== MOBILE MENU ===== */
        .jk-mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          max-width: 400px;
          height: 100vh;
          background: rgba(10,10,10,0.98);
          backdrop-filter: blur(20px);
          padding: 90px 32px 40px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          transition: right 0.4s cubic-bezier(0.22,1,0.36,1);
          z-index: 999;
          border-left: 1px solid rgba(255,215,0,0.05);
          overflow-y: auto;
        }
        .jk-mobile-menu.open {
          right: 0;
        }
        .jk-mobile-menu a {
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          font-size: 20px;
          font-weight: 500;
          padding: 16px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: all 0.3s ease;
        }
        .jk-mobile-menu a:last-of-type {
          border-bottom: none;
        }
        .jk-mobile-menu a:hover {
          color: #FFD700;
          padding-left: 12px;
        }
        .jk-mobile-menu .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 24px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          margin-top: 24px;
          background: #FFD700;
          color: #000;
          border: none;
          cursor: pointer;
          width: 100%;
          transition: all 0.3s ease;
        }
        .jk-mobile-menu .btn:hover {
          background: #F4C430;
          transform: translateY(-2px);
        }

        /* ===== OVERLAY ===== */
        .jk-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          z-index: 998;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s ease;
        }
        .jk-menu-overlay.open {
          opacity: 1;
          visibility: visible;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .header-top .center-wr,
          .header-bottom .center-wr {
            padding: 0 24px;
          }
          .header-call-email-block {
            gap: 16px;
          }
        }

        @media (max-width: 820px) {
          .header-menu .menu {
            display: none;
          }
          .burger {
            display: flex;
          }
          .header-logo-block img {
            height: 40px;
          }
          .header-call-email-block {
            gap: 10px;
          }
          .header-call-email-detail span {
            font-size: 11px;
          }
          .header-call-email-detail a {
            font-size: 11px;
          }
          .header-social-icon ul li a {
            width: 24px;
            height: 24px;
          }
          .header-social-icon ul li a svg {
            width: 12px;
            height: 12px;
          }
          .header-top {
            padding: 8px 0;
          }
          .header-bottom-content {
            justify-content: space-between;
          }
          .jk-mobile-menu {
            max-width: 100%;
            padding: 80px 24px 30px;
          }
          .jk-mobile-menu a {
            font-size: 18px;
            padding: 14px 0;
          }
        }

        @media (max-width: 480px) {
          .header-top .center-wr,
          .header-bottom .center-wr {
            padding: 0 16px;
          }
          .header-logo-block img {
            height: 34px;
          }
          .header-call-email {
            gap: 6px;
          }
          .header-call-email figure img {
            width: 16px;
            height: 16px;
          }
          .header-call-email-detail span {
            font-size: 10px;
          }
          .header-call-email-detail a {
            font-size: 10px;
          }
          .header-social-icon ul {
            gap: 6px;
          }
          .header-social-icon ul li a {
            width: 20px;
            height: 20px;
          }
          .header-social-icon ul li a svg {
            width: 10px;
            height: 10px;
          }
          .header-bottom-content {
            padding: 8px 0;
          }
          .burger span {
            width: 22px;
            height: 2px;
          }
          .jk-mobile-menu {
            padding: 70px 20px 30px;
          }
          .jk-mobile-menu a {
            font-size: 17px;
            padding: 12px 0;
          }
        }
      `}</style>

      {/* ===== HEADER WRAPPER ===== */}
      <div className="header-wr">
        {/* ===== TOP BAR ===== */}
        <div className="header-top">
          <div className="center-wr">
            <div className="header-top-content">
              {/* LOGO - LEFT */}
              <div className="header-logo-block">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  <img src={logo} alt="JK Chaat Cafe" />
                </Link>
              </div>

              {/* CONTACT & SOCIAL - RIGHT */}
              <div className="header-call-email-block">
                <div className="header-call-email">
                  <figure>
                    <img src="https://www.chaatpuchka.net/wp-content/uploads/2023/07/header_callus.svg" alt="Call Us" />
                  </figure>
                  <div className="header-call-email-detail">
                    <span>Call Us:</span>
                    <a href="tel:+919039554484">+91 90395 54484</a>
                    <span className="comma">,</span>
                    <a href="tel:+919039556484">+91 90395 56484</a>
                  </div>
                </div>

                <div className="header-call-email hide-mobile">
                  <figure>
                    <img src="https://www.chaatpuchka.net/wp-content/uploads/2023/07/header_email.svg" alt="Email" />
                  </figure>
                  <div className="header-call-email-detail">
                    <span>Email:</span>
                    <a href="mailto:info@jkchaatcafe.com">info@jkchaatcafe.com</a>
                  </div>
                </div>

                {/* SOCIAL ICONS */}
                <div className="header-social-icon">
                  <ul>
                    <li>
                      <a href="#" target="_blank" aria-label="Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.516 16.086">
                          <path d="M5.676,12.471c0,1.155,0,2.31,0,3.465,0,.125-.038.151-.156.15q-1.471-.007-2.943,0c-.123,0-.153-.034-.153-.153q.005-3.438,0-6.877c0-.247.039-.214-.22-.215-.683,0-1.367,0-2.051,0C.027,8.847,0,8.808,0,8.683Q.008,7.222,0,5.761c0-.1.029-.134.133-.132.719,0,1.438,0,2.157.006.11,0,.143-.029.141-.14-.005-.591-.008-1.181,0-1.772a4.051,4.051,0,0,1,.49-1.992A3.276,3.276,0,0,1,4.913.186,6.04,6.04,0,0,1,6.931.012C7.4.031,7.879.052,8.351.1c.082.009.1.035.1.112q0,1.17,0,2.34c0,.092-.027.119-.119.118-.515,0-1.03,0-1.545,0a1.729,1.729,0,0,0-.573.1.723.723,0,0,0-.484.552,2.048,2.048,0,0,0-.053.472c0,.56,0,1.12,0,1.679,0,.118.027.157.152.156.843-.005,1.687,0,2.53,0,.172,0,.17,0,.152.163q-.151,1.333-.3,2.665c0,.044-.016.086-.022.13-.035.253-.035.253-.3.253-.683,0-1.367,0-2.051,0-.139,0-.166.041-.166.17C5.679,10.161,5.677,11.316,5.676,12.471Z" fill="#fff"/>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.571 14.604">
                          <path d="M0,11.125V3.485A.328.328,0,0,0,.025,3.4a3.19,3.19,0,0,1,.267-.939A3.926,3.926,0,0,1,4,.017c2.18-.032,4.36-.007,6.539-.007a3.96,3.96,0,0,1,1.206.185,4.02,4.02,0,0,1,2.819,3.793c.015,2.212.01,4.427,0,6.639A3.836,3.836,0,0,1,13.6,13.18,3.99,3.99,0,0,1,10.437,14.6H4.11a4.131,4.131,0,0,1-1.973-.459,4.009,4.009,0,0,1-1.888-2.1A6.551,6.551,0,0,1,0,11.125Zm7.261,2.182h.412c1.006-.005,2.015.028,3.021-.015a2.619,2.619,0,0,0,1.993-1.036,2.868,2.868,0,0,0,.589-1.873c-.005-2.032,0-4.065,0-6.1A3.559,3.559,0,0,0,13.2,3.41a2.717,2.717,0,0,0-2.232-2.065,6.666,6.666,0,0,0-1.094-.04h-5.8a2.744,2.744,0,0,0-2.8,2.809c0,.826,0,1.653,0,2.479V10.5a2.746,2.746,0,0,0,2.8,2.809c1.064.005,2.127,0,3.191,0Z" fill="#fff"/>
                          <path d="M7.276,11.068A3.763,3.763,0,1,1,11.029,7.3a3.783,3.783,0,0,1-3.753,3.77ZM9.733,7.305A2.463,2.463,0,1,0,7.273,9.769,2.47,2.47,0,0,0,9.733,7.305Z" fill="#fff"/>
                          <path d="M11.189,2.451a.946.946,0,1,1-.951.949.956.956,0,0,1,.951-.949Z" fill="#fff"/>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" aria-label="YouTube">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17.032" height="14.194" viewBox="0 0 17.032 14.194">
                          <path d="M4.8,12a4.26,4.26,0,0,1-1.7-.452A3.639,3.639,0,0,1,1.67,10.2a.4.4,0,0,1,.379-.628A4.176,4.176,0,0,0,2.9,9.452a6.779,6.779,0,0,1-.873-.313A3.631,3.631,0,0,1,.022,6.812a.526.526,0,0,1,.663-.647,4.276,4.276,0,0,0,.947.159,4.053,4.053,0,0,1-.8-.756A3.557,3.557,0,0,1,.244,2.334a.521.521,0,0,1,.9-.167,11.215,11.215,0,0,0,1.5,1.242A10.848,10.848,0,0,0,7.863,5.274c.392.037.379.037.331-.338a3.529,3.529,0,0,1,2.383-3.8,3.7,3.7,0,0,1,3.887.774.3.3,0,0,0,.307.112,8.023,8.023,0,0,0,1.514-.5c.133-.06.271-.115.385.019s.029.235-.039.35a3.937,3.937,0,0,1-1.254,1.253,5.365,5.365,0,0,0,1.05-.19c.091-.022.179-.055.271-.077a.247.247,0,0,1,.293.084.211.211,0,0,1-.042.285A6.614,6.614,0,0,1,15.779,4.3a.362.362,0,0,0-.167.34,10.132,10.132,0,0,1-2.75,7.146A9.885,9.885,0,0,1,7.127,14.9a11.054,11.054,0,0,1-6.862-.91c-.131-.063-.3-.115-.255-.3s.22-.173.369-.174A7.531,7.531,0,0,0,4.8,12Z" transform="translate(0 -0.893)" fill="#fff"/>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== BOTTOM NAVIGATION - CENTERED ===== */}
        <div className="header-bottom">
          <div className="center-wr">
            <div className="header-bottom-content">
              <div className="header-menu">
                <ul className="menu">
                  {links.map((l) => (
                    <li key={l.to}>
                      <NavLink 
                        to={l.to} 
                        end={l.to === '/'} 
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        onClick={() => setMenuOpen(false)}
                      >
                        {l.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                className={`burger ${menuOpen ? 'open' : ''}`} 
                aria-label="Menu" 
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== OVERLAY ===== */}
      <div className={`jk-menu-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />

      {/* ===== MOBILE MENU ===== */}
      <div className={`jk-mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map((l) => (
          <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link
          to="/franchise-application"
          className="btn"
          onClick={() => setMenuOpen(false)}
        >
          Contact Us
        </Link>
      </div>
    </>
  );
}