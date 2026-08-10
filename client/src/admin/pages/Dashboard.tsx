import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';
import { adminApi } from '../api/adminApi';

type Stats = {
  totalLeads: number;
  newLeads: number;
  franchiseApplications: number;
  contactLeads: number;
  popupLeads: number;
  subscribers: number;
  blogCount: number;
};

export default function Dashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    adminApi
      .get('/dashboard/stats')
      .then((res) => setStats(res.data))
      .catch(() => setError('Could not load dashboard stats.'));
  }, []);

  return (
    <AdminLayout title="Dashboard">
      {error && <div className="a-msg error" style={{ marginBottom: 16 }}>{error}</div>}

      <div className="a-stats-grid">
        <div className="a-card a-stat-card">
          <div className="n">{stats?.totalLeads ?? '—'}</div>
          <div className="l">Total Enquiries</div>
        </div>
        <div className="a-card a-stat-card">
          <div className="n">{stats?.newLeads ?? '—'}</div>
          <div className="l">New (Unactioned)</div>
        </div>
        <div className="a-card a-stat-card">
          <div className="n">{stats?.franchiseApplications ?? '—'}</div>
          <div className="l">Franchise Applications</div>
        </div>
        <div className="a-card a-stat-card">
          <div className="n">{stats?.subscribers ?? '—'}</div>
          <div className="l">Newsletter Subscribers</div>
        </div>
        <div className="a-card a-stat-card">
          <div className="n">{stats?.contactLeads ?? '—'}</div>
          <div className="l">Contact Form Leads</div>
        </div>
        <div className="a-card a-stat-card">
          <div className="n">{stats?.popupLeads ?? '—'}</div>
          <div className="l">Popup Leads</div>
        </div>
        <div className="a-card a-stat-card">
          <div className="n">{stats?.blogCount ?? '—'}</div>
          <div className="l">Blog Posts</div>
        </div>
      </div>

      <div className="a-card" style={{ padding: 24 }}>
        <h3 style={{ fontSize: 15.5, marginBottom: 14 }}>Quick actions</h3>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Link to="/admin/leads" className="a-btn a-btn-yellow">View Enquiries</Link>
          <Link to="/admin/blogs" className="a-btn a-btn-ghost">Write a Blog Post</Link>
          <Link to="/admin/products" className="a-btn a-btn-ghost">Manage Menu</Link>
          <Link to="/admin/gallery" className="a-btn a-btn-ghost">Upload to Gallery</Link>
        </div>
      </div>
    </AdminLayout>
  );
}
