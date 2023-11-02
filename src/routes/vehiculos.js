const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const Vehiculo = require('../models/VehiculosModel');

router.get('/', async (req, res) => {
    try {
        const items = await Vehiculo.find();
        res.json(items);
        console.log(items)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const item = await Vehiculo.findOne({ _id: req.params.id});
        res.json(item);
        console.log(item);
    } catch (err) {
        res.status(404).json({error: err.message});
    }
})

router.post('/', async (req, res) => {
    const newItemData = req.body;

    try {
        const newItem = new Vehiculo(newItemData);
        const result = await newItem.save();

        if (result) {
            res.status(201).json(result);
        } 
        else{
            res.status(500).json({ error: 'Error en la inserción de datos' });
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    const updatedItemData = req.body;
    
    try {
      const result = await Vehiculo.findOneAndUpdate({ IDVehiculos: (req.params.IDVehiculos) }, updatedItemData, { new: true });
      
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
    const result = await Vehiculo.findOneAndRemove({ _id: ObjectId(userId) });

    if (result) {
      res.json({ message: 'El vehiculo fue eliminado' });
    } else {
      res.status(404).json({ error: 'Vehiculo no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;