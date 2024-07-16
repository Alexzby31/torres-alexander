const express = require('express');
const mongoose = require('mongoose');
const facturaSchema = require('../models/facturaSh.js');

const router = express.Router();

router.post('/facturaNew', (req, res) => {
    const { clienteId, lavanderiaId, deliveryId, fechaInicio, fechaFin, monto, estado, prendas } = req.body;
    const factura = facturaSchema({ clienteId, lavanderiaId, deliveryId, fechaInicio, fechaFin, monto, estado, prendas });
    factura.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get('/facturas', (req, res) => {
    facturaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get('/factura', (req, res) => {
    const id = req.query.id;
    facturaSchema
    .findById({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.post('/facturaUpd', (req, res) => {
var { id, clienteId, lavanderiaId, deliveryId, fechaInicio, fechaFin, monto, estado, prendas } = req.body;
    facturaSchema
    .updateOne({ _id:id }, {$set: {clienteId, lavanderiaId, deliveryId, fechaInicio, fechaFin, monto, estado, prendas}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.post('/facturaDlt', (req, res) => {
    const { id } = req.body;
    facturaSchema
    .findByIdAndDelete({ _id:id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;