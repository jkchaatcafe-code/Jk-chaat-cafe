// src/pages/Products.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { api } from '../api/client';
import SEO from '../components/SEO';
import { organizationSchema } from '../utils/schema';
import productsHero from '../assets/img/Products & Menuhero.jpeg';

type Product = {
  _id: string;
  name: string;
  category: string;
  description?: string;
  image?: string;
  tags?: string[];
  active: boolean;
};

const HERO_IMG = productsHero;

// Fallback image
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80';

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const response = await api.get('/products');
        if (response.data.items && response.data.items.length > 0) {
          setProducts(response.data.items);
        } else {
          setProducts([]);
        }
        setError('');
      } catch (err: any) {
        setError('Could not load menu items. Please try again later.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Get unique categories from products
  const categories = ['all', ...new Set(products.map(p => p.category))];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const getImageUrl = (image?: string) => {
    if (!image) return FALLBACK_IMAGE;
    if (image.startsWith('http') || image.startsWith('data:')) return image;
    const apiBase = import.meta.env.VITE_API_BASE || 'https://jk-chaat-cafe.onrender.com';
    return `${apiBase}${image}`;
  };

  return (
    <div className="jk-products">
      <style>{`
        .jk-products {
          background: #0a0a0a;
          color: #fff;
          min-height: 100vh;
        }
        .jk-products .section {
          padding: 60px 0;
        }
        .jk-products .grad-text {
          background: linear-gradient(135deg, #FFD700, #F4A900);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .jk-products h1, .jk-products h2, .jk-products h3, .jk-products h4 {
          color: #fff;
        }
        .jk-products p {
          color: #aaa;
        }

        .jk-products .page-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 40px 0 60px;
          margin-top: -3px;
          padding-top: 120px;
        }
        .jk-products .hero-bg {
          position: absolute;
          inset: -10% 0 -10% 0;
          height: 120%;
          width: 100%;
          z-index: 0;
        }
        .jk-products .hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 35%;
          display: block;
        }
        .jk-products .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.92) 100%);
          z-index: 1;
        }
        .jk-products .hero-content {
          position: relative;
          z-index: 2;
          max-width: 820px;
          padding-top: 20px;
        }
        .jk-products .hero-content h1 {
          font-size: clamp(2.6rem, 4.5vw, 3.8rem);
          line-height: 1.1;
          color: #fff;
          margin: 0 0 16px;
        }
        .jk-products .hero-content p {
          color: rgba(255,255,255,0.8);
          font-size: 1.05rem;
          line-height: 1.7;
          max-width: 580px;
        }

        .jk-products .menu-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 32px;
          justify-content: center;
        }
        .jk-products .menu-tab {
          padding: 10px 24px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.06);
          background: transparent;
          color: #888;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          font-size: 0.85rem;
          font-weight: 600;
        }
        .jk-products .menu-tab:hover {
          border-color: rgba(255,215,0,0.2);
          color: #fff;
          transform: translateY(-2px);
        }
        .jk-products .menu-tab.active {
          background: #FFD700;
          color: #000;
          border-color: #FFD700;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255,215,0,0.15);
        }

        .jk-products .menu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .jk-products .menu-card {
          background: #141414;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.04);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: default;
        }
        .jk-products .menu-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px -12px rgba(0,0,0,0.5);
          border-color: rgba(255,215,0,0.1);
        }
        .jk-products .menu-card .photo-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          background: #0a0a0a;
          overflow: hidden;
        }
        .jk-products .menu-card .photo-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .jk-products .menu-card:hover .photo-frame img {
          transform: scale(1.08);
        }
        .jk-products .menu-card .body {
          padding: 16px 20px 20px;
        }
        .jk-products .menu-card .body h4 {
          font-size: 1rem;
          color: #fff;
          margin: 0 0 4px;
          line-height: 1.3;
        }
        .jk-products .menu-card .body .category-tag {
          display: inline-block;
          background: rgba(255,215,0,0.06);
          color: #FFD700;
          padding: 2px 14px;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 600;
          margin-top: 6px;
          border: 1px solid rgba(255,215,0,0.06);
        }

        .jk-products .empty-state {
          grid-column: 1 / -1;
          text-align: center;
          padding: 60px 20px;
          background: #141414;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.04);
        }
        .jk-products .empty-state h3 {
          color: #fff;
          margin-bottom: 8px;
        }
        .jk-products .empty-state p {
          color: #666;
        }

        .jk-products .skeleton {
          background: #141414;
          border-radius: 16px;
          aspect-ratio: 4/3;
          position: relative;
          overflow: hidden;
        }
        .jk-products .skeleton::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent);
          animation: skeletonShimmer 1.5s infinite;
        }
        @keyframes skeletonShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @media (max-width: 992px) {
          .jk-products .menu-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .jk-products .page-hero {
            min-height: 50vh;
          }
          .jk-products .hero-content h1 {
            font-size: 2.6rem;
          }
          .jk-products .hero-bg img {
            object-position: center 40%;
          }
        }
        @media (max-width: 768px) {
          .jk-products .page-hero {
            min-height: 45vh;
            margin-top: -50px;
            padding-top: 100px;
          }
          .jk-products .hero-content h1 {
            font-size: 2rem;
          }
          .jk-products .menu-tabs {
            gap: 6px;
          }
          .jk-products .menu-tab {
            padding: 8px 16px;
            font-size: 0.75rem;
          }
          .jk-products .hero-bg img {
            object-position: center 45%;
          }
        }
        @media (max-width: 576px) {
          .jk-products .menu-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .jk-products .page-hero {
            min-height: 35vh;
            margin-top: -40px;
            padding-top: 80px;
            padding-bottom: 30px;
          }
          .jk-products .hero-content h1 {
            font-size: 1.6rem;
          }
          .jk-products .hero-content p {
            font-size: 0.9rem;
          }
          .jk-products .menu-tab {
            padding: 6px 12px;
            font-size: 0.7rem;
          }
          .jk-products .hero-bg img {
            object-position: center 40%;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src={HERO_IMG} alt="JK Chaat Cafe Products & Menu" />
          <div className="hero-overlay" />
        </div>
        <div className="container hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            The menu your customers will <span className="grad-text">keep coming back for</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Every franchise partner gets this full, tested menu — plus the masala, raw materials and training to serve it consistently.
          </motion.p>
        </div>
      </section>

      {/* MENU SECTION */}
      <section className="section">
        <div className="container">
          {/* Tabs */}
          <div className="menu-tabs">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                className={`menu-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
              >
                {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </motion.button>
            ))}
          </div>

          {/* Menu Items */}
          {loading ? (
            <div className="menu-grid">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="skeleton" />
              ))}
            </div>
          ) : error ? (
            <div className="menu-grid">
              <div className="empty-state">
                <h3>Something went wrong</h3>
                <p>{error}</p>
              </div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="menu-grid">
              <div className="empty-state">
                <h3>No menu items found</h3>
                <p>Check back soon for our delicious menu items.</p>
              </div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className="menu-grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product._id}
                    className="menu-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    whileHover={{ y: -8 }}
                  >
                    <div className="photo-frame">
                      <img
                        src={getImageUrl(product.image)}
                        alt={product.name}
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE;
                        }}
                      />
                    </div>
                    <div className="body">
                      <h4>{product.name}</h4>
                      <div className="category-tag">{product.category}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>
    </div>
  );
}