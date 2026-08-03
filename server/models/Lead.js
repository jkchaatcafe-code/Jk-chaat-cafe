const mongoose = require('mongoose');

// Unified model for all lead-generation forms: contact form, franchise
// application form, and the smart exit/scroll/timer popup.
const leadSchema = new mongoose.Schema({
  type: { type: String, enum: ['contact', 'franchise_application', 'popup'], required: true, index: true },
  name: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  email: { type: String, trim: true, lowercase: true },
  city: { type: String, trim: true },
  package: { type: String, trim: true },
  budget: { type: String, trim: true },
  hasLocation: { type: String },
  message: { type: String, trim: true },
  status: { type: String, enum: ['new', 'contacted', 'qualified', 'converted', 'rejected'], default: 'new' },
  source: { type: String, default: 'website' },
}, { timestamps: true });

module.exports = mongoose.model('Lead', leadSchema);
