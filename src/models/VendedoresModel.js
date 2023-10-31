const mongoose = require('mongoose');

const vendedorSchema = new mongoose.Schema({
    IDVendedor: {
        type: String,
        unique: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        unique: true,
        required: true,
    },
    telefono: String,
    direccion: String,
    fechaNacimiento: Date,
    turno: {
        type: String,
        enum: ['mañana', 'tarde'], 
    },
    creadoEn: {
        type: Date,
        default: Date.now,
    },
});

const Vendedor = mongoose.model('Vendedor', vendedorSchema);

module.exports = Vendedor;