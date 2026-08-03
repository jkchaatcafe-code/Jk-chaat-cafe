import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Journey from '../components/Journey';

const historySteps = [
  { num: '2020', title: 'Started', text: 'First cafe concept and masala recipes developed.' },
  { num: '2021', title: 'First Partners', text: 'Early franchise partners onboarded across MP.' },
  { num: '2022', title: 'Central Supply', text: 'In-house masala and raw material supply chain built.' },
  { num: '2023', title: 'Training Academy', text: 'Structured staff training program launched.' },
  { num: '2024', title: '45+ Cities', text: 'Franchise network expanded across central India.' },
  { num: '2026', title: '120+ Partners', text: 'A growing family of profitable cafe owners.' },
];

export default function About() {
  return (
    <div className="jk-about">
      {/* Self-contained yellow/black/white theme override — scoped to this page only */}
      <style>{`
        .jk-about {
          --jk-yellow: #F5B300;
          --jk-yellow-deep: #C98E00;
          --jk-yellow-soft: #FFE9AD;
          --jk-black: #1A1A1A;
        }

        .jk-about .eyebrow { color: var(--jk-black); }
        .jk-about .eyebrow::before { background: var(--jk-yellow); }

        .jk-about .grad-text {
          background: none;
          -webkit-text-fill-color: currentColor;
          color: var(--jk-yellow-deep);
        }

        .jk-about .why-card { border-color: #EDEDED; }
        .jk-about .why-card:hover { border-color: transparent; box-shadow: 0 20px 50px -20px rgba(0,0,0,0.18); }
        .jk-about .why-icon {
          background: var(--jk-yellow);
          box-shadow: 0 12px 26px -10px rgba(245,179,0,0.55);
        }
        .jk-about .why-icon svg { stroke: var(--jk-black); }
        .jk-about .why-card h3 { color: var(--jk-black); }

        .jk-about .j-step .j-num { border-color: #EDEDED; color: #888; }
        .jk-about .j-step.done .j-num {
          background: var(--jk-yellow);
          border-color: transparent;
          color: var(--jk-black);
        }
        .jk-about .journey-line-fill { background: var(--jk-yellow-deep); }
        .jk-about .j-step h4 { color: var(--jk-black); }

        .jk-about .cta-banner {
          background: linear-gradient(135deg, var(--jk-yellow-soft), var(--jk-yellow));
        }
        .jk-about .cta-banner h2,
        .jk-about .cta-banner p { color: var(--jk-black); }
        .jk-about .cta-banner p { opacity: 0.75; }
        .jk-about .cta-blob { background: rgba(26,26,26,0.06); }
        .jk-about .cta-banner .btn-ghost {
          background: var(--jk-black);
          color: #fff;
          border: none;
        }
        .jk-about .cta-banner .btn-ghost:hover { transform: translateY(-3px); opacity: 0.9; }

        .jk-about h1, .jk-about h2, .jk-about h3, .jk-about h4 { color: var(--jk-black); }
        .jk-about p { color: #4A4A4A; }
      `}</style>

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / About</div>
          <h1>We don't run cafes. We build cafe <span className="grad-text">owners</span>.</h1>
          <p>JK Chaat Cafe was founded on a simple idea: most people who dream of owning a cafe never start, because they don't know where to begin. We became the team that begins it for them.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container why-grid">
          <Reveal className="why-card">
            <div className="why-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5" /></svg></div>
            <h3>Our Mission</h3><p>Make cafe ownership achievable for anyone with the drive, not just those with restaurant experience.</p>
          </Reveal>
          <Reveal delay={0.06} className="why-card">
            <div className="why-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg></div>
            <h3>Our Approach</h3><p>Standardised setup, sourcing and training so every outlet performs, regardless of the owner's background.</p>
          </Reveal>
          <Reveal delay={0.12} className="why-card">
            <div className="why-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22V4a2 2 0 0 1 2-2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" /><path d="M14 2v5h5" /></svg></div>
            <h3>Our Promise</h3><p>We stay involved after launch — supply, guidance and marketing don't stop once the doors open.</p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="section-head center" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="eyebrow">How We Got Here</div><h2>A short history, built one franchise at a time.</h2>
          </Reveal>
          <Journey steps={historySteps} />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="cta-banner">
            <div className="cta-blob" style={{ width: 220, height: 220, top: -60, left: -60 }}></div>
            <h2>Ready to write your own success story?</h2>
            <p>Join a growing network of cafe owners who started with zero restaurant experience.</p>
            <Link to="/franchise-application" className="btn btn-ghost">Apply for Franchise</Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}