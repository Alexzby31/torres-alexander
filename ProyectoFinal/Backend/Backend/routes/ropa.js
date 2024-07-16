const express = require('express');
const mongoose = require('mongoose');
const ropaSchema = require('../models/RopaSh.js');

const router = express.Router();

router.post('/ropaNew', (req, res) => {
    const { nombre, precio, tipo } = req.body;
    const ropa = ropaSchema({ nombre, precio, tipo });
    ropa.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get('/ropas', (req, res) => {
    ropaSchema
    .find()
    .then((data) => {
        const transformedData = data.map(item => {
          const ropaObject = item.toObject();
          ropaObject.precio = ropaObject.precio / 100;
          return ropaObject;
        });
        res.json(transformedData);
      })
    .catch((error) => res.json({ message: error }));
});

router.get('/ropa', (req, res) => {
    const id = req.query.id;
    ropaSchema
    .findById({_id:id})
    .then((data) => {
        if (!data) {
          return res.status(404).json({ message: 'Prenda no encontrada' });
        }
        const ropaObject = data.toObject();
        ropaObject.precio = ropaObject.precio / 100;
        res.json(ropaObject);
      })
    .catch((error) => res.json({ message: error }));
});

router.post('/ropaUpd', (req, res) => {
var { id, nombre, precio, tipo } = req.body;
    ropaSchema.findOneAndUpdate({ _id: id }, { $set: { nombre, precio, tipo } }, { new: true })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.post('/ropaDlt', (req, res) => {
    const { id } = req.body;
    ropaSchema
    .findByIdAndDelete({ _id:id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;