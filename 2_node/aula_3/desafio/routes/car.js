const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

router
    .get('/api/car', async (req, res) => {
        try {
            const cars = await Car.find();
            return res.status(200).send({ data: cars });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    })
    .get('/api/car/:id', async (req, res) => {
        const { id } = req.params;

        try {
            const car = await Car.findById(id);
            return res.status(200).json(car);
        } catch (error) {
            res.status(500).json({ error: error })
        }
    })
    .post('/api/car', async (req, res) => {
        const { name, manufacturer, km, color, engine, model, category } = req.body;
        if (!name || !manufacturer || !km || !color || !engine || !model || !category)
            return res.status(400).send({ message: "Dados inválidos" })
        const car = {
            name: name,
            manufacturer: manufacturer,
            km: km,
            color: color,
            engine: engine,
            model: model,
            category: category
        }
        try {
            const p = await Car.create(car);
            return res.status(201).send({ message: "Car inserted successfully", body: p });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    })
    .patch('/api/car/:id', async (req, res) => {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ message: "No id provided" })

        const car = req.body;
        if (!car.name || !car.manufacturer || !car.km || !car.color || !car.engine || !car.model || !car.category)
            return res.status(400).send({ message: "Data missing" })

        try {
            const newCar = await Car.findByIdAndUpdate(
                id,
                { name: car.name, manufacturer: car.manufacturer, km: car.km, color: car.color, engine: car.engine, model: car.model, category: car.category }
            );
            return res.status(201).send(newCar);
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    })
    .delete('/api/car/:id', async (req, res) => {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ message: "No id provided" });

        try {
            await Car.findByIdAndRemove(id);
            return res.status(200).send({ message: "Car deleted successfully" })
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Something failled" })
        }
    })

module.exports = router;