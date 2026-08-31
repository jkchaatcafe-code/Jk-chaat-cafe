import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';
export const FILE_BASE = API_BASE.replace(/\/api\/?$/, '');

export const adminApi = axios.create({ baseURL: API_BASE });

adminApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('jk_admin_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

adminApi.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err?.response?.status === 401) {
      localStorage.removeItem('jk_admin_token');
      if (!window.location.pathname.includes('/admin/login')) {
        window.location.href = '/admin/login';
      }
    }
    return Promise.reject(err);
  },
);

export function resolveImage(path?: string) {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `${FILE_BASE}${path}`;
}

export async function uploadImage(file: File) {
  const formData = new FormData();
  formData.append('image', file);
  const res = await adminApi.post('/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data.url as string;
}
