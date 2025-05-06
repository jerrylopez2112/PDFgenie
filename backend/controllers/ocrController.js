const Tesseract = require('tesseract.js');

exports.scanImage = (req, res) => {
  const file = req.files.image;

  Tesseract.recognize(file.data, 'eng')
    .then(({ data: { text } }) => {
      res.json({ text });
    })
    .catch((err) => res.status(500).send(err));
};