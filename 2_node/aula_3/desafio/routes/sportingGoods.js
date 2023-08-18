const express = require('express');
const router = express.Router();
const SportingGoods = require('../models/SportingGoods');

router
    .get('/api/sportingGoods', async (req, res) => {
        try {
            const sportingGoods = await SportingGoods.find();
            return res.status(200).send({ data: sportingGoods });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    })
    .get('/api/sportingGoods/:id', async (req, res) => {
        const { id } = req.params;

        try {
            const sportingGoods = await SportingGoods.findById(id);
            return res.status(200).json(sportingGoods);
        } catch (error) {
            res.status(500).json({ error: error })
        }
    })
    .post('/api/sportingGoods', async (req, res) => {
        const { name, price, category, description } = req.body;
        if (!name || !price || !category || !description)
            return res.status(400).send({ message: "Dados inválidos" })
        const sportingGoods = {
            name: name,
            price: price,
            category: category,
            description: description
        }
        try {
            const p = await SportingGoods.create(sportingGoods);
            return res.status(201).send({ message: "SportingGoods inserted successfully", body: p });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    })
    .patch('/api/sportingGoods/:id', async (req, res) => {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ message: "No id provided" })

        const sportingGoods = req.body;
        if (!sportingGoods.name || !sportingGoods.price || !sportingGoods.category || !sportingGoods.description)
            return res.status(400).send({ message: "Data missing" })

        try {
            const newSportingGoods = await SportingGoods.findByIdAndUpdate(
                id,
                {
                    name: sportingGoods.name, name: sportingGoods.name,
                    price: sportingGoods.price, category: sportingGoods.category,
                    description: sportingGoods.description
                }
            );
            return res.status(201).send(newSportingGoods);
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    })
    .delete('/api/sportingGoods/:id', async (req, res) => {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ message: "No id provided" });

        try {
            await SportingGoods.findByIdAndRemove(id);
            return res.status(200).send({ message: "SportingGoods deleted successfully" })
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Something failled" })
        }
    })

module.exports = router;