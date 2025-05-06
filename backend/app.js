const express = require('express');
const fileUpload = require('express-fileupload');
const pdfRoutes = require('./routes/pdfTools');
const ocrRoutes = require('./routes/ocr');
const imageRoutes = require('./routes/imageProcessing');

const app = express();
app.use(fileUpload());
app.use(express.json());

app.use('/api/pdf', pdfRoutes);
app.use('/api/ocr', ocrRoutes);
app.use('/api/image', imageRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});