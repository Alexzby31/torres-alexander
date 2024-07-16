const mongoose = require('mongoose');

const lavanderiaSchema = mongoose.Schema({
  nombre: String,
  precioxKG: Number, 
  horaIni: Date,
  horaFin: Date,
  direccion: String,
  coordenadax: String,
  coordenaday: String
});

module.exports = mongoose.model('Lavanderia', lavanderiaSchema);