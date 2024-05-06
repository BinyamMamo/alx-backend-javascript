/**
 * Starts an Express.js server and listens for
 * incoming HTTP requests on the specified port.
 *
 * @module 6-http_express
 * @exports {object} app - The Express.js application instance.
 */
const express = require('express');

const PORT = 1245;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT);
module.exports = app;
