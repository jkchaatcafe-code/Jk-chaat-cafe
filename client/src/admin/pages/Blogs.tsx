import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';
import { adminApi } from '../api/adminApi';

type Blog = {
  _id: string;
  title: string;
  category?: string;
  published: boolean;
  createdAt: string;
};

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function load() {
    setLoading(true);
    try {
      const res = await adminApi.get('/blogs/admin/all');
      // Serial order by publish date, newest first — matches the public blog page.
      const sorted = [...res.data.items].sort(
        (a: Blog, b: Blog) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
      setBlogs(sorted);
    } catch {
      setError('Could not load blog posts.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  async function remove(id: string) {
    if (!confirm('Delete this blog post permanently?')) return;
    try {
      await adminApi.delete(`/blogs/${id}`);
      setBlogs((prev) => prev.filter((b) => b._id !== id));
    } catch {
      alert('Could not delete this post.');
    }
  }

  return (
    <AdminLayout title="Blogs">
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
        <Link to="/admin/blogs/new" className="a-btn a-btn-yellow">+ New Blog Post</Link>
      </div>

      {error && <div className="a-msg error" style={{ marginBottom: 14 }}>{error}</div>}

      <div className="a-card a-table-wrap">
        <table className="a-table">
          <thead>
            <tr><th>Title</th><th>Category</th><th>Status</th><th>Published Date</th><th></th></tr>
          </thead>
          <tbody>
            {loading && <tr><td colSpan={5} className="a-empty">Loading...</td></tr>}
            {!loading && blogs.length === 0 && <tr><td colSpan={5} className="a-empty">No blog posts yet. Create your first one.</td></tr>}
            {!loading && blogs.map((b) => (
              <tr key={b._id}>
                <td><b>{b.title}</b></td>
                <td>{b.category || '—'}</td>
                <td><span className={`a-badge ${b.published ? 'converted' : 'new'}`}>{b.published ? 'Published' : 'Draft'}</span></td>
                <td>{new Date(b.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                <td>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <Link to={`/admin/blogs/${b._id}/edit`} className="a-btn a-btn-ghost" style={{ padding: '6px 10px', fontSize: 12 }}>Edit</Link>
                    <button className="a-btn a-btn-danger" style={{ padding: '6px 10px', fontSize: 12 }} onClick={() => remove(b._id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
