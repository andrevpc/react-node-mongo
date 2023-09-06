const express = require('express');
const router = express.Router();

const Music = require('../models/Music');
const MusicController = require('../controller/MusicController')

router
    .get('/api/music', MusicController.getAll)
    .get('/api/music/:id', MusicController.getById)
    .post('/api/music', MusicController.create)
    .patch('/api/music/label/:id', MusicController.updateLabelById)
    .delete('/api/music/:id', MusicController.deleteById)

module.exports = router;