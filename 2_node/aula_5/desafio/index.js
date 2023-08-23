const express = require('express');
const app = express();
const routes = require('./routes');

require('./startup/db')();
require('./startup/routes')(app);

const port = 8080;

routes(app);

const server = app.listen(port, () => console.log(`Listening on port http://localhost:${port}/`));

module.exports = server;