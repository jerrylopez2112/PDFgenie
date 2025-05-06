const express = require('express');
const router = express.Router();
const pdfController = require('../controllers/pdfController');

router.post('/merge', pdfController.mergePDFs);
router.post('/split', pdfController.splitPDF);

module.exports = router;