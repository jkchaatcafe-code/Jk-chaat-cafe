import { Link } from 'react-router-dom';
import FaqAccordion from '../components/FaqAccordion';

const faqs = [
  { q: 'How much investment do I need to start?', a: 'Our packages start from ₹9.9L for a compact kiosk format and scale up based on outlet size, city and package chosen.' },
  { q: 'Do I need prior restaurant experience?', a: 'No. Most partners are first-time entrepreneurs. We handle menu, training and operations setup for you.' },
  { q: 'How long does setup take?', a: 'Typically 6–10 weeks from signed agreement to launch day, depending on site readiness.' },
  { q: 'Is ongoing support included after launch?', a: 'Yes. Every package includes business consultation, plus ongoing supply and marketing support.' },
  { q: 'Can I choose my own location?', a: "Yes. Share your preferred location and we'll evaluate footfall and layout suitability before finalising." },
  { q: 'What is the royalty or ongoing fee?', a: 'Royalty structure varies by package and is shared clearly during your franchise agreement discussion.' },
  { q: 'Can I run this alongside another job?', a: 'The Complete Cafe and Master Franchise plans support a trained manager running daily operations.' },
];

export default function Faq() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / FAQ</div>
          <h1>Questions new partners <span className="grad-text">ask us most</span>.</h1>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
