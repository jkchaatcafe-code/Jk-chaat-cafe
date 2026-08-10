import { useEffect, useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import ImageUploadField from '../components/ImageUploadField';
import { adminApi, resolveImage } from '../api/adminApi';

type Product = {
  _id: string;
  name: string;
  category: string;
  description?: string;
  image?: string;
  tags?: string[];
  active: boolean;
};

const categories = ['chaat', 'fastfood', 'beverages', 'snacks', 'rolls'];
const emptyForm = { name: '', category: 'chaat', description: '', image: '', tags: '', active: true };

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  async function load() {
    setLoading(true);
    try {
      const res = await adminApi.get('/products/admin/all');
      setProducts(res.data.items);
    } catch {
      setError('Could not load products.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  function openCreate() {
    setEditingId(null);
    setForm(emptyForm);
    setError('');
    setModalOpen(true);
  }

  function openEdit(p: Product) {
    setEditingId(p._id);
    setForm({
      name: p.name,
      category: p.category,
      description: p.description || '',
      image: p.image || '',
      tags: (p.tags || []).join(', '),
      active: p.active,
    });
    setError('');
    setModalOpen(true);
  }

  async function handleSave() {
    setSaving(true);
    setError('');
    const payload = {
      name: form.name,
      category: form.category,
      description: form.description,
      image: form.image,
      tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
      active: form.active,
    };
    try {
      if (editingId) {
        await adminApi.put(`/products/${editingId}`, payload);
      } else {
        await adminApi.post('/products', payload);
      }
      setModalOpen(false);
      load();
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Could not save this item.');
    } finally {
      setSaving(false);
    }
  }

  async function remove(id: string) {
    if (!confirm('Remove this menu item permanently?')) return;
    try {
      await adminApi.delete(`/products/${id}`);
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch {
      alert('Could not delete this item.');
    }
  }

  return (
    <AdminLayout title="Products & Menu">
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
        <button className="a-btn a-btn-yellow" onClick={openCreate}>+ Add Menu Item</button>
      </div>

      {error && <div className="a-msg error" style={{ marginBottom: 14 }}>{error}</div>}
      {loading && <div className="a-empty">Loading...</div>}
      {!loading && products.length === 0 && <div className="a-card a-empty">No menu items yet. Add your first one.</div>}

      <div className="a-grid-cards">
        {products.map((p) => (
          <div className="a-grid-card" key={p._id}>
            <div className="thumb">
              {p.image ? <img src={resolveImage(p.image)} alt={p.name} /> : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#bbb', fontSize: 12 }}>No image</div>
              )}
            </div>
            <div className="body">
              <h4>{p.name}</h4>
              <span className={`a-badge ${p.active ? 'converted' : 'rejected'}`}>{p.active ? 'Active' : 'Hidden'}</span>
              <div className="row">
                <button className="a-btn a-btn-ghost" onClick={() => openEdit(p)}>Edit</button>
                <button className="a-btn a-btn-danger" onClick={() => remove(p._id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="a-modal-overlay" onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}>
          <div className="a-modal">
            <div className="a-modal-head">
              <h3>{editingId ? 'Edit Menu Item' : 'Add Menu Item'}</h3>
              <button className="a-modal-close" onClick={() => setModalOpen(false)}>&times;</button>
            </div>

            <ImageUploadField label="Product Photo" value={form.image} onChange={(url) => setForm((f) => ({ ...f, image: url }))} />

            <div className="a-form-grid">
              <div className="a-field">
                <label>Name</label>
                <input className="a-input" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
              </div>
              <div className="a-field">
                <label>Category</label>
                <select className="a-select" value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}>
                  {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="a-field full">
                <label>Description</label>
                <input className="a-input" value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} />
              </div>
              <div className="a-field full">
                <label>Tags (comma separated)</label>
                <input className="a-input" placeholder="Bestseller, Chaat" value={form.tags} onChange={(e) => setForm((f) => ({ ...f, tags: e.target.value }))} />
              </div>
              <div className="a-field full" style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <input type="checkbox" checked={form.active} onChange={(e) => setForm((f) => ({ ...f, active: e.target.checked }))} id="active" style={{ width: 16, height: 16 }} />
                <label htmlFor="active" style={{ margin: 0 }}>Active (visible on the public menu page)</label>
              </div>
            </div>

            {error && <div className="a-msg error" style={{ marginBottom: 12 }}>{error}</div>}

            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
              <button className="a-btn a-btn-ghost" onClick={() => setModalOpen(false)}>Cancel</button>
              <button className="a-btn a-btn-primary" onClick={handleSave} disabled={saving || !form.name}>
                {saving ? 'Saving...' : 'Save Item'}
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
