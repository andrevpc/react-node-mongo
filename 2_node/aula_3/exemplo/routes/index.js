const bodyParser = require('body-parser');
const person = require('./person');
const number = require('./number');

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        person,
        number
    )
}