const express = require('express');

const router = express.Router();
const userController = require('../controllers/auth.controller');

router.get('/test');

router.post('/register', userController.create);
router.post('/authenticate', userController.authenticate);
module.exports = router;
