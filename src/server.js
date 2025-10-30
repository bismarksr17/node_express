//importa ./app.js y configura el puerto para el servidor desde variables de entorno
const app = require('./app');
const PORT = process.env.PORT || 3005;

//inicia el servidor en el puerto configurado
app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});
