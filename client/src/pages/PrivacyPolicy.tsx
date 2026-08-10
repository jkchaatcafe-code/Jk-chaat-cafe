import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / Privacy Policy</div>
          <h1>Privacy Policy</h1>
          <p>Last updated: 30 July 2026</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container legal-content">
          <h2>1. Information We Collect</h2>
          <p>When you submit a franchise enquiry, contact form, or newsletter signup, we collect information you provide directly, such as your name, phone number, email, city and investment budget.</p>
          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To respond to franchise enquiries and schedule consultations</li>
            <li>To send relevant franchise updates, offers and city launches</li>
            <li>To improve our website and services</li>
          </ul>
          <h2>3. Data Storage</h2>
          <p>Enquiry and application data is stored securely in our database and accessed only by authorised JK Chaat Cafe team members.</p>
          <h2>4. Sharing of Information</h2>
          <p>We do not sell your personal information. Data may be shared with regional franchise consultants strictly to process your enquiry.</p>
          <h2>5. Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your data by contacting jkchaatcafe@gmail.com.</p>
          <h2>6. Cookies</h2>
          <p>We use basic cookies to remember popup preferences and improve site performance.</p>
          <h2>7. Contact</h2>
          <p>Questions about this policy can be sent to jkchaatcafe@gmail.com.</p>
        </div>
      </section>
    </>
  );
}
