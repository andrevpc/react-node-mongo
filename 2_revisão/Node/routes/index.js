const bodyParser = require('body-parser');
const wallet = require('./wallet');

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        wallet,
    )
}