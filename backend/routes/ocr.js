const express = require('express');
const router = express.Router();
const ocrController = require('../controllers/ocrController');

router.post('/scan', ocrController.scanImage);

module.exports = router;