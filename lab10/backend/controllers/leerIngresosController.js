// leerIngresosController.js
const express = require('express');
const router = express.Router();
const { ingresosDB } = require('./ingresosController'); // Importar ingresosDB desde ingresosController

// Endpoint para leer ingresos
router.get('/', (req, res) => {
    res.json(ingresosDB); // Devolver ingresos almacenados
});

module.exports = router;