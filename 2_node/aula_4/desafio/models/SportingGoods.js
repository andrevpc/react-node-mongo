const mongoose = require('mongoose');

const SportingGoods = mongoose.model('SportingGoods', {
    name: String,
    price: Number,
    category: String,
    description: String
})

module.exports = SportingGoods;