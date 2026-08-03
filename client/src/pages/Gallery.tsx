// src/pages/Gallery.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api/client';

type GalleryItem = {
  _id: string;
  title: string;
  category: string;
  mediaType: 'image' | 'video';
  url: string;
  createdAt: string;
};

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

  useEffect(() => {
    async function fetchGallery() {
      setLoading(true);
      try {
        const response = await api.get('/gallery');
        setItems(response.data.items);
        setError('');
      } catch (err: any) {
        setError('Could not load gallery images. Please try again later.');
        console.error('Error fetching gallery:', err);
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
        .jk-gallery {
          --jk-yellow: #FFD700;
          --jk-yellow-deep: #C98E00;
          --jk-yellow-soft: #FFF8E7;
          --jk-black: #1A1A1A;
        }

        .jk-gallery .page-hero { padding: 90px 0 40px; }
        .jk-gallery .section { padding: 40px 0; }

        .jk-gallery .eyebrow { color: var(--jk-black); }
        .jk-gallery .eyebrow::before { background: var(--jk-yellow); }
        .jk-gallery .grad-text { 
          background: linear-gradient(135deg, #FFD700, #C98E00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .jk-gallery h1, .jk-gallery h3 { color: var(--jk-black); }
        .jk-gallery p { color: #4A4A4A; }

        .jk-gallery .gallery-filters { 
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }
        
        .jk-gallery .menu-tab {
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
        
        .jk-gallery .menu-tab.active, 
        .jk-gallery .menu-tab:hover {
          background: #000000;
          color: #FFFFFF;
          border-color: #000000;
        }

        .jk-gallery .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .jk-gallery .gallery-item {
          position: relative;
          background: #F5F5F5;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 4/3;
        }

        .jk-gallery .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .jk-gallery .gallery-item:hover img {
          transform: scale(1.06);
        }

        .jk-gallery .gallery-item .gi-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 60%);
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
          color: #000000;
          padding: 2px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          margin-top: 6px;
        }

        .jk-gallery .empty-state {
          grid-column: 1 / -1;
          text-align: center;
          padding: 80px 20px;
          background: #FFFFFF;
          border-radius: 16px;
          border: 1px solid #E0E0E0;
        }

        .jk-gallery .empty-state h3 {
          margin-bottom: 8px;
        }

        .jk-gallery .empty-state p {
          color: #666666;
        }

        /* Lightbox - Fixed size, no crop */
        .jk-gallery .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 40px;
          backdrop-filter: blur(8px);
        }

        .jk-gallery .lightbox-inner {
          max-width: 90vw;
          max-height: 90vh;
          width: auto;
          height: auto;
          padding: 0;
          overflow: hidden;
          background: #FFFFFF;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
        }
        
        .jk-gallery .lightbox-photo {
          width: 100%;
          max-height: 70vh;
          background: #F5F5F5;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .jk-gallery .lightbox-photo img {
          width: 100%;
          height: 100%;
          max-height: 70vh;
          object-fit: contain;
          display: block;
        }
        
        .jk-gallery .lightbox-body {
          padding: 20px 28px 24px;
          flex-shrink: 0;
        }
        
        .jk-gallery .lightbox-body .eyebrow {
          color: #C98E00;
          font-weight: 700;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .jk-gallery .lightbox-body h3 {
          margin: 4px 0 8px;
          font-size: 1.2rem;
        }

        .jk-gallery .lightbox-body p {
          font-size: 0.9rem;
          color: #666;
          margin: 0;
        }

        .jk-gallery .lightbox-close {
          position: absolute;
          top: 20px;
          right: 30px;
          font-size: 40px;
          color: #FFFFFF;
          cursor: pointer;
          z-index: 10;
          transition: transform 0.3s ease;
          line-height: 1;
        }

        .jk-gallery .lightbox-close:hover {
          transform: rotate(90deg);
        }

        .jk-gallery .lightbox {
          position: fixed;
        }

        /* Skeleton loader */
        .jk-gallery .skeleton {
          background: #F5F5F5;
          border-radius: 12px;
          aspect-ratio: 4/3;
          animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @media (max-width: 992px) {
          .jk-gallery .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
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

        @media (max-width: 576px) {
          .jk-gallery .gallery-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .jk-gallery .gallery-filters {
            gap: 6px;
          }
          .jk-gallery .menu-tab {
            padding: 6px 14px;
            font-size: 12px;
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
          .jk-gallery .lightbox-body {
            padding: 16px 20px 20px;
          }
          .jk-gallery .lightbox-body h3 {
            font-size: 1rem;
          }
          .jk-gallery .lightbox-close {
            top: 12px;
            right: 20px;
            font-size: 32px;
          }
        }
      `}</style>

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / Gallery</div>
          <h1>A look inside our <span className="grad-text">franchise network</span>.</h1>
          <p>Real outlets, real setups, real training days — a glimpse of what your cafe will look like.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
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
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>📸</div>
                <h3>Something went wrong</h3>
                <p>{error}</p>
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="gallery-grid">
              <div className="empty-state">
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🖼️</div>
                <h3>No images found</h3>
                <p>Check back soon for new photos from our franchise network.</p>
              </div>
            </div>
          ) : (
            <div className="gallery-grid">
              {filtered.map((item) => (
                <div 
                  key={item._id} 
                  className="gallery-item" 
                  onClick={() => setLightbox(item)}
                >
                  <img 
                    src={getImageUrl(item.url)} 
                    alt={item.title}
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/placeholder.jpg';
                    }}
                  />
                  <div className="gi-overlay">
                    <div className="gi-caption">
                      {item.title}
                      <div className="gi-category">{getCategoryLabel(item.category)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {lightbox && (
        <div className="lightbox" onClick={(e) => e.target === e.currentTarget && setLightbox(null)}>
          <span className="lightbox-close" onClick={() => setLightbox(null)}>&times;</span>
          <div className="lightbox-inner">
            <div className="lightbox-photo">
              <img 
                src={getImageUrl(lightbox.url)} 
                alt={lightbox.title}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/images/placeholder.jpg';
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}