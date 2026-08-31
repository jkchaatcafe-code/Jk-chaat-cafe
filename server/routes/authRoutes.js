const express = require('express');
const { body } = require('express-validator');
const validate = require('../middleware/validate');
const { protect } = require('../middleware/auth');
const { login, me, forgotPassword, resetPassword } = require('../controllers/authController');

const router = express.Router();

router.post('/login', [
  body('email').isEmail().withMessage('Enter a valid email'),
  body('password').notEmpty().withMessage('Password is required'),
], validate, login);

router.get('/me', protect, me);
router.post('/forgot-password', [body('email').isEmail()], validate, forgotPassword);
router.post('/reset-password/:token', [body('password').isLength({ min: 6 })], validate, resetPassword);

module.exports = router;
