const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

class PersonController {
    static async register(req, res) {
        const { name, email, password } = req.body

        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);

        const user = new User({
            name,
            email,
            password: passwordHash
        });

        try {
            await user.save();
            res.status(201).send({ message: "Usuário cadastrado com sucesso" });
        } catch (error) {
            return res.status(500).send({ message: "Something failed" })
        }
    }
    static async login(req, res) {
    //     const { email, password } = req.body

    //     if(!email)
    //         return res.status(422).json({ message: "O email é obrigatório" })
    //     if(!password)
    //         return res.status(422).json({ message: "A senha é obrigatório" })

    //     const user = await User.findOne({ email: email })

    //     if(!user)
    //         return res.status(422).json({ message: "Usuário/Senha inválido" })

    //     try {
    //         const secret = process.env.SECRET
    //         const token = jwt.sign(
    //             {
    //                 id: user._id,
    //             },
    //             secret,
    //             {
    //                 expiresIn: '2 days'
    //             }
    //         );
    //         return res.status(200).send({ token: token })
    //     } catch (error) {
    //         console.log(error)
    //         return res.status(500).send({ message: "Something failed" })
    //     }
    }
}

module.exports = PersonController;