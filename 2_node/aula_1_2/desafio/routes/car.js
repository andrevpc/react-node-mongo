const express = require('express');
const router = express.Router();

var cars = [];

router
    .post('/api/car', (req, res) => {
        const { name, manufacturer, km, color, engine, model, category } = req.body;

        if ( !name || !manufacturer || !km || !color || !engine || !model || !category )
            return res.status(400).send({ message: "Invalid data" })

        const car = {
            id: cars.length,
            name: name,
            manufacturer: manufacturer,
            km: km,
            color: color,
            engine: engine,
            model: model,
            category: category
        }
        cars.push(car);
        return res.status(201).send({ message: "Car inserted successfully" }); //http://localhost:8080/api/car
        // {
        //     "name": "name",
        //     "manufacturer": "manufacturer",
        //     "km": "km",
        //     "color": "color",
        //     "engine": { "cylinders": "cylinders", "size": "size" },
        //     "model": "model",
        //     "category": "category"
        // }
    })
    .get('/api/car/:id', (req, res) => {
        const { id } = req.params
        const car = cars.filter((car) => { return car.id == id })
        return res.status(200).send({ data: car });
    })
    .get('/api/car', (req, res) => {
        return res.status(200).send({ data: cars });
    })
    .put('/api/car', (req, res) => {
        const { id, name, manufacturer, km, color, engine, model, category } = req.body;

        if ( !id )
            return res.status(400).send({ message: "Invalid data" })

        const carUpdated = {
            id: id,
            name: name,
            manufacturer: manufacturer,
            km: km,
            color: color,
            engine: engine,
            model: model,
            category: category
        }
        cars[id] = carUpdated
        return res.status(200).send({ data: cars });
    })
    .delete('/api/car/:id', (req, res) => {
        const { id } = req.params;
        cars = cars.filter((car) => { return car.id != id })
        return res.status(200).send({ data: cars });
    });

module.exports = router