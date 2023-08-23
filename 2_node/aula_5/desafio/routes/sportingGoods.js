const express = require('express');
const router = express.Router();
const SportingGoodsController = require('../controller/SportingGoodsController');

router
    .get('/api/sportingGoods', SportingGoodsController.getAllSportingGoods)
    .get('/api/sportingGoods/:id', SportingGoodsController.getById)
    .post('/api/sportingGoods', SportingGoodsController.create)
    .patch('/api/sportingGoods/:id', SportingGoodsController.updateById)
    .delete('/api/sportingGoods/:id', SportingGoodsController.deleteById)

module.exports = router;