const bodyParser = require('body-parser');
const person = require('./person');
const auth = require('./auth')

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        person,
        auth
    )
}