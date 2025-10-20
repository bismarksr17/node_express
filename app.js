require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); //soporte para json
app.use(bodyParser.urlencoded({ extended: true })); //soporte para formData (datos de formulario)

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    //res.send('Hola mundo..!!');
    res.send(`
        <h1>Curso de Express.js V3</h1>
        <p>Esto es una aplicación node.js con express.js</p>
        <p>Corre en el puerto ${PORT}</p>
        `);
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Mostrar información de usuario con ID = ${userId}`);
});

app.get('/search', (req, res) => {
    const terms = req.params.termino || 'No especificado';
    const category = req.params.categoria || 'Todas';

    res.send(`
        <h2>Resultado de búsqueda</h2>
        <p>Término: ${terms}</p>
        <p>Categoría: ${category}</p>
        `);
});
//url: http://localhost:3000/search?termino=expressjs&categoria=nodejs


app.listen(PORT, () => {
    console.log(`App de ejemplo escuchando en el puerto ${PORT}`)
});