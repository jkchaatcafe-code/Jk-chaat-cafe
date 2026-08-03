import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

const check = <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>;

const provide = [
  { title: 'Interior Planning', text: 'Layouts tailored to your space and footfall.', path: 'M3 21h18M4 21V9l8-6 8 6v12M9 21v-8h6v8' },
  { title: 'Kitchen Equipment', text: 'Commercial-grade, delivered and installed.', path: 'M3 10h18M8 4v6', rect: true },
  { title: 'Masala & Spices', text: 'Our signature blends, made for consistency.', path: 'M12 2v6M8 5l4-3 4 3M5 10h14l-1.5 10a2 2 0 0 1-2 1.7H8.5a2 2 0 0 1-2-1.7L5 10Z' },
  { title: 'Raw Materials', text: 'Reliable supply of tea, coffee and staples.', path: 'M4 21h16M6 21V8a2 2 0 0 1 2-2h1V4h6v2h1a2 2 0 0 1 2 2v13' },
  { title: 'Menu Planning', text: 'Chaat, fast food and beverages built to sell.', path: 'M4 6h16M4 12h16M4 18h10' },
  { title: 'Staff Training', text: 'Recipes, hygiene and service, hands-on.', path: 'M4 21c0-4 4-6 8-6s8 2 8 6', circle: true },
  { title: 'Marketing Support', text: 'Launch campaigns and ongoing local promotion.', path: 'M3 11l18-7-7 18-3-8-8-3Z' },
  { title: 'Business Guidance', text: 'Consultation on costs, ops and growth, always on.', path: 'M12 20v-6M6 20v-3M18 20v-9M6 13l6-4 6 5M4 9l4-5 4 3 4-4 4 4' },
];

export default function Franchise() {
  return (
    <div className="jk-franchise">
      {/* Self-contained yellow/black/white theme + tighter spacing — scoped to this page only */}
      <style>{`
        .jk-franchise {
          --jk-yellow: #F5B300;
          --jk-yellow-deep: #C98E00;
          --jk-yellow-soft: #FFE9AD;
          --jk-black: #1A1A1A;
        }

        /* ---- spacing: global .section is 110px top/bottom, way too much for a plan-comparison page ---- */
        .jk-franchise .page-hero { padding: 90px 0 40px; }
        .jk-franchise .section { padding: 44px 0; }
        .jk-franchise .section-head { margin-bottom: 28px; }
        .jk-franchise .pkg-grid { gap: 18px; }
        .jk-franchise .pkg-card { padding: 26px 24px; }
        .jk-franchise .pkg-card ul { margin: 16px 0 20px; gap: 9px; }
        .jk-franchise .provide-grid { gap: 14px; }
        .jk-franchise .provide-card { padding: 20px 18px; }
        .jk-franchise .provide-card .ic { margin-bottom: 10px; }

        /* ---- color: yellow / black / white only ---- */
        .jk-franchise .eyebrow { color: var(--jk-black); }
        .jk-franchise .eyebrow::before { background: var(--jk-yellow); }
        .jk-franchise .grad-text {
          background: none;
          -webkit-text-fill-color: currentColor;
          color: var(--jk-yellow-deep);
        }
        .jk-franchise h1, .jk-franchise h2, .jk-franchise h3, .jk-franchise h4 { color: var(--jk-black); }
        .jk-franchise p { color: #4A4A4A; }

        .jk-franchise .pkg-card { border-color: #EDEDED; }
        .jk-franchise .pkg-card:hover { box-shadow: 0 20px 50px -20px rgba(0,0,0,0.18); }
        .jk-franchise .pkg-tag { background: var(--jk-yellow); color: var(--jk-black); }
        .jk-franchise .pkg-price { color: var(--jk-black); }
        .jk-franchise .pkg-card li svg { stroke: var(--jk-yellow-deep); }
        .jk-franchise .pkg-card .btn-ghost { border-color: var(--jk-black); color: var(--jk-black); }
        .jk-franchise .pkg-card .btn-ghost:hover { background: var(--jk-black); color: #fff; border-color: var(--jk-black); }

        .jk-franchise .pkg-card.featured {
          background: var(--jk-black);
          border: none;
        }
        .jk-franchise .pkg-card.featured h3,
        .jk-franchise .pkg-card.featured .pkg-price,
        .jk-franchise .pkg-card.featured li { color: #fff; }
        .jk-franchise .pkg-card.featured .pkg-price span { color: rgba(255,255,255,0.65); }
        .jk-franchise .pkg-card.featured .pkg-tag { background: var(--jk-yellow); color: var(--jk-black); }
        .jk-franchise .pkg-card.featured li svg { stroke: var(--jk-yellow); }
        .jk-franchise .pkg-card.featured .btn-ghost { background: var(--jk-yellow); color: var(--jk-black); border: none; }
        .jk-franchise .pkg-card.featured .btn-ghost:hover { opacity: 0.9; }

        .jk-franchise .provide-card { border-color: #EDEDED; }
        .jk-franchise .provide-card:hover { background: var(--jk-yellow-soft); box-shadow: 0 16px 34px -16px rgba(0,0,0,0.15); }
        .jk-franchise .provide-card .ic svg { stroke: var(--jk-yellow-deep); }
      `}</style>

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / Franchise</div>
          <h1>Franchise plans built for <span className="grad-text">first-time owners</span>.</h1>
          <p>Every package includes full setup, training and launch support. Compare plans below and apply when you're ready.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container pkg-grid">
          <Reveal className="pkg-card">
            <span className="pkg-tag">Starter</span><h3>Kiosk Cafe</h3><div className="pkg-price">₹9.9L <span>/ one-time</span></div>
            <ul>
              <li>{check}150–250 sq.ft kiosk format</li><li>{check}Core kitchen equipment</li><li>{check}Starter menu (18–22 items)</li><li>{check}7-day staff training</li><li>{check}3-month guidance</li>
            </ul>
            <Link to="/franchise-application?plan=starter" className="btn btn-ghost">Apply for Starter</Link>
          </Reveal>
          <Reveal delay={0.08} className="pkg-card featured">
            <span className="pkg-tag">Most Chosen</span><h3>Complete Cafe</h3><div className="pkg-price">₹19.5L <span>/ one-time</span></div>
            <ul>
              <li>{check}400–700 sq.ft dine-in format</li><li>{check}Full kitchen & seating setup</li><li>{check}Full menu (45+ items)</li><li>{check}Launch marketing campaign</li><li>{check}12-month guidance</li>
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

      <section className="section">
        <div className="container">
          <Reveal className="section-head"><div className="eyebrow">What's Included</div><h2>Everything the franchise fee covers.</h2></Reveal>
          <div className="provide-grid">
            {provide.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.04} className="provide-card">
                <div className="ic"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">{p.rect && <rect x="3" y="4" width="18" height="16" rx="2" />}{p.circle && <circle cx="12" cy="8" r="4" />}<path d={p.path} /></svg></div>
                <h4>{p.title}</h4><p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}