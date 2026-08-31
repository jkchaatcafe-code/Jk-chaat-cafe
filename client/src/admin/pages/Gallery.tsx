import { useEffect, useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import ImageUploadField from '../components/ImageUploadField';
import { adminApi, resolveImage } from '../api/adminApi';

type GalleryItem = {
  _id: string;
  title: string;
  category: string;
  mediaType: 'image' | 'video';
  url: string;
};

const categories = ['interior', 'food', 'equipment', 'training'];
const emptyForm = { title: '', category: 'interior', url: '' };

export default function Gallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('');

  async function load() {
    setLoading(true);
    try {
      const res = await adminApi.get('/gallery/admin/all');
      setItems(res.data.items);
    } catch {
      setError('Could not load gallery items.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  function openCreate() {
    setForm(emptyForm);
    setError('');
    setModalOpen(true);
  }

  async function handleSave() {
    if (!form.url) {
      setError('Please upload an image first.');
      return;
    }
    setSaving(true);
    setError('');
    try {
      await adminApi.post('/gallery', { title: form.title, category: form.category, url: form.url, mediaType: 'image' });
      setModalOpen(false);
      load();
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Could not save this photo.');
    } finally {
      setSaving(false);
    }
  }

  async function remove(id: string) {
    if (!confirm('Delete this photo from the gallery?')) return;
    try {
      await adminApi.delete(`/gallery/${id}`);
      setItems((prev) => prev.filter((i) => i._id !== id));
    } catch {
      alert('Could not delete this photo.');
    }
  }

  const filtered = filter ? items.filter((i) => i.category === filter) : items;

  return (
    <AdminLayout title="Gallery">
      <div className="a-filters">
        <select className="a-select" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">All categories</option>
          {categories.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <span style={{ marginLeft: 'auto', fontSize: 13, color: '#888' }}>{filtered.length} photo{filtered.length !== 1 ? 's' : ''}</span>
        <button className="a-btn a-btn-yellow" onClick={openCreate}>+ Upload Photo</button>
      </div>

      {error && <div className="a-msg error" style={{ marginBottom: 14 }}>{error}</div>}
      {loading && <div className="a-empty">Loading...</div>}
      {!loading && filtered.length === 0 && <div className="a-card a-empty">No photos yet. Upload your first one.</div>}

      <div className="a-grid-cards">
        {filtered.map((item) => (
          <div className="a-grid-card" key={item._id}>
            <div className="thumb">
              <img src={resolveImage(item.url)} alt={item.title} />
            </div>
            <div className="body">
              <h4>{item.title}</h4>
              <span className="a-badge new">{item.category}</span>
              <div className="row">
                <button className="a-btn a-btn-danger" onClick={() => remove(item._id)} style={{ flex: 1 }}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="a-modal-overlay" onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}>
          <div className="a-modal">
            <div className="a-modal-head">
              <h3>Upload Gallery Photo</h3>
              <button className="a-modal-close" onClick={() => setModalOpen(false)}>&times;</button>
            </div>

            <ImageUploadField label="Photo" value={form.url} onChange={(url) => setForm((f) => ({ ...f, url }))} />

            <div className="a-form-grid">
              <div className="a-field full">
                <label>Title</label>
                <input className="a-input" placeholder="e.g. Cafe Interior — Indore Outlet" value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} />
              </div>
              <div className="a-field full">
                <label>Category</label>
                <select className="a-select" value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}>
                  {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>

            {error && <div className="a-msg error" style={{ marginBottom: 12 }}>{error}</div>}

            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
              <button className="a-btn a-btn-ghost" onClick={() => setModalOpen(false)}>Cancel</button>
              <button className="a-btn a-btn-primary" onClick={handleSave} disabled={saving || !form.title}>
                {saving ? 'Saving...' : 'Add to Gallery'}
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
