const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API de crud Aprendices funcionando');
});


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});