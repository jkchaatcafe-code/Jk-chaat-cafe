const express = require('express');
const crudFactory = require('../controllers/crudFactory');
const { protect } = require('../middleware/auth');
const Blog = require('../models/Blog');

const router = express.Router();
const ctrl = crudFactory(Blog, { publicFilter: { published: true }, searchFields: ['title', 'excerpt', 'tags'] });

function ensureSlug(req, res, next) {
  if (!req.body.slug && req.body.title) {
    req.body.slug = req.body.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  next();
}

// Public
router.get('/', ctrl.listPublic);
router.get('/:slug', ctrl.getOnePublic);

// Admin
router.get('/admin/all', protect, ctrl.listAdmin);
router.get('/admin/one/:id', protect, ctrl.getOneAdmin);
router.post('/', protect, ensureSlug, ctrl.create);
router.put('/:id', protect, ensureSlug, ctrl.update);
router.delete('/:id', protect, ctrl.remove);

module.exports = router;