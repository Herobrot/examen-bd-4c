const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    correo: String,
    telefono: String,
    direccion: String,
    fechaNacimiento: Date,
    historialCompras: [
        {
            IDVenta: { type: mongoose.Schema.Types.ObjectId, ref: 'Ventas' }
        },
    ],
});

const Cliente = mongoose.model('Clientes', clienteSchema);

module.exports = Cliente;