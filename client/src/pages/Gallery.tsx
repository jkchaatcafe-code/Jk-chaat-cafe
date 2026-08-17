// src/pages/Gallery.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { api } from '../api/client';

type GalleryItem = {
  _id: string;
  title: string;
  category: string;
  mediaType: 'image' | 'video';
  url: string;
  createdAt: string;
};

// Hero Background Image - Use your homepagehero2.jpeg
import heroBg from '../assets/img/homepagehero2.jpeg';

// Import your images
import homepagehero1 from '../assets/img/homepagehero1.jpeg';
import homepagehero2 from '../assets/img/homepagehero2.jpeg';
import homepagehero3 from '../assets/img/homepagehero3.jpeg';
import homepagehero4 from '../assets/img/homepagehero4.jpeg';
import homepageabout from '../assets/img/homepageabout.jpeg';
import aboutinterior from '../assets/img/aboutinterior.jpeg';
import aboutkitchen from '../assets/img/aboutkitchen.jpeg';

// Equipment images - I'll use Unsplash for these since you mentioned I should find them
// You can replace these with your own equipment images
const EQUIPMENT_IMAGES = [
  
  {
    url: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=600&q=80',
    title: 'Professional Equipment'
  },
  {
    url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&q=80',
    title: 'Modern Kitchen Appliances'
  },
  // {
  //   url: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&q=80',
  //   title: 'Food Preparation Area'
  // },
  {
    url: 'https://images.unsplash.com/photo-1556911220-bda9f7f7597e?w=600&q=80',
    title: 'Industrial Kitchen'
  },
  {
    url: 'data:image/jpeg;base64,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',
    title: 'Cooking Equipment'
  }
];

// Training images - Using Unsplash for training related
const TRAINING_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1522336572468-97b06e8ef143?w=600&q=80',
    title: 'Staff Training Session'
  },
  {
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
    title: 'Team Meeting'
  },
  {
    url: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80',
    title: 'Training Workshop'
  },
  {
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    title: 'Employee Training'
  },
  {
    url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80',
    title: 'Team Collaboration'
  },
  {
    url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80',
    title: 'Staff Development'
  }
];

// Food images - Using your food-related images
const FOOD_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
    title: 'Delicious Street Food'
  },
  {
    url: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600&q=80',
    title: 'Freshly Made Chaat'
  },
  {
    url: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80',
    title: 'Authentic Indian Snacks'
  },
  {
    url: 'https://images.unsplash.com/photo-1565557623262-b5e1f0c4e289?w=600&q=80',
    title: 'Traditional Chaat'
  },
  {
    url: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80',
    title: 'Street Food Platter'
  },
  {
    url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80',
    title: 'Indian Cuisine'
  }
];

// Interior images - Using your interior images
const INTERIOR_IMAGES = [
  {
    url: aboutinterior,
    title: 'Cafe Interior'
  },
  {
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
    title: 'Modern Cafe Interior'
  },
  {
    url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&q=80',
    title: 'Cozy Dining Area'
  },
  {
    url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&q=80',
    title: 'Outdoor Seating'
  },
  {
    url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80',
    title: 'Cafe Ambience'
  },
  {
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
    title: 'Restaurant Interior'
  }
];

// Combine all gallery images with proper categorization
const GALLERY_IMAGES: GalleryItem[] = [
  // Food category
  ...FOOD_IMAGES.map((img, index) => ({
    _id: `food-${index}`,
    title: img.title,
    category: 'food',
    mediaType: 'image' as const,
    url: typeof img.url === 'string' ? img.url : (img.url as string),
    createdAt: new Date().toISOString()
  })),
  // Interior category
  ...INTERIOR_IMAGES.map((img, index) => ({
    _id: `interior-${index}`,
    title: img.title,
    category: 'interior',
    mediaType: 'image' as const,
    url: typeof img.url === 'string' ? img.url : (img.url as string),
    createdAt: new Date().toISOString()
  })),
  // Equipment category
  ...EQUIPMENT_IMAGES.map((img, index) => ({
    _id: `equipment-${index}`,
    title: img.title,
    category: 'equipment',
    mediaType: 'image' as const,
    url: img.url,
    createdAt: new Date().toISOString()
  })),
  // Training category
  ...TRAINING_IMAGES.map((img, index) => ({
    _id: `training-${index}`,
    title: img.title,
    category: 'training',
    mediaType: 'image' as const,
    url: img.url,
    createdAt: new Date().toISOString()
  }))
];

const filters = [
  { cat: 'all', label: 'All' },
  { cat: 'interior', label: 'Interior' },
  { cat: 'food', label: 'Food' },
  { cat: 'equipment', label: 'Equipment' },
  { cat: 'training', label: 'Training' },
];

export default function Gallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [active, setActive] = useState('all');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const [useLocalImages, setUseLocalImages] = useState(false);

  useEffect(() => {
    async function fetchGallery() {
      setLoading(true);
      try {
        const response = await api.get('/gallery');
        if (response.data.items && response.data.items.length > 0) {
          setItems(response.data.items);
          setUseLocalImages(false);
        } else {
          // Use local images
          setUseLocalImages(true);
          setItems(GALLERY_IMAGES);
        }
        setError('');
      } catch (err: any) {
        // Use local images if API fails
        setUseLocalImages(true);
        setItems(GALLERY_IMAGES);
        setError('');
      } finally {
        setLoading(false);
      }
    }

    fetchGallery();
  }, []);

  const filtered = active === 'all' 
    ? items 
    : items.filter((item) => item.category === active);

  const getImageUrl = (url: string) => {
    if (url.startsWith('http') || url.startsWith('data:')) return url;
    if (useLocalImages) {
      // If using local images, they're already imported
      return url;
    }
    return `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}${url}`;
  };

  const getCategoryLabel = (cat: string) => {
    const labels: Record<string, string> = {
      'interior': 'Interior',
      'food': 'Food',
      'equipment': 'Equipment',
      'training': 'Training'
    };
    return labels[cat] || cat;
  };

  return (
    <div className="jk-gallery">
      <style>{`
        /* ===== DARK THEME ===== */
        .jk-gallery {
          background: #0a0a0a;
          color: #fff;
          min-height: 100vh;
        }
        .jk-gallery .section {
          padding: 60px 0;
        }
        .jk-gallery .grad-text {
          background: linear-gradient(135deg, #FFD700, #F4A900);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .jk-gallery h1, .jk-gallery h2, .jk-gallery h3 {
          color: #fff;
        }
        .jk-gallery p {
          color: #aaa;
        }
        .jk-gallery .eyebrow {
          color: #FFD700;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: 0.85rem;
          display: inline-block;
          margin-bottom: 10px;
        }

        /* ===== HERO ===== */
        .jk-gallery .page-hero {
          position: relative;
          min-height: 110vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 40px 0 60px;
          margin-top: -70px;
          padding-top: 120px;
        }
        .jk-gallery .hero-bg {
          position: absolute;
          inset: -20% 0 0 0;
          height: 120%;
          z-index: 0;
        }
        .jk-gallery .hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .jk-gallery .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.92) 100%);
        }
        .jk-gallery .hero-content {
          position: relative;
          z-index: 1;
          max-width: 820px;
          padding-top: 20px;
        }
        .jk-gallery .hero-content .breadcrumb {
          color: rgba(255,255,255,0.5);
          font-size: 0.85rem;
          margin-bottom: 16px;
        }
        .jk-gallery .hero-content .breadcrumb a {
          color: #FFD700;
          text-decoration: none;
        }
        .jk-gallery .hero-content h1 {
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          line-height: 1.1;
          color: #fff;
          margin: 0 0 16px;
        }
        .jk-gallery .hero-content p {
          color: rgba(255,255,255,0.8);
          font-size: 1.05rem;
          line-height: 1.7;
          max-width: 580px;
        }

        /* ===== FILTERS ===== */
        .jk-gallery .gallery-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 32px;
          justify-content: center;
        }
        .jk-gallery .menu-tab {
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
        .jk-gallery .menu-tab:hover {
          border-color: rgba(255,215,0,0.2);
          color: #fff;
          transform: translateY(-2px);
        }
        .jk-gallery .menu-tab.active {
          background: #FFD700;
          color: #000;
          border-color: #FFD700;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255,215,0,0.15);
        }

        /* ===== GALLERY GRID ===== */
        .jk-gallery .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .jk-gallery .gallery-item {
          position: relative;
          background: #141414;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 4/3;
          border: 1px solid rgba(255,255,255,0.04);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .jk-gallery .gallery-item:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px -12px rgba(0,0,0,0.5);
          border-color: rgba(255,215,0,0.08);
        }
        .jk-gallery .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .jk-gallery .gallery-item:hover img {
          transform: scale(1.06);
        }
        .jk-gallery .gallery-item .gi-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: flex-end;
          padding: 20px;
        }
        .jk-gallery .gallery-item:hover .gi-overlay {
          opacity: 1;
        }
        .jk-gallery .gallery-item .gi-caption {
          color: #FFFFFF;
          font-weight: 600;
          font-size: 14px;
          width: 100%;
        }
        .jk-gallery .gallery-item .gi-category {
          display: inline-block;
          background: #FFD700;
          color: #000;
          padding: 2px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          margin-top: 6px;
        }

        /* ===== EMPTY STATE ===== */
        .jk-gallery .empty-state {
          grid-column: 1 / -1;
          text-align: center;
          padding: 60px 20px;
          background: #141414;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.04);
        }
        .jk-gallery .empty-state h3 {
          color: #fff;
          margin-bottom: 8px;
        }
        .jk-gallery .empty-state p {
          color: #666;
        }

        /* ===== SKELETON ===== */
        .jk-gallery .skeleton {
          background: #141414;
          border-radius: 16px;
          aspect-ratio: 4/3;
          position: relative;
          overflow: hidden;
        }
        .jk-gallery .skeleton::after {
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

        /* ===== LIGHTBOX ===== */
        .jk-gallery .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 40px;
          backdrop-filter: blur(12px);
        }
        .jk-gallery .lightbox-inner {
          max-width: 90vw;
          max-height: 90vh;
          width: auto;
          height: auto;
          padding: 0;
          overflow: hidden;
          background: #141414;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(255,215,0,0.05);
        }
        .jk-gallery .lightbox-photo {
          width: 100%;
          max-height: 75vh;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .jk-gallery .lightbox-photo img {
          width: 100%;
          height: 100%;
          max-height: 75vh;
          object-fit: contain;
          display: block;
        }
        .jk-gallery .lightbox-close {
          position: absolute;
          top: 24px;
          right: 32px;
          font-size: 40px;
          color: rgba(255,255,255,0.6);
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
          line-height: 1;
        }
        .jk-gallery .lightbox-close:hover {
          color: #fff;
          transform: rotate(90deg);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 992px) {
          .jk-gallery .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .jk-gallery .page-hero {
            min-height: 50vh;
          }
          .jk-gallery .lightbox-inner {
            max-width: 95vw;
            max-height: 95vh;
          }
          .jk-gallery .lightbox-photo {
            max-height: 60vh;
          }
          .jk-gallery .lightbox-photo img {
            max-height: 60vh;
          }
        }
        @media (max-width: 768px) {
          .jk-gallery .page-hero {
            min-height: 45vh;
            margin-top: -50px;
            padding-top: 100px;
          }
          .jk-gallery .hero-content h1 {
            font-size: 2.2rem;
          }
          .jk-gallery .gallery-filters {
            gap: 6px;
          }
          .jk-gallery .menu-tab {
            padding: 8px 16px;
            font-size: 0.75rem;
          }
        }
        @media (max-width: 576px) {
          .jk-gallery .gallery-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .jk-gallery .page-hero {
            min-height: 35vh;
            margin-top: -40px;
            padding-top: 80px;
            padding-bottom: 30px;
          }
          .jk-gallery .hero-content h1 {
            font-size: 1.8rem;
          }
          .jk-gallery .hero-content p {
            font-size: 0.9rem;
          }
          .jk-gallery .menu-tab {
            padding: 6px 12px;
            font-size: 0.7rem;
          }
          .jk-gallery .lightbox {
            padding: 16px;
          }
          .jk-gallery .lightbox-inner {
            max-width: 100vw;
            max-height: 100vh;
            border-radius: 12px;
          }
          .jk-gallery .lightbox-photo {
            max-height: 50vh;
          }
          .jk-gallery .lightbox-photo img {
            max-height: 50vh;
          }
          .jk-gallery .lightbox-close {
            top: 12px;
            right: 20px;
            font-size: 32px;
          }
        }
      `}</style>

      {/* ============ HERO ============ */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src={heroBg} alt="JK Chaat Cafe Gallery" />
          <div className="hero-overlay" />
        </div>
        <div className="container hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            A look inside our <span className="grad-text">franchise network</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Real outlets, real setups, real training days — a glimpse of what your cafe will look like.
          </motion.p>
        </div>
      </section>

      {/* ============ GALLERY SECTION ============ */}
      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {filters.map((f) => (
              <button
                key={f.cat}
                className={`menu-tab ${active === f.cat ? 'active' : ''}`}
                onClick={() => setActive(f.cat)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="gallery-grid">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="skeleton" />
              ))}
            </div>
          ) : error ? (
            <div className="gallery-grid">
              <div className="empty-state">
                <h3>Something went wrong</h3>
                <p>{error}</p>
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="gallery-grid">
              <div className="empty-state">
                <h3>No images found</h3>
                <p>Check back soon for new photos from our franchise network.</p>
              </div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="gallery-grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {filtered.map((item, index) => (
                  <motion.div
                    key={item._id}
                    className="gallery-item"
                    onClick={() => setLightbox(item)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    whileHover={{ y: -6 }}
                  >
                    <img
                      src={getImageUrl(item.url)}
                      alt={item.title}
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80';
                      }}
                    />
                    <div className="gi-overlay">
                      <div className="gi-caption">
                        {item.title}
                        <div className="gi-category">{getCategoryLabel(item.category)}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* ============ LIGHTBOX ============ */}
      {lightbox && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && setLightbox(null)}
        >
          <motion.span
            className="lightbox-close"
            onClick={() => setLightbox(null)}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            ×
          </motion.span>
          <motion.div
            className="lightbox-inner"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="lightbox-photo">
              <img
                src={getImageUrl(lightbox.url)}
                alt={lightbox.title}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80';
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}