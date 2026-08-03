// src/pages/Products.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api/client';

type Product = {
  _id: string;
  name: string;
  category: string;
  description?: string;
  image?: string;
  tags: string[];
  active: boolean;
  createdAt: string;
};

const tabs = [
  { cat: 'all', label: 'All' },
  { cat: 'chaat', label: 'Chaat' },
  { cat: 'fastfood', label: 'Fast Food' },
  { cat: 'snacks', label: 'Snacks & Rolls' },
  { cat: 'beverages', label: 'Tea, Coffee & Beverages' },
  { cat: 'rolls', label: 'Rolls & Wraps' },
];

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [active, setActive] = useState('all');

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const response = await api.get('/products');
        // Only show active products
        const activeProducts = response.data.items.filter((p: Product) => p.active === true);
        setProducts(activeProducts);
        setError('');
      } catch (err: any) {
        setError('Could not load products. Please try again later.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const filtered = active === 'all' 
    ? products 
    : products.filter((item) => item.category === active);

  // Function to get image URL
  const getImageUrl = (url: string) => {
    if (!url) return '/images/placeholder.jpg';
    if (url.startsWith('http')) return url;
    return `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}${url}`;
  };

  return (
    <div className="jk-products">
      <style>{`
        .jk-products {
          --jk-yellow: #FFD700;
          --jk-yellow-deep: #C98E00;
          --jk-yellow-soft: #FFF8E7;
          --jk-black: #1A1A1A;
        }

        .jk-products .page-hero { padding: 90px 0 40px; }
        .jk-products .section { padding: 40px 0; }
        .jk-products .section-head { margin-bottom: 24px; }
        .jk-products .menu-tabs { 
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 26px;
        }
        .jk-products .menu-grid { 
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .jk-products .eyebrow { color: var(--jk-black); }
        .jk-products .eyebrow::before { background: var(--jk-yellow); }
        .jk-products .grad-text { 
          background: linear-gradient(135deg, #FFD700, #C98E00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .jk-products h1, .jk-products h2, .jk-products h3, .jk-products h4 { color: var(--jk-black); }
        .jk-products p { color: #4A4A4A; }

        .jk-products .menu-tab {
          padding: 8px 20px;
          border: 1px solid #E0E0E0;
          border-radius: 30px;
          background: #FFFFFF;
          color: #4A4A4A;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 13px;
          font-weight: 600;
        }
        .jk-products .menu-tab.active, 
        .jk-products .menu-tab:hover { 
          background: #000000; 
          color: #FFFFFF; 
          border-color: #000000;
        }

        .jk-products .menu-card {
          background: #FFFFFF;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #E0E0E0;
          transition: all 0.3s ease;
        }
        .jk-products .menu-card:hover { 
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.06);
          border-color: #FFD700;
        }
        
        .jk-products .photo-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          background: #F5F5F5;
          overflow: hidden;
        }
        .jk-products .photo-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .5s ease;
        }
        .jk-products .menu-card:hover .photo-frame img { transform: scale(1.06); }
        
        .jk-products .menu-card .body {
          padding: 16px 20px 20px;
        }
        .jk-products .menu-card .body h4 {
          font-size: 1rem;
          margin: 0 0 6px;
        }
        .jk-products .menu-card .body p {
          font-size: 0.85rem;
          color: #666666;
          line-height: 1.5;
          margin: 0 0 12px;
        }
        .jk-products .menu-card .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .jk-products .menu-card .tags span {
          padding: 2px 12px;
          background: #FFF8E7;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          color: #000000;
        }

        .jk-products .empty-state {
          grid-column: 1 / -1;
          text-align: center;
          padding: 80px 20px;
          background: #FFFFFF;
          border-radius: 16px;
          border: 1px solid #E0E0E0;
        }

        .jk-products .empty-state h3 {
          margin-bottom: 8px;
        }

        .jk-products .empty-state p {
          color: #666666;
        }

        .jk-products .skeleton {
          background: #F5F5F5;
          border-radius: 16px;
          aspect-ratio: 4/3;
          animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @media (max-width: 992px) {
          .jk-products .menu-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .jk-products .menu-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .jk-products .menu-tabs {
            gap: 6px;
          }
          .jk-products .menu-tab {
            padding: 6px 14px;
            font-size: 12px;
          }
        }
      `}</style>

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / Products & Menu</div>
          <h1>The menu your customers will <span className="grad-text">keep coming back for</span>.</h1>
          <p>Every franchise partner gets this full, tested menu — plus the masala, raw materials and training to serve it consistently.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="menu-tabs">
            {tabs.map((t) => (
              <button 
                key={t.cat} 
                className={`menu-tab ${active === t.cat ? 'active' : ''}`} 
                onClick={() => setActive(t.cat)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="menu-grid">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="skeleton" />
              ))}
            </div>
          ) : error ? (
            <div className="menu-grid">
              <div className="empty-state">
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🍽️</div>
                <h3>Something went wrong</h3>
                <p>{error}</p>
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="menu-grid">
              <div className="empty-state">
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🍕</div>
                <h3>No menu items found</h3>
                <p>Check back soon for our delicious menu items.</p>
              </div>
            </div>
          ) : (
            <div className="menu-grid">
              {filtered.map((item) => (
                <div className="menu-card" key={item._id}>
                  <div className="photo-frame">
                    <img
                      src={getImageUrl(item.image || '')}
                      alt={item.name}
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/images/placeholder.jpg';
                      }}
                    />
                  </div>
                  <div className="body">
                    <h4>{item.name}</h4>
                    <p>{item.description || 'A delicious item from our menu.'}</p>
                    <div className="tags">
                      {item.tags && item.tags.map((t) => <span key={t}>{t}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}