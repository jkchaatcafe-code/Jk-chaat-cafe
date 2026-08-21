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
        /* ===== HEADER WRAPPER - TRANSPARENT BACKGROUND ===== */
        .header-wr {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: transparent !important;
          backdrop-filter: none !important;
          border-bottom: none !important;
          padding: 0;
          transition: all 0.3s ease;
        }

        /* ===== WHEN SCROLLED - SLIGHTLY DARKER BUT STILL TRANSPARENT ===== */
        .header-wr.scrolled {
          background: rgba(0,0,0,0.4) !important;
          backdrop-filter: blur(8px) !important;
          border-bottom: 1px solid rgba(255, 215, 0, 0.05) !important;
        }

        /* ===== TOP BAR - INCREASED HEIGHT ===== */
        .header-top {
          background: transparent !important;
          padding: 14px 0 10px 0;
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
          height: 48px;
          width: auto;
          /* NO FILTER - ORIGINAL COLOR */
        }

        /* ===== CONTACT & SOCIAL - INCREASED SIZE ===== */
        .header-call-email-block {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        /* ===== CALL ICON - INCREASED SIZE ===== */
        .header-call-email {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .header-call-email .call-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .header-call-email .call-icon svg {
          width: 24px;
          height: 24px;
          fill: #fff;
        }
        .header-call-email-detail {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 4px;
        }
        .header-call-email-detail span {
          color: rgba(255,255,255,0.6);
          font-size: 13px;
          font-weight: 500;
        }
        .header-call-email-detail a {
          color: rgba(255,255,255,0.9);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        .header-call-email-detail a:hover {
          color: #FFD700;
        }
        .header-call-email-detail .comma {
          color: rgba(255,255,255,0.3);
          margin: 0 2px;
        }

        /* ===== EMAIL ICON - INCREASED SIZE ===== */
        .header-email-icon {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .header-email-icon .email-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #EA4335;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .header-email-icon .email-icon svg {
          width: 24px;
          height: 24px;
          fill: #fff;
        }

        /* ===== SOCIAL ICONS - INCREASED SIZE ===== */
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
          width: 42px;
          height: 42px;
          border-radius: 50%;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .header-social-icon ul li a:hover {
          transform: translateY(-3px) scale(1.1);
        }
        .header-social-icon ul li a svg {
          width: 22px;
          height: 22px;
          fill: #fff;
        }

        /* Facebook */
        .header-social-icon ul li a.fb {
          background: #1877F2;
        }
        .header-social-icon ul li a.fb:hover {
          background: #0d65d9;
          box-shadow: 0 4px 15px rgba(24, 119, 242, 0.4);
        }

        /* Instagram */
        .header-social-icon ul li a.insta {
          background: radial-gradient(circle at 30% 110%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
        }
        .header-social-icon ul li a.insta:hover {
          box-shadow: 0 4px 15px rgba(214, 36, 159, 0.4);
        }

        /* YouTube */
        .header-social-icon ul li a.yt {
          background: #FF0000;
        }
        .header-social-icon ul li a.yt:hover {
          background: #cc0000;
          box-shadow: 0 4px 15px rgba(255, 0, 0, 0.4);
        }

        /* WhatsApp */
        .header-social-icon ul li a.wa {
          background: #25D366;
        }
        .header-social-icon ul li a.wa:hover {
          background: #1da851;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
        }

        /* ===== BOTTOM NAVIGATION - INCREASED SIZE ===== */
        .header-bottom {
          background: transparent !important;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
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
          padding: 6px 0;
          transition: color 0.3s ease;
          letter-spacing: 0.5px;
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

        /* ===== BURGER MENU - INCREASED SIZE ===== */
        .burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          z-index: 1001;
        }
        .burger span {
          display: block;
          width: 28px;
          height: 2.5px;
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
          max-width: 360px;
          height: 100vh;
          background: rgba(10,10,10,0.98);
          backdrop-filter: blur(20px);
          padding: 100px 28px 40px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          transition: right 0.35s cubic-bezier(0.22,1,0.36,1);
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
          font-size: 18px;
          font-weight: 500;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .jk-mobile-menu a:last-of-type {
          border-bottom: none;
        }
        .jk-mobile-menu a:hover {
          color: #FFD700;
          padding-left: 8px;
        }
        .jk-mobile-menu a::after {
          content: '→';
          opacity: 0.3;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        .jk-mobile-menu a:hover::after {
          opacity: 1;
          transform: translateX(4px);
        }
        .jk-mobile-menu .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 20px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          margin-top: 20px;
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
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(3px);
          z-index: 998;
          opacity: 0;
          visibility: hidden;
          transition: all 0.35s ease;
        }
        .jk-menu-overlay.open {
          opacity: 1;
          visibility: visible;
        }

        /* ===== WHATSAPP FLOATING BUTTON ===== */
        .wa-float {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 999;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .wa-float:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 30px rgba(37, 211, 102, 0.6);
        }
        .wa-float svg {
          width: 32px;
          height: 32px;
          fill: #fff;
        }

        /* ============================================
                   FULLY RESPONSIVE
           ============================================ */

        /* --- 1024px to 1200px --- */
        @media (max-width: 1200px) {
          .header-top .center-wr,
          .header-bottom .center-wr {
            padding: 0 32px;
          }
          .header-menu .menu {
            gap: 28px;
          }
          .header-menu .menu li a {
            font-size: 13px;
          }
          .header-logo-block img {
            height: 44px;
          }
        }

        /* --- 992px to 1024px --- */
        @media (max-width: 1024px) {
          .header-top .center-wr,
          .header-bottom .center-wr {
            padding: 0 24px;
          }
          .header-menu .menu {
            gap: 22px;
          }
          .header-menu .menu li a {
            font-size: 12.5px;
          }
          .header-logo-block img {
            height: 42px;
          }
          .header-call-email-block {
            gap: 18px;
          }
          .header-call-email .call-icon,
          .header-email-icon .email-icon {
            width: 40px;
            height: 40px;
          }
          .header-call-email .call-icon svg,
          .header-email-icon .email-icon svg {
            width: 22px;
            height: 22px;
          }
          .header-social-icon ul li a {
            width: 38px;
            height: 38px;
          }
          .header-social-icon ul li a svg {
            width: 20px;
            height: 20px;
          }
          .header-call-email-detail span {
            font-size: 12px;
          }
          .header-call-email-detail a {
            font-size: 13px;
          }
        }

        /* --- 820px to 992px --- */
        @media (max-width: 992px) {
          .header-menu .menu {
            gap: 18px;
          }
          .header-menu .menu li a {
            font-size: 12px;
          }
          .header-logo-block img {
            height: 40px;
          }
          .header-call-email-block {
            gap: 14px;
          }
          .header-call-email .call-icon,
          .header-email-icon .email-icon {
            width: 38px;
            height: 38px;
          }
          .header-call-email .call-icon svg,
          .header-email-icon .email-icon svg {
            width: 20px;
            height: 20px;
          }
          .header-social-icon ul li a {
            width: 36px;
            height: 36px;
          }
          .header-social-icon ul li a svg {
            width: 18px;
            height: 18px;
          }
        }

        /* --- 768px to 820px --- */
        @media (max-width: 820px) {
          .header-menu .menu {
            display: none;
          }
          .burger {
            display: flex;
          }
          .header-logo-block img {
            height: 36px;
          }
          .header-top {
            padding: 12px 0 8px 0;
          }
          .header-bottom-content {
            justify-content: space-between;
          }
          .header-call-email-block {
            gap: 12px;
          }
          .header-call-email .call-icon,
          .header-email-icon .email-icon {
            width: 36px;
            height: 36px;
          }
          .header-call-email .call-icon svg,
          .header-email-icon .email-icon svg {
            width: 18px;
            height: 18px;
          }
          .header-call-email-detail span {
            font-size: 11px;
          }
          .header-call-email-detail a {
            font-size: 12px;
          }
          .header-social-icon ul li a {
            width: 34px;
            height: 34px;
          }
          .header-social-icon ul li a svg {
            width: 17px;
            height: 17px;
          }
          .header-social-icon ul {
            gap: 8px;
          }
          .jk-mobile-menu {
            max-width: 100%;
            padding: 100px 24px 30px;
          }
          .jk-mobile-menu a {
            font-size: 17px;
            padding: 12px 0;
          }
          .wa-float {
            width: 50px;
            height: 50px;
            bottom: 20px;
            right: 20px;
          }
          .wa-float svg {
            width: 26px;
            height: 26px;
          }
        }

        /* --- 576px to 768px --- */
        @media (max-width: 768px) {
          .header-top .center-wr,
          .header-bottom .center-wr {
            padding: 0 20px;
          }
          .header-logo-block img {
            height: 34px;
          }
          .header-top {
            padding: 10px 0 6px 0;
          }
          .header-bottom-content {
            padding: 4px 0;
          }
          .header-call-email-block {
            gap: 10px;
          }
          .header-call-email {
            gap: 8px;
          }
          .header-email-icon {
            gap: 8px;
          }
          .header-call-email .call-icon,
          .header-email-icon .email-icon {
            width: 32px;
            height: 32px;
          }
          .header-call-email .call-icon svg,
          .header-email-icon .email-icon svg {
            width: 16px;
            height: 16px;
          }
          .header-call-email-detail span {
            font-size: 10px;
          }
          .header-call-email-detail a {
            font-size: 11px;
          }
          .header-social-icon ul li a {
            width: 30px;
            height: 30px;
          }
          .header-social-icon ul li a svg {
            width: 15px;
            height: 15px;
          }
          .header-social-icon ul {
            gap: 6px;
          }
          .burger span {
            width: 24px;
            height: 2.5px;
          }
          .burger {
            gap: 4px;
          }
          .jk-mobile-menu {
            padding: 90px 20px 30px;
          }
          .jk-mobile-menu a {
            font-size: 16px;
            padding: 10px 0;
          }
          .jk-mobile-menu .btn {
            font-size: 14px;
            padding: 12px 16px;
          }
          .wa-float {
            width: 44px;
            height: 44px;
            bottom: 16px;
            right: 16px;
          }
          .wa-float svg {
            width: 22px;
            height: 22px;
          }
        }

        /* --- 480px to 576px --- */
        @media (max-width: 576px) {
          .header-top .center-wr,
          .header-bottom .center-wr {
            padding: 0 16px;
          }
          .header-logo-block img {
            height: 30px;
          }
          .header-top {
            padding: 8px 0 6px 0;
          }
          .header-bottom-content {
            padding: 4px 0;
          }
          .header-call-email-block {
            gap: 8px;
          }
          .header-call-email {
            gap: 6px;
          }
          .header-email-icon {
            gap: 6px;
          }
          .header-call-email .call-icon,
          .header-email-icon .email-icon {
            width: 28px;
            height: 28px;
          }
          .header-call-email .call-icon svg,
          .header-email-icon .email-icon svg {
            width: 14px;
            height: 14px;
          }
          .header-call-email-detail span {
            font-size: 9px;
          }
          .header-call-email-detail a {
            font-size: 10px;
          }
          .header-social-icon ul li a {
            width: 26px;
            height: 26px;
          }
          .header-social-icon ul li a svg {
            width: 13px;
            height: 13px;
          }
          .header-social-icon ul {
            gap: 5px;
          }
          .burger span {
            width: 20px;
            height: 2px;
          }
          .burger {
            gap: 3px;
          }
          .jk-mobile-menu {
            padding: 80px 16px 30px;
          }
          .jk-mobile-menu a {
            font-size: 15px;
            padding: 10px 0;
          }
          .jk-mobile-menu .btn {
            font-size: 13px;
            padding: 10px 14px;
          }
          .wa-float {
            width: 40px;
            height: 40px;
            bottom: 12px;
            right: 12px;
          }
          .wa-float svg {
            width: 20px;
            height: 20px;
          }
          .header-call-email-detail .comma {
            display: none;
          }
        }

        /* --- 400px to 480px --- */
        @media (max-width: 480px) {
          .header-top .center-wr,
          .header-bottom .center-wr {
            padding: 0 12px;
          }
          .header-logo-block img {
            height: 28px;
          }
          .header-call-email-block {
            gap: 6px;
          }
          .header-call-email .call-icon,
          .header-email-icon .email-icon {
            width: 24px;
            height: 24px;
          }
          .header-call-email .call-icon svg,
          .header-email-icon .email-icon svg {
            width: 12px;
            height: 12px;
          }
          .header-call-email-detail span {
            display: none;
          }
          .header-call-email-detail a {
            font-size: 9px;
          }
          .header-social-icon ul li a {
            width: 24px;
            height: 24px;
          }
          .header-social-icon ul li a svg {
            width: 12px;
            height: 12px;
          }
          .header-social-icon ul {
            gap: 4px;
          }
          .burger span {
            width: 18px;
            height: 2px;
          }
          .burger {
            gap: 3px;
          }
          .jk-mobile-menu {
            padding: 80px 16px 30px;
          }
          .jk-mobile-menu a {
            font-size: 14px;
            padding: 8px 0;
          }
          .jk-mobile-menu .btn {
            font-size: 12px;
            padding: 10px 12px;
          }
          .wa-float {
            width: 36px;
            height: 36px;
            bottom: 10px;
            right: 10px;
          }
          .wa-float svg {
            width: 18px;
            height: 18px;
          }
        }

        /* ============================================
                   SCROLL EFFECT
           ============================================ */
        .header-wr.scrolled .header-logo-block img {
          height: 42px;
        }

        @media (max-width: 820px) {
          .header-wr.scrolled .header-logo-block img {
            height: 32px;
          }
        }
        @media (max-width: 576px) {
          .header-wr.scrolled .header-logo-block img {
            height: 28px;
          }
        }
        @media (max-width: 400px) {
          .header-wr.scrolled .header-logo-block img {
            height: 24px;
          }
        }
      `}</style>

      {/* ===== WHATSAPP FLOATING BUTTON ===== */}
      <a
        href="https://wa.me/919981105588?text=Hi%2C%20I%20want%20to%20know%20more%20about%20JK%20Chaat%20Cafe%20franchise"
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* ===== HEADER WRAPPER ===== */}
      <div className={`header-wr ${scrolled ? 'scrolled' : ''}`}>
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
                {/* Call - Real Color Icon */}
                <div className="header-call-email">
                  <div className="call-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div className="header-call-email-detail">
                    <span>Call:</span>
                    <a href="tel:+919981105588">99811 05588</a>
                    <span className="comma">,</span>
                  </div>
                </div>

                {/* Email - Real Color Icon */}
                <div className="header-email-icon hide-mobile">
                  <div className="email-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className="header-call-email-detail">
                    <span>Email:</span>
                    <a href="mailto:info@jkchaatcafe.com">info@jkchaatcafe.com</a>
                  </div>
                </div>

                {/* SOCIAL ICONS - REAL COLORS */}
                <div className="header-social-icon">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/jkchaatcafe/" target="_blank" rel="noopener noreferrer" className="fb" aria-label="Facebook">
                        <svg viewBox="0 0 8.516 16.086">
                          <path d="M5.676,12.471c0,1.155,0,2.31,0,3.465,0,.125-.038.151-.156.15q-1.471-.007-2.943,0c-.123,0-.153-.034-.153-.153q.005-3.438,0-6.877c0-.247.039-.214-.22-.215-.683,0-1.367,0-2.051,0C.027,8.847,0,8.808,0,8.683Q.008,7.222,0,5.761c0-.1.029-.134.133-.132.719,0,1.438,0,2.157.006.11,0,.143-.029.141-.14-.005-.591-.008-1.181,0-1.772a4.051,4.051,0,0,1,.49-1.992A3.276,3.276,0,0,1,4.913.186,6.04,6.04,0,0,1,6.931.012C7.4.031,7.879.052,8.351.1c.082.009.1.035.1.112q0,1.17,0,2.34c0,.092-.027.119-.119.118-.515,0-1.03,0-1.545,0a1.729,1.729,0,0,0-.573.1.723.723,0,0,0-.484.552,2.048,2.048,0,0,0-.053.472c0,.56,0,1.12,0,1.679,0,.118.027.157.152.156.843-.005,1.687,0,2.53,0,.172,0,.17,0,.152.163q-.151,1.333-.3,2.665c0,.044-.016.086-.022.13-.035.253-.035.253-.3.253-.683,0-1.367,0-2.051,0-.139,0-.166.041-.166.17C5.679,10.161,5.677,11.316,5.676,12.471Z"/>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/jkchaatcafe/" target="_blank" rel="noopener noreferrer" className="insta" aria-label="Instagram">
                        <svg viewBox="0 0 14.571 14.604">
                          <path d="M0,11.125V3.485A.328.328,0,0,0,.025,3.4a3.19,3.19,0,0,1,.267-.939A3.926,3.926,0,0,1,4,.017c2.18-.032,4.36-.007,6.539-.007a3.96,3.96,0,0,1,1.206.185,4.02,4.02,0,0,1,2.819,3.793c.015,2.212.01,4.427,0,6.639A3.836,3.836,0,0,1,13.6,13.18,3.99,3.99,0,0,1,10.437,14.6H4.11a4.131,4.131,0,0,1-1.973-.459,4.009,4.009,0,0,1-1.888-2.1A6.551,6.551,0,0,1,0,11.125Zm7.261,2.182h.412c1.006-.005,2.015.028,3.021-.015a2.619,2.619,0,0,0,1.993-1.036,2.868,2.868,0,0,0,.589-1.873c-.005-2.032,0-4.065,0-6.1A3.559,3.559,0,0,0,13.2,3.41a2.717,2.717,0,0,0-2.232-2.065,6.666,6.666,0,0,0-1.094-.04h-5.8a2.744,2.744,0,0,0-2.8,2.809c0,.826,0,1.653,0,2.479V10.5a2.746,2.746,0,0,0,2.8,2.809c1.064.005,2.127,0,3.191,0Z"/>
                          <path d="M7.276,11.068A3.763,3.763,0,1,1,11.029,7.3a3.783,3.783,0,0,1-3.753,3.77ZM9.733,7.305A2.463,2.463,0,1,0,7.273,9.769,2.47,2.47,0,0,0,9.733,7.305Z"/>
                          <path d="M11.189,2.451a.946.946,0,1,1-.951.949.956.956,0,0,1,.951-.949Z"/>
                        </svg>
                      </a>
                    </li>
                    
                    <li>
                      <a href="https://wa.me/919981105588" target="_blank" rel="noopener noreferrer" className="wa" aria-label="WhatsApp">
                        <svg viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* BURGER - Mobile */}
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

        {/* ===== BOTTOM NAVIGATION - DESKTOP ONLY ===== */}
        <div className="header-bottom hide-mobile">
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
          Apply for Franchise
        </Link>
      </div>
    </>
  );
}