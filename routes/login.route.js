const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login.controller');

router.post('/signup', loginController.signUp);
router.post('/signin', loginController.signIn);

module.exports = router;
