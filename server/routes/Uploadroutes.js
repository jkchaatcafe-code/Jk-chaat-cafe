const express = require('express');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

// POST /api/upload  (form-data field name: "image")
// Returns { url: "/uploads/169...-abcd1234.jpg" } — store this string directly
// on a Blog's coverImage, a Product's image, or a GalleryItem's url field.
router.post('/', protect, (req, res) => {
  upload.single('image')(req, res, (err) => {
    if (err) return res.status(400).json({ message: err.message });
    if (!req.file) return res.status(400).json({ message: 'No image file provided' });
    res.status(201).json({ url: `/uploads/${req.file.filename}` });
  });
});

module.exports = router;