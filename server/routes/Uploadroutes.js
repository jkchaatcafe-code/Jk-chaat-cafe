const express = require('express');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

router.post('/', protect, (req, res) => {
  upload.single('image')(req, res, (err) => {
    if (err) return res.status(400).json({ message: err.message });
    if (!req.file) return res.status(400).json({ message: 'No image file provided' });
    
    // ✅ Return full URL
    const baseUrl = process.env.API_BASE_URL || 'https://jk-chaat-cafe.onrender.com';
    res.status(201).json({ url: `${baseUrl}/uploads/${req.file.filename}` });
  });
});

module.exports = router;