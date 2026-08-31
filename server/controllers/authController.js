const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const Admin = require('../models/Admin');

function signToken(admin) {
  return jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email }).select('+password');
    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.json({
      token: signToken(admin),
      admin: { id: admin._id, name: admin.name, email: admin.email, role: admin.role },
    });
  } catch (err) { next(err); }
}

async function me(req, res) {
  res.json({ id: req.admin._id, name: req.admin.name, email: req.admin.email, role: req.admin.role });
}

// Generates a reset token and returns it. In production this gets emailed to the
// admin instead of returned directly; kept explicit here since email delivery
// depends on the SMTP credentials you configure in .env.
async function forgotPassword(req, res, next) {
  try {
    const admin = await Admin.findOne({ email: req.body.email });
    if (!admin) return res.status(200).json({ message: 'If that email exists, a reset link has been sent.' });
    const token = crypto.randomBytes(32).toString('hex');
    admin.resetPasswordToken = crypto.createHash('sha256').update(token).digest('hex');
    admin.resetPasswordExpires = Date.now() + 30 * 60 * 1000; // 30 min
    await admin.save();
    // TODO: email the raw `token` to admin.email via config/mailer.js in production
    res.json({ message: 'Reset token generated.', resetToken: token });
  } catch (err) { next(err); }
}

async function resetPassword(req, res, next) {
  try {
    const hashed = crypto.createHash('sha256').update(req.params.token).digest('hex');
    const admin = await Admin.findOne({ resetPasswordToken: hashed, resetPasswordExpires: { $gt: Date.now() } });
    if (!admin) return res.status(400).json({ message: 'Reset token is invalid or has expired' });
    admin.password = req.body.password;
    admin.resetPasswordToken = undefined;
    admin.resetPasswordExpires = undefined;
    await admin.save();
    res.json({ message: 'Password reset successful. Please log in.' });
  } catch (err) { next(err); }
}

module.exports = { login, me, forgotPassword, resetPassword };
