const express = require('express');
const { protect } = require('../middleware/auth');
const { storage } = require('../config/cloudinary');
const multer = require('multer');

const router = express.Router();

// ✅ 20MB limit
const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 } // 20MB
});

router.post('/', protect, (req, res) => {
  upload.single('image')(req, res, (err) => {
    if (err) {
      console.error('Upload error:', err);
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ message: 'File too large. Max 20MB allowed.' });
      }
      if (err.message === 'File too large') {
        return res.status(400).json({ message: 'File too large. Max 20MB allowed.' });
      }
      return res.status(400).json({ message: err.message || 'Upload failed' });
    }
    
    if (!req.file) {
      return res.status(400).json({ message: 'No image file provided' });
    }
    
    // ✅ Cloudinary URL return karo
    console.log('Upload successful:', req.file.path);
    res.status(201).json({ url: req.file.path });
  });
});

module.exports = router;