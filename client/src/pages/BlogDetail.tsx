// src/pages/BlogDetail.tsx
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchBlog() {
      setLoading(true);
      try {
        const response = await api.get(`/blogs/${slug}`);
        setBlog(response.data);
        setError('');
      } catch (err: any) {
        setError('Blog post not found.');
        console.error('Error fetching blog:', err);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  // Function to get cover image
  const getCoverImage = () => {
    if (blog?.coverImage) {
      return `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}${blog.coverImage}`;
    }
    return '/images/blog-default.jpg';
  };

  if (loading) {
    return (
      <div className="blog-detail-loading">
        <div className="container">
          <div style={{ 
            maxWidth: '800px', 
            margin: '0 auto',
            padding: '60px 20px'
          }}>
            <div style={{ 
              height: '400px', 
              background: '#F5F5F5', 
              borderRadius: '16px',
              marginBottom: '30px',
              animation: 'pulse 1.5s ease-in-out infinite'
            }} />
            <div style={{ 
              height: '40px', 
              background: '#F5F5F5', 
              borderRadius: '8px',
              marginBottom: '16px',
              width: '70%',
              animation: 'pulse 1.5s ease-in-out infinite'
            }} />
            <div style={{ 
              height: '20px', 
              background: '#F5F5F5', 
              borderRadius: '4px',
              marginBottom: '10px',
              width: '30%',
              animation: 'pulse 1.5s ease-in-out infinite'
            }} />
            <div style={{ 
              height: '100px', 
              background: '#F5F5F5', 
              borderRadius: '8px',
              animation: 'pulse 1.5s ease-in-out infinite'
            }} />
          </div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <section className="page-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '80px', marginBottom: '20px' }}>404</div>
          <h1 style={{ marginBottom: '16px' }}>This page hasn't opened yet.</h1>
          <p style={{ 
            maxWidth: '500px', 
            margin: '0 auto 30px',
            color: '#666666',
            fontSize: '1.1rem'
          }}>
            The page you're looking for doesn't exist — but your cafe still can. 
            Let's get you back on track.
          </p>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
          <div style={{ marginTop: '40px' }}>
            <Link to="/blogs" style={{ color: '#000000', textDecoration: 'none', borderBottom: '2px solid #FFD700' }}>
              ← Explore All Blogs
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <style>{`
        .blog-detail {
          padding: 40px 0 80px;
        }

        .blog-detail .blog-header {
          margin-bottom: 40px;
        }

        .blog-detail .blog-header .breadcrumb {
          margin-bottom: 20px;
        }

        .blog-detail .blog-header .breadcrumb a {
          color: #000000;
          text-decoration: none;
        }

        .blog-detail .blog-header .breadcrumb a:hover {
          color: #FFD700;
        }

        .blog-detail .blog-header h1 {
          font-size: 2.8rem;
          line-height: 1.2;
          margin: 0 0 16px;
          color: #000000;
        }

        .blog-detail .blog-meta-top {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          align-items: center;
          color: #666666;
          font-size: 0.9rem;
        }

        .blog-detail .blog-meta-top .category-tag {
          background: #FFD700;
          color: #000000;
          padding: 4px 16px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.8rem;
        }

        .blog-detail .blog-cover {
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 40px;
          background: #F5F5F5;
        }

        .blog-detail .blog-cover img {
          width: 100%;
          height: auto;
          max-height: 500px;
          object-fit: cover;
          display: block;
        }

        .blog-detail .blog-content {
          max-width: 800px;
          margin: 0 auto;
          font-size: 1.1rem;
          line-height: 1.8;
          color: #1A1A1A;
        }

        .blog-detail .blog-content h2 {
          font-size: 1.8rem;
          margin: 40px 0 20px;
          color: #000000;
        }

        .blog-detail .blog-content h3 {
          font-size: 1.4rem;
          margin: 30px 0 16px;
          color: #000000;
        }

        .blog-detail .blog-content p {
          margin-bottom: 20px;
        }

        .blog-detail .blog-content ul,
        .blog-detail .blog-content ol {
          margin: 16px 0 20px 24px;
        }

        .blog-detail .blog-content li {
          margin-bottom: 8px;
        }

        .blog-detail .blog-content blockquote {
          border-left: 4px solid #FFD700;
          padding: 16px 24px;
          margin: 24px 0;
          background: #FFF8E7;
          border-radius: 0 8px 8px 0;
          font-style: italic;
        }

        .blog-detail .blog-content img {
          max-width: 100%;
          border-radius: 12px;
          margin: 24px 0;
        }

        .blog-detail .blog-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 40px 0 20px;
          padding-top: 24px;
          border-top: 1px solid #E0E0E0;
        }

        .blog-detail .blog-tags span {
          background: #F5F5F5;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.8rem;
          color: #666666;
        }

        .blog-detail .blog-back {
          display: inline-block;
          margin-top: 40px;
          color: #000000;
          text-decoration: none;
          border-bottom: 2px solid #FFD700;
          padding-bottom: 4px;
        }

        .blog-detail .blog-back:hover {
          color: #FFD700;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @media (max-width: 768px) {
          .blog-detail .blog-header h1 {
            font-size: 2rem;
          }
          .blog-detail .blog-content {
            font-size: 1rem;
          }
          .blog-detail .blog-cover img {
            max-height: 300px;
          }
        }

        @media (max-width: 576px) {
          .blog-detail {
            padding: 20px 0 40px;
          }
          .blog-detail .blog-header h1 {
            font-size: 1.6rem;
          }
          .blog-detail .blog-content {
            font-size: 0.95rem;
          }
          .blog-detail .blog-cover img {
            max-height: 200px;
          }
        }
      `}</style>

      <section className="blog-detail">
        <div className="container">
          <div className="blog-header">
            <div className="breadcrumb">
              <Link to="/">Home</Link> / <Link to="/blogs">Blogs</Link> / {blog.title}
            </div>
            <h1>{blog.title}</h1>
            <div className="blog-meta-top">
              {blog.category && (
                <span className="category-tag">{blog.category}</span>
              )}
              <span>
                {new Date(blog.createdAt).toLocaleDateString('en-IN', { 
                  day: '2-digit', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </span>
              <span>· {Math.ceil(blog.content.length / 1000)} min read</span>
            </div>
          </div>

          {blog.coverImage && (
            <div className="blog-cover">
              <img src={getCoverImage()} alt={blog.title} />
            </div>
          )}

          <div className="blog-content">
            {blog.excerpt && (
              <p style={{ 
                fontSize: '1.2rem', 
                color: '#666666', 
                fontStyle: 'italic',
                borderLeft: '4px solid #FFD700',
                paddingLeft: '20px',
                marginBottom: '30px'
              }}>
                {blog.excerpt}
              </p>
            )}
            
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            
            {blog.tags && blog.tags.length > 0 && (
              <div className="blog-tags">
                {blog.tags.map((tag, index) => (
                  <span key={index}>#{tag}</span>
                ))}
              </div>
            )}
          </div>

          <Link to="/blogs" className="blog-back">
            ← Back to all blogs
          </Link>
        </div>
      </section>
    </>
  );
}