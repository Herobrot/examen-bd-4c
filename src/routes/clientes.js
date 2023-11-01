const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').ObjectId;

const Cliente = require('../models/ClientesModel');

router.get('/', async (req, res) => {
  try {
    const items = await Cliente.find();
    res.json(items);
    console.log(items)
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  const newItemData = req.body;

  try {
    const newItem = new Cliente(newItemData);
    const result = await newItem.save();

    if (result) {
      res.status(201).json(result);
    } else {
      res.status(500).json({ error: 'Error en la inserción de datos' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
    const updatedItemData = req.body;
    
    try {
      const result = await Cliente.findOneAndUpdate({ _id: ObjectId(req.params.id) }, updatedItemData, { new: true });
      
      if (result) {
        res.json(result);
      } else {
        res.status(404).json({ error: 'Objeto no encontrado' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

router.delete('/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const result = await Cliente.findOneAndRemove({ _id: ObjectId(userId) });

    if (result) {
      res.json({ message: 'El usuario fue eliminado' });
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
