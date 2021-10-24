const fs = require('fs');
const path = require('path');
const { secretFolder } = require('../../config');

const { v4: uuidv4 } = require('uuid');

module.exports = (req, res) => {
  const { secret, eternal } = req.body;
  const isEternal = eternal !== undefined;

  const fileName = uuidv4();
  fs.writeFileSync(path.resolve(secretFolder, `${fileName}.txt'`), secret);

  const hostUrl = `${req.protocol}://${req.get('host')}`;
  const linkToSecret = `${hostUrl}/secret/${fileName}/${isEternal}`;

  const pageTitle = 'Ссылка на секрет';

  res.render('link', { pageTitle, linkToSecret });
};
