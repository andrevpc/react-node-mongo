const express = require('express');
const router = express.Router();

const people = [];

router
    .get('/api/person/first', (req, res) => {
        console.log(5 + 7);
        return // http://localhost:8080/api/person/first
    })
    .post('/api/person', (req, res) => {
        const { name, lastname, salary } = req.body;

        if (!name || !lastname || !salary)
            return res.status(400).send({ message: "Dados inválidos" })

        const person = {
            id: people.length,
            name: name,
            lastname: lastname,
            salary: salary
        }
        people.push(person);
        return res.status(201).send({ message: "Pessoa inserida com sucesso" }); //http://localhost:8080/api/person no postman
    })
    .get('/api/person', (req, res) => {
        console.log(people)
        return res.status(200).send({ data: people });
    });

module.exports = router