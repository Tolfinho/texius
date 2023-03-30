const express = require('express');

const app = express();

const port = 5000;

app.get('/', (req, res) => {
  res.send(`Servidor rodando na porta -> ${port}`);
});

app.listen(port, () => {
  console.log('Server rodando na porta -> ', port);
});
