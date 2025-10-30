//importa express
const express = require('express');
//importa las ruta en ./routes
const routes = require('./routes');

//crea una instancia de express
const app = express();

//middleware para parsear JSON
app.use(express.json());

//monta las rutas importadas en /api
app.use('/api', routes);

//ruta de endpoint raiz
app.get('/', (req, res) => {
    res.send('Hello World!')
});

//exporta la app
module.exports = app;