const app = require('./app');
const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});
