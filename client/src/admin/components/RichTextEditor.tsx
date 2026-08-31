import { useMemo, useRef } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { uploadImage, FILE_BASE } from '../api/adminApi';

export default function RichTextEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (html: string) => void;
}) {
  const quillRef = useRef<ReactQuill>(null);

  function imageHandler() {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      try {
        const url = await uploadImage(file);
        const editor = quillRef.current?.getEditor();
        if (!editor) return;
        const range = editor.getSelection(true);
        editor.insertEmbed(range.index, 'image', `${FILE_BASE}${url}`);
        editor.setSelection({ index: range.index + 1, length: 0 });
      } catch {
        alert('Image upload failed. Please try again (max 5MB, images only).');
      }
    };
  }

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'link', 'image'],
          ['clean'],
        ],
        handlers: { image: imageHandler },
      },
    }),
    [],
  );

  return (
    <div className="a-rte">
      <ReactQuill ref={quillRef} theme="snow" value={value} onChange={onChange} modules={modules} placeholder="Write your blog post here..." />
    </div>
  );
}
