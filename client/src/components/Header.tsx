// import { useEffect, useState } from 'react';
// import { NavLink, Link } from 'react-router-dom';
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

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? 'hidden' : '';
//   }, [menuOpen]);

//   return (
//     <>
//       {/* Self-contained overrides so this file can be dropped in without touching styles.css */}
//       <style>{`
//         .jk-header { padding: 10px 0; }
//         .jk-header .nav-wrap { height: 68px; }

//         .jk-header .brand { margin-left: -6px; }
//         .jk-header .brand img { height: 34px; width: auto; }

//         .jk-header .nav-links { gap: 20px; }
//         .jk-header .nav-links a { font-size: 13.5px; white-space: nowrap; }

//         .jk-header .nav-cta { gap: 10px; }
//         .jk-header .btn {
//           padding: 9px 18px;
//           font-size: 13px;
//           gap: 6px;
//         }
//         .jk-header .btn svg { width: 13px; height: 13px; }

//         .jk-mobile-menu .btn { padding: 12px 20px; font-size: 14px; }
//         .jk-mobile-menu a { font-size: 19px; }

//         /* Tablet: trim spacing further, drop secondary CTA before it gets cramped */
//         @media (max-width: 1180px) {
//           .jk-header .nav-links { gap: 14px; }
//           .jk-header .nav-links a { font-size: 13px; }
//           .jk-header .nav-cta .btn-ghost { display: none; }
//         }

//         @media (max-width: 980px) {
//           .jk-header .nav-links { gap: 10px; }
//           .jk-header .nav-links a span.short { display: inline; }
//         }

//         /* Mobile: nav collapses into burger (breakpoint matches global CSS) */
//         @media (max-width: 720px) {
//           .jk-header .nav-wrap { height: 60px; }
//           .jk-header .brand img { height: 30px; }
//         }
//       `}</style>

//       <header id="siteHeader" className={`jk-header ${scrolled ? 'scrolled' : ''}`}>
//         <div className="container nav-wrap">
//           <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
//             <img src={logo} alt="JK Chaat Cafe" />
//           </Link>

//           <nav className="nav-links">
//             {links.map((l) => (
//               <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
//                 {l.label === 'Products & Menu' ? (
//                   <>
//                     <span className="full">Products & Menu</span>
//                     <span className="short" style={{ display: 'none' }}>Products</span>
//                   </>
//                 ) : (
//                   l.label
//                 )}
//               </NavLink>
//             ))}
//           </nav>

//           <div className="nav-cta">
//             <Link to="/contact" className="btn btn-ghost">Talk to an Expert</Link>
//             <Link to="/franchise-application" className="btn btn-primary">
//               Apply for Franchise
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
//             </Link>
//           </div>

//           <button className="burger" aria-label="Menu" onClick={() => setMenuOpen((o) => !o)}>
//             <span></span><span></span><span></span>
//           </button>
//         </div>
//       </header>

//       <div className={`mobile-menu jk-mobile-menu ${menuOpen ? 'open' : ''}`}>
//         {links.map((l) => (
//           <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)}>{l.label}</Link>
//         ))}
//         <Link
//           to="/franchise-application"
//           className="btn btn-primary"
//           style={{ justifyContent: 'center', marginTop: 10 }}
//           onClick={() => setMenuOpen(false)}
//         >
//           Apply for Franchise
//         </Link>
//       </div>
//     </>
//   );
// }

// import { useEffect, useState } from 'react';
// import { NavLink, Link } from 'react-router-dom';
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

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? 'hidden' : '';
//   }, [menuOpen]);

//   return (
//     <>
//       <style>{`
//         /* ===== HEADER - RELATIVE POSITION ===== */
//         #siteHeader {
//           position: relative;
//           top: 0;
//           left: 0;
//           right: 0;
//           z-index: 1000;
//           background: transparent;
//           transition: all 0.4s ease;
//           padding: 16px 0;
//           width: 100%;
//         }

//         #siteHeader.scrolled {
//           position: fixed;
//           background: rgba(10, 10, 10, 0.92);
//           backdrop-filter: blur(20px);
//           border-bottom: 1px solid rgba(255, 215, 0, 0.08);
//           padding: 10px 0;
//           box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
//           animation: slideDown 0.4s ease;
//         }

//         @keyframes slideDown {
//           from { transform: translateY(-100%); }
//           to { transform: translateY(0); }
//         }

//         #siteHeader .nav-wrap {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 20px;
//         }

//         /* ===== LOGO ===== */
//         #siteHeader .brand {
//           display: flex;
//           align-items: center;
//           text-decoration: none;
//           flex-shrink: 0;
//         }

//         #siteHeader .brand img {
//           height: 40px;
//           width: auto;
//           transition: height 0.3s ease;
//           /* FILTER HATA DIYA - ORIGINAL COLOR */
//         }

//         #siteHeader.scrolled .brand img {
//           height: 36px;
//         }

//         /* ===== NAV LINKS ===== */
//         #siteHeader .nav-links {
//           display: flex;
//           align-items: center;
//           gap: 28px;
//           margin: 0 20px;
//         }

//         #siteHeader .nav-links a {
//           color: rgba(255, 255, 255, 0.7);
//           text-decoration: none;
//           font-size: 14px;
//           font-weight: 500;
//           position: relative;
//           transition: all 0.3s ease;
//           padding: 4px 0;
//           white-space: nowrap;
//         }

//         #siteHeader .nav-links a::after {
//           content: '';
//           position: absolute;
//           bottom: -2px;
//           left: 50%;
//           width: 0;
//           height: 2px;
//           background: #FFD700;
//           transition: all 0.3s ease;
//           transform: translateX(-50%);
//           border-radius: 2px;
//         }

//         #siteHeader .nav-links a:hover {
//           color: #FFFFFF;
//         }

//         #siteHeader .nav-links a:hover::after {
//           width: 100%;
//         }

//         #siteHeader .nav-links a.active {
//           color: #FFD700;
//         }

//         #siteHeader .nav-links a.active::after {
//           width: 100%;
//         }

//         /* ===== CTA BUTTONS ===== */
//         #siteHeader .nav-cta {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           flex-shrink: 0;
//         }

//         #siteHeader .btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 10px 20px;
//           border-radius: 8px;
//           font-size: 13px;
//           font-weight: 600;
//           text-decoration: none;
//           transition: all 0.3s ease;
//           cursor: pointer;
//           border: none;
//           white-space: nowrap;
//         }

//         #siteHeader .btn-ghost {
//           background: rgba(255, 255, 255, 0.06);
//           color: #FFFFFF;
//           border: 1px solid rgba(255, 255, 255, 0.1);
//         }

//         #siteHeader .btn-ghost:hover {
//           background: rgba(255, 255, 255, 0.12);
//           border-color: rgba(255, 255, 255, 0.2);
//         }

//         #siteHeader .btn-primary {
//           background: #FFD700;
//           color: #000000;
//           border: 1px solid #FFD700;
//           box-shadow: 0 4px 16px rgba(255, 215, 0, 0.15);
//         }

//         #siteHeader .btn-primary:hover {
//           background: #F4C430;
//           border-color: #F4C430;
//           box-shadow: 0 8px 24px rgba(255, 215, 0, 0.25);
//         }

//         #siteHeader .btn svg {
//           width: 14px;
//           height: 14px;
//         }

//         /* ===== BURGER MENU ===== */
//         #siteHeader .burger {
//           display: none;
//           flex-direction: column;
//           gap: 5px;
//           background: none;
//           border: none;
//           cursor: pointer;
//           padding: 4px;
//         }

//         #siteHeader .burger span {
//           display: block;
//           width: 26px;
//           height: 2.5px;
//           background: #FFFFFF;
//           border-radius: 3px;
//           transition: all 0.3s ease;
//           transform-origin: center;
//         }

//         #siteHeader .burger.open span:nth-child(1) {
//           transform: rotate(45deg) translate(5px, 5px);
//         }

//         #siteHeader .burger.open span:nth-child(2) {
//           opacity: 0;
//           transform: scaleX(0);
//         }

//         #siteHeader .burger.open span:nth-child(3) {
//           transform: rotate(-45deg) translate(5px, -5px);
//         }

//         #siteHeader .burger:hover span {
//           background: #FFD700;
//         }

//         /* ===== MOBILE DROPDOWN ===== */
//         .jk-mobile-menu {
//           position: fixed;
//           top: 0;
//           right: -100%;
//           width: 320px;
//           height: 100vh;
//           background: rgba(10, 10, 10, 0.98);
//           backdrop-filter: blur(20px);
//           padding: 80px 30px 40px;
//           display: flex;
//           flex-direction: column;
//           gap: 6px;
//           transition: right 0.4s ease;
//           z-index: 999;
//           border-left: 1px solid rgba(255, 215, 0, 0.05);
//           overflow-y: auto;
//         }

//         .jk-mobile-menu.open {
//           right: 0;
//         }

//         .jk-mobile-menu a {
//           color: rgba(255, 255, 255, 0.8);
//           text-decoration: none;
//           font-size: 18px;
//           font-weight: 500;
//           padding: 12px 0;
//           border-bottom: 1px solid rgba(255, 255, 255, 0.04);
//           transition: all 0.3s ease;
//         }

//         .jk-mobile-menu a:hover {
//           color: #FFD700;
//           padding-left: 8px;
//         }

//         .jk-mobile-menu .btn {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 10px;
//           padding: 14px 24px;
//           border-radius: 10px;
//           font-size: 15px;
//           font-weight: 600;
//           text-decoration: none;
//           margin-top: 16px;
//           background: #FFD700;
//           color: #000000;
//           border: none;
//           cursor: pointer;
//           width: 100%;
//           transition: all 0.3s ease;
//         }

//         .jk-mobile-menu .btn:hover {
//           background: #F4C430;
//         }

//         /* ===== OVERLAY ===== */
//         .jk-menu-overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: rgba(0, 0, 0, 0.5);
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
//           #siteHeader .nav-links {
//             gap: 18px;
//           }
//           #siteHeader .nav-links a {
//             font-size: 13px;
//           }
//           #siteHeader .nav-cta .btn-ghost {
//             display: none;
//           }
//           #siteHeader .btn-primary {
//             padding: 8px 16px;
//             font-size: 12px;
//           }
//         }

//         @media (max-width: 820px) {
//           #siteHeader .nav-links {
//             display: none;
//           }
//           #siteHeader .nav-cta {
//             display: none;
//           }
//           #siteHeader .burger {
//             display: flex;
//           }
//           #siteHeader .brand img {
//             height: 34px;
//           }
//           #siteHeader.scrolled .brand img {
//             height: 30px;
//           }
//         }

//         @media (max-width: 480px) {
//           #siteHeader {
//             padding: 12px 0;
//           }
//           #siteHeader.scrolled {
//             padding: 8px 0;
//           }
//           #siteHeader .brand img {
//             height: 30px;
//           }
//           #siteHeader.scrolled .brand img {
//             height: 26px;
//           }
//           #siteHeader .nav-wrap {
//             padding: 0 16px;
//           }
//           .jk-mobile-menu {
//             width: 100%;
//             padding: 70px 24px 30px;
//           }
//           .jk-mobile-menu a {
//             font-size: 17px;
//           }
//         }
//       `}</style>

//       <header id="siteHeader" className={`jk-header ${scrolled ? 'scrolled' : ''}`}>
//         <div className="nav-wrap">
//           <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
//             <img src={logo} alt="JK Chaat Cafe" />
//           </Link>

//           <nav className="nav-links">
//             {links.map((l) => (
//               <NavLink 
//                 key={l.to} 
//                 to={l.to} 
//                 end={l.to === '/'} 
//                 className={({ isActive }) => (isActive ? 'active' : '')}
//               >
//                 {l.label}
//               </NavLink>
//             ))}
//           </nav>

//           <div className="nav-cta">
//             <Link to="/contact" className="btn btn-ghost">Talk to an Expert</Link>
//             <Link to="/franchise-application" className="btn btn-primary">
//               Apply for Franchise
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
//                 <path d="M5 12h14M13 5l7 7-7 7" />
//               </svg>
//             </Link>
//           </div>

//           <button 
//             className={`burger ${menuOpen ? 'open' : ''}`} 
//             aria-label="Menu" 
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </button>
//         </div>
//       </header>

//       <div className={`jk-menu-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />

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
//           Apply for Franchise
//         </Link>
//       </div>
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

// Food emojis for page transition only
const foodEmojis = ['🍕', '🍔', '🌮', '🥙', '☕', '🧋', '🍦', '🥤', '🍟', '🌭'];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [showTransition, setShowTransition] = useState(false);
  const [transitionEmojis, setTransitionEmojis] = useState<string[]>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  // Page transition effect on route change
  useEffect(() => {
    setShowTransition(true);
    const shuffled = [...foodEmojis].sort(() => 0.5 - Math.random());
    setTransitionEmojis(shuffled.slice(0, 6));
    const timer = setTimeout(() => setShowTransition(false), 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <style>{`
        /* ===== HEADER - FULL WIDTH ===== */
        #siteHeader {
          position: relative;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: transparent;
          transition: all 0.4s ease;
          padding: 16px 0;
          width: 100%;
        }

        #siteHeader.scrolled {
          position: fixed;
          background: rgba(10, 10, 10, 0.92);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 215, 0, 0.08);
          padding: 10px 0;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
          animation: slideDown 0.4s ease;
        }

        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }

        #siteHeader .nav-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* ===== LOGO ===== */
        #siteHeader .brand {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }

        #siteHeader .brand img {
          height: 44px;
          width: auto;
          transition: height 0.3s ease;
        }

        #siteHeader.scrolled .brand img {
          height: 38px;
        }

        /* ===== NAV LINKS ===== */
        #siteHeader .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          margin: 0 20px;
        }

        #siteHeader .nav-links a {
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          position: relative;
          transition: all 0.3s ease;
          padding: 6px 0;
          white-space: nowrap;
        }

        #siteHeader .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 2.5px;
          background: #FFD700;
          transition: all 0.3s ease;
          transform: translateX(-50%);
          border-radius: 2px;
        }

        #siteHeader .nav-links a:hover {
          color: #FFFFFF;
        }

        #siteHeader .nav-links a:hover::after {
          width: 100%;
        }

        #siteHeader .nav-links a.active {
          color: #FFD700;
        }

        #siteHeader .nav-links a.active::after {
          width: 100%;
        }

        /* ===== CTA BUTTON ===== */
        #siteHeader .nav-cta {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        #siteHeader .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 28px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
          white-space: nowrap;
          background: #FFD700;
          color: #000000;
          border: 1px solid #FFD700;
          box-shadow: 0 4px 20px rgba(255, 215, 0, 0.2);
        }

        #siteHeader .btn-primary:hover {
          background: #F4C430;
          border-color: #F4C430;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(255, 215, 0, 0.35);
        }

        #siteHeader .btn-primary svg {
          width: 16px;
          height: 16px;
          transition: transform 0.3s ease;
        }

        #siteHeader .btn-primary:hover svg {
          transform: translateX(4px);
        }

        /* ===== BURGER MENU ===== */
        #siteHeader .burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }

        #siteHeader .burger span {
          display: block;
          width: 28px;
          height: 2.5px;
          background: #FFFFFF;
          border-radius: 3px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        #siteHeader .burger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        #siteHeader .burger.open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }

        #siteHeader .burger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        #siteHeader .burger:hover span {
          background: #FFD700;
        }

        /* ===== MOBILE DROPDOWN ===== */
        .jk-mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 340px;
          height: 100vh;
          background: rgba(10, 10, 10, 0.98);
          backdrop-filter: blur(20px);
          padding: 80px 32px 40px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          transition: right 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          z-index: 999;
          border-left: 1px solid rgba(255, 215, 0, 0.05);
          overflow-y: auto;
        }

        .jk-mobile-menu.open {
          right: 0;
        }

        .jk-mobile-menu a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 20px;
          font-weight: 500;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          transition: all 0.3s ease;
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
          margin-top: 20px;
          background: #FFD700;
          color: #000000;
          border: none;
          cursor: pointer;
          width: 100%;
          transition: all 0.3s ease;
        }

        .jk-mobile-menu .btn:hover {
          background: #F4C430;
          transform: translateY(-2px);
        }

        .jk-mobile-menu .btn svg {
          width: 18px;
          height: 18px;
          transition: transform 0.3s ease;
        }

        .jk-mobile-menu .btn:hover svg {
          transform: translateX(4px);
        }

        /* ===== OVERLAY ===== */
        .jk-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
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

        /* ===== PAGE TRANSITION OVERLAY ===== */
        .jk-page-transition {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 9999;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(10, 10, 10, 0.7);
          backdrop-filter: blur(8px);
        }

        .jk-transition-emojis {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          font-size: 60px;
          animation: emojiPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .jk-transition-emojis span {
          animation: emojiFloat 0.8s ease-in-out infinite alternate;
        }

        .jk-transition-emojis span:nth-child(1) { animation-delay: 0s; }
        .jk-transition-emojis span:nth-child(2) { animation-delay: 0.1s; }
        .jk-transition-emojis span:nth-child(3) { animation-delay: 0.2s; }
        .jk-transition-emojis span:nth-child(4) { animation-delay: 0.3s; }
        .jk-transition-emojis span:nth-child(5) { animation-delay: 0.4s; }
        .jk-transition-emojis span:nth-child(6) { animation-delay: 0.5s; }

        @keyframes emojiPop {
          0% { transform: scale(0) rotate(-20deg); opacity: 0; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }

        @keyframes emojiFloat {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(10deg); }
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          #siteHeader .nav-wrap {
            padding: 0 24px;
          }
          #siteHeader .nav-links {
            gap: 18px;
          }
          #siteHeader .nav-links a {
            font-size: 13px;
          }
        }

        @media (max-width: 820px) {
          #siteHeader .nav-links {
            display: none;
          }
          #siteHeader .burger {
            display: flex;
          }
          #siteHeader .brand img {
            height: 36px;
          }
          #siteHeader.scrolled .brand img {
            height: 32px;
          }
          #siteHeader .nav-wrap {
            padding: 0 20px;
          }
        }

        @media (max-width: 480px) {
          #siteHeader {
            padding: 12px 0;
          }
          #siteHeader.scrolled {
            padding: 8px 0;
          }
          #siteHeader .brand img {
            height: 32px;
          }
          #siteHeader.scrolled .brand img {
            height: 28px;
          }
          #siteHeader .nav-wrap {
            padding: 0 16px;
          }
          .jk-mobile-menu {
            width: 100%;
            padding: 70px 24px 30px;
          }
          .jk-mobile-menu a {
            font-size: 18px;
          }
          .jk-transition-emojis {
            font-size: 40px;
            gap: 14px;
          }
        }
      `}</style>

      {/* ===== PAGE TRANSITION ANIMATION ===== */}
      <AnimatePresence>
        {showTransition && (
          <motion.div
            className="jk-page-transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="jk-transition-emojis"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            >
              {transitionEmojis.map((emoji, i) => (
                <motion.span
                  key={i}
                  initial={{ rotate: -20, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <header id="siteHeader" className={`jk-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-wrap">
          <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="JK Chaat Cafe" />
          </Link>

          <nav className="nav-links">
            {links.map((l) => (
              <NavLink 
                key={l.to} 
                to={l.to} 
                end={l.to === '/'} 
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-cta">
            <Link to="/franchise-application" className="btn btn-primary">
              Apply for Franchise
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
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
      </header>

      <div className={`jk-menu-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />

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
          Apply for Franchise
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </>
  );
}



