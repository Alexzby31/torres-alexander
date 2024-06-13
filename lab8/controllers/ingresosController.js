// ingresosController.js
const express = require('express');
const router = express.Router();

// Pseudo-base de datos para almacenar ingresos
let ingresosDB = [];

// Endpoint para almacenar ingresos
router.post('/', (req, res) => {
    const { cantidad } = req.body;
    ingresosDB.push({ cantidad });
    res.send('Ingreso almacenado correctamente.');
});

module.exports = { ingresosDB }; // Exportar la variable ingresosDB