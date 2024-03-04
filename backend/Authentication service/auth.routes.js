const express = require('express');
const router = express.Router();
const authController = require('./auth.controller');

router.post('/signin', authController.signIn);

module.exports = router;
