const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const CryptoJS = require("crypto-js")

class PersonController {
    static async register(req, res) {
        var bytes = CryptoJS.AES.decrypt(req.body.jsonCryptd, process.env.SECRET)
        const decryptd = bytes.toString(CryptoJS.enc.Utf8)
        const json = JSON.parse(decryptd)
        const { name, email, password } = json

        const newPassword = CryptoJS.AES.encrypt(password, process.env.SECRET_DB).toString()

        // const salt = await bcrypt.genSalt(12);
        // const newPassword = await bcrypt.hash(password, salt);

        const user = new User({
            name,
            email,
            password: newPassword
        });

        try {
            await user.save();
            res.status(201).send({ message: "Usuário cadastrado com sucesso" });
        } catch (error) {
            return res.status(500).send({ message: "Something failed" })
        }
    }
    static async login(req, res) {
        var bytes = CryptoJS.AES.decrypt(req.body.jsonCryptd, process.env.SECRET)
        const decryptd = bytes.toString(CryptoJS.enc.Utf8)
        const json = JSON.parse(decryptd)
        const { email, password } = json

        if(!email)
            return res.status(422).json({ message: "O email é obrigatório" })
        if(!password)
            return res.status(422).json({ message: "A senha é obrigatório" })

        const user = await User.findOne({ email })

        if(!user)
            return res.status(422).json({ message: "Usuário/Senha inválido" })
        
        // if(!await bcrypt.compare(password, user.password))
        if(CryptoJS.AES.decrypt(user.password, process.env.SECRET) === password)
            return res.status(422).json({ message: "Usuário/Senha inválido" })

        try {
            const secret = process.env.SECRET
            const token = jwt.sign(
                {
                    id: user._id,
                },
                secret,
                {
                    expiresIn: '2 days'
                }
            );
            return res.status(200).send({ token })
        } catch (error) {
            console.log(error)
            return res.status(500).send({ message: "Something failed" })
        }
    }
}

module.exports = PersonController;