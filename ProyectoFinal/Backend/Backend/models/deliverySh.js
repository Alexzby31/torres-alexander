const mongoose = require('mongoose');

const deliverySchema = mongoose.Schema({
  name: String,
  nota: Number, 
  cantidadVotos: Number
});

module.exports = mongoose.model('Delivery', deliverySchema);