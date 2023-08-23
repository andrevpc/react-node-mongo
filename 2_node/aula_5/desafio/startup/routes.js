const express = require('express');
const car = require("../routes/car")
const sportingGoods = require("../routes/sportingGoods")

module.exports = function (app) {
    app.use(express.json());
    app.use('/api/car', car);
    app.use('/api/sportingGoods', sportingGoods);
}