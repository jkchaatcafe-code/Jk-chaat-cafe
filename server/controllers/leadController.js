const Lead = require('../models/Lead');
const { notifyNewLead } = require('../config/mailer');

function createLead(type) {
  return async (req, res, next) => {
    try {
      const { name, phone, email, city, package: pkg, budget, hasLocation, message } = req.body;
      
      // ===== PHONE VALIDATION ADDED =====
      if (!phone || phone.length < 8 || phone.length > 15) {
        return res.status(400).json({ 
          message: 'Phone number must be between 8 and 15 digits' 
        });
      }
      
      // ===== NAME VALIDATION =====
      if (!name || name.trim().length < 2) {
        return res.status(400).json({ 
          message: 'Name is required and must be at least 2 characters' 
        });
      }
      
      // ===== CREATE LEAD =====
      const lead = await Lead.create({ 
        type, 
        name: name.trim(), 
        phone: phone.trim(), 
        email: email ? email.trim() : undefined, 
        city: city ? city.trim() : undefined, 
        package: pkg, 
        budget, 
        hasLocation, 
        message: message ? message.trim() : undefined 
      });
      
      // ===== SEND NOTIFICATION (fire and forget) =====
      notifyNewLead(lead);
      
      res.status(201).json({ 
        message: 'Thank you! Our franchise team will contact you shortly.', 
        id: lead._id 
      });
    } catch (err) {
      // ===== HANDLE DUPLICATE/OTHER ERRORS =====
      if (err.code === 11000) {
        return res.status(400).json({ 
          message: 'This lead already exists in our system.' 
        });
      }
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
    const { status } = req.body;
    
    // ===== VALIDATE STATUS =====
    const validStatuses = ['new', 'contacted', 'qualified', 'converted', 'rejected'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ 
        message: 'Invalid status. Must be one of: new, contacted, qualified, converted, rejected' 
      });
    }
    
    const lead = await Lead.findByIdAndUpdate(
      req.params.id, 
      { status }, 
      { new: true, runValidators: true }
    );
    
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json(lead);
  } catch (err) { next(err); }
}

async function deleteLead(req, res, next) {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json({ message: 'Lead deleted successfully' });
  } catch (err) { next(err); }
}

module.exports = { createLead, getLeads, updateLeadStatus, deleteLead };