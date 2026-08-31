import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="error-page">
      <div className="container">
        <div className="code">404</div>
        <h1 style={{ marginTop: 10 }}>This page hasn't opened yet.</h1>
        <p style={{ color: 'var(--ink-soft)', maxWidth: 440, margin: '14px auto 30px', fontSize: 16 }}>
          The page you're looking for doesn't exist — but your cafe still can. Let's get you back on track.
        </p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </section>
  );
}
