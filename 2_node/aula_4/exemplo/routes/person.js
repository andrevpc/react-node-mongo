const express = require('express');
const PersonController = require('../controller/PersonController');
const router = express.Router();

router
    .get('/api/person', PersonController.getAllPeople)
    .get('/api/person/:id', PersonController.getById)
    .post('/api/person', PersonController.create)
    .patch('/api/person/:id', PersonController.updateById)
    .delete('/api/person/:id', PersonController.deleteById)
    
module.exports = router;