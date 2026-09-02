// client/src/admin/components/ImageUploadField.tsx

import { useState } from 'react';
import { adminApi } from '../api/adminApi';

interface ImageUploadFieldProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
}

export default function ImageUploadField({ label, value, onChange }: ImageUploadFieldProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // ✅ 20MB limit (frontend)
    if (file.size > 20 * 1024 * 1024) {
      setError('File too large. Max 20MB allowed.');
      return;
    }

    // ✅ Check if it's an image
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file.');
      return;
    }

    setUploading(true);
    setError('');

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await adminApi.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      onChange(res.data.url);
      setError('');
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const getImageUrl = (url: string) => {
    if (url.startsWith('http') || url.startsWith('data:')) return url;
    const apiBase = import.meta.env.VITE_API_BASE || 'https://jk-chaat-cafe.onrender.com';
    return `${apiBase}${url}`;
  };

  return (
    <div className="a-field">
      {label && <label>{label}</label>}
      <div className="a-image-upload">
        <div className="a-image-preview">
          {value ? (
            <img src={getImageUrl(value)} alt="Upload preview" />
          ) : (
            <span style={{ fontSize: 28, color: '#ccc' }}>+</span>
          )}
        </div>
        <div>
          <label className="a-btn a-btn-ghost" style={{ cursor: 'pointer' }}>
            {uploading ? 'Uploading...' : 'Upload Image'}
            <input
              type="file"
              accept="image/*"
              onChange={handleUpload}
              disabled={uploading}
              style={{ display: 'none' }}
            />
          </label>
          {value && (
            <button
              className="a-btn a-btn-danger"
              style={{ padding: '8px 12px', fontSize: 12, marginLeft: 8 }}
              onClick={() => onChange('')}
            >
              Remove
            </button>
          )}
          {error && <div className="a-msg error" style={{ marginTop: 6, fontSize: 12 }}>{error}</div>}
          <div style={{ fontSize: 11, color: '#888', marginTop: 4 }}>
            JPG, PNG, WEBP, GIF, SVG • Max 20MB
          </div>
        </div>
      </div>
    </div>
  );
}