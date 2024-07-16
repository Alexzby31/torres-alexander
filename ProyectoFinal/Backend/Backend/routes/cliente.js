const express = require('express');
const mongoose = require('mongoose');
const clienteSchema = require('../models/clienteSh.js');

const router = express.Router();

router.post('/clienteNew', (req, res) => {
    const { nombre, apellido, identificacion, direccion, coordenadax, coordenaday } = req.body;
    const cliente = clienteSchema({ nombre, apellido, identificacion, direccion, coordenadax, coordenaday });
    cliente.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get('/clientes', (req, res) => {
    clienteSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get('/cliente', (req, res) => {
    const id = req.query.id;
    clienteSchema
    .findById({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.post('/clienteUpd', (req, res) => {
var { id, nombre, apellido, identificacion, direccion, coordenadax, coordenaday } = req.body;
    clienteSchema
    .updateOne({ _id:id }, {$set: {nombre, apellido, identificacion, direccion, coordenadax, coordenaday}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.post('/clienteDlt', (req, res) => {
    const { id } = req.body;
    clienteSchema
    .findByIdAndDelete({ _id:id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;