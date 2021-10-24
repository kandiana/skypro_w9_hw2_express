module.exports = (req, res) => {
  const pageTitle = 'Создай свой секрет';
  return res.render('home', { pageTitle });
};
