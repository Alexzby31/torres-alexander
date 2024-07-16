const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/productos', (req, res) => {
    const filePath = path.join(__dirname, '../data/productos.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error al leer el archivo de productos', error: err });
        }
        const productos = JSON.parse(data);
        res.json(productos);
    });
});

module.exports = router;
