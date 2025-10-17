require('dotenv').config();

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    //res.send('Hola mundo..!!');
    res.send(`
        <h1>Curso de Express.js V3</h1>
        <p>Esto es una aplicación node.js con express.js</p>
        <p>Corre en el puerto ${PORT}</p>
        `);
});

app.listen(PORT, () => {
    console.log(`App de ejemplo escuchando en el puerto ${PORT}`)
});