const mongoose = require('mongoose');
const { Schema, ObjectId } = mongoose;

const vendedorSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    correo: String,
    telefono: String,
    vehiculos: [
        {
            IDVehiculos: { type: ObjectId, ref: 'Vehiculos' }
        },
    ],
});

const Vendedor = mongoose.model('Vendedores', vendedorSchema);

module.exports = VendedoresModel;