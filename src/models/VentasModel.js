const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
    IDVenta: {
        type: String,
        unique: true,
    },
    fechaVenta: {
        type: Date,
        required: true,
    },
    montoVenta: {
        type: Number,
        required: true,
    },
    tipoPago: {
        type: String,
        enum: ['Contado', '3-Meses', '6-Meses', '12-Meses'],
        required: true,
    },
    devoluciones: [
        {
            fechaDevolucion: Date,
            montoDevolucion: Number,
            motivo: String,
        },
    ],
});

const Venta = mongoose.model('Venta', ventaSchema);

module.exports = Venta;