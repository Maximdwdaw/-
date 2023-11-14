// index.js

module.exports = (req, res) => {
  // Производим перенаправление на нужную страницу
  res.writeHead(302, { Location: 'https://eat3-6c2e9b61596b.herokuapp.com/' });
  res.end();
};
