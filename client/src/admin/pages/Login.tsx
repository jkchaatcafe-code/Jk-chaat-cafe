import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/jk-chaat-cafe-logo.png';
import { useAdminAuth } from '../context/AdminAuthContext';

export default function Login() {
  const { login } = useAdminAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await login(email, password);
      navigate('/admin');
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="jk-admin">
      <div className="a-login-wrap">
        <div className="a-login-card">
          <img src={logo} alt="JK Chaat Cafe" />
          <h1>Admin Login</h1>
          <p className="sub">Sign in to manage leads, blogs, products and gallery.</p>
          <form onSubmit={handleSubmit}>
            <div className="a-field">
              <label>Email</label>
              <input className="a-input" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="a-field">
              <label>Password</label>
              <input className="a-input" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="a-btn a-btn-primary" type="submit" disabled={loading} style={{ width: '100%', justifyContent: 'center', marginTop: 6 }}>
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
            {error && <div className="a-msg error">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}
