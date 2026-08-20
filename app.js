const express = require('express');
const app = express();
require('dotenv');
const port = process.env.PORT || 3111;
//libreria para leer archivo
const sistemaArchivo = require('fs');
const ruta =require('path');
//generar la ruta para el archivo aprendices.json
const rutaArchivoJson = ruta.join(__dirname, 'Lista_Datos.json');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API de crud Aprendices funcionando');
});
app.get('/api/Aprendices', (req, res) => {
  sistemaArchivo.readFile(rutaArchivoJson, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return res.status(500).json({ error: 'Error al leer el archivo' });
    }
    const aprendices = JSON.parse(data);
    res.json(aprendices);
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});