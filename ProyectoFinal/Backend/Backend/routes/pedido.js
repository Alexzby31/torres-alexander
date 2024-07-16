const express = require('express');
const mongoose = require('mongoose');
const pedidoSchema = require('../models/pedidoSh.js');

const router = express.Router();

router.post('/pedidoNew', (req, res) => {
    const { clienteId, lavanderiaId, deliveryId, fechaInicio, fechaFin, monto, estado } = req.body;
    const pedido = pedidoSchema({ clienteId, lavanderiaId, deliveryId, fechaInicio, fechaFin, monto, estado });
    pedido.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get('/pedidos', (req, res) => {
    pedidoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get('/pedido', (req, res) => {
    const id = req.query.id;
    pedidoSchema
    .findById({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.post('/pedidoUpd', (req, res) => {
var { id, fechaFin, monto, estado } = req.body;
    pedidoSchema
    .updateOne({ _id:id }, {$set: {fechaFin, monto, estado}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.post('/pedidoDlt', (req, res) => {
    const { id } = req.body;
    pedidoSchema
    .findByIdAndDelete({ _id:id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;