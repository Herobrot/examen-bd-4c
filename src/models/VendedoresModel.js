const mongoose = require('mongoose');

const vendedorSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    correo: String,
    telefono: String,
    vehiculos: [
        {
            IDVehiculos: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehiculos' }
        },
    ],
});

const Vendedor = mongoose.model('Vendedores', vendedorSchema);

module.exports = Vendedor;