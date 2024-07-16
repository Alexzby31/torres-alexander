const mongoose = require('mongoose');

const clienteSchema = mongoose.Schema({
  nombre: String,
  apellido: String, 
  identificacion: String,
  direccion: String,
  coordenadasX: String,
  coordenadasy: String
});

module.exports = mongoose.model('cliente', clienteSchema);