// src/pages/Products.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { api } from '../api/client';

// Hero Background Image
const HERO_IMG = 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1600&q=80';

// Real Menu Data with Prices - Unique items
const menuData = {
  'Pani Puri': [
    { name: 'Regular Pani Puri (6 Pcs)', price: '₹25' },
    { name: 'Khatta Meetha Pani Puri (6 Pcs)', price: '₹25' },
    { name: 'Sev Puri (6 Pcs)', price: '₹25' },
    { name: 'Masala Puri (6 Pcs)', price: '₹35' },
    { name: 'Dahi Puri (6 Pcs)', price: '₹40' },
  ],
  'Chaat Specials': [
    { name: 'Plain Papdi Chaat', price: '₹60' },
    { name: 'Samosa Chaat', price: '₹60' },
    { name: 'Masala Papdi Chaat', price: '₹65' },
    { name: 'Aloo Tikki Chaat (Dahi)', price: '₹70' },
    { name: 'Aloo Tikki Chaat (Chhole)', price: '₹70' },
  ],
  'Pizzas': [
    { name: 'Veg Pizza', price: '₹100' },
    { name: 'Corn Pizza', price: '₹110' },
    { name: 'Paneer Pizza', price: '₹130' },
    { name: 'Double Cheese Pizza', price: '₹130' },
    { name: 'Italian Pizza', price: '₹140' },
    { name: 'Extra Cheese (Add-on)', price: '₹40' },
  ],
  'Maggi Station': [
    { name: 'Plain Butter Maggi', price: '₹25' },
    { name: 'Veg Maggi', price: '₹25' },
    { name: 'Schezwan Maggi', price: '₹40' },
    { name: 'Corn & Cheese Maggi', price: '₹80' },
    { name: 'Tandoori Maggi', price: '₹80' },
    { name: 'Extra Cheese (Add-on)', price: '₹20' },
  ],
  'Burgers': [
    { name: 'Aloo Tikki Burger', price: '₹40' },
    { name: 'Veg Burger', price: '₹50' },
    { name: 'Mexican Burger', price: '₹60' },
    { name: 'Tandoori Burger', price: '₹70' },
    { name: 'Paneer Masala Burger', price: '₹80' },
    { name: 'Extra Cheese (Add-on)', price: '₹20' },
  ],
  'Snacks': [
    { name: 'Samosa', price: '₹25' },
    { name: 'Kachori', price: '₹25' },
    { name: 'Vada Pav', price: '₹40' },
    { name: 'Pav Bhaji', price: '₹80' },
    { name: 'Extra Pav', price: '₹20' },
  ],
  'Fries': [
    { name: 'Salted Fries', price: '₹60' },
    { name: 'Peri Peri Fries', price: '₹70' },
    { name: 'Spicy Chatpat Fries', price: '₹80' },
  ],
  'Momos': [
    { name: 'Fried Veg Momos', price: '₹70' },
    { name: 'Fried Paneer Momos', price: '₹90' },
  ],
  'Lemonade': [
    { name: 'Masala Lemonade', price: '₹60' },
  ],
  'Milkshakes': [
    { name: 'Mango Shake', price: '₹90' },
    { name: 'Strawberry Shake', price: '₹90' },
    { name: 'Vanilla Shake', price: '₹90' },
    { name: 'KitKat Shake', price: '₹120' },
    { name: 'Oreo Shake', price: '₹120' },
    { name: 'Chocolate Shake', price: '₹120' },
    { name: 'Extra Ice Cream Scoop (Add-on)', price: '₹25' },
  ],
  'Tea & Coffee': [
    { name: 'Masala Tea', price: '₹15' },
    { name: 'Chocolate Tea', price: '₹20' },
    { name: 'Hot Coffee', price: '₹30' },
    { name: 'Chocolate Coffee', price: '₹40' },
    { name: 'Hot Chocolate', price: '₹40' },
  ],
  'Cold Coffee': [
    { name: 'Cold Coffee Normal', price: '₹40' },
    { name: 'Thick Cold Coffee', price: '₹50' },
    { name: 'Chocolate Cold Coffee', price: '₹50' },
    { name: 'Extra Ice Cream Scoop (Add-on)', price: '₹25' },
  ],
  'Mojitos': [
    { name: 'Mint Mojito', price: '₹80' },
    { name: 'Watermelon Mojito', price: '₹80' },
    { name: 'Spicy Mango Mojito', price: '₹80' },
    { name: 'Blueberry Mojito', price: '₹80' },
  ],
};

const menuCategories = Object.keys(menuData);

// Unique tabs with proper labels
const tabs = [
  { cat: 'all', label: 'All' },
  ...menuCategories.map(cat => ({ 
    cat: cat.toLowerCase().replace(/ /g, '_'), 
    label: cat 
  })),
];

// Fallback images for menu items
const FOOD_IMAGES = [
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
  'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80',
  'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&q=80',
  'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&q=80',
  'https://images.unsplash.com/photo-1556881286-fc6915169721?w=400&q=80',
  'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80',
];

export default function Products() {
  const [activeTab, setActiveTab] = useState('all');
  const [loading, setLoading] = useState(true);

  // Filter menu items based on active tab - Unique items only
  const getFilteredItems = () => {
    if (activeTab === 'all') {
      return Object.entries(menuData).flatMap(([category, items]) =>
        items.map(item => ({ ...item, category }))
      );
    }
    const categoryKey = Object.keys(menuData).find(
      key => key.toLowerCase().replace(/ /g, '_') === activeTab
    );
    if (categoryKey) {
      return menuData[categoryKey as keyof typeof menuData].map(item => ({
        ...item,
        category: categoryKey,
      }));
    }
    return [];
  };

  const filteredItems = getFilteredItems();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [activeTab]);

  // Get random image for each item
  const getImageForItem = (index: number) => {
    return FOOD_IMAGES[index % FOOD_IMAGES.length];
  };

  return (
    <div className="jk-products">
      <style>{`
        /* ===== DARK THEME ===== */
        .jk-products {
          background: #0a0a0a;
          color: #fff;
          min-height: 100vh;
        }
        .jk-products .section {
          padding: 60px 0;
        }
        .jk-products .eyebrow {
          color: #FFD700;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: 0.85rem;
          display: inline-block;
          margin-bottom: 10px;
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

        /* ===== HERO ===== */
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
          inset: -20% 0 0 0;
          height: 120%;
          z-index: 0;
        }
        .jk-products .hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .jk-products .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.92) 100%);
        }
        .jk-products .hero-content {
          position: relative;
          z-index: 1;
          max-width: 820px;
          padding-top: 20px;
        }
        .jk-products .hero-content .breadcrumb {
          color: rgba(255,255,255,0.5);
          font-size: 0.85rem;
          margin-bottom: 16px;
        }
        .jk-products .hero-content .breadcrumb a {
          color: #FFD700;
          text-decoration: none;
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

        /* ===== TABS - ANIMATED ===== */
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
          position: relative;
          overflow: hidden;
        }
        .jk-products .menu-tab::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #FFD700;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
          z-index: -1;
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
        .jk-products .menu-tab.active::before {
          transform: scaleX(1);
        }

        /* ===== MENU GRID - ANIMATED ===== */
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
        .jk-products .menu-card .photo-frame .price-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: #FFD700;
          color: #000;
          padding: 4px 14px;
          border-radius: 20px;
          font-weight: 700;
          font-size: 0.85rem;
          box-shadow: 0 4px 15px rgba(255,215,0,0.2);
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

        /* ===== EMPTY STATE ===== */
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

        /* ===== SKELETON LOADER ===== */
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

        /* ===== RESPONSIVE ===== */
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
        }
      `}</style>

      {/* ============ HERO ============ */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src={HERO_IMG} alt="JK Chaat Cafe Menu" />
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

      {/* ============ MENU SECTION ============ */}
      <section className="section">
        <div className="container">
          {/* Tabs */}
          <div className="menu-tabs">
            {tabs.map((t) => (
              <motion.button
                key={t.cat}
                className={`menu-tab ${activeTab === t.cat ? 'active' : ''}`}
                onClick={() => setActiveTab(t.cat)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
              >
                {t.label}
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
          ) : filteredItems.length === 0 ? (
            <div className="menu-grid">
              <div className="empty-state">
                <h3>No menu items found</h3>
                <p>Check back soon for our delicious menu items.</p>
              </div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="menu-grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={`${item.name}-${index}`}
                    className="menu-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    whileHover={{ y: -8 }}
                  >
                    <div className="photo-frame">
                      <img
                        src={getImageForItem(index)}
                        alt={item.name}
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = '/images/placeholder.jpg';
                        }}
                      />
                      <div className="price-badge">{item.price}</div>
                    </div>
                    <div className="body">
                      <h4>{item.name}</h4>
                      <div className="category-tag">{item.category}</div>
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