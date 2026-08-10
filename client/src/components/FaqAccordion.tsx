import { useState } from 'react';

export type FaqItem = { q: string; a: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className={`faq-item ${isOpen ? 'open' : ''}`}>
            <div className="faq-q" onClick={() => setOpenIndex(isOpen ? null : i)}>
              <h4>{item.q}</h4>
              <div className="plus"></div>
            </div>
            <div className="faq-a" style={{ maxHeight: isOpen ? 200 : 0 }}>
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
