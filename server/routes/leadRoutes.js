const express = require('express');
const { body } = require('express-validator');
const validate = require('../middleware/validate');
const { protect, requireRole } = require('../middleware/auth');
const { createLead, getLeads, updateLeadStatus, deleteLead } = require('../controllers/leadController');

const router = express.Router();

const leadValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('phone').trim().notEmpty().withMessage('Phone number is required')
    .isLength({ min: 8, max: 15 }).withMessage('Enter a valid phone number'),
  body('email').optional({ checkFalsy: true }).isEmail().withMessage('Enter a valid email'),
];

// Public — hit directly by the website forms
router.post('/contact', leadValidation, validate, createLead('contact'));
router.post('/franchise-application', leadValidation, validate, createLead('franchise_application'));
router.post('/popup', leadValidation, validate, createLead('popup'));

// Admin — requires JWT
router.get('/', protect, getLeads);
router.patch('/:id/status', protect, updateLeadStatus);
router.delete('/:id', protect, requireRole('superadmin'), deleteLead);

module.exports = router;
