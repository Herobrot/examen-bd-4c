const mongoose = require('mongoose');

const vehiculoSchema = new mongoose.Schema({
    IDVehiculos: {
        type: String,
        unique: true,
    },
    modelo: {
        type: String,
        required: true,
    },
    año: {
        type: Number,
        required: true,
    },
        color: String,
    precio: {
        type: Number,
        required: true,
        },
    usado: {
        type: Boolean,
        default: false,
    },
    creadoEl: {
        type: Date,
        default: Date.now,
    },
});

const Vehiculo = mongoose.model('Vehiculo', vehiculoSchema);

module.exports = Vehiculo;