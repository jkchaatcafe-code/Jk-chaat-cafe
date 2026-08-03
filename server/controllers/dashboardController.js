const Lead = require('../models/Lead');
const Newsletter = require('../models/Newsletter');
const Blog = require('../models/Blog');

async function getStats(req, res, next) {
  try {
    const [totalLeads, newLeads, franchiseApplications, contactLeads, popupLeads, subscribers, blogCount] = await Promise.all([
      Lead.countDocuments(),
      Lead.countDocuments({ status: 'new' }),
      Lead.countDocuments({ type: 'franchise_application' }),
      Lead.countDocuments({ type: 'contact' }),
      Lead.countDocuments({ type: 'popup' }),
      Newsletter.countDocuments(),
      Blog.countDocuments(),
    ]);
    res.json({ totalLeads, newLeads, franchiseApplications, contactLeads, popupLeads, subscribers, blogCount });
  } catch (err) { next(err); }
}

module.exports = { getStats };
