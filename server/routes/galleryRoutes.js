const express = require('express');
const crudFactory = require('../controllers/crudFactory');
const { protect } = require('../middleware/auth');
const GalleryItem = require('../models/GalleryItem');

const router = express.Router();
const ctrl = crudFactory(GalleryItem);

router.get('/', ctrl.listPublic);
router.get('/admin/all', protect, ctrl.listAdmin);
router.post('/', protect, ctrl.create);
router.put('/:id', protect, ctrl.update);
router.delete('/:id', protect, ctrl.remove);

module.exports = router;
