const express = require('express');
const app = express();
const port = 3000;

// Middleware 1: Logging de solicitudes
app.use((req, res, next) => {
    console.log(`Solicitada URL: ${req.url}`);
    next(); // Llama al siguiente middleware
});

// Middleware 2: Middleware de prueba
app.use((req, res, next) => {
    req.customProperty = 'Este es un valor de middleware';
    next(); // Llama al siguiente middleware
});

// Ruta de ejemplo
app.get('/', (req, res) => {
    res.send(`Middleware 2 dice: ${req.customProperty}`);
});

// Manejo de errores (opcional)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
