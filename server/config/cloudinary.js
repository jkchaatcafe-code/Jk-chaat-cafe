const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Verify Cloudinary config
console.log('Cloudinary configured with cloud:', process.env.CLOUDINARY_CLOUD_NAME);

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'jk-chaat-cafe',
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp', 'gif', 'svg', 'bmp', 'tiff'],
    // ✅ No transformation - original size
  },
});

module.exports = { cloudinary, storage };