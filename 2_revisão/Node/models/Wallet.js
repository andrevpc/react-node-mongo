const mongoose = require('mongoose');

const transactions = mongoose.Schema({
    date: Date,
    value: Number,
    currentBalance: Number,
})

const month = mongoose.Schema({
    name: String,
    monthlyValue: Array
})

const wallet = mongoose.Schema({
    name: String,
    creationDate: Date,
    description: String,
    currentBalance: Number,
    transactionList: [transactions],
    monthList: [month]
})

const Wallet = mongoose.model('Wallet', wallet);

module.exports = Wallet;