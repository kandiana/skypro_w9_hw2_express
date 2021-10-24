const fs = require('fs');
const path = require('path');
const { secretFolder } = require('../../config');

module.exports = (req, res) => {
  const { id: secretId, eternal } = req.params;
  const pathToSecret = path.resolve(secretFolder, `${secretId}.txt'`);
  const pageTitle = 'Секрет';
  let secretContent;

  if (fs.existsSync(pathToSecret)) {
    secretContent = fs.readFileSync(pathToSecret, 'utf8');

    if (eternal === 'false') {
      fs.unlinkSync(pathToSecret);
    }
  }

  return res.render('secret', { pageTitle, secretContent });
};
