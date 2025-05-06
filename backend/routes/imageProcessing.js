const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

router.post('/sharpen', imageController.sharpenImage);

module.exports = router;