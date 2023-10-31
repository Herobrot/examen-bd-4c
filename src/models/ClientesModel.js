const mongoose = require('mongoose');

// Definición del esquema del cliente
const clienteSchema = new mongoose.Schema({
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
    telefono: {
        type: String,
        unique: true,
    required: true,
    },
    direccion: {
    type: String,
    required: true,
    },
    fechaNacimiento: Date,
    historialCompras: [
        {
            fechaCompra: Date,
            producto: String,
            monto: Number,
        },
    ],
    creadoEn: {
    type: Date,
    default: Date.now,
  },
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;