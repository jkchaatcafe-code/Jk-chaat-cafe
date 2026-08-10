import { useRef, useState } from 'react';
import { uploadImage, resolveImage } from '../api/adminApi';

export default function ImageUploadField({
  value,
  onChange,
  label = 'Image',
}: {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError('');
    try {
      const url = await uploadImage(file);
      onChange(url);
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Upload failed. Max size 5MB, images only.');
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = '';
    }
  }

  return (
    <div className="a-field">
      <label>{label}</label>
      <div className="a-image-upload">
        <div className="a-image-preview">
          {value ? <img src={resolveImage(value)} alt="" /> : <span style={{ fontSize: 10, color: '#aaa' }}>No image</span>}
        </div>
        <div>
          <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} style={{ display: 'none' }} id={`upload-${label}`} />
          <button
            type="button"
            className="a-btn a-btn-ghost"
            onClick={() => fileRef.current?.click()}
            disabled={uploading}
          >
            {uploading ? 'Uploading...' : value ? 'Replace Image' : 'Upload Image'}
          </button>
          {value && (
            <button type="button" className="a-btn a-btn-ghost" style={{ marginLeft: 8 }} onClick={() => onChange('')}>
              Remove
            </button>
          )}
          {error && <div className="a-msg error" style={{ marginTop: 8 }}>{error}</div>}
        </div>
      </div>
    </div>
  );
}
