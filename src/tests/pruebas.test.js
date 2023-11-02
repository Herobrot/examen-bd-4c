const request = require('supertest');
const express = require('express');
const app = express();
const router = require('./ClientesRoutes'); // Reemplaza con la ubicación real de tus rutas
app.use('/', router);

describe('Clientes Routes', () => {
  let existingClient = null; // Variable para almacenar los datos de un cliente existente

  it('should get all clients', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);

    if (response.body.length > 0) {
      existingClient = response.body[0]; // Almacena los datos de un cliente existente
    }
  });

  it('should create a new client', async () => {
    const newClient = {
      // Proporciona los datos que desees usar para crear un nuevo cliente
    };

    const response = await request(app)
      .post('/')
      .send(newClient);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
    // Puedes agregar más aserciones según tu caso de uso específico
  });

  it('should update an existing client', async () => {
    if (existingClient) {
      const updatedClient = {
        // Proporciona los datos que desees usar para actualizar el cliente existente
      };

      const response = await request(app)
        .put(`/${existingClient._id}`)
        .send(updatedClient);

      expect(response.status).toBe(200);
      expect(response.body).toEqual(updatedClient);
      // Asegúrate de manejar adecuadamente los casos en los que el cliente no existe
    } else {
      // Si no hay clientes existentes, no se puede realizar esta prueba
      return;
    }
  });

  it('should delete an existing client', async () => {
    if (existingClient) {
      const response = await request(app).delete(`/${existingClient._id}`);

      expect(response.status).toBe(200);
      expect(response.body).toEqual({ message: 'El usuario fue eliminado' });
      // Asegúrate de manejar adecuadamente los casos en los que el cliente no existe
    } else {
      // Si no hay clientes existentes, no se puede realizar esta prueba
      return;
    }
  });
});
