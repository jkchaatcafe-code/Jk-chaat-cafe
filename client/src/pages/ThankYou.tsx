import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <section className="thankyou-page">
      <div className="container">
        <div className="thankyou-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></div>
        <h1>Application received!</h1>
        <p style={{ color: 'var(--ink-soft)', maxWidth: 480, margin: '14px auto 30px', fontSize: 16 }}>
          Thank you for applying. A franchise consultant will call you within 24 hours to discuss next steps.
        </p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </section>
  );
}
