const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

const uri = "mongodb+srv://223208:Jaguares34.1@cluster0.swir3km.mongodb.net/pruebapsico";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Error en la conexión a la base de datos MongoDB:', error);
});

db.once('open', () => {
  console.log('Conexión exitosa a la base de datos MongoDB.');
});

app.use(express.json());


const apiRouterClientes = require('./routes/clientes'); 
app.use('/clientes', apiRouterClientes);

const apiRouterVehiculos = require('./routes/vehiculos');
app.use('/vehiculos', apiRouterVehiculos);

const apiRouterVendedores = require('./routes/vendedores'); 
app.use('/vendedores', apiRouterVendedores);

const apiRouterVentas = require('./routes/ventas');
app.use('/ventas', apiRouterVentas);

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
 