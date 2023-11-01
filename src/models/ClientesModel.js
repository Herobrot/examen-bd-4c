const mongoose = require('mongoose');
const { Schema, ObjectId } = mongoose;

const clienteSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    correo: String,
    telefono: String,
    direccion: String,
    fechaNacimiento: Date,
    historialCompras: [
        {
            IDVenta: { type: ObjectId, ref: 'Ventas' }
        },
    ],
});

const Cliente = mongoose.model('Clientes', clienteSchema);

module.exports = ClientesModel;