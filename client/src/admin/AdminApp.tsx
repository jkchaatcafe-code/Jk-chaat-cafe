import { Routes, Route } from 'react-router-dom';
import './admin.css';
import { AdminAuthProvider } from './context/AdminAuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Leads from './pages/Leads';
import Blogs from './pages/Blogs';
import BlogEditor from './pages/BlogEditor';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';

export default function AdminApp() {
  return (
    <AdminAuthProvider>
      <Routes>
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/admin/leads" element={<ProtectedRoute><Leads /></ProtectedRoute>} />
        <Route path="/admin/blogs" element={<ProtectedRoute><Blogs /></ProtectedRoute>} />
        <Route path="/admin/blogs/new" element={<ProtectedRoute><BlogEditor /></ProtectedRoute>} />
        <Route path="/admin/blogs/:id/edit" element={<ProtectedRoute><BlogEditor /></ProtectedRoute>} />
        <Route path="/admin/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
        <Route path="/admin/gallery" element={<ProtectedRoute><Gallery /></ProtectedRoute>} />
        <Route path="/admin/testimonials" element={<ProtectedRoute><Testimonials /></ProtectedRoute>} />
      </Routes>
    </AdminAuthProvider>
  );
}
