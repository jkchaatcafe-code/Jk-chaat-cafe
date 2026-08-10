import { Link, useNavigate } from 'react-router-dom';
import { useLeadForm } from '../hooks/useLeadForm';

export default function FranchiseApplication() {
  const navigate = useNavigate();
  const { values, setField, handleSubmit, loading, msg } = useLeadForm('/leads/franchise-application', () => {
    navigate('/thank-you');
  });

  return (
    <>
      <section className="fr-hero" style={{ marginTop: '80px' }}>

        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / Franchise Application</div>
          <h1>Apply for your <span className="grad-text">JK Chaat Cafe</span> franchise.</h1>
          <p>Takes under two minutes. Our team reviews every application personally.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <div className="form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group"><label>Full Name</label><input type="text" required value={values.name} onChange={(e) => setField('name', e.target.value)} /></div>
                <div className="form-group"><label>Phone Number</label><input type="tel" required value={values.phone} onChange={(e) => setField('phone', e.target.value)} /></div>
                <div className="form-group"><label>Email</label><input type="email" required value={values.email || ''} onChange={(e) => setField('email', e.target.value)} /></div>
                <div className="form-group"><label>Preferred City</label><input type="text" required value={values.city || ''} onChange={(e) => setField('city', e.target.value)} /></div>
                <div className="form-group">
                  <label>Interested Package</label>
                  <select required value={values.package || ''} onChange={(e) => setField('package', e.target.value)}>
                    <option value="">Select a package</option>
                    <option value="starter">Starter — Kiosk Cafe (₹9.9L)</option>
                    <option value="complete">Complete Cafe (₹19.5L)</option>
                    <option value="master">Master Franchise (Custom)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Investment Budget</label>
                  <select required value={values.budget || ''} onChange={(e) => setField('budget', e.target.value)}>
                    <option value="">Select budget range</option>
                    <option>Under ₹10L</option>
                    <option>₹10L – ₹20L</option>
                    <option>₹20L – ₹35L</option>
                    <option>Above ₹35L</option>
                  </select>
                </div>
              </div>
              <div className="form-group full">
                <label>Do you have a location shortlisted?</label>
                <select value={values.hasLocation || 'no'} onChange={(e) => setField('hasLocation', e.target.value)}>
                  <option value="no">Not yet</option>
                  <option value="yes">Yes, already have one</option>
                </select>
              </div>
              <div className="form-group full"><label>Tell us anything else about your plan</label><textarea placeholder="Timeline, prior experience, questions..." value={values.message || ''} onChange={(e) => setField('message', e.target.value)} /></div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Application'}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </button>
              {msg && <div className={`form-msg ${msg.type}`} style={{ display: 'block' }}>{msg.text}</div>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
