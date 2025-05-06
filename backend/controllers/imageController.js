const sharp = require('sharp');

exports.sharpenImage = (req, res) => {
  const file = req.files.image;

  sharp(file.data)
    .sharpen()
    .toBuffer()
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send(err));
};