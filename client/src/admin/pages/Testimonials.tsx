import { useEffect, useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { adminApi } from '../api/adminApi';

type Testimonial = {
  _id: string;
  name: string;
  city?: string;
  quote: string;
  rating: number;
  published: boolean;
};

const emptyForm = { name: '', city: '', quote: '', rating: 5, published: true };

export default function Testimonials() {
  const [list, setList] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  async function load() {
    setLoading(true);
    try {
      const res = await adminApi.get('/testimonials/admin/all');
      setList(res.data.items);
    } catch {
      setError('Could not load testimonials.');
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

  function openEdit(t: Testimonial) {
    setEditingId(t._id);
    setForm({ name: t.name, city: t.city || '', quote: t.quote, rating: t.rating, published: t.published });
    setError('');
    setModalOpen(true);
  }

  async function handleSave() {
    setSaving(true);
    setError('');
    try {
      if (editingId) await adminApi.put(`/testimonials/${editingId}`, form);
      else await adminApi.post('/testimonials', form);
      setModalOpen(false);
      load();
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Could not save this testimonial.');
    } finally {
      setSaving(false);
    }
  }

  async function remove(id: string) {
    if (!confirm('Delete this testimonial?')) return;
    try {
      await adminApi.delete(`/testimonials/${id}`);
      setList((prev) => prev.filter((t) => t._id !== id));
    } catch {
      alert('Could not delete this testimonial.');
    }
  }

  return (
    <AdminLayout title="Testimonials">
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
        <button className="a-btn a-btn-yellow" onClick={openCreate}>+ Add Testimonial</button>
      </div>

      <div className="a-card a-table-wrap">
        <table className="a-table">
          <thead><tr><th>Name</th><th>City</th><th>Quote</th><th>Rating</th><th>Status</th><th></th></tr></thead>
          <tbody>
            {loading && <tr><td colSpan={6} className="a-empty">Loading...</td></tr>}
            {!loading && list.length === 0 && <tr><td colSpan={6} className="a-empty">No testimonials yet.</td></tr>}
            {!loading && list.map((t) => (
              <tr key={t._id}>
                <td><b>{t.name}</b></td>
                <td>{t.city || '—'}</td>
                <td style={{ maxWidth: 320, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.quote}</td>
                <td>{'★'.repeat(t.rating)}</td>
                <td><span className={`a-badge ${t.published ? 'converted' : 'new'}`}>{t.published ? 'Live' : 'Hidden'}</span></td>
                <td>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button className="a-btn a-btn-ghost" style={{ padding: '6px 10px', fontSize: 12 }} onClick={() => openEdit(t)}>Edit</button>
                    <button className="a-btn a-btn-danger" style={{ padding: '6px 10px', fontSize: 12 }} onClick={() => remove(t._id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <div className="a-modal-overlay" onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}>
          <div className="a-modal">
            <div className="a-modal-head">
              <h3>{editingId ? 'Edit Testimonial' : 'Add Testimonial'}</h3>
              <button className="a-modal-close" onClick={() => setModalOpen(false)}>&times;</button>
            </div>
            <div className="a-form-grid">
              <div className="a-field"><label>Name</label><input className="a-input" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} /></div>
              <div className="a-field"><label>City</label><input className="a-input" value={form.city} onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))} /></div>
              <div className="a-field full"><label>Quote</label><textarea className="a-textarea" value={form.quote} onChange={(e) => setForm((f) => ({ ...f, quote: e.target.value }))} /></div>
              <div className="a-field">
                <label>Rating</label>
                <select className="a-select" value={form.rating} onChange={(e) => setForm((f) => ({ ...f, rating: Number(e.target.value) }))}>
                  {[5, 4, 3, 2, 1].map((r) => <option key={r} value={r}>{r} star{r !== 1 ? 's' : ''}</option>)}
                </select>
              </div>
              <div className="a-field" style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingTop: 22 }}>
                <input type="checkbox" checked={form.published} onChange={(e) => setForm((f) => ({ ...f, published: e.target.checked }))} id="tpub" style={{ width: 16, height: 16 }} />
                <label htmlFor="tpub" style={{ margin: 0 }}>Published (visible on site)</label>
              </div>
            </div>
            {error && <div className="a-msg error" style={{ marginBottom: 12 }}>{error}</div>}
            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
              <button className="a-btn a-btn-ghost" onClick={() => setModalOpen(false)}>Cancel</button>
              <button className="a-btn a-btn-primary" onClick={handleSave} disabled={saving || !form.name || !form.quote}>
                {saving ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
