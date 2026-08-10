import { useEffect, useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { adminApi } from '../api/adminApi';

type Lead = {
  _id: string;
  type: 'contact' | 'franchise_application' | 'popup';
  name: string;
  phone: string;
  email?: string;
  city?: string;
  package?: string;
  budget?: string;
  message?: string;
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'rejected';
  createdAt: string;
};

const typeLabels: Record<string, string> = {
  contact: 'Contact Form',
  franchise_application: 'Franchise Application',
  popup: 'Popup',
};

const statusOptions = ['new', 'contacted', 'qualified', 'converted', 'rejected'];

export default function Leads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    setError('');
    try {
      const params: Record<string, string> = {};
      if (typeFilter) params.type = typeFilter;
      if (statusFilter) params.status = statusFilter;
      const res = await adminApi.get('/leads', { params });
      setLeads(res.data.leads);
    } catch {
      setError('Could not load enquiries.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeFilter, statusFilter]);

  async function updateStatus(id: string, status: string) {
    setLeads((prev) => prev.map((l) => (l._id === id ? { ...l, status: status as Lead['status'] } : l)));
    try {
      await adminApi.patch(`/leads/${id}/status`, { status });
    } catch {
      load();
    }
  }

  async function remove(id: string) {
    if (!confirm('Delete this enquiry permanently?')) return;
    try {
      await adminApi.delete(`/leads/${id}`);
      setLeads((prev) => prev.filter((l) => l._id !== id));
    } catch {
      alert('Could not delete. You may need superadmin permissions.');
    }
  }

  return (
    <AdminLayout title="Enquiries">
      <div className="a-filters">
        <select className="a-select" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
          <option value="">All types</option>
          <option value="contact">Contact Form</option>
          <option value="franchise_application">Franchise Application</option>
          <option value="popup">Popup</option>
        </select>
        <select className="a-select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">All statuses</option>
          {statusOptions.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <span style={{ marginLeft: 'auto', fontSize: 13, color: '#888' }}>{leads.length} result{leads.length !== 1 ? 's' : ''}</span>
      </div>

      {error && <div className="a-msg error" style={{ marginBottom: 14 }}>{error}</div>}

      <div className="a-card a-table-wrap">
        <table className="a-table">
          <thead>
            <tr>
              <th>Name</th><th>Type</th><th>Phone</th><th>City</th><th>Status</th><th>Received</th><th></th>
            </tr>
          </thead>
          <tbody>
            {loading && <tr><td colSpan={7} className="a-empty">Loading...</td></tr>}
            {!loading && leads.length === 0 && <tr><td colSpan={7} className="a-empty">No enquiries match these filters.</td></tr>}
            {!loading && leads.map((lead) => (
              <>
                <tr key={lead._id} style={{ cursor: 'pointer' }} onClick={() => setExpanded(expanded === lead._id ? null : lead._id)}>
                  <td><b>{lead.name}</b></td>
                  <td>{typeLabels[lead.type]}</td>
                  <td>{lead.phone}</td>
                  <td>{lead.city || '—'}</td>
                  <td>
                    <select
                      className="a-select"
                      style={{ padding: '4px 8px', fontSize: 12 }}
                      value={lead.status}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => updateStatus(lead._id, e.target.value)}
                    >
                      {statusOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </td>
                  <td>{new Date(lead.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                  <td onClick={(e) => e.stopPropagation()}>
                    <button className="a-btn a-btn-danger" style={{ padding: '6px 10px', fontSize: 12 }} onClick={() => remove(lead._id)}>Delete</button>
                  </td>
                </tr>
                {expanded === lead._id && (
                  <tr>
                    <td colSpan={7} style={{ background: '#FAFAFA' }}>
                      <div style={{ padding: '8px 4px', fontSize: 13.3, color: '#4A4A4A', lineHeight: 1.7 }}>
                        <div><b>Email:</b> {lead.email || '—'}</div>
                        {lead.package && <div><b>Package:</b> {lead.package}</div>}
                        {lead.budget && <div><b>Budget:</b> {lead.budget}</div>}
                        <div><b>Message:</b> {lead.message || '—'}</div>
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
