const Music = require('../models/Music');

class MusicController {
    static async create(req, res) {
        const { name, credits, label, duration, released, genre } = req.body;
        if (!name || !credits || !label || !duration || !released || !genre)
            return res.status(400).send({ message: "Invalid data" })
        const music = {
            name: name,
            credits: credits,
            label: label,
            duration: duration,
            released: released,
            genre: genre
        }
        try {
            const p = await Music.create(music);
            return res.status(201).send({ message: "Music inserted successfully", body: p });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }
    static async getAll(req, res) {
        try {
            const musics = await Music.find();
            return res.status(200).send({ data: musics });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }
    static async getById(req, res) {
        const { id } = req.params;

        try {
            const music = await Music.findById(id);
            return res.status(200).json(music);
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
    static async updateLabelById(req, res) {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ message: "No id provided" })

        const label = req.body;
        try {
            const updatedMusic = await Music.findByIdAndUpdate(
                id,
                {
                    label: label
                }
            );
            return res.status(201).send(updatedMusic);
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }
    static async deleteById(req, res) {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ message: "No id provider" });

        try {
            await Music.findByIdAndRemove(id);
            return res.status(200).send({ message: "Music deleted successfully" })
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Something failed" })
        }
    }
}

module.exports = MusicController