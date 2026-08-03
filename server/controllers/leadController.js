const Lead = require('../models/Lead');
const { notifyNewLead } = require('../config/mailer');

function createLead(type) {
  return async (req, res, next) => {
    try {
      const { name, phone, email, city, package: pkg, budget, hasLocation, message } = req.body;
      const lead = await Lead.create({ type, name, phone, email, city, package: pkg, budget, hasLocation, message });
      notifyNewLead(lead); // fire and forget
      res.status(201).json({ message: 'Thank you! Our franchise team will contact you shortly.', id: lead._id });
    } catch (err) {
      next(err);
    }
  };
}

// Admin: list leads with optional ?type= & ?status= filters + pagination
async function getLeads(req, res, next) {
  try {
    const { type, status, page = 1, limit = 20 } = req.query;
    const filter = {};
    if (type) filter.type = type;
    if (status) filter.status = status;
    const skip = (Number(page) - 1) * Number(limit);
    const [leads, total] = await Promise.all([
      Lead.find(filter).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
      Lead.countDocuments(filter),
    ]);
    res.json({ leads, total, page: Number(page), pages: Math.ceil(total / limit) });
  } catch (err) { next(err); }
}

async function updateLeadStatus(req, res, next) {
  try {
    const lead = await Lead.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json(lead);
  } catch (err) { next(err); }
}

async function deleteLead(req, res, next) {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json({ message: 'Lead deleted' });
  } catch (err) { next(err); }
}

module.exports = { createLead, getLeads, updateLeadStatus, deleteLead };
