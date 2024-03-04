const express = require('express');
const router = express.Router();
const contactService = require('../services/contact/contact.service');

// Contact Form Submission
router.post('/submit', contactService.submitContactForm);

module.exports = router;
