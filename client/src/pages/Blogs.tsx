import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
  const getCoverImage = (blog: Blog) => {
    if (blog.coverImage) {
      return `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}${blog.coverImage}`;
    }
    // Fallback images based on category
    const fallbacks = {
      'Franchise': '/images/blog-franchise.jpg',
      'Tips': '/images/blog-tips.jpg',
      'Story': '/images/blog-story.jpg',
    };
    return fallbacks[blog.category as keyof typeof fallbacks] || '/images/blog-default.jpg';
  };

  // Function to get category color
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Franchise': '#FFD700',
      'Tips': '#000000',
      'Story': '#FFD700',
      'Guide': '#000000',
    };
    return colors[category] || '#000000';
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / Blogs</div>
          <h1>Ideas for people thinking about <span className="grad-text">owning a cafe</span>.</h1>
          <p>Franchise guides, partner stories and honest cost breakdowns from our team.</p>
        </div>
      </section>
      
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {error && (
            <div style={{ 
              textAlign: 'center', 
              padding: '40px 20px',
              backgroundColor: '#FFF3E0',
              borderRadius: '12px',
              border: '1px solid #FFD700'
            }}>
              <p style={{ color: '#000000', marginBottom: 0 }}>{error}</p>
            </div>
          )}

          {loading ? (
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '24px',
              marginTop: '20px'
            }}>
              {[1, 2, 3].map((i) => (
                <div key={i} style={{ 
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '20px',
                  border: '1px solid #E0E0E0',
                  minHeight: '250px'
                }}>
                  <div style={{ 
                    height: '160px', 
                    background: '#F5F5F5', 
                    borderRadius: '12px',
                    marginBottom: '16px',
                    animation: 'pulse 1.5s ease-in-out infinite'
                  }} />
                  <div style={{ 
                    height: '20px', 
                    background: '#F5F5F5', 
                    borderRadius: '4px',
                    marginBottom: '10px',
                    width: '70%',
                    animation: 'pulse 1.5s ease-in-out infinite'
                  }} />
                  <div style={{ 
                    height: '14px', 
                    background: '#F5F5F5', 
                    borderRadius: '4px',
                    width: '90%',
                    animation: 'pulse 1.5s ease-in-out infinite'
                  }} />
                </div>
              ))}
            </div>
          ) : blogs.length === 0 ? (
            <div style={{ 
              textAlign: 'center', 
              padding: '60px 20px',
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #E0E0E0'
            }}>
              <h3 style={{ color: '#000000', marginBottom: '8px' }}>No blog posts yet</h3>
              <p style={{ color: '#666666' }}>Check back soon for new articles and guides!</p>
            </div>
          ) : (
            <div className="blog-grid">
              {blogs.map((b, i) => (
                <Reveal key={b._id} delay={i * 0.04} className="blog-card">
                  <Link to={`/blogs/${b.slug}`} className="blog-link">
                    <div className="thumb" style={{ 
                      backgroundImage: `url(${getCoverImage(b)})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundColor: '#F5F5F5'
                    }}>
                      {b.category && (
                        <span className="blog-cat-tag" style={{ 
                          background: getCategoryColor(b.category),
                          color: '#FFFFFF',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '11px',
                          fontWeight: '600',
                          position: 'absolute',
                          top: '12px',
                          left: '12px'
                        }}>
                          {b.category}
                        </span>
                      )}
                    </div>
                    <div className="body">
                      <h4>{b.title}</h4>
                      <p>{b.excerpt || 'Read more about this topic...'}</p>
                      <div className="blog-meta">
                        <span>{new Date(b.createdAt).toLocaleDateString('en-IN', { 
                          day: '2-digit', 
                          month: 'short', 
                          year: 'numeric' 
                        })}</span>
                        <span>{Math.ceil(b.content.length / 1000)} min read</span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        .blog-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .blog-link:hover {
          text-decoration: none;
        }

        .blog-card {
          background: #FFFFFF;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #E0E0E0;
          transition: all 0.3s ease;
          height: 100%;
        }

        .blog-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
          border-color: #FFD700;
        }

        .blog-card .thumb {
          height: 200px;
          background-color: #F5F5F5;
          position: relative;
          border-bottom: 1px solid #E0E0E0;
        }

        .blog-card .body {
          padding: 20px 24px 24px;
        }

        .blog-card .body h4 {
          font-size: 1.05rem;
          margin: 0 0 10px;
          color: #000000;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .blog-card .body p {
          font-size: 0.875rem;
          color: #666666;
          line-height: 1.6;
          margin: 0 0 14px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .blog-card .blog-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
          color: #999999;
          padding-top: 12px;
          border-top: 1px solid #F0F0F0;
        }

        .blog-card .blog-meta span {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 20px;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @media (max-width: 992px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 576px) {
          .blog-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .blog-card .thumb {
            height: 160px;
          }
          .blog-card .body {
            padding: 16px 18px 20px;
          }
        }
      `}</style>
    </>
  );
}