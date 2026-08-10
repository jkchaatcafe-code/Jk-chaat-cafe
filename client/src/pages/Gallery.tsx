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

// Hero Background Image
const HERO_IMG = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=80';

// Sample Gallery Images (Unsplash)
const SAMPLE_IMAGES = [
  {
    id: '1',
    title: 'Modern Cafe Interior',
    category: 'interior',
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80'
  },
  {
    id: '2',
    title: 'Delicious Street Food',
    category: 'food',
    url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80'
  },
  {
    id: '3',
    title: 'Professional Kitchen Setup',
    category: 'equipment',
    url: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=600&q=80'
  },
  {
    id: '4',
    title: 'Staff Training Session',
    category: 'training',
    url: 'https://images.unsplash.com/photo-1522336572468-97b06e8ef143?w=600&q=80'
  },
  {
    id: '5',
    title: 'Cozy Dining Area',
    category: 'interior',
    url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&q=80'
  },
  {
    id: '6',
    title: 'Freshly Made Chaat',
    category: 'food',
    url: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600&q=80'
  },
  {
    id: '7',
    title: 'Commercial Kitchen',
    category: 'equipment',
    url: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&q=80'
  },
  {
    id: '8',
    title: 'Team Training',
    category: 'training',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80'
  },
  {
    id: '9',
    title: 'Outdoor Seating',
    category: 'interior',
    url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&q=80'
  },
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
  const [useSampleImages, setUseSampleImages] = useState(false);

  useEffect(() => {
    async function fetchGallery() {
      setLoading(true);
      try {
        const response = await api.get('/gallery');
        if (response.data.items && response.data.items.length > 0) {
          setItems(response.data.items);
        } else {
          // If no images from API, use sample images
          setUseSampleImages(true);
          // Convert sample images to GalleryItem format
          const sampleItems: GalleryItem[] = SAMPLE_IMAGES.map(img => ({
            _id: img.id,
            title: img.title,
            category: img.category,
            mediaType: 'image',
            url: img.url,
            createdAt: new Date().toISOString(),
          }));
          setItems(sampleItems);
        }
        setError('');
      } catch (err: any) {
        // If API fails, use sample images
        setUseSampleImages(true);
        const sampleItems: GalleryItem[] = SAMPLE_IMAGES.map(img => ({
          _id: img.id,
          title: img.title,
          category: img.category,
          mediaType: 'image',
          url: img.url,
          createdAt: new Date().toISOString(),
        }));
        setItems(sampleItems);
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

  // Function to get image URL
  const getImageUrl = (url: string) => {
    if (url.startsWith('http')) return url;
    return `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}${url}`;
  };

  // Function to get category label
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
          <img src={HERO_IMG} alt="JK Chaat Cafe Gallery" />
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