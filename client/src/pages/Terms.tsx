import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / Terms & Conditions</div>
          <h1>Terms & Conditions</h1>
          <p>Last updated: 30 July 2026</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container legal-content">
          <h2>1. Franchise Enquiries</h2>
          <p>Submitting a franchise application does not guarantee approval. All applications are subject to review, site evaluation and mutual agreement.</p>
          <h2>2. Investment Figures</h2>
          <p>Package prices listed on this website are indicative starting figures. Final costs depend on location, outlet size and customisation, and will be confirmed in a formal agreement.</p>
          <h2>3. Use of Website</h2>
          <p>Content on this website is for informational purposes. You agree not to misuse, copy or redistribute proprietary content, branding or menu formulations without permission.</p>
          <h2>4. Franchise Agreement</h2>
          <p>All franchise relationships are governed by a separate, formal Franchise Agreement signed between JK Chaat Cafe and the partner, which supersedes information presented on this website.</p>
          <h2>5. Limitation of Liability</h2>
          <p>JK Chaat Cafe is not liable for business outcomes of individual franchise outlets, which depend on multiple factors including location, management and market conditions.</p>
          <h2>6. Governing Law</h2>
          <p>These terms are governed by the laws of India, with jurisdiction in Indore, Madhya Pradesh.</p>
        </div>
      </section>
    </>
  );
}
