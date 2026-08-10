import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <div style={{ 
      background: '#0a0a0a', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{ 
        background: '#141414', 
        padding: '60px 48px', 
        borderRadius: '24px', 
        textAlign: 'center',
        maxWidth: '500px',
        border: '1px solid rgba(255,215,0,0.05)'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✅</div>
        <h1 style={{ color: '#FFD700', fontSize: '2.2rem', marginBottom: '12px' }}>Application Submitted!</h1>
        <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '28px' }}>
          Thank you for your interest in JK Chaat Cafe franchise. Our team will contact you within 24 hours.
        </p>
        <Link to="/" className="btn btn-primary" style={{
          display: 'inline-block',
          padding: '14px 32px',
          background: '#FFD700',
          color: '#000',
          borderRadius: '12px',
          fontWeight: '700',
          textDecoration: 'none',
          transition: 'all 0.3s ease'
        }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}