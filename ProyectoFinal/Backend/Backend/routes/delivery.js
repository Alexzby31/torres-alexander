const express = require('express');
const mongoose = require('mongoose');
const deliverySchema = require('../models/deliverySh.js');

const router = express.Router();

router.post('/deliveryNew', (req, res) => {
    const { name } = req.body;
    let nota = 0;
    let cantidadVotos = 0;
    const delivary = deliverySchema({ name, nota, cantidadVotos });
    delivary.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get('/deliverys', (req, res) => {
    deliverySchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get('/delivery', (req, res) => {
    const id = req.query.id;
    deliverySchema
    .findById({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.post('/deliveryUpd', (req, res) => {
var { id, name } = req.body;
deliverySchema
    .updateOne({ _id:id }, {$set: {name}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.post('/deliveryDlt', (req, res) => {
    const { id } = req.body;
    deliverySchema
    .findByIdAndDelete({ _id:id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router; 