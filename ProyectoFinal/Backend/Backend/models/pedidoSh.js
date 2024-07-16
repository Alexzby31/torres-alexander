const mongoose = require('mongoose');

const pedidoSchema = mongoose.Schema({
    clienteId: String,
    lavanderiaId: String, 
    deliveryId: String,
    fechaInicio: Date,
    fechaFin: Date,
    monto: Number,
    estado: String
});

module.exports = mongoose.model('Pedido', pedidoSchema);