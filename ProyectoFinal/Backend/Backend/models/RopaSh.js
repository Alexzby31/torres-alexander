const mongoose = require('mongoose');

const ropaSchema = mongoose.Schema({
    nombre: String,
    precio: Number,
    tipo: String
});

ropaSchema.pre('save', async function (next) {
    this.precio = this.precio*100;
    next();
});

ropaSchema.pre('findOneAndUpdate', function(next) {
    const update = this.getUpdate();
    if (update.$set && update.$set.precio) {
      update.$set.precio = update.$set.precio * 100;
    }
    next();
});  

module.exports = mongoose.model('Ropa', ropaSchema);
