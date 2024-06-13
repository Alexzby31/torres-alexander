// egresosController.js
const express = require('express');
const router = express.Router();

// Pseudo-base de datos para almacenar egresos
let egresosDB = [];

// Endpoint para almacenar egresos
router.post('/', (req, res) => {
    const { cantidad } = req.body;
    egresosDB.push({ cantidad });
    res.send('Egreso almacenado correctamente.');
});

module.exports = { egresosDB }; // Exportar la variable ingresosDB