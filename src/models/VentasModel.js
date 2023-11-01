const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
    fechaVenta: Date,
    estatus: {
        type: String,
        enum: ['Pagado', 'No Pagado', 'Devuelto'],
    },
    tipoPago: {
        type: String,
        enum: ['Contado', 'Credito'],
    },
    mesesPorCobro: String,
    mesesPorPago: String,

    vendedor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendedores',
    },
    vehiculo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehiculos',
    },
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Clientes',
    },
});

const Venta = mongoose.model('Ventas', ventaSchema);

module.exports = Venta;