const mongoose = require('mongoose');

const artists = mongoose.Schema({
    name: String,
    birthDay: String
})

const credits = mongoose.Schema({
    author: artists,
    features: [artists],
    producers: [artists]
})

const label = mongoose.Schema({
    name: String,
    address: String,
    cnpj: String
})

const music = mongoose.Schema({
    name: String,
    credits: credits,
    label: label,
    duration: Number,
    released: String,
    genre: [String]
})

const Music = mongoose.model('Music', music);

module.exports = Music;