const bodyParser = require('body-parser');
const car = require('./car');
const sportingGoods = require('./sportingGoods');

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        car,
        sportingGoods
    )
}