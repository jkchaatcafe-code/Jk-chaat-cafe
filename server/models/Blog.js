const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  category: { type: String, trim: true },
  tags: [{ type: String, trim: true }],
  excerpt: { type: String, trim: true },
  content: { type: String, required: true },
  coverImage: { type: String },
  metaTitle: String,
  metaDescription: String,
  published: { type: Boolean, default: false },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
