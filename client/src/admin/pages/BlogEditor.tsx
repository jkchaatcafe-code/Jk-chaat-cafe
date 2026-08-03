import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';
import ImageUploadField from '../components/ImageUploadField';
import RichTextEditor from '../components/RichTextEditor';
import { adminApi } from '../api/adminApi';

const emptyForm = { title: '', category: '', tags: '', excerpt: '', content: '', coverImage: '', published: false };

export default function BlogEditor() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (!isEdit) return;
    adminApi
      .get(`/blogs/admin/one/${id}`)
      .then((res) => {
        const b = res.data;
        setForm({
          title: b.title,
          category: b.category || '',
          tags: (b.tags || []).join(', '),
          excerpt: b.excerpt || '',
          content: b.content || '',
          coverImage: b.coverImage || '',
          published: b.published,
        });
      })
      .catch(() => setError('Could not load this post.'))
      .finally(() => setLoading(false));
  }, [id, isEdit]);

  function buildPayload(publishOverride?: boolean) {
    return {
      title: form.title,
      category: form.category,
      tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
      excerpt: form.excerpt,
      content: form.content,
      coverImage: form.coverImage,
      published: publishOverride ?? form.published,
    };
  }

  async function handleSave(publishOverride?: boolean) {
    if (!form.title.trim()) { setError('Please add a title before saving.'); return; }
    if (!form.content.trim()) { setError('Please write some content before saving.'); return; }

    setSaving(true);
    setError('');
    setSuccess('');
    const payload = buildPayload(publishOverride);
    try {
      if (isEdit) {
        await adminApi.put(`/blogs/${id}`, payload);
      } else {
        const res = await adminApi.post('/blogs', payload);
        // Switch to edit mode in place so subsequent saves update, not duplicate.
        navigate(`/admin/blogs/${res.data._id}/edit`, { replace: true });
      }
      setForm((f) => ({ ...f, published: payload.published }));
      setSuccess(payload.published ? 'Published! Live on the public blog page.' : 'Saved as draft.');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Could not save. Please check the fields and try again.');
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <AdminLayout title="Blog Editor">
        <div className="a-empty">Loading post...</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title={isEdit ? 'Edit Blog Post' : 'New Blog Post'}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <Link to="/admin/blogs" className="a-btn a-btn-ghost">← Back to Blogs</Link>
        <div style={{ display: 'flex', gap: 10 }}>
          <button className="a-btn a-btn-ghost" onClick={() => handleSave(false)} disabled={saving}>
            {saving ? 'Saving...' : 'Save Draft'}
          </button>
          <button className="a-btn a-btn-yellow" onClick={() => handleSave(true)} disabled={saving}>
            {saving ? 'Publishing...' : form.published ? 'Update & Keep Published' : 'Publish'}
          </button>
        </div>
      </div>

      {error && <div className="a-msg error" style={{ marginBottom: 14 }}>{error}</div>}
      {success && <div className="a-msg success" style={{ marginBottom: 14 }}>{success}</div>}

      <div style={{ display: 'grid', gridTemplateColumns: '2.1fr 1fr', gap: 20, alignItems: 'start' }}>
        {/* Main column: title + rich content */}
        <div className="a-card" style={{ padding: 24 }}>
          <div className="a-field full">
            <label>Post Title</label>
            <input
              className="a-input"
              style={{ fontSize: 20, fontWeight: 700, padding: '14px 16px' }}
              placeholder="Give your post a title"
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            />
          </div>
          <div className="a-field full">
            <label>Content</label>
            <RichTextEditor value={form.content} onChange={(html) => setForm((f) => ({ ...f, content: html }))} />
          </div>
        </div>

        {/* Side column: publish settings, cover image, taxonomy */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="a-card" style={{ padding: 20 }}>
            <h3 style={{ fontSize: 14.5, marginBottom: 14 }}>Cover Image</h3>
            <ImageUploadField label="" value={form.coverImage} onChange={(url) => setForm((f) => ({ ...f, coverImage: url }))} />
          </div>

          <div className="a-card" style={{ padding: 20 }}>
            <h3 style={{ fontSize: 14.5, marginBottom: 14 }}>Post Details</h3>
            <div className="a-field">
              <label>Category</label>
              <input className="a-input" placeholder="e.g. Franchise Guide" value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))} />
            </div>
            <div className="a-field">
              <label>Tags (comma separated)</label>
              <input className="a-input" placeholder="franchise, tips" value={form.tags} onChange={(e) => setForm((f) => ({ ...f, tags: e.target.value }))} />
            </div>
            <div className="a-field">
              <label>Excerpt</label>
              <textarea className="a-textarea" style={{ minHeight: 80 }} placeholder="Short summary shown in blog cards" value={form.excerpt} onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))} />
            </div>
            <div className="a-field" style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 0 }}>
              <input type="checkbox" checked={form.published} onChange={(e) => setForm((f) => ({ ...f, published: e.target.checked }))} id="pub" style={{ width: 16, height: 16 }} />
              <label htmlFor="pub" style={{ margin: 0 }}>Published</label>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
