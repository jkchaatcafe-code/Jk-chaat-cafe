const express = require('express');
const { protect } = require('../middleware/auth');
const { initGridFS } = require('../config/gridfs');
const multer = require('multer');
const stream = require('stream');
const { ObjectId } = require('mongodb');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/', protect, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No image file provided' });
    }

    const bucket = initGridFS();
    const filename = `${Date.now()}-${req.file.originalname}`;
    
    const uploadStream = bucket.openUploadStream(filename, {
      contentType: req.file.mimetype,
    });

    const bufferStream = new stream.PassThrough();
    bufferStream.end(req.file.buffer);
    bufferStream.pipe(uploadStream);

    uploadStream.on('finish', () => {
      res.status(201).json({ 
        url: `/uploads/${uploadStream.id}` 
      });
    });

    uploadStream.on('error', (err) => {
      res.status(500).json({ message: 'Upload failed' });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get image from GridFS
router.get('/:id', async (req, res) => {
  try {
    const bucket = initGridFS();
    const id = new ObjectId(req.params.id);
    const downloadStream = bucket.openDownloadStream(id);
    
    downloadStream.on('error', () => {
      res.status(404).json({ message: 'Image not found' });
    });
    
    downloadStream.pipe(res);
  } catch (err) {
    res.status(404).json({ message: 'Image not found' });
  }
});

module.exports = router;