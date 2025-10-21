require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); //soporte para json
app.use(bodyParser.urlencoded({ extended: true })); //soporte para formData (datos de formulario)

const PORT = process.env.PORT || 3005;

//ruta raíz
app.get('/', (req, res) => {
    //res.send('Hola mundo..!!');
    res.send(`
        <h1>Curso de Express.js V3</h1>
        <p>Esto es una aplicación node.js con express.js</p>
        <p>Corre en el puerto ${PORT}</p>
        `);
});

//ruta dinámica
//URL: http://localhost:3000/users/3
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Mostrar información de usuario con ID = ${userId}`);
});

//obtención de datos por parámetros
//URL: http://localhost:3000/search?termino=expressjs&categoria=nodejs
app.get('/search', (req, res) => {
    const terms = req.params.termino || 'No especificado';
    const category = req.params.categoria || 'Todas';

    res.send(`
        <h2>Resultado de búsqueda</h2>
        <p>Término: ${terms}</p>
        <p>Categoría: ${category}</p>
        `);
});

//recepción de datos de formulario
app.post('/form', (req, res) => {
    const name = req.body.nombre || 'Anónimo';
    const email = req.body.email || 'No proporcionado';
    res.json({
        message : 'Datos recibidos',
        data: {
            name, 
            email
        }
    });
});

//recepción de datos de json
app.post('/api/data', (req, res) => {
    const data = req.body;

    if (!data || Object.keys(data).length == 0) {
        return res.status(400).json({ error : 'No se recibieron datos' })
    }

    res.status(201).json({
        message : 'Datos JSON recibido',
        data
    });
})

//arranque de servidor
app.listen(PORT, () => {
    console.log(`App de ejemplo escuchando en el puerto ${PORT}`)
});