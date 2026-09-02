const express = require('express');
const { protect } = require('../middleware/auth');
const { storage } = require('../config/cloudinary');
const multer = require('multer');

const router = express.Router();

// ✅ File size limit 20MB (ya unlimited)
const upload = multer({ 
  storage,
  limits: { fileSize: 20 * 1024 * 1024 } // 20MB
});

router.post('/', protect, (req, res) => {
  upload.single('image')(req, res, (err) => {
    if (err) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ message: 'File too large. Max 20MB allowed.' });
      }
      return res.status(400).json({ message: err.message });
    }
    if (!req.file) {
      return res.status(400).json({ message: 'No image file provided' });
    }
    
    // ✅ Cloudinary URL return karo
    res.status(201).json({ url: req.file.path });
  });
});

module.exports = router;