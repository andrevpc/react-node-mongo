const mongoose = require('mongoose');

const Person = mongoose.model('Car', {
    name: String,
    manufacturer: String,
    km: Number,
    color: String,
    engine: { cylinders: String, size: String },
    model: String,
    category: String
})

module.exports = Person;