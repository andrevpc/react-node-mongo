const bodyParser = require('body-parser');
const music = require('./music');

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        music,
    )
}