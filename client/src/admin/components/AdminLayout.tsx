import { useState, type ReactNode } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/jk-chaat-cafe-logo.png';
import { useAdminAuth } from '../context/AdminAuthContext';

const navItems = [
  { to: '/admin', label: 'Dashboard', end: true, icon: 'M3 12l9-9 9 9M5 10v10h14V10' },
  { to: '/admin/leads', label: 'Enquiries', icon: 'M4 4h16v16H4zM4 8h16M9 4v16' },
  { to: '/admin/blogs', label: 'Blogs', icon: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15Z' },
  { to: '/admin/products', label: 'Products & Menu', icon: 'M3 3h18v6H3zM3 15h18v6H3zM3 9h18v6H3z' },
  { to: '/admin/gallery', label: 'Gallery', icon: 'M3 3h18v18H3zM8.5 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM3 16l5-5 4 4 3-3 6 6' },
  { to: '/admin/testimonials', label: 'Testimonials', icon: 'M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z' },
];

export default function AdminLayout({ children, title }: { children: ReactNode; title: string }) {
  const { admin, logout } = useAdminAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function handleLogout() {
    logout();
    navigate('/admin/login');
  }

  const initials = admin?.name?.split(' ').map((n) => n[0]).join('').slice(0, 2) || 'A';

  return (
    <div className="jk-admin">
      <div className="a-shell">
        <aside className={`a-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="a-brand">
            <img src={logo} alt="JK Chaat Cafe" />
            <span>Admin Panel</span>
          </div>
          <nav className="a-nav">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setSidebarOpen(false)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={item.icon} /></svg>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="a-sidebar-foot">
            <div className="a-user">
              <div className="avatar">{initials}</div>
              <div className="who">
                <b>{admin?.name || 'Admin'}</b>
                <span>{admin?.role || ''}</span>
              </div>
            </div>
            <button className="a-logout-btn" onClick={handleLogout}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" /></svg>
              Log out
            </button>
          </div>
        </aside>

        <main className="a-main">
          <div className="a-topbar">
            <h1>{title}</h1>
          </div>
          <div className="a-content">{children}</div>
        </main>
      </div>
    </div>
  );
}
