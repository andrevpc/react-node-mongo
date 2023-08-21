const express = require('express');
const router = express.Router();
const CarController = require('../controller/CarController');

router
    .get('/api/car', CarController.getAllCars)
    .get('/api/car/:id', CarController.getById)
    .post('/api/car', CarController.create)
    .patch('/api/car/:id', CarController.updateById)
    .delete('/api/car/:id', CarController.deleteById)

module.exports = router;