const express = require('express');
const app = express();
const routes = require('./routes');

require('./startup/db')();

const port = 8080;

routes(app);

const server = app.listen(port, () => console.log(`Listening on port http://localhost:${port}/`));
module.exports = server;