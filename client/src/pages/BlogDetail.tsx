// src/pages/BlogDetail.tsx

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../api/client';
import SEO from '../components/SEO';
import { organizationSchema, breadcrumbSchema } from '../utils/schema';

type Blog = {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  tags: string[];
  excerpt?: string;
  content: string;
  coverImage?: string;
  featuredImage?: string;
  seoTitle?: string;
  seoDescription?: string;
  author?: string;
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

  const getCoverImage = () => {
    if (!blog?.coverImage) return '/images/blog-default.jpg';
    
    if (blog.coverImage.startsWith('http')) {
      return blog.coverImage;
    }
    
    const apiBase = import.meta.env.VITE_API_BASE || 'https://jk-chaat-cafe.onrender.com';
    return `${apiBase}${blog.coverImage}`;
  };

  const getFeaturedImage = () => {
    if (blog?.featuredImage) {
      return blog.featuredImage.startsWith('http') ? blog.featuredImage : `${import.meta.env.VITE_API_BASE || 'https://jk-chaat-cafe.onrender.com'}${blog.featuredImage}`;
    }
    if (blog?.coverImage) {
      return getCoverImage();
    }
    return 'https://jkchaatcafe.com/images/og-default.jpg';
  };

  const breadcrumbItems = blog ? [
    { name: 'Home', url: 'https://jkchaatcafe.com/' },
    { name: 'Blogs', url: 'https://jkchaatcafe.com/blogs' },
    { name: blog.title, url: `https://jkchaatcafe.com/blogs/${blog.slug}` }
  ] : [];

  if (loading) {
    return (
      <div className="blog-detail-loading" style={{ paddingTop: '120px', background: '#fff' }}>
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
      <section className="page-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: '120px' }}>
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
      <SEO
        title={blog.seoTitle || blog.title}
        description={blog.seoDescription || blog.excerpt || `Read about ${blog.title} on JK Chaat Cafe Blog`}
        canonical={`https://jkchaatcafe.com/blogs/${blog.slug}`}
        ogImage={getFeaturedImage()}
        ogType="article"
        schema={[organizationSchema, breadcrumbSchema(breadcrumbItems)]}
        article={{
          publishedTime: blog.createdAt,
          modifiedTime: blog.updatedAt,
          author: blog.author || 'JK Chaat Cafe'
        }}
      />

      <style>{`
        /* ===== PAGE WRAPPER - HEADER KO TRANSPARENT RAKHNE KE LIYE ===== */
        .blog-detail-page {
          padding-top: 120px;
          background: #ffffff;
          min-height: 100vh;
        }

        .blog-detail {
          padding: 0 0 80px;
          background: transparent;
        }

        .blog-detail .blog-header {
          margin-bottom: 40px;
        }

        .blog-detail .blog-header .breadcrumb {
          margin-bottom: 20px;
          font-size: 14px;
          color: #666;
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

        .blog-detail .blog-content h1 {
          font-size: 2.4rem;
          margin: 40px 0 20px;
          color: #000000;
        }

        .blog-detail .blog-content h2 {
          font-size: 2rem;
          margin: 40px 0 16px;
          color: #000000;
        }

        .blog-detail .blog-content h3 {
          font-size: 1.6rem;
          margin: 30px 0 16px;
          color: #000000;
        }

        .blog-detail .blog-content h4 {
          font-size: 1.3rem;
          margin: 24px 0 12px;
          color: #000000;
        }

        .blog-detail .blog-content h5,
        .blog-detail .blog-content h6 {
          font-size: 1.1rem;
          margin: 20px 0 10px;
          color: #000000;
        }

        .blog-detail .blog-content p {
          margin-bottom: 20px;
          color: #1A1A1A;
        }

        .blog-detail .blog-content ul,
        .blog-detail .blog-content ol {
          margin: 16px 0 20px 24px;
        }

        .blog-detail .blog-content li {
          margin-bottom: 8px;
          color: #1A1A1A;
        }

        .blog-detail .blog-content blockquote {
          border-left: 4px solid #FFD700;
          padding: 16px 24px;
          margin: 24px 0;
          background: #FFF8E7;
          border-radius: 0 8px 8px 0;
          font-style: italic;
        }

        .blog-detail .blog-content blockquote p {
          margin-bottom: 0;
        }

        .blog-detail .blog-content img {
          max-width: 100%;
          border-radius: 12px;
          margin: 24px 0;
          height: auto;
        }

        .blog-detail .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
        }

        .blog-detail .blog-content table th,
        .blog-detail .blog-content table td {
          border: 1px solid #ddd;
          padding: 10px 14px;
          text-align: left;
        }

        .blog-detail .blog-content table th {
          background: #f5f5f5;
          font-weight: 600;
        }

        .blog-detail .blog-content pre {
          background: #f5f5f5;
          padding: 16px 20px;
          border-radius: 8px;
          overflow-x: auto;
          margin: 20px 0;
        }

        .blog-detail .blog-content code {
          background: #f5f5f5;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.9em;
        }

        .blog-detail .blog-content hr {
          border: none;
          border-top: 2px solid #eee;
          margin: 30px 0;
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

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .blog-detail-page {
            padding-top: 100px;
          }
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
          .blog-detail-page {
            padding-top: 80px;
          }
          .blog-detail {
            padding: 0 0 40px;
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
          .blog-detail .blog-header .breadcrumb {
            font-size: 12px;
          }
        }
      `}</style>

      {/* ✅ PAGE WRAPPER - Header ke neeche start hoga */}
      <div className="blog-detail-page">
        <div className="container">
          <div className="blog-detail">
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
                <img 
                  src={getCoverImage()} 
                  alt={blog.title}
                  loading="eager"
                  decoding="async"
                />
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
        </div>
      </div>
    </>
  );
}