const express = require('express');
const router = express.Router();
const Vendedor = require('../models/VendedoresModel');

router.get('/', async (req, res) => {
    try {
      const items = await Vendedor.find();
      res.json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
  try {
      const item = await Vendedor.findOne({ _id: req.params.id});
      res.json(item);
      console.log(item);
  } catch (err) {
      res.status(404).json({error: err.message});
  }
})
  
  router.post('/', async (req, res) => {
    const newItemData = req.body;
  
    try {
      const newItem = new Vendedor(newItemData);
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
      const itemId = req.params.id;
      const updatedItemData = req.body;
      
      try {
        const result = await Vendedor.findOneAndUpdate({ _id: itemId }, updatedItemData, { new: true });
        
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
      const result = await Vendedor.findOneAndRemove({ _id: userId });
  
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