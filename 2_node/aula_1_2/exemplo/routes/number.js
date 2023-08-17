const express = require('express');
const router = express.Router();

router
    .get('/number/params/:numero?', (req, res) => { // "?" serve para o dado ser opcional
        const { numero } = req.params
        res.send(`Número recebido: ${numero}`); // http://localhost:8080/number/params/17
    })
    .get('/number/query', (req, res) => {
        const { numero } = req.query
        res.send(`Número recebido: ${numero}`); // http://localhost:8080/number/query?numero=1234
    })

module.exports = router