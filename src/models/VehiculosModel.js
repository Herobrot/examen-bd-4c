const mongoose = require('mongoose');

const vehiculoSchema = new mongoose.Schema({
    IDVehiculos: String,
    Modelo: String,
    año: Date,
    color: String,
    Precio: Number,
    Nuevo: Boolean,
});

const Vehiculos = mongoose.model('Vehiculos', vendedorSchema);

module.exports = VehiculosModel;