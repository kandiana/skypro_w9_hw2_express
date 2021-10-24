const path = require('path');

const PORT = process.env.PORT || 3000;
const secretFolder = path.resolve(__dirname, '../secrets');
const modules = path.resolve(__dirname, '../../node_modules/');

module.exports = {
  PORT,
  secretFolder,
  modules,
};
