// app.js
const express = require('express');
const app = express();

// Middleware para procesar JSON en las solicitudes
app.use(express.json());

// Importar controladores
const ingresosController = require('./controllers/ingresosController');
const leerIngresosController = require('./controllers/leerIngresosController');
const egresosController = require('./controllers/egresosController');
const leerEgresosController = require('./controllers/leerEgresosController');

// Rutas
app.use('/api/ingresos', ingresosController);
app.use('/api/ingresos', leerIngresosController);
app.use('/api/egresos', egresosController);
app.use('/api/egresos', leerEgresosController);

// Puerto en el que el servidor escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
