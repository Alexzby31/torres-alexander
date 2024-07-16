const express = require('express');
const mongoose = require('mongoose');
const lavanderiaSchema = require('../models/lavanderiaSh.js');
//import db from "./../database.js";

const router = express.Router();

router.post('/lavanderiaNew', (req, res) => {
    const { nombre, precioxKG, horaIni, horaFin, direccion, coordenadax, coordenaday } = req.body;
    const lavanderia = lavanderiaSchema({ nombre, precioxKG, horaIni, horaFin, direccion, coordenadax, coordenaday });
    lavanderia.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get('/lavanderias', (req, res) => {
    lavanderiaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


router.get('/lavanderia', (req, res) => {
    const id = req.query.id;
    lavanderiaSchema
    .findById({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.post('/lavanderiaUpd', (req, res) => {
var { id, nombre, precioxKG, horaIni, horaFin, direccion, coordenadax, coordenaday } = req.body;
    lavanderiaSchema
    .updateOne({ _id:id }, {$set: {nombre, precioxKG, horaIni, horaFin, direccion, coordenadax, coordenaday}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.post('/lavanderiaDlt', (req, res) => {
    const { id } = req.body;
    lavanderiaSchema
    .findByIdAndDelete({ _id:id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;