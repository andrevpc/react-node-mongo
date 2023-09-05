const express = require('express');
const router = express.Router();

const Wallet = require('../models/Wallet');

router
    .get('/api/wallet', async (req, res) => {
        try {
            const wallets = await Wallet.find();
            return res.status(200).send({ data: wallets });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    })
    .get('/api/wallet/:id', async (req, res) => {
        const { id } = req.params;

        try {
            const wallet = await Wallet.findById(id);
            return res.status(200).json(wallet);
        } catch (error) {
            res.status(500).json({ error: error })
        }
    })
    .post('/api/wallet', async (req, res) => {
        const { name, description, currentBalance } = req.body;
        if (!name || !description || !currentBalance)
            return res.status(400).send({ message: "Invalid data" })
        const wallet = {
            name: name,
            creationDate: new Date(),
            description: description,
            currentBalance: currentBalance,
            transactionList: [],
            monthList: []
        }
        try {
            const p = await Wallet.create(wallet);
            return res.status(201).send({ message: "Wallet inserted successfully", body: p });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    })
    .patch('/api/wallet/transaction/:id', async (req, res) => {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ message: "No id provided" })

        const transaction = req.body;
        try {
            const wallet = await Wallet.findById(id);
            const newBalance = wallet.currentBalance - transaction.value
            const newTransaction = {
                date: new Date(),
                value: transaction.value,
                currentBalance: newBalance
            }
            const updatedWallet = await Wallet.findByIdAndUpdate(
                id,
                {
                    currentBalance: newBalance,
                    $push: {
                        transactionList: newTransaction
                    }
                }
            );
            return res.status(201).send(updatedWallet);
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    })
    .patch('/api/wallet/months/:id', async (req, res) => {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ message: "No id provided" })

        const month = req.body;
        try {
            const wallet = await Wallet.findById(id);
            const updatedWallet = await Wallet.findByIdAndUpdate(
                id,
                {
                    $push: {
                        monthList: {
                            name: month.name,
                            monthlyValue: wallet.currentBalance
                        }
                    }
                }
            );
            return res.status(201).send(updatedWallet);
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    })
    .delete('/api/wallet/:id', async (req, res) => {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ message: "No id provider" });

        try {
            await Wallet.findByIdAndRemove(id);
            return res.status(200).send({ message: "Wallet deleted successfully" })
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Something failed" })
        }
    })

module.exports = router;