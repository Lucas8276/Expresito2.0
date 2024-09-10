const express = require('express');
const app = express();
const port = 3000;

// Middleware de logging
app.use((req, res, next) => {
    console.log(`[Historial] ${req.method} solicitud echa a  ${req.url}`);
    next(); // Pasa al siguiente middleware o ruta
});

// Middleware de autenticación
app.use('/protegido', (req, res, next) => {
    const isAuthenticated = req.query.artista === 'metallica'; // Simulación de autenticación

    if (isAuthenticated) {
        next(); // Usuario autenticado, pasa al siguiente middleware o ruta
    } else {
        res.status(401).send('No estás autenticado flaquito'); // Usuario no autenticado
    }
});

// Ruta pública
app.get('/', (req, res) => {
    res.send('¡Bienvenido Master off  Puppets!');
});

// Ruta protegida
app.get('/protegido', (req, res) => {
    res.send('¡Acceso concedido a la ruta protegida campeeeonn!');
});

// Ruta no encontrada
app.use((req, res) => {
    res.status(404).send('Página no encontrada');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
