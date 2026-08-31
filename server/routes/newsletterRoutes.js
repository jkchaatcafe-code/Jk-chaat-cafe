const express = require('express');
const { body } = require('express-validator');
const validate = require('../middleware/validate');
const { protect } = require('../middleware/auth');
const { subscribe, getSubscribers } = require('../controllers/newsletterController');

const router = express.Router();

router.post('/', [body('email').isEmail().withMessage('Enter a valid email')], validate, subscribe);
router.get('/', protect, getSubscribers);

module.exports = router;
