const mongoose = require('mongoose');

const prendaSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    tipo: String
  });

const facturaSchema = mongoose.Schema({
    clienteId: String,
    lavanderiaId: String, 
    deliveryId: String,
    fechaInicio: Date,
    fechaFin: Date,
    monto: Number,
    estado: String,
    prendas: [prendaSchema]
});

module.exports = mongoose.model('Factura', facturaSchema);