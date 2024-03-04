const express = require('express');
const router = express.Router();
const userController = require('./user.controller');

router.post('/signup', userController.signUp);

module.exports = router;
