import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '../components/Reveal';
import { api } from '../api/client';

type Blog = {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  tags: string[];
  excerpt?: string;
  content: string;
  coverImage?: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
};

// Hero Background Image
const HERO_IMG = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80';

// Fallback images for blog cards
const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80',
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
];

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true);
      try {
        const response = await api.get('/blogs');
        // Only show published blogs
        const publishedBlogs = response.data.items.filter((b: Blog) => b.published === true);
        // Sort by newest first
        const sorted = publishedBlogs.sort(
          (a: Blog, b: Blog) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setBlogs(sorted);
        setError('');
      } catch (err: any) {
        setError('Could not load blog posts. Please try again later.');
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  // Function to get cover image or fallback
  const getCoverImage = (blog: Blog, index: number) => {
    if (blog.coverImage) {
      return `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}${blog.coverImage}`;
    }
    // Fallback images
    return FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
  };

  // Function to get category color
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Franchise': '#FFD700',
      'Tips': '#FFD700',
      'Story': '#FFD700',
      'Guide': '#FFD700',
    };
    return colors[category] || '#FFD700';
  };

  return (
    <div className="jk-blogs">
      <style>{`
        /* ===== DARK THEME ===== */
        .jk-blogs {
          background: #0a0a0a;
          color: #fff;
          min-height: 100vh;
        }
        .jk-blogs .section {
          padding: 60px 0;
        }
        .jk-blogs .grad-text {
          background: linear-gradient(135deg, #FFD700, #F4A900);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .jk-blogs h1, .jk-blogs h2, .jk-blogs h3, .jk-blogs h4 {
          color: #fff;
        }
        .jk-blogs p {
          color: #aaa;
        }
        .jk-blogs .breadcrumb {
          color: rgba(255,255,255,0.5);
          font-size: 0.85rem;
          margin-bottom: 16px;
        }
        .jk-blogs .breadcrumb a {
          color: #FFD700;
          text-decoration: none;
        }

        /* ===== HERO ===== */
        .jk-blogs .page-hero {
          position: relative;
          min-height: 110vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 40px 0 60px;
          margin-top: -70px;
          padding-top: 120px;
        }
        .jk-blogs .hero-bg {
          position: absolute;
          inset: -20% 0 0 0;
          height: 120%;
          z-index: 0;
        }
        .jk-blogs .hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .jk-blogs .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.92) 100%);
        }
        .jk-blogs .hero-content {
          position: relative;
          z-index: 1;
          max-width: 820px;
          padding-top: 20px;
        }
        .jk-blogs .hero-content h1 {
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          line-height: 1.1;
          color: #fff;
          margin: 0 0 16px;
        }
        .jk-blogs .hero-content p {
          color: rgba(255,255,255,0.8);
          font-size: 1.05rem;
          line-height: 1.7;
          max-width: 580px;
        }

        /* ===== BLOG GRID ===== */
        .jk-blogs .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 20px;
        }
        .jk-blogs .blog-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }
        .jk-blogs .blog-link:hover {
          text-decoration: none;
        }
        .jk-blogs .blog-card {
          background: #141414;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.04);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          height: 100%;
        }
        .jk-blogs .blog-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px -12px rgba(0,0,0,0.5);
          border-color: rgba(255,215,0,0.08);
        }
        .jk-blogs .blog-card .thumb {
          height: 200px;
          background-color: #0a0a0a;
          position: relative;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          background-size: cover;
          background-position: center;
        }
        .jk-blogs .blog-card .thumb .blog-cat-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          background: #FFD700;
          color: #000;
          padding: 4px 14px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          box-shadow: 0 4px 15px rgba(255,215,0,0.15);
        }
        .jk-blogs .blog-card .body {
          padding: 20px 24px 24px;
        }
        .jk-blogs .blog-card .body h4 {
          font-size: 1.05rem;
          color: #fff;
          margin: 0 0 10px;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .jk-blogs .blog-card .body p {
          font-size: 0.875rem;
          color: #888;
          line-height: 1.6;
          margin: 0 0 14px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .jk-blogs .blog-card .blog-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
          color: #666;
          padding-top: 12px;
          border-top: 1px solid rgba(255,255,255,0.04);
        }
        .jk-blogs .blog-card .blog-meta span {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* ===== EMPTY STATE ===== */
        .jk-blogs .empty-state {
          grid-column: 1 / -1;
          text-align: center;
          padding: 60px 20px;
          background: #141414;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.04);
        }
        .jk-blogs .empty-state h3 {
          color: #fff;
          margin-bottom: 8px;
        }
        .jk-blogs .empty-state p {
          color: #666;
        }

        /* ===== SKELETON ===== */
        .jk-blogs .skeleton {
          background: #141414;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.04);
          min-height: 250px;
          position: relative;
          overflow: hidden;
        }
        .jk-blogs .skeleton .skeleton-thumb {
          height: 160px;
          background: #1a1a1a;
          border-radius: 12px 12px 0 0;
        }
        .jk-blogs .skeleton .skeleton-body {
          padding: 16px 20px 20px;
        }
        .jk-blogs .skeleton .skeleton-line {
          height: 16px;
          background: #1a1a1a;
          border-radius: 4px;
          margin-bottom: 10px;
        }
        .jk-blogs .skeleton .skeleton-line.short {
          width: 70%;
        }
        .jk-blogs .skeleton .skeleton-line.medium {
          width: 90%;
        }
        .jk-blogs .skeleton::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.02), transparent);
          animation: skeletonShimmer 1.5s infinite;
        }
        @keyframes skeletonShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 992px) {
          .jk-blogs .blog-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .jk-blogs .page-hero {
            min-height: 50vh;
          }
        }
        @media (max-width: 768px) {
          .jk-blogs .page-hero {
            min-height: 45vh;
            margin-top: -50px;
            padding-top: 100px;
          }
          .jk-blogs .hero-content h1 {
            font-size: 2.2rem;
          }
        }
        @media (max-width: 576px) {
          .jk-blogs .blog-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .jk-blogs .blog-card .thumb {
            height: 160px;
          }
          .jk-blogs .blog-card .body {
            padding: 16px 18px 20px;
          }
          .jk-blogs .page-hero {
            min-height: 35vh;
            margin-top: -40px;
            padding-top: 80px;
            padding-bottom: 30px;
          }
          .jk-blogs .hero-content h1 {
            font-size: 1.8rem;
          }
          .jk-blogs .hero-content p {
            font-size: 0.9rem;
          }
          .jk-blogs .skeleton .skeleton-thumb {
            height: 140px;
          }
        }
      `}</style>

      {/* ============ HERO ============ */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src={HERO_IMG} alt="JK Chaat Cafe Blog" />
          <div className="hero-overlay" />
        </div>
        <div className="container hero-content">
         
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Ideas for people thinking about <span className="grad-text">owning a cafe</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Franchise guides, partner stories and honest cost breakdowns from our team.
          </motion.p>
        </div>
      </section>

      {/* ============ BLOGS SECTION ============ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {error && (
            <div style={{
              textAlign: 'center',
              padding: '40px 20px',
              background: '#141414',
              borderRadius: '12px',
              border: '1px solid rgba(255,215,0,0.1)'
            }}>
              <p style={{ color: '#FFD700', marginBottom: 0 }}>{error}</p>
            </div>
          )}

          {loading ? (
            <div className="blog-grid">
              {[1, 2, 3].map((i) => (
                <div key={i} className="skeleton">
                  <div className="skeleton-thumb" />
                  <div className="skeleton-body">
                    <div className="skeleton-line short" />
                    <div className="skeleton-line medium" />
                    <div className="skeleton-line" style={{ width: '60%' }} />
                  </div>
                </div>
              ))}
            </div>
          ) : blogs.length === 0 ? (
            <div className="blog-grid">
              <div className="empty-state">
                <h3>No blog posts yet</h3>
                <p>Check back soon for new articles and guides!</p>
              </div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                className="blog-grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {blogs.map((b, i) => (
                  <motion.div
                    key={b._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                  >
                    <Reveal delay={i * 0.04} className="blog-card">
                      <Link to={`/blogs/${b.slug}`} className="blog-link">
                        <div
                          className="thumb"
                          style={{
                            backgroundImage: `url(${getCoverImage(b, i)})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        >
                          {b.category && (
                            <span
                              className="blog-cat-tag"
                              style={{
                                background: getCategoryColor(b.category),
                              }}
                            >
                              {b.category}
                            </span>
                          )}
                        </div>
                        <div className="body">
                          <h4>{b.title}</h4>
                          <p>{b.excerpt || 'Read more about this topic...'}</p>
                          <div className="blog-meta">
                            <span>
                              {new Date(b.createdAt).toLocaleDateString('en-IN', {
                                day: '2-digit',
                                month: 'short',
                                year: 'numeric'
                              })}
                            </span>
                            <span>{Math.ceil(b.content.length / 1000)} min read</span>
                          </div>
                        </div>
                      </Link>
                    </Reveal>
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