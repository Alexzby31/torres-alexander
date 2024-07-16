// leerEgresosController.js
const express = require('express');
const router = express.Router();
const { egresosDB } = require('./egresosController'); // Importar ingresosDB desde ingresosController

// Endpoint para leer egresos
router.get('/', (req, res) => {
    res.json(egresosDB); // Devolver egresos almacenados
});

module.exports = router;