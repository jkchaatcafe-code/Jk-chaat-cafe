const Newsletter = require('../models/Newsletter');

async function subscribe(req, res, next) {
  try {
    const { email } = req.body;
    const existing = await Newsletter.findOne({ email });
    if (existing) return res.status(200).json({ message: "You're already subscribed!" });
    await Newsletter.create({ email });
    res.status(201).json({ message: 'Subscribed! Watch your inbox for franchise updates.' });
  } catch (err) { next(err); }
}

async function getSubscribers(req, res, next) {
  try {
    const subs = await Newsletter.find().sort({ createdAt: -1 });
    res.json(subs);
  } catch (err) { next(err); }
}

module.exports = { subscribe, getSubscribers };
