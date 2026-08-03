import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
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
      {/* Self-contained overrides so this file can be dropped in without touching styles.css */}
      <style>{`
        .jk-header { padding: 10px 0; }
        .jk-header .nav-wrap { height: 68px; }

        .jk-header .brand { margin-left: -6px; }
        .jk-header .brand img { height: 34px; width: auto; }

        .jk-header .nav-links { gap: 20px; }
        .jk-header .nav-links a { font-size: 13.5px; white-space: nowrap; }

        .jk-header .nav-cta { gap: 10px; }
        .jk-header .btn {
          padding: 9px 18px;
          font-size: 13px;
          gap: 6px;
        }
        .jk-header .btn svg { width: 13px; height: 13px; }

        .jk-mobile-menu .btn { padding: 12px 20px; font-size: 14px; }
        .jk-mobile-menu a { font-size: 19px; }

        /* Tablet: trim spacing further, drop secondary CTA before it gets cramped */
        @media (max-width: 1180px) {
          .jk-header .nav-links { gap: 14px; }
          .jk-header .nav-links a { font-size: 13px; }
          .jk-header .nav-cta .btn-ghost { display: none; }
        }

        @media (max-width: 980px) {
          .jk-header .nav-links { gap: 10px; }
          .jk-header .nav-links a span.short { display: inline; }
        }

        /* Mobile: nav collapses into burger (breakpoint matches global CSS) */
        @media (max-width: 720px) {
          .jk-header .nav-wrap { height: 60px; }
          .jk-header .brand img { height: 30px; }
        }
      `}</style>

      <header id="siteHeader" className={`jk-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-wrap">
          <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="JK Chaat Cafe" />
          </Link>

          <nav className="nav-links">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
                {l.label === 'Products & Menu' ? (
                  <>
                    <span className="full">Products & Menu</span>
                    <span className="short" style={{ display: 'none' }}>Products</span>
                  </>
                ) : (
                  l.label
                )}
              </NavLink>
            ))}
          </nav>

          <div className="nav-cta">
            <Link to="/contact" className="btn btn-ghost">Talk to an Expert</Link>
            <Link to="/franchise-application" className="btn btn-primary">
              Apply for Franchise
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <button className="burger" aria-label="Menu" onClick={() => setMenuOpen((o) => !o)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-menu jk-mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map((l) => (
          <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)}>{l.label}</Link>
        ))}
        <Link
          to="/franchise-application"
          className="btn btn-primary"
          style={{ justifyContent: 'center', marginTop: 10 }}
          onClick={() => setMenuOpen(false)}
        >
          Apply for Franchise
        </Link>
      </div>
    </>
  );
}