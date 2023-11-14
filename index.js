// index.js
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res) => {
  // Производим перенаправление на нужный сайт
  res.redirect('https://eat3-6c2e9b61596b.herokuapp.com/');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
